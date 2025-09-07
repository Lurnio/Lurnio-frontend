
import type { NextPage } from "next";
import Head from "next/head";

interface TableOfContentsItem {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
}

interface ExampleLetter {
  id: string;
  title: string;
  englishExample: string;
  translation: string;
}

const BusinessCommunicationGuide: NextPage = () => {

  const tableOfContents: TableOfContentsItem[] = [
    {
      id: "when-to-use",
      title: "Когда использовать правила деловой переписки?",
    },
    {
      id: "main-types",
      title: "Основные виды деловых писем",
      subsections: [
        {
          id: "proposal-letter",
          title: "Письмо-предложение или Proposal Letter",
        },
        {
          id: "application-letter",
          title: "Письмо-заявление или Application Letter",
        },
        {
          id: "complaint-letter",
          title: "Письмо-жалоба или Letter of Complaint",
        },
        {
          id: "apology-letter",
          title: "Письмо-извинение или Letter of Apology",
        },
        { id: "inquiry-letter", title: "Письмо-запрос или Inquiry Letter" },
        {
          id: "confirmation-letter",
          title: "Письмо-подтверждение или Confirmation Letter",
        },
        {
          id: "recommendation-letter",
          title: "Рекомендательное письмо или Letter of Recommendation",
        },
        {
          id: "thank-you-letter",
          title: "Письмо-благодарность или Thank-you Letter",
        },
        {
          id: "cover-letter",
          title: "Сопроводительное письмо или Cover Letter",
        },
      ],
    },
    {
      id: "structure",
      title: "Структура делового письма",
      subsections: [
        { id: "header", title: "Шапка" },
        { id: "subject", title: "Тема" },
        { id: "greeting", title: "Приветствие" },
        { id: "body", title: "Основное содержание" },
        { id: "conclusion", title: "Заключение" },
        { id: "signature", title: "Подпись" },
        { id: "attachments", title: "Приложения" },
      ],
    },
    {
      id: "rules",
      title: "Обязательные правила написания",
    },
    {
      id: "response-format",
      title: "Правильное оформление ответа",
    },
  ];

  const exampleLetters: ExampleLetter[] = [
    {
      id: "proposal",
      title: "Письмо-предложение (Mentor Services Proposal)",
      englishExample: `Sarah Johnson
Professional Business Mentor
MentorHub Platform
456 Success Street
New York, NY 10001

TechStart Inc.
789 Innovation Avenue  
San Francisco, CA 94105

October 15, 2024

Dear Hiring Manager,

Our mentoring platform MentorHub specializes in providing experienced business mentors to help companies develop their leadership teams and accelerate professional growth. We have been successfully operating for over 5 years, connecting top-tier mentors with ambitious professionals across various industries.

We offer personalized mentoring programs tailored to your company's specific needs, including leadership development, strategic planning guidance, and career advancement coaching. This month we have a special package for corporate clients with a 20% discount on our premium mentoring services.

For more information about our mentoring solutions, please contact us at (555) 123-4567.

Best regards,
Sarah Johnson
Senior Business Mentor`,
      translation: `Сара Джонсон
Профессиональный бизнес-ментор
Платформа MentorHub
456 Success Street
Нью-Йорк, NY 10001

TechStart Inc.
789 Innovation Avenue  
Сан-Франциско, CA 94105

15 октября 2024 года

Уважаемый менеджер по найму,

Наша менторская платформа MentorHub специализируется на предоставлении опытных бизнес-менторов для помощи компаниям в развитии их лидерских команд и ускорении профессионального роста. Мы успешно работаем уже более 5 лет, соединяя высококлассных менторов с амбициозными профессионалами в различных отраслях.

Мы предлагаем персонализированные программы менторства, адаптированные под специфические потребности вашей компании, включая развитие лидерства, консультации по стратегическому планированию и коучинг по карьерному росту. В этом месяце у нас есть специальный пакет для корпоративных клиентов со скидкой 20% на наши премиум-услуги менторства.

Для получения дополнительной информации о наших решениях в области менторства, пожалуйста, свяжитесь с нами по телефону (555) 123-4567.

С наилучшими пожеланиями,
Сара Джонсон
Старший бизнес-ментор`,
    },
    {
      id: "thank-you",
      title: "Письмо-благодарность (Thank-you Letter)",
      englishExample: `From: mentor@mentorhub.com
Date: November 20, 2024
To: client@techstart.com

Dear Mr. Anderson,

My name is Michael Chen, and I am your assigned business mentor through the MentorHub platform. I am writing to thank you for choosing our mentoring services and for the opportunity to work with your leadership team over the past quarter.

I want to express my gratitude for your team's dedication and openness to feedback during our sessions. The progress I have witnessed in your strategic planning and team management skills has been truly impressive.

I look forward to continuing our mentoring relationship and helping you achieve your business objectives in the upcoming quarter.

Warm regards,
Michael Chen
Certified Business Mentor
MentorHub Platform`,
      translation: `От: mentor@mentorhub.com
Дата: 20 ноября 2024 года
Кому: client@techstart.com

Уважаемый мистер Андерсон,

Меня зовут Майкл Чен, и я ваш назначенный бизнес-ментор на платформе MentorHub. Пишу, чтобы поблагодарить вас за выбор наших менторских услуг и за возможность работать с вашей командой руководителей в течение прошлого квартала.

Я хочу выразить свою благодарность за преданность вашей команды и открытость к обратной связи во время наших сессий. Прогресс, который я наблюдал в ваших навыках стратегического планирования и управления командой, был действительно впечатляющим.

Я с нетерпением жду продолжения наших менторских отношений и помощи в достижении ваших бизнес-целей в предстоящем квартале.

С теплыми пожеланиями,
Майкл Чен
Сертифицированный бизнес-ментор
Платформа MentorHub`,
    },
  ];

  const businessVocabulary = [
    { casual: "Give", business: "Provide" },
    { casual: "Get", business: "Receive" },
    { casual: "Come", business: "Attend / Arrive" },
    { casual: "Help", business: "Assist" },
    { casual: "Book", business: "Reserve" },
    { casual: "Answer", business: "Reply" },
    { casual: "Choose", business: "Select" },
    { casual: "Tell", business: "Explain" },
    { casual: "Make", business: "Create" },
    { casual: "Do", business: "Manage" },
  ];

  return (
    <>
      <Head>
        <title>
          Как писать деловые письма менторам: полное руководство и лучшие
          практики
        </title>
        <meta
          name="description"
          content="Изучите правила деловой переписки с менторами на английском языке. Структура писем, примеры и практические советы для эффективного общения."
        />
        <meta
          name="keywords"
          content="деловые письма, менторство, бизнес-переписка, английский язык, профессиональное общение"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Как правильно писать деловые письма менторам на английском
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Полное руководство по профессиональной переписке с менторами:
                структура, правила и лучшие практики
              </p>
              <div className="w-full max-w-2xl mx-auto h-64 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">📧</span>
                  </div>
                  <p className="text-lg text-purple-100">
                    Professional Business Communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Содержание статьи
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tableOfContents.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-purple-50 transition-colors"
                >
                  <a
                    href={`#${item.id}`}
                    className="text-purple-700 hover:text-purple-900 font-medium block mb-2"
                  >
                    {index + 1}. {item.title}
                  </a>
                  {item.subsections && (
                    <ul className="space-y-1 ml-4">
                      {item.subsections.map((sub, subIndex) => (
                        <li key={sub.id}>
                          <a
                            href={`#${sub.id}`}
                            className="text-gray-600 hover:text-purple-600 text-sm"
                          >
                            {index + 1}.{subIndex + 1} {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <section className="mb-16">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Даже в эпоху мессенджеров и социальных сетей деловая переписка с
                менторами остается важнейшим элементом профессионального
                развития. Планируете работать с международными менторами или
                развивать карьеру в англоязычной среде? Тогда знание правил
                деловой переписки на английском языке — ваш ключ к успеху.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                В этой статье мы разберем структуру и содержание деловых писем,
                научимся составлять письма, которые помогают строить эффективные
                менторские отношения и достигать карьерных целей.
              </p>
            </div>
          </section>

          {/* When to Use Section */}
          <section id="when-to-use" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Когда используют правила деловой переписки с менторами?
            </h2>
            <div className="bg-purple-50 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Грамотно оформленное письмо ментору создает основу для
                продуктивного профессионального взаимодействия. При первом
                знакомстве с ментором встречают по письму — правильным оборотам,
                профессиональному тону и четкой структуре.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Соблюдая правила деловой переписки, вы сможете:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Профессионально представиться потенциальному ментору
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Четко сформулировать свои цели и ожидания от менторства
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Запросить обратную связь по своему профессиональному
                      развитию
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Поблагодарить за предоставленные советы и поддержку
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Вежливо завершить менторские отношения при необходимости
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Типичные ситуации для деловой переписки:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Первичное обращение к ментору</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Подготовка к менторской сессии</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Отчет о достигнутых результатах</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Запрос рекомендаций и референсов</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Переперенос или отмена встреч</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Structure Section */}
          <section id="structure" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Как написать деловое письмо ментору — разбираем структуру
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Деловое письмо ментору составляется по четкой структуре, которая
              обеспечивает профессиональность и эффективность общения.
              Правильная структура помогает ментору быстро понять суть вашего
              обращения и предоставить качественную обратную связь.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    1. Шапка (Header)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Верхняя часть письма содержит контактную информацию
                    отправителя и получателя. При переписке по email указывается
                    email-адрес и дата.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono">
                    john.smith@email.com
                    <br />
                    November 15, 2024
                    <br />
                    sarah.mentor@mentorhub.com
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2. Тема (Subject Line)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Четко сформулированная тема помогает ментору понять цель
                    письма. Используйте не более 7-10 слов.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    <strong>Примеры тем:</strong>
                    <br />
                    • Request for Mentoring Session
                    <br />
                    • Follow-up on Career Development Plan
                    <br />• Thank You for Todays Meeting
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    3. Приветствие (Greeting)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Правильное обращение задает профессиональный тон переписки.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    <strong>Формальное:</strong> Dear Mr./Ms. [Last Name],
                    <br />
                    <strong>Менее формальное:</strong> Dear [First Name],
                    <br />
                    <strong>При неизвестном имени:</strong> Dear Mentor,
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    4. Основное содержание (Body)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Структурируйте содержание на абзацы для лучшего восприятия.
                    Начните с благодарности или контекста.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    <strong>1-й абзац:</strong> Введение и цель
                    <br />
                    <strong>2-й абзац:</strong> Основная информация
                    <br />
                    <strong>3-й абзац:</strong> Конкретный запрос или вопрос
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    5. Заключение (Conclusion)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Завершите письмо призывом к действию и благодарностью за
                    время ментора.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    • Looking forward to your guidance
                    <br />
                    • Thank you for your time and expertise
                    <br />• I would appreciate your feedback
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    6. Подпись (Signature)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Профессиональное завершение письма.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    Best regards,
                    <br />
                    Sincerely,
                    <br />
                    Kind regards,
                    <br />
                    <strong>[Your Full Name]</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Example Letters Section */}
          <section id="examples" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Примеры деловых писем менторам
            </h2>
            <div className="space-y-12">
              {exampleLetters.map((letter) => (
                <div
                  key={letter.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                    <h3 className="text-xl font-semibold text-white">
                      {letter.title}
                    </h3>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 p-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="w-6 h-6 bg-blue-500 text-white rounded-full text-sm flex items-center justify-center mr-2">
                          EN
                        </span>
                        English Version
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono whitespace-pre-wrap">
                        {letter.englishExample}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full text-sm flex items-center justify-center mr-2">
                          RU
                        </span>
                        Перевод на русский
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4 text-sm whitespace-pre-wrap">
                        {letter.translation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Rules Section */}
          <section id="rules" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Обязательные правила написания писем менторам
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ✅ Что делать
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Четко формулируйте цель письма</li>
                    <li>• Обращайтесь к ментору по имени</li>
                    <li>• Используйте профессиональную лексику</li>
                    <li>• Благодарите за время и экспертизу</li>
                    <li>• Проверяйте орфографию и грамматику</li>
                    <li>• Структурируйте текст на абзацы</li>
                  </ul>
                </div>
                <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    💡 Полезные фразы
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <strong>Начало:</strong> I hope this email finds you well
                    </li>
                    <li>
                      <strong>Цель:</strong> I am writing to seek your guidance
                      on...
                    </li>
                    <li>
                      <strong>Запрос:</strong> I would appreciate your insights
                      on...
                    </li>
                    <li>
                      <strong>Завершение:</strong> Thank you for your valuable
                      time
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ❌ Чего избегать
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Не начинайте с негатива или извинений</li>
                    <li>• Не используйте слишком неформальный тон</li>
                    <li>• Не пишите слишком длинные письма</li>
                    <li>• Не забывайте о теме письма</li>
                    <li>• Не используйте сленг или аббревиатуры</li>
                    <li>• Не отправляйте без проверки</li>
                  </ul>
                </div>
                <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    📝 Структура идеального письма
                  </h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="bg-purple-50 p-2 rounded">
                      1. Краткое приветствие
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      2. Контекст или благодарность
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      3. Основной запрос
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      4. Призыв к действию
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      5. Благодарность и подпись
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Business Vocabulary Section */}
          <section id="vocabulary" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Бизнес-лексика для писем менторам
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">
                  Замените casual слова на business
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {businessVocabulary.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                    >
                      <div className="text-gray-500 text-sm mb-1">Casual</div>
                      <div className="text-red-600 font-medium mb-2">
                        {item.casual}
                      </div>
                      <div className="text-gray-400">↓</div>
                      <div className="text-gray-500 text-sm mb-1">Business</div>
                      <div className="text-green-600 font-medium">
                        {item.business}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Response Format Section */}
          <section id="response-format" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Правильное оформление ответа ментору
            </h2>
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                  Как отвечать на письма от ментора
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-xl">1</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Представьтесь
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Напомните ментору, кто вы, особенно если переписка не
                      регулярная. Укажите контекст ваших отношений.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-xl">2</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Обозначьте цель
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Четко сформулируйте, зачем пишете ответ. Это может быть
                      благодарность, отчет о прогрессе или уточняющие вопросы.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-xl">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Дайте ответы
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Отвечайте на все заданные вопросы структурированно. Если
                      что-то неясно, попросите разъяснений.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Полезные фразы для ответов
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Начало ответа
                      </h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong>EN:</strong> Thank you for your email
                          regarding...
                          <br />
                          <strong>RU:</strong> Спасибо за ваше письмо
                          касательно...
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong>EN:</strong> Following up on our conversation
                          about...
                          <br />
                          <strong>RU:</strong> В продолжение нашего разговора
                          о...
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong>EN:</strong> I am writing to provide an update
                          on...
                          <br />
                          <strong>RU:</strong> Пишу, чтобы предоставить
                          обновление по...
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Завершение ответа
                      </h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong>EN:</strong> I look forward to your continued
                          guidance
                          <br />
                          <strong>RU:</strong> Жду вашего дальнейшего
                          руководства
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong>EN:</strong> Please let me know if you need
                          any clarification
                          <br />
                          <strong>RU:</strong> Дайте знать, если нужны
                          разъяснения
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <strong>EN:</strong> Thank you again for your valuable
                          insights
                          <br />
                          <strong>RU:</strong> Еще раз спасибо за ценные советы
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Освойте деловую переписку с менторами
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Деловой английский для менторства имеет свои особенности. Наши
              опытные менторы помогут вам освоить профессиональную переписку и
              эффективно общаться в бизнес-среде.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Найти ментора
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-colors">
                Изучить программы
              </button>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Заключение
            </h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                Эффективная деловая переписка с менторами — это ключевой навык
                для профессионального развития. Правильно составленные письма
                помогают строить долгосрочные менторские отношения, получать
                ценные советы и ускорять карьерный рост.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Теперь у вас есть все необходимые инструменты: структура писем,
                примеры, полезные фразы и правила оформления. Применяйте эти
                знания на практике, общаясь с международными менторами и
                развивая свою карьеру в глобальной бизнес-среде.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  💡 Помните главные принципы:
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Ясность и структурированность</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Профессиональный тон</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Уважение времени ментора</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Благодарность за экспертизу</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default BusinessCommunicationGuide;
