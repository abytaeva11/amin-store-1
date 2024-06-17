import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from '@mantine/form';
import { useLoginMutation } from "src/store";
import { UseActions } from "src/hooks";
import "./index.scss";

const initialValues: LoginReqType = {
    username: "admin",
    password: "Admin001"
};

export const LoginPage = () => {
    const [login, { isLoading, isError, error }] = useLoginMutation();
    const { setCredentials } = UseActions();
    const navigate = useNavigate();
    const form = useForm({
        initialValues,
    });

    const handleSubmit = async (values: LoginReqType) => {
        try {
            const response = await login(values);
            if ("error" in response) {
                console.error("Login error:", response.error);
                throw response.error;
            } else {
                console.log("Login success:", response.data);
                setCredentials(response.data);
                navigate("/feedback");
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const getErrorMessage = (error: any): string => {
        if (!error) {
            return "Произошла неизвестная ошибка";
        }
        if ('status' in error && 'data' in error) {
            const data: any = error.data;
            if (data && typeof data === 'object' && 'message' in data) {
                return `Ошибка входа: ${data.message}`;
            }
        }
        if ('message' in error) {
            return `Ошибка входа: ${error.message}`;
        }
        return "Ошибка входа: Неизвестная ошибка";
    };

    return (
        <div className="creat-account" style={{ backgroundImage: "url('/img/registr-bg.png')" }}>
            <div className="creat-block">
                <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                    <div className="account-img"><img src="/img/amin-logo.png" alt="" /></div>
                    <div className="creat-inside">
                        <h5> <NavLink to="/"> <AiOutlineClose /></NavLink> </h5>
                        <h1>Добро пожаловать!</h1>
                        <h2>Войдите в свой аккаунт!</h2>
                        <input
                            maxLength={7}
                            minLength={7}
                            type="text"
                            placeholder="Логин"
                            {...form.getInputProps("username")}
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            {...form.getInputProps("password")}
                        />
                        <div className="account-btn">
                            <button type="submit" disabled={isLoading}><h3>Войти</h3></button>
                        </div>
                        {isError && <p className="error-message">{getErrorMessage(error)}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};



