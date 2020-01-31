
// intl: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './intl.core.js';
import {
  Dictionary,
  Phrase,
  PhraseGroup,
  Plural,
  Preload
} from './intl.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    Dictionary,
    Phrase,
    PhraseGroup,
    Plural,
    Preload
  ], opts);
}
