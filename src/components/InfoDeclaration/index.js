import { Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, Typography } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import PrevUploadImage from "../PrevUploadImage";

const InfoDeclaration = () => {
    const [nationality, setNationality] = useState('vietnam');
    const [marital, setMarital] = useState('single')
    const [academicLevel, setAcademicLevel] = useState('thcs')

    const handleChangeNationality = (event) => {
        setNationality(event.target.value);
    };

    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
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
                    </Grid>
                    <Grid item xs={7}>
                        <Paper>
                            <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                                <Typography fontSize='1.2rem' fontWeight='600'>Thông tin khách hàng</Typography>
                            </Box>
                            <Box padding='1rem'>
                                <Grid container spacing={2}>
                                    {/* Họ và tên */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Họ và tên
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Vui lòng nhập Họ và tên"
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Giới tính */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Giới tính
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <RadioGroup
                                                row
                                                defaultValue="male"
                                                name="gender"
                                            >
                                                <FormControlLabel value="male" control={<Radio />} label="Nam" />
                                                <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                                                <FormControlLabel value="other" control={<Radio />} label="Khác" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    {/* Ngày sinh */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Ngày sinh
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DateField variant="standard" />
                                            </LocalizationProvider>
                                        </FormControl>
                                    </Grid>
                                    {/* Quốc tịch */}
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Quốc tịch
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <Select
                                                variant="standard"
                                                id="select-nationality"
                                                value={nationality}
                                                onChange={handleChangeNationality}
                                                disabled
                                                sx={{ marginTop: '0 !important' }}
                                            >
                                                <MenuItem value='vietnam'>Việt Nam</MenuItem>
                                                <MenuItem value='america'>Mỹ</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    {/* Số CCCD/CMND/Hộ chiếu */}
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Số CCCD/CMND/Hộ chiếu
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Nhập số"
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Ngày cấp */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Ngày cấp
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DateField variant="standard" />
                                            </LocalizationProvider>
                                        </FormControl>
                                    </Grid>
                                    {/* Nơi cấp */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Nơi cấp
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Nhập địa chỉ"
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Hộ khẩu thương trú */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Hộ khẩu thương trú
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Nhập địa chỉ"
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Nơi ở hiện tại */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Nơi ở hiện tại
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Nhập địa chỉ"
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Số điện thoại */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Số điện thoại
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="09x-xxx-xx-91"
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Email */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Email
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="example@gmail.com"
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Tình trạng hôn nhân */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Tình trạng hôn nhân
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <RadioGroup
                                                row
                                                defaultValue={marital}
                                                value={marital}
                                                name="marital"
                                                onChange={((event) => setMarital(event.target.value))}
                                            >
                                                <FormControlLabel value="single" control={<Radio />} label="Độc thân" />
                                                <FormControlLabel value="marry" control={<Radio />} label="Đã kết hôn" />
                                                <FormControlLabel value="divorce" control={<Radio />} label="Ly hôn" />
                                                <FormControlLabel value="other" control={<Radio />} label="Khác (Ghi rõ)" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    {
                                        marital === 'other' ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ tình trạng hôn nhân"
                                                />
                                            </FormControl>
                                        </Grid> : null
                                    }
                                    {/* Trình độ học vấn */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Trình độ học vấn
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <RadioGroup
                                                row
                                                defaultValue="thcs"
                                                value={academicLevel}
                                                name="academicLevel"
                                                onChange={((event) => setAcademicLevel(event.target.value))}
                                            >
                                                <FormControlLabel value="thcs" control={<Radio />} label="THCS" />
                                                <FormControlLabel value="thpt" control={<Radio />} label="THPT" />
                                                <FormControlLabel value="college" control={<Radio />} label="Cao đẳng" />
                                                <FormControlLabel value="university" control={<Radio />} label="Đại học" />
                                                <FormControlLabel value="afterUniversity" control={<Radio />} label="Trên đại học" />
                                                <FormControlLabel value="other" control={<Radio />} label="Khác (Ghi rõ)" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    {
                                        academicLevel === 'other' ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ trình độ học vấn"
                                                />
                                            </FormControl>
                                        </Grid> : null
                                    }
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default InfoDeclaration;