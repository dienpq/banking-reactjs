import { Box, Paper, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ErrorForConfirmation = (props) => {
    return (
        <Paper elevation={3} sx={{ maxWidth: '500px', height: '300px', padding: '2rem', margin: '0 auto' }}>
            <Stack direction='column' justifyContent='space-between' height='100%'>
                <Typography variant="body1" color='#f44336' fontWeight='700'>
                    Bạn đã đăng ký thất bại
                </Typography>
                <Stack direction='row' alignItems='center' justifyContent='center'>
                    <CheckCircleIcon sx={{ fontSize: '2.5rem', color: '#f44336', marginTop: '0' }} />
                    <Typography variant="h4" textAlign='center' fontWeight='700' color='#f44336' marginLeft='4px' marginTop='4px'>
                        Thất bại
                    </Typography>
                </Stack>
                <Box bgcolor='#fafafa' padding='1rem' borderRadius='8px'>
                    <Typography variant="body2">Lưu ý:</Typography>
                    <Typography component='ul'>
                        <Typography component='li' variant="body2">
                            Tài khoản của bạn chưa thể đăng ký vay tiền. Thông tin chi tiết được gửi qua email
                            <Typography component='span' color='#00c853'> {props.email}</Typography>
                        </Typography>
                    </Typography>
                    <Typography variant="body2" marginTop='1rem'>VPBank xin chân thành cảm ơn!</Typography>
                </Box>
            </Stack>
        </Paper>
    );
};

export default ErrorForConfirmation;