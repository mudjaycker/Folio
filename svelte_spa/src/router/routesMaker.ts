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
                    component: route.isStaticImport
                        ? route.component
                        //@ts-ignore
                        : (await route.component).default,
                      isStaticImport: route.isStaticImport
                })
            );
        });
        router.start();
    }
}
