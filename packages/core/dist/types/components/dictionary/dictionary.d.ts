import { EventEmitter } from '../../stencil.core';
import { IntlChange } from '../../declarations';
export declare class Dictionary {
    private hasWarned;
    private mo;
    private dicts;
    private requests;
    element: HTMLElement;
    onIntlChange: EventEmitter<IntlChange>;
    global: {
        [key: string]: any;
    };
    src: string;
    availableLocales: string[];
    default: string;
    locales: string;
    parseLocales(): void;
    locale: string;
    langChanged(): Promise<void>;
    dir: string;
    dirChanged(): void;
    private triggerLocaleChange;
    componentWillLoad(): Promise<void>;
    componentDidUnload(): void;
    exists(path: string): Promise<string | boolean>;
    private isFile;
    private isDirWithIndex;
    private getResourceUrl;
    fetchGlobal(): Promise<void>;
    addDictionary(locale: any, dict: any): Promise<void>;
    appendToDictionary(locale: any, dictName: any, dict: any): Promise<void>;
    fetchDictionary(locale?: string): Promise<void>;
    private lazyloadRef;
    resolvePhrase(name: string, locale?: string): Promise<string | false>;
    jsonToDict(obj: {
        [key: string]: string;
    }): Promise<Map<string, any>>;
    private addMO;
    private removeMO;
    private setDirFromDict;
}
