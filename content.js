/* Real content layer (توضيح المعرفة). Overrides placeholder renderers for the home page and shared footer. */
const WA = 'https://wa.me/966535448100';
window.REAL_T = {};
const ICO = {
  bld: '<path d="M5 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M15 9h3a1 1 0 0 1 1 1v11M3 21h18M9 7h2M9 11h2M9 15h2"/>',
  chk: '<path d="M20 6 9 17l-5-5"/>',
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
  ['المركز السعودي للأعمال', 'خدمات تأسيس المنشآت والشركات، والسجلات التجارية، والتأكيد السنوي، والتعديلات والإجراءات المرتبطة بالأعمال.'],
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
  ['تأسيس الشركات والمنشآت', 'نساعدك في خطوات تأسيس نشاطك التجاري، بدءًا من تحديد الإجراءات المطلوبة وحتى استكمال خدمات التسجيل والتأسيس.', 'ابدأ التأسيس']
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
${col('خدماتنا', [['تأسيس الشركات والمنشآت', 'entity.html'], ['خدمات المركز السعودي للأعمال', 'entity.html'], ['خدمات وزارة التجارة', 'entity.html'], ['خدمات وزارة الاستثمار', 'entity.html'], ['خدمات منصة قوى', 'platform.html'], ['خدمات التأمينات الاجتماعية', 'entity.html'], ['خدمات منصة بلدي', 'platform.html'], ['خدمات الزكاة والضريبة', 'entity.html'], ['إدارة المنصات الحكومية', 'packages.html'], ['الاستشارات وخدمات الأعمال', 'consult.html']])}
${col('روابط سريعة', [['الرئيسية', 'index.html'], ['من نحن', 'about.html'], ['جميع الخدمات', 'services.html'], ['باقات إدارة المنصات الحكومية', 'packages.html'], ['مركز المعرفة', 'blog.html'], ['الأسئلة الشائعة', 'index.html#faq'], ['تواصل معنا', 'contact.html'], ['سياسة الخصوصية', '#'], ['الشروط والأحكام', '#']])}
<div><h3>تواصل معنا</h3><ul class="footer__contact"><li>${C.ico('bld', 18)}شركة توضيح المعرفة لخدمات الأعمال</li><li>${C.ico('pin', 18)}المقر: حائل، المملكة العربية السعودية</li><li>${C.ico('grid', 18)}نطاق العمل: جميع مناطق المملكة العربية السعودية</li><li>${C.ico('chat', 18)}<a href="${WA}" dir="ltr">0535448100</a></li></ul>${wab('تواصل معنا عبر واتساب', 'btn--wa')}</div></div>
<div class="footer__bar"><span>© 2026 شركة توضيح المعرفة لخدمات الأعمال. جميع الحقوق محفوظة.</span></div></div></footer>
<div class="float"><a class="wa" href="${WA}" target="_blank" rel="noopener" aria-label="تواصل عبر واتساب">${C.ico('chat', 22)}</a><i aria-hidden="true"></i></div><button class="totop" aria-label="للأعلى"></button><div class="mobile-cta">${wab('اطلب عبر واتساب')}</div>`;
};

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
const GOV_MAP = ['وزارة التجارة', 'وزارة التجارة', 'وزارة الموارد البشرية', 'وزارة الاستثمار', 'وزارة البلديات', 'المؤسسة العامة للتأمينات', 'هيئة الزكاة', 'وزارة الداخلية', 'وزارة الخارجية', 'وزارة الصناعة', 'الهيئة السعودية للملكية', 'وزارة التجارة'];
C.GovCard = ([t, d, b = 'عرض الخدمات'], i) => `<a class="card card--real card--gov" href="${entHref(entIdx(GOV_MAP[i]))}"><span class="ico">${C.ico('bld')}</span><h3>${t}</h3><p>${d}</p><span class="more">${b} ${C.ico('arr', 18)}</span></a>`;

C.PHeadReal = (title, sub, crumbs) => `<section class="phead phead--real"><div class="container"><nav class="crumb crumb--real" aria-label="مسار الصفحة">${crumbs.map(([t, h]) => h ? `<a href="${h}">${t}</a><span>/</span>` : `<span>${t}</span>`).join('')}</nav><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div></section>`;
C.SvcCard = (s, i, showEnt = true) => `<a class="card card--real card--svc" href="${svcHref(i)}" data-e="${s.e}" data-q="${(s.n + ' ' + s.d + ' ' + ENT[s.e].n).replace(/"/g, '')}">${tagCls(s.t)}<h3>${s.n}</h3>${showEnt ? `<div class="svc__ent">${ENT[s.e].n}</div>` : ''}<p>${s.d}</p><span class="more">تفاصيل الخدمة ${C.ico('arr', 18)}</span></a>`;
C.Side = (title, text, msg) => `<aside class="sidebar"><div class="card card--real"><h3>${title}</h3><p>${text}</p>${wab('اطلب الخدمة عبر واتساب').replace(WA, waTxt(msg))}<div class="side__phone">${C.ico('chat', 18)}<span dir="ltr">0535448100</span></div></div></aside>`;

