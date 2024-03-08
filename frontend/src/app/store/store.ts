import { create } from "zustand";

type State = {
	firstName: string;
	lastName: string;
};

type Action = {
	updateFirstName: (firstName: State["firstName"]) => void;
	updateLastName: (lastName: State["lastName"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
	firstName: "",
	lastName: "",
	updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
	updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

interface Name {
	name: State;
	updateName: (name: State["firstName"]) => void;
}

export const useOtherNameStore = create<Name>((set) => ({
	name: {
		firstName: "",
		lastName: "",
	},
	updateName: (name) =>
		set((state) => ({ ...state, name: { ...state.name, firstName: name } })),
}));
