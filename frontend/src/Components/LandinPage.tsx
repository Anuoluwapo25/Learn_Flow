import React from 'react';
import Navigation  from './Navigation';
import HeroSection from './Hero';
import StatsSection from './Stats';
import ValuesSection from './VaulesSection';
// import CoursesSection from './Courses';

const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main>
          <HeroSection />
          {/* <StatsSection />
          <ValuesSection /> */}
        </main>
      </div>
    );
  };
  
  export default LandingPage;