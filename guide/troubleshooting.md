---
title: Troubleshooting
---

# Troubleshooting

Common issues and solutions for BepInEx Android Launcher.

## Game Won't Launch

### Check Requirements

- Android 9+ (API 28+)
- arm64-v8a device
- Unity IL2CPP game (not Mono)

### Grant Permissions

Ensure the launcher has **All files access** permission:
1. Go to Android Settings → Apps → BepInEx Launcher
2. Tap **Permissions**
3. Enable **All files access**

### Enable libunity

Some games require unstripped `libunity.so`:
1. Go to game settings in the launcher
2. Enable **Use unstripped libunity**
3. Try launching again

## Mods Not Loading

### Verify Modpack

1. Ensure the modpack is activated in the **Modpacks** tab
2. Check that the mods are compatible with your game version
3. Look at the BepInEx log for errors

### Check Logs

1. Open the launcher
2. Go to **Settings → View Logs**
3. Look for error messages related to mod loading

### Common Mod Issues

| Issue | Solution |
|-------|----------|
| Mod not detected | Ensure the mod DLL is in the correct BepInEx/plugins folder |
| Dependency missing | Install required dependencies for the mod |
| Version mismatch | Update the mod to match your game version |

## Crash on Startup

### Check Requirements

- Android 9+ (API 28+)
- arm64-v8a device
- Unity IL2CPP game (not Mono)

### Clear Data

If the game crashes on startup:
1. Go to **Settings → Clear BepInEx**
2. Go to **Settings → Clear .NET**
3. Try launching again

### Enable libunity

Some games require unstripped `libunity.so`:
1. Go to game settings
2. Enable **Use unstripped libunity**
3. Try launching again

## BepInEx Extraction Fails

### Clear BepInEx Cache

1. Go to **Settings → Clear BepInEx**
2. Relaunch the game - the launcher will re-extract the framework

### Check Storage

Ensure you have enough storage space:
- BepInEx framework: ~50 MB
- .NET runtime: ~30 MB
- Unstripped libunity: varies by game

## libunity Download Slow

### Check Connection

- Ensure you have a stable internet connection
- Try switching between Wi-Fi and mobile data

### Clear libunity Cache

1. Go to **Settings → Clear libunity**
2. Try launching again - the launcher will re-download

## CoreCLR Failed to Start

This error indicates the .NET runtime failed to initialize:
1. Go to **Settings → Clear .NET**
2. Relaunch the game
3. If the issue persists, check device compatibility

## Huawei / HarmonyOS

If you experience rotation crashes on Huawei devices:
- The launcher includes a built-in fix for HarmonyOS rotation issues
- If problems persist, try disabling auto-rotation in your device settings

## Getting Help

If you're still having issues:
1. Export diagnostics from **Settings → Export Diagnostics**
2. Visit the [GitHub Issues](https://github.com/NextBep/BepInEx.Android.Launcher/issues) page
3. Include the diagnostic file in your issue report
