# Troubleshooting

## Game Crashes on Launch

### Check Requirements

- Android 9+ (API 28+)
- arm64-v8a device
- Unity IL2CPP game (not Mono)

### Enable libunity

Some games require unstripped `libunity.so`:

1. Go to game settings
2. Enable **Use unstripped libunity**
3. Try launching again

### Clear Data

If the game still crashes:

1. Go to **Settings → Clear libunity cache**
2. Try launching again

## BepInEx Not Loading

### Check Logs

1. Open the launcher
2. Go to **Settings → View Logs**
3. Look for error messages

### Common Issues

| Issue | Solution |
|-------|----------|
| "Failed to extract BepInEx" | Clear app data and try again |
| "Unity version not detected" | Ensure the game is a Unity IL2CPP game |
| "CoreCLR failed to start" | Check if your device supports .NET runtime |

## Modpack Issues

### Import Fails

- Ensure the file is a valid `.rhp` or `.zip` file
- Check that the file is not corrupted
- Try re-downloading the modpack

### Mods Not Loading

1. Ensure the modpack is activated
2. Check that the mods are compatible with your game version
3. Look at the BepInEx log for errors

## Huawei / HarmonyOS

If you experience rotation crashes on Huawei devices:

- The launcher includes a built-in fix for HarmonyOS rotation issues
- If problems persist, try disabling auto-rotation in your device settings

## Getting Help

If you're still having issues:

1. Export diagnostics from **Settings → Export Diagnostics**
2. Visit the [GitHub Issues](https://github.com/NextBep/BepInEx.Android.Launcher/issues) page
3. Include the diagnostic file in your issue report
