---
title: 公司行动操作顺序
slug: xxxxxxxxx
sidebar_position: 3
---


# 公司行动操作顺序

## 适用场景

协助用户了解一个常规公司行动权益,在系统是如何依序操作的顺序

## 前置条件

已经透过 执行菜单：清算管理&gt;市场清算&gt;文件处理 导入  CCNAN05 档或 其他美股档案

## 操作说明（按业务节点）

### 初始化

在执行菜单：公司行动&gt;公司行动 查询条件 选择：推进状态：初始化 ，就可以查询到近期刚导入的 公司行动预告

初始化状态是公司行动预告的起始点， 也可以操作【终止】

<img src="/assets/FW9pbKaFQo0z7IxbrgWcxwPrngh.png"/>

可以点击【详情】检查对应的公司行动预告资料与方案信息，同时系统会产生默认方案

<img src="/assets/SS2BbhqRVodOlQxlx9xcmkmVnIc.png"/>

首先展示是该公司行动的 系统推进节点状态讯息：

<img src="/assets/YDR4bskHNoNpmQxDkI1cknVonyf.png"/>

注意：  不同的公司行动类型，会有不同状态展示，方便用户直觉掌握推进状态

<img src="/assets/QZq1bzkoxoEzAYxYvYVcxeORnuR.png"/>

接下展示是**预告信息**： 同时系统也针对部分公司行动提供预设配置项来优化，

      例： 派发位置（Street 或 NOMiNEE） 或 支付日期+N 配置 （每家租户可能不同）

      零股转分红预设（是或否）。  注意：以上预设配置变更，若有需要请联络 长桥运营团队来配置

<img src="/assets/VlTmbNpcKoEwWCxipR7c5JALn8b.png"/>

接下来是**方案信息与费用规则**：

<img src="/assets/XrMNbWpKdoLPHwxQnKhc5v8sn0c.png"/>

这时候可以 根据需要 检查个别的公司行动资料纪录，若必要栏位有缺失， 系统会标红出来，方便检核数据

<img src="/assets/NJ28b2khHoLhXqxzNatcNETOnEc.png"/>

若没问题，则可以点选 前方的 纪录 Checkbox 区域，往下操作【登记】

<img src="/assets/Uu0zbVG3vot4R0xbQ5tcwthonhg.png"/>

此时系统会检查登记日与帐务日期，必须登记日小于目前帐务日期

<img src="/assets/EXS2bwoC3o3IYQxc16WcmMopncf.png"/>

### 登记

前置作业：  已经通过资料检核 的公司行动预告纪录

操作说明： 

在执行菜单：公司行动&gt;公司行动 查询条件 选择：推进状态：初始化 ，就可以查询到初始化的公司行动预告

后续可以操作【登记】或 【终止】，

在登记时，提供业务校验功能的同时，增加了更多的业务检查项目

注： 系统会判断 必须 帐务日期&gt;= 登记日 才可进行登记操作

<img src="/assets/FR1bbMIi5oJLCYx9GRhcjSDWncc.png"/>

<img src="/assets/AnfBbXRUBoW0qcxFLDpciyotnDe.png"/>

注意： 因为公司行动 CCASS 文件会有一段时间的内容更新，因此我们优化 02 文件的读取， 增加 CCASS 文件日期与 CCASS 状态的展示，  租户可选择此栏位查出真正要开始执行的公司行动，否则容易因为 CCASS 状态不是‘最终执行'，可能因为数据内容造成人工处理的环节

<img src="/assets/AdZwb8xTsos7qJxu8sqc7IjanAf.png"/>

这样可避免 CCASS 状态是‘初步确认’（并非最终状态） 或后面被取消，此时若去执行后续公司行动操作容易有机会出错

<img src="/assets/EWJZbEWgJoYcW9xxEyYcJI58nNe.png"/>

此时可以在登记日期当天，点选 【登记】 ，往下一步操作节点进行，当登记成功后，

 注： 由于系统处理‘登记'须有点时间， 属于异步设计，状态会变成‘正在登记' （请稍后即可）

<img src="/assets/ERzKbSwmNouTNOxgpMNc49u0njf.png"/>

 当登记成功后，  就可在 执行菜单：公司行动&gt;客户明细作业， 可以查到对应预告方案的客户登记明细纪录 

<img src="/assets/I17SbGsmFoBZ91xD2CkckIRQnId.png"/>

### 过户（系统自动处里）

操作说明：  

目前系统是自动处理过户，不需用户操作，会在执行状态时自动处理

注意： 

1. 不是所有的公司行动都要过户，合股、拆股和换股不需要过户，过户时将完成 Street-&gt;Nominee 的 操作
2. 在该预告登记成功且客户有持仓的状况下，在‘执行’推进状态时就系统会自动过户操作（当股份过户后： 即支付 Script Fee）股份记录将改为 Nominee
3. 当过户后，就可在 执行菜单：公司行动&gt;客户明细&gt;费用记录 Tab，可以查到对应预告的客户过户费 明细纪录 

