import { createStore, combineReducers} from "redux";
import loadingReducer from "./appReducer";

const appCombineReducer = combineReducers({
    reducer : loadingReducer
})

const store = createStore(appCombineReducer);

export default store;
