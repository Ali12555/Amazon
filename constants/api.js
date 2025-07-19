const baseUrl="https://amazon-server-jofi.onrender.com";

// General API request handler
export const fetchApi = async (route, method, body) => {
  const url = baseUrl + route;
  try {
    const response = await fetch(url, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    });

    return await response.json();
  } catch (error) {
    console.error('fetch Error', error.message);
    throw error; // Rethrow the error to handle it in the component
  }
};
export const Login = async (body) => {
  const url = "/login";
  return await fetchApi(url, 'POST', body);
};
export const createUser = async (body) => {
    const url = "/createUser";
    return await fetchApi(url, 'POST', body);
  };
