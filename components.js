/* Reusable components. Pure functions returning HTML strings; all data is neutral placeholder. RTL, a11y-aware. */
const C = {};
const rep = (n, fn) => Array.from({ length: n }, (_, i) => fn(i)).join('');
const lines = (n = 2) => rep(n, i => `<div class="ph-line${i === n - 1 ? ' ph-line--short' : ''}"></div>`);

C.Header = (active = '') => `
<a class="sr-only" href="#main">تخطي إلى المحتوى</a>
<header class="site-header" id="site-header"><div class="container site-header__row">
  <a href="index.html" aria-label="الرئيسية"><img class="logo" src="logo.png" alt="توضيح المعرفة لخدمات الأعمال" width="138" height="46"></a>
  <button class="menu-toggle" aria-expanded="false" aria-controls="nav" aria-label="القائمة">☰</button>
  <div class="scrim" data-scrim></div>
  <nav class="nav" id="nav" aria-label="التنقل الرئيسي"><div class="drawer-head"><button class="drawer-x" aria-label="إغلاق" data-close>×</button></div>
    ${[['index.html', 'الرئيسية'], ['about.html', 'من نحن']].map(([h, t]) => `<div class="nav__item"><a class="nav__link" href="${h}" ${active === h ? 'aria-current="page"' : ''}>${t}</a></div>`).join('')}
    <div class="nav__item"><button class="nav__link" aria-haspopup="true" aria-expanded="false">الخدمات ▾</button>
      <div class="dd">${["المركز السعودي للأعمال","وزارة التجارة","وزارة الموارد البشرية","وزارة الاستثمار","وزارة البلديات والإسكان","التأمينات الاجتماعية","هيئة الزكاة والضريبة والجمارك","وزارة الداخلية","وزارة الخارجية","وزارة الصناعة والثروة المعدنية","الهيئة السعودية للملكية الفكرية","تأسيس الشركات والمنشآت"].map(x => `<a href="entity.html">${x}</a>`).join("")}</div></div>
    ${[['packages.html', 'الباقات'], ['services.html', 'جميع الخدمات'], ['blog.html', 'مركز المعرفة'], ['contact.html', 'تواصل معنا']].map(([h, t]) => `<div class="nav__item"><a class="nav__link" href="${h}" ${active === h ? 'aria-current="page"' : ''}>${t}</a></div>`).join('')}
  <div class="drawer-foot"><a class="btn btn--primary" href="https://wa.me/966535448100" target="_blank" rel="noopener">اطلب عبر واتساب</a><a class="drawer-call" href="tel:+966535448100" aria-label="اتصال"></a></div></nav>
  <a class="btn btn--primary btn--sm" href="https://wa.me/966535448100" target="_blank" rel="noopener">اطلب عبر واتساب</a>
</div></header>`;

C.Breadcrumb = () => `<div class="crumb"><i></i><span>/</span><i></i></div>`;
C.H1 = (big) => `<div class="ph-h1${big ? ' ph-h1--detail' : ''}"></div><div class="ph-sub"></div>`;
C.PageHead = (v = '') => `<section class="phead ${v}"><div class="container">${C.Breadcrumb()}${C.H1(v.includes('svc')||v.includes('article'))}</div></section>`;

C.Hero = () => `<section class="hero"><div class="hero__bg"></div><div class="hero__wrap"><div class="hero__content">
  <div class="ph-line hero__kicker"></div><div class="ph-line hero__title"></div><div class="ph-line hero__title"></div>
  <div class="hero__actions"><a class="btn btn--primary" href="contact.html"><span>زر أساسي</span></a><a class="btn btn--ghost" href="services.html">زر ثانوي</a></div>
  <div class="hero__badges"><i></i><i></i><i></i></div></div></div></section>`;

C.StatisticsPanel = (n = 4) => `<div class="container"><div class="stats" role="list">${rep(n, () => `<div class="stats__item" role="listitem"><div class="stats__num"></div><div class="stats__lbl"></div></div>`)}</div></div>`;

C.SectionHeading = () => `<div class="sh"><div class="ph-line" style="width:90px;height:10px"></div><div class="ph-line ph-line--title"></div><div class="ph-line" style="width:420px;max-width:100%"></div></div>`;
C.Section = (inner, cls = '') => `<section class="sec ${cls}"><div class="container">${inner}</div></section>`;

