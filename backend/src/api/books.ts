import { VercelRequest, VercelResponse } from '@vercel/node';
import { AppDataSource } from '../config/database';
import { BookService } from '../services/Book.service';

let initialized = false;
const bookService = new BookService();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (!initialized) {
      await AppDataSource.initialize();
      initialized = true;
    }

    if (req.method === 'GET') {
      const books = await bookService.getAllBooks();
      return res.status(200).json(books);
    }

    if (req.method === 'POST') {
      const book = await bookService.createBook(req.body);
      return res.status(201).json(book);
    }

    if (req.method === 'PUT') {
      const bookId = Number(req.query.id);
      const writerId = req.body.writerId;
      if (!bookId || !writerId) {
        return res.status(400).json({ message: 'Missing bookId or writerId' });
      }
      const updated = await bookService.updateBookAuthor(bookId, writerId);
      return res.status(200).json(updated);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}
