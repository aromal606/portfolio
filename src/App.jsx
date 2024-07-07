
import './index.css';
import Navbar from "./components/NavbarComponent";
import NameSectionComponent from "./components/NameSectionComponent";
import AboutComponent from './components/AboutComponent';
import TechnologiesComponent from './components/TechnologiesComponent';
import ProjectsComponent from './components/ProjectsComponent';

const App = () => {
  return (
    <div className="text-neutral-400 antialiased selection:text-white scrollbar-hide h-screen overflow-auto">
      {/* Background and container setup */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto max-w-full">
        <Navbar />
      </div>
      <NameSectionComponent />
      <AboutComponent/>
      <TechnologiesComponent/>
      <ProjectsComponent/>
    </div>
  );
};

export default App;
