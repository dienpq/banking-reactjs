import { Box, Button, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    collaterals: yup.array().of(
        yup.object().shape({
            name: yup.string().required("Vui lòng nhập tên tài sản"),
            owner: yup.string().required("Vui lòng nhập tên chủ sở hữu"),
            relationOwnerAndCustomer: yup.string().required("Vui lòng nhập mỗi quan hệ"),
        })
    )
})
const InfoCollateral = (props) => {
    const collateral = {
        name: "",
        owner: "",
        relationOwnerAndCustomer: "",
        status: "",
    }

    const initialValues = {
        collaterals: [
            {
                name: "",
                owner: "",
                relationOwnerAndCustomer: "",
                status: 0,
            }
        ]
    }

    const onSubmit = (values) => {
        sessionStorage.setItem('collaterals', JSON.stringify(values.collaterals))
        props.changeStep(props.step + 1)
    }

    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Thông tin tài khoản đảm bảo</Typography>
                </Box>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}

                >
                    {({ values, touched, errors, handleChange, handleBlur }) => (

                        <Form>
                            <FieldArray name="collaterals">
                                {({ remove, push }) => (
                                    <>
                                        <Box padding='1rem'>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => push(collateral)}
                                                    >
                                                        Thêm tài sản
                                                    </Button>
                                                </Grid>
                                                {
                                                    values.collaterals.map((value, index) => (<Grid item xs={12} key={index}>
                                                        <Typography fontWeight='600' paddingBottom='0.5rem'>Tài sản số {index + 1}</Typography>
                                                        <Grid container spacing={2}>
                                                            {/* Tên tài sản bảo đảm */}
                                                            <Grid item xs={6}>
                                                                <FormControl sx={{ width: '100%' }}>
                                                                    <Typography component='label'>
                                                                        Tên tài sản
                                                                    </Typography>
                                                                    <TextField
                                                                        variant="standard"
                                                                        placeholder="Nhập tên tài sản"
                                                                        name={`collaterals.${index}.name`}
                                                                        value={value.name}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        error={touched?.collaterals?.[index]?.name && Boolean(errors?.collaterals?.[index]?.name)}
                                                                        helperText={touched?.collaterals?.[index]?.name && errors?.collaterals?.[index]?.name}
                                                                        sx={{
                                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                                margin: 0,
                                                                                marginTop: '4px'
                                                                            }
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                            </Grid>
                                                            {/* Tên chủ sở hữu */}
                                                            <Grid item xs={6}>
                                                                <FormControl sx={{ width: '100%' }}>
                                                                    <Typography component='label'>
                                                                        Tên chủ sở hữu
                                                                    </Typography>
                                                                    <TextField
                                                                        variant="standard"
                                                                        placeholder="Nhập tên chủ sở hữu"
                                                                        name={`collaterals.${index}.owner`}
                                                                        value={value.owner}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        error={touched?.collaterals?.[index]?.owner && Boolean(errors?.collaterals?.[index]?.owner)}
                                                                        helperText={touched?.collaterals?.[index]?.owner && errors?.collaterals?.[index]?.owner}
                                                                        sx={{
                                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                                margin: 0,
                                                                                marginTop: '4px'
                                                                            }
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                            </Grid>
                                                            {/* Mối quan hệ của chủ sở hữu TSBĐ và khách hàng vay vốn */}
                                                            <Grid item xs={12}>
                                                                <FormControl sx={{ width: '100%' }}>
                                                                    <Typography component='label'>
                                                                        Mối quan hệ của chủ sở hữu TSBĐ và khách hàng vay vốn
                                                                    </Typography>
                                                                    <TextField
                                                                        variant="standard"
                                                                        placeholder="Nhập thông tin"
                                                                        name={`collaterals.${index}.relationOwnerAndCustomer`}
                                                                        value={value.relationOwnerAndCustomer}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        error={touched?.collaterals?.[index]?.relationOwnerAndCustomer && Boolean(errors?.collaterals?.[index]?.relationOwnerAndCustomer)}
                                                                        helperText={touched?.collaterals?.[index]?.relationOwnerAndCustomer && errors?.collaterals?.[index]?.relationOwnerAndCustomer}
                                                                        sx={{
                                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                                margin: 0,
                                                                                marginTop: '4px'
                                                                            }
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                            </Grid>
                                                            {/* Tài sản có đang bảo đảm cho nghĩa vụ vay vốn nào không? */}
                                                            <Grid item xs={12}>
                                                                <FormControl sx={{ width: '100%' }}>
                                                                    <Typography component='label'>
                                                                        Tài sản có đang bảo đảm cho nghĩa vụ vay vốn nào không?
                                                                    </Typography>
                                                                    <RadioGroup
                                                                        row
                                                                        defaultValue={1}
                                                                        name={`collaterals.${index}.status`}
                                                                        onChange={handleChange}
                                                                    >
                                                                        <FormControlLabel value="1" control={<Radio />} label="Đang bảo đảm" />
                                                                        <FormControlLabel value="0" control={<Radio />} label="Không" />
                                                                    </RadioGroup>
                                                                </FormControl>
                                                            </Grid>
                                                            {/* Nút xóa tài sản */}
                                                            <Grid item xs={12}>
                                                                <Button
                                                                    variant="contained"
                                                                    onClick={() => remove(index)}
                                                                    sx={{
                                                                        bgcolor: '#f44336',
                                                                        '&:hover': { bgcolor: '#e53935' }
                                                                    }}
                                                                >
                                                                    Xóa
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>))
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
                                    </>
                                )}

                            </FieldArray>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </>
    );
};

export default InfoCollateral;