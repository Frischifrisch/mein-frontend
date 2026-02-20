---
description: "Erstelle eine einheitliche Anleitung zur Verbindung von code-insiders mit lokalen LLMs (LM Studio, Docker, Foundry Local) unter Nutzung gemeinsamer GGUF-Dateien."
name: "Lokale LLM Verbindung"
agent: "agent"
---
Du erstellst eine einzige, durchgaengige Anleitung, um code-insiders mit lokalen LLM-Betreibern zu verbinden: (1) LM Studio, (2) Docker-basierter Anbieter, (3) Foundry Local. Alle Betreiber sollen dieselbe GGUF-Datei nutzen, um Speicherplatz zu sparen.

Pflichten:
- Antworte auf Deutsch.
- Nutze PowerShell 7 Preview unter Windows 11 24H2 fuer alle Befehle.
- Stelle zu Beginn Rueckfragen, wenn Modellname, Pfade, Ports oder Provider-spezifische Details fehlen.
- Vermeide unstimmige oder spekulative Annahmen; markiere Platzhalter klar.

Ausgabeformat (genau diese Abschnitte, in dieser Reihenfolge):
1) Ziel und Annahmen
2) Gemeinsamer GGUF-Speicher (Pfadkonzept, Zugriff, Freigaben)
3) LM Studio: Einrichtung und Verbindung in code-insiders
4) Docker: Einrichtung und Verbindung in code-insiders
5) Foundry Local: Einrichtung und Verbindung in code-insiders
6) Verifikation pro Betreiber (je ein kurzer Test)
7) Fehlerbehebung (max. 5 haeufige Ursachen)
8) Naechste Schritte (optional, max. 3)

Wenn du Konfigurationen oder JSON benoetigst, liefere minimalistische Beispiele mit klar benoetigten Schluesseln.
Wenn du Tools oder Erweiterungen in code-insiders voraussetzt, nenne sie explizit mit Zweck.
