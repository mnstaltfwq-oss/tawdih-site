/* Page templates + interactions */
const T = {
  home: () => [C.Hero(), C.StatisticsPanel(),
    C.Section(C.SH('خدمات الأعمال', 'خدمات الجهات الحكومية لمنشأتك', 'بدل التنقل بين المنصات والجهات الحكومية، اختر الخدمة التي تحتاجها، ودع فريق توضيح المعرفة يساعدك في معرفة متطلباتها وتجهيز إجراءاتها ومتابعة تنفيذها.') + C.GovGrid() + '<div style="text-align:center;margin-top:28px"><a class="btn btn--primary" href="services.html">استعرض جميع الخدمات</a></div>', 'hx-996'),
    C.Section(C.ConsultReal(), 'hx-605'),
    C.Section(C.SH('', 'لماذا تختار توضيح المعرفة لإدارة إجراءات منشأتك؟') + C.WhyReal(), 'sec--alt hx-395'),
    C.Section(C.SH('آلية العمل', 'أربع خطوات واضحة من طلب الخدمة حتى إتمامها', 'نعمل معك بخطوات منظمة تبدأ بفهم احتياج منشأتك، ثم مراجعة المتطلبات، ومتابعة تنفيذ الإجراء، وإبلاغك بالنتيجة.') + C.StepsReal(), 'hx-501'),
    C.Section(C.SH('عملاؤنا', 'شراكات أعمال نبنيها على الثقة والمتابعة', 'نعمل على مساعدة المنشآت ورواد الأعمال في تنظيم إجراءاتهم الحكومية، وتقديم خدمات واضحة تدعم استمرارية أعمالهم.') + C.ClientsReal(), 'hx-321'),
    C.Section(C.SH('تجارب العملاء', 'ماذا يقول عملاؤنا عن خدماتنا؟', 'نعتز بثقة عملائنا، ونسعى إلى تقديم تجربة عمل تتميز بوضوح الإجراءات وحسن التواصل والمتابعة.') + C.TestiReal(), 'sec--alt hx-1179'),
    C.Section('<div id="faq"></div>' + C.SH('الأسئلة الشائعة', 'إجابات تساعدك قبل طلب الخدمة') + C.FaqReal(), 'hx-991'),
    C.Section(C.SH('مركز المعرفة', 'معلومات تساعدك في إدارة أعمال منشأتك', 'تعرّف على إجراءات الخدمات الحكومية والتحديثات التنظيمية والموضوعات التي تهم أصحاب المنشآت ورواد الأعمال والمستثمرين في المملكة العربية السعودية.') + C.ArticlesReal(), 'sec--alt hx-544'),
    C.Section(C.CTAReal(), 'sec--flush-top'),
    C.Section(C.RequestForm(), 'sec--alt')],
  directory: () => [C.PageHead(), C.Section(`<div class="filters" role="group" aria-label="تصنيفات">${rep(5, i => `<button class="chip" aria-pressed="${i === 0}" data-filter>تصنيف ${i + 1}</button>`)}</div>${C.EntityGrid(11)}`).replace('class="container"','class="container container--dir"'),
    C.Section(C.SectionHeading() + `<div class="grid grid--4">${rep(8, C.PlatformCard)}</div>`, 'sec--alt'), C.Section(C.FAQAccordion())],
  entity: () => [C.EntityHead(), C.Section(`<div class="detail"><div><div class="sh"><div class="ph-line ph-line--title"></div></div><div class="grid grid--svc">${rep(9, C.ServiceCard)}</div>${C.FAQAccordion(4).replace('class="faq"','class="faq" style="grid-template-columns:1fr;margin-top:40px"')}</div>${C.StickySidebar()}</div>`, '').replace('class="container"','class="container container--wide"'), C.Section(C.CTASection(), 'sec--flush-top')],
  detail: () => [C.EntityHead().replace('phead--entity','phead--svc'), C.Section(`<div class="detail"><div><div class="sh"><div class="ph-line ph-line--title"></div></div><div class="card" style="padding:24px;margin-bottom:16px">${lines(5)}</div><div class="list-stack">${rep(4, () => `<div class="card" style="padding:20px">${lines(2)}</div>`)}</div><div class="cost" style="margin:32px 0"><div class="card">${lines(4)}</div><div class="card">${lines(2)}</div></div>${C.FAQAccordion(4).replace('class="faq"','class="faq" style="grid-template-columns:1fr"')}</div>${C.StickySidebar()}</div>`).replace('class="container"','class="container container--wide"')],
  incorporate: () => T.detail(),
  consult: () => [C.PageHead('phead--consult'), C.Section(C.SectionHeading() + `<div class="grid grid--2" style="gap:18px">${rep(4, () => `<div class="card" style="height:198px;padding:24px">${C.IconPh()}<div class="ph-line ph-line--title"></div>${lines(2)}</div>`)}</div>`).replace('<section','<section style="min-height:711px"'),
    C.Section(C.SectionHeading() + C.FeaturesGrid().replace('height:198','height:193'), 'sec--alt').replace('<section','<section style="min-height:430px"'),
    C.Section(C.SectionHeading() + `<div class="grid grid--4">${rep(4, () => `<div class="card" style="height:180px">${lines(3)}</div>`)}</div>`).replace('<section','<section style="min-height:417px"'),
    C.Section(`<div class="split" style="align-items:start"><div style="display:grid;gap:12px">${rep(3, () => `<div class="card" style="height:86px">${lines(2)}</div>`)}</div><div class="ph" style="height:239px"></div></div>`).replace('<section','<section style="min-height:427px"'),
    C.Section(`<div class="split" style="align-items:start"><div class="ph" style="height:514px"></div>${C.FAQAccordion(4).replace('class="faq"','class="faq" style="grid-template-columns:1fr"')}</div>`, 'sec--alt'),
    C.Section(C.CTASection(), 'sec--flush-top')],
  packages: () => [C.PageHead(), C.Section(`<div style="text-align:center">${C.PricingSwitcher()}</div><div class="grid grid--3">${C.PackageCard()}${C.PackageCard(true)}${C.PackageCard()}</div>`),
    C.Section(C.SectionHeading() + C.ComparisonTable(), 'sec--alt'), C.Section(C.FAQAccordion())],
  about: () => [C.PageHead('phead--about'), C.Section(`<div class="split"><div>${lines(5)}</div><div class="ph" style="height:263px"></div></div>`), C.Section(C.SectionHeading() + C.FeaturesGrid(), 'sec--alt'), C.Section(`<div class="grid grid--2" style="gap:16px">${rep(2, () => `<div class="card" style="min-height:135px">${lines(3)}</div>`)}</div>`), C.Section(C.CTASection(), 'sec--flush-top')],
  blog: () => [C.PageHead(), C.Section(`<div class="filters"><input class="search" type="search" placeholder="بحث" aria-label="بحث">${rep(6, i => `<button class="chip" aria-pressed="${i === 0}" data-filter>تصنيف</button>`)}</div><div class="grid grid--3">${rep(9, C.ArticleCard)}</div>`).replace('class="container"','class="container container--dir"'), C.Section(C.CTASection(), 'sec--flush-top')],
  article: () => [C.PageHead('phead--article'), C.Section(`<div class="ph cover"></div>`, 'sec--flush-top').replace('class="container"','class="container" style="max-width:1200px"'), C.Section(`<div class="detail detail--article">${C.ArticleLayout()}${C.StickySidebar()}</div>`).replace('class="container"','class="container container--wide"'), C.Section(C.SectionHeading() + `<div class="grid grid--3">${rep(3, C.ArticleCard)}</div>`, 'sec--alt'), C.Section(C.CTASection(), 'sec--flush-top')],
  contact: () => [C.PageHead(), C.Section(`<div class="contact">${C.ContactForm()}<div class="contact__info">${rep(5, C.ContactCard)}</div></div>`)]
};

