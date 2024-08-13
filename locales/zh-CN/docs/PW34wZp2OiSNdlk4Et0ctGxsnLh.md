---
title: 费用管理
slug: PW34wZp2OiSNdlk4Et0ctGxsnLh
sidebar_position: 4
---


# 费用管理

# 适用场景

处理公司行动权益方案的全局规则费用配置或客户单一适用的客户费用管理维护

# 前置条件

无

# 操作说明

## 全局规则

执行菜单：公司行动&gt;费用管理&gt;全局规则 Tab 页签

可以维护管理公司行动的全局相关费用收取配置（预告 - 方案类型 - 费用类型）

<img src="/assets/XQxHbmdT3oE3kwxIaTGcbKk7nph.png" src-width="3344" src-height="1558" align="center"/>

也可以在记录右侧区点击【编辑】，来修改所对应的公司行动费用配置，可以在左上方点击【新建】，来增加一笔费用配置

<img src="/assets/CVeTbc0eHoXCyaxNXlCcSUFbnve.png" src-width="3192" src-height="1842" align="center"/>

字段说明：

- 分红类的收费（权益金额 + 比例收费），收费币种同分红币种 
- SCRIP DIVIVED 方案，配置的是是权益金额 + 比例收费的，则收费会以（每股派息比例*股数）来收费 
- 选股选息选择多个方案的，会按行权数量最多方案币种来收费。实际操作：当作行权都行在这个方案
- 实际收费币种和配置币种不一致的，会针对最高、最低收费会进行汇率转化 
- 截取方式：控制小数位数的截取方式，按照 2 位截取
-  收费优先级、费用特殊限制配合使用，比较费用和分红（分股分红的分股也统计在分红内）的关系
    - 无限制：独立进行费用计算
    - 单项费用不超过权益：该项费用的费用金额和分红进行比较，费用大于分红的，按照分红金额收费
    - 优先级前费用不超过权：按照优先级进行费用计算，优先级前的费用（含自身）大于分红的，按照分红金额=优先级前费用收

- **公司行动过户费只需要配置一条，是唯一不按方案收费的**
- 新增过户费设置：可进行单独收费，也可进行联合收费

<img src="/assets/WPAVbh6Kvo2L60x0tvlcgbxmnFf.png" src-width="3348" src-height="992" align="center"/>

<img src="/assets/V3IabCZGEo0CFMxkri9cWn0rn6g.png" src-width="3376" src-height="1254" align="center"/>

## 客户规则

执行菜单：公司行动&gt;费用管理&gt;客户规则 Tab 页签

进行客户规则上去配置公司行动的费用规则（仅适用该客户，不采全局配置）

<img src="/assets/IcsLbrTPEobgLqxBI2wcc6RRnyq.png" src-width="3350" src-height="882" align="center"/>

可以在右侧上方进行【新建】一笔客户规则，选择 客户帐号，费用类型，费用系数，最低费用录入

<img src="/assets/GJp6bAHFVoqXhXxMAVycd3EEn3g.png" src-width="3378" src-height="1250" align="center"/>

可以在右侧上方进行【批量导入】批量按模版导入客户规则

<img src="/assets/Q49ybIrpqozXsLxSEz8cHdfBngh.png" src-width="3348" src-height="1232" align="center"/>

