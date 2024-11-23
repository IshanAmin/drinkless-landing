const BREVO_API_KEY = 'xsmtpsib-0bbb8e35bdd90134d18a399f083b82e3c47f8a46add8a9140bee8705077d4d8a-LSvbxHIzkwW8AD7f';
const BREVO_LIST_ID = 42;

export const addToWaitlist = async (
  email: string, 
  city: string, 
  state: string,
  country: string
) => {
  console.log('Attempting to add to waitlist:', { email, city, state, country });
  
  const payload = {
    email,
    attributes: {
      CITY: city,
      STATE: state,
      COUNTRY: country,
    },
    listIds: [BREVO_LIST_ID],
    updateEnabled: true,
  };
  
  console.log('Sending payload to Brevo:', payload);
  
  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  console.log('Brevo API Response Status:', response.status);
  
  if (!response.ok) {
    const errorData = await response.json();
    console.error('Brevo API Error Response:', errorData);
    throw new Error(errorData.message || 'Failed to add to waitlist');
  }

  const responseData = await response.json();
  console.log('Brevo API Success Response:', responseData);
  return responseData;
};