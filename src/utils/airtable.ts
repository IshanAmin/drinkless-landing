const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

interface WaitlistEntry {
  email: string;
  city: string;
  state: string;
  country: string;
  platform: string;
}

export const addToWaitlist = async (data: WaitlistEntry) => {
  const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/waitlist`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        Email: data.email,
        City: data.city,
        State: data.state,
        Country: data.country,
        Platform: data.platform
      }
    })
  });

  if (!response.ok) {
    throw new Error('Failed to add to waitlist');
  }

  return await response.json();
};