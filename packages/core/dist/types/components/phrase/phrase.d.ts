export declare class Phrase {
    element: HTMLElement;
    private io;
    inGroup: boolean;
    replacements: Map<string, string>;
    value: string;
    error: string;
    resolvedName: string;
    dict: HTMLIntlDictionaryElement;
    locale: string;
    lazy: boolean;
    name: string;
    nameChanged(): Promise<void>;
    replace: string | {
        [key: string]: any;
    };
    replaceChanged(): void;
    protected langChangeHandler(): void;
    componentWillLoad(): Promise<void>;
    componentWillUnload(): void;
    private resolveName;
    private resolveValue;
    private replaceValue;
    private addIO;
    private removeIO;
    hostData(): {
        style: {
            color: string;
        };
    };
    render(): any;
}
