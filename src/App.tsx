import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  const Divider = () => <div className="w-full h-px bg-transparent border-t border-dashed border-white/10 my-12" />;

  return (
    <Layout>
      <Header />
      <Divider />
      <Hero />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <TechStack />
      <Footer />
    </Layout>
  )
}

export default App
