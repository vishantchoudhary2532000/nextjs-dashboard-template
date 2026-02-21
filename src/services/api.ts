export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Global generic fetch wrapper simulating axios interceptors
export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...authHeader,
  };

  // Simulate network delay for realistic mock behavior
  await new Promise(resolve => setTimeout(resolve, 600));

  let res: Response;
  try {
    // We are mocking API entirely for now so we don't actually fetch HTTP endpoints,
    // but in a real app this would be:
    // res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, { ...options, headers: { ...defaultHeaders, ...options.headers } });
    throw new Error('intercepted');
  } catch {
    // Fallback error, the mock services will directly simulate responses
    throw new Error('API wrapper intended to be overridden with mocks');
  }
}
