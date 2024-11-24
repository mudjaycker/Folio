import { writable } from "svelte/store";
import Welcome from "../pages/Welcome.svelte";

const DEFAULT_PAGE = {
  name: "Welcome",
  href: "/welcome",
  component: Welcome,
  params: {},
};

export let current_page = writable(DEFAULT_PAGE);
