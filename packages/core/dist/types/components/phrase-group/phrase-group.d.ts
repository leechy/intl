import '../../stencil.core';
export declare class PhraseGroup {
    element: HTMLElement;
    inGroup: boolean;
    name: string;
    componentWillLoad(): Promise<void>;
    private resolveName;
    render(): JSX.Element;
}
