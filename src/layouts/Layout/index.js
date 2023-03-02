import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../../components/blogs/Header';
import Footer from '../../components/blogs/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Box marginTop='100px'>{children}</Box>
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;