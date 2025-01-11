import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
const store=configureStore({
    reducer:{tuto:slice.reducer}
});
export default  store