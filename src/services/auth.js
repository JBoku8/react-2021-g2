export const login = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (err) {
    console.trace(err);
  }
};

export const register = async (credentials) => {
  try {
    console.warn('[REGISTER] NOT IMPLEMENTED');
    return credentials;
  } catch (err) {
    console.trace(err);
  }
};
