import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useLocalStorage } from "src/hooks";

export const RequireAuth = () => {
    const profile = useLocalStorage<Profile>("profile").getItem();
    const location = useLocation();

    if (!profile?.refresh) {
        return (
            <Navigate
                to="/login"
                state={{
                    from: location.pathname
                }}
                replace
            />
        );
    }
    return <Outlet />;
};
