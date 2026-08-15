---
title: "MigrationToGoogleCloud"
---

# AllowanceAlley: Migration to Google Cloud

## Document Overview

**Purpose:** Step-by-step guide to deploy the AllowanceAlley Docker application to Google Cloud Platform (GCP).

**Prerequisites:**
- Completed Docker containerization (transitiontostateless.md)
- Google Cloud account with billing enabled
- `gcloud` CLI installed locally
- Docker Desktop installed and running

**Document Version:** 2.2
**Last Updated:** 2025-12-06
**Status:** COMPLETE - Live at https://allowancealley.com

---

## Migration Summary

**Completed on:** December 6, 2025

The AllowanceAlley application has been successfully migrated from local Docker development to Google Cloud Platform. The following components are fully operational:

| Component | Status | Details |
|-----------|--------|---------|
| Cloud Run | Running | Auto-scaling container service |
| Cloud SQL | Running | PostgreSQL 17 database |
| Artifact Registry | Configured | Docker image repository |
| Secret Manager | Configured | Secure credential storage |
| Custom Domain | Active | https://allowancealley.com |
| SSL Certificate | Active | Google-managed, auto-renewing |

**Verified Working:**
- https://allowancealley.com loads with valid SSL
- Health endpoint responds
- Login page loads
- Family registration works (database writes confirmed)
- User authentication works

---

## Current Deployment Details

| Resource | Value |
|----------|-------|
| **Project ID** | `allowancealley` |
| **Region** | `us-central1` |
| **Custom Domain** | `https://allowancealley.com` |
| **Cloud Run URL** | `https://allowancealley-505346146024.us-central1.run.app` |
| **Cloud SQL Instance** | `allowancealley-db` |
| **Cloud SQL IP** | `34.69.70.25` |
| **Database Name** | `allowancealley` |
| **Database User** | `allowance_user` |
| **Artifact Registry** | `us-central1-docker.pkg.dev/allowancealley/allowancealley` |
| **DNS Provider** | Cloudflare |

---

## Table of Contents

