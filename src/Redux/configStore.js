import {combineReducers} from "redux";
import { gameReducer } from "./Reducer/gameReducer";


const rootReducer = combineReducers({

    // gameReducer:gameReducer
    gameReducer
});

export const store = createStore(rootReducer);
