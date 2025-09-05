import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0E4F12' }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {/* Logo + Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocalDiningIcon sx={{ fontSize: 60, color: 'gold' }} /> 
            <Typography
              variant="h2"
              noWrap
              component={Link}
              to="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                flexGrow: { xs: 1, md: 0 },
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Forgttn Soldier
            </Typography>

            {/* Image next to text */}
            <Box
              component="img"
              src="src/images/image1.JPG"
              alt="Forgttn Soldier Logo"
              sx={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                objectFit: 'cover',
              }} 
            />
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  {page.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu - Right aligned */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                sx={{
                  my: 3,
                  mx: 2,
                  fontSize: '1.2rem',
                  color: '#ffffff',
                  '&:hover': { color: '#689f38' },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
