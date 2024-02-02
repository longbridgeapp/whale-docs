---
title: 使用指南
slug: BEWZwntMZiUcvKkTozWc5aannWc
sidebar_position: 0
---


# 使用指南

# 一、系统介绍

公司行动系统是清算系统的重要组成部分，用于处理公司股权变动相关业务，包括分红、拆合股、换股等。目前，公司行动系统已支持牛熊证回收、拆合股、分红、供股、邀约、ADR 等多类型。

根据客户是否参与公司行动，公司行动可分为强制型和自愿类（可选择）两种类型。强制型公司行动是指客户无需采取任何操作即可参与的行动，例如普通分红。自愿类公司行动是指客户需要采取一定的操作才能参与的行动，例如供股、选股选息。两种类型公司行动的流程略有差异

公司行动系统架构如下：

<img src="/assets/XdySbVwKOon4p3xJJOKcNdvAncg.png" src-width="3856" src-height="2196" align="center"/>

# 二、系统设定

在 使用 IPO 模组前，首先需要进入“**渠道管理与费率管理**”作业，进行一次融资渠道初始化配置 (Whale 团队首次交付会进行一次初始配置),日后劵商若无其他新增融资渠道发生，不需要再额外操作此作业。

## 1. 渠道管理

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 业务参数配置 &gt; 新股配置 &gt; 渠道管理</p>
</div>

渠道配置主要是用来管理：劵商提供客户认购新股的融资来源 (渠道)

1. IPO 的资金来源是哪里：例如是券商自有资金，或是某银行提供融资资金；
2. 这个渠道可以进行什么类型的认购：例如只能现金认购、或只能进行 0 本金认购。

分配使用不同渠道，更方便券商后续的融资成本管理及 IPO 数据的统计。

**步骤一：查看新股列表**

点选右上角：新建，设定对应数据。

<img src="/assets/FvHJbidULohL4jxJlUycEIc8nRh.png" src-width="3770" src-height="1694" align="center"/>

<img src="/assets/PzqhbZF47oYLPExi1I6clzKXnkd.png" src-width="3788" src-height="1734" align="center"/>

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="569"/>
</colgroup>
<thead>
<tr><th><p><strong>字段</strong></p></th><th><p><strong>必填</strong></p></th><th><p><strong>填写说明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>渠道名称</p></td><td><p>是</p></td><td><p>自定义渠道名称，建议小于 10 个字符，不能有空格<br/>在配置融资池时，会根据名称选择。</p></td></tr>
<tr><td><p>支持类型</p></td><td><p>是</p></td><td><p>该渠道都支援什么样的认购类型，可多选。</p></td></tr>
<tr><td><p>是否同步至港交所</p></td><td><p>是</p></td><td><p>对应通路的订单是否需要同步到港交所。</p>
<ul>
<li>是 - 开启了 FINI 后，会透过 API 自动把该通路订单同步给港交所</li>
<li>否 - 不同步<br/>例如：透过上手/银行做的新股认购，不直接提交到港交所，则选择<strong>否</strong>；</li>
</ul></td></tr>
<tr><td><p>备注</p></td><td><p>否</p></td><td><p>自主备注，方便查看这个管道的用途、定义</p></td></tr>
</tbody>
</table>

## 2.费率管理

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 业务参数配置 &gt; 新股配置 &gt; 费率管理</p>
</div>

IPO 的费率是以**计费套餐**的方式进行配置，可多个新股复用，在配置新股认购信息时，选择一个预设好的计费套餐即可，主要包括：

<table header_column="1">
<colgroup>
<col width="100"/>
<col width="720"/>
</colgroup>
<tbody>
<tr><td><p>认购手续费</p></td><td><p>对申购的有效订单，收取的固定手续费，与申购金额无关</p></td></tr>
<tr><td><p>融资年利率</p></td><td><p>收取客户的利息 = 融资金额 * 融资年利率/365 * 计息天数</p></td></tr>
<tr><td><p>中签费用</p></td><td><p>此设置为比例，按照最终中签金额 × 对应的比例</p></td></tr>
</tbody>
</table>

在系统上线前，会根据港交所要求，系统默认设置好中签费率，券商可点选右上角：**默认中签费率**，修改或设定设定对应信息。

