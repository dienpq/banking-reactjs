import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import DataNotFound from "../../components/DataNotFound";
import CardBankLoan from "../../components/CardBankLoan";

const BankLoan = () => {
    const [data, setData] = useState(true)

    return (
        <>
            <Container fixed>
                {
                    data ? <DataNotFound
                        data={0}
                        content='Quý khách không còn khoản vay online còn hiệu lực'
                        pathBtn='/bank-loan/open'
                        titleBtn='Đăng ký mở khoản vay online'
                    /> : <Box maxWidth='500px' margin='0 auto' paddingTop='3rem'>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <CardBankLoan />
                            </Grid>
                            <Grid item xs={12}>
                                <CardBankLoan />
                            </Grid>
                        </Grid>
                    </Box>

                }
            </Container>
        </>
    );
};

export default BankLoan;