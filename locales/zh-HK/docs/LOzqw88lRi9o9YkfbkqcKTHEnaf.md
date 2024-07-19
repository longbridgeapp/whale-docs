---
title: 19. 賬戶資產問題
slug: LOzqw88lRi9o9YkfbkqcKTHEnaf
sidebar_position: 18
---


# 19. 賬戶資產問題

## 19A 問：「賬戶詳情」中「現金明細」內“待結算現金”的 Total、T0、T1、T2 和 TN 代表什麼？

答：1. Total（總計）是一個實時的數，交易時段有交易而引致待交收金額的話便會作更新。

2. T0，T1 是取昨天清算文件的待交收金額，不會隨著當天交易而更新。

3. 如果當天有交易的話，Total 便會更新，而 T0，T1，T2 不會更新。出現了 T0＋T1＋T2 不等於 Total 的情況，系統會顯示 TN 來計算它們的差額。

4. 當天完成日終後，T0 便會消失。當天交易引致的待交收金額便會變成 T2。

<img src="/assets/X2JzbfNgioWE4Hxp97Ocp8fnnCe.png" src-width="2852" src-height="1374" align="center"/>

