export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User';
  status: 'Active' | 'Inactive';
  lastLogin: string;
}

const MOCK_USERS: User[] = Array.from({ length: 45 }).map((_, i) => ({
  id: `usr_${1000 + i}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 5 === 0 ? 'Admin' : 'User',
  status: i % 8 === 0 ? 'Inactive' : 'Active',
  lastLogin: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString()
}));

export const usersService = {
  async getUsers(page: number, limit: number): Promise<{ data: User[], total: number }> {
    await new Promise(resolve => setTimeout(resolve, 800)); // Network delay
    
    const start = (page - 1) * limit;
    const end = start + limit;
    
    return {
      data: MOCK_USERS.slice(start, end),
      total: MOCK_USERS.length
    };
  },

  async deleteUser(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const idx = MOCK_USERS.findIndex(u => u.id === id);
    if (idx !== -1) MOCK_USERS.splice(idx, 1);
  },

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const user = MOCK_USERS.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    Object.assign(user, updates);
    return user;
  }
};
