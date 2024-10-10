import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

//STUB - useAppDispatch en lugar de 'useDispatch'
export const useReduxDispatch = useDispatch.withTypes<AppDispatch>();
//STUB - useAppSelector en lugar de 'useSelector'
export const useReduxSelector = useSelector.withTypes<RootState>();
