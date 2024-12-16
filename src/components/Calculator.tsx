import React, { useState } from 'react';
import { Calculator, Share2, Mail, MessageCircle, Send, Download } from 'lucide-react';
import { cities } from '../data/cities';
import { translations } from '../i18n/translations';
import SearchableSelect from './SearchableSelect';
import { useLanguage } from '../context/LanguageContext';

interface CalculationResult {
  monthlyLinks: number;
  trustLinks: number;
  pbnLinks: number;
  crowdLinks: number;
  totalBudget: number;
}

const SEOCalculator: React.FC = () => {
  const { lang } = useLanguage();

  const [competition, setCompetition] = useState('medium');
  const [region, setRegion] = useState(cities[0].value);
  const [position, setPosition] = useState('10');
  const [budget, setBudget] = useState('1000');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const getCurrencySymbol = () => '$';
  const getCurrencyValue = (value: number) => value;

  const t = translations[lang];

  const calculateLinks = () => {
    // Base multipliers for different competition levels
    const competitionMultiplier = {
      low: 1,
      medium: 1.5,
      high: 2.5
    };

    const selectedCity = cities.find(city => city.value === region);
    const regionMultiplier = selectedCity ? selectedCity.multiplier : 1;

    // Calculate based on current position
    const positionNumber = parseInt(position);
    const positionMultiplier = positionNumber > 10 ? 2 : positionNumber > 5 ? 1.5 : 1;
    
    const budgetNumber = parseInt(budget);
    
    // Calculate total monthly links needed
    const baseLinks = 10;
    const totalLinks = Math.round(
      baseLinks * 
      competitionMultiplier[competition as keyof typeof competitionMultiplier] * 
      regionMultiplier * 
      positionMultiplier
    );

    // Distribution of link types
    const result: CalculationResult = {
      monthlyLinks: totalLinks,
      trustLinks: Math.round(totalLinks * 0.4),
      pbnLinks: Math.round(totalLinks * 0.35),
      crowdLinks: Math.round(totalLinks * 0.25),
      totalBudget: budgetNumber
    };

    setResult(result);
  };

  const shareResult = (method: 'email' | 'whatsapp' | 'telegram' | 'download') => {
    if (!result) return;

    const message = `
${t.calculator_title}:
${t.total_monthly_links}: ${result.monthlyLinks}
- ${t.trusted_domain_links}: ${result.trustLinks}
- ${t.pbn_links}: ${result.pbnLinks}
- ${t.crowd_marketing}: ${result.crowdLinks}
${t.monthly_budget_result}: ${getCurrencyValue(result.totalBudget)}${getCurrencySymbol()}
    `.trim();

    switch (method) {
      case 'email':
        window.location.href = `mailto:?subject=SEO Link Calculator Results&body=${encodeURIComponent(message)}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'download':
        const blob = new Blob([message], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'seo-calculator-results.txt';
        a.click();
        window.URL.revokeObjectURL(url);
        break;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold heading-gradient">{t.calculator_title}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {t.competition_level}
              </label>
              <select 
                value={competition}
                onChange={(e) => setCompetition(e.target.value)}
                className="w-full select-dark"
              >
                <option value="low">{t.competition_low}</option>
                <option value="medium">{t.competition_medium}</option>
                <option value="high">{t.competition_high}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {t.target_region}
              </label>
              <SearchableSelect
                options={cities}
                value={region}
                onChange={setRegion} 
                placeholder={t.search_placeholder}
                className="input-dark"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {t.current_position}
              </label>
              <input
                type="number"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                min="1"
                max="100"
                className="w-full input-dark"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {`${t.monthly_budget} $`}
              </label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                min="100"
                step="100"
                className="w-full input-dark"
                placeholder="1000"
              />
            </div>
          </div>
        </div>

        <button
          onClick={calculateLinks}
          className="w-full mt-6 button-primary"
        >
          {t.calculate_button}
        </button>
      </div>

      {result && (
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Share2 className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold heading-gradient">{t.results}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="result-card">
                <p className="text-lg font-semibold text-gray-200">
                  {t.total_monthly_links}: {result.monthlyLinks}
                </p>
                <ul className="mt-3 space-y-2 text-gray-400">
                  <li>• {t.trusted_domain_links}: {result.trustLinks}</li>
                  <li>• {t.pbn_links}: {result.pbnLinks}</li>
                  <li>• {t.crowd_marketing}: {result.crowdLinks}</li>
                </ul>
              </div>
              <div className="budget-card">
                <p className="text-lg font-semibold text-purple-200">
                  {t.monthly_budget_result}: ${result.totalBudget}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => shareResult('email')}
                className="button-secondary"
              >
                <Mail className="w-5 h-5" />
                {t.send_email}
              </button>
              <button
                onClick={() => shareResult('whatsapp')}
                className="button-secondary"
              >
                <MessageCircle className="w-5 h-5" />
                {t.share_whatsapp}
              </button>
              <button
                onClick={() => shareResult('telegram')}
                className="button-secondary"
              >
                <Send className="w-5 h-5" />
                {t.share_telegram}
              </button>
              <button
                onClick={() => shareResult('download')}
                className="button-secondary"
              >
                <Download className="w-5 h-5" />
                {t.download_results}
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="glass-card rounded-2xl p-8">
        <h2 className="text-2xl font-bold heading-gradient mb-4">{t.calculator_explanation_title}</h2>
        <p className="text-gray-300 whitespace-pre-line">{t.calculator_explanation}</p>
      </div>
      
      <div className="glass-card rounded-2xl p-8">
        <h2 className="text-2xl font-bold heading-gradient mb-6">{t.faq_title}</h2>
        <div className="space-y-6">
          {t.faq_questions.map((faq, index) => (
            <div key={index} className="border-b border-gray-700/50 pb-4 last:border-0">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOCalculator;