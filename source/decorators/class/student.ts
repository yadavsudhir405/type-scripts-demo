type ConstructorFunction = new(...args: any[]) => any;

export function Student(options: {usn: string, college?: string}) {
    return function addProperty< T extends ConstructorFunction>(Base: T) {
        const {usn, college} = options;
        return class extends Base {
            public usn = usn;
            public college = college || "Nitte";
        };
    };
}
