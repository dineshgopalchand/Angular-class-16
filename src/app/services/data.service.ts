import { HttpClient } from '@angular/common/http';
import { JSONFormat } from '../common/_helpers/json-format.interface';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundErrors } from '../common/errors/not-found-error';
import { BadInputError } from '../common/errors/bad-input-error';
import { AppError } from '../common/errors/app-error';


export class DataService {
    constructor(protected http: HttpClient, protected url: string) {

    }
    getAll() {
        // this.http.get<Post[]>('http://localhost:3016/posts/')
        return this.http.get(this.url)
            .pipe(catchError(this.errorHandler));
    }
    create(data: JSONFormat) {
        return this.http.post(this.url, data)
            .pipe(catchError(this.errorHandler));
    }
    delete(data: JSONFormat) {
        return this.http.delete(this.url + data.id)
            .pipe(catchError(this.errorHandler));
    }
    update(data: JSONFormat) {
        return this.http.put(this.url + data.id, data)
            .pipe(catchError(this.errorHandler));
    }
    // update(post: Post) {
    //   return this.http.patch(this.url + post.id, post);
    // }

    protected errorHandler = (error: Response) => {
        if (error.status === 404) {
            return throwError(new NotFoundErrors(error));
        } else if (error.status === 400) {
            return throwError(new BadInputError(error));
        }
        return throwError(new AppError(error));
    }

}
