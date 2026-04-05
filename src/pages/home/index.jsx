import { Box, Typography, Button, Stack, Card, CardContent, CardMedia, TextField, Typography as MuiTypography } from '@mui/material';
import { useState } from 'react';

const HeroSection = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)', 
      padding: '4rem 0', 
      textAlign: 'center' 
    }}>
      <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Store
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover amazing products at unbeatable prices
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained">Shop Now</Button>
          <Button variant="outlined">Explore Categories</Button>
        </Box>
      </Box>
    </Box>
  );
};

const FeaturedProducts = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Mock data for now - we'll replace with Supabase data later
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/300' },
  ];

  return (
    <Box sx={{ padding: '4rem 0' }}>
      <Box sx={{ maxWidth: 1200, margin: '0 auto', px: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Featured Products
        </Typography>
        <Box sx={{ mb: 3 }}>
          <TextField
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 3 }}>
          {products.map(product => (
            <Card key={product.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button size="small" variant="outlined">Add to Cart</Button>
                <Button size="small" variant="contained">Buy Now</Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const CategoriesSection = () => {
  // Mock categories
  const categories = [
    { name: 'Electronics', count: 24 },
    { name: 'Clothing', count: 18 },
    { name: 'Home & Garden', count: 12 },
    { name: 'Books', count: 30 },
  ];

  return (
    <Box sx={{ padding: '4rem 0', backgroundColor: '#fafafa' }}>
      <Box sx={{ maxWidth: 1200, margin: '0 auto', px: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Shop by Category
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 3, mt: 4 }}>
          {categories.map(category => (
            <Box key={category.name} sx={{ textAlign: 'center', p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                {category.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.count} products
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const OffersSection = () => {
  return (
    <Box sx={{ padding: '4rem 0' }}>
      <Box sx={{ maxWidth: 1200, margin: '0 auto', px: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Special Offers
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 4 }}>
          {[1, 2, 3].map((offer) => (
            <Box key={offer} sx={{ flex: 1, minWidth: 250, backgroundColor: '#fff3e0', p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Special Offer {offer}
              </Typography>
              <Typography variant="body1">
                Save up to 50% on selected items
              </Typography>
              <Box sx={{ mt: 3, textAlign: 'right' }}>
                <Button variant="contained" size="small">
                  Shop Offer
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const TestimonialsSection = () => {
  // Mock testimonials
  const testimonials = [
    { name: 'John D.', text: 'Great products and fast shipping!' },
    { name: 'Sarah K.', text: 'I love the variety of items available.' },
    { name: 'Mike T.', text: 'Customer service is excellent.' },
  ];

  return (
    <Box sx={{ padding: '4rem 0', backgroundColor: '#fafafa' }}>
      <Box sx={{ maxWidth: 1200, margin: '0 auto', px: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          What Our Customers Say
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ flex: 1, minWidth: 250, p: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 0 }}>
              <Typography variant="body1" italic>
                "{testimonial.text}"
              </Typography>
              <Box sx={{ mt: 2, textAlign: 'right' }}>
                <Typography variant="body2" color="text.secondary">
                  - {testimonial.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <OffersSection />
      <TestimonialsSection />
    </>
  );
}
