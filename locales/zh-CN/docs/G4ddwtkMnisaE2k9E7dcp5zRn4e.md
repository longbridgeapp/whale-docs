---
title: 日终任务
slug: bomanager-end-day-tasks
sidebar_position: 0
---


# 日终任务

## 适用场景

日终任务配置

执行每日日终任务操作

历史任务查询

## 前置条件

系统上线初期或日后新市场加入，需事先配置好日终任务 

完成市场规则配置

每日需要先确保完成其它相关事项才开始进行日终于

## 市场清算操作说明

### 对手方文件转入（Broker Trade）

执行菜单：清算管理&gt;文件处理&gt;文件导入 

点击导入文件，上传文件

<img src="/assets/Z5WNbO3jDo3tMvx62zHcB2vunIo.png" src-width="2914" src-height="1528" align="center"/>

可通过列表区域的状态字段关注 文档导入和解析状态

<img src="/assets/SfjebtiFyoK4tAxTiUdciDO6nnc.png" src-width="2910" src-height="1548" align="center"/>

例子：港股 CCASS 交易文件导入（CTF）

- 市场：选择港股，文件类型选择 CTF Trade File 后，上传文档
- 点击记录 ID 可下载上传的原始档案

<img src="/assets/SRuBbuBMcor4Nvx2P4dcLRqtnpe.png" src-width="2926" src-height="1562" align="center"/>

### 清算前准备

该功能的目的是检查执行日终任务前是否完成了相关配置和当天业务操作

市场清算完成交易文件导入，确认当前账务日期准确后，可点击执行清算前准备

<img src="/assets/OXuLbW4NtoGHJBxjA3ocoyNInkb.png" src-width="2908" src-height="1540" align="center"/>

执行后，5 秒内会返回检查结果。全部检查都通过的，可以进行后续操作

检查报错的，点击检查项目右上角可查看检查项目的规则和操作指引

<img src="/assets/P3Aybg8HdoLtfoxskrpc8bFTnFf.png" src-width="2906" src-height="1548" align="center"/>

部分检查会提供异常详情

<img src="/assets/Y2VkbISX8oxuDqxmbukcTdeon6d.png" src-width="2904" src-height="1540" align="center"/>

结算人员核对后，确认有问题的，在完成相关业务操作后，可点击“重新执行”

<img src="/assets/GSwobyfSIouTHuxUDtvcLS1An5e.png" src-width="2906" src-height="1558" align="center"/>

结算人员核对后，检查项目可以允许通过的，可点击手动审核人工通过（需要复核）

<img src="/assets/GFBubzDGeoZj2DxEfercgTUjnYf.png" src-width="2904" src-height="1558" align="center"/>

复核人员可点击手动审核（也可直接在工单审核），调出工单审核

<img src="/assets/AlJWb9lcGoBrubx42msca1wRndb.png" src-width="2920" src-height="1546" align="center"/>

<img src="/assets/M8Nqbh4kboss4nxcz5Fcr1YCnef.png" src-width="2920" src-height="1550" align="center"/>

结算人员核对后，因为业务流程有差别，需要永久关闭检查项目的，可以联系客服处理

<img src="/assets/Lg0Eb4bxdoV34rxBMUEcGTChned.png" src-width="2926" src-height="1556" align="center"/>

当审核通过后，清算前准备就算完成（文字会提示：已手动通过）

<img src="/assets/GyLLbvKRroHteSxah0jcZFbAnpd.png" src-width="2926" src-height="1558" align="center"/>

清算前准备检查项目

