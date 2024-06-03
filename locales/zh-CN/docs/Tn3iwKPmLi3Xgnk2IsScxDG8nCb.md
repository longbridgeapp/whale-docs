---
title: 快速上手
slug: Tn3iwKPmLi3Xgnk2IsScxDG8nCb
sidebar_position: 0
---


# 快速上手

本使用手册适用于 Longbridge Whale-活动系统，运营系统管理员和使用成员使用。阅读此手册，你将了解 Whale-活动系统作业功能操作

# 一。活动系统

## 功能介绍

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>功能目录</p></td><td><p>目录说明</p></td></tr>
<tr><td><p>标准活动管理</p></td><td><p>具有标准活动模版，可选中对应活动模版创建活动，并进行规则配置与活动数据的管理</p>
<ul>
<li>邀请活动模版：通过用户邀请好友完成任务获得奖品（常用的裂变活动模式）</li>
<li>基础活动模版：用户本人完成对应活动获得奖品（每月新用户活动更新、老用户回馈活动。）</li>
<li>组队活动模版：多人一起参与活动，达到指定人数要求且队员都完成对应任务即可获得奖品。</li>
</ul></td></tr>
<tr><td><p>非标准活动管理</p></td><td><p>主要用于进行非标准活动参数的配置与管理</p></td></tr>
<tr><td><p>邀请关系管理</p></td><td><p>主要对于活动相关的邀请绑定关系进行管理。可对用户的邀请关系信息查询、更改、绑定</p></td></tr>
</tbody>
</table>

### 活动系统架构

<img src="/assets/YpXFbRGU5omddKxhyN2cJFXmnGd.png" src-width="806" src-height="492" align="center"/>

### 活动达标任务类型及说明

<table>
<colgroup>
<col width="100"/>
<col width="352"/>
<col width="260"/>
</colgroup>
<tbody>
<tr><td><p><strong>任务类型</strong></p></td><td><p><strong>任务说明</strong></p></td><td><p><strong>计算公式</strong></p></td></tr>
<tr><td><p>注册</p></td><td><p>完成注册动作</p></td><td></td></tr>
<tr><td><p>下载</p></td><td><p>完成注册并且下载登录 App 端内（会判断是否新设备登录，若不是新设备登录 App 则会判定为不符合要求）</p></td><td></td></tr>
<tr><td><p>开户</p></td><td><p>完成开户动作且开户审批通过，开户成功</p></td><td></td></tr>
<tr><td><p>净转入</p></td><td rowspan="3"><p>活动期间内，账户内资金是否达到设定阈值</p></td><td><p>入金 + 转入 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净入金</p></td><td><p>入金 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净转仓</p></td><td><p>转入+min(0，净入金金额) 的累计金额</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/转仓金额达到设定阈值</p></td><td><p>首次入金总金额</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次转仓总金额</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>完成设置的指定企业认证，或者只完成企业认证动作</p></td><td></td></tr>
</tbody>
</table>

### 活动配置流程

适用：运营人员，活动系统涉及到下列几个主体：

## 标准活动管理

执行菜单：运营系统&gt; 活动系统&gt;标准活动管理

- 本作业可以维护管理标准活动

上层：可选择活动模版进行创建

下层：可对已创建好的活动纪录进行查询

<img src="/assets/OuoyboGBfoNWCHxAuUNcVWSan9b.png" src-width="3766" src-height="1562" align="center"/>

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

### 邀请活动

#### 邀请活动业务实现逻辑说明

任意活动页面只要配置了分享功能，则该页面通过用户分享传播后完成新用户注册，均会进行邀请关系绑定。

邀请活动通过绑定关系进行发奖。

#### 邀请活动配置

运营系统＞活动系统＞标准活动

若要新增一个邀请活动，可以点击邀请活动模块下的新建按钮

<img src="/assets/SU8jbakBMoLydJxFmvBcjLFjnvb.png" src-width="2334" src-height="516" align="center"/>

