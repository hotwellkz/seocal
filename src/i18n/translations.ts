export interface Translations {
  [key: string]: {
    calculator_title: string;
    calculator_explanation_title: string;
    calculator_explanation: string;
    faq_title: string;
    faq_questions: Array<{
      question: string;
      answer: string;
    }>;
    competition_level: string;
    target_region: string;
    current_position: string;
    monthly_budget: string;
    calculate_button: string;
    results: string;
    total_monthly_links: string;
    trusted_domain_links: string;
    pbn_links: string;
    crowd_marketing: string;
    monthly_budget_result: string;
    send_email: string;
    share_whatsapp: string;
    share_telegram: string;
    download_results: string;
    search_placeholder: string;
    competition_low: string;
    competition_medium: string;
    competition_high: string;
  };
}

export const translations: Translations = {
  en: {
    calculator_explanation_title: 'How the Calculator Works',
    calculator_explanation: 'Our SEO Link Calculator uses advanced algorithms to determine the optimal number of backlinks needed for your website. The calculation takes into account multiple factors:\n\n• Competition Level - Analyzes the strength of competitors in your niche\n• Regional Factor - Considers local market specifics\n• Current Position - Evaluates the gap between current and desired rankings\n• Link Distribution - Optimally divides links between trusted domains, PBN networks, and crowd marketing',
    faq_title: 'Top 20 SEO Questions',
    faq_questions: [
      {
        question: 'What is SEO?',
        answer: 'Search Engine Optimization (SEO) is the practice of improving a website to increase its visibility in search engines like Google.'
      },
      // ... other English FAQ items
    ],
    calculator_title: 'SEO Link Calculator',
    competition_level: 'Competition Level',
    target_region: 'Target Region',
    current_position: 'Current Position',
    monthly_budget: 'Monthly Budget ($)',
    calculate_button: 'Calculate Required Links',
    results: 'Results',
    total_monthly_links: 'Total Monthly Links',
    trusted_domain_links: 'Trusted Domain Links',
    pbn_links: 'PBN Links',
    crowd_marketing: 'Crowd Marketing',
    monthly_budget_result: 'Monthly Budget',
    send_email: 'Send via Email',
    share_whatsapp: 'Share on WhatsApp',
    share_telegram: 'Share on Telegram',
    download_results: 'Download Results',
    search_placeholder: 'Search cities...',
    competition_low: 'Low Competition',
    competition_medium: 'Medium Competition',
    competition_high: 'High Competition'
  },
  ru: {
    calculator_explanation_title: 'Как работает калькулятор',
    calculator_explanation: 'Наш SEO калькулятор ссылок использует продвинутые алгоритмы для определения оптимального количества обратных ссылок. Расчет учитывает несколько факторов:\n\n• Уровень конкуренции - Анализирует силу конкурентов в вашей нише\n• Региональный фактор - Учитывает особенности местного рынка\n• Текущая позиция - Оценивает разрыв между текущими и желаемыми позициями\n• Распределение ссылок - Оптимально распределяет ссылки между доверенными доменами, PBN-сетями и крауд-маркетингом',
    faq_title: 'Топ 20 вопросов по SEO',
    faq_questions: [
      {
        question: 'Что такое SEO?',
        answer: 'SEO (поисковая оптимизация) - это комплекс мер по улучшению сайта для повышения его видимости в поисковых системах, таких как Google и Яндекс.'
      },
      {
        question: 'Как долго ждать результатов от SEO?',
        answer: 'Первые результаты обычно видны через 3-6 месяцев, но для достижения высоких позиций может потребоваться 6-12 месяцев.'
      },
      {
        question: 'Что такое обратные ссылки?',
        answer: 'Обратные ссылки (бэклинки) - это ссылки с других сайтов, ведущие на ваш сайт. Они являются важным фактором ранжирования.'
      },
      {
        question: 'Что такое PBN?',
        answer: 'PBN (Private Blog Network) - это сеть сайтов, созданных специально для размещения ссылок на продвигаемый сайт.'
      },
      {
        question: 'Что влияет на позиции в поиске?',
        answer: 'На позиции влияют: качество контента, обратные ссылки, техническая оптимизация, поведенческие факторы и другие параметры.'
      },
      {
        question: 'Как выбрать правильные ключевые слова?',
        answer: 'Нужно анализировать поисковый спрос, конкуренцию и релевантность запросов вашему бизнесу.'
      },
      {
        question: 'Что такое крауд-маркетинг?',
        answer: 'Это размещение естественных упоминаний и ссылок на форумах, в комментариях и социальных сетях.'
      },
      {
        question: 'Как часто нужно обновлять контент?',
        answer: 'Рекомендуется регулярное обновление - минимум раз в неделю для блога и по мере необходимости для основных страниц.'
      },
      {
        question: 'Что такое мета-теги?',
        answer: 'Это HTML-элементы, которые описывают содержимое страницы для поисковых систем (title, description).'
      },
      {
        question: 'Как оптимизировать сайт под мобильные устройства?',
        answer: 'Использовать адаптивный дизайн, оптимизировать скорость загрузки и обеспечить удобную навигацию.'
      },
      {
        question: 'Что такое индексация сайта?',
        answer: 'Это процесс добавления страниц сайта в базу данных поисковой системы.'
      },
      {
        question: 'Как проверить позиции сайта?',
        answer: 'Использовать специальные сервисы мониторинга позиций или инструменты вебмастеров.'
      },
      {
        question: 'Что такое LSI-копирайтинг?',
        answer: 'Это метод написания текстов с использованием семантически связанных ключевых слов.'
      },
      {
        question: 'Как улучшить скорость загрузки сайта?',
        answer: 'Оптимизировать изображения, использовать кэширование, минифицировать код и выбрать хороший хостинг.'
      },
      {
        question: 'Что такое robots.txt?',
        answer: 'Файл, который указывает поисковым роботам, какие страницы сайта можно индексировать.'
      },
      {
        question: 'Как бороться с дублями страниц?',
        answer: 'Использовать канонические URL, настроить редиректы и следить за структурой сайта.'
      },
      {
        question: 'Что такое перелинковка?',
        answer: 'Это система внутренних ссылок между страницами сайта для улучшения навигации и SEO.'
      },
      {
        question: 'Как часто нужно проводить аудит сайта?',
        answer: 'Полный аудит рекомендуется проводить раз в 6-12 месяцев, а базовый мониторинг - ежемесячно.'
      },
      {
        question: 'Что такое SEO-friendly URL?',
        answer: 'Это понятные человеку и поисковым системам адреса страниц, содержащие ключевые слова.'
      },
      {
        question: 'Как измерить эффективность SEO?',
        answer: 'Отслеживать позиции, трафик, конверсии, поведенческие факторы и ROI.'
      }
    ],
    calculator_title: 'Калькулятор SEO-ссылок',
    competition_level: 'Уровень конкуренции',
    target_region: 'Целевой регион',
    current_position: 'Текущая позиция',
    monthly_budget: 'Месячный бюджет ($)',
    calculate_button: 'Рассчитать необходимые ссылки',
    results: 'Результаты',
    total_monthly_links: 'Всего ссылок в месяц',
    trusted_domain_links: 'Ссылки с доверенных доменов',
    pbn_links: 'Ссылки с PBN',
    crowd_marketing: 'Крауд-маркетинг',
    monthly_budget_result: 'Месячный бюджет',
    send_email: 'Отправить по email',
    share_whatsapp: 'Поделиться в WhatsApp',
    share_telegram: 'Поделиться в Telegram',
    download_results: 'Скачать результаты',
    search_placeholder: 'Поиск городов...',
    competition_low: 'Низкая конкуренция',
    competition_medium: 'Средняя конкуренция',
    competition_high: 'Высокая конкуренция'
  }
};