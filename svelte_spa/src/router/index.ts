import { RoutesMaker } from "./routesMaker";
import Welcome from "../pages/Welcome.svelte";

const router = new RoutesMaker([
  {
    name: "Welcome",
    href: "/",
    component: Welcome,
    isStaticImport: true,
  },
  {
    name: "Presentation",
    href: "/presentation",
    component: import("../pages/Presentation.svelte"),
    isStaticImport: false,
  },
  {
    name: "Clock",
    href: "/clock",
    component: import("../pages/Clock.svelte"),
    isStaticImport: false,
  },
  {
    name: "Calculator",
    href: "/calculator",
    component: import("../pages/Calculator.svelte"),
    isStaticImport: false,
  },
  {
    name: "Convertor",
    href: "/convertor",
    component: import("../pages/Convertor/Index.svelte"),
    isStaticImport: false,
  },
  {
    name: "Ascii",
    href: "/ascii",
    component: import("../pages/Ascii.svelte"),
    isStaticImport: false,
  },
  {
    name: "QR",
    href: "/qr",
    component: import("../pages/QR.svelte"),
    isStaticImport: false,
  },
]);

router.makeRoutes();
