---
title: 系統介紹
slug: NCXHwKy6fiEtoBk752wcmmsfnBb
sidebar_position: 2
---


# 系統介紹

# 概述

Whale 會計系統提供了一套可以自動獲取數據源，按照預設的科目及分錄規則進行自動記帳，進而完成帳實核對，主要包含了科目設置、分錄規則設置、合併規則設置、會計分錄、科目餘額、科目明細帳、記帳數據源等功能

# 会计中台流程说明

# 務操作管理

# 參數設置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>業務參數設置 &gt; 記賬參數</p>
</div>

證券機構在使用會計中臺之前需要先進行記賬參數設置，包括科目屬性、會計科目、分錄規則、資金類型以及合併規則等設置。

## 科目屬性

### 概要

在使用會計中臺前，券商需要配置會計屬性。

<img src="/assets/YqTobs3VMofkkdxtim6cT9evnWb.png" src-width="3814" src-height="1598" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求自定義會計科目屬性。
- 編輯：對已經添加的科目屬性可以進行人工編輯。
- 刪除：對已經添加的科目屬性可以進行刪除。

<b>专有名词解释</b>

- 科目属性：一般来说，会计科目按其经济内容来分类，可以划分为资产类、负债类、所有者权益类、成本费用类科目及损益类。但由于经济内容不同，会计科目所包含的内容就不同，因此，不同的科目就需要有不同的属性，来描述其所代表的经济内容。
- 余额方向：指该科目属性下相应科目的借方发生额和贷方发生额抵减后余额金额对应的方向，可选择的枚举值为：借方、贷方和共同（是指科目属性下不同的科目余额可以单独指定为借方或者贷方）。比如：定义科目属性的余额方向为借方，则该属性下所有科目的余额会留在借方，如果该科目的借方发生额大于贷方发生额，科目余额为正数，反之则为负数。

### 操作步骤

1. 步骤一：在使用会计中台之前，要完成记账参数的配置，对于配置的第一步是新增会计科目属性

<img src="/assets/Jc7Vb2xbxom4aExDplPcMLudnZd.png" src-width="3407" src-height="1427" align="center"/>

1. 步骤二：对于相应科目属性下未绑定会计科目，则可以进入后台进行修改
    <img src="/assets/M9gfbhG9toDl7YxlCVicca4Mn7b.png" src-width="3300" src-height="1428" align="center"/>
    - 📢：如果当前的科目属性已经绑定了会计科目，则无法进行修改，如果修改之后系统会报错提示如下：
    <img src="/assets/NZfYbVhLNozmXfxaqzkcjVGtnIh.png" src-width="360" src-height="106"/>

2. 步骤三：对于相应科目属性下未绑定会计科目，则可以进入后台进行删除
    <img src="/assets/VVzebhc8aovx0SxtmTQcQDAAnNf.png" src-width="3288" src-height="1034" align="center"/>
    - 📢：如果当前的科目属性已经绑定了会计科目，则无法进行删除
    <img src="/assets/FqO3bSMIDoFJbxxBdbfcDN5Wn1f.png" src-width="368" src-height="104"/>

## 1.2 會計科目

### 概要

在配置科目屬性後，需要根據券商公司的要求配置會計科目。

<img src="/assets/Pj7Fb49Rvo0Kl5xYgmvcrOwwnNc.png" src-width="3820" src-height="1622" align="center"/>

<b>操作按鈕說明</b>

- 批量導入：如果券商公司需要大量添加會計科目，可以選擇批量導入，大批量新增會計科目。
- 新建：可根據券商公司需求单笔自定義會計科目。
- 編輯：對已經添加的会计科目可以進行人工編輯。
- 刪除：對已經添加的会计科目可以進行刪除。

<b>专有名词解释</b>

- 科目编码：系统会根据每个科目分配一个唯一的编码。
- 外部科目编码：由于券商公司接入的财务系统不一样，在券商公司财务系统中定义的科目名称和科目编码和会计中台也不一样，为了会计中台最终可以按照券商公司财务系统的要求导出财务报表，所以券商公司需要在会计科目中定义对应财务软件对应的科目编码，称之为外部科目编码。
- 会计科目：是指按照经济业务的内容和经济管理的要求，对会计要素的具体内容进行分类核算的会计科目所构成的集合。会计科目按其所提供信息的详细程度及其统驭关系不同，又分为总分类科目和明细分类科目，总分类科目可以对应会计中台的一级科目，明细分类科目对应会计中台二级或三级科目。
                  为了会计中台系统搭建统一，在会计中台进行分录记账的明细科目统一为三级科目。

