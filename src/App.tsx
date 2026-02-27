import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Products } from './components/Products';
import { Authority } from './components/Authority';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Products />
        <Authority />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}