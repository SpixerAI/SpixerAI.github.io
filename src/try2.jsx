import React from 'react';
import { Container, Typography, Button, Card, CardMedia, CardContent, Box, Grid, Paper } from '@mui/material';

export function Try2() {
  return (
    <div>
      <header style={{ backgroundColor: '#1976d2', padding: '20px', color: 'white', textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Product
        </Typography>
        <Typography variant="h5">
          Check out our prototype product and Android app below!
        </Typography>
      </header>

      <Container>
        <section style={{ padding: '20px 0' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Prototype Product
          </Typography>
          <Card>
            <CardMedia
              component="img"
              alt="Prototype"
              height="300"
              image="prototype-image-url" // Replace with your image URL
              title="Prototype Product"
            />
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Our prototype product is designed to make your life easier and more enjoyable. Learn more about its features and benefits here.
              </Typography>
            </CardContent>
          </Card>
        </section>

        <section style={{ padding: '20px 0' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Android App
          </Typography>
          <Paper elevation={3} sx={{ width: '250px', height: '500px', borderRadius: '36px', margin: '0 auto', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              alt="Android App"
              image="images/app_home_page_screenshot.png" // Replace with your image URL
              title="Android App"
              sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Paper>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Download our Android app from the Google Play Store and start enjoying its amazing features today!
          </Typography>
          <Button variant="contained" color="primary" href="google-play-store-link" target="_blank" rel="noopener noreferrer">
            Download App
          </Button>
        </section>

        <section style={{ padding: '20px 0' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We are a team of passionate individuals dedicated to bringing you the best products and services. Our mission is to innovate and improve your daily life.
          </Typography>
        </section>

        <section style={{ padding: '20px 0' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Have any questions? Feel free to reach out to us at:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Email: contact@example.com
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Phone: +1234567890
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Address: 123 Main St, Anytown, USA
          </Typography>
        </section>
      </Container>

      <footer style={{ backgroundColor: '#1976d2', padding: '10px', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; 2024 Our Company. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