<img src="/assets/HaPBb6Wdwot9Egx8SRqczbMqnKd.png"/>

### 指令收集

前置作业：  已经通过 登记成功 的公司行动预告纪录

操作说明：  

在 执行菜单：公司行动&gt;公司行动 查询条件 选择：推进状态： 登记成功。 指令收集状态：初始化  ，就可以查询到 近期 公司行动预告可进行指令收集操作的预告纪录 （前提是 已登记成功 状态）

<img src="/assets/EUKeb9UQ9oYEtaxkgPJcDyvpnxc.png"/>

此时可以操作‘指令收集'。 在选择开始时间 到结算时间，对相关客户发送选择通知（透过 APP 或 mail  讯息）

参考通知范例：

     兹通知股票 700.HK，提出无条件要约收购，收购价格为每股 12.00 HKD。截止办理日期香港时间 2023-02-07   

     12:00. 预计派送日期 2023-03-07（仅供参考，以实际派发为准）。如欲参与，请登入 APP 在【我的资产-要约回

     购】进行操作。

注意：  系统将在指令收集截止日期后，推进状态将自动变成‘指令收集完成'

<img src="/assets/Y26fbsPR6odEP3xjuaPcQHaRnfe.png"/>

由于 指令收集涉及到 客户选择交互通知， 后续也要把客户选择记录上传 CCASS 处理， 整个指令收集的系统节点如下：  正在收集指令/上报成功/回填完成/处理成功/ 处理失败

<img src="/assets/P3xebgHwdog982xTilUcyXggnpd.png"/>

#### 回填（Backfill）

回填操作是指 将客户指令选择上传 CCASS 处理后，要将 CCASS 的最后处理结果 回填到系统内的操作

操作说明：

预告类型为（OO EO RS ER TU TC ADR）同时推进状态：登记成功，指令收集状态： 客户操作完成 才可以进行

#### 尾差处理

操作说明：

预告类型为（OO EO RS ER TU TC ADR ）不支持

同时推进状态：登记成功，指令收集状态： 客户操作完成 才可以进行,可以在 纪录右侧功能键操作【尾差调整】按钮

<img src="/assets/UYKjbGmc9ofkqaxFxjTcI61pnLc.png"/>

尾差处理功能，可以按子仓处理，也可以不分子仓处理

<img src="/assets/FqUBbQz4eoaLAUxJ2VQctO6qnhe.png"/>

### 执行

前置作业：  已经通过 登记成功 的公司行动预告纪录，同时已完成该预告相关业务节点（ 指令收集 等）

注意：  这步骤基本是最后一步： 执行经办， 若检查该公司行动预告应该处理的业务节点与系统节点后，就可提交执行经办

<img src="/assets/ADzTbjBFJoYBzBxuLj7cuhYhnPe.png"/>

此时会出现提交审核的画面，确认提交后就会进入 后续执行审核的节点

<img src="/assets/KEDNboHYToHckwxA0qNciWs2nwf.png"/>

### 执行（审核）

前置作业：  已经通过 登记成功 的公司行动预告纪录，同时已完成该预告相关业务节点（ 过户/指令收集 等）

操作说明：  推进状态： 执行待审核  ，就可以查询到 执行待审核的预告纪录

<img src="/assets/GGz1b8aXeokPNTx1aO1cQHtgnuf.png"/>

请根据资料数据，做出审核通过的操作或拒绝，当审核通过后就完成一个 公司行动的预告处理周期

<img src="/assets/OAFkbafGcoiUQHxbVzkcxw84nth.png"/>

公司行动执行复核报表，增加了分组功能，可以协助操作者更方便地发现和 CCACC 的差异

<img src="/assets/TPK1bTP3co2VvjxkCYKcLfCxnzh.png"/>

## 系统节点

### 终止

在下列公司行动节点与系统状态下， 可以操作公司行动预告终止处理，确认终止后将会删除预告及关联信息

（等于 所有该预告的一切操作 将会取消）

推进状态：初始化 （预告创建成功的）

推进状态：登记成功，过户费收取字段值为否（不需过户操作），执行方式为强制型可操作

推进状态：登记成功，过户费收取字段值为是，但过户状态为初始化、已撤销的可操作（也就是未开始处理过户）

推进状态：登记成功，执行方式为可选择的，指令收集状态为初始化的可操作

      以上符合状态的支持批量操作

### 撤销

在下列公司行动节点与系统状态下， 可以操作公司行动预告终止处理，确认终止后将会删除预告及关联信息

（等于 所有该预告的一切操作 将会取消）

执行成功、执行成功并通知成本系统的，可操作

推进状态：登记成功，执行方式为可选择的，指令收集状态为客户操作中、客户操作成功、回填中、回填成功可操作

以上符合状态的仅支持单笔操作

