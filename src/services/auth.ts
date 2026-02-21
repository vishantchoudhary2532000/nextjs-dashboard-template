export const authService = {
  async login(email: string, password: string):Promise<{ token: string, user: { name: string, email: string } }> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (email === 'admin@example.com' && password === 'password') {
      return { 
        token: process.env.NEXT_PUBLIC_MOCK_AUTH_TOKEN || 'mock-admin-token-xyz',
        user: { name: 'Admin User', email: 'admin@example.com' }
      };
    }
    throw new Error('Invalid email or password');
  },
  
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
    }
  },

  isAuthenticated() {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('auth_token');
    }
    return false;
  }
};
