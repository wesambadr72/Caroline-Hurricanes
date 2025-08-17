 const texts = {
            en: {
                title: "CAROLINA",
                hur: "HURRICANES",
                sentence: "THE MOST FUN TEAM IN HOCKEY",
                about: "ABOUT",
                trophies: "TROPHIES",
                ShortDecTitle: "SHORT DESCRIPTION",
                LongDecTitle: "LONG DESCRIPTION",
                ShortDecContent: 'The Carolina Hurricanes (colloquially known as the Canes) are a professional ice hockey team based in <a href="https://en.wikipedia.org/wiki/Raleigh,_North_Carolina">Raleigh, North Carolina</a>. The Hurricanes compete in the <a href="https://en.wikipedia.org/wiki/National_Hockey_League">National Hockey League (NHL)</a> as a member of the Metropolitan Division in the Eastern Conference. The team plays its home games at the <a href="https://en.wikipedia.org/wiki/Lenovo_Center">Lenovo Center</a>.',
                LongDecContent: 'The franchise was formed in 1971 as the New England Whalers of the <a href="https://en.wikipedia.org/wiki/World_Hockey_Association">World Hockey Association (WHA)</a>. The Whalers saw success immediately, winning the Eastern Division in the WHA\'s first three seasons and becoming the inaugural <a href="https://en.wikipedia.org/wiki/Avco_World_Trophy">Avco World Trophy</a> Champions to cap off the 1972–73 season. The Whalers again competed for the World Trophy in 1978, this time falling short to the Winnipeg Jets in a rematch of the 1973 Avco Cup Final. The franchise joined the NHL in 1979 as part of the <a href="https://en.wikipedia.org/wiki/1979_NHL_expansion">NHL–WHA merger</a>, renaming themselves the Hartford Whalers. The team relocated to North Carolina in 1997, rebranding themselves as the Hurricanes. Carolina advanced to the Stanley Cup Final for the first time in 2002, where they lost to the Detroit Red Wings. The Hurricanes won the 2006 Stanley Cup over the Edmonton Oilers, giving the state of North Carolina its first major professional sports championship and its only major championship as of 2024-25.',
                StanleyCup: 'STANLEY CUP',
                PrinceOfWales: 'PRINCE OF WALES TROPHY',
                rights: "© 2025 CHurricanes. All rights reserved.",
                Wesam: "Made by WESAM Canes Fan and dev."
            },
            ar: {
                title: "كارولينا",
                hur: "هريكينز",
                sentence: "أمتع فريق في الهوكي",
                about: "نبذة",
                trophies: "الإنجازات",
                ShortDecTitle: "وصف مختصر",
                LongDecTitle: "وصف مطول",
                ShortDecContent: 'فريق كارولاينا هريكينز (المعروف بالعامية بإسم "كينز") هو فريق هوكي جليد محترف مقره في <a href="https://en.wikipedia.org/wiki/Raleigh,_North_Carolina">رالي بولاية نورث كارولينا</a>. يتنافس الفريق في <a href="https://en.wikipedia.org/wiki/National_Hockey_League">دوري الهوكي الوطني (NHL)</a> كعضو في مجموعة متروبوليتان في القسم الشرقي. يلعب الفريق مبارياته على أرضه في <a href="https://en.wikipedia.org/wiki/Lenovo_Center">لينوفو سنتر</a>.',
                LongDecContent: 'تم تشكيل النادي في عام 1971 باسم نيو إنجلاند ويلرز من <a href="https://en.wikipedia.org/wiki/World_Hockey_Association">رابطة الهوكي العالمية (WHA)</a>. حقق فريق ويلرز النجاح على الفور، حيث فاز بالقسم الشرقي في المواسم الثلاثة الأولى لرابطة الهوكي العالمية وأصبح بطل <a href="https://en.wikipedia.org/wiki/Avco_World_Trophy">كأس العالم الافتتاحي أفكو</a> في موسم 1972-1973. تنافس فريق ويلرز مرة أخرى على كأس العالم في عام 1978، ولكن هذه المرة خسر أمام وينيبيغ جيتس في إعادة لنهائي كأس أفكو 1973. انضم النادي إلى الدوري الوطني في عام 1979 كجزء من <a href="https://en.wikipedia.org/wiki/1979_NHL_expansion">اندماج NHL-WHA</a>، وأعادوا تسمية أنفسهم باسم هارتفورد ويلرز. انتقل الفريق إلى نورث كارولينا في عام 1997، وأعادوا تسمية أنفسهم باسم هريكينز. تأهل نادي كارولينا إلى نهائي كأس ستانلي للمرة الأولى في عام 2002، حيث خسروا أمام ديترويت ريد وينجز. فاز فريق هوريكانز بكأس ستانلي عام 2006 على فريق إدمونتون أويلرز مانحاً ولاية كارولينا الشمالية أول بطولة رياضية احترافية كبرى في الولاية والبطولة الكبرى الوحيدة حتى موسم 2024-25.',
                StanleyCup: "كأس ستانلي",
                PrinceOfWales: "كأس أمير ويلز",
                rights: "© 2025 كارولينا هريكينز، جميع الحقوق محفوظة.",
                Wesam: "صُنع بواسطة وسام - مشجع فريق الكينز ومطور"
            }
        };

        function setLanguage(lang) {
            // تحديث اتجاه النص ولغة الصفحة
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

          document.querySelectorAll('[data-translate]').forEach(element => {
              const key = element.getAttribute('data-translate');
              if (texts[lang][key]) {
                  // استخدم innerHTML للنصوص التي تحتوي على HTML (مثل الروابط)
                  if (key === 'ShortDecContent' || key === 'LongDecContent') {
                      element.innerHTML = texts[lang][key];
                  } else if (element.classList.contains('footer-text')) {
                      element.innerHTML = texts[lang].rights + '<br><br>' + 
                                        texts[lang].Wesam.replace('وسام', '<a href="https://wesamlt.netlify.app">وسام</a>')
                                                        .replace('WESAM', '<a href="https://wesamlt.netlify.app">WESAM</a>');
                  } else {
                      element.textContent = texts[lang][key];
                  }
              }
          });
            
            // تحديث قائمة اللغات
            const select = document.getElementById('languageSelect');
            select.value = lang;
        }

        // إضافة مستمع للتغيير في اللغة
        document.getElementById('languageSelect').addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });

        // تعيين اللغة الافتراضية
        setLanguage('en');

function revealSections() {
  document.querySelectorAll('.about, .trophies').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
      section.classList.add('section-visible');
      section.classList.remove('section-hidden');
    } else {
      section.classList.remove('section-visible');
      section.classList.add('section-hidden');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);