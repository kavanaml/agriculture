export const POPULAR_LOCALITIES = [
  'Hubballi, Karnataka',
  'Bengaluru Rural, Karnataka',
  'Mysuru, Karnataka',
  'Davanagere, Karnataka',
  'Kolar, Karnataka',
  'Lasalgaon, Nashik',
  'Indore, Madhya Pradesh',
  'Guntur, Andhra Pradesh',
];

export const PRODUCE_CATALOG = [
  {
    id: 'onion',
    aliases: ['onion', 'pyaz', 'pyaaz', 'eerulli', 'ಈರುಳ್ಳಿ', 'प्याज', 'red onion', 'bellary onion'],
    name: { en: 'Onion', kn: 'ಈರುಳ್ಳಿ', hi: 'प्याज' },
    category: { en: 'Bulb Vegetable', kn: 'ಗೆಡ್ಡೆ ತರಕಾರಿ', hi: 'कंद सब्जी' },
    baseModalPricePerQtl: 2450,
    shelfLifeDays: 24,
    dailyShrinkagePercent: 0.75,
    dailySpoilageRiskPercent: 0.45,
    optimalStorageTemp: '25°C – 28°C (Dry Ventilated)',
    recommendedHoldDays: 3,
    forecastTrendSlope: 3.1,
    storageTip: {
      en: 'Cure bulbs in dry shade for 48 hours and stack in bamboo/mesh crates with airflow to keep weight loss under 0.8%/day.',
      kn: 'ಈರುಳ್ಳಿಯನ್ನು ನೆರಳಿನಲ್ಲಿ 48 ಗಂಟೆ ಒಣಗಿಸಿ ಗಾಳಿಯಾಡುವ ಬಿದಿರು ಅಥವಾ ಜಾಲರಿ ಕ್ರೇಟ್‌ಗಳಲ್ಲಿಟ್ಟರೆ ತೂಕ ನಷ್ಟ ದಿನಕ್ಕೆ 0.8% ಕ್ಕಿಂತ ಕಡಿಮೆ ಇರುತ್ತದೆ.',
      hi: 'प्याज को 48 घंटे छाया में सुखाकर हवादार जालीदार क्रेट में रखें, इससे वजन में गिरावट 0.8% प्रतिदिन से कम रहेगी।',
    },
    sizes: [
      {
        id: 'small',
        label: { en: 'Small (< 45 mm)', kn: 'ಸಣ್ಣದು (< 45 ಮಿ.ಮೀ)', hi: 'छोटा (< 45 मिमी)' },
        spec: '< 45 mm · Golta',
        priceMultiplier: 0.76,
        demandNote: { en: 'Local retail & pickling', kn: 'ಸ್ಥಳೀಯ ಚಿಲ್ಲರೆ ಮಾರಾಟ', hi: 'स्थानीय खुदरा मांग' },
      },
      {
        id: 'medium',
        label: { en: 'Medium (45–55 mm)', kn: 'ಮಧ್ಯಮ (45–55 ಮಿ.ಮೀ)', hi: 'मध्यम (45–55 मिमी)' },
        spec: '45–55 mm · Standard',
        priceMultiplier: 1.0,
        demandNote: { en: 'High daily household demand', kn: 'ದೈನಂದಿನ ಮನೆಬಳಕೆ ಬೇಡಿಕೆ', hi: 'दैनिक घरेलू उच्च मांग' },
      },
      {
        id: 'large',
        label: { en: 'Large (55–65 mm)', kn: 'ದೊಡ್ಡದು (55–65 ಮಿ.ಮೀ)', hi: 'बड़ा (55–65 मिमी)' },
        spec: '55–65 mm · Grade A',
        priceMultiplier: 1.18,
        demandNote: { en: 'Bulk wholesale & hotel supply', kn: 'ಸಗಟು ಮತ್ತು ಹೋಟೆಲ್ ಬೇಡಿಕೆ', hi: 'थोक व होटल सप्लाई' },
      },
      {
        id: 'xlarge',
        label: { en: 'Extra Large (> 65 mm)', kn: 'ಅತಿ ದೊಡ್ಡದು (> 65 ಮಿ.ಮೀ)', hi: 'अति बड़ा (> 65 मिमी)' },
        spec: '> 65 mm · Export Super',
        priceMultiplier: 1.32,
        demandNote: { en: 'Export & interstate hubs', kn: 'ರಫ್ತು ಮತ್ತು ಅಂತರರಾಜ್ಯ ಮಂಡಿ', hi: 'निर्यात व अंतरराज्यीय मंडी' },
      },
    ],
  },
  {
    id: 'tomato',
    aliases: ['tomato', 'tamatar', 'ಟೊಮೇಟೊ', 'टमाटर', 'hybrid tomato'],
    name: { en: 'Tomato', kn: 'ಟೊಮೇಟೊ', hi: 'टमाटर' },
    category: { en: 'Perishable Fruit Veg', kn: 'ಬೇಗ ಹಾಳಾಗುವ ತರಕಾರಿ', hi: 'नाशवान सब्जी' },
    baseModalPricePerQtl: 1920,
    shelfLifeDays: 5,
    dailyShrinkagePercent: 2.2,
    dailySpoilageRiskPercent: 3.4,
    optimalStorageTemp: '13°C – 15°C (Shaded Crates)',
    recommendedHoldDays: 0,
    forecastTrendSlope: 1.2,
    storageTip: {
      en: 'Harvest at breaker/pink stage, pack in single-layer ventilated plastic crates lined with newspaper, and dispatch within 24 hours.',
      kn: 'ಅರ್ಧ ಹಣ್ಣಾದ ಹಂತದಲ್ಲಿ ಕೊಯ್ಲು ಮಾಡಿ, ಪೇಪರ್ ಹಾಸಿದ ಪ್ಲಾಸ್ಟಿಕ್ ಕ್ರೇಟ್‌ಗಳಲ್ಲಿ ಪ್ಯಾಕ್ ಮಾಡಿ 24 ಗಂಟೆಯೊಳಗೆ ಮಂಡಿಗೆ ಕಳುಹಿಸಿ.',
      hi: 'हल्के गुलाबी पकने पर तुड़ाई करें, अखबार बिछे प्लास्टिक क्रेट में पैक कर 24 घंटे के भीतर मंडी भेजें।',
    },
    sizes: [
      {
        id: 'small',
        label: { en: 'Small / Processing', kn: 'ಸಣ್ಣದು / ಸಂಸ್ಕರಣೆ', hi: 'छोटा / प्रोसेसिंग' },
        spec: '< 45 g · Pulp Grade',
        priceMultiplier: 0.72,
        demandNote: { en: 'Sauce & puree processors', kn: 'ಸಾಸ್ ಮತ್ತು ಪಲ್ಪ್ ಕಾರ್ಖಾನೆ', hi: 'सॉस व पल्प मिल' },
      },
      {
        id: 'medium',
        label: { en: 'Medium Table Grade', kn: 'ಮಧ್ಯಮ ಟೇಬಲ್ ದರ್ಜೆ', hi: 'मध्यम टेबल ग्रेड' },
        spec: '55–75 g · Firm Red',
        priceMultiplier: 1.0,
        demandNote: { en: 'Standard retail markets', kn: 'ಸಾಮಾನ್ಯ ಮಾರುಕಟ್ಟೆ', hi: 'सामान्य खुदरा बाज़ार' },
      },
      {
        id: 'large',
        label: { en: 'Large Premium Firm', kn: 'ದೊಡ್ಡ ಪ್ರೀಮಿಯಂ ದರ್ಜೆ', hi: 'बड़ा प्रीमियम फर्म' },
        spec: '80–110 g · Export Crate',
        priceMultiplier: 1.24,
        demandNote: { en: 'Supermarkets & metro buyers', kn: 'ಸೂಪರ್‌ಮಾರ್ಕೆಟ್ ಖರೀದಿದಾರರು', hi: 'सुपरमार्केट व मेट्रो खरीदार' },
      },
    ],
  },
  {
    id: 'potato',
    aliases: ['potato', 'aaloo', 'aloo', 'alugadde', 'ಆಲೂಗಡ್ಡೆ', 'आलू'],
    name: { en: 'Potato', kn: 'ಆಲೂಗಡ್ಡೆ', hi: 'आलू' },
    category: { en: 'Tuber Crop', kn: 'ಗೆಡ್ಡೆ ಬೆಳೆ', hi: 'कंद फसल' },
    baseModalPricePerQtl: 1850,
    shelfLifeDays: 42,
    dailyShrinkagePercent: 0.35,
    dailySpoilageRiskPercent: 0.2,
    optimalStorageTemp: '4°C – 10°C (Dark Cool)',
    recommendedHoldDays: 4,
    forecastTrendSlope: 2.6,
    storageTip: {
      en: 'Keep tubers strictly away from sunlight to prevent greening; dry skin-set lots can hold 4–5 days easily for peak weekend bids.',
      kn: 'ಹಸಿರು ಬಣ್ಣ ಬರದಂತೆ ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ದೂರವಿಡಿ; ಚೆನ್ನಾಗಿ ಒಣಗಿದ ಆಲೂಗಡ್ಡೆಯನ್ನು 4-5 ದಿನ ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಬಹುದು.',
      hi: 'हरा होने से बचाने के लिए धूप से दूर अंधेरी ठंडी जगह रखें; सूखी फसल 4–5 दिन आसानी से रोकी जा सकती है।',
    },
    sizes: [
      {
        id: 'baby',
        label: { en: 'Baby (< 35 mm)', kn: 'ಸಣ್ಣ ಗಾತ್ರ (< 35 ಮಿ.ಮೀ)', hi: 'बेबी आलू (< 35 मिमी)' },
        spec: '< 35 mm · Seed/Baby',
        priceMultiplier: 0.82,
        demandNote: { en: 'Specialty catering', kn: 'ವಿಶೇಷ ಅಡುಗೆ ಬೇಡಿಕೆ', hi: 'विशेष कैटरिंग मांग' },
      },
      {
        id: 'medium',
        label: { en: 'Medium (35–55 mm)', kn: 'ಮಧ್ಯಮ (35–55 ಮಿ.ಮೀ)', hi: 'मध्यम (35–55 मिमी)' },
        spec: '35–55 mm · Table',
        priceMultiplier: 1.0,
        demandNote: { en: 'Steady urban demand', kn: 'ಸ್ಥಿರ ನಗರ ಬೇಡಿಕೆ', hi: 'नियमित शहरी मांग' },
      },
      {
        id: 'large',
        label: { en: 'Large Chip-Grade (> 55 mm)', kn: 'ದೊಡ್ಡ ಚಿಪ್ಸ್ ದರ್ಜೆ (> 55 ಮಿ.ಮೀ)', hi: 'बड़ा चिप्स ग्रेड (> 55 मिमी)' },
        spec: '> 55 mm · Low Sugar',
        priceMultiplier: 1.22,
        demandNote: { en: 'Snack & chip processors', kn: 'ಚಿಪ್ಸ್ ಕಾರ್ಖಾನೆ ಬೇಡಿಕೆ', hi: 'चिप्स प्रोसेसिंग मांग' },
      },
    ],
  },
  {
    id: 'garlic',
    aliases: ['garlic', 'lahsun', 'bellulli', 'ಬೆಳ್ಳುಳ್ಳಿ', 'लहसुन'],
    name: { en: 'Garlic', kn: 'ಬೆಳ್ಳುಳ್ಳಿ', hi: 'लहसुन' },
    category: { en: 'Spice Bulb', kn: 'ಮಸಾಲೆ ಬೆಳೆ', hi: 'मसाला फसल' },
    baseModalPricePerQtl: 9400,
    shelfLifeDays: 60,
    dailyShrinkagePercent: 0.25,
    dailySpoilageRiskPercent: 0.15,
    optimalStorageTemp: '18°C – 22°C (Low Humidity)',
    recommendedHoldDays: 5,
    forecastTrendSlope: 2.3,
    storageTip: {
      en: 'Trim stems 2 cm above bulbs and store in breathable mesh bags; export grades command strong premiums.',
      kn: 'ಬೆಳ್ಳುಳ್ಳಿ ದಂಟನ್ನು 2 ಸೆಂ.ಮೀ ಬಿಟ್ಟು ಕತ್ತರಿಸಿ ಗಾಳಿಯಾಡುವ ಚೀಲಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.',
      hi: 'डंठल 2 सेमी छोड़कर काटें और हवादार जालीदार बोरों में रखें; बड़े आकार को बेहतर भाव मिलता है।',
    },
    sizes: [
      {
        id: 'small',
        label: { en: 'Medium Clove (30–40 mm)', kn: 'ಮಧ್ಯಮ (30–40 ಮಿ.ಮೀ)', hi: 'मध्यम (30–40 मिमी)' },
        spec: '30–40 mm · Ladoo',
        priceMultiplier: 0.85,
        demandNote: { en: 'Domestic retail', kn: 'ಸ್ಥಳೀಯ ಮಾರಾಟ', hi: 'घरेलू खुदरा' },
      },
      {
        id: 'bold',
        label: { en: 'Bold (40–50 mm)', kn: 'ದಪ್ಪ (40–50 ಮಿ.ಮೀ)', hi: 'बोल्ड (40–50 मिमी)' },
        spec: '40–50 mm · Phool',
        priceMultiplier: 1.0,
        demandNote: { en: 'Wholesale spice mandis', kn: 'ಸಗಟು ಮಸಾಲೆ ಮಂಡಿ', hi: 'थोक मसाला मंडी' },
      },
      {
        id: 'jumbo',
        label: { en: 'Jumbo Box (> 50 mm)', kn: 'ಜಂಬೋ (> 50 ಮಿ.ಮೀ)', hi: 'जंबो (> 50 मिमी)' },
        spec: '> 50 mm · Bom',
        priceMultiplier: 1.28,
        demandNote: { en: 'Premium spice traders', kn: 'ಪ್ರೀಮಿಯಂ ವ್ಯಾಪಾರಿಗಳು', hi: 'प्रीमियम मसाला व्यापारी' },
      },
    ],
  },
  {
    id: 'chilli',
    aliases: ['chilli', 'chili', 'green chilli', 'mirch', 'menasinakayi', 'ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ', 'हरी मिर्च'],
    name: { en: 'Green Chilli', kn: 'ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ', hi: 'हरी मिर्च' },
    category: { en: 'Fresh Spice', kn: 'ತಾಜಾ ಮಸಾಲೆ', hi: 'ताज़ा मसाला' },
    baseModalPricePerQtl: 3800,
    shelfLifeDays: 7,
    dailyShrinkagePercent: 1.8,
    dailySpoilageRiskPercent: 2.3,
    optimalStorageTemp: '8°C – 10°C (85% RH)',
    recommendedHoldDays: 0,
    forecastTrendSlope: 1.4,
    storageTip: {
      en: 'Avoid airtight polybags which trap moisture and trigger rot; dispatch in perforated cartons within 24–36 hours.',
      kn: 'ಗಾಳಿಯಾಡದ ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲಗಳನ್ನು ಬಳಸಬೇಡಿ; ರಂಧ್ರವಿರುವ ಬಾಕ್ಸ್‌ಗಳಲ್ಲಿ 24-36 ಗಂಟೆಯೊಳಗೆ ಮಾರಾಟ ಮಾಡಿ.',
      hi: 'बंद पॉलीथीन में न भरें वरना नमी से सड़न होगी; छेद वाले कार्टन में 24–36 घंटे में बेचें।',
    },
    sizes: [
      {
        id: 'short',
        label: { en: 'Short Pungent (Guntur)', kn: 'ಸಣ್ಣ ಖಾರ (ಗುಂಟೂರು)', hi: 'छोटी तीखी (गुंटूर)' },
        spec: '4–6 cm · High Pungency',
        priceMultiplier: 1.08,
        demandNote: { en: 'Spice & pickle buyers', kn: 'ಮಸಾಲೆ ಮತ್ತು ಉಪ್ಪಿನಕಾಯಿ', hi: 'अचार व मसाला मांग' },
      },
      {
        id: 'long',
        label: { en: 'Long Glossy (Byadgi / G4)', kn: 'ಉದ್ದ ತಾಜಾ ಮೆಣಸು', hi: 'लंबी चमकदार (G4)' },
        spec: '8–11 cm · Fresh',
        priceMultiplier: 1.0,
        demandNote: { en: 'Daily urban mandis', kn: 'ದೈನಂದಿನ ನಗರ ಮಂಡಿ', hi: 'दैनिक शहरी मंडी' },
      },
    ],
  },
  {
    id: 'banana',
    aliases: ['banana', 'kela', 'balehannu', 'ಬಾಳೆಹಣ್ಣು', 'केला'],
    name: { en: 'Banana (Yelakki / Robusta)', kn: 'ಬಾಳೆಹಣ್ಣು', hi: 'केला' },
    category: { en: 'Orchard Fruit', kn: 'ತೋಟಗಾರಿಕಾ ಹಣ್ಣು', hi: 'बागवानी फल' },
    baseModalPricePerQtl: 2900,
    shelfLifeDays: 8,
    dailyShrinkagePercent: 1.4,
    dailySpoilageRiskPercent: 1.9,
    optimalStorageTemp: '13.5°C – 15°C',
    recommendedHoldDays: 0,
    forecastTrendSlope: 1.6,
    storageTip: {
      en: 'Pad bunches with dry banana leaves during transport to prevent bruising; sell at 75% maturity for top mandi bids.',
      kn: 'ಸಾಗಣೆಯ ವೇಳೆ ಒಣ ಬಾಳೆ ಎಲೆಗಳನ್ನು ಇಟ್ಟು ಗಾಯವಾಗದಂತೆ ರಕ್ಷಿಸಿ; 75% ಬಲಿತಾಗ ಮಾರಾಟ ಮಾಡಿ.',
      hi: 'परिवहन के समय सूखे पत्तों की गद्दी लगाएं ताकि दाग न पड़ें; 75% पकने पर मंडी भेजें।',
    },
    sizes: [
      {
        id: 'standard',
        label: { en: 'Robusta / Grand Naine', kn: 'ರೋಬಸ್ಟಾ / ಜಿ9', hi: 'रोबस्टा / जी9' },
        spec: 'Grade A Bunch',
        priceMultiplier: 1.0,
        demandNote: { en: 'Wholesale fruit yards', kn: 'ಸಗಟು ಹಣ್ಣಿನ ಮಾರುಕಟ್ಟೆ', hi: 'थोक फल मंडी' },
      },
      {
        id: 'yelakki',
        label: { en: 'Yelakki / Premium Small', kn: 'ಏಲಕ್ಕಿ ಬಾಳೆ (ಪ್ರೀಮಿಯಂ)', hi: 'येलक्की प्रीमियम' },
        spec: 'Sweet Specialty',
        priceMultiplier: 1.45,
        demandNote: { en: 'High festive & retail demand', kn: 'ಹಬ್ಬ ಮತ್ತು ಚಿಲ್ಲರೆ ಬೇಡಿಕೆ', hi: 'त्योहार व प्रीमियम मांग' },
      },
    ],
  },
  {
    id: 'paddy',
    aliases: ['paddy', 'rice', 'dhan', 'bhatta', 'ಭತ್ತ', 'धान', 'rice paddy'],
    name: { en: 'Paddy (Sona Masoori)', kn: 'ಭತ್ತ (ಸೋನಾ ಮಸೂರಿ)', hi: 'धान (सोना मसूरी)' },
    category: { en: 'Cereal Grain', kn: 'ಧಾನ್ಯ ಬೆಳೆ', hi: 'अनाज फसल' },
    baseModalPricePerQtl: 2380,
    shelfLifeDays: 180,
    dailyShrinkagePercent: 0.08,
    dailySpoilageRiskPercent: 0.05,
    optimalStorageTemp: 'Dry < 13% Moisture',
    recommendedHoldDays: 4,
    forecastTrendSlope: 1.8,
    storageTip: {
      en: 'Dry grain below 13% moisture before bagging; clean FAQ grade receives immediate MSP or mill-gate premium.',
      kn: 'ಚೀಲ ತುಂಬುವ ಮೊದಲು 13% ಕ್ಕಿಂತ ಕಡಿಮೆ ತೇವಾಂಶಕ್ಕೆ ಒಣಗಿಸಿ; ಸ್ವಚ್ಛ ಧಾನ್ಯಕ್ಕೆ ಮಿಲ್ ಮತ್ತು ಎಂಎಸ್‌ಪಿ ದರ ಸಿಗುತ್ತದೆ.',
      hi: 'बोरों में भरने से पहले नमी 13% से नीचे सुखाएं; साफ दाने को मिल व एमएसपी का पूरा भाव मिलता है।',
    },
    sizes: [
      {
        id: 'common',
        label: { en: 'Common Grade A', kn: 'ಸಾಮಾನ್ಯ ಗ್ರೇಡ್ ಎ', hi: 'कॉमन ग्रेड A' },
        spec: '14% Moisture',
        priceMultiplier: 0.96,
        demandNote: { en: 'MSP procurement centers', kn: 'ಎಂಎಸ್‌ಪಿ ಖರೀದಿ ಕೇಂದ್ರ', hi: 'MSP क्रय केंद्र' },
      },
      {
        id: 'fine',
        label: { en: 'Super Fine Sona Masoori', kn: 'ಸೂಪರ್ ಫೈನ್ ಸೋನಾ ಮಸೂರಿ', hi: 'सुपर फाइन सोना मसूरी' },
        spec: '< 12.5% Moisture · Clean',
        priceMultiplier: 1.12,
        demandNote: { en: 'Rice mills & export', kn: 'ಅಕ್ಕಿ ಗಿರಣಿ ಮತ್ತು ರಫ್ತು', hi: 'राइस मिल व निर्यात' },
      },
    ],
  },
  {
    id: 'turmeric',
    aliases: ['turmeric', 'haldi', 'arishina', 'ಅರಿಶಿನ', 'हल्दी'],
    name: { en: 'Turmeric Finger', kn: 'ಅರಿಶಿನ', hi: 'हल्दी' },
    category: { en: 'Dried Spice', kn: 'ಒಣ ಮಸಾಲೆ', hi: 'सूखा मसाला' },
    baseModalPricePerQtl: 13800,
    shelfLifeDays: 180,
    dailyShrinkagePercent: 0.05,
    dailySpoilageRiskPercent: 0.04,
    optimalStorageTemp: 'Dry Warehouse (< 10% Moisture)',
    recommendedHoldDays: 5,
    forecastTrendSlope: 2.5,
    storageTip: {
      en: 'Polished dry fingers with bright curcumin colour fetch ₹1,200+ extra per quintal in Erode and Sangli-linked auctions.',
      kn: 'ಪಾಲಿಶ್ ಮಾಡಿದ ಹೊಳೆಯುವ ಒಣ ಅರಿಶಿನಕ್ಕೆ ಕ್ವಿಂಟಾಲ್‌ಗೆ ₹1,200+ ಹೆಚ್ಚುವರಿ ದರ ಸಿಗುತ್ತದೆ.',
      hi: 'चमकदार पॉलिश की हुई सूखी हल्दी को नीलामी में ₹1,200 प्रति क्विंटल तक अधिक भाव मिलता है।',
    },
    sizes: [
      {
        id: 'unpolished',
        label: { en: 'Raw Dried Bulb/Finger', kn: 'ಸಂಸ್ಕರಿಸದ ಒಣ ಅರಿಶಿನ', hi: 'कच्ची सूखी हल्दी' },
        spec: 'Unpolished FAQ',
        priceMultiplier: 0.92,
        demandNote: { en: 'Bulk grinding mills', kn: 'ಪುಡಿ ಮಾಡುವ ಗಿರಣಿಗಳು', hi: 'मसाला मिल मांग' },
      },
      {
        id: 'polished',
        label: { en: 'Double Polished Salem Grade', kn: 'ಡಬಲ್ ಪಾಲಿಶ್ ಸೇಲಂ ದರ್ಜೆ', hi: 'डबल पॉलिश सलेम ग्रेड' },
        spec: 'Curcumin > 3.5%',
        priceMultiplier: 1.14,
        demandNote: { en: 'Export & spice auction', kn: 'ರಫ್ತು ಮತ್ತು ಹರಾಜು ಮಂಡಿ', hi: 'निर्यात व मसाला नीलामी' },
      },
    ],
  },
];

