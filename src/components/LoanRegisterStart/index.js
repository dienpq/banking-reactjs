import { Button, FormControl, MenuItem, OutlinedInput, Paper, Select, Typography } from "@mui/material";
import { useState } from "react";

const LoanRegisterStart = (props) => {
    const [nationality, setNationality] = useState('vietnam');

    const handleChangeNationality = (event) => {
        setNationality(event.target.value);
    };

    const handleChangeStep = () => {
        props.changeStep(1)
    }

    return (
        <>
            <Paper elevation={3} sx={{ maxWidth: '500px', padding: '2rem', margin: '0 auto' }}>
                <Typography variant="h5" color='#00c853' textAlign='center'>Đăng ký vay tiền online</Typography>

                <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                    <Typography component='span'>
                        Họ và tên
                        <Typography component='span' color='#f44336'> *</Typography>
                    </Typography>
                    <OutlinedInput
                        id="input-fullname"
                        placeholder="Vui lòng nhập đầy đủ Họ và tên"
                    />
                </FormControl>
                <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                    <Typography component='span'>
                        Số điện thoại
                        <Typography component='span' color='#f44336'> *</Typography>
                    </Typography>
                    <OutlinedInput
                        id="input-phone"
                        placeholder="09x-xxx-xx-91"
                    />
                </FormControl>
                <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                    <Typography component='span'>
                        Địa chỉ email
                        <Typography component='span' color='#f44336'> *</Typography>
                    </Typography>
                    <OutlinedInput
                        id="input-email"
                        placeholder="abcde@gmail.com"
                    />
                </FormControl>
                <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                    <Typography component='span'>Quốc tịch</Typography>
                    <Select
                        labelId="select-nationality"
                        id="select-nationality"
                        value={nationality}
                        disabled
                        onChange={handleChangeNationality}
                    >
                        <MenuItem value='vietnam'>Việt Nam</MenuItem>
                        <MenuItem value='america'>Mỹ</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleChangeStep}
                    sx={{
                        bgcolor: '#00c853',
                        marginTop: '1rem',
                        width: '100%',
                        '&:hover': {
                            bgcolor: '#00b34a'
                        }
                    }}
                >
                    Tiếp tục
                </Button>
            </Paper>
        </>
    );
};

export default LoanRegisterStart;