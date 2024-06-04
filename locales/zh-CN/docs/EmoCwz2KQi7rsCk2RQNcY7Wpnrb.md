---
title: 系统介绍
slug: EmoCwz2KQi7rsCk2RQNcY7Wpnrb
sidebar_position: 1
---


# 系统介绍

本使用手册适用于 Longbridge Whale-权益平台，运营系统管理员和使用成员使用。阅读此手册，你将了解 Whale-权益平台作业功能操作

# 权益系统

## 功能介绍

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>功能目录</p></td><td><p>目录说明</p></td></tr>
<tr><td><p>权益</p></td><td><p>Whale 权益系统体系中，权益主要包括卡券福利、奖励中心、权益中心三大块功能。</p></td></tr>
<tr><td><p>卡券福利</p></td><td><p>主要分卡券和福利，具备卡券的创建、管理、结算功能；实物奖励模版创建、实物奖励管理功能</p></td></tr>
<tr><td><p>奖励中心</p></td><td><p>即创建好卡券福利后后台发奖功能，可查询所有的奖励记录并给主动给用户发卡券、实物奖励</p></td></tr>
<tr><td><p>权益中心</p></td><td><p>主要用与查询 APP 内的权益订单数据</p></td></tr>
</tbody>
</table>

### 1.1 权益使用流程

