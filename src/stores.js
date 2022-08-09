import { writable } from "svelte/store";

export const noteIndex = writable(0);
export const noteTitle = writable("");
export const noteDescription = writable("");
export const noteColor = writable("");
export const noteDate = writable("");
export const noteTags = writable([]);
export const notes = writable(JSON.parse(localStorage.getItem("notes")) || []);
