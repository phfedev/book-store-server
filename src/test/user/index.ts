import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "../../entity/User";

createConnection().then(async connection => {

    const user = new User();
    user.setName = 'Geremias';
    user.setEmail = 'geremias@mlkzika.com';
    user.setPassword = 'borabora';
    
    const user2 = new User();
    user2.setName = 'João';
    user2.setEmail = 'joao@batista.com';
    user2.setPassword = 'borabora';
    
    console.log(user);
    const rr = await connection.manager.save(user);
    
    console.log(user2);
    const rr2 = await connection.manager.save(user2);
    
    console.log(rr);
    const users = await connection.manager.find(User);
    console.log(users)

    const rrr = await connection.manager.remove(user);
    console.log(rrr)


}).catch(error => console.log(error));
