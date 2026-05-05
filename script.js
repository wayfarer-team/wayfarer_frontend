const REGIONS = {
  
  'bishkek-city': {
    name: 'Бишкек (Bishkek)',
    tagline: 'Сердце современного Кыргызстана — город, родившийся на Шелковом пути.',
    color: '#4A90D9',
    emoji: '🏙',
    bg: 'linear-gradient(135deg, #1a3a5c 0%, #0d1f35 100%)',
    history: {
      intro: `Бишкек, столица Кыргызстана, начинался как небольшая крепость Коканд, известная как Пишпек. После завоевания Россией в 1862 году он был перестроен в гарнизонный город, также названный Пишпек. В советское время он был переименован в Фрунзе в честь большевистского военачальника Михаила Фрунзе, который родился здесь. После обретения независимости в 1991 году город вернул себе название Бишкек.`,
      text2: `Сегодня Бишкек — это город широких бульваров, застроенных зданиями советской эпохи, пышных парков и растущего современного городского пейзажа. Площадь Ала-Тоо остается символическим сердцем страны, а такие районы, как Дордойский базар, бурлят предпринимательской энергией.`,
      timeline: [
        { year: '825 AD', text: 'Ранний согдийский караван-сарай на торговом пути Шелкового пути, проходившем через долину Чуй.' },
        { year: '1825', text: 'Кокандское ханство возводит глинобитную крепость — Пишпек — для контроля над северными торговыми путями.' },
        { year: '1862', text: 'Российские имперские войска захватывают и сносят крепость Коканд; создается новый российский гарнизон.' },
        { year: '1926', text: 'Город переименован в Фрунзе; становится столицей Кыргызской ССР при советском управлении.' },
        { year: '1991', text: 'Кыргызстан провозглашает независимость; город переименован в Бишкек и становится столицей нового государства.' },
        { year: '2010', text: 'Вторая кыргызская революция: президент Бакиев свергнут; временный правительство создано в Бишкеке.' }
      ]
    },
    
    places: [
      { name: 'Площадь Ала-Тоо', emoji: '🏛', desc: 'Центральная площадь страны — свидетель как революций, так и торжеств.', tag: 'Landmark', tagColor: '#4A90D9' },
      { name: 'Ош Базар', emoji: '🛒', desc: 'Крупнейший рынок Бишкека, настоящий взрыв вкусов: специи, изделия ручной работы и свежие продукты.', tag: 'Market', tagColor: '#C47B2B' },
      { name: 'Парк Панфилова', emoji: '🌳', desc: 'Любимый парк, где местные гуляют под статуями советской эпохи и каштанами.', tag: 'Park', tagColor: '#5BA85C' },
      { name: 'Дордойский базар', emoji: '🏪', desc: 'Один из крупнейших контейнерных рынков Центральной Азии — лабиринт торговли.', tag: 'Shopping', tagColor: '#8B5CF6' },
      { name: 'Государственный музей истории', emoji: '🏺', desc: 'Путешествие через историю Кыргызстана от петроглифов до постсоветской эры.', tag: 'Museum', tagColor: '#E05C3A' },
      { name: 'Каньон Ал-Арча', emoji: '🏔', desc: 'Всего в 40 км к югу — национальный парк с драматичными альпийскими ущельями и ледниками.', tag: 'Nature', tagColor: '#3AAFA9' }
    ],
    reviews: [
      { name: 'Анна К.', date: '2024-09', stars: 5, text: 'Бишкек меня совершенно удивил. Парки, местная кухня, гостеприимство людей — я ожидал увидеть сонную постсоветскую столицу, а обнаружил живое, бьющееся сердце.' },
      { name: 'Марко Д.', date: '2024-06', stars: 4, text: 'Начинайте каждое утро на Ошском базаре. Хлеб, мед, сухофрукты — это чистая киргизская душа. Город, который с каждым часом покоряет вас все больше.' }
    ]
  },
  'chuy': {
    name: 'Чуйская область',
    tagline: 'Северный ворота — плодородные долины у подножия Тянь-Шаня',
    color: '#5BA85C',
    emoji: '🌾',
    bg: 'linear-gradient(135deg, #1a3520 0%, #0d200f 100%)',
    history: {
      intro: `Долина Чуй непрерывно заселена более двух тысяч лет. Древний согдийский город Суяб, расположенный недалеко от современного Токмока, когда-то был крупным центром Шелкового пути, где сосуществовали буддийские монахи, несторианские христиане и зороастрийские торговцы.`,
      text2: `В период советской власти Чуйская долина стала промышленным и сельскохозяйственным центром советского Кыргызстана. Сегодня она остается самым густонаселенным регионом за пределами столицы, известным своими хмелевыми полями (снабжавшими пивоваренные заводы Центральной Азии), подсолнечными плантациями и руинами, свидетельствующими о существовавших здесь империях.`,
      timeline: [
        { year: '6th C AD', text: 'Суйаб является столицей Западно-Тюркского каганата и важным перекрестком Шелкового пути.' },
        { year: '630 AD', text: 'Проезжая мимо, китайский паломник Сюаньцзан описывает космополитичные буддийские и несторианские общины Суяба.' },
        { year: '840 AD', text: 'Енисейские киргизы уничтожают Уйгурский каганат; Чуйская долина попадает под влияние киргизов.' },
        { year: '1218', text: 'Чингисхан захватывает территорию; Чуйская долина становится частью Монгольской империи.' },
        { year: '1930s', text: 'В результате советской коллективизации долина превратилась в сеть колхозов и заводов.' }
      ]
    },
    places: [
      { name: 'Башня Бурана', emoji: '🗼', desc: 'Минарет XI века — всё, что осталось от древнего города Баласагун.', tag: 'Ancient Site', tagColor: '#C47B2B' },
      { name: 'город Токмок', emoji: '🏘', desc: 'Местонахождение недалеко от древнего Суяба; здесь в изобилии встречаются петроглифы и исторические артефакты.', tag: 'Town', tagColor: '#5BA85C' },
      { name: 'Бумское ущелье', emoji: '⛰', desc: 'Место, где река Чуй протекает через горный диапазон Кыргызстана.', tag: 'Nature', tagColor: '#3AAFA9' },
      { name: 'Долина Чон-Кемин', emoji: '🌄', desc: 'Прекрасная альпийская долина с юртами и захватывающими видами Тянь-Шаня.', tag: 'Trekking', tagColor: '#8B5CF6' }
    ],
    reviews: [
      { name: 'Lena M.', date: '2024-07', stars: 5, text: 'Закат над башней Бурана – это зрелище, которое я никогда не забуду. В окружении древних каменных фигур, под завывание ветра с гор – время словно остановилось.' },
      { name: 'James R.', date: '2023-09', stars: 4, text: 'Долина Чон-Кемин – это то, что делает Кыргызстан таким особенным. Мы остановились в юрте, проснулись от лошадей, пасущихся снаружи, и поднялись в горы весь день, не встретив ни одного туриста.' }
    ]
  },
  'issyk-kul': {
    name: 'Иссык-Кульская область',
    tagline: 'Теплая Горная Озеро — одно из величайших Альпийских Морей Мира',
    color: '#3AAFA9',
    emoji: '🏖',
    bg: 'linear-gradient(135deg, #0d3035 0%, #051a20 100%)',
    history: {
      intro: `Озеро Иссык-Куль, название которого в переводе с кыргызского означает «тёплое озеро», расположено на высоте 1607 метров над уровнем моря и никогда не замерзает, несмотря на суровые горные зимы. Это второе по величине высокогорное озеро в мире, его длина составляет 182 км, а ширина — 60 км. Глубина достигает 668 метров.`,
      text2: `Озеро всегда было перекрестком цивилизаций. Говорят, что армянские монахи принесли сюда мощи святого Матфея. Вдоль его берегов проходили караваны Великого Шелкового пути. В его глубинах когда-то испытывали оборудование подводные лодки советской эпохи. Сегодня это главный курортный регион Кыргызстана, привлекающий туристов со всей Центральной Азии.`,
      timeline: [
        { year: '2nd C BC', text: 'Конфедерация Усун процветает на берегах озера; обширная торговля связывает её с Китаем и Парфией.' },
        { year: '339 AD', text: 'Согласно армянской традиции, монахи перенесли мощи святого Матфея в монастырь на южном берегу озера.' },
        { year: '1218', text: 'Монгольские войска Джебе и Субутая проходят вдоль северного берега озера во время великого западного похода.' },
        { year: '1856', text: 'Русский исследователь Семыонов-Тянь-Шаньский становится первым европейцем, который научно документировал озеро.' },
        { year: 'Советская эпоха', text: 'Озеро становится классифицированным советским военным испытательным полигоном; секретная торпедная испытательная станция работает здесь.' },
        { year: '1990-е', text: 'Открытие бронзового века и более поздних подводных археологических мест, показывающих, что уровень озера значительно повысился.' }
      ]
    },
    places: [
      { name: 'город Кара-Коль', emoji: '🏔', desc: 'Главный город на восточном берегу — отправная точка для пеших походов по Тянь-Шаню и горнолыжных курортов.', tag: 'City', tagColor: '#3AAFA9' },
      { name: 'Ущелье Джети-Огуз', emoji: '🗿', desc: 'Скалы Севен Буллз — красные песчаниковые образования легендарной красоты.', tag: 'Natural Wonder', tagColor: '#E05C3A' },
      { name: 'Чолпон-Ата', emoji: '⭐', desc: 'Древний музей наскальной живописи под открытым небом с тысячами скифских петроглифов.', tag: 'Petroglyphs', tagColor: '#C47B2B' },
      { name: 'Пляжи Иссык-Куля', emoji: '🏊', desc: 'Кристально чистая вода, теплая погода и горные пейзажи со всех сторон.', tag: 'Beach', tagColor: '#3AAFA9' },
      { name: 'Караван-сарай Таш-Рабат', emoji: '🏯', desc: 'Прекрасно сохранившийся каменный караван-сарай XV века на горном перевале.', tag: 'Historic Site', tagColor: '#8B5CF6' },
      { name: 'Базовый лагерь Хан-Тенгри', emoji: '🏔', desc: 'Путь к вершине Хан-Тенгри высотой 7010 метров — одной из самых красивых вершин на Земле.', tag: 'Mountaineering', tagColor: '#D4455B' }
    ],
    reviews: [
      { name: 'Sophie L.', date: '2024-08', stars: 5, text: 'Купание в Иссык-Куле, где в воде отражаются заснеженные вершины гор, — нигде на Земле нет ничего подобного. Чистая магия во всех отношениях.' },
      { name: 'Dmytro P.', date: '2024-07', stars: 5, text: 'Мы совершили утренний поход в Джети-Огуз в тумане. Красные скалы, сияющие на фоне белоснежных вершин — теперь я понимаю, почему киргизы называют свою землю раем.' },
      { name: 'Sarah T.', date: '2023-10', stars: 4, text: 'Каракол — недооцененная жемчужина. Превосходные кафе для гурманов, дружелюбные местные жители, невероятные пешие маршруты. Провел там 5 дней и пожалел, что не 50.' }
    ]
  },
  'naryn': {
    name: 'Нарынская область',
    tagline: 'Высокогорье — Древние степи Небесных Гор',
    color: '#C47B2B',
    emoji: '⛰',
    bg: 'linear-gradient(135deg, #2d1a05 0%, #1a0d02 100%)',
    history: {
      intro: `Нарын — географическое сердце Кыргызстана и один из самых отдаленных и наименее посещаемых регионов Центральной Азии. Река Нарын, приток Сырдарьи, прорезает живописные каньоны в высокогорных степях на высоте более 2000 метров над уровнем моря. В регионе доминируют горы Тянь-Шань, вершины которых возвышаются более чем на 7000 метров. Суровый климат и пересеченная местность сохранили образ жизни, который мало изменился за столетия.`,
      text2: `Это земля, которая меньше всего изменилась со времен великих ханов. Полукочевые семьи по-прежнему проводят лето на высокогорных пастбищах (джайлу), живут в традиционных юртах и ​​пасут лошадей и яков. Перевал Торугарт соединяет Нарын с китайским Синьцзяном по маршруту, который когда-то был частью Шелкового пути.`,
      timeline: [
        { year: 'I век н.э.', text: 'Маршрут «Шелковый путь в Небесных горах» проходит через Нарын, соединяя Китай с Парфией.' },
        { year: '10 век', text: 'В высокогорных степях расположены владения различных тюркских царств; в долине Ат-Баши проводятся сезонные торговые ярмарки.' },
        { year: '1209', text: 'Монгольские войска под командованием Джебе завоевывают Киргизское нагорье; кочевые киргизские племена подчиняются монгольской власти.' },
        { year: '1876', text: 'Российская империя основывает форт Нарын как свой самый дальний форпост в Центральной Азии; ныне это город Нарын.' },
        { year: '1992', text: 'Независимый Кыргызстан впервые открывает Торугартский перевал для иностранных путешественников.' }
      ]
    },
    places: [
      { name: 'Караван-сарай Таш-Рабат', emoji: '🏯', desc: 'сПрекрасно сохранившаяся средневековая каменная гостиница на высоте 3500 метров — лучший образец в Центральной Азии.', tag: 'Historic Site', tagColor: '#C47B2B' },
      { name: 'Перевал Торугарт', emoji: '🌄', desc: 'Впечатляющий перевал высотой 3752 метра, соединяющий Кыргызстан и Китай, — некогда важный пункт пересечения Шелкового пути.', tag: 'Mountain Pass', tagColor: '#5BA85C' },
      { name: 'Озеро Сон-Куль', emoji: '🌊', desc: 'Высокогорное озеро на высоте 3016 м, окруженное кочевыми птицами джайлоо и кружащимися орлами.', tag: 'Sacred Lake', tagColor: '#3AAFA9' },
      { name: 'Нарынский каньон', emoji: '🏞', desc: 'Впечатляющий каньон из красных скал, высеченный рекой Нарин, — напоминание об американском Юго-Западе.', tag: 'Canyon', tagColor: '#E05C3A' }
    ],
    reviews: [
      { name: 'Peter H.', date: '2024-06', stars: 5, text: 'Сон-Куль в полночь. Никакого светового загрязнения, Млечный Путь сияет над головой, слышен свист лошадей на плато. Я никогда не чувствовал такой связи с древним миром.' },
      { name: 'Asel B.', date: '2023-08', stars: 5, text: 'Для меня, как для кыргызца, показывать своим иностранным друзьям Нарын — это всё равно что показывать им свою душу. Землю, которая нас создала.' }
    ]
  },
  'jalal-abad': {
    name: 'Джалал-абадская область',
    tagline: 'Зелёное сердце — древние ореховые леса и священные источники',
    color: '#8B5CF6',
    emoji: '🌲',
    bg: 'linear-gradient(135deg, #1a0d35 0%, #0d0520 100%)',
    history: {
      intro: `Джалал-Абад на западе Кыргызстана является домом для Арсланбобского орехового леса — крупнейшего в мире естественного орехового леса, где деревья, которым более тысячи лет, до сих пор плодоносят. Легенда гласит, что солдаты Александра Великого привезли отсюда грецкие орехи в Грецию.`,
      text2: `Горячие минеральные источники этого региона в городе Джалал-Абад были известны еще в средневековой исламской литературе. Город расположен на краю Ферганской долины, где киргизская горная культура встречается с оседлыми цивилизациями долины. По холмам разбросаны суфийские святыни и древние места паломничества.`,
      timeline: [
        { year: 'IV век до н.э.', text: 'Согласно легенде, Александр Великий проходил через этот район; солдаты несли семена грецкого ореха на запад.' },
        { year: '10 век н.э.', text: 'Арабские географы описывают горячие источники Джалал-Абада как место исцеления и паломничества.' },
        { year: '15 век', text: 'Тимуридские султаны Ферганской долины покровительствуют священным источникам; неподалеку селятся суфийские ордена.' },
        { year: '1870-е годы', text: 'Russian explorers document the Arslanbob walnut forest, astonished by its ancient wild trees.Российские исследователи задокументировали ореховый лес Арсланбоб, пораженные его древними дикими деревьями.' },
        { year: '2010', text: 'Этнические столкновения в Оше в июне 2010 года распространились на Джалал-Абад; за этим последовал период восстановления и примирения.' }
      ]
    },
    places: [
      { name: 'Ореховый лес Арсланбоб', emoji: '🌳', desc: 'Крупнейшая в мире природная ореховая роща — древние деревья в священном горном массиве.', tag: 'UNESCO Area', tagColor: '#5BA85C' },
      { name: 'Водопады Арсланбоб', emoji: '💧', desc: 'Двойные водопады, плывущие с массива Бабаш-Ата в лес ниже.', tag: 'Waterfall', tagColor: '#3AAFA9' },
      { name: 'Джалал-Абадские горячие источники', emoji: '♨', desc: 'Исцеляющие минеральные источники, используемые на протяжении тысячелетий — место паломничества для ищущих здоровья.', tag: 'Hot Springs', tagColor: '#8B5CF6' },
      { name: 'Озеро Сары-Челек', emoji: '🏞', desc: 'Впечатляющая биосфера с чистым горным озером и древними лесами.', tag: 'Biosphere Reserve', tagColor: '#3AAFA9' }
    ],
    reviews: [
      { name: 'Kenji T.', date: '2024-05', stars: 5, text: 'Walking through the ancient walnut forest of Arslanbob felt like entering a fairy tale. The village hospitality was extraordinary — we were invited for tea in every second home.' },
      { name: 'Maria G.', date: '2023-09', stars: 4, text: 'Sary-Chelek is perhaps the most beautiful place I have ever been. Completely unspoiled, accessible by a tough road — worth every bump.' }
    ]
  },
  'osh': {
    name: 'Ошская область',
    tagline: 'Вечный город — три тысячи лет на Великом Шелковом пути',
    color: '#E05C3A',
    emoji: '🕌',
    bg: 'linear-gradient(135deg, #2d1205 0%, #1a0902 100%)',
    history: {
      intro: `Ош — один из старейших городов Центральной Азии, которому, как полагают, не менее 3000 лет. Согласно местной легенде, город посещал сам царь Соломон, а Сулейман-Тоо (гора Соломона) — священная скала, возвышающаяся над центром города, — внесена в список объектов Всемирного наследия ЮНЕСКО.`,
      text2: `На протяжении тысячелетий Ош был городом-воротами, через которые горные киргизские кочевники торговали с оседлыми земледельцами и торговцами Ферганской долины. Это был важный узел, где расходились караваны Шелкового пути — одни направлялись на север, в Самарканд и Бухару, другие — на юг, в Афганистан и Индию. Сегодня он остается «южной столицей» Кыргызстана.`,
      timeline: [
        { year: '1000 г. до н.э.', text: 'Археологические данные свидетельствуют о заселении окрестностей Сулейман-Тоо в позднем бронзовом веке.' },
        { year: 'VIII век н.э.', text: 'И арабские, и китайские источники упоминают Ош как процветающий торговый город Шелкового пути.' },
        { year: 'IX-X вв.', text: 'Под властью Саманидов, Ош процветает как центр исламского обучения и торговли.' },
        { year: '1762', text: 'Ош становится частью Кокандского ханата; строятся значительные мечети и медресе.' },
        { year: '1876', text: 'Российские имперские войска аннексируют Ош; он становится административным центром Российского Туркестана.' },
        { year: '2009', text: 'Сулейман-Тоо внесено в список объектов Всемирного наследия ЮНЕСКО — первый объект в Кыргызстане.' }
      ]
    },
    places: [
      { name: 'Сулейман-Тоо', emoji: '⛰', desc: 'Священная гора Соломона — объект Всемирного наследия ЮНЕСКО, расположенный буквально в центре древнего города.', tag: 'UNESCO Heritage', tagColor: '#E05C3A' },
      { name: 'Кара-Шоро', emoji: '🏞️', desc: 'Центральная Азия Кара-Шоро — уголок, где природа и легенды становятся единым целым.', tag: 'jailoo', tagColor: '#08e408' },
      { name: 'Ошский областной музей', emoji: '🏺', desc: 'Артефакты, охватывающие 3000 лет истории цивилизаций Ферганской долины.', tag: 'Museum', tagColor: '#8B5CF6' },
      { name: 'Река Ак-Буура', emoji: '🌊', desc: 'Река, разделяющая старый и новый Ош, — ее берега оживают по вечерам, когда люди совершают прогулки.', tag: 'River', tagColor: '#3AAFA9' },
      { name: 'Минарет Узген', emoji: '🗼', desc: 'Минарет Караханидов XI века — один из лучших образцов ранней исламской архитектуры Центральной Азии.', tag: 'Architecture', tagColor: '#D4455B' }
    ],
    reviews: [
      { name: 'Fatima A.', date: '2024-07', stars: 5, text: 'Подъем на Сулейман-Тоо на рассвете, наблюдение за пробуждающимся внизу старым городом — звук первого призыва к молитве, отражающийся от древних камней. Вот почему мы путешествуем.' },
      { name: 'Robert S.', date: '2024-04', stars: 5, text: 'Кара-Шоро и это одно из тех мест, куда хочется вернуться. Тишина, зелёные склоны и свежий горный воздух создают ощущение полного спокойствия. Здесь нет суеты — только природа, простота и настоящая атмосфера кыргызского джайлоо. Отличное место, чтобы перезагрузиться и насладиться видами.' }
    ]
  },
  'batken': {
    name: 'Баткенская область',
    tagline: 'Перекрёсток трёх стран — там, где начинается настоящее приключение.',
    color: '#D4455B',
    emoji: '🦅',
    bg: 'linear-gradient(135deg, #2d0d12 0%, #1a050a 100%)',
    history: {
      intro: `Баткен, самая молодая из областей Кыргызстана (создана в 1999 году), занимает сложный и драматичный ландшафт на юго-западной границе страны. Регион содержит две необычайные географические особенности: узбекские энклавы Сокх и Шахимардан, полностью окружённые кыргызской территорией.`,
      text2: `Древний город И sfana и сообщества на границе долины Ферганы здесь представляют собой одну из самых сложных этнических и политических географий в Центральной Азии. Несмотря на — или, возможно, благодаря — своей отдалённости, Баткен предлагает некоторые из самых неповреждённых пейзажей и подлинных кочевых встреч во всей стране.`,
      timeline: [
        { year: 'V век н.э.', text: 'Согдийские города Баткен служат перевалочными пунктами на южной ветви Шелкового пути, проходящей через Ферганскую долину.' },
        { year: '8-й С', text: 'Арабские армии завоевывают Ферганскую долину; ислам постепенно распространяется в высокогорных районах.' },
        { year: '1999', text: 'Восстание Исламского движения Узбекистана приводит к созданию Баткенской области как отдельной административной единицы с усиленным контролем.' },
        { year: '2021', text: 'Краткий конфликт на границе с Таджикистаном в районе энclave Ворух; быстро разрешен дипломатически.' }
      ]
    },
    places: [
      { name: 'Ущелье Ак-Суу', emoji: '🏔', desc: 'Уединенное ущелье захватывающей дух красоты — почти нет туристов, только дикая природа.', tag: 'Wilderness', tagColor: '#D4455B' },
      { name: 'Руины Исфаны', emoji: '🏛', desc: 'Древние остатки поселения в долине Исфара — история Шелкового пути в его самых первозданных формах.', tag: 'Archaeological', tagColor: '#C47B2B' },
      { name: 'Анклав Ворух', emoji: '🗺', desc: 'Геополитическая особенность — таджикская энclave, окружённая кыргызской территорией, где царит тёплая гостеприимность.', tag: 'Unique Geography', tagColor: '#8B5CF6' },
      { name: 'Перевалы Каравансарай', emoji: '🐪', desc: 'Древние горные перевалы, до сих пор используемые кочевниками, следуя маршрутам, возраст которых исчисляется тысячелетиями.', tag: 'Nomad Route', tagColor: '#5BA85C' }
    ],
    reviews: [
      { name: 'Felix B.', date: '2024-05', stars: 5, text: 'Баткен — это место, куда отправляются отважные путешественники, чтобы оставить путеводитель позади. Я провел здесь неделю и не встретил ни одного иностранца. Чистое, нетронутое, необыкновенное место.' },
      { name: 'Nilufar R.', date: '2023-07', stars: 4, text: 'Пейзажи здесь просто неземные. Красные каньоны, зеленые долины, голубое небо — и жители Баткена встречают незнакомцев как родных.' }
    ]
  },
  'talas': {
    name: 'Таласская область',
    tagline: 'Эпическая земля — родина героя Манаса и его вечной песни.',
    color: '#2D9CDB',
    emoji: '🏹',
    bg: 'linear-gradient(135deg, #051530 0%, #020a1a 100%)',
    history: {
      intro: `Таласская область занимает особое место в национальной идентичности Кыргызстана. Это сердце Эпоса о Манасе — самого длинного устного эпического стихотворения в мире, в 20 раз длиннее Илиады и Одиссеи, объединенных. Легендарный герой Манас, как говорят, родился, жил и умер в этой долине.`,
      text2: `Долина Талас также была местом Битвы при Таласе в 751 году н.э. — решающий конфликт между Арабским аббасидским халифатом и Тангской династией Китая. Арабы победили, остановив китайское расширение на запад. Китайские пленники, захваченные в битве, как говорят, принесли искусство бумажного производства в исламский мир.`,
      timeline: [
        { year: '751 AD', text: 'Битва при Таласе: арабские войска аббасидов побеждают китайскую армию Танга; китайские бумажники, захваченные в плен, привозят свое ремесло на запад.' },
        { year: '9th-10th C', text: 'Йенисейские кыргызы, после поражения уйгуров, расширяются до Таласа; этот период формирует традицию Эпоса о Манасе.' },
        { year: '840 AD', text: 'Кыргызы входят в короткую золотую эпоху, контролируя обширные степные территории; устные традиции процветают.' },
        { year: '1995', text: 'В Кыргызстане отмечают 1000-летие эпоса «Манас»; в Таласе проходят масштабные торжества.' },
        { year: 'Annual', text: 'Мавзолей Манаса в долине Талас является местом паломничества; здесь собираются манаски (эпические певцы).' }
      ]
    },
    places: [
      { name: 'Мавзолей Манаса', emoji: '🏛', desc: 'Древний мавзолей, вероятно, посвященный герою Манасу — глубоко священному национальному месту паломничества.', tag: 'Место паломничества', tagColor: '#2D9CDB' },
      { name: 'Место Битвы при Таласе', emoji: '⚔', desc: 'Рядом с Таразом — место столкновения арабской и китайской империй в 751 году н.э., изменившее ход истории.', tag: 'Исторический полигон', tagColor: '#E05C3A' },
      { name: 'Долина реки Талас', emoji: '🌄', desc: 'Широкая, нетронутый долина, где река пересекает горы, а воздух наполнен ароматом шалфея.', tag: 'Пейзажная долина', tagColor: '#5BA85C' },
      { name: 'Петроглифы Кызыл-Адыра', emoji: '🗿', desc: 'Древние каменные рисунки, документирующие жизни ранних кыргызов и их предков.', tag: 'Каменное искусство', tagColor: '#C47B2B' }
    ],
    reviews: [
      { name: 'Aidana T.', date: '2024-06', stars: 5, text: 'Стоя у мавзолея Манаса и слушая, как старейшина поет отрывок из эпоса, у меня мурашки по коже побежали. Вот что на самом деле означает сохранение культуры.' },
      { name: 'Hans M.', date: '2023-08', stars: 5, text: 'Таласская долина невероятно красива и практически не открыта для иностранных туристов. Это скрытый рай нетронутых киргизских пейзажей.' }
    ]
  }
};

