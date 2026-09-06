# Runtime

A fork of [dotnet/runtime](https://github.com/dotnet/runtime) with Android-specific fixes for running .NET inside Unity game processes.

## Overview

The runtime fork provides the CoreCLR (.NET) runtime adapted for:

- Android ARM64 architecture
- Running inside Unity game processes
- Compatibility with BepInEx plugin system

## Key Modifications

- Android-specific threading fixes
- Memory management optimizations for game processes
- Compatibility with Pine hook framework
- Support for IL2CPP runtime environment

## Usage

The runtime is automatically downloaded and extracted by the launcher when needed. You typically don't need to interact with it directly.

## Source Code

GitHub: [NextBep/runtime](https://github.com/NextBep/runtime)
