import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import AccountInfo from "../pasges/AccountInfo"
import BankLoan from "../pasges/BankLoan"
import BankLoanHistory from "../pasges/BankLoanHistory"
import BankLoanOpen from "../pasges/BankLoanOpen"
import BankLoanRegister from "../pasges/BankLoanRegister"
import Home from "../pasges/Home"
import PayInterest from "../pasges/PayInterest"
import HistoryDetail from "../pasges/HistoryDetail"

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
                path: '/bank-loan/:id/pay-interest',  //trả lãi
                element: <PayInterest />
            },
            {
                path: '/bank-loan/history',  //lịch sử
                element: <BankLoanHistory />
            },
            {
                path: '/bank-loan/history/status/contract/:id',  //Chi tiết lịch sử
                element: <HistoryDetail />
            },
        ]
    },

])

export { router }