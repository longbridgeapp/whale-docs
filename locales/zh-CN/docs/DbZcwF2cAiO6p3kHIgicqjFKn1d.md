---
title: 邀请活动
slug: DbZcwF2cAiO6p3kHIgicqjFKn1d
sidebar_position: 0
---


# 邀请活动

## 适用场景

想要创建邀请活动，通过好友完成任务，邀请人可得奖励的方式帮助券商完成裂变

## 前置条件

劵商租户采购了 OPA 营销系统旗舰版本，同时购买了 whale 标准化解决方案的券商才提供此项服务。

### 邀请活动

#### 邀请活动业务实现逻辑说明

任意活动页面只要配置了分享功能，则该页面通过用户分享传播后完成新用户注册，均会进行邀请关系绑定。

邀请活动通过绑定关系进行发奖。

<img src="/assets/VwwXbFQWRomkzwx3Ri3cQ1KCnsd.png" src-width="1474" src-height="494" align="center"/>

#### 邀请活动配置

菜单入口：运营系统＞活动系统＞标准活动

若要新增一个邀请活动，可以点击邀请活动模块下的新建按钮

<img src="/assets/Z3qtbfmCsoxSYdxmbePcBu8snZf.png" src-width="3222" src-height="432"/>

新建邀请如下页面：

<img src="/assets/ZfCYb3ZKioEJcSx8XdzcnYCsnsc.png" src-width="2606" src-height="1612" align="center"/>

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

<img src="/assets/NGAebX7wQoFWy9xWDWZcBeQkn9b.png" src-width="2444" src-height="1614" align="center"/>

阶梯奖励：

<img src="/assets/CaXobHvMkoaib0xlJljcB0LLnAc.png" src-width="2450" src-height="1616" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>填写完成后不可随意切换活动类型和奖励类型，不然会导致列表清空</p>
</div>

活动奖励数据查询（只有当活动运行中进行发奖时才有数据显示）

点击对应活动后方详情按钮，进入活动详情页面，点击“获奖名单”tab，进入以下页面

<img src="/assets/FTqKbWI4SoNQPJxO6OGcNRDznff.png" src-width="3248" src-height="1156" align="center"/>

数据统计状态：

- 待提交：未提交进行发放的奖励记录
- 发放中：发放中的奖励记录
- 已发放：已发放成功的奖励记录
- 失败：发放失败的奖励记录数
- 取消发放：点击取消的奖励记录数
- 全部：所有该活动奖励记录数

