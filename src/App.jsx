import WelcomeContent from './components/WelcomeContent.jsx';
import MyExperience from './components/MyExperience.jsx';
import AboutMe from './components/AboutMe.jsx';

export default function App() {
  return (
    <main
      id="scrollable"
      className="h-screen snap-y snap-mandatory scroll-smooth bg-main-blue text-main-txt"
    >
      <WelcomeContent />
      <AboutMe />
      <MyExperience />
    </main>
  );
}
