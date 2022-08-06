import * as React from 'react';
import { AppBar, Container, Typography, Toolbar, Menu, MenuItem, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router'

export const Navbar = () => {
    const links = ['/', '/library', '/project', '/community']
    const pages = ['Trang chủ', 'Thư viện', 'Dự án', 'Cộng đồng']
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const router = useRouter()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <nav>
            <AppBar position='static' sx={{ backgroundColor: '#FFFFFF!important' }} >
                <Container maxWidth='xl'
                    sx={{
                        padding: '0 2% !important'
                    }} >
                    <Toolbar disableGutters>
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                textDecoration: 'none',
                            }}
                        >
                            AnimalShelter
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="default"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" sx={{
                                            fontFamily: 'Inter, sans-serif',
                                            color: '#27272E !important'
                                        }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href="/"
                            sx={(theme) => ({
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                fontFamily: 'Inter, sans-serif',
                                color: '#27272E',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '1rem',
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '0.8rem',
                                    mr: 0,
                                },
                            })}
                        >
                            AnimalShelter
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                            {pages.map((page, index) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    component='a'
                                    href={links[index]}
                                    sx={(theme) => ({
                                        my: 2,
                                        display: 'block',
                                        fontFamily: 'Inter, sans-serif',
                                        color: '#98999D',
                                        "&:hover": {
                                            color: '#27272E',
                                        },

                                    })}
                                    className={router.pathname == links[index] && 'nav_bold'}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Button
                                variant='contained'
                                sx={(theme) => ({
                                    backgroundColor: '#4C6FFF',
                                    fontFamily: 'Inter, san-serif',
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '0.6rem',
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '0.5rem',
                                    },
                                })}
                            >
                                Tham gia ngay!
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );
}
