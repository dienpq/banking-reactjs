import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import AccountInfo from "../pasges/AccountInfo"
import BankLoan from "../pasges/BankLoan"
import Home from "../pasges/Home"
import PayInterest from "../pasges/PayInterest"

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/account/info',  //thông tin tài khoản
                element: <AccountInfo />
            },
            {
                path: '/bank-loan',  //vay tiền
                element: <BankLoan />
            },
            {
                path: '/pay-interest',  //trả lãi
                element: <PayInterest />
            },
        ]
    },

])

export { router }