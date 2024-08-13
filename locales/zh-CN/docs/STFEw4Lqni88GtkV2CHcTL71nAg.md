---
title: 通道管理
slug: xxx
sidebar_position: 3
---


# 通道管理

## 通道管理

通道管理是针对与  APP 常见交互方式，例：Banner 横条、App 弹窗、App Push、邮件、短信等通道内容管理。

其中横幅广告（Banner），是个呈现一个广告推广内容的图片，放置在 App 等互联网页面上，是互联网广告中最基本的广告形式，一般是使用 GIF 格式的图像档，可以使用静态图形，或新兴的 Rich Media Banner（丰富媒体 Banner）能赋予横幅更强的表现力和交互内容。

## 适用场景

如何创建一个 App Banner？

如何创建一个 App 弹窗？

如何创建一个 APP Push 消息？

如何创建一个 邮件消息？

如何创建一个 短信消息？

以下分别 整理几个常见通道管理内容，逐步导引来建立：

## 操作说明

### 如何创建一个 App Banner

以下是创建 App Banner 的步骤顺序：

- 选择 Banner 类型：如 - 需要创建一个在市场首页位置的 Banner
- 设置 Banner 顺序：同一个位置的 Banner 有多个配置上时，按照数字从小到大的顺序进行轮播
- 设置 Banner 名称：用于区分 Banner，作为业务标识
- 设置 Banner 图片：有裁剪和普通上传 2 种方式，按需选择
- 设置 Banner 跳转链接：一般使用 Pagehub 生成 H5 链接后进行配置，也可使用 App 内的 H5 页面链接
- 设置 Banner 运行周期：Banner 生效的周期，在设置周期内，Banner 生效，过期后则不再展示
- 设置 Banner 可见范围：全部用户可见 - 则 App 所有用户可以看到 Banner，投放系统可见 - 则仅计划配置中的目标受众可见

<img src="/assets/HT3DbhTFPosKlnx8BQVciwPrnWf.png" src-width="1972" src-height="1640" align="center"/>

### 如何创建一个 App 弹窗

以下是创建 App 弹窗 的步骤顺序：

- 弹窗名称：弹窗标识名称
- 弹窗类型：头图或全图，头图代表弹窗的标题描述确认按钮等都将使用编辑的信息，全图则代表完全使用背景图作为弹窗的展示信息
- 弹窗标题：展示在 App 的标题
- 弹窗描述：展示在 App 的描述信息
- 背景图片：弹窗展示时的背景图
- 确认按钮：弹窗点击跳转的按钮所对应的文案提示
- 确认按钮 URL：点击确认按钮后，期望跳转的地址
- 频次限制：同一个用户收到同一个弹窗的次数
- 活动时间：弹窗生效的时间周期
- 展示时间：在每天的 0 点到 24 点之间，希望弹窗在什么时间段展示
- 弹窗平台：可以选择是在 2 个端显示还是只在某个单一的端进行显示
- 可见状态：选择投放系统可见则代表仅计划配置中的目标受众可见，全部用户可见则整个 App 用户可见弹窗

<img src="/assets/HL6Kb3dnioWPFGxL2qPcYuzjnwd.png" src-width="1924" src-height="1644" align="center"/>

### 如何创建一个 APP Push 消息

投放系统的触发配置提供了 Push 的自定义模板功能，可以在配置计划时直接配置内容

以下是创建 App Push  的步骤顺序：

- 选择通道为 Push
- 设置标题、内容、上传封面图片
- 选择通知行为：常用的为打开某个活动链接或跳转到新股认购的页面，具体可按需选择

<img src="/assets/RLTnbiHHHotpZZxxOtlckJR4n0X.png" src-width="2132" src-height="1526" align="center"/>

### 如何创建一个 邮件消息

投放系统的触发配置提供了邮件的自定义模板功能，可以在配置计划时直接配置内容

以下是创建邮件消息的步骤顺序：

- 选择通道为邮件
- 设置发件人名称、邮件标题
- 通过富文本编辑器编辑邮件正文
- 添加邮件附件、设置邮件发件邮箱

<img src="/assets/HttRb5uhko6XWKxcMNXceePynhe.png" src-width="1694" src-height="1362" align="center"/>

### 如何创建一个 短信消息

投放系统的触发配置提供了短信的自定义模板功能，可以在配置计划时直接配置内容

以下是创建短信消息的步骤顺序：

- 选择通道为短信
- 选择短信发送地区
- 选择短信类型：投放系统一般使用营销活动
- 设置短信内容

<img src="/assets/FYtmb2DCRohOwXxFbHscpVXAnFb.png" src-width="2226" src-height="1530" align="center"/>

#### 消息模板说明

投放系统的消息触达（Push、SMS、Email）同时提供了消息模板功能，可以创建日常通用消息模板，同时消息模板也接入了工单审批流程。

菜单入口：投放系统&gt;消息模板

选择要创建的消息模板（Push、SMS、Email）；

特别说明：邮件模板只需配置邮件正文内容，邮件头尾同其他系统邮件配置，无需租户配置

<div class="grid gap-3 grid-cols-3">
<div>
<img src="/assets/WTCZbtAjjorFVFx7ouqcOXbmnLf.png" src-width="1276" src-height="1928" align="center"/>
</div>
<div>
<img src="/assets/CHHTbjP9PodPxAxIQh2chehRnVg.png" src-width="1274" src-height="1914" align="center"/>
</div>
<div>
<img src="/assets/R4aQbUt8OoYh05x137mcGDfcn5d.png" src-width="1270" src-height="1916" align="center"/>
</div>
</div>

提交审核，审批流程需要进行配置；

审核通过，可在创建 Push、邮件、短信时，选择消息模板进行发送，无需编辑内容。

<div class="grid gap-3 grid-cols-3">
<div>
<img src="/assets/UF2LbF8VSoCaP7xIKGVc0eC8nDe.png" src-width="1346" src-height="518" align="center"/>
</div>
<div>
<img src="/assets/UPozbaGKiobj8jxOCxjcmpGrnRe.png" src-width="1130" src-height="322" align="center"/>
</div>
<div>
<img src="/assets/C5w2bW1a7oZL4Sxp0n1clMDhnWf.png" src-width="756" src-height="302" align="center"/>
</div>
</div>

