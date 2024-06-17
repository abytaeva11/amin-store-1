import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { authSlice, AppDispatch } from "src/store";

export const UseActions = () => {
    const AllActions = {
        ...authSlice.actions,
    };

    const dispatch = useDispatch<AppDispatch>();

    return bindActionCreators(AllActions, dispatch);
};
