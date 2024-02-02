---
title: 交易限額
slug: PLNWwKqZai9PB7k7uBdcak0xnYf
sidebar_position: 4
---


# 交易限額

## 適用场景

該菜單提供一個完整維度來管理交易限額，其維度包含：

公司层面、客户层面、证券层面、交易员层面的交易限额控制

- 可限制公司整體的單日限額、所有客戶的單日限額、所有證券的每日交易限額
- 可設定單個或批量客戶的交易限額 
- 可設定單個或批量證券的交易限額 
- 可對交易員進行提示、批核、拒絕的限額設定
- 优先级：客户限額/證券限额/交易员限額/客戶類別限額/多維度限額&gt;全局限額。

## 前置条件

無

## 操作说明

菜單入口：風控管理 &gt; 交易限額

### 全局限額

該菜單展示所有的限額代碼，若需新建限額代碼（現有代碼不支持規則），需聯繫長橋處理。

通過列表操作項的【開啓】和【關閉】可以生效/失效對應限額

<img src="/assets/WAZ3b7NTKo98rExkuqGc7QIInSc.png" src-width="3266" src-height="853" align="center"/>

也可以編輯限額規則：

<img src="/assets/Or7abKxpJoQwcNxARiXcaqXcnwb.png" src-width="3276" src-height="1638" align="center"/>

重點字段說明如下：

<table header_column="1" header_row="1">
<colgroup>
<col width="172"/>
<col width="612"/>
</colgroup>
<thead>
<tr><th><p>字段名稱</p></th><th><p>說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>限額幣種</p></td><td><p>無：則為純數量的判斷，與金額無關<br/>HKD：則全部轉化為 HKD 計算限額<br/>USD：則全部轉化為 USD 計算限額 </p></td></tr>
<tr><td><p>限制的條件類型</p></td><td><p>可選項為：&gt;=， &gt;， =&lt;， &lt;，無限，限制<br/>無限類型無需填閾值，其他均需填入閾值，僅限數字格式</p></td></tr>
</tbody>
</table>

規則修改後需要工單審批方可生效

### 客戶限額

客戶限額僅支持全局限額中限額類型為「客戶」的限額代碼；支持單個/批量新增客戶限額規則。

新增客戶限額規則

<img src="/assets/Km5NbSMUXoNQ6lxyNQwcSN6unbg.png" src-width="3238" src-height="690" align="center"/>

客戶限額規則配置：支持單個客戶錄入和批量上傳創建；此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/U485bLrIHo6E2qxYUECc1tsZndb.png" src-width="3252" src-height="1636" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

如需修改客戶限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

<img src="/assets/Rmc6be8gIotzRXxcnCYckShlnid.png" src-width="3327" src-height="735" align="center"/>

### 證券限額

證券限額僅支持全局限額中限額類型為「證券」的限額代碼；支持單個/批量新增證券限額規則

新增證券限額規則

<img src="/assets/MJGHbmwdTovJBAxoVElcrXdLnTb.png" src-width="3220" src-height="698" align="center"/>

證券限額規則配置：支持單個證券代碼錄入和批量上傳創建；此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/CgWfbTDHUozPfPxSkQgcSKzsnDf.png" src-width="3262" src-height="1628" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

如需修改證券限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

### 交易員限额

交易員限額僅支持全局限額中限額類型為「交易員」的限額代碼。

新增交易員限額規則

<img src="/assets/NVUlbXuHUoDOkNxoLercnds2nHe.png" src-width="3244" src-height="710" align="center"/>

交易員限額規則配置：此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/UQsFbnCz4oBRjXx6BZCcHMeJnQe.png" src-width="3298" src-height="1640" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

如需修改交易員限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

### 客戶類別限额

客戶類別限額僅支持全局限額中限額類型為「客戶」的限額代碼。

新增客戶類別限額規則

<img src="/assets/PdTkbZULNobZY2xksH6cgkwtnYd.png" src-width="3248" src-height="836" align="center"/>

客戶類別限額規則配置：此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/T0aab4f6aoY3uCxdb8AcMrninRe.png" src-width="3274" src-height="1604" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

如需修改客戶類別限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

### 多維度限额

多維度限額僅支持全局限額中限額類型為「多維度」的限額代碼。

新增多維度限額規則

<img src="/assets/TJJsb2EBxoqdORxH8spcWOq4nEb.png" src-width="3224" src-height="558" align="center"/>

多維度限額規則配置：此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/NWYKbOwxgoqkcvxF6Pocrk3pnjg.png" src-width="3254" src-height="1628" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

如需修改多維度限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

