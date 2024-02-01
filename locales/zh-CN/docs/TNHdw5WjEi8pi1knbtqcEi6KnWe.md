---
title: 客户合约
slug: TNHdw5WjEi8pi1knbtqcEi6KnWe
sidebar_position: 0
---


# 客户合约

## 适用场景

客户合约管理操作

## 前置条件

无

## 客户合约操作说明

菜单入口：合约管理&gt;客户合约&gt;详情 功能键

### **查询和编辑前台合约**

在操作清算计费步骤后，系统会基于前台交易订单、计费管理配置生成客户合约

点击详情可查看客户合约的详情

<img src="/assets/JzMlbzEIFohA3CxG5RDctXwQnOb.png" src-width="2456" src-height="1242" align="center"/>

<img src="/assets/VIDHbRJ4RoVyyHxV5T7cJHPmnwh.png" src-width="2484" src-height="1530" align="center"/>

基础信息查询

进入详情页直接展示含交易日期、交收日期、特殊收费条件在内的基本信息

数据来源是“交易”的为前台合约

<div class="callout callout-bg-2 callout-border-2">
<p>💡 注意：</p>
<ul>
<li><p>前台合约只支持编辑费用信息、IBOND 累计利息、结算币种、仓位信息</p>
</li>
<li><p>前台合约的其它字段如果有问题，需要先修改前台合约数据，再依次执行清算前检查和清算计费步骤</p>
</li>
</ul>
</div>

<img src="/assets/RwiIbvmCyoNdmKxdYE5cvDD7n2c.png" src-width="2486" src-height="1544" align="center"/>

#### 结算币种编辑

在基础信息点击编辑

<img src="/assets/VRIQb5nbeomSLjxm4pKcr2Xlndg.png" src-width="2486" src-height="1502" align="center"/>

同时修改结算币种和汇率并提交

系统会根据汇率和结算币种计算累计利息（结算币种）、交易金额（结算币种）、费用（结算币种）

系统会按结算币种进行扣费和交收

<img src="/assets/RRMmbtWqaoECF9xuvKGcJY3pnQe.png" src-width="2512" src-height="1558" align="center"/>

#### 成交纪录查询

点击成交记录可展示成交记录

<img src="/assets/Rii5b6TVIoDuGLxflBIcpV1Vngh.png" src-width="2480" src-height="1542" align="center"/>

#### IBOND 累计利息编辑

在成交记录中，可以点击编辑，修改累计利息

<img src="/assets/EfrCbauyBomid9xnJDZc25Agnvf.png" src-width="2500" src-height="1556" align="center"/>

#### 费用查询和编辑

点击费用信息可展示收费明细

<img src="/assets/Yyw5bB0gGoteoLxxgIBcFMwQnjh.png" src-width="2488" src-height="1526" align="center"/>

点击试算会重算全部费用

<img src="/assets/GDtPbJoDzoS89oxA8PZcqKZbnuT.png" src-width="2480" src-height="1536" align="center"/>

点击添加可以增加费用，增加收费类型不能和已有的重复

<img src="/assets/P1mRbcGXcox4KRxh9lLc0cwUnWd.png" src-width="2894" src-height="1548" align="center"/>

点击删除可以删除费用

<img src="/assets/RJV3bz2ZloEFhSxsDLgcfB6Pnue.png" src-width="2892" src-height="1538" align="center"/>

点击编辑可以修改费用

<img src="/assets/Do1FboLhIopualxNChwcvBBsnOc.png" src-width="2916" src-height="1538" align="center"/>

#### 仓位信息查询和编辑

点击仓位信息可查询仓位数据

<img src="/assets/MRKBbz8wvoOLNOxsCKscYVN2nXg.png" src-width="2900" src-height="1552" align="center"/>

点击编辑可修改托管商和子仓

<img src="/assets/Cwkbb7r8BogK2vxy3J3c745snwf.png" src-width="2914" src-height="1544" align="center"/>

