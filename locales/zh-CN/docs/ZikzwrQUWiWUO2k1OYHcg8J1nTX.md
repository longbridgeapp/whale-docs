---
title: 会计分录
slug: ZikzwrQUWiWUO2k1OYHcg8J1nTX
sidebar_position: 1
---


# 会计分录

## 适用场景

使用者在初始化使用会计中台功能时，需要维护的基础数据

## 前置条件 

拥有会计中台的菜单权限，并且已经设定了会计工作中涉及的会计科目

### 会计分录

执行菜单：财务管理&gt;会计记帐&gt;会计分录

此功能可以维护会计分录，其中会计分录是外部财务系统最重要的会计凭证转入的依据

<img src="/assets/PQh8b32ZToYfAdx2vpSc4nCHncd.png" src-width="1280" src-height="634" align="center"/>

首先，系统是支持根据不同数据源配置分录规则，可以自动地对数据源产生会计分录，若某些数据源无法自动配置，此功能提供批次导入与手工录入方式：

如果自动产生分录后，作业提供新增【编辑】功能，可以修改产生分录纪录，同时纪录新增支付流水新增支票号栏位展示

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[53%]" width-ratio="53">
<img src="/assets/Ti6pbTfr8o7WNixaid7c9HUFnMg.png" src-width="2658" src-height="1412" align="center"/>
</div>
<div class="w-[46%]" width-ratio="46">
<img src="/assets/Ob6qbO9WUoOFVZxe97KcfcVOn0b.png" src-width="2280" src-height="1414" align="center"/>
</div>
</div>

如果需要手工录入的分录很少，可以选择【手动录入】

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/DKe2bQYxXoFDTZx23ELcvkOOn5c.png" src-width="2502" src-height="1330" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/F8KTbchXmoofyvxjzkQcvI5Znzb.png" src-width="2446" src-height="1346" align="center"/>
</div>
</div>

也可以选择【批量导入】，先行下载范本之后，根据批量范本进行编制分录并导入到系统中

<img src="/assets/WriwbnxO2osVIOxwXd9cUzpVntc.png" src-width="3246" src-height="1534" align="center"/>

在记录右侧操作区的【删除】键，也可进行删除此会计分录

<img src="/assets/CXjwbpq6Lo4WsKxQKi4c1xWdnuc.png" src-width="3364" src-height="1474" align="center"/>

如果某个帐务日期对应的数据源获取不完整，可以选择对应日期的数据源进行【重跑】，系统会更新数据源产生最新会计分录资料

<img src="/assets/TmWzb1wa5outiAxHgHdcSUB6nkb.png" src-width="3362" src-height="1396" align="center"/>

如果系统生成的会计分录已经核对无误，手工可以点选【汇总】生成科目余额汇总表

<img src="/assets/BYtEbceajoss3fxpTM2cM9HcnGb.png" src-width="3370" src-height="1452" align="center"/>

会计分录中新增【报表导出】按钮，方便按照财务软件格式要求进行报表导出

<img src="/assets/OmMbbFnwBo1a16x9GfUcjmOtn9d.png" src-width="3248" src-height="1606" align="center"/>

提供合并会计分录查询功能，合并会计分录时，系统会按账帐日期获取汇率

<img src="/assets/FUdqb2nXPoBr8AxN8fScGlnqnfg.png" src-width="3348" src-height="1418" align="center"/>

