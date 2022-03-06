import { Injectable } from '@nestjs/common';

@Injectable()
export class Author {
    getOne(): any {
        return { name: 'tanaka', age: 12 };
    }
}
