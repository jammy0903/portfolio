import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  await sql`CREATE TABLE IF NOT EXISTS topcit_progress (
    concept_key TEXT PRIMARY KEY,
    completed_at TIMESTAMPTZ DEFAULT NOW()
  )`;

  if (req.method === 'GET') {
    const rows = await sql`SELECT concept_key FROM topcit_progress`;
    return res.json(rows.map(r => r.concept_key));
  }

  if (req.method === 'POST') {
    const { key, done } = req.body;
    if (!key) return res.status(400).json({ error: 'key required' });
    if (done) {
      await sql`INSERT INTO topcit_progress (concept_key) VALUES (${key}) ON CONFLICT DO NOTHING`;
    } else {
      await sql`DELETE FROM topcit_progress WHERE concept_key = ${key}`;
    }
    return res.json({ ok: true });
  }

  res.status(405).end();
}
