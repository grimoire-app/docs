# Environment Variables

## Required

| Variable | Description |
|---|---|
| `SECRET_KEY` | **Required.** JWT signing secret. Generate with `openssl rand -hex 32`. |

## Core

| Variable | Default | Description |
|---|---|---|
| `WORKERS` | `2` | Number of uvicorn worker processes. 2–4 is typical; more workers = more memory. |
| `LIBRARY_PATH` | `/app/library` | Path to the library directory inside the container. |
| `DATA_PATH` | `/app/data` | Path for the database, thumbnails, and search cache inside the container. |
| `BASE_URL` | `http://localhost:9481` | Public base URL of this instance. Set to your external URL when running behind a reverse proxy — used for OPDS feed links and OIDC redirect URIs. |
| `LOG_LEVEL` | `info` | Console log verbosity: `debug`, `info`, `warning`, `error`, `critical`. The in-app Logs tab always captures `debug`-level entries regardless of this setting. |

## Optional features

| Variable | Default | Description |
|---|---|---|
| `VALKEY_URL` | — | Redis-compatible cache URL for rendered page images (e.g. `redis://valkey:6379/0`). Falls back to disk cache when unset. |
| `OPDS_ENABLED` | `false` | Set to `true` to enable the OPDS catalog. |

## Authentication

| Variable | Description |
|---|---|
| `ALLOW_PASSWORD_AUTHENTICATION` | `true` or `false`. Pins password authentication on or off, overriding the in-app toggle (which is shown read-only). First-run admin setup always requires a password regardless of this value. |

## OIDC

Each OIDC setting can be pinned via environment variable. Pinned values are shown read-only in **Settings → Authentication**.

| Variable | Description |
|---|---|
| `OIDC_ENABLED` | Master toggle for OIDC sign-in. |
| `OIDC_ISSUER_URL` | Base URL of the IdP. |
| `OIDC_TOKEN_ISSUER` | Exact `iss` value in tokens. Leave blank to auto-detect. |
| `OIDC_AUTHORIZATION_ENDPOINT` | Authorization endpoint URL. |
| `OIDC_TOKEN_ENDPOINT` | Token endpoint URL. |
| `OIDC_USERINFO_ENDPOINT` | Userinfo endpoint URL. |
| `OIDC_JWKS_URI` | JWKS URL for ID token signature validation. |
| `OIDC_END_SESSION_ENDPOINT` | Optional RP-initiated logout endpoint. |
| `OIDC_CLIENT_ID` | Client ID issued by the IdP. |
| `OIDC_CLIENT_SECRET` | Client secret issued by the IdP. |
| `OIDC_SIGNING_ALG` | One of `RS256`/`RS384`/`RS512`/`ES256`/`ES384`/`ES512`/`PS256`/`PS384`/`PS512`/`HS256`. Default `RS256`. |
| `OIDC_BUTTON_TEXT` | Label for the SSO button on the login page. |
| `OIDC_GROUPS_CLAIM` | Name of the claim containing group memberships. |
| `OIDC_PERMISSIONS_CLAIM` | Name of the claim containing a permissions object. |
| `OIDC_MATCH_BY` | `none`, `email`, or `username` — how to link existing accounts on first OIDC login. |
| `OIDC_AUTO_LAUNCH` | Automatically redirect to the IdP when visiting `/login`. |
| `OIDC_AUTO_REGISTER` | Automatically create local accounts on first OIDC login. |
