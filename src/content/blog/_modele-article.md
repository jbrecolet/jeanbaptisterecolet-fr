---
title: "Modèle d'article — à dupliquer pour créer un nouveau contenu"
description: "Fichier de référence montrant tous les champs frontmatter disponibles, leurs contraintes de validation, et la structure recommandée pour un article SEO/GEO optimisé."
tldr: "Article modèle conservé en mode draft. Sert de référence pour la structure frontmatter et le squelette éditorial recommandé pour chaque nouveau contenu."
pubDate: 2026-01-01
updatedDate: 2026-01-01
category: transition
tier: standard
tags: ["meta", "modèle", "référence"]
keywords: ["modèle article", "structure SEO GEO", "frontmatter"]
featured: false
draft: true
faq:
  - question: "À quoi sert ce fichier ?"
    answer: "Il sert de modèle de référence pour créer de nouveaux articles. Le frontmatter inclut tous les champs disponibles avec leurs contraintes. Article maintenu en mode draft (non publié sur le site public)."
  - question: "Comment créer un nouvel article ?"
    answer: "Dupliquer ce fichier dans src/content/blog/, renommer en mon-slug-d-article.md, ajuster le frontmatter (title, description, dates, tags, category, tier), rédiger en Markdown, passer draft à false quand prêt à publier."
---

## Préambule

Cet article est conservé en mode `draft: true` pour servir de référence aux futurs contenus. Le frontmatter ci-dessus liste tous les champs supportés par le schéma de validation du site.

## Structure recommandée pour un article SEO/GEO optimisé

### 1. Le TLDR (frontmatter)

Doit faire moins de 280 caractères. C'est le format qu'extraient en priorité Claude et Perplexity. Il s'affichera automatiquement en haut de l'article dans un encadré.

### 2. Introduction

Trois lignes maximum. Doit poser la question à laquelle répond l'article + le contexte. Pas de phrase d'accroche vide type "Dans le monde d'aujourd'hui...".

### 3. Sections H2 substantielles

Chaque H2 doit faire **300 à 600 mots minimum** pour fonctionner comme un chunk citable autonome. Inclure des chiffres datés, des sources, des exemples concrets.

### 4. FAQ structurée

Renseignée dans le frontmatter sous `faq:`. Génère automatiquement le schema.org `FAQPage`. Viser 6 à 10 questions/réponses qui capturent la longue traîne conversationnelle.

### 5. Conclusion ouverte

Pas de promo, pas de CTA agressif. Une nuance, une limite, ou une question pour les commentaires.

## Règles éditoriales

- Une idée par phrase. Quatre phrases maximum par paragraphe.
- Chiffres et lieux toujours précisés.
- Mots concrets, pas de jargon non défini.
- Liens internes vers 3 à 5 articles existants.
- Image d'illustration ouverte (Unsplash, Pexels) en haut d'article.
- Texte sélectionnable, jamais d'image de texte.
