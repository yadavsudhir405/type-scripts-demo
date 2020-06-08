export function Student(options: {usn: string, college?: string}) {
    return function addProperty< T extends new(...args: any[]) => {}>(constructor: T) {
        const {usn, college} = options;
        return class extends constructor {
            public usn = usn;
            public college = college || "Nitte";
        };
    };
}