### 操作步骤

1. 步骤一：科目属性配置完毕后，需要在对应科目属性下新增会计科目，由于我们系统支持三级科目，所以操作人员需要在后台逐级添加，可以根据自身科目数量选择批量还是单笔新建。
    1. 逐一科目新建
        1. 在后台先新建一级科目
        <img src="/assets/Xt0Db5d8Qoja4rxG5QWca5Vwn0Y.png" src-width="3415" src-height="1500" align="center"/>
        1. 在一级科目基础上新建对应的二级科目
        <img src="/assets/CZJYbExwHo3nFmxXyTFc1SPnny9.png" src-width="3421" src-height="1539" align="center"/>
        1. 在二级科目基础上新建对应的三级科目
        <img src="/assets/HDx2be5D6ocTWuxpHp6cnH7xnAx.png" src-width="3413" src-height="1549" align="center"/>
    2. 批量导入：通过后台提供的模板整理好需要导入的会计科目，然后通过后台完成文件导入
    <img src="/assets/Wr47b1FyFoJKElxSgePcE3NjnIe.png" src-width="3358" src-height="1480" align="center"/>
    <img src="/assets/S1sObyUZpo6SXax4bJrcE6U7nOe.png" src-width="2225" src-height="666" align="center"/>

2. 步骤二：对于未配置分录规则或者未进行会计分录记账的科目，可以进入后台进行修改
    <img src="/assets/YjSYbTQNWo7VScxrOGCchBhrnrb.png" src-width="3308" src-height="1478" align="center"/>

3. 步骤三：对于未配置分录规则或者未进行会计分录记账的科目，可以进入后台进行删除，需要先删除所有的三级科目，然后删除对应的二级科目，最后才能删除相应的一级科目
    <img src="/assets/RR8bbf9MooFj6Vx2PhbcL8tbnT4.png" src-width="3284" src-height="882" align="center"/>
    - 📢：如果当前的科目已经配置了分录规则或者已记账，则无法进行删除

## 1.3 分錄規則

### 概要

形成分錄之前需要根據券商公司實際業務需要配置對應的分錄規則。

<img src="/assets/ESmSbOsTzoRK7jxkODlcsYSZnXf.png" src-width="3814" src-height="1524" align="center"/>

<b>操作按鈕說明</b>

- 新增：可根據券商公司需求新增各業務的分錄規則。
- 編輯：對已經添加的分录规则可以進行人工編輯。
- 複製：可以將當前分錄規則進行復制，方便新增類似的分錄規則。
- 刪除：對已經添加的分录规则可以進行刪除。

<b>专有名词解释</b>

- 分录规则：为了保证系统在获取数据源后能够自动形成会计分录，券商公司需要在后台进行规则配置，即数据源和最终输出分录的关联关系。
- 支付流水：是指券商公司记录客户交易变动的明细表，包括出金、入金、股票买入、股票卖出、货币兑换等。
- 客户收费账单：由于支付流水中客户发生的各种交易费用，比如股票交易费用是佣金、平台费和各种第三方收费合计，无法满足财务入账需求，需要解析客户交易的收费明细，作为会计记账的数据源。
- 银行账单：是指券商公司银行账户所有实际资金变动记录，按照各种标签进行打标后，可以作为资金流记账的数据源。

### 操作步骤

1. 步骤一：增加了券商公司的会计科目之后，可以根据数据源的业务类型新增分录规则，目前会计中台可支持的数据源包括：支付流水、银行账单、客户收费账单、CCASS 账单、新股账单、代理商收费、业务账单统计、渠道汇兑单等。在此会分别介绍支付流水、银行账单、客户收费账单分录规则如何配置，其他数据源操作可同步参考。
    <img src="/assets/ZEenb8ODBowJDWxICl1cRYn6noe.png" src-width="3437" src-height="906" align="center"/>
    1. “支付流水”如何添加分录规则
    <img src="/assets/STNjbnDqvo7lH5xCxuRcVghmn34.png" src-width="2736" src-height="4936" align="center"/>
        1. “客户收费账单”如何添加分录规则
    <img src="/assets/Y7iHbEL8Fo2Pt6x0unPcVt0Nn6d.png" src-width="2664" src-height="3890" align="center"/>
    1. “银行账单”如何添加分录规则
    <img src="/assets/PgtBbNGgzoRycYxP6AncdzkTndc.png" src-width="2646" src-height="3740" align="center"/>

