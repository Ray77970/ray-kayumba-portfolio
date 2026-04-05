# CLAUDE.md — Portfolio Ray Kayumba

## Qui je suis
- Nom : Ray Kayumba, 26 ans, basé en Allemagne
- Domaine : Design digital, IA appliquée, branding visuel, entrepreneuriat
- Langues : Français & Allemand
- Projets : FiveBrandsAI, RKP AI Platform
- Vision : Créer des écosystèmes visuels performants entre Europe et Afrique

## Positionnement
Designer orienté résultats à l'intersection du design, de la technologie et du business.
Profil hybride rare : Design + IA + Business.

---

## Stack du site
- HTML / CSS / JS vanilla — un seul fichier `index.html`
- Aucun framework, aucune dépendance externe sauf Google Fonts
- Hébergé sur GitHub Pages

## Fonts utilisées
- `Playfair Display` — titres (serif, éditorial)
- `Geist Mono` — corps de texte, UI (monospace, tech)

---

## Design system — variables CSS

```css
--bg: #09090b;           /* fond principal */
--bg-card: #0f0f11;      /* fond des cards */
--bg-subtle: #141416;    /* fond subtil */
--bg-hover: #1a1a1e;     /* hover state */
--border: rgba(255,255,255,0.08);       /* bordure par défaut */
--border-hover: rgba(255,255,255,0.16); /* bordure hover */
--border-strong: rgba(255,255,255,0.24);/* bordure forte */
--text: #fafafa;         /* texte principal */
--text-muted: #71717a;   /* texte secondaire */
--text-subtle: #3f3f46;  /* texte très discret */
--accent: #e4e4e7;       /* accent clair */
--white: #ffffff;
--radius: 8px;
--radius-lg: 12px;
```

---

## Composants existants

### Buttons
```html
<!-- Primaire (blanc sur noir) -->
<a href="#" class="btn-primary">Label →</a>

<!-- Secondaire (outline) -->
<a href="#" class="btn-secondary">Label</a>

<!-- Nav -->
<a href="#" class="btn-nav">Label</a>
```

### Cards
```html
<!-- Card générique -->
<div class="card">contenu</div>

<!-- Card avec header (style terminal) -->
<div class="svc-card">
  <div class="svc-head">Titre</div>
  <div class="svc-item">Item <span class="svc-arr">↗</span></div>
</div>
```

### Badges & chips
```html
<!-- Section chip -->
<div class="sec-chip">Label</div>

<!-- Badge disponible (vert) -->
<div class="badge-avail"><span></span>Open to work</div>

<!-- Stack tag -->
<span class="stag">React</span>

<!-- Project tag (pill) -->
<span class="ptag">Branding</span>
```

### Project row
```html
<div class="proj-row reveal">
  <div class="proj-num">05</div>
  <div>
    <div class="proj-title">Titre projet</div>
    <div class="proj-desc">Description courte du projet.</div>
    <div class="proj-tags">
      <span class="ptag">Tag1</span>
      <span class="ptag">Tag2</span>
    </div>
  </div>
  <a href="#" class="proj-link">↗</a>
</div>
```

### Section header
```html
<div class="sec-header reveal">
  <div class="sec-chip">Nom section</div>
  <div class="sec-line"></div>
</div>
```

### Form field
```html
<div class="field">
  <label>Label</label>
  <input type="text" placeholder="...">
</div>
```

---

## Animations
- `.reveal` — classe à ajouter sur tout élément à animer à l'entrée
- JS IntersectionObserver gère automatiquement l'ajout de `.visible`
- Stagger de 90ms entre les éléments révélés simultanément
- Entrée hero : `fadeUp` avec `animation-delay` sur chaque bloc

---

## Règles de style — À RESPECTER ABSOLUMENT

### Ce qu'on garde
- Fond noir `#09090b` — jamais de fond clair
- Bordures très subtiles `rgba(255,255,255,0.08)` — pas de bordures épaisses
- Typographie : Playfair pour les titres, Geist Mono pour tout le reste
- Espacement généreux — padding sections `96px 32px`
- Cursor custom — ne pas supprimer
- Noise texture overlay — ne pas supprimer

### Ce qu'on évite
- Pas de couleurs vives (pas de bleu, rouge, violet aléatoire)
- Pas de gradients colorés
- Pas de shadows portées décoratives
- Pas d'animations excessives ou flashy
- Pas de fonts Arial, Inter, Roboto, system-ui
- Pas de ton "guru" ou marketing exagéré dans les textes
- Pas de layout centré sur mobile avec tout en `text-align: center`

### Hiérarchie typographique
- `h1` hero : `clamp(48px, 7vw, 88px)` — Playfair
- `h2` sections : `clamp(28px, 3.5vw, 44px)` — Playfair
- Corps texte : `14px` — Geist Mono, `color: var(--text-muted)`
- Labels / chips : `11px` uppercase, `letter-spacing: .08em`
- Titres cards/items : `13–15px`, `font-weight: 500`

---

## Structure du fichier index.html

```
<nav>            — Navigation fixe avec logo, liens centrés, badge + CTA
<section#hero>   — Headline, sous-titre, CTA buttons, 4 stat cards
<hr.sep>
<div#about>      — Bio card gauche + Services card droite
<hr.sep>
<div#projects>   — Liste de proj-row (actuellement 4 projets)
<hr.sep>
<div#contact>    — Contact card gauche + Form card droite
<footer>
```

---

## Infos à personnaliser
- Email : remplacer `ray@example.com` par le vrai email
- Liens projets : remplacer les `href="#"` par les vrais URLs
- Liens sociaux : LinkedIn, GitHub, Behance, Instagram — à relier
- Année footer : mettre à jour si nécessaire

---

## Commandes utiles dans Claude Code

Pour ajouter un projet :
> "Ajoute un projet row avec le numéro 05, titre '...', description '...', tags '...'"

Pour modifier un texte :
> "Dans la section hero, change le sous-titre par '...'"

Pour ajouter une section :
> "Ajoute une section Testimonials après Projects, avec le même style que les autres sections"

Pour changer une couleur d'accent :
> "Remplace l'accent blanc par un bleu zinc subtil — reste dans le système de couleurs actuel"
