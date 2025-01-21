import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import TrainingSummary from "./pages/TrainingSummary";
import QualificationsAndAccomplishments from "./pages/QualificationsAndAccomplishments";
import RecentProjects from "./pages/RecentProjects";

const App = () => {
  return (
    <>
    <div className="bg-gray-100 text-gray-900 font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Experience />
        <RecentProjects />
        <Education />
        <Skills />
        <QualificationsAndAccomplishments />
        <TrainingSummary />
        <Contact />
      </main>
    </div>
    </>
  );
}

export default App;