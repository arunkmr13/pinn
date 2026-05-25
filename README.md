# Pinn 📍

> **Only real sticks.**

Pinn is a verified real-feed platform where every post carries cryptographic proof of how it was created. No AI-generated content. No fakes. Just ground truth — pinned to reality.

---

## What makes Pinn different

Every post on Pinn shows a **Signal** — a 5-layer trust breakdown that tells you exactly why something is verified:

| Layer | What it checks |
|---|---|
| 🖥 Device signed | Photo captured on a real device via C2PA hardware signature |
| 👤 Verified human | One real person, one account — liveness-checked |
| 🧠 Caption match | LLM cross-checks caption against image content |
| 📍 Location verified | GPS + EXIF matched against claimed location |
| 👥 Community hold | Trusted nearby users vouched with their reputation |

No black box. No single checkmark. Users see the full proof chain on every post.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| State | Zustand 5 |
| Routing | React Router v7 |
| HTTP | Axios |
| Icons | Lucide React |
| Backend *(planned)* | FastAPI + PostgreSQL |

---

## Project structure

```
src/
├── assets/
│   └── branding/          ← Pinn SVG logos (dark, light, wordmarks)
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx    ← desktop left nav + theme toggle
│   │   ├── TopBar.jsx     ← mobile top bar
│   │   └── BottomNav.jsx  ← mobile bottom nav
│   └── shared/
│       ├── PinnCard.jsx        ← post card with signal bar
│       ├── TrustSignalBar.jsx  ← 5-dot signal indicator
│       ├── TrustLayerSheet.jsx ← full proof breakdown
│       ├── PinnButton.jsx      ← primary button component
│       └── Avatar.jsx
├── pages/
│   ├── Feed.jsx           ← The Board (main feed)
│   ├── PostDetail.jsx     ← single post + signal threads
│   ├── Compose.jsx        ← new pinn form
│   ├── Notifications.jsx  ← alerts
│   ├── Profile.jsx        ← user profile + trust stats
│   └── Auth/
│       ├── Login.jsx
│       └── Register.jsx
├── store/
│   ├── themeStore.js      ← dark/light theme, persisted to localStorage
│   ├── authStore.js       ← user auth state
│   └── feedStore.js       ← posts, addPost, fetchPosts (API-ready stub)
└── data/
    └── mockPosts.js       ← 5 realistic hyperlocal posts for dev
```

---

## Colour system — Carbon scheme

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#ffffff` | `#111110` |
| `--surface` | `#f5f5f0` | `#1a1a18` |
| `--card` | `#f8f8f3` | `#222220` |
| `--border` | `#e0e0d8` | `#2e2e2c` |
| `--text-primary` | `#111110` | `#f0efe8` |
| `--text-secondary` | `#4a4a42` | `#8a8a82` |
| `--text-muted` | `#8a8a82` | `#6a6a62` |
| `--primary` | `#ff5733` | `#ff5733` |

Theme toggles via `html.dark` class. Persisted in `localStorage`. Defaults to system preference on first visit.

---

## Running locally

```bash
# clone
git clone https://github.com/arunkmr13/pinn.git
cd pinn

# install
npm install

# run dev server
npm run dev
```

Open `http://localhost:5173`

---

## Branch strategy

```
main   → stable, production-ready — never push directly
dev    → active development
feature/[name] → one branch per feature, merged into dev
```

---

## Roadmap

### Phase 1 — Frontend scaffold *(current)*
- [x] React + Vite + Tailwind v4 setup
- [x] Carbon dark/light theme system
- [x] Responsive layout — sidebar desktop, bottom nav mobile
- [x] Feed page with PinnCard components
- [x] TrustSignalBar — 5-layer signal indicator
- [x] PostDetail with full signal thread breakdown
- [x] Mock data with varied signal levels
- [x] Theme toggle persisted to localStorage

### Phase 2 — Backend
- [ ] FastAPI + PostgreSQL setup
- [ ] Post creation and feed endpoints
- [ ] User auth (JWT)
- [ ] EXIF extraction pipeline
- [ ] LLM caption ↔ image verification
- [ ] C2PA device signature verification

### Phase 3 — Trust layers
- [ ] Identity verification (liveness check)
- [ ] Location cross-reference (weather/satellite)
- [ ] Community hold / flag system
- [ ] Reputation scoring

### Phase 4 — Mobile
- [ ] Flutter app (Android + iOS)
- [ ] Native camera with C2PA chain
- [ ] Push notifications

---

## Design principles

- No likes, no follower counts — **signal is the only metric**
- No AI-generated content — every post must be provably real
- No vanity metrics — trust replaces engagement
- Hyperlocal by default — ground truth from nearby people

---

