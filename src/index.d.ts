declare module "lp-logger" {
  export type Level = "error" | "warn" | "log";

  export interface IProp {
    level?: Level;
    name?: string;
    search?: string;
  }

  export default class Logger {
    constructor(prop?: IProp);
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    debug(...args: any[]): void;
    groupCollapsed(...args: any[]): void;
    groupEnd(...args: any[]): void;
  }
}