- 费率名称尽可能设置为容易识别的信息，如：90% 融资费率、现金费率；
- 中签费率在 0 本金认购的场景下，若不做任何收取，可在设置时，修改为 0。

<div class="callout callout-bg-3 callout-border-3">
<p>💡 中签费率为交易所收取，一般情况下不会变化，因此只需要设置默认值，在设置计费套餐时会默认引用默认值，无需每次填写。</p>
</div>

**步骤一：默认中签费率设置**

点选右上角：默认中签费率，设定对应信息，填写信息后，确认即可。

<img src="/assets/JKZlbQhZvosa5QxVoeKcS8hJnsh.png" src-width="1280" src-height="615" align="center"/>

**步骤二：默认中签费率设置**

点选右上角：新建，进行计费套餐设置，填写信息后，确认即可。

<img src="/assets/JRryb3PcLoF2q0xdpyIcIw3Xnhb.png" src-width="3288" src-height="1826" align="center"/>

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="65"/>
<col width="604"/>
</colgroup>
<thead>
<tr><th><p><strong>字段</strong></p></th><th><p><strong>必填</strong></p></th><th><p><strong>填写说明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>证监会交易征费</p></td><td><p>是</p></td><td><p>对应港交所 SFC Transaction Levy 的费用类型</p></td></tr>
<tr><td><p>联交所交易征费</p></td><td><p>是</p></td><td><p>对应港交所 Transaction Fee 的费用类型</p></td></tr>
<tr><td><p>财汇局交易征费</p></td><td><p>是</p></td><td><p>对应港交所 Transaction Levy 的费用类型</p></td></tr>
<tr><td><p>经纪人佣金</p></td><td><p>是</p></td><td><p>给经纪人的佣金（具体使用待确认）</p></td></tr>
<tr><td><p>费率名称</p></td><td><p>是</p></td><td><p>券商自定义的费率名称，再配置 IPO 费用时，选择使用，如下图：<br/><img src="/assets/NKwQb6RphoYlU3xBOBQcAe6Cnee.png" src-width="1162" src-height="472" align="center"/></p></td></tr>
<tr><td><p>计费币种</p></td><td><p>是</p></td><td><p>港股 IPO 默认以港币计费</p></td></tr>
<tr><td><p>客户融资年利率</p></td><td><p>是</p></td><td><p>为客户提供融资认购，收取客户的融资利息年利率，可以为 0</p></td></tr>
<tr><td><p>认购手续费</p></td><td><p>是</p></td><td><p>IPO 认购时，券商收取客户的认购手续费，为一次性收费，与认购金额无关，可以为 0</p></td></tr>
</tbody>
</table>

# 三、港股新股操作

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股认购 &gt; 新股认购 &gt; 港股认购 &gt; 基本信息</p>
</div>

新股认购，是券商日常管理**可认购新股**的模块，包括开启认购、认购方式及时间设置、扣款操作、中签操作等。

## 1. 认购配置

### 1.1 开启认购

若券商打算对某一个 IPO 开启客户申购，那么需要手动开启，并进行一些基础的费率、时间设置。

**步骤一：查看新股列表**

对于未开启认购的新股，点击『详情』，进行新股配置。

❤ Tips: 

当有新股公告时，系统会透过行情自动同步数据，会默认记录在『未开启认购』列表中，方便券商查看与配置。

<img src="/assets/Mw8bbxUVUoFmbkxExXFcxNyFnJc.png" src-width="3804" src-height="1832" align="center"/>

**步骤二：开启认购**

1. 点击新股列表的『详情』，则进入配置页面，进入页面后，默认为“不可认购”，如下图。
2. 单选，选择『是』，再进行保存，则开启认购，开启后默认只能现金认购。

<img src="/assets/KgeNbW8ehoiFmQxzn8VcHn6Lnrc.png" src-width="3770" src-height="1774" align="center"/>

<img src="/assets/SipAbareCoAKJSxvGP3cdQiFn9e.png" src-width="3782" src-height="1764" align="center"/>

