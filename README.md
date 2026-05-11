# jeanbaptisterecolet.fr

Site éditorial GEO et SEO francophone — Jean-Baptiste Recolet.

Construit avec [Astro](https://astro.build), déployé sur [Cloudflare Pages](https://pages.cloudflare.com).

## Stack technique

- **Framework** : Astro 5.x (sites statiques, performance maximale)
- **Hébergement** : Cloudflare Pages (gratuit, CDN mondial, SSL automatique)
- **CMS** : fichiers Markdown / MDX versionnés sur Git
- **Analytics** : Cloudflare Web Analytics (sans cookies, RGPD-compliant) + Google Analytics 4 via Partytown
- **SEO/GEO** : sitemap XML auto, schema.org JSON-LD, llms.txt, robots.txt optimisé pour les crawlers IA
- **Domaine** : OVH

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:4321`.

## Construire la version production

```bash
npm run build
```

Les fichiers statiques sont générés dans `dist/`.

## Publier un nouvel article

1. Créer un fichier `src/content/blog/mon-article.md`
2. Renseigner le frontmatter (titre, description, date, tags, image)
3. Rédiger le contenu en Markdown
4. `git add . && git commit -m "Nouvel article : mon-article" && git push`
5. Cloudflare Pages déploie automatiquement en ~30 secondes

## Structure du projet

```
jeanbaptisterecolet-fr/
├── astro.config.mjs       # Configuration Astro
├── package.json
├── public/                # Fichiers servis tels quels
│   ├── robots.txt         # Politique crawl + crawlers IA
│   ├── llms.txt           # Contexte pour les LLMs
│   └── favicon.svg
├── src/
│   ├── content/
│   │   └── blog/          # Articles Markdown
│   ├── layouts/           # Templates HTML
│   ├── components/        # Composants Astro
│   ├── pages/             # Routes du site
│   └── styles/            # CSS global
└── README.md
```

## Licence

Tous droits réservés — Jean-Baptiste Recolet. Les articles sont citables avec attribution.
