import React from 'react';
import Navigation  from './Navigation';
import HeroSection from './Hero';
import Alert from './alert';
import SubHero from './SubHero';
import StatsSection from './Stats';
import LearnFlowInstructorPage from './InstructorPage';
import ValuesSection from './VaulesSection';
import CoursesSection from './Courses';
import Feedback from './Feedback';
import Footer from './Footer';
// import CoursesSection from './Courses';

const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col ">
        <Navigation />
        <Alert />
        <main>
          <HeroSection />
          <SubHero />
          {/* <StatsSection /> */}
          <ValuesSection />
          <CoursesSection />
          <Feedback />
          <LearnFlowInstructorPage />
          <Footer />

        </main>
      </div>
    );
  };
  
  export default LandingPage;