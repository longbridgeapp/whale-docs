---
title: 系統介紹
slug: NCXHwKy6fiEtoBk752wcmmsfnBb
sidebar_position: 2
---


# 系統介紹

## 概述

Whale 會計系統提供了一套可以自動獲取數據源，按照預設的科目及分錄規則進行自動記帳，進而完成帳實核對，主要包含了科目設置、分錄規則設置、合併規則設置、會計分錄、科目餘額、科目明細帳、記帳數據源等功能

## 会计中台流程说明

<img src="/assets/SpYFbz4lQozQRyxm2xFcvmWtnsb.png" src-width="874" src-height="553" align="center"/>

## 務操作管理

### 參數設置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>業務參數設置 &gt; 記賬參數</p>
</div>

證券機構在使用會計中臺之前需要先進行記賬參數設置，包括科目屬性、會計科目、分錄規則、資金類型以及合併規則等設置。

#### 科目屬性

<b>概要</b>

在使用會計中臺前，券商需要配置會計屬性。

<img src="/assets/YqTobs3VMofkkdxtim6cT9evnWb.png" src-width="3814" src-height="1598" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求自定義會計科目屬性。
- 編輯：對已經添加的科目屬性可以進行人工編輯。
- 刪除：對已經添加的科目屬性可以進行刪除。

<b>專有名詞解釋</b>

- 科目屬性：一般來說，會計科目按其經濟內容來分類，可以劃分爲資產類、負債類、所有者權益類、成本費用類科目及損益類。但由於經濟內容不同，會計科目所包含的內容就不同，因此，不同的科目就需要有不同的屬性，來描述其所代表的經濟內容。
- 餘額方向：指該科目屬性下相應科目的借方發生額和貸方發生額抵減後餘額金額對應的方向，可選擇的枚舉值爲：借方、貸方和共同（是指科目屬性下不同的科目餘額可以單獨指定爲借方或者貸方）。比如：定義科目屬性的餘額方向爲借方，則該屬性下所有科目的餘額會留在借方，如果該科目的借方發生額大於貸方發生額，科目餘額爲正數，反之則爲負數。

<b>操作步驟</b>

1. 步驟一：在使用會計中臺之前，要完成記賬參數的配置，對於配置的第一步是新增會計科目屬性

<img src="/assets/Jc7Vb2xbxom4aExDplPcMLudnZd.png" src-width="3407" src-height="1427" align="center"/>

1. 步驟二：對於相應科目屬性下未綁定會計科目，則可以進入後臺進行修改
    <img src="/assets/M9gfbhG9toDl7YxlCVicca4Mn7b.png" src-width="3300" src-height="1428" align="center"/>
    - 📢：如果當前的科目屬性已經綁定了會計科目，則無法進行修改，如果修改之後系統會報錯提示如下：
    <img src="/assets/NZfYbVhLNozmXfxaqzkcjVGtnIh.png" src-width="360" src-height="106"/>

2. 步驟三：對於相應科目屬性下未綁定會計科目，則可以進入後臺進行刪除
    <img src="/assets/VVzebhc8aovx0SxtmTQcQDAAnNf.png" src-width="3288" src-height="1034" align="center"/>
    - 📢：如果當前的科目屬性已經綁定了會計科目，則無法進行刪除
    <img src="/assets/FqO3bSMIDoFJbxxBdbfcDN5Wn1f.png" src-width="368" src-height="104"/>

#### 會計科目

<b>概要</b>

在配置科目屬性後，需要根據券商公司的要求配置會計科目。

<img src="/assets/Pj7Fb49Rvo0Kl5xYgmvcrOwwnNc.png" src-width="3820" src-height="1622" align="center"/>

<b>操作按鈕說明</b>

- 批量導入：如果券商公司需要大量添加會計科目，可以選擇批量導入，大批量新增會計科目。
- 新建：可根據券商公司需求单笔自定義會計科目。
- 編輯：對已經添加的会计科目可以進行人工編輯。
- 刪除：對已經添加的会计科目可以進行刪除。

<b>專有名詞解釋</b>

