export default class Memo {
    key: string
    title: string
    date: Date
    body: string

    constructor(key: string, title: string, date: Date, body: string) { 
        this.key = key;
        this.title = title;
        this.date = date;
        this.body = body;
    }

    toString(): string {
        return JSON.stringify(this)
    }
}