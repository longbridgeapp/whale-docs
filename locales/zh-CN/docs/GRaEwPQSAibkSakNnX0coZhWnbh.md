---
title: 流水同步
slug: xxx
sidebar_position: 3
---


# 流水同步

## 适用场景

下一日才应该出现帐务提早搬运到当日（-1DAY）

当日帐务搬运到下一日帐务才出现（+1DAY）

## 前置条件

完成市场清算或数据汇总

## 操作说明

菜单入口：清算管理  &gt; 市场清算  &gt; 流水同步

本作业主要是市场清算后，若想要改变原本日终所计算的流水入帐日期，也就是进行资金/持仓的流水日期调整，新机制下通过修改前台帐户日期实现

### 单笔流水日期编辑

资产和持仓流水需要在不同页面 Tab 上操作，找到流水纪录点击编辑

<img src="/assets/JYLlbmOhRo9w1Zx74PocGwQqnzc.png"/>

输入需要处理的日期

<img src="/assets/X38Jb8ixPotJeGxFpINcN1iFnIc.png"/>

观察编辑号的帐务日期，看是否生效

<img src="/assets/RbBgbfUMWougIlxKDd5cuQcNnPc.png"/>

在日终任务中重新点击数据汇总

### 批量流水日期编辑

先选中流水纪录，然后点击批量编辑帐务日期

<img src="/assets/NTdHbtdsroblM4xKKtZcuyXWnxh.png"/>

在日终任务中重新点击数据汇总

### 通过业务码批量编辑日期

注意：批量调整日期的，需要事先确认该业务码是否支持编辑，边界后需要在页面观察最终结果

<img src="/assets/WMzhbZI9roU5mrxsu6ycdC6tnxd.png"/>

在日终任务中重新点击数据汇总

