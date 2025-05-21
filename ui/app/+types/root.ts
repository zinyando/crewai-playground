import type { LinksFunction as BaseLinksFunction } from "react-router";

export namespace Route {
  export type LinksFunction = BaseLinksFunction;
  export type ErrorBoundaryProps = {
    error: unknown;
  };
}
