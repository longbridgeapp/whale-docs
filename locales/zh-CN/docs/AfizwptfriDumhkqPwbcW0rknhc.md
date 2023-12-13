---
title: 场景-股权认购（OO、EO、RS、ER、TU、TC）
slug: xxxxxxxxx
sidebar_position: 5
---


# 场景-股权认购（OO、EO、RS、ER、TU、TC）

## 适用场景

处理股权类认购操作处理(OO/EO/RS/TU/TC等)

## 前置条件

无

## 操作说明 

执行菜单：公司行动&gt;公司行动管理

- 股权认购（含供股权认购、优先认购）主要是在 TM 的流程推进方式上增加客户选择、上报、回填

### **创建**

1. 股权认购的公司行动类型包括 OO、EO、RS、ER，其中 EO、ER 为 OO 和 RS 的超额认购，需要独立于 OO 和 RS 创建 
2. 预告资讯输入股权登记日切、支付日期、选择开始日期、内部选择结束日期、外部选择结束日期。 
3. 超额和非超额的需要分别创建公司行动。申购价格输入到再投资金额字段

### **登记**

1. RS、ER 的第一次登记，需要在预告创建后手动点击。在内部选择结束日期前，系统会自动修改登记日，并且每日进行登记 
2.  OO、EO 因为不会进行交易，只进行一次登记

### **客户选择**

1. 「登记」公司行动后再点击【行权指令收集】，会向客户发送消息方案选择

<img src="/assets/YRwSbm7guoxPoNx46cJcqhr4nkb.png"/>

<img src="/assets/JZf1bvtPToVii5xa7Ogc5DCWnJb.png"/>

<img src="/assets/RUlVbE9ZxoO6qcxvjrycWwRkneb.png"/>

### **上报回填**

OO 类公司行动在修改价格后，重新回填，可按新价格计算认购款

<img src="/assets/CKcYbrBC0oVroixlidtcjFJ9npd.png"/>

1. ·内部选择日期结束后，系统将自动将指令收集状态修改为处理成功。 
2. ·根据指令收集的汇总数据，在上游平台完成认购处理，并在系统点击完成 
3. 上报后，系统将解冻资金，对认购股权进行出帐处理，对认购款进行在途处理

<img src="/assets/DVIWbqBDbocARHxYKgxcLpjRnub.png"/>

1. 上报回填完毕，派发权益后，在操作区域点击回填进行回填处理 
2. 回填完毕后，系统将根据回填的数量重新计算权益和费用 
3. 非超额回填的（非超额认购），不能修改回填确认数量 

<img src="/assets/FsRrbXZoIoA3Krx8y87cyDxcnrg.png"/>

1. 超额回填的（超额认购的），可以根据上游数据修改回填结果

<img src="/assets/WWsGbmoO0osl9RxfvJzcWSFknnc.png"/>

### **执行**

执行时，将按回填计算的权益和费用处理，同时对在途资金进行出帐处理

