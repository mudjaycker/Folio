import { writable } from "svelte/store";
import type { Component } from "svelte";
import Welcome from "../pages/Welcome.svelte";

interface DEFAULT_PAGE {
  name: string;
  href: string;
  component: Component;
  params: Object;
}

export let current_page = writable<DEFAULT_PAGE>({
  name: "Welcome",
  href: "/",
  component: Welcome,
  params: {},
});
