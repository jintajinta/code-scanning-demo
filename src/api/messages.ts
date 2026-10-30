import { db } from '../lib/db';

export async function listMessages(req: { params: { matchId: string } }) {
  return db.query('SELECT * FROM messages WHERE match_id = $1', [req.params.matchId]);
}