- 科目編碼：系統會根據每個科目分配一個唯一的編碼。
- 外部科目編碼：由於券商公司接入的財務系統不一樣，在券商公司財務系統中定義的科目名稱和科目編碼和會計中臺也不一樣，爲了會計中臺最終可以按照券商公司財務系統的要求導出財務報表，所以券商公司需要在會計科目中定義對應財務軟件對應的科目編碼，稱之爲外部科目編碼。
- 會計科目：是指按照經濟業務的內容和經濟管理的要求，對會計要素的具體內容進行分類覈算的會計科目所構成的集合。會計科目按其所提供信息的詳細程度及其統馭關係不同，又分爲總分類科目和明細分類科目，總分類科目可以對應會計中臺的一級科目，明細分類科目對應會計中臺二級或三級科目。

      爲了會計中臺系統搭建統一，在會計中臺進行分錄記賬的明細科目統一爲三級科目。

<b>操作步驟</b>

1. 步驟一：科目屬性配置完畢後，需要在對應科目屬性下新增會計科目，由於我們系統支持三級科目，所以操作人員需要在後臺逐級添加，可以根據自身科目數量選擇批量還是單筆新建。
    1. 逐一科目新建
        1. 在後臺先新建一級科目
        <img src="/assets/Xt0Db5d8Qoja4rxG5QWca5Vwn0Y.png" src-width="3415" src-height="1500" align="center"/>
        1. 在一級科目基礎上新建對應的二級科目
        <img src="/assets/CZJYbExwHo3nFmxXyTFc1SPnny9.png" src-width="3421" src-height="1539" align="center"/>
        1. 在二級科目基礎上新建對應的三級科目
        <img src="/assets/HDx2be5D6ocTWuxpHp6cnH7xnAx.png" src-width="3413" src-height="1549" align="center"/>
    2. 批量導入：通過後臺提供的模板整理好需要導入的會計科目，然後通過後臺完成文件導入
    <img src="/assets/Wr47b1FyFoJKElxSgePcE3NjnIe.png" src-width="3358" src-height="1480" align="center"/>
    <img src="/assets/S1sObyUZpo6SXax4bJrcE6U7nOe.png" src-width="2225" src-height="666" align="center"/>

2. 步驟二：對於已經添加的會計科目，可以進入後臺進行修改
    - 📢：對於編輯後的會計科目，會應用於後續的會計分錄，對於歷史已經生成的會計分錄如需更新，可以在「證券後臺 - 會計中臺 - 會計分錄 - 明細」進行重跑。
    <img src="/assets/YjSYbTQNWo7VScxrOGCchBhrnrb.png" src-width="3308" src-height="1478" align="center"/>

3. 對於編輯後的會計科目，會應用於後續的會計分錄，對於歷史已經生成的會計分錄如需更新，可以在「證券後臺 - 會計中臺 - 會計分錄 - 明細」進行重跑。
    <img src="/assets/RR8bbf9MooFj6Vx2PhbcL8tbnT4.png" src-width="3284" src-height="882" align="center"/>
    - 📢：如果当前的科目已经配置了分录规则或者已记账，则无法进行删除

#### 分錄規則

<b>概要</b>

形成分錄之前需要根據券商公司實際業務需要配置對應的分錄規則。

<img src="/assets/ESmSbOsTzoRK7jxkODlcsYSZnXf.png" src-width="3814" src-height="1524" align="center"/>

<b>操作按鈕說明</b>

- 新增：可根據券商公司需求新增各業務的分錄規則。
- 編輯：對已經添加的分录规则可以進行人工編輯。
- 複製：可以將當前分錄規則進行復制，方便新增類似的分錄規則。
- 刪除：對已經添加的分录规则可以進行刪除。

<b>專有名詞解釋</b>

- 分錄規則：爲了保證系統在獲取數據源後能夠自動形成會計分錄，券商公司需要在後臺進行規則配置，即數據源和最終輸出分錄的關聯關係。
- 支付流水：是指券商公司記錄客戶交易變動的明細表，包括出金、入金、股票買入、股票賣出、貨幣兌換等。
- 客戶收費賬單：由於支付流水中客戶發生的各種交易費用，比如股票交易費用是佣金、平臺費和各種第三方收費合計，無法滿足財務入賬需求，需要解析客戶交易的收費明細，作爲會計記賬的數據源。
- 銀行賬單：是指券商公司銀行賬戶所有實際資金變動記錄，按照各種標籤進行打標後，可以作爲資金流記賬的數據源。

<b>操作步驟</b>

