---
title: Settings
---

# Settings

The Settings page allows you to customize the launcher's appearance and behavior.

## Appearance

### Theme

Choose between light and dark themes to match your preference.

- **Light**: Clean, bright interface
- **Dark**: Easier on the eyes in low-light environments

### Language

The launcher supports 18 languages. Select your preferred language from the dropdown menu.

If your language is missing or incomplete, consider contributing translations on [Crowdin](https://crowdin.com/project/bepinex-android-launcher). See the [Translations](./translations.md) guide for more details.

### Dynamic Color (Material You)

On Android 12+, the launcher can use your system's dynamic color (Monet) to theme the app.

- **Enabled** (default): Uses system dynamic colors based on your wallpaper
- **Disabled**: Uses the default teal theme (#00897B)

### Animations

Toggle UI animations on or off.

- **Enabled** (default): Smooth transitions and animations throughout the UI
- **Disabled**: No animations - can improve performance on older or slower devices

## In-Game

These settings affect how the launcher interacts with games at runtime.

### Floating Log

A small overlay log window that displays BepInEx output while a game is running.

- **Enabled**: Shows a draggable floating log window during gameplay
- **Disabled** (default): No overlay - check logs after exiting the game

You can tap the floating log to expand it, drag it to reposition, or use the close button to dismiss it.

### Unstripped libunity

Some games require an unstripped `libunity.so` for certain mods to work correctly.

- **Enabled** (default): Downloads and uses unstripped `libunity.so` for the game
- **Disabled**: Uses the game's original stripped `libunity.so`

This is a per-game setting. See [Configuration](./configuration.md) for more details.

### Block Unity Kill

Some games call `UnityPlayer.kill()` to shut down, which can cause issues with mod unloading.

- **Enabled**: Blocks `UnityPlayer.kill()` calls to prevent abrupt shutdowns
- **Disabled** (default): Allows normal kill behavior

Enable this only if you experience crashes during game shutdown.

## Maintenance

These tools help keep the launcher and mod environment clean.

### Clear BepInEx

Removes the extracted BepInEx framework files for all games. The launcher will re-extract them on the next launch.

Use this when:
- BepInEx files become corrupted
- You want to force a fresh installation of the framework
- After a launcher update that includes a new BepInEx version

### Clear .NET

Removes the downloaded .NET runtime files. The launcher will re-download them on the next launch.

Use this when:
- The .NET runtime becomes corrupted
- You want to free up storage space
- After a runtime update

### Clear libunity

Removes all downloaded unstripped `libunity.so` files. The launcher will re-download them on the next launch if needed.

Use this when:
- The unstripped libunity causes crashes
- You want to free up storage space
- You suspect the file is corrupted

### Copy Resources

Copies game resources to a location accessible by BepInEx mods. This is useful for mods that need to read game assets directly.

Use this when:
- A mod reports missing game resources
- You want to enable resource-based modding features
