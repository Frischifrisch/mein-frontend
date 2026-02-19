const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OPENAI_API_KEY ist nicht gesetzt.' });
  }
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      { model: OPENAI_MODEL, messages },
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' } }
    );
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    const msg = err.response?.data?.error?.message || err.message;
    res.status(500).json({ error: msg });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));
