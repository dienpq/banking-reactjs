import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, MenuItem, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Form, Formik } from "formik";
import * as yup from "yup";
import { checkBoxRequired } from "../../../yupUtils.js";

const validationSchema = yup.object().shape({
    fullname: yup.string().required("Họ và tên là trường bắt buộc"),
    birthday: yup.string().required("Ngày cấp là trường bắt buộc"),
    idNumber: yup.string().required("Số CCCD/CMND/Hộ chiếu là trường bắt buộc"),
    issuedDate: yup.string().required("Ngày cấp là trường bắt buộc"),
    issuedPlace: yup.string().required("Nơi cấp là trường bắt buộc"),
    permanentAddress: yup.string().required("Hộ khẩu thương trú là trường bắt buộc"),
    currentResidence: yup.string().required("Nơi ở hiện tại là trường bắt buộc"),
    phone: yup.string().required("Số điện thoại là trường bắt buộc"),
    email: yup.string().required("Email là trường bắt buộc"),
    maritalOther: yup.string().when("marital", (applyValidation, schema) => {
        if (applyValidation[0] === "other")
            return schema.required('Tình trạng hôn nhân là trường bắt buộc')
    }),
    academicLevelOther: yup.string().when("academicLevel", (applyValidation, schema) => {
        if (applyValidation[0] === "other")
            return schema.required('Trình độ học vấn là trường bắt buộc')
    }),
    homeOwnership: checkBoxRequired("Hình thức sở hữu nhà ở phải chọn ít nhất một ô"),
    homeOwnershipOther: yup.string().when("homeOwnership", (applyValidation, schema) => {
        if (applyValidation[0].other)
            return schema.required('Hình thức sở hữu nhà ở là trường bắt buộc')
    }),
    vehicles: checkBoxRequired("Phương tiện đi lại phải chọn ít nhất một ô"),
    vehiclesOther: yup.string().when("vehicles", (applyValidation, schema) => {
        if (applyValidation[0].other)
            return schema.required('Phương tiện đi lại ở là trường bắt buộc')
    }),
});

