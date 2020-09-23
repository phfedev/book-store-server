import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

Entity()
export default class Book{

    @PrimaryGeneratedColumn({ name:'id' })
    private id: number;

    @Column({ name: 'title'})
    private title: string;

    get getId(){
        return this.id;
    }

    get getTitle(){
        return this.title
    }
    
}