<table>
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="589"/>
</colgroup>
<tbody>
<tr><td><p><strong>字段</strong></p></td><td><p><strong>是否必填</strong></p></td><td><p><strong>填写说明</strong></p></td></tr>
<tr><td><p>认购开始时间</p></td><td><p>Y</p></td><td><p>认购开始时间默认为交易所可认购时间，券商可自行修改</p></td></tr>
<tr><td><p>现金认购 - 结束时间</p></td><td><p>Y</p></td><td><p>现金认购结束时间，默认为交易所结束时间，券商可自行修改</p></td></tr>
<tr><td><p>费率</p></td><td><p>Y</p></td><td><p>现金费率为默认费率，券商可自行修改为任意费率套餐</p></td></tr>
<tr><td><p>渠道</p></td><td><p>Y</p></td><td><p>现金认购的渠道为默认现金渠道，券商可自行修改为其他现金渠道</p></td></tr>
</tbody>
</table>

### 1.2 融资认购设置

若券商对该新股需要开启『融资认购』，那么需要设定融资池，若不开启，则无需此设置。

**步骤一：新建融资池**

-**基础信息**

点选『融资认购』右上角：‘新建’，设定对应融资池信息，点击后弹出设置信息。

<img src="/assets/LYeKbJcnzoSqHzx3yDhcjAR4nOc.png" src-width="3776" src-height="1816" align="center"/>

填写基础数据后，若无需关注更多配置，那么点击『提交审批』即可。

<img src="/assets/CbyjbLFKTofQmOxpgu9cGvW8njz.png" src-width="3296" src-height="1802" align="center"/>

**-更多配置**

点击『更多配置』，则可进行个性化设置。

❤ Tips: 

1. 『更多配置』中的配置数据，一般为须特别控制的信息，非必填。
2. 可见用户群体：默认为全部客户，若券商有运营系统的用户分群功能，那么可以指定这个融资只给部分客户开放。
3. 上下限股数用于控制客户的可认购股数范围。

<img src="/assets/BBB4b0ZzHoLfmTxZ5QLckGKEnph.png" src-width="3288" src-height="1808" align="center"/>

**-客户分群配置**

融资池可设置多个分群规则，配合运营要求，例如：

1. A 客户群体只能最多申购 10000 股；
2. B 客户群体最多可以申购 100000 股。

<img src="/assets/F8mNbeKfboR5bUxlXBCcNX8MnD2.png" src-width="3766" src-height="1834" align="center"/>

**步骤二：融资池审批**

提交审批后，融资池为默认『待审批』状态，审批成功后，才会生效。

❤ Tips: 

融资池审批有两个审批入口：

1. 融资池列表
2. 融资池审批页面

<img src="/assets/Nwy6bBpglo7Tk9xYjoqc9Lryn8b.png" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股认购 &gt; 新股认购 &gt; 融资池审批</p>
</div>

<img src="/assets/UaWbbmjGUoZWzvxYFhOc2Ki2nUc.png" src-width="3744" src-height="1290" align="center"/>

点击『审批』按钮，查看工单详情，审批通过后，融资池生效。

