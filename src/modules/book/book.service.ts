import { Injectable } from '@nestjs/common';

@Injectable()
export class Book {
    getOne(): any {
        return {
            title: 'TANAKA FIRST BOOK',
            author: { name: "tanaka", age: 12 }
        };
    }
}
