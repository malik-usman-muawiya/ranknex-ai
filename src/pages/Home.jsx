import React from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import StatsBar from '../components/home/StatsBar.jsx';
import ServicesGrid from '../components/home/ServicesGrid.jsx';
import AEOGeoSection from '../components/home/AEOGeoSection.jsx';
import LocalSEOSection from '../components/home/LocalSEOSection.jsx';
import WhyRankNex from '../components/home/WhyRankNex.jsx';
import ProcessSection from '../components/home/ProcessSection.jsx';
import TestimonialsSlider from '../components/home/TestimonialsSlider.jsx';
import CaseStudyPreview from '../components/home/CaseStudyPreview.jsx';
import BlogPreview from '../components/home/BlogPreview.jsx';
import CTABanner from '../components/home/CTABanner.jsx';

export default function Home() {
  return (
    <div className="home-page" style={{ backgroundColor: '#ffffff' }}>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <AEOGeoSection />
      <LocalSEOSection />
      <WhyRankNex />
      <ProcessSection />
      <TestimonialsSlider />
      <CaseStudyPreview />
      <BlogPreview />
      <CTABanner />
    </div>
  );
}