C.EntityCard = () => `<a class="card card--entity" href="entity.html"><div class="ph"></div><div class="ph-line ph-line--title" style="width:70%"></div>${lines(2)}<div class="ph-line" style="width:50%;margin-top:auto"></div></a>`;
C.PlatformCard = () => `<a class="card card--entity" href="platform.html" style="align-items:flex-start;text-align:start"><div class="ph" style="border-radius:12px"></div><div class="ph-line ph-line--title"></div>${lines(3)}</a>`;
C.ServiceCard = () => `<a class="card" href="service-detail.html" style="min-height:160px">${C.IconPh()}<div class="ph-line ph-line--title"></div>${lines(2)}<div class="ph-line" style="width:40%;margin-top:auto"></div></a>`;
C.IconPh = () => `<div class="ph" style="width:44px;height:44px"></div>`;
C.FeatureCard = () => `<div class="card card--feature">${C.IconPh()}<div class="ph-line ph-line--title"></div>${lines(2)}</div>`;
C.StepCard = i => `<div class="card card--step"><div class="num">${i + 1}</div><div class="ph-line ph-line--title"></div>${lines(2)}</div>`;
C.ArticleCard = (i = 0) => `<a class="card card--article" href="article.html"><div class="ph"></div><div class="body"><div class="ph-line" style="width:40%;height:10px"></div><div class="ph-line ph-line--title" style="width:${90 - (i % 3) * 15}%"></div>${lines(2 + (i % 2))}</div></a>`;
C.ContactCard = () => `<div class="card card--contact"><div class="ph"></div><div style="flex:1"><div class="ph-line" style="width:40%;height:10px"></div><div class="ph-line ph-line--title" style="width:60%;height:16px"></div></div></div>`;
C.TestimonialCard = () => `<div class="card card--testimonial">${lines(4)}<div style="display:flex;gap:10px;align-items:center;margin-top:auto"><div class="ph" style="width:40px;height:40px;border-radius:50%"></div><div class="ph-line" style="width:90px"></div></div></div>`;

C.EntityGrid = (n = 12) => `<div class="grid grid--4">${rep(n, C.EntityCard)}</div>`;
C.FeaturesGrid = () => `<div class="grid grid--4 feats" style="gap:var(--gap-feat)">${rep(4, C.FeatureCard)}</div>`;
C.ProcessSteps = () => `<div class="steps">${rep(4, C.StepCard)}</div>`;

C.ConsultationLayout = () => `<div class="cons"><div class="ph cons__media"></div><div><div class="ph-line ph-line--title"></div>${lines(3)}<div class="grid grid--2" style="margin-top:16px">${rep(4, () => `<div class="card" style="padding:14px">${lines(2)}</div>`)}</div><div style="margin-top:20px"><a class="btn btn--primary" href="contact.html">زر</a></div></div></div>`;

C.Testimonials = () => `<div class="slider" data-slider><div class="slider__track">${rep(6, C.TestimonialCard)}</div><div class="slider__nav"><button class="chip" data-prev aria-label="السابق">›</button><button class="chip" data-next aria-label="التالي">‹</button></div></div>`;

C.FAQAccordion = (n = 6) => {
  const col = () => `<div>${rep(n / 2, () => `<details class="acc"><summary><span class="ph-line" style="width:70%;margin:0"></span></summary><div class="in">${lines(3)}</div></details>`)}</div>`;
  return `<div class="faq">${col()}${col()}</div>`;
};

C.PricingSwitcher = () => `<div class="switcher" role="group" aria-label="مدة الاشتراك"><button class="tg" aria-pressed="true" style="width:109px">خيار ١</button><button class="tg" aria-pressed="false" style="width:194px">خيار ٢</button></div>`;
C.PackageCard = (featured) => `<div class="plan ${featured ? 'plan--featured' : ''}"><div class="plan__head"><div class="ph-line ph-line--title" style="height:21px;width:50%"></div><div class="ph-line" style="height:14px;width:70%"></div></div><div class="plan__price"><div class="ph-line" style="height:16px;width:30%"></div><div class="ph-line" style="height:40px;width:50%"></div></div><div class="plan__acc">${rep(9, i => `<details class="acc acc--plan" ${i === 0 ? 'open' : ''}><summary><span class="ph-line" style="width:60%;margin:0;height:14px"></span></summary><div class="in">${rep(6, () => '<div class="ph-line"></div>')}</div></details>`)}</div><a class="btn ${featured ? 'btn--primary' : 'btn--outline'}" href="contact.html">زر الاشتراك</a></div>`;
C.ComparisonTable = (rows = 20) => `<div class="tbl-wrap"><table class="tbl"><thead><tr><th scope="col">الميزة</th><th scope="col">باقة ١</th><th scope="col">باقة ٢</th><th scope="col">باقة ٣</th></tr></thead><tbody>${rep(rows, i => `<tr><th scope="row" style="background:#fff;height:49px;font-weight:400"><span class="ph-line" style="width:70%;margin:0"></span></th><td>${i % 3 ? '✓' : '—'}</td><td>✓</td><td>✓</td></tr>`)}</tbody></table></div>`;

