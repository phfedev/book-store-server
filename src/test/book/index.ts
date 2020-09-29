import 'reflect-metadata';
import {createConnection} from 'typeorm';
import { Book } from '../../entity/Book';
import { Category } from '../../entity/Category';
import {User} from '../../entity/User';

createConnection().then(async connection => {

  const book = new Book();
  const category = new Category();

  book.setAuthor = 'Ernest Cline';
  book.setTitle = 'Ready Player One';

  category.setName = 'Action';

  book.setCategories= [category];

  await connection.manager.save(category);
  await connection.manager.save(book);

  const books = await connection.manager.find(Book);
  console.log(books);

  const newBook = await connection.getRepository(Book).findOne(book.getId, { relations: ['categories'] });
  console.log(newBook);

  const nBook = new Book();
  nBook.setTitle = 'Armada';
  const newBookEdited = await connection.getRepository(Book).merge(book, nBook);
  await connection.manager.save(newBookEdited);
  console.log(newBookEdited);

}).catch(error => console.log(error));
