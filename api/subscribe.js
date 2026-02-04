export default async function handler(request, response) {
  const DB_URL = process.env.FIREBASE_SECRET_URL;

  if (!DB_URL) {
    return response.status(500).json({ error: 'Database URL not configured in Vercel' });
  }

  if (request.method === 'POST') {
    try {
      // Ensure body is parsed if it arrives as a string
      const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
      const { email, date, source } = body;

      if (!email) {
        return response.status(400).json({ error: 'Email is required' });
      }

      const firebaseResponse = await fetch(DB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, date, source })
      });

      if (firebaseResponse.ok) {
        return response.status(200).json({ message: 'Success' });
      } else {
        const errorText = await firebaseResponse.text();
        return response.status(500).json({ error: 'Firebase rejected data', details: errorText });
      }
    } catch (error) {
      return response.status(500).json({ error: 'Server internal error', message: error.message });
    }
  } else {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }
}
