export function Sealed(constructer: any) {
    Object.seal(constructer);
    Object.seal(constructer.prototype);
}
