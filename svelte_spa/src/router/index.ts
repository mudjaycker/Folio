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
    name: "Presentation",
    href: "/presentation",
    component: import("../pages/Presentation.svelte"),
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
  {
    name: "Convertor",
    href: "/convertor",
    component: import("../pages/Convertor/Index.svelte"),
    params: {},
  },
  {
    name: "Ascii",
    href: "/ascii",
    component: import("../pages/Ascii.svelte"),
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
