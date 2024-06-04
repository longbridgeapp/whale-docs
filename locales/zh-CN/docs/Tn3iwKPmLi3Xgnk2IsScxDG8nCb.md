---
title: 快速上手
slug: Tn3iwKPmLi3Xgnk2IsScxDG8nCb
sidebar_position: 0
---


# 快速上手

## 前置条件

您需要获取以下授权后方可正常使用活动系统

<table header_row="1">
<colgroup>
<col width="293"/>
<col width="392"/>
</colgroup>
<thead>
<tr><th><p><b>权限名称</b></p></th><th><p><b>权限说明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>ActivityCenterFull<br/>管理活动、邀请关系配置的权限</p></td><td><p>增删改查标准活动，非标准活动，邀请关系</p></td></tr>
</tbody>
</table>

## 活动达标任务类型及说明

<table>
<colgroup>
<col width="100"/>
<col width="352"/>
<col width="260"/>
</colgroup>
<tbody>
<tr><td><p><b>任务类型</b></p></td><td><p><b>任务说明</b></p></td><td><p><b>计算公式</b></p></td></tr>
<tr><td><p>注册</p></td><td><p>完成注册动作</p></td><td></td></tr>
<tr><td><p>下载</p></td><td><p>完成注册并且下载登录 App 端内（会判断是否新设备登录，若不是新设备登录 App 则会判定为不符合要求）</p></td><td></td></tr>
<tr><td><p>开户</p></td><td><p>完成开户动作且开户审批通过，开户成功</p></td><td></td></tr>
<tr><td><p>净转入</p></td><td rowspan="3"><p>活动期间内，账户内资金是否达到设定阈值</p></td><td><p>入金 + 转入 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净入金</p></td><td><p>入金 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净转仓</p></td><td><p>转入+min（0，净入金金额）的累计金额</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/转仓金额达到设定阈值</p></td><td><p>首次入金总金额</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次转仓总金额</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>完成设置的指定企业认证，或者只完成企业认证动作</p></td><td></td></tr>
</tbody>
</table>

## 标准活动管理

### 如何创建一个邀请活动？

适用场景：老客户邀请新客户活动，双方获得奖励，提升分享邀请转化率

#### 操作说明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜单入口：运营系统＞活动系统＞标准活动管理</p>
</div>

点击邀请活动模块下的新建按钮

<img src="/assets/P394bdohJonAcRx8qL8cVynOngf.png" src-width="1280" src-height="282" align="center"/>

邀请活动新建页面如下

<img src="/assets/XX7xbxRF6oAMWcx0ZKRcNpzNnsb.png" src-width="1280" src-height="1178" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>填写的名称将最终展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>活动时间</p></td><td><p>活动有效时间，即用户必须在活动时间内完成对应任务才可获得奖励</p></td></tr>
<tr><td><p>目标用户</p></td><td><p>关联对应的用户分群，设置目标用户后则仅该用户范围内的用户才可参与活动。</p></td></tr>
<tr><td><p>分群延时时间</p></td><td><p>创建活动时支持选择用户分群，限定用户参与活动。对于分群，我们提供两种延时时间：</p>
<ul>
<li>五分钟：即每五分钟重跑一次分群，一般对于只是开户注册活动任务的活动设置 5 分钟延时即可</li>
<li>一天：即每一天重跑一次分群，对于有入资、转仓等用户任务列表的活动，设置一天延时</li>
</ul></td></tr>
<tr><td><p>活动属性</p></td><td><ul>
<li>常规活动：活动数据为累计相加的数据，计入最终给用户的邀请获得奖励总数据中展示。同一时间段内一个用户只可参加一个常规活动，获得一个活动奖品</li>
<li>营销活动：不限制用户参与次数且不计入用户基础邀请活动所得奖励总数中，比如：用户助力活动等等短期邀请活动</li>
</ul></td></tr>
<tr><td><p>奖励类型</p></td><td><p>选择发奖规则类型</p>
<ul>
<li>固定奖励：邀请一个新用户完成任务即获得奖励</li>
<li>阶梯奖励：邀请多人完成任务解锁不同阶梯奖励并进行叠加，依数量递增</li>
</ul></td></tr>
<tr><td><p>奖励规则</p></td><td><p>配置活动任务规则与对应的奖励</p></td></tr>
<tr><td><p>奖品设置</p></td><td><p>配置在当前活动中单一用户可获得同一奖励的个数上限</p></td></tr>
<tr><td><p>备注</p></td><td><p>非必填，用作运营人员个人备忘，不会展示给用户</p></td></tr>
</tbody>
</table>

<b>奖励规则</b>

点击新增奖励规则，不同奖励类型下奖励规则需填写的字段不同：

- 固定奖励

<img src="/assets/Nq3rbDizBoD2YexjzCCcaT1xnCc.png" src-width="2274" src-height="1742" align="center"/>

- 阶梯奖励

<img src="/assets/CEA9b127yoXfrnxY6JXc6ruzndN.png" src-width="2340" src-height="1752" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>填写完成后不可随意切换活动类型和奖励类型，不然会导致列表清空</p>
</div>

