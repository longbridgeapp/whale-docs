---
title: HKIDR 报送
slug: bcanmaguanli
sidebar_position: 0
---


# HKIDR 报送

## 适用场景

处理 HKIDR 机制的 BCAN-CID 档案上传（分成 SFTP 自动上传与手动上传 两种模式）

## 前置条件

无

## 操作说明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：帐户管理&gt;BCAN 管理</p>
</div>

### HKIDR 报送

本作业可以处理 HKIDR 机制的 BCAN-CID 档案上传（分成 SFTP 自动上传与手动上传 两种模式）

- 注：有关中华通的 BCAN 说明 将在系统开放支持时说明

<img src="/assets/BYcPbsqrgohUafxOwtscJK1enYe.png" src-width="1280" src-height="586" align="center"/>

其中申报逻辑：上报的数据是 已开通帐户、有 BCAN 码且同意授权协议的全量客户，申报给港交易所后，获取交易所返回的档内容，将 BCAN 生效的状态同步更新；

1. **若是劵商是 EP 租户**：本作业是支持自动申报上传（透过 SFTP 的 SDNet/2 线路）

SFTP 申报方式说明如下：

<img src="/assets/FyiOb1BuPoldCzxSpA9cL40NnBf.png" src-width="3250" src-height="1542" align="center"/>

1. **若是劵商是 OB 租户**：是要手动产生 BCAN-CID 档后，再人工透过 SFC Web ECP 网站上传资料

SFC Wings 申报方式说明如下：

 同时客户的 BCAN 生效状态结果将同步更新

<img src="/assets/MiV2b5v8doYLUPxRcWlclM9MnOf.png" src-width="3218" src-height="1228" align="center"/>

### 
