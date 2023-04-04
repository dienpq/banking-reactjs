import { Box, Button, FormControl, FormHelperText, Input, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as yup from "yup";

const validationSchema = yup.object().shape({
    price: yup.string().required("Vui lòng nhập số tiền cần trả"),
});

const PayInterest = () => {
    const [user, setUser] = useState({})
    const [bank, setBank] = useState({})
    const [loan, setLoan] = useState({})
    const [contract, setContract] = useState({})

    const userId = 1;
    const bankId = 1;
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/user/${userId}`)
            .then((response) => {
                setUser(response.data)
            })
            .catch(error => console.log(error));
    }, [userId])

    useEffect(() => {
        axios.get(`http://localhost:8080/bank/${bankId}`)
            .then((response) => {
                setBank(response.data)
            })
            .catch(error => console.log(error));
    }, [bankId])

    useEffect(() => {
        axios.get(`http://localhost:8080/loan/${id}`)
            .then((response) => {
                setLoan(response.data)
                axios.get(`http://localhost:8080/loan/${response.data.id}/contract`)
                    .then((response) => {
                        setContract(response.data)
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }, [id])

    const initialValues = {
        price: '',
        content: ''
    }

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box paddingTop='3rem'>
            <Paper elevation={3} sx={{ maxWidth: '500px', padding: '2rem', margin: '0 auto' }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, touched, errors, handleChange, handleBlur }) => (
                        <Form>
                            {/* Tài khoản nguồn */}
                            <Paper elevation={3} sx={{ padding: '1rem' }}>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Typography fontWeight='700'>Tài khoản nguồn</Typography>
                                    <Typography variant='caption'>{user.bankAccount}</Typography>
                                </Stack>
                                <Typography marginTop='0.5rem'>{user.price} đ</Typography>
                            </Paper>

                            {/* Tài khoản đích */}
                            <Paper elevation={3} sx={{ padding: '1rem', marginTop: '1rem' }}>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Typography fontWeight='700'>Tài khoản đích</Typography>
                                    <Typography variant='caption'>{bank.account}</Typography>
                                </Stack>
                                <Typography marginTop='0.5rem'>{contract.priceLoan - loan.priceRemaining} đ</Typography>
                            </Paper>

                            <Paper elevation={3} sx={{ padding: '1rem', marginTop: '1rem' }}>
                                {/* Số tiền */}
                                <FormControl variant="outlined" sx={{ width: '100%', marginTop: '1rem' }}>
                                    <Typography component='span'>
                                        Số tiền
                                        <Typography component='span' color='#f44336'> *</Typography>
                                    </Typography>
                                    <Input
                                        variant='standard'
                                        endAdornment={<InputAdornment position="end">đ</InputAdornment>}
                                        id="input-price"
                                        name="price"
                                        placeholder="0"
                                        value={values.price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormHelperText error sx={{ margin: 0, marginTop: '4px' }} >
                                        {errors.price && touched.price && errors.price}
                                    </FormHelperText>
                                </FormControl>
                                {/* Thanh toán tối thiểu */}
                                <Stack direction='row' justifyContent='space-between' marginTop='1rem'>
                                    <Typography>Thanh toán tối thiểu</Typography>
                                    <Box border='1px solid #e0e0e0' width='120px' textAlign='center' height='24px' borderRadius='4px'>
                                        <Typography variant='subtitle2' lineHeight='24px'>0 đ</Typography>
                                    </Box>
                                </Stack>
                                {/* Toàn bộ dư nợ */}
                                <Stack direction='row' justifyContent='space-between' marginTop='1rem'>
                                    <Typography>Toàn bộ dư nợ</Typography>
                                    <Box bgcolor='#00c853' width='120px' textAlign='center' height='24px' borderRadius='4px'>
                                        <Typography variant='subtitle2' lineHeight='24px' color='#fff'>0 đ</Typography>
                                    </Box>
                                </Stack>
                                {/* Nội dung */}
                                <FormControl variant="standard" sx={{ width: '100%', marginTop: '2rem' }}>
                                    <TextField
                                        variant='standard'
                                        id="input-content"
                                        name="content"
                                        placeholder="Nội dung (không bắt buộc)"
                                        value={values.content}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.content && Boolean(errors.content)}
                                        helperText={touched.content && errors.content}
                                        sx={{
                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                margin: 0,
                                                marginTop: '4px'
                                            }
                                        }}
                                    />
                                </FormControl>
                                <Stack marginTop='1rem'>
                                    <Button
                                        variant='contained'
                                        type='submit'
                                        sx={{
                                            bgcolor: '#00c853',
                                            '&:hover': {
                                                bgcolor: '#00b34a'
                                            }
                                        }}
                                    >
                                        Thanh toán
                                    </Button>
                                </Stack>
                            </Paper>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Box>
    );
};

export default PayInterest;