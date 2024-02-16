type Key = string | number | symbol;

type ObjectWithConstValues<T extends { [key in Key]: unknown }> = {
    readonly [K in keyof T]: T[K];
};

export const makeTypesFromObject = <T extends { [key in Key]: unknown }>(inputObject: T): ObjectWithConstValues<T> => {
    const outputObject: any = {};

    Object.keys(inputObject).forEach(key => {
        outputObject[key] = inputObject[key];
    });

    return outputObject as ObjectWithConstValues<T>;
}