const REGIONAL_MANDIS_BY_STATE = {
  karnataka: [
    { id: 'yeshwanthpur', name: { en: 'Yeshwanthpur APMC, Bengaluru', kn: 'ಯಶವಂತಪುರ ಎಪಿಎಂಸಿ, ಬೆಂಗಳೂರು', hi: 'यशवंतपुर APMC, बेंगलुरु' }, district: { en: 'Bengaluru Urban', kn: 'ಬೆಂಗಳೂರು ನಗರ', hi: 'बेंगलुरु शहरी' }, baseDistanceKm: 18, priceFactor: 1.07, dailyIntakeQtl: 65, mandiFeePercent: 1.5 },
    { id: 'hubballi', name: { en: 'Amargol APMC, Hubballi', kn: 'ಅಮರಗೋಳ ಎಪಿಎಂಸಿ, ಹುಬ್ಬಳ್ಳಿ', hi: 'अमरगोल APMC, हुब्बल्लि' }, district: { en: 'Dharwad', kn: 'ಧಾರವಾಡ', hi: 'धारवाड़' }, baseDistanceKm: 24, priceFactor: 1.03, dailyIntakeQtl: 50, mandiFeePercent: 1.5 },
    { id: 'davanagere', name: { en: 'Davanagere APMC Yard', kn: 'ದಾವಣಗೆರೆ ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ', hi: 'दावणगेरे APMC मंडी' }, district: { en: 'Davanagere', kn: 'ದಾವಣಗೆರೆ', hi: 'दावणगेरे' }, baseDistanceKm: 42, priceFactor: 0.98, dailyIntakeQtl: 40, mandiFeePercent: 1.2 },
    { id: 'mysuru', name: { en: 'Bandipalya APMC, Mysuru', kn: 'ಬಂಡಿಪಾಳ್ಯ ಎಪಿಎಂಸಿ, ಮೈಸೂರು', hi: 'बंडीपाल्या APMC, मैसूरु' }, district: { en: 'Mysuru', kn: 'ಮೈಸೂರು', hi: 'मैसूरु' }, baseDistanceKm: 56, priceFactor: 0.94, dailyIntakeQtl: 35, mandiFeePercent: 1.5 },
    { id: 'kolar', name: { en: 'Kolar Wholesale APMC', kn: 'ಕೋಲಾರ ಸಗಟು ಎಪಿಎಂಸಿ', hi: 'कोलार थोक APMC' }, district: { en: 'Kolar', kn: 'ಕೋಲಾರ', hi: 'कोलार' }, baseDistanceKm: 70, priceFactor: 0.91, dailyIntakeQtl: 45, mandiFeePercent: 1.0 },
  ],
  maharashtra: [
    { id: 'lasalgaon', name: { en: 'Lasalgaon Krishi Upaj Mandi', kn: 'ಲಾಸಲ್‌ಗಾಂವ್ ಕೃಷಿ ಮಂಡಿ', hi: 'लासलगांव कृषि उपज मंडी' }, district: { en: 'Nashik', kn: 'ನಾಸಿಕ್', hi: 'नासिक' }, baseDistanceKm: 15, priceFactor: 1.09, dailyIntakeQtl: 80, mandiFeePercent: 1.2 },
    { id: 'pimpalgaon', name: { en: 'Pimpalgaon Baswant Mandi', kn: 'ಪಿಂಪಲ್‌ಗಾಂವ್ ಮಂಡಿ', hi: 'पिंपलगांव बसवंत मंडी' }, district: { en: 'Nashik', kn: 'ನಾಸಿಕ್', hi: 'नासिक' }, baseDistanceKm: 28, priceFactor: 1.04, dailyIntakeQtl: 60, mandiFeePercent: 1.2 },
    { id: 'pune', name: { en: 'Gultekdi Market Yard, Pune', kn: 'ಗುಲ್ಟೆಕ್ಡಿ ಮಾರುಕಟ್ಟೆ, ಪುಣೆ', hi: 'गुलटेकड़ी मार्केट यार्ड, पुणे' }, district: { en: 'Pune', kn: 'पुणे', hi: 'पुणे' }, baseDistanceKm: 64, priceFactor: 1.01, dailyIntakeQtl: 70, mandiFeePercent: 1.5 },
    { id: 'solapur', name: { en: 'Solapur Krishi Bazaar', kn: 'ಸೋಲಾಪುರ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ', hi: 'सोलापुर कृषि बाजार' }, district: { en: 'Solapur', kn: 'ಸೋಲಾಪುರ', hi: 'सोलापुर' }, baseDistanceKm: 82, priceFactor: 0.95, dailyIntakeQtl: 45, mandiFeePercent: 1.3 },
    { id: 'ahmednagar', name: { en: 'Ahilyanagar APMC Yard', kn: 'ಅಹಲ್ಯಾನಗರ ಎಪಿಎಂಸಿ', hi: 'अहिल्यानगर APMC मंडी' }, district: { en: 'Ahilyanagar', kn: 'ಅಹಲ್ಯಾನಗರ', hi: 'अहिल्यानगर' }, baseDistanceKm: 48, priceFactor: 0.92, dailyIntakeQtl: 38, mandiFeePercent: 1.2 },
  ],
  north: [
    { id: 'indore', name: { en: 'Devi Ahilyabai Holkar Mandi, Indore', kn: 'ಇಂದೋರ್ ಕೃಷಿ ಮಂಡಿ', hi: 'देवी अहिल्याबाई होलकर मंडी, इंदौर' }, district: { en: 'Indore', kn: 'ಇಂದೋರ್', hi: 'इंदौर' }, baseDistanceKm: 16, priceFactor: 1.08, dailyIntakeQtl: 75, mandiFeePercent: 1.4 },
    { id: 'azadpur', name: { en: 'Azadpur National Mandi Hub', kn: 'ಆಜಾದ್‌ಪುರ್ ರಾಷ್ಟ್ರೀಯ ಮಂಡಿ', hi: 'आज़ादपुर राष्ट्रीय मंडी' }, district: { en: 'Delhi NCR', kn: 'ದೆಹಲಿ ಎನ್‌ಸಿಆರ್', hi: 'दिल्ली NCR' }, baseDistanceKm: 52, priceFactor: 1.05, dailyIntakeQtl: 90, mandiFeePercent: 1.6 },
    { id: 'ujjain', name: { en: 'Ujjain Krishi Upaj Mandi', kn: 'ಉಜ್ಜಯಿನಿ ಕೃಷಿ ಮಂಡಿ', hi: 'उज्जैन कृषि उपज मंडी' }, district: { en: 'Ujjain', kn: 'ಉಜ್ಜಯಿನಿ', hi: 'उज्जैन' }, baseDistanceKm: 38, priceFactor: 0.99, dailyIntakeQtl: 45, mandiFeePercent: 1.2 },
    { id: 'bhopal', name: { en: 'Karond Mandi, Bhopal', kn: 'ಕರೋಂದ್ ಮಂಡಿ, ಭೋಪಾಲ್', hi: 'करोंद मंडी, भोपाल' }, district: { en: 'Bhopal', kn: 'ಭೋಪಾಲ್', hi: 'भोपाल' }, baseDistanceKm: 64, priceFactor: 0.95, dailyIntakeQtl: 40, mandiFeePercent: 1.3 },
    { id: 'dewas', name: { en: 'Dewas Grain & Veg Mandi', kn: 'ದೇವಾಸ್ ಧಾನ್ಯ ಮತ್ತು ತರಕಾರಿ ಮಂಡಿ', hi: 'देवास अनाज व सब्जी मंडी' }, district: { en: 'Dewas', kn: 'ದೇವಾಸ್', hi: 'देवास' }, baseDistanceKm: 32, priceFactor: 0.91, dailyIntakeQtl: 35, mandiFeePercent: 1.2 },
  ],
};

