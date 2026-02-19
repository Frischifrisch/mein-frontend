const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Docker Model Runner (OpenAI-kompatibel) oder OpenAI als Fallback
const LLM_BASE_URL = process.env.LLM_BASE_URL || 'http://model-runner.docker.internal/engines/llama.cpp/v1';
const LLM_MODEL    = process.env.LLM_MODEL    || 'ai/gpt-oss:120B-UD-Q4_K_XL';
const LLM_API_KEY  = process.env.LLM_API_KEY  || 'no-key';

console.log(`Using LLM: ${LLM_BASE_URL} | Model: ${LLM_MODEL}`);

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  try {
    const response = await axios.post(
      `${LLM_BASE_URL}/chat/completions`,
      { model: LLM_MODEL, messages },
      { headers: { Authorization: `Bearer ${LLM_API_KEY}`, 'Content-Type': 'application/json' } }
    );
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    const msg = err.response?.data?.error?.message || err.message;
    res.status(500).json({ error: msg });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));
