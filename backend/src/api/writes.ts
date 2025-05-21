import { VercelRequest, VercelResponse } from '@vercel/node';
import { AppDataSource } from '../config/database';
import { WriterService } from '../services/Writer.service';

let initialized = false;
const writerService = new WriterService();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!initialized) {
    await AppDataSource.initialize();
    initialized = true;
  }

  if (req.method === 'GET') {
    const writers = await writerService.getAllWriters();
    return res.status(200).json(writers);
  }

  if (req.method === 'POST') {
    try {
      const writer = await writerService.createWriter(req.body);
      return res.status(201).json(writer);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
