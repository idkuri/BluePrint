import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { promises as fs } from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// --- CORS configuration ---
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://gradient.idkuri.com'
  ],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// --- Log every request ---
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
});

// --- Basic route ---
app.get('/', (req, res) => {
  res.send({ message: 'Hello from Express API!' });
});

// --- Get events from events.json ---
app.get('/events/', async (req, res) => {
  try {
    const eventsPath = path.join(process.cwd(), 'events.json');
    const data = await fs.readFile(eventsPath, 'utf8');
    const events = JSON.parse(data);
    res.json(events);
  } catch (err) {
    console.error('Error reading events.json:', err);
    if (err.code === 'ENOENT') {
      return res.status(404).json({ error: 'Events file not found' });
    }
    res.status(500).json({ error: 'Failed to read events' });
  }
});

// --- Serve speaker pictures ---
app.get('/speaker_pictures/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const safeName = path.basename(filename);
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const ext = path.extname(safeName).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }

    const filePath = path.join(process.cwd(), 'speaker_pictures', safeName);
    await fs.access(filePath);
    res.sendFile(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return res.status(404).json({ error: 'File not found' });
    }
    console.error('Error serving speaker picture:', err);
    res.status(500).json({ error: 'Failed to serve file' });
  }
});

// --- Serve event pictures ---
app.get('/event_pictures/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const safeName = path.basename(filename);
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const ext = path.extname(safeName).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }

    const filePath = path.join(process.cwd(), 'event_pictures', safeName);
    await fs.access(filePath);
    res.sendFile(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return res.status(404).json({ error: 'File not found' });
    }
    console.error('Error serving event picture:', err);
    res.status(500).json({ error: 'Failed to serve file' });
  }
});

// --- Start server ---
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
