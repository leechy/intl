export { l as locale } from './locale-205a8dd2.js';
export { d as direction } from './direction-01e446bf.js';

async function phrase(name) {
    return document
        .querySelector('intl-dictionary').componentOnReady()
        .then(dict => dict.resolvePhrase(name))
        .then(x => x ? x : null);
}

class LanguageObserver {
    /** Creates and returns a new LanguageObserver which will invoke a specified callback function when Language changes occur. */
    constructor(callback) {
        this.callback = callback;
        this.previous = [];
        this.phraseFilter = null;
        this.localeFilter = null;
        this.oldValue = false;
    }
    /** Configures the LanguageObserver to begin receiving notifications through its callback function when Language changes matching the given options occur. */
    observe(opts = {}) {
        if (opts.localeFilter)
            this.localeFilter = opts.localeFilter;
        if (opts.phraseFilter)
            this.phraseFilter = opts.phraseFilter;
        if (opts.oldValue)
            this.oldValue = opts.oldValue;
        const onChange = (dict) => {
            return (event) => {
                if (!this.localeFilter || !this.localeFilter.length || this.localeFilter && this.localeFilter.findIndex(x => x === event.detail.locale) > -1) {
                    let localeRecord = {
                        type: 'locale',
                        value: event.detail.locale
                    };
                    if (this.oldValue) {
                        const oldValue = this.previous.find(x => x.type === 'locale');
                        localeRecord = Object.assign(Object.assign({}, localeRecord), { oldValue: oldValue ? oldValue.value : null });
                    }
                    let records = [localeRecord];
                    if (this.phraseFilter) {
                        const phrases = this.phraseFilter.map(phrase => dict.resolvePhrase(phrase).then(x => x ? x : null));
                        Promise.all(phrases)
                            .then(resolved => {
                            const phraseRecords = resolved.map((value, i) => {
                                let record = {
                                    type: 'phrase',
                                    phraseName: this.phraseFilter[i],
                                    value
                                };
                                if (this.oldValue) {
                                    const oldValue = this.previous.find(x => x.type === 'phrase' && x.phraseName === this.phraseFilter[i]);
                                    record = Object.assign(Object.assign({}, record), { oldValue: oldValue ? oldValue.value : null });
                                }
                                return record;
                            });
                            records = [...records, ...phraseRecords];
                            this.previous = records;
                            this.callback(records);
                        });
                    }
                    else {
                        this.previous = records;
                        this.callback(records);
                    }
                }
            };
        };
        let cb;
        document
            .querySelector('intl-dictionary').componentOnReady()
            .then(dict => {
            cb = onChange(dict);
            cb({ detail: { locale: dict.locale, dir: dict.dir } });
            return dict;
        })
            .then(dict => {
            this.onChange = (event) => cb(event);
            dict.addEventListener('intlChange', this.onChange);
        });
    }
    /** Stops the LanguageObserver instance from receiving further notifications until and unless observe() is called again. */
    disconnect() {
        document
            .querySelector('intl-dictionary').componentOnReady()
            .then(dict => dict.removeEventListener('intlChange', this.onChange));
    }
}

export { LanguageObserver, phrase };
