---
title: Crash Detection
---

# Crash Detection

BepInEx Launcher includes built-in crash detection to help you diagnose and resolve issues quickly.

## How It Works

When a game crashes, the launcher monitors for unexpected exits and captures diagnostic information automatically.

### Detection Process

1. The game is launched with BepInEx injected
2. The launcher monitors the game process for abnormal termination
3. If a crash is detected, a dialog appears with options to export diagnostics
4. Diagnostic logs are collected and packaged for analysis

## Crash Dialog

When a crash is detected, you will see a dialog with the following options:

- **Export Logs**: Saves diagnostic information to a file you can share
- **View Logs**: Opens the log viewer to inspect the crash output
- **Dismiss**: Closes the dialog without taking action

::: tip
Always export logs when reporting crashes - they contain critical information for diagnosing the issue.
:::

## What's Included in Diagnostics

The diagnostic export includes:

- **Logcat output**: System-level logs from the Android device
- **BepInEx logs**: Mod framework output and error messages
- **System information**: Device model, Android version, and app version

## Exporting Logs

### Automatic Export

When a crash is detected:
1. Tap **Export Logs** in the crash dialog
2. Choose a save location
3. The diagnostic file is saved as a compressed archive

### Manual Export

You can also export diagnostics manually:
1. Go to **Settings → Export Diagnostics**
2. Choose a save location
3. The diagnostic file is saved

### Sharing Logs

After exporting, you can share the diagnostic file:
- Share via messaging apps
- Attach to a [GitHub Issue](https://github.com/NextBep/BepInEx.Android.Launcher/issues)
- Send to mod developers for assistance

## Common Crash Causes

| Cause | Solution |
|-------|----------|
| Missing unstripped libunity | Enable libunity in game settings |
| Incompatible mod version | Update or remove the problematic mod |
| BepInEx extraction failure | Clear BepInEx and relaunch |
| .NET runtime issue | Clear .NET and relaunch |
| Unity kill not blocked | Enable Unity Kill Blocking |

## Troubleshooting Crashes

If you experience repeated crashes:

1. Check the [Troubleshooting](./troubleshooting.md) guide
2. Export and review diagnostic logs
3. Clear BepInEx and .NET caches in **Settings**
4. Try launching without mods to isolate the issue
5. Report the issue on [GitHub](https://github.com/NextBep/BepInEx.Android.Launcher/issues) with the diagnostic file
