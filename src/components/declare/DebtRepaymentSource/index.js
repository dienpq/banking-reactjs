import { Box, Button, FormControl, Grid, Paper, TextField, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const DebtRepaymentSource = (props) => {
    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Nguồn trả nợ</Typography>
                </Box>
                <Box padding='1rem'>
                    <Grid container spacing={2}>
                        {/* Thu nhập cá nhân */}
                        <Grid item xs={12}>
                            <Typography fontWeight='600' paddingBottom='0.5rem'>1. Thu nhập cá nhân</Typography>
                            <Grid container spacing={2}>
                                {/* Lương và các khoản phụ cấp */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Lương và các khoản phụ cấp
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Cổ tức */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Cổ tức
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Lợi nhuận từ kinh doanh */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Lợi nhuận từ kinh doanh
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Thu nhập từ cho thuê tài sản */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Thu nhập từ cho thuê tài sản
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Thu nhập khác */}
                                <Grid item xs={612}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Thu nhập khác
                                        </Typography>
                                        <TextField
                                            multiline
                                            rows={2}
                                            placeholder="Mô tả chi tiết"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Thu nhập của vợ / chồng */}
                        <Grid item xs={12}>
                            <Typography fontWeight='600' paddingBottom='0.5rem'>2. Thu nhập của vợ / chồng</Typography>
                            <Grid container spacing={2}>
                                {/* Lương và các khoản phụ cấp */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Lương và các khoản phụ cấp
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Cổ tức */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Cổ tức
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Lợi nhuận từ kinh doanh */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Lợi nhuận từ kinh doanh
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Thu nhập từ cho thuê tài sản */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Thu nhập từ cho thuê tài sản
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Thu nhập khác */}
                                <Grid item xs={612}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Thu nhập khác
                                        </Typography>
                                        <TextField
                                            multiline
                                            rows={2}
                                            placeholder="Mô tả chi tiết"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Thu nhập của Người hỗ trợ trả nợ */}
                        <Grid item xs={12}>
                            <Typography fontWeight='600' paddingBottom='0.5rem'> 3. Thu nhập của Người hỗ trợ trả nợ</Typography>
                            <Grid container spacing={2}>
                                {/* Lương và các khoản phụ cấp */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Lương và các khoản phụ cấp
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Cổ tức */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Cổ tức
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Lợi nhuận từ kinh doanh */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Lợi nhuận từ kinh doanh
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Thu nhập từ cho thuê tài sản */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Thu nhập từ cho thuê tài sản
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Thu nhập khác */}
                                <Grid item xs={612}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Thu nhập khác
                                        </Typography>
                                        <TextField
                                            multiline
                                            rows={2}
                                            placeholder="Mô tả chi tiết"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Tổng thu nhập */}
                        <Grid item xs={12}>
                            <Typography fontWeight='600' paddingBottom='0.5rem'>A. Tổng thu nhập (1 + 2 + 3)</Typography>
                            <Grid container spacing={2}>
                                {/* Chi phí sinh hoạt */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Chi phí sinh hoạt
                                        </Typography>
                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Chi phí trả gốc lãi các khoản vay */}
                                <Grid item xs={6}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Chi phí trả gốc lãi các khoản vay
                                        </Typography>

                                        <TextField
                                            variant="standard"
                                            placeholder="Nhập số tiền"
                                        />
                                    </FormControl>
                                </Grid>
                                {/* Chi phí khác */}
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Typography component='label'>
                                            Chi phí khác
                                        </Typography>
                                        <TextField
                                            multiline
                                            rows={2}
                                            placeholder="Mô tả chi tiết"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Tổng chi phí */}
                        <Grid item xs={6}>
                            <Typography fontWeight='600' paddingBottom='0.5rem'>B. Tổng chi phí</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    variant='standard'
                                    placeholder='0 VNĐ'
                                />
                            </FormControl>
                        </Grid>
                        {/* Chênh lệch thu nhập chi phí  */}
                        <Grid item xs={6}>
                            <Typography fontWeight='600' paddingBottom='0.5rem'>C. Chênh lệch thu nhập chi phí (A - B)</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    variant='standard'
                                    placeholder='0 VNĐ'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography fontWeight='600' paddingBottom='0.5rem'>* Các khoản thu nhập bất thường khác</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <TextField
                                    multiline
                                    rows={3}
                                    placeholder="Mô tả chi tiết"
                                />
                            </FormControl>
                        </Grid>
                        {/* Nút điều khiển */}
                        <Grid item xs={12}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Button
                                    variant="contained"
                                    onClick={() => props.changeStep(2)}
                                    sx={{
                                        bgcolor: '#9e9e9e',
                                        '&:hover': {
                                            bgcolor: '#8c8c8c'
                                        }
                                    }}
                                >
                                    Quay lại
                                </Button>

                                <Button variant="contained" onClick={() => props.changeStep(4)}>Tiếp tục</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};

export default DebtRepaymentSource;