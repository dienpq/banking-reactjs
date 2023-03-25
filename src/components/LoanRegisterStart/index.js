import { Button, FormControl, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    email: yup.string().required("Email là trường bắt buộc").email("Email không hợp lệ"),
    phone: yup.string().required("Số điện thoại là trường bắt buộc"),
    fullname: yup.string().required("Họ và tên là trường bắt buộc"),
});

const LoanRegisterStart = (props) => {
    const initialValues = {
        fullname: '',
        phone: '',
        email: '',
        nationality: 'vietnam'
    }
    const onSubmit = (values) => {
        sessionStorage.setItem('user', JSON.stringify(values))
        props.changeStep(1)
    }

    return (
        <>
            <Paper elevation={3} sx={{ maxWidth: '500px', padding: '2rem', margin: '0 auto' }}>
                <Typography variant="h5" color='#00c853' textAlign='center'>Đăng ký vay tiền online</Typography>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, touched, errors, handleChange, handleBlur }) => (
                        <Form>
                            {/* Họ và tên */}
                            <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                                <Typography component='span'>
                                    Họ và tên
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <TextField
                                    id="input-fullname"
                                    name="fullname"
                                    placeholder="Vui lòng nhập đầy đủ Họ và tên"
                                    value={values.fullname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.fullname && Boolean(errors.fullname)}
                                    helperText={touched.fullname && errors.fullname}
                                    sx={{
                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                            margin: 0,
                                            marginTop: '4px'
                                        }
                                    }}
                                />
                            </FormControl>
                            {/* Số điện thoại */}
                            <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                                <Typography component='span'>
                                    Số điện thoại
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <TextField
                                    id="input-phone"
                                    name="phone"
                                    placeholder="09x-xxx-xx-91"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.phone && Boolean(errors.phone)}
                                    helperText={touched.phone && errors.phone}
                                    sx={{
                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                            margin: 0,
                                            marginTop: '4px'
                                        }
                                    }}
                                />
                            </FormControl>
                            {/* Email */}
                            <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                                <Typography component='span'>
                                    Địa chỉ email
                                    <Typography component='span' color='#f44336'> *</Typography>
                                </Typography>
                                <TextField
                                    id="input-email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                    sx={{
                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                            margin: 0,
                                            marginTop: '4px'
                                        }
                                    }}
                                />
                            </FormControl>
                            {/* Quốc tịch */}
                            <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                                <Typography component='span'>Quốc tịch</Typography>
                                <Select
                                    labelId="select-nationality"
                                    id="select-nationality"
                                    value={values.nationality}
                                    disabled
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <MenuItem value='vietnam'>Việt Nam</MenuItem>
                                    <MenuItem value='america'>Mỹ</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                variant="contained"
                                size="large"
                                type="submit"
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
                        </Form>
                    )}
                </Formik>

            </Paper>
        </>
    );
};

export default LoanRegisterStart;