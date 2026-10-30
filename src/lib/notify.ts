const WEBHOOK_URL = 'https://hooks.example.com/services/DUMMY/DUMMY/DUMMY';

export async function notify(text: string) {
  await fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ text }) });
}