<img src="/assets/WL2Gb1oMIoOyTqxqJZDchGAXnjA.png" src-width="3274" src-height="1824" align="center"/>

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="589"/>
</colgroup>
<thead>
<tr><th><p><strong>字段</strong></p></th><th><p><strong>是否必填</strong></p></th><th><p><strong>填写说明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>融资总金额</p></td><td><p>是</p></td><td><blockquote>
<p>用于限制所有客户可使用融资的最大总金额<br/>例如设置融资总金额设定为 500,000 HKD，融资比例为 90%。</p>
</blockquote>
<ol>
<li>客户 A 使用了 200,000 HKD 融资</li>
<li>客户 B 使用了 210,000 HKD 融资<br/>那么此时融资池只剩下 90,000 HKD 额度，客户使用 90% 的融资进行申购，最多只能申购 90,000 /90% =100,000 HKD 的金额，申购完毕后，融资池已用额度 500,000 HKD，其他客户将不可用再使用该融资申购，除非券商将融资额度调高。</li>
</ol></td></tr>
<tr><td><p>渠道</p></td><td><p>是</p></td><td><p>可选择任意支持『融资』类型的渠道，建议券商根据实际情况进行选择</p></td></tr>
<tr><td><p>融资比例</p></td><td><p>是</p></td><td><blockquote>
<p>代表提供给客户的融资比例<br/>例如融资比例为 90%，那么客户 IPO 认购金额为 20,000 HKD 时，会用到 18,000 HKD 的 IPO 融资。</p>
</blockquote>
<ol>
<li>支持融资比例选择</li>
<li>可自定义融资比例，设置好系统自动提醒杠杆倍数<img src="/assets/RJQtb4jl4o4DGlxoXYecnydBnGh.png" src-width="1156" src-height="200"/></li>
</ol></td></tr>
<tr><td><p>费率</p></td><td><p>是</p></td><td><blockquote>
<p>代表客户选择此方式认购时，所匹配的费率套餐<br/>所选费率只能为<a href="https://longbridge.feishu.cn/wiki/NCxvwUuDfiJJ66kgmcrcCUVunYg">费率管理</a>预设好的费率</p>
</blockquote></td></tr>
<tr><td><p>认购时间</p></td><td><p>是</p></td><td><blockquote>
<p>代表此认购方式的可认购时间<br/>券商可以灵活使用这个时间，做好 IPO 运营管理，例如可以配置为：</p>
</blockquote>
<ol>
<li>1 月 3 日支持 20 倍打新（2024-01-03 00:00:00  ～  2024-01-04 00:00:00）</li>
<li>1 月 4 日支持 10 倍打新（2024-01-04 00:00:00  ～  2024-01-05 00:00:00）</li>
</ol></td></tr>
<tr><td><p>预警金额</p></td><td><p>否</p></td><td><blockquote>
<p>当融资池剩余金额小于设定值后，会有相关的预警通知，CS 会对券商做好友好提醒<br/>例如设置融资总金额设定为 500,000 HKD，若预警金额设置为 100,000 HKD，那么当融资池剩余额度低于设定值时，系统会进行相关通知</p>
</blockquote></td></tr>
<tr><td><p>最低本金要求</p></td><td><p>否</p></td><td><blockquote>
<p>一般情况下不设定，代表客户使用此融资方式认购时，需要至少付出的本金<br/>例如：认购 A 股票 1 手为 5,000 HKD，融资池给的融资额度为 90%，若不设定此值时，客户认购 1 手，只需要付出 500 HKD 本金，但当次值设置为 1,000 HKD 时，说明客户至少要付出 1,000 HKD 本金。当客户申购 3 手时，需要付出 1,500 HKD 本金，此时已经 &gt; 1,000 HKD，才能使用满 90% 融资。</p>
</blockquote></td></tr>
<tr><td><p>渠道融资比例</p></td><td><p>否</p></td><td><blockquote>
<p>仅作为记录使用，代表上手或银行提供了多少融资比例。<br/>例如上手只给了 80% 的融资比例，但券商想给客户提供 90% 融资，那么可设置为：</p>
</blockquote>
<ol>
<li>融资比例 = 90%</li>
<li>渠道融资比例 = 80%<br/>系统在统计时，能更方便的计算出券商自己垫付了 10% 的融资</li>
</ol></td></tr>
<tr><td><p>可见客户群体<br/>-客户分群</p></td><td><p>是</p></td><td><p>系统默认对全部客户开放，若券商有『Whale - 运营系统』，才会有用户分群功能<br/>不在对应分群内的客户，则在 IPO 申购时，看不到此认购方式</p></td></tr>
<tr><td><p>可见客户群体<br/>-上限股数</p></td><td><p>是</p></td><td><p>系统默认填充，交易所允许的最大申购股数，券商可根据运营需要做相关修改</p></td></tr>
<tr><td><p>可见客户群体<br/>-下限股数</p></td><td><p>是</p></td><td><p>系统默认填充，交易所的 1 手股数，券商可根据运营需要做相关修改</p></td></tr>
</tbody>
</table>

### 1.3 0 本金认购设置

若券商对该新股需要开启『0 本金认购』，那么需要设定 0 本金认购的融资池，若不开启，则无需此设置。

0 本金认购为一种比较特殊的认购方式，提供给客户的融资比例只能为 100%，即客户不需要任何本金，就可以认购 IPO。

**步骤一：新建融资池**

-**基础信息**

点选『0 本金认购』右上角：‘新建’，设定对应融资池信息，点击后弹出设置信息。

