import { Box, Button, OutlinedInput, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { generateRandomNumber } from "../../common";
import Countdown from "../CountDown";

const AccountVerification = (props) => {
    const [codeOTP, setCodeOTP] = useState(generateRandomNumber(6))
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [resetCountdown, setResetCountdown] = useState(false);
    const [countResetOTP, setCountResetOTP] = useState(0)

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        let params = {
            emailTo: user.email,
            subject: "Mã OTP",
            content: codeOTP
        }
        // axios.post("http://localhost:8080/mail/send", params)
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch(error => console.log(error));
    }, [codeOTP])

    const handleInputChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        // Auto focus to next input box
        if (e.target.value && index < 6) {
            switch (index) {
                case 0:
                    inputRef2.current.focus();
                    break;
                case 1:
                    inputRef3.current.focus();
                    break;
                case 2:
                    inputRef4.current.focus();
                    break;
                case 3:
                    inputRef5.current.focus();
                    break;
                case 4:
                    inputRef6.current.focus();
                    break;
                default:
                    break;
            }
        }

        checkOTP(newOtp)
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            switch (index) {
                case 1:
                    inputRef1.current.focus();
                    break;
                case 2:
                    inputRef2.current.focus();
                    break;
                case 3:
                    inputRef3.current.focus();
                    break;
                case 4:
                    inputRef4.current.focus();
                    break;
                case 5:
                    inputRef5.current.focus();
                    break;
                case 6:
                    inputRef6.current.focus();
                    break;
                default:
                    break;
            }
        }
    };

    const checkOTP = (newOtp) => {
        let code = '';
        newOtp.map((value) => {
            code += value
        })

        if (codeOTP === code && code.length === 6) {
            props.changeStep(2)
        }
    }

    const handelResetOTP = () => {
        setCodeOTP(prevCodeOTP => generateRandomNumber(6))
        setOtp(prevOTP => ['', '', '', '', '', '']);
        setResetCountdown(prevResetCountDown => true);
    }

    return (
        <>
            <Paper elevation={3} sx={{ maxWidth: '500px', padding: '2rem', margin: '0 auto' }}>
                <Typography fontWeight='700' color='#00c853'>Đăng ký ngay, nhận tiền liền tay</Typography>
                <Typography variant="body1" marginTop='1rem'>Vui lòng nhập mã số OTP được gửi về email dienpq1604@gmail.com</Typography>

                <Stack direction='row' spacing={2} marginTop='2rem' justifyContent='center'>
                    <OutlinedInput
                        inputRef={inputRef1}
                        inputProps={{ maxLength: 1 }}
                        value={otp[0]}
                        onChange={(e) => handleInputChange(e, 0)}
                        onKeyDown={(e) => handleKeyDown(e, 0)}
                        sx={{
                            width: '40px',
                            height: '40px',
                            '& input': {
                                textAlign: 'center'
                            }
                        }}
                    />
                    <OutlinedInput
                        inputRef={inputRef2}
                        inputProps={{ maxLength: 1 }}
                        value={otp[1]}
                        onChange={(e) => handleInputChange(e, 1)}
                        onKeyDown={(e) => handleKeyDown(e, 1)}
                        sx={{
                            width: '40px',
                            height: '40px',
                            '& input': {
                                textAlign: 'center'
                            }
                        }}
                    />
                    <OutlinedInput
                        inputRef={inputRef3}
                        inputProps={{ maxLength: 1 }}
                        value={otp[2]}
                        onChange={(e) => handleInputChange(e, 2)}
                        onKeyDown={(e) => handleKeyDown(e, 2)}
                        sx={{
                            width: '40px',
                            height: '40px',
                            '& input': {
                                textAlign: 'center'
                            }
                        }}
                    />
                    <OutlinedInput
                        inputRef={inputRef4}
                        inputProps={{ maxLength: 1 }}
                        value={otp[3]}
                        onChange={(e) => handleInputChange(e, 3)}
                        onKeyDown={(e) => handleKeyDown(e, 3)}
                        sx={{
                            width: '40px',
                            height: '40px',
                            '& input': {
                                textAlign: 'center'
                            }
                        }}
                    />
                    <OutlinedInput
                        inputRef={inputRef5}
                        inputProps={{ maxLength: 1 }}
                        value={otp[4]}
                        onChange={(e) => handleInputChange(e, 4)}
                        onKeyDown={(e) => handleKeyDown(e, 4)}
                        sx={{
                            width: '40px',
                            height: '40px',
                            '& input': {
                                textAlign: 'center'
                            }
                        }}
                    />
                    <OutlinedInput
                        inputRef={inputRef6}
                        inputProps={{ maxLength: 1 }}
                        value={otp[5]}
                        onChange={(e) => handleInputChange(e, 5)}
                        onKeyDown={(e) => handleKeyDown(e, 5)}
                        sx={{
                            width: '40px',
                            height: '40px',
                            '& input': {
                                textAlign: 'center'
                            }
                        }}
                    />
                </Stack>

                <Stack direction='row' justifyContent='center' paddingTop='1rem'>
                    <Countdown
                        seconds={200}
                        reset={resetCountdown}
                        onReset={() => setResetCountdown(false)}
                        notification='Mã OTP sẽ hết hạn trong vòng'
                        notificationExpired='Mã OTP đã hết hạn'
                    />
                </Stack>

                <Stack direction='row' justifyContent='center' marginTop='2rem'>
                    <Button
                        variant="outlined"
                        onClick={handelResetOTP}
                        sx={{
                            maxWidth: '300px',
                            width: '100%',
                            borderColor: '#00c853',
                            color: '#00c853',
                            '&:hover': {
                                borderColor: '#00b34a',
                                color: '#00b34a',
                            }
                        }}
                    >
                        Gửi lại mã OTP
                    </Button>
                </Stack>

                <Box marginTop='2rem' bgcolor='#fafafa' padding='1rem' borderRadius='8px'>
                    <Typography variant="body2">Lưu ý</Typography>
                    <Typography component='ul' variant="body2">
                        <Typography component='li' variant="body2">
                            Bạn chỉ được nhập 1 mã OTP tối đã 5 lần
                        </Typography>
                        <Typography component='li' variant="body2">
                            Phiên làm việc sẽ tạm ngừng 30 phút nếu gửi lại OTP quá 5 lần
                        </Typography>
                        <Typography component='li' variant="body2">
                            Bằng việc nhập OTP để xác thực, Quý khách đồng ý với điều khoản của VPB
                        </Typography>
                    </Typography>
                </Box>
            </Paper>
        </>
    );
};

export default AccountVerification;