const MASCOT_PHRASES = [
  "Добро пожаловать, дорогой путешественник! Я знаю каждую горную тропу в этой стране...",
  "За все мои 80 лет Иссык-Куль всегда был для меня самым прекрасным зрелищем...",
  "Моя бабушка выучила мне наизусть эпос о Манасе. Три полных дня историй!",
  "Лучший кымыз во всем Кыргызстане? Он делается прямо здесь, в этой долине.",
  "Не упустите рассвет над горами. Он исцеляет душу.",
  "Каждый регион имеет свою красоту. Я видел их всех и любил их всех.",
  "Планируйте внимательно, но оставьте место для удивительных сюрпризов!",
  "Шелковый путь проходил через здесь. Вы идете по древним следам."
];

// ==================== STATE ====================
let currentUser = null;
let currentRegion = null;
let currentRating = 0;
let currentModalStep = 1;
let modalSelectedRegions = [];
let modalStops = [];
let plannerStops = [];
let tripStyle = '';
let reviewsByRegion = {};

// Pre-populate reviews from region data
Object.keys(REGIONS).forEach(r => {
  reviewsByRegion[r] = [...REGIONS[r].reviews];
});

// ==================== AUTH ====================
function switchAuthTab(tab) {
  document.querySelectorAll('.reg-tab').forEach((t,i) => {
    t.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'register'));
  });
  document.getElementById('form-login').classList.toggle('active', tab === 'login');
  document.getElementById('form-register').classList.toggle('active', tab === 'register');
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim() || 'traveler@example.com';
  const name = email.split('@')[0];
  currentUser = { name, email };
  setUserName(name);
  transitionTo('regions');
  showToast('Welcome back, ' + name + '!');
  setTimeout(showMascot, 2000);
  window.location.href = 'region.html';
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim() || 'Traveler';
  const email = document.getElementById('reg-email').value.trim() || 'traveler@example.com';
  currentUser = { name, email };
  setUserName(name);
  transitionTo('regions');
  showToast('Welcome to Kyrgyzstan, ' + name + '!');
  setTimeout(showMascot, 2000);
    window.location.href = 'region.html';
}

