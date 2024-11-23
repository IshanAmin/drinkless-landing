const BREVO_API_KEY = 'xsmtpsib-0bbb8e35bdd90134d18a399f083b82e3c47f8a46add8a9140bee8705077d4d8a-LSvbxHIzkwW8AD7f';
const BREVO_LIST_ID = 42;

export const addToWaitlist = async (
  email: string, 
  city: string, 
  state: string,
  country: string
) => {
  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      email,
      attributes: {
        CITY: city,
        STATE: state,
        COUNTRY: country,
      },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Brevo API Error:', errorData);
    throw new Error(errorData.message || 'Failed to add to waitlist');
  }

  return await response.json();
};