/* =====================================================================
   NOYAU — i18n engine (FR / EN / AR) with RTL support
   ===================================================================== */

const translations = {
  fr: {
    dir: 'ltr',
    meta: {
      title: 'NOYAU — Rénovation de Cuisines Premium à Casablanca',
      description: "NOYAU transforme votre ancienne cuisine en un espace moderne et élégant. Matériaux premium, finitions haut de gamme, prise de mesure à domicile et devis personnalisé à Casablanca et ses environs."
    },
    nav: { home: 'Accueil', projects: 'Réalisations', process: 'Processus', faq: 'FAQ', contact: 'Contact', cta: 'Demander un devis', ariaMenu: 'Ouvrir le menu' },
    hero: {
      eyebrow: 'Rénovation de cuisines premium — Casablanca',
      titleHtml: 'Transformez votre cuisine<br class="hidden md:block"> en un espace <em>moderne</em><br class="hidden md:block"> et <em>élégant</em>.',
      sub: 'Nous rénovons votre cuisine avec des matériaux premium, des finitions haut de gamme et une installation réalisée chez vous, à Casablanca et ses environs.',
      cta1: 'Découvrir nos réalisations',
      cta2: 'Réserver une consultation',
      stat1Label: 'Cuisines rénovées',
      stat2Label: 'Devis personnalisés',
      stat3Html: 'Matériaux<br>Premium',
      scrollCue: 'Défiler'
    },
    transformation: {
      eyebrow: 'La transformation',
      title: 'Avant / Après',
      desc: "Faites glisser le curseur pour découvrir l'ampleur d'une rénovation NOYAU — même structure, matériaux et finition entièrement repensés.",
      tagAfter: 'Après — Signature NOYAU',
      tagBefore: 'Avant — Cuisine standard',
      ariaRange: 'Comparer avant et après'
    },
    gallery: {
      eyebrow: 'Portfolio',
      title: 'Nos réalisations',
      desc: "Un aperçu de nos cuisines livrées à Casablanca — chaque projet est unique, pensé et mesuré pour l'espace de nos clients.",
      items: [
        { title: 'Cuisine Contemporaine', loc: 'Ain Diab, Casablanca' },
        { title: 'Black Luxury', loc: 'Californie, Casablanca' },
        { title: 'White Marble', loc: 'Bourgogne, Casablanca' },
        { title: 'Marble Edition', loc: 'Racine, Casablanca' },
        { title: 'Contemporain', loc: 'Gauthier, Casablanca' },
        { title: 'Black Stone', loc: 'Maârif, Casablanca' },
        { title: 'Épure Blanche', loc: 'CIL, Casablanca' },
        { title: 'Wood Finish', loc: 'Oasis, Casablanca' }
      ]
    },
    why: {
      eyebrow: 'Pourquoi NOYAU',
      title: "L'exigence du détail",
      desc: 'Chaque cuisine que nous livrons répond aux mêmes standards, quel que soit le budget ou le style choisi.',
      cards: [
        { title: 'Matériaux premium', desc: 'MDF haute densité, plaquage et quartz sélectionnés pour leur durabilité et leur rendu haut de gamme.' },
        { title: 'Finitions haut de gamme', desc: "Laque mate, bois véritable, marbre — chaque finition est appliquée avec une précision d'atelier." },
        { title: 'Design sur mesure', desc: 'Chaque cuisine est pensée pour l\'espace exact de votre logement, pas pour un plan générique.' },
        { title: 'Installation rapide', desc: 'Une équipe dédiée intervient chez vous avec un calendrier précis, du démontage à la pose finale.' },
        { title: 'Mesure à domicile', desc: 'Nous nous déplaçons pour relever chaque cote exacte, au millimètre près, avant toute fabrication.' },
        { title: 'Prix transparent', desc: 'Un devis clair, calculé sur place selon vos dimensions et le modèle choisi — aucune surprise.' }
      ]
    },
    process: {
      eyebrow: 'Comment ça marche',
      title: 'Un processus en six étapes',
      desc: "De la première prise de contact à la fin des travaux, un déroulé clair et maîtrisé.",
      steps: [
        { title: 'Réservez une consultation', desc: 'Vous nous contactez via le formulaire ou par téléphone pour planifier une visite.' },
        { title: 'Nous nous déplaçons chez vous', desc: 'Un conseiller NOYAU se rend à votre domicile, à Casablanca ou dans les environs.' },
        { title: 'Prise des mesures', desc: 'Chaque dimension de votre cuisine est relevée avec précision pour une fabrication sur mesure.' },
        { title: 'Choix du modèle', desc: 'Vous sélectionnez le style, les matériaux et les finitions qui correspondent à votre intérieur.' },
        { title: 'Devis sur place', desc: 'Le prix est calculé immédiatement selon les dimensions et le modèle retenu — sans attente.' },
        { title: 'Début de la rénovation', desc: 'Notre équipe intervient chez vous jusqu\'à la livraison finale de votre nouvelle cuisine.' }
      ]
    },
    models: {
      eyebrow: 'Collections',
      title: 'Choisissez votre style',
      desc: "Six univers, une même exigence de finition. Le modèle n'est que le point de départ — chaque cuisine est ensuite ajustée à vos dimensions.",
      badge: 'Premium',
      ariaPrev: 'Précédent',
      ariaNext: 'Suivant',
      items: [
        { title: 'Minimal', desc: 'Lignes épurées, façades sans poignée et palette neutre pour un espace apaisé.' },
        { title: 'Modern', desc: 'Volumes contrastés et matériaux mixtes pour une cuisine résolument actuelle.' },
        { title: 'Black Luxury', desc: 'Laque noire mate et touches dorées pour une signature affirmée et sophistiquée.' },
        { title: 'White Marble', desc: 'Marbre blanc veiné et plan en îlot pour une élégance intemporelle.' },
        { title: 'Wood Finish', desc: 'Placage bois naturel pour une chaleur et une texture authentiques au quotidien.' },
        { title: 'Contemporary', desc: 'Gris et blanc en équilibre, pour une cuisine lumineuse et intemporelle.' }
      ]
    },
    quality: {
      eyebrow: 'Fabrication',
      title: 'Une qualité qui se voit et se ressent',
      desc: "Sous chaque façade se cache une structure pensée pour durer — matériaux certifiés, quincaillerie premium et traitements résistants au quotidien marocain.",
      list: [
        { strong: 'MDF Premium', span: 'Panneaux haute densité, stables dans le temps et sans déformation.' },
        { strong: 'Fermeture Soft Close', span: 'Tiroirs et portes à amortisseur silencieux, sans claquement.' },
        { strong: 'Charnières premium', span: "Mécanismes certifiés pour des dizaines de milliers de cycles d'ouverture." },
        { strong: 'Résistant aux rayures', span: 'Surfaces traitées pour conserver leur éclat au fil des années.' },
        { strong: 'Résistant à l\'eau', span: "Plans et façades adaptés aux projections et à l'humidité." },
        { strong: 'Haute durabilité', span: 'Une cuisine pensée pour rester impeccable pendant des années.' }
      ]
    },
    contact: {
      eyebrow: 'Étape suivante',
      title: 'Réservez votre consultation',
      desc: 'Remplissez le formulaire ci-dessous. Un conseiller NOYAU vous contacte sous 24h pour planifier la visite de mesure à domicile.',
      labels: { nom: 'Nom complet', telephone: 'Téléphone', ville: 'Ville', adresse: 'Adresse', dimensions: 'Dimensions approximatives', budget: 'Budget envisagé', modele: 'Modèle préféré', message: 'Message' },
      placeholders: { nom: 'Votre nom', telephone: '06 00 00 00 00', ville: 'Casablanca, Bouskoura...', adresse: 'Quartier, rue...', dimensions: 'Ex : 4m x 3m', message: 'Parlez-nous de votre projet...' },
      errors: { nom: 'Merci de renseigner votre nom.', telephone: 'Merci de renseigner un numéro valide.', ville: 'Merci de renseigner votre ville.' },
      budgetOptions: ['Sélectionner une fourchette', '40 000 — 70 000 MAD', '70 000 — 120 000 MAD', '120 000 — 200 000 MAD', '200 000 MAD et plus'],
      modeleOptions: { placeholder: 'Sélectionner un modèle', indecis: 'Je ne sais pas encore' },
      submit: 'Réserver ma consultation',
      success: { title: 'Demande envoyée', desc: 'Merci. Un conseiller NOYAU vous contactera très prochainement pour planifier votre visite de mesure.' }
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: 'Vous vous posez des questions ?',
      items: [
        { q: 'Comment le prix est-il calculé ?', a: 'Le prix dépend de deux éléments : les dimensions exactes de votre cuisine, relevées lors de notre visite à domicile, et le modèle que vous choisissez. Nous vous communiquons un devis précis sur place, sans surprise ensuite.' },
        { q: 'Combien de temps dure une rénovation ?', a: 'La durée varie selon la taille du projet et le modèle choisi. Après la prise de mesure et la validation du devis, nous vous communiquons un calendrier précis avant le début des travaux.' },
        { q: 'Travaillez-vous uniquement à Casablanca ?', a: "Nous intervenons à Casablanca ainsi que dans les villes environnantes. N'hésitez pas à nous indiquer votre ville dans le formulaire, nous confirmerons la faisabilité de la visite." },
        { q: 'Quels matériaux utilisez-vous ?', a: 'Nous travaillons avec des panneaux MDF haute densité, des plaquages bois véritable, du marbre et des laques premium, ainsi que des quincailleries certifiées (charnières et fermetures soft close).' },
        { q: 'Dois-je payer un acompte avant la visite ?', a: 'Non. La consultation et la prise de mesure à domicile sont gratuites et sans engagement. Le devis vous est présenté sur place, vous restez libre de votre décision.' }
      ]
    },
    finalCta: {
      eyebrow: 'Prêt à commencer',
      titleHtml: 'Votre nouvelle cuisine<br>commence aujourd\'hui.',
      sub: 'Réservez votre consultation dès aujourd\'hui et recevez un devis personnalisé, calculé chez vous.',
      cta: 'Réserver ma consultation'
    },
    footer: {
      desc: 'Rénovation de cuisines premium, sur mesure, à Casablanca et ses environs.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      address: 'Casablanca, Maroc',
      copyright: 'Tous droits réservés.',
      tagline: 'Cuisines premium — Casablanca & environs'
    },
    whatsapp: { aria: 'Contacter sur WhatsApp' },
    sticky: { call: 'Appeler', book: 'Réserver' }
  },

  en: {
    dir: 'ltr',
    meta: {
      title: 'NOYAU — Premium Kitchen Renovation in Casablanca',
      description: 'NOYAU turns your outdated kitchen into a modern, elegant space. Premium materials, high-end finishes, in-home measurement and a personalised quote in Casablanca and surrounding areas.'
    },
    nav: { home: 'Home', projects: 'Projects', process: 'Process', faq: 'FAQ', contact: 'Contact', cta: 'Get a quote', ariaMenu: 'Open menu' },
    hero: {
      eyebrow: 'Premium kitchen renovation — Casablanca',
      titleHtml: 'Transform your kitchen<br class="hidden md:block"> into a <em>modern</em><br class="hidden md:block"> and <em>elegant</em> space.',
      sub: 'We renovate your kitchen with premium materials, high-end finishes and an installation carried out at your home, in Casablanca and surrounding areas.',
      cta1: 'See our projects',
      cta2: 'Book a consultation',
      stat1Label: 'Kitchens renovated',
      stat2Label: 'Custom quotes',
      stat3Html: 'Premium<br>Materials',
      scrollCue: 'Scroll'
    },
    transformation: {
      eyebrow: 'The transformation',
      title: 'Before / After',
      desc: 'Drag the slider to see the scale of a NOYAU renovation — same structure, completely reimagined materials and finish.',
      tagAfter: 'After — NOYAU Signature',
      tagBefore: 'Before — Standard kitchen',
      ariaRange: 'Compare before and after'
    },
    gallery: {
      eyebrow: 'Portfolio',
      title: 'Our projects',
      desc: 'A look at kitchens we\'ve delivered in Casablanca — every project is unique, designed and measured for our clients\' space.',
      items: [
        { title: 'Contemporary Kitchen', loc: 'Ain Diab, Casablanca' },
        { title: 'Black Luxury', loc: 'Californie, Casablanca' },
        { title: 'White Marble', loc: 'Bourgogne, Casablanca' },
        { title: 'Marble Edition', loc: 'Racine, Casablanca' },
        { title: 'Contemporary', loc: 'Gauthier, Casablanca' },
        { title: 'Black Stone', loc: 'Maârif, Casablanca' },
        { title: 'White Elegance', loc: 'CIL, Casablanca' },
        { title: 'Wood Finish', loc: 'Oasis, Casablanca' }
      ]
    },
    why: {
      eyebrow: 'Why NOYAU',
      title: 'A demand for detail',
      desc: 'Every kitchen we deliver meets the same standards, whatever the budget or style chosen.',
      cards: [
        { title: 'Premium materials', desc: 'High-density MDF, veneer and quartz chosen for durability and a high-end finish.' },
        { title: 'High-end finishes', desc: 'Matte lacquer, real wood, marble — every finish is applied with workshop precision.' },
        { title: 'Made-to-measure design', desc: 'Every kitchen is designed for the exact space of your home, not a generic layout.' },
        { title: 'Fast installation', desc: 'A dedicated team works at your home on a precise schedule, from removal to final fitting.' },
        { title: 'In-home measurement', desc: 'We come to you to take every exact measurement, to the millimetre, before any manufacturing.' },
        { title: 'Transparent pricing', desc: 'A clear quote, calculated on site based on your dimensions and chosen model — no surprises.' }
      ]
    },
    process: {
      eyebrow: 'How it works',
      title: 'A six-step process',
      desc: 'From first contact to project completion, a clear and controlled sequence.',
      steps: [
        { title: 'Book a consultation', desc: 'You contact us via the form or by phone to schedule a visit.' },
        { title: 'We come to you', desc: 'A NOYAU advisor visits your home, in Casablanca or the surrounding area.' },
        { title: 'Measurement', desc: 'Every dimension of your kitchen is precisely recorded for a made-to-measure build.' },
        { title: 'Choose your model', desc: 'You select the style, materials and finishes that match your interior.' },
        { title: 'On-site quote', desc: 'The price is calculated immediately based on the dimensions and model chosen — no waiting.' },
        { title: 'Renovation begins', desc: 'Our team works at your home through to the final delivery of your new kitchen.' }
      ]
    },
    models: {
      eyebrow: 'Collections',
      title: 'Choose your style',
      desc: 'Six styles, one same standard of finish. The model is just the starting point — every kitchen is then adjusted to your dimensions.',
      badge: 'Premium',
      ariaPrev: 'Previous',
      ariaNext: 'Next',
      items: [
        { title: 'Minimal', desc: 'Clean lines, handle-less fronts and a neutral palette for a calm space.' },
        { title: 'Modern', desc: 'Contrasting volumes and mixed materials for a resolutely current kitchen.' },
        { title: 'Black Luxury', desc: 'Matte black lacquer with gold accents for a bold, sophisticated signature.' },
        { title: 'White Marble', desc: 'Veined white marble and an island worktop for timeless elegance.' },
        { title: 'Wood Finish', desc: 'Natural wood veneer for genuine everyday warmth and texture.' },
        { title: 'Contemporary', desc: 'Grey and white in balance, for a bright, timeless kitchen.' }
      ]
    },
    quality: {
      eyebrow: 'Craftsmanship',
      title: 'Quality you can see and feel',
      desc: 'Behind every front hides a structure built to last — certified materials, premium hardware and treatments built for Moroccan everyday life.',
      list: [
        { strong: 'Premium MDF', span: 'High-density panels, stable over time and warp-resistant.' },
        { strong: 'Soft-close mechanism', span: 'Drawers and doors with a silent damper, no slamming.' },
        { strong: 'Premium hinges', span: 'Certified mechanisms rated for tens of thousands of opening cycles.' },
        { strong: 'Scratch resistant', span: 'Surfaces treated to keep their shine for years.' },
        { strong: 'Water resistant', span: 'Worktops and fronts built for splashes and humidity.' },
        { strong: 'High durability', span: 'A kitchen designed to stay flawless for years.' }
      ]
    },
    contact: {
      eyebrow: 'Next step',
      title: 'Book your consultation',
      desc: 'Fill in the form below. A NOYAU advisor will contact you within 24h to schedule your in-home measurement visit.',
      labels: { nom: 'Full name', telephone: 'Phone', ville: 'City', adresse: 'Address', dimensions: 'Approximate dimensions', budget: 'Estimated budget', modele: 'Preferred model', message: 'Message' },
      placeholders: { nom: 'Your name', telephone: '06 00 00 00 00', ville: 'Casablanca, Bouskoura...', adresse: 'District, street...', dimensions: 'E.g.: 4m x 3m', message: 'Tell us about your project...' },
      errors: { nom: 'Please enter your name.', telephone: 'Please enter a valid phone number.', ville: 'Please enter your city.' },
      budgetOptions: ['Select a range', '40,000 — 70,000 MAD', '70,000 — 120,000 MAD', '120,000 — 200,000 MAD', '200,000 MAD and above'],
      modeleOptions: { placeholder: 'Select a model', indecis: "I don't know yet" },
      submit: 'Book my consultation',
      success: { title: 'Request sent', desc: 'Thank you. A NOYAU advisor will contact you shortly to schedule your measurement visit.' }
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Have questions?',
      items: [
        { q: 'How is the price calculated?', a: 'The price depends on two things: the exact dimensions of your kitchen, taken during our home visit, and the model you choose. We give you a precise quote on site, with no surprises afterwards.' },
        { q: 'How long does a renovation take?', a: 'Duration varies with the size of the project and the model chosen. After measurement and quote approval, we give you a precise schedule before work begins.' },
        { q: 'Do you only work in Casablanca?', a: 'We work in Casablanca as well as surrounding towns. Feel free to tell us your city on the form and we\'ll confirm whether a visit is feasible.' },
        { q: 'What materials do you use?', a: 'We work with high-density MDF panels, real wood veneers, marble and premium lacquers, along with certified hardware (hinges and soft-close mechanisms).' },
        { q: 'Do I need to pay a deposit before the visit?', a: 'No. The consultation and in-home measurement are free and non-binding. The quote is presented to you on site, and you remain free to decide.' }
      ]
    },
    finalCta: {
      eyebrow: 'Ready to start',
      titleHtml: 'Your new kitchen<br>starts today.',
      sub: 'Book your consultation today and get a personalised quote, calculated at your home.',
      cta: 'Book my consultation'
    },
    footer: {
      desc: 'Premium, made-to-measure kitchen renovation in Casablanca and surrounding areas.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      address: 'Casablanca, Morocco',
      copyright: 'All rights reserved.',
      tagline: 'Premium kitchens — Casablanca & surrounding areas'
    },
    whatsapp: { aria: 'Contact us on WhatsApp' },
    sticky: { call: 'Call', book: 'Book' }
  },

  ar: {
    dir: 'rtl',
    meta: {
      title: 'NOYAU — تجديد مطابخ راقية في الدار البيضاء',
      description: 'تحول NOYAU مطبخك القديم إلى فضاء عصري وأنيق. مواد فاخرة، تشطيبات راقية، أخذ القياسات في المنزل وعرض ثمن مخصص في الدار البيضاء وضواحيها.'
    },
    nav: { home: 'الرئيسية', projects: 'إنجازاتنا', process: 'المراحل', faq: 'الأسئلة الشائعة', contact: 'تواصل معنا', cta: 'اطلب عرض ثمن', ariaMenu: 'فتح القائمة' },
    hero: {
      eyebrow: 'تجديد مطابخ راقية — الدار البيضاء',
      titleHtml: 'حوّل مطبخك<br class="hidden md:block"> إلى فضاء <em>عصري</em><br class="hidden md:block"> و<em>أنيق</em>.',
      sub: 'نجدد مطبخك بمواد فاخرة وتشطيبات راقية، مع تركيب يتم في منزلك، بالدار البيضاء وضواحيها.',
      cta1: 'اكتشف إنجازاتنا',
      cta2: 'احجز استشارة',
      stat1Label: 'مطبخ تم تجديده',
      stat2Label: 'عروض أثمان مخصصة',
      stat3Html: 'مواد<br>فاخرة',
      scrollCue: 'مرر'
    },
    transformation: {
      eyebrow: 'التحول',
      title: 'قبل / بعد',
      desc: 'اسحب المؤشر لاكتشاف حجم تجديد NOYAU — نفس الهيكل، لكن مواد وتشطيب أُعيد التفكير فيهما بالكامل.',
      tagAfter: 'بعد — توقيع NOYAU',
      tagBefore: 'قبل — مطبخ عادي',
      ariaRange: 'قارن بين قبل وبعد'
    },
    gallery: {
      eyebrow: 'أعمالنا',
      title: 'إنجازاتنا',
      desc: 'لمحة عن المطابخ التي أنجزناها بالدار البيضاء — كل مشروع فريد، مُصمم ومقاس خصيصًا لفضاء عملائنا.',
      items: [
        { title: 'مطبخ عصري', loc: 'عين الذئاب، الدار البيضاء' },
        { title: 'بلاك لوكشوري', loc: 'كاليفورنيا، الدار البيضاء' },
        { title: 'رخام أبيض', loc: 'بورغونيا، الدار البيضاء' },
        { title: 'نسخة الرخام', loc: 'راسين، الدار البيضاء' },
        { title: 'عصري', loc: 'غوتييه، الدار البيضاء' },
        { title: 'حجر أسود', loc: 'المعاريف، الدار البيضاء' },
        { title: 'أناقة بيضاء', loc: 'سيل، الدار البيضاء' },
        { title: 'تشطيب خشبي', loc: 'الواحة، الدار البيضاء' }
      ]
    },
    why: {
      eyebrow: 'لماذا NOYAU',
      title: 'الدقة في كل تفصيل',
      desc: 'كل مطبخ نُنجزه يستجيب لنفس المعايير، مهما كانت الميزانية أو النمط المختار.',
      cards: [
        { title: 'مواد فاخرة', desc: 'ألواح MDF عالية الكثافة وقشرة خشبية وكوارتز مختارة لمتانتها ومظهرها الراقي.' },
        { title: 'تشطيبات راقية', desc: 'دهان مطفي، خشب طبيعي، رخام — كل تشطيب يُنجز بدقة ورشة متخصصة.' },
        { title: 'تصميم على المقاس', desc: 'كل مطبخ مُصمم خصيصًا لفضاء منزلك بالضبط، وليس لمخطط عام.' },
        { title: 'تركيب سريع', desc: 'فريق مختص يتدخل في منزلك وفق جدول زمني دقيق، من الفك إلى التركيب النهائي.' },
        { title: 'قياس في المنزل', desc: 'نتنقل إليك لأخذ كل قياس بدقة الميليمتر، قبل أي عملية تصنيع.' },
        { title: 'ثمن شفاف', desc: 'عرض ثمن واضح، يُحسب في عين المكان حسب أبعادكم والموديل المختار — بدون مفاجآت.' }
      ]
    },
    process: {
      eyebrow: 'كيف تسير العملية',
      title: 'مسار من ست مراحل',
      desc: 'من أول تواصل إلى نهاية الأشغال، مسار واضح ومضبوط.',
      steps: [
        { title: 'احجز استشارة', desc: 'تتواصل معنا عبر الاستمارة أو الهاتف لتحديد موعد زيارة.' },
        { title: 'نتنقل إلى منزلك', desc: 'يتنقل مستشار NOYAU إلى منزلك، بالدار البيضاء أو ضواحيها.' },
        { title: 'أخذ القياسات', desc: 'يتم رصد كل بُعد في مطبخك بدقة من أجل تصنيع على المقاس.' },
        { title: 'اختيار الموديل', desc: 'تختار النمط والمواد والتشطيبات التي تناسب ديكور منزلك.' },
        { title: 'عرض الثمن في عين المكان', desc: 'يُحسب الثمن فورًا حسب الأبعاد والموديل المختار — دون انتظار.' },
        { title: 'بداية التجديد', desc: 'يتدخل فريقنا في منزلك إلى غاية تسليم مطبخك الجديد نهائيًا.' }
      ]
    },
    models: {
      eyebrow: 'المجموعات',
      title: 'اختر نمطك',
      desc: 'ست عوالم، ونفس مستوى الدقة في التشطيب. الموديل ليس سوى نقطة الانطلاق — كل مطبخ يُعدّل بعد ذلك حسب أبعادك.',
      badge: 'فاخر',
      ariaPrev: 'السابق',
      ariaNext: 'التالي',
      items: [
        { title: 'مينيمال', desc: 'خطوط نقية، واجهات بدون مقابض وألوان محايدة لفضاء هادئ.' },
        { title: 'مودرن', desc: 'أحجام متباينة ومواد مختلطة لمطبخ عصري بامتياز.' },
        { title: 'بلاك لوكشوري', desc: 'دهان أسود مطفي ولمسات ذهبية لتوقيع جريء وأنيق.' },
        { title: 'رخام أبيض', desc: 'رخام أبيض معرّق وسطح جزيرة مركزي لأناقة خالدة.' },
        { title: 'تشطيب خشبي', desc: 'قشرة خشب طبيعي لدفء وملمس أصيلين في الاستعمال اليومي.' },
        { title: 'كونتمبوراري', desc: 'توازن بين الرمادي والأبيض، لمطبخ مضيء وخالد.' }
      ]
    },
    quality: {
      eyebrow: 'التصنيع',
      title: 'جودة تُرى وتُحسّ',
      desc: 'خلف كل واجهة يختبئ هيكل مصمم ليدوم — مواد معتمدة، إكسسوارات فاخرة ومعالجات مقاومة للاستعمال اليومي المغربي.',
      list: [
        { strong: 'MDF فاخر', span: 'ألواح عالية الكثافة، ثابتة مع مرور الزمن وبدون تشوه.' },
        { strong: 'إغلاق ناعم', span: 'أدراج وأبواب بمخمد صامت، بدون صوت اصطدام.' },
        { strong: 'مفصلات فاخرة', span: 'آليات معتمدة لعشرات الآلاف من دورات الفتح.' },
        { strong: 'مقاوم للخدش', span: 'أسطح مُعالجة للحفاظ على لمعانها عبر السنين.' },
        { strong: 'مقاوم للماء', span: 'أسطح وواجهات مهيأة للرذاذ والرطوبة.' },
        { strong: 'متانة عالية', span: 'مطبخ مصمم ليبقى في أفضل حال لسنوات.' }
      ]
    },
    contact: {
      eyebrow: 'الخطوة التالية',
      title: 'احجز استشارتك',
      desc: 'املأ الاستمارة أدناه. سيتواصل معك أحد مستشاري NOYAU خلال 24 ساعة لتحديد موعد زيارة القياس في المنزل.',
      labels: { nom: 'الاسم الكامل', telephone: 'الهاتف', ville: 'المدينة', adresse: 'العنوان', dimensions: 'الأبعاد التقريبية', budget: 'الميزانية المتوقعة', modele: 'الموديل المفضل', message: 'رسالة' },
      placeholders: { nom: 'اسمك', telephone: '06 00 00 00 00', ville: 'الدار البيضاء، بوسكورة...', adresse: 'الحي، الشارع...', dimensions: 'مثال: 4م × 3م', message: 'حدثنا عن مشروعك...' },
      errors: { nom: 'يرجى إدخال اسمك.', telephone: 'يرجى إدخال رقم هاتف صحيح.', ville: 'يرجى إدخال مدينتك.' },
      budgetOptions: ['اختر فئة الميزانية', '40.000 — 70.000 درهم', '70.000 — 120.000 درهم', '120.000 — 200.000 درهم', '200.000 درهم فما فوق'],
      modeleOptions: { placeholder: 'اختر موديلاً', indecis: 'لم أقرر بعد' },
      submit: 'احجز استشارتي',
      success: { title: 'تم إرسال الطلب', desc: 'شكرًا لك. سيتواصل معك أحد مستشاري NOYAU قريبًا جدًا لتحديد موعد زيارة القياس.' }
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'لديك أسئلة؟',
      items: [
        { q: 'كيف يتم احتساب الثمن؟', a: 'يعتمد الثمن على عنصرين: الأبعاد الدقيقة لمطبخك المأخوذة خلال زيارتنا المنزلية، والموديل الذي تختاره. نقدم لك عرض ثمن دقيق في عين المكان، دون أي مفاجآت لاحقًا.' },
        { q: 'كم يستغرق التجديد من الوقت؟', a: 'تختلف المدة حسب حجم المشروع والموديل المختار. بعد أخذ القياسات والمصادقة على عرض الثمن، نقدم لك جدولاً زمنيًا دقيقًا قبل بداية الأشغال.' },
        { q: 'هل تعملون فقط بالدار البيضاء؟', a: 'نتدخل بالدار البيضاء وكذلك بالمدن المجاورة لها. لا تتردد في ذكر مدينتك في الاستمارة، وسنؤكد لك إمكانية الزيارة.' },
        { q: 'ما هي المواد التي تستعملونها؟', a: 'نعمل بألواح MDF عالية الكثافة، وقشرة خشب طبيعي، ورخام، ودهانات فاخرة، إضافة إلى إكسسوارات معتمدة (مفصلات وأنظمة إغلاق ناعم).' },
        { q: 'هل يجب أن أدفع تسبيقًا قبل الزيارة؟', a: 'لا. الاستشارة وأخذ القياس في المنزل مجانيان وبدون التزام. يُعرض عليك الثمن في عين المكان، وتبقى حرًا في قرارك.' }
      ]
    },
    finalCta: {
      eyebrow: 'مستعد للانطلاق',
      titleHtml: 'مطبخك الجديد<br>يبدأ اليوم.',
      sub: 'احجز استشارتك اليوم واحصل على عرض ثمن مخصص، يُحسب في منزلك.',
      cta: 'احجز استشارتي'
    },
    footer: {
      desc: 'تجديد مطابخ فاخرة، على المقاس، بالدار البيضاء وضواحيها.',
      navTitle: 'روابط',
      contactTitle: 'تواصل معنا',
      address: 'الدار البيضاء، المغرب',
      copyright: 'جميع الحقوق محفوظة.',
      tagline: 'مطابخ فاخرة — الدار البيضاء وضواحيها'
    },
    whatsapp: { aria: 'تواصل معنا عبر واتساب' },
    sticky: { call: 'اتصل', book: 'احجز' }
  }
};