2. 
## 1.4 資金類型

對於券商公司獲取的銀行賬單可以自定義資金類型。

<img src="/assets/TopPbU9GCosOBdx3qzrc7SehnDe.png" src-width="3792" src-height="1462" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司銀行賬單新建不同資金類型標籤。
- 刪除：對已經添加的资金类型可以進行刪除。

## 1.5 合併規則

如果券商公司導出的財務報表需要合併，則可以自定義合併規則。

<img src="/assets/OL9KbJyoSoCtfCxXKPhcmFcjn8d.png" src-width="3834" src-height="1452" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求新增報表的合併規則。
- 編輯：對已經添加的合并规则可以進行人工編輯。
- 刪除：對已經添加的葛冰规则可以進行刪除。

# 會計分錄

## 2.1 適用場景

使用者在初始化使用會計中台功能時，需要維護的基礎數據

## 2.2 前置條件 

擁有會計中台的菜單權限，並且已經設定了會計工作中涉及的會計科目

### 2.2.1 會計分錄列表

執行菜單：证券后台&gt;會計中台&gt;會計分錄

此功能可以維護會計分錄，其中會計分錄是外部財務系統最重要的會計憑證轉入的依據

<img src="/assets/QjGrbtZmzo1gxqxPjNTc3Hugn4b.png" src-width="1280" src-height="634" align="center"/>

首先，系統是支持根據不同數據源配置分錄規則，可以自動地對數據源產生會計分錄，若某些數據源無法自動配置，此功能提供批次導入與手工錄入方式：

如果自動產生分錄後，作業提供新增【編輯】功能，可以修改產生分錄紀錄，同時紀錄新增支付流水新增支票號欄位展示

<img src="/assets/CqZlbS8mxo2o2exeVgzc3x28nDb.png" src-width="2658" src-height="1412" align="center"/>

<img src="/assets/PFtjbvAAko74FpxyhiHc0oxonPc.png" src-width="3270" src-height="2754" align="center"/>

如果需要手工錄入的分錄很少，可以選擇【手動錄入】

<img src="/assets/RsZPb9Fn4ofvgfxunhCccLw7nqb.png" src-width="2502" src-height="1330" align="center"/>

<img src="/assets/OAmyb0IQpopXP6xg5U0cMSZcnGb.png" src-width="3290" src-height="2782" align="center"/>

也可以選擇【批量導入】，先行下載範本之後，根據批量範本進行編制分錄並導入到系統中

<img src="/assets/LFG3bgtVSokpSVx9DNwcWTXfnRb.png" src-width="3246" src-height="1534" align="center"/>

在記錄右側操作區的【刪除】鍵，也可進行刪除此會計分錄

<img src="/assets/LDqxbQHPRo1exKx86CEcZZKunnb.png" src-width="3364" src-height="1474" align="center"/>

如果某個帳務日期對應的數據源獲取不完整，可以選擇對應日期的數據源進行【重跑】，系統會更新數據源產生最新會計分錄資料

<img src="/assets/Nv9ibNwYYoHhlNxJlbmc79LZnEd.png" src-width="3362" src-height="1396" align="center"/>

如果系統生成的會計分錄已經核對無誤，手工可以點選【匯總】生成科目餘額匯總表

<img src="/assets/RtrJbDpIHo7aA3xk99OcvUplnwb.png" src-width="3370" src-height="1452" align="center"/>

會計分錄中新增【報表導出】按鈕，方便按照財務軟件格式要求進行報表導出

<img src="/assets/FpfgbBv56ouzM3xraQTcXk5unWb.png" src-width="3248" src-height="1606" align="center"/>

提供合併會計分錄查詢功能，合併會計分錄時，系統會按賬帳日期獲取匯率

<img src="/assets/XYBsbXDA3oylpaxKqLDcrqFknkh.png" src-width="3348" src-height="1418" align="center"/>

# 3.科目餘額

# 5.銀行餘額

# 6.記帳數據源

