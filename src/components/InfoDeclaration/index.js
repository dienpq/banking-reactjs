import { Box, Button, Grid, Paper, Stack, Step, StepLabel, Stepper, Tooltip, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState } from "react";
import DebtRepaymentSource from "../declare/DebtRepaymentSource";
import InfoCustomer from "../declare/InfoCustomer";
import InfoJob from "../declare/InfoJob";
import LoanPurpose from "../declare/LoanPurpose";
import PrevUploadImage from "../PrevUploadImage";
import InfoCollateral from "../declare/InfoCollateral";
import Commitment from "../declare/Commitment";
import { useParams } from "react-router-dom";

const stepCategories = [
    'Thông tin khách hàng',
    'Thông tin nghề nghiệp',
    'Mục đích vay vốn',
    'Nguồn trả nợ',
    'Thông tin tài sản bảo đảm',
    'Cam kết'
];


const InfoDeclaration = (props) => {
    let steps = stepCategories;
    const { type } = useParams();
    if (type == 1) {
        steps = steps.filter((step) => step !== 'Thông tin tài sản bảo đảm');
    }

    const [step, setStep] = useState(2)
    const [statusStep, setStatusStep] = useState(false)

    const handleChangeStep = (status) => {
        if (status === steps.length) {
            props.changeStep(props.step + 1)
        } else {
            setStep(status)
        }
    }

    return (
        <>
            <Box>
                {/* Step */}
                <Tooltip title="Mục khai báo" placement="left">
                    <Paper
                        elevation={8}
                        sx={{
                            position: 'fixed',
                            right: '-20px',
                            top: '50%',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            bgcolor: '#00c853',
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }}
                        onClick={() => setStatusStep(!statusStep)}
                    >
                        <KeyboardDoubleArrowLeftIcon fontSize="large" />
                    </Paper>
                </Tooltip>

                <Paper
                    elevation={8}
                    sx={{
                        position: 'fixed',
                        zIndex: '100',
                        right: ' 24px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '1rem',
                        display: statusStep ? 'block' : 'none'
                    }}
                >
                    <Stepper orientation="vertical" activeStep={step}>
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
                </Paper>

                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        {/* Hình ảnh CCCD/CMND */}
                        <Paper>
                            <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                                <Typography fontSize='1.2rem' fontWeight='600'>Hình ảnh CCCD/CMND</Typography>
                            </Box>
                            <Box padding='1rem'>
                                <Stack direction='column' alignItems='center'>
                                    <Typography fontWeight='600'>Mặt trước</Typography>
                                    <PrevUploadImage inputFileId='prev-image-before' />
                                </Stack>

                                <Stack direction='column' alignItems='center'>
                                    <Typography fontWeight='600'>Mặt sau</Typography>
                                    <PrevUploadImage inputFileId='prev-image-after' />
                                </Stack>

                                <Stack direction='row' justifyContent='center'>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            maxWidth: '300px',
                                            width: '100%'
                                        }}
                                    >
                                        Upload
                                    </Button>
                                </Stack>
                            </Box>
                        </Paper>

                        {/* Hình ảnh khuôn mặt */}
                        <Paper sx={{ marginTop: '1rem' }}>
                            <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                                <Typography fontSize='1.2rem' fontWeight='600'>Hình ảnh khuôn mặt</Typography>
                            </Box>
                            <Box padding='1rem'>
                                <Stack direction='column' alignItems='center'>
                                    <Typography fontWeight='600'>Mặt trước</Typography>
                                    <PrevUploadImage inputFileId='prev-image-face-before' />
                                </Stack>

                                <Stack direction='column' alignItems='center'>
                                    <Typography fontWeight='600'>Mặt trái</Typography>
                                    <PrevUploadImage inputFileId='prev-image-face-left' />
                                </Stack>

                                <Stack direction='column' alignItems='center'>
                                    <Typography fontWeight='600'>Mặt phải</Typography>
                                    <PrevUploadImage inputFileId='prev-image-face-right' />
                                </Stack>

                                <Stack direction='row' justifyContent='center'>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            maxWidth: '300px',
                                            width: '100%'
                                        }}
                                    >
                                        Upload
                                    </Button>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={7}>
                        {
                            // Thông tin khách hàng
                            step === 0 ? <InfoCustomer step={step} changeStep={handleChangeStep} /> :
                                // Thông tin nghề nghiệp
                                step === 1 ? <InfoJob step={step} changeStep={handleChangeStep} /> :
                                    // Mục đích vay vốn
                                    step === 2 ? <LoanPurpose step={step} changeStep={handleChangeStep} /> :
                                        // Nguồn trả nợ
                                        step === 3 ? <DebtRepaymentSource step={step} changeStep={handleChangeStep} /> :
                                            // Thông tin tài sản đảm bảo
                                            type != 1 && step === 4 ? <InfoCollateral step={step} changeStep={handleChangeStep} /> :
                                                // Cam kết
                                                (type == 1 && step == 4) || (step != 1 && step === 5) ? <Commitment step={step} changeStep={handleChangeStep} /> :
                                                    null
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default InfoDeclaration;