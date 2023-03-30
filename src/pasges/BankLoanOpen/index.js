import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OptionLoan from '../../components/OptionLoan';

const BankLoanOpen = () => {
    const [typeLoan, setTypeLoan] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/type-loan")
            .then((response) => {
                setTypeLoan(response.data)
            }).catch((error) => {
                console.log(error)
            });
    }, [])
    return (
        <>
            <Container fixed>
                <Box maxWidth='600px' paddingTop='3rem' margin='0 auto'>
                    <Grid container spacing={3}>
                        {
                            typeLoan.map((type, index) => (
                                <Grid item xs={12} key={index}>
                                    <OptionLoan
                                        title={type.name}
                                        invitation={type.invitation}
                                        description={type.des}
                                        path={`/bank-loan/open/${type.id}/register`}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default BankLoanOpen;