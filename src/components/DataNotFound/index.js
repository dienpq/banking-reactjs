import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from "react-router-dom";

const DataNotFound = (props) => {
    return (
        <>
            <Box paddingTop='4rem'>
                <Paper elevation={3} sx={{ maxWidth: '500px', height: '200px', padding: '2rem', margin: '0 auto' }}>
                    <Stack direction='column' justifyContent='space-around' alignItems='center'>
                        <Typography>{props.content}</Typography>
                        <Box>
                            <FolderIcon sx={{ fontSize: '100px', color: '#bdbdbd' }} />
                        </Box>

                        <Link to={props.pathBtn} className='text-decoration-none'>
                            <Button variant="contained">{props.titleBtn}</Button>
                        </Link>
                    </Stack>
                </Paper>
            </Box>
        </>
    );
};

export default DataNotFound;