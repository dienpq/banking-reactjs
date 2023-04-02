import { Box, Paper, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SuccessForConfirmation = (props) => {
    return (
        <Paper elevation={3} sx={{ maxWidth: '500px', height: '300px', padding: '2rem', margin: '0 auto' }}>
            <Stack direction='column' justifyContent='space-between' height='100%'>
                <Typography variant="body1" color='#00c853' fontWeight='700'>
                    Chúc mừng bạn đã hoàn thành đăng ký vay tiền thành công
                </Typography>
                <Stack direction='row' alignItems='center' justifyContent='center'>
                    <CheckCircleIcon sx={{ fontSize: '2.5rem', color: '#00c853', marginTop: '0' }} />
                    <Typography variant="h4" textAlign='center' fontWeight='700' color='#00c853' marginLeft='4px' marginTop='4px'>
                        Hoàn thành
                    </Typography>
                </Stack>
                <Box bgcolor='#fafafa' padding='1rem' borderRadius='8px'>
                    <Typography variant="body2">Lưu ý:</Typography>
                    <Typography component='ul'>
                        <Typography component='li' variant="body2">
                            Khoản vay sẽ được cộng vào tài khoản của bạn.
                            <Typography variant="body2">Vui lòng kiểm tra lại số dư tài khoản</Typography>
                        </Typography>
                        <Typography component='li' variant="body2">
                            Hợp đồng vay tiền, sao kê hàng tháng sẽ được gửi đến địa chỉ email
                            <Typography component='span' color='#00c853'> {props.email}</Typography>
                        </Typography>
                    </Typography>
                    <Typography variant="body2" marginTop='1rem'>VPBank xin chân thành cảm ơn!</Typography>
                </Box>
            </Stack>
        </Paper>
    );
};

export default SuccessForConfirmation;