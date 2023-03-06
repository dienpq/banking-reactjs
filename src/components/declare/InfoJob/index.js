import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InfoJob = (props) => {
    const [job, setJob] = useState([])
    const [laborContract, setLaborContract] = useState([])
    const [paymentWage, setPaymentWage] = useState([])

    const handleJobChange = (event) => {
        const value = event.target.value;
        const index = job.indexOf(value);
        if (index === -1) {
            setJob([...job, value]);
        } else {
            setJob(job.filter((item) => item !== value));
        }
    };

    const handleLaborContractChange = (event) => {
        const value = event.target.value;
        const index = laborContract.indexOf(value);
        if (index === -1) {
            setLaborContract([...laborContract, value]);
        } else {
            setLaborContract(laborContract.filter((item) => item !== value));
        }
    };

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
                    <Typography fontSize='1.2rem' fontWeight='600'>Thông tin nghề nghiệp</Typography>
                </Box>
                <Box padding='1rem'>
                    <Grid container spacing={2}>
                        {/* Tên công ty */}
                        <Grid item xs={6}>
                            <FormControl sx={{ width: '100%' }}>
                                <Typography component='label'>
                                    Tên công ty
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <TextField
                                    variant="standard"
                                    placeholder="Vui lòng nhập Tên công ty"
                                />
                            </FormControl>
                        </Grid>
                        {/* Điện thoại cơ quan */}
                        <Grid item xs={6}>
                            <FormControl sx={{ width: '100%' }}>
                                <Typography component='label'>
                                    Điện thoại cơ quan
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <TextField
                                    variant="standard"
                                    placeholder="Vui lòng nhập Điện thoại cơ quan"
                                />
                            </FormControl>
                        </Grid>
                        {/* Địa chỉ cơ quan */}
                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }}>
                                <Typography component='label'>
                                    Địa chỉ công ty/cơ quan
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <TextField
                                    variant="standard"
                                    placeholder="Vui lòng nhập Địa chỉ công ty"
                                />
                            </FormControl>
                        </Grid>
                        {/* Nghề nghiệp */}
                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }}>
                                <Typography component='label'>
                                    Nghề nghiệp
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <FormGroup onChange={handleJobChange}>
                                    <FormControlLabel value='1' control={<Checkbox checked={job.includes('1')} />} label="Cán bộ cấp quản lý" />
                                    <FormControlLabel value='2' control={<Checkbox checked={job.includes('2')} />} label="Cán bộ cấp chuyên viên/nhân viên" />
                                    <FormControlLabel value='3' control={<Checkbox checked={job.includes('3')} />} label="Lực lượng vũ trang (quân đội, công an,...)" />
                                    <FormControlLabel value='4' control={<Checkbox checked={job.includes('4')} />} label="Kinh doanh có đăng ký (KDCT)" />
                                    <FormControlLabel value='5' control={<Checkbox checked={job.includes('5')} />} label="Nghỉ hưu" />
                                    <FormControlLabel value='6' control={<Checkbox checked={job.includes('6')} />} label="Kinh doanh tự do/lao động thời vụ" />
                                    <FormControlLabel value='7' control={<Checkbox checked={job.includes('7')} />} label="Thất nghiệp/không có việc làm" />
                                    <FormControlLabel value='0' control={<Checkbox checked={job.includes('0')} />} label="Khác (Ghi rõ)" />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        {
                            job.includes('0') ? <Grid item xs={12}>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="standard"
                                        placeholder="Ghi rõ nghề nghiệp hiện tại"
                                    />
                                </FormControl>
                            </Grid> : null
                        }
                        {/* Loại hình hợp đồng lao động */}
                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }}>
                                <Typography component='label'>
                                    Loại hình hợp đồng lao động
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <FormGroup onChange={handleLaborContractChange}>
                                    <FormControlLabel value='1' control={<Checkbox checked={laborContract.includes('1')} />} label="Có thời hạn" />
                                    <FormControlLabel value='2' control={<Checkbox checked={laborContract.includes('2')} />} label="Không thời hạn" />
                                    <FormControlLabel value='3' control={<Checkbox checked={laborContract.includes('3')} />} label="Tự do" />
                                    <FormControlLabel value='4' control={<Checkbox checked={laborContract.includes('4')} />} label="Toàn thời gian" />
                                    <FormControlLabel value='5' control={<Checkbox checked={laborContract.includes('5')} />} label="Bán thời gian" />
                                    <FormControlLabel value='6' control={<Checkbox checked={laborContract.includes('6')} />} label="Nghỉ hưu" />
                                    <FormControlLabel value='0' control={<Checkbox checked={laborContract.includes('0')} />} label="Khác" />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        {
                            laborContract.includes('0') ? <Grid item xs={12}>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="standard"
                                        placeholder="Ghi rõ Loại hình hợp đông lao động"
                                    />
                                </FormControl>
                            </Grid> : null
                        }
                        {/* Hình thức nhận lương */}
                        <Grid item xs={12}>
                            <FormControl sx={{ width: '100%' }}>
                                <Typography component='label'>
                                    Hình thức nhận lương
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <FormGroup onChange={handlePaymentWageChange}>
                                    <FormControlLabel value='1' control={<Checkbox checked={paymentWage.includes('1')} />} label="Tiền mặt" />
                                    <FormControlLabel value='2' control={<Checkbox checked={paymentWage.includes('2')} />} label="Ngân hàng VPBank" />
                                    <FormControlLabel value='0' control={<Checkbox checked={paymentWage.includes('0')} />} label="Khác" />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        {
                            paymentWage.includes('0') ? <Grid item xs={12}>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="standard"
                                        placeholder="Ghi rõ Hình thức nhận lương"
                                    />
                                </FormControl>
                            </Grid> : null
                        }
                        {/* Nút điều khiển */}
                        <Grid item xs={12}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Button
                                    variant="contained"
                                    onClick={() => props.changeStep(0)}
                                    sx={{
                                        bgcolor: '#9e9e9e',
                                        '&:hover': {
                                            bgcolor: '#8c8c8c'
                                        }
                                    }}
                                >
                                    Quay lại
                                </Button>

                                <Button variant="contained" onClick={() => props.changeStep(2)}>Tiếp tục</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};

export default InfoJob;