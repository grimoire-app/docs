# Frequently Asked Questions

## I forgot my admin password. How do I reset it?

Reset the password directly in the database by running a one-liner inside the running container:

```bash
docker exec <container_name> python3 -c "
from passlib.context import CryptContext
import sqlite3
pwd = CryptContext(schemes=['bcrypt_sha256']).hash('<your_new_password>')
db = sqlite3.connect('/app/data/grimoire.db')
db.execute(\"UPDATE users SET hashed_password = ? WHERE username = ?\", (pwd, '<your_username>'))
db.commit()
db.close()
print('Done')
"
```

Replace `<container_name>`, `<your_new_password>`, and `<your_username>` with your values. The container name is typically `grimoire`.

Alternatively, create a new admin account by [pre-seeding a users file](/configuration/users) and restarting the stack.

---

## The scanner finds no books after I reorganized my library.

Grimoire expects a `books/` subfolder at the root of the library mount:

```
/library/
  books/
    D&D 5e/
      Core Rules/
        Players Handbook.pdf
  maps/
  tokens/
```

If your PDFs live directly under the mounted folder without a `books/` subfolder, the scanner finds nothing.

**Fix** — mount your folder directly as `/app/library/books`:

```yaml
volumes:
  - /path/to/your/rpgs:/app/library/books:ro
  - /path/to/grimoire/data:/app/data
```

This keeps your existing host structure without adding an extra `books/` folder. Restart the stack and trigger a rescan.

::: info
**Cleanup missing** removes database records for files that can't be found at their expected paths. If you moved files before fixing the mount, those records were removed — re-mounting correctly and rescanning will re-add everything.
:::

---

## How do I configure OIDC with Authentik?

See the dedicated [Authentik Setup](/guide/oidc-authentik) guide for a complete walkthrough including group-to-role mapping and explicit content access control.
