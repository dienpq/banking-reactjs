import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DataNotFound from "../../components/DataNotFound";
import CardBankLoan from "../../components/CardBankLoan";
import axios from "axios";
import { Link } from "react-router-dom";

const BankLoan = () => {
    const [loans, setLoans] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/loan/list?status=1")
            .then((response) => {
                console.log(response.data);
                setLoans(response.data)
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            <Container fixed>
                {
                    loans.length == 0 ? <DataNotFound
                        data={0}
                        content='Quý khách không còn khoản vay online còn hiệu lực'
                        pathBtn='/bank-loan/open'
                        titleBtn='Đăng ký mở khoản vay online'
                    /> : <Box maxWidth='500px' margin='0 auto' paddingTop='3rem'>
                        <Link to="/bank-loan/open" className='text-decoration-none'>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "100%",
                                    marginBottom: "2rem",
                                    bgcolor: '#00c853',
                                    '&:hover': {
                                        bgcolor: '#00b34a',
                                    }
                                }}
                            >
                                Đăng ký mở khoản vay mới
                            </Button>
                        </Link>

                        <Grid container spacing={2}>
                            {
                                loans.map((value, index) => (
                                    <Grid item xs={12} key={index}>
                                        <CardBankLoan
                                            code={value.loan.code}
                                            price={value.loan.priceRemaining}
                                            expiryDate="12/02/2023"
                                        />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>

                }
            </Container>
        </>
    );
};

export default BankLoan;