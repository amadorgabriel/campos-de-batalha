export const corsConfig: {
  headers: Record<string, string>;
  fetchOptions: RequestInit;
} = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL || '*'}`,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Credentials': 'true',
  },

  fetchOptions: {
    mode: 'cors' as RequestMode,
  },
};