function selectRegionalMandis(locality = '') {
  const lower = locality.toLowerCase();
  if (lower.includes('nashik') || lower.includes('lasalgaon') || lower.includes('pune') || lower.includes('maharashtra') || lower.includes('solapur')) {
    return REGIONAL_MANDIS_BY_STATE.maharashtra;
  }
  if (lower.includes('indore') || lower.includes('delhi') || lower.includes('madhya') || lower.includes('ujjain') || lower.includes('bhopal') || lower.includes('up') || lower.includes('bihar')) {
    return REGIONAL_MANDIS_BY_STATE.north;
  }
  return REGIONAL_MANDIS_BY_STATE.karnataka;
}

export function findProduce(query) {
  const clean = (query || '').trim().toLowerCase();
  if (!clean) return PRODUCE_CATALOG[0];

  const exact = PRODUCE_CATALOG.find(
    (item) =>
      item.id === clean ||
      item.aliases.some((alias) => alias.toLowerCase() === clean) ||
      item.name.en.toLowerCase() === clean
  );
  if (exact) return exact;

  const partial = PRODUCE_CATALOG.find(
    (item) =>
      item.name.en.toLowerCase().includes(clean) ||
      item.aliases.some((alias) => alias.toLowerCase().includes(clean))
  );
  if (partial) return partial;

  // Dynamic fallback for any custom produce typed by the farmer
  const titleName = query.trim().charAt(0).toUpperCase() + query.trim().slice(1);
  return {
    id: `custom-${clean.replace(/\s+/g, '-')}`,
    aliases: [clean],
    name: { en: titleName, kn: titleName, hi: titleName },
    category: { en: 'Farm Produce', kn: 'ಕೃಷಿ ಉತ್ಪನ್ನ', hi: 'कृषि उपज' },
    baseModalPricePerQtl: 2800,
    shelfLifeDays: 14,
    dailyShrinkagePercent: 0.9,
    dailySpoilageRiskPercent: 0.8,
    optimalStorageTemp: '15°C – 22°C (Ventilated)',
    recommendedHoldDays: 2,
    forecastTrendSlope: 2.4,
    isCustom: true,
    storageTip: {
      en: `Sort ${titleName} by uniform size, remove damaged pieces before loading, and store in dry shaded crates.`,
      kn: `${titleName} ಬೆಳೆಯನ್ನು ಗಾತ್ರದ ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ, ಹಾನಿಯಾದವುಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ ನೆರಳಿನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.`,
      hi: `${titleName} को आकार के अनुसार छांटें, खराब दाने अलग करें और सूखे हवादार क्रेट में रखें।`,
    },
    sizes: [
      {
        id: 'standard',
        label: { en: 'Standard Grade B', kn: 'ಸಾಮಾನ್ಯ ದರ್ಜೆ ಬಿ', hi: 'सामान्य ग्रेड B' },
        spec: 'Standard FAQ',
        priceMultiplier: 0.92,
        demandNote: { en: 'Local retail yards', kn: 'ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆ', hi: 'स्थानीय खुदरा मंडी' },
      },
      {
        id: 'grade-a',
        label: { en: 'Selected Grade A', kn: 'ಆಯ್ದ ದರ್ಜೆ ಎ', hi: 'चयनित ग्रेड A' },
        spec: 'Uniform Clean',
        priceMultiplier: 1.08,
        demandNote: { en: 'Wholesale & regional hubs', kn: 'ಸಗಟು ಮಂಡಿ ಬೇಡಿಕೆ', hi: 'थोक मंडी मांग' },
      },
      {
        id: 'premium',
        label: { en: 'Export / Super Grade', kn: 'ರಫ್ತು / ಸೂಪರ್ ದರ್ಜೆ', hi: 'निर्यात / सुपर ग्रेड' },
        spec: 'Top Size & Finish',
        priceMultiplier: 1.24,
        demandNote: { en: 'Premium metro buyers', kn: 'ಮೆಟ್ರೋ ಖರೀದಿದಾರರು', hi: 'प्रीमियम मेट्रो खरीदार' },
      },
    ],
  };
}

