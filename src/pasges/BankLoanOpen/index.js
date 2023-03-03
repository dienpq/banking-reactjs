import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import OptionLoan from '../../components/OptionLoan';

const BankLoanOpen = () => {
    return (
        <>
            <Container fixed>
                <Box maxWidth='600px' paddingTop='3rem' margin='0 auto'>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <OptionLoan
                                title='Vay tín chấp'
                                invitation='Lời mời vay vốn'
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the"
                                path='/bank-loan/open/0/register'
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <OptionLoan
                                title='Vay thế chấp'
                                invitation='Lời mời vay vốn'
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the"
                                path='/bank-loan/open/0/register'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default BankLoanOpen;