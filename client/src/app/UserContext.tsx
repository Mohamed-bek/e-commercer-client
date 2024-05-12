import { create } from "zustand";

interface IUser {
  name: string;
  age: number;
}

interface UserStore {
  user: IUser | null;
  updateUser: (newUser: IUser | null) => void;
}

export const userStore = create<UserStore>((set) => ({
  user: null,
  updateUser: (newUser: IUser | null) => set({ user: newUser }),
}));
