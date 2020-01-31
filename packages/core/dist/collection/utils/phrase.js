export async function phrase(name) {
    return document
        .querySelector('intl-dictionary').componentOnReady()
        .then(dict => dict.resolvePhrase(name))
        .then(x => x ? x : null);
}
;
