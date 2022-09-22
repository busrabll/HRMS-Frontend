//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import saveReducer from "./reducers/saveReducer";

const rootReducer = combineReducers({
    save: saveReducer
})

export default rootReducer;