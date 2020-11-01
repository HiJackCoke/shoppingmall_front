
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
    key: "primary",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);





const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)


export default store


