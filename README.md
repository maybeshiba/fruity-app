# 🍊 Fruity — Fruit Discovery Tracker

> Discover new fruits, build streaks, and level up your eating habits — one portion at a time.

**[▶ Try it live →](https://maybeshiba.github.io/fruity-app/)**

![Version](https://img.shields.io/badge/version-1.1-orange) ![PWA](https://img.shields.io/badge/PWA-installable-brightgreen) ![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-blue)

---

## What is Fruity?

Fruity is a Progressive Web App (PWA) for tracking and discovering the fruit you eat. It's built around trying new varieties in a fun and structured way — through XP, levels, challenges, and a passport of stamps — rather than feeling like a chore.

Built as a single HTML file. No accounts. No servers. Your data stays on your device.

---

## Features

### 🍎 Today
Log every fruit you eat each day — as whole fruit, juice, or smoothie. See your vitamin coverage across 6 vitamins tracked against real EFSA/DGE RDA values, get smart suggestions for what you're missing, and build a daily streak. Seasonal fruits earn double XP. Frozen, canned and dried fruit count too.

### 🍳 Challenge
Monthly cooking challenges with four difficulty tiers: Easy, Classic, Difficult, and Trio. Unlock Fruit Roulette (pushes you to try fruits you've never logged), Pairing of the Week, Friday Sips cocktail trivia, and the Fruit Bucket List as you level up.

### 🧠 Knowledge
Fruit Trivia (daily question), Origins Quiz (3 questions per fruit, 75 quizzes total), Fruit Lab (tea and ferment ideas), and Fruit Keeper (storage tips).

### 🗺️ Passport
Stamp every new fruit you try across 7 categories: Everyday, Berries, Pome & Stone Fruits, Citrus, Asian Fruits, Latin American, and Rare Finds. 75 fruits to collect. Tap any stamp for a detailed fruit card with nutrition, flavour profile, origins quiz score, and where to find it in Germany. Complete a category to claim bonus XP.

### 👤 Me
Your stats, full history, XP ladder, Monthly Recap (unlocks at Lvl 10), Flavour Wheel, and Pixel Fruit Artist. 15 levels from Bilberry Beginner to King Durian, each unlocking a new feature.

---

## 75 Fruits

Covers everyday staples, seasonal German fruits, citrus varieties, Asian and Latin American imports, and rare finds including Jackfruit, Feijoa, Ackee, Kiwano, Salak, Tamarillo, and Maracuya.

---

## Levels & Unlocks

| Level | Name | XP | Unlocks |
|---|---|---|---|
| 1 | Bilberry Beginner | 0 | — |
| 2 | Coconutty Collector | 60 | 🗺️ Fruit Passport + 🏅 Achievements |
| 3 | Guanabana Gambler | 150 | 🎰 Fruit Roulette |
| 4 | Russet Ripener | 280 | 🧊 Fruit Keeper |
| 5 | Pineapply Pioneer | 450 | 🌍 Origins Quiz |
| 6 | Bergamot Brewer | 700 | 🧪 Fruit Lab |
| 7 | Passionfruity Pairer | 1,000 | 🍽️ Pairing of the Week |
| 8 | Juniper Jammer | 1,350 | 🍓 What to Make With |
| 9 | Loquat Legend | 1,750 | 🍳 Trio Challenge |
| 10 | Tangerine Taster | 2,200 | 🎡 Flavour Wheel + 📋 Monthly Recap |
| 11 | Bignay Bartender | 3,100 | 🍹 Friday Sips |
| 12 | Mirabelly Maestro | 4,200 | 🎨 Colour Themes + 🎵 Additional Music |
| 13 | Kumquat Kolorist | 5,500 | 🎨 Pixel Fruit Artist |
| 14 | Cherimoya Challenger | 7,200 | 🏆 Fruit Bucket List |
| 15 | King Durian | 10,000 | 🪪 Fruit Identity Card |

---

## Install as PWA

Fruity works fully offline once installed.

**Android (Chrome):**
1. Open the app in Chrome
2. Tap the three-dot menu and select *Add to Home screen*
3. Tap *Add* — it will appear as a standalone app icon

**iPhone (Safari):**
1. Open the app in Safari
2. Tap the Share button and select *Add to Home Screen*
3. Tap *Add*

---

## Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks, no build step
- All fruit icons embedded as base64 PNG (works fully offline)
- LocalStorage for all user data (no backend, no accounts)
- Service Worker for offline caching and PWA install
- Progressive Web App — installable, standalone display mode

---

## Changelog

### v1.1
- 🎨 Colour Themes — Tangerine, Kiwi and Blueberry themes, unlockable at Lvl 12
- 🎵 Additional Music — two bonus tracks unlockable at Lvl 12
- 📋 Monthly Recap — auto-generates on the 1st of each month, shows portions, streak, best day, top vitamin and new discoveries. Unlocks at Lvl 10
- 🔥 Streak Repair — if yesterday had no log, the app prompts on next open to retrospectively add fruit, juice or smoothie
- 🧬 Nutrition rework — vitamin tracking now uses portion-based RDA accumulation (USDA FoodData Central values against EFSA/DGE daily RDAs) rather than day-counting
- 💾 Data backup — download and restore a full JSON backup of all progress from Settings
- 🗺️ Passport fruit cards — tap any passport stamp to see a detailed card with categories, vitamin bars, where to find in Germany, flavour profile and Origins Quiz score

### v1.0
- Initial release: 75 fruits, 15 levels, Today/Challenge/Knowledge/Passport/Me tabs, juice and smoothie logging, fruit trivia, origins quiz, fruit lab, fruit keeper, roulette, passport, flavour wheel, pixel art, background music

---

## Feedback & Bugs

Found a bug or have a suggestion? [Open an issue →](https://github.com/maybeshiba/fruity-app/issues/new)

---

## License

This project is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — free to share and adapt for non-commercial use.

---

## Credits

<a href="https://www.flaticon.com/free-icons/fruit" title="fruit icons">Fruit icons created by Paul J. — Flaticon</a>

Background music by snoozybeats — [Pixabay](https://pixabay.com/)
