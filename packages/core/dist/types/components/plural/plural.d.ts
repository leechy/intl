/**
 * Plural is a web component that enables plural sensitive formatting,
 * adhering to variations of plural rules per locale.
 *
 * It uses `Intl.PluralRules` under the hood, providing a slot-based interface
 * for passing in different options.
 *
 * #### Simple Example, Singular/Plural
 * ```html
<intl-plural number="1">
  <span slot="one">dog</span>
  <span> dogs </span>
</intl-plural>
 ```
 * #### Complex Example, Ordinal
 * ```html
<intl-plural locale="en-US" type="ordinal" number="1">
  <span slot="one">st</span>
  <span slot="two">nd</span>
  <span slot="few">rd</span>
  <span>th</span>
</intl-plural>
 ```
 */
export declare class Plural {
    el: HTMLElement;
    formatter: Intl.PluralRules;
    result: string;
    /**
     * An integer value which will be passed to `Intl.PluralRules`
     *
     * If omitted, the componenet will automatically look for an integer value in the parent element,
     * like so:
     ```html
<div>
  42
  <intl-plural locale="en-US" type="ordinal">
    <span slot="one">st</span>
    <span slot="two">nd</span>
    <span slot="few">rd</span>
    <span>th</span>
  </intl-plural>
</div>
     ```
     */
    value: number | string;
    onValueChanged(): void;
    /**
     * The `localeMatcher` that will be passed to `Intl.PluralRules`
     *
     * Possible options are `best fit` (default) or `lookup`
     */
    localeMatcher?: 'lookup' | 'best fit';
    /**
     * The `type` that will be passed to `Intl.PluralRules`
     *
     * Possible options are `cardinal` (default) or `ordinal`
     */
    type?: 'cardinal' | 'ordinal';
    private _locale;
    /**
     * The `locale` that will be passed to `Intl.PluralRules`
     *
     * You may also pass in a comma-separated list of values, providing fallbacks
     */
    locale: string;
    langChanged(): void;
    componentWillLoad(): void;
    format(): Promise<void>;
    private setFormatter;
    render(): any;
}
