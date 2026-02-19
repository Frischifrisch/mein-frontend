# mein-frontend

Ein Docker-basiertes Fullstack-Projekt mit Frontend, Backend und PostgreSQL-Datenbank.

## Projektstruktur

```
mein-frontend/
├── frontend/          # Frontend-Service (Node.js, Port 3000)
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── backend/           # Backend-Service (Node.js, Port 3001)
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── database/          # PostgreSQL-Daten (lokal, nicht im Git)
├── docker-compose.yml # Orchestrierung aller Services
└── Dockerfile         # Root-Dockerfile
```

## Services

| Service  | Image        | Port |
|----------|-------------|------|
| frontend | node:14      | 3000 |
| backend  | node:14      | 3001 |
| database | postgres:16  | 5432 |

## Voraussetzungen

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Quickstart

```bash
# Alle Container starten
docker-compose up -d

# Status prüfen
docker-compose ps

# Logs anzeigen
docker-compose logs -f

# Alle Container stoppen
docker-compose down
```

## Umgebungsvariablen

| Variable          | Service          | Wert         |
|-------------------|-----------------|--------------|
| `NODE_ENV`        | frontend/backend | `production` |
| `KI_HOST`         | frontend/backend | `backend`    |
| `POSTGRES_USER`   | database         | `myuser`     |
| `POSTGRES_PASSWORD` | database       | `mypassword` |
| `POSTGRES_DB`     | database         | `mydb`       |