<b>奖品设置</b>

点击新建奖品设置，该区域出现配置项

可在此处限定奖励规则中添加的奖品，每位用户最多可获得多少次

<img src="/assets/NNttbSpVvom26qxaMDzcRKCinI0.png" src-width="1280" src-height="242" align="center"/>

提交后，邀请活动即可创建完毕

### 如何创建一个基础活动？

适用场景：通过开户入金活动，提升关键节点转化率，实现获客、入金、交易等增长目标

#### 操作说明

### 如何创建一个组队活动？

适用场景：促进老客户分享，达到裂变效果

#### 操作说明

## 非标准活动管理

### 如何创建一个非标准活动？

#### 操作说明

## 邀请关系管理

### 如何新增邀请关系？

#### 操作说明

# 
### 
活动管理列表字段说明

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>序号</p></td><td><p>填写的名称将最终展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>活动代码</p></td><td><p>活动有效时间，即用户必须在活动时间内完成对应任务才可获得奖励</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>关联对应的用户分群，设置目标用户后则仅该用户范围内的用户才可参与活动。</p></td></tr>
<tr><td><p>延时时间</p></td><td><p>活动发奖任务时效时间。由于活动任务需要用户分群给出准确数据，因此会有些许延时。</p>
<ul>
<li>五分钟：一般对于只是开户注册活动任务的活动设置 5 分钟延时即可</li>
<li>一天：对于有入资、转仓等用户任务列表的活动，设置一天延时</li>
</ul></td></tr>
<tr><td><p>活动类型</p></td><td><p>按照不同类型进行选择</p>
<ul>
<li>常规活动：活动数据为累计相加的数据，计入最终给用户的邀请获得奖励总数据中展示。同一时间段内一个用户只可参加一个常规活动，获得一个活动奖品</li>
<li>营销活动：不限制用户参与次数且不计入用户基础邀请活动所得奖励总数中，比如：用户助力活动等等短期邀请活动</li>
</ul></td></tr>
<tr><td><p>属性</p></td><td><ul>
<li>新用户：新用户活动（仅基础活动）</li>
<li>老用户：老用户活动（仅基础活动）</li>
<li>固定奖励：邀请一个新用户完成任务即获得奖励（仅邀请活动）</li>
<li>阶梯奖励：邀请多人完成任务解锁不同阶梯奖励并进行叠加，依数量递增（仅邀请活动）</li>
</ul></td></tr>
<tr><td><p>活动状态</p></td><td><p>当前活动状态：</p>
<ul>
<li>草稿（已创建活动但还未点击发布之前）：编辑、删除、发布</li>
<li>未开始（发布后活动还未开始）：编辑、关闭</li>
<li>运行中（已过活动开始时间未到结束时间）：编辑、关闭</li>
<li>已结束（已过活动结束时间）：查看</li>
</ul></td></tr>
<tr><td><p>活动时间</p></td><td><p>显示开始时间 - 结束时间；</p></td></tr>
<tr><td><p>创建时间</p></td><td><p>活动创建时间</p></td></tr>
</tbody>
</table>

### 
活动奖励数据查询（只有当活动运行中进行发奖时才有数据显示）

点击对应活动后方详情按钮，进入活动详情页面，点击“获奖数据”tab，进入以下页面

<img src="/assets/SK9Kbr7z1o4fDgxj2ovcfA85npc.png" src-width="3278" src-height="1208" align="center"/>

数据统计

待提交：未提交进行发放的奖励记录

发放中：发放中的奖励记录

已发放：已发放成功的奖励记录

失败：发放失败的奖励记录数

取消发放：点击取消的奖励记录数

全部：所有该活动奖励记录数

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>编号</p></td><td><p>奖励记录编号</p></td></tr>
<tr><td><p>用户编号</p></td><td><p>具体发放给的用户编号</p></td></tr>
<tr><td><p>邀请人/被邀请人编号</p></td><td><p>该奖励用户编号所对应的邀请或者被邀请人的用户编号</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>用户所对应认证了企业的企业名称（若有）</p></td></tr>
<tr><td><p>达标任务</p></td><td><p>用户获得该奖励所完成的任务名称</p></td></tr>
<tr><td><p>达标时间</p></td><td><p>用户任务完成时间（基本奖励发放时间）</p></td></tr>
<tr><td><p>奖品名称</p></td><td><p>所获得的奖励的名称</p></td></tr>
<tr><td><p>发放形式</p></td><td><p>自动、手动</p></td></tr>
<tr><td><p>发放状态</p></td><td><p>待提交、发放中、已发放、失败、取消发放</p></td></tr>
<tr><td><p>发放时间</p></td><td><p>奖励发放到用户账上的时间</p></td></tr>
<tr><td><p>发放账户</p></td><td><p>发放到用户的具体账户</p></td></tr>
<tr><td><p>操作</p></td><td><p>只有当前活动的创建人本人可操作<br/>提交：提交奖励进行发奖（当奖励为手动发放时才有）<br/>取消：取消奖励发放，奖励记录将不会提交发奖且奖励状态变更为取消发奖</p></td></tr>
</tbody>
</table>

