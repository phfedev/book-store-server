import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

Entity()
export default class Book{

    @PrimaryGeneratedColumn({ name:'id' })
    private id: number;

    @Column({ name: 'title'})
    private title: string;

    @Column({ name: 'author' })
    private author: string;

    get getId(){
        return this.id;
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
    
}