REAL_T.directory = () => [
  C.PHeadReal('دليل الخدمات الحكومية للمنشآت', `${SVC.length} خدمة في ${ENT.length} جهة ومنصة حكومية. اختر الخدمة التي تحتاجها، ونوضح لك متطلباتها ونتابع إجراءاتها.`, [['الرئيسية', 'index.html'], ['جميع الخدمات']]),
  C.Section(`<div class="dirbar"><input class="search search--wide" id="svc-q" type="search" placeholder="ابحث عن خدمة أو جهة" aria-label="بحث في الخدمات"><div class="filters" role="group" aria-label="الجهات"><button class="chip" aria-pressed="true" data-ent="all">الكل (${SVC.length})</button>${ENT.map((e, i) => `<button class="chip" aria-pressed="false" data-ent="${i}">${e.n} (${SVC.filter(s => s.e === i).length})</button>`).join('')}</div></div><p class="muted" id="svc-count" role="status"></p><div class="grid grid--3 grid--svcs" id="svc-grid">${SVC.map((s, i) => C.SvcCard(s, i)).join('')}</div><p class="empty" id="svc-empty" hidden>لا توجد خدمة مطابقة. اكتب لنا عبر واتساب وسنساعدك في تحديد الخدمة.</p>`).replace('class="container"', 'class="container container--dir"'),
  C.Section(C.CTAReal(), 'sec--flush-top')
];

REAL_T.entity = () => {
  const ei = Math.min(+qp('e') || 0, ENT.length - 1), e = ENT[ei], list = SVC.map((s, i) => [s, i]).filter(([s]) => s.e === ei);
  document.title = `${e.n} | توضيح المعرفة لخدمات الأعمال`;
  return [C.PHeadReal(`خدمات ${e.n}`, `${list.length} ${list.length > 10 ? 'خدمة' : 'خدمات'} نساعدك في معرفة متطلباتها وتجهيز إجراءاتها ومتابعة تنفيذها.`, [['الرئيسية', 'index.html'], ['جميع الخدمات', 'services.html'], [e.n]]),
    C.Section(`<div class="detail"><div><input class="search search--wide" id="svc-q" type="search" placeholder="ابحث عن خدمة في ${e.n}" aria-label="بحث"><p class="muted" id="svc-count" role="status"></p><div class="grid grid--svc grid--svcs" id="svc-grid">${list.map(([s, i]) => C.SvcCard(s, i, false)).join('')}</div><p class="empty" id="svc-empty" hidden>لا توجد خدمة مطابقة لبحثك.</p></div>${C.Side('تحتاج خدمة من ' + e.n + '؟', 'تواصل مع فريق توضيح المعرفة وحدد الإجراء الذي تحتاجه، وسنساعدك في مراجعة المتطلبات والمستندات اللازمة.', `أرغب في الاستفسار عن خدمات ${e.n}`)}</div>`).replace('class="container"', 'class="container container--wide"'),
    C.Section(C.CTAReal(), 'sec--flush-top')];
};

