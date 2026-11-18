/* Real content layer (توضيح المعرفة). Overrides placeholder renderers for the home page and shared footer. */
const WA = 'https://wa.me/966535448100';
window.REAL_T = {};
const ICO = {
  bld: '<path d="M5 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M15 9h3a1 1 0 0 1 1 1v11M3 21h18M9 7h2M9 11h2M9 15h2"/>',
  chk: '<path d="M20 6 9 17l-5-5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  arr: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 5.2a3.2 3.2 0 0 1 0 6M18 15c2 .7 3 2.4 3 5"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z"/>',
  cal: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
  calchk: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17m-11 5 2 2 4-4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5M3 17.5l9 5 9-5"/>',
  star: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 17l-5.2 2.7 1-5.9L3.5 9.7l5.9-.8z"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  pin_: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'
};
C.ico = (n, s = 24) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[n]}</svg>`;
const wab = (t, cls = 'btn--primary') => `<a class="btn ${cls}" href="${WA}" target="_blank" rel="noopener">${t}</a>`;

C.SH = (eb, t, d) => `<div class="sh sh--real">${eb ? `<div class="eyebrow">${eb}</div>` : ''}<h2>${t}</h2>${d ? `<p>${d}</p>` : ''}</div>`;

const GOV = [
  ['وزارة التجارة', 'خدمات الشركات والأنشطة التجارية وتحديث بيانات المنشآت والإجراءات التجارية ذات العلاقة.'],
  ['وزارة الموارد البشرية', 'خدمات منصة قوى وأجير ومدد، وإدارة عقود العمل ورخص العمل والإجراءات المرتبطة بالموظفين.'],
  ['وزارة الاستثمار', 'خدمات المستثمرين الأجانب وتسجيل الاستثمار، ومتابعة الإجراءات والتعديلات المرتبطة بالمنشآت الاستثمارية.'],
  ['وزارة البلديات والإسكان', 'إصدار وتجديد وتعديل الرخص التجارية والبلدية، ومتابعة الطلبات عبر منصة بلدي.'],
  ['التأمينات الاجتماعية', 'تسجيل المنشآت والمشتركين، وتحديث بيانات الموظفين والأجور، ومتابعة الخدمات التأمينية للمنشأة.'],
  ['هيئة الزكاة والضريبة والجمارك', 'التسجيل الزكوي والضريبي، والمساعدة في إعداد الإقرارات ومتابعة الإجراءات والخدمات المرتبطة بالتزامات المنشأة.'],
  ['وزارة الداخلية', 'خدمات أبشر أعمال ومقيم المتعلقة بإجراءات المقيمين والتأشيرات والإقامات والخدمات المرتبطة بالمنشآت.'],
  ['وزارة الخارجية', 'خدمات التأشيرات وتصديق الوثائق ومتابعة الطلبات والإجراءات المرتبطة بأعمال المنشآت.'],
  ['وزارة الصناعة والثروة المعدنية', 'خدمات التراخيص الصناعية وتحديث بيانات المنشآت الصناعية ومتابعة الإجراءات عبر المنصات المختصة.'],
  ['الهيئة السعودية للملكية الفكرية', 'خدمات تسجيل العلامات التجارية وتجديدها ونقل ملكيتها ومتابعة الطلبات والإجراءات المرتبطة بها.'],
];
C.GovCard = ([t, d, b = 'عرض الخدمات']) => `<a class="card card--real card--gov" href="entity.html"><span class="ico">${C.ico('bld')}</span><h3>${t}</h3><p>${d}</p><span class="more">${b} ${C.ico('arr', 18)}</span></a>`;
C.GovGrid = () => `<div class="grid grid--4">${GOV.map((g, i) => C.GovCard(g, i)).join('')}</div>`;

C.ConsultReal = () => `<div class="cons cons--real"><div class="cons__cards grid grid--2">${[
  ['تشخيص وضع المنشأة', 'نراجع احتياج منشأتك ونساعدك في تحديد الإجراء المطلوب والجهة المختصة والخطوات المناسبة لمعالجة الطلب.'],
  ['التأسيس وتجهيز المتطلبات', 'نساعد رواد الأعمال والمستثمرين في تحديد متطلبات تأسيس المنشآت وتجهيز الإجراءات المرتبطة ببدء النشاط.'],
  ['الامتثال والجاهزية', 'نساعدك في مراجعة حالة التراخيص والوثائق والإجراءات الحكومية، وتحديد الملاحظات التي تحتاج إلى متابعة.'],
  ['التنفيذ وإدارة المتابعة', 'نساعدك في تنظيم الطلبات ومتابعة إجراءات المنشأة عبر المنصات الحكومية وفق نطاق الخدمة المتفق عليه.']
].map(([t, d]) => `<div class="card card--real"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
<div class="cons__text"><div class="eyebrow">الاستشارات وحلول الأعمال</div><h2>قرارات أوضح وإجراءات أسهل لمنشأتك</h2>
<p>تحتاج إلى تأسيس منشأة، أو معالجة ملاحظة على إحدى المنصات الحكومية، أو معرفة الإجراءات المناسبة لنشاطك؟</p><p>نساعدك في فهم وضع منشأتك، وتحديد متطلبات الخدمة، وتنظيم الخطوات اللازمة قبل البدء في التنفيذ.</p>
<ul class="ticks">${['تشخيص أولي لاحتياج منشأتك', 'تحديد المتطلبات والإجراءات المناسبة', 'خطة واضحة للمتابعة والتنفيذ'].map(x => `<li>${C.ico('chk', 20)}${x}</li>`).join('')}</ul>
<div class="hero__actions" style="margin-top:20px">${wab('اطلب فحصًا أوليًا مجانيًا')}<a class="btn btn--outline" href="consult.html">تعرّف على خدمات الاستشارات</a></div></div></div>`;

C.WhyReal = () => `<div class="grid grid--4 feats" style="gap:var(--gap-feat)">${[
  ['users', 'خبرة في خدمات الأعمال', 'نساعد أصحاب المنشآت في التعامل مع الإجراءات الحكومية ومتطلبات الخدمات، من التأسيس إلى التشغيل والمتابعة.'],
  ['shield', 'حلول تناسب منشأتك', 'سواء كنت تبدأ مشروعًا جديدًا أو تدير منشأة قائمة، نساعدك في اختيار الخدمات المناسبة لطبيعة نشاطك واحتياجاتك.'],
  ['grid', 'خدمات متعددة في مكان واحد', 'بدل متابعة جهات ومنصات مختلفة بنفسك، يمكنك تنظيم طلبات منشأتك من خلال نقطة تواصل واحدة.'],
  ['clock', 'متابعة مستمرة', 'لا يقتصر عملنا على تقديم الطلب؛ بل يشمل متابعة حالته وتوضيح الملاحظات والخطوات التالية ضمن نطاق الخدمة المتفق عليه.']
].map(([i, t, d]) => `<div class="card card--feature card--real"><span class="ico">${C.ico(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`;

C.StepsReal = () => `<div class="steps">${[
  ['استلام الطلب', 'أخبرنا بالخدمة التي تحتاجها', 'تواصل معنا عبر واتساب أو نموذج الطلب، وحدد نوع الخدمة والجهة الحكومية المرتبطة بها.'],
  ['مراجعة المتطلبات', 'نراجع بياناتك ومستنداتك', 'نراجع المعلومات والمستندات المطلوبة، ونوضح لك أي نواقص أو إجراءات إضافية قبل بدء التنفيذ.'],
  ['التنفيذ والمتابعة', 'نتابع إجراءات طلبك', 'نباشر الإجراءات المتفق عليها عبر القنوات الرسمية، ونتابع حالة الطلب والملاحظات التي قد تصدر من الجهة المختصة.'],
  ['إتمام الخدمة', 'نبلغك بالنتيجة ونسلّم المخرجات', 'بعد اكتمال الإجراء، نزودك بنتيجة الطلب والمستندات المتاحة، ونوضح أي خطوات لاحقة عند الحاجة.']
].map(([l, t, d], i) => `<div class="card card--step card--real"><div class="num">0${i + 1}</div><div class="eyebrow">${l}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`;

C.ClientsReal = () => `<div class="note-card"><p>تُعرض شعارات العملاء الذين وافقوا على نشر أسمائهم أو هوياتهم ضمن الموقع.</p><p>لا تُضاف شعارات أو أسماء منشآت دون موافقة.</p></div>`;

C.TestiReal = () => `<div class="tlist"><div class="tcard tcard--real"><div class="eyebrow">[التقييم الحقيقي]</div><p>[نص شهادة العميل المعتمدة]</p><hr><div style="display:flex;align-items:center;gap:12px"><div class="ico">${C.ico('users')}</div><div><b>[عميل موثق]</b><div class="muted">[المسمى] · [اسم المنشأة بموافقة العميل]</div></div></div></div></div>`;

const FAQ = [
  ['ما الخدمات التي تقدمها شركة توضيح المعرفة؟', 'تقدم توضيح المعرفة خدمات أعمال وإجراءات حكومية للمنشآت، تشمل تأسيس الشركات، والسجلات التجارية، والتراخيص، وخدمات الموارد البشرية، والتأمينات الاجتماعية، والزكاة والضرائب، وإدارة المنصات الحكومية، وغيرها من الخدمات المرتبطة بتشغيل المنشآت.'],
  ['هل خدماتكم مخصصة للشركات أم للأفراد؟', 'نركز على خدمة المنشآت ورواد الأعمال والمستثمرين، بما في ذلك أصحاب المؤسسات والشركات القائمة والراغبين في تأسيس مشاريع تجارية جديدة.'],
  ['كيف أطلب خدمة من توضيح المعرفة؟', 'يمكنك اختيار الخدمة من موقعنا والتواصل معنا عبر واتساب، أو تعبئة نموذج طلب الخدمة. بعد استلام استفسارك، نراجع احتياجك ونوضح لك المتطلبات والخطوات التالية.'],
  ['هل يمكنكم إنجاز خدمات منشأتي عن بُعد؟', 'نعم، نقدم خدماتنا عن بُعد للمنشآت في مختلف مناطق المملكة العربية السعودية، بحسب طبيعة الخدمة ومتطلبات الجهة الحكومية المختصة. وقد تتطلب بعض الإجراءات حضور صاحب العلاقة أو ممثله.'],
  ['كم تستغرق إجراءات تنفيذ الخدمة؟', 'تختلف المدة بحسب نوع الخدمة واكتمال المستندات ومتطلبات الجهة الحكومية. بعد مراجعة طلبك، نوضح لك مراحل العمل والمدة التقديرية متى أمكن تحديدها.'],
  ['هل تقدمون خدمات إدارة المنصات الحكومية باشتراكات شهرية أو سنوية؟', 'نعم، نوفر حلولًا لإدارة ومتابعة خدمات المنشآت من خلال باقات دورية، ويُحدد نطاق الاشتراك بحسب عدد الخدمات والمنصات وحجم العمليات المطلوبة.'],
  ['ما المستندات المطلوبة لبدء الخدمة؟', 'تختلف المستندات بحسب الخدمة والجهة المختصة. عند اختيار الخدمة، نوضح لك البيانات والمرفقات المطلوبة والإجراءات التي يجب استكمالها قبل التنفيذ.'],
  ['هل تقدمون استشارة أولية مجانية؟', 'نوفر فحصًا أوليًا مجانيًا لمشكلة أو خدمة محددة، بهدف فهم الطلب وتحديد الخطوات المناسبة. أما الدراسات التفصيلية والتقارير الشاملة فتُحدد ضمن نطاق خدمة مستقل.'],
  ['كيف تتم متابعة الطلب بعد تقديمه؟', 'نتابع الطلب وفق نطاق الخدمة المتفق عليه، ونبلغك بالتحديثات والملاحظات أو المستندات الإضافية المطلوبة من الجهة المختصة.'],
  ['هل تقدمون خدمات للمستثمرين الأجانب؟', 'نعم، نساعد المستثمرين الأجانب في الإجراءات المرتبطة بتسجيل الاستثمار وتأسيس المنشآت ومتابعة الخدمات الحكومية ذات الصلة، وفق الأنظمة والمتطلبات المعمول بها في المملكة.'],
  ['هل تضمنون الموافقة على الطلبات الحكومية؟', 'نعمل على مراجعة المتطلبات وتجهيز الطلبات ومتابعة الإجراءات وفق الأنظمة المعمول بها، بينما يبقى قرار الموافقة أو الرفض من اختصاص الجهة الحكومية المعنية.'],
  ['كيف تحافظون على خصوصية بيانات المنشآت؟', 'نتعامل مع بيانات العملاء ومستنداتهم لأغراض تقديم الخدمة المتفق عليها، ونعمل على حمايتها والحد من الوصول إليها وفق سياسة الخصوصية وإجراءات حماية البيانات المعتمدة.']
];
C.FaqReal = () => `<div class="faq faq--side"><div>${FAQ.map(([q, a]) => `<details class="acc"><summary>${q}</summary><div class="in"><p>${a}</p></div></details>`).join('')}</div><aside class="card card--real faq__aside"><h3>لم تجد إجابة عن استفسارك؟</h3><p>تواصل معنا، وسنساعدك في تحديد الخدمة المناسبة لاحتياج منشأتك.</p>${wab('اسألنا عبر واتساب')}</aside></div>`;

C.ArticlesReal = () => `<div class="grid grid--3">${[
  ['السجلات التجارية وتأسيس الشركات', 'التأكيد السنوي للسجل التجاري في السعودية: المتطلبات والخطوات', 'تعرّف على مفهوم التأكيد السنوي لبيانات السجل التجاري، والإجراءات المرتبطة به، وأهم ما تحتاج المنشأة إلى مراجعته.'],
  ['خدمات الموارد البشرية', 'خدمات منصة قوى للمنشآت: دليل العقود ورخص العمل وإدارة الموظفين', 'دليل تعريفي بأهم خدمات منصة قوى، وكيف تستفيد المنشآت منها في تنظيم إجراءات الموارد البشرية.'],
  ['إدارة المنصات الحكومية', 'إدارة المنصات الحكومية للمنشآت: كيف تنظم خدماتك وتجديداتك؟', 'تعرّف على أهمية تنظيم المنصات الحكومية ومتابعة الطلبات والمواعيد المرتبطة بتشغيل منشأتك.']
].map(([c, t, d]) => `<a class="card card--article card--real card--art" href="article.html"><div class="ph"></div><div class="body"><div class="eyebrow">${c}</div><h3>${t}</h3><p>${d}</p><span class="more">اقرأ المقال ${C.ico('arr', 18)}</span></div></a>`).join('')}</div><div style="text-align:center;margin-top:28px"><a class="btn btn--outline" href="blog.html">استعرض جميع المقالات</a></div>`;

C.CTAReal = () => `<div class="band band--real"><div style="flex:1"><h2>جاهز ترتّب إجراءات منشأتك؟</h2><p>خلّ وقتك لتطوير أعمالك، ودع توضيح المعرفة تساعدك في متابعة خدمات منشأتك وإجراءاتها الحكومية.</p><p>ابدأ بطلب الخدمة التي تحتاجها، وسنوضح لك المتطلبات والخطوات المناسبة.</p></div><div class="band__btns">${wab('تواصل معنا عبر واتساب', 'btn--outline')}<a class="btn btn--ghost" href="#request">إرسال طلب خدمة</a></div></div>`;

C.RequestForm = () => `<div class="req" id="request"><div class="sh sh--real"><div class="eyebrow">اطلب استشارتك</div><h2>خلّنا نفهم احتياج منشأتك</h2><p>عندك استفسار عن خدمة حكومية أو إجراء يخص منشأتك؟ أرسل لنا تفاصيل طلبك، وسنراجع الاستفسار ونوضح لك طريقة البدء والخطوات المناسبة.</p></div>
<form class="form card req__form" novalidate data-wa>
<div class="grid grid--2">
<div class="field"><label for="r-name">الاسم الكامل</label><input id="r-name" name="name" required placeholder="أدخل اسمك" autocomplete="name"><div class="err" role="alert">حقل مطلوب</div></div>
<div class="field"><label for="r-co">اسم المنشأة</label><input id="r-co" name="co" required placeholder="اسم المؤسسة أو الشركة" autocomplete="organization"><div class="err" role="alert">حقل مطلوب</div></div>
<div class="field"><label for="r-tel">رقم الجوال</label><input id="r-tel" name="tel" type="tel" inputmode="tel" required placeholder="05XXXXXXXX" autocomplete="tel"><div class="err" role="alert">حقل مطلوب</div></div>
<div class="field"><label for="r-gov">الجهة الحكومية أو المنصة</label><select id="r-gov" name="gov" required><option value="">اختر الجهة أو المنصة</option>${GOV.map(g => `<option>${g[0]}</option>`).join('')}</select><div class="err" role="alert">اختر قيمة</div></div>
<div class="field"><label for="r-svc">نوع الخدمة</label><select id="r-svc" name="svc" required><option value="">اختر الخدمة المطلوبة</option>${['تأسيس منشأة', 'سجل تجاري وتعديلاته', 'رخص وتراخيص', 'موارد بشرية وعقود عمل', 'تأمينات اجتماعية', 'زكاة وضريبة', 'إدارة المنصات الحكومية', 'استشارة أخرى'].map(x => `<option>${x}</option>`).join('')}</select><div class="err" role="alert">اختر قيمة</div></div>
</div>
<div class="field"><label for="r-msg">تفاصيل الطلب</label><textarea id="r-msg" name="msg" placeholder="اشرح لنا الخدمة أو المشكلة التي تحتاج إلى مساعدة بشأنها"></textarea></div>
<button class="btn btn--primary" type="submit" style="align-self:center;min-width:240px">إرسال طلب الاستشارة</button>
<p class="form-ok" role="status" hidden>جهّزنا طلبك وفتحنا واتساب لإرساله إلينا. أكمل الإرسال من هناك وسنتواصل معك.</p>
<p class="muted">تُستخدم البيانات التي تقدمها للتواصل معك بشأن طلبك، وفق سياسة الخصوصية المعتمدة لدى الشركة.</p></form></div>`;

C.Footer = () => {
  const col = (t, items) => `<div><h3>${t}</h3><ul>${items.map(([x, h]) => `<li><a href="${h}">${x}</a></li>`).join('')}</ul></div>`;
  return `<footer class="footer"><div class="container"><div class="footer__grid footer__grid--real">
<div class="footer__about"><img class="footer__logo" src="logo.png" alt="توضيح المعرفة لخدمات الأعمال" width="150" height="50"><h3>شركة توضيح المعرفة لخدمات الأعمال</h3><p>شركة سعودية تقدم خدمات الأعمال والإجراءات الحكومية للمنشآت ورواد الأعمال والمستثمرين.</p><p>نساعد عملاءنا في خدمات التأسيس والتراخيص والموارد البشرية ومتابعة المنصات الحكومية، عبر حلول منظمة تناسب احتياجات المنشآت.</p><p class="slogan">أعمالك تستحق وقتك.. وإجراءاتها علينا.</p></div>
${col('خدماتنا', [['تأسيس الشركات والمنشآت', 'incorporate.html'], ['خدمات وزارة التجارة', 'entity.html'], ['خدمات وزارة الاستثمار', 'entity.html'], ['خدمات منصة قوى', 'platform.html'], ['خدمات التأمينات الاجتماعية', 'entity.html'], ['خدمات منصة بلدي', 'platform.html'], ['خدمات الزكاة والضريبة', 'entity.html'], ['إدارة المنصات الحكومية', 'packages.html'], ['الاستشارات وخدمات الأعمال', 'consult.html']])}
${col('روابط سريعة', [['الرئيسية', 'index.html'], ['من نحن', 'about.html'], ['جميع الخدمات', 'services.html'], ['باقات إدارة المنصات الحكومية', 'packages.html'], ['مركز المعرفة', 'blog.html'], ['الأسئلة الشائعة', 'index.html#faq'], ['تواصل معنا', 'contact.html'], ['سياسة الخصوصية', 'privacy.html'], ['الشروط والأحكام', 'terms.html'], ['سياسة الاسترداد', 'refund.html']])}
<div><h3>تواصل معنا</h3><ul class="footer__contact"><li>${C.ico('bld', 18)}شركة توضيح المعرفة لخدمات الأعمال</li><li>${C.ico('pin', 18)}المقر: حائل، المملكة العربية السعودية</li><li>${C.ico('grid', 18)}نطاق العمل: جميع مناطق المملكة العربية السعودية</li><li>${C.ico('chat', 18)}<a href="${WA}" dir="ltr">0535448100</a></li><li>${C.ico('bld', 18)}السجل التجاري الموحد: <span dir="ltr">7049437895</span></li></ul>${wab('تواصل معنا عبر واتساب', 'btn--wa')}</div></div>
<div class="footer__bar"><span>© 2026 شركة توضيح المعرفة لخدمات الأعمال. جميع الحقوق محفوظة.</span><span class="logos-note">شعارات الجهات والمنصات الحكومية تعود لأصحابها، وتُعرض للدلالة على الخدمات فقط، ولا تعني تبعية توضيح المعرفة لها أو تمثيلها.</span></div></div></footer>
<div class="float"><a class="wa" href="${WA}" target="_blank" rel="noopener" aria-label="تواصل عبر واتساب">${C.ico('chat', 22)}</a><i aria-hidden="true"></i></div><button class="totop" aria-label="للأعلى"></button><div class="mobile-cta">${wab('اطلب عبر واتساب')}<a class="mobile-cta__call" href="tel:+966535448100" aria-label="اتصال">${C.ico('phone', 22)}</a></div>`;
};

C.HeroBanner = () => `<section class="hero-banner" aria-label="مقدمة"><img src="hero-banner.jpg" width="2003" height="785" alt="خدمات منشأتك الحكومية في مكان واحد. أعمالك تستحق وقتك.. وإجراءاتها علينا"><h1 class="sr-only">خدمات منشأتك الحكومية في مكان واحد</h1><a class="hero-banner__hit hero-banner__hit--wa" href="${WA}" target="_blank" rel="noopener" aria-label="اطلب خدمتك الآن عبر واتساب"></a><a class="hero-banner__hit hero-banner__hit--svc" href="services.html" aria-label="استعرض خدماتنا"></a></section>`;
C.Hero = () => `<section class="hero hero--real"><div class="hero__photo" role="img" aria-label="مكتب أعمال مع أفق مدينة الرياض"></div><div class="hero__wrap"><div class="hero__content">
<div class="hero__chip"><span class="hero__chip-ico">${C.ico('clock', 22)}</span>أعمالك تستحق وقتك.. وإجراءاتها علينا</div>
<h1>خدمات منشأتك الحكومية<br><span class="hl">في مكان واحد</span></h1>
<p>من تأسيس الشركات وإصدار التراخيص إلى إدارة شؤون الموظفين والمنصات الحكومية، نساعدك في إنجاز إجراءات منشأتك ومتابعتها بخطوات واضحة ومنظمة.</p>
<div class="hero__actions"><a class="btn btn--primary" href="${WA}" target="_blank" rel="noopener">اطلب خدمتك الآن ${C.ico('arr', 18)}</a><a class="btn btn--outline" href="services.html">استعرض خدماتنا</a></div>
<ul class="hero__badges hero__badges--real"><li>${C.ico('calchk', 22)}متابعة منظمة للإجراءات</li><li>${C.ico('shield', 22)}خصوصية بيانات المنشأة</li><li>${C.ico('pin', 22)}نخدم جميع مناطق المملكة</li></ul>
</div></div></section>`;
C.StatisticsPanel = () => `<div class="container"><div class="stats stats--real" role="list">${[['cal', '+6', 'سنوات من الخبرة'], ['users', '+250', 'عميل خدمناهم'], ['layers', '+25', 'خدمة أعمال وحلول حكومية'], ['star', '95%', 'نسبة رضا العملاء']].map(([i, n, l]) => `<div class="stats__item" role="listitem"><span class="stats__ico">${C.ico(i, 24)}</span><div><div class="stats__n" dir="ltr">${n}</div><div class="stats__l">${l}</div></div></div>`).join('')}</div></div>`;

/* ---- services directory / entity / service detail (data.js from the services guide) ---- */
const qp = k => new URLSearchParams(location.search).get(k);
const tagCls = t => t ? `<span class="tag">${t}</span>` : '';
const waTxt = s => `${WA}?text=${encodeURIComponent(s)}`;
const entHref = i => `entity.html?e=${i}`;
const svcHref = i => `service-detail.html?s=${i}`;
const entIdx = pre => { const i = ENT.findIndex(e => e.n.startsWith(pre)); return i < 0 ? 0 : i; };
/* Official logos (flat files lg-*). Only grade A/B logos from the supplied pack; null = no verified logo yet (icon shown). dark:true = white logo, needs dark tile. */
const LG = { hrsd: 'lg-hrsd.svg', misa: 'lg-misa.svg', momah: 'lg-momah.svg', mim: 'lg-mim.png', mofa: 'lg-mofa.svg', mot: 'lg-mot.svg', zatca: 'lg-zatca.svg', balady: 'lg-balady.svg', najiz: 'lg-najiz.svg', hrdf: 'lg-hrdf.svg', spl: 'lg-spl.svg', saip: 'lg-saip.svg', business: 'lg-business.svg', muqeem: 'lg-muqeem.png', moc: 'lg-moc.png', gosi: 'lg-gosi.png' };
const ENT_LOGO = ['moc', 'hrsd', 'mim', 'balady', 'gosi', 'zatca', 'muqeem', 'misa', null, 'hrdf', null, 'najiz', 'mofa', 'mot', 'saip', 'spl'];
const GOV_LOGO = ['moc', 'hrsd', 'misa', 'momah', 'gosi', 'zatca', 'muqeem', 'mofa', 'mim', 'saip'];
const logoTile = (k, alt) => k ? `<span class="logo-tile${k === 'business' ? ' logo-tile--dark' : ''}"><img src="${LG[k]}" alt="شعار ${alt}" loading="lazy"></span>` : '';
const GOV_MAP = ['وزارة التجارة', 'وزارة الموارد البشرية', 'وزارة الاستثمار', 'وزارة البلديات', 'المؤسسة العامة للتأمينات', 'هيئة الزكاة', 'وزارة الداخلية', 'وزارة الخارجية', 'وزارة الصناعة', 'الهيئة السعودية للملكية'];
C.GovCard = ([t, d, b = 'عرض الخدمات'], i) => `<a class="card card--real card--gov" href="${entHref(entIdx(GOV_MAP[i]))}">${logoTile(GOV_LOGO[i], t) || `<span class="ico">${C.ico('bld')}</span>`}<h3>${t}</h3><p>${d}</p><span class="more">${b} ${C.ico('arr', 18)}</span></a>`;

C.PHeadReal = (title, sub, crumbs, logo) => `<section class="phead phead--real"><div class="container">${logo ? logoTile(logo, title).replace('logo-tile', 'logo-tile phead__logo') : ''}<nav class="crumb crumb--real" aria-label="مسار الصفحة">${crumbs.map(([t, h]) => h ? `<a href="${h}">${t}</a><span>/</span>` : `<span>${t}</span>`).join('')}</nav><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div></section>`;
C.SvcCard = (s, i, showEnt = true) => `<a class="card card--real card--svc" href="${svcHref(i)}" data-e="${s.e}" data-q="${(s.n + ' ' + s.d + ' ' + ENT[s.e].n).replace(/"/g, '')}">${tagCls(s.t)}<h3>${s.n}</h3>${showEnt ? `<div class="svc__ent">${ENT[s.e].n}</div>` : ''}<p>${s.d}</p><span class="more">تفاصيل الخدمة ${C.ico('arr', 18)}</span></a>`;
C.Side = (title, text, msg) => `<aside class="sidebar"><div class="card card--real"><h3>${title}</h3><p>${text}</p>${wab('اطلب الخدمة عبر واتساب').replace(WA, waTxt(msg))}<div class="side__phone">${C.ico('chat', 18)}<span dir="ltr">0535448100</span></div></div></aside>`;

REAL_T.directory = () => [
  C.PHeadReal('دليل الخدمات الحكومية للمنشآت', `${SVC.length} خدمة في ${ENT.length} جهة ومنصة حكومية. اختر الخدمة التي تحتاجها، ونوضح لك متطلباتها ونتابع إجراءاتها.`, [['الرئيسية', 'index.html'], ['جميع الخدمات']]),
  C.Section(`<div class="dirbar"><input class="search search--wide" id="svc-q" type="search" placeholder="ابحث عن خدمة أو جهة" aria-label="بحث في الخدمات"><div class="filters" role="group" aria-label="الجهات"><button class="chip" aria-pressed="true" data-ent="all">الكل (${SVC.length})</button>${ENT.map((e, i) => `<button class="chip" aria-pressed="false" data-ent="${i}">${e.n} (${SVC.filter(s => s.e === i).length})</button>`).join('')}</div></div><p class="muted" id="svc-count" role="status"></p><div class="grid grid--3 grid--svcs" id="svc-grid">${SVC.map((s, i) => C.SvcCard(s, i)).join('')}</div><p class="empty" id="svc-empty" hidden>لا توجد خدمة مطابقة. اكتب لنا عبر واتساب وسنساعدك في تحديد الخدمة.</p>`).replace('class="container"', 'class="container container--dir"'),
  C.Section(C.CTAReal(), 'sec--flush-top')
];

REAL_T.entity = () => {
  const ei = Math.min(+qp('e') || 0, ENT.length - 1), e = ENT[ei], list = SVC.map((s, i) => [s, i]).filter(([s]) => s.e === ei);
  document.title = `${e.n} | توضيح المعرفة لخدمات الأعمال`; setDesc(`خدمات ${e.n} التي نساعدك في معرفة متطلباتها وتجهيز إجراءاتها ومتابعة تنفيذها عبر القنوات الرسمية.`);
  return [C.PHeadReal(`خدمات ${e.n}`, `${list.length} ${list.length > 10 ? 'خدمة' : 'خدمات'} نساعدك في معرفة متطلباتها وتجهيز إجراءاتها ومتابعة تنفيذها.`, [['الرئيسية', 'index.html'], ['جميع الخدمات', 'services.html'], [e.n]], ENT_LOGO[ei]),
    C.Section(`<div class="detail"><div><input class="search search--wide" id="svc-q" type="search" placeholder="ابحث عن خدمة في ${e.n}" aria-label="بحث"><p class="muted" id="svc-count" role="status"></p><div class="grid grid--svc grid--svcs" id="svc-grid">${list.map(([s, i]) => C.SvcCard(s, i, false)).join('')}</div><p class="empty" id="svc-empty" hidden>لا توجد خدمة مطابقة لبحثك.</p></div>${C.Side('تحتاج خدمة من ' + e.n + '؟', 'تواصل مع فريق توضيح المعرفة وحدد الإجراء الذي تحتاجه، وسنساعدك في مراجعة المتطلبات والمستندات اللازمة.', `أرغب في الاستفسار عن خدمات ${e.n}`)}</div>`).replace('class="container"', 'class="container container--wide"'),
    C.Section(C.CTAReal(), 'sec--flush-top')];
};


const reqBlock = i => {
  const r = (window.REQ || {})[i];
  if (!r) return `<div class="card card--real" style="padding:24px;margin-top:16px"><h2 class="h2s">المتطلبات والمستندات</h2><p class="muted">نراجع هذه الخدمة مع الجهة المختصة ونوافيك بمتطلباتها ومستنداتها المحدّثة قبل البدء. تواصل معنا لنوضحها لك الآن.</p></div>`;
  const ul = a => `<ul class="ticks">${a.map(x => `<li>${C.ico('chk', 20)}${x}</li>`).join('')}</ul>`;
  const rows = [['قناة التقديم', r.ch], ['مدة الإنجاز', r.time]].filter(x => x[1]).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  const docsTxt = r.docs.length ? ul(r.docs) : `<p>${r.docsNote || 'لم تنشر الجهة قائمة بمستندات محددة لهذه الخدمة، ونؤكدها لك قبل التنفيذ.'}</p>`;
  return `<div class="card card--real" style="padding:24px;margin-top:16px"><h2 class="h2s">المتطلبات والخطوات</h2><dl class="dl">${rows}</dl>${(r.incl || []).length ? `<h3 class="h3s">ما تشمله الخدمة</h3>${ul(r.incl)}` : ''}${r.cond.length ? `<h3 class="h3s">الشروط</h3>${ul(r.cond)}` : ''}<h3 class="h3s">المستندات المطلوبة</h3>${docsTxt}${r.steps.length ? `<h3 class="h3s">خطوات الخدمة</h3><ol class="art-ol">${r.steps.map(x => `<li>${x}</li>`).join('')}</ol>` : ''}<p class="muted" style="margin-top:12px">المصدر: ${r.src}. قد تتغير المتطلبات، ونراجعها قبل تنفيذ طلبك.</p></div>`;
};
REAL_T.detail = () => {
  const i = Math.min(+qp('s') || 0, SVC.length - 1), s = SVC[i], e = ENT[s.e], rel = SVC.map((x, k) => [x, k]).filter(([x, k]) => x.e === s.e && k !== i).slice(0, 6);
  document.title = `${s.n} | توضيح المعرفة لخدمات الأعمال`;
  return [C.PHeadReal(s.n, s.d, [['الرئيسية', 'index.html'], ['جميع الخدمات', 'services.html'], [e.n, entHref(s.e)], [s.n]]),
    C.Section(`<div class="detail"><div>${s.t ? `<p>${tagCls(s.t)}</p>` : ''}<div class="card card--real" style="padding:24px"><h2 class="h2s">عن الخدمة</h2><p>${s.d}</p><dl class="dl"><dt>الجهة</dt><dd><a href="${entHref(s.e)}">${e.n}</a></dd></dl></div>
      ${reqBlock(i)}<div class="card card--real" style="padding:24px;margin-top:16px"><h2 class="h2s">كيف نساعدك في هذه الخدمة؟</h2><ul class="ticks">${['نراجع احتياج منشأتك ونحدد الإجراء المناسب', 'نوضح لك المتطلبات والمستندات المطلوبة قبل البدء', 'نتابع الطلب عبر القنوات الرسمية ونبلغك بالنتيجة'].map(x => `<li>${C.ico('chk', 20)}${x}</li>`).join('')}</ul><p class="muted" style="margin-top:12px">تختلف المتطلبات والمدة بحسب نشاط المنشأة وشروط الجهة. نوضح لك التفاصيل بعد مراجعة طلبك.</p></div>
      ${rel.length ? `<h2 class="h2s" style="margin:32px 0 14px">خدمات أخرى من ${e.n}</h2><div class="grid grid--svc">${rel.map(([x, k]) => C.SvcCard(x, k, false)).join('')}</div>` : ''}</div>${C.Side('اطلب هذه الخدمة', 'أرسل لنا طلبك عبر واتساب وسنراجع احتياجك ونوضح لك الخطوات.', `أرغب في خدمة: ${s.n} (${e.n})`)}</div>`).replace('class="container"', 'class="container container--wide"'),
    C.Section(C.CTAReal(), 'sec--flush-top')];
};
REAL_T.platform = REAL_T.entity;

window.REAL_BIND = () => {
  const grid = document.getElementById('svc-grid'); if (!grid) return;
  const q = document.getElementById('svc-q'), cnt = document.getElementById('svc-count'), none = document.getElementById('svc-empty'), cards = [...grid.children];
  let ent = 'all';
  const run = () => { const t = q.value.trim(); let n = 0; cards.forEach(c => { const ok = (ent === 'all' || c.dataset.e === ent) && (!t || c.dataset.q.includes(t)); c.hidden = !ok; if (ok) n++; }); cnt.textContent = `عرض ${n} من ${cards.length} خدمة`; none.hidden = n > 0; };
  q.addEventListener('input', run);
  document.querySelectorAll('[data-ent]').forEach(b => b.addEventListener('click', () => { ent = b.dataset.ent; document.querySelectorAll('[data-ent]').forEach(x => x.setAttribute('aria-pressed', x === b)); run(); }));
  run();
};

/* ---- articles (articles.js) ---- */
const artHref = a => `article.html?a=${a.id}`;
C.ArtCard = a => { const live = !!a.body; const inner = `<div class="ph"></div><div class="body"><div class="eyebrow">${a.cat}</div><h3>${a.t}</h3><p>${a.d}</p>${live ? `<span class="more">اقرأ المقال ${C.ico('arr', 18)}</span>` : '<span class="soon">قريباً</span>'}</div>`; return live ? `<a class="card card--article card--real card--art" href="${artHref(a)}" data-cat="${a.cat}">${inner}</a>` : `<div class="card card--article card--real card--art card--soon" data-cat="${a.cat}">${inner}</div>`; };
C.ArticlesReal = () => `<div class="grid grid--3">${ART.slice(0, 3).map(C.ArtCard).join('')}</div><div style="text-align:center;margin-top:28px"><a class="btn btn--outline" href="blog.html">استعرض جميع المقالات</a></div>`;
REAL_T.blog = () => { const cats = [...new Set(ART.map(a => a.cat))]; return [
  C.PHeadReal('مركز المعرفة', 'معلومات تساعدك في إدارة أعمال منشأتك: إجراءات الخدمات الحكومية، والتحديثات التنظيمية، وموضوعات تهم أصحاب المنشآت ورواد الأعمال والمستثمرين.', [['الرئيسية', 'index.html'], ['مركز المعرفة']]),
  C.Section(`<div class="filters" role="group" aria-label="التصنيفات"><button class="chip" aria-pressed="true" data-cat="all">الكل</button>${cats.map(c => `<button class="chip" aria-pressed="false" data-cat="${c}">${c}</button>`).join('')}</div><div class="grid grid--3 grid--arts" id="art-grid">${ART.map(C.ArtCard).join('')}</div>`).replace('class="container"', 'class="container container--dir"'),
  C.Section(C.CTAReal(), 'sec--flush-top')]; };
REAL_T.article = () => {
  const a = ART.find(x => x.id === qp('a')) || ART.find(x => x.body) || ART[0];
  document.title = `${a.t} | توضيح المعرفة لخدمات الأعمال`; setDesc(a.d);
  const rel = ART.filter(x => x !== a && x.body).slice(0, 3);
  const body = a.body ? a.body.map(([k, v]) => k === 'h' ? `<h2 class="h2s">${v}</h2>` : k === 'h3' ? `<h3 class="h3s">${v}</h3>` : k === 'cta' ? `<p class="art-cta">${v}</p>` : k === 'ol' ? `<ol class="art-ol">${v.map(x => `<li>${x}</li>`).join('')}</ol>` : k === 'ul' ? `<ul class="art-ul">${v.map(x => `<li>${x}</li>`).join('')}</ul>` : `<p>${v}</p>`).join('') : `<p>هذا المقال قيد الإعداد وسيُنشر قريباً.</p>`;
  return [C.PHeadReal(a.t, a.d, [['الرئيسية', 'index.html'], ['مركز المعرفة', 'blog.html'], [a.cat]]),
    C.Section(`<div class="detail detail--article"><article class="art-body">${a.date ? `<div class="muted">${a.date}</div>` : ''}${body}${a.src && a.src.length ? `<h2 class="h2s">المصادر</h2><ul class="art-ul">${a.src.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n}</a></li>`).join('')}</ul>` : ''}<p class="art-note">المعلومات الواردة في هذا المقال للتعريف العام، وتختلف المتطلبات بحسب نشاط المنشأة وتحديثات الجهة المختصة. للتأكد من وضع منشأتك تواصل معنا.</p></article>${C.Side('هل تحتاج مساعدة في إجراءات منشأتك؟', 'تواصل مع فريق توضيح المعرفة وسنوضح لك المتطلبات والخطوات المناسبة.', `أرغب في الاستفسار بخصوص: ${a.t}`)}</div>`).replace('class="container"', 'class="container container--wide"'),
    rel.length ? C.Section(C.SH('مركز المعرفة', 'مقالات ذات صلة') + `<div class="grid grid--3">${rel.map(C.ArtCard).join('')}</div>`, 'sec--alt') : '',
    C.Section(C.CTAReal(), 'sec--flush-top')];
};
const _rb = window.REAL_BIND;
window.REAL_BIND = () => { _rb && _rb(); const g = document.getElementById('art-grid'); if (!g) return; document.querySelectorAll('[data-cat]').forEach(b => { if (b.tagName !== 'BUTTON') return; b.addEventListener('click', () => { document.querySelectorAll('button[data-cat]').forEach(x => x.setAttribute('aria-pressed', x === b)); [...g.children].forEach(c => c.hidden = b.dataset.cat !== 'all' && c.dataset.cat !== b.dataset.cat); }); }); };

/* Packages page */
C.PkgCard = p => `<article class="card card--real pkg${p.feat ? ' pkg--feat' : ''}">${p.feat ? '<span class="pkg__badge">الأكثر طلباً</span>' : ''}<h3>${p.n}</h3><p class="pkg__tag">${p.aud}</p><div class="pkg__price"><b>${p.price}</b><span>ريال شهرياً</span></div><div class="pkg__meta"><span>${p.plat} منصات</span><span>${p.svc} خدمة</span></div><p>${p.d}</p><a class="btn ${p.feat ? 'btn--primary' : 'btn--outline'}" href="${WA}?text=${encodeURIComponent(p.wa)}" target="_blank" rel="noopener">${p.btn}</a><div class="pkg__svc"><b>الخدمات المشمولة</b>${p.base ? `<p class="pkg__base">${p.base}</p>` : ''}${p.g.map(([t, l]) => `<details class="acc acc--pkg"><summary>${t}</summary><div class="in"><ul class="art-ul pkg__ul">${l.map(x => `<li>${x}</li>`).join('')}</ul></div></details>`).join('')}</div></article>`;
const PKG_FAQ = [
  ['ما مدة الباقة؟', 'الباقات شهرية بعقد سنوي.'],
  ['هل أستطيع الانتقال إلى باقة أعلى؟', 'نعم، يمكنك الانتقال إلى باقة أعلى متى احتجت.'],
  ['هل رسوم الجهات الحكومية داخلة في السعر؟', 'لا، تُسدَّد الرسوم التي تفرضها الجهات الحكومية وفق ما تعلنه كل جهة.'],
  ['هل أحتاج إلى تفويض؟', 'نعم، نعمل بتفويضك النظامي وعبر القنوات الرسمية فقط.'],
  ['ماذا لو احتجت خدمة غير مذكورة في الباقة؟', 'تواصل معنا ونوضح لك إمكانية إضافتها أو طلبها منفصلة.'],
  ['كيف أبدأ؟', 'تواصل معنا عبر واتساب، نحدد معك الباقة المناسبة ونبدأ.']
];
REAL_T.packages = () => {
  document.title = 'باقات الخدمات الحكومية | توضيح المعرفة لخدمات الأعمال';
  const ck = v => v === true ? '✓' : v || '—';
  const rows = [['السعر شهرياً', '2,250', '3,400', '5,000'], ['عدد المنصات', 7, 9, 12], ['عدد الخدمات', 30, 54, 81], ['قوى والتأمينات والزكاة', true, true, true], ['الرخص التجارية (بلدي)', 0, true, true], ['حماية الأجور (مدد)', 0, true, true], ['الشهادات الصحية وتصاريح النشاط', 0, 0, true], ['الاستثمار وصندوق الموارد البشرية', 0, 0, true], ['الاستشارات الحكومية', 0, 0, '30 استشارة']];
  return [
  C.PHeadReal('باقات الخدمات الحكومية', 'ثلاث باقات شهرية تتولى إجراءات منصاتك الحكومية ومتابعتها، لتتفرغ لإدارة نشاطك. اختر ما يناسب حجم منشأتك.', [['الرئيسية', 'index.html'], ['الباقات']]),
  C.Section(`<div class="split split--about"><div>${C.SH('', 'منصات حكومية متعددة.. ومتابعة واحدة', '')}<p>قوى والتأمينات ووزارة التجارة وبلدي وأبشر والزكاة والضريبة، لكل منصة إجراءاتها ومواعيدها. في توضيح المعرفة نتولى هذه المتابعة عنك: نجهّز الطلبات ونقدّمها عبر القنوات الرسمية، ونتابعها حتى صدور النتيجة، وننبّهك بالتجديدات والمواعيد المهمة قبل أن تفوت.</p></div><ul class="ticks">${['متابعة شهرية منتظمة لإجراءات منشأتك.', 'نعمل نيابةً عنك وفق تفويضك، وعبر القنوات الرسمية فقط.', 'تواصل مباشر عبر واتساب مع فريق يعرف منشأتك.', 'باقة تكبر معك: انتقل إلى باقة أعلى متى احتجت.'].map(x => `<li>${C.ico('chk', 20)}${x}</li>`).join('')}</ul></div>`),
  C.Section(`${C.SH('اختر باقتك', 'ثلاث باقات تناسب حجم منشأتك', 'الأسعار شهرية بعقد سنوي، ولا تشمل الرسوم التي تفرضها الجهات الحكومية نفسها.')}<div class="grid grid--3 grid--pkg">${PKG.map(C.PkgCard).join('')}</div>`, 'sec--alt'),
  C.Section(`${C.SH('المقارنة', 'الفرق بين الباقات', '')}<div class="tbl-wrap"><table class="tbl"><thead><tr><th scope="col">الميزة</th><th scope="col">الفضية</th><th scope="col">الذهبية</th><th scope="col">البلاتينية</th></tr></thead><tbody>${rows.map(([k, a, b, c]) => `<tr><th scope="row" style="background:#fff">${k}</th><td>${ck(a)}</td><td>${ck(b)}</td><td>${ck(c)}</td></tr>`).join('')}</tbody></table></div>`),
  C.Section(`<div class="split split--about"><div>${C.SH('', 'كيف أختار باقتي؟', '')}<ul class="ticks">${['منشأة جديدة أو صغيرة وتحتاج الأساسيات: الفضية.', 'منشأة تنمو ولديها رخص تجارية وموظفون: الذهبية.', 'شركة كبيرة بإجراءات متعددة واحتياج استشاري: البلاتينية.', 'لست متأكداً؟ أخبرنا بنشاطك وعدد موظفيك عبر واتساب، ونرشّح لك الأنسب.'].map(x => `<li>${C.ico('chk', 20)}${x}</li>`).join('')}</ul></div><aside class="note-card note-card--about"><h3>ما الذي لا تشمله الباقات؟</h3><p>الرسوم التي تفرضها الجهات الحكومية، فهي تُسدَّد وفق ما تعلنه كل جهة. والخدمات خارج القوائم أعلاه، ويمكن طلبها منفصلة. ولا نضمن قبول أي طلب أو سرعة صدوره، فالقرار للجهة المختصة. ولا ننفّذ شيئاً إلا بتفويضك وموافقتك.</p></aside></div>`, 'sec--alt'),
  C.Section(`${C.SH('الأسئلة الشائعة', 'إجابات عن الباقات', '')}<div class="faq faq--side"><div>${PKG_FAQ.map(([q, a]) => `<details class="acc"><summary>${q}</summary><div class="in"><p>${a}</p></div></details>`).join('')}</div><aside class="card card--real faq__aside"><h3>لم تجد إجابة عن استفسارك؟</h3><p>اكتب لنا عن حالتك، وسنوضح لك الباقة المناسبة.</p>${wab('اسألنا عبر واتساب')}</aside></div>`),
  C.Section(C.CTAReal(), 'sec--flush-top')
  ];
};

/* About + Contact pages */
REAL_T.about = () => [
  C.PHeadReal('من نحن', 'شركة سعودية متخصصة في خدمات الأعمال، تساعد المنشآت على فهم إجراءاتها الحكومية وتنظيمها ومتابعتها.', [['الرئيسية', 'index.html'], ['من نحن']]),
  C.Section(`<div class="split split--about"><div>${C.SH('', 'توضيح المعرفة لخدمات الأعمال', '')}<p>توضيح المعرفة لخدمات الأعمال شركة سعودية مقرها حائل، تقدم خدمات الأعمال وتساعد المنشآت والشركات ورواد الأعمال والمستثمرين في إنجاز الإجراءات المرتبطة بأعمالهم ومتابعتها.</p><p>نحوّل الإجراءات الحكومية المتعددة إلى خطوات واضحة: نوضح المتطلبات، ونجهّز البيانات والمستندات، ونتابع الطلبات عبر القنوات الرسمية حتى صدور النتيجة، لتتفرغ أنت لإدارة نشاطك.</p><ul class="ticks">${['تأسيس الشركات والمنشآت وإصدار السجلات والتراخيص', 'متابعة المنصات الحكومية وخدمات الموظفين', 'استشارات تنظيمية وإدارية لأصحاب الأعمال'].map(x => `<li>${C.ico('chk', 18)}${x}</li>`).join('')}</ul></div><aside class="note-card note-card--about"><h3>شركة خاصة مستقلة</h3><p>توضيح المعرفة جهة خاصة مستقلة، وليست جهة حكومية ولا تابعة لأي منها. نعمل وفق التفويض والصلاحيات النظامية التي يمنحها لنا العميل، ونستخدم القنوات الرسمية في تنفيذ الطلبات.</p></aside></div>`),
  C.Section(`${C.SH('رسالتنا ورؤيتنا', 'ما الذي نعمل من أجله', '')}<div class="grid grid--3">${[
    ['target', 'رؤيتنا', 'أن نكون الشريك الذي يعتمد عليه أصحاب الأعمال في السعودية لتنظيم إجراءاتهم الحكومية ومتابعتها بوضوح وثقة.'],
    ['shield', 'رسالتنا', 'تبسيط الإجراءات على المنشآت بتقديم خدمات دقيقة وشفافة، وتوضيح المتطلبات والخطوات، ومتابعة الطلبات حتى اكتمالها.'],
    ['users', 'لمن نعمل', 'رواد الأعمال، والمنشآت الصغيرة والمتوسطة، والشركات القائمة، والمستثمرون الراغبون في بدء نشاطهم أو إدارته بالمملكة.']
  ].map(([i, t, d]) => `<div class="card card--feature card--real"><span class="ico">${C.ico(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`, 'sec--alt'),
  C.Section(`${C.SH('قيمنا', 'كيف نعمل معك', '')}<div class="grid grid--4 feats" style="gap:var(--gap-feat)">${[
    ['chk', 'الوضوح', 'نشرح الخدمة ومتطلباتها وخطواتها قبل البدء، دون غموض.'],
    ['shield', 'الأمانة والخصوصية', 'نتعامل مع بيانات منشأتك ومستنداتها بسرية، ولا نستخدمها إلا في تنفيذ طلبك.'],
    ['doc', 'الدقة والمصادر الرسمية', 'نعتمد في المعلومات على المصادر الرسمية، ونُنبّه عند الحاجة إلى التحقق من آخر التحديثات.'],
    ['clock', 'المتابعة والالتزام', 'نتابع الطلب بعد تقديمه ونبلغك بحالته وبأي ملاحظات تصدر من الجهة المختصة.']
  ].map(([i, t, d]) => `<div class="card card--feature card--real"><span class="ico">${C.ico(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`),
  C.Section(`${C.SH('آلية العمل', 'من الطلب إلى النتيجة', '')}${C.StepsReal()}`, 'sec--alt'),
  C.Section(`<div class="split split--about"><div>${C.SH('', 'نطاق خدمتنا', '')}<p>مقرنا في حائل، ونقدم خدماتنا لجميع مناطق المملكة العربية السعودية عن بُعد، عبر واتساب والقنوات الإلكترونية الرسمية، دون حاجة إلى زيارة مقرنا.</p></div><aside class="note-card note-card--about"><h3>ما نلتزم به</h3><p>لا نضمن قبول أي طلب أو سرعة صدوره؛ فالقرار يخضع للأنظمة والجهات المختصة. ونوضح لك مسبقاً ما ندخل في نطاق الخدمة وما لا ندخل فيه.</p></aside></div>`),
  C.Section(C.CTAReal(), 'sec--flush-top')
];

REAL_T.contact = () => [
  C.PHeadReal('تواصل معنا', 'أخبرنا بالخدمة التي تحتاجها، وسنوضح لك المتطلبات وطريقة البدء.', [['الرئيسية', 'index.html'], ['تواصل معنا']]),
  C.Section(`<div class="contact contact--real"><div class="contact__info">${[
    ['chat', 'واتساب (الأسرع)', `<a href="${WA}" target="_blank" rel="noopener">0535448100</a>`, 'للاستفسار وطلب الخدمات'],
    ['pin', 'المقر', 'حائل — طريق الملك فيصل', 'نخدم جميع مناطق المملكة عن بُعد'],
    ['mail', 'البريد الإلكتروني', '<a href="mailto:kogs2025@gmail.com">kogs2025@gmail.com</a>', 'للمراسلات الرسمية والمستندات'],
    ['phone', 'الجوال', '<a href="tel:+966535448100" dir="ltr">+966 53 544 8100</a>', '']
  ].map(([i, t, v, n]) => `<div class="card card--real contact-card"><span class="ico">${C.ico(i)}</span><div><h3>${t}</h3><p class="contact-card__v">${v}</p>${n ? `<p class="muted">${n}</p>` : ''}</div></div>`).join('')}${wab('ابدأ المحادثة عبر واتساب')}</div><div>${C.RequestForm()}</div></div>`),
  C.Section(C.CTAReal(), 'sec--flush-top')
];

/* ===== التأسيس ===== */
REAL_T.incorporate = () => {
  document.title = 'تأسيس الشركات والمنشآت | توضيح المعرفة لخدمات الأعمال';
  const cards = a => `<div class="grid grid--svc">${a.map(k => C.SvcCard(SVC[k], k, true)).join('')}</div>`;
  return [
  C.PHeadReal('تأسيس الشركات والمنشآت', 'من اختيار الكيان وحجز الاسم إلى السجل التجاري والتراخيص، نوضح لك الخطوات ونتابع الإجراءات عبر القنوات الرسمية.', [['الرئيسية', 'index.html'], ['تأسيس الشركات والمنشآت']]),
  C.Section(`<div class="split split--about"><div>${C.SH('', 'ابدأ نشاطك بخطوات واضحة', '')}<p>تأسيس منشأة جديدة يمر بعدة جهات وإجراءات مترابطة، ويختلف مساره بحسب نوع الكيان القانوني ونشاطه. نساعدك في تحديد المسار المناسب، وتجهيز البيانات والمستندات، وتقديم الطلبات ومتابعتها حتى صدور النتيجة.</p><ul class="ticks">${['حجز الاسم التجاري وإصدار السجل التجاري', 'تأسيس الشركات بمختلف أنواعها', 'التراخيص المرتبطة بالنشاط (بلدية، صناعية، استثمارية)', 'التسجيل لدى الجهات بعد التأسيس'].map(x => `<li>${C.ico('chk', 20)}${x}</li>`).join('')}</ul></div>
    <div class="note-card note-card--about"><h3>قبل أن تبدأ</h3><p>تختلف المتطلبات والمدة بحسب نوع الكيان والنشاط والجهة المختصة، وتُحدَّد وفق الأنظمة المعمول بها وقت التقديم. نوضح لك ما يخص منشأتك قبل البدء بالتنفيذ.</p></div></div>`),
  C.Section(`${C.SH('مسارات التأسيس', 'اختر ما يناسب منشأتك', 'حجز الاسم والسجل التجاري وأنواع الشركات.')}${cards([0, 1, 2, 3, 4, 5, 6])}`, 'sec--alt'),
  C.Section(`${C.SH('بعد التأسيس', 'التراخيص والتسجيلات المرتبطة', 'بحسب نشاط المنشأة قد تحتاج إلى واحد أو أكثر مما يلي.')}${cards([58, 70, 71, 73, 118, 34])}`),
  C.Section(`${C.SH('تسلسل عام', 'مراحل التأسيس', 'تسلسل عام يختلف بحسب النشاط والكيان.')}<div class="steps">${[
    ['الكيان والنشاط', 'نحدد الكيان المناسب', 'نراجع نوع النشاط والشركاء والأهداف لاختيار الكيان القانوني المناسب.'],
    ['الاسم والسجل', 'نحجز الاسم ونصدر السجل', 'نحجز الاسم التجاري ونجهز بيانات التأسيس ونتابع إصدار السجل التجاري.'],
    ['التراخيص', 'نستخرج التراخيص المطلوبة', 'نحدد التراخيص المرتبطة بالنشاط ونتابع إصدارها من الجهات المختصة.'],
    ['التسجيلات اللاحقة', 'نكمل تسجيل المنشأة', 'نسجّل المنشأة في المنصات الحكومية اللازمة لبدء التشغيل وإدارة الموظفين.']
  ].map(([l, t, d], i) => `<div class="card card--step card--real"><div class="num">0${i + 1}</div><div class="eyebrow">${l}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`, 'sec--alt'),
  C.Section(C.CTAReal(), 'sec--flush-top')];
};

/* ===== الصفحات القانونية (مسودات للاعتماد) ===== */
const LEGAL = {
  privacy: ['سياسة الخصوصية', 'كيف نتعامل مع بياناتك ومستندات منشأتك.', [
    ['h', 'نطاق السياسة'], ['p', 'تنطبق هذه السياسة على موقع توضيح المعرفة لخدمات الأعمال وعلى البيانات التي تزودنا بها عند التواصل معنا أو طلب خدماتنا.'],
    ['h', 'البيانات التي نجمعها'], ['ul', ['بيانات التواصل: الاسم ورقم الجوال واسم المنشأة.', 'بيانات الطلب: الخدمة المطلوبة وتفاصيلها والمستندات اللازمة لتنفيذها.', 'ما ترسله لنا عبر واتساب أو نموذج الطلب.']],
    ['h', 'كيف نستخدم بياناتك'], ['p', 'نستخدم بياناتك للرد على استفساراتك، ومراجعة طلبك، وتنفيذ الخدمة المتفق عليها ومتابعتها. لا نستخدمها لأي غرض آخر دون موافقتك.'],
    ['h', 'المشاركة مع الغير'], ['p', 'لا نبيع بياناتك. قد تُقدَّم بعض البيانات والمستندات إلى الجهات الحكومية المختصة بالقدر اللازم لتنفيذ طلبك فقط، أو عند وجود التزام نظامي.'],
    ['h', 'حماية البيانات وحفظها'], ['p', 'نتخذ إجراءات معقولة لحماية البيانات والمستندات من الوصول غير المصرح به، ونحتفظ بها للمدة اللازمة لتقديم الخدمة أو للوفاء بالالتزامات النظامية.'],
    ['h', 'حقوقك'], ['p', 'يمكنك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها ما لم يمنع ذلك التزام نظامي، عبر التواصل معنا على واتساب أو البريد الإلكتروني.'],
    ['h', 'التواصل'], ['p', 'لأي استفسار عن الخصوصية: واتساب 0535448100، أو البريد kogs2025@gmail.com.']]],
  terms: ['الشروط والأحكام', 'القواعد التي تحكم استخدام الموقع وطلب خدماتنا.', [
    ['h', 'طبيعة الشركة'], ['p', 'توضيح المعرفة لخدمات الأعمال شركة خاصة مستقلة، وليست جهة حكومية ولا تابعة لأي جهة حكومية. نعمل وفق التفويض والصلاحيات النظامية التي يمنحها لنا العميل، ونستخدم القنوات الرسمية في تنفيذ الطلبات.'],
    ['h', 'المعلومات المنشورة'], ['p', 'المحتوى المنشور في الموقع للتوضيح والإرشاد العام، وقد تتغير المتطلبات والرسوم والمدد بحسب الجهة الحكومية والأنظمة. نوصي بالتحقق منها قبل الاعتماد عليها.'],
    ['h', 'طلب الخدمة'], ['ul', ['يبدأ الطلب بتواصلك معنا وتحديد الخدمة المطلوبة.', 'نوضح لك المتطلبات والمستندات والخطوات قبل بدء التنفيذ.', 'لا نباشر التنفيذ إلا بعد موافقتك.']],
    ['h', 'التزامات العميل'], ['p', 'يلتزم العميل بتقديم بيانات ومستندات صحيحة وكاملة، ويتحمل مسؤولية صحتها. قد يؤدي النقص أو عدم الدقة إلى تأخير الطلب أو رفضه.'],
    ['h', 'حدود المسؤولية'], ['p', 'لا نضمن قبول أي طلب أو سرعة صدوره، فالقرار يخضع للأنظمة والجهات المختصة. ونوضح لك مسبقاً ما ندخل في نطاق الخدمة وما لا ندخل فيه.'],
    ['h', 'الرسوم'], ['p', 'تُوضَّح رسوم خدماتنا قبل البدء. وما تفرضه الجهات الحكومية من رسوم يُحدَّد وفق ما تعلنه الجهة، ويُبيَّن للعميل قبل التنفيذ.'],
    ['h', 'سياسة الاسترداد'], ['p', 'تُطبَّق سياسة الاسترداد المنشورة في صفحتها، وهي جزء لا يتجزأ من هذه الشروط.'],
    ['h', 'التعديل'], ['p', 'قد نحدّث هذه الشروط من وقت لآخر، ويُعدّ استمرارك في استخدام الموقع بعد النشر موافقةً على التحديث.']]],
  refund: ['سياسة الاسترداد', 'متى تُستردّ رسوم الخدمة.', [
    ['h', 'قبل بدء التنفيذ'], ['p', 'إذا سدّد العميل رسوم الخدمة ثم رغب في الإلغاء قبل أن نباشر تنفيذها، تُستردّ له الرسوم المدفوعة.'],
    ['h', 'بعد بدء التنفيذ'], ['p', 'بعد مباشرة التنفيذ تُحتسب الأعمال المنجزة فعلاً، وتُراجَع الرسوم المتبقية بالاتفاق مع العميل.'],
    ['h', 'رسوم الجهات الحكومية'], ['p', 'الرسوم التي سُدّدت فعلاً إلى جهة حكومية تخضع لسياسة تلك الجهة في الاسترداد، ولا نتحكم فيها.'],
    ['h', 'طريقة الطلب والمدة'], ['p', 'يُقدَّم طلب الاسترداد عبر واتساب 0535448100، ونردّ عليك بالإجراء المناسب بعد مراجعة الطلب.']]]
};
const legalPage = k => () => {
  const [t, sub, blocks] = LEGAL[k]; document.title = `${t} | توضيح المعرفة لخدمات الأعمال`;
  const body = blocks.map(([x, v]) => x === 'h' ? `<h2 class="h2s legal__h">${v}</h2>` : x === 'p' ? `<p>${v}</p>` : `<ul class="ticks">${v.map(i => `<li>${C.ico('chk', 20)}${i}</li>`).join('')}</ul>`).join('');
  return [C.PHeadReal(t, sub, [['الرئيسية', 'index.html'], [t]]),
    C.Section(`<div class="legal">${body}<p class="muted legal__d">آخر تحديث: نوفمبر 2026</p></div>`),
    C.Section(C.CTAReal(), 'sec--flush-top')];
};
REAL_T.privacy = legalPage('privacy'); REAL_T.terms = legalPage('terms'); REAL_T.refund = legalPage('refund');

/* ===== صفحة الخدمة التسويقية ===== */
const ENT_ABOUT = [
  'الجهة المنظمة للسجلات التجارية والأسماء التجارية والشركات في المملكة.',
  'الجهة المنظمة لسوق العمل وعلاقة صاحب العمل بالعامل، وتقدم خدماتها عبر منصات مثل قوى ومدد.',
  'الجهة المعنية بتراخيص المصانع والمنشآت الصناعية وما يرتبط بها من إعفاءات وخدمات.',
  'الجهة المعنية بتراخيص الأنشطة التجارية والشهادات الصحية والخدمات البلدية عبر منصة بلدي.',
  'الجهة المعنية بتسجيل المنشآت والمشتركين وإدارة الاشتراكات التأمينية.',
  'الجهة المعنية بالزكاة وضريبة الدخل وضريبة القيمة المضافة والفوترة الإلكترونية.',
  'الجهة التي تقدم خدمات الإقامة والتأشيرات والجوازات للمنشآت عبر أبشر أعمال ومقيم.',
  'الجهة المعنية بتراخيص الاستثمار وتأسيس الشركات الأجنبية وفروعها.',
  'خدمات التأمين الطبي المرتبطة بموظفي المنشأة وفق متطلبات الجهات المختصة.',
  'الجهة الداعمة لتوظيف وتدريب الكوادر الوطنية وبرامج الدعم المرتبطة بها.',
  'الجهة المعنية بتراخيص السلامة والوقاية في المنشآت.',
  'الجهة التي تقدم الخدمات العدلية الإلكترونية.',
  'الجهة التي تقدم الخدمات المرتبطة بالتوثيق والتعاملات الخارجية.',
  'الجهة المعنية بأنشطة النقل والخدمات اللوجستية وتراخيصها.',
  'الجهة المعنية بالعلامات التجارية وحقوق الملكية الفكرية وحمايتها.',
  'الجهة المعنية بالعنوان الوطني وخدمات البريد والشحن.'
];
const SVC_FAQ = s => [
  ['ما الذي أحتاجه لأبدأ؟', 'يكفي أن تتواصل معنا وتذكر اسم الخدمة وبيانات منشأتك الأساسية. نوضح لك بعدها المتطلبات والمستندات الخاصة بحالتك قبل أي إجراء.'],
  ['هل أحتاج لزيارة الجهة الحكومية؟', 'نعمل عن بُعد عبر واتساب والقنوات الإلكترونية الرسمية، وفي أغلب الحالات لا تحتاج إلى زيارة. وإن لزم حضورك لإجراء معين أخبرناك بذلك مسبقاً.'],
  ['كم تستغرق الخدمة؟', 'تختلف المدة بحسب نوع الطلب وحالة المنشأة والجهة المختصة. نوضح لك المدة المتوقعة بعد مراجعة طلبك.'],
  ['كيف أتابع حالة طلبي؟', 'نبلغك بحالة الطلب أولاً بأول عبر واتساب، ونوضح لك أي ملاحظات تصدر من الجهة وما يلزم لمعالجتها.'],
  ['هل يمكن تنفيذ أكثر من خدمة معاً؟', 'نعم، يمكننا تنظيم عدة إجراءات لمنشأتك في مسار واحد، أو ضمن إحدى باقات إدارة المنصات الحكومية.'],
  ['هل بيانات منشأتي ومستنداتها في أمان؟', 'نتعامل مع بيانات العملاء ومستنداتهم بسرية، ولا نستخدمها إلا في تنفيذ الطلب المتفق عليه.']
];
const txtBlock = t => `<h2 class="h2s">ما هي الخدمة؟</h2><p class="svc-lead">${t.what}</p><h3 class="h3s">متى تحتاجها؟</h3><p>${t.when}</p><h3 class="h3s">كيف نخدمك؟</h3><p>${t.how}</p><h3 class="h3s">ما نحتاجه منك</h3><p>${t.need}</p><h3 class="h3s">ما يميز التنفيذ معنا</h3><p>${t.why}</p>`;
REAL_T.detail = () => {
  const i = Math.min(+qp('s') || 0, SVC.length - 1), s = SVC[i], e = ENT[s.e], r = (window.REQ || {})[i], t = (window.TXT || {})[i];
  const rel = SVC.map((x, k) => [x, k]).filter(([x, k]) => x.e === s.e && k !== i).slice(0, 6);
  const ul = a => `<ul class="ticks">${a.map(x => `<li>${C.ico('chk', 20)}${x}</li>`).join('')}</ul>`;
  const msg = `أرغب في خدمة: ${s.n} (${e.n})`;
  document.title = `${s.n} | توضيح المعرفة لخدمات الأعمال`; setDesc(`${s.n}: شرح الخدمة ومتطلباتها وخطواتها، ونتابع طلبك عبر القنوات الرسمية. ${(s.d||'').slice(0,90)}`);
  let hero = C.PHeadReal(s.n, s.d, [['الرئيسية', 'index.html'], ['جميع الخدمات', 'services.html'], [e.n, entHref(s.e)], [s.n]]);
  const k = hero.lastIndexOf('</div></section>');
  hero = hero.slice(0, k) + `<div class="svc-hero__cta">${wab('اطلب الخدمة عبر واتساب').replace(WA, waTxt(msg))}<a class="btn btn--ghost" href="#faq">أسئلة شائعة</a></div>` + hero.slice(k);
  const overview = `<div>${s.t ? `<p>${tagCls(s.t)}</p>` : ''}${t ? txtBlock(t) : `<h2 class="h2s">ما هي الخدمة؟</h2><p class="svc-lead">${s.d}</p>
      <p>نتولى عنك تنظيم هذا الإجراء من البداية: نراجع حالة منشأتك، ونحدد ما يلزم، ونجهّز البيانات والمستندات، ثم نتابع الطلب عبر القنوات الرسمية حتى صدور النتيجة، لتتفرغ لإدارة أعمالك.</p>`}
      ${!t && r && r.incl && r.incl.length ? `<h3 class="h3s">ما تشمله الخدمة</h3>${ul(r.incl)}` : ''}
      <h3 class="h3s">الجهة المختصة</h3><p><a href="${entHref(s.e)}"><b>${e.n}</b></a>: ${ENT_ABOUT[s.e] || ''}</p></div>`;
  const sideBox = C.Side('ابدأ طلبك الآن', 'أرسل لنا اسم الخدمة وبيانات منشأتك، وسنوضح لك المتطلبات والخطوات المناسبة.', msg);
  const why = `${C.SH('لماذا توضيح المعرفة', 'نختصر عليك الطريق', 'أربعة أسباب تجعل تنفيذ هذه الخدمة معنا أيسر.')}<div class="grid grid--4 feats" style="gap:var(--gap-feat)">${[
    ['clock', 'وقت أقل', 'نتولى الإجراء ومتابعته، فلا تنشغل بتفاصيل المنصات.'],
    ['doc', 'وضوح قبل البدء', 'نشرح لك المتطلبات والمستندات والخطوات قبل أي إجراء.'],
    ['chk', 'متابعة حتى النتيجة', 'نتابع الطلب ونبلغك بحالته وبأي ملاحظات من الجهة.'],
    ['shield', 'قنوات رسمية وسرية', 'ننفذ عبر القنوات الرسمية ونحافظ على سرية بياناتك.']
  ].map(([ic, t, d]) => `<div class="card card--feature card--real"><span class="ico">${C.ico(ic)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`;
  let reqs = '';
  if (r) {
    const rows = [['قناة التقديم', r.ch], ['مدة الإنجاز', r.time]].filter(x => x[1]).map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('');
    const docs = r.docs.length ? ul(r.docs) : `<p>${r.docsNote || 'لم تنشر الجهة قائمة بمستندات محددة لهذه الخدمة، ونؤكدها لك قبل التنفيذ.'}</p>`;
    reqs = `<div class="svc-req"><div class="card card--real"><h3 class="h3s" style="margin-top:0">معلومات سريعة</h3><dl class="dl">${rows}</dl>${r.cond.length ? `<h3 class="h3s">الشروط</h3>${ul(r.cond)}` : ''}<h3 class="h3s">المستندات المطلوبة</h3>${docs}</div>${r.steps.length ? `<div class="card card--real"><h3 class="h3s" style="margin-top:0">خطوات الخدمة على المنصة</h3><ol class="art-ol">${r.steps.map(x => `<li>${x}</li>`).join('')}</ol></div>` : ''}</div><p class="muted" style="margin-top:12px">المصدر: ${r.src}. قد تتغير المتطلبات، ونراجعها قبل تنفيذ طلبك.</p>`;
  } else reqs = `<div class="note-card note-card--about"><h3>المتطلبات والمستندات</h3><p>تختلف المتطلبات بحسب حالة منشأتك. نراجعها مع الجهة المختصة ونوضحها لك بدقة قبل البدء، فتواصل معنا لنزوّدك بها.</p></div>`;
  const faq = `<div id="faq"></div>${C.SH('الأسئلة الشائعة', 'إجابات تساعدك قبل طلب الخدمة', '')}<div>${SVC_FAQ(s).map(([q, a]) => `<details class="acc"><summary>${q}</summary><div class="in"><p>${a}</p></div></details>`).join('')}</div>`;
  const relB = rel.length ? `<div class="svc-blk">${C.SH('خدمات مرتبطة', `خدمات أخرى من ${e.n}`, '')}<div class="grid grid--svc">${rel.map(([x, kk]) => C.SvcCard(x, kk, false)).join('')}</div></div>` : '';
  return [hero,
    C.Section(`<div class="svc-ov"><div class="svc-main">${overview}<div class="svc-blk">${why}</div><div class="svc-blk">${C.SH('المتطلبات', 'ما تحتاج معرفته عن الخدمة', '')}${reqs}</div><div class="svc-blk">${C.SH('آلية العمل', 'كيف ننفذ طلبك', '')}${C.StepsReal()}</div>${relB}<div class="svc-blk">${faq}</div></div>${sideBox}</div>`),
    C.Section(C.CTAReal(), 'sec--flush-top')];
};