1. [Deployment Options](#1-deployment-options)
2. [Recommended Architecture](#2-recommended-architecture)
3. [Phase 1: GCP Project Setup](#phase-1-gcp-project-setup)
4. [Phase 2: Container Registry Setup](#phase-2-container-registry-setup)
5. [Phase 3: Database Setup (Cloud SQL)](#phase-3-database-setup-cloud-sql)
6. [Phase 4: Secret Manager Setup](#phase-4-secret-manager-setup)
7. [Phase 5: Deploy to Cloud Run](#phase-5-deploy-to-cloud-run)
8. [Phase 6: Custom Domain & SSL](#phase-6-custom-domain--ssl)
9. [Redeployment Commands](#redeployment-commands)
10. [Monitoring & Logging](#monitoring--logging)
11. [Cost Estimation](#cost-estimation)
12. [Troubleshooting](#troubleshooting)

---

## 1. Deployment Options

Google Cloud offers several options for running Docker containers:

| Option | Best For | Complexity | Cost |
|--------|----------|------------|------|
| **Cloud Run** | Stateless APIs, auto-scaling | Low | Pay-per-request |
| **GKE Autopilot** | Complex microservices | Medium | Per-pod pricing |
| **GKE Standard** | Full Kubernetes control | High | VM-based pricing |
| **Compute Engine** | Single VM, simple | Low | Always-on VM |

**Recommendation:** **Cloud Run** - It's the simplest option for a stateless API like AllowanceAlley, with automatic scaling, built-in HTTPS, and pay-per-use pricing.

---

## 2. Recommended Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Google Cloud Platform                        │
│                                                                   │
│  ┌─────────────┐     ┌─────────────────────────────────────┐    │
│  │   Users     │     │         Cloud Run                    │    │
│  │  (Browser)  │────▶│  ┌─────────────────────────────┐    │    │
│  └─────────────┘     │  │   AllowanceAlley Container   │    │    │
│        │             │  │   (auto-scales 0-N)          │    │    │
│        │ HTTPS       │  └──────────┬──────────────────┘    │    │
│        ▼             └─────────────┼────────────────────────┘    │
│  ┌─────────────┐                   │                              │
│  │ Cloud Load  │                   │ Public IP (34.69.70.25)     │
│  │ Balancer    │                   ▼                              │
│  │ (automatic) │     ┌─────────────────────────────────────┐    │
│  └─────────────┘     │         Cloud SQL                    │    │
│                      │  ┌─────────────────────────────┐    │    │
│                      │  │   PostgreSQL 17              │    │    │
│                      │  │   (db-f1-micro)              │    │    │
│                      │  └─────────────────────────────┘    │    │
│                      └─────────────────────────────────────┘    │
│                                                                   │
│                      ┌─────────────────────────────────────┐    │
│                      │      Secret Manager                  │    │
│                      │  - db-password                       │    │
│                      │  - jwt-secret                        │    │
│                      └─────────────────────────────────────┘    │
│                                                                   │
│                      ┌─────────────────────────────────────┐    │
│                      │      Artifact Registry               │    │
│                      │  - allowancealley Docker images      │    │
│                      └─────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: GCP Project Setup

### 1.1 Install Google Cloud CLI

Download from: https://cloud.google.com/sdk/docs/install

After installation:
```powershell
gcloud init
gcloud auth login
```

### 1.2 Set Project

```bash
gcloud config set project allowancealley
```

### 1.3 Enable Required APIs

```bash
gcloud services enable artifactregistry.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable sqladmin.googleapis.com
gcloud services enable secretmanager.googleapis.com
```

---

## Phase 2: Container Registry Setup

### 2.1 Create Artifact Registry Repository

```bash
gcloud artifacts repositories create allowancealley \
    --repository-format=docker \
    --location=us-central1 \
    --description="Allowance Alley Docker images"
```

### 2.2 Configure Docker Authentication

```bash
gcloud auth configure-docker us-central1-docker.pkg.dev --quiet
```

### 2.3 Build and Push Docker Image

```powershell
# Navigate to jac2024 root
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024

# Build image
docker build -t us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest -f app/com/allowancealley/docker/Dockerfile .

# Push to Artifact Registry
docker push us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest
```

---

## Phase 3: Database Setup (Cloud SQL)

### 3.1 Create Cloud SQL Instance

```bash
gcloud sql instances create allowancealley-db \
    --database-version=POSTGRES_17 \
    --tier=db-f1-micro \
    --region=us-central1 \
    --root-password=YOUR_ROOT_PASSWORD
```

This takes 5-10 minutes.

### 3.2 Create Database and User

```bash
# Create database
gcloud sql databases create allowancealley --instance=allowancealley-db

# Create user
gcloud sql users create allowance_user \
    --instance=allowancealley-db \
    --password=YOUR_APP_PASSWORD
```

### 3.3 Authorize Network Access

```bash
# For initial setup - allows all IPs (restrict in production)
gcloud sql instances patch allowancealley-db --authorized-networks=0.0.0.0/0
```

### 3.4 Get Cloud SQL IP Address

```bash
gcloud sql instances describe allowancealley-db --format="value(ipAddresses[0].ipAddress)"
# Result: 34.69.70.25
```

### 3.5 Initialize Database Schema

```powershell
# Connect with psql (adjust path for your PostgreSQL version)
& "C:\Program Files\PostgreSQL\18\bin\psql.exe" -U allowance_user -h 34.69.70.25 -p 5432 -d allowancealley

# Once connected, run schema:
\i 'C:/Users/ptm/OneDrive/Documents/GitHub/ArchitectsCompanion/jac2024/app/com/allowancealley/data/FullDb.sql'
```

---

## Phase 4: Secret Manager Setup

### 4.1 Create Secrets

```bash
# Create db-password secret (use a file to avoid shell escaping issues)
echo -n "YOUR_DB_PASSWORD" > db-password.txt
gcloud secrets create db-password --data-file=db-password.txt
rm db-password.txt

# Create jwt-secret
echo -n "YOUR_JWT_SECRET_32_CHARS_MIN" > jwt-secret.txt
gcloud secrets create jwt-secret --data-file=jwt-secret.txt
rm jwt-secret.txt
```

### 4.2 Grant Cloud Run Access to Secrets

```bash
# Get the compute service account number
gcloud iam service-accounts list
# Look for: 505346146024-compute@developer.gserviceaccount.com

# Grant access
gcloud secrets add-iam-policy-binding db-password \
    --member="serviceAccount:505346146024-compute@developer.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"

gcloud secrets add-iam-policy-binding jwt-secret \
    --member="serviceAccount:505346146024-compute@developer.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"
```

---

## Phase 5: Deploy to Cloud Run

### 5.1 Deploy Service

```bash
gcloud run deploy allowancealley \
    --image us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest \
    --region us-central1 \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --set-env-vars "DB_HOST=34.69.70.25,DB_PORT=5432" \
    --set-secrets "DB_PASSWORD=db-password:latest,JWT_SECRET=jwt-secret:latest"
```

### 5.2 Verify Deployment

```bash
# Get service URL
gcloud run services describe allowancealley --region=us-central1 --format="value(status.url)"
# Result: https://allowancealley-505346146024.us-central1.run.app

# Test health endpoint
curl https://allowancealley-505346146024.us-central1.run.app/health
```

---

## Phase 6: Custom Domain & SSL

### 6.1 Map Custom Domain

```bash
# Map domain to Cloud Run (requires beta component)
gcloud beta run domain-mappings create --service=allowancealley --domain=allowancealley.com --region us-central1
```

This outputs the DNS records you need to configure:
```
NAME            RECORD TYPE  CONTENTS
allowancealley  A            216.239.32.21
allowancealley  A            216.239.34.21
allowancealley  A            216.239.36.21
allowancealley  A            216.239.38.21
allowancealley  AAAA         2001:4860:4802:32::15
allowancealley  AAAA         2001:4860:4802:34::15
allowancealley  AAAA         2001:4860:4802:36::15
allowancealley  AAAA         2001:4860:4802:38::15
```

### 6.2 Configure DNS in Cloudflare

Add these A records in Cloudflare DNS (or your DNS provider):

| Type | Name | Content | Proxy status |
|------|------|---------|--------------|
| A | @ | 216.239.32.21 | DNS only (grey cloud) |
| A | @ | 216.239.34.21 | DNS only (grey cloud) |
| A | @ | 216.239.36.21 | DNS only (grey cloud) |
| A | @ | 216.239.38.21 | DNS only (grey cloud) |

**Important:** Set proxy status to **DNS only** (grey cloud, not orange) - Google needs to handle SSL certificate provisioning.

### 6.3 Check Certificate Status

```bash
gcloud beta run domain-mappings describe --domain=allowancealley.com --region us-central1
```

Look for `CertificateProvisioned: True` in the status. Certificate provisioning takes 5-30 minutes.

### 6.4 Verify Domain

Once certificate is provisioned, test: https://allowancealley.com

SSL certificate is automatically managed by Google.

---

## Redeployment Commands

After making code changes, use these commands to redeploy:

### Full Redeploy

```powershell
# 1. Rebuild Docker image
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
docker build -t us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest -f app/com/allowancealley/docker/Dockerfile .

# 2. Push to Artifact Registry
docker push us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest

# 3. Deploy new revision
gcloud run deploy allowancealley --image us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest --region us-central1 --platform managed --allow-unauthenticated --port 8080 --set-env-vars "DB_HOST=34.69.70.25,DB_PORT=5432" --set-secrets "DB_PASSWORD=db-password:latest,JWT_SECRET=jwt-secret:latest"
```

### Quick Deploy (Image Already Pushed)

```bash
gcloud run deploy allowancealley \
    --image us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest \
    --region us-central1
```

---

## Monitoring & Logging

### View Logs

```bash
# View recent logs
gcloud run services logs read allowancealley --region=us-central1 --limit=30

# Stream logs in real-time
gcloud run services logs tail allowancealley --region=us-central1
```

### Cloud Console

- **Cloud Run Dashboard:** https://console.cloud.google.com/run
- **Cloud SQL Dashboard:** https://console.cloud.google.com/sql
- **Logs Explorer:** https://console.cloud.google.com/logs

---

## Cost Estimation

### Monthly Cost Breakdown (Current Setup)

| Service | Configuration | Est. Cost/Month |
|---------|--------------|-----------------|
| Cloud Run | 0-N instances, pay-per-request | $5-15 |
| Cloud SQL | db-f1-micro (0.6GB RAM) | ~$10-15 |
| Artifact Registry | 1GB storage | ~$0.10 |
| Secret Manager | 2 secrets | ~$0.06 |
| Network Egress | 10GB/month | ~$1 |
| **Total** | | **~$16-31/month** |

### Cost Optimization

1. **Cloud Run min-instances=0** - Scale to zero when idle (default)
2. **Cloud SQL db-f1-micro** - Smallest tier for dev/test
3. **Committed Use Discounts** - 1-3 year commits for savings

---

## Troubleshooting

### Database Connection Failed

1. Check Cloud SQL IP:
   ```bash
   gcloud sql instances describe allowancealley-db --format="value(ipAddresses[0].ipAddress)"
   ```

2. Verify network authorization:
   ```bash
   gcloud sql instances describe allowancealley-db --format="value(settings.ipConfiguration.authorizedNetworks)"
   ```

3. Test connection directly:
   ```powershell
   & "C:\Program Files\PostgreSQL\18\bin\psql.exe" -U allowance_user -h 34.69.70.25 -d allowancealley
   ```

### Secret Manager Access Denied

```bash
# Check IAM bindings
gcloud secrets get-iam-policy db-password
gcloud secrets get-iam-policy jwt-secret

# Re-grant access if needed
gcloud secrets add-iam-policy-binding db-password \
    --member="serviceAccount:505346146024-compute@developer.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"
```

### Container Fails to Start

```bash
# Check logs
gcloud run services logs read allowancealley --region=us-central1 --limit=100
```

### "Repository not found" When Pushing Docker Image

Verify repository name:
```bash
gcloud artifacts repositories list --location=us-central1
```

Ensure Docker tag matches exactly:
- Correct: `us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest`
- Wrong: `us-central1-docker.pkg.dev/allowancealley/allowancealley-repo/allowancealley:latest`

---

## Configuration Files Modified

### Properties-docker.xml

Uses placeholders for environment variable substitution:

```xml
<dbConnection name="application" openCount="5">
  <jdbcClass>org.postgresql.Driver</jdbcClass>
  <jdbcConnection>jdbc:postgresql://__DB_HOST__:__DB_PORT__/allowancealley</jdbcConnection>
  <jdbcUser>allowance_user</jdbcUser>
  <jdbcPassword>__DB_PASSWORD__</jdbcPassword>
  ...
</dbConnection>
```

### docker-entrypoint.sh

Substitutes environment variables at container startup:

```bash
PROPS_FILE="${JAC_HOME}/config/properties/Properties.xml"
if [ -f "${PROPS_FILE}" ]; then
    echo "[CONFIG] Substituting secrets in Properties.xml"
    [ -n "${DB_HOST}" ] && sed -i "s/__DB_HOST__/${DB_HOST}/g" "${PROPS_FILE}"
    [ -n "${DB_PORT}" ] && sed -i "s/__DB_PORT__/${DB_PORT}/g" "${PROPS_FILE}"
    [ -n "${DB_PASSWORD}" ] && sed -i "s/__DB_PASSWORD__/${DB_PASSWORD}/g" "${PROPS_FILE}"
    echo "[CONFIG] Database: ${DB_HOST}:${DB_PORT}"
fi
```

---

## Deployment Checklist

### Pre-Deployment
- [x] GCP project created (`allowancealley`)
- [x] All APIs enabled (artifactregistry, run, sqladmin, secretmanager)
- [x] Docker image built and pushed to Artifact Registry
- [x] Cloud SQL instance created (`allowancealley-db`)
- [x] Database and user created
- [x] Network access authorized
- [x] Database schema applied (FullDb.sql)
- [x] Secrets created in Secret Manager (db-password, jwt-secret)
- [x] IAM permissions granted for secrets

### Deployment
- [x] Cloud Run service deployed
- [x] Environment variables configured (DB_HOST, DB_PORT)
- [x] Secrets mounted from Secret Manager
- [x] Health endpoint responds
- [x] Database connection working
- [x] User registration verified
- [x] User login verified

### Post-Deployment (Optional)
- [x] Custom domain mapped (allowancealley.com)
- [x] DNS configured in Cloudflare (4 A records)
- [x] SSL certificate active (Google-managed)
- [ ] Monitoring alerts configured
- [ ] SMTP configured for email notifications

---

## Quick Reference Commands

```bash
# View Cloud Run service
gcloud run services describe allowancealley --region=us-central1

# Update deployment
gcloud run deploy allowancealley --image=us-central1-docker.pkg.dev/allowancealley/allowancealley/allowancealley:latest --region=us-central1

# View logs
gcloud run services logs read allowancealley --region=us-central1 --limit=30

# List Artifact Registry repos
gcloud artifacts repositories list --location=us-central1

# List secrets
gcloud secrets list

# Get Cloud SQL IP
gcloud sql instances describe allowancealley-db --format="value(ipAddresses[0].ipAddress)"
```

---

## Related Documents

- [transitiontostateless.md](transitiontostateless.md) - Docker containerization guide
- [AllowanceAlley.md](AllowanceAlley.html) - Application specification
- [Jetty-Docker-Kubernetes.md](Jetty-Docker-Kubernetes.html) - Container deployment patterns

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-06 | Claude | Initial document with planned steps |
| 2.0 | 2025-12-06 | Claude | Updated with actual deployment commands and current status |
| 2.1 | 2025-12-06 | Claude | Marked as fully deployed and verified; updated checklist with all completed items |
| 2.2 | 2025-12-06 | Claude | Added custom domain setup (allowancealley.com) with Cloudflare DNS configuration; SSL certificate active; migration complete |
