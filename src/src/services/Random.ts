
export class Random {

    public static between(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}