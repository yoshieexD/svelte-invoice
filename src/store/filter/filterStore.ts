import { writable } from "svelte/store";
export const statuses = ["All", "Paid", "Pending", "Draft"];
export const newStatus = writable("All");

