---
title: 股權認購（OO、EO、RS、ER、TU、TC）
slug: xxxxxxxxx
sidebar_position: 1
---


# 股權認購（OO、EO、RS、ER、TU、TC）

## 適用場景

處理股權類認購操作處理(OO/EO/RS/TU/TC等)

## 前置條件

無

## 操作說明 

執行菜單：公司行動&gt;公司行動管理

- 股權認購（含供股權認購、優先認購）主要是在 TM 的流程推進方式上增加客戶選擇、上報、回填

### **創建**

1. 股權認購的公司行動類型包括 OO、EO、RS、ER，其中 EO、ER 為 OO 和 RS 的超額認購，需要獨立於 OO 和 RS 創建 
2. 預告資訊輸入股權登記日切、支付日期、選擇開始日期、內部選擇結束日期、外部選擇結束日期。 
3. 超額和非超額的需要分別創建公司行動。申購價格輸入到再投資金額字段

### **登記**

1. RS、ER 的第一次登記，需要在預告創建後手動點擊。在內部選擇結束日期前，系統會自動修改登記日，並且每日進行登記 
2.  OO、EO 因為不會進行交易，只進行一次登記

### **客戶選擇**

1. 「登記」公司行動後再點擊【行權指令收集】，會向客戶發送消息方案選擇

<img src="/assets/YRwSbm7guoxPoNx46cJcqhr4nkb.png" src-width="3400" src-height="1350" align="center"/>

<img src="/assets/JZf1bvtPToVii5xa7Ogc5DCWnJb.png" src-width="2662" src-height="1032" align="center"/>

<img src="/assets/RUlVbE9ZxoO6qcxvjrycWwRkneb.png" src-width="2804" src-height="188" align="center"/>

### **上報回填**

OO 類公司行動在修改價格後，重新回填，可按新價格計算認購款

<img src="/assets/CKcYbrBC0oVroixlidtcjFJ9npd.png" src-width="2806" src-height="876"/>

1. ·內部選擇日期結束後，系統將自動將指令收集狀態修改為處理成功。 
2. ·根據指令收集的匯總數據，在上游平臺完成認購處理，並在系統點擊完成 
3. 上報後，系統將解凍資金，對認購股權進行出帳處理，對認購款進行在途處理

<img src="/assets/DVIWbqBDbocARHxYKgxcLpjRnub.png" src-width="1280" src-height="561" align="center"/>

1. 上報回填完畢，派發權益後，在操作區域點擊回填進行回填處理 
2. 回填完畢後，系統將根據回填的數量重新計算權益和費用 
3. 非超額回填的（非超額認購），不能修改回填確認數量 

<img src="/assets/FsRrbXZoIoA3Krx8y87cyDxcnrg.png" src-width="1280" src-height="474" align="center"/>

1. 超額回填的（超額認購的），可以根據上游數據修改回填結果

<img src="/assets/WWsGbmoO0osl9RxfvJzcWSFknnc.png" src-width="1280" src-height="316"/>

### **執行**

執行時，將按回填計算的權益和費用處理，同時對在途資金進行出帳處理

