import { writable } from "svelte/store";
import Welcome from "../pages/Welcome.svelte";

const welcome = {
  name: "Welcome",
  href: "/",
  component: Welcome,
  params: {},
};
type DEFAULT_PAGE = typeof welcome;

export let current_page = writable<DEFAULT_PAGE>(welcome);
export let entryStore = writable<string>();
