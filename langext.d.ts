
declare namespace langext {

    export interface NumberFormatSizeResult {

        "num": string;

        "unit": string;
    }

    export interface MatchSubGroup {
        "index": number;
        "value": string;
    }

    export interface MatchResultItem {
        "index": number;
        "value": string;
        "groups": MatchSubGroup[];
    }

}

interface String {

    /**
     * Prepend string to a string multi times, until reached 
     * the specific length.
     */
    leftPad(el: string, length: number): string;

    /**
     * Append string to a string multi times, until reached
     * the specific length.
     */
    rightPad(el: string, length: number): string;

    /**
     * Judge if a string is in format of E-Mail
     */
    isEMail() : boolean;

    /**
     * Judge if a string is in format of Hex
     */
    isHex() : boolean;

    /**
     * Judge if a string is in format of IP address version 4
     */
    isIPv4() : boolean;

    /**
     * Format data by this format into a string.
     */
    format(target: { [key: string]: string | number; }): string;

    /**
     * Replace all EOL into LF.
     */
    toEndLineOfLF(): string;

    /**
     * Replace all EOL into CR.
     */
    toEndLineOfCR(): string;

    /**
     * Replace all EOL into CRLF.
     */
    toEndLineOfCRLF(): string;
}

interface Array<T> {

    /**
     * Remove specific VALUE from an array by specific times.
     */
    remove(v: T, limit?: number): number;

    /**
     * Remove values of specific indexes.
     */
    removeByIndexes(indexes: number[]): number;
}

interface StringConstructor {

    /**
     * Format data by specific format into a string.
     */
    format(fmt: string, target: { [key: string]: string | number; }): string;

    /**
     * Create a random by specific length and seed.
     */
    random(length: number, seed?: string) : string;
}

interface Buffer {

    writeBuffer(bf: Buffer, pos: number, length?: number): number;

    read(pos: number, length: number): Buffer;
}

interface DateConstructor {

    /**
     * Get the unix timestamp of current time.
     */
    timeNow(): number;

    /**
     * Get the date string in format of yyyy-mm-dd hh:MM:ss
     * of current time.
     */
    dateNow(): string;
}

interface Date {

    /**
     * Get the date string in format of yyyy-mm-dd hh:MM:ss
     * of object.
     */
    getSimpleDate(): string;

    /**
     * Judge if a date is of leap year.
     */
    isLeapYear(): boolean;

    /**
     * Tells how many days in a month (0 ~ 11), in year of this date.
     */
    getDaysInMonth(month: number): number;

    /**
     * Get the Date object of the next month from this Date on.
     * @param remains      Remain the rest part, default to be true.
     */
    getNextMonth(remains?: boolean): Date;

    /**
     * Get the Date object of the next day from this Date on.
     * @param remains      Remain the rest part, default to be true.
     */
    getNextDay(remains?: boolean): Date;

    /**
     * Get the Date object of today of this Date.
     */
    getToday(): Date;
}

interface Number {

    /**
     * Format a number into size
     */
    formatSize (ac?: number) : langext.NumberFormatSizeResult;

    /**
     * Test if a number larger than a and lower than b
     */
    between(a: number, b: number): boolean;

    /**
     * Test if a number >= a and <= b
     */
    insides(a: number, b: number): boolean;
}

interface RegExp {

    /**
     * Return all matchable results, with the position of
     * all matched sub item.
     */
    matches(str: string): langext.MatchResultItem[];
}

interface RegExpConstructor {

    /**
     * Helps transfer the special charactors of RegExp into escaped
     * charactors. 
     */
    escape(str: string): string;
}

interface Console {

    isDebug: boolean;

    /**
     * Write data for debug.
     */
    debug(message?: any, ...optionalParams: any[]): void;
}
