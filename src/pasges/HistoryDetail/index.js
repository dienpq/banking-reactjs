import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SuccessForConfirmation from '../../components/SuccessForConfirmation';
import ErrorForConfirmation from '../../components/ErrorForConfirmation';
import WaitForConfirmation from '../../components/WaitForConfirmation';

const HistoryDetail = () => {
    const { id } = useParams();
    const [contract, setContract] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8080/contract/${id}`)
            .then((response) => {
                setContract(response.data)
            })
            .catch(error => console.log(error));
    }, [id])
    return (
        <Box paddingTop='3rem'>
            {
                contract.status === 1 ? <SuccessForConfirmation email={contract.email} /> :
                    contract.status === -1 ? <ErrorForConfirmation email={contract.email} /> :
                        contract.status === 0 ? <WaitForConfirmation email={contract.email} /> : null
            }
        </Box>
    );
};

export default HistoryDetail;