import Airtable from 'airtable';

// Check if environment variables are set
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
  console.warn('Airtable environment variables are not set. Form submissions will be logged to console only.');
}

// Initialize Airtable if credentials are available
const base = AIRTABLE_TOKEN && AIRTABLE_BASE_ID 
  ? new Airtable({apiKey: AIRTABLE_TOKEN}).base(AIRTABLE_BASE_ID)
  : null;

export const addToWaitlist = async (data: {
  email: string;
  city: string;
  state: string;
  country: string;
}) => {
  // If Airtable is not configured, log the submission
  if (!base) {
    console.log('Form submission (Airtable not configured):', data);
    return null;
  }

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