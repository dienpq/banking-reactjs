import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const OptionLoan = (props) => {
    return (
        <>
            <Paper>
                <Card>
                    <CardHeader title={
                        <Typography fontWeight='700'>
                            {props.title}
                        </Typography>
                    }
                    />
                    <CardContent sx={{ padding: '0' }}>
                        <Box bgcolor='#00e676' padding='1rem 2rem'>
                            <Typography variant='body1'>{props.invitation}</Typography>
                        </Box>
                        <Box padding='1rem'>
                            <Typography variant='body2'>
                                {props.description}
                            </Typography>
                        </Box>
                    </CardContent>
                    <Box paddingX='1rem'>
                        <Divider></Divider>
                    </Box>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Link to={props.path} className='text-decoration-none' style={{ width: '100%' }}>
                            <Button sx={{ width: '100%', color: '#00c853' }}>Mở ngay</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Paper>
        </>
    );
};

export default OptionLoan;