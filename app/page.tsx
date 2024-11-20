import { Hero } from '@/components/Hero';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url(./assets/home/desktop/mushroom-hero.webp)',
        height: '100vh',
        backgroundSize: '100%',
      }}
    >
      <Container>
        <hr></hr>
        <Hero />
      </Container>
    </div>
  );
}
