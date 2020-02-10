import { Component, Listen, State, h } from '@stencil/core';
import { locale, IntlChange } from '@intl/core';


@Component({
    tag: 'app-language',
    styleUrl: 'app-language.css',
    shadow: true
})
export class AppLanguage {

    private languages = [
        'en',
        'es'
    ]

    @State() locale: string = locale.get();

    @Listen('document:intlChange')
    protected localeChangeHandler(event: CustomEvent<IntlChange>) {
        this.locale = event.detail.locale;
    }

    setLanguage(value: string) {
        return locale.set(value);
    }

    render() {
        return (
            <div>
                {
                    this.languages.map((locale) => (
                        <button onClick={() => this.setLanguage(locale)} class={{ active: this.locale === locale }}>
                            <intl-phrase name={`locale.${locale}`}/>
                        </button>
                    ))
                }
            </div>
        );
    }
}
