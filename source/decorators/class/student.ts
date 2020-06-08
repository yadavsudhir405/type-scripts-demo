export function Student(options: {usn: string, college?: string}) {
    return function addProperty< T extends new(...args: any[]) => {}>(constructer: T) {
        const {usn, college} = options;
        return class extends constructer {
            public usn = usn;
            public college = college || "Nitte";
        };
    };
}
