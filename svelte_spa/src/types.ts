import type Welcome from "./pages/Welcome.svelte";

export interface Component {
    default: __sveltets_2_IsomorphicComponent<
      Record<string, never>,
      { [evt: string]: CustomEvent<any> }
    >;
  }

  type WelcomeType = typeof Welcome

  export type Route = {
    name: string;
    href: string;
    component: Promise<Component> | WelcomeType,
    isStaticImport: boolean;
  };