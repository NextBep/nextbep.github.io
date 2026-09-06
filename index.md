---
layout: default
title: NextBep
---

# NextBep

**Android BepInEx Modding Framework**

Open-source tools for modding Unity IL2CPP games on Android using BepInEx.

---

## Projects

### [BepInEx.Android](https://github.com/NextBep/BepInEx.Android)

The core BepInEx fork for Android. Adapts BepInEx 6 for embedded CoreCLR + IL2CPP interop, enabling .NET plugins to run inside Unity IL2CPP games on Android.

- Custom injection chain with Pine hooks
- CoreCLR runtime integration
- NativeLoader architecture
- OpenSSL crypto backend (replacing BoringSSL)

---

### [BepInEx.Android.Launcher](https://github.com/NextBep/BepInEx.Android.Launcher)

Generic launcher for managing BepInEx mods across multiple Unity IL2CPP games. Supports modpack management, config editing, and per-game settings.

- Multi-game support with auto-detection
- Modpack create / import / export / activate
- Config editor with syntax highlighting
- Per-game libunity management
- Crash diagnostics export
- Dynamic color (Material You) support
- 18 languages

---

## Getting Started

1. Install a Unity IL2CPP game on your Android device
2. Download the latest [BepInEx.Android.Launcher](https://github.com/NextBep/BepInEx.Android.Launcher/releases) release
3. Grant storage permission when prompted
4. Select your game and launch — the launcher handles setup automatically

---

## Community

- [GitHub Discussions](https://github.com/NextBep/BepInEx.Android.Launcher/discussions)
- [Issue Tracker](https://github.com/NextBep/BepInEx.Android.Launcher/issues)

---

## License

BepInEx.Android and BepInEx.Android.Launcher are open-source projects under the [MIT License](https://github.com/NextBep/BepInEx.Android.Launcher/blob/main/LICENSE).

---

<p align="center">
  <sub>© 2026 NextBep · Built with BepInEx, FusionCore, Pine, and Dobby</sub>
</p>
