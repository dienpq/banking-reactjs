import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import { useParams } from "react-router-dom";

const Commitment = (props) => {
    const { type } = useParams();
    const handleConfirm = () => {
        const customer = JSON.parse(sessionStorage.getItem("customer"))
        const job = JSON.parse(sessionStorage.getItem("job"))
        const loanPurpose = JSON.parse(sessionStorage.getItem("loanPurpose"))
        const debtRepaymentSource = JSON.parse(sessionStorage.getItem("debtRepaymentSource"))
        const collaterals = JSON.parse(sessionStorage.getItem("collaterals"))

        const loan = {
            "priceRemaining": loanPurpose.priceLoan,
            "des": "",
            "userId": 1,
            "typeLoanId": type
        }
        console.log(loan);

        axios.post("http://localhost:8080/loan", loan)
            .then((response) => {
                console.log(response.data);
                const contract = {
                    ...customer,
                    ...job,
                    ...loanPurpose,
                    ...debtRepaymentSource,
                    loanId: response.data.id
                }
                axios.post("http://localhost:8080/contract", contract)
                    .then((response) => {
                        console.log(response.data);
                        if (type === 2) {
                            collaterals.map((collateral) => {
                                axios.post("http://localhost:8080/collateral", { ...collateral, contractId: response.data.id })
                                    .then((response) => {
                                        console.log(response.data);
                                    })
                                    .catch(error => console.log(error));
                            })
                        }
                        props.changeStep(props.step + 1);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));

    }
    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Cam kết</Typography>
                </Box>
                <Box padding='1rem'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component='p'>
                                Tôi xin cam kết:
                                Tất cả các thông tin trong Giấy đề nghị vay vốn này và tất cả các giấy tờ mà Tôi cung cấp cho Ngân hàng là đầy đủ, chính xác, hợp pháp và đúng sự
                                thực và Tôi chịu hoàn toàn trách nhiệm đối với bất kỳ thông tin sai lệch nào.
                            </Typography>
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

                                <Button variant="contained" onClick={handleConfirm}>Xong</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};

export default Commitment;