import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const Commitment = (props) => {
    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Cam kết</Typography>
                </Box>
                <Box padding='1rem'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component='p'>
                                Tôi xin cam kết:
                                Tất cả các thông tin trong Giấy đề nghị vay vốn này và tất cả các giấy tờ mà Tôi cung cấp cho Ngân hàng là đầy đủ, chính xác, hợp pháp và đúng sự
                                thực và Tôi chịu hoàn toàn trách nhiệm đối với bất kỳ thông tin sai lệch nào.
                            </Typography>
                        </Grid>
                        {/* Nút điều khiển */}
                        <Grid item xs={12}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Button
                                    variant="contained"
                                    onClick={() => props.changeStep(4)}
                                    sx={{
                                        bgcolor: '#9e9e9e',
                                        '&:hover': {
                                            bgcolor: '#8c8c8c'
                                        }
                                    }}
                                >
                                    Quay lại
                                </Button>

                                <Button variant="contained" onClick={() => props.changeStep(6)}>Xong</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};

export default Commitment;