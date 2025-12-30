import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import Careers from './components/Careers';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'careers'>('landing');

  if (currentPage === 'careers') {
    return <Careers onBack={() => setCurrentPage('landing')} />;
  }

  return (
    <LandingPage onCareersClick={() => setCurrentPage('careers')} />
  );
}