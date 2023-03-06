import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";

const LoanPurpose = (props) => {
    const [loanPurpose, setLoanPurpose] = useState([])

    const [paymentWage, setPaymentWage] = useState([])
    const handlePaymentWageChange = (event) => {
        const value = event.target.value;
        const index = paymentWage.indexOf(value);
        if (index === -1) {
            setPaymentWage([...paymentWage, value]);
        } else {
            setPaymentWage(paymentWage.filter((item) => item !== value));
        }
    };

    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Mục đích vay vốn</Typography>
                </Box>
                <Box padding='1rem'>
                    <Grid container spacing={2}>
                        {/* Mục đích */}
                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }}>
                                <FormGroup onChange={handlePaymentWageChange}>
                                    {/* Vay mua ô tô */}
                                    <FormControlLabel value='1' control={<Checkbox checked={paymentWage.includes('1')} />} label="Vay mua ô tô" />
                                    <Box>
                                        <Typography component='ul'>
                                            <Typography component='li'>
                                                <Typography>Mục đích</Typography>
                                                <FormGroup>
                                                    <FormControlLabel value='1' control={<Checkbox checked={paymentWage.includes('1')} />} label="Mua xe ô tô mới" />
                                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Mua xe ô tô đã qua sử dụng" />
                                                    <FormControlLabel value='3' control={<Checkbox checked={paymentWage.includes('3')} />} label="Hoàn vốn / Bù đắp mua xe ô tô" />
                                                </FormGroup>
                                            </Typography>
                                            <Typography component='li'>
                                                <Typography>Tên chủng loại xe (hiệu xe - dòng xe - năm sản xuất)</Typography>
                                                <FormControl sx={{ width: '100%' }}>
                                                    <TextField
                                                        variant="standard"
                                                        placeholder="Vui lòng nhập thông tin"
                                                    />
                                                </FormControl>
                                            </Typography>
                                        </Typography>
                                    </Box>
                                    {/* Vay phục vụ hoạt động sản xuất kinh doanh */}
                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Vay phục vụ hoạt động sản xuất kinh doanh của Hộ kinh doanh" />
                                    <Box>
                                        <Typography component='ul'>
                                            <Typography component='li'>
                                                <Typography>Mục đích</Typography>
                                                <FormGroup>
                                                    <FormControlLabel value='1' control={<Checkbox checked={paymentWage.includes('1')} />} label="Vay đầu tư TSCĐ" />
                                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Vay bổ sung vốn / mở rộng / phát triển kinh doanh" />
                                                    <FormControlLabel value='3' control={<Checkbox checked={paymentWage.includes('3')} />} label="Vay bổ sung vốn lưu động theo hạn mức" />
                                                    <FormControlLabel value='4' control={<Checkbox checked={paymentWage.includes('4')} />} label="Vay thấu chi Tài khoản thanh toán HKD" />
                                                </FormGroup>
                                            </Typography>
                                            <Typography component='li'>
                                                <Typography>Ghi chi tiết cụ thể mục đích vay</Typography>
                                                <FormControl sx={{ width: '100%' }}>
                                                    <TextField
                                                        variant="standard"
                                                        placeholder="Vui lòng nhập thông tin"
                                                    />
                                                </FormControl>
                                            </Typography>
                                        </Typography>
                                    </Box>
                                    {/* Vay mua bất động sản */}
                                    <FormControlLabel value='3' control={<Checkbox checked={paymentWage.includes('2')} />} label="Vay mua bất động sản" />
                                    <Box>
                                        <Typography component='ul'>
                                            <Typography component='li'>
                                                <Typography>Mục đích</Typography>
                                                <FormGroup>
                                                    <FormControlLabel value='1' control={<Checkbox checked={paymentWage.includes('1')} />} label="Để sử dụng" />
                                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Để kinh doanh" />
                                                    <FormControlLabel value='0' control={<Checkbox checked={paymentWage.includes('3')} />} label="Khác" />
                                                    <FormControl sx={{ width: '100%' }}>
                                                        <TextField
                                                            variant="standard"
                                                            placeholder="Vui lòng nhập thông tin"
                                                        />
                                                    </FormControl>
                                                </FormGroup>
                                            </Typography>
                                            <Typography component='li'>
                                                <Typography>Lọa BĐS</Typography>
                                                <FormGroup>
                                                    <FormControlLabel value='1' control={<Checkbox checked={paymentWage.includes('1')} />} label="Chung cư" />
                                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Nhà đất" />
                                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Đất" />
                                                    <FormControlLabel value='0' control={<Checkbox checked={paymentWage.includes('3')} />} label="Khác" />
                                                    <FormControl sx={{ width: '100%' }}>
                                                        <TextField
                                                            variant="standard"
                                                            placeholder="Vui lòng nhập thông tin"
                                                        />
                                                    </FormControl>
                                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="BĐS chưa có giấy tờ chứng minh quyền sở hữu, sử dụng" />
                                                    <FormControlLabel
                                                        value='2'
                                                        control={<Checkbox checked={paymentWage.includes('2')} />}
                                                        label={
                                                            <Box>
                                                                <Typography>
                                                                    BĐS có giấy tờ  chứng minh quyền sở hữu, sử dụng.
                                                                    Giấy tờ chứng minh quyề sở hữu sử dụng số <TextField
                                                                        variant="standard"
                                                                        sx={{
                                                                            width: '60px',
                                                                            '& input': {
                                                                                padding: '0'
                                                                            }
                                                                        }}
                                                                    /> do <TextField
                                                                        variant="standard"
                                                                        sx={{
                                                                            '& input': {
                                                                                padding: '0'
                                                                            }
                                                                        }}
                                                                    /> cấp ngày <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                        <DateField
                                                                            variant="standard"
                                                                            sx={{
                                                                                width: '130px',
                                                                                '& input': {
                                                                                    padding: '0'
                                                                                }
                                                                            }}
                                                                        />
                                                                    </LocalizationProvider> , tại địa chỉ: <TextField
                                                                        variant="standard"
                                                                        sx={{
                                                                            width: '300px',
                                                                            '& input': {
                                                                                padding: '0'
                                                                            }
                                                                        }}
                                                                    />
                                                                </Typography>
                                                            </Box>
                                                        }
                                                        sx={{ alignItems: 'start' }}
                                                    />
                                                </FormGroup>
                                            </Typography>
                                        </Typography>
                                    </Box>
                                    {/* Vay xây nhà / sửa nhà */}
                                    <FormControlLabel value='4' control={<Checkbox checked={paymentWage.includes('2')} />} label="Vay xây nhà / sửa chữa nhà" />
                                    <Box>
                                        <Typography component='ul'>
                                            <Typography component='li'>
                                                <Typography>Mục đích</Typography>
                                                <FormGroup>
                                                    <FormControlLabel value='1' control={<Checkbox checked={paymentWage.includes('1')} />} label="Để sử dụng" />
                                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Để kinh doanh" />
                                                    <FormControlLabel value='0' control={<Checkbox checked={paymentWage.includes('3')} />} label="Khác" />
                                                    <TextField
                                                        variant="standard"
                                                        placeholder="Vui lòng nhập thông tin"
                                                    />
                                                </FormGroup>
                                            </Typography>
                                            <Typography component='li'>
                                                <Typography>Địa chỉ</Typography>
                                                <FormControl sx={{ width: '100%' }}>
                                                    <TextField
                                                        variant="standard"
                                                        placeholder="Vui lòng địa chỉ"
                                                    />
                                                </FormControl>
                                            </Typography>
                                        </Typography>
                                    </Box>
                                    {/* Vay khác */}
                                    <FormControlLabel value='0' control={<Checkbox checked={paymentWage.includes('0')} />} label="Vay khác" />
                                    <FormControl sx={{ width: '100%' }}>
                                        <TextField
                                            multiline
                                            rows={4}
                                            placeholder='Vui lòng điền đủ thông tin về mục đích vay vốn'
                                        />
                                    </FormControl>
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        {/* Số tiền vay */}
                        <Grid item xs={6}>
                            <Typography>Số tiền vay</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    variant="standard"
                                    placeholder="Nhập số tiền"
                                />
                            </FormControl>
                        </Grid>
                        {/* Thời hạn vay */}
                        <Grid item xs={6}>
                            <Typography>Thời hạn vay (tháng)</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    variant="standard"
                                    placeholder="Số tháng"
                                />
                            </FormControl>
                        </Grid>
                        {/* Ân hạn gốc */}
                        <Grid item xs={6}>
                            <Typography>Ân hạn gốc (tháng)</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    variant="standard"
                                    placeholder="Số tháng"
                                />
                            </FormControl>
                        </Grid>
                        {/* Phương thức giải ngân */}
                        <Grid item xs={6}>
                            <Typography>Phương thức giải ngân</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    variant="standard"
                                    disabled
                                    value='Theo quy định của ngân hang VPBank'
                                />
                            </FormControl>
                        </Grid>
                        {/* Phương thức trả nợ */}
                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }}>
                                <Typography component='label'>
                                    Phương thức trả nợ
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <FormGroup onChange={handlePaymentWageChange}>
                                    <FormControlLabel value='1' control={<Checkbox checked={paymentWage.includes('1')} />} label="Trả gốc đều hàng tháng, lãi trả hàng tháng" />
                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Trả gốc, lãi đều hàng tháng (Niên kim)" />
                                    <FormControlLabel value='3' control={<Checkbox checked={paymentWage.includes('0')} />} label="Trả gốc cuối kỳ, lãi hàng tháng" />
                                    <FormControlLabel value='4' control={<Checkbox checked={paymentWage.includes('0')} />} label="Trả gốc tăng dần, lãi giảm dần" />
                                    <FormControlLabel value='0' control={<Checkbox checked={paymentWage.includes('0')} />} label="Khác" />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        {
                            paymentWage.includes('0') ? <Grid item xs={12}>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="standard"
                                        placeholder="Ghi rõ Phương thức trả nợ "
                                    />
                                </FormControl>
                            </Grid> : null
                        }
                        {/* Đề xuât khác */}
                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }}>
                                <Typography component='label'>
                                    Đề xuất khác
                                </Typography>
                                <TextField multiline rows={5} placeholder='Mô tả mục đích' />
                            </FormControl>
                        </Grid>
                        {/* Nút điều khiển */}
                        <Grid item xs={12}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Button
                                    variant="contained"
                                    onClick={() => props.changeStep(1)}
                                    sx={{
                                        bgcolor: '#9e9e9e',
                                        '&:hover': {
                                            bgcolor: '#8c8c8c'
                                        }
                                    }}
                                >
                                    Quay lại
                                </Button>

                                <Button variant="contained" onClick={() => props.changeStep(3)}>Tiếp tục</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};

export default LoanPurpose;