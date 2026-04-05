const TRANSLATIONS = {
  en: {
    nav_about:   'About',
    nav_work:    'Work',
    nav_contact: 'Contact',
    nav_hire:    'Hire me',
    nav_open:    'Open to work',

    hero_role:  'Digital Designer',
    hero_stat1: 'Years in design',
    hero_stat2: 'AI tools in production',
    hero_stat3: 'Operating globally',
    hero_stat4: 'Assets delivered',

    hf_1: 'Arrived in Germany.<br>19 years old.',
    hf_2: 'New language.<br>New system.',
    hf_3: 'New culture.<br>New friendships.',
    hf_4: 'Another year of<br>language courses.',
    hf_5: 'Training as<br>Media Designer.',
    hf_6: 'Training as<br>Screen Designer.',
    hf_7: 'Ready for the next step.',
    hf_8: 'Today.<br>27 years old.',

    about_chip:      'About',
    about_h2:        'Rare profile.<br><em>Sharp execution.</em>',
    about_bio1:      'Designer, AI specialist, and product builder based in Germany. I don\'t just use AI tools — I engineer workflows with them to produce at a scale no traditional studio can match.',
    about_bio2:      'Founder of <strong>FiveBrandsAI</strong> and builder of <strong>RKP AI Platform</strong>. Both shipped. Both work.',
    about_cv:        'Curriculum Vitae',
    about_expertise: 'Expertise',
    about_stack:     'Stack',
    about_languages: 'Languages',
    about_interests: 'Interests',
    lang_french:  'French (Native)',
    lang_german:  'German',
    lang_english: 'English',
    lang_lingala: 'Lingala',

    work_chip: 'Work',
    work_h2:   'Selected work.<br><em>Real outcomes.</em>',
    work_more: 'View more works →',

    contact_chip: 'Contact',
    contact_h2:   'Start a project.<br><em>Ship something real.</em>',
    contact_body: 'I\'m open to full-time design roles, freelance engagements, and collaborations that push what AI can do for brands. I move fast, deliver sharp, and don\'t ghost.',
    form_head:    'Send a message',
    form_name:    'Name',
    form_email:   'Email',
    form_message: 'Message',
    form_name_ph: 'Your name',
    form_email_ph:'you@company.com',
    form_msg_ph:  'Tell me about your project...',
    form_submit:  'Send message',

    works_chip:  'Work',
    works_h2:    'Selected work.<br><em>Real outcomes.</em>',
    filter_all:  'All',

    proj_getintouch:     'Get in touch →',
    proj_label_role:     'Role',
    proj_label_type:     'Type',
    proj_label_stack:    'Stack',
    proj_details_toggle: 'View additional details',
  },

  de: {
    nav_about:   'Über mich',
    nav_work:    'Projekte',
    nav_contact: 'Kontakt',
    nav_hire:    'Kontaktiere mich',
    nav_open:    'Verfügbar',

    hero_role:  'Digital Designer',
    hero_stat1: 'Jahre im Design',
    hero_stat2: 'KI-Tools im Einsatz',
    hero_stat3: 'Global tätig',
    hero_stat4: 'Assets geliefert',

    hf_1: 'Anreise nach Deutschland.<br>19 Jahre alt.',
    hf_2: 'Neue Sprache.<br>Neues System.',
    hf_3: 'Neue Kultur.<br>Neue Freundschaften.',
    hf_4: 'Ein weiteres Jahr<br>Sprachkurse.',
    hf_5: 'Ausbildung als<br>Mediengestalter.',
    hf_6: 'Ausbildung als<br>Screen Designer.',
    hf_7: 'Bereit für den nächsten Schritt.',
    hf_8: 'Heute.<br>27 Jahre alt.',

    about_chip:      'Über mich',
    about_h2:        'Seltenes Profil.<br><em>Präzise Umsetzung.</em>',
    about_bio1:      'Designer, KI-Spezialist und Produktentwickler mit Sitz in Deutschland. Ich nutze KI-Tools nicht nur — ich baue damit Workflows, die eine Produktion in einem Umfang ermöglichen, den kein traditionelles Studio erreicht.',
    about_bio2:      'Gründer von <strong>FiveBrandsAI</strong> und Entwickler der <strong>RKP AI Platform</strong>. Beide live. Beide funktionieren.',
    about_cv:        'Lebenslauf',
    about_expertise: 'Expertise',
    about_stack:     'Stack',
    about_languages: 'Sprachen',
    about_interests: 'Interessen',
    lang_french:  'Französisch (Muttersprache)',
    lang_german:  'Deutsch',
    lang_english: 'Englisch',
    lang_lingala: 'Lingala',

    work_chip: 'Projekte',
    work_h2:   'Ausgewählte Projekte.<br><em>Echte Ergebnisse.</em>',
    work_more: 'Alle Projekte →',

    contact_chip: 'Kontakt',
    contact_h2:   'Starte ein Projekt.<br><em>Liefere etwas Echtes.</em>',
    contact_body: 'Ich bin offen für Festanstellungen im Design, Freelance-Projekte und Kooperationen, die zeigen, was KI für Marken leisten kann. Ich arbeite schnell, liefere präzise — und bin immer erreichbar.',
    form_head:    'Nachricht senden',
    form_name:    'Name',
    form_email:   'E-Mail',
    form_message: 'Nachricht',
    form_name_ph: 'Dein Name',
    form_email_ph:'du@firma.de',
    form_msg_ph:  'Erzähl mir von deinem Projekt...',
    form_submit:  'Nachricht senden',

    works_chip:  'Projekte',
    works_h2:    'Ausgewählte Projekte.<br><em>Echte Ergebnisse.</em>',
    filter_all:  'Alle',

    proj_getintouch:     'Kontakt aufnehmen →',
    proj_label_role:     'Rolle',
    proj_label_type:     'Typ',
    proj_label_stack:    'Stack',
    proj_details_toggle: 'Weitere Details',
  }
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = TRANSLATIONS[lang][el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = TRANSLATIONS[lang][el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = TRANSLATIONS[lang][el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.dataset.lang = lang;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('lang') || 'en';
      applyLang(current === 'en' ? 'de' : 'en');
    });
  });
});
