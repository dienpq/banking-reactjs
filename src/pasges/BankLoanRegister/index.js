import { Container, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import AccountVerification from "../../components/AccountVerification";
import InfoDeclaration from "../../components/InfoDeclaration";
import LoanRegisterStart from "../../components/LoanRegisterStart";
import WaitForConfirmation from "../../components/WaitForConfirmation";

const steps = [
    'Đăng ký',
    'Xác thực thông tin',
    'Khai báo thông tin',
    'Chờ xác nhận',
];

const BankLoanRegister = () => {
    const [step, setStep] = useState(0)

    const handleChangeStep = (status) => {
        setStep(status)
    }

    return (
        <>
            <Container maxWidth='lg' sx={{ paddingTop: '3rem' }}>
                <Stepper activeStep={step} alternativeLabel sx={{ marginBottom: '3rem' }}>
                    {steps.map((label) => (
                        <Step key={label} >
                            <StepLabel
                                sx={{
                                    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
                                        color: '#00c853'
                                    },
                                    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
                                        color: '#00c853'
                                    }
                                }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {
                    step === 0 ? <LoanRegisterStart step={step} changeStep={handleChangeStep} /> :
                        step === 1 ? <AccountVerification step={step} changeStep={handleChangeStep} /> :
                            step === 2 ? <InfoDeclaration step={step} changeStep={handleChangeStep} /> :
                                <WaitForConfirmation />
                }
            </Container>
        </>
    );
};

export default BankLoanRegister;