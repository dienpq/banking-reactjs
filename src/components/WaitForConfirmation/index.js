import { Box, Paper, Stack, Typography } from "@mui/material";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const WaitForConfirmation = () => {
    return (
        <>
            <Paper elevation={3} sx={{ maxWidth: '500px', height: '300px', padding: '2rem', margin: '0 auto' }}>
                <Stack direction='column' justifyContent='space-between' height='100%'>
                    <Typography variant="body1" color='#00c853' fontWeight='700'>
                        Bạn đã gửi yêu cầu vay tiền online thành công!
                    </Typography>
                    <Stack direction='row' alignItems='center' justifyContent='center'>
                        <HourglassTopIcon sx={{ fontSize: '2.5rem', color: '#fbc02d', marginTop: '0' }} />
                        <Typography variant="h4" textAlign='center' fontWeight='700' color='#fbc02d' marginLeft='4px' marginTop='4px'>
                            Chờ xử lý
                        </Typography>
                    </Stack>
                    <Box bgcolor='#fafafa' padding='1rem' borderRadius='8px'>
                        <Typography variant="body2">Lưu ý:</Typography>
                        <Typography component='ul'>
                            <Typography component='li' variant="body2">
                                Thông tin sẽ được ngân hàng VPB xử lý và cập nhật trong vòng
                                <Typography component='span' color='#00c853'> 7 ngày </Typography>
                                làm việc
                            </Typography>
                            <Typography component='li' variant="body2">
                                Thông tin chi tiết sẽ được gửi đến địa chỉ email
                                <Typography component='span' color='#00c853'> dienpq1604@gmail.com</Typography>
                            </Typography>
                        </Typography>
                        <Typography variant="body2" marginTop='1rem'>VPBank xin chân thành cảm ơn!</Typography>
                    </Box>
                </Stack>
            </Paper>
        </>
    );
};

export default WaitForConfirmation;