function setUserName(name) {
  const initial = name.charAt(0).toUpperCase();
  ['userAvatar', 'userAvatar2', 'userAvatar3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = initial;
  });
  const el = document.getElementById('userName');
  if (el) el.textContent = name;
}

// ==================== NAVIGATION ====================
function navigateTo(page) {
  const pageMap = {
    'regions': 'page-regions',
    'planner': 'page-planner',
    'region': 'page-region-detail'
  };
  transitionTo(page);
}

function transitionTo(page) {
  const pt = document.getElementById('pageTransition');
  pt.classList.add('enter');
  setTimeout(() => {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pageId = page === 'regions' ? 'page-regions' :
                   page === 'planner' ? 'page-planner' :
                   page === 'region' ? 'page-region-detail' :
                   page === 'register' ? 'page-register' : 'page-regions';
    document.getElementById(pageId).classList.add('active');
    pt.classList.remove('enter');
    pt.classList.add('exit');
    setTimeout(() => pt.classList.remove('exit'), 500);
    window.scrollTo(0, 0);
  }, 400);
}

// ==================== REGIONS MAP ====================
const TOOLTIP_DATA = {
  'Талас': { title: 'Таласская область', desc: 'Эпос о Земле Манаса и битва при Таласе' },
  'Чуй': { title: 'Чуйская область', desc: 'Древние долины Шелкового пути и башня Бурана' },
  'Иссyk-Куль': { title: 'Иссык-Кульская область', desc: 'Теплое горное озеро — альпийский рай' },
  'Нарын': { title: 'Нарынская область', desc: 'Высокие степи, Таш-Рабат и озеро Сон-Куль' },
  'Джалал-Абад': { title: 'Джалал-Абадская область', desc: 'Древние ореховые леса и святые источники' },
  'Ош': { title: 'Ошская область', desc: 'Сулейман-Тоо и вечный город Шелкового пути' },
  'Баткен': { title: 'Баткенская область', desc: 'Отдаленный фронт — где орлы свободно парят' },
  'Бишкек': { title: 'Бишкекская область', desc: 'Живописный столица — культура, кулинария и ночной образ жизни' }
};

