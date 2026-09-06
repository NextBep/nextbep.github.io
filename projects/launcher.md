---
layout: default
title: BepInEx.Android.Launcher — NextBep
---

[← Back](../)

# BepInEx.Android.Launcher

**Generic launcher for managing BepInEx mods across multiple games**

---

## Overview

A multi-game launcher that handles BepInEx setup, mod management, and game launching for Unity IL2CPP Android games. No game-specific code — works with any compatible game.

## Features

### Multi-Game Support
- Auto-detects installed Unity IL2CPP games
- Per-game BepInEx configuration
- Individual game settings

### Modpack Management
- Create, rename, delete modpacks
- Import / export `.rhp` and `.zip` archives
- Activate / deactivate modpacks
- Recursive file tree browsing
- Zip Slip protection on import

### Config Editor
- Built-in text editor for `.cfg`, `.json`, `.lua` files
- Syntax highlighting (JSON + Lua)
- Unsaved changes protection

### Per-Game Settings
- **Block Unity startup exit** — Prevents `UnityPlayer.kill()` during injection
- **Floating log overlay** — Real-time BepInEx log viewer in-game
- **Use unstripped libunity** — Toggle for debug symbol downloads
- **Clear libunity cache** — Remove downloaded libunity files

### Crash Diagnostics
- Detects abnormal game exits
- Export diagnostic bundles (logcat, crash buffers, tombstones)
- One-click sharing

### Appearance
- Material You dynamic color (Android 12+)
- Dark / Light / System theme
- Disable animations option

### Internationalization
18 languages: Arabic, Chinese (Simplified/Traditional), Dutch, English, French, German, Indonesian, Italian, Japanese, Korean, Malay, Portuguese, Portuguese (Brazil), Russian, Spanish, Thai, Venetian

## Download

[Latest Release](https://github.com/NextBep/BepInEx.Android.Launcher/releases)

## Source Code

- [GitHub Repository](https://github.com/NextBep/BepInEx.Android.Launcher)

---

[← Back](../)
