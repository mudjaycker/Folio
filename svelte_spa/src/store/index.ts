import { writable } from "svelte/store";
import Welcome from "../pages/Welcome.svelte";
import type { Route } from "../types";

const welcome = {
  name: "Welcome",
  href: "/",
  component: Welcome,
  isStaticImport: true,
};
type DEFAULT_PAGE = typeof welcome;

export let current_page = writable<Route | DEFAULT_PAGE>(welcome);
export let entryStore = writable<string>();
