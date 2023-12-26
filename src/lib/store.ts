import { writable } from "svelte/store";

export const hide = writable(false);
export const token = writable<string | null>(null);
export const loggedIn = writable(false);
