---
title: Getting Started
---

# Getting Started

## Requirements

- Android 9+ (API 28+)
- arm64-v8a device
- A Unity IL2CPP game installed

## Installation

### Download

Download the latest release from [GitHub Releases](https://github.com/NextBep/BepInEx.Android.Launcher/releases).

### Setup

1. Install the APK on your Android device
2. Grant **All files access** permission when prompted
3. Open the launcher - it will automatically scan for installed Unity IL2CPP games
4. Select a game and tap **Launch**
5. The launcher will automatically download and extract the BepInEx framework on first run

## How It Works

The launcher uses [Pine](https://github.com/nicene-nerd/Pine) (an ART hook framework) to intercept the game's ClassLoader, native library loading, and UnityPlayer initialization.

A custom `libmain.so` and `libfusion.so` control the dlopen order to install an `il2cpp_init` hook before Unity starts. This hook launches CoreCLR and the BepInEx preloader.

```
Game Launch
    ↓
Pine intercepts ClassLoader
    ↓
libmain.so controls dlopen order
    ↓
il2cpp_init hook installed
    ↓
CoreCLR launched
    ↓
BepInEx preloader starts
    ↓
Mods loaded
    ↓
Game continues
```

## First Launch

On first launch for a game:

1. The launcher detects the game's Unity version
2. Downloads the appropriate BepInEx framework and .NET runtime
3. Downloads unstripped `libunity.so` (if needed for your game)
4. Extracts all files to the game's data directory
5. Launches the game with BepInEx injected

This process typically takes 10-30 seconds depending on your connection speed.

## Launching with Mods

1. Ensure you have a modpack configured (see [Modpack Management](./modpacks.md))
2. Select the desired modpack from the modpack list
3. Tap **Launch** to start the game with the active modpack's mods loaded

## Launching without Mods

To launch the game without any mods:

1. Deselect the active modpack (tap the currently active modpack to deactivate it)
2. Tap **Launch**

The game will start normally without BepInEx injecting any mods.

## Updating

The launcher checks for updates on startup. When an update is available, a dialog will appear with release notes and a download link.

You can also check manually in **Settings → About**.
