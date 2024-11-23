import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({apiKey: import.meta.env.VITE_AIRTABLE_API_KEY})
  .base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export const addToWaitlist = async (data: {
  email: string;
  city: string;
  state: string;
  country: string;
}) => {
  try {
    const record = await base('Waitlist').create([
      {
        fields: {
          Email: data.email,
          City: data.city,
          State: data.state,
          Country: data.country,
        }
      }
    ]);
    return record;
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    throw error;
  }
};