1. 步驟一：增加了券商公司的會計科目之後，可以根據數據源的業務類型新增分錄規則，目前會計中臺可支持的數據源包括：支付流水、銀行賬單、客戶收費賬單、CCASS 賬單、新股賬單、代理商收費、業務賬單統計、渠道匯兌單等。在此會分別介紹支付流水、銀行賬單、客戶收費賬單分錄規則如何配置，其他數據源操作可同步參考。
    <img src="/assets/ZEenb8ODBowJDWxICl1cRYn6noe.png" src-width="3437" src-height="906" align="center"/>
    1. “支付流水”如何添加分錄規則
    <img src="/assets/STNjbnDqvo7lH5xCxuRcVghmn34.png" src-width="2736" src-height="4936" align="center"/>
    1. “客戶收費賬單”如何添加分錄規則
    <img src="/assets/Y7iHbEL8Fo2Pt6x0unPcVt0Nn6d.png" src-width="2664" src-height="3890" align="center"/>
    1. “銀行賬單”如何添加分錄規則
    <img src="/assets/PgtBbNGgzoRycYxP6AncdzkTndc.png" src-width="2646" src-height="3740" align="center"/>

2. 步驟二：對於已配置的分錄規則可以後臺進行修改。
    - 📢：對於編輯後的分錄規則，會應用於後續的會計分錄，對於歷史已經生成的會計分錄如需更新，可以在「證券後臺 - 會計中臺 - 會計分錄 - 明細」進行重跑。

<img src="/assets/JU9AbFSb4oOubUxAwN6cOLXLnvc.png" src-width="3278" src-height="1282" align="center"/>

<img src="/assets/VJjLbEplDor8adxuHWlcQrLLncc.png" src-width="2492" src-height="4530" align="center"/>

1. 步驟三：對於已配置的分錄規則可以後臺進行刪除
    - 📢：當前分錄規則刪除後，只會對後續新的分錄有影響，歷史已生成的分錄只有重跑之後纔會同步更新。

<img src="/assets/BQfPbyVtcoUy8Vxfr9McfQnEnOc.png" src-width="3276" src-height="1304" align="center"/>

1. 步驟四：如果需要新增類似業務的分錄規則，可以使用後臺複製功能

<img src="/assets/KrkobuGWXoVXtdxysULcXBlan8c.png" src-width="3252" src-height="1246" align="center"/>

#### 資金類型

<b>概要</b>

對於券商公司獲取的銀行賬單可以自定義資金類型。

<img src="/assets/TopPbU9GCosOBdx3qzrc7SehnDe.png" src-width="3792" src-height="1462" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司銀行賬單新建不同資金類型標籤。
- 刪除：對已經添加的资金类型可以進行刪除。

<b>專有名詞解釋</b>

- 資金類型：是指銀行賬單業務分類的名稱

<b>操作步驟</b>

1. 步驟一：如需要新增資金類型，可以根據需求在後臺添加

<img src="/assets/VkO0bTGPZoMlmGxbMUtcQH9anOk.png" src-width="3248" src-height="834" align="center"/>

1. 步驟二：如果未被使用的資金類型需要刪除，可以後臺操作

<img src="/assets/FoOObG9oXoEq7nxOaBJcQ9m7nzd.png" src-width="3278" src-height="724" align="center"/>

📢：如果當前的資金類型已經被銀行賬單使用，則無法進行刪除

<img src="/assets/Sfxdb39zYofX35xaLwtcSKonnnf.png" src-width="362" src-height="114"/>

#### 合併規則

<b>概要</b>

如果券商公司導出的財務報表需要合併，則可以自定義合併規則。

<img src="/assets/Luehblccxoh7rXxR4jOceML8njg.png" src-width="3776" src-height="794" align="center"/>

<img src="/assets/X0XUbWrqSozvP7xnBUOc9DoBnWg.png" src-width="1846" src-height="735" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求新增報表的合併規則。
- 編輯：對已經添加的合并规则可以進行人工編輯。
- 刪除：對已經添加的合并规则可以進行刪除。

<b>專有名詞解釋</b>

- 合併規則：爲了滿足不同券商公司對於記賬顆粒度的訴求，證券後臺可支持合併規則配置，兩種合併方式爲：借貸各自合併、借貸抵減合併。借貸各自合併是指借方或者貸方按照本身的科目進行分類彙總，借貸抵減合併是指可以按照設定的相同科目或者不同科目將借貸金額抵減之後合併。

