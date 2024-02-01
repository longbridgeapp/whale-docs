---
title: 授信额度
slug: B0ZlwGIgrijiMQkZuWfcrlZYnvf
sidebar_position: 1
---


# 授信额度

## 适用场景

客户若开通 margin 帐户，后面客户操作了转仓/入金，则系统自动会给客户授信一定的额度，客户可以进行保证金交易。同时，支持人工授予客户保证金额度。

## 前置条件

需要先在「客户参数」核验授信全局配置。​
（首次使用授信系统会有初始化配置，可以根据实际业务需求进行调整）

## 操作说明

菜单入口：风控管理  &gt; 授信额度 &gt; 授信额度

### 客户额度

该菜单主要用于查询所有授信客户额度情况，同时若有客户需求，也可支持人工给客户授信及调整额度。​
主要操作场景如下：

**调整客户额度**

1. 列表为所有融资授信客户，打开列表页的调整弹窗为已授信客户调整额度

<img src="/assets/MgIMbRy5RoqIS5xNnZhcOlyMn2d.png" src-width="3044" src-height="1356" align="center"/>

<img src="/assets/D6CmbBk0UoHIKYxb7mKcBLirn9c.png" src-width="2166" src-height="1348" align="center"/>

1. 确定【调整后额度】，提交则需要进入额度审批页面的对应记录进行额度审批；见「[额度审批](https://longbridge.feishu.cn/docx/H1NgdfrSlo81gqxb2TZc9ccwnFQ#JQcidvfLvoDB7gxvNBncjwYYnoh)」

<img src="/assets/HoMubG5OHoBaFLxqfnecAn69nHh.png" src-width="1026" src-height="214" align="center"/>

**新建授信客户**

1. 列表页【新建授信客户】可以单个新增授信客户

<img src="/assets/ZpmNb37WmoecDGxFyD9chPNJnah.png" src-width="3198" src-height="416" align="center"/>

1. 弹窗页填写相关信息（若客户已在授信列表，提交时会提示，可以在主列表查看客户额度）

<img src="/assets/Effzbxo6eotTUKx2KDVch55SnOc.png" src-width="3234" src-height="1328" align="center"/>

1. 若需一次性给多个客户授信，可以在列表右上方的【批量新增】操作

<img src="/assets/H6CcbL8LdoD8zyx2YjDcTdvanwc.png" src-width="3172" src-height="1160" align="center"/>

1. 无论是单个还是批量新增，提交后都需在工单系统审批。审批通过后方可对客户额度生效

**删除已注销客户授信额度**

业务中可能存在有些客户账户已经注销，但仍会计算在公司总批核额度中，可以人工删除该部分客户额度。

1. 筛选注销状态的授信客户

<img src="/assets/WBMrbGOk8oJwRVxwrZwcNHJ5nCc.png" src-width="1684" src-height="464" align="center"/>

1. 选择并删除已注销的授信客户

<img src="/assets/EsExb3TtZo36YXxKTjKcGPSIn0f.png" src-width="3148" src-height="1040" align="center"/>

**设置公司额度**

1. 根据客户整体额度汇总情况，若需同步调整公司额度进行额度管控，可以在页面列表上方【设置公司额度】进入相关页面操作，后续会在对应页面详细说明操作方式

<img src="/assets/DqrXb3rxaoRUutxqgQhcYtwCn2d.png" src-width="3188" src-height="1174" align="center"/>

### 额度审批

该菜单主要用于审批授信额度，包含后台及客户发起的调整额度申请。

1. 在列表页的操作【提交审批】打开弹窗页面

<img src="/assets/XzZ2bOHsLoreUlxH0GZcetEmn9f.png" src-width="3208" src-height="834" align="center"/>

1. 提交审批弹窗页面确认额度并进行额度批注

<img src="/assets/T2hGbjTqUo9N5Zxzyi7cDP4bnYf.png" src-width="3262" src-height="1614" align="center"/>

1. 确认信息后，提交审批，需在工单系统进行审批，审批完成后额度调整方可生效

### 客户 FPS

该菜单主要用于查询客户保证金融资授信的 FPS 值（FPS 初始配置可在「客户参数」查看）及配置自定义 FPS 规则（可在全局 FPS 初始值上按定义维度配置值进行增减计算）。

**配置 FPS 规则**

1. 页面点击【规则配置】打开规则页面

<img src="/assets/QKwEbck1WoOFUoxbhRicxNWynEH.png" src-width="3316" src-height="840" align="center"/>

1. 规则配置：可以根据客户各方面维度设定阈值配置增减阈值，确定后生效规则

<img src="/assets/WeIyb7TyXoVXW7xpKwOcDUvynKg.png" src-width="3258" src-height="1532" align="center"/>

### 授信组

该菜单用于设置授信组及管理授信组额度，组内客户额度使用不可超过组额度。如需将同一客户多个账户分组，或者将关联账户（如夫妻账户）分组等场景均可使用该功能。

1. 列表页可查看所有授信组及总授信额度；每个组的额度使用情况也会显示

<img src="/assets/EbvqbkjZaoQeqjxyphJcRyDFnvb.png" src-width="3224" src-height="1040" align="center"/>

1. 新建授信组：根据弹窗配置相关信息，确定后即创建完成授信组

<img src="/assets/MkW1bsjxZoHCcYxDTJzcUPWfnVg.png" src-width="3224" src-height="270" align="center"/>

<img src="/assets/Yg45bxN1toamCpxFSAoc6Y6VnHb.png" src-width="3350" src-height="1773" align="center"/>

1. 授信组创建后，均可进一步修改组信息、新增/删除组内账户或调整组内账户额度

<img src="/assets/VOcebTvtgoCQDQxEMQdcpofznNb.png" src-width="3110" src-height="554" align="center"/>

### 授信快照

该菜单主要用于查询所有客户的历史每一次的授信记录，若需具体定位额度变更情况可以使用该功能。

<img src="/assets/KwyObE4Wdo2nawx997UcJmGTnvc.png" src-width="3218" src-height="1614" align="center"/>

