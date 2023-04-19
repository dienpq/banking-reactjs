import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { formatDataObject } from "../../../common";
import { checkBoxRequired } from "../../../yupUtils";

const validationSchema = yup.object().shape({
    nameCompany: yup.string(),
    phoneCompany: yup.string().when("nameCompany", (applyValidation, schema) => {
        return applyValidation[0] ? schema.required('Đây là trường bắt buộc') : schema;
    }),
    addressCompany: yup.string().when("nameCompany", (applyValidation, schema) => {
        return applyValidation[0] ? schema.required('Đây là trường bắt buộc') : schema;
    }),
    job: checkBoxRequired("Vui lòng chọn ít nhất một ô"),
    jobOther: yup.string().when("job", (applyValidation, schema) => {
        if (applyValidation[0].other)
            return schema.required("Đây là trường bắt buộc")
    }),
    typeContractJob: checkBoxRequired("Vui lòng chọn ít nhất một ô"),
    typeContractJobOther: yup.string().when("typeContractJob", (applyValidation, schema) => {
        if (applyValidation[0].other)
            return schema.required("Đây là trường bắt buộc")
    }),
    typeReceiveWage: checkBoxRequired("Vui lòng chọn ít nhất một ô"),
    typeReceiveWageOther: yup.string().when("typeReceiveWage", (applyValidation, schema) => {
        if (applyValidation[0].other)
            return schema.required("Đây là trường bắt buộc")
    }),
})

