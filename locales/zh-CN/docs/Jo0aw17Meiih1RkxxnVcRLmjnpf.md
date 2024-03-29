---
title: 牛熊证回收处理
slug: Jo0aw17Meiih1RkxxnVcRLmjnpf
sidebar_position: 0
---


# 牛熊证回收处理

## 适用场景

用于处理有剩余价值返还的牛熊证

## 前置条件

无

## 操作说明 

### **创建**

1. 在公司行动管理，手工创建公司行动。预告类型选择 TM，标的栏位输入牛熊证编号，预告编号不可重复使用 
2. 港股系统是自动创建，导入 05 文件后，根据 05 文件数据每日生成有持仓的公司行动。每日下午 5 点半，上午 9 点左右执行
3. 美股需要人工创建
    1. 日期类型 + 日期配合使用，决定了预告内填充的日期字段
        1. 选择登记日的，则只填充股权登记日
        2. 填充除净日的，则填充除净日，并且自动处理填充股权登记日。美股股权登记日=除净日 +1+1；港股股权登记日=除净日 +1
        3. 注意：系统处理时真正使用的是股权登记日字段，以此字段拉取持仓（详见各类型**登记步骤**说明）

<img src="/assets/VavQbXtgOo2c9zxH9GfclprPnlc.png" src-width="3426" src-height="1360" align="center"/>

1. 在公司行动管理页面，点击记录右侧操作区【编辑】按钮，进一步补充资讯。输入股权登记日和支付日期，然后点击「新增」，选择「**TM-EXPIRED」**方案类型，只需输入必填栏位（详见系统基本介绍的**方案类型**段落）

<img src="/assets/NC8HbCOK6oLxmUx0lsscYT5rnEh.png" src-width="3410" src-height="1632" align="center"/>

注* 配置的时候只能选择一个「默认方案」。如默认方案字段没选，或者填了多个方案，系统会提示错误

1. 确认资料后，点击【确认】，若资料无误，则下一步就是可以操作【登记】
2. 点击【同步快照】。此步骤为非同步执行，同步成功后，客户数会有变更。可多个预告审核后，批量同步

### **登记**

1. 在股权登记日后，可正式推进公司行动的流程。登记后拉取持仓报表中帐务日期=股权登记日的帐面持仓 

 例子：TM 的登记日为 6 月 2 日，则最早开始操作的时间为 6 月 2 日生成持仓报表后

1. 点击【登记】，会按照同步数据和配置的通用收费规则生成权益信息表和费用明细。（权益信息表计算方式详见系统基本介绍的**方案类型**段落）

<img src="/assets/JeJ0bERlBob2Bfx6p5YcRCsOnke.png" src-width="3410" src-height="1628" align="center"/>

1. 登记后的权益资讯和费用资讯可查看客户明细。其中明细管理提供了单笔资讯整合查看的功能

<img src="/assets/MYS1bnmTLoPIQzx9oJ9cwYaEnmh.png" src-width="3392" src-height="1506" align="center"/>

### **上报回填**

牛熊证一般都是在上游返还剩余价值后再开始登记公司行动，登记后可直接按返还的金额进行尾差处理，在操作区域点击尾差调整

<img src="/assets/LyyzbDRNhoTn2HxGjFocbOm1niK.png" src-width="3390" src-height="1464" align="center"/>

在显示当前的所有客户汇总数据后，点击【编辑】 

<img src="/assets/WqojbbD9ZoQGTtxq9Iscs4O6nkh.png" src-width="3412" src-height="782" align="center"/>

系统会默认显示当前的汇总返还值，直接按 CCASS 的数据输入并且点击【确定】 。其中尾差处理为非同步执行

例：**输入金额后， **系统将按照持股比例，重新计算权益

<img src="/assets/WcBAb88H2ozACUxR0GQcBLCBnGe.png" src-width="3114" src-height="1080" align="center"/>

### **执行**

尾差处理完毕后，选中预告点击【提交执行】，提交审核

<img src="/assets/ZZEWbMSppoHOH4xvW7CcuYoFnPf.png" src-width="2682" src-height="1620" align="center"/>

提交审核介面有 LB 和上游的数据，为汇总类报表。上游数据取自导入的 02 档，适配了部分公司行动

<img src="/assets/C2eXbC9zvooBTwxkUv2cQ3HdnAf.png" src-width="2682" src-height="1626" align="center"/>

接下来可点击【执行复核】

<img src="/assets/ZyuabPx2poiK3WxA9pTcRkoQn6g.png" src-width="2672" src-height="1622" align="center"/>

再次核对数据后，点击【审批通过】。审批后系统将调用 RMS（资产管理系统）进行资产变动。执行后，可在客户帐户中查看

<img src="/assets/CYdxbVcP2o2rrixHhzdcxAMsnlf.png" src-width="2668" src-height="1642" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>注意：</p>
<ol>
<li><p>登记日为当天的，需要在日切（下午 5 点）且生成持仓数据后才操作 </p>
</li>
<li><p>只有客户数为 0 的公司行动才会发起同步。同步数据有问题的，需找技术删除快照后再同步 </p>
</li>
<li><p>牛熊证剩余价值返还为 0 的，可能会和 DS 类 - 股权收回有重复，可以删除 TM 类型的公司行动</p>
</li>
</ol>
</div>

