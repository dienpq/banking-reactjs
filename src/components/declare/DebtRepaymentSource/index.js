import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const DebtRepaymentSource = (props) => {
    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Nguồn trả nợ</Typography>
                </Box>
                <Box padding='1rem'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}></Grid>
                        {/* Nút điều khiển */}
                        <Grid item xs={12}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Button
                                    variant="contained"
                                    onClick={() => props.changeStep(3)}
                                    sx={{
                                        bgcolor: '#9e9e9e',
                                        '&:hover': {
                                            bgcolor: '#8c8c8c'
                                        }
                                    }}
                                >
                                    Quay lại
                                </Button>

                                <Button variant="contained" onClick={() => props.changeStep(5)}>Tiếp tục</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};

export default DebtRepaymentSource;