export interface ICalculator {
    add(num: number):any;
    remove(num: number):any;
}

export const enum Operation {
    add,
    remove,
    multiply,
    divide
}
