import { AppError } from './app-error'

export class NotFoundErrors extends AppError {
    constructor(error: Response) {
        super();
    }

}