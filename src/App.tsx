import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>SEO Link Calculator - Calculate Required Backlinks for Top Rankings</title>
        <meta name="description" content="Free SEO calculator tool to determine how many backlinks you need for top Google rankings. Calculate trusted domain links, PBN links & crowd marketing requirements." />
        <meta name="keywords" content="SEO calculator, backlink calculator, link building calculator, SEO tool" />
        <meta property="og:title" content="SEO Link Calculator" />
        <meta property="og:description" content="Calculate the number of backlinks needed for top search rankings" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com" />
        <html lang="en" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Calculator />
        </main>
      </div>
    </>
  );
}

export default App;