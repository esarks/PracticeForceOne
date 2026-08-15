---
title: "DockerStart"
---

# AllowanceAlley Docker Deployment Guide

Deploy AllowanceAlley using Docker containers with simple batch scripts.

## Prerequisites

- Docker Desktop installed and running
- Application built via `allPhases.bat`

## Quick Start

Navigate to the docker folder and run the scripts:

```
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\allowancealley\docker
```

### First Time Setup

```
build.bat       # Build the Docker image
start.bat       # Start all services
```

### Daily Use

| Script | Description |
|--------|-------------|
| `start.bat` | Start all services |
| `stop.bat` | Stop all services |
| `restart.bat` | Restart all services |
| `logs.bat` | View live logs (Ctrl+C to exit) |
| `status.bat` | Check container status and health |
| `rebuild.bat` | Full rebuild (app + Docker + restart) |
| `clean.bat` | Remove everything (fresh start) |

## Service URLs

| Service | URL | Description |
|---------|-----|-------------|
| Application | http://localhost:8080 | AllowanceAlley web app |
| MinIO Console | http://localhost:9001 | Object storage admin |
| PostgreSQL | localhost:5432 | Database |

## Configuration

Edit `.env` in the docker folder to customize:

```properties
# Server
API_PORT=8080

# Database
DB_PASSWORD=esarks

# JWT Authentication
JWT_SECRET=AllowanceAlley2024SecretKeyForJWTTokens32

# Object Storage
S3_ACCESS_KEY=minioadmin
S3_SECRET_KEY=minioadmin123

# CORS (set to your domain in production)
CORS_ALLOWED_ORIGINS=*
```

## Workflow Examples

### Start fresh development session
```
start.bat
```

### After making code changes
```
rebuild.bat
```

### View what's happening
```
logs.bat
```

### Something brokenPENDING Start over
```
clean.bat
build.bat
start.bat
```

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Docker Network                            │
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │   API       │    │  PostgreSQL │    │   MinIO     │      │
│  │  Port 8080  │───▶│  Port 5432  │    │  Port 9000  │      │
│  └─────────────┘    └─────────────┘    └─────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

## Troubleshooting

### Docker not running
```
[ERROR] Docker is not running!
```
Start Docker Desktop and try again.

### Build failed
```
[ERROR] Docker build failed!
```
Run `allPhases.bat` first to build the application.

### Port already in use
Edit `.env` and change `API_PORT=8081`

### Reset everything
```
clean.bat
build.bat
start.bat
```

## Production Deployment

Before deploying to production:

1. Generate secure secrets:
   ```bash
   openssl rand -base64 32  # For JWT_SECRET
   openssl rand -base64 24  # For DB_PASSWORD
   ```

2. Edit `.env`:
   - Set strong `JWT_SECRET`
   - Set strong `DB_PASSWORD`
   - Set `CORS_ALLOWED_ORIGINS` to your domain
   - Set `DEBUG=false`

3. Configure HTTPS via nginx reverse proxy

See `SECURITY.md` for complete production checklist.

## Files Reference

| File | Purpose |
|------|---------|
| `build.bat` | Build Docker image |
| `start.bat` | Start all services |
| `stop.bat` | Stop all services |
| `restart.bat` | Restart services |
| `logs.bat` | View live logs |
| `status.bat` | Check status |
| `rebuild.bat` | Full rebuild |
| `clean.bat` | Remove everything |
| `.env` | Environment config |
| `docker-compose.yml` | Service definitions |
| `Dockerfile` | Image build config |

---

**Last Updated:** 2025-12-05
