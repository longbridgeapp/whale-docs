---
title: 指數管理
slug: ˙zhishuguanli
sidebar_position: 7
---


# 指數管理

## 適用场景

滿足 SFC3.10 的要求，支持股票指數設定和壓力測試。

## 前置条件

無

## 操作说明

菜單入口：風控管理 &gt; 指數管理

### 指數級別

該菜單用來維護劵商保證金指引內所提及的指數級別。

1. 在頁面點擊【新建】可以新建指數級別

<img src="/assets/XKHwb1SRdowLN3xkoLbcTJA1nXg.png"/>

1. 若需修改指數級別配置，可以在列表頁的操作【編輯】；如配置無效或不再使用也可操作【刪除】

<img src="/assets/W8lWbfODYon7KBxT42HcXzA1nOf.png"/>

1. 若需要初始化數據，可以點選左側區點選【初始化數據】，會將系統預設指數數據作初始化配置（會將 9 個 SFC 保證金指引要求的指數及級別初始化），但操作初始化不會影響用戶自行添加的指數數據

### 股票指數

該菜單用來維護劵商保證金指引內所提及的股票指數。

1. 頁面提供與行情數據同步功能【拉取基本數據】功能，點選後可以自動同步基本數據（此數據是提供給 Whale 產品始用的行情數據源）

<img src="/assets/TLIibirQZorokNxbr6XcrzsTnNd.png"/>

1. 如果劵商若有更好的行情數據源，則可以自主批量導入，頁面也有提供【批量導入】功能，提供導入模板下載，可先在模版上編輯後，再將資料導入

<img src="/assets/KtjWb9aEDow9loxV5oWcApl7nBh.png"/>

1. 若需修改股票指數代碼，可以在列表頁的操作【編輯】；如配置無效或不再使用也可操作【刪除】

<img src="/assets/JhG1bmMvtoqMIFxhy70cuCqKnth.png"/>

### 股票級別佔比

該菜單展示股票級別佔比，並支持模擬 margin call 計算。

1. 股票級別佔比列表

<img src="/assets/FOLebDog2opgToxC3llckwDYnfb.png"/>

1. 默认三个指数跌幅为页面计算好的跌幅，也可以通過頁面的【模擬 Margin Call】功能進行人工修改並觸發模擬計算

<img src="/assets/YtqVb44g7ovKMwxGShEc9RuWnv6.png"/>

