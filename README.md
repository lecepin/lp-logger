# lp-logger

[![npm (scoped with tag)](https://img.shields.io/npm/v/lp-logger.svg)](https://npmjs.com/package/lp-logger)
[![NPM downloads](https://img.shields.io/npm/dm/lp-logger.svg)](https://npmjs.com/package/lp-logger)

浏览器端 logger 工具。

![](https://img.alicdn.com/imgextra/i4/O1CN01rU3ORV1Ms0RPsHmP4_!!6000000001489-2-tps-1350-476.png)

## 1.安装

```
npm i -S lp-logger
```

## 2.API

#### 2.1 类方法

```
constructor({
    level,
    name,
    search
})
```

| 名称   | 说明                                                                                                                                                                            | 默认值              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| level  | 日志级别。用于控制哪些类型的日志类型可以显示。 （`error`: 只显示 `error`，`warn`: 显示 `warn/error`，`log`: 显示所有）。当有`search` 的 URL 查询参数时，`search` 的优先级最高。 | `log`               |
| name   | 输出日志中，颜色块的上文本                                                                                                                                                      | `lp-logger`         |
| search | 用于通过 URL 参数控制显示级别，值与 `level` 的一致                                                                                                                              | `__lp_logger_level` |

#### 2.2 实例方法

| 名称           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| log            | 同 console.log                                               |
| warn           | 同 console.warn                                              |
| error          | 同 console.error                                             |
| debug          | 同 console.debug                                             |
| groupCollapsed | 同 console.groupCollapsed，用于创建 log 折叠分组，可嵌套折叠 |
| groupEnd       | 同 console.groupEnd，用于关闭 log 折叠分组                   |

## 3.使用

#### 3.1 折叠信息

```js
import Logger from "lp-logger";

const logger = new Logger({
  name: "项目A",
});

logger.groupCollapsed("折叠信息1");
  logger.log("log");
  logger.groupCollapsed("折叠信息2");
    logger.error("error");
    logger.debug("debug");
  logger.groupEnd("end");
  logger.warn("warn");
logger.groupEnd("end");
```

![](https://img.alicdn.com/imgextra/i2/O1CN01bpOGEp1gfuIIgIh72_!!6000000004170-2-tps-1548-286.png)

#### 3.2 只显示错误和警告信息

```js
import Logger from "lp-logger";

const logger = new Logger({
  name: "项目B",
  level: "warn",
});

logger.log("log");
logger.error("error");
logger.debug("debug");
logger.warn("warn");
```

![](https://img.alicdn.com/imgextra/i2/O1CN01bY5TMW1fIickGiZEG_!!6000000003984-2-tps-1478-88.png)

#### 3.3 URL 控制显示

```js
import Logger from "lp-logger";

const logger = new Logger({
  name: "项目C",
  level: "", // 空字符串时，不显示任何信息
  search: "__lp_logger_level", // 配置 URL 控制参数
});

logger.log("log");
logger.error("error");
logger.debug("debug");
logger.warn("warn");
```

URL 控制参数优先级最高，所以日志正常显示：

![](https://img.alicdn.com/imgextra/i2/O1CN01CAdt1A1PZdOiHvei4_!!6000000001855-2-tps-1278-376.png)
