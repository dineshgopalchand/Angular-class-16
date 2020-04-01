export class AppError {
    constructor(error?: Response) {
        if (error) {
            console.log(error);
            // call the error loggin service
        }

    }
}
