import * as d from './declarations';

interface Route {
    locales: string[];
    srcDir: string;
    name: string;
}

const schematic: d.Schematic<Route> = {
    name: 'route',
    actions: (opts) => (
        [
            {
                type: 'create',
                path: [opts.srcDir, opts.name],
                dir: true
            },
            ...opts.locales.map((locale): d.CreateAction => ({
                type: 'create',
                path: [opts.srcDir, opts.name, `${locale}.json`],
                file: true,
                sourceText: '{ }'
            })),
            {
                type: 'json-update',
                path: [opts.srcDir, 'index.json'],
                data: {
                    [opts.name]: {
                        lazy: true,
                        url: `/${opts.name}/:locale.json`
                    }
                }
            }
        ]
    )
}

export default schematic;