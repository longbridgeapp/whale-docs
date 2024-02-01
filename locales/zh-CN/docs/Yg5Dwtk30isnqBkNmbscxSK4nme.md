---
title: 数据导入
slug: Yg5Dwtk30isnqBkNmbscxSK4nme
sidebar_position: 0
---


# 数据导入

## 适用场景

导入港股的公司行动 CCNAN05/CCNPT02 文件时，同时会自动创建预告

## 前置条件

无

## 操作说明

执行菜单：清算管理&gt;市场清算&gt;文件处理

### 05 文件

(港股）每日下午 5 点前，导入 CCNAN05 档，系统会按导入资讯，登记日，自动生成公司行动预告，并预设方案

<img src="/assets/MHOnbYorToFsDFxMTmEcW92Snae.png" src-width="3358" src-height="1224" align="center"/>

HK 市场在导入 05 文件后，会自动创建公司行动预告，成为'初始化'状态预告

<img src="/assets/V0WXbKhHIoiJphxrjYkckRCEnmo.png" src-width="3320" src-height="1614" align="center"/>

### 02 文件

(港股）执行前导入 CCNPT02 档，在执行复核页面，会展示港交所通知的数据，用于核对系统所计算的数据

<img src="/assets/RljRbu9NXoIuW1xdVqnczo8hnZg.png" src-width="3356" src-height="1210" align="center"/>

BE 类香港公司行动增加自动更新机制如下：

- 导入 05 文件后，未登记的 BE 类公司行动将自动更新数据
- 导入 05 文件后，已登记的 BE 类公司行动根据初始化开关自动更新（默认关闭）
- 导入 02 文件后，BE 类将更新 CCASS 状态（F 为 CCACC 已经）和 CCASS 文件日期字段，导入后没有自动创建的将重新触发创建
    
