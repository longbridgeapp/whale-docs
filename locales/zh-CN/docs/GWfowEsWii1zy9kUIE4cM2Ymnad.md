---
title: 页面管理
slug: GWfowEsWii1zy9kUIE4cM2Ymnad
sidebar_position: 1
---


# 页面管理

## 适用场景

适用于运营、投放人员直接无需开发进行 H5 页面搭建

## 前置条件

购买了 OPA 系统，且申请相关菜单权限方可使用

## 操作说明

菜单入口：活动系统 &gt; 标准活动管理

本作业可以管理维护透过 PageHub 制作出来的页面

<img src="/assets/QGuJbBjWJorHPNx24wmcASPbn6c.png" src-width="3354" src-height="1454" align="center"/>

### 基础操作

在 Pagehub 查询管理页面列表，提供【链接复制】的功能操作，可以点选 Copy 图示

<img src="/assets/ElZ9bbs4KoASAFxzfHbcuI82npb.png" src-width="3306" src-height="918" align="center"/>

在 PageHub 查询管理页面列表，提供【二维码】的预览功能操作

<img src="/assets/DTt2bvpfmoUMvNxHq2ccUPMdnVb.png" src-width="3286" src-height="1002" align="center"/>

纪录右侧操作区的可以操作：【编辑】/【复制】/【删除】

页面列表字段/功能说明：

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段说明</p></td></tr>
<tr><td><p>序号</p></td><td><p>页面序号</p></td></tr>
<tr><td><p>标题</p></td><td><p>页面标题，当配置好自定义页面后点击打开头部标题栏展示的名字</p></td></tr>
<tr><td><p>发布状态</p></td><td><ul>
<li>未发布：该状态下页面为草稿状态，需要点击发布才会生效</li>
<li>已发布：页面点击发布按钮并发布成功后则为该状态，该状态页面直接生效</li>
<li>发布失败：当前页面点击发布按钮但是由于种种原因失败</li>
</ul></td></tr>
<tr><td><p>页面地址</p></td><td><p>展示链接以及二维码两种链接形态，可复制当前链接直接打开预览，也可扫描二维码</p></td></tr>
<tr><td><p>创建人</p></td><td><p>创建该页面的操作人名称</p></td></tr>
<tr><td><p>最后发布时间</p></td><td><p>最新一次发布更新的时间</p></td></tr>
<tr><td><p>操作</p></td><td><ul>
<li>编辑：点击打开编辑当前页面</li>
<li>复制：点击复制当前页面内容创建并打开新页面</li>
<li>删除：删除当前页面（谨慎使用）</li>
</ul></td></tr>
</tbody>
</table>

### 页面搭建

点击右上角【新建页面】后打开如下页面，布局如图：

<img src="/assets/Zh1IbgDnNoTWGvxPVvHcHKMmnkd.png" src-width="1921" src-height="989" align="center"/>

**组件管理/组件库：**

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/UPgQbHr6ooNDh6xqDH0cTKlMnDb.png" src-width="664" src-height="754" align="center"/>

<p>展示当前页面中已经配置的组件列表，点击对应组件名称可进行编辑配置</p>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/F4HkbavmTold0hx5eAzcBJIwng4.png" src-width="690" src-height="1268" align="center"/>

<p>所有可配置的组件类型，点击/拖拽对应组件类型会自动添加至预览去页面中</p>
</div>
</div>

**预览区操作功能说明：**

<img src="/assets/YphHbwclvoWZlAx1VHjc8W2Nnye.png" src-width="2406" src-height="1832" align="center"/>

**多语言切换功能说明：**

<img src="/assets/NFkubXQRMoAilOxCz5ScozPPnHd.png" src-width="800" src-height="356"/>

**配置区域功能说明：**

<img src="/assets/TkVAbY38uoyCQRxoVB6cXwVEnhb.png" src-width="696" src-height="632"/>

- 页面配置 - 当前页面主要参数配置

1. 多语言设置

可配置当前页面需要支持的语种与页面标题

1. 适用区域设置

可配置能打开当前页面的 IP 区域有哪些。分为不限制、仅支持区域、不支持区域三种类型可选。

不限制：则表示任何地区 IP 均可访问该页面

仅支持区域：仅限制所配置的地区 IP 可访问该页面

不支持区域：仅限制所配置的地区 IP 不可访问该页面

1. 活动配置

可配置当前页面是否需要登录后才可访问

不需要登录：则用户不需要登录账号即可访问页面

通用登录页：则用户需要在通用登录页面中进行登录后才可访问页面

1. UI 配置

页面的背景颜色配置

1. 链接参数配置

链接渠道号配置，若为了统计数据需要区分渠道来源的话可以配置专属渠道号。否则可以不填。

1. 分享配置

页面分享功能的配置

- 链接分享模式：即点击分享时直接复制链接或者当前链接形式直接分享

可配置分享链接时自带的分享标题以及分享描述。

分享链接可单独配置，不配置则默认分享当前页面的链接，若配置后则分享时将分享配置之后的页面链接。

分享缩略图即当分享链接至微信或者其他需要缩略图展示的平台时，可展示当前配置的缩略图

- 面对面分享模式：即点击分享时直接弹出自带二维码的图片，可截图分享或者当面扫码打开对应页面

二维码弹窗背景图片配置

### 组件说明

更多组件相关信息，详见《组件说明》

[组件说明](./D3MZwurWOiWBsHkeLhVc8tR1nbf) 

