import { Container } from "@mui/material";
import { useState } from "react";
import AccountVerification from "../../components/AccountVerification";
import InfoDeclaration from "../../components/InfoDeclaration";
import LoanRegisterDone from "../../components/LoanRegisterDone";
import LoanRegisterStart from "../../components/LoanRegisterStart";
import WaitForConfirmation from "../../components/WaitForConfirmation";

const BankLoanRegister = () => {
    const [step, setStep] = useState(0)
    return (
        <>
            <Container maxWidth='lg' sx={{ paddingTop: '3rem' }}>
                {
                    step === 0 ? <LoanRegisterStart /> :
                        step === 1 ? <AccountVerification /> :
                            step === 2 ? <InfoDeclaration /> :
                                step === 3 ? <WaitForConfirmation /> : <LoanRegisterDone />
                }
            </Container>
        </>
    );
};

export default BankLoanRegister;