<b>操作步驟</b>

1. 步驟一：如需要新增合併規則，可以根據需求在後臺添加。
    <img src="/assets/Muq6bASXHoTa5yxqMnacmg0UnNc.png" src-width="2396" src-height="4954" align="center"/>
    - 📢：如果在新建合併規則選擇的業務類型都未配置分錄規則，則無法新建
    <img src="/assets/Ae1LbrVN5oYAmtxzZhOcdoexn0Q.png" src-width="2680" src-height="3140" align="center"/>

2. 步驟二：對於已配置的合併規則可以後臺進行修改
    <img src="/assets/SqFFbe07vov6gdxoH6pcZhPBnnc.png" src-width="3258" src-height="780" align="center"/>
    - 📢：對於編輯後的合併規則，會應用於後續的合併分錄，對於歷史已經生成的合併分錄如需更新，可以在「證券後臺 - 會計中臺 - 會計分錄 - 合併」進行重跑。

3. 步驟三：如果已配置的合併規則可以後臺刪除
    <img src="/assets/O5vebcjkzoySdwxe1EYcXAX3nVe.png" src-width="3256" src-height="618" align="center"/>
    - 📢：當前合併規則刪除後，只會對後續新的分錄有影響，歷史已生成的合併分錄只有重跑之後纔會同步更新。

#### 業務類型

<b>概要</b>

業務類型是指區分記賬數據源各種業務的標籤，該功能可提供客戶按照記賬與否的要求進行個性化配置

<img src="/assets/BE5gbzttIouTv4xZGjFcUHExnKd.png" src-width="3772" src-height="1622" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求配置業務類型。
- 編輯：對已經添加的業務類型可以進行人工編輯。

<b>專有名詞解釋</b>

- 業務類型：是指區分記賬數據源各種業務的標籤

<b>操作步驟</b>

1. 步驟一：如需要新增業務類型，可以根據需求在後臺添加。

<img src="/assets/Nrq7bpVlNoB5pvxi9sNc6IKVnMv.png" src-width="3298" src-height="1410" align="center"/>

1. 步驟二：對於已配置的業務類型可以後臺進行修改
    <img src="/assets/JF7BbXQ1roq1CExXWOUcshVOn8a.png" src-width="3266" src-height="1360" align="center"/>
    - 📢：對於編輯後的業務類型，會應用於後續的分錄，對於歷史已經生成的分錄如需更新，可以在「證券後臺 - 會計中臺 - 會計分錄 - 明細」進行重跑。

## 會計分錄

<img src="/assets/SerGbDjZCo3lpuxxNYqcvsWAnke.png" src-width="3294" src-height="1692" align="center"/>

## 科目餘額

## 科目明細帳

## 銀行餘額

## 歷史餘額

執行菜單：會計中台&gt;銀行餘額&gt;歷史餘額 Tab 頁籤

是指券商公司所有銀行帳戶某一帳務日期的銀行實際餘額。

可以選擇批次導入

<img src="/assets/YaZQbO1zmojQVRx5wBEc6yDAnKf.png" src-width="3238" src-height="1524" align="center"/>

<img src="/assets/UmqXbLPtIo8kb1xtNCqcyGlRned.png" src-width="3242" src-height="1234" align="center"/>

## 實時餘額

執行菜單：會計中台&gt;銀行餘額&gt;實時餘額 Tab 頁籤

是指券商公司已對接 API 的銀行賬戶的銀行實時餘額。

<img src="/assets/Ja7xbuke2oUHmMxJUPgc1qkZnJf.png" src-width="3252" src-height="1242" align="center"/>

## 記帳數據源

## 入金在途

### 適用場景 

作為追蹤客戶在入金未完成狀態時的記錄參考

### 前置條件 

入金流程未完成

執行菜單：會計中台&gt;入金在途&gt;明細

提供在途資金的匯總記錄查詢

<img src="/assets/If7mbcaCooFQM2xx692cVK2tnGg.png" src-width="3282" src-height="1690" align="center"/>

執行菜單：會計中台 &gt; 入金在途&gt;彙總覈對

提供在途資金與銀行賬單彙總覈對結果查詢

<img src="/assets/FdlYbk2nMoyaimx2M9wcp1Kynnf.png" src-width="3242" src-height="540" align="center"/>