REAL_T.detail = () => {
  const i = Math.min(+qp('s') || 0, SVC.length - 1), s = SVC[i], e = ENT[s.e], rel = SVC.map((x, k) => [x, k]).filter(([x, k]) => x.e === s.e && k !== i).slice(0, 6);
  document.title = `${s.n} | توضيح المعرفة لخدمات الأعمال`;
  return [C.PHeadReal(s.n, s.d, [['الرئيسية', 'index.html'], ['جميع الخدمات', 'services.html'], [e.n, entHref(s.e)], [s.n]]),
    C.Section(`<div class="detail"><div>${s.t ? `<p>${tagCls(s.t)}</p>` : ''}<div class="card card--real" style="padding:24px"><h2 class="h2s">عن الخدمة</h2><p>${s.d}</p><dl class="dl"><dt>الجهة</dt><dd><a href="${entHref(s.e)}">${e.n}</a></dd></dl></div>
      <div class="card card--real" style="padding:24px;margin-top:16px"><h2 class="h2s">كيف نساعدك في هذه الخدمة؟</h2><ul class="ticks">${['نراجع احتياج منشأتك ونحدد الإجراء المناسب', 'نوضح لك المتطلبات والمستندات المطلوبة قبل البدء', 'نتابع الطلب عبر القنوات الرسمية ونبلغك بالنتيجة'].map(x => `<li>${C.ico('chk', 20)}${x}</li>`).join('')}</ul><p class="muted" style="margin-top:12px">تختلف المتطلبات والمدة بحسب نشاط المنشأة وشروط الجهة. نوضح لك التفاصيل بعد مراجعة طلبك.</p></div>
      ${rel.length ? `<h2 class="h2s" style="margin:32px 0 14px">خدمات أخرى من ${e.n}</h2><div class="grid grid--svc">${rel.map(([x, k]) => C.SvcCard(x, k, false)).join('')}</div>` : ''}</div>${C.Side('اطلب هذه الخدمة', 'أرسل لنا طلبك عبر واتساب وسنراجع احتياجك ونوضح لك الخطوات.', `أرغب في خدمة: ${s.n} (${e.n})`)}</div>`).replace('class="container"', 'class="container container--wide"'),
    C.Section(C.CTAReal(), 'sec--flush-top')];
};
REAL_T.platform = REAL_T.entity;
REAL_T.incorporate = () => REAL_T.detail();

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
  document.title = `${a.t} | توضيح المعرفة لخدمات الأعمال`;
  const rel = ART.filter(x => x !== a && x.body).slice(0, 3);
  const body = a.body ? a.body.map(([k, v]) => k === 'h' ? `<h2 class="h2s">${v}</h2>` : k === 'h3' ? `<h3 class="h3s">${v}</h3>` : k === 'cta' ? `<p class="art-cta">${v}</p>` : k === 'ol' ? `<ol class="art-ol">${v.map(x => `<li>${x}</li>`).join('')}</ol>` : k === 'ul' ? `<ul class="art-ul">${v.map(x => `<li>${x}</li>`).join('')}</ul>` : `<p>${v}</p>`).join('') : `<p>هذا المقال قيد الإعداد وسيُنشر قريباً.</p>`;
  return [C.PHeadReal(a.t, a.d, [['الرئيسية', 'index.html'], ['مركز المعرفة', 'blog.html'], [a.cat]]),
    C.Section(`<div class="detail detail--article"><article class="art-body">${a.date ? `<div class="muted">${a.date}</div>` : ''}${body}${a.src && a.src.length ? `<h2 class="h2s">المصادر</h2><ul class="art-ul">${a.src.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n}</a></li>`).join('')}</ul>` : ''}<p class="art-note">المعلومات الواردة في هذا المقال للتعريف العام، وتختلف المتطلبات بحسب نشاط المنشأة وتحديثات الجهة المختصة. للتأكد من وضع منشأتك تواصل معنا.</p></article>${C.Side('هل تحتاج مساعدة في إجراءات منشأتك؟', 'تواصل مع فريق توضيح المعرفة وسنوضح لك المتطلبات والخطوات المناسبة.', `أرغب في الاستفسار بخصوص: ${a.t}`)}</div>`).replace('class="container"', 'class="container container--wide"'),
    rel.length ? C.Section(C.SH('مركز المعرفة', 'مقالات ذات صلة') + `<div class="grid grid--3">${rel.map(C.ArtCard).join('')}</div>`, 'sec--alt') : '',
    C.Section(C.CTAReal(), 'sec--flush-top')];
};
const _rb = window.REAL_BIND;
window.REAL_BIND = () => { _rb && _rb(); const g = document.getElementById('art-grid'); if (!g) return; document.querySelectorAll('[data-cat]').forEach(b => { if (b.tagName !== 'BUTTON') return; b.addEventListener('click', () => { document.querySelectorAll('button[data-cat]').forEach(x => x.setAttribute('aria-pressed', x === b)); [...g.children].forEach(c => c.hidden = b.dataset.cat !== 'all' && c.dataset.cat !== b.dataset.cat); }); }); };
