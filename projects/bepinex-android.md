# BepInEx.Android

A fork of [BepInEx](https://github.com/BepInEx/BepInEx) adapted for Android, providing modding support for Unity IL2CPP games on Android devices.

## Overview

BepInEx.Android brings the full BepInEx modding framework to Android. It works by:

1. Hooking into the game's ART runtime using Pine
2. Launching CoreCLR (.NET runtime) inside the game process
3. Loading BepInEx and all installed plugins

## Features

- Full BepInEx 6.0 compatibility
- CoreCLR runtime integration
- IL2CPP support via unstripped libunity
- Plugin loading from game data directory
- Harmony patching support

## Architecture

```
┌─────────────────────────────────────┐
│           Game Process              │
├─────────────────────────────────────┤
│  Pine (ART Hook Framework)         │
│  ├── ClassLoader interception      │
│  ├── Native library loading        │
│  └── UnityPlayer initialization    │
├─────────────────────────────────────┤
│  libmain.so / libfusion.so         │
│  └── il2cpp_init hook              │
├─────────────────────────────────────┤
│  CoreCLR (.NET Runtime)            │
│  └── BepInEx Preloader             │
├─────────────────────────────────────┤
│  BepInEx Plugin System             │
│  ├── Harmony patching              │
│  ├── Plugin loading                │
│  └── Config management             │
└─────────────────────────────────────┘
```

## Requirements

- Android 9+ (API 28+)
- arm64-v8a device
- Unity IL2CPP game

## Source Code

The source code is available on GitHub: [NextBep/BepInEx.Android](https://github.com/NextBep/BepInEx.Android)

## Related Projects

- [BepInEx](https://github.com/BepInEx/BepInEx) - Original BepInEx framework
- [Pine](https://github.com/nicene-nerd/Pine) - ART hook framework
- [CoreCLR](https://github.com/dotnet/runtime) - .NET runtime