function showTooltip(e, region) {
  const tooltip = document.getElementById('mapTooltip');
  const data = TOOLTIP_DATA[region];
  
  if (!data) return;
  document.getElementById('tooltipTitle').textContent = data.title;
  document.getElementById('tooltipDesc').textContent = data.desc;
  tooltip.classList.add('visible');
  tooltip.style.left = (e.clientX + 15) + 'px';
  tooltip.style.top = (e.clientY - 10) + 'px';
}

function hideTooltip() {
  document.getElementById('mapTooltip').classList.remove('visible');

}

function openRegion(regionKey) {
  if (!REGIONS[regionKey]) {
    // Bishkek-city maps to bishkek-city key
    regionKey = 'bishkek-city';
    if (!REGIONS[regionKey]) return;
  }
  currentRegion = regionKey;
  const region = REGIONS[regionKey];
window.location.href = 'oblas.html';
  // Set hero
  document.getElementById('regionTitle').textContent = region.name;
  document.getElementById('regionTagline').textContent = region.tagline;
  document.getElementById('regionHeroBg').style.background = region.bg;
  document.getElementById('regionBadge').textContent = region.emoji + ' Oblast';
  document.getElementById('regionBadge').style.color = region.color;
  document.getElementById('regionBadge').style.borderColor = region.color;

  // History
  const histText = document.getElementById('historyText');
  
  histText.innerHTML = `
    <h2>${region.name}: История, написанная в горах.</h2>
    <p>${region.history.intro}</p>
    <p>${region.history.text2}</p>
  `;

  const histTimeline = document.getElementById('historyTimeline');
  histTimeline.innerHTML = region.history.timeline.map(t => `
    <div class="timeline-item">
      <h4>${t.year}</h4>
      <p>${t.text}</p>
    </div>
  `).join('');

  // Places
  const placesGrid = document.getElementById('placesGrid');
  window.location.href = 'oblas.html';
  placesGrid.innerHTML = region.places.map(p => `
    <div class="place-card">
      <div class="place-card-img" style="background: linear-gradient(135deg, ${region.color}33, ${region.color}11)">
        <span>${p.emoji}</span>
      </div>
      <div class="place-card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <span class="place-tag" style="color:${p.tagColor}; border-color:${p.tagColor}">${p.tag}</span>
      </div>
    </div>
  `).join('');

  // Reviews
  renderReviews(regionKey);

  // Reset tabs
  switchRegionTab('history');

  transitionTo('region');
}