### 后台客户**合约补单和券商快捷补单**

提供新增客户补单与劵商快捷补单的合约记录功能，这个补单就是 业务上所谓的 Client trade 与 Broker trade 补单

#### 后台客户合约补单

点击新增客户补单

<img src="/assets/IYrhbsWRCownhBxzpWcc4EA0nIh.png" src-width="2900" src-height="1546" align="center"/>

先补充基础信息

系统已支持历史交易日补单（最多前 5 个交易日），补单后交易日期为历史日期，帐务日期为当日

<img src="/assets/CWjBbOz3MoyO7yx1vCWcSSd9nDb.png" src-width="2256" src-height="1274" align="center"/>

提交后数据有错误，可进一步编辑后台合约的基础信息

<img src="/assets/ZnP8b9v5boPK0HxHayFcnR3yneg.png" src-width="2906" src-height="1550" align="center"/>

结算币种和交易币种不一致的可进一步编辑基本信息

<img src="/assets/EQ3pbRDNMogatTxVpXTcVdjznYd.png" src-width="2904" src-height="1544" align="center"/>

若商品是 OTC 产品，则结算渠道要对应选择 OTC 结算渠道

<img src="/assets/Ntqvbnvnlo8wufxuGBAcECV6npg.png" src-width="2910" src-height="1554" align="center"/>

<img src="/assets/F5uvb1vDNoot6jx7JiSc8eWZnbb.png" src-width="2896" src-height="1552" align="center"/>

后台订单号可直接复制合约号，有多笔成交的后台成交流水号不能相同

系统将根据交易金额和交易数量计算价格

<img src="/assets/Tye7b1wOFoKzTixKNHscxrJpnQb.png" src-width="2914" src-height="1552" align="center"/>

点击试算可以自动计算费用

试算后可进一步编辑费用，详见费用查询和编辑

<img src="/assets/WyTqblDofoqj2qxpwpMcaGU4nPf.png" src-width="2900" src-height="1540" align="center"/>

OTC 补单系统会按大账号自动计算托管商、子仓

托管商、子仓可进一步编辑，详见仓位信息查询和编辑

<img src="/assets/Kb74bcpuDoZeGNxIILvcnbisnyf.png" src-width="2900" src-height="1550" align="center"/>

#### **券商快捷补单**

在完成所有客户合约补单后，可以透过右上【劵商快捷补单】操作劵商补单

注意：券商快捷补单仅能查询结算渠道为 OTC 的数据，生成的数据用于清算前检查步骤的对帐

<img src="/assets/VGDjbzjyAouGmgxaMF9cGGMknUh.png" src-width="2898" src-height="1520" align="center"/>

**机构合约（代理商合约）提前试算**

选择所有筛选条件，点击试算机构费用并刷新，系统会自动计算代理商费用（详见后文机构合约操作说明）

<img src="/assets/UoLsbDV2Ko8e7gxe00Wc1h1UnAb.png" src-width="2914" src-height="1098" align="center"/>

**更新对手方文件**

初步核对数据，有问题的修改客户合约后，重新进入页面并刷新

操作人员也可以先点击编辑，临时调整数据，注意：此编辑不能保存在数据库中，仅配合“更新对手文件”按钮使用

<img src="/assets/SJNqbCD1DoGaFvxuZDMc36qbneF.png" src-width="2926" src-height="1554" align="center"/>

核对无误后，200 条以内数据，可点击更新对手文件，该文件可用于清算前检查

<img src="/assets/PUf9buLloocyCZxP37Wc81gZnGf.png" src-width="2922" src-height="848" align="center"/>

核对无误后，200 条以上数据，可下载模板文件编辑，在清算前检查步骤前导入文件

<img src="/assets/MxspbLLh0o1pDux50q1c0ssgnVc.png" src-width="2920" src-height="838" align="center"/>

<img src="/assets/KkvFbFwLdoxihyx6Yaac1HifnAh.png" src-width="2904" src-height="1542" align="center"/>

