---
title: 19. 账户资产问题
slug: LOzqw88lRi9o9YkfbkqcKTHEnaf
sidebar_position: 18
---


# 19. 账户资产问题

## 19A 问：「账户详情」中「现金明细」内“待结算现金”的 Total、T0、T1、T2 和 TN 代表什么？

答：1. Total（总计）是一个实时的数，交易时段有交易而引致待交收金额的话便会作更新。

2. T0，T1 是取昨天清算文件的待交收金额，不会随著当天交易而更新。

3. 如果当天有交易的话，Total 便会更新，而 T0，T1，T2 不会更新。出现了 T0＋T1＋T2 不等于 Total 的情况，系统会显示 TN 来计算它们的差额。

4. 当天完成日终后，T0 便会消失。当天交易引致的待交收金额便会变成 T2。

<img src="/assets/X2JzbfNgioWE4Hxp97Ocp8fnnCe.png" src-width="2852" src-height="1374" align="center"/>