function switchRegionTab(tab) {
  document.querySelectorAll('.region-tab').forEach((t,i) => {
    const tabs = ['history', 'places', 'reviews'];
    t.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.region-section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec-' + tab).classList.add('active');
}

// ==================== REVIEWS ====================
function renderReviews(regionKey) {
  const reviews = reviewsByRegion[regionKey] || [];
  const list = document.getElementById('reviewsList');
  if (reviews.length === 0) {
    list.innerHTML = '<p style="color:rgba(245,240,232,0.3); font-style:italic; text-align:center; padding:30px 0">Пока нет историй. Станьте первым, кто поделится своим опытом!</p>';
    return;
  }
  list.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
        </div>
        <div class="reviewer-date">${formatDate(r.date)}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join('');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m] = dateStr.split('-');
  const months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
  return months[parseInt(m)-1] + ' ' + y;
}

function toggleReviewForm() {
  const form = document.getElementById('reviewForm');
  form.classList.toggle('visible');
}

function setRating(val) {
  currentRating = val;
  document.querySelectorAll('.star-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < val);
  });
}

function submitReview() {
  const name = document.getElementById('reviewName').value.trim();
  const text = document.getElementById('reviewText').value.trim();
  const date = document.getElementById('reviewDate').value;

  if (!name || !text) {
    showToast('Please fill in your name and story!');
    return;
  }

  const review = {
    name: name,
    date: date || new Date().toISOString().slice(0, 7),
    stars: currentRating || 5,
    text: text
  };

  if (!reviewsByRegion[currentRegion]) reviewsByRegion[currentRegion] = [];
  reviewsByRegion[currentRegion].unshift(review);
  renderReviews(currentRegion);

  document.getElementById('reviewName').value = '';
  document.getElementById('reviewText').value = '';
  document.getElementById('reviewDate').value = '';
  currentRating = 0;
  setRating(0);
  document.getElementById('reviewForm').classList.remove('visible');
  showToast('Your story has been shared! ✨');
  switchRegionTab('reviews');
}

