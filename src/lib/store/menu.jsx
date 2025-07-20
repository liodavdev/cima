import { create } from 'zustand';

export const useMenuStore = create((set) => ({
	menuIsOpen: false,

	handleMenuStatus: ({ bool }) => set(() => ({ menuIsOpen: bool })),
}));
