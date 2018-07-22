interface PrintLabel {
    readonly  label: string;
    readonly color?: string;
    [propName:string]: any;
}

export { PrintLabel as default }