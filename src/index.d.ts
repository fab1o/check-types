//#region Check
type NegationFunction = (val: any) => boolean;

type MaybeFunction = <T>(val: T) => boolean | T;

interface AssertFunction extends ICheck {
    <T>(
        possibleFalsy: T,
        message?: string,
        errorType?: { new (...args: any[]): any }
    ): T;
}

interface ICheck {
    /* General predicates */
    equal(a: any, b: any): a is typeof b;
    null(a: any): a is null;
    undefined(a: any): a is undefined;
    assigned(a: any): boolean;
    primitive(
        a: any
    ): a is number | string | boolean | null | undefined | symbol;

    hasLength(a: any, length: number): a is string | any[];

    /* String predicates */
    string(a: any): a is string;
    emptyString(a: any): a is '';
    nonEmptyString(a: any): a is string;
    match(a: any, b: RegExp): a is string;

    /* Number predicates */
    number(a: any): a is number;
    zero(a: any): a is 0;
    integer(a: any): a is number;
    greater(a: any, greaterThan: number): a is number;
    greaterOrEqual(a: any, greaterOrEqual: number): a is number;
    less(a: any, lessThan: number): a is number;
    lessOrEqual(a: any, lessOrEqual: number): a is number;
    between(a: any, b: number, c: number): a is number;
    inRange(a: any, b: number, c: number): a is number;
    positive(a: any): a is number;
    negative(a: any): a is number;
    odd(a: any): a is number;
    even(a: any): a is number;
    nan(a: any): a is number;
    infinity(a: any): a is typeof Infinity;

    arrayBuffer(a: any): a is ArrayBuffer;
    arrayBufferView(
        a: any
    ): a is
        | Int8Array
        | Uint8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array
        | Float64Array
        | BigInt64Array
        | BigUint64Array
        | DataView;

    /* Boolean predicates */
    boolean(a: any): a is true | false;

    /* Object predicates */
    object(a: any): a is object;
    // this is boolean because const empty objects can still be modified
    emptyObject(a: any): a is {};
    nonEmptyObject(a: any): boolean;

    in<T extends object | string | any[]>(value: any, data: T): boolean;
    keyIn<T extends object | string | any[]>(key: any, data: T): key is keyof T;

    contains<T extends object | string | any[]>(data: T, value: any): boolean;
    containsKey<T extends object | string | any[]>(
        data: T,
        key: any
    ): key is keyof T;

    thenable<T extends object>(obj?: any): obj is Promise<T>;

    instanceStrict<T extends Function>(a: any, prototype: T): a is T;
    instance<T extends Function>(a: any, prototype: T): a is T;
    like<T extends object>(a: any, duck: T): a is object;

    /* Array predicates */
    array(a: any): a is any[];
    // this is boolean because const empty arrays can still be modified
    emptyArray(a: any): a is [];
    nonEmptyArray(a: any): boolean;

    arrayLike(a: any): a is [] | string;
    iterable<T extends object | string | any[]>(a: any): a is Iterable<T>;

    /* Date predicates */
    date(a: any): a is Date;

    /* Function predicates */
    function(a: any): a is Function;
    throws(a: any): a is Function;

    /* Modifiers (some of them in their respected sections) */
    not: ICheck & NegationFunction;
    maybe: ICheck & MaybeFunction;
    assert: AssertFunction;

    /* Batch operations */
    apply<T>(arr: any[], predicate: (...args: any[]) => T): T[];

    map<T extends { [k: string]: any }>(
        arr: T,
        predicates: Partial<{ [k in keyof T]: (...args: any[]) => boolean }>
    ): Partial<{ [k in keyof T]: any }>;

    all(arr: boolean[] | { [k: string]: boolean }): boolean;

    any(arr: boolean[] | { [k: string]: boolean }): boolean;
}

export const Check: ICheck;
//#endregion
