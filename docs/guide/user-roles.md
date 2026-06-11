# User Roles

Grimoire has three roles:

| Role | Permissions |
|---|---|
| `admin` | Everything — user management, app settings, metadata editing, rescan, logs |
| `gm` | Read everything, edit metadata, create GM campaigns, trigger rescan |
| `player` | Read-only access, personal campaigns, session notes |

## Creating users

Create accounts in **Settings → Users** after logging in as admin.

## Pre-seeding users

You can pre-create accounts before first launch by placing a `users.json` file in your data directory. See [Pre-seeding Users](/configuration/users).

## Explicit content

Each user account has an `allow_explicit` flag. Users with this disabled will not see game systems, books, or tokens marked as explicit. Admins can toggle this per-user; users can toggle it for their own account in Account Settings.

## Display names

Users can set a **display name** in Account Settings that appears in place of their username across the app.
