---
title: 基础活动
slug: OFh3wZ5lpiFi1Qk8KDvc1VvInzf
sidebar_position: 1
---


# 基础活动

## 适用场景

想要创建用户本人完成任务后进行发奖的活动，可选择这个活动模版进行创建。

## 前置条件

劵商租户采购了 OPA 营销系统旗舰版本，同时购买了 whale 标准化解决方案的券商才提供此项服务。

## 操作说明

菜单入口：运营系统＞活动系统＞标准活动

点击邀请活动模块下的新建按钮

<img src="/assets/X9DAbOVaXoVUXTxtsYxccvxHnqf.png" src-width="3218" src-height="438" align="center"/>

打开如下页面：

<img src="/assets/QewybY9SMoLtWbx192Fc04sonqe.png" src-width="2486" src-height="1626" align="center"/>

活动模版字段按如下规则进行配置：

<table header_column="1" header_row="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<thead>
<tr>
<th><p>字段名称</p></th><th><p>配置说明</p></th></tr>
</thead>
<tbody>
<tr>
<td><p>活动名称</p></td><td><p>填写的名称将最终展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr>
<td><p>活动时间</p></td><td><p>活动有效时间，即用户必须在活动时间内完成对应任务才可获得奖励</p></td></tr>
<tr>
<td><p>目标用户</p></td><td><p>关联对应的用户分群，设置目标用户后则仅该用户范围内的用户才可参与活动。</p></td></tr>
<tr>
<td><p>分群延时时间</p></td><td><p>活动发奖任务时效时间。由于活动任务需要用户分群给出准确数据，因此会有些许延时。</p>
<ul>
<li>五分钟：一般对于只是开户注册活动任务的活动设置 5 分钟延时即可</li>
<li>一天：对于有入资、转仓等用户任务列表的活动，设置一天延时</li>
</ul></td></tr>
<tr>
<td><p>活动属性</p></td><td><p>按照不同类型进行选择</p>
<ul>
<li>不限制：不限制新老用户均可参与</li>
<li>新用户：历史上从未获得过新用户奖励的人才能参与活动奖品</li>
<li>老用户：只有已获得过新用户奖励的人才能参与获得奖品</li>
</ul></td></tr>
<tr>
<td><p>奖励规则</p></td><td><p>配置活动任务规则与对应的奖励</p></td></tr>
</tbody>
</table>

新建奖励规则：

<img src="/assets/QCqWbC8iloJQXExLuN1c2xGunFe.png" src-width="2382" src-height="1632" align="center"/>

不同奖励生成时间则奖励的计算逻辑会有部分差别

<table>
<colgroup>
<col width="117"/>
<col width="265"/>
<col width="401"/>
</colgroup>
<tbody>
<tr>
<td><p>达标任务类型</p></td><td><p>实时生成</p></td><td><p>结束统一生成</p></td></tr>
<tr>
<td><p>注册</p></td><td><p>完成注册时生成奖励发放请求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr>
<td><p>开户</p></td><td><p>完成开户任务时生成奖励发放请求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr>
<td><p>净转入</p></td><td><p>每天跑脚本计算前一天数据是否达标，并生成奖励发放请求，当存在不同档位金转入时，达到一档则生成一笔奖励记录，多档时会依据不同档生成多档奖励，奖励叠加发放</p></td><td><p>活动结束 T+1 日后按照活动时间内用户发生的所有净转入动作总和，判断处于哪一档净转入奖励，生成一笔最高对应档位的奖励</p></td></tr>
<tr>
<td><p>净入金</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr>
<td><p>净转仓</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr>
<td><p>首次入金</p></td><td><p>判断活动期间内第一步整数当天累计是否达标，达标则生成奖励记录</p></td><td><p>判断活动期间内第一步整数当天累计是否达标，达标则活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr>
<td><p>首次转仓</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
</tbody>
</table>

奖励记录查看

<img src="/assets/Y9uTbmh2coLljgxj4KacMi6vnRC.png" src-width="3258" src-height="1242" align="center"/>

<table header_column="1" header_row="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<thead>
<tr>
<th><p>列表字段</p></th><th><p>字段说明</p></th></tr>
</thead>
<tbody>
<tr>
<td><p>编号</p></td><td><p>奖励记录编号</p></td></tr>
<tr>
<td><p>用户编号</p></td><td><p>具体发放给的用户编号</p></td></tr>
<tr>
<td><p>企业认证</p></td><td><p>用户所对应认证了企业的企业名称（若有）</p></td></tr>
<tr>
<td><p>达标任务</p></td><td><p>用户获得该奖励所完成的任务名称</p></td></tr>
<tr>
<td><p>达标时间</p></td><td><p>用户任务完成时间（基本奖励发放时间）</p></td></tr>
<tr>
<td><p>奖品名称</p></td><td><p>所获得的奖励的名称</p></td></tr>
<tr>
<td><p>发放形式</p></td><td><p>自动、手动</p></td></tr>
<tr>
<td><p>发放状态</p></td><td><p>待提交、发放中、已发放、失败、取消发放</p></td></tr>
<tr>
<td><p>发放时间</p></td><td><p>奖励发放到用户账上的时间</p></td></tr>
<tr>
<td><p>发放账户</p></td><td><p>发放到用户的具体账户</p></td></tr>
<tr>
<td><p>是否锁仓</p></td><td><p>是否需要满足锁仓需求</p></td></tr>
<tr>
<td><p>锁仓金额</p></td><td><p>获得该奖励后需要锁仓的金额</p></td></tr>
<tr>
<td><p>锁仓时间</p></td><td><p>奖励到账时间 + 锁仓期限=锁仓时间：获得该奖励后需要</p></td></tr>
<tr>
<td><p>操作</p></td><td><p>只有当前活动的创建人本人可操作<br/>提交：提交奖励进行发奖（当奖励为手动发放时才有）<br/>取消：取消奖励发放，奖励记录将不会提交发奖且奖励状态变更为取消发奖</p></td></tr>
</tbody>
</table>

