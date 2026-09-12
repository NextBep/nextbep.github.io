---
title: Configuration
---

# Configuration

BepInEx Launcher provides both per-game and general settings to customize behavior.

## Per-Game Settings

Each game has its own independent settings. Select a game to configure it.

### Unstripped libunity

Some games require an unstripped `libunity.so` for certain mods to work. This setting is per-game:

- **Enabled** (default): Downloads and uses unstripped `libunity.so`
- **Disabled**: Uses the game's original `libunity.so`

To clear the downloaded libunity cache, go to **Settings → Clear libunity cache**.

### Block Unity Kill

By default, the launcher does not block `UnityPlayer.kill()`. Some games may need this blocked to prevent crashes during shutdown.

- **Enabled**: Blocks `UnityPlayer.kill()` calls
- **Disabled** (default): Allows normal kill behavior

## General Settings

### Dynamic Color (Material You)

On Android 12+, the launcher uses your system's dynamic color (Monet) to theme the app.

- **Enabled** (default): Uses system dynamic colors
- **Disabled**: Uses the default teal theme (#00897B)

### Animations

Toggle UI animations on or off. Disabling animations can improve performance on older devices.

- **Enabled** (default): Smooth transitions throughout the UI
- **Disabled**: No animations for faster interaction

## Debug Settings

### Export Diagnostics

If the game crashes, the launcher will detect it and offer to export diagnostics. This includes:

- Logcat output
- BepInEx log files
- System information

You can also manually export diagnostics from **Settings → Export Diagnostics**.

### Log Viewer

Access the built-in log viewer to inspect BepInEx output:

1. Go to **Settings → View Logs**
2. Browse or filter log entries
3. Copy or share logs as needed

See [Log Viewer](./log-viewer.md) for more details.

## Updating

The launcher automatically checks for updates on startup. You can also check manually in **Settings → About**.

When an update is available:
1. A dialog appears with the release notes
2. Tap **Download** to get the latest version
3. Install the APK to update
