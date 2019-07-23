import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Store
} from "redux";
import { connectRoutes } from "redux-first-router";
import routes from "./routes";

const reduxFirstRouter = connectRoutes(routes, {});

const reducer = combineReducers({
  location: reduxFirstRouter.reducer,
});

export type State = ReturnType<typeof reducer>;

const middlewares = [reduxFirstRouter.middleware];

export const createAppStore = (initialState?: State): Store =>
  createStore(
    reducer,
    initialState,
    compose(
      reduxFirstRouter.enhancer,
      applyMiddleware(...middlewares),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any): any => f
    )
  );
export const store = createAppStore();

export default store;
