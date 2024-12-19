---
title: 2024-12-23 更新日志
slug: Ks9lwyXyFiNLnMkqSeGcH8TVnip
sidebar_position: 0
---


# 2024-12-23 更新日志

# 🎉 新功能

- 新增到账时间，预估费用配置
    - 对于客户在 App 提交出金申请时对应的“到账时间”以及“预估费用”提示内容，可根据客户银行卡、提交时间点、币种以及出金范围进行后台区分配置
    - 路径：证券后台 - 业务参数设置 - 出金规则 - 出金参数
    - 权限 1：withdrawalparameter.withdrawal_parameter_query 出金参数查询
    - 权限 2：withdrawalparameter.withdrawal_parameter_management 出金参数管理
    [繁体 - 出金到账时间以及预估费用配置.pdf](/assets/CMyBbrmpCoNIDpxBFB9cQW2Snk2.pdf)
    
# 🪀 改进与修复

- 开户认证方式变更后，对原本入金处理流程优化
    - 如果开户认证方式变更时，客户入金申请未关联且能有对应的证券账号，在开户成功后客户可在 App 进行撤销；
    - 如果开户认证方式变更时，客户入金申请未关联但无法对应到相应证券账号，则后台会有消息告警，根据告警信息在后台可撤销
    - 路径 1：证券后台 - 款项管理 - 入金 - 入金申请
    - 如果开户认证方式变更时，客户入金申请已匹配入账且能有对应的证券账号，在开户成功后系统会自动将加款状态“开户入金处理中”更新为“加款成功”
    - 如果开户认证方式变更时，客户入金申请已匹配入账但无法对应到相应证券账号，则后台会有消息告警，根据告警信息在后台可驳回操作
    - 路径 2：证券后台 - 款项管理 - 入金 - 开户中入金
    [开户入金处理中 - 繁体.pdf](/assets/QKVTbjJJgoRfcJxyq9XciMWMnjd.pdf)

- 入金支持多家收款行配置
    - 在客户选定银行卡以及入金币种之后，可以自主切换收款行，后台可支持配置多家入金银行。
    - 路径：证券后台 - 款项管理-App 管理 - 入金参数
    <img src="/assets/NC3NbaViSo3XgKxtevKcrIKznEb.png" src-width="3790" src-height="846" align="center"/>

- 换汇策略优化
    - 新接入的柜台公司会在初始化时新增一条默认的换汇策略
    - 换汇策略如果选定“服务策略=换汇池换汇”，则可以设置汇兑池是否拦截
        - 不拦截：是指客户换汇在选定换汇池换汇后，无论剩余额度是否充足，都可以继续提交换汇，换汇成功后正常加减汇兑额度；
        - 拦截：是指客户换汇在选定换汇池换汇后，需要判断剩余额度，目前线上逻辑
    - 【新建】和【编辑】操作新增“汇兑类型”和“服务策略”字段解释
    - 汇兑策略的服务时段支持 7×24 配置
    - 汇兑策略的币种对支持全量配置，全部币种对来自「证券后台 - 业务参数设置 - 汇兑 - 换汇策略」的配置
    - 【新建】操作的“汇兑类型”支持多选
    - 路径：证券后台 - 业务参数设置 - 汇兑 - 换汇策略
    [换汇策略优化 - 繁体.pdf](/assets/O0mRbg1LCoJ9ikxWVLicY2wgn8d.pdf)

- 审核客户银行卡输入的备注对接备注模板
    - 在后台审核银行卡，如果选择【拒绝】，则人工输入的备注可以从预设备注进行选择。
    - 对于输入的备注可以选择客户是否可见，如果选择“可见”，则在推送审核结果的消息中会将备注带给客户；如果选择“不可见”，则相应备注只能后台看到，客户在消息中看不到
    - 路径 1：证券后台 - 款项管理 - 客户银行卡
    - 拒绝客户绑卡的预设备注可以在后台进行自定义
    - 路径 2：证券后台 - 业务参数设置 - 备注模板
    [审核对接预设备注 - 繁体.pdf](/assets/NPPGb8Ka0o54Xpxz7ePclMTXnsg.pdf)

- 银行标准版模板支持多个文件导入
    - 对于入金账单银行标准模板单个文件导入的基础上，可支持多个文件导入
    - 路径：证券后台 - 银行账单 - 入金账单
    [繁体 - 多个银行账单导入.pdf](/assets/KbebbGRFsoN7Kbx1aVscObOhnRd.pdf)

- 入金申请创建时间默认本周
    - 进入入金申请页面创建时间默认本周，但可人工修改
    - 路径：证券后台 - 款项管理 - 入金 - 入金申请
    <img src="/assets/S3Z9btPKDouET6xcejnc5SJ7nPb.png" src-width="2276" src-height="890" align="center"/>

- 将入金申请【更改】新增权限以及【查看备注】优化
    - 将入金申请【更改】新增权限，如未申请该更改权限，后台无法看到对应操作按钮
    - 添加备注支持附件导入
    - 路径：证券后台 - 款项管理 - 入金 - 入金申请
    - 权限：atm.deposit_request_change 入金申请更改
    <img src="/assets/RnCNb12o1ozueVxyQlZcUiGnn9c.png" src-width="3286" src-height="856" align="center"/>
    <img src="/assets/CC76bXyrKo6dvmx5ljHcN36Qnqg.png" src-width="3302" src-height="1232" align="center"/>
    