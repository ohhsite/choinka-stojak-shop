import { create } from 'zustand';

interface AdminAuthStore {
  isAdmin: boolean;
  password: string;
  setAdmin: (isAdmin: boolean) => void;
  checkPassword: (input: string) => boolean;
}

export const useAdminAuth = create<AdminAuthStore>((set) => ({
  isAdmin: false,
  // Tutaj ustaw swoje hasło
  password: 'choinka2025', // To będzie twoje hasło do edycji
  setAdmin: (isAdmin) => set({ isAdmin }),
  checkPassword: (input) => input === 'choinka2025', // To samo hasło co wyżej
}));