// ==================== PLANNER ====================
function updatePlannerMap() {
  const checked = Array.from(document.querySelectorAll('.region-checkboxes input:checked')).map(i => i.value);
  // Update map canvas based on selections
  if (checked.length > 0) {
    document.getElementById('mapPlaceholder').style.opacity = '0.3';
  } else {
    document.getElementById('mapPlaceholder').style.opacity = '1';
  }
}

const REGION_COORDS = {
  'Город-Бишкек': { x: 310, y: 135, name: 'Бишкек', color: '#4A90D9' },
  'Чуй':         { x: 265, y: 120, name: 'Чуй', color: '#5BA85C' },
  'Иссык-Куль':    { x: 460, y: 130, name: 'Иссык-Куль', color: '#3AAFA9' },
  'Нарын':        { x: 360, y: 200, name: 'Нарын', color: '#C47B2B' },
  'Джалал-Абад':   { x: 195, y: 220, name: 'Джалал-Абад', color: '#8B5CF6' },
  'Ош':          { x: 240, y: 300, name: 'Ош', color: '#E05C3A' },
  'Баткен':       { x: 145, y: 310, name: 'Баткен', color: '#D4455B' },
  'Талас':        { x: 155, y: 140, name: 'Талас', color: '#2D9CDB' }
};

const NEARBY_DATA = {
  'hotel': [
    { name: 'Юрта в Бишкеке', type: 'Юрта', emoji: '🏨', note: '4.8★ — Традиционный отель-юрта, центр города' },
    { name: 'Hyatt Regency Бишкек', type: 'Отель', emoji: '🏨', note: '4.9★ - Роскошный, Ala-Too Square' },
    { name: 'Гостевой дом Каракол', type: 'Отель', emoji: '🏠', note: '4.7★ — Уютное место недалеко от Тянь-Шаня' },
    { name: 'Ош Отель', type: 'Отель', emoji: '🏨', note: '4.5★ — Рядом с Сулейманом-Тоо' }
  ],
  'cafe': [
    { name: 'Navat Café', type: 'Café', emoji: '☕', note: 'Традиционная киргизская кухня, Бишкек' },
    { name: 'Fatboys Restaurant', type: 'Restaurant', emoji: '🍽', note: 'International & local, very popular' },
    { name: 'Arzu Bakery', type: 'Bakery', emoji: '🥐', note: 'Best samsa & lepyoshka in the city' },
    { name: 'Jalal-Abad Tea House', type: 'Tea House', emoji: '🫖', note: 'Traditional green tea & pastries' }
  ],
  'attraction': [
    { name: 'Ala-Too Square', type: 'Landmark', emoji: '🏛', note: 'Heart of the capital, free entry' },
    { name: 'Suleiman-Too', type: 'UNESCO Site', emoji: '⛰', note: 'Sacred mountain of Osh, sunrise recommended' },
    { name: 'Burana Tower', type: 'Historic', emoji: '🗼', note: '11th-century minaret, Chuy Valley' },
    { name: 'Jeti-Oguz Gorge', type: 'Nature', emoji: '🗿', note: 'Red sandstone rocks, 1hr from Karakol' }
  ],
  'gas': [
    { name: 'Gazprom Station — Bishkek', type: 'Gas Station', emoji: '⛽', note: '24/7, all fuel types' },
    { name: 'Manas Highway Stop', type: 'Gas Station', emoji: '⛽', note: 'On main highway, café attached' },
    { name: 'Karakol Petrol', type: 'Gas Station', emoji: '⛽', note: 'Near city center, reliable' }
  ]
};

function findNearby(type) {
  const stops = NEARBY_DATA[type] || [];
  const stopsList = document.getElementById('stopsList');
  
  stops.forEach((stop, i) => {
    setTimeout(() => {
      plannerStops.push(stop);
      renderPlannerStops();
      showToast(stop.emoji + ' ' + stop.name + ' added!');
    }, i * 200);
  });
}

