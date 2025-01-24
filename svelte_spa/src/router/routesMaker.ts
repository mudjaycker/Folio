/* -------------------------------------------------------------------------- */
/*                                 RoutesMaker                                */
/* -------------------------------------------------------------------------- */
import router from "page";
import { current_page } from "../store";
import type { Route } from "../types";

export class RoutesMaker {
  constructor(public routes: Route[]) {
    this.routes = routes;
  }

  makeRoutes() {
    this.routes.forEach((route) => {
      router(route.href, async () =>
        current_page.set({
          name: route.name,
          href: route.href,
          component: (await route.component).default,
          params: route.params,
        })
      );
    });
    router.start();
  }
}
