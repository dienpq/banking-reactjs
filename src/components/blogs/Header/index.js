import { AppBar, Avatar, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, Stack } from '@mui/material';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const pages = [
    {
        path: '/account/info',
        title: 'Thông tin tài khoản'
    },
    {
        path: '/bank-loan',
        title: 'Vay tiền'
    },
    {
        path: '/pay-interest',
        title: 'Trả lãi'
    }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="fixed" color='inherit'>
            <Container maxWidth='xl'>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Stack direction='row'>
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="default"
                                    aria-label="menu"
                                    sx={{ mr: 0 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                            <Logo width='160px' />
                        </Stack>
                    </Grid>
                    <Grid item xs={7}>
                        <Stack direction='row'>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                                {pages.map((page) => (
                                    <Link to={page.path} className='text-decoration-none'>
                                        <Button
                                            key={page.title}
                                            sx={{ my: 2, mx: 1 }}
                                        >
                                            {page.title}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 8 }}>
                                    <Avatar />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Box bgcolor='#e0e0e0' height='30px' display='flex' alignItems='center'>
                <Container fixed>
                    <Box width='100%' whiteSpace='nowrap' overflow='hidden' boxSizing='border-box'>
                        <Typography
                            component='p'
                            display='inline-block'
                            paddingLeft='100%'
                            sx={{
                                animation: 'marquee 15s linear infinite',
                                '@keyframes marquee': {
                                    '0%': {
                                        transform: 'translate(-100%, 0)'
                                    },
                                    '100%': {
                                        transform: 'translate(0, 0)'
                                    }
                                }
                            }}
                        >
                            jagsdkjahgdkjashgdkjshgdkjahgdajhsgdkashjgdkjh
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </AppBar>
    );
};

export default Header;