### 基础活动

运营系统＞活动系统＞标准活动

点击邀请活动模块下的新建按钮

<img src="/assets/H3SGbXj1zooDQmxm9MScTZmZnsd.png" src-width="3140" src-height="448" align="center"/>

打开如下页面

<img src="/assets/P8D3bnpDroaZRixLuwncmASDnhc.png" src-width="2208" src-height="1826" align="center"/>

活动模版字段按如下规则进行配置：

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>填写的名称将最终展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>活动时间</p></td><td><p>活动有效时间，即用户必须在活动时间内完成对应任务才可获得奖励</p></td></tr>
<tr><td><p>目标用户</p></td><td><p>关联对应的用户分群，设置目标用户后则仅该用户范围内的用户才可参与活动。</p></td></tr>
<tr><td><p>分群延时时间</p></td><td><p>活动发奖任务时效时间。由于活动任务需要用户分群给出准确数据，因此会有些许延时。</p>
<ul>
<li>五分钟：一般对于只是开户注册活动任务的活动设置 5 分钟延时即可</li>
<li>一天：对于有入资、转仓等用户任务列表的活动，设置一天延时</li>
</ul></td></tr>
<tr><td><p>活动属性</p></td><td><p>按照不同类型进行选择</p>
<ul>
<li>不限制：不限制新老用户均可参与</li>
<li>新用户：历史上从未获得过新用户奖励的人才能参与活动奖品</li>
<li>老用户：只有已获得过新用户奖励的人才能参与获得奖品</li>
</ul></td></tr>
<tr><td><p>奖励规则</p></td><td><p>配置活动任务规则与对应的奖励</p></td></tr>
</tbody>
</table>

新建奖励规则

<img src="/assets/TQpObphsto4uAMxybagcuEJgnFc.png" src-width="1350" src-height="1722"/>

不同奖励生成时间则奖励的计算逻辑会有部分差别

<table>
<colgroup>
<col width="117"/>
<col width="265"/>
<col width="240"/>
</colgroup>
<tbody>
<tr><td><p>达标任务类型</p></td><td><p>实时生成</p></td><td><p>结束统一生成</p></td></tr>
<tr><td><p>注册</p></td><td><p>完成注册时生成奖励发放请求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>开户</p></td><td><p>完成开户任务时生成奖励发放请求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>净转入</p></td><td><p>每天跑脚本计算前一天数据是否达标，并生成奖励发放请求，当存在不同档位金转入时，达到一档则生成一笔奖励记录，多档时会依据不同档生成多档奖励，奖励叠加发放</p></td><td><p>活动结束 T+1 日后按照活动时间内用户发生的所有净转入动作总和，判断处于哪一档净转入奖励，生成一笔最高对应档位的奖励</p></td></tr>
<tr><td><p>净入金</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>净转仓</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>首次入金</p></td><td><p>判断活动期间内第一步整数当天累计是否达标，达标则生成奖励记录</p></td><td><p>判断活动期间内第一步整数当天累计是否达标，达标则活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
</tbody>
</table>

奖励记录查看

<img src="/assets/LoXtbTaLco81iQxo1lWcM2UPnSc.png" src-width="3258" src-height="1242" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>编号</p></td><td><p>奖励记录编号</p></td></tr>
<tr><td><p>用户编号</p></td><td><p>具体发放给的用户编号</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>用户所对应认证了企业的企业名称（若有）</p></td></tr>
<tr><td><p>达标任务</p></td><td><p>用户获得该奖励所完成的任务名称</p></td></tr>
<tr><td><p>达标时间</p></td><td><p>用户任务完成时间（基本奖励发放时间）</p></td></tr>
<tr><td><p>奖品名称</p></td><td><p>所获得的奖励的名称</p></td></tr>
<tr><td><p>发放形式</p></td><td><p>自动、手动</p></td></tr>
<tr><td><p>发放状态</p></td><td><p>待提交、发放中、已发放、失败、取消发放</p></td></tr>
<tr><td><p>发放时间</p></td><td><p>奖励发放到用户账上的时间</p></td></tr>
<tr><td><p>发放账户</p></td><td><p>发放到用户的具体账户</p></td></tr>
<tr><td><p>是否锁仓</p></td><td><p>是否需要满足锁仓需求</p></td></tr>
<tr><td><p>锁仓金额</p></td><td><p>获得该奖励后需要锁仓的金额</p></td></tr>
<tr><td><p>锁仓时间</p></td><td><p>奖励到账时间 + 锁仓期限=锁仓时间：获得该奖励后需要</p></td></tr>
<tr><td><p>操作</p></td><td><p>只有当前活动的创建人本人可操作<br/>提交：提交奖励进行发奖（当奖励为手动发放时才有）<br/>取消：取消奖励发放，奖励记录将不会提交发奖且奖励状态变更为取消发奖</p></td></tr>
</tbody>
</table>

### 
# 
