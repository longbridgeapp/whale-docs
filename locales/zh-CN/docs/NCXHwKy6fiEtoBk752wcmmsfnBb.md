---
title: 系统介绍
slug: NCXHwKy6fiEtoBk752wcmmsfnBb
sidebar_position: 2
---


# 系统介绍

# 概述

Whale 会计系统提供了一套可以自动获取数据源，按照预设的科目及分录规则进行自动记帐，进而完成帐实核对，主要包含了科目设置、分录规则设置、合并规则设置、会计分录、科目余额、科目明细帐、记帐数据源等功能

# 会计中台流程说明

# 务操作管理

# 参数设置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>业务参数设置 &gt; 记账参数</p>
</div>

证券机构在使用会计中台之前需要先进行记账参数设置，包括科目属性、会计科目、分录规则、资金类型以及合并规则等设置。

## 科目属性

### 概要

在使用会计中台前，券商需要配置会计属性。

<b>操作按钮说明</b>

- 新建：可根据券商公司需求自定义会计科目属性。
- 编辑：对已经添加的科目属性可以进行人工编辑。
- 删除：对已经添加的科目属性可以进行删除。

<b>专有名词解释</b>

- 科目属性：一般来说，会计科目按其经济内容来分类，可以划分为资产类、负债类、所有者权益类、成本费用类科目及损益类。但由于经济内容不同，会计科目所包含的内容就不同，因此，不同的科目就需要有不同的属性，来描述其所代表的经济内容。
- 余额方向：指该科目属性下相应科目的借方发生额和贷方发生额抵减后余额金额对应的方向，可选择的枚举值为：借方、贷方和共同（是指科目属性下不同的科目余额可以单独指定为借方或者贷方）。比如：定义科目属性的余额方向为借方，则该属性下所有科目的余额会留在借方，如果该科目的借方发生额大于贷方发生额，科目余额为正数，反之则为负数。

### 操作步骤

- 步骤一：在使用会计中台之前，要完成记账参数的配置，对于配置的第一步是新增会计科目属性

<img src="/assets/Jc7Vb2xbxom4aExDplPcMLudnZd.png" src-width="3407" src-height="1427" align="center"/>

## 1.2 会计科目

在配置科目属性后，需要根据券商公司的要求配置会计科目。

<img src="/assets/Pj7Fb49Rvo0Kl5xYgmvcrOwwnNc.png" src-width="3820" src-height="1622" align="center"/>

<b>操作按钮说明</b>

- 批量导入：如果券商公司需要大量添加会计科目，可以选择批量导入，大批量新增会计科目。
- 新建：可根据券商公司需求单笔自定义会计科目。
- 编辑：对已经添加的会计科目可以进行人工编辑。
- 删除：对已经添加的会计科目可以进行删除。

## 1.3 分录规则

形成分录之前需要根据券商公司实际业务需要配置对应的分录规则。

<img src="/assets/ESmSbOsTzoRK7jxkODlcsYSZnXf.png" src-width="3814" src-height="1524" align="center"/>

<b>操作按钮说明</b>

- 新增：可根据券商公司需求新增各业务的分录规则。
- 编辑：对已经添加的分录规则可以进行人工编辑。
- 复制：可以将当前分录规则进行复制，方便新增类似的分录规则。
- 删除：对已经添加的分录规则可以进行删除。

## 1.4 资金类型

对于券商公司获取的银行账单可以自定义资金类型。

<img src="/assets/TopPbU9GCosOBdx3qzrc7SehnDe.png" src-width="3792" src-height="1462" align="center"/>

<b>操作按钮说明</b>

- 新建：可根据券商公司银行账单新建不同资金类型标签。
- 删除：对已经添加的资金类型可以进行删除。

## 1.5 合并规则

如果券商公司导出的财务报表需要合并，则可以自定义合并规则。

<img src="/assets/OL9KbJyoSoCtfCxXKPhcmFcjn8d.png" src-width="3834" src-height="1452" align="center"/>

<b>操作按钮说明</b>

- 新建：可根据券商公司需求新增报表的合并规则。
- 编辑：对已经添加的合并规则可以进行人工编辑。
- 删除：对已经添加的葛冰规则可以进行删除。

# 会计分录

## 2.1 适用场景

使用者在初始化使用会计中台功能时，需要维护的基础数据

## 2.2 前置条件 

拥有会计中台的菜单权限，并且已经设定了会计工作中涉及的会计科目

### 2.2.1 会计分录列表

执行菜单：证券后台&gt;会计中台&gt;会计分录

此功能可以维护会计分录，其中会计分录是外部财务系统最重要的会计凭证转入的依据

<img src="/assets/QjGrbtZmzo1gxqxPjNTc3Hugn4b.png" src-width="1280" src-height="634" align="center"/>

首先，系统是支持根据不同数据源配置分录规则，可以自动地对数据源产生会计分录，若某些数据源无法自动配置，此功能提供批次导入与手工录入方式：

如果自动产生分录后，作业提供新增【编辑】功能，可以修改产生分录纪录，同时纪录新增支付流水新增支票号栏位展示

<img src="/assets/CqZlbS8mxo2o2exeVgzc3x28nDb.png" src-width="2658" src-height="1412" align="center"/>

<img src="/assets/PFtjbvAAko74FpxyhiHc0oxonPc.png" src-width="3270" src-height="2754" align="center"/>

如果需要手工录入的分录很少，可以选择【手动录入】

<img src="/assets/RsZPb9Fn4ofvgfxunhCccLw7nqb.png" src-width="2502" src-height="1330" align="center"/>

<img src="/assets/OAmyb0IQpopXP6xg5U0cMSZcnGb.png" src-width="3290" src-height="2782" align="center"/>

也可以选择【批量导入】，先行下载范本之后，根据批量范本进行编制分录并导入到系统中

<img src="/assets/LFG3bgtVSokpSVx9DNwcWTXfnRb.png" src-width="3246" src-height="1534" align="center"/>

在记录右侧操作区的【删除】键，也可进行删除此会计分录

<img src="/assets/LDqxbQHPRo1exKx86CEcZZKunnb.png" src-width="3364" src-height="1474" align="center"/>

如果某个帐务日期对应的数据源获取不完整，可以选择对应日期的数据源进行【重跑】，系统会更新数据源产生最新会计分录资料

<img src="/assets/Nv9ibNwYYoHhlNxJlbmc79LZnEd.png" src-width="3362" src-height="1396" align="center"/>

如果系统生成的会计分录已经核对无误，手工可以点选【汇总】生成科目余额汇总表

<img src="/assets/RtrJbDpIHo7aA3xk99OcvUplnwb.png" src-width="3370" src-height="1452" align="center"/>

会计分录中新增【报表导出】按钮，方便按照财务软件格式要求进行报表导出

<img src="/assets/FpfgbBv56ouzM3xraQTcXk5unWb.png" src-width="3248" src-height="1606" align="center"/>

提供合并会计分录查询功能，合并会计分录时，系统会按账帐日期获取汇率

<img src="/assets/XYBsbXDA3oylpaxKqLDcrqFknkh.png" src-width="3348" src-height="1418" align="center"/>

# 3.科目余额

# 5.银行余额

# 6.记帐数据源