const InfoJob = (props) => {
    const initialValues = {
        "nameCompany": "",
        "phoneCompany": "",
        "addressCompany": "",
        "job": {
            "Cán bộ cấp quản lý": false,
            "Cán bộ cấp chuyên viên/nhân viên": false,
            "Lực lượng vũ trang": false,
            "Kinh doanh có đăng ký (KDCT)": false,
            "Nghỉ hưu": false,
            "Kinh doanh tự do/lao động thời vụ": false,
            "Thất nghiệp/không có việc làm": false,
            "other": false,
        },
        "jobOther": "",
        "typeContractJob": {
            "Có thời hạn": false,
            "Không thời hạn": false,
            "Tự do": false,
            "Toàn thời gian": false,
            "Bán thời gian": false,
            "Nghỉ hưu": false,
            "other": false,
        },
        "typeContractJobOther": "",
        "typeReceiveWage": {
            "Tiền mặt": false,
            "Ngân hàng VPBank": false,
            "other": false,
        },
        "typeReceiveWageOther": "",
    }

    const onSubmit = (values) => {
        const jobInfo = {
            nameCompany: values.nameCompany,
            phoneCompany: values.phoneCompany,
            addressCompany: values.addressCompany,
            job: formatDataObject(values.job, values.jobOther),
            typeContractJob: formatDataObject(values.typeContractJob, values.typeContractJobOther),
            typeReceiveWage: formatDataObject(values.typeReceiveWage, values.typeReceiveWageOther),
        }
        sessionStorage.setItem('job', JSON.stringify(jobInfo))
        props.changeStep(props.step + 1)
    }

    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Thông tin nghề nghiệp</Typography>
                </Box>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, touched, errors, handleChange, handleBlur }) => (
                        <Form>
                            <Box padding='1rem'>
                                <Grid container spacing={2}>
                                    {/* Nghề nghiệp */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Nghề nghiệp
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <FormGroup>
                                                {
                                                    Object.keys(values.job).map((key) => (
                                                        <FormControlLabel
                                                            key={key}
                                                            control={<Checkbox name={`job.${key}`} checked={values.job[key]} onChange={handleChange} />}
                                                            label={key === 'other' ? 'Khác (Ghi rõ)' : key}
                                                        />
                                                    ))
                                                }
                                            </FormGroup>
                                            <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                                                {errors.job && touched.job && errors.job}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Tên công ty */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Tên công ty
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Vui lòng nhập Tên công ty"
                                                name="nameCompany"
                                                value={values.nameCompany}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.nameCompany && Boolean(errors.nameCompany)}
                                                helperText={touched.nameCompany && errors.nameCompany}
                                                sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Điện thoại cơ quan */}
                                    <Grid item xs={6}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Điện thoại cơ quan
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Vui lòng nhập Điện thoại cơ quan"
                                                name="phoneCompany"
                                                value={values.phoneCompany}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.phoneCompany && Boolean(errors.phoneCompany)}
                                                helperText={touched.phoneCompany && errors.phoneCompany}
                                                sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Địa chỉ cơ quan */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Địa chỉ công ty / cơ quan
                                            </Typography>
                                            <TextField
                                                variant="standard"
                                                placeholder="Vui lòng nhập Địa chỉ công ty"
                                                name="addressCompany"
                                                value={values.addressCompany}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.addressCompany && Boolean(errors.addressCompany)}
                                                helperText={touched.addressCompany && errors.addressCompany}
                                                sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    {
                                        values.job.other ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ nghề nghiệp hiện tại"
                                                    name="jobOther"
                                                    value={values.jobOther}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.jobOther && Boolean(errors.jobOther)}
                                                    helperText={touched.jobOther && errors.jobOther}
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
                                    {/* Loại hình hợp đồng lao động */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Loại hình hợp đồng lao động
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <FormGroup>
                                                {
                                                    Object.keys(values.typeContractJob).map((key) => (
                                                        <FormControlLabel
                                                            key={key}
                                                            control={<Checkbox name={`typeContractJob.${key}`} checked={values.typeContractJob[key]} onChange={handleChange} />}
                                                            label={key === 'other' ? 'Khác (Ghi rõ)' : key}
                                                        />
                                                    ))
                                                }
                                            </FormGroup>
                                            <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                                                {errors.typeContractJob && touched.typeContractJob && errors.typeContractJob}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {
                                        values.typeContractJob.other ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ Loại hình hợp đông lao động"
                                                    name="typeContractJobOther"
                                                    value={values.typeContractJobOther}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.typeContractJobOther && Boolean(errors.typeContractJobOther)}
                                                    helperText={touched.typeContractJobOther && errors.typeContractJobOther}
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
                                    {/* Hình thức nhận lương */}
                                    <Grid item xs={12}>
                                        <FormControl sx={{ width: '100%' }}>
                                            <Typography component='label'>
                                                Hình thức nhận lương
                                                <Typography component='span' color='#f44336'> *</Typography>
                                            </Typography>
                                            <FormGroup>
                                                {
                                                    Object.keys(values.typeReceiveWage).map((key) => (
                                                        <FormControlLabel
                                                            key={key}
                                                            control={<Checkbox name={`typeReceiveWage.${key}`} checked={values.typeReceiveWage[key]} onChange={handleChange} />}
                                                            label={key === 'other' ? 'Khác (Ghi rõ)' : key}
                                                        />
                                                    ))
                                                }
                                            </FormGroup>
                                            <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                                                {errors.typeReceiveWage && touched.typeReceiveWage && errors.typeReceiveWage}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {
                                        values.typeReceiveWage.other ? <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Ghi rõ Hình thức nhận lương"
                                                    name="typeReceiveWageOther"
                                                    value={values.typeReceiveWageOther}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.typeReceiveWageOther && Boolean(errors.typeReceiveWageOther)}
                                                    helperText={touched.typeReceiveWageOther && errors.typeReceiveWageOther}
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
                                        <Stack direction='row' justifyContent='space-between'>
                                            <Button
                                                variant="contained"
                                                onClick={() => props.changeStep(props.step - 1)}
                                                sx={{
                                                    bgcolor: '#9e9e9e',
                                                    '&:hover': {
                                                        bgcolor: '#8c8c8c'
                                                    }
                                                }}
                                            >
                                                Quay lại
                                            </Button>

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

export default InfoJob;