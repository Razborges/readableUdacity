export const URL = 'http://localhost:3001';

export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'whatever-you-want'
}

export const takeError = (error) =>
  console.warn('ERROR: ' , error.statusText);
