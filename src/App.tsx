import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Authority from './components/Authority';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';

function App() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Authority />
      <Footer />
      <WhatsApp />
    </main>
  );
}

export default App;