---
title: 私募基金
slug: simujijin
sidebar_position: 2
---


# 私募基金

### 适用场景

首先私募基金的业务系统操作流程如下 (SOP) :

<img src="/assets/IyP7bS33yo6Q61xN2ezc473Cnbb.jpeg"/>

### 前置条件

创建私募标的前需要先创建私募基金渠道，路径：基金管理&gt;公募基金管理&gt;基金渠道 Tab 页签

### 使用说明

#### 基金管理

执行菜单：基金管理&gt; 私募基金&gt;基金管理 Tab 页签

- 本作业可以维护一个私募基金的基金资料，也可以管理基金的上架展示

   同时系统提供 基金上架 (系统端)  与显示管理 (APP 端)

【上架】：是指将基金 纳入系统交易。并调整时需要标的是上架状态      

【下架】：是指将基金 将无法在系统交易

【显示】：是指基金可在 APP 端展示、搜索和交易 

【隐藏】：是指基金在 APP 端不展示、不可搜索

<img src="/assets/OqF3bSz5Woi62vxzZr1c86ainMr.png"/>

首先可以点选左上角【添加私募基金】,分别填入私募基金 Tab : ** 基本讯息/基本面/申购规则/赎回规则**

<img src="/assets/ULkXbPdN8o3gH7xbkFScF6AYn0b.png"/>

#### 净值表

执行菜单：基金管理&gt; 私募基金&gt;净值表 Tab 页签

- 在本作业可以维护所有的私募基金净值资料

<img src="/assets/S3yzbZ58voZHgDxr1cwcuA4TnD3.png"/>

首先在右方左侧【新增】操作，可以新增一笔 私募基金净值纪录

<img src="/assets/GgmpbJevhoO4fIxAt5gc3CHnnqs.png"/>

注意：由于净值数据有可能直接影响客户历史盈亏数据，因此私募净值不支持输入历史净值，即系统已存最新日期净值，则不可添加早于这个净值日期的净值添加。

#### 客户订单

执行菜单：基金管理&gt; 私募基金&gt;客户订单 Tab 页签

- 在本作业可以查询到所有的私募基金订单纪录 (包含前后台输入),  可以看到基金订单的申购/赎的状态

  首先在上方左侧【获取订单】操作，可以读取到前台的私募基金订单

<img src="/assets/Qsljb7QeYozAjUxVlHjckk3mnWh.png"/>

<img src="/assets/IuGAb8tKMoiuhnxRTFSci2Runpf.png"/>

注意：

1. 若后台下单后，在基金委托列表可以查询对应交易订单资讯，订单资讯也会同步到 APP 客户端展示，在未进行日切之前可以进行撤单。
2. 已日切的订单不可重复获取，但日切之前可以多次前台拉取订单。

#### 基金清算

执行菜单：基金管理&gt; 私募基金&gt;基金清算 Tab 页签 

- 本作业可以进行私募基金后台的清算作业 (包含数据确认/申购交收/赎回钱货交收)
    首先：
    **数据发送** 
    选中对应基金记录勾选 ,发送给基金公司，系统会判断基金订单状态'初始化'才会进行数据发送至至

<img src="/assets/O6Udb0aDHovbQcxtqsQc8A8pnye.png"/>

**回填** 

     根据基金公司提供资料，更新基金对应净值以及每个帐户及总体申购份额、赎回金额及外部收费，进行

     回填。外部持仓指该公司大账户在基金公司的持仓份额，若租户不清楚该数据，填写 0 即可，不影响交易结算。

合计指申购或赎回加总，没有赎回则填写 0，同理申购；

<img src="/assets/UbpDbhC08ovZWnxoKCucUTk4nUc.png"/>

**私募交割** 

      选中对应基金管道单 ID 进行私募交割，完成货和钱交割的操作

<img src="/assets/OSEwbwYpOokhj1xwZ85cJ2gpnwf.png"/>

#### APP 端列表 

执行菜单：基金管理&gt; 私募基金&gt;APP 端列表 Tab 页签 

- 本作业可以维护在 APP 端有关于私募基金主体的排序展示顺序

<img src="/assets/OF43b4eI7oOCz4x7pImcvJJhnbc.png"/>

可以在右侧点选【新建】,新建一个私募基金的排序

<img src="/assets/UhYObkl47oEA38xQDlMcmDjWnab.png"/>

设置后，就会影响私募基金在手机端展示排序效果

**APP 端展示画面如下：**

<div class="grid gap-3 grid-cols-2">
<div>
<img src="/assets/EgBvbxUOxoa8DmxGZVDcV1fOn6d.png"/>
</div>
<div>
<img src="/assets/SNkUbH4CBoOo89x6pHjcZNS0nmP.png"/>
</div>
</div>

