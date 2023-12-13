---
title: 压力测试
slug: yaliceshi
sidebar_position: 6
---


# 压力测试

## 适用场景

基于 SFC 保证金指引的压力测试与股票、客户相关的监控。

## 前置条件

无

## 操作说明

菜单入口：风控管理  &gt; 压力测试明细​


### 压力测试明细

该菜单可以支持新设不同的条件来计算 Margin Call 预警/非速冻资金盈余，每次新设都是分配一个任务 ID，当预计完成后，可以查询任务 ID 的执行状态与计算内容详情。

新建模拟计算：系统支持股票组/股票市场/单一股票 三种模式的预计算，同时也支持是否将某种豁免规则配置在压力测试某个批次上​；按需选择模拟计算类型及计算内容后，提交即可开始模拟计算

<img src="/assets/FWgQb5QmzoYSXVxu3nscJYgunl5.png"/>

注：相关豁免规则配置 请在执行菜单：「系统设置」&gt;「风控」&gt;「风控参数」菜单内配置

当计算完毕，可以在记录右侧操作区，点选【详情】查看计算的结果

<img src="/assets/WmmXbFlkAosiAPxBRyncqYQ3n2d.png"/>

【详情】页面展示的列表数据可以用来评估模拟计算结果是否符合预期；如同时模拟计算 margin call 和非速冻资金盈余则会分开两个列表展示

<img src="/assets/JG86bmjyJoMBO4xaJeVcVazfnWd.png"/>

### 自定义数据

该菜单可以维护股票保证金比例，将保证金比例的文档批次导入。

按模版要求导入保证金比例，导入成功后则会在列表页展示

<img src="/assets/XHlxb9YQMoDGQbx4lJZcDPWrnCc.png"/>

