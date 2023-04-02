import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardBankLoan from '../../components/CardBankLoan';

const BankLoanHistory = () => {
    const [loans, setLoans] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/loan/list?status=all")
            .then((response) => {
                console.log(response.data);
                setLoans(response.data)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <>
            <Box maxWidth='500px' margin='0 auto' paddingTop='3rem'>
                <Grid container spacing={2}>
                    {
                        loans.map((value, index) => (
                            <Grid item xs={12} key={index}>
                                <CardBankLoan
                                    code={value.loan.code}
                                    price={value.loan.priceRemaining}
                                    expiryDate="12/02/2023"
                                    status={value.contract.status}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    );
};

export default BankLoanHistory;