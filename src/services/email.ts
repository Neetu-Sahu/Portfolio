const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export async function sendEmail(data: { name: string; email: string; message: string }) {
  if (!accessKey) {
    throw new Error('Web3Forms Access Key is not configured. Set VITE_WEB3FORMS_ACCESS_KEY in your .env file.');
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        message: data.message,
        from_name: 'Portfolio Contact Form',
        subject: `New Portfolio Message from ${data.name}`,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Failed to submit form to Web3Forms');
    }

    console.log('Email sent successfully:', result);
    return result;
  } catch (error: any) {
    console.error('Web3Forms Error:', error);
    throw new Error(error?.message || 'Failed to send email');
  }
}

