---
title: FAQ
---

# Frequently Asked Questions

Common questions about BepInEx Android Launcher.

## General

### What is BepInEx Android Launcher?

BepInEx Android Launcher is an Android app that allows you to load BepInEx mods in Unity IL2CPP games on Android devices.

### Is it free?

Yes, the launcher is free and open-source under the GPL-3.0 license.

### Where can I download it?

Download the latest release from [GitHub Releases](https://github.com/NextBep/BepInEx.Android.Launcher/releases).

### What Android version do I need?

Android 9+ (API 28) or higher on an arm64-v8a device.

## Compatibility

### Does it work with all Android games?

No. The launcher only works with Unity IL2CPP games. It does not support:
- Mono-based Unity games
- Non-Unity games
- Games with anti-cheat protection

### How do I know if a game is Unity IL2CPP?

- Check the game's listing on sites like [UnityData.com](https://www.unitydata.com)
- Look for `libil2cpp.so` in the game's APK
- The launcher will automatically detect IL2CPP games when scanning

### Does it work with root or non-root devices?

The launcher works on both rooted and non-rooted devices. Root is not required.

## Mods

### Where do I put mod files?

Place mod DLL files in the BepInEx/plugins folder within the game's data directory. The launcher's file browser can help you navigate there.

### Can I use PC BepInEx mods on Android?

Some mods may work if they don't depend on Windows-specific libraries. However, most PC mods need to be ported or rebuilt for Android.

### How do I install mods?

1. Create or import a modpack in the **Modpacks** tab
2. Add mod files to the modpack
3. Activate the modpack
4. Launch the game

### Why aren't my mods loading?

Check the following:
- The modpack is activated
- Mod DLLs are in the correct folder
- The mod is compatible with your game version
- Check the BepInEx log for error messages

## Troubleshooting

### The game crashes on launch

See the [Troubleshooting](./troubleshooting.md) guide for solutions.

### How do I report a bug?

1. Export diagnostics from **Settings → Export Diagnostics**
2. Open an issue on [GitHub Issues](https://github.com/NextBep/BepInEx.Android.Launcher/issues)
3. Include the diagnostic file and describe the problem

### Can I contribute to the project?

Yes! The project is open-source on [GitHub](https://github.com/NextBep/BepInEx.Android.Launcher). You can:
- Report bugs
- Suggest features
- Submit pull requests
- Help with translations on [Crowdin](https://crowdin.com/project/bepinex-android-launcher)

## Modpacks

### What is a modpack?

A modpack is a collection of mods bundled together. It allows you to switch between different mod combinations easily.

### What file formats are supported?

Modpacks use `.rhp` or `.zip` file formats for import and export.

### Can I share modpacks?

Yes, export a modpack and share the `.rhp` file with others. They can import it using the Import function.

## Settings

### What does "Clear BepInEx" do?

It removes the extracted BepInEx framework files. The launcher will re-extract them on the next launch.

### What does "Clear libunity" do?

It removes all downloaded unstripped `libunity.so` files. The launcher will re-download them if needed.

### What is the floating log?

The floating log is an overlay window that shows BepInEx output while a game is running. Enable it in **Settings → Floating Log**.
