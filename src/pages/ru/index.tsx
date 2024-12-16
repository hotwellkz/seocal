import React from 'react';
import Calculator from '../../components/Calculator';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet-async';
import YandexMetrika from '../../components/YandexMetrika';

function RussianCalculator() {
  return (
    <>
      <YandexMetrika />
      <Helmet>
        <title>SEO Калькулятор - Рассчитайте необходимые ссылки для топовых позиций</title>
        <meta name="description" content="Бесплатный SEO калькулятор для расчета количества ссылок, необходимых для продвижения в топ Google и Яндекс. Учитывает конкуренцию, регион и текущие позиции." />
        <meta name="keywords" content="seo калькулятор, калькулятор ссылок, расчет ссылок для сео, seo продвижение" />
        <meta property="og:title" content="SEO Калькулятор ссылок" />
        <meta property="og:description" content="Рассчитайте необходимое количество ссылок для продвижения сайта в топ" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/ru" />
        <html lang="ru" />
      </Helmet>
      <div className="min-h-screen">
        <header className="glass-card">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold heading-gradient">SEO Калькулятор</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Calculator defaultLang="ru" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RussianCalculator;
