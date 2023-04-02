import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';
import * as yup from "yup";

const validationSchema = yup.object().shape({
    wage: yup.string().required("Vui lòng nhập lương và các khoản phụ cấp"),
})
const DebtRepaymentSource = (props) => {
    const initialValues = {
        wage: "",
        dividend: "",
        profit: "",
        propertyRentalIncome: "",
        otherIncome: "",
        wageWifeOrHusband: "",
        dividendWifeOrHusband: "",
        profitWifeOrHusband: "",
        propertyRentalIncomeWifeOrHusband: "",
        otherIncomeWifeOrHusband: "",
        wageSupporter: "",
        dividendSupporter: "",
        profitSupporter: "",
        propertyRentalIncomeSupporter: "",
        otherIncomeSupporter: "",
        costOfLiving: "",
        interestPaymentsOnLoans: "",
        otherCosts: "",
        otherExtraordinaryIncome: "",
    }

    const onSubmit = (values) => {
        sessionStorage.setItem('debtRepaymentSource', JSON.stringify(values))
        props.changeStep(props.step + 1)
    }
    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Nguồn trả nợ</Typography>
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
                                                        name="wage"
                                                        value={values.wage}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.wage && Boolean(errors.wage)}
                                                        helperText={touched.wage && errors.wage}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="dividend"
                                                        value={values.dividend}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.dividend && Boolean(errors.dividend)}
                                                        helperText={touched.dividend && errors.dividend}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="profit"
                                                        value={values.profit}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.profit && Boolean(errors.profit)}
                                                        helperText={touched.profit && errors.profit}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="propertyRentalIncome"
                                                        value={values.propertyRentalIncome}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.propertyRentalIncome && Boolean(errors.propertyRentalIncome)}
                                                        helperText={touched.propertyRentalIncome && errors.propertyRentalIncome}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="otherIncome"
                                                        value={values.otherIncome}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.otherIncome && Boolean(errors.otherIncome)}
                                                        helperText={touched.otherIncome && errors.otherIncome}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="wageWifeOrHusband"
                                                        value={values.wageWifeOrHusband}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.wageWifeOrHusband && Boolean(errors.wageWifeOrHusband)}
                                                        helperText={touched.wageWifeOrHusband && errors.wageWifeOrHusband}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="dividendWifeOrHusband"
                                                        value={values.dividendWifeOrHusband}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.dividendWifeOrHusband && Boolean(errors.dividendWifeOrHusband)}
                                                        helperText={touched.dividendWifeOrHusband && errors.dividendWifeOrHusband}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="profitWifeOrHusband"
                                                        value={values.profitWifeOrHusband}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.profitWifeOrHusband && Boolean(errors.profitWifeOrHusband)}
                                                        helperText={touched.profitWifeOrHusband && errors.profitWifeOrHusband}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="propertyRentalIncomeWifeOrHusband"
                                                        value={values.propertyRentalIncomeWifeOrHusband}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.propertyRentalIncomeWifeOrHusband && Boolean(errors.propertyRentalIncomeWifeOrHusband)}
                                                        helperText={touched.propertyRentalIncomeWifeOrHusband && errors.propertyRentalIncomeWifeOrHusband}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="otherIncomeWifeOrHusband"
                                                        value={values.otherIncomeWifeOrHusband}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.otherIncomeWifeOrHusband && Boolean(errors.otherIncomeWifeOrHusband)}
                                                        helperText={touched.otherIncomeWifeOrHusband && errors.otherIncomeWifeOrHusband}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="wageSupporter"
                                                        value={values.wageSupporter}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.wageSupporter && Boolean(errors.wageSupporter)}
                                                        helperText={touched.wageSupporter && errors.wageSupporter}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="dividendSupporter"
                                                        value={values.dividendSupporter}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.dividendSupporter && Boolean(errors.dividendSupporter)}
                                                        helperText={touched.dividendSupporter && errors.dividendSupporter}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="profitSupporter"
                                                        value={values.profitSupporter}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.profitSupporter && Boolean(errors.profitSupporter)}
                                                        helperText={touched.profitSupporter && errors.profitSupporter}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="propertyRentalIncomeSupporter"
                                                        value={values.propertyRentalIncomeSupporter}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.propertyRentalIncomeSupporter && Boolean(errors.propertyRentalIncomeSupporter)}
                                                        helperText={touched.propertyRentalIncomeSupporter && errors.propertyRentalIncomeSupporter}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="otherIncomeSupporter"
                                                        value={values.otherIncomeSupporter}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.otherIncomeSupporter && Boolean(errors.otherIncomeSupporter)}
                                                        helperText={touched.otherIncomeSupporter && errors.otherIncomeSupporter}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* Tổng thu nhập */}
                                    <Grid item xs={12}>
                                        <Typography fontWeight='600' paddingBottom='0.5rem'>A. Tổng thu nhập (1 + 2 + 3)</Typography>
                                        <Grid container spacing={2}>
                                            {/* Tổng */}
                                            <Grid item xs={12}>
                                                <FormControl sx={{ width: '100%' }}>
                                                    <TextField
                                                        disabled
                                                        variant="standard"
                                                        placeholder="0 VNĐ"
                                                        name="totalIncome"
                                                        value={
                                                            Number(values.wage) +
                                                            Number(values.dividend) +
                                                            Number(values.profit) +
                                                            Number(values.propertyRentalIncome) +
                                                            Number(values.otherIncome) +
                                                            Number(values.wageWifeOrHusband) +
                                                            Number(values.dividendWifeOrHusband) +
                                                            Number(values.profitWifeOrHusband) +
                                                            Number(values.propertyRentalIncomeWifeOrHusband) +
                                                            Number(values.otherIncomeWifeOrHusband) +
                                                            Number(values.wageSupporter) +
                                                            Number(values.dividendSupporter) +
                                                            Number(values.profitSupporter) +
                                                            Number(values.propertyRentalIncomeSupporter) +
                                                            Number(values.otherIncomeSupporter)
                                                        }
                                                    />
                                                </FormControl>
                                            </Grid>
                                            {/* Chi phí sinh hoạt */}
                                            <Grid item xs={6}>
                                                <FormControl sx={{ width: '100%' }}>
                                                    <Typography component='label'>
                                                        Chi phí sinh hoạt
                                                    </Typography>
                                                    <TextField
                                                        variant="standard"
                                                        placeholder="Nhập số tiền"
                                                        name="costOfLiving"
                                                        value={values.costOfLiving}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.costOfLiving && Boolean(errors.costOfLiving)}
                                                        helperText={touched.costOfLiving && errors.costOfLiving}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="interestPaymentsOnLoans"
                                                        value={values.interestPaymentsOnLoans}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.interestPaymentsOnLoans && Boolean(errors.interestPaymentsOnLoans)}
                                                        helperText={touched.interestPaymentsOnLoans && errors.interestPaymentsOnLoans}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                        name="otherCosts"
                                                        value={values.otherCosts}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.otherCosts && Boolean(errors.otherCosts)}
                                                        helperText={touched.otherCosts && errors.otherCosts}
                                                        sx={{
                                                            '& .css-1wc848c-MuiFormHelperText-root': {
                                                                margin: 0,
                                                                marginTop: '4px'
                                                            }
                                                        }}
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
                                                disabled
                                                variant='standard'
                                                placeholder='0 VNĐ'
                                                name="totalCost"
                                                value={
                                                    Number(values.costOfLiving) +
                                                    Number(values.interestPaymentsOnLoans) +
                                                    Number(values.otherCosts)
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* Chênh lệch thu nhập chi phí  */}
                                    <Grid item xs={6}>
                                        <Typography fontWeight='600' paddingBottom='0.5rem'>C. Chênh lệch thu nhập chi phí (A - B)</Typography>
                                        <FormControl sx={{ width: '100%' }}>
                                            <TextField
                                                disabled
                                                variant='standard'
                                                placeholder='0 VNĐ'
                                                name="differenceCost"
                                                value={
                                                    Number(values.wage) +
                                                    Number(values.dividend) +
                                                    Number(values.profit) +
                                                    Number(values.propertyRentalIncome) +
                                                    Number(values.otherIncome) +
                                                    Number(values.wageWifeOrHusband) +
                                                    Number(values.dividendWifeOrHusband) +
                                                    Number(values.profitWifeOrHusband) +
                                                    Number(values.propertyRentalIncomeWifeOrHusband) +
                                                    Number(values.otherIncomeWifeOrHusband) +
                                                    Number(values.wageSupporter) +
                                                    Number(values.dividendSupporter) +
                                                    Number(values.profitSupporter) +
                                                    Number(values.propertyRentalIncomeSupporter) +
                                                    Number(values.otherIncomeSupporter) -
                                                    Number(values.costOfLiving) -
                                                    Number(values.interestPaymentsOnLoans) -
                                                    Number(values.otherCosts)
                                                }
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
                                                name="otherExtraordinaryIncome"
                                                value={values.otherExtraordinaryIncome}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.otherExtraordinaryIncome && Boolean(errors.otherExtraordinaryIncome)}
                                                helperText={touched.otherExtraordinaryIncome && errors.otherExtraordinaryIncome}
                                                sx={{
                                                    '& .css-1wc848c-MuiFormHelperText-root': {
                                                        margin: 0,
                                                        marginTop: '4px'
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
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

                                            <Button variant="contained" type='submit'>Tiếp tục</Button>
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

export default DebtRepaymentSource;