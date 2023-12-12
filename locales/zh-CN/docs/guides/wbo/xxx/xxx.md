---
title: 合约管理
slug: xxx
sidebar_position: 0
---


# 合约管理

## 适用场景

- 客户合约
    - 在清算计费步骤后查询、编辑前台合约
    - 在清算计费步骤前补录后台合约
    - 在入账、交收后，调整合约

- 机构合约
    - 机构合约的延迟交收
    - 机构费用的对账

## 客户合约操作说明

菜单入口：合约管理 - 客户合约 - 详情

### **查询和编辑前台合约**

- 在操作清算计费步骤后，系统会基于前台交易订单、计费管理配置生成客户合约
- 点击详情可查看客户合约的详情

<img src="/assets/HoWob1zWHo50lmxBJOCcFRudncr.png"/>

#### 基础信息查询

- 进入详情页直接展示含交易日期、交收日期、特殊收费条件在内的基本信息
- 数据来源是“交易”的为前台合约
- 注意 1：前台合约只支持编辑费用信息、IBOND 累计利息、结算币种、仓位信息
- 注意 2：前台合约的其它字段如果有问题，需要先修改前台数据，然后依次执行清算前检查和清算计费步骤

<img src="/assets/D4AGbGysAojTmrxHqO1cPFeQnwh.png"/>

#### 结算币种编辑

- 在基础信息点击编辑

<img src="/assets/S43Qb4C9Oo4L2uxblMEcSGcznof.png"/>

- 同时修改结算币种和汇率并提交
- 系统会根据汇率和结算币种计算累计利息（结算币种）、交易金额（结算币种）、费用（结算币种）
- 系统会按结算币种进行扣费和交收

<img src="/assets/M0f1bheTdoTx9xxVFdOcOYL7nWh.png"/>

#### 成交记录查询

- 点击成交记录可展示成交记录

<img src="/assets/WUFab9eXkowbN1x74mRciCJtntc.png"/>

#### IBOND 累计利息编辑

- 在成交记录中，可以点击编辑，修改累计利息

<img src="/assets/QiHVbOEOaosGgaxmSDOc8RRMnFg.png"/>

#### 费用查询和编辑

- 点击费用信息可展示收费明细

<img src="/assets/KvoybiWFuoMGKmx7oVwcdToen8f.png"/>

点击试算会重算全部费用

<img src="/assets/RnZlbj5plo8XTwxd2mdcbFronWh.png"/>

点击添加可以增加费用，增加收费类型不能和已有的重复

<img src="/assets/Ngz3bzWEooXol3xuEzOcgnuJneb.png"/>

点击删除可以删除费用

<img src="/assets/Lkk5b94pEo9DlVxj81KcgFZKnsf.png"/>

点击编辑可以修改费用

<img src="/assets/XRpeb8EqNo0H3sxcXi2crj4Mngh.png"/>

#### 仓位信息查询和编辑

- 点击仓位信息可查询仓位数据

<img src="/assets/AxVCb2DMiosE1OxmC7Icki2gndX.png"/>

- 点击编辑可修改托管商和子仓

<img src="/assets/VwrAbaV1aokIxMxHuD7cxDCgn1b.png"/>

### 后台客户**合约补单和券商快捷补单**

- 供新增客户补单与劵商快捷补单的合约记录功能，这个补单就是 业务上所谓的 Client trade 与 Broker trade 补单
- 注意 1：WBO 后台补单是建立在合约基础上进行相关补单操作
- 注意 2：需要在清算前检查步骤前操作

#### 后台客户合约补单

- 点击新增客户补单

<img src="/assets/SNwjbsyHqojvLtxpNg6cuAiEnTe.png"/>

- 先补充基础信息
- 系统已支持历史交易日补单（最多前 5 个交易日），补单后交易日期为历史日期，账务日期为当日

<img src="/assets/P10Nb3ZeRoWmvAxZQbMcVBeEnMd.png"/>

- 提交后数据有误的，可进一步编辑后台合约的基础信息

<img src="/assets/Y8yPbfaMEogYLrxg8YJcU3zfnTb.png"/>

- 结算币种和交易币种不一致的可进一步编辑基本信息
    - 详见结算币种编辑功能

<img src="/assets/E4QnbcBSjonoE1xgvXIcXi6Gnjf.png"/>

- 若商品是 OTC 产品，则结算渠道要对应选择 OTC 结算渠道

<img src="/assets/K23hbjoknofY9uxu7j7cZkpan1f.png"/>

<img src="/assets/C2phbrVqPo6wH8xDakdc3D4ZnYf.png"/>

- 后台订单号可直接复制合约号，有多笔成交的后台成交流水号不能相同
- 系统将根据交易金额和交易数量计算价格

<img src="/assets/RhR4bPyPCoj5uMxw1tRcAhzxnZe.png"/>

- 点击试算可以自动计算费用
- 试算后可进一步编辑费用，详见费用查询和编辑

<img src="/assets/BrtPbMcIuoPOOLxtyercBpuEnob.png"/>

- OTC 补单系统会按大账号自动计算托管商、子仓
- 托管商、子仓可进一步编辑，详见仓位信息查询和编辑

<img src="/assets/PuZ1bLb7ZoWCCXx8CeccVf2ankv.png"/>

#### **券商快捷补单**

- 在完成所有客户合约补单后，可以透过右上【劵商快捷补单】操作劵商补单
- 注意：券商快捷补单仅能查询结算渠道为 OTC 的数据，生成的数据用于清算前检查步骤的对账

**机构合约（代理商合约）提前试算**

- 选择所有筛选条件，点击试算机构费用并刷新，系统会自动计算代理商费用（详见后文机构合约操作说明）

<img src="/assets/PFTWbur3yoMy7nxIotnc09iXnrd.png"/>

**更新对手文件**

- 业务初步核对数据，有问题的修改客户合约后，重新进入页面并刷新
- 操作人员也可以先点击编辑，临时调整数据
    - 注意：此编辑不能保存在数据库中，仅配合“更新对手文件”按钮使用

<img src="/assets/Y14fbyRhco3B7ixZItXct0Honcg.png"/>

- 核对无误后，200 条以内数据：
    - 可点击更新对手文件，该文件可用于清算前检查

<img src="/assets/LxmIbR0uCoQp7TxDX9ccUIflnXc.png"/>

- 核对无误后，200 条以上数据：
    - 可下载编辑，在清算前检查步骤前导入文件

<img src="/assets/PM7CbiCBvoMQTUxiGGvcGVrHnRg.png"/>

<img src="/assets/XURBbcPBpo8AFGxMi78c8NKLnkb.png"/>

## 机构合约操作说明

- 菜单入口：合约管理 - 机构合约

### **查询机构合约（代理商合约）**

- 在日切后系统会自动生成机构合约
- 机构合约会单独维护交收日和收费
    - 需要提前配置代理商收费，详见代理商收费配置

<img src="/assets/L40gbf9yrocjOZxCLjKcQrZ2nkb.png"/>

点击费用可以进一步跳转到收费明细

<img src="/assets/TLJ0bPLEIox9zyxB2HzcxYY5n0d.png"/>

<img src="/assets/F6Oab86Zmohxw1xt8MkcAXYenOb.png"/>

### **机构合约（代理商合约）提前试算**

- 选择所有筛选条件，点击试算机构费用并刷新，系统会自动计算代理商费用
- 操作后，同时会在机构合约界面生成机构明细
- 注意：生成的机构明细会在日切后被清除并重新生成

<img src="/assets/YK2rb18e1otUZMxyIkhc5wkgnfe.png"/>

