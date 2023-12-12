---
title: 公司行动
slug: corp-action
sidebar_position: 6
---


# 公司行动

名词释义

|   |   |
|---|---|
|**术语****/ 缩略****词**|**说****明**|
|登记日 Record Date|- 分股分红的登记日，拆合股的生效日<br/>- 系统基于此获取持仓客户|
|除权日 Ex Dividend Date|- 在除权日前一天结算后，仍持有该股票的投资者会自动参与该公司行动。例如股票派息的话，除权日当天开市时会自动将公布会派出的利息于股价扣减<br/>- 美股公司行动等会将除权日转化为登记日，系统实际交互以登记日为准|
|预告编号<br/>公告编号|- 上手的预告编号，具有唯一性<br/>- 港股为 A 开头的编号|
|预告类型 Announcement Type|- 枚举：TM/OO/EO/BE 等各类型公司行动|
|选择开始时间 Election From|- 执行方式为可选择的必须填写<br/>- 必须到这个时间点才能_进行行权指令收集_|
|选择结束时间 Client Election To|- 执行方式为可选择的必须填写<br/>- C 端客户操作结束时间|
|选择结束时间（CCASS）Election To（CCASS）|- 执行方式为可选择的必须填写<br/>- 上手券商选择结束日期|
|支付日期 Payable Date|- 决定执行的流水展示在那一天<br/>    - 预告编辑时必须&gt;=当前账务日期<br/>    - 执行时进行更进一步校验 2 天内|
|创建时间 Created Time|- 预告在公司行动系统内创建的时间|
|更新时间 Updated Time|- 预告在公司行动系统内创建的时间|
|执行方式|- 描述公司行动流程推进是否需要客户参与行权，分为强制执行和可选择（自愿类）<br/>    - BE 类可以让客户参与（选股选息），也可以不让客户参与<br/>    - 供股、要约的必须让客户参与|
|过户费收取 Is Scrip Fee|决定是否收取过户费|
|派发 NOMINEE|派股、供股等才生效，决定新派发的股票是否在将来的公司行动中需要收取过户费，STREET 需要收取，NOMINEE 不需要收取|

# **已支持的的公司行****动类****型**

## **公司行****动处****理流程**

<img src="/assets/Ibsxbbh4AobkkLxH8GZcQErwnzd.png"/>

## 强制类**系统操作流程**

<img src="/assets/QQRKbnZGGo0fhwxCdsXcL4etn5e.png"/>

<img src="/assets/RSEQbp0w6oOQRwxuG0rcQMstnVg.png"/>

## **自****愿类****系统操作流程**

<img src="/assets/DbAlbxrhnoWMcaxo0uXcJemcnDe.png"/>

<img src="/assets/ZUG0btr2ooW5TWxmLhLcL1oln5c.png"/>

