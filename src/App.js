import React from 'react';
import './App.css';
import AboutTerminal from './components/AboutTerminal';
import OtherExperience from './components/OtherExperience';
import PageHeader from './components/PageHeader';
import WorkExperience from './components/WorkExperience';
import TypingInfo from './components/TypingInfo';
function App() {
  return (
    <div className="App">
      <AboutTerminal />
      <OtherExperience />
      <WorkExperience />
    </div>
  );
}

export default App;
