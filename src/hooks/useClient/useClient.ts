import { useDispatch, useSelector } from "react-redux";
import { allReducerStates } from "../../store/store.utils";
import { createClient } from "../../api";

export const useClient = () => {
    const {
        auth: { token },
    } = useSelector(allReducerStates);

    const dispatch = useDispatch();

    const axiosInstance = createClient(token, dispatch);
    
    return axiosInstance;
};