<table header_row="1">
<colgroup>
<col width="100"/>
<col width="147"/>
<col width="360"/>
<col width="169"/>
</colgroup>
<thead>
<tr>
<th><p>分类</p></th><th><p>检查项目</p></th><th><p>对应 作业查询检查</p></th><th><p>检查层级</p></th></tr>
</thead>
<tbody>
<tr>
<td><p>交易</p></td><td><p>交易文件导入</p></td><td><p>清算管理&gt;市场清算&gt;文件导入</p></td><td><p>市场清算</p></td></tr>
<tr>
<td></td><td><p>市场收市</p></td><td></td><td></td></tr>
<tr>
<td><p>期权</p></td><td><p>期权到期行权</p></td><td></td><td><p>市场清算</p></td></tr>
<tr>
<td><p>资产</p></td><td><p>资产调拨审核</p></td><td><p>资产帐户&gt;资产调拨&gt;帐户间转帐</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>调帐审核</p></td><td><p>资产帐户&gt;资产调帐&gt;手工调帐</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>资产冻结解冻审核</p></td><td><p>资产帐户&gt;冻结解冻</p></td><td><p>日终清算</p></td></tr>
<tr>
<td><p>款项证劵</p></td><td><p>入金审核</p></td><td><p>款项管理&gt;入金&gt;入金审核 Tab</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>出金审核</p></td><td><p>款项管理&gt;出金&gt;出金申请（未处理）Tab</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>换汇审核</p></td><td><p>款项管理&gt;换汇&gt;客户汇兑 Tab</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>证劵取出审核</p></td><td><p>证劵管理&gt;证劵取出</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>证劵存入审核</p></td><td><p>证劵管理&gt;证劵存入</p></td><td><p>日终清算</p></td></tr>
<tr>
<td><p>公司行动</p></td><td><p>行动登记</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>行动上报</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>行动执行</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>行动通知</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>将退市股票</p></td><td><p>公司行动&gt;公司行动</p></td><td><p>日终清算</p></td></tr>
<tr>
<td><p>新股</p></td><td><p>未公布中签操作</p></td><td><p>新股认购&gt;中签处理&gt;结果同步 Tab</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>未操作扣款</p></td><td><p>新股认购&gt;冻结收费&gt;待扣款 Tab</p></td><td><p>日终清算</p></td></tr>
<tr>
<td><p>结单</p></td><td><p>结单未发送</p></td><td><p>清算管理&gt;日终管理&gt;结单管理&gt;结单查询</p></td><td><p>日终清算</p></td></tr>
<tr>
<td><p>系统数据</p></td><td><p>收盘价确认</p></td><td><p>清算管理&gt;市场清算&gt;收盘价管理</p></td><td><p>日终清算</p></td></tr>
<tr>
<td></td><td><p>汇率检查</p></td><td><p>款项管理&gt;汇率管理&gt;参考汇率</p></td><td><p>市场清算、日终清算</p></td></tr>
<tr>
<td></td><td><p>市场日历检查</p></td><td><p>业务参数设置&gt;市场管理&gt;市场日历 Tab</p></td><td><p>市场清算</p></td></tr>
<tr>
<td></td><td><p>市场规则配置</p></td><td><p>业务参数设置&gt;市场管理&gt;市场规则 Tab</p></td><td><p>市场清算</p></td></tr>
<tr>
<td></td><td><p>前台流水检查</p></td><td><p>算前准备加“前台流水全部纳入清算”的检查项目</p></td><td><p>日终清算</p></td></tr>
</tbody>
</table>

### 市场清算**一键清算**

当清算前准备执行完毕后，就可以点选有上方【开始一键清算】功能键，系统会自动从第一步开始执行，一直到清算交收作业（当没有错误发生时，系统会自动续执行下个作业）

注：若有需要可点选 '暂停一键清算'，但系统会等当时作业执行完毕后，才开始暂停下一动作（功能键会变灰）

<img src="/assets/G5dDbVQOiohE3VxmjQjcDnVJnjb.png" src-width="2916" src-height="1546" align="center"/>

**暂停一键****清算**

如果要进行后台补单，或者修正合约的，可在数据同步直接点击“暂停一键清算”，然后逐步执行

<img src="/assets/IBU5bJNLGoJ7upxI7adcZnsinJd.png" src-width="2922" src-height="1548" align="center"/>

中间若有作业执行错误，则一键清算将会暂停，并停在相关错误的作业程序上，用户可以参考错误讯息提示进行后续修正处理

<img src="/assets/OzD3b7lUboZkDax10MucWx8Znmb.png" src-width="2908" src-height="1554" align="center"/>

此时可根据业务需要手动点选右侧下方相关的作业操作，来检查或修正纪录或著 往下一键算操作，系统会自动执行下一个作业

注意：在一键清算过程中，可以依赖系统的一键清算操作（自动执行所有作业），也可以自行 点选作业自行操作

<img src="/assets/YqB6bZ1iooifYNxBapNcaeI9nEh.png" src-width="2922" src-height="1556" align="center"/>

#### 日终数据同步（Client Trade）

点击执行后会同步数据系统（日切点前的出入金、交易、开户等数据）

#### 清算前检查（Trade Match）

在日终流程中点击清算前检查步骤会：自动触发时同时执行 T0 交易对帐

交易对帐失败的，可快速跳转到交易对账界面查询结果

