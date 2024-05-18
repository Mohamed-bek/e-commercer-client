"use client";
import { IProduct } from "@/components/SmallCard";
import { create } from "zustand";
import { IUser } from "./layout";

const storedUserData =
  typeof window !== "undefined" ? window.localStorage.getItem("user") : null;
const initialUserState = storedUserData ? JSON.parse(storedUserData) : {};

export const userStore = create((set) => ({
  user: initialUserState,
  updateUser: (newUser: IUser | null) => {
    set({ user: newUser });
    if (typeof window !== "undefined") {
      if (newUser) {
        window.localStorage.setItem("user", JSON.stringify(newUser));
      } else {
        window.localStorage.removeItem("user");
      }
    }
  },
}));

interface IOrder {
  product: IProduct;
  quantity: number;
}

interface CartState {
  cart: IOrder[];
  addToCart: (newOrder: IOrder) => void;
  SubFromCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  getTotalPrice: () => number;
}

export const cartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (newOrder: IOrder) =>
    set((state) => {
      const existingOrderIndex = state.cart.findIndex(
        (order) => order.product._id === newOrder.product._id
      );
      if (existingOrderIndex !== -1) {
        const updatedCart = state.cart.map((order, index) =>
          index === existingOrderIndex
            ? { ...order, quantity: order.quantity + newOrder.quantity }
            : order
        );
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, newOrder] };
      }
    }),

  SubFromCart: (productId: string) =>
    set((state) => {
      const existingOrderIndex = state.cart.findIndex(
        (order) => order.product._id === productId
      );
      if (existingOrderIndex !== -1) {
        const updatedCart = state.cart
          .map((order, index) =>
            index === existingOrderIndex
              ? { ...order, quantity: order.quantity - 1 }
              : order
          )
          .filter((order) => order.quantity > 0);
        return { cart: updatedCart };
      }
      return state;
    }),

  removeFromCart: (productId: string) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (order) => order.product._id !== productId
      );
      return { cart: updatedCart };
    }),
  getTotalPrice: () => {
    const state: any = cartStore.getState();
    return state.cart.reduce(
      (total: any, order: any) => total + order.product.price * order.quantity,
      0
    );
  },
}));
