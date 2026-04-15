// Source de vérité — tous les projets du portfolio
// Pour ajouter un projet :
//   1. Créer le dossier Images/slug-du-projet/
//   2. Y déposer les images
//   3. Ajouter un objet ci-dessous (copier/coller le dernier en exemple)

const PROJECTS = [
   
{
  slug: 'staffrun-product-design',
  title: 'STAFFRUN',
  year: '2025',
  tags: ['UX/UI', 'B2B SaaS', 'Design System', 'Produktdesign'],
  category: 'UI/UX',
  description: 'STAFFRUN ist eine B2B-SaaS-Plattform für Veranstaltungsorganisatoren mit variablem Personal. Planung, Zeiterfassung und Kundenfreigabe liefen bisher über verstreute Tools und führten zu Fehlern, Mehraufwand und fehlender Transparenz. STAFFRUN zentralisiert diese Prozesse in einer einzigen Lösung: Disponenten planen Einsätze strukturiert, Mitarbeitende erfassen Zeiten direkt und Kunden geben Stundenzettel digital frei.',
  role: 'Gründer & Product Designer',
  type: 'Projekt in Kollaboration mit Melodia Eventservice UG',
  stack: 'Figma · Claude Code · Supabase · Stripe · Netlify · Resend',
  extra: { key: 'Markt', val: 'B2B · Event-Staffing' },
  folder: 'Images/staffrun',
  cover: 'SR_cover.jpg',
  images: [
    'SR_1.jpg',
    'SR-1a.jpg',
    'SR-2.jpg',
    'SR-3.jpg',
    'SR-4.jpg',
    'SR-5.jpg',
    'SR-6.jpg',
    'SR-7.jpg',
    'SR-8.jpg',
    'SR-9.jpg',
    'SR-10.jpg',
    'SR-11.jpg',
  
  ]
},

{
  slug: 'sereno-brand-campaign',
  title: 'SERENO',
  year: '2026',
  tags: ['Branding', 'Campaign', 'AI', 'Luxury', 'Fashion'],
  category: 'AI',
  description: 'SERENO ist ein konzeptuelles Modeprojekt rund um eine Lederjacke für Männer. Das Projekt erkundet den Einsatz von KI-generierten Models und Shootings als vollständigen Ersatz für klassische Fotoproduktionen. Sämtliche Kampagnenbilder, Social Media Assets und Werbeanzeigen wurden ohne physisches Shooting erstellt. Die visuelle Sprache orientiert sich an zeitgenössischer Luxusmode: ruhige Interieurs, klare Typografie, reduzierte Farbpalette. Ein Experiment an der Schnittstelle von Brand Design und generativer KI.',
  role: 'Art Director & Brand Designer',
  type: 'Konzeptprojekt · AI Experimentation',
  stack: 'Figma · Nano Banana',
  extra: { key: 'Bereich', val: 'Mode · Luxury · AI' },
  folder: 'Images/sereno',
  cover: 'sereno_cover.jpg',
  images: [
    'sereno-4.png',
    'hf_20260323_134252_e81bdcbb-8ae2-4327-8d47-a99d4426182b.png',
    'hf_20260323_140010_852d6bdc-c398-463c-9c6f-21b4b3409578.jpeg',
    'hf_20260323_142401_465dfbee-524e-49ee-bbaf-061cc12783c8.png',
    'hf_20260323_142811_0f30a73d-a42b-4ba5-83a0-43100c8148fc.jpeg',
    'sereno-3.png',
    'sereno-ads.jpg',
  ]
},

{
  slug: 'paulas-garden-webdesign',
  title: "Paula's Garden",
  year: '2024',
  tags: ['Web Design', 'Branding', 'Identity', 'E-Commerce'],
  category: 'UI/UX',
  description: "Paula's Garden ist ein Abschlussprojekt als Mediengestalter Digital und Print. Konzipiert wurde eine interaktive Web-App für den Einsatz auf Tablets an mehreren Infopoints direkt im Markt. Ziel war eine digitale Weiterentwicklung der bestehenden Marke, die eine jüngere, digital affine Zielgruppe emotional anspricht. Klare Typografie, großzügige Layouts und natürliche Blumenmotive schaffen visuelle Ordnung und transportieren Nähe und Lebendigkeit. Das Farbsystem wurde behutsam weiterentwickelt: Der Hauptton wurde zu einem dunkleren Grün vertieft, Mint-Grün bleibt als Akzentfarbe erhalten und warme Naturtöne ergänzen das Gesamtbild.",
  role: 'Web Designer · Brand Designer',
  type: 'Abschlussprojekt · Ausbildung Mediengestalter Digital und Print',
  stack: 'Figma · Adobe CC · Html/CSS · javascript',
  extra: { key: 'Bereich', val: 'Retail · Garten · Web' },
  folder: 'Images/paulasgarden',
  cover: 'paulas-cover.jpg',
  images: [
    
    'paulasgarden-1.jpg',
    'paulasgarden-2.jpg',
    'paulasgarden-2a.jpg',
    'paulasgarden-3.jpg',
    'paulasgarden-3a.jpg',
    'paulasgarden-4.jpg',
    'paulasgarden-5.jpg',
    'paulasgarden-6.jpg',
    'paulasgarden-7.jpg',
    'paulasgarden-8.jpg',
  ]
},

{
  slug: 'bykis-brand-identity',
  title: 'BYKIS',
  year: '2024',
  tags: ['Branding', 'Streetwear', 'Identity', 'E-Commerce'],
  category: 'Identity',
  description: 'BYKIS ist eine Streetwear-Marke mit dem Claim "Wear The Culture." Das Projekt umfasst die vollständige Markenidentität: Logo, Typografiesystem, Hangtags, Gutscheinkarten sowie Social Media Assets. Die visuelle Sprache bewegt sich zwischen urban und geerdet. Schwarz, Khaki und Sandtöne bilden die Farbpalette. Der Onlineshop unter bykis.shop wurde ebenfalls gestaltet und beinhaltet KI-generierte Produktfotos. Made in Germany positioniert die Marke mit lokalem Anspruch innerhalb eines internationalen Streetwear-Markts.',
  role: 'Brand Designer',
  type: 'Markenidentität · E-Commerce',
  stack: 'Figma · Adobe CC · WordPress · Stripe · Mailchimp',
  extra: { key: 'Bereich', val: 'Streetwear · Fashion' },
  cover: 'bykis-cover.jpg',
  folder: 'Images/bykis',
  images: [
    'bykis-1.jpg',
    'bykis-2.jpg',
    'bykis-3.jpg',
    'bykis-4.jpg',
    'bykis-5.jpg',
    'bykis-6.jpg',
    'bykis-7.jpg',
    'bykis-8.jpg',
    'bykis-10.jpg',
    'bykis-11.jpg',
  ]
},

{
  slug: 'neusta-marketing-social-media',
  title: 'neusta marketing · Social Media',
  year: '2024',
  tags: ['Social Media', 'Campaign', 'Branding', 'Content'],
  category: 'Social Media',
  description: 'Social Media Konzept und Content-Produktion für neusta marketing, eine Marketingagentur aus Bremen. Das Projekt umfasst ein konsistentes visuelles System für Instagram mit wiederkehrenden Post-Formaten: Mitarbeitervorstellungen mit Farbverlauf-Hintergrund und großer Namenstypografie, Statistik-Posts für Marketing-Facts, Trend-Beiträge sowie Event-Kommunikation. Das Farbsystem aus Türkis, Lila und Rot-Verlauf prägt den Gesamtauftritt und sorgt für hohe Wiedererkennung im Feed.',
  role: 'Social Media Designer',
  type: 'Kundenprojekt · Social Media',
  stack: 'Figma',
  extra: { key: 'Bereich', val: 'Marketing · Agentur' },
  folder: 'Images/neusta-some',
  cover: 'nma-cover.jpg',
  images: [
    'NMA-Relaunch-1.jpg',
    'NMA-Relaunch-2.jpg',
    'NMA-Relaunch-3.jpg',
    'NMA-Relaunch-4.jpg',
    'NMA-Relaunch-5.jpg',
    'NMA-Relaunch-6.jpg',
    'NMA-Relaunch-7.jpg',
    'NMA-Relaunch-8.jpg',
    'NMA-Relaunch-9.jpg',
    'NMA-Relaunch-10.jpg',
    'NMA-Relaunch-11.jpg',
    'NMA-Relaunch-12.jpg',
    'NMA-Relaunch-13.jpg',
    'NMA-Relaunch-14.jpg',
    'NMA-Relaunch-15.jpg',
  ]
},

{
  slug: 'myenso-corporate-design',
  title: 'myEnso',
  year: '2023',
  tags: ['Branding', 'Corporate Design', 'Identity', 'Redesign'],
  category: 'Identity',
  description: 'Corporate Design Redesign für myEnso, einen deutschen Online-Supermarkt. Das Projekt entstand im Rahmen der Ausbildung und umfasst die vollständige Markenidentität: Logo-Entwicklung nach dem Goldenen Schnitt, Farbsystem mit Blau und Orange als Primärfarben, Typografiesystem auf Basis von Plus Jakarta Sans sowie Anwendungsbeispiele auf Verpackungen, App-Icon und Sub-Brands wie Tanteenso und Foodpioniere. Die Leitwerte Wahrhaftigkeit, Achtsamkeit, Partizipation und Empowerment prägen die visuelle Tonalität.',
  role: 'Brand Designer',
  type: 'Ausbildungsprojekt · Corporate Design',
  stack: 'Figma · Adobe CC',
  extra: { key: 'Bereich', val: 'E-Commerce · Food' },
  folder: 'Images/myenso',
  cover: 'myenso-cover.jpg',
  images: [
    'myenso-1.jpg',
    'myenso-2.jpg',
    'myenso-3.jpg',
    'myenso-4.jpg',
    'myenso-5.jpg',
    'myenso-6.jpg',
    'myenso-7.jpg',
    'myenso-8.jpg',
    'myenso-9.jpg',
    'myenso-10.jpg',
    'myenso-11.jpg',
    'myenso-12.jpg',
    'myenso-13.jpg',
    'myenso-14.jpg',
    'myenso-15.jpg',
  ]
},

{
  slug: 'viteo-brand-identity',
  title: 'Viteo.',
  year: '2026',
  tags: ['Branding', 'Identity', 'Health', 'App'],
  category: 'Identity',
  description: 'Viteo ist ein modernes Markenkonzept rund um das Thema Vitaminmangel. Die App richtet sich an Menschen mit aktivem Alltag, die ihren Gesundheitszustand besser verstehen möchten. Das visuelle System basiert auf abgerundeten Rechtecken als zentralem Gestaltungselement, ergänzt durch einen sanften Farbverlauf zwischen Wärme und Seriosität. Die Leitidee "Orientierung durch Klarheit" zieht sich durch alle Touchpoints: von Social Media Teaser über POS-Material bis hin zur Conference Stage. Das Ergebnis ist eine Markensprache, die Vertrauen aufbaut und medizinische Inhalte ruhig und nachvollziehbar vermittelt.',
  role: 'Brand Designer',
  type: 'Markenidentität · Konzept',
  stack: 'Figma · Adobe CC · Nano Banana',
  extra: { key: 'Bereich', val: 'Health · Digital' },
  folder: 'Images/viteo',
  cover: 'viteo-cover.jpg',
  images: [
    'viteo-1.jpg',
    'viteo-2.jpg',
    'viteo-3.jpg',
    'viteo-4.jpg',
    'viteo-5.jpg',
    'viteo-6.jpg',
  ]
},





{
  slug: 'mak-betreuungen-brand-identity',
  title: 'MAK Betreuungen',
  year: '2024',
  tags: ['Branding', 'Identity', 'Social', 'Print'],
  category: 'Identity',
  description: 'MAK Betreuungen ist eine soziale Einrichtung im Bereich Kinder- und Jugendhilfe. Das Projekt umfasst die vollständige Markenidentität: Logo mit dem ikonischen Handsymbol, Visitenkarten, Tote Bags, Social Media Assets sowie Briefmarken-Mockups. Die Farbpalette aus Grün, Blau und Gelb vermittelt Nähe, Vertrauen und Energie. Die visuelle Sprache ist zugänglich und warm, ohne auf Professionalität zu verzichten.',
  role: 'Brand Designer',
  type: 'Kundenprojekt · Markenidentität',
  stack: 'Figma · Adobe CC',
  extra: { key: 'Bereich', val: 'Soziales · NGO' },
  folder: 'Images/mak',
  cover: 'mak-cover.jpg',
  images: [
    'makbetreuung-1.jpg',
    'makbetreuung-2.jpg',
    'makbetreuung-3.jpg',
    'makbetreuung-4.jpg',
    'makbetreuung-5.jpg',
    'makbetreuung-6.jpg',
    'makbetreuung-6a.jpg',
    'makbetreuung-7.jpg',
  ]
},





{
  slug: 'liebs-reinigungsservice-branding',
  title: 'Liebs Reinigungsservice',
  year: '2025',
  tags: ['Branding', 'Identity', 'Web Design', 'Print'],
  category: 'Identity',
  description: 'Liebs Reinigungsservice ist ein vollständiges Branding-Projekt für einen Reinigungsdienstleister im Premium-Segment. Ziel war eine Positionierung als verlässlicher, qualitätsorientierter Anbieter, der Vertrauen und Seriosität ausstrahlt ohne an Wärme zu verlieren. Das visuelle System basiert auf Nachtblau und Goldakzenten, ergänzt durch ein charakteristisches Bogenmotiv als Grafikelement. Das Projekt umfasst Logo, Visitenkarten, Geschäftsmappe, Leistungsübersicht, Arbeitskleidung, Merchandising sowie eine responsive Website unter liebs-reinigung.de.',
  role: 'Brand Designer · Web Designer',
  type: 'Kundenprojekt · Markenidentität',
  stack: 'Figma · Adobe CC · WordPress',
  extra: { key: 'Bereich', val: 'B2B · B2C · Service' },
  folder: 'Images/liebs',
  cover: 'liebs-cover.jpg',
  images: [
    'liebs-1.png',
    'liebs-2.png',
    'liebs-3.png',
    'liebs-4.png',
    'liebs-5.png',
    'liebs-6.png',
    'liebs-7.png',
    'liebs-8.png',
    'liebs-9.png',
    'liebs-10.png',
    'liebs-11.png',
  ]
},

{
  slug: 'mojn-awareness-kampagne',
  title: 'MOJN Awareness Kampagne',
  year: '2024',
  tags: ['Campaign', 'Print', 'Branding', 'IT Security'],
  category: 'Production',
  description: 'Eine interne Awareness-Kampagne zur IT-Sicherheit für MOJN, konzipiert für den Einsatz im Unternehmensalltag. Das Ziel: Mitarbeitende auf humorvolle und einprägsame Weise daran erinnern, ihren Bildschirm zu sperren. Die Kampagne umfasst Sticker, Mousepads, Kaffeebecher und Tassen, alle im gleichen visuellen System aus Marineblau, Rot und Tierfotos als Eyecatcher. Der Shortcut Win+L wird als zentrales visuelles Element eingesetzt. Schnelle Lesbarkeit, hohe Wiedererkennung und ein freundlicher Ton sorgen dafür, dass das Thema im Büroalltag sichtbar bleibt.',
  role: 'Designer · Art Director',
  type: 'Kundenprojekt · Interne Kampagne',
  stack: 'Figma · Adobe CC',
  extra: { key: 'Bereich', val: 'Corporate · IT Security' },
  folder: 'Images/mojn',
  cover: 'mojn-cover.jpg',
  images: [
  
    'mojn-1.png',
    'mojn-2.jpg',
  ]
},

{
  slug: 'nullify-app-design',
  title: 'nullify',
  year: '2023',
  tags: ['UI/UX', 'App Design', 'Sustainability', 'Mobile'],
  category: 'UI/UX',
  description: 'nullify ist eine App zur Berechnung und Kompensation des persönlichen CO2-Fußabdrucks. Im Rahmen eines Praktikums wurden verschiedene UI-Assets gestaltet: App Store Vorschaubilder, der Hero-Bereich der Landing Page sowie Screens zur Projektauswahl und Reduktionsempfehlungen innerhalb der App. Die drei Kernfunktionen der App, Berechnen, Verstehen und Ausgleichen, wurden visuell klar strukturiert und in einem frischen Grün-Weiß-System umgesetzt.',
  role: 'UI Designer · Praktikum',
  type: 'Praktikumsprojekt · Mobile App',
  stack: 'Figma',
  extra: { key: 'Bereich', val: 'GreenTech · Sustainability' },
  folder: 'Images/nullify',
  cover: 'nullify-cover.jpg',
  images: [
    'nullify-cover.jpg',
    'nullify-1.jpg',
    'nuliffy-2.jpg',
    'nuliffy-3.jpg',
  ]
},

{
  slug: 'summersounds-festival-design',
  title: 'Summer Sounds 2023',
  year: '2023',
  tags: ['Campaign', 'Social Media', 'Event', 'Branding'],
  category: 'Social Media',
  description: 'Summer Sounds ist ein jährliches Musikfestival in Bremen. Für die Edition 2023 wurde das bestehende visuelle System weiterentwickelt und in ein konsistentes Festivaldesign überführt. Auf Basis vorhandener Elemente entstand ein frischeres, modernes Gestaltungskonzept mit klarem Fokus auf Social Media. Die organischen Formen in Himmelblau und Grasgrün, kombiniert mit handschriftlicher Typografie und Aquarellpinseln als Texthintergründe, geben dem Festival eine warme und einladende Bildsprache. Das Ergebnis umfasst Artist-Cards, Story-Formate und Event-Postings rund um die Werte Inklusion, Vernetzung, Integration und Nachhaltigkeit.',
  role: 'Designer · Social Media',
  type: 'Kundenprojekt · Event Design',
  stack: 'Figma · Adobe CC',
  extra: { key: 'Bereich', val: 'Event · Musik · Bremen' },
  folder: 'Images/summersounds',
  cover: 'summersounds-cover.jpg',
  images: [
    'summersounds-1.png',
    'summersounds-2.png',
    'summersounds-3.png',
  ]
},



{
  slug: 'team-neusta-benefits',
  title: 'team neusta Benefits',
  year: '2024',
  tags: ['Social Media', 'Motion', 'Corporate'],
  category: 'Social Media',
  description: 'Serie von Social Media Visuals für team neusta zur Kommunikation von Mitarbeiter-Benefits wie Sport, Jobbike und Hunde im Büro.',
  role: 'Visual Designer',
  type: 'Social Media Campaign',
  stack: 'Figma',
  extra: { key: 'Kunde', val: 'team neusta' },
  folder: 'Images/tn-benefits',
  cover: 'tn-cover.jpg',
  images: [
    'tn-benefits-1.png',
    'tn-benefits-2.png',
    'tn-benefits-3.png',
    'tn-benefits-4.png',
    'tn-benefits-5.png',
    'tn-benefits-6.png'
  ]
},

{
  slug: 'kaiv-coffee',
  title: 'Kaiv Coffee',
  year: '2026',
  tags: ['Branding', 'Packaging', 'AI', 'Concept'],
  category: 'Identity',
  description: 'Fiktives Branding-Experiment für eine Specialty Coffee Brand. Logo, Packaging in zwei Varianten und vollständiges Brand Rollout als KI-gestützter Konzeptprozess.',
  role: 'Creative Direction · AI Prompting',
  type: 'Fictional Brand Concept',
  stack: 'Figma · Nano Banana · Adobe CC',
  extra: { key: 'Ansatz', val: 'AI-assisted' },
  folder: 'Images/kaiv',
  cover: 'kaiv-cover.jpg',
  images: [
    'kaiv-1.jpg',
    'kaiv-2.jpg',
    'kaiv-3.jpg',
    'kaiv-4.jpg',
    'kaiv-5.jpg',
    'kaiv-6.jpg'
  ]
},

{
  slug: 'itdays-datenschutz',
  title: 'IT Days · Datenschutz',
  year: '2024',
  tags: ['Social Media', 'Editorial', 'Corporate'],
  category: 'Social Media',
  description: 'Konzept und Gestaltung einer Social Media Serie rund um wichtige IT Gedenktage.',
  role: 'Konzept · Visual Design',
  type: 'Social Media Konzept',
  stack: 'Figma · Adobe Photoshop',
  extra: { key: 'Kunde', val: 'team neusta' },
  folder: 'Images/it-days',
  cover: 'itdays-cover.jpg',
  images: [
    '01_ITD_Datenschutz.jpg',
    '02_ITD_Datenschutz.jpg',
    '03_ITD_Datenschutz.jpg',
    '04_ITD_Datenschutz.jpg',
    '05_ITD_Datenschutz.jpg',
    '06_ITD_Pass.jpg',
    '09_ITD_Pass.jpg',
    '01_ITD_Admin.jpg',
    '02_ITD_Admin.jpg',
    '03_ITD_Admin.jpg',
    '04_ITD_Admin.jpg'
  ]
},

{
  slug: 'melodia-eventservice',
  title: 'Melodia Eventservice',
  year: '2024',
  tags: ['Branding', 'Web Design', 'Social Media', 'Identity'],
  category: 'Identity',
  description: 'Vollständiges Branding für Melodia Eventservice UG aus Hamburg. Premium Positionierung im Eventsegment mit Logo, Farbsystem, Website und einer durchgängigen Social Media Präsenz für Recruiting und Leadgenerierung.',
  role: 'Brand Designer · Art Direction',
  type: 'Brand Identity',
  stack: 'Figma · Adobe CC · WordPress',
  extra: { key: 'Segment', val: 'Premium Eventservice' },
  folder: 'Images/mes',
  cover: 'mes-cover.jpg',
  images: [
    'MES_3.jpg',
    'MES_2.jpg',
    'MES_Mitarbeitersuche.jpg',
    'MES_Job_Slide.jpg',
    'MES_Leads_Kampagne_Q4_1x1_B_2.jpg',
    'MES_Leads_Kampagne_Q4_1x1.jpg',
    'MES_Mitarbeitersuche-1.jpg',
    'MES_Mitarbeitersuche-2.jpg',
    'MES_Newcomer_David-1.jpg',
    'MES_Newcomer_David.jpg',
    'MES_Studie-1.jpg',
    'MES_Studie.jpg',
    'MES_4.jpg',
    'MES_55.jpg'
  ]
},

  // ── AJOUTER UN NOUVEAU PROJET ICI ─────────────────────────────────────────
  // {
  //   slug: 'mon-nouveau-projet',
  //   title: 'Mon Nouveau Projet',
  //   year: '2026',
  //   tags: ['Tag1', 'Tag2'],
  //   category: 'AI',              // AI | UI/UX | Production | Identity | Social Media
  //   description: 'Description du projet...',
  //   role: 'Mon rôle',
  //   type: 'Type de projet',
  //   stack: 'Outil1 · Outil2',
  //   extra: { key: 'Markt', val: 'Europa' },
  //   folder: 'Images/mon-nouveau-projet',
  //   images: ['img1.jpg', 'img2.jpg']
  // },
];
