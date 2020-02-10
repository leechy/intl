export declare class Preload {
    element: HTMLElement;
    inGroup: boolean;
    didLoad: boolean;
    name: string;
    componentWillLoad(): Promise<void>;
    private onHoverIn;
    private onHoverOut;
    private resolveName;
    render(): any;
}
