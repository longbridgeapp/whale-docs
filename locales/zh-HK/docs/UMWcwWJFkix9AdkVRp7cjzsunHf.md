---
title: 快速上手
slug: UMWcwWJFkix9AdkVRp7cjzsunHf
sidebar_position: 1
---


# 快速上手

## 概述

Whale 基金管理系统全面支持券商维护基金库、配置 App 端基金展示、管理基金订单及交易结算等全流程的管理。

## 维护基金库

可以维护一个公募基金的基金资料，配置基金主体和介绍，也可以管理基金的上架与显示展示。同时配置和管理基金渠道，查看基金管理费。

### **步骤一：创建基金渠道**

首先点击『 新建渠道 』，配置基金渠道，基金渠道指定了基金提交的上手、日切时间、基金申赎信息确认的回填时间以及时区；

<img src="/assets/NcS0b7TvBoRj9fxDAg2crCxUnGd.png" src-width="3252" src-height="1708" align="center"/>

<div class="callout callout-bg-3 callout-border-3">
<div class='callout-emoji'>💡</div>
<ul>
<li><p>基金公司渠道一定要遵循範例格式模式填寫，禁止填寫中文以及其他特殊符號；</p>
</li>
<li><p>私募基金的基金公司渠道嚴格按照提示加前綴 private-；</p>
</li>
<li><p>其中自動回填就是通过 API 拉取第三方基金公司的确認净值/确認金额/确認份额等，若劵商租户没有走 API 的配置時，請任意填下时间即可；</p>
</li>
</ul>
</div>

### **步骤二：新建基金**

在基金管理中，根据新建基金的数量决定单个添加 / 批量导入。

<img src="/assets/BkQ7biLKBopMHxxfvBac0bg1n1g.png" src-width="3220" src-height="1714" align="center"/>

通过 ISIN 代码快速选择需要添加的基金，并选择已经配置的基金渠道。

<img src="/assets/Bnitb3hUzoNhAyx91F0cUIjrn1e.png" src-width="3232" src-height="1714" align="center"/>

新建基金后补充基金的基本信息、申购规则、赎回规则和适当性匹配规则。

<img src="/assets/G9mabDRtfoNjyZxvBkEcn75vnIS.png" src-width="3248" src-height="1720" align="center"/>

## 配置基金展示

完成新建基金后，需要对基金的状态进行设置，同时在 App 的场景中配置基金的展示。

### **步骤一：配置基金显示和交易状态**

在基金管理列表中，将新建的基金设置为显示&上架状态，此时 App 中的基金排行中将显示该基金，同时基金支持交易。

<div class="callout callout-bg-3 callout-border-3">
<div class='callout-emoji'>💡</div>
<ul>
<li><p>隐藏状态的基金，App 客户端无法搜索和查看基金；</p>
</li>
<li><p>显示状态但是未上架的基金，App 客户端可搜索和查看基金，但客户无法交易基金；</p>
</li>
</ul>
</div>

### **步骤二：配置基金运营场景**

在 App 展示管理中，配置基金展示的位置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>基金管理 &gt; App 展示管理</p>
</div>

<img src="/assets/VBihbyFgwo6mfux5iAecDj0FnSf.png" src-width="3238" src-height="1756" align="center"/>

App 客户端展示位置如下

## 管理基金订单

客户在客户端申赎基金后，产生的基金订单将汇总展示在基金后台，支持后台人员查看

<img src="/assets/Nl7vbeNcToj2BmxX3dBczdGenvb.png" src-width="1280" src-height="746" align="center"/>

当系统时间到达配置的「基金渠道」的「获取订单时间」，则对应渠道的基金订单将会汇总成一个渠道单，进入到基金清算环节。

## 基金清算交收

### **步骤一：数据发送**

选择产生的基金管道订单，选择‘订单初始化’状态后，中点击『 数据发送 』，弹框资讯确认无误后，点击『 确认 』，此时订单状况会变成'发送成功'

<img src="/assets/GmKtb7dEBo1zgBxH5zKcVMPenBd.png" src-width="1280" src-height="749" align="center"/>

### **步骤二：数据回填**

数据发送之后，等后一段时间会收到基金公司申购/赎回确认档，这时在该基金记录操作区，选择数据『 回填 』

<img src="/assets/EIKUbY85Vojlpyx64Axcc6wznuf.png" src-width="1280" src-height="681" align="center"/>

回填视窗弹出，需要填写 基金淨值；申购份额=申购金额/基金淨值；赎回金额=赎回份额*基金淨值

<img src="/assets/JL00bmM6zoAXPAxkFGRckiwpn2b.png" src-width="1280" src-height="734" align="center"/>

<div class="callout callout-bg-3 callout-border-3">
<div class='callout-emoji'>💡</div>
<p>申购份额和赎回金额的回填有自动校验机制，系统将根据申购提交金额、赎回提交份额和基金净值进行申购份额和赎回金额的计算，如果手动回填的数据与系统计算的数据差值在 0.5 时，点击『 确定 』将提示错误，需要重新填写。</p>
</div>

**步骤三：核对确认并交收**

数据回填之后，点击核对确认，进行数据确认，确认提交。若当天没有订单，自动核对确认，自动完成交收。

<img src="/assets/GDnUbvmGIopJhdxFfnjcuKBZndx.png" src-width="1280" src-height="546" align="center"/>

**步骤四：申购交割**

选中对应渠道单进行申购交割，点击确认之后即完成申购

<img src="/assets/LTVxbaiHTo7JLBxHhsuc7GaMnvb.png" src-width="1280" src-height="643" align="center"/>

**步骤五：赎回货交割、赎回钱交割**

后续如果申购交割完成之后还有赎回，会弹出来赎回货交割，点击完赎回或交割后是赎回钱交割，点完整个流程就结束了；如果没有赎回，申购交割完成之后整个流程就结束了。

<img src="/assets/UTKIbmaeuoc6Dwxskrhct9uInjc.png" src-width="1280" src-height="633" align="center"/>

<img src="/assets/TxSPbvr2voBd3Fxrpp7cZ2vCnCf.png" src-width="1280" src-height="628" align="center"/>

