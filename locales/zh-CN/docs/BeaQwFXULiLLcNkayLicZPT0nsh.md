---
title: 公募基金
slug: gongmujijin
sidebar_position: 0
---


# 公募基金

# 适用场景

本模块主要是管理公募基金每日订单，净值以及交易结算。于交收日，操作人员根据基金托管人计算之净值及申购份额，于系统中维护基金净值，并确认于交易日受理的基金申购委托。系统将会扣取客户资金，并增加客户基金份额持仓。

# 前置条件

仅适合基金交易结算也在 WBO 柜台进行的租户。

### 使用说明

#### 客户订单

执行菜单：基金管理&gt; 公募基金&gt;客户订单 Tab 页签

在本作业可以查询到前台 APP 端的公募基金订单纪录，  可以看到基金订单的申购/赎的状态

<img src="/assets/MMrpbLsIboM1w8x9UovclZIUnje.png" src-width="2986" src-height="1742" align="center"/>

#### 净值表

执行菜单：基金管理&gt; 公募基金&gt;净值表 Tab 页签

本作业可以查询基金的净值数据

<img src="/assets/Eg8abABWOoqFUQxDwqbcMIW0nNg.png" src-width="2978" src-height="1708" align="center"/>

注意：系统已改成 透过 行情数据源 自动获取 公募基金的净值表（无法租户 自行新增，避免数据更新错误）

#### 基金清算

执行菜单：基金管理&gt; 公募基金&gt;基金清算 Tab 页签

本作业可以进行基金后台的清算作业（包含数据确认/申购交收/赎回钱货交收）

<img src="/assets/XDujb8DY4ou5RgxGQ0AcxbJJnmf.png" src-width="2962" src-height="1778" align="center"/>

**清算****操作流程：**

1. 选择产生的基金管道订单，选择‘订单初始化’状态后，中点击【数据发送】，弹框资讯确认无误后，点击【确认】，此时订单状况会变成'发送成功'

<img src="/assets/FnOpbGgsZo8u0XxA3CgccIgenOg.png" src-width="2972" src-height="1740" align="center"/>

1. 数据发送之后，等后一段时间会收到基金公司申购/赎回确认档，这时在该基金记录操作区，选择数据【**回填**】

<img src="/assets/BTsibSl3GocgBixDu4fcQyqknQg.png" src-width="3000" src-height="1598" align="center"/>

回填视窗弹出，需要填写 基金净值；申购份额=申购金额/基金净值；赎回金额=赎回份额*基金净值

<img src="/assets/XZh1bTDlioljIRxue9OcEZvQn6d.png" src-width="2974" src-height="1706" align="center"/>

1. 数据回填之后，**点击核对确认**，进行数据确认，确认提交。若当天没有订单，自动核对确认，自动完成交收。

<img src="/assets/DhuabdgfDo8uBrx9yCBctCfSnnh.png" src-width="2978" src-height="1272" align="center"/>

1. 选中对应管道单进行申购交割，点击确认之后没有问题申购就完成了

<img src="/assets/OYMabkb5soV1gRxp3bCcXiginkd.png" src-width="2984" src-height="1500" align="center"/>

1. 后续如果申购交割完成之后还有赎回，会弹出来赎回货交割，点击完赎回或交割后是赎回钱交割，点完整个流程就结束了；如果没有赎回，申购交割完成之后整个流程就结束了

<img src="/assets/Bu7YbvYk5oXrOXxnMzvcxcFfnYc.png" src-width="3004" src-height="1486" align="center"/>

<img src="/assets/Gk8pbplskoFnk6xpKPIcJE65nAe.png" src-width="2988" src-height="1466" align="center"/>

#### 交易日历

执行菜单：基金管理&gt; 公募基金&gt;交易日历 Tab 页签

本作业可以查询到公募基金商品的交易日历，可以操作【作废】与【回撤】。

注意：目前系统已经不强依赖交易日历了，该功能只是查看当 API 方式对接上手时上手返回的交易日历。

<img src="/assets/TfjUbUEhQoBUUxxssuSceoK7nMh.png" src-width="2994" src-height="1572" align="center"/>