<img src="/assets/LtDibY9oHoaHsoxjjAxcqFE9nfb.png" src-width="3056" src-height="1840" align="center"/>

填写基础数据后，若无需关注更多配置，那么点击『提交审批』即可。

❤ Tips: 

此处设置，与融资认购设置相似，只是**不需要填选融资比例**，固定为 100%，更详细操作参考

[融资认购设置](./CfQ1wR31ViDOdJkaiB0cs1ipnJf)。

<img src="/assets/XYbjbfFfKo0lqHxfZ6ic5c86nxg.png" src-width="3258" src-height="1814" align="center"/>

### 1.4 融资池信息修改

**上下架**

1. 若当前融资池为『上架』状态，希望这个融资池立刻失效，不对客户展示时，可手动操作 **下架**
2. 若目前融资池为『下架』状态，希望把这个融资池重新开放给客户，可手动操作 **上架**

<img src="/assets/OxXIbQ5VKoivLExKOfFcTAdJnUh.png" src-width="2064" src-height="480" align="center"/>

**融资池修改**

若融资池已生效，但券商希望调整**融资总金额、融资池可用时间**等信息，那么可以点击『编辑』进行融资池相关数据修改，仅下图部分信息可修改，修改后需要正常提交审批，审批后才生效。

<img src="/assets/NBstbkNCXoVzmyx2P27c4pDhnqb.png" src-width="3232" src-height="1822" align="center"/>

**融资池修改记录**

融资池修改提交审批后，会展示出历史修改记录，点击『审批』，在工单系统审批后，则修改结果生效。

例如：融资总金额，从 500,000 HKD 修改为 800,000 HKD

<img src="/assets/EM9FbFQy9ojCDzxwsp9c84Pnnzc.png" src-width="2072" src-height="834" align="center"/>

<img src="/assets/O6RobUhGcoQMkZxmpmic2RkMnrd.png" src-width="2058" src-height="824" align="center"/>

## 2. 扣款操作

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股认购 &gt; 新股认购 &gt; 港股认购</p>
</div>

当 IPO 认购截止后，券商需要把确认好的 IPO 订单资料交给港交所或其他上手，此时对客户的有效认购订单进行扣款认购金额及认购手续费的操作，并发放一定的融资金额。

扣款操作有两个入口：

1. 认购处理中列表页面：会根据订单状态，动态展示快捷操作入口
2. IPO 详情，认购记录页面：会根据订单状态，动态展示快捷操作入口

<img src="/assets/NNYrbcKjMoFgt2xMyidcQaqonAb.png" src-width="3280" src-height="860" align="center"/>

<img src="/assets/AZiybrTquoemTMxIECOcuttJnAe.png" src-width="3286" src-height="1574" align="center"/>

**步骤一：点击扣款，确认订单范围**

点击扣款后，会展示待扣款的订单范围，确认并选择订单范围，再进行下一步操作。

<img src="/assets/VX3Jbw2OPoHqMpx8j1tcl59Zncf.png" src-width="3304" src-height="1820" align="center"/>

**步骤二：核对扣款订单明细**

系统会自动根据认购订单、费用、融资比例等计算出预览数据，如下图，操作人员需要核对相关的数据，并提交审核。

<img src="/assets/XfQQbZFSuozCiPxYayycElqenPf.png" src-width="3298" src-height="1836" align="center"/>

**步骤三：扣款审批**

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股认购 &gt; 新股认购 &gt; 扣款审批</p>
</div>

扣款审批有两个入口：

1. 专门的扣款审批页面：可查看历史的扣款申请、审批记录。
2. 工单记录：有审批权限的人，直接可在**待办工单**中操作审批。

点击『审批』，则可查看工单，审批通过即可

<img src="/assets/Tl4vbt738otXQWx2JGNcpD9Onsg.png" src-width="3294" src-height="976" align="center"/>

<img src="/assets/RLA3bqC4XobDWAxYJUfcYNPVnkc.png" src-width="3302" src-height="1844" align="center"/>

## 3. 文件导出

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股认购 &gt; 新股认购 &gt; 港股认购 &gt; 文件生成</p>
</div>

