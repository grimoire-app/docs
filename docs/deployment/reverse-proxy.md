# Reverse Proxy

When running Grimoire behind a reverse proxy, set `BASE_URL` to your public URL so that OPDS feed links and OIDC redirect URIs are generated correctly:

```yaml
environment:
  - BASE_URL=https://grimoire.example.com
```

## Nginx

```nginx
server {
    listen 443 ssl;
    server_name grimoire.example.com;

    location / {
        proxy_pass http://localhost:9481;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Needed for large PDF downloads
        proxy_read_timeout 300;
        proxy_send_timeout 300;
        client_max_body_size 0;
    }
}
```

## Caddy

```
grimoire.example.com {
    reverse_proxy localhost:9481
}
```

## Traefik (Docker labels)

```yaml
services:
  grimoire:
    image: hunterreadca/grimoire:latest
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.grimoire.rule=Host(`grimoire.example.com`)"
      - "traefik.http.routers.grimoire.entrypoints=websecure"
      - "traefik.http.routers.grimoire.tls.certresolver=letsencrypt"
      - "traefik.http.services.grimoire.loadbalancer.server.port=9481"
```
