import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import React from 'react';

const CardBankLoan = () => {
    return (
        <>
            <Paper elevation={3}>
                <Card>
                    <CardHeader title={<Typography fontWeight='700' color='#616161'>
                        Tên khoản vay
                    </Typography>} />
                    <CardContent></CardContent>
                </Card>
            </Paper>
        </>
    );
};

export default CardBankLoan;