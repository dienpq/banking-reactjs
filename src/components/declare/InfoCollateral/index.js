import { Box, Button, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InfoCollateral = (props) => {
    const [formValues, setFormValues] = useState([{ name: '', owner: '', relation: '', assurance: '1' }]);

    const handleChange = (event, index) => {
        const { name, value } = event.target;
        const list = [...formValues];
        list[index][name] = value;
        setFormValues(list);
    };

    const handleAddFields = () => {
        setFormValues([...formValues, { name: '', owner: '', relation: '', assurance: '1' }]);
    };

    const handleRemoveFields = (index) => {
        const list = [...formValues];
        list.splice(index, 1);
        setFormValues(list);
    };
    return (
        <>
            <Paper>
                <Box padding='0.5rem 1rem' bgcolor='#00c853' borderRadius='4px 4px 0 0'>
                    <Typography fontSize='1.2rem' fontWeight='600'>Thông tin tài khoản đảm bảo</Typography>
                </Box>
                <Box padding='1rem'>
                    <Button
                        variant="contained"
                        sx={{ marginBottom: '1rem' }}
                        onClick={handleAddFields}
                    >
                        Thêm tài sản
                    </Button>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {
                                formValues.map((form, index) => (<Box key={index}>
                                    <Typography fontWeight='600' paddingBottom='0.5rem'>Tài sản số {index + 1}</Typography>
                                    <Grid container spacing={2}>
                                        {/* Tên tài sản bảo đảm */}
                                        <Grid item xs={6}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <Typography component='label'>
                                                    Tên tài sản
                                                </Typography>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Nhập tên tài sản"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={(event) => handleChange(event, index)}
                                                />
                                            </FormControl>
                                        </Grid>
                                        {/* Tên chủ sở hữu */}
                                        <Grid item xs={6}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <Typography component='label'>
                                                    Tên chủ sở hữu
                                                </Typography>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Nhập tên chủ sở hữu"
                                                    name="owner"
                                                    value={form.owner}
                                                    onChange={(event) => handleChange(event, index)}
                                                />
                                            </FormControl>
                                        </Grid>
                                        {/* Mối quan hệ của chủ sở hữu TSBĐ và khách hàng vay vốn */}
                                        <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <Typography component='label'>
                                                    Mối quan hệ của chủ sở hữu TSBĐ và khách hàng vay vốn
                                                </Typography>
                                                <TextField
                                                    variant="standard"
                                                    placeholder="Nhập thông tin"
                                                    name="relation"
                                                    value={form.relation}
                                                    onChange={(event) => handleChange(event, index)}
                                                />
                                            </FormControl>
                                        </Grid>
                                        {/* Tài sản có đang bảo đảm cho nghĩa vụ vay vốn nào không? */}
                                        <Grid item xs={12}>
                                            <FormControl sx={{ width: '100%' }}>
                                                <Typography component='label'>
                                                    Tài sản có đang bảo đảm cho nghĩa vụ vay vốn nào không?
                                                </Typography>
                                                <RadioGroup
                                                    row
                                                    defaultValue={1}
                                                    name="assurance"
                                                    value={form.assurance}
                                                    onChange={(event) => handleChange(event, index)}
                                                >
                                                    <FormControlLabel value="1" control={<Radio />} label="Đang bảo đảm" />
                                                    <FormControlLabel value="0" control={<Radio />} label="Không" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        {/* Nút xóa tài sản */}
                                        <Grid item xs={12}>
                                            <Button
                                                variant="contained"
                                                onClick={() => handleRemoveFields(index)}
                                                sx={{
                                                    bgcolor: '#f44336',
                                                    '&:hover': { bgcolor: '#e53935' }
                                                }}
                                            >
                                                Xóa
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>))
                            }
                        </Grid>
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

export default InfoCollateral;