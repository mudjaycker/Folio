import router from "page";
import { current_page } from "../store";

const WELCOME_ROUTE = {
  name: "Welcome",
  href: "/",
  component: import("../pages/Welcome.svelte"),
  params: {},
};
type Route = typeof WELCOME_ROUTE;

const routes: Route[] = [
  WELCOME_ROUTE,
  {
    name: "Page 1",
    href: "/page-1",
    component: import("../pages/Page1.svelte"),
    params: {},
  },
  {
    name: "Clock",
    href: "/clock",
    component: import("../pages/Clock.svelte"),
    params: {},
  },
  {
    name: "Calculator",
    href: "/calculator",
    component: import("../pages/Calculator.svelte"),
    params: {},
  },
];

for (let route of routes) {
  router(route.href, async () =>
    current_page.set({
      name: route.name,
      href: route.href,
      component: (await route.component)?.default,
      params: route.params,
    })
  );
}

router.start();
