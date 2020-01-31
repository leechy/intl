export interface LanguageObserverInit {
    /** An array of specific phrases to be monitored. */
    phraseFilter?: string[];
    /** An array of specific locales to be monitored. If this property isn't included, changes to all locales cause notifications. No default value. */
    localeFilter?: string[];
    oldValue?: boolean;
}
export interface LanguageRecord {
    type: string;
    value: string;
    oldValue?: string;
    phraseName?: string;
}
export declare class LanguageObserver {
    private callback;
    private previous;
    private onChange;
    private phraseFilter;
    private localeFilter;
    private oldValue;
    /** Creates and returns a new LanguageObserver which will invoke a specified callback function when Language changes occur. */
    constructor(callback: (records: LanguageRecord[]) => void);
    /** Configures the LanguageObserver to begin receiving notifications through its callback function when Language changes matching the given options occur. */
    observe(opts?: LanguageObserverInit): void;
    /** Stops the LanguageObserver instance from receiving further notifications until and unless observe() is called again. */
    disconnect(): void;
}
