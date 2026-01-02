import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import Careers from './components/Careers';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Security from './components/Security';

type Page = 'landing' | 'careers' | 'privacy' | 'terms' | 'security';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  if (currentPage === 'careers') {
    return <Careers onBack={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'security') {
    return <Security onBack={() => setCurrentPage('landing')} />;
  }

  return (
    <LandingPage
      onCareersClick={() => setCurrentPage('careers')}
      onPrivacyClick={() => setCurrentPage('privacy')}
      onTermsClick={() => setCurrentPage('terms')}
      onSecurityClick={() => setCurrentPage('security')}
    />
  );
}