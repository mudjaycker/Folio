export interface Component {
    default: __sveltets_2_IsomorphicComponent<
      Record<string, never>,
      { [evt: string]: CustomEvent<any> }
    >;
  }

  export type Route = {
    name: string;
    href: string;
    component: Promise<Component>;
    params: {};
  };