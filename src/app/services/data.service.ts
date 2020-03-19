import { HttpClient } from '@angular/common/http';
import { JSONFormat } from '../common/_helpers/json-format.interface';


export class DataService {
    constructor(protected http: HttpClient, protected url: string) {

    }
    getAll() {
        // this.http.get<Post[]>('http://localhost:3016/posts/')
        return this.http.get(this.url);
    }
    create(data: JSONFormat) {
        return this.http.post(this.url, data);
    }
    delete(data: JSONFormat) {
        return this.http.delete(this.url + data.id);
    }
    update(data: JSONFormat) {
        return this.http.put(this.url + data.id, data);
    }
    // update(post: Post) {
    //   return this.http.patch(this.url + post.id, post);
    // }

}
