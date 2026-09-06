---
layout: default
title: BepInEx.Android — NextBep
---

[← Back](../)

# BepInEx.Android

**Core BepInEx fork for Android Unity IL2CPP**

---

## Overview

BepInEx.Android adapts BepInEx 6 for Android, enabling .NET plugins to run inside Unity IL2CPP games. It provides the injection chain, runtime container, and interop layer needed to load BepInEx plugins on Android devices.

## Architecture

```
Game Process
  └─ BootstrapActivity (loader)
       ├─ Pine hooks (Java method interception)
       │   ├─ ClassLoaderHooks
       │   ├─ PackageManagerHooks
       │   └─ UnityPlayerHooks
       ├─ NativeLoader (libfusion)
       │   └─ il2cpp_init hook
       ├─ CoreCLR runtime (.NET 10)
       └─ BepInEx plugin loader
```

## Components

### Pine Hooks

ART Java method hook framework used for runtime interception:

- **ClassLoaderHooks** — Intercepts `ClassLoader.loadClass` to register BepInEx assemblies
- **PackageManagerHooks** — Hooks `getPackageInfo` for game context setup
- **UnityPlayerHooks** — Hooks Unity player lifecycle for injection timing

### NativeLoader (libfusion)

Native shared library that hooks `il2cpp_init` to bootstrap the BepInEx runtime inside the Unity process.

### CoreCLR Runtime

Microsoft .NET 10 runtime built from source with OpenSSL crypto backend, replacing BoringSSL to fix SIGSEGV crashes on Android 16 / Xiaomi HyperOS.

## Source Code

- [GitHub Repository](https://github.com/NextBep/BepInEx.Android)

---

[← Back](../)