function renderPlannerStops() {
  const list = document.getElementById('stopsList');
  const count = document.getElementById('stopCount');
  count.textContent = '(' + plannerStops.length + ')';
  
  if (plannerStops.length === 0) {
    list.innerHTML = '<p style="color:rgba(245,240,232,0.25); font-style:italic; font-size:13px; text-align:center; padding:20px 0">No stops added yet.</p>';
    return;
  }

  list.innerHTML = plannerStops.map((stop, i) => `
    <div class="stop-item">
      <div class="stop-icon ${stop.type === 'Hotel' || stop.type === 'Guesthouse' ? 'hotel' : stop.type === 'Café' || stop.type === 'Restaurant' || stop.type === 'Bakery' || stop.type === 'Tea House' ? 'cafe' : 'attraction'}">
        ${stop.emoji}
      </div>
      <div class="stop-info">
        <small>${stop.type.toUpperCase()}</small>
        <h4>${stop.name}</h4>
        <p>${stop.note || ''}</p>
      </div>
    </div>
  `).join('');
}

function buildRoute() {
  const checked = Array.from(document.querySelectorAll('.region-checkboxes input:checked')).map(i => i.value);
  
  if (checked.length === 0 && plannerStops.length === 0) {
    showToast('Select at least one region first!');
    return;
  }

  const canvas = document.getElementById('map-canvas');
  const placeholder = document.getElementById('mapPlaceholder');
  placeholder.style.display = 'none';

  // Clear existing markers
  document.querySelectorAll('.map-marker').forEach(m => m.remove());
  
  const svg = document.getElementById('routeSvg');
  svg.innerHTML = '';

  const regions = checked.length > 0 ? checked : ['bishkek-city', 'issyk-kul', 'naryn'];
  const points = [];
  const canvasRect = canvas.getBoundingClientRect();
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  regions.forEach((regionKey, idx) => {
    const coord = REGION_COORDS[regionKey];
    if (!coord) return;

    // Convert from 800x400 SVG space to canvas space
    const x = (coord.x / 800) * w;
    const y = (coord.y / 400) * h;
    points.push({ x, y, name: coord.name, color: coord.color });

    // Create marker
    const marker = document.createElement('div');
    marker.className = 'map-marker';
    marker.style.left = x + 'px';
    marker.style.top = y + 'px';
    marker.style.animationDelay = (idx * 0.2) + 's';
    marker.innerHTML = `
      <div class="marker-label">${coord.name}</div>
      <div class="marker-pin" style="background:${coord.color}">
        <span>📍</span>
      </div>
    `;
    canvas.appendChild(marker);
  });

  // Draw route lines
  if (points.length > 1) {
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    const pts = points.map(p => `${p.x},${p.y}`).join(' ');
    polyline.setAttribute('points', pts);
    polyline.setAttribute('class', 'route-line');
    svg.appendChild(polyline);

    // Draw circles at each point
    points.forEach(p => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', p.x);
      circle.setAttribute('cy', p.y);
      circle.setAttribute('r', '6');
      circle.setAttribute('fill', p.color);
      circle.setAttribute('opacity', '0.8');
      svg.appendChild(circle);
    });
  }

  // Show route info
  const totalDist = regions.length * 180 + Math.floor(Math.random() * 200);
  const totalDays = Math.ceil(regions.length * 1.5) + 1;
  
  document.getElementById('routeDistance').textContent = totalDist;
  document.getElementById('routeDays').textContent = totalDays;
  document.getElementById('routeStops').textContent = regions.length + plannerStops.length;
  document.getElementById('routeInfo').classList.add('visible');

  // Add region stops to sidebar
  regions.forEach(r => {
    const coord = REGION_COORDS[r];
    if (coord && !plannerStops.find(s => s.name === coord.name)) {
      plannerStops.push({
        name: coord.name,
        type: 'Destination',
        emoji: REGIONS[r]?.emoji || '📍',
        note: 'Main regional stop'
      });
    }
  });
  renderPlannerStops();
  showToast('🗺 Route built! ' + regions.length + ' regions, ' + totalDist + 'km');
}

// ==================== ADD TRIP MODAL ====================
function openAddTripModal() {
  document.getElementById('addTripModal').classList.add('visible');
  currentModalStep = 1;
  modalSelectedRegions = [];
  modalStops = [];
  updateModalSteps();
}

function closeAddTripModal() {
  document.getElementById('addTripModal').classList.remove('visible');
}

function updateModalSteps() {
  for (let i = 1; i <= 4; i++) {
    const ind = document.getElementById('stepInd' + i);
    const content = document.getElementById('tripStep' + i);
    ind.classList.remove('active', 'done');
    content.classList.remove('active');
    if (i < currentModalStep) ind.classList.add('done');
    if (i === currentModalStep) { ind.classList.add('active'); content.classList.add('active'); }
  }
  document.getElementById('modalPrevBtn').style.visibility = currentModalStep > 1 ? 'visible' : 'hidden';
  const nextBtn = document.getElementById('modalNextBtn');
  nextBtn.textContent = currentModalStep === 4 ? 'Confirm Trip ✓' : 'Next Step →';
}

function modalNext() {
  if (currentModalStep === 4) {
    finalizeTripPlan();
    return;
  }
  if (currentModalStep === 3) buildModalStops();
  if (currentModalStep === 2) generateModalStops();
  if (currentModalStep < 4) {
    currentModalStep++;
    if (currentModalStep === 4) buildTripSummary();
    updateModalSteps();
  }
}

function modalPrev() {
  if (currentModalStep > 1) {
    currentModalStep--;
    updateModalSteps();
  }
}

function selectStyle(el, style) {
  document.querySelectorAll('#tripStep1 .detail-box').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  tripStyle = style;
}

function toggleModalRegion(el, region) {
  el.classList.toggle('selected');
  const idx = modalSelectedRegions.indexOf(region);
  if (idx > -1) modalSelectedRegions.splice(idx, 1);
  else modalSelectedRegions.push(region);
}

function generateModalStops() {
  const stopEmojis = {
    'Bishkek': ['🏛 Ala-Too Square', '🛒 Osh Bazaar', '🏨 Hyatt Regency Bishkek', '☕ Navat Café'],
    'Issyk-Kul': ['🏖 Karakol Beach', '🗿 Jeti-Oguz Gorge', '🏨 Issyk-Kul Aurora', '☕ Cholpon-Ata Café'],
    'Naryn': ['🏯 Tash Rabat', '🌊 Son-Kul Lake', '🏕 Yurt Camp Son-Kul', '☕ Naryn Café'],
    'Osh': ['⛰ Suleiman-Too', '🛒 Jayma Bazaar', '🏨 Osh Hotel', '☕ Fergana Tea House'],
    'Jalal-Abad': ['🌳 Arslanbob Forest', '💧 Sacred Waterfall', '🏠 Arslanbob Homestay', '☕ Village Tea House'],
    'Talas': ['🏛 Manas Mausoleum', '🌄 Talas Valley Viewpoint', '🏕 Steppe Yurt Camp', '☕ Eagle Valley Café'],
    'Batken': ['🦅 Ak-Suu Gorge', '🏛 Isfana Old Town', '🏠 Mountain Homestay', '☕ Batken Teahouse'],
    'Chuy': ['🗼 Burana Tower', '🌄 Chon-Kemin Valley', '🏠 Yurt Guesthouse', '☕ Tokmok Café']
  };

  modalStops = [];
  modalSelectedRegions.forEach(region => {
    const stops = stopEmojis[region] || [];
    stops.forEach(s => {
      const [emoji, ...nameParts] = s.split(' ');
      modalStops.push({ emoji, name: nameParts.join(' '), region });
    });
  });
}