适用：运营人员，权益系统涉及到下列几个主体：
权益系统：运营人员负责配置管理权益项目 (卡劵福利/奖励中心/权益中心)
APP  端：客户与各种权益做交互行为互动
结算系统：当客户与权益项目作交互时所产生的相关帐务处理
数据服务系统：这部份是指一些权益项目与行情服务开通有关 (若有）
交易系统：这部份是指一些权益项目与交易服务使用有关 (若有）

## 卡券福利

### 功能菜单目录

<img src="/assets/KJE4b19TwolIOvxpsOCcVWi0n3b.png" src-width="472" src-height="624"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>菜单名称</p></td><td><p>功能说明</p></td></tr>
<tr><td><p>卡券配置</p></td><td><p>主要功能为卡券模版的查询以及卡券模版配置功能</p></td></tr>
<tr><td><p>卡券管理</p></td><td><p>主要对已发放出去的所有卡券进行管理，可查询到卡券具体发给谁，以及卡券当前状态与使用情况。</p></td></tr>
<tr><td><p>卡券结算</p></td><td><p>主要为所有已经结算完成且进行金额返还的卡券结算流水表单，如先收后返的平台费、免佣卡等卡券使用所产生需要返还现金的流水，而自动抵扣的免佣卡不生成流水则不会提现在表单中</p></td></tr>
<tr><td><p>实物奖品</p></td><td><p>主要用户实物奖励模版查看与实物奖励模版配置功能</p></td></tr>
<tr><td><p>实物发放管理</p></td><td><p>对已发放的实物奖励可导出地址进行发货，填写物流单号供用户查看。</p></td></tr>
</tbody>
</table>

### 卡券模版配置

菜单入口：运营系统&gt;权益系统&gt;卡劵福利&gt;卡劵配置

<img src="/assets/UAlpb1VmYo7Dplxe1x0ck7Bvnvg.png" src-width="3812" src-height="1974" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>列表功能操作</p>
<ul>
<li><p>查询：可通过卡券模版标题、模版代码、有效时间等筛选查询卡券模版</p>
</li>
<li><p>查看：点击查看则可见当前卡券模版所有配置字段信息</p>
</li>
<li><p>编辑：点击编辑则可编辑当前卡券字段与规则。</p>
</li>
</ul>
<p>（谨慎使用，修改保存之后的字段会影响到当前线上已发放的卡券信息）</p>
<ul>
<li>复制：当想要快速创建相似卡券模版时，点击复制可直接复制当前卡券模版信息进行部分字段修改即可快速创建新的模版。</li>
</ul>
</div>

点击右上角“新建”按钮后打开如下页面

<img src="/assets/HlwYbgeyaoMHjqxZ0mmcjvvPn7b.png" src-width="2880" src-height="2218" align="center"/>

#### 卡券基础信息配置

选择对应要创建的卡券类型，在卡券预览中可见当前选中的卡券类型的样式预览图，填写好卡券标题、卡券有效期、卡券价值、卡券使用说明、规则配置等必填字段。具体字段规则如下：

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>卡券类型</p></td><td><p>按照所购买的产品不同将展示不同卡券种类。</p></td></tr>
<tr><td><p>卡券标题</p></td><td><p>可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>卡券有效期</p></td><td><p>分为固定有效期和领取后有效期两种模式。</p>
<ul>
<li>设置固定有效期为卡券在固定时间段内有效，例如 2023 年 1 月 1 日至 2023 年 1 月 31 日有效期卡券，不管在何时发放何时领取，用户收到后使用日期都不变；</li>
<li>设置领取后 XX 天后有效则按照领取时间起开始算有效时间，例如设置卡券领取 7 天后有效，则用户在 2023 年 1 月 1 日领取卡券，卡券有效期则 Wie2023 年 1 月 1 日至 2023 年 1 月 8 日。</li>
</ul></td></tr>
<tr><td><p>卡券价值</p></td><td><p>配置当前卡券币种以及对应价值/价值上限。设置后用户可见当前卡券的价值。<br/>部分价值等于实际结算价值如：现金卡、股票现金卡、平台费抵扣卡、全额免佣卡等</p></td></tr>
<tr><td><p>卡券使用说明</p></td><td><p>卡券使用说明，填写后将在卡券中心，以及卡券选择页面中展示。<br/>可以在交易环节使用的卡券类型（如平台费抵扣卡、股票现金卡、免佣卡）该字段最好为必填</p></td></tr>
</tbody>
</table>

#### 卡券规则配置

<table>
<colgroup>
<col width="111"/>
<col width="127"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>卡券类型</p></td><td><p>规则字段</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>行情/基本面卡</p></td><td><p>数据权益标签</p></td><td><p>必填项，用户获得该卡后对应可获得的数据权益服务包</p></td></tr>
<tr><td rowspan="3"><p>免佣卡</p></td><td><p>适用市场</p></td><td><p>必填项，可多选。即可使用该卡进行免佣的市场有哪些，可配置单市场也可配置多市场</p></td></tr>
<tr><td><p>适用标的类型</p></td><td><p>必填项，可多选。免佣标的类型配置，当前仅支持正股交易免佣配置，后续再拓展其他场景</p></td></tr>
<tr><td><p>免佣模式</p></td><td><p>必填项，单选，免佣模式支持可配置全额免佣、终身免佣、按比例免佣</p>
<ul>
<li>全额：即支持按照当前卡券价值全额免佣，直到扣完全部额度为止。</li>
<li>终身：即免除该用户在平台内当前市场交易的产生的所有佣金，有效期为终身。（用户注销后重新注册的除外）</li>
<li>按比率：即按照配置比例进行佣金优惠。例如配置 80%，则收取 80% 佣金。免除 20%。</li>
</ul></td></tr>
<tr><td><p>打新特权卡</p></td><td><p>指定 IPO 可用</p></td><td><p>非必填，单选。可选择指定打新股票可用。</p></td></tr>
<tr><td rowspan="3"><p>打新手续费卡</p></td><td><p>指定 IPO 可用</p></td><td><p>非必填，单选。可选择指定打新股票可用。</p></td></tr>
<tr><td><p>打新方式</p></td><td><p>必填项，单选。可选择融资打新、现金打新是可用</p></td></tr>
<tr><td><p>融资额度门槛</p></td><td><p>当选择融资打新时可选填，设置后则只有在大于该融资额度打新时才可使用。</p></td></tr>
<tr><td rowspan="2"><p>股票卡</p></td><td><p>指定股票</p></td><td><p>必填项，单选。兑换后可获得对应股票代码股票</p></td></tr>
<tr><td><p>可兑换股票股数</p></td><td><p>必填项，填写单张可兑换的股票的股数</p></td></tr>
<tr><td rowspan="3"><p>股票现金卡</p></td><td><p>指定股票</p></td><td><p>非必填，单选。不选则可通用。选择后则只有对应股票交易或兑换可使用。</p></td></tr>
<tr><td><p>适用市场</p></td><td><p>必填项，可多选。即可使用该卡进行交易的股票市场有哪些，可配置单市场也可配置多市场</p></td></tr>
<tr><td><p>适用标的类型</p></td><td><p>必填项，单选。当支持正股交易、期权交易两种类型现金卡配置。</p></td></tr>
<tr><td><p>平台费抵扣卡</p></td><td><p>可使用次数</p></td><td><p>必填项，即当前卡券可抵扣多少次平台费。如卡券价值为 30 港币，抵扣次数为 3，则单次可抵扣上限 10 港币。</p></td></tr>
<tr><td rowspan="2"><p>融资利息券</p></td><td><p>优惠方式</p></td><td><p>必填项，单选。支持免息、折扣两种优惠模式选择</p>
<ul>
<li>免息：则有效期内所产生融资利息直接免除</li>
<li>折扣：则有效期内所产生融资利息直接打折收取。</li>
</ul></td></tr>
<tr><td><p>折扣率</p></td><td><p>选择折扣优惠时，必填字段。设置折扣为当前收取折扣。例如 80%，则直接收取 80% 利息，优惠 20%。</p></td></tr>
</tbody>
</table>

点击确定，则生成对应卡券模版以及模版代码。

#### 卡券使用/结算数据查询

菜单入口：运营系统&gt;权益系统&gt;卡劵福利&gt;卡劵管理

- 本作业提供卡券使用数据查看

<img src="/assets/TWVvbIrrLo0pUpxOt3NcWWiSn0d.png" src-width="2880" src-height="1800" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>卡券有效期</p></td><td><p>显示用户实际收到卡券之后的具体开始时间和结束时间。若由于用户未开户导致没有开始时间显示的则显示卡券设置的时间</p></td></tr>
<tr><td><p>状态</p></td><td><ul>
<li>未使用：卡券还未开始使用</li>
<li>使用中：只有卡类型有使用中状态，即卡券当前已使用了部分。例如：50 次卡，当前已使用 3 次则状态为使用中</li>
<li>已使用：全部价值均使用完毕。例如：50 次卡，当前已使用 50 次则状态为已使用</li>
<li>已过期：卡券未使用或未全部使用完直接过期的都叫已过期。例如：50 次卡，当前已使用 3 次但是有效期已过则显示已过期。或者单次卡还未使用，有效期已过也显示已过期</li>
<li>已锁定：未使用完单当前已绑定不可使用了。例如：50 次卡，当前使用了 49 次，再次下单使用第 50 次时当订单还未下单成功前都为已锁定状态；30 元股票现金卡，下单时已绑定了该张卡，则该卡当前则为已锁定状态。后续下单时则不可选中绑定了。</li>
</ul></td></tr>
<tr><td><p>总价值</p></td><td><p>卡券价值</p></td></tr>
<tr><td><p>已用价值</p></td><td><p>当前已结算的实际优惠金额的总和。</p></td></tr>
<tr><td><p>到账时间</p></td><td><p>发放到用户的时间</p></td></tr>
<tr><td><p>来源</p></td><td><ul>
<li>活动：通过活动进行发奖 </li>
<li>奖励：通过奖励中心后台发奖</li>
<li>任务：通过用户完成任务进行发奖</li>
</ul></td></tr>
</tbody>
</table>

- 卡券结算数据查看/导出

菜单入口：运营系统&gt;权益系统&gt;卡劵福利&gt;卡劵结算

<img src="/assets/EIErbFYNuoAEInx20HDcnumPnp5.png" src-width="2880" src-height="1800" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>核销场景</p></td><td><ul>
<li>交易：交易后结算，如免佣卡、股票现金卡、平台费抵扣卡</li>
<li>打新：打新后结算，如打新面手续费</li>
<li>兑换：兑换后结算，如股票卡</li>
<li>现金：直接现金领取，如现金卡</li>
</ul></td></tr>
<tr><td><p>关联流水号</p></td><td><ul>
<li>交易则显示对应的交易流水号</li>
<li>打新则显示对应的打新交易流水号</li>
<li>兑换则显示兑换的资产流水号</li>
<li>现金则显示资产流水号</li>
</ul></td></tr>
<tr><td><p>卡券价值</p></td><td><p>该卡券实际价值</p></td></tr>
<tr><td><p>实际结算成本</p></td><td><p>当前流水实际抵扣或者优惠的金额</p></td></tr>
<tr><td><p>核销日期</p></td><td><p>用户结算/返还的时间</p></td></tr>
</tbody>
</table>

### 实物奖励模版配置/查看

<img src="/assets/Z7nVbKkYsoVd7qxzVDxc01SNnSe.png" src-width="2880" src-height="1800" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>列表功能操作</p>
<ul>
<li><p>查询：可通过奖品类型、奖品标题、创建时间、业务类型进行列表筛选</p>
</li>
<li><p>查看：点击查看则可见当前奖品模版所有配置字段信息</p>
</li>
<li><p>编辑：点击编辑则可编辑当前奖品字段与规则。</p>
</li>
</ul>
<p>（谨慎使用，修改保存之后的字段会影响到当前线上已发放的卡券信息）</p>
<ul>
<li>下架：该奖励下架，所有已发放奖励过期</li>
</ul>
</div>

#### 创建实物奖励模版

点击页面右上角“新建模版”按钮，将打开以下页面

<img src="/assets/TCYSbFyjkogIi1xexUccE36NnEb.png" src-width="2852" src-height="1432" align="center"/>

配置面板进行如下字段配置

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>奖品类型</p></td><td><p>当前仅支持实物奖励一种奖品类型，后续拓展其他类型</p></td></tr>
<tr><td><p>奖品名称</p></td><td><p>可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>奖品有效期</p></td><td><p>分为固定有效期和领取后有效期两种模式。</p>
<ul>
<li>设置固定有效期为奖品在固定时间段内可领取，例如 2023 年 1 月 1 日至 2023 年 1 月 31 日有效期卡券，不管在何时发放何时领取，用户收到后均需要在该时间端内领取并填写地址才有效，否则奖励将直接过期。</li>
<li>设置领取后 XX 天后有效则按照领取时间起开始算领取有效时间，例如设置卡券领取 7 天后有效，则用户在 2023 年 1 月 1 日领取卡券，则用户需要在 2023 年 1 月 1 日至 2023 年 1 月 8 日前领取，否则奖励将直接过期。</li>
</ul></td></tr>
<tr><td><p>奖品价值</p></td><td><p>配置当前卡券币种以及对应价值</p></td></tr>
<tr><td><p>奖品概述</p></td><td><p>配置后，将展示在用户领取奖励页面下方</p></td></tr>
<tr><td><p>奖品图片</p></td><td><p>上传奖品图片，建议上传图片大小为（100*100）像素，jpg、png 图像格式的文件，大小不</p></td></tr>
</tbody>
</table>

填写好以上信息都，点击确定则创建成功，系统自动生成对应模版代码（用于奖励关联）。

#### 实物奖励发放管理流程

- 发奖后，查看用户填写的地址信息导出地址与发货信息进行线下发货

<img src="/assets/ZqhMb6In3o0hc2xYVMzcR7zUnmU.png" src-width="2834" src-height="1320" align="center"/>

<img src="/assets/XgdHblGwWo4nh6xbE2Zcs29Gnbe.png" src-width="2854" src-height="1442" align="center"/>

<img src="/assets/LOYnbmhj4oTB5VxsZYJc3rm0nfe.png" src-width="2854" src-height="1340" align="center"/>

- 发货后将已发货的物流单号信息填写到系统中或批量导入到系统中，以便用户进行查看

点击“发货”按钮，弹框可填写物流单号

<img src="/assets/YP3xbUqETofrcoxg2xXcA6dgn4c.png" src-width="2350" src-height="1294" align="center"/>

填写好物流单号后点击确认即可

若操作量多时，可点击页面右上角“批量导入物流单号”可选中文件可批量导入物流单号，更高效！

<img src="/assets/PypFbLlRyoQ4ORxQCVLcXCIonvp.png" src-width="2376" src-height="1344" align="center"/>

## 奖励中心

#### 给指定用户发奖

菜单入口：运营系统&gt;权益系统&gt;奖励中心&gt;奖励纪录

<img src="/assets/HlQYbnblWoBPFMxeyBjcO5KInud.png" src-width="2354" src-height="1322" align="center"/>

<img src="/assets/Q4fybiZ2zoGlIExWJrscWCm7nkh.png" src-width="2852" src-height="1424" align="center"/>

#### 给批量用户发奖

菜单入口：运营系统&gt;权益系统&gt;奖励中心&gt;奖励纪录

- 批量发放现金 - 点击批量发放现金奖励按钮

<img src="/assets/ErOObK5EaotksaxSBnKcflo9nid.png" src-width="2368" src-height="1414" align="center"/>

- 批量发放实物 - 点击批量发放实物奖励按钮

略。同上

- 批量发放卡券 - 点击批量发放卡券奖励按钮

略。同上

## 权益中心

菜单入口：运营系统&gt;权益系统&gt;权益中心&gt;奖励纪录

  主要用于运营可查看、导出当前 app 内权益商店成交的订单情况

  

<img src="/assets/JFCwbke7FoY24rxQu8Ycg5v4nHf.png" src-width="2340" src-height="1358" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>订单号</p></td><td><p>用户购买订单流水号</p></td></tr>
<tr><td><p>产品名称</p></td><td><p>用户所购买的产品名称</p></td></tr>
<tr><td><p>付款人</p></td><td><p>付款用户 ID</p></td></tr>
<tr><td><p>账户</p></td><td><p>用户付款账户</p></td></tr>
<tr><td><p>支付流水号</p></td><td><p>用户付款流水号</p></td></tr>
<tr><td><p>货币类型</p></td><td><p>付款货币类型</p></td></tr>
<tr><td><p>产品成本</p></td><td><p>产品实际成本价格</p></td></tr>
<tr><td><p>支付额度</p></td><td><p>用户付款金额</p></td></tr>
<tr><td><p>支付时间</p></td><td><p>用户支付完成时间</p></td></tr>
<tr><td><p>下单时间</p></td><td><p>用户下单时间</p></td></tr>
<tr><td><p>支付状态</p></td><td><p>用户当前支付状态</p></td></tr>
<tr><td><p>创建时间</p></td><td><p>订单创建时间</p></td></tr>
</tbody>
</table>

# 二。App 端用户功能

以下展示前端  APP 有关的配置呈现效果：

## 卡券

<div class="flex gap-3 columns-4" column-size="4">
<div class="w-[25%]" width-ratio="25">
<p><b>App 入口</b></p>
<img src="/assets/MscXb8U7KodWEIx6wRzcPdchnug.png" src-width="628" src-height="1352" align="center"/>

<p>我的 - 我的卡券</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>我的卡券</b></p>
<img src="/assets/EDeEbd2wdoZRuwxAD5oc2IYZnBd.png" src-width="624" src-height="1360" align="center"/>

<p>用户可自行查看当前已有卡券以及卡券状态</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>交易使用卡券</b></p>
<img src="/assets/OjY3b3jRSoyDDcxCf7scavNJnrf.png" src-width="674" src-height="1366" align="center"/>

<img src="/assets/Nt8WbSAo0oOqf2xUtHZcWlUonSd.png" src-width="750" src-height="1624" align="center"/>

</div>
<div class="w-[25%]" width-ratio="25">
<p><b>打新使用卡券</b></p>
<img src="/assets/J9z1byDzsoTwWyx2Qhzciofentd.jpeg" src-width="724" src-height="1610" align="center"/>

</div>
</div>

## 奖励

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<p><b>App 入口</b></p>
<img src="/assets/UBDzbE9wno8h8IxE3tBcg1bbnLf.png" src-width="620" src-height="1366" align="center"/>

<p>我的 - 奖励记录</p>
<img src="/assets/BDomb6mPOoVCzmxT9nJcpDBJntb.png" src-width="626" src-height="1360" align="center"/>

<p>我的 - 活动中心 - 奖励</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p><b>奖励记录</b></p>
<img src="/assets/HyG4b1X2aop949xSQR1cf9JhnH7.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>展示所有历史记录</p>
<img src="/assets/SBx1bmkw6oUof2xDIAUcltmxnPd.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>可筛选类别进行查看</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p><b>实物奖励领取</b></p>
<img src="/assets/QoVCbrFw5oUkeuxHErUchiB7nsg.png" src-width="750" src-height="1624" align="center"/>

<p>输入地址与电话</p>
<img src="/assets/GLyzbBtx9og5fqx6HYTcqMdYnFe.png" src-width="750" src-height="1626" align="center"/>

<p>确认邮寄信息</p>
<img src="/assets/QjHpb2ZCkowquYx7bqpcCE0PnNb.png" src-width="750" src-height="1296" align="center"/>

<p>查看物流单号</p>
</div>
</div>

## 权益商店

<div class="flex gap-3 columns-4" column-size="4">
<div class="w-[25%]" width-ratio="25">
<p><b>商店入口</b></p>
<img src="/assets/O9QQbQtl7ojLErxqqzVc8YrVnz3.png" src-width="614" src-height="1366" align="center"/>

<img src="/assets/Ave1bImSpoMlwextaaFc7K4tn3g.png" src-width="626" src-height="1374" align="center"/>

<p>我的 - 我的行情 - 行情商店</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>行情商店</b></p>
<img src="/assets/LaYibIKfaou2tUxSmYIcOfpSn6g.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>展示所有产品，可分 tab 切换不同市场行情产品列表</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>购买产品</b></p>
<img src="/assets/LsPBbeU5sowKT1xw8zIcFXTqnMe.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>选择对应产品、对应套餐支付购买</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>购买记录查看</b></p>
<img src="/assets/K18MbF2VVojVvZxWRJCc0QVanBd.png" src-width="628" src-height="1330" align="center"/>

<img src="/assets/HUembGSCioUNOcxKOhecJIuXnjf.jpeg" src-width="1080" src-height="2338" align="center"/>

</div>
</div>

