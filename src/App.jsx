import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useState } from 'react';

// Placeholder pages (we'll create these later)
const HomePage = () => <div>Home Page</div>;
const ProductsPage = () => <div>Products Page</div>;
const ProductDetailPage = () => <div>Product Detail Page</div>;
const CartPage = () => <div>Cart Page</div>;
const CheckoutPage = () => <div>Checkout Page</div>;
const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;
const ProfilePage = () => <div>Profile Page</div>;
const OrdersPage = () => <div>Orders Page</div>;
const WishlistPage = () => <div>Wishlist Page</div>;
const AboutPage = () => <div>About Page</div>;
const ContactPage = () => <div>Contact Page</div>;
const NotFoundPage = () => <div>404 - Not Found</div>;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          E-Commerce
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[['Home', '/', HomeIcon], ['Products', '/products', StoreIcon], ['Cart', '/cart', ShoppingCartIcon], ['Profile', '/profile', PersonIcon], ['About', '/about', InfoIcon], ['Contact', '/contact', ContactMailIcon]].map(([text, path, icon]) => (
          <ListItem button key={text} component={Navigate} to={path} replace>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Drawer for mobile */}
      {drawer}
      <Box sx={{ flexGrow: 1, pt: 3 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              E-Commerce
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Box>
    </Box>
  );
}

export default App;
