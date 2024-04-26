import moment from "moment";
export default class Logger {
    /**
     * @param {String} level
     *    error: 只显示 error  
     *    warn: 显示 warn/error  
     *    log: 显示所有
     * @param {String} name
     */
    constructor({
        level = "log",
        name = "lp-logger",
    } = {}) {
        if (typeof window !== "undefined") {
            const qs = new URLSearchParams(window.location.search);

            if (Array.from(qs.keys()).includes(search)) {
                this.level = qs.get(search);
            } else {
                this.level = level;
            }
        }

        this.name = name;
        Object.keys(Logger.COLOR_MAP).map(key => {
            this[key] = (...args) => this._print(key, args);
        });
    }

    static COLOR_MAP = {
        error: "#f5222d", // 红
        debug: "#7f8c8d", // 灰
        log: "#52c41a", // 绿
        warn: "#faad14", // 黄
        groupCollapsed: "#2f54eb", // 蓝
        groupEnd: null,
    }

    _print(method, args) {
        if (this.level === "error") {
            if ("error" != method) {
                return;
            }
        } else if (this.level === "warn") {
            if (!["warn", "error"].includes(method)) {
                return;
            }
        } else if (!this.level) {
            return;
        }
        const logPrefix = [
            `%c${this.name}`,
            `background: ${this.COLOR_MAP[method]};border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em`,
        ];
        const timePrefix = [
            `%c${moment().format("HH : mm : ss")} `,
            `background: black;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em`
        ];
        console[method](...timePrefix, ...logPrefix, ...args);
    }
}
