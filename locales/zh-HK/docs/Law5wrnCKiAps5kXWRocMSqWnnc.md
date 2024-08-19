---
title: 1.1 開户流程
slug: Law5wrnCKiAps5kXWRocMSqWnnc
sidebar_position: 0
---


# 1.1 開户流程

## 1.1A 問：開户成功會有電郵通知的記錄？

<b>答： </b>在「消息中心 &gt; 消息記錄 &gt; 短訊／郵件」頁面點擊查看到發出內容。如沒有顯示到相關功能，請申請開通消息中心的權限。

<img src="/assets/KN1ub2ppOoRFzwxFJg2cSLOWnYc.png" src-width="2390" src-height="626" align="center"/>

## 1.1B 問：駁回開户申請，客户會收到通知？

<b>答：</b>線上申請的作駁回會收到電郵、app 推送通知；線下申請的則沒有通知，駁回可以選擇退到那個頁面。

## 1.1C 問：駁回客户能作資料修改？

<b>答：</b>線下開户能操作「駁回」，在「KYC &gt; 開户資料」點擊「編輯」修改。線上的會駁回給客户在 App 作修改。

## 1.1D 問：線上開户＆線下開户賬號規則是什麼？

<b>答：</b>線上依照券商設置的賬號生成規則；線下的能自定義賬號碼沒有限制，如沒有輸入會按照規則生成。

## 1.1E 問：開户 CA 認證的限制次數是多少？

<b>答：</b>如錯誤太多，默認設置是：

- 1 分鐘，限調用 3 次；
- 1 小時，調用 10 次；
- 1 天（24 小時），調用 15 次。

## 1.1F 問：CA 開戶的信息源是來自哪裡？

<b>答：</b>來自深圳市電子商務安全證書管理有限公司獲取公安部查詢源和銀聯身份信息。

## 1.1G 問：CA 認證的線上開户客户那些字段可以在 app 修改？

<b>答：</b>CA 認證透過 OCR（光學字元辨識）識別資料：

姓名、證件號、性別、出生日期 - 字段會默認填寫，客戶可修改；

詳細地址、證件有效日期 - 當前 app 不能修改，後台可作修改（在「KYC &gt; 開户列表 &gt; 詳情」頁面中處理）

## 1.1H 問：什麼是 VC 審核？

<b>答：</b>命中「VC 審核規則」，將顯示在命中規則欄位中，並展示對應信息，如：

1. 長者：用户年齡為 65 歲或以上
2. 低學歷：用户最高學歷為「小學或以下」
3. 相關人員與客戶確認風險後，便可通過 VC

<img src="/assets/O76IbrHopoqGvlxmMdfcapccn0f.png" src-width="2594" src-height="1048" align="center"/>

<em>開户列表中的 VC 審核規則欄位</em>

<img src="/assets/HDggboelHoBHJUxztuacglNcnXd.png" src-width="1298" src-height="291" align="center"/>

<em>開户審批流程順序</em>

## 1.1I 問：開户時會有 AML 檢審嗎？

<b>答：</b>訂閱了 TESS（第三方平台）功能，處理開戶時系統會有 TESS 基本 AML 檢查是否有命中，然後可以登錄到 TESS 平台查詢詳情

<img src="/assets/T7a9bwhxtog2LKxl9B7cETM5nPb.png" src-width="2794" src-height="735" align="center"/>

## 1.1J 問：申請開户時，後台會檢查跟現有客戶相似的資料嗎？

<b>答：</b>會的，以客户姓名及出生日期作檢查，在「KYC &gt; 開户列表 &gt; 詳細」頁面中 "<b>相似客户</b>" 欄位會有提醒，顯示到資料相似的客户。

<img src="/assets/VhCJbYYLMojrLrxvhe9cQiSsnOb.png" src-width="2484" src-height="990" align="center"/>

## 1.1K 問：賬户開通後有通知嗎？會有什麼附件？

<b>答：</b>線上 或 線下開戶，成功開通賬戶後，客戶都會收到短信和電郵通知。

個人客戶的開户電郵通知內會有開户文件附件（開户申請書、W 8、CRS 的 PDF 檔）；但企業、聯名客戶，不會發送附件的，因文件太大會發不出。

發出通知可在「消息中心＞消息記錄」查看，以下例子為參考：

- 電郵模版
    ```text
親愛的 xxx： 

您的證券帳戶 (xxxx) 已開通。您可在附件中查看開戶申請文件。文件已加密，您開啟文件時須輸入密碼。密碼組成方式：手機號碼末四位 + 證件編號末四位。密碼中的字母必須大寫，有括號的直接忽略。

例如：手機號碼是 12345678，證件號碼是 123456（X），則結單密碼是 5678456X。

若無手機號碼或身份證件號，則只取已有的四位號碼（手機號碼末四位或身份證件號碼末四位）。 
接下來，您可以選擇存入現金來開啟您的投資旅程。

祝您有美好的投資體驗！

此致 
xxx 证券
```

