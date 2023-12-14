---
title: 场景-BE（选股选息）
slug: xxxxxxxxx
sidebar_position: 8
---


# 场景-BE（选股选息）

## 适用场景

操作选股选息相关的 BE 类权益行动

## 前置条件

无

## 操作说明 

执行菜单：公司行动&gt;公司行动管理

### **创建**

1. 整体流程在 TM 基础上，增加客户选择流程，用于处理选股选息 
2. 在预告创建时选择 BE 

执行方式配置为可选择 

过户费收取选择是 

输入选择开始日期、内部选择结束日期（内部是对劵商客户开放的选择时间）、外部选择结束日期 

     （外部是劵商对外上报的时间筛选用）

1. 方案可新增多个，当中只能有一个可标记「是」的默认方案，默认方案既可以选择现金也可以选择股票

<img src="/assets/BUJCbxByfo7cMPxjKHccLeFsnrc.png" src-width="2654" src-height="324" align="center"/>

### **登记**

1. 到登记日点击【登记】，推进流程 
2. 登记后拉取持仓报表中账务日期=股权登记日的已结算持仓 
3. 登记后，系统会按照默认方案进行行权 

### **客户选择** 

过户完成后，点击【指令收集】。操作后，系统会发送消息通知（APP+客户端）客户。在选择开始日期后到内部选择结束日期之间，客户可以在 App 上进行选股选息

<img src="/assets/NqwobZYwso02hsxrUlpcA3hentd.png" src-width="2902" src-height="1552" align="center"/>

BO 人员可在后台协助客户完成方案的选择，方案选择完毕后，系统将针对该客户进行二次登记，计算权益和收费

<img src="/assets/XVkAbjmkmoOLnKxeX2ecp3XonIc.png" src-width="2504" src-height="1538" align="center"/>

<img src="/assets/Mkn6baA95o2Cn9xtZ83cgajEnhe.png" src-width="2498" src-height="1556" align="center"/>

### **上报回填**

1. 内部选择结束日期后，BO 人员可以点击预告编号，查阅客户的方案选择结果，在 CCASS 进行登记。客户行权数量可以查看每个方案的实际行权股票数量字段 
2. BE 上报不需要在系统登记，直接在 CCASS 系统处理即可 
3. 尾差处理时分方案隔离进行

<img src="/assets/KSdHbkGqSoS3U7xOrCqcyyoInce.png" src-width="1280" src-height="621" align="center"/>

<img src="/assets/CWlsbUH6FoMQ7lxKuQ8c4zVinVh.png" src-width="1280" src-height="615" align="center"/>

### **执行**

CCASS 正式分股后，可以进行尾差处理，执行等操作

