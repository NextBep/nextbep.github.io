---
title: Log Viewer
---

# Log Viewer

The built-in log viewer allows you to inspect BepInEx output and diagnose issues with mods.

## Accessing the Log Viewer

1. Go to **Settings → View Logs**
2. The log viewer opens showing the most recent log entries

## Features

### Filter

Filter log entries to find specific information:

- **Error**: Show only error messages
- **Warning**: Show only warnings
- **Info**: Show informational messages
- **Debug**: Show verbose debug output
- **All**: Show all log entries

Use the search bar to filter by keyword or text content.

### Auto-Scroll

- **Enabled** (default): Automatically scrolls to the latest log entries
- **Disabled**: Keeps the current scroll position

Toggle auto-scroll by tapping the auto-scroll button at the bottom of the viewer.

### Copy

Copy log entries for sharing or analysis:

1. Select one or more log entries
2. Tap the **Copy** button
3. The selected entries are copied to your clipboard

### Share

Share log entries directly:

1. Tap the **Share** button
2. Choose a sharing method (messaging, email, etc.)
3. The log content is shared as text

## Log Sources

The log viewer displays output from:

- **BepInEx preloader**: Framework initialization messages
- **Mod loading**: Plugin discovery and loading status
- **Game runtime**: Runtime errors and diagnostics

## Reading Logs

Log entries follow this format:

```
[Timestamp] [Level] [Source] Message
```

- **Timestamp**: When the entry was logged
- **Level**: Severity (Info, Warning, Error)
- **Source**: Which component produced the message
- **Message**: The actual log content

## Tips

- Look for `[Error]` entries when diagnosing issues
- Check mod loading messages to verify plugins are detected
- Use the filter to focus on specific mods or components
- Export logs and share them when reporting issues on [GitHub](https://github.com/NextBep/BepInEx.Android.Launcher/issues)
