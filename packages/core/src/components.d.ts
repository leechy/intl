/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface IntlDictionary {
    'lang': string;
    'resolvePhrase': (name: string, lang?: string) => Promise<string | false>;
    'src': string;
  }
  interface IntlDictionaryAttributes extends StencilHTMLAttributes {
    'lang'?: string;
    'onIntlLocaleChange'?: (event: CustomEvent<string>) => void;
    'src'?: string;
  }

  interface IntlPhraseGroup {
    'name': string;
  }
  interface IntlPhraseGroupAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface IntlPhrase {
    'lang': string;
    'lazy': boolean;
    'name': string;
    'replace': string | { [key: string]: any };
  }
  interface IntlPhraseAttributes extends StencilHTMLAttributes {
    'lang'?: string;
    'lazy'?: boolean;
    'name'?: string;
    'replace'?: string | { [key: string]: any };
  }

  interface IntlPlural {
    'format': () => void;
    /**
    * The `locale` that will be passed to `Intl.PluralRules`  You may also pass in a comma-separated list of values, providing fallbacks
    */
    'lang': string;
    /**
    * The `localeMatcher` that will be passed to `Intl.PluralRules`   Possible options are `best fit` (default) or `lookup`
    */
    'localeMatcher'?: 'lookup' | 'best fit';
    /**
    * The `type` that will be passed to `Intl.PluralRules`  Possible options are `cardinal` (default) or `ordinal`
    */
    'type'?: 'cardinal' | 'ordinal';
    /**
    * An integer value which will be passed to `Intl.PluralRules`  If omitted, the componenet will automatically look for an integer value in the parent element, like so: ```html <div>   42   <intl-plural locale="en-US" type="ordinal">     <span slot="one">st</span>     <span slot="two">nd</span>     <span slot="few">rd</span>     <span>th</span>   </intl-plural> </div>      ```
    */
    'value': number|string;
  }
  interface IntlPluralAttributes extends StencilHTMLAttributes {
    /**
    * The `locale` that will be passed to `Intl.PluralRules`  You may also pass in a comma-separated list of values, providing fallbacks
    */
    'lang'?: string;
    /**
    * The `localeMatcher` that will be passed to `Intl.PluralRules`   Possible options are `best fit` (default) or `lookup`
    */
    'localeMatcher'?: 'lookup' | 'best fit';
    /**
    * The `type` that will be passed to `Intl.PluralRules`  Possible options are `cardinal` (default) or `ordinal`
    */
    'type'?: 'cardinal' | 'ordinal';
    /**
    * An integer value which will be passed to `Intl.PluralRules`  If omitted, the componenet will automatically look for an integer value in the parent element, like so: ```html <div>   42   <intl-plural locale="en-US" type="ordinal">     <span slot="one">st</span>     <span slot="two">nd</span>     <span slot="few">rd</span>     <span>th</span>   </intl-plural> </div>      ```
    */
    'value'?: number|string;
  }

  interface IntlPreload {
    'name': string;
  }
  interface IntlPreloadAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'IntlDictionary': Components.IntlDictionary;
    'IntlPhraseGroup': Components.IntlPhraseGroup;
    'IntlPhrase': Components.IntlPhrase;
    'IntlPlural': Components.IntlPlural;
    'IntlPreload': Components.IntlPreload;
  }

  interface StencilIntrinsicElements {
    'intl-dictionary': Components.IntlDictionaryAttributes;
    'intl-phrase-group': Components.IntlPhraseGroupAttributes;
    'intl-phrase': Components.IntlPhraseAttributes;
    'intl-plural': Components.IntlPluralAttributes;
    'intl-preload': Components.IntlPreloadAttributes;
  }


  interface HTMLIntlDictionaryElement extends Components.IntlDictionary, HTMLStencilElement {}
  var HTMLIntlDictionaryElement: {
    prototype: HTMLIntlDictionaryElement;
    new (): HTMLIntlDictionaryElement;
  };

  interface HTMLIntlPhraseGroupElement extends Components.IntlPhraseGroup, HTMLStencilElement {}
  var HTMLIntlPhraseGroupElement: {
    prototype: HTMLIntlPhraseGroupElement;
    new (): HTMLIntlPhraseGroupElement;
  };

  interface HTMLIntlPhraseElement extends Components.IntlPhrase, HTMLStencilElement {}
  var HTMLIntlPhraseElement: {
    prototype: HTMLIntlPhraseElement;
    new (): HTMLIntlPhraseElement;
  };

  interface HTMLIntlPluralElement extends Components.IntlPlural, HTMLStencilElement {}
  var HTMLIntlPluralElement: {
    prototype: HTMLIntlPluralElement;
    new (): HTMLIntlPluralElement;
  };

  interface HTMLIntlPreloadElement extends Components.IntlPreload, HTMLStencilElement {}
  var HTMLIntlPreloadElement: {
    prototype: HTMLIntlPreloadElement;
    new (): HTMLIntlPreloadElement;
  };

  interface HTMLElementTagNameMap {
    'intl-dictionary': HTMLIntlDictionaryElement
    'intl-phrase-group': HTMLIntlPhraseGroupElement
    'intl-phrase': HTMLIntlPhraseElement
    'intl-plural': HTMLIntlPluralElement
    'intl-preload': HTMLIntlPreloadElement
  }

  interface ElementTagNameMap {
    'intl-dictionary': HTMLIntlDictionaryElement;
    'intl-phrase-group': HTMLIntlPhraseGroupElement;
    'intl-phrase': HTMLIntlPhraseElement;
    'intl-plural': HTMLIntlPluralElement;
    'intl-preload': HTMLIntlPreloadElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
