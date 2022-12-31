declare module "lp-logger" {
    export type Level = "error" | "warn" | "log";

    export interface IProp {
        level?: Level;
        name?: string;
    }

    export interface COLOR_MAP {
        error: "#f5222d", // 红
        debug: "#7f8c8d", // 灰
        log: "#52c41a", // 绿
        warn: "#faad14", // 黄
        groupEnd: null,
        info: "#52c41a"
    };

    export default class Logger {
        constructor(prop?: IProp);
        COLOR_MAP: COLOR_MAP;
        log(...args: any[]): void;
        info(...args: any[]): void;
        warn(...args: any[]): void;
        error(...args: any[]): void;
        debug(...args: any[]): void;
        groupEnd(...args: any[]): void;
        _print(method: Level | LockInfo, args: any[]): void;
    }
}
