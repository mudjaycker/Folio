import { RoutesMaker } from "./routesMaker";

const router = new RoutesMaker([
  {
    name: "Welcome",
    href: "/",
    component: import("../pages/Welcome.svelte"),
    params: {},
  },
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
]);

router.makeRoutes();
