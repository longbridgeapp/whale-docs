---
title: 市场清算
slug: U4HAwqHNUiqehVk9r8tc0mMxnhd
sidebar_position: 1
---


# 市场清算

Whale 市场清算流程步骤：将每个市场进行下列流程操作

<table header_row="1">
<colgroup>
<col width="124"/>
<col width="468"/>
<col width="153"/>
<col width="131"/>
</colgroup>
<thead>
<tr><th><p>任务</p></th><th><p>任务说明</p></th><th><p>前置处理</p></th><th><p>是否分市场执行</p></th></tr>
</thead>
<tbody>
<tr><td><p>日终数据同步</p></td><td><p>从前台拉取交易流水保存到后台<br/>包括开户、交易、出入金等<br/>每次点击分别触发任务<br/>同步数据范围为上一帐务日数据日切点 - 当日数据日切点的数据<br/>每次点击分别触发任务</p></td><td></td><td><p>分市场</p></td></tr>
<tr><td><p>清算前检查</p></td><td><p>触发 T0 交易对帐</p></td><td><p>导入对手方文件</p></td><td><p>分市场</p></td></tr>
<tr><td><p>清算计费</p></td><td><p>基于交易订单，生成合约，生成收费帐单</p></td><td></td><td></td></tr>
<tr><td><p>清算入帐</p></td><td><p>于收费帐单进行扣款<br/>合约状态由计算完成变成待交收</p></td><td><p>清算前检查</p></td><td><p>分市场</p></td></tr>
<tr><td><p>清算交收</p></td><td><p>基于合约生成仓位数据、ATI/SI 等指令<br/>生成临时的交易报表、持仓报表</p></td><td><p>持仓对帐、交易对帐</p></td><td><p>分市场</p></td></tr>
</tbody>
</table>