C.StickySidebar = () => `<aside class="sidebar" style="display:grid;gap:16px"><div class="card"><div class="ph-line ph-line--title"></div>${lines(3)}<a class="btn btn--primary" href="contact.html">زر الطلب</a><a class="btn btn--outline" href="contact.html">زر ثانوي</a></div><div class="card"><div class="ph-line ph-line--title"></div>${rep(5, () => `<div class="ph-line"></div>`)}</div></aside>`;
C.EntityHead = () => `<section class="phead phead--entity"><div class="container container--wide"><div class="logo-box"></div><div style="flex:1">${C.Breadcrumb()}${C.H1(true)}<div class="hero__actions"><a class="btn btn--primary" href="contact.html">زر</a><a class="btn btn--ghost" href="#">زر</a></div></div></div></section>`;
C.ArticleLayout = () => `<article class="article">${lines(5)}<h3 class="ph-line ph-line--title" style="height:18px"></h3>${lines(5)}<ol class="alist">${rep(3, () => `<li>${lines(2)}</li>`)}</ol><div class="ph aimg"></div><h3 class="ph-line ph-line--title" style="height:18px"></h3>${lines(4)}<blockquote>${lines(2)}</blockquote>${C.ComparisonTable(4)}${lines(4)}</article>`;

C.ContactForm = () => `<form class="form card" novalidate style="padding:28px;gap:16px"><div class="ph-line ph-line--title"></div>
  <div class="grid grid--2">${[['الاسم', 'text'], ['الاسم ٢', 'text'], ['الجوال', 'tel']].map(([l, t], i) => `<div class="field"><label for="f${i}">${l}</label><input id="f${i}" type="${t}" required inputmode="${t === 'tel' ? 'tel' : 'text'}"><div class="err" role="alert">حقل مطلوب</div></div>`).join('')}<div class="field"><label for="f9">قائمة</label><select id="f9" required><option value="">—</option><option>خيار</option></select><div class="err" role="alert">اختر قيمة</div></div></div>
  <div class="field"><label for="f10">تفاصيل</label><textarea id="f10"></textarea></div><button class="btn btn--primary" type="submit" style="align-self:center;min-width:220px">زر الإرسال</button></form>`;

C.CTASection = () => `<div class="band"><div style="flex:1"><div class="ph-line ph-line--title" style="width:50%"></div>${lines(1)}</div><div style="display:flex;gap:12px"><a class="btn btn--outline" href="contact.html">زر ١</a><a class="btn btn--ghost" href="contact.html">زر ٢</a></div></div>`;

C.Footer = () => `<footer class="footer"><div class="container"><div class="footer__grid">${rep(3, () => `<div><div class="ph-line ph-line--title" style="background:#555"></div><ul>${rep(7, () => `<li><i></i></li>`)}</ul></div>`)}</div><div class="footer__bar"><div class="ph-line" style="width:260px;background:#555"></div></div></div></footer>
<div class="float"><a class="wa" href="https://wa.me/966535448100" target="_blank" rel="noopener" aria-label="تواصل عبر واتساب"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z"/></svg></a><i aria-hidden="true"></i></div><button class="totop" aria-label="للأعلى"></button><div class="mobile-cta"><a class="btn btn--primary" href="contact.html">زر ثابت</a></div>`;

C.lines = lines;
C.TestimonialWide = () => `<div class="tcard"><div class="ph-line" style="width:90px;height:14px"></div>${lines(2)}<hr><div style="display:flex;align-items:center;gap:12px"><div class="ph" style="width:40px;height:40px;border-radius:50%"></div><div class="ph-line" style="width:120px;margin:0"></div></div></div>`;
window.C = C; window.rep = rep;
