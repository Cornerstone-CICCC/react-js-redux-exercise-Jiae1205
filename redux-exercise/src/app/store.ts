import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// 타입 헬퍼들 (TS에서 useSelector/useDispatch에 사용)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
