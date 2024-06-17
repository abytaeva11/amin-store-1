import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import "src/styles/styled-mantine.scss"
import "./index.scss"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <MantineProvider>
                <App />
            </MantineProvider>
        </Provider>
    </BrowserRouter>


);