/* ---------- Engine ---------- */
function tGet(lang, path) {
  const parts = path.split('.');
  let node = translations[lang];
  for (const p of parts) {
    if (node == null) return null;
    node = node[p];
  }
  return node;
}

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'fr';
  const dict = translations[lang];
  const dir = dict.dir;

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dir);
  document.body.classList.toggle('lang-ar', lang === 'ar');

  // Plain text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = tGet(lang, el.getAttribute('data-i18n'));
    if (val != null) el.textContent = val;
  });

  // HTML content (contains <em>/<br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = tGet(lang, el.getAttribute('data-i18n-html'));
    if (val != null) el.innerHTML = val;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = tGet(lang, el.getAttribute('data-i18n-placeholder'));
    if (val != null) el.setAttribute('placeholder', val);
  });

  // aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = tGet(lang, el.getAttribute('data-i18n-aria'));
    if (val != null) el.setAttribute('aria-label', val);
  });

  // List-based sections (repeated items)
  const listMap = {
    '.masonry-item': ['gallery.items', ['title', 'loc']],
    '.feature-card': ['why.cards', ['title', 'desc']],
    '.timeline-step': ['process.steps', ['title', 'desc']],
    '.model-card': ['models.items', ['title', 'desc']],
    '.quality-list li': ['quality.list', ['strong', 'span']],
    '.faq-item': ['faq.items', ['q', 'a']]
  };
  Object.entries(listMap).forEach(([selector, [path, fields]]) => {
    const items = tGet(lang, path);
    if (!items) return;
    document.querySelectorAll(selector).forEach((el, i) => {
      if (!items[i]) return;
      const targets = el.querySelectorAll('[data-i18n-field]');
      targets.forEach(t => {
        const field = t.getAttribute('data-i18n-field');
        if (items[i][field] != null) t.textContent = items[i][field];
      });
    });
  });

  // Select options with data-i18n-option="path|index"
  document.querySelectorAll('option[data-i18n-option]').forEach(opt => {
    const val = tGet(lang, opt.getAttribute('data-i18n-option'));
    if (val != null) opt.textContent = val;
  });

  // Meta tags
  document.title = dict.meta.title;
  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };
  setMeta('meta[name="description"]', dict.meta.description);
  setMeta('meta[property="og:title"]', dict.meta.title);
  setMeta('meta[property="og:description"]', dict.meta.description);
  setMeta('meta[name="twitter:title"]', dict.meta.title);
  setMeta('meta[name="twitter:description"]', dict.meta.description);

  // Switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('noyau_lang', lang);

  if (window.AOS) AOS.refreshHard();
  document.dispatchEvent(new CustomEvent('languagechanged', { detail: { lang, dir } }));
}

function initI18n() {
  const saved = localStorage.getItem('noyau_lang');
  const browser = (navigator.language || 'fr').slice(0, 2);
  const initial = saved || (translations[browser] ? browser : 'fr');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  applyLanguage(initial);
}

window.initI18n = initI18n;