export function analyzeProduce({
  produce,
  sizeId,
  quantityQtl,
  requiredQtl,
  locality,
  priceBoosts = {},
}) {
  const selectedSize =
    produce.sizes.find((s) => s.id === sizeId) || produce.sizes[Math.min(1, produce.sizes.length - 1)];

  const safeQty = Math.max(1, Number(quantityQtl) || 1);
  const safeReq = Math.max(1, Number(requiredQtl) || 1);
  const regionalMandis = selectRegionalMandis(locality);

  // Adjust distance slightly if user's locality matches mandi name
  const localityLower = (locality || '').toLowerCase();
  const mandisComputed = regionalMandis.map((m, idx) => {
    const isSameTown =
      localityLower.length > 2 &&
      (m.name.en.toLowerCase().includes(localityLower.split(',')[0].trim()) ||
        m.district.en.toLowerCase().includes(localityLower.split(',')[0].trim()));

    const distanceKm = isSameTown ? 8 : m.baseDistanceKm + idx * 4;
    const boostKey = `${produce.id}:${m.id}`;
    const boostAmount = Number(priceBoosts[boostKey] || 0);
    const grossPricePerQtl = Math.round(
      produce.baseModalPricePerQtl * selectedSize.priceMultiplier * m.priceFactor + boostAmount
    );
    const transportCostPerQtl = Math.round(28 + distanceKm * 1.45);
    const mandiFeePerQtl = Math.round((grossPricePerQtl * m.mandiFeePercent) / 100);
    const netPricePerQtl = Math.max(100, grossPricePerQtl - transportCostPerQtl - mandiFeePerQtl);
    const totalNetProfit = netPricePerQtl * safeQty;

    return {
      ...m,
      distanceKm,
      boostAmount,
      grossPricePerQtl,
      transportCostPerQtl,
      mandiFeePerQtl,
      netPricePerQtl,
      totalNetProfit,
    };
  });

  // Sort strictly in DECREASING order of real-time mandi modal price
  const mandisRanked = [...mandisComputed].sort((a, b) => b.grossPricePerQtl - a.grossPricePerQtl);
  const bestNetMandi = [...mandisComputed].sort((a, b) => b.netPricePerQtl - a.netPricePerQtl)[0];

  const todayPrice = mandisRanked[0].grossPricePerQtl;

  // 14 Days History + 5 Days Forecast
  const chartPoints = [];
  const baseWave = [
    -7.4, -6.8, -5.9, -6.2, -4.8, -3.9, -4.4,
    -3.1, -2.6, -1.9, -2.2, -1.3, -0.8, 0,
  ];
  for (let i = 0; i < 14; i++) {
    const daysAgo = 13 - i;
    const label = daysAgo === 0 ? 'Today' : `-${daysAgo}d`;
    const price = Math.round(todayPrice * (1 + baseWave[i] / 100));
    chartPoints.push({
      dayLabel: label,
      price,
      isForecast: false,
    });
  }

  for (let d = 1; d <= 5; d++) {
    const netSlope = produce.forecastTrendSlope;
    // Slight realistic curve tapering on day 4-5
    const cumulativePct = netSlope * d - (d > 3 ? (d - 3) * 0.7 : 0);
    const price = Math.round(todayPrice * (1 + cumulativePct / 100));
    const spread = Math.round(price * (0.025 + d * 0.008));
    chartPoints.push({
      dayLabel: `+${d}d`,
      price,
      lowBand: price - spread,
      highBand: price + spread,
      isForecast: true,
    });
  }

  // Shelf-Life 5-Day Profit / Loss % Projection
  const shelfProjections = [];
  let bestHoldDay = 0;
  let bestHoldNetPct = 0;

  for (let d = 1; d <= 5; d++) {
    const forecastPoint = chartPoints[13 + d];
    const priceChangePct = Number((((forecastPoint.price - todayPrice) / todayPrice) * 100).toFixed(1));
    const totalLossPct = Number(
      Math.min(
        45,
        (produce.dailyShrinkagePercent + produce.dailySpoilageRiskPercent * (d > 2 ? 1.25 : 1)) * d
      ).toFixed(1)
    );
    const netProfitPct = Number((priceChangePct - totalLossPct).toFixed(1));
    const netPricePerQtl = Math.round(todayPrice * (1 + netProfitPct / 100));

    if (netProfitPct > bestHoldNetPct && d <= Math.max(1, produce.shelfLifeDays - 2)) {
      bestHoldNetPct = netProfitPct;
      bestHoldDay = d;
    }

    shelfProjections.push({
      dayOffset: d,
      label: `Day +${d}`,
      projectedGrossPrice: forecastPoint.price,
      priceChangePct,
      wastageShrinkagePct: totalLossPct,
      netProfitPct,
      netPricePerQtl,
    });
  }

  const shouldWait = bestHoldDay > 0 && bestHoldNetPct >= 1.5;
  const recommendation = shouldWait
    ? {
        action: 'WAIT_DAYS',
        waitDays: bestHoldDay,
        bestDayProfitPct: bestHoldNetPct,
        headline: {
          en: `Hold for ${bestHoldDay} Days — Est. +${bestHoldNetPct}% Net Profit Gain`,
          kn: `${bestHoldDay} ದಿನ ಕಾಯಿರಿ — ಅಂದಾಜು +${bestHoldNetPct}% ಹೆಚ್ಚುವರಿ ನಿವ್ವಳ ಲಾಭ`,
          hi: `${bestHoldDay} दिन रुकें — अनुमानित +${bestHoldNetPct}% अतिरिक्त शुद्ध लाभ`,
        },
        reason: {
          en: `${produce.name.en} has a safe ${produce.shelfLifeDays}-day shelf life. Holding ${bestHoldDay} days captures forecasted demand rise while keeping shrinkage low.`,
          kn: `${produce.name.kn} ${produce.shelfLifeDays} ದಿನಗಳ ಸುರಕ್ಷಿತ ಬಾಳಿಕೆ ಹೊಂದಿದೆ. ${bestHoldDay} ದಿನ ಕಾಯುವುದರಿಂದ ತೂಕ ನಷ್ಟ ಕಡಿಮೆ ಇದ್ದು ಹೆಚ್ಚಿನ ಬೆಲೆ ಸಿಗುತ್ತದೆ.`,
          hi: `${produce.name.hi} की सुरक्षित भंडारण क्षमता ${produce.shelfLifeDays} दिन है। ${bestHoldDay} दिन रुकने से वज़न में मामूली कमी के बावजूद बेहतर भाव मिलेगा।`,
        },
      }
    : {
        action: 'SELL_NOW',
        waitDays: 0,
        bestDayProfitPct: shelfProjections[0]?.netProfitPct ?? -1.5,
        headline: {
          en: `Sell Today at ${bestNetMandi.name.en} — Avoid Spoilage Loss`,
          kn: `ಇಂದೇ ${bestNetMandi.name.kn} ನಲ್ಲಿ ಮಾರಾಟ ಮಾಡಿ — ಹಾಳಾಗುವ ನಷ್ಟ ತಪ್ಪಿಸಿ`,
          hi: `आज ही ${bestNetMandi.name.hi} में बेचें — सड़न नुकसान से बचें`,
        },
        reason: {
          en: `With a ${produce.shelfLifeDays}-day shelf window, waiting increases spoilage & moisture loss faster than expected market price gains.`,
          kn: `${produce.shelfLifeDays} ದಿನಗಳ ಕಡಿಮೆ ಬಾಳಿಕೆ ಇರುವುದರಿಂದ ಕಾಯುವ ಬದಲು ಇಂದೇ ಮಾರಾಟ ಮಾಡುವುದು ಹೆಚ್ಚು ಲಾಭದಾಯಕ.`,
          hi: `${produce.shelfLifeDays} दिन की सीमित शेल्फ़-लाइफ़ के कारण रुकने पर सड़न का नुकसान बाज़ार बढ़त से अधिक होगा।`,
        },
      };

  // Quantity Alert vs Required Produce & Mandi Intake
  const topIntake = mandisRanked[0].dailyIntakeQtl;
  let quantityAlert;
  if (safeQty > safeReq) {
    const surplus = safeQty - safeReq;
    quantityAlert = {
      status: 'EXCEEDS_DEMAND',
      title: {
        en: `Surplus Alert: Your ${safeQty} Qtl exceeds required ${safeReq} Qtl by +${surplus} Qtl`,
        kn: `ಹೆಚ್ಚುವರಿ ಎಚ್ಚರಿಕೆ: ನಿಮ್ಮ ${safeQty} ಕ್ವಿಂಟಾಲ್ ಪೂರೈಕೆ ಅಗತ್ಯವಿರುವ ${safeReq} ಕ್ವಿಂಟಾಲ್‌ಗಿಂತ +${surplus} ಕ್ವಿಂಟಾಲ್ ಹೆಚ್ಚಿದೆ`,
        hi: `अतिरिक्त अलर्ट: आपकी ${safeQty} क्विंटल मात्रा, आवश्यक ${safeReq} क्विंटल से +${surplus} क्विंटल अधिक है`,
      },
      detail: {
        en: `Dispatch ${safeReq} Qtl to ${mandisRanked[0].name.en} first, and route the remaining ${surplus} Qtl to ${mandisRanked[1].name.en} (or store in cool crates) so oversupply doesn't push your bid down.`,
        kn: `ಮೊದಲು ${safeReq} ಕ್ವಿಂಟಾಲ್ ಅನ್ನು ${mandisRanked[0].name.kn} ಗೆ ಕಳುಹಿಸಿ, ಉಳಿದ ${surplus} ಕ್ವಿಂಟಾಲ್ ಅನ್ನು ${mandisRanked[1].name.kn} ಮಂಡಿಗೆ ಹಂಚಿ ಮಾರಾಟ ಮಾಡಿ ದರ ಕುಸಿತ ತಪ್ಪಿಸಿ.`,
        hi: `पहले ${safeReq} क्विंटल ${mandisRanked[0].name.hi} में बेचें और शेष ${surplus} क्विंटल ${mandisRanked[1].name.hi} में भेजें ताकि अधिक आवक से भाव न गिरे।`,
      },
    };
  } else if (safeQty === safeReq) {
    quantityAlert = {
      status: 'MEETS_EXACT',
      title: {
        en: `Exact Target Met: ${safeQty} Qtl matches the ${safeReq} Qtl requirement`,
        kn: `ನಿಖರ ಗುರಿ ಪೂರ್ಣ: ನಿಮ್ಮ ${safeQty} ಕ್ವಿಂಟಾಲ್ ಅಗತ್ಯವಿರುವ ${safeReq} ಕ್ವಿಂಟಾಲ್‌ಗೆ ಸಮನಾಗಿದೆ`,
        hi: `लक्ष्य पूरा: आपकी ${safeQty} क्विंटल उपज, ${safeReq} क्विंटल की मांग के बिल्कुल बराबर है`,
      },
      detail: {
        en: `Your full lot fits cleanly inside ${bestNetMandi.name.en}'s daily intake (${topIntake} Qtl/day) for single-lot negotiation.`,
        kn: `ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಬೆಳೆ ${bestNetMandi.name.kn} ದೈನಂದಿನ ಖರೀದಿ ಮಿತಿಯೊಳಗೆ ಇರುವುದರಿಂದ ಒಂದೇ ಬಾರಿಗೆ ಉತ್ತಮ ದರ ಪಡೆಯಬಹುದು.`,
        hi: `आपकी पूरी खेप ${bestNetMandi.name.hi} की दैनिक क्षमता (${topIntake} क्विंटल/दिन) के भीतर है, एकमुश्त सौदा करें।`,
      },
    };
  } else {
    const gap = safeReq - safeQty;
    quantityAlert = {
      status: 'BELOW_DEMAND',
      title: {
        en: `Within Demand: ${safeQty} Qtl is ${gap} Qtl below the ${safeReq} Qtl target`,
        kn: `ಬೇಡಿಕೆಯೊಳಗಿದೆ: ನಿಮ್ಮ ${safeQty} ಕ್ವಿಂಟಾಲ್ ಗುರಿಗಿಂತ ${gap} ಕ್ವಿಂಟಾಲ್ ಕಡಿಮೆಯಿದೆ`,
        hi: `मांग के भीतर: ${safeQty} क्विंटल मात्रा ${safeReq} क्विंटल के लक्ष्य से ${gap} क्विंटल कम है`,
      },
      detail: {
        en: `High buyer absorption available. Consider pooling ${gap} Qtl with a neighbouring farmer (FPO) to unlock bulk transport savings.`,
        kn: `ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಉತ್ತಮ ಬೇಡಿಕೆ ಇದೆ. ಸಾಗಣೆ ವೆಚ್ಚ ಉಳಿಸಲು ಪಕ್ಕದ ರೈತರೊಂದಿಗೆ ಸೇರಿ ಸಾಗಣೆ ಮಾಡಬಹುದು.`,
        hi: `बाज़ार में अच्छी मांग है। भाड़ा बचाने के लिए आसपास के किसान या FPO के साथ मिलकर भेज सकते हैं।`,
      },
    };
  }

  return {
    produce,
    selectedSize,
    quantityQtl: safeQty,
    requiredQtl: safeReq,
    mandisRanked,
    bestNetMandi,
    chartPoints,
    shelfProjections,
    recommendation,
    quantityAlert,
  };
}
