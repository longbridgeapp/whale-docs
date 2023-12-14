---
title: 公司行動操作順序
slug: xxxxxxxxx
sidebar_position: 3
---


# 公司行動操作順序

## 適用場景

協助用戶了解一個常規公司行動權益，在系統是如何依序操作的順序

## 前置條件

已經透過 執行菜單：清算管理&gt;市場清算&gt;文件處理 導入  CCNAN05 檔或 其他美股檔案

## 操作說明（按業務節點）

### 初始化

在執行菜單：公司行動&gt;公司行動 查詢條件 選擇：推進狀態：初始化，就可以查詢到近期剛導入的 公司行動預告

初始化狀態是公司行動預告的起始點，也可以操作【終止】

<img src="/assets/FW9pbKaFQo0z7IxbrgWcxwPrngh.png" src-width="3172" src-height="1835" align="center"/>

可以點擊【詳情】檢查對應的公司行動預告資料與方案信息，同時系統會產生默認方案

<img src="/assets/SS2BbhqRVodOlQxlx9xcmkmVnIc.png" src-width="3116" src-height="1616" align="center"/>

首先展示是該公司行動的 系統推進節點狀態訊息：

<img src="/assets/YDR4bskHNoNpmQxDkI1cknVonyf.png" src-width="2606" src-height="282" align="center"/>

注意：不同的公司行動類型，會有不同狀態展示，方便用戶直覺掌握推進狀態

<img src="/assets/QZq1bzkoxoEzAYxYvYVcxeORnuR.png" src-width="2196" src-height="292" align="center"/>

接下展示是**預告信息**：同時系統也針對部分公司行動提供預設配置項來優化，

      例： 派發位置（Street 或 NOMiNEE） 或 支付日期+N 配置 （每家租戶可能不同）

      零股轉分紅預設（是或否）。  注意：以上預設配置變更，若有需要請聯絡 長橋運營團隊來配置

<img src="/assets/VlTmbNpcKoEwWCxipR7c5JALn8b.png" src-width="2888" src-height="1408" align="center"/>

接下來是**方案信息與費用規則**：

<img src="/assets/XrMNbWpKdoLPHwxQnKhc5v8sn0c.png" src-width="2904" src-height="1508" align="center"/>

這時候可以 根據需要 檢查個別的公司行動資料紀錄，若必要欄位有缺失，系統會標紅出來，方便檢核數據

<img src="/assets/NJ28b2khHoLhXqxzNatcNETOnEc.png" src-width="2868" src-height="1020" align="center"/>

若沒問題，則可以點選 前方的 紀錄 Checkbox 區域，往下操作【登記】

<img src="/assets/Uu0zbVG3vot4R0xbQ5tcwthonhg.png" src-width="3076" src-height="1436" align="center"/>

此時系統會檢查登記日與帳務日期，必須登記日小於目前帳務日期

<img src="/assets/EXS2bwoC3o3IYQxc16WcmMopncf.png" src-width="2964" src-height="246" align="center"/>

### 登記

前置作業：已經通過資料檢核 的公司行動預告紀錄

操作說明： 

在執行菜單：公司行動&gt;公司行動 查詢條件 選擇：推進狀態：初始化，就可以查詢到初始化的公司行動預告

後續可以操作【登記】或【終止】，

在登記時，提供業務校驗功能的同時，增加了更多的業務檢查項目

注：系統會判斷 必須 帳務日期&gt;= 登記日 才可進行登記操作

<img src="/assets/FR1bbMIi5oJLCYx9GRhcjSDWncc.png" src-width="2542" src-height="150" align="center"/>

<img src="/assets/AnfBbXRUBoW0qcxFLDpciyotnDe.png" src-width="3094" src-height="1562" align="center"/>

注意：因為公司行動 CCASS 文件會有一段時間的內容更新，因此我們優化 02 文件的讀取，增加 CCASS 文件日期與 CCASS 狀態的展示，租戶可選擇此欄位查出真正要開始執行的公司行動，否則容易因為 CCASS 狀態不是‘最終執行'，可能因為數據內容造成人工處理的環節

<img src="/assets/AdZwb8xTsos7qJxu8sqc7IjanAf.png" src-width="3192" src-height="1347" align="center"/>

這樣可避免 CCASS 狀態是‘初步確認’（並非最終狀態）或後面被取消，此時若去執行後續公司行動操作容易有機會出錯

<img src="/assets/EWJZbEWgJoYcW9xxEyYcJI58nNe.png" src-width="3094" src-height="390" align="center"/>

此時可以在登記日期當天，點選【登記】 ，往下一步操作節點進行，當登記成功後，

 注：由於系統處理‘登記'須有點時間，屬於異步設計，狀態會變成‘正在登記' （請稍後即可）

<img src="/assets/ERzKbSwmNouTNOxgpMNc49u0njf.png" src-width="2778" src-height="158" align="center"/>

 當登記成功後，就可在 執行菜單：公司行動&gt;客戶明細作業，可以查到對應預告方案的客戶登記明細紀錄 

<img src="/assets/I17SbGsmFoBZ91xD2CkckIRQnId.png" src-width="3388" src-height="1524" align="center"/>

### 過戶（系統自動處裡）

操作說明：  

目前系統是自動處理過戶，不需用戶操作，會在執行狀態時自動處理

注意： 

