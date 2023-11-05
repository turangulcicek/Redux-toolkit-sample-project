import { configureStore } from "@reduxjs/toolkit";
import Jobslice from "./Jobslice";
export default configureStore({
  reducer: Jobslice,
});
