export function Surname(surname: string) {
    // target is parent class
    return function(target: object , key: string) {
        // @ts-ignore
        let originalValue = target[key];
        const getter = () => {
            return originalValue;
        };

        const setter = (next: string) => {
            console.log("Adding surname");
            originalValue = `${surname} ${next}`;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            configurable: true,
            enumerable: true,
        });
    };
}
