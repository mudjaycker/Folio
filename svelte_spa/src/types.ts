import type Welcome from "./pages/Welcome.svelte";
    import { type QRConfig } from "../node_modules/@svelte-put/qr/src/qr/types.public";


export interface Component {
    default: __sveltets_2_IsomorphicComponent<
        Record<string, never>,
        { [evt: string]: CustomEvent<any> }
    >;
}

type WelcomeType = typeof Welcome;

export type Route = {
    name: string;
    href: string;
    component: Promise<Component> | WelcomeType;
    isStaticImport: boolean;
};

 type SizeAttributes = {
    width: number;
    height: number;
};

export type QrConfigParams = QRConfig & Partial<SizeAttributes>