对于已经确认扣款成功的 IPO 认购订单，券商需要把订单提交给上手或港交所，一般来讲，通过港交所做的 IPO 为 CCASS 文件，通过其他上手做的 IPO 一般需要线下 Excel 或 CSV 进行文件传输。

若券商已配置采用新的** FINI 平台**，Whale 系统将直接以 API 的方式将**IPO 订单直接同步给港交所**，则无需此操作。

**步骤一：选择订单类型**

根据渠道或融资比例，选择指定的订单类型，点击『生成文件』按钮。

这里建议相同上手的数据，生成同一份文件。

例如：

1. 融资是通过某一银行做的，不直接通过港交所，那么单独选择，生成 CSV 文件。
2. 现金、0 成本打新是通过港交所做的，那么一起选择，生成 CCASS 文件。

<img src="/assets/XLWdbjmgPonHb7xCaEHcabdrnsh.png" src-width="3288" src-height="1318" align="center"/>

**步骤二：生成指定文件**

弹出侧拉弹窗后，选择**文件格式**，并自定义**文件名**，点击『生成并下载』即可。

<img src="/assets/ANc3b87EcoEli6xvcjDc9SLHnae.png" src-width="3302" src-height="1844" align="center"/>

## 4. 公布中签

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股认购 &gt; 新股认购 &gt; 港股认购</p>
</div>

一般在上市前一个交易日，会完成中签结果公布，系统需要对客户完成中签结果操作，中签股票需要在当日到帐。

中签操作有两个入口：

1. 认购处理中列表页面：会根据订单状态，动态展示快捷操作入口
2. IPO 详情，认购记录页面：会根据订单状态，动态展示快捷操作入口

<img src="/assets/IoRabHesloW0TRxLGyKclrZZngG.png" src-width="3282" src-height="720" align="center"/>

<img src="/assets/SsJlb6ce2oNpPVxbFF1czbBznlh.png" src-width="3284" src-height="1590" align="center"/>

**步骤一：点击公布中签，核对数据**

点击公布中签后，首先需要券商确认好以下数据，若信息无误，则直接点击『下一步』即可。

1. IPO 价格：一般情况系统会自动获取，券商二次确认即可，若 IPO 价格系统自动获取是异常的，操作人也可以人工填写
2. 客户的计息天数：默认计息天数为中签日 - 认购截止日的差值（与港交所时间一致），操作者亦可自行修改。

<img src="/assets/GLuvb0jA7o6eGOxlB9BcilxbnuE.png" src-width="3306" src-height="1820" align="center"/>

**步骤二：选择中签方式**

IPO 系统提供多种中签方式，券商可根据实际情况选择不同的中签方式。

<table header_row="1">
<colgroup>
<col width="189"/>
<col width="522"/>
</colgroup>
<thead>
<tr><th><p><strong>中签方式</strong></p></th><th><p><strong>中签方式说明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>港交所 CCASS 中签结果</p></td><td><p><strong>通过港交所做的 IPO</strong><br/>CCASS 的中签结果，下载下来，直接上传 CCASS 结果即可。</p></td></tr>
<tr><td><p>自定义 CSV 文件</p></td><td><p><strong>不是通过港交所做的 IPO，而是通过银行或其他上手做的</strong><br/>一般情况上手把中签结果给一份 CSV 或 Excel 文件，需要操作人把对应结果文件转化为系统可识别的字段，再进行上传。</p></td></tr>
<tr><td><p>FINI 中签结果</p></td><td><p><strong>通过港交所做的 IPO</strong><br/>FINI 平台的中签结果，下载下来，直接上传即可。</p></td></tr>
<tr><td><p>自动获取上手中签结果</p></td><td><p><strong>以长桥香港为上手做的 IPO，可以系统化自动获取</strong><br/>选择后，直接点击『下一步』，那么系统将自动拉取结果。</p></td></tr>
<tr><td><p>自动获取 FINI 中签结果</p></td><td><p><strong>通过港交所 FINI - API 自动做的 IPO 订单</strong><br/>选择后，直接点击『下一步』，那么系统将自动拉取结果。</p></td></tr>
</tbody>
</table>

**-上传自定义 CSV 文件**

