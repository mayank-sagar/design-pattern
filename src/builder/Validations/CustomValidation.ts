export abstract class CustomValidation<T> {
    private message:string = '' 

    constructor(message: string) {
        this.message = message 
    }
 
    getMessage(): string {
        return this.message
    }

    abstract validate(value:T): boolean
}