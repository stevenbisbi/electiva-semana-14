import { DataSource } from "typeorm";
import { Writer } from "../entities/Writer.entity";
import { Book } from "../entities/Book.entity";
import path from 'path';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(__dirname, '../../db.sqlite'),
  synchronize: false,
  logging: false,
  entities: [Writer, Book],
  extra: {
    readonly: true
  }
});

