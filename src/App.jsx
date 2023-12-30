import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import WelcomeContent from './components/WelcomeContent.jsx';
import AboutMe from './components/AboutMe.jsx';

export default function App() {
  return (
    <main
      id="scrollable"
      className="h-screen snap-y snap-mandatory scroll-smooth bg-main-blue text-main-txt"
    >
      <WelcomeContent />
      <AboutMe />
    </main>
  );
}
