// (1) Works, but requires the use of `import()`.
declare interface Window {
    Rollbar?: import("rollbar");
}
// --

// (2) Works, but breaks the `app.vue` import in `index.ts`.
// import Rollbar from "rollbar";

// declare global {
//     interface Window {
//         Rollbar?: Rollbar;
//     }
// }
// --

declare module "*.vue" {
    import type {DefineComponent} from "vue";

    const component: DefineComponent<{}, {}, any>;

    export default component;
}