const InfoCustomer = (props) => {
    const customer = JSON.parse(sessionStorage.getItem("customer"))
    const initialValues = {
        ...customer,
        gender: "",
        birthday: null,
        idNumber: "",
        issuedDate: null,
        issuedPlace: "",
        permanentAddress: "",
        currentResidence: "",
        marital: "Độc thân",
        maritalOther: "",
        academicLevel: "THPT",
        academicLevelOther: "",
        homeOwnership: {
            "Nhà riêng và trả hoàn toàn": false,
            "Nhà riêng và thế chấp": false,
            "Nhà công ty cung cấp": false,
            "Nhà thuê": false,
            "Nhà ở cùng bố mẹ, bạn bè, họ hàng": false,
            "other": false,
        },
        homeOwnershipOther: "",
        vehicles: {
            "Ô tô": false,
            "Xe máy": false,
            "other": false
        },
        vehiclesOther: ""
    }

    const onSubmit = (values) => {
        sessionStorage.setItem('customer', JSON.stringify(values))
        props.changeStep(1)
    }

    return (
        <>
            {/* Thông tin khách hàng */}
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Thông tin khách hàng</Typography>
                </Box>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, touched, errors, handleChange, handleBlur, setFieldValue }) => (
                        <Form>
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
                                                disabled
                                                variant="standard"
                                                placeholder="Vui lòng nhập Họ và tên"
                                                name="fullname"
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
                                                onChange={handleChange}
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
                                                <DateField
                                                    variant="standard"
                                                    name="birthday"
                                                    format="DD/MM/YYYY"
                                                    value={values.birthday}
                                                    onChange={(date) => setFieldValue("birthday", date)}
                                                    onBlur={handleBlur}
                                                    error={touched.birthday && Boolean(errors.birthday)}
                                                    helperText={touched.birthday && errors.birthday}
                                                    sx={{
                                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                                            margin: 0,
                                                            marginTop: '4px'
                                                        },
                                                    }}
                                                />
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
                                            <TextField
                                                select
                                                disabled
                                                variant="standard"
                                                id="select-nationality"
                                                name="national"
                                                defaultValue="Việt Nam"
                                                value={values.national}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.national && Boolean(errors.national)}
                                                helperText={touched.national && errors.national}
                                                sx={{
                                                    marginTop: '0 !important',
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
                                            >
                                                <MenuItem value='Việt Nam'>Việt Nam</MenuItem>
                                                <MenuItem value='Mỹ'>Mỹ</MenuItem>
                                            </TextField>
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
                                                name="idNumber"
                                                value={values.idNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.idNumber && Boolean(errors.idNumber)}
                                                helperText={touched.idNumber && errors.idNumber}
                                                sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
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
                                                <DateField
                                                    variant="standard"
                                                    name="issuedDate"
                                                    format="DD/MM/YYYY"
                                                    value={values.issuedDate}
                                                    onChange={(date) => setFieldValue("issuedDate", date)}
                                                    onBlur={handleBlur}
                                                    error={touched.issuedDate && Boolean(errors.issuedDate)}
                                                    helperText={touched.issuedDate && errors.issuedDate}
                                                    sx={{
                                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                                            margin: 0,
                                                            marginTop: '4px'
                                                        }
                                                    }}
                                                />
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
                                                name="issuedPlace"
                                                value={values.issuedPlace}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.issuedPlace && Boolean(errors.issuedPlace)}
                                                helperText={touched.issuedPlace && errors.issuedPlace}
                                                sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
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
                                                name="permanentAddress"
                                                value={values.permanentAddress}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.permanentAddress && Boolean(errors.permanentAddress)}
                                                helperText={touched.permanentAddress && errors.permanentAddress}
                                                sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
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
                                                name="currentResidence"
                                                value={values.currentResidence}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.currentResidence && Boolean(errors.currentResidence)}
                                                helperText={touched.currentResidence && errors.currentResidence}
                                                sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
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
                                                disabled
                                                variant="standard"
                                                placeholder="09x-xxx-xx-91"
                                                name="phone"
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
                                    </Grid>
                                    {/* Email */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Email
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <TextField
                                                disabled
                                                variant="standard"
                                                placeholder="example@gmail.com"
                                                name="email"
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
                                    </Grid>
                                    {/* Tình trạng hôn nhân */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                {values.gender}
                                                Tình trạng hôn nhân
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <RadioGroup
                                                row
                                                defaultValue="Độc thân"
                                                name="marital"
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel value="Độc thân" control={<Radio />} label="Độc thân" />
                                                <FormControlLabel value="Đã kết hôn" control={<Radio />} label="Đã kết hôn" />
                                                <FormControlLabel value="Ly hôn" control={<Radio />} label="Ly hôn" />
                                                <FormControlLabel value="other" control={<Radio />} label="Khác (Ghi rõ)" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    {
                                        values.marital === "other" ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ tình trạng hôn nhân"
                                                    name="maritalOther"
                                                    value={values.maritalOther}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.maritalOther && Boolean(errors.maritalOther)}
                                                    helperText={touched.maritalOther && errors.maritalOther}
                                                    sx={{
                                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                                            margin: 0,
                                                            marginTop: '4px'
                                                        }
                                                    }}
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
                                                defaultValue="THCS"
                                                name="academicLevel"
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel control={<Radio value="THCS" />} label="THCS" />
                                                <FormControlLabel control={<Radio value="THPT" />} label="THPT" />
                                                <FormControlLabel control={<Radio value="Cao đẳng" />} label="Cao đẳng" />
                                                <FormControlLabel control={<Radio value="Đại học" />} label="Đại học" />
                                                <FormControlLabel control={<Radio value="Trên đại học" />} label="Trên đại học" />
                                                <FormControlLabel control={<Radio value="other" />} label="Khác (Ghi rõ)" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    {
                                        values.academicLevel === 'other' ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ trình độ học vấn"
                                                    name="academicLevelOther"
                                                    value={values.academicLevelOther}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.academicLevelOther && Boolean(errors.academicLevelOther)}
                                                    helperText={touched.academicLevelOther && errors.academicLevelOther}
                                                    sx={{
                                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                                            margin: 0,
                                                            marginTop: '4px'
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid> : null
                                    }
                                    {/* Hình thức sở hữu nhà ở */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Hình thức sở hữu nhà ở
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <FormGroup>
                                                {
                                                    Object.keys(values.homeOwnership).map((key) => (
                                                        <FormControlLabel
                                                            key={key}
                                                            control={<Checkbox name={`homeOwnership.${key}`} checked={values.homeOwnership[key]} onChange={handleChange} />}
                                                            label={key === 'other' ? 'Khác (Ghi rõ)' : key}
                                                        />
                                                    ))
                                                }
                                            </FormGroup>
                                            <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                                                {errors.homeOwnership && touched.homeOwnership && errors.homeOwnership}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {
                                        values.homeOwnership.other ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ hình thức sở hữu nhà"
                                                    name="homeOwnershipOther"
                                                    value={values.homeOwnershipOther}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.homeOwnershipOther && Boolean(errors.homeOwnershipOther)}
                                                    helperText={touched.homeOwnershipOther && errors.homeOwnershipOther}
                                                    sx={{
                                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                                            margin: 0,
                                                            marginTop: '4px'
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid> : null
                                    }
                                    {/* Phương tiện đi lại */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Phương tiện đi lại
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <FormGroup>
                                                {
                                                    Object.keys(values.vehicles).map((key) => (
                                                        <FormControlLabel
                                                            key={key}
                                                            control={<Checkbox name={`vehicles.${key}`} checked={values.vehicles[key]} onChange={handleChange} />}
                                                            label={key === 'other' ? 'Khác (Ghi rõ)' : key}
                                                        />
                                                    ))
                                                }
                                            </FormGroup>
                                            <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                                                {errors.vehicles && touched.vehicles && errors.vehicles}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {
                                        values.vehicles.other ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ phương tiện đi lại"
                                                    name="vehiclesOther"
                                                    value={values.vehiclesOther}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.vehiclesOther && Boolean(errors.vehiclesOther)}
                                                    helperText={touched.vehiclesOther && errors.vehiclesOther}
                                                    sx={{
                                                        '& .css-1wc848c-MuiFormHelperText-root': {
                                                            margin: 0,
                                                            marginTop: '4px'
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid> : null
                                    }
                                    {/* Nút điều khiển */}
                                    <Grid item xs={12}>
                                        <Stack direction='row' justifyContent='end'>
                                            <Button variant="contained" type="submit">Tiếp tục</Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </>
    );
};

export default InfoCustomer;