export default async function handler(request, response) {
  // 1. Get the secret URL from the server environment (Hidden from browser)
  const DB_URL = process.env.FIREBASE_SECRET_URL;

  if (!DB_URL) {
    return response.status(500).json({ error: 'Database configuration missing' });
  }

  // 2. Only allow POST requests (Sending data)
  if (request.method === 'POST') {
    try {
      const { email, date, source } = request.body;
      
      // 3. The Server talks to Firebase securely
      const firebaseResponse = await fetch(DB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, date, source })
      });

      if (firebaseResponse.ok) {
        return response.status(200).json({ message: 'Success' });
      } else {
        return response.status(500).json({ error: 'Firebase rejected the data' });
      }
    } catch (error) {
      return response.status(500).json({ error: 'Server connection failed' });
    }
  } else {
    // Block any other type of request
    return response.status(405).json({ message: 'Method Not Allowed' });
  }
}