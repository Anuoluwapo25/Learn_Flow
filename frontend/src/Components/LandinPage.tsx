import React from 'react';
import Navigation  from './Navigation';
import HeroSection from './Hero';
import Alert from './alert';
import SubHero from './SubHero';
import StatsSection from './Stats';
import ValuesSection from './VaulesSection';
// import CoursesSection from './Courses';

const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col ">
        <Navigation />
        <Alert />
        <main>
          <HeroSection />
          {/* <SubHero /> */}
          <StatsSection />
          <ValuesSection />
        </main>
      </div>
    );
  };
  
  export default LandingPage;