<img src="/assets/XYbabEQr0o0VF9xqMjdcVv4Tnog.png" src-width="2904" src-height="1544" align="center"/>

**对帐结果查询**

可在**清算****检查 - 交易对账**页面分别查询各市场的交易对帐

每次点击检查会生成最新的检查结果，只需要维护最新的检查结果

参考图示如下：

<img src="/assets/NaePb9jQ2o02ifxJ7c9cSQW0ntf.png" src-width="3566" src-height="1732" align="center"/>

**特殊场景手动通过**

对手端档导入错误：在档导入介面，重新导入对手端档，然后重新点击清算前检查 

本端订单错误：增、删、改前台订单后，重新点击清算前检查 

按系统数据处理：在“检查结果”中，将对应的检查结果改为“通过”，然后重新点击清算前检查

<img src="/assets/D0w4beo5Bo37gPxbYbBcQkc7nPc.png" src-width="2920" src-height="1552" align="center"/>

#### 清算计费

依赖数据：前台交易订单

在清算计费步骤会生成前台合约，状态为待计费

该步骤暂停执行的，可以编辑前台订单的收费

详见：[合约管理](/AmY7wo5zviU2LakZvt9cAupxn0b) 的客户合约操作说明

#### 清算入帐

执行完毕后：

注意 1：后台补单必须在该步骤之前操作完成

注意 2：清算撤销（资产处理选择不处理的）后，此步骤已经完成的，清算计费和清算入帐为空跑，按原资料处理

#### 清算交收

- 执行后：
    - 根据合约和调帐等其他流水进行仓位处理
    - 对应日期的合约变更为交收完成
    - 生成仓位数据
    - 生成 ATI 等指令
    - 生成临时持仓，用于处理公司行动

## 日终清算操作说明

### 清算前准备

在正式执行日终清算前，需要先执行清算前准备

<img src="/assets/IpvXbbT4UouRrexorQbcT9bxnAQ.png" src-width="2492" src-height="1412" align="center"/>

<img src="/assets/MlrgblRS1o2rUtxWflocmEgYnNZ.png" src-width="2434" src-height="1418" align="center"/>

### 日终清算一键清算

当清算前准备执行完毕后，就可以点选有上方【开始一键清算】功能键

系统会自动从第一步开始执行，一直到结单生成步骤

结单后可通过报表或者结单进行检查

<img src="/assets/NbyjbRLpOotSbCxWY8dcxcmTn6e.png" src-width="2912" src-height="1522" align="center"/>

#### 数据汇总

此操作前需要完成流水日期调整，证券组合费/融资利息的提前归本、金额调整

此操作加工多个市场的交易数据、调帐数据、出入金、收盘价等文件，可重复点击

全市场最后一次同步日终数据

全市场最后一次仓位处理，生成完整仓位数据

生成最终的交易报表、持仓报表

数据汇总后操作流水日期调整、收盘价，需要重新点击数据汇总

有修改收盘价的，详见[收盘价管理](/GMcTwEI0Ui6gilkBiDxcJUF8nDc) 

需要修改流水日期的，详见[流水同步](/GRaEwPQSAibkSakNnX0coZhWnbh) 

#### 清算中检查

内部流水对帐、业务操作检查等（不断扩充中）

此项为内部数据检查，有异常的可联系客服，详见[清算检查](/CXfBwiBeAizZ79kghRKciesFnjb) 

检查可重复触发，排除问题后可重新触发检查

#### 资金清算

依赖数据：资金报表

前置配寘：计费管理融资利息

执行融资利息计算、证券组合费、融券计算等任务

融资利息需要调整的，详见[融资管理](/VS7Twf1vqieePKkHxvEcDp1CnSh) 

注意：月底归本计算任务也在本流程中

#### 清算后检查

清算后检查主要检查资金清算步骤的执行状况

有问题的详见[清算检查](/CXfBwiBeAizZ79kghRKciesFnjb) 

#### 结单生成

点击结单生成后，可生成结单

结单已发送的，不能重新生成

结单查询和发送详见[结单管理](/XHP6wlEUTicGHtkGQ6dc0lyPnQc) 

#### 日切

执行完日切流程后，当前系统帐务日会切换到下一日

融资利息等的结算操作

进行经纪人分成计算

#### SI/ATI 指令导出

执行完日切流程后，后面根据交收时段，产生交收指令导出

指令导出详见 [文件处理](/MaOTwGf6ziQLxEkvArNcmUCCnCe) 

