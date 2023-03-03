import { Box, FormControl, Input, Typography } from '@mui/material';
import { useState } from 'react';
import imageIcon from '../../assets/icon-image.png';

const PrevUploadImage = (props) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(URL.createObjectURL(img));
        }
    };
    return (
        <>
            <FormControl>
                <Input
                    id={props.inputFileId}
                    type="file"
                    inputProps={{
                        accept: "image/jpeg,image/png,image/gif"
                    }}
                    onChange={handleImageChange}
                    sx={{ display: 'none' }}
                />
            </FormControl>
            <Typography component='label' htmlFor={props.inputFileId} marginTop='0.5rem' sx={{ cursor: 'pointer' }}>
                {
                    image ? <Box component='img' src={image} alt='Preview' maxWidth='300px' /> :
                        <Box component='img' src={imageIcon} alt='Choose Image' maxWidth='200px' />
                }
            </Typography>
        </>
    );
};

export default PrevUploadImage;