新建邀请如下页面

<img src="/assets/IdEkb0WHsof06PxeqqjcXcy6njG.png" src-width="2376" src-height="2531" align="center"/>

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
</tbody>
</table>

点击新增奖励规则，不同奖励类型和活动属性填写字段不同

固定奖励

<img src="/assets/WY1Cb1n9lo0POZxGsr9cpWGlnwb.png" src-width="2316" src-height="1498"/>

阶梯奖励

<img src="/assets/H5jkbmoUqopoYnxLtuDcdla2nIb.png" src-width="1370" src-height="1502"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>填写完成后不可随意切换活动类型和奖励类型，不然会导致列表清空</p>
</div>

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

### 组队活动

#### 组队活动业务流程

#### 组队活动配置

运营系统＞活动系统＞标准活动

点击组队活动模块下的新建按钮

<img src="/assets/LykMbKR4so2XHNx9qy6c9b2knGh.png" src-width="3258" src-height="416" align="center"/>

打开如下页面

活动模版字段按如下规则进行配置：

<img src="/assets/M2wnb1ZFLoMnsWxtNKXcPgplnud.png" src-width="1954" src-height="1814" align="center"/>

活动数据查询同上

## 非标准活动管理

使用人员：运营

使用场景：线下活动发奖，例如：大客户回馈之类的无具体活动规则，只是为了单纯给用户发放奖励的活动

主要功能：创建/管理活动程式码

点击页面上方新建按钮，打开如下页面

## 邀请关系管理

如图：一个用户在一个 App 下会生成当前 App 唯一邀请码，用户将自己邀请码分享给好友，好友即可填写绑定。绑定后会更新在邀请关系清单中

执行菜单：运营系统&gt; 活动系统&gt;邀请关系管理

<img src="/assets/FLT9b9CzposKdIxFctQcAiMpnNb.png" src-width="2338" src-height="1328" align="center"/>

主要功能：

查询：输入客户编号可以查询对应客户的邀请绑定关系记录

新增：可以直接在后台操作给用户进行邀请关系绑定

详情：可查看绑定关系的具体用户资讯以及绑定管道、绑定时间、以及可以变更绑定关系。

（对于已完成的动作则不可绑定对应节点的邀请人了，未完成动作节点邀请人可以绑定和变更）

# 二。运营活动常见问题查询

## 用户咨询未收到奖励，运营如何查询？

执行菜单：运营系统&gt; 活动系统&gt;标准活动管理

先查活动配置是否正确，点击对应活动后方详情进入查看活动规则配置，确认配置的对应规则和奖励是否正确

<img src="/assets/OwIVbvjGnoBqs2x9snmcpEgrnqg.png" src-width="3796" src-height="1848" align="center"/>

<img src="/assets/UPWdbUzwko3dYfxSA76cO7yKn5d.png" src-width="3288" src-height="1574"/>

若正确，则正确进入获奖名单查询是否生成以及奖励记录状态

<img src="/assets/WJVRb5a35ogwZ1xoxLbcNUWenWh.png" src-width="3316" src-height="1400" align="center"/>

若 发放中则说明系统还在发放中，若待提交则需要运营同学点击提交进行发放

## 如何查询用户是否绑定成功邀请关系？

执行菜单：运营系统&gt; 活动系统&gt;邀请关系管理

<img src="/assets/Rv6XbEPheoyp8Ix0y4YcrP9UnQd.png" src-width="3778" src-height="1698" align="center"/>

如图，搜索后列表会展示所有该用户绑定的邀请关系，点击后方详情可查看具体绑定的用户信息

<img src="/assets/Fm4vbfZRnoH32hx2UkmcVyjlnDe.png" src-width="3240" src-height="1792" align="center"/>

<img src="/assets/IpzRb0NplocQaNxHOkCcomeSnXJ.png" src-width="3244" src-height="1866" align="center"/>

