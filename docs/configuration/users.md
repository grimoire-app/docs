# Pre-seeding Users

Drop a `users.json` file into your data directory before first start and Grimoire will create those accounts automatically. The file is renamed to `users.json.imported` afterwards and never processed again.

## Format

```json
[
  {
    "username": "admin",
    "password": "changeme",
    "role": "admin"
  },
  {
    "username": "gm",
    "password": "$bcrypt-sha256$v=2,t=2b,r=12$...",
    "role": "gm"
  },
  {
    "username": "alice",
    "password": "alicepassword",
    "role": "player",
    "denyExplicit": true
  }
]
```

| Field | Required | Description |
|---|---|---|
| `username` | Yes | Login username |
| `password` | Yes | Plaintext password **or** a pre-hashed `$bcrypt-sha256$` string |
| `role` | No | `admin`, `gm`, or `player` — defaults to `player` |
| `denyExplicit` | No | `true` to restrict explicit content — defaults to `false` |

## Rules

- At least one entry must have `"role": "admin"` — the file is rejected otherwise.
- Entries whose username already exists are silently skipped.
- On parse or validation errors the file is left untouched so you can fix and restart.

## Pre-hashing passwords

Pre-hashing avoids storing plaintext passwords in the JSON file. Grimoire uses passlib's `bcrypt_sha256` scheme:

```bash
python3 -c "from passlib.hash import bcrypt_sha256; print(bcrypt_sha256.hash('yourpassword'))"
```

Copy the output (starts with `$bcrypt-sha256$`) into the `password` field.

## Docker example

```bash
cp users.json /path/to/grimoire/data/users.json
docker compose up -d
```
