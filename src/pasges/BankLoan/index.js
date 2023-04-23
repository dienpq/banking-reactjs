import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DataNotFound from "../../components/DataNotFound";
import CardBankLoan from "../../components/CardBankLoan";
import axios from "axios";
import { Link } from "react-router-dom";

function formatDate(dateFormat, format) {
    const date = new Date(dateFormat)
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    let formattedDate;

    switch (format) {
        case 'iso':
            formattedDate = `${year}-${month}-${day}`;
            break;
        case 'vn':
            formattedDate = `${day}/${month}/${year}`;
            break;
        default:
            formattedDate = date.toLocaleDateString();
            break;
    }

    return formattedDate;
}


const BankLoan = () => {
    const [loans, setLoans] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/loan/list?status=1")
            .then((response) => {
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
                                        <Link to={`/bank-loan/${value.loan.id}/pay-interest`} className='text-decoration-none'>
                                            <CardBankLoan
                                                code={value.loan.code}
                                                price={value.loan.priceRemaining}
                                                expiryDate={formatDate(value.contract.createdAt, 'vn')}
                                                status={value.contract.status}
                                            />
                                        </Link>
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