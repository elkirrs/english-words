const unit01 = [
    {"en": "age", "ru": "возраст", "part_of_speech": "n", "pronunciation": "/eɪdʒ/"},
    {"en": "all right", "ru": "все порядке", "part_of_speech": "adj", "pronunciation": "/ɔːl raɪt/"},
    {"en": "American", "ru": "американский", "part_of_speech": "adj", "pronunciation": "/əˈmerɪkən/"},
    {"en": "aunt", "ru": "тетя", "part_of_speech": "n", "pronunciation": "/ɑːnt/"},
    {"en": "bad", "ru": "плохой", "part_of_speech": "adj", "pronunciation": "/bæd/"},
    {"en": "beautiful", "ru": "красивый", "part_of_speech": "adj", "pronunciation": "/ˈbjuːtɪfl/"},
    {"en": "big", "ru": "большой", "part_of_speech": "adj", "pronunciation": "/bɪg/"},
    {"en": "blog", "ru": "блог", "part_of_speech": "n", "pronunciation": "/blɒg/"},
    {"en": "boyfriend", "ru": "парень", "part_of_speech": "n", "pronunciation": "/ˈbɔɪfrɛnd/"},
    {"en": "brother", "ru": "брат", "part_of_speech": "n", "pronunciation": "/ˈbrʌðər/"},
    {"en": "bye", "ru": "пока", "part_of_speech": "interjection", "pronunciation": "/baɪ/"},
    {"en": "cafe", "ru": "кафе", "part_of_speech": "n", "pronunciation": "/ˈkæfeɪ/"},
    {"en": "car", "ru": "машина", "part_of_speech": "n", "pronunciation": "/kɑːr/"},
    {"en": "centre", "ru": "центр", "part_of_speech": "n", "pronunciation": "/ˈsɛntər/"},
    {"en": "cheap", "ru": "дешевый", "part_of_speech": "adj", "pronunciation": "/tʃiːp/"},
    {"en": "children", "ru": "дети", "part_of_speech": "pl n", "pronunciation": "/ˈtʃɪldrən/"},
    {"en": "city", "ru": "город", "part_of_speech": "n", "pronunciation": "/ˈsɪti/"},
    {"en": "class", "ru": "класс", "part_of_speech": "n", "pronunciation": "/klɑːs/"},
    {"en": "coffee bars", "ru": "кофейный бар", "part_of_speech": "pl n", "pronunciation": "/ˈkɒfi bɑːrz/"},
    {"en": "cold", "ru": "холодный", "part_of_speech": "adj", "pronunciation": "/kəʊld/"},
    {"en": "cousin", "ru": "двоюродный брат/сестра", "part_of_speech": "n", "pronunciation": "/ˈkʌzən/"},
    {"en": "darling", "ru": "дорогой (друг)", "part_of_speech": "n", "pronunciation": "/ˈdɑːrlɪŋ/"},
    {"en": "difficult", "ru": "трудный, сдложный", "part_of_speech": "adj", "pronunciation": "/ˈdɪfɪkəlt/"},
    {"en": "doctor", "ru": "доктор", "part_of_speech": "n", "pronunciation": "/ˈdɒktə(r)/"},
    {"en": "easy", "ru": "лёгкий", "part_of_speech": "adj", "pronunciation": "/ˈiːzi/"},
    {"en": "Egypt", "ru": "Египет", "part_of_speech": "n", "pronunciation": "/ˈiːdʒɪpt/"},
    {"en": "email address", "ru": "адрес электронной почты", "part_of_speech": "n", "pronunciation": "/ˈiːmeɪl əˈdrɛs/"},
    {"en": "English", "ru": "английский", "part_of_speech": "adj", "pronunciation": "/ˈɪŋɡlɪʃ/"},
    {"en": "Europe", "ru": "Европа", "part_of_speech": "n", "pronunciation": "/ˈjʊərəp/"},
    {"en": "expensive", "ru": "дорогой", "part_of_speech": "adj", "pronunciation": "/ɪkˈspɛnsɪv/"},
    {"en": "family", "ru": "семья", "part_of_speech": "n", "pronunciation": "/ˈfæmɪli/"},
    {"en": "fast", "ru": "быстрый", "part_of_speech": "adj", "pronunciation": "/fɑːst/"},
    {"en": "father", "ru": "отец", "part_of_speech": "n", "pronunciation": "/ˈfɑːðə(r)/"},
    {"en": "first name", "ru": "имя", "part_of_speech": "n", "pronunciation": "/ˈfɜːst neɪm/"},
    {"en": "free", "ru": "свободный, бесплатный", "part_of_speech": "adj", "pronunciation": "/friː/"},
    {"en": "French", "ru": "французский", "part_of_speech": "adj", "pronunciation": "/frɛntʃ/"},
    {"en": "Friday", "ru": "пятница", "part_of_speech": "n", "pronunciation": "/ˈfraɪdeɪ/"},
    {"en": "friendly", "ru": "дружелюбный", "part_of_speech": "adj", "pronunciation": "/ˈfrɛndli/"},
    {"en": "from", "ru": "из", "part_of_speech": "prep", "pronunciation": "/frɒm/"},
    {"en": "gallery", "ru": "галерея", "part_of_speech": "n", "pronunciation": "/ˈɡæləri/"},
    {"en": "Germany", "ru": "Германия", "part_of_speech": "n", "pronunciation": "/ˈdʒɜːrməni/"},
    {"en": "girl", "ru": "девушка", "part_of_speech": "n", "pronunciation": "/ɡɜːrl/"},
    {"en": "girlfriend", "ru": "подруга", "part_of_speech": "n", "pronunciation": "/ˈɡɜːrlfrɛnd/"},
    {"en": "good", "ru": "хороший", "part_of_speech": "adj", "pronunciation": "/ɡʊd/"},
    {"en": "good afternoon", "ru": "добрый день", "part_of_speech": "phrase", "pronunciation": "/ɡʊd ˌɑːftəˈnuːn/"},
    {"en": "good morning", "ru": "доброе утро", "part_of_speech": "phrase", "pronunciation": "/ɡʊd ˈmɔːnɪŋ/"},
    {"en": "good night", "ru": "спокойной ночи", "part_of_speech": "phrase", "pronunciation": "/ɡʊd naɪt/"},
    {"en": "goodbye", "ru": "до свидания", "part_of_speech": "interjection", "pronunciation": "/ɡʊdˈbaɪ/"},
    {"en": "grandfather", "ru": "дедушка", "part_of_speech": "n", "pronunciation": "/ˈɡrænfɑːðə(r)/"},
    {"en": "grandmother", "ru": "бабушка", "part_of_speech": "n", "pronunciation": "/ˈɡrænmʌðə(r)/"},
    {"en": "great", "ru": "отличный", "part_of_speech": "adj", "pronunciation": "/ɡreɪt/"},
    {"en": "hello", "ru": "привет", "part_of_speech": "interjection", "pronunciation": "/həˈləʊ/"},
    {"en": "her", "ru": "её", "part_of_speech": "pron", "pronunciation": "/hɜːr/"},
    {"en": "hi", "ru": "привет", "part_of_speech": "interjection", "pronunciation": "/haɪ/"},
    {"en": "his", "ru": "его", "part_of_speech": "pron", "pronunciation": "/hɪz/"},
    {"en": "home", "ru": "дом", "part_of_speech": "n", "pronunciation": "/həʊm/"},
    {"en": "homework", "ru": "домашняя работа", "part_of_speech": "n", "pronunciation": "/ˈhəʊmwɜːrk/"},
    {"en": "horrible", "ru": "ужасный", "part_of_speech": "adj", "pronunciation": "/ˈhɒrəbl/"},
    {"en": "hot", "ru": "горячий", "part_of_speech": "adj", "pronunciation": "/hɒt/"},
    {"en": "house", "ru": "дом", "part_of_speech": "n", "pronunciation": "/haʊs/"},
    {"en": "Hungary", "ru": "Венгрия", "part_of_speech": "n", "pronunciation": "/ˈhʌŋɡəri/"},
    {"en": "husband", "ru": "муж", "part_of_speech": "n", "pronunciation": "/ˈhʌzbənd/"},
    {"en": "interesting", "ru": "интересный", "part_of_speech": "adj", "pronunciation": "/ˈɪntrɪstɪŋ/"},
    {"en": "international", "ru": "международный", "part_of_speech": "adj", "pronunciation": "/ˌɪntəˈnæʃənl/"},
    {"en": "Italian", "ru": "итальянский", "part_of_speech": "adj", "pronunciation": "/ɪˈtæliən/"},
    {"en": "Japan", "ru": "Япония", "part_of_speech": "n", "pronunciation": "/dʒəˈpæn/"},
    {"en": "language", "ru": "язык", "part_of_speech": "n", "pronunciation": "/ˈlæŋɡwɪdʒ/"},
    {"en": "like", "ru": "нравиться", "part_of_speech": "v", "pronunciation": "/laɪk/"},
    {"en": "live", "ru": "жить", "part_of_speech": "v", "pronunciation": "/lɪv/"},
    {"en": "look", "ru": "смотреть", "part_of_speech": "v", "pronunciation": "/lʊk/"},
    {"en": "love", "ru": "любить", "part_of_speech": "v", "pronunciation": "/lʌv/"},
    {"en": "lovely", "ru": "прекрасный", "part_of_speech": "adj", "pronunciation": "/ˈlʌvli/"},
    {"en": "married", "ru": "женатый", "part_of_speech": "adj", "pronunciation": "/ˈmærid/"},
    {"en": "office", "ru": "офис", "part_of_speech": "n", "pronunciation": "/ˈɒfɪs/"},
    {"en": "old", "ru": "старый", "part_of_speech": "adj", "pronunciation": "/əʊld/"},
    {"en": "parents", "ru": "родители", "part_of_speech": "pl n", "pronunciation": "/ˈpeərənts/"},
    {"en": "park", "ru": "парк", "part_of_speech": "n", "pronunciation": "/pɑːk/"},
    {"en": "people", "ru": "люди", "part_of_speech": "n", "pronunciation": "/ˈpiːpl/"},
    {"en": "phone number", "ru": "номер телефона", "part_of_speech": "n", "pronunciation": "/fəʊn ˈnʌmbə(r)/"},
    {"en": "places", "ru": "места", "part_of_speech": "pl n", "pronunciation": "/ˈpleɪsɪz/"},
    {"en": "please", "ru": "пожалуйста", "part_of_speech": "adv", "pronunciation": "/pliːz/"},
    {"en": "really", "ru": "действительно", "part_of_speech": "adv", "pronunciation": "/ˈrɪəli/"},
    {"en": "Rome", "ru": "Рим", "part_of_speech": "n", "pronunciation": "/rəʊm/"},
    {"en": "salesman", "ru": "продавец", "part_of_speech": "n", "pronunciation": "/ˈseɪlzmən/"},
    {"en": "same", "ru": "такой же", "part_of_speech": "pron", "pronunciation": "/seɪm/"},
    {"en": "school", "ru": "школа", "part_of_speech": "n", "pronunciation": "/skuːl/"},
    {"en": "shopping", "ru": "покупки", "part_of_speech": "n", "pronunciation": "/ˈʃɒpɪŋ/"},
    {"en": "shops", "ru": "магазины", "part_of_speech": "pl n", "pronunciation": "/ʃɒps/"},
    {"en": "sister", "ru": "сестра", "part_of_speech": "n", "pronunciation": "/ˈsɪstər/"},
    {"en": "slow", "ru": "медленный", "part_of_speech": "adj", "pronunciation": "/sləʊ/"},
    {"en": "small", "ru": "маленький", "part_of_speech": "adj", "pronunciation": "/smɔːl/"},
    {"en": "son", "ru": "сын", "part_of_speech": "n", "pronunciation": "/sʌn/"},
    {"en": "Spain", "ru": "Испания", "part_of_speech": "n", "pronunciation": "/speɪn/"},
    {"en": "speak", "ru": "говорить", "part_of_speech": "v", "pronunciation": "/spiːk/"},
    {"en": "spell", "ru": "печатать, писать по буквам", "part_of_speech": "v", "pronunciation": "/spɛl/"},
    {"en": "student", "ru": "студент", "part_of_speech": "n", "pronunciation": "/ˈstjuːdənt/"},
    {"en": "sunny", "ru": "солнечный", "part_of_speech": "adj", "pronunciation": "/ˈsʌni/"},
    {"en": "surname", "ru": "фамилия", "part_of_speech": "n", "pronunciation": "/ˈsɜːneɪm/"},
    {"en": "Switzerland", "ru": "Швейцария", "part_of_speech": "n", "pronunciation": "/ˈswɪtsərlənd/"},
    {"en": "teacher", "ru": "учитель", "part_of_speech": "n", "pronunciation": "/ˈtiːtʃə(r)/"},
    {"en": "thank goodness", "ru": "слава богу", "part_of_speech": "phrase", "pronunciation": "/θæŋk ˈɡʊdnəs/"},
    {"en": "thanks", "ru": "спасибо", "part_of_speech": "interjection", "pronunciation": "/θæŋks/"},
    {"en": "them", "ru": "их", "part_of_speech": "pron", "pronunciation": "/ðem/"},
    {"en": "today", "ru": "сегодня", "part_of_speech": "n", "pronunciation": "/təˈdeɪ/"},
    {"en": "uncle", "ru": "дядя", "part_of_speech": "n", "pronunciation": "/ˈʌŋkl/"},
    {"en": "what", "ru": "что", "part_of_speech": "pron", "pronunciation": "/wɒt/"},
    {"en": "where", "ru": "где", "part_of_speech": "adv", "pronunciation": "/weə(r)/"},
    {"en": "wife", "ru": "жена", "part_of_speech": "n", "pronunciation": "/waɪf/"},
    {"en": "year", "ru": "год", "part_of_speech": "n", "pronunciation": "/jɪə(r)/"},
    {"en": "young", "ru": "молодой", "part_of_speech": "adj", "pronunciation": "/jʌŋ/"}
]