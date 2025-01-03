# 取数标准

不同数据源、不同时段取数可能会存在差异。为保持数据的一致性，应对取数标准进行规范。

## 门店管理表

因系统中的门店管理表门店信息随时可能出现变动，导致门店数量、状态等信息会出现差异。为保持当日门店数据的一致性，需对门店信息进行固化。

- 日常门店管理表

> 取每日`08:40`导出的门店管理表，作为当日门店信息表。
>

- 绩效版门店管理表

> 取月末最后一个工作日的门店信息表，作为当月绩效门店信息表。
> 
> 门店经理的变动应在当月最后一个工作日下午进行。

## 营业数据

因切换过收银平台（哗啦啦→美团管家），导致数据口径不同。需确定收银数据规则：

- 本期营业数据

> 因美团管家api限制，中台取美团管家数据时近期的数据不稳定。需直接从美团管家中取数。

- 同期营业数据

> 哗啦啦系统数据已经固化，直接从中台取数。

- 其它营业数据

> 涉及10日内营业数据，应当从美团管家中提取。
>
> 10日之前数据，可从中台拉取，因api原因，与美团管家数据可能存在差异。
>
> *涉及绩效数据，为避免争议，应从美团管家中拉取。*
