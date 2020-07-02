import {combineReducers} from "redux";

import languageSlice from "./general/languageSlice";

const reducer = combineReducers({
  language:languageSlice.reducer
})

export default reducer;