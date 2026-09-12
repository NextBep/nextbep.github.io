---
title: 常见问题
---

# 常见问题

关于 BepInEx 启动器的常见问题。

## 基本信息

### BepInEx 启动器是什么？

BepInEx 启动器是一款 Android 应用，允许你在 Android 设备上的 Unity IL2CPP 游戏中加载 BepInEx Mod。

### 是免费的吗？

是的，启动器是免费且开源的，基于 GPL-3.0 许可证。

### 在哪里可以下载？

从 [GitHub Releases](https://github.com/NextBep/BepInEx.Android.Launcher/releases) 下载最新版本。

### 需要什么 Android 版本？

Android 9+（API 28）或更高版本，arm64-v8a 设备。

## 兼容性

### 适用于所有 Android 游戏吗？

不。启动器仅适用于 Unity IL2CPP 游戏。不支持：
- 基于 Mono 的 Unity 游戏
- 非 Unity 游戏
- 具有反作弊保护的游戏

### 如何判断游戏是否是 Unity IL2CPP？

- 在 [UnityData.com](https://www.unitydata.com) 等网站上查看游戏列表
- 查看游戏 APK 中是否存在 `libil2cpp.so`
- 启动器在扫描时会自动检测 IL2CPP 游戏

### 在 root 和非 root 设备上都能工作吗？

启动器在 root 和非 root 设备上都能工作。不需要 root。

## Mod

### Mod 文件放在哪里？

将 Mod DLL 文件放在游戏数据目录中的 BepInEx/plugins 文件夹中。启动器的文件浏览器可以帮助你导航到那里。

### 可以在 Android 上使用 PC 版 BepInEx Mod 吗？

某些 Mod 如果不依赖 Windows 特定库可能会工作。但是，大多数 PC Mod 需要移植或重新构建以适用于 Android。

### 如何安装 Mod？

1. 在 **整合包** 标签页中创建或导入整合包
2. 将 Mod 文件添加到整合包
3. 激活整合包
4. 启动游戏

### 为什么 Mod 没有加载？

检查以下内容：
- 整合包已激活
- Mod DLL 在正确的文件夹中
- Mod 与你的游戏版本兼容
- 查看 BepInEx 日志中的错误消息

## 故障排除

### 游戏启动时崩溃

参阅[故障排查](./troubleshooting.md)指南了解解决方案。

### 如何报告错误？

1. 从 **设置 → 导出诊断** 导出诊断信息
2. 在 [GitHub Issues](https://github.com/NextBep/BepInEx.Android.Launcher/issues) 上提交问题
3. 附上诊断文件并描述问题

### 可以贡献项目吗？

可以！该项目在 [GitHub](https://github.com/NextBep/BepInEx.Android.Launcher) 上开源。你可以：
- 报告错误
- 建议功能
- 提交拉取请求
- 在 [Crowdin](https://crowdin.com/project/bepinex-android-launcher) 上帮助翻译

## 整合包

### 什么是整合包？

整合包是组合在一起的 Mod 集合。它允许你轻松切换不同的 Mod 组合。

### 支持什么文件格式？

整合包使用 `.rhp` 或 `.zip` 文件格式进行导入和导出。

### 可以共享整合包吗？

可以，导出整合包并与他人分享 `.rhp` 文件。他们可以使用导入功能导入它。

## 设置

### "清除 BepInEx" 是做什么的？

它移除已解压的 BepInEx 框架文件。启动器将在下次启动时重新解压它们。

### "清除 libunity" 是做什么的？

它移除所有已下载的未剥离 `libunity.so` 文件。启动器将在需要时重新下载它们。

### 浮动日志是什么？

浮动日志是一个覆盖窗口，在游戏运行时显示 BepInEx 输出。在 **设置 → 浮动日志** 中启用它。
