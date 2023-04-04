import { AppBar, Avatar, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, Stack, MenuList, Divider } from '@mui/material';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

const pages = [
    {
        path: '/bank-loan',
        title: 'Khoản vay'
    },
    {
        path: '/bank-loan/history',
        title: 'Lịch sử đăng ký'
    }
]

const Header = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [hiddenAccountBalance, setHiddenAccountBalance] = useState(true);
    const [accountBalance, setAccountBalance] = useState(0);
    const [user, setUser] = useState({})

    const userId = 1;

    useEffect(() => {
        axios.get(`http://localhost:8080/user/${userId}`)
            .then((response) => {
                setUser(response.data)
                setAccountBalance(response.data.price)
            })
            .catch(error => console.log(error));
    }, [userId])

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleHiddenAccountBalance = () => {
        setHiddenAccountBalance(!hiddenAccountBalance)
    }
    return (
        <AppBar position="fixed" color='inherit'>
            <Container maxWidth='xl'>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Stack direction='row' alignItems='center'>
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
                            <Link to='/'>
                                <Logo width='160px' />
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={7}>
                        <Stack direction='row' alignItems='center'>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                                {pages.map((page, index) => (
                                    <Link to={page.path} key={index} className='text-decoration-none'>
                                        <Button
                                            key={page.title}
                                            sx={{ my: 2, mx: 1 }}
                                        >
                                            {page.title}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                            <Box>
                                <Tooltip title="Thông tin tài khoản">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 8 }}>
                                        <Avatar />
                                    </IconButton>
                                </Tooltip>
                            </Box>
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
                                <MenuList sx={{ width: '180px', maxWidth: '100%', padding: '0' }}>
                                    <Box padding='0.5rem 1rem'>
                                        <Typography variant='body1' fontWeight='600'>Tài khoản chính</Typography>
                                        <Typography variant='body2' noWrap fontWeight='600' color='#9e9e9e'>{user.bankAccount}</Typography>
                                        <Stack direction='row' justifyContent='space-between' marginTop='4px'>
                                            <Typography variant='body1' fontWeight='600' color='#616161'>
                                                {
                                                    hiddenAccountBalance ? '*** *** ***' :
                                                        accountBalance + 'đ'
                                                }
                                            </Typography>
                                            {
                                                hiddenAccountBalance ? <VisibilityIcon
                                                    fontSize='small'
                                                    sx={{ cursor: 'pointer', color: '#616161' }}
                                                    onClick={handleHiddenAccountBalance}
                                                /> : <VisibilityOffIcon
                                                    fontSize='small'
                                                    sx={{ cursor: 'pointer', color: '#616161' }}
                                                    onClick={handleHiddenAccountBalance}
                                                />
                                            }

                                        </Stack>
                                    </Box>
                                    <Divider sx={{ marginY: '0.5rem' }} />
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Link to='/account/info' className='text-decoration-none' style={{ width: '100%' }}>
                                            <Typography textAlign='center' color='#000'>Thông tin cá nhân</Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Link to='/account/info' className='text-decoration-none' style={{ width: '100%' }}>
                                            <Typography textAlign='center' color='#000'>Đổi mật khẩu</Typography>
                                        </Link>
                                    </MenuItem>
                                    <Divider sx={{ marginY: '0.5rem' }} />
                                    <MenuItem
                                        onClick={handleCloseUserMenu}
                                        sx={{
                                            bgcolor: '#00c853',
                                            '&:hover': {
                                                bgcolor: '#00b34a',
                                            }
                                        }}
                                    >
                                        <Link className='text-decoration-none' style={{ width: '100%' }}>
                                            <Typography textAlign='center' color='#fff'>Đăng xuất</Typography>
                                        </Link>
                                    </MenuItem>
                                </MenuList>
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
        </AppBar >
    );
};

export default Header;