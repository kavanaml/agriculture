export const SCHEMES_DATA = [
  {
    id: 'kcc-loan',
    category: 'loan',
    title: {
      en: 'Kisan Credit Card (KCC) Crop & Working Capital Loan',
      kn: 'ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC) ಬೆಳೆ ಮತ್ತು ಕೃಷಿ ಸಾಲ',
      hi: 'किसान क्रेडिट कार्ड (KCC) फसल व कार्यशील पूंजी ऋण',
    },
    ministry: {
      en: 'Ministry of Agriculture & NABARD',
      kn: 'ಕೃಷಿ ಸಚಿವಾಲಯ ಮತ್ತು ನಬಾರ್ಡ್',
      hi: 'कृषि मंत्रालय एवं नाबार्ड',
    },
    benefitHighlight: {
      en: 'Up to ₹3,00,000 short-term crop credit',
      kn: '₹3,00,000 ವರೆಗೆ ಅಲ್ಪಾವಧಿ ಬೆಳೆ ಸಾಲ',
      hi: '₹3,00,000 तक अल्पकालिक फसल ऋण',
    },
    interestOrSupport: {
      en: '4% p.a. effective interest (with 3% prompt repayment subsidy)',
      kn: 'ಸಕಾಲಕ್ಕೆ ಮರುಪಾವತಿಸಿದರೆ ಕೇವಲ 4% ವಾರ್ಷಿಕ ಬಡ್ಡಿ ದರ',
      hi: 'समय पर चुकाने पर मात्र 4% वार्षिक प्रभावी ब्याज दर',
    },
    summary: {
      en: 'Provides timely, collateral-free credit up to ₹1.60 Lakh (and up to ₹3 Lakh with land charge) for seeds, fertilizers, harvest labor, and post-harvest transport.',
      kn: 'ಬೀಜ, ಗೊಬ್ಬರ, ಕೊಯ್ಲು ಮತ್ತು ಮಂಡಿ ಸಾಗಣೆ ವೆಚ್ಚಗಳಿಗೆ ₹1.60 ಲಕ್ಷದವರೆಗೆ ಶೂನ್ಯ ಜಾಮೀನು ಸಾಲ ಮತ್ತು ₹3 ಲಕ್ಷದವರೆಗೆ ಕಡಿಮೆ ಬಡ್ಡಿ ಸಾಲ ಲಭ್ಯ.',
      hi: 'बीज, खाद, कटाई और मंडी ढुलाई के लिए ₹1.60 लाख तक बिना गारंटी ऋण और ₹3 लाख तक रियायती ब्याज पर फसल ऋण।',
    },
    eligibility: [
      { en: 'All owner-cultivators, tenant farmers, and sharecroppers', kn: 'ಎಲ್ಲಾ ಭೂಮಾಲೀಕರು, ಗೇಣಿ ಮತ್ತು ಪಾಲುಗಾರ ರೈತರು', hi: 'सभी भूमि मालिक, बटाईदार और पट्टेदार किसान' },
      { en: 'Dairy, poultry, and fishery farmers (up to ₹2 Lakh)', kn: 'ಹೈನುಗಾರಿಕೆ, ಕೋಳಿ ಮತ್ತು ಮೀನುಗಾರಿಕೆ ರೈತರು', hi: 'डेयरी, मुर्गीपालन और मत्स्य पालक किसान' },
    ],
    documents: [
      { en: 'Aadhaar Card & PAN', kn: 'ಆಧಾರ್ ಕಾರ್ಡ್ ಮತ್ತು ಪ್ಯಾನ್', hi: 'आधार कार्ड व पैन कार्ड' },
      { en: 'Land RTC / Pahani / Khatauni record', kn: 'ಜಮೀನು ಪಹಣಿ (RTC) / ಖಾತಾ ವಿವರ', hi: 'जमीन की खतौनी / भू-अभिलेख' },
      { en: 'Bank Passbook & Passport Photo', kn: 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ ಮತ್ತು ಫೋಟೋ', hi: 'बैंक पासबुक व पासपोर्ट फोटो' },
    ],
    applySteps: {
      en: 'Apply at your nearest Cooperative Bank, Regional Rural Bank, or SBI/nationalized bank branch or via PM-KISAN portal.',
      kn: 'ಹತ್ತಿರದ ಸಹಕಾರಿ ಬ್ಯಾಂಕ್, ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕ್ ಅಥವಾ ರಾಷ್ಟ್ರೀಕೃತ ಬ್ಯಾಂಕ್ ಶಾಖೆಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
      hi: 'अपनी नजदीकी सहकारी बैंक, ग्रामीण बैंक या राष्ट्रीयकृत बैंक शाखा में केसीसी फॉर्म जमा करें।',
    },
    portalUrl: 'https://www.myscheme.gov.in/schemes/kcc',
  },
  {
    id: 'pm-kisan',
    category: 'subsidy',
    title: {
      en: 'PM-KISAN Samman Nidhi Direct Income Support',
      kn: 'ಪಿಎಂ-ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ ನೇರ ಆರ್ಥಿಕ ನೆರವು',
      hi: 'पीएम-किसान सम्मान निधि प्रत्यक्ष आय सहायता',
    },
    ministry: {
      en: 'Ministry of Agriculture & Farmers Welfare',
      kn: 'ಕೇಂದ್ರ ಕೃಷಿ ಮತ್ತು ರೈತ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ',
      hi: 'केंद्रीय कृषि एवं किसान कल्याण मंत्रालय',
    },
    benefitHighlight: {
      en: '₹6,000 per year directly to bank account',
      kn: 'ವರ್ಷಕ್ಕೆ ₹6,000 ನೇರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ',
      hi: 'प्रति वर्ष ₹6,000 सीधे बैंक खाते में (DBT)',
    },
    interestOrSupport: {
      en: '3 equal installments of ₹2,000 every 4 months',
      kn: 'ಪ್ರತಿ 4 ತಿಂಗಳಿಗೊಮ್ಮೆ ₹2,000 ರಂತೆ 3 ಕಂತುಗಳು',
      hi: 'हर 4 महीने में ₹2,000 की 3 बराबर किस्तें',
    },
    summary: {
      en: 'Direct cash transfer to help farmer families purchase quality agricultural inputs and meet seasonal cultivation expenses without high-interest borrowing.',
      kn: 'ಕೃಷಿ ಪರಿಕರಗಳನ್ನು ಖರೀದಿಸಲು ಮತ್ತು ಬೆಳೆ ನಿರ್ವಹಣಾ ವೆಚ್ಚಗಳಿಗೆ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ನೇರ ನಗದು ಸಹಾಯಧನ.',
      hi: 'खेती के बीज, खाद और मौसमी खर्चों के लिए किसान परिवारों को सीधे बैंक खाते में नकद सहायता।',
    },
    eligibility: [
      { en: 'All landholding farmer families with cultivable land', kn: 'ಕೃಷಿ ಯೋಗ್ಯ ಜಮೀನು ಹೊಂದಿರುವ ಎಲ್ಲಾ ರೈತ ಕುಟುಂಬಗಳು', hi: 'कृषि योग्य भूमि वाले सभी किसान परिवार' },
      { en: 'e-KYC and Aadhaar-seeded bank account mandatory', kn: 'ಇ-ಕೆವೈಸಿ ಮತ್ತು ಆಧಾರ್ ಲಿಂಕ್ ಬ್ಯಾಂಕ್ ಖಾತೆ ಕಡ್ಡಾಯ', hi: 'ई-केवाईसी और आधार लिंक बैंक खाता अनिवार्य' },
    ],
    documents: [
      { en: 'Aadhaar Card (linked to mobile)', kn: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ಲಿಂಕ್ ಆದ ಆಧಾರ್', hi: 'मोबाइल से लिंक आधार कार्ड' },
      { en: 'Land Ownership Document (RTC/Bhoomi)', kn: 'ಜಮೀನು ಮಾಲೀಕತ್ವದ ದಾಖಲೆ (ಪಹಣಿ)', hi: 'भूमि स्वामित्व दस्तावेज़ (खसरा/खतौनी)' },
    ],
    applySteps: {
      en: 'Register online via pmkisan.gov.in ("New Farmer Registration") or through your local Common Service Centre (CSC / Grama One).',
      kn: 'pmkisan.gov.in ಮೂಲಕ ಅಥವಾ ಹತ್ತಿರದ ಗ್ರಾಮ ಒನ್ / ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ನೋಂದಣಿ ಮಾಡಿಸಿ.',
      hi: 'pmkisan.gov.in पर ऑनलाइन या नजदीकी जन सेवा केंद्र (CSC) के माध्यम से पंजीकरण करें।',
    },
    portalUrl: 'https://pmkisan.gov.in/',
  },
  {
    id: 'aif-storage',
    category: 'infrastructure',
    title: {
      en: 'Agriculture Infrastructure Fund (AIF) — Cold Storage & Grading Loan',
      kn: 'ಕೃಷಿ ಮೂಲಸೌಕರ್ಯ ನಿಧಿ (AIF) — ಶೀತಲ ಗೃಹ ಮತ್ತು ಗ್ರೇಡಿಂಗ್ ಸಾಲ',
      hi: 'कृषि अवसंरचना कोष (AIF) — कोल्ड स्टोरेज व ग्रेडिंग ऋण',
    },
    ministry: {
      en: 'Dept. of Agriculture & NABARD',
      kn: 'ಕೃಷಿ ಇಲಾಖೆ ಮತ್ತು ನಬಾರ್ಡ್',
      hi: 'कृषि विभाग एवं नाबार्ड',
    },
    benefitHighlight: {
      en: '3% interest subvention on loans up to ₹2 Crore',
      kn: '₹2 ಕೋಟಿಯವರೆಗಿನ ಸಾಲಕ್ಕೆ 3% ಬಡ್ಡಿ ರಿಯಾಯಿತಿ',
      hi: '₹2 करोड़ तक के ऋण पर 3% ब्याज अनुदान',
    },
    interestOrSupport: {
      en: 'Interest subsidy for up to 7 years + Credit Guarantee cover',
      kn: '7 ವರ್ಷಗಳವರೆಗೆ ಬಡ್ಡಿ ಸಹಾಯಧನ ಮತ್ತು ಕ್ರೆಡಿಟ್ ಗ್ಯಾರಂಟಿ',
      hi: '7 वर्षों तक ब्याज सब्सिडी + क्रेडिट गारंटी कवर',
    },
    summary: {
      en: 'Supports individual farmers, FPOs, and agri-entrepreneurs to build onion chawls, pack-houses, solar cold rooms, and sorting/grading units that cut post-harvest wastage.',
      kn: 'ಬೆಳೆ ವ್ಯರ್ಥ ತಡೆಯಲು ಈರುಳ್ಳಿ ಶೇಖರಣಾ ಘಟಕ, ಪ್ಯಾಕ್-ಹೌಸ್, ಸೋಲಾರ್ ಕೋಲ್ಡ್ ರೂಮ್ ಮತ್ತು ಗ್ರೇಡಿಂಗ್ ಯಂತ್ರ ಸ್ಥಾಪಿಸಲು ರಿಯಾಯಿತಿ ಸಾಲ.',
      hi: 'प्याज भंडारण गृह, पैक-हाउस, सोलर कोल्ड रूम और ग्रेडिंग यूनिट लगाने के लिए सस्ता ऋण, जिससे फसल बर्बादी रुकती है।',
    },
    eligibility: [
      { en: 'Farmers, FPOs, Cooperatives, Agri-Startups, SHGs', kn: 'ರೈತರು, ಎಫ್‌ಪಿಒಗಳು, ಸಹಕಾರಿ ಸಂಘಗಳು ಮತ್ತು ಸ್ವ-ಸಹಾಯ ಗುಂಪುಗಳು', hi: 'किसान, FPO, सहकारी समितियाँ एवं स्वयं सहायता समूह' },
      { en: 'Viable post-harvest storage or primary processing DPR', kn: 'ಕೊಯ್ಲು ನಂತರದ ಸಂಗ್ರಹಣೆ ಅಥವಾ ಸಂಸ್ಕರಣಾ ಯೋಜನಾ ವರದಿ', hi: 'फसल भंडारण या प्राथमिक प्रसंस्करण परियोजना रिपोर्ट' },
    ],
    documents: [
      { en: 'Detailed Project Report (DPR)', kn: 'ವಿವರವಾದ ಯೋಜನಾ ವರದಿ (DPR)', hi: 'विस्तृत परियोजना रिपोर्ट (DPR)' },
      { en: 'Land Lease/Ownership & KYC', kn: 'ಜಮೀನು ದಾಖಲೆ ಮತ್ತು ಕೆವೈಸಿ', hi: 'भूमि दस्तावेज़ व केवाईसी' },
    ],
    applySteps: {
      en: 'Submit your project proposal online on agriinfra.dac.gov.in; verified applications are routed directly to your chosen lending bank.',
      kn: 'agriinfra.dac.gov.in ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪ್ರಸ್ತಾವನೆ ಸಲ್ಲಿಸಿ, ನಂತರ ಆಯ್ಕೆ ಮಾಡಿದ ಬ್ಯಾಂಕ್ ಮೂಲಕ ಮಂಜೂರಾತಿ ಪಡೆಯಿರಿ.',
      hi: 'agriinfra.dac.gov.in पोर्टल पर ऑनलाइन आवेदन करें; सत्यापन के बाद चयनित बैंक से ऋण स्वीकृत होगा।',
    },
    portalUrl: 'https://agriinfra.dac.gov.in/',
  },
  {
    id: 'pmfby-insurance',
    category: 'insurance',
    title: {
      en: 'PM Fasal Bima Yojana (PMFBY) Crop Loss Insurance',
      kn: 'ಪಿಎಂ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ (PMFBY) ಬೆಳೆ ವಿಮೆ',
      hi: 'प्रधानमंत्री फसल बीमा योजना (PMFBY)',
    },
    ministry: {
      en: 'Ministry of Agriculture & Farmers Welfare',
      kn: 'ಕೇಂದ್ರ ಕೃಷಿ ಸಚಿವಾಲಯ',
      hi: 'केंद्रीय कृषि मंत्रालय',
    },
    benefitHighlight: {
      en: 'Farmer pays only 1.5%–2% premium (5% for horticulture)',
      kn: 'ರೈತರಿಗೆ ಕೇವಲ 1.5%–2% ವಿಮಾ ಕಂತು (ತೋಟಗಾರಿಕೆಗೆ 5%)',
      hi: 'किसान को केवल 1.5%–2% प्रीमियम (बागवानी पर 5%)',
    },
    interestOrSupport: {
      en: 'Full protection against unseasonal rain, hail, drought & post-harvest loss',
      kn: 'ಅಕಾಲಿಕ ಮಳೆ, ಬರ, ಆಲಿಕಲ್ಲು ಮತ್ತು ಕೊಯ್ಲು ನಂತರದ ಹಾನಿಗೆ ಸಂಪೂರ್ಣ ರಕ್ಷಣೆ',
      hi: 'बेमौसम बारिश, ओलावृष्टि, सूखा और कटाई के बाद नुकसान पर पूरा बीमा मुआवजा',
    },
    summary: {
      en: 'Covers standing crops and harvested produce lying in the field for up to 14 days against natural calamities, localized hailstorms, and cyclonic rain.',
      kn: 'ಬೆಳೆದ ಬೆಳೆ ಮತ್ತು ಕೊಯ್ಲು ಮಾಡಿ ಹೊಲದಲ್ಲಿ ಒಣಗಲು ಇಟ್ಟ ಬೆಳೆಗೆ 14 ದಿನಗಳವರೆಗೆ ಪ್ರಕೃತಿ ವಿಕೋಪದಿಂದ ಆಗುವ ನಷ್ಟಕ್ಕೆ ವಿಮೆ.',
      hi: 'खड़ी फसल तथा कटाई के बाद खेत में सूखने के लिए रखी उपज को 14 दिनों तक प्राकृतिक आपदाओं से सुरक्षा।',
    },
    eligibility: [
      { en: 'Both loanee and non-loanee farmers growing notified crops', kn: 'ಅಧಿಸೂಚಿತ ಬೆಳೆ ಬೆಳೆಯುವ ಸಾಲ ಪಡೆದ ಮತ್ತು ಪಡೆಯದ ಎಲ್ಲಾ ರೈತರು', hi: 'अधिसूचित फसलें उगाने वाले ऋणी व गैर-ऋणी किसान' },
    ],
    documents: [
      { en: 'Sowing Certificate / RTC', kn: 'ಬಿತ್ತನೆ ಪ್ರಮಾಣಪತ್ರ / ಪಹಣಿ', hi: 'बुवाई प्रमाणपत्र / खतौनी' },
      { en: 'Aadhaar & Bank Account Details', kn: 'ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರ', hi: 'आधार व बैंक खाता विवरण' },
    ],
    applySteps: {
      en: 'Enroll before seasonal cut-off date on pmfby.gov.in, via CSC center, or through your KCC bank branch.',
      kn: 'ಅಂತಿಮ ದಿನಾಂಕದೊಳಗೆ pmfby.gov.in, ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರ ಅಥವಾ ಕೆಸಿಸಿ ಬ್ಯಾಂಕ್ ಶಾಖೆಯಲ್ಲಿ ನೋಂದಾಯಿಸಿ.',
      hi: 'अंतिम तिथि से पहले pmfby.gov.in, CSC केंद्र या केसीसी बैंक शाखा से बीमा करवाएं।',
    },
    portalUrl: 'https://pmfby.gov.in/',
  },
  {
    id: 'pm-kusum',
    category: 'infrastructure',
    title: {
      en: 'PM-KUSUM Solar Water Pump & Feeder Subsidy',
      kn: 'ಪಿಎಂ-ಕುಸುಮ್ ಸೋಲಾರ್ ಪಂಪ್‌ಸೆಟ್ ಸಹಾಯಧನ ಯೋಜನೆ',
      hi: 'पीएम-कुसुम सोलर पंप एवं ऊर्जा सब्सिडी योजना',
    },
    ministry: {
      en: 'Ministry of New & Renewable Energy',
      kn: 'ಹೊಸ ಮತ್ತು ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ ಸಚಿವಾಲಯ',
      hi: 'नवीन एवं नवीकरणीय ऊर्जा मंत्रालय',
    },
    benefitHighlight: {
      en: 'Up to 60% combined Central + State Subsidy (30% loan)',
      kn: '60% ವರೆಗೆ ಕೇಂದ್ರ + ರಾಜ್ಯ ಸಹಾಯಧನ ಮತ್ತು 30% ಬ್ಯಾಂಕ್ ಸಾಲ',
      hi: '60% तक केंद्र व राज्य सब्सिडी (30% बैंक ऋण सुविधा)',
    },
    interestOrSupport: {
      en: 'Farmer contributes only 10% upfront cost for 3 HP – 7.5 HP solar pump',
      kn: '3 HP ರಿಂದ 7.5 HP ಸೋಲಾರ್ ಪಂಪ್‌ಗೆ ರೈತರ ಪಾಲು ಕೇವಲ 10%',
      hi: '3 से 7.5 HP सोलर पंप के लिए किसान को केवल 10% अंशदान देना होगा',
    },
    summary: {
      en: 'Eliminates diesel pump costs and erratic night electricity by providing daytime solar irrigation, plus extra income by selling surplus solar power to DISCOMs.',
      kn: 'ಡೀಸೆಲ್ ಖರ್ಚು ಮತ್ತು ರಾತ್ರಿ ಕರೆಂಟ್ ಸಮಸ್ಯೆ ತಪ್ಪಿಸಿ ಹಗಲಿನಲ್ಲೇ ನೀರಾವರಿ ಸೌಲಭ್ಯ; ಹೆಚ್ಚುವರಿ ವಿದ್ಯುತ್ ಮಾರಾಟದಿಂದ ಆದಾಯವೂ ಲಭ್ಯ.',
      hi: 'डीजल खर्च और रात की बिजली कटौती से मुक्ति, दिन में मुफ्त सौर सिंचाई और अतिरिक्त बिजली बेचकर कमाई।',
    },
    eligibility: [
      { en: 'Individual farmers, farmer groups, and water user associations', kn: 'ವೈಯಕ್ತಿಕ ರೈತರು ಮತ್ತು ರೈತ ಗುಂಪುಗಳು', hi: 'व्यक्तिगत किसान एवं किसान समूह' },
    ],
    documents: [
      { en: 'Land Record & Borewell/Water Source proof', kn: 'ಜಮೀನು ದಾಖಲೆ ಮತ್ತು ನೀರಿನ ಮೂಲದ ವಿವರ', hi: 'भूमि अभिलेख व जल स्रोत प्रमाण' },
      { en: 'Aadhaar & Bank Passbook', kn: 'ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್', hi: 'आधार व बैंक पासबुक' },
    ],
    applySteps: {
      en: 'Apply through your State Renewable Energy Nodal Agency portal (e.g., KREDL / MSEDCL / Kusum State Portal).',
      kn: 'ನಿಮ್ಮ ರಾಜ್ಯದ ನವೀಕರಿಸಬಹುದಾದ ಇಂಧನ ಸಂಸ್ಥೆಯ (ಉದಾ. KREDL) ಪೋರ್ಟಲ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
      hi: 'अपने राज्य की अक्षय ऊर्जा एजेंसी पोर्टल पर ऑनलाइन आवेदन जमा करें।',
    },
    portalUrl: 'https://pmkusum.mnre.gov.in/',
  },
  {
    id: 'enam-pledge',
    category: 'loan',
    title: {
      en: 'e-NAM & Negotiable Warehouse Receipt (e-NWR) Pledge Loan',
      kn: 'ಇ-ನಾಮ್ ಮತ್ತು ಉಗ್ರಾಣ ರಸೀದಿ (e-NWR) ಅಡಮಾನ ಸಾಲ',
      hi: 'ई-नाम व वेयरहाउस रसीद (e-NWR) बंधक ऋण योजना',
    },
    ministry: {
      en: 'SFAC & WDRA / Nationalized Banks',
      kn: 'ಎಸ್‌ಎಫ್‌ಎಸಿ ಮತ್ತು ಡಬ್ಲ್ಯೂಡಿಆರ್‌ಎ / ಬ್ಯಾಂಕುಗಳು',
      hi: 'SFAC एवं WDRA / राष्ट्रीयकृत बैंक',
    },
    benefitHighlight: {
      en: '70%–75% instant loan against stored produce value',
      kn: 'ಗೋದಾಮಿನಲ್ಲಿಟ್ಟ ಬೆಳೆಯ ಮೌಲ್ಯದ 70%–75% ವರೆಗೆ ತಕ್ಷಣದ ಸಾಲ',
      hi: 'गोदाम में रखी उपज के मूल्य का 70%–75% तत्काल ऋण',
    },
    interestOrSupport: {
      en: '7% p.a. (4% effective for small/marginal farmers with interest subvention)',
      kn: 'ಸಣ್ಣ ರೈತರಿಗೆ ಬಡ್ಡಿ ರಿಯಾಯಿತಿ ಸೇರಿದಂತೆ ಕೇವಲ 4% ಪರಿಣಾಮಕಾರಿ ಬಡ್ಡಿ',
      hi: 'छोटे व सीमांत किसानों को ब्याज छूट सहित 4% प्रभावी ब्याज',
    },
    summary: {
      en: 'Avoid distress selling right after harvest! Store dry produce in WDRA-registered warehouses, take a low-interest pledge loan for urgent cash needs, and sell later when mandi prices peak.',
      kn: 'ಕೊಯ್ಲು ಮಾಡಿದ ತಕ್ಷಣ ಕಡಿಮೆ ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡಬೇಡಿ! ಗೋದಾಮಿನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ ಕಡಿಮೆ ಬಡ್ಡಿ ಸಾಲ ಪಡೆದು, ಬೆಲೆ ಹೆಚ್ಚಾದಾಗ ಮಾರಿ.',
      hi: 'कटाई के तुरंत बाद सस्ते में फसल बेचने की मजबूरी खत्म! गोदाम में उपज रखकर सस्ता ऋण लें और भाव बढ़ने पर बेचें।',
    },
    eligibility: [
      { en: 'All farmers storing graded non-perishable crops in WDRA warehouses', kn: 'WDRA ಗೋದಾಮುಗಳಲ್ಲಿ ಧಾನ್ಯ/ಒಣ ಬೆಳೆ ಸಂಗ್ರಹಿಸುವ ರೈತರು', hi: 'WDRA पंजीकृत गोदामों में उपज रखने वाले सभी किसान' },
    ],
    documents: [
      { en: 'e-NWR Warehouse Receipt & Farmer ID', kn: 'ಇ-ಎನ್‌ಡಬ್ಲ್ಯೂಆರ್ ಉಗ್ರಾಣ ರಸೀದಿ ಮತ್ತು ರೈತ ಗುರುತಿನ ಚೀಟಿ', hi: 'e-NWR वेयरहाउस रसीद व किसान पहचान पत्र' },
    ],
    applySteps: {
      en: 'Deposit produce at a WDRA-certified APMC or CWC warehouse to receive an e-NWR, then pledge it at your bank for instant credit.',
      kn: 'ಹತ್ತಿರದ WDRA ಮಾನ್ಯತೆಯ ಗೋದಾಮಿನಲ್ಲಿ ಬೆಳೆ ಇರಿಸಿ e-NWR ರಸೀದಿ ಪಡೆದು ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಸಾಲ ಪಡೆಯಿರಿ.',
      hi: 'WDRA प्रमाणित गोदाम में फसल जमा कर e-NWR रसीद लें और बैंक से तुरंत बंधक ऋण प्राप्त करें।',
    },
    portalUrl: 'https://www.enam.gov.in/',
  },
  {
    id: 'krishi-bhagya-drip',
    category: 'subsidy',
    title: {
      en: 'Per Drop More Crop — Micro & Drip Irrigation Subsidy',
      kn: 'ಪ್ರತಿ ಹನಿ ಹೆಚ್ಚು ಬೆಳೆ — ಹನಿ ನೀರಾವರಿ ಸಹಾಯಧನ (ಕೃಷಿ ಭಾಗ್ಯ)',
      hi: 'पर ड्रॉप मोर क्रॉप — सूक्ष्म एवं ड्रिप सिंचाई सब्सिडी',
    },
    ministry: {
      en: 'PMKSY / State Horticulture & Agriculture Dept.',
      kn: 'ಪ್ರಧಾನಮಂತ್ರಿ ಕೃಷಿ ಸಿಂಚಾಯಿ ಯೋಜನೆ / ರಾಜ್ಯ ಕೃಷಿ ಇಲಾಖೆ',
      hi: 'प्रधानमंत्री कृषि सिंचाई योजना / राज्य कृषि विभाग',
    },
    benefitHighlight: {
      en: '55%–90% subsidy on Drip & Sprinkler kits',
      kn: 'ಹನಿ ಮತ್ತು ತುಂತುರು ನೀರಾವರಿಗೆ 55%–90% ವರೆಗೆ ಸಹಾಯಧನ',
      hi: 'ड्रिप और स्प्रिंकलर सिंचाई सेट पर 55%–90% सब्सिडी',
    },
    interestOrSupport: {
      en: 'Up to 90% subsidy for SC/ST & small farmers in many states (incl. Karnataka)',
      kn: 'ಕರ್ನಾಟಕ ಸೇರಿದಂತೆ ಹಲವು ರಾಜ್ಯಗಳಲ್ಲಿ ಸಣ್ಣ/ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ 90% ವರೆಗೆ ಸಬ್ಸಿಡಿ',
      hi: 'छोटे, सीमांत व आरक्षित वर्ग के किसानों को कई राज्यों में 90% तक अनुदान',
    },
    summary: {
      en: 'Saves 45% water and boosts onion, tomato, chilli, and orchard yields by 25–35% while reducing fertilizer wastage via fertigation.',
      kn: '45% ನೀರು ಉಳಿತಾಯದೊಂದಿಗೆ ಈರುಳ್ಳಿ, ಟೊಮೇಟೊ ಮತ್ತು ತೋಟಗಾರಿಕಾ ಬೆಳೆಗಳ ಇಳುವರಿಯನ್ನು 25–35% ಹೆಚ್ಚಿಸುತ್ತದೆ.',
      hi: '45% पानी बचाकर प्याज, टमाटर, मिर्च व बागवानी फसलों की पैदावार 25–35% तक बढ़ाती है।',
    },
    eligibility: [
      { en: 'Farmers with valid land record and water source (borewell/farm pond)', kn: 'ಜಮೀನು ದಾಖಲೆ ಮತ್ತು ಕೊಳವೆಬಾವಿ/ಕೃಷಿ ಹೊಂಡ ಹೊಂದಿರುವ ರೈತರು', hi: 'वैध भूमि अभिलेख और जल स्रोत वाले किसान' },
    ],
    documents: [
      { en: 'FRUITS ID / Farmer Registration, RTC, Aadhaar, Bank Passbook', kn: 'FRUITS ಐಡಿ, ಪಹಣಿ, ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರ', hi: 'किसान आईडी, खतौनी, आधार व बैंक पासबुक' },
    ],
    applySteps: {
      en: 'Apply at your local Raitha Samparka Kendra (RSK) or State Horticulture online portal with vendor quotation.',
      kn: 'ಹತ್ತಿರದ ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರ (RSK) ಅಥವಾ ತೋಟಗಾರಿಕಾ ಇಲಾಖೆ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
      hi: 'अपने ब्लॉक कृषि कार्यालय या राज्य बागवानी पोर्टल पर विक्रेता कोटेशन के साथ आवेदन करें।',
    },
    portalUrl: 'https://pmksy.gov.in/',
  },
];

export const NEWS_DATA = [
  {
    id: 'news-onion-arrivals',
    category: 'market',
    imageUrl: '/src/assets/images/mandihut_onion_harvest_1794591646119.jpg',
    publishedDate: 'Nov 13, 2026',
    readTimeMin: 3,
    source: { en: 'Mandihut Market Desk', kn: 'ಮಂಡಿಹಟ್ ಮಾರುಕಟ್ಟೆ ವಿಭಾಗ', hi: 'मंडीहट बाज़ार डेस्क' },
    title: {
      en: 'Grade-A Red Onion Bids Rise 7.5% Across Southern & Western APMCs as Export Demand Strengthens',
      kn: 'ರಫ್ತು ಬೇಡಿಕೆ ಹೆಚ್ಚಳದಿಂದ ದಕ್ಷಿಣ ಮತ್ತು ಪಶ್ಚಿಮ ಎಪಿಎಂಸಿಗಳಲ್ಲಿ ಗ್ರೇಡ್-ಎ ಕೆಂಪು ಈರುಳ್ಳಿ ದರ 7.5% ಏರಿಕೆ',
      hi: 'निर्यात मांग बढ़ने से दक्षिण व पश्चिम की APMC मंडियों में ग्रेड-A लाल प्याज के भाव 7.5% बढ़े',
    },
    summary: {
      en: 'Well-cured 55mm+ red onions are commanding ₹2,700–₹3,150/Qtl across Bengaluru, Hubballi, and Lasalgaon yards due to tighter fresh arrivals and festival restocking.',
      kn: 'ಚೆನ್ನಾಗಿ ಒಣಗಿಸಿದ 55mm+ ಕೆಂಪು ಈರುಳ್ಳಿಗೆ ಬೆಂಗಳೂರು, ಹುಬ್ಬಳ್ಳಿ ಮತ್ತು ಲಾಸಲ್‌ಗಾಂವ್ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ₹2,700–₹3,150/ಕ್ವಿಂಟಾಲ್ ದರ ದಾಖಲಾಗಿದೆ.',
      hi: 'अच्छी तरह सूखे 55mm+ लाल प्याज को बेंगलुरु, हुब्बल्लि और लासलगांव मंडियों में ₹2,700–₹3,150 प्रति क्विंटल भाव मिल रहा है।',
    },
    body: [
      {
        en: 'Market analysts report that sorted, moisture-free red onions above 55mm diameter are receiving aggressive bidding from interstate buyers and Gulf exporters this week.',
        kn: '55 ಮಿ.ಮೀ ಗಿಂತ ದೊಡ್ಡ ಗಾತ್ರದ, ತೇವಾಂಶ ರಹಿತ ಕೆಂಪು ಈರುಳ್ಳಿಗೆ ಅಂತರರಾಜ್ಯ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ರಫ್ತುದಾರರಿಂದ ಉತ್ತಮ ಬೇಡಿಕೆ ಬಂದಿದೆ.',
        hi: 'बाज़ार विशेषज्ञों के अनुसार 55 मिमी से बड़े और बिना नमी वाले लाल प्याज के लिए अंतरराज्यीय व्यापारियों व निर्यातकों से तेज़ बोली लग रही है।',
      },
      {
        en: 'Post-harvest experts advise farmers not to rush damp bulbs into jute sacks. Two days of shaded air-curing improves bulb skin gloss and reduces transit shrinkage by up to 4%.',
        kn: 'ಒದ್ದೆ ಈರುಳ್ಳಿಯನ್ನು ತಕ್ಷಣ ಚೀಲಕ್ಕೆ ತುಂಬಬೇಡಿ; ಎರಡು ದಿನ ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸುವುದರಿಂದ ಬಣ್ಣ ಹೊಳೆಯುತ್ತದೆ ಮತ್ತು ಸಾಗಣೆ ನಷ್ಟ 4% ಕಡಿಮೆಯಾಗುತ್ತದೆ.',
        hi: 'विशेषज्ञों की सलाह है कि गीले प्याज को तुरंत बोरों में न भरें। दो दिन छाया में सुखाने से चमक बढ़ती है और ढुलाई में वजन नुकसान 4% तक घटता है।',
      },
    ],
  },
  {
    id: 'news-solar-drip',
    category: 'tech',
    imageUrl: '/src/assets/images/mandihut_solar_irrigation_1794591646081.jpg',
    publishedDate: 'Nov 12, 2026',
    readTimeMin: 4,
    source: { en: 'AgriTech India', kn: 'ಅಗ್ರಿಟೆಕ್ ಇಂಡಿಯಾ', hi: 'एग्रीटेक इंडिया' },
    title: {
      en: 'Solar-Powered Micro-Drip Clusters Cut Vegetable Cultivation Costs by 38% Across Semi-Arid Districts',
      kn: 'ಸೌರಶಕ್ತಿ ಹನಿ ನೀರಾವರಿ ಘಟಕಗಳಿಂದ ಅರೆ-ಶುಷ್ಕ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ತರಕಾರಿ ಕೃಷಿ ವೆಚ್ಚ 38% ಇಳಿಕೆ',
      hi: 'सौर ऊर्जा आधारित ड्रिप सिंचाई क्लस्टर से अर्ध-शुष्क जिलों में सब्जी खेती की लागत 38% घटी',
    },
    summary: {
      en: 'Farmers combining PM-KUSUM solar pumps with inline drip fertigation recorded uniform bulb sizes and zero diesel dependency during peak summer stress.',
      kn: 'ಪಿಎಂ-ಕುಸುಮ್ ಸೋಲಾರ್ ಪಂಪ್ ಮತ್ತು ಹನಿ ನೀರಾವರಿ ಜೋಡಿಸಿದ ರೈತರು ಏಕರೂಪದ ಬೆಳೆ ಗಾತ್ರ ಪಡೆದು ಡೀಸೆಲ್ ವೆಚ್ಚವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಉಳಿಸಿದ್ದಾರೆ.',
      hi: 'पीएम-कुसुम सोलर पंप और ड्रिप फर्टिगेशन अपनाने वाले किसानों ने एकसमान फसल आकार और डीजल खर्च से पूरी आज़ादी हासिल की।',
    },
    body: [
      {
        en: 'Field trials across 1,400 horticulture farms show that automated daytime solar pumping paired with root-zone fertigation increases Grade-A harvest share from 58% to 84%.',
        kn: '1,400 ತೋಟಗಾರಿಕಾ ಜಮೀನುಗಳ ಸಮೀಕ್ಷೆಯಲ್ಲಿ ಸೋಲಾರ್ ಹನಿ ನೀರಾವರಿಯಿಂದ ಗ್ರೇಡ್-ಎ ಇಳುವರಿ ಪಾಲು 58% ರಿಂದ 84% ಕ್ಕೆ ಏರಿಕೆಯಾಗಿದೆ.',
        hi: '1,400 बागवानी खेतों के परीक्षण में पाया गया कि सौर ड्रिप सिंचाई से ग्रेड-A उपज का हिस्सा 58% से बढ़कर 84% हो गया।',
      },
      {
        en: 'Cluster applicants under FPOs are receiving priority 45-day installation clearances along with combined central and state capital subsidies.',
        kn: 'ಎಫ್‌ಪಿಒ ಗುಂಪುಗಳ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ರೈತರಿಗೆ 45 ದಿನಗಳಲ್ಲಿ ಆದ್ಯತೆಯ ಮೇಲೆ ಮಂಜೂರಾತಿ ನೀಡಲಾಗುತ್ತಿದೆ.',
        hi: 'FPO क्लस्टर के तहत आवेदन करने वाले किसानों को 45 दिनों के भीतर प्राथमिकता से स्वीकृति और सब्सिडी मिल रही है।',
      },
    ],
  },
  {
    id: 'news-cold-chain',
    category: 'policy',
    imageUrl: '/src/assets/images/mandihut_cold_storage_1794591647074.jpg',
    publishedDate: 'Nov 11, 2026',
    readTimeMin: 3,
    source: { en: 'Rural Policy Watch', kn: 'ಗ್ರಾಮೀಣ ನೀತಿ ವಾರ್ತೆ', hi: 'ग्रामीण नीति समीक्षा' },
    title: {
      en: 'New Farm-Gate Solar Cold Rooms & e-NWR Pledge Centres Approved Across 120 Rural Mandi Hubs',
      kn: '120 ಗ್ರಾಮೀಣ ಮಂಡಿ ಕೇಂದ್ರಗಳಲ್ಲಿ ಹೊಸ ಸೋಲಾರ್ ಶೀತಲ ಗೃಹ ಮತ್ತು ಇ-ಉಗ್ರಾಣ ಸಾಲ ಕೇಂದ್ರಗಳಿಗೆ ಅನುಮೋದನೆ',
      hi: '120 ग्रामीण मंडी केंद्रों पर नए फार्म-गेट सोलर कोल्ड रूम और e-NWR ऋण केंद्र स्वीकृत',
    },
    summary: {
      en: 'Smallholders can now store perishable vegetables for 7–14 days at ₹1.50/kg/week and unlock instant pledge credit instead of distress-selling at low morning bids.',
      kn: 'ಸಣ್ಣ ರೈತರು ವಾರಕ್ಕೆ ಕೆಜಿಗೆ ಕೇವಲ ₹1.50 ದರದಲ್ಲಿ ತರಕಾರಿ ಸಂಗ್ರಹಿಸಿ, ಕಡಿಮೆ ಬೆಲೆಗೆ ಮಾರುವ ಬದಲು ತಕ್ಷಣದ ಸಾಲ ಪಡೆಯಬಹುದು.',
      hi: 'छोटे किसान अब मात्र ₹1.50 प्रति किलो/सप्ताह शुल्क पर सब्जियां सुरक्षित रखकर सस्ते में बेचने के बजाय तुरंत बंधक ऋण ले सकेंगे।',
    },
    body: [
      {
        en: 'The expansion brings modular 10-metric-ton cooling chambers directly inside APMC sub-yards, cutting tomato and green chilli post-harvest losses by nearly half.',
        kn: 'ಎಪಿಎಂಸಿ ಉಪ-ಮಾರುಕಟ್ಟೆಗಳಲ್ಲೇ 10 ಮೆಟ್ರಿಕ್ ಟನ್ ಸಾಮರ್ಥ್ಯದ ಕೂಲಿಂಗ್ ಚೇಂಬರ್‌ಗಳನ್ನು ಸ್ಥಾಪಿಸಲಾಗುತ್ತಿದ್ದು ಟೊಮೇಟೊ ಹಾಗೂ ಮೆಣಸಿನಕಾಯಿ ನಷ್ಟ ಅರ್ಧದಷ್ಟು ತಗ್ಗಲಿದೆ.',
        hi: 'APMC उप-मंडियों के भीतर 10 मीट्रिक टन के मॉड्यूलर कूलिंग चैंबर लगने से टमाटर और हरी मिर्च की बर्बादी लगभग आधी हो जाएगी।',
      },
      {
        en: 'Farmers holding e-NWR receipts can borrow up to 75% of current mandi value at subsidized 4% effective interest while waiting for better price windows.',
        kn: 'ರೈತರು ಇ-ಉಗ್ರಾಣ ರಸೀದಿ ಆಧಾರದಲ್ಲಿ 4% ಬಡ್ಡಿ ದರದಲ್ಲಿ 75% ವರೆಗೆ ಹಣ ಪಡೆದು ಬೆಲೆ ಏರಿದಾಗ ಮಾರಾಟ ಮಾಡಬಹುದು.',
        hi: 'e-NWR रसीद के आधार पर किसान 4% रियायती ब्याज पर 75% तक नकद प्राप्त कर बेहतर भाव का इंतज़ार कर सकते हैं।',
      },
    ],
  },
  {
    id: 'news-digital-mandi',
    category: 'market',
    imageUrl: '/src/assets/images/mandihut_digital_mandi_1794591647449.jpg',
    publishedDate: 'Nov 10, 2026',
    readTimeMin: 3,
    source: { en: 'Mandi Digital Network', kn: 'ಮಂಡಿ ಡಿಜಿಟಲ್ ನೆಟ್‌ವರ್ಕ್', hi: 'मंडी डिजिटल नेटवर्क' },
    title: {
      en: 'Direct Digital Grading & Pre-Arrival Lot Booking Helps Farmers Earn 14% Higher Net Realization',
      kn: 'ಡಿಜಿಟಲ್ ಗ್ರೇಡಿಂಗ್ ಮತ್ತು ಮುಂಗಡ ಮಂಡಿ ಬುಕಿಂಗ್‌ನಿಂದ ರೈತರಿಗೆ 14% ಹೆಚ್ಚುವರಿ ನಿವ್ವಳ ಆದಾಯ',
      hi: 'डिजिटल ग्रेडिंग और प्री-अराइवल बुकिंग से किसानों को मंडी में 14% अधिक शुद्ध मुनाफ़ा',
    },
    summary: {
      en: 'Farmers checking live transport-adjusted mandi margins before loading trucks avoided congested yards and secured faster same-day UPI settlement.',
      kn: 'ಲೋಡ್ ಮಾಡುವ ಮುನ್ನವೇ ಸಾಗಣೆ ವೆಚ್ಚ ಕಳೆದ ನಿವ್ವಳ ಲಾಭವನ್ನು ಹೋಲಿಸಿದ ರೈತರು ಕಡಿಮೆ ದಟ್ಟಣೆಯ ಮಂಡಿಗಳಲ್ಲಿ ತ್ವರಿತ ಯುಪಿಐ ಪಾವತಿ ಪಡೆದಿದ್ದಾರೆ.',
      hi: 'ट्रक लोड करने से पहले भाड़ा घटाकर शुद्ध मुनाफ़े की तुलना करने वाले किसानों ने भीड़भाड़ से बचकर उसी दिन UPI भुगतान पाया।',
    },
    body: [
      {
        en: 'By comparing real-time modal prices across neighboring districts alongside distance and unloading fees, growers routinely save ₹180–₹340 per quintal.',
        kn: 'ಹತ್ತಿರದ ಜಿಲ್ಲಾ ಮಂಡಿಗಳ ದರ ಹಾಗೂ ಸಾಗಣೆ ವೆಚ್ಚವನ್ನು ಮುಂಚಿತವಾಗಿ ಹೋಲಿಸುವುದರಿಂದ ಪ್ರತಿ ಕ್ವಿಂಟಾಲ್‌ಗೆ ₹180–₹340 ಉಳಿತಾಯವಾಗುತ್ತಿದೆ.',
        hi: 'आसपास के जिलों की मंडी दरों और परिवहन खर्च की पहले तुलना करने से किसानों को प्रति क्विंटल ₹180–₹340 की सीधी बचत हो रही है।',
      },
      {
        en: 'Digital moisture meters and transparent electronic weighing bridges are also being rolled out across 300 additional rural procurement yards.',
        kn: 'ಹೆಚ್ಚುವರಿ 300 ಗ್ರಾಮೀಣ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಡಿಜಿಟಲ್ ತೇವಾಂಶ ಮಾಪಕ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ ತೂಕದ ಯಂತ್ರಗಳನ್ನು ಅಳವಡಿಸಲಾಗುತ್ತಿದೆ.',
        hi: '300 अतिरिक्त ग्रामीण मंडियों में डिजिटल नमी मीटर और पारदर्शी इलेक्ट्रॉनिक कांटे लगाए जा रहे हैं।',
      },
    ],
  },
  {
    id: 'news-monsoon-advisory',
    category: 'weather',
    publishedDate: 'Nov 09, 2026',
    readTimeMin: 2,
    source: { en: 'IMD Agri-Met Advisory', kn: 'ಐಎಂಡಿ ಕೃಷಿ ಹವಾಮಾನ ಇಲಾಖೆ', hi: 'IMD कृषि मौसम सलाह' },
    title: {
      en: 'Dry Northeast Winds Favor Safe Harvesting & Sun-Curing Across Deccan & Central Belts Next 6 Days',
      kn: 'ಮುಂದಿನ 6 ದಿನ ಒಣ ಹವಾಮಾನ: ದಕ್ಷಿಣ ಮತ್ತು ಮಧ್ಯ ಭಾರತದಲ್ಲಿ ಬೆಳೆ ಕೊಯ್ಲು ಹಾಗೂ ಒಣಗಿಸಲು ಸೂಕ್ತ ಸಮಯ',
      hi: 'अगले 6 दिन शुष्क मौसम: दक्कन और मध्य भारत में कटाई व फसल सुखाने के लिए अनुकूल समय',
    },
    summary: {
      en: 'Clear skies and 42%–50% afternoon humidity provide ideal conditions for harvesting onion, groundnut, maize, and paddy with minimal fungal risk.',
      kn: 'ಶುಭ್ರ ಆಕಾಶ ಮತ್ತು ಕಡಿಮೆ ಆರ್ದ್ರತೆಯಿಂದ ಈರುಳ್ಳಿ, ಶೇಂಗಾ, ಮೆಕ್ಕೆಜೋಳ ಮತ್ತು ಭತ್ತ ಕೊಯ್ಲು ಮಾಡಲು ಉತ್ತಮ ವಾತಾವರಣವಿದೆ.',
      hi: 'साफ आसमान और कम नमी के चलते प्याज, मूंगफली, मक्का और धान की कटाई बिना फफूंद जोखिम के की जा सकती है।',
    },
    body: [
      {
        en: 'Agrometeorologists recommend completing open-field drying of harvested bulbs and grains before isolated coastal cloudiness returns later next week.',
        kn: 'ಮುಂದಿನ ವಾರ ಮೋಡ ಕವಿದ ವಾತಾವರಣ ಬರುವ ಮುನ್ನವೇ ಕೊಯ್ಲು ಮಾಡಿದ ಬೆಳೆಗಳನ್ನು ಒಣಗಿಸಿ ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಲು ಸಲಹೆ ನೀಡಲಾಗಿದೆ.',
        hi: 'कृषि मौसम वैज्ञानिकों ने सलाह दी है कि अगले सप्ताह बादल आने से पहले कटी हुई फसल को अच्छी तरह सुखा लें।',
      },
    ],
  },
  {
    id: 'news-msp-procurement',
    category: 'policy',
    publishedDate: 'Nov 08, 2026',
    readTimeMin: 3,
    source: { en: 'Agri Finance Bulletin', kn: 'ಕೃಷಿ ಹಣಕಾಸು ವಾರ್ತೆ', hi: 'कृषि वित्त बुलेटिन' },
    title: {
      en: 'Rabi MSP Procurement Registration Opens With 48-Hour Direct Bank Transfer Guarantee',
      kn: 'ಹಿಂಗಾರು ಎಂಎಸ್‌ಪಿ ಖರೀದಿ ನೋಂದಣಿ ಆರಂಭ: 48 ಗಂಟೆಯೊಳಗೆ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ಹಣ ಜಮೆ ಭರವಸೆ',
      hi: 'रबी MSP खरीद पंजीकरण शुरू: 48 घंटे में सीधे बैंक खाते में भुगतान की गारंटी',
    },
    summary: {
      en: 'Farmers bringing FAQ-grade cereals and oilseeds to designated APMC centers can track e-payment status directly via Aadhaar-linked mobile alerts.',
      kn: 'ನಿಗದಿತ ಎಪಿಎಂಸಿ ಕೇಂದ್ರಗಳಿಗೆ ಗುಣಮಟ್ಟದ ಧಾನ್ಯ ತರುವ ರೈತರು ಆಧಾರ್ ಲಿಂಕ್ಡ್ ಮೊಬೈಲ್ ಸಂದೇಶದ ಮೂಲಕ ಪಾವತಿ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಬಹುದು.',
      hi: 'मानक गुणवत्ता का अनाज और तिलहन लाने वाले किसान आधार-लिंक्ड मोबाइल अलर्ट से भुगतान स्थिति ट्रैक कर सकेंगे।',
    },
    body: [
      {
        en: 'Ensure your bank account is Aadhaar-seeded and carry updated land RTC / sowing confirmation at registration to avoid verification delays.',
        kn: 'ವಿಳಂಬ ತಪ್ಪಿಸಲು ನೋಂದಣಿ ಸಮಯದಲ್ಲಿ ಆಧಾರ್ ಜೋಡಿತ ಬ್ಯಾಂಕ್ ಖಾತೆ ಮತ್ತು ನವೀಕೃತ ಪಹಣಿ ದಾಖಲೆಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಹೋಗಿ.',
        hi: 'पंजीकरण के समय देरी से बचने के लिए आधार-लिंक्ड बैंक खाता और अद्यतन खतौनी साथ रखें।',
      },
    ],
  },
];
