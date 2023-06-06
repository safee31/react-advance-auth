import { combineReducers } from "redux";

import userReducer from "./User";
import accountReducer from "./Account";
import shopsReducer from "./Shops";
import SidebarToggle from "./SidebarToggle";

const rootReducer = combineReducers({
  user: userReducer,
  account: accountReducer,
  shops: shopsReducer,
  toggleSidebar: SidebarToggle,
});

export default rootReducer;
