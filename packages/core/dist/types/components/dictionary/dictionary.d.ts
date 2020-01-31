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
    lang: string;
    langChanged(): Promise<void>;
    dir: string;
    dirChanged(newValue: any, oldValue: any): void;
    private triggerLocaleChange;
    componentWillLoad(): Promise<void>;
    componentDidUnload(): void;
    exists(path: string): Promise<string | boolean>;
    private isFile;
    private isDirWithIndex;
    private getResourceUrl;
    fetchGlobal(): Promise<void>;
    addDictionary(lang: any, dict: any): Promise<void>;
    appendToDictionary(lang: any, dictName: any, dict: any): Promise<void>;
    fetchDictionary(lang?: string): Promise<void>;
    private lazyloadRef;
    resolvePhrase(name: string, lang?: string): Promise<string | false>;
    jsonToDict(obj: {
        [key: string]: string;
    }): Promise<Map<string, any>>;
    private addMO;
    private removeMO;
    private setDirFromDict;
}