function buildModalStops() {
  const list = document.getElementById('modalStopsList');
  list.innerHTML = modalStops.map((stop, i) => `
    <div class="modal-stop">
      <div class="stop-number">${i+1}</div>
      <div class="stop-text">${stop.emoji} ${stop.name}</div>
      <div class="stop-type">${stop.region}</div>
    </div>
  `).join('') || '<p style="color:rgba(245,240,232,0.4); font-style:italic">Select regions first to auto-generate stops.</p>';
}

function addQuickStop(type) {
  const stops = {
    hotel: { emoji: '🏨', name: 'Nearest Hotel', region: 'Auto-detected' },
    cafe: { emoji: '☕', name: 'Local Café', region: 'Auto-detected' },
    sight: { emoji: '🏛', name: 'Historical Sight', region: 'Auto-detected' }
  };
  modalStops.push(stops[type]);
  buildModalStops();
  showToast('Stop added!');
}

function buildTripSummary() {
  const name = document.getElementById('modalTripName').value || 'My Kyrgyzstan Adventure';
  const start = document.getElementById('modalStartDate').value;
  const end = document.getElementById('modalEndDate').value;
  const travelers = document.getElementById('modalTravelers').value || '2';
  
  const summary = document.getElementById('tripSummary');
  summary.innerHTML = `
    <div style="background:rgba(200,150,62,0.05); border:1px solid rgba(200,150,62,0.2); padding:25px; margin-bottom:20px">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:20px">
        <div>
          <div style="font-family:'Space Mono',monospace; font-size:9px; letter-spacing:2px; color:rgba(245,240,232,0.4); text-transform:uppercase; margin-bottom:4px">Trip Name</div>
          <div style="font-family:'Cinzel',serif; font-size:18px; color:var(--gold)">${name}</div>
        </div>
        <div>
          <div style="font-family:'Space Mono',monospace; font-size:9px; letter-spacing:2px; color:rgba(245,240,232,0.4); text-transform:uppercase; margin-bottom:4px">Travel Style</div>
          <div style="font-family:'Cinzel',serif; font-size:18px; color:var(--snow)">${tripStyle || 'Adventure'}</div>
        </div>
        <div>
          <div style="font-family:'Space Mono',monospace; font-size:9px; letter-spacing:2px; color:rgba(245,240,232,0.4); text-transform:uppercase; margin-bottom:4px">Dates</div>
          <div style="color:var(--sand); font-size:15px">${start || 'TBD'} → ${end || 'TBD'}</div>
        </div>
        <div>
          <div style="font-family:'Space Mono',monospace; font-size:9px; letter-spacing:2px; color:rgba(245,240,232,0.4); text-transform:uppercase; margin-bottom:4px">Travelers</div>
          <div style="color:var(--sand); font-size:15px">${travelers} people</div>
        </div>
      </div>
      <div>
        <div style="font-family:'Space Mono',monospace; font-size:9px; letter-spacing:2px; color:rgba(245,240,232,0.4); text-transform:uppercase; margin-bottom:10px">Regions (${modalSelectedRegions.length})</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px">
          ${modalSelectedRegions.map(r => `<span style="background:rgba(200,150,62,0.15); border:1px solid rgba(200,150,62,0.3); padding:4px 12px; font-family:'Space Mono',monospace; font-size:9px; color:var(--gold)">${r}</span>`).join('')}
        </div>
      </div>
    </div>
    <div>
      <div style="font-family:'Space Mono',monospace; font-size:9px; letter-spacing:2px; color:rgba(245,240,232,0.4); text-transform:uppercase; margin-bottom:12px">Planned Stops (${modalStops.length})</div>
      ${modalStops.slice(0,8).map((s, i) => `
        <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid rgba(200,150,62,0.07)">
          <span style="font-family:'Space Mono',monospace; font-size:10px; color:var(--gold); min-width:20px">${i+1}.</span>
          <span style="color:var(--sand); font-size:14px">${s.emoji} ${s.name}</span>
          <span style="margin-left:auto; color:rgba(245,240,232,0.3); font-size:11px; font-style:italic">${s.region}</span>
        </div>
      `).join('')}
      ${modalStops.length > 8 ? `<div style="color:rgba(245,240,232,0.3); font-style:italic; font-size:13px; padding-top:8px">+${modalStops.length - 8} more stops...</div>` : ''}
    </div>
  `;
}

function finalizeTripPlan() {
  closeAddTripModal();

  // Push stops to main planner
  modalStops.forEach(s => {
    if (!plannerStops.find(p => p.name === s.name)) {
      plannerStops.push({ name: s.name, type: 'Planned', emoji: s.emoji, note: s.region });
    }
  });
  renderPlannerStops();

  // Check regions in sidebar
  modalSelectedRegions.forEach(region => {
    const regionKey = region.toLowerCase().replace(' ', '-').replace('-', '-');
    const checkboxes = document.querySelectorAll('.region-checkboxes input');
    checkboxes.forEach(cb => {
      if (cb.value.includes(regionKey.split('-')[0])) cb.checked = true;
    });
  });

  showToast('✨ Trip plan created! Building your route...');
  setTimeout(buildRoute, 800);
}

// ==================== MASCOT ====================
function showMascot() {
  const mascot = document.getElementById('mascot');
  mascot.style.display = 'block';
  mascotSpeak();
}

let mascotIndex = 0;
function mascotSpeak() {
  const bubble = document.getElementById('mascotBubble');
  bubble.textContent = MASCOT_PHRASES[mascotIndex % MASCOT_PHRASES.length];
  bubble.classList.add('visible');
  mascotIndex++;
  setTimeout(() => bubble.classList.remove('visible'), 5000);
}

// Auto mascot hints
setInterval(() => {
  const mascot = document.getElementById('mascot');
  if (mascot.style.display === 'block' && Math.random() > 0.7) mascotSpeak();
}, 15000);

// ==================== TOAST ====================
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastText').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==================== INIT ====================
// Auto-open registration on load with animation
window.addEventListener('load', () => {
  // Set default dates
  const today = new Date();
  const future = new Date(today);
  future.setDate(today.getDate() + 14);
  const fmt = d => d.toISOString().split('T')[0];
  ['tripStart', 'modalStartDate'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = fmt(today);
  });
  ['tripEnd', 'modalEndDate'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = fmt(future);
  });
});

// Close modal on overlay click
document.getElementById('addTripModal').addEventListener('click', function(e) {
  if (e.target === this) closeAddTripModal();
});