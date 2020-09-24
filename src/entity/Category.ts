import { type } from "os";
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Book } from "./Book";


@Entity()
export class Category{

    @PrimaryColumn({name: 'category_name'})
    private category_name: string;

    @ManyToMany(type => Book, book => book.categories)
    books: Book[];

    get getName(){
        return this.category_name;
    }

    set setName(name: string){
        this.category_name = name;
    }

    get getBooks(){
        return this.books
    }

    set setBooks(books: Book[]){
        this.books = books
    }

}