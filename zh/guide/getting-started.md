---
title: 快速开始
---

# 快速开始

## 系统要求

- Android 9+（API 28+）
- arm64-v8a 设备
- 已安装 Unity IL2CPP 游戏

## 安装

### 下载

从 [GitHub Releases](https://github.com/NextBep/BepInEx.Android.Launcher/releases) 下载最新版本。

### 设置

1. 在你的 Android 设备上安装 APK
2. 按提示授予 **所有文件访问** 权限
3. 打开启动器 - 它将自动扫描已安装的 Unity IL2CPP 游戏
4. 选择一个游戏并点击 **启动**
5. 首次运行时，启动器将自动下载并解压 BepInEx 框架

## 工作原理

启动器使用 [Pine](https://github.com/nicene-nerd/Pine)（一个 ART hook 框架）来拦截游戏的 ClassLoader、原生库加载和 UnityPlayer 初始化。

自定义的 `libmain.so` 和 `libfusion.so` 控制 dlopen 顺序，在 Unity 启动之前安装 `il2cpp_init` hook。此 hook 启动 CoreCLR 和 BepInEx 预加载器。

```
游戏启动
    ↓
Pine 拦截 ClassLoader
    ↓
libmain.so 控制 dlopen 顺序
    ↓
安装 il2cpp_init hook
    ↓
启动 CoreCLR
    ↓
BepInEx 预加载器启动
    ↓
加载 Mod
    ↓
游戏继续
```

## 首次启动

游戏首次启动时：

1. 启动器检测游戏的 Unity 版本
2. 下载相应的 BepInEx 框架和 .NET 运行时
3. 下载未剥离的 `libunity.so`（如果游戏需要）
4. 将所有文件解压到游戏的数据目录
5. 使用注入 BepInEx 的方式启动游戏

此过程通常需要 10-30 秒，具体取决于网络速度。

## 使用 Mod 启动

1. 确保已配置整合包（参见[整合包管理](./modpacks.md)）
2. 从整合包列表中选择所需的整合包
3. 点击 **启动** 以使用活动整合包的 Mod 启动游戏

## 不使用 Mod 启动

要不加载任何 Mod 启动游戏：

1. 取消选择活动整合包（点击当前活动的整合包以停用）
2. 点击 **启动**

游戏将正常启动，不注入任何 Mod。

## 更新

启动器在启动时会检查更新。当有可用更新时，会弹出一个对话框，显示发行说明和下载链接。

你也可以在 **设置 → 关于** 中手动检查。
