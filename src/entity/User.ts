import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({name:"id"})
    private id: number;

    @Column({name:"name"})
    private name: string;

    @Column({name:"email"})
    private email: string;

    @Column({name:"password"})
    private password: string;

    get getId(){
        return this.id;
    }

    get getName(){
        return this.name;
    }

    set setName(name: string){
        this.name = name;
    }

    get getEmail(){
        return this.email;
    }

    set setEmail(email: string){
        this.email = email;
    }

    get getPassword(){
        return this.password;
    }

    set setPassword(password: string){
        this.password = password;
    }




}
