import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Category } from './Category';

@Entity()
export class Book{

    @PrimaryGeneratedColumn({ name:'book_id' })
    private book_id: number;

    @Column({ name: 'title'})
    private title: string;

    @Column({ name: 'author' })
    private author: string;

    @ManyToMany(type => Category, category => category.books)
    @JoinTable({ name: 'book-categories',
      joinColumn: {
        name: 'book_id',
        referencedColumnName: 'book_id'
      },
      inverseJoinColumn: {
        name: 'category_name',
        referencedColumnName: 'category_name'
      }
    })
    categories: Category[]

    get getId(){
      return this.book_id;
    }

    get getTitle(){
      return this.title;
    }

    set setTitle(title: string){
      this.title = title;
    }

    get getAuthor(){
      return this.author;
    }

    set setAuthor(author: string){
      this.author = author;
    }

    get getCategories(){
      return this.categories;
    }

    set setCategories(categories: Category[]){
      this.categories = categories;
    }


    
}