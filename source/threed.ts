function create<T>(c: new(a: number) => T): T {
    return  new c(a);
}
