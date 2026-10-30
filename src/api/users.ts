import { db } from '../lib/db';

export async function getUser(req: { params: { id: string } }) {
  const row = await db.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
  return row;
}

export async function updateUser(req: { params: { id: string }; body: Record<string, unknown> }) {
  return db.update('users', req.params.id, req.body);
}
