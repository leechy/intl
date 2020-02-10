import { a as patchEsm, b as bootstrapLazy } from './core-5c47e8bc.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["intl-dictionary",[[1,"intl-dictionary",{"src":[1],"locale":[1025],"dir":[1025],"global":[32],"resolvePhrase":[64]}]]],["intl-phrase",[[0,"intl-phrase",{"locale":[1025],"lazy":[4],"name":[1],"replace":[1],"inGroup":[32],"replacements":[32],"value":[32],"error":[32],"resolvedName":[32]},[[4,"intlChange","langChangeHandler"]]]]],["intl-phrase-group",[[4,"intl-phrase-group",{"name":[1025],"inGroup":[32]}]]],["intl-plural",[[4,"intl-plural",{"value":[1032],"localeMatcher":[1,"locale-matcher"],"type":[1],"locale":[1],"formatter":[32],"result":[32],"format":[64]}]]],["intl-preload",[[4,"intl-preload",{"name":[1025],"inGroup":[32],"didLoad":[32]}]]]], options);
  });
};

export { defineCustomElements };
