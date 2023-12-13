---
title: 结单管理
slug: xxx
sidebar_position: 0
---


# 结单管理

## 适用场景

Whale 系统预设是线上发送结单

结单查询、日终后发送结单操作

产生临时结单

线下配置客户结单发送方式操作如下：

## 前置条件

无

## 操作说明

### 结单查询和发送

菜单入口：清算管理&gt; 日终管理&gt;结单管理&gt;结单查询

本作业可以处理帐务日期的已经产生的结单查询和发送

<div class="callout callout-bg-2 callout-border-2">
<p>💡 系统支持在日切步骤汇总进行结单自动发送，但须事先配置，请联络 Whale 客服</p>
</div>

<img src="/assets/YjXLb40nrorBAGxR3efcticInUd.png"/>

<img src="/assets/FO6bbTetzoZiUNxdO3nchwXSnuf.png"/>

可以点选右侧记录区对结单【重发】或【下载】

<img src="/assets/VUvBbz1tkoImKAxMA6dcNYZOnue.png"/>

也可产生一份临时结单，在临时结单视窗输入对应客户与结单日期

<img src="/assets/Wd4lbHcFSoa7xbx1qMDcTvwpnu9.png"/>

<img src="/assets/FpXcbk4vjoKlJkxYzSvcVAznn0z.png"/>

### 结单模版设置

菜单入口：清算管理&gt; 日终管理&gt;结单管理&gt;结单模板 

本作业可以管理结单标准格式的配置，包含 公司讯息/联络方式/责任说明（以下为参考）

<img src="/assets/AKc5bNxT5ocivxxDVWhc3CoznUe.png"/>

<img src="/assets/GPdebPeeToG1lQxpmCxcS00bnwh.png"/>

在结单模版可进行社交媒体信息配置功能，配置后会在结单展示，若不配置，则不展示该栏位

<img src="/assets/TsylbrsvtoF8UJxSdAucrXeDnje.png"/>

结单模板新增结单语言配置功能（支持 5 种语言设置方式）

<img src="/assets/IwD9bE4h4oYmW5xDAdScOm0bnuh.png"/>

### 结单配置

本作业用来配置管理：客户结单是否线下发送/是否接受邮件和 APP 通知/未配置的按线下发送为否/提醒全部开启处理 等配置项

<img src="/assets/UU0LbjWDKo9NYLx954Yckytnnpd.png"/>

<img src="/assets/G7Y9bTjfBog4SAxJvAic22Bbnvb.png"/>

在结单配置上增加来源栏位，方便定位结单配置修改来源

也支持批量新增功能，透过事先模版下载后上传来应用

<img src="/assets/KSNHbjERrorON6xgPQtcVJ6CnAc.png"/>

新客户查询不到的，可新增发送方式

<img src="/assets/VmPVbRuTNo3st9xe4SGcwgKynnc.png"/>

### 客户备注

菜单入口：清算管理&gt; 日终管理&gt;结单管理&gt;客户备注

提供一个客户结单备注的管理入口，方便针对某些特定客户结单增加备注说明

<div class="callout callout-bg-2 callout-border-2">
<p>💡 注意：若有需要增加客户结单备注，要在日终作业完成前，补录好客户结单备注后才能发生效用</p>
</div>

<img src="/assets/SeDDbdMmWoCS61x6OpTcxlw1n3c.png"/>

可以点选右上角【新增备注】，根据需要新增 日结单/月结单/临时结单/DA 结单上对应客户备注

<img src="/assets/XQ6fbA0bqoMX1xxTyZjcCBrfnUe.png"/>

也提供批量结单模板导入的备注说明

<img src="/assets/XAn2blTUToQ4E2x02Klcz6Wnnof.png"/>

以下是备注参考模板：

<img src="/assets/E4x5bGIb4os3tuxdaAacnkTmn1b.png"/>

可在列表页查询备注内容，进行二次编辑

<img src="/assets/FSrsbCQfeoQEZMxWjuVc6JCCnq4.png"/>

### DA 结单配置

菜单入口：清算管理&gt; 日终管理&gt;结单管理&gt;DA 结单配置

DA 帐户开户后会默认配置为按 3 月/6 月/9 月/12 月这四个月生成月结单，结单模版为 DA 结单特殊模版。同时支持修改默认配置，修改后取最新配置

<img src="/assets/MC4rbxK1Po3haxxVb4Sc7pxvnab.png"/>

<img src="/assets/IOHjbVdYWompK3xXff6cp8H1nJe.png"/>

### SFTP 结单备份

支持劵商租户登陆 SFTP 下载七日内结单，方便租户批量下载及存储结单。结单目录是按结单日期、线上线下类型分两个目录存储，目录名称：statement/结单日期/online/ 及 statement/结单日期/offline/ 

注 SFTP 帐号：同资料库备份帐号

