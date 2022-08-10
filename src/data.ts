export type Sign = {
    id: number;
    image: string;
    name: string;
    description: string;
};
export const signs: Sign[] = [
    {
        id: 1,
        image: 'Znak_A-1.svg',
        name: 'niebezpieczny zakręt w prawo',
        description:
            'Znak ostrzega przed pojedynczym niebezpiecznym zakrętem w prawo. Stosuje się go na ogół poza miastami, gdy kąt zwrotu łuku drogi jest większy niż 5°, a jego promień jest mniejszy niż 750 m oraz w zależności od przechyłki. Ustawiany także na zakrętach o ograniczonej widoczności, bądź gdzie dochodzi do częstych wypadków lub kolizji.',
    },
    {
        id: 2,
        image: 'Znak_A-2.svg',
        name: 'niebezpieczny zakręt w lewo',
        description:
            'Znak ostrzega przed pojedynczym niebezpiecznym zakrętem w lewo. Stosuje się go analogicznie jak znak A-1.',
    },
    {
        id: 3,
        image: 'Znak_A-3.svg',
        name: 'niebezpieczne zakręty – pierwszy w prawo',
        description:
            'Znak ostrzega przed niebezpiecznymi zakrętami, z których pierwszy jest w prawo. Gdy liczba zakrętów jest większa niż 2, pod znakiem mogą być umieszczone tabliczki',
    },
    {
        id: 4,
        image: 'Znak_A-4.svg',
        name: 'niebezpieczne zakręty – pierwszy w lewo',
        description:
            'Znak ostrzega przed niebezpiecznymi zakrętami, z których pierwszy jest w lewo. Gdy liczba zakrętów jest większa niż 2, pod znakiem mogą być umieszczone tabliczki',
    },
    {
        id: 5,
        image: 'Znak_A-5.svg',
        name: 'skrzyżowanie dróg',
        description:
            'Znak ostrzega przed skrzyżowaniem dróg, na którym pierwszeństwo nie jest określone znakami (skrzyżowanie równorzędne). Stosowany wyłącznie wtedy, gdy jedna z dróg miała nadane pierwszeństwo znakiem D-1 „droga z pierwszeństwem”, A-6a, A-6b, A-6c, A-6d, A-6e „skrzyżowanie z drogą podporządkowaną”, lub gdy układ skrzyżowania może sugerować inne zasady pierwszeństwa.',
    },
    {
        id: 6,
        image: 'Znak_A-6a.svg',
        name: 'skrzyżowanie z drogą podporządkowaną występującą po obu stronach',
        description:
            'Znak ostrzega przed skrzyżowaniem z drogą podporządkowaną występującą po obu stronach drogi z pierwszeństwem. Stosowany jest poza obszarem zabudowanym dla wskazania pierwszeństwa drogi przebiegającej na wprost, przy której jest ustawiony. Jeżeli osie dróg poprzecznych nie przecinają się na skrzyżowaniu, stosuje się tabliczkę T-6b „tabliczka wskazująca układ dróg podporządkowanych”.',
    },
    {
        id: 7,
        image: 'Znak_A-6b.svg',
        name: 'skrzyżowanie z drogą podporządkowaną występującą po prawej stronie',
        description:
            'Znak, stosowany podobnie jak A-6a, ostrzega przed skrzyżowaniem z drogą podporządkowaną występującą po prawej stronie drogi z pierwszeństwem.',
    },
    {
        id: 8,
        image: 'Znak_A-6c.svg',
        name: 'skrzyżowanie z drogą podporządkowaną występującą po lewej stronie',
        description:
            'Znak, stosowany podobnie jak A-6a, ostrzega przed skrzyżowaniem z drogą podporządkowaną występującą po lewej stronie drogi z pierwszeństwem.',
    },
    {
        id: 9,
        image: 'Znak_A-6d.svg',
        name: 'wlot drogi jednokierunkowej z prawej strony',
        description:
            'Znak ostrzega przed skrzyżowaniem z podporządkowanym wlotem – drogą kończącą się pasem włączania z prawej strony.',
    },
    {
        id: 10,
        image: 'Znak_A-6e.svg',
        name: 'wlot drogi jednokierunkowej z lewej strony',
        description:
            'Znak ostrzega przed skrzyżowaniem z podporządkowanym wlotem – drogą kończącą się pasem włączania z lewej strony.',
    },
    {
        id: 11,
        image: 'Znak_A-7.svg',
        name: 'ustąp pierwszeństwa',
        description:
            'Znak ostrzega przed koniecznością ustąpienia pierwszeństwa. Umieszczony jest na drodze podporządkowanej przed skrzyżowaniem z drogą z pierwszeństwem, gdy spełnione są warunki widoczności (w innym wypadku stosuje się znak B-20 „stop”). W obrębie skrzyżowania znak dotyczy tylko najbliższej jezdni, przed którą został umieszczony. Umieszczony razem ze znakiem C-12 „ruch okrężny” określa pierwszeństwo dla znajdującego się na skrzyżowaniu. Może być umieszczony w innych miejscach, gdzie z przepisów ustawy – Prawo o ruchu drogowym wynika obowiązek ustąpienia pierwszeństwa, np. wyjazd z obiektu, torowisko tramwajowe.',
    },
    {
        id: 12,
        image: 'Znak_A-8.svg',
        name: 'skrzyżowanie o ruchu okrężnym',
        description:
            'Znak ostrzega przed skrzyżowaniem, na którym ruch odbywa się dookoła wyspy lub placu w kierunku wskazanym na znaku, oznaczonym znakiem C-12 „ruch okrężny”. Stosowany zwykle, gdy droga miała wcześniej nadane pierwszeństwo lub skrzyżowanie nie jest widoczne z dostatecznej odległości.',
    },
    {
        id: 13,
        image: 'Znak_A-10.svg',
        name: 'przejazd kolejowy bez zapór',
        description:
            'Znak ostrzega przed przejazdem kolejowo-drogowym niewyposażonym w zapory lub półzapory. Umieszczany na wszystkich przejazdach kategorii „C” (tj. wyposażonych w samoczynną sygnalizację świetlną), „D” oraz sporadycznie „A”[4].',
    },
    {
        id: 14,
        image: 'Znak_A-11.svg',
        name: 'nierówna droga',
        description:
            'Znak ostrzega przed odcinkiem jezdni na którym występują poprzeczne nierówności jezdni, które mogą być niebezpieczne dla ruchu lub obniżają komfort jazdy.',
    },
    {
        id: 15,
        image: 'Znak_A-11a.svg',
        name: 'próg zwalniający',
        description:
            'Znak ostrzega przed progiem zwalniającym – wypukłością zastosowaną na jezdni w celu spowolnienia ruchu pojazdów.',
    },
    {
        id: 16,
        image: 'Znak_A-12a.svg',
        name: 'zwężenie jezdni – dwustronne',
        description:
            'Znak ostrzega przed zwężeniem jezdni, które może powodować utrudnienia ruchu lub być niebezpieczne dla kierujących, gdy występuje zmniejszenie szerokości po obu stronach jezdni przekraczające 0,2 m, a szerokość zwężonego odcinka wynosi mniej niż 5,5 m.',
    },
    {
        id: 17,
        image: 'Znak_A-12b.svg',
        name: 'zwężenie jezdni – prawostronne',
        description:
            'Znak ostrzega przed zwężeniem jezdni, które może powodować utrudnienia ruchu lub być niebezpieczne dla kierujących, gdy występuje zmniejszenie szerokości po prawej stronie jezdni przekraczające 0,2 m, a szerokość zwężonego odcinka wynosi mniej niż 5,5 m.',
    },
    {
        id: 18,
        image: 'Znak_A-12c.svg',
        name: 'zwężenie jezdni – lewostronne',
        description:
            'Znak ostrzega przed zwężeniem jezdni, które może powodować utrudnienia ruchu lub być niebezpieczne dla kierujących, gdy występuje zmniejszenie szerokości po lewej stronie jezdni przekraczające 0,2 m, a szerokość zwężonego odcinka wynosi mniej niż 5,5 m.',
    },
    {
        id: 19,
        image: 'Znak_A-13.svg',
        name: 'ruchomy most',
        description:
            'Znak ostrzega przed mostem o ruchomym przęśle. Umieszczany jest przed wjazdem na czynny most zwodzony lub obrotowy.',
    },
    {
        id: 20,
        image: 'Znak_A-14.svg',
        name: 'roboty na drodze',
        description:
            'Znak ostrzega przed miejscem, w którym prowadzone są na drodze roboty, gdzie kierujący może spotkać osoby pracujące na drodze lub przeszkody utrudniające ruch, takie jak maszyny, materiały.',
    },
    {
        id: 21,
        image: 'Znak_A-15.svg',
        name: 'śliska jezdnia',
        description:
            'Znak ostrzega przed możliwością poślizgu pojazdu z powodu zmniejszonej szorstkości jezdni spowodowanej w szczególności',
    },
    {
        id: 22,
        image: 'Znak_A-16.svg',
        name: 'przejście dla pieszych',
        description:
            'Znak ostrzega przed przejściem dla pieszych. Umieszcza się go przed przejściem bez sygnalizacji świetlnej na drogach o dopuszczalnej prędkości powyżej 60 km/h lub przed przejściem poza skrzyżowaniami, gdy może nie być widoczne odpowiednio wcześnie.',
    },
    {
        id: 23,
        image: 'Znak_A-17.svg',
        name: 'dzieci',
        description:
            'Znak ostrzega przed miejscem na drodze szczególnie uczęszczanym przez dzieci w wieku od 7 do 15 lat. Znak umieszcza się zwłaszcza w pobliżu szkół podstawowych, gimnazjów, placówek prowadzących zajęcia z dziećmi, terenów zabaw itp.',
    },
    {
        id: 24,
        image: 'Znak_A-18a.svg',
        name: 'zwierzęta gospodarskie',
        description:
            'Znak ostrzega przed możliwością napotkania na drodze zwierząt gospodarskich. Stosuje się go do oznaczania miejsc, w których odbywa się regularny przepęd zwierząt wzdłuż lub w poprzek (przy ośrodkach hodowlanych, pastwiskach itp.)',
    },
    {
        id: 25,
        image: 'Znak_A-18b.svg',
        name: 'zwierzęta dzikie',
        description:
            'Znak ostrzega przed możliwością napotkania na drodze zwierząt dzikich. Stosuje się go do oznaczania miejsc, w których zwierzęta dziko żyjące często przekraczają drogę (lasy z dużą ilością zwierzyny, szlaki wędrówek zwierząt)',
    },
    {
        id: 26,
        image: 'Znak_A-19.svg',
        name: 'boczny wiatr',
        description:
            'Znak ostrzega przed miejscem, w którym mogą występować silne boczne podmuchy wiatru, np. przy wyjeździe z gęstego lasu, głębokiego wykopu, obszaru o zwartej zabudowie na otwarty teren. W miejscach występowania silnych podmuchów wiatru może być ustawiony sygnalizator pokazujący siłę i kierunek wiatru w danej chwili.',
    },
    {
        id: 27,
        image: 'Znak_A-20.svg',
        name: 'odcinek jezdni o ruchu dwukierunkowym',
        description:
            'Znak ostrzega jadących jezdnią jednokierunkową przed miejscem, w którym rozpoczyna się ruch dwukierunkowy. Stosowany w sytuacji, gdy',
    },
    {
        id: 28,
        image: 'Znak_A-21.svg',
        name: 'tramwaj',
        description:
            'Znak ostrzega przed przecięciem drogi przez tory tramwajowe w taki sposób, że kierujący mogą nie zorientować się odpowiednio wcześnie o istnieniu tych torów.',
    },
    {
        id: 29,
        image: 'Znak_A-22.svg',
        name: 'niebezpieczny zjazd',
        description:
            'Znak ostrzega przed znacznym spadkiem podłużnym drogi, co najmniej 10% w terenie górskim, a na pozostałych drogach co najmniej 7%, bądź gdy zjazd jest niebezpieczny ze względu na ostre zakręty lub zły stan nawierzchni. Umieszczona pod znakiem tabliczka T-9 wskazuje rzeczywistą wielkość spadku.',
    },
    {
        id: 30,
        image: 'Znak_A-23.svg',
        name: 'stromy podjazd',
        description:
            'Znak ostrzega przed znacznym wzniesieniem drogi, co najmniej 8% w terenie górskim, a na pozostałych drogach co najmniej 6%, bądź gdy wjazd na wzniesienie jest utrudniony ze względu na ostre zakręty lub zły stan nawierzchni. Umieszczona pod znakiem tabliczka T-9 wskazuje rzeczywistą wielkość wzniesienia.',
    },
    {
        id: 31,
        image: 'Znak_A-24.svg',
        name: 'rowerzyści',
        description:
            'Znak ostrzega przed miejscem, w którym rowerzyści wyjeżdżają z drogi dla rowerów. Umieszcza się go też przed przejazdem dla rowerzystów na drogach o dopuszczalnej prędkości powyżej 60 km/h lub przed przejazdem poza skrzyżowaniami, albo gdy przejazd może nie być widoczny odpowiednio wcześnie.',
    },
    {
        id: 32,
        image: 'Znak_A-25.svg',
        name: 'spadające odłamki skalne',
        description:
            'Znak ostrzega przed miejscem, w którym na drogę mogą staczać się lub zalegać na niej odłamki skalne, stanowiące niebezpieczeństwo dla nadjeżdżających pojazdów.',
    },
    {
        id: 33,
        image: 'Znak_A-26.svg',
        name: 'lotnisko',
        description:
            'Znak ostrzega przed możliwością nagłego pojawienia się nisko przelatującego samolotu lub śmigłowca. Znak stosuje się w pobliżu lotnisk, gdzie nagłe pojawienie się przelatującego nisko samolotu może przestraszyć kierującego pojazdem i spowodować nieprawidłowy manewr.',
    },
    {
        id: 34,
        image: 'Znak_A-27.svg',
        name: 'nabrzeże lub brzeg rzeki',
        description:
            'Znak ostrzega przed odcinkiem drogi prowadzącym bezpośrednio do nabrzeża lub wzdłuż brzegu rzeki lub innego zbiornika wodnego w odległości mniejszej niż 10 m, gdzie nie są zastosowane bariery ochronne.',
    },
    {
        id: 35,
        image: 'Znak_A-28.svg',
        name: 'sypki żwir',
        description:
            'Znak ostrzega przed odcinkiem drogi pokrytej żwirem (grysem), który może być wyrzucany spod kół jadących pojazdów. Dotyczy to przede wszystkim nawierzchni tłuczniowych oraz nawierzchni, na których przeprowadzone powierzchniowe utrwalenie warstwy ścieralnej do czasu stabilnego oblepienia kruszywa przez bitum. Ponadto znak może być umieszczony przed wyjazdami z kamieniołomów lub żwirowni.',
    },
    {
        id: 36,
        image: 'Znak_A-29.svg',
        name: 'sygnały świetlne',
        description:
            'Znak ostrzega przed miejscem, w którym ruch jest kierowany za pomocą sygnalizacji świetlnej. Znak stosuje się',
    },
    {
        id: 37,
        image: 'Znak_A-30.svg',
        name: 'inne niebezpieczeństwo',
        description:
            'Znak ostrzega przed niebezpieczeństwem innego rodzaju niż określone pozostałymi znakami ostrzegawczymi. Umieszczona pod znakiem tabliczka wskazuje rodzaj niebezpieczeństwa za pomocą symbolu lub napisu. ',
    },
    {
        id: 38,
        image: 'Znak_A-31.svg',
        name: 'niebezpieczne pobocze',
        description:
            'Znak ostrzega przed niebezpiecznym poboczem (wąskim, miękkim, zbyt wysokim lub obniżonym) lub końcem pobocza bitumicznego przechodzącego w ziemne. Znak z odwróconym symbolem ostrzega o niebezpiecznym poboczu występującym po lewej stronie drogi.',
    },
    {
        id: 39,
        image: 'Znak_A-31a.svg',
        name: 'niebezpieczne pobocze po lewej stronie',
        description: '',
    },
    {
        id: 40,
        image: 'Znak_A-32.svg',
        name: 'oszronienie jezdni',
        description:
            'Znak ostrzega przed mogącym występować na drodze oszronieniem jezdni lub gołoledzią. Stosowany jest wyłącznie w okresie zimowym przed mostami i wiaduktami, na których oszronienie jezdni lub gołoledź pojawia się, gdy nie występuje jeszcze na innych odcinkach drogi oraz w pobliżu rzek i zbiorników wodnych.',
    },
    {
        id: 41,
        image: 'Znak_A-33.svg',
        name: 'zator drogowy',
        description:
            'Znak ostrzega przed częstym występowaniem zablokowania ruchu ze względu na natężenie ruchu pojazdów, gdy stojące pojazdy mogą nie zostać w porę dostrzeżone przez kierującego, np. przed skrzyżowaniem z sygnalizacją świetlną, gdy odcinek jezdni jest niewidoczny ze względu na zakręt lub wzniesienie.',
    },
    {
        id: 42,
        image: 'Znak_A-34.svg',
        name: 'wypadek drogowy',
        description:
            'Znak ostrzega przed miejscem, w którym na skutek wypadku drogowego nastąpiło zablokowanie drogi lub znaczne utrudnienie ruchu pojazdów. Znak ustawiany jest przez służby zabezpieczające miejsce wypadku, następując znak zakazu B-42.',
    },
    {
        id: 43,
        image: 'Znak_C-1.svg',
        name: 'nakaz jazdy w prawo przed znakiem',
        description:
            'Znak nakazuje kierującemu skręt w prawo przed znakiem. Znak ten umieszczony jest na przedłużeniu osi części jezdni, jadących którą nakaz dotyczy. Stosowany zwykle na skrzyżowaniach z jezdnią jednokierunkową, gdzie nie ma możliwości jazdy na wprost.',
    },
    {
        id: 44,
        image: 'Znak_C-2.svg',
        name: 'nakaz jazdy w prawo za znakiem',
        description:
            'Znak nakazuje kierującemu skręt w prawo za znakiem. Znak ten umieszczony jest obok jezdni, której dotyczy i obowiązuje na najbliższym skrzyżowaniu lub w miejscu, gdzie występuje możliwość zmiany kierunku jazdy.',
    },
    {
        id: 45,
        image: 'Znak_C-3.svg',
        name: 'nakaz jazdy w lewo przed znakiem',
        description:
            'Znak nakazuje kierującemu skręt w lewo przed znakiem. Stosowany analogicznie jak znak C-1.',
    },
    {
        id: 46,
        image: 'Znak_C-4.svg',
        name: 'nakaz jazdy w lewo za znakiem',
        description:
            'Znak nakazuje kierującemu skręt w lewo za znakiem. Stosowany analogicznie jak znak C-2.',
    },
    {
        id: 47,
        image: 'Znak_C-5.svg',
        name: 'nakaz jazdy prosto',
        description:
            'Znak nakazuje kierującemu jazdę prosto. Znak obowiązuje na najbliższym skrzyżowaniu lub w miejscu, gdzie występuje możliwość zmiany kierunku jazdy. Często stosowany jest poza skrzyżowaniami na drogach o dużym natężeniu ruchu w celu wyeliminowania skręcania (szczególnie w lewo) pojazdów do obiektów przydrożnych.',
    },
    {
        id: 48,
        image: 'Znak_C-6.svg',
        name: 'nakaz jazdy prosto lub w prawo',
        description:
            'Znak nakazuje kierującemu jazdę prosto lub w prawo. Stosowany na skrzyżowaniach o więcej niż czterech wlotach, gdy nie można zastosować znaku B-21 „zakaz skręcania w lewo”.',
    },
    {
        id: 49,
        image: 'Znak_C-7.svg',
        name: 'nakaz jazdy prosto lub w lewo',
        description:
            'Znak nakazuje kierującemu jazdę prosto lub w lewo. Stosowany na skrzyżowaniach o więcej niż czterech wlotach, gdy nie można zastosować znaku B-22 „zakaz skręcania w prawo”.',
    },
    {
        id: 50,
        image: 'Znak_C-8.svg',
        name: 'nakaz jazdy w prawo lub w lewo',
        description:
            'Znak nakazuje kierującemu jazdę w prawo lub w lewo. Stosowany, gdy zabroniona jest jazda prosto.',
    },
    {
        id: 51,
        image: 'Znak_C-9.svg',
        name: 'nakaz jazdy z prawej strony znaku',
        description:
            'Znak nakazuje kierującemu ominięcie wysepki lub przeszkody na jezdni z prawej strony znaku. Umieszczony na pasie dzielącym drogi oznacza początek jezdni jednokierunkowej.',
    },
    {
        id: 52,
        image: 'Znak_C-10.svg',
        name: 'nakaz jazdy z lewej strony znaku',
        description:
            'Znak nakazuje kierującemu ominięcie wysepki lub przeszkody na jezdni po lewej stronie znaku, lecz nie oznacza jednocześnie jezdni jednokierunkowej.',
    },
    {
        id: 53,
        image: 'Znak_C-11.svg',
        name: 'nakaz jazdy z prawej lub z lewej strony znaku',
        description:
            'Znak nakazuje kierującemu ominięcie wysepki lub przeszkody na jezdni z lewej lub prawej strony znaku. Umieszczany jest w miejscu rozdzielenia jezdni.',
    },
    {
        id: 54,
        image: 'Znak_C-12.svg',
        name: 'ruch okrężny (rondo)',
        description:
            'Znak nakazuje kierującemu jazdę dookoła wyspy lub placu w kierunku wskazanym na znaku (skrzyżowanie o ruchu okrężnym). Znak C-12 najczęściej występuje łącznie ze znakiem A-7 „ustąp pierwszeństwa”, co oznacza pierwszeństwo kierującego znajdującego się na skrzyżowaniu przed kierującym wjeżdżającym na to skrzyżowanie. W przypadku znaku C-12 występującego samodzielnie, pojazd znajdujący się na skrzyżowaniu ustępuje pierwszeństwa pojazdowi na wjeżdżającemu (zgodnie z zasadą prawej ręki).',
    },
    {
        id: 55,
        image: 'Znak_C-13.svg',
        name: 'droga dla rowerów',
        description:
            'Znak nakazuje kierującemu rowerem jednośladowym jazdę drogą dla rowerów.',
    },
    {
        id: 56,
        image: 'Znak_C-13a.svg',
        name: 'koniec drogi dla rowerów',
        description:
            'Znak oznacza koniec drogi przeznaczonej dla kierujących rowerami jednośladowymi.',
    },
    {
        id: 57,
        image: 'Znak_C-14.svg',
        name: 'prędkość minimalna',
        description:
            'Znak oznacza obowiązek jazdy z prędkością nie mniejszą niż określona na znaku liczbą kilometrów na godzinę przy zachowaniu ograniczeń prędkości wynikających z przepisów ustawy – Prawo o ruchu drogowym, chyba że warunki ruchu lub jego bezpieczeństwo wymagają zmniejszenia prędkości. Zgodnie z art. 19 ustawy – Prawo o ruchu drogowym, kierujący jest w każdej sytuacji zobowiązany jechać z prędkością nieutrudniającą jazdy innym kierującym. Znak C-14 stosowany jest, gdy kierujący nagminnie zmniejszają prędkość jazdy z przyczyn niewynikających ze stanu technicznego drogi.',
    },
    {
        id: 58,
        image: 'Znak_C-15.svg',
        name: 'koniec prędkości minimalnej',
        description:
            'Znak oznacza miejsce, w którym prędkość minimalna określona znakiem C-14 przestaje obowiązywać.',
    },
    {
        id: 59,
        image: 'Znak_C-16.svg',
        name: 'droga dla pieszych',
        description:
            'Znak nakazuje pieszym korzystanie z drogi przeznaczonej wyłącznie do ruchu pieszego. Stosowany tam, gdzie ze względu na duże natężenie ruchu pieszego, wyeliminowanie ruchu pojazdów zapewnia poprawę bezpieczeństwa.',
    },
    {
        id: 60,
        image: 'Znak_C-16a.svg',
        name: 'koniec drogi dla pieszych',
        description:
            'Znak oznacza koniec drogi przeznaczonej tylko dla pieszych.',
    },
    {
        id: 61,
        image: 'Znak_C-17.svg',
        name: 'nakazany kierunek jazdy dla pojazdów z towarami niebezpiecznymi',
        description:
            'Znak wskazuje kierunek jazdy na skrzyżowaniu dla pojazdów przewożących towary niebezpieczne w ilościach, dla których jest wymagane oznakowanie pojazdu tablicami ostrzegawczymi barwy pomarańczowej. Kierunek wskazany może być symbolem znaku C-2, C-4, C-5, C-6, C-7 lub C-8. Znak stosowany w szczególności do wskazania miejsc postojowych dla pojazdów z towarami niebezpiecznymi, np. w terminalach odpraw celnych.',
    },
    {
        id: 62,
        image: 'Znak_C-18.svg',
        name: 'nakaz używania łańcuchów przeciwpoślizgowych',
        description:
            'Znak oznacza, że kierujący pojazdem silnikowym ma obowiązek stosować łańcuchy przeciwpoślizgowe na co najmniej dwóch kołach napędowych. Stosowany w okresie zimowym na drogach, na których podczas opadów śniegu występują trudności poruszania się pojazdów niewyposażonych w łańcuchy. Umieszczona pod znakiem tabliczka od T-23a do T-23j oznacza, że nakaz dotyczy pojazdów określonych na tabliczce.',
    },
    {
        id: 63,
        image: 'Znak_C-19.svg',
        name: 'koniec nakazu używania łańcuchów przeciwpoślizgowych',
        description:
            'Znak oznacza miejsce, w którym nakaz używania łańcuchów przeciwpoślizgowych przestaje obowiązywać.',
    },
    {
        id: 64,
        image: 'Znak_C-13-16_r-p.svg',
        name: 'ruch rowerów lewą stroną drogi i ruch pieszych prawą stroną drogi',
        description: '',
    },
    {
        id: 65,
        image: 'Znak_C-13-16_p-r.svg',
        name: 'ruch pieszych lewą stroną drogi i ruch rowerów prawą stroną drogi',
        description: '',
    },
    {
        id: 66,
        image: 'Znak_C-13-16.svg',
        name: 'ruch pieszych i rowerów na tej samej drodze',
        description: '',
    },
    {
        id: 67,
        image: 'Znak_B-1.svg',
        name: 'zakaz ruchu w obu kierunkach',
        description:
            'Znak zakazuje ruchu na drodze wszelkich pojazdów, kolumn pieszych oraz jeźdźców i poganiaczy.',
    },
    {
        id: 68,
        image: 'Znak_B-2.svg',
        name: 'zakaz wjazdu',
        description:
            'Znak zakazuje wjazdu na drogę lub jezdnię od strony jego umieszczenia pojazdów, kolumn pieszych oraz jeźdźców i poganiaczy.',
    },
    {
        id: 69,
        image: 'Znak_B-3.svg',
        name: 'zakaz wjazdu pojazdów silnikowych, z wyjątkiem motocykli jednośladowych',
        description:
            'Znak zakazuje ruchu pojazdów silnikowych, nie dotyczy motocykli jednośladowych. Stosowany na odcinkach dróg o niedostatecznej szerokości lub nośności, gdzie ruch pojazdów silnikowych wielośladowy (w tym motocykli z przyczepą) nie może być dopuszczony.',
    },
    {
        id: 70,
        image: 'Znak_B-3a.svg',
        name: 'zakaz wjazdu autobusów',
        description:
            'Znak zakazuje ruchu autobusów. Stosowany w celu wyeliminowania ruchu autobusów z obszarów, gdzie duża ich liczba może powodować zakłócenia ruchu innych pojazdów.',
    },
    {
        id: 71,
        image: 'Znak_B-4.svg',
        name: 'zakaz wjazdu motocykli',
        description:
            'Znak zakazuje ruchu motocykli. Stosowany na drogach, na których trzeba ograniczyć hałas wytwarzany przez motocykle, np. w pobliżu szpitali.',
    },
    {
        id: 72,
        image: 'Znak_B-5.svg',
        name: 'zakaz wjazdu samochodów ciężarowych',
        description:
            'Znak zakazuje ruchu  samochodów ciężarowych o dopuszczalnej masie całkowitej przekraczającej 3,5 t, ciągników samochodowych, pojazdów specjalnych i używanych do celów specjalnych o dopuszczalnej masie całkowitej przekraczającej 3,5 t, ciągników rolniczych, pojazdów wolnobieżnych. Jeżeli znak dotyczy pojazdów o innej niż 3,5 t dopuszczalnej masie całkowitej, wówczas na znaku lub na tabliczce podaje się określoną wartość.',
    },
    {
        id: 73,
        image: 'Znak_B-6.svg',
        name: 'zakaz wjazdu ciągników rolniczych',
        description:
            'Znak zakazuje ruchu ciągników rolniczych i pojazdów wolnobieżnych. Stosowany na ulicach, na których występuje duże natężenie ruchu, a pojazdy wolnobieżne mogą powodować tamowanie ruchu.',
    },
    {
        id: 74,
        image: 'Znak_B-7.svg',
        name: 'zakaz wjazdu pojazdów silnikowych z przyczepą',
        description:
            'Znak zakazuje ruchu pojazdów z przyczepą. Nie dotyczy pojazdów z przyczepą jednoosiową lub naczepą. Pod znakiem może być umieszczana tabliczka z wartością dopuszczalnej masy całkowitej przyczepy. Stosowany przy niekorzystnych warunkach drogowych, np. spadkach podłużnych, ostrych skrętach.',
    },
    {
        id: 75,
        image: 'Znak_B-8.svg',
        name: 'zakaz wjazdu pojazdów zaprzęgowych',
        description:
            'Znak zakazuje ruchu pojazdów zaprzęgowych, a także jeźdźców i poganiaczy. Stosowany na drogach, na których występuje duże natężenie ruchu, gdzie ruch pojazdów zaprzęgowych może powodować tamowanie ruchu.',
    },
    {
        id: 76,
        image: 'Znak_B-9.svg',
        name: 'zakaz wjazdu rowerów',
        description:
            'Znak zakazuje ruchu zarówno na jezdni, jak i poboczu rowerów i wózków rowerowych. Stosowany na drogach o dużym natężeniu ruchu lub dużej dopuszczalnej prędkości stanowiących niebezpieczeństwo dla kierujących rowerami oraz tam, gdzie w pobliżu została wyznaczona droga dla rowerów oznaczona znakiem C-13.',
    },
    {
        id: 77,
        image: 'Znak_B-10.svg',
        name: 'zakaz wjazdu motorowerów',
        description:
            'Znak zakazuje wjazdu motorowerów. Stosowany, gdy istnieje potrzeba zamknięcia ruchu dla wszelkich pojazdów wyposażonych w silnik na drogach, gdzie zabroniony został ruch pojazdów samochodowych.',
    },
    {
        id: 78,
        image: 'Znak_B-11.svg',
        name: 'zakaz wjazdu wózków rowerowych',
        description:
            'Znak zakazuje ruchu wózków rowerowych. Stosowany na drogach o dużym natężeniu ruchu, gdzie ruch tych pojazdów może powodować tamowanie ruchu.',
    },
    {
        id: 79,
        image: 'Znak_B-12.svg',
        name: 'zakaz wjazdu wózków ręcznych',
        description:
            'Znak zakazuje ruchu na jezdni i poboczu wózków ręcznych prowadzonych, ciągniętych lub pchanych.',
    },
    {
        id: 80,
        image: 'Znak_B-13.svg',
        name: 'zakaz wjazdu pojazdów z towarami wybuchowymi lub łatwo zapalnymi',
        description:
            'Znak zakazuje ruchu pojazdów przewożących w ilościach, dla których jest wymagane oznakowanie pojazdu tablicami ostrzegawczymi barwy pomarańczowej, towary klas ADR  materiały i przedmioty wybuchowe, gazy palne, materiały ciekłe zapalne, materiały stałe zapalne, materiały samoreaktywne, materiały samozapalne, materiały wytwarzające w zetknięciu z wodą gazy palne, materiały utleniające, nadtlenki organiczne. ',
    },
    {
        id: 81,
        image: 'Znak_B-13a.svg',
        name: 'zakaz wjazdu pojazdów z towarami niebezpiecznymi',
        description:
            'Znak zakazuje ruchu pojazdów przewożących towary niebezpieczne w ilościach, dla których jest wymagane oznakowanie pojazdu tablicami ostrzegawczymi barwy pomarańczowej. Pod znakiem może być umieszczona tabliczka wskazująca, że zakaz dotyczy określonych grup towarów lub T-31 „tabliczka wskazująca kategorię tunelu”',
    },
    {
        id: 82,
        image: 'Znak_B-14.svg',
        name: 'zakaz wjazdu pojazdów z towarami, które mogą skazić wodę',
        description:
            'Znak zakazuje ruchu pojazdów przewożących w ilościach, dla których jest wymagane oznakowanie pojazdu tablicami ostrzegawczymi barwy pomarańczowej, towary klas ADR gazy trujące, gazy żrące, materiały ciekłe zapalne, materiały wytwarzające w zetknięciu z wodą gazy palne, materiały trujące, materiały zakaźne, materiały żrące, materiały zagrażające środowisku klasy 9.',
    },
    {
        id: 83,
        image: 'Znak_B-15.svg',
        name: 'zakaz wjazdu pojazdów o szerokości ponad ...m',
        description:
            'Znak zakazuje ruchu pojazdów, których szerokość wraz z ładunkiem jest większa od wartości podanej na znaku. Ruch pojazdów ze względu na szerokość ogranicza się, gdy szerokość przejazdu jest mniejsza niż 3,5 m. Na znaku podaje się odległość między elementami konstrukcyjnymi ograniczającymi skrajnie poziomą pomniejszoną o 1 m. Stawiany jest ze względu na wąskie obiekty drogowe jak np. tunele, mosty, a także wąskie ulice i pasy ruchu (wówczas znak może być umieszczony nad pasem ruchu, którego dotyczy lub jako element znaku F-22 „ograniczenia na pasie ruchu”).',
    },
    {
        id: 84,
        image: 'Znak_B-16.svg',
        name: 'zakaz wjazdu pojazdów o wysokości ponad ...m',
        description:
            'Znak zakazuje ruchu pojazdów, których wysokość wraz z ładunkiem jest większa od wartości podanej na znaku. Ruch pojazdów ze względu na wysokość ogranicza się, gdy wysokość przejazdu jest mniejsza niż 4,5 m. Na znaku podaje się wysokość obiektu nad jezdnią pomniejszoną o 0,5 m. Jest ustawiany ze względu na niskie tunele, wiadukty, linie sieci napowietrznej.',
    },
    {
        id: 85,
        image: 'Znak_B-17.svg',
        name: 'zakaz wjazdu pojazdów o długości ponad ...m',
        description:
            'Znak zakazuje ruchu pojazdów lub zespołów pojazdów, których długość wraz z ładunkiem jest większa od wartości podanej na znaku. Ruch pojazdów ze względu na długość ogranicza się na drogach o ostrych i wąskich zakrętach oraz tam, gdzie ruch takich pojazdów może utrudniać ruch.',
    },
    {
        id: 86,
        image: 'Znak_B-18.svg',
        name: 'zakaz wjazdu pojazdów o rzeczywistej masie całkowitej ponad ...t',
        description:
            'Znak zakazuje ruchu pojazdów lub zespołów pojazdów, których rzeczywista masa całkowita jest większa od wartości podanej na znaku. Stawiany jest ze względu na odcinki dróg o niewystarczającej nośności.',
    },
    {
        id: 87,
        image: 'Znak_B-19.svg',
        name: 'zakaz wjazdu pojazdów o nacisku pojedynczej osi napędowej powyżej ...t',
        description:
            'Znak zakazuje ruchu pojazdów, których nacisk osi jest większy od nacisku odpowiadającego masie podanej na znaku. W przypadku osi wielokrotnej nacisk żadnej z osi składowych nie może odpowiadać masie większej niż 80% masy podanej na znaku. Znak stosuje się na drodze publicznej lub jej odcinku, na granicach obszaru strefy o obniżonej nośności oraz przejściach granicznych znajdujących się na zewnętrznej granicy Unii Europejskiej[3]. Przykładowo nacisk osi ograniczony do 5 t odpowiada nośności 5000 [kg] · g ≈ 50 [kN], dla g ≈ 10 m/s².',
    },
    {
        id: 88,
        image: 'Znak_B-20.svg',
        name: 'stop',
        description:
            'Znak zakazuje przejazdu bez zatrzymania pojazdu przed wjazdem na skrzyżowanie z drogą z pierwszeństwem, każdym przejazdem kolejowo-drogowym, gdzie został on umieszczony (najczęściej przejazdy kategorii „D” bez zapór), przejazdem tramwajowym, w innych miejscach przecinania się kierunków ruchu. Kierujący zobowiązany jest ustąpić pierwszeństwa poruszającym się drogą z pierwszeństwem i analogicznie w pozostałych sytuacjach. Zatrzymanie pojazdu powinno nastąpić w miejscu wyznaczonym znakiem poziomym P-12 „linia bezwzględnego zatrzymania – stop”, w rejonie przejazdu kolejowo-drogowego dodatkowo przed znakiem G-3 lub G-4 „krzyż św. Andrzeja”. W razie braku wyznaczonego miejsca, zatrzymanie powinno nastąpić w takim miejscu, w którym kierujący może upewnić się, że nie utrudni ruchu na drodze z pierwszeństwem. Pod znakiem B-20 może być tabliczka T-6c „tabliczka wskazująca rzeczywisty przebieg drogi z pierwszeństwem przez skrzyżowanie (umieszczana na drodze podporządkowanej)” i T-6d „tabliczka wskazująca prostopadły przebieg drogi z pierwszeństwem przez skrzyżowanie oraz układ dróg podporządkowanych (umieszczana na drodze podporządkowanej)”. Na drogach o dopuszczalnej prędkości powyżej 60 km/h znak B-20 poprzedzany jest znakiem A-7 „ustąp pierwszeństwa” z tabliczką T-1 „tabliczka wskazująca odległość znaku ostrzegawczego od miejsca niebezpiecznego” z napisem STOP. Znak jest stosowany, gdy nie są spełnione warunki widoczności (mała widoczność na zatrzymanie). wjazdem na skrzyżowanie z drogą z pierwszeństwem, każdym przejazdem kolejowo-drogowym, gdzie został on umieszczony (najczęściej przejazdy kategorii „D” bez zapór), przejazdem tramwajowym, w innych miejscach przecinania się kierunków ruchu. Kierujący zobowiązany jest ustąpić pierwszeństwa poruszającym się drogą z pierwszeństwem i analogicznie w pozostałych sytuacjach. Zatrzymanie pojazdu powinno nastąpić w miejscu wyznaczonym znakiem poziomym P-12 „linia bezwzględnego zatrzymania – stop”, w rejonie przejazdu kolejowo-drogowego dodatkowo przed znakiem G-3 lub G-4 „krzyż św. Andrzeja”. W razie braku wyznaczonego miejsca, zatrzymanie powinno nastąpić w takim miejscu, w którym kierujący może upewnić się, że nie utrudni ruchu na drodze z pierwszeństwem. Pod znakiem B-20 może być tabliczka T-6c „tabliczka wskazująca rzeczywisty przebieg drogi z pierwszeństwem przez skrzyżowanie (umieszczana na drodze podporządkowanej)” i T-6d „tabliczka wskazująca prostopadły przebieg drogi z pierwszeństwem przez skrzyżowanie oraz układ dróg podporządkowanych (umieszczana na drodze podporządkowanej)”. Na drogach o dopuszczalnej prędkości powyżej 60 km/h znak B-20 poprzedzany jest znakiem A-7 „ustąp pierwszeństwa” z tabliczką T-1 „tabliczka wskazująca odległość znaku ostrzegawczego od miejsca niebezpiecznego” z napisem STOP. Znak jest stosowany, gdy nie są spełnione warunki widoczności (mała widoczność na zatrzymanie).',
    },
    {
        id: 89,
        image: 'Znak_B-21.svg',
        name: 'zakaz skręcania w lewo',
        description:
            'Znak zabrania skręcania w lewo i zawracania na skrzyżowaniu, przed którym jest ustawiony. Znak znajdujący się w obrębie skrzyżowania dotyczy tylko najbliższej jezdni, przed którą został umieszczony, co jest istotne w przypadku skrzyżowań z drogą dwujezdniową. Umieszczona pod znakiem tabliczka T-22 „tabliczka wskazująca, że znak nie dotyczy rowerów jednośladowych” wskazuje, że znak nie dotyczy rowerów jednośladowych, gdy jest dla nich wyznaczony pas ruchu. Razem z B-21 może występować znak F-7 „sposób jazdy w związku z zakazem skręcania w lewo”, który wskazuje możliwy dojazd do drogi, w którą skręcanie jest zabronione. Stosowany na skrzyżowaniach z jezdnią jednokierunkową, na którą nie ma wjazdu od strony skrzyżowania oraz, gdy pojazdy skręcające w lewo mogą utrudniać ruch.',
    },
    {
        id: 90,
        image: 'Znak_B-22.svg',
        name: 'zakaz skręcania w prawo',
        description:
            'Znak zabrania skręcania w prawo na skrzyżowaniu, przed którym jest ustawiony. Stosowany analogicznie jak B-21.Rozporządzenie w sprawie szczegółowych warunków technicznych dla znaków i sygnałów drogowych oraz urządzeń bezpieczeństwa ruchu drogowego i warunków ich umieszczania na drogach przewiduje stosowanie odmiany znaku F-7 „sposób jazdy w związku z zakazem skręcania w lewo” występującej wraz ze znakiem B-22. Nie ma jej jednak w Rozporządzeniu w sprawie znaków i sygnałów drogowych.',
    },
    {
        id: 91,
        image: 'Znak_B-23.svg',
        name: 'zakaz zawracania',
        description:
            'Znak zabrania zawracania od miejsca jego ustawienia do najbliższego skrzyżowania włącznie lub znaku B-24 „koniec zakazu zawracania”. Stosowany w miejscach, gdzie manewr zawracania może powodować utrudnienie ruchu. Ten znak natomiast nie zabrania skręcania w lewo.',
    },
    {
        id: 92,
        image: 'Znak_B-24.svg',
        name: 'koniec zakazu zawracania',
        description: 'Znak odwołuje zakaz zawracania.',
    },
    {
        id: 93,
        image: 'Znak_B-25.svg',
        name: 'zakaz wyprzedzania',
        description:
            'Znak zabrania kierującym pojazdami silnikowymi wyprzedzania pojazdów silnikowych wielośladowych od miejsca jego ustawienia do najbliższego skrzyżowania lub znaku B-27 „koniec zakazu wyprzedzania”. Pod znakiem mogą być umieszczone tabliczki T-23a – T-23j wskazujące rodzaj pojazdów, których obowiązuje zakaz wyprzedzania.',
    },
    {
        id: 94,
        image: 'Znak_B-26.svg',
        name: 'zakaz wyprzedzania przez samochody ciężarowe',
        description:
            'Znak zabrania wyprzedzania pojazdów silnikowych wielośladowych od miejsca jego ustawienia do najbliższego skrzyżowania lub znaku B-28 „koniec zakazu wyprzedzania przez samochody ciężarowe” kierującym  samochodami ciężarowymi o dopuszczalnej masie całkowitej przekraczającej 3,5 t, ciągnikiem samochodowym, pojazdem specjalnym lub do celów specjalnych – o dopuszczalnej masie całkowitej przekraczająca 3,5 t.',
    },
    {
        id: 95,
        image: 'Znak_B-27.svg',
        name: 'koniec zakazu wyprzedzania',
        description: 'Znak odwołuje zakaz wyprzedzania.',
    },
    {
        id: 96,
        image: 'Znak_B-28.svg',
        name: 'koniec zakazu wyprzedzania przez samochody ciężarowe',
        description:
            'Znak odwołuje zakaz wyprzedzania przez samochody ciężarowe.',
    },
    {
        id: 97,
        image: 'Znak_B-29.svg',
        name: 'zakaz używania sygnałów dźwiękowych',
        description:
            'Znak zabrania używania sygnałów dźwiękowych, chyba że jest to konieczne w celu ostrzeżenia o bezpośrednim zagrożeniu bezpieczeństwa ruchu. Zakaz obowiązuje od miejsca ustawienia znaku do najbliższego skrzyżowania lub znaku B-30 „koniec zakazu używania sygnałów dźwiękowych”.',
    },
    {
        id: 98,
        image: 'Znak_B-30.svg',
        name: 'koniec zakazu używania sygnałów dźwiękowych',
        description: 'Znak odwołuje zakaz używania sygnałów dźwiękowych.',
    },
    {
        id: 99,
        image: 'Znak_B-31.svg',
        name: 'pierwszeństwo dla nadjeżdżających z przeciwka',
        description:
            'Znak zabrania kierującym wjazdu lub wejścia na zwężony odcinek jezdni, jeżeli zmusiłoby to kierujących znajdujących się na tym odcinku lub zbliżających się do niego z przeciwnej strony do zatrzymania się.',
    },
    {
        id: 100,
        image: 'Znak_B-32.svg',
        name: 'stój – kontrola celna',
        description:
            'Znak zabrania przejazdu bez zatrzymania się do kontroli celnej. Zatrzymanie powinno nastąpić w miejscu wyznaczonym w tym celu, a jeżeli nie jest wyznaczone – przed znakiem. Dalszy ruch może nastąpić za zgodą uprawnionej osoby lub po nadaniu sygnału zezwalającego na ruch.',
    },
    {
        id: 101,
        image: 'Znak_B-32a.svg',
        name: 'stój – kontrola graniczna',
        description: '',
    },
    {
        id: 102,
        image: 'Znak_B-32b.svg',
        name: 'stój – rogatka uszkodzona',
        description: '',
    },
    {
        id: 103,
        image: 'Znak_B-32c.svg',
        name: 'stój – sygnalizacja uszkodzona',
        description: '',
    },
    {
        id: 104,
        image: 'Znak_B-32d.svg',
        name: 'stój – wjazd na prom',
        description: '',
    },
    {
        id: 105,
        image: 'Znak_B-32e.svg',
        name: 'stój – kontrola drogowa',
        description: '',
    },
    {
        id: 106,
        image: 'Znak_B-32f.svg',
        name: 'stój – pobór opłat',
        description: '',
    },
    {
        id: 107,
        image: 'Znak_B-33.svg',
        name: 'ograniczenie prędkości',
        description:
            'Znak zabrania przekraczania prędkości określonej liczbą kilometrów na godzinę. Ograniczenie obowiązuje od miejsca ustawienia znaku do najbliższego skrzyżowania, wprowadzenia innej dopuszczalnej prędkości znakiem B-33 lub B-43 „strefa ograniczonej prędkości”, początku strefy zamieszkania oznaczonej znakiem D-40, początku lub końca obszaru zabudowanego, oznaczonych odpowiednio znakami D-42 i D-43, znaku B-34 „koniec ograniczenia prędkości”. Pod znakiem mogą być umieszczone tabliczki T-23a – T-23j wskazujące rodzaj pojazdów, których obowiązuje ograniczenie prędkości. Dopuszczalna prędkość większa niż 60 km/h na obszarze zabudowanym dotyczy samochodu osobowego, motocykla i samochodu ciężarowego o dopuszczalnej masie całkowitej nieprzekraczającej 3,5 t, z wyjątkiem pojazdu przewożącego towary niebezpieczne, pojazdu z urządzeniem wystającym do przodu więcej niż 1,5 m od siedzenia kierującego (dopuszczalna prędkość 30 km/h na obszarze zabudowanym i 60 km/h poza obszarem zabudowanym), pojazdu holującego pojazd silnikowy (dopuszczalna prędkość 30 km/h na obszarze zabudowanym i 60 km/h poza obszarem zabudowanym), motocykla, którym przewozi się dziecko w wieku do lat 7 (dopuszczalna prędkość 40 km/h), samochodu ciężarowego przewożącego osoby poza kabiną kierowcy. Prędkość pojazdów ogranicza ze względu na wymagające tego warunki drogowe, gdy inne działania nie wpływają na poprawę bezpieczeństwa ruchu drogowego. W przypadku braku lub uchylenia ograniczenia prędkości wyrażonej znakiem B-33, obowiązują dopuszczalne prędkości określone w ustawie – Prawo o ruchu drogowym.',
    },
    {
        id: 108,
        image: 'Znak_B-34.svg',
        name: 'koniec ograniczenia prędkości',
        description:
            'Znak odwołuje ograniczenie prędkości. Od tego znaku obowiązują krajowe ograniczenia prędkości.',
    },
    {
        id: 109,
        image: 'Znak_B-35.svg',
        name: 'zakaz postoju',
        description:
            'Znak zakazuje postoju pojazdu rozumianego jako unieruchomienie pojazdu niewynikające z warunków lub przepisów ruchu drogowego, trwające dłużej niż 1 minutę. Oznacza to, że znak dopuszcza chwilowe zatrzymanie pojazdu np. w celu zabrania lub wysadzenia pasażera. Zakaz obowiązuje od miejsca ustawienia znaku do najbliższego skrzyżowania po tej stronie drogi, po której ustawiono znak.',
    },
    {
        id: 110,
        image: 'Znak_B-35a.svg',
        name: 'Zakaz postoju z informacją o okresie obowiązywania zakazu',
        description: '',
    },
    {
        id: 111,
        image: 'Znak_B-35b.svg',
        name: 'Zakaz postoju z informacją o czasie postoju',
        description: '',
    },
    {
        id: 112,
        image: 'Znak_B-35c.svg',
        name: 'Zakaz postoju z informacją o okresie obowiązywania zakazu i czasie postoju',
        description: '',
    },
    {
        id: 113,
        image: 'Znak_B-36.svg',
        name: 'zakaz zatrzymywania się',
        description:
            'Znak zabrania zatrzymywania pojazdu z wyjątkiem unieruchomienia ze względu na warunki lub przepisy ruchu drogowego. Pozostałe przepisy są analogiczne jak w przypadku znaku B-35 „zakaz postoju”.',
    },
    {
        id: 114,
        image: 'Znak_B-37.svg',
        name: 'zakaz postoju w dni nieparzyste',
        description:
            'Znak zabrania postoju w takim samym zakresie, jak znak B-35 „zakaz postoju”, lecz obowiązuje tylko w nieparzyste dni miesiąca. Stosowany wraz ze znakiem B-38 „zakaz postoju w dni parzyste” dla udostępnienia jednej strony jezdni co drugi dzień, np. w celu wywozu śmieci, zaopatrzenia sklepów. Zakaz nie obowiązuje od godziny 21 do 24.',
    },
    {
        id: 115,
        image: 'Znak_B-38.svg',
        name: 'zakaz postoju w dni parzyste',
        description:
            'Znak stosowany tak jak znak B-37, z tym że obowiązuje w parzyste dni miesiąca.',
    },
    {
        id: 116,
        image: 'Znak_B-39.svg',
        name: 'strefa ograniczonego postoju',
        description:
            'Znak wskazuje wjazd do strefy, w której obowiązuje zakaz postoju pojazdów na wszystkich drogach. Na znaku podaje się informacje o zakresie obowiązywania np. czas obowiązywania, dopuszczalny czas postoju, określone rodzaje pojazdów. W przypadku braku takich informacji, zakaz obowiązuje w takim samym zakresie, jak wyrażony znakiem B-35 „zakaz postoju”. Znak B-39 nie dotyczy pojazdu komunikacji publicznej zatrzymującego się na wyznaczonym dla niego miejscu, pojazdu zatrzymującego się w miejscu oznaczonymi znakami  D-18 „parking” D-18a „parking – miejsce zastrzeżone” D-18b „parking zadaszony” D-44 „strefa płatnego parkowania” pojazdu unieruchomionego ze względu na warunki lub przepisy ruchu drogowego, autobusu szkolnego.',
    },
    {
        id: 117,
        image: 'Znak_B-40.svg',
        name: 'koniec strefy ograniczonego postoju',
        description: 'Oznacza wyjazd ze strefy ograniczonego postoju.',
    },
    {
        id: 118,
        image: 'Znak_B-41.svg',
        name: 'zakaz ruchu pieszych',
        description:
            'Znak zabrania ruchu pieszych po tej stronie drogi, po której znak jest umieszczony. Stosowany ze względu na brak chodnika przy dużym ruchu pojazdów stanowiących niebezpieczeństwo dla pieszych lub gdy droga posiada wydzielony ciąg przeznaczony do ruchu pieszego.',
    },
    {
        id: 119,
        image: 'Znak_B-42.svg',
        name: 'koniec zakazów',
        description:
            'Znak odwołuje wszystkie obowiązujące zakazy wyrażone znakami posiadającymi własny znak odwołujący',
    },
    {
        id: 120,
        image: 'Znak_B-43.svg',
        name: 'strefa ograniczonej prędkości',
        description:
            'Znak wskazuje wjazd do strefy, w której na wszystkich drogach obowiązuje zakaz przekraczania prędkości, określonej na znaku przez liczbę kilometrów na godzinę. Dopuszczalna prędkość mniejsza lub równa 30 km/h oznacza, że umieszczone w strefie urządzenia wymuszające powolną jazdę (progi zwalniające, miejscowe przewężenia) nie muszą być oznakowane znakami ostrzegawczymi. Strefy ograniczonej prędkości wyznacza się na obszarach z dużą liczbą skrzyżowań oraz dużym natężeniu ruchu pojazdów i pieszych.',
    },
    {
        id: 121,
        image: 'Znak_B-44.svg',
        name: 'koniec strefy ograniczonej prędkości',
        description: 'Znak wskazuje wyjazd ze strefy ograniczonej prędkości.',
    },
    {
        id: 122,
        image: 'Znak_B-3-4.svg',
        name: 'zakaz wjazdu wszelkich pojazdów silnikowych',
        description: '',
    },
    {
        id: 123,
        image: 'Znak_B-6-8.svg',
        name: 'zakaz wjazdu ciągników rolniczych i pojazdów zaprzęgowych',
        description: '',
    },
    {
        id: 124,
        image: 'Znak_B-6-8-9.svg',
        name: 'zakaz wjazdu pojazdów innych niż samochodowe',
        description: '',
    },
    {
        id: 125,
        image: 'Znak_B-9-12.svg',
        name: 'zakaz wjazdu rowerów i wózków ręcznych',
        description: '',
    },
    {
        id: 126,
        image: 'Znak_B-13-14.svg',
        name: 'zakaz wjazdu pojazdów z towarami wybuchowymi lub łatwo zapalnymi oraz towarami mogącymi skazić wodę',
        description: '',
    },
    {
        id: 127,
        image: 'Znak_B-3-4-10.svg',
        name: 'zakaz wjazdu pojazdów silnikowych, motocykli i motorowerów',
        description: '',
    },
];