function mount(name, active) {
  document.body.classList.toggle('has-mobile-cta', name === 'detail' || name === 'entity');
  document.body.insertAdjacentHTML('afterbegin', C.Header(active));
  document.body.insertAdjacentHTML('beforeend', `<main id="main">${T[name]().join('')}</main>` + C.Footer());
  bind();
}

function bind() {
  const hdr = document.getElementById('site-header'), top = document.querySelector('.totop');
  addEventListener('scroll', () => { hdr.classList.toggle('is-scrolled', scrollY > 10); top.classList.toggle('is-visible', scrollY > 400); }, { passive: true });
  top.onclick = () => scrollTo({ top: 0 });
  const tg = document.querySelector('.menu-toggle'), nav = document.getElementById('nav'), scrim = document.querySelector('[data-scrim]');
  const setDrawer = o => { nav.classList.toggle('is-open', o); scrim.classList.toggle('on', o); tg.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; };
  tg.onclick = () => setDrawer(!nav.classList.contains('is-open'));
  scrim.onclick = () => setDrawer(false); nav.querySelector('[data-close]').onclick = () => setDrawer(false);
  addEventListener('keydown', e => { if (e.key === 'Escape') setDrawer(false); });
  document.querySelectorAll('.nav__item > button').forEach(b => b.onclick = () => { const it = b.parentElement, o = it.classList.toggle('is-open'); b.setAttribute('aria-expanded', o); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.is-open').forEach(x => x.classList.remove('is-open')); });
  document.documentElement.classList.add('js');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.grid--4 > *, .steps > *, .grid--3 > *, .cons').forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = (i % 4) * 60 + 'ms'; io.observe(el); });
  document.querySelectorAll('[data-filter]').forEach(b => b.onclick = () => { b.parentElement.querySelectorAll('[data-filter]').forEach(x => x.setAttribute('aria-pressed', x === b)); });
  document.querySelectorAll('.switcher button').forEach(b => b.onclick = () => b.parentElement.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b)));
  document.querySelectorAll('[data-slider]').forEach(s => { const tr = s.querySelector('.slider__track'); let i = 0;
    const step = d => { const n = tr.children.length, vis = getComputedStyle(tr.children[0]).flexBasis.includes('100%') ? 1 : innerWidth <= 1024 ? 2 : 3; i = Math.max(0, Math.min(n - vis, i + d)); tr.style.transform = `translateX(${i * (tr.children[0].offsetWidth + 18)}px)`; };
    s.querySelector('[data-next]').onclick = () => step(1); s.querySelector('[data-prev]').onclick = () => step(-1); });
  document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); let ok = true;
    f.querySelectorAll('[required]').forEach(i => { const bad = !i.value.trim(); i.closest('.field').classList.toggle('has-error', bad); ok = ok && !bad; });
    if (ok && f.hasAttribute('data-wa')) { const v = n => (f.elements[n].value || '').trim(); const t = `طلب استشارة من الموقع\nالاسم: ${v('name')}\nالمنشأة: ${v('co')}\nالجوال: ${v('tel')}\nالجهة: ${v('gov')}\nالخدمة: ${v('svc')}\nالتفاصيل: ${v('msg')}`; window.open('https://wa.me/966535448100?text=' + encodeURIComponent(t), '_blank', 'noopener'); f.querySelector('.form-ok').hidden = false; } else if (ok) f.querySelector('button[type=submit]').textContent = '✓'; }));
}
window.mount = mount;
