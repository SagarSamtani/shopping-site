import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "reducers";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
    key: "root",
    storage
  },
  persistReducerConfig = persistReducer(persistConfig, rootReducer),
  store = createStore(
    persistReducerConfig,
    composeWithDevTools(applyMiddleware(thunk, logger))
  ),
  persistor = persistStore(store);

export { persistor, store };
