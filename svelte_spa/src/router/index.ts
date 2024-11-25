import router from "page";
import { current_page } from "../store";

type T_page = typeof import("../pages/Welcome.svelte");

interface Routes {
  name: string;
  href: string;
  component: Promise<T_page>;
  params: Object;
}

const routes: Routes[] = [
  {
    name: "Welcome",
    href: "/",
    component: import("../pages/Welcome.svelte"),
    params: {},
  },
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
