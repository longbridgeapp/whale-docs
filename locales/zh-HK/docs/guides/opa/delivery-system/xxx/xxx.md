---
title: 【場景】如何創建一個 短信消息？
slug: xxx
sidebar_position: 4
---


# 【場景】如何創建一個 短信消息？

投放系統的觸發配置提供了短信的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建短信消息的步驟順序：

- 選擇通道爲短信
- 選擇短信發送地區
- 選擇短信類型：投放系統一般使用營銷活動
- 設置短信內容

<img src="./assets/RVzwbM96hovJtBx3u1vcE6Junte.png"/>

#### 消息模板說明

投放系统的消息觸達（push、SMS、email）同时提供了消息模板功能，可以創建日常通用消息模板，同時消息模板也接入了工單審批流程。

菜單入口：投放系统>消息模板

- 選擇要創建的消息模板（push、SMS、email）；
    - 特别說明：郵件模板只需配置郵件正文内容，郵件頭尾同其他系统郵件配置，無需租户配置

<div class="grid gap-3 grid-cols-3">
<div>
<img src="./assets/DpuPbNGAhoio9VxMi9CcXiZOnzg.png"/>
</div>
<div>
<img src="./assets/ZgaZb4uaOoBkKBxBmQqcot6Nns9.png"/>
</div>
<div>
<img src="./assets/JAPfbROCWo0VWdx1Tg4cvnvFnTh.png"/>
</div>
</div>

- 提交審核，審批流程需要進行配置；
    - 操作路徑：全局設置 - 身份管理 - 審批流程配置
    - 審批流程：消息模版審批（message.op_template）
    <img src="./assets/WToNblr92of9EwxTwmJcDO5snkg.png"/>

- 審核通過，可在創建 push、郵件、短信时，選擇消息模板進行發送，無需编辑内容。

<div class="grid gap-3 grid-cols-3">
<div>
<img src="./assets/ROpOb0Hq0oyJ4wxlSLJcSHLYnhg.png"/>
</div>
<div>
<img src="./assets/FBSmb4f8johCEuxDU6fcKi3nnYg.png"/>
</div>
<div>
<img src="./assets/CdIVbUocIo6KmOxjyRJcMW7KnYd.png"/>
</div>
</div>

