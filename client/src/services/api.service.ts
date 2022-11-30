import { UnauthorizedError } from '../errors/unauthorized';
import { UserAlreadyExistsError } from '../errors/user-already-exists-error';
import { INVacations } from '../interface/vakations';


const API_URL = 'http://localhost:3001';

async function handleResponse(response: Response) {
  if (response.status === 401) {
    const data = await response.json();
    throw new UnauthorizedError(data.message);
  }
  if (response.status === 409) {
    const data = await response.json();
    throw new UserAlreadyExistsError(data.message);
  }
  if (response.status >= 400) {
    const data = await response.json();
    throw new Error(data.message);
  }
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
export async function login(username: string, password: string): Promise<void> {
  const response = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return await handleResponse(response);
}
export async function me(): Promise<{ username: string }> {
  const response = await fetch(`${API_URL}/user/me`, {
    method: 'GET',
    credentials: 'include',
  });
  return await handleResponse(response);
}
export async function register(username: string, password: string): Promise<void> {
  const response = await fetch(`${API_URL}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      username,
      password,
    }),
  });
  return await handleResponse(response);
}
export async function logout(): Promise<void> {
  await fetch(`${API_URL}/user/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
export async function getAllVacations(): Promise<INVacations[]> {
  const response = await fetch(`${API_URL}/vacations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return await handleResponse(response);
}

export async function getFollowVacations(): Promise<INVacations[]> {
  const response = await fetch(`${API_URL}/user/myvacation`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return await handleResponse(response);
}