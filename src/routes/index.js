import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import AccountInfo from "../pasges/AccountInfo"
import BankLoan from "../pasges/BankLoan"
import BankLoanOpen from "../pasges/BankLoanOpen"
import BankLoanRegister from "../pasges/BankLoanRegister"
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
                path: '/bank-loan',  //khoản vay
                element: <BankLoan />
            },
            {
                path: '/bank-loan/open',  //chọn khoản vay
                element: <BankLoanOpen />
            },
            {
                path: '/bank-loan/open/:type/register',  //đăng ký khoản vay
                element: <BankLoanRegister />
            },
            {
                path: '/pay-interest',  //trả lãi
                element: <PayInterest />
            },
        ]
    },

])

export { router }