# BepInEx Android Launcher

A generic launcher app for running BepInEx mods in Unity IL2CPP games on Android.

## Overview

The launcher provides a user-friendly interface for:

- Auto-detecting installed Unity IL2CPP games
- Downloading and extracting BepInEx framework
- Managing modpacks (create, import, export, activate)
- Editing configuration files with syntax highlighting
- Viewing game logs and diagnostics

## Features

### One-Click Launch

Select a game and tap Launch. The launcher handles everything:

- Unity version detection
- BepInEx framework download
- .NET runtime extraction
- libunity.so download (if needed)
- Game launch with BepInEx injected

### Modpack Manager

Organize your mods into modpacks:

- Create custom modpacks from installed mods
- Import/export `.rhp` and `.zip` modpacks
- Switch between mod combinations instantly
- Browse and edit mod files with built-in file browser

### Config Editor

Edit mod configuration files directly in the app:

- JSON syntax highlighting
- Lua syntax highlighting
- Real-time editing with unsaved changes indicator
- Automatic save on exit

### Crash Detection

Automatic crash detection with diagnostic export:

- Detects game crashes on startup
- Exports logcat output and BepInEx logs
- Share diagnostics for troubleshooting

### Material You

Beautiful dynamic theming:

- Android 12+ Monet dynamic colors
- Light and dark mode support
- Smooth animations and transitions

### Multi-language

Supports 18 languages:

English, 简体中文, 繁體中文, 日本語, 한국어, العربية, Bahasa Indonesia, Bahasa Melayu, Deutsch, Español, Français, Italiano, Nederlands, Português, Português (Brasil), Русский, ไทย, Veneto

## Technical Details

### Injection Method

The launcher uses Pine (ART hook framework) to:

1. Intercept the game's ClassLoader
2. Control native library loading order
3. Install `il2cpp_init` hook before Unity starts
4. Launch CoreCLR and BepInEx preloader

### Per-Game Configuration

Each game has independent settings:

- **Unstripped libunity**: Download and use unstripped libunity.so
- **Unity kill blocking**: Block UnityPlayer.kill() calls (opt-in)
- **Modpack selection**: Choose which modpack to activate

## Building

```bash
# Clone the repository
git clone https://github.com/NextBep/BepInEx.Android.Launcher.git
cd BepInEx.Android.Launcher

# Build
MSYS_NO_PATHCONV=1 ./gradlew assembleDebug
```

### Requirements

- Android SDK 35
- NDK 27.0.12077973
- CMake 3.22.1
- JDK 17

## Source Code

GitHub: [NextBep/BepInEx.Android.Launcher](https://github.com/NextBep/BepInEx.Android.Launcher)

## License

GNU General Public License v3.0
