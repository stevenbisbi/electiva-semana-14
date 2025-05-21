import { DataSource } from "typeorm";
import { Writer } from "../entities/Writer.entity";
import { Book } from "../entities/Book.entity";
export const AppDataSource = new DataSource({
  type: "sqlite", 
  database: "db.sqlite",
  synchronize: false, // Desactiva la sincronización
  logging: false,
  entities: [Writer, Book],
   extra: {
    // Esto activa el modo solo lectura en SQLite
    readonly: true
  }
});