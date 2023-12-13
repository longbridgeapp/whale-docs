---
title: 場景-BE（選股選息）
slug: xxxxxxxxx
sidebar_position: 8
---


# 場景-BE（選股選息）

## 適用場景

操作選股選息相關的BE類權益行動

## 前置條件

無

## 操作說明 

執行菜單：公司行動&gt;公司行動管理

### **創建**

1. 整體流程在 TM 基礎上，增加客戶選擇流程，用於處理選股選息 
2. 在預告創建時選擇 BE 

執行方式配置為可選擇 

過戶費收取選擇是 

輸入選擇開始日期、內部選擇結束日期 （内部是對劵商客户開放的選擇時間）、外部選擇結束日期 

     （外部是劵商對外上報的時間篩選用）

1. 方案可新增多個，當中只能有一個可標記「是」的默認方案，默認方案既可以選擇現金也可以選擇股票

<img src="/assets/BUJCbxByfo7cMPxjKHccLeFsnrc.png"/>

### **登記**

1. 到登記日點擊【登記】，推進流程 
2. 登記後拉取持倉報表中賬務日期=股權登記日的已結算持倉 
3. 登記後，系統會按照默認方案進行行權 

### **客戶選擇** 

過戶完成後，點擊【指令收集】。操作後，系統會發送消息通知（APP+客戶端）客戶。 在選擇開始日期後到內部選擇結束日期之間，客戶可以在 APP 上進行選股選息

<img src="/assets/NqwobZYwso02hsxrUlpcA3hentd.png"/>

BO 人員可在後台協助客戶完成方案的選擇，方案選擇完畢後，系統將針對該客戶進行二次登記，計算權益和收費

<img src="/assets/XVkAbjmkmoOLnKxeX2ecp3XonIc.png"/>

<img src="/assets/Mkn6baA95o2Cn9xtZ83cgajEnhe.png"/>

### **上報回填**

1. 內部選擇結束日期後，BO 人員可以點擊預告編號，查閱客戶的方案選擇結果，在 CCASS 進行登記。客戶行權數量可以查看每個方案的實際行權股票數量字段 
2. BE 上報不需要在系統登記，直接在 CCASS 系統處理即可 
3. 尾差處理時分方案隔離進行

<img src="/assets/KSdHbkGqSoS3U7xOrCqcyyoInce.png"/>

<img src="/assets/CWlsbUH6FoMQ7lxKuQ8c4zVinVh.png"/>

### **執行**

CCASS 正式分股後，可以進行尾差處理，執行等操作

