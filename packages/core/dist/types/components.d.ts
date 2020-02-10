/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  IntlChange,
} from './declarations';

export namespace Components {
  interface IntlDictionary {
    'default': string;
    'dir': string;
    'locale': string;
    'locales': string[];
    'resolvePhrase': (name: string, locale?: string) => Promise<string | false>;
    'src': string;
  }
  interface IntlPhrase {
    'lazy': boolean;
    'locale': string;
    'name': string;
    'replace': string | { [key: string]: any };
  }
  interface IntlPhraseGroup {
    'name': string;
  }
  interface IntlPlural {
    'format': () => Promise<void>;
    /**
    * The `locale` that will be passed to `Intl.PluralRules`  You may also pass in a comma-separated list of values, providing fallbacks
    */
    'locale': string;
    /**
    * The `localeMatcher` that will be passed to `Intl.PluralRules`   Possible options are `best fit` (default) or `lookup`
    */
    'localeMatcher'?: 'lookup' | 'best fit';
    /**
    * The `type` that will be passed to `Intl.PluralRules`  Possible options are `cardinal` (default) or `ordinal`
    */
    'type'?: 'cardinal' | 'ordinal';
    /**
    * An integer value which will be passed to `Intl.PluralRules`  If omitted, the componenet will automatically look for an integer value in the parent element, like so: ```html <div> 42 <intl-plural locale="en-US" type="ordinal"> <span slot="one">st</span> <span slot="two">nd</span> <span slot="few">rd</span> <span>th</span> </intl-plural> </div> ```
    */
    'value': number|string;
  }
  interface IntlPreload {
    'name': string;
  }
}

declare global {


  interface HTMLIntlDictionaryElement extends Components.IntlDictionary, HTMLStencilElement {}
  var HTMLIntlDictionaryElement: {
    prototype: HTMLIntlDictionaryElement;
    new (): HTMLIntlDictionaryElement;
  };

  interface HTMLIntlPhraseElement extends Components.IntlPhrase, HTMLStencilElement {}
  var HTMLIntlPhraseElement: {
    prototype: HTMLIntlPhraseElement;
    new (): HTMLIntlPhraseElement;
  };

  interface HTMLIntlPhraseGroupElement extends Components.IntlPhraseGroup, HTMLStencilElement {}
  var HTMLIntlPhraseGroupElement: {
    prototype: HTMLIntlPhraseGroupElement;
    new (): HTMLIntlPhraseGroupElement;
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
    'intl-dictionary': HTMLIntlDictionaryElement;
    'intl-phrase': HTMLIntlPhraseElement;
    'intl-phrase-group': HTMLIntlPhraseGroupElement;
    'intl-plural': HTMLIntlPluralElement;
    'intl-preload': HTMLIntlPreloadElement;
  }
}

declare namespace LocalJSX {
  interface IntlDictionary {
    'default'?: string;
    'dir'?: string;
    'locale'?: string;
    'locales'?: string[];
    'onIntlChange'?: (event: CustomEvent<IntlChange>) => void;
    'src'?: string;
  }
  interface IntlPhrase {
    'lazy'?: boolean;
    'locale'?: string;
    'name'?: string;
    'replace'?: string | { [key: string]: any };
  }
  interface IntlPhraseGroup {
    'name'?: string;
  }
  interface IntlPlural {
    /**
    * The `locale` that will be passed to `Intl.PluralRules`  You may also pass in a comma-separated list of values, providing fallbacks
    */
    'locale'?: string;
    /**
    * The `localeMatcher` that will be passed to `Intl.PluralRules`   Possible options are `best fit` (default) or `lookup`
    */
    'localeMatcher'?: 'lookup' | 'best fit';
    /**
    * The `type` that will be passed to `Intl.PluralRules`  Possible options are `cardinal` (default) or `ordinal`
    */
    'type'?: 'cardinal' | 'ordinal';
    /**
    * An integer value which will be passed to `Intl.PluralRules`  If omitted, the componenet will automatically look for an integer value in the parent element, like so: ```html <div> 42 <intl-plural locale="en-US" type="ordinal"> <span slot="one">st</span> <span slot="two">nd</span> <span slot="few">rd</span> <span>th</span> </intl-plural> </div> ```
    */
    'value'?: number|string;
  }
  interface IntlPreload {
    'name'?: string;
  }

  interface IntrinsicElements {
    'intl-dictionary': IntlDictionary;
    'intl-phrase': IntlPhrase;
    'intl-phrase-group': IntlPhraseGroup;
    'intl-plural': IntlPlural;
    'intl-preload': IntlPreload;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'intl-dictionary': LocalJSX.IntlDictionary & JSXBase.HTMLAttributes<HTMLIntlDictionaryElement>;
      'intl-phrase': LocalJSX.IntlPhrase & JSXBase.HTMLAttributes<HTMLIntlPhraseElement>;
      'intl-phrase-group': LocalJSX.IntlPhraseGroup & JSXBase.HTMLAttributes<HTMLIntlPhraseGroupElement>;
      'intl-plural': LocalJSX.IntlPlural & JSXBase.HTMLAttributes<HTMLIntlPluralElement>;
      'intl-preload': LocalJSX.IntlPreload & JSXBase.HTMLAttributes<HTMLIntlPreloadElement>;
    }
  }
}