1. 下载示例模板，模板如下：
    1. Order：代表 IPO 系统的订单号
    2. APPLY：代表该订单客户申请了多少股
    3. SUCCESS：代表客户中签了多少股

<img src="/assets/UWaAbZB8dobUTXxPxUOcnlltnFb.png" src-width="1004" src-height="258" align="center"/>

1. 填写中签数据，并上传文件

<img src="/assets/Cr1bbAU3yoJecFxEqxicq37SnWE.png" src-width="3286" src-height="1822" align="center"/>

**步骤三：核对中签结果**

系统会根据操作人所选的中签方式及中签文件，自动解析中签结果，生成汇总及明细数据。

汇总数据：用于跟上手核对总数量、总中签数量，便于快捷发现中签数量问题。

明细数据：用于预览中签数据及扣费数据。

若数据无误，点击『确定』，则提交审核。

<img src="/assets/DS5PbGOs5oEbNpx3ICgcrWc4nRd.png" src-width="3294" src-height="1832" align="center"/>

**步骤四：中签结果审核**

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股认购 &gt; 新股认购 &gt; 中签审批</p>
</div>

中签审批有两个入口：

1. 专门的中签审批页面：可查看历史的中签申请、审批记录。
2. 工单记录：有审批权限的人，直接可在**待办工单**中操作审批。

点击『审批』，则可查看工单，审批通过即可。

<img src="/assets/QSVSbMtURouqhtxfdm7cw2H8nXc.png" src-width="3272" src-height="954" align="center"/>

<img src="/assets/XXRYbxHYNowZ4txUNvqcH2Xhn0b.png" src-width="3286" src-height="1820" align="center"/>

# 四、常见问题

## 渠道管理问题

### 问：为什么要分不同渠道？

答：分不同渠道更容易进行 IPO 认购订单的融资管理及统计，例如，分别设置如下渠道：

1. 自有资金渠道
2. A 上手融资渠道
3. B 上手融资渠道

在订单的汇总中，通过不同渠道汇总认购金额，融资使用情况，更便于系统自动化统计不同渠道的订单、融资情况，如下图：

<img src="/assets/PGMVbelNVoGfUzxgbgtcixLRnHe.png" src-width="3612" src-height="592" align="center"/>

### 问：渠道配置有什么建议？

建议不同的资金来源、不同的认购方式，设置为不同的渠道进行配置。

## 费率配置问题

### 问：如何给不同股票配置不同费率？

答：在 IPO 开启认购时，可灵活选择不同的费率套餐，在费率配置时，多配置几个不同费率，在 IPO 认购方式配置时，制定不同的费率即可。

### 问：是否支持阶梯收费？

答：目前系统暂不支持按照不同的认购股数进行阶梯收费，如有需求，可咨询对应 PM 或 CS 提出需求。

## 融资池配置问题

### 问：限制客户融资认购数量范围，如何操作？

答：在设置融资池时，点击『更多配置』，调整**上下限股数**即可。

### 问：限制融资池的可用时间范围，如何操作？

答：在设置融资池时，设置好融资池**的开始时间、结束时间**即可。

### 问：0 本金认购只想开放给部分客户，如何操作？

答：首先需要券商有运营系统，同时在运营系统内设定好用户分群，在设置融资池时候，点击『更多配置』，可见用户群体选择**部分客户**即可，同时选择对应用户分群。

## 扣款问题

### 问：什么时候操作扣款

答：扣款操作一般发生在 IPO 认购截止后的时间，扣款后，相当于订单已确认，订单不可以撤销

### 问：是否可以分批扣款

答：可以。

例如融资认购先截止，那么可以截止后，只选择融资认购的订单进行扣款。待现金认购截止后，再选择现金认购的订单进行扣款即可。

## 中签问题

### 问：不通过港交所做的 IPO 如何公布中签

答：待上手把中签结果返回后，需要先把中签结果，转化为 Whale 系统自定义中签的格式，导入系统操作即可，详情请参考：[公布中签操作](./CfQ1wR31ViDOdJkaiB0cs1ipnJf)

### 问：对接了 FINI 平台的 API，如何操作中签

答：若券商对接了 FINI - API 做自动化 IPO，那么直接在中签时，选择：**自动获取 FINI 中签结果**

再点击下一步则可以预览中签结果，无需上传文件