1. 不是所有的公司行動都要過戶，合股、拆股和換股不需要過戶，過戶時將完成 Street-&gt;Nominee 的 操作
2. 在該預告登記成功且客戶有持倉的狀況下，在‘執行’推進狀態時就系統會自動過戶操作（當股份過户后：即支付 Script Fee）股份記錄將改為 Nominee
3. 當過戶後，就可在 執行菜單：公司行動&gt;客戶明細&gt;費用記錄 Tab，可以查到對應預告的客戶過戶費 明細紀錄 

<img src="/assets/HaPBb6Wdwot9Egx8SRqczbMqnKd.png" src-width="3386" src-height="1444" align="center"/>

### 指令收集

前置作業：已經通過 登記成功 的公司行動預告紀錄

操作說明：  

在 執行菜單：公司行動&gt;公司行動 查詢條件 選擇：推進狀態：登記成功。指令收集狀態：初始化，就可以查詢到 近期 公司行動預告可進行指令收集操作的預告紀錄（前提是 已登記成功 狀態）

<img src="/assets/EUKeb9UQ9oYEtaxkgPJcDyvpnxc.png" src-width="3410" src-height="1472" align="center"/>

此時可以操作‘指令收集'。在選擇開始時間 到結算時間，對相關客戶發送選擇通知（透過 App 或 mail  訊息）

參考通知範例：

     茲通知股票 700.HK，提出無條件要约收購，收購價格為每股 12.00 HKD。截止辦理日期香港时间 2023-02-07   

     12:00. 預計派送日期 2023-03-07（僅供參考，以實際派發为準）。如欲参與，請登入 APP 在【我的資產-要约回

     購】進行操作。

注意：系統將在指令收集截止日期後，推進狀態將自動變成‘指令收集完成'

<img src="/assets/Y26fbsPR6odEP3xjuaPcQHaRnfe.png" src-width="3412" src-height="1574" align="center"/>

由於 指令收集涉及到 客戶選擇交互通知，後續也要把客戶選擇記錄上傳 CCASS 處理，整個指令收集的系統節點如下：正在收集指令/上報成功/回填完成/處理成功/ 處理失敗

<img src="/assets/P3xebgHwdog982xTilUcyXggnpd.png" src-width="2584" src-height="600" align="center"/>

#### 回填（Backfill）

回填操作是指 將客戶指令選擇上傳 CCASS 處理後，要將 CCASS 的最後處理結果 回填到系統內的操作

操作說明：

预告類型为（OO EO RS ER TU TC ADR）同時推進狀態：登記成功，指令收集狀態：客户操作完成 才可以進行

#### 尾差處理

操作說明：

预告類型为（OO EO RS ER TU TC ADR）不支持

同時推進狀態：登記成功，指令收集狀態：客户操作完成 才可以進行，可以在 紀錄右側功能鍵操作【尾差調整】按鈕

<img src="/assets/UYKjbGmc9ofkqaxFxjTcI61pnLc.png" src-width="3192" src-height="1318" align="center"/>

尾差處理功能，可以按子倉處理，也可以不分子倉處理

<img src="/assets/FqUBbQz4eoaLAUxJ2VQctO6qnhe.png" src-width="2110" src-height="456" align="center"/>

### 執行

前置作業：已經通過 登記成功 的公司行動預告紀錄，同時已完成該預告相關業務節點（指令收集 等）

注意：這步驟基本是最後一步：執行經辦，若檢查該公司行動預告應該處理的業務節點與系統節點後，就可提交執行經辦

<img src="/assets/ADzTbjBFJoYBzBxuLj7cuhYhnPe.png" src-width="3404" src-height="1560" align="center"/>

此時會出現提交審核的畫面，確認提交後就會進入 後續執行審核的節點

<img src="/assets/KEDNboHYToHckwxA0qNciWs2nwf.png" src-width="3422" src-height="1628" align="center"/>

### 執行（審核）

前置作業：已經通過 登記成功 的公司行動預告紀錄，同時已完成該預告相關業務節點（過戶/指令收集 等）

操作說明：推進狀態：執行待審核，就可以查詢到 執行待審核的預告紀錄

<img src="/assets/GGz1b8aXeokPNTx1aO1cQHtgnuf.png" src-width="3406" src-height="1548" align="center"/>

請根據資料數據，做出審核通過的操作或拒絕，當審核通過後就完成一個 公司行動的預告處理週期

<img src="/assets/OAFkbafGcoiUQHxbVzkcxw84nth.png" src-width="3414" src-height="1628" align="center"/>

公司行動執行複核報表，增加了分組功能，可以協助操作者更方便地發現和 CCACC 的差異

<img src="/assets/TPK1bTP3co2VvjxkCYKcLfCxnzh.png" src-width="2908" src-height="1558" align="center"/>

## 系統節點

### 終止

在下列公司行動節點與系統狀態下，可以操作公司行動預告終止處理，確認終止後将會删除预告及關聯信息

（等於 所有該預告的一切操作 將會取消）

推進状態：初始化（预告創建成功的）

推進状態：登記成功，過户費收取字段值为否（不需過戶操作），執行方式为强制型可操作

推進状態：登記成功，過户費收取字段值为是，但過户状態为初始化、已撤销的可操作（也就是未開始處理過戶）

推進状態：登記成功，執行方式为可選擇的，指令收集状態为初始化的可操作

      以上符合狀態的支持批量操作

### 撤銷

在下列公司行動節點與系統狀態下，可以操作公司行動預告終止處理，確認終止後将會删除预告及關聯信息

（等於 所有該預告的一切操作 將會取消）

執行成功、执行成功並通知成本系统的，可操作

推進状態：登記成功，執行方式为可選擇的，指令收集狀態为客户操作中、客户操作成功、回填中、回填成功可操作

以上符合狀態的僅支持單筆操作

