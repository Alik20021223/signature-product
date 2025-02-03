import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@app/layouts/default";
import { PaymentPage } from "@pages/payment-page";
import { PaymentConfirmPage } from "@pages/payment-confirm-page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '',
                element: <PaymentPage />
            },
            {
                path: '/confirm',
                element: <PaymentConfirmPage />
            }
        ],
    },
])