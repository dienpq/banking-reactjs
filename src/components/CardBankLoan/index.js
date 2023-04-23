import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const CardBankLoan = (props) => {
    return (
        <>
            <Paper elevation={3}>
                <Card sx={{
                    borderLeft: props.status == 1 ? "8px solid green" : props.status == -1 ? "8px solid red" : "8px solid yellow"
                }}>
                    <CardHeader title={<Typography fontWeight='700' color='#616161'>
                        {props.code}
                    </Typography>} />
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='body1'>
                                {props.price ? props.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : "0 đ"}
                            </Typography>
                            <Typography variant='caption'>
                                {props.expiryDate}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Paper>
        </>
    );
};

export default CardBankLoan;