- 短訊模版：
    ```text
【xxx 证券】親愛的陳大文，您的賬戶 12345678-*********** 已成功開通，您可以立即啟動 App，開啟投資之旅。
```

## 1.1L 問：如何操作轉賬認證開户？

<b>答：</b>開户入金選用 "直接入賬" 方式開户，見以下步驟（認證類型 - 網銀轉賬）

> 通過轉賬驗證開戶的賬戶，只能以香港的銀行進行資金轉賬。

(i). 在「KYC &gt; 開户列表」頁面中搜尋申請開户的客户，在操作欄點擊「詳情」，確認客户填寫資料無誤後點擊「通過初審」。

<img src="/assets/LXxbbb71NopJaax8KyicuyrCneb.png" src-width="2638" src-height="683" align="center"/>

<img src="/assets/NVUJbr2Jgono0rxLgsxcOfNRnbe.png" src-width="2617" src-height="1439" align="center"/>

(ii). 在「款項管理＞入金＞入金申請」頁面搜尋申請開户入金的客户點擊「直接入賬」，確認入金資料無誤後點擊「提交審批」。

<img src="/assets/Gy5dbTEWfopDRhxsu1mclwihncg.png" src-width="2534" src-height="1113" align="center"/>

<img src="/assets/OmsTb06L0oZ6cIx1VESc6Fw3nah.png" src-width="2406" src-height="1383" align="center"/>

(iii). 去到「入金審核 &gt; 開户中」頁面，在操作欄點擊「審批」

<img src="/assets/JHr9biKj8o04NKxQ5mkcNq7Fnbg.png" src-width="2559" src-height="1167" align="center"/>

(iv). 在「入金審核」頁面二次確認客户入金轉賬資訊無誤後，點擊「審批」

<img src="/assets/POavbl1khoun7kxl8xKcokpSnke.png" src-width="2551" src-height="1348" align="center"/>

(v). 審核人員在右上角「審批」有提醒，之後點擊「通過」

<img src="/assets/FJtmbiUU7oeaPixBLhXcmhhUn4e.png" src-width="2567" src-height="1380" align="center"/>

(vi). 回到「KYC &gt; 開户列表」頁面搜尋客户在操作欄點擊「詳情」進到「開户詳情」頁面，點擊「通過 RO 審批」并「確定」

<img src="/assets/FKLMbEE4connNBxh272cdadincd.png" src-width="2531" src-height="1404" align="center"/>

<img src="/assets/RPGvbayOQoVApkxyfJ8ci3a4nMc.png" src-width="2523" src-height="1395" align="center"/>

(vii). 開户狀態會更新為「已開通」，客戶 APP 上收到賬户開通信息能正式操作使用。

> 通過轉賬驗證開戶的賬戶，只能以香港的銀行進行資金轉賬。

<img src="/assets/IQIIbjcTboAkCJx2p6CcADJ8n4c.png" src-width="2586" src-height="810" align="center"/>

## 1.1M 問：公司開户申請中的“使用設備數”是什麼？

<b>答：</b>“使用設備數”指客户登錄設備限制的數量，如：手機、平板、桌上電腦等設備。系統上限為 10 個設備數。

> 賬户只可以登記一個電話號碼，要用到登記電話號碼收取驗證碼，讓不同授權人登入到設備。

<img src="/assets/A7AAb17LYorci8xNpIfc8FS2nDb.png" src-width="1093" src-height="1290" align="center"/>

## 1.1N 問：公司口開户沒有銀行卡，在系統什樣輸入？

<b>答：</b>公司銀行開戶沒有銀行資料，銀行名稱、賬號可輸入 N/A。當客户補回資料在「款頁管理 &gt; 銀行卡管理」添加回銀行卡資料。

## 1.1O 問：能否限制中國內地客户不能使用 App 開户？

<b>答：</b>這個可以作配置，以客户的 IP address 區分，如命中中國內地 IP address 就不能使用 App 開户。

## 1.1P 問：開戶待審核階段能否改賬戶類型（現金／融資賬户）？

<b>答：</b>“待審核”階段下，在「KYC＞開户列表」點擊「詳情」，進入頁面後點擊「駁回」。（見 1.1P 圖一、圖二）
之後在「KYC&gt;開戶資料」中點擊「編輯」修改賬戶類型。（見 1.1P 圖三、圖四）

<img src="/assets/MpAybCIuOooFLyx8VKocnzHYnah.png" src-width="2670" src-height="720" align="center"/>

<em>1.1P 圖一</em>

<img src="/assets/UNL3bH63boeHPDxAgtWccchcnOb.png" src-width="1398" src-height="1406" align="center"/>

<em>1.1P 圖二</em>

<img src="/assets/NY5UbpYjVo4oo5xne80clLrGnRd.png" src-width="2676" src-height="726" align="center"/>

<em>1.1P 圖三</em>

<img src="/assets/MCQibMffvok8KKxpNoRcy11gnQg.png" src-width="2332" src-height="1414" align="center"/>

<em>1.1P 圖四</em>

## 1.1Q 問：CA 認證開戶的檢查要素是什麼？

<b>答：</b>CA 認證開戶有兩個檢查要素：

1. 銀聯卡認證：身份證號碼、姓名、銀行號卡號、銀聯預留手機號碼
2. 人臉視頻：對比身份證上的人臉照片和活體視頻

## 1.1R 問：開戶資料的「所在區域」能否不填？

<b>答：</b>所在區域為必填項，如不想顯示任何信息，可以輸入一個空白鍵。

<img src="/assets/RX06b8JF5oToAqxAT3Qc1qoYnag.png" src-width="2834" src-height="1604" align="center"/>

## 1.1S 問：第三方見證的開戶流程是什麼？

<b>答：</b>App 選了「第三方見證」在 "開戶資料準備" 頁面，提示客户需準備好開戶文件和相關資料，然後點擊「下一步，郵寄資料」。在“郵寄資料至”頁面提醒需郵寄文件，提供文件後點擊「確認已寄出」。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[45%]" width-ratio="45">
<img src="/assets/IfyDbzu2AoXGGdxWodVcWy3dnIe.png" src-width="448" src-height="1432" align="center"/>
</div>
<div class="w-[54%]" width-ratio="54">
<img src="/assets/AQKcbrHP9oFJQaxMTzCcasxCnOf.png" src-width="532" src-height="1416" align="center"/>
</div>
</div>

## 1.1T 問：線下開通個人戶口如何錄入銀行賬戶資料？

答：在「款項管理&gt;客戶銀行卡」點擊「新增銀行卡」以添加客户銀行賬戶資料并作審核通過。

<img src="/assets/Ys39b0eBfoIIasxUheQc3e8in82.png" src-width="2698" src-height="642" align="center"/>

## 1.1U 問：開戶能否輸入兩個電話號碼？

答：線下創建開户時可以分別輸入「登錄手機號」(見 1.1U 圖一) 用登錄 App 收取認證碼；在“錄入開户資料”輸入「聯繫手機號」(1.1U 圖二) 多個客戶可使用相同的聯繫手機號。

<img src="/assets/UsRnbUQzxo3be7xvMMAcZrj2njc.png" src-width="2696" src-height="1398" align="center"/>

<em>1.1U 圖一</em>

<img src="/assets/UBE7bHSNPoBClqxzz5rcmd7hn6b.png" src-width="2702" src-height="1408" align="center"/>

<em>1.1U 圖二</em>

## 1.1V 問：為什麼開戶審核完成初審後，未能到「RO 審核」階段？

答：請留意「風險規則」內容，如：納稅地區與居住地區國籍不一致，須要填寫回風險資料。

<img src="/assets/QCpvbFgAuoHpN0xRbStcxjUJnBh.png" src-width="2718" src-height="1126" align="center"/>

## 1.1W 問：客戶開戶修改見證方式，須要駁回至哪個開戶頁面？

答：在「KYC&gt;開户列表」點擊「駁回」可剔選“證件上傳頁”的選項，把申請退回給客户修改。（見 1.1W 圖一）
或在「備註」輸入駁回內容，然後在“駁回頁面”中選擇「證件上傳頁」退回開户申請。（見 1.1W 圖二）

<img src="/assets/XnEzbwb2XoaKLpxttXRcbh2hnhe.png" src-width="2718" src-height="1364" align="center"/>

<em>1.1W 圖一</em>

<img src="/assets/EwmTbaZyQoBbSBxdyKlcaP77nBe.png" src-width="2722" src-height="1370" align="center"/>

<em>1.1W 圖二</em>

## 1.1X 問：為什麼內地客戶在 App 開戶無法修改地址？

答：使用大陸身份證開戶的客戶默認使用身份證的地址，沒有輸入地址的地方；其他地區證件可以填寫居住地址。國內客户在後台「KYC&gt;開戶列情」點擊「詳情」可以修改地址（見 1.1X 圖一）。

<img src="/assets/LQF8bkW94oRbMSxwoKEcEBU7nQ3.png" src-width="2574" src-height="984" align="center"/>

<em>1.1X 圖一</em>

