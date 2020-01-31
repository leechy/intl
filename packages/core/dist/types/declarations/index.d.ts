export interface IntlChange {
    locale: string;
    dir: 'ltr' | 'rtl' | 'auto';
}
export declare type Lazy<T = any> = {
    lazy: true;
    url: string;
    interface?: T;
};
export interface Config {
    locales?: string[];
    srcDir?: string;
}
