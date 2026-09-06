# Configuration

## Per-Game Settings

Each game has its own independent settings. Select a game to configure it.

### Unstripped libunity

Some games require an unstripped `libunity.so` for certain mods to work. This setting is per-game:

- **Enabled** (default): Downloads and uses unstripped `libunity.so`
- **Disabled**: Uses the game's original `libunity.so`

To clear the downloaded libunity cache, go to **Settings → Clear libunity cache**.

### Unity Kill Blocking

By default, the launcher does not block `UnityPlayer.kill()`. Some games may need this blocked to prevent crashes.

- **Enabled**: Blocks `UnityPlayer.kill()` calls
- **Disabled** (default): Allows normal kill behavior

## General Settings

### Dynamic Color (Material You)

On Android 12+, the launcher uses your system's dynamic color (Monet) to theme the app.

- **Enabled** (default): Uses system dynamic colors
- **Disabled**: Uses the default blue theme

### Animations

Toggle UI animations on or off. Disabling animations can improve performance on older devices.

## Debug Settings

### Export Diagnostics

If the game crashes, the launcher will detect it and offer to export diagnostics. This includes:

- Logcat output
- BepInEx log files
- System information

You can also manually export diagnostics from **Settings → Export Diagnostics**.

## Updating

The launcher automatically checks for updates on startup. You can also check manually in **Settings → About**.

When an update is available:
1. A dialog appears with the release notes
2. Tap **Download** to get the latest version
3. Install the APK to update
