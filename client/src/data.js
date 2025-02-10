const { stackClasses } = require("@mui/material");

const categoriesZSPORT = [
    {
        nameEN: 'Professional equipment',
        namePL: 'Profesjonalny sprzęt',
        id: '_ps',
        subCategories: [
            { id: '_lis', nameEN: 'Benches and racks', namePL: 'Ławki i stojaki', picturePath: '/images/_tc106.jpg' },
            { id: '_wc', nameEN: 'Free weight machines', namePL: 'Maszyny na wolny ciężar', picturePath: '/images/_wc.jpg' },
            { id: '_aw', nameEN: 'Armwrestling Training Machines', namePL: 'Maszyny do armwrestlingu', picturePath: '/images/_tc401.jpg' },
            { id: '_gn', nameEN: 'Dumbbells', namePL: 'Hantle', picturePath: '/images/_gn.webp' },
            { id: '_sdp', nameEN: 'Powerlifting equipment', namePL: 'Sprzęt do powerliftingu', picturePath: '/images/_tc703.jpg' },
            { id: '_blwc', nameEN: 'Brustyle Lux. Free weight machines', namePL: 'Brustyle Lux. Maszyny na wolny ciężar', picturePath: '/images/_bl302.jpg' },
            { id: '_akps', nameEN: 'Accessories', namePL: 'Akcesoria', picturePath: '/images/_akps.jpg' }
        ],
        picturePath: '/images/_ps.jpg'
    },
    {
        nameEN: 'Indoor gym',
        namePL: 'Siłownia domowa',
        id: '_sd',
        subCategories: [
            { id: '_lisd', nameEN: 'Benches and racks', namePL: 'Ławki i stojaki', picturePath: '/images/_lisd.jpg' },
        ],
        picturePath: '/images/_sd.jpg'
    },
    {
        nameEN: 'Outdoor gym',
        namePL: 'Siłownia zewnętrzna',
        id: '_sz',
        subCategories: [
            { id: '_sw', nameEN: 'Outdoor Wooden Training Machines Sport Wood', namePL: 'Drewniane maszyny treningowe Sport Wood', picturePath: '/images/_sw614.jpg' },
            { id: '_sg', nameEN: 'Outdoor Training Machines - "Premium" Class', namePL: 'Zewnętrzne maszyny treningowe klasy "Premium"', picturePath: '/images/_sg606.jpg' }
        ],
        picturePath: '/images/_sz.jpg'
    },
    {
        nameEN: 'Rehabilitation equipment MTB',
        namePL: 'Rehabilitacyjny sprzęt MTB',
        id: '_rs',
        subCategories: [
            { id: '_lr', nameEN: 'Rehabilitation benches', namePL: 'Ławki rehabilitacyjne', picturePath: '/images/_kzs009.jpg' },
            { id: '_akrs', nameEN: 'Accessories', namePL: 'Akcesoria', picturePath: '/images/_akrs.jpg' },
            { id: '_rt', nameEN: 'Rehabilitation equipment', namePL: 'Rehabilitacyjny sprzęt', picturePath: '/images/_kzs016.jpg' }
        ],
        picturePath: '/images/_rs.jpg'
    }
];

const productsZSPORT = [
    {
        nameEN: 'Torsonator TC150',
        namePL: 'Torsonator TC150',
        id: '_tc150',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 75,
            width: 30,
            height: 12,
            weight: 11
        },
        descriptionEN: 'The Torsonator TC150 is a high-quality piece of equipment designed for performing strength exercises with a barbell. This tool provides a secure grip for the barbell, allowing exercises with torso rotation and weightlifting at various angles. Thanks to its sturdy construction made of high-quality materials, the torsonator ensures safety and durability during use. Its compact design allows for easy integration into any gym or home fitness space. The Torsonator TC150 is an ideal choice for those looking to diversify their workouts and improve their overall physical fitness.',
        descriptionPL: 'Torsonator TC150 to wysokiej jakości urządzenie przeznaczone do wykonywania ćwiczeń siłowych ze sztangą. Ten sprzęt zapewnia stabilne mocowanie sztangi, umożliwiając wykonywanie ćwiczeń z obrotem tułowia i pracę z obciążeniem pod różnymi kątami. Dzięki solidnej konstrukcji z wysokiej jakości materiałów, torsonator gwarantuje bezpieczeństwo i trwałość podczas użytkowania. Jego kompaktowy design pozwala na łatwą integrację zarówno w siłowniach, jak i w domowych strefach fitness. Torsonator TC150 to idealny wybór dla osób, które chcą urozmaicić swoje treningi i poprawić ogólny poziom sprawności fizycznej.',
        picturePath: '/images/_tc150.jpg'
    },
    {
        nameEN: 'Vertical Barbell Rack',
        namePL: 'Stojak na gryfy pionowy',
        id: '_tc148',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 73,
            width: 63,
            height: 34,
            weight: 20
        },
        descriptionEN: "The vertical barbell rack TC148 is an excellent solution for organizing space in your gym. Made from durable materials, it ensures secure and stable storage of barbells. The rack's design allows for vertical placement of barbells, saving space and providing easy access to equipment. Thanks to its compact size, the rack seamlessly fits into any gym interior. It can hold up to 10 barbells of different sizes, making it an essential accessory for any fitness center or home gym.",
        descriptionPL: 'Pionowy stojak na gryfy TC148 to doskonałe rozwiązanie do organizacji przestrzeni w Twojej siłowni. Wykonany z wytrzymałych materiałów, zapewnia bezpieczne i stabilne przechowywanie gryfów. Konstrukcja stojaka umożliwia pionowe ustawienie gryfów, co oszczędza miejsce i zapewnia wygodny dostęp do sprzętu. Dzięki swojej kompaktowości stojak łatwo integruje się z każdym wnętrzem siłowni. Może pomieścić do 10 gryfów o różnych rozmiarach, co czyni go niezbędnym akcesorium w każdym klubie fitness lub domowej siłowni.',
        picturePath: '/images/_tc148.jpg'
    },
    {
        nameEN: 'Barbell and Weight Plate Rack',
        namePL: 'Stojak na gryfy i obciążenia',
        id: '_tc143',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 71,
            width: 67,
            height: 121,
            weight: 18
        },
        descriptionEN: "The barbell and weight plate rack TC143 is the perfect solution for storing gym equipment in your training facility. Made from high-quality materials, it ensures maximum stability and durability. The rack features dedicated compartments for storing barbells and weight plates of various sizes, helping to organize space efficiently and provide easy access to equipment. Its compact design allows for convenient placement anywhere without taking up too much space. With a modern look and ergonomic construction, this rack is not only functional but also a stylish addition to your gym.",
        descriptionPL: "Stojak na gryfy i obciążenia TC143 to idealne rozwiązanie do przechowywania sprzętu sportowego w Twojej siłowni. Wykonany z wysokiej jakości materiałów, zapewnia maksymalną stabilność i trwałość. Stojak posiada specjalne przegródki do przechowywania gryfów i obciążeń o różnych rozmiarach, co pozwala na lepszą organizację przestrzeni i łatwy dostęp do sprzętu. Kompaktowy design umożliwia wygodne ustawienie stojaka w dowolnym miejscu, nie zajmując przy tym dużo przestrzeni. Nowoczesny wygląd i ergonomiczna konstrukcja sprawiają, że ten stojak jest nie tylko funkcjonalny, ale również stylowym dodatkiem do Twojej siłowni.",
        picturePath: '/images/_tc143.jpg'
    },
    {
        nameEN: 'Professional Ab Shaper',
        namePL: 'Profesjonalny shaper do mięśni brzucha',
        id: '_tc140',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 151,
            width: 61,
            height: 106,
            weight: 47
        },
        descriptionEN: "The professional ab shaper TC140 is an effective machine for strengthening abdominal muscles. Thanks to its adjustable design, this trainer is suitable for users of all fitness levels. High-quality materials ensure reliability and durability, making it perfect for use in professional gyms. Its compact design allows for placement in any convenient location, providing maximum comfort during workouts. The modern and ergonomic design enhances usability, while the sturdy construction guarantees safety during exercises.",
        descriptionPL: "Profesjonalny shaper do mięśni brzucha TC140 to skuteczny sprzęt do wzmacniania mięśni brzucha. Dzięki regulowanej konstrukcji ten trenażer jest odpowiedni dla użytkowników o różnym poziomie zaawansowania. Wysokiej jakości materiały zapewniają niezawodność i trwałość, co czyni go idealnym wyborem do profesjonalnych siłowni. Kompaktowy design umożliwia umieszczenie sprzętu w dowolnym miejscu, zapewniając maksymalny komfort podczas treningu. Nowoczesna i ergonomiczna konstrukcja gwarantuje wygodę użytkowania, a solidna budowa zapewnia bezpieczeństwo podczas wykonywania ćwiczeń.",
        picturePath: '/images/_tc140.jpg'
    },
    {
        nameEN: 'Weight Plate Rack (6 Slots) with Torsonator',
        namePL: 'Stojak na obciążenia (6 miejsc) z torsonatorem',
        id: '_tc122.2',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            height: 117,
            weight: 37
        },
        descriptionEN: "The weight plate rack (6 slots) with torsonator TC122.2 is the perfect solution for organizing gym equipment. It features six slots for storing weight plates of various categories, helping to maintain order and ensuring convenient use of equipment during workouts. The integrated torsonator adds extra functionality, allowing for exercises that strengthen the core muscles. Made from high-quality materials, the rack guarantees durability and resistance to wear, making it an excellent choice for both professional gyms and home workout spaces.",
        descriptionPL: "Stojak na obciążenia (6 miejsc) z torsonatorem TC122.2 to idealne rozwiązanie do organizacji sprzętu sportowego w siłowni. Wyposażony w sześć miejsc na przechowywanie obciążeń o różnych kategoriach wagowych, pomaga utrzymać porządek i zapewnia wygodne użytkowanie sprzętu podczas treningów. Zintegrowany torsonator dodaje dodatkową funkcjonalność, umożliwiając wykonywanie ćwiczeń wzmacniających mięśnie tułowia. Wykonany z wysokiej jakości materiałów, stojak gwarantuje trwałość i odporność na zużycie, co czyni go doskonałym wyborem zarówno do profesjonalnych siłowni, jak i domowych stref treningowych.",
        picturePath: '/images/_tc122.2.jpg'
    },
    {
        nameEN: 'Barbell and Weight Plate Rack (Set of 4)',
        namePL: 'Stojak na sztangi i obciążenia (zestaw 4 szt.)',
        id: '_tc123.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 131,
            width: 79,
            height: 132,
            weight: 42
        },
        descriptionEN: "The barbell and weight plate rack (set of 4) TC123.1 is a reliable and functional piece of equipment designed for convenient storage of gym gear. Made from durable metal, it ensures stability and safety during use. Its structure allows for the simultaneous storage of multiple barbells and weight plates, optimizing space in the gym. With its compact size and ergonomic design, the TC123.1 rack is suitable for both professional gyms and home workout areas. The reliability and durability of this product ensure a long service life.",
        descriptionPL: "Stojak na sztangi i obciążenia (zestaw 4 szt.) TC123.1 to solidne i funkcjonalne wyposażenie, które umożliwia wygodne przechowywanie sprzętu sportowego. Wykonany z wytrzymałego metalu, zapewnia stabilność i bezpieczeństwo podczas użytkowania. Konstrukcja pozwala na jednoczesne przechowywanie kilku sztang i obciążeń, co optymalizuje przestrzeń w siłowni. Dzięki kompaktowym wymiarom i ergonomicznemu designowi, stojak TC123.1 sprawdzi się zarówno w profesjonalnych siłowniach, jak i w domowych strefach treningowych. Niezawodność i trwałość tego produktu gwarantują długą żywotność.",
        picturePath: '/images/_tc123.1.jpg'
    },
    {
        nameEN: 'Horizontal Hyperextension',
        namePL: 'Hiperextension poziomy',
        id: '_tc119.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 112,
            width: 77,
            height: 91,
            weight: 44
        },
        descriptionEN: "The horizontal hyperextension TC119.1 is a specialized machine designed to strengthen the back and glute muscles. Its structure provides comfortable and secure body support during exercises, promoting proper movement execution and reducing the risk of injury. The seat and supports are made from high-quality materials, ensuring durability and comfort during workouts. Adjustable components allow users to customize the machine to their individual needs. The horizontal hyperextension TC119.1 is suitable for both home use and professional gyms.",
        descriptionPL: "Hiperextension poziomy TC119.1 to specjalistyczne urządzenie zaprojektowane do wzmacniania mięśni pleców i pośladków. Konstrukcja maszyny zapewnia komfortowe i bezpieczne podparcie ciała podczas ćwiczeń, co sprzyja prawidłowemu wykonywaniu ruchów i minimalizuje ryzyko kontuzji. Siedzisko i podpórki wykonane są z wysokiej jakości materiałów, co gwarantuje trwałość i wygodę podczas treningu. Regulowane elementy pozwalają dostosować urządzenie do indywidualnych potrzeb użytkownika. Hiperextension poziomy TC119.1 nadaje się zarówno do użytku domowego, jak i profesjonalnych siłowni.",
        picturePath: '/images/_tc119.1.jpg'
    },
    {
        nameEN: 'Foldable Multi-Function Training Station',
        namePL: 'Stacja treningowa wielofunkcyjna składana',
        id: '_tc118.2',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 102,
            width: 107,
            height: 235,
            weight: 95
        },
        descriptionEN: "The foldable multi-function training station TC118.2 is a versatile machine that allows for various strength exercises. Its structure ensures stability and reliability during workouts, while the ability to disassemble it makes transportation and storage convenient. TC118.2 includes different components for performing pull-ups and dips. Made from high-quality materials, this machine withstands intense loads and is suitable for both home use and professional gyms.",
        descriptionPL: "Stacja treningowa wielofunkcyjna składana TC118.2 to uniwersalny sprzęt, który umożliwia wykonywanie różnorodnych ćwiczeń siłowych. Jego konstrukcja zapewnia stabilność i niezawodność podczas treningów, a możliwość demontażu sprawia, że jest wygodny w transporcie i przechowywaniu. TC118.2 obejmuje różne elementy do wykonywania podciągnięć i dipów. Wykonany z wysokiej jakości materiałów, sprzęt wytrzymuje intensywne obciążenia i nadaje się zarówno do użytku domowego, jak i profesjonalnych siłowni.",
        picturePath: '/images/_tc118.2.jpg'
    },
    {
        nameEN: 'Modified Squat Rack',
        namePL: 'Modyfikowana rama do przysiadów',
        id: '_tc117.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 165,
            width: 137,
            height: 211,
            weight: 129
        },
        descriptionEN: "The modified squat rack TC117.1 is a sturdy and reliable piece of equipment designed for intense weight training. This rack ensures safety and stability during squats and other strength exercises. Its adjustable components allow users to customize it to their individual needs. Made from high-quality materials, the TC117.1 squat rack withstands heavy loads and is suitable for both professional gyms and home use.",
        descriptionPL: "Modyfikowana rama do przysiadów TC117.1 to solidne i niezawodne urządzenie przeznaczone do intensywnych treningów z dużym obciążeniem. Rama zapewnia bezpieczeństwo i stabilność podczas wykonywania przysiadów oraz innych ćwiczeń siłowych. Dzięki regulowanym elementom można dostosować ją do indywidualnych potrzeb użytkownika. Wykonana z wysokiej jakości materiałów, rama do przysiadów TC117.1 wytrzymuje duże obciążenia i nadaje się zarówno do profesjonalnych siłowni, jak i do użytku domowego.",
        picturePath: '/images/_tc117.1.jpg'
    },
    {
        nameEN: 'Scott Bench for People with Disabilities',
        namePL: 'Ławka Scotta dla osób z niepełnosprawnością',
        id: '_tc110.4',
        categoryID: '_rs',
        subcategoryID: '_lr',
        properties: {
            length: 116,
            width: 100,
            height: 96,
            weight: 48
        },
        descriptionEN: "The Scott Bench for people with disabilities TC110.4 is a specially designed training device that provides a comfortable and safe workout experience for individuals with limited physical abilities. Its structure includes adjustable elements to accommodate individual needs, as well as ergonomic cushions for maximum comfort. The sturdy frame ensures stability and safety during exercises. The Scott Bench TC110.4 is ideal for use in gyms, rehabilitation centers, and other facilities that support training for individuals with disabilities.",
        descriptionPL: "Ławka Scotta dla osób z niepełnosprawnością TC110.4 to specjalnie zaprojektowane urządzenie treningowe, które zapewnia komfortowe i bezpieczne ćwiczenia dla osób z ograniczoną sprawnością fizyczną. Jej konstrukcja zawiera elementy umożliwiające dostosowanie ławki do indywidualnych potrzeb użytkownika oraz ergonomiczne poduszki dla maksymalnego komfortu. Solidna rama gwarantuje stabilność i bezpieczeństwo podczas treningów. Ławka Scotta TC110.4 doskonale sprawdza się w siłowniach, ośrodkach rehabilitacyjnych i innych placówkach wspierających trening osób z niepełnosprawnościami.",
        picturePath: '/images/_tc110.4.jpg'
    },
    {
        nameEN: 'Double-Sided Scott Bench',
        namePL: 'Dwustronna ławka Scotta',
        id: '_tc110.3',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 131,
            width: 81,
            height: 106,
            weight: 69
        },
        descriptionEN: "The double-sided Scott bench TC110.3 is a professional training device designed for effective biceps workouts. Its dual-sided construction allows two users to perform exercises simultaneously, enhancing the efficiency of the training process. A sturdy frame ensures reliability and stability during use, while the ergonomic padding supports proper exercise technique, preventing injuries. The Scott bench is ideal for installation in professional gyms and fitness centers and can also be used in home workout spaces.",
        descriptionPL: "Dwustronna ławka Scotta TC110.3 to profesjonalne urządzenie treningowe przeznaczone do efektywnego wzmacniania mięśni bicepsa. Dzięki konstrukcji z podwójną stroną umożliwia jednoczesne wykonywanie ćwiczeń przez dwóch użytkowników, co zwiększa efektywność treningu. Solidna rama zapewnia stabilność i niezawodność podczas użytkowania, a ergonomiczna wyściółka wspiera prawidłową technikę ćwiczeń, minimalizując ryzyko kontuzji. Ławka Scotta doskonale sprawdzi się w profesjonalnych siłowniach i centrach fitness, a także może być używana w domowych warunkach.",
        picturePath: '/images/_tc110.3.jpg'
    },
    {
        nameEN: '45-Degree Hyperextension',
        namePL: 'Hiperextension pod kątem 45 stopni',
        id: '_tc108.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 116,
            width: 75,
            height: 77,
            weight: 36
        },
        descriptionEN: "The 45-degree hyperextension TC108.1 is a reliable piece of equipment for effective back and core muscle training. Its design provides an optimal angle for exercises, ensuring maximum muscle engagement. The sturdy metal frame guarantees stability and durability, while the ergonomic cushions offer comfort during workouts. This hyperextension machine is ideal for both professional gyms and home use, helping users strengthen and develop their back muscles more effectively.",
        descriptionPL: "Hiperextension pod kątem 45 stopni TC108.1 to solidne urządzenie do efektywnego treningu mięśni pleców i brzucha. Jego konstrukcja zapewnia optymalny kąt do wykonywania ćwiczeń, co pozwala na maksymalne zaangażowanie mięśni. Wytrzymała metalowa rama gwarantuje stabilność i trwałość, a ergonomiczne poduszki zapewniają komfort podczas treningu. To urządzenie doskonale sprawdzi się zarówno w profesjonalnych siłowniach, jak i w domowym zaciszu, pomagając wzmocnić i rozwinąć mięśnie pleców.",
        picturePath: '/images/_tc108.1.jpg'
    },
    {
        nameEN: 'Adjustable (Mobile) Hyperextension',
        namePL: 'Hiperextension regulowany (mobilny)',
        id: '_tc108.2',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 127,
            width: 75,
            height: 81,
            weight: 39
        },
        descriptionEN: "The adjustable (mobile) hyperextension TC108.2 is a high-quality piece of equipment designed for back and core muscle training. Its adjustable height feature allows users to customize it for maximum comfort and workout efficiency. The sturdy metal frame ensures reliability and stability during exercises, while the ergonomic cushions provide additional support and comfort. This hyperextension machine is perfect for use in both professional gyms and home settings. Its mobility allows for easy relocation, making storage and use more convenient.",
        descriptionPL: "Hiperextension regulowany (mobilny) TC108.2 to wysokiej jakości urządzenie do treningu mięśni pleców i brzucha. Konstrukcja umożliwia regulację wysokości, dostosowując sprzęt do użytkownika, co zapewnia maksymalny komfort i efektywność ćwiczeń. Wytrzymała metalowa rama gwarantuje niezawodność i stabilność podczas treningu, a ergonomiczne poduszki zapewniają dodatkowe wsparcie i wygodę. To urządzenie doskonale sprawdza się zarówno w profesjonalnych siłowniach, jak i w warunkach domowych. Dzięki mobilnej konstrukcji można łatwo przemieszczać sprzęt w dowolne miejsce, co ułatwia przechowywanie i użytkowanie.",
        picturePath: '/images/_tc108.2.jpg'
    },
    {
        nameEN: '15-Degree Incline Bench Press',
        namePL: 'Ławka do wyciskania pod kątem 15 stopni',
        id: '_tc103.5',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 131,
            width: 124,
            height: 138,
            weight: 45
        },
        descriptionEN: "The 15-degree incline bench press TC103.5 is a high-quality training device designed to provide maximum efficiency and comfort during bench press exercises. It features a sturdy metal frame and a soft seat covering, ensuring reliable support and user comfort. The 15-degree incline angle is ideal for targeting different muscle groups, allowing for a more varied workout routine. This bench is perfect for both commercial gyms and home use, offering safety and durability thanks to its high-quality materials and robust construction.",
        descriptionPL: "Ławka do wyciskania pod kątem 15 stopni TC103.5 to wysokiej jakości sprzęt treningowy, zaprojektowany z myślą o maksymalnej efektywności i komforcie podczas wykonywania ćwiczeń wyciskania. Posiada solidną konstrukcję z metalową ramą oraz miękkie obicie siedziska, zapewniające stabilne podparcie i wygodę użytkownika. Kąt nachylenia 15 stopni jest optymalny do angażowania różnych grup mięśniowych, co pozwala na urozmaicenie programu treningowego. Ta ławka doskonale sprawdza się zarówno w komercyjnych siłowniach, jak i w domowych warunkach, gwarantując bezpieczeństwo i trwałość dzięki wysokiej jakości materiałom i solidnej budowie.",
        picturePath: '/images/_tc103.5.jpg'
    },
    {
        nameEN: 'Leg Press (45-Degree Incline) Foldable',
        namePL: 'Wyciskanie nóg (kąt 45 stopni) składane',
        id: '_tc302.1',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 232,
            width: 80,
            height: 139,
            weight: 135
        },
        descriptionEN: "The 45-degree incline leg press TC302.1 features a modern design and high-quality commercial construction. The high-load capacity carriage is set at a 45-degree angle and includes premium linear bearings, ensuring optimal performance and durability.",
        descriptionPL: "Wyciskanie nóg (kąt 45 stopni) TC302.1 wyróżnia się nowoczesnym designem oraz wysokiej jakości komercyjną konstrukcją. Wózek o zwiększonej nośności jest ustawiony pod kątem 45 stopni i wyposażony w liniowe łożyska premium, które zapewniają optymalną wydajność i trwałość.",
        picturePath: '/images/_tc302.1.jpg'
    },
    {
        nameEN: 'Leg Press / Hack Squat Machine',
        namePL: 'Maszyna do wyciskania nóg / Hack squat',
        id: '_tc322',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 234,
            width: 106,
            height: 149,
            weight: 221
        },
        descriptionEN: "The Leg Press / Hack Squat Machine TC322 is an excellent strength training device with free weights. The exercises you can perform on this machine help improve physical endurance and strength, build muscle mass, and eliminate excess fat in problem areas.\n\nThis machine combines two workout modes: leg press and hack squat. To switch between positions, simply move the backrest from one platform to the other and adjust the incline of the upper platform. The position change is facilitated by spring-loaded locks, allowing easy adjustment—just pull the lock with one hand and change the position with the other.",
        descriptionPL: "Maszyna do wyciskania nóg / Hack squat TC322 to doskonały sprzęt siłowy z obciążeniem wolnym. Ćwiczenia wykonywane na tym urządzeniu pomagają rozwijać wytrzymałość fizyczną i siłę, zwiększać masę mięśniową oraz redukować nadmiar tkanki tłuszczowej w problematycznych obszarach.\n\nJedno urządzenie oferuje dwa tryby pracy: wyciskanie nóg oraz hack squat. Aby zmienić ustawienia, wystarczy przenieść oparcie z jednej platformy na drugą i dostosować kąt nachylenia górnej platformy. Zmiana pozycji odbywa się za pomocą sprężynowych blokad, co umożliwia łatwą regulację – wystarczy jedną ręką odciągnąć blokadę, a drugą dostosować pozycję.",
        picturePath: '/images/_tc322.jpg'
    },
    {
        nameEN: 'Flat Dumbbell Bench Press',
        namePL: 'Ławka do wyciskania hantli na leżąco',
        id: '_tc157.3',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 175,
            width: 137,
            height: 127,
            weight: 75
        },
        descriptionEN: "The flat dumbbell bench press TC157.3 is designed for exercises targeting the deltoid and pectoral muscles using dumbbells. The dumbbell bench press helps develop the upper body, including the deltoid, pectoral, trapezius, and other upper back muscles. The triceps also bear secondary load.\n\nThis bench is specifically built for free weight training, ensuring a construction that eliminates wear-prone parts and unwanted movement during workouts. Since this exercise is classified as high-risk for injury, a platform is included for a spotting partner.",
        descriptionPL: "Ławka do wyciskania hantli na leżąco TC157.3 jest przeznaczona do ćwiczeń rozwijających mięśnie naramienne i piersiowe z użyciem hantli. Wyciskanie hantli na leżąco angażuje górną partię ciała, w tym mięśnie naramienne, piersiowe, czworoboczne oraz inne mięśnie górnej części pleców. Wtórne obciążenie spoczywa na tricepsach.\n\nŁawka została zaprojektowana specjalnie do pracy z wolnymi ciężarami, dlatego jej konstrukcja eliminuje zużywające się elementy oraz luzy podczas treningu. Ponieważ ćwiczenie należy do grupy o podwyższonym ryzyku kontuzji, przewidziano platformę dla asekurującego partnera.",
        picturePath: '/images/_tc157.3.jpg'
    },
    {
        nameEN: 'Hip Adductor & Abductor Machine',
        namePL: 'Maszyna do ćwiczenia przywodzicieli i odwodzicieli uda',
        id: '_tc323',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 205,
            width: 104,
            height: 105,
            weight: 118
        },
        descriptionEN: "The hip adductor & abductor machine TC323 is a specialized piece of equipment designed to strengthen and develop thigh muscles. It allows users to focus on training the adductor and abductor muscles, which is crucial for improving strength and ensuring a balanced development of the lower body.\n\nThis machine features adjustable components such as the seat and leg cushions, allowing for customization to meet individual user needs. Its sturdy construction and high-quality materials provide stability and reliability during workouts.\n\nWith its comfortable design and effective functionality, the TC323 machine is an ideal choice for those looking to improve their physical fitness, strengthen their thigh muscles, and achieve their fitness goals.",
        descriptionPL: "Maszyna do ćwiczenia przywodzicieli i odwodzicieli uda TC323 to specjalistyczne urządzenie przeznaczone do wzmacniania i rozwijania mięśni ud. Pozwala skupić się na pracy nad mięśniami przywodzicielami i odwodzicielami uda, co jest istotne dla poprawy siły oraz harmonijnego rozwoju dolnych partii ciała.\n\nUrządzenie wyposażone jest w regulowane elementy, takie jak siedzisko i poduszki na nogi, dzięki czemu można je dostosować do indywidualnych potrzeb użytkownika. Solidna konstrukcja i wysokiej jakości materiały zapewniają stabilność i niezawodność podczas treningów.\n\nDzięki wygodnemu designowi i efektywnym funkcjom, maszyna TC323 to idealny wybór dla osób, które chcą poprawić swoją kondycję fizyczną, wzmocnić mięśnie ud i osiągnąć swoje cele treningowe.",
        picturePath: '/images/_tc323.jpg'
    },
    {
        nameEN: 'Incline Dumbbell Bench Press',
        namePL: 'Ławka do wyciskania hantli pod kątem',
        id: '_tc157.2',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 185,
            width: 137,
            height: 141,
            weight: 83
        },
        descriptionEN: "The incline dumbbell bench press TC157.2 is designed for exercises targeting the deltoid and pectoral muscles using dumbbells. The incline dumbbell press helps develop the upper body, including the deltoid, pectoral, trapezius, and other upper back muscles. The triceps also bear secondary load.\n\nThis bench is specifically built for free weight training, ensuring a construction that eliminates wear-prone parts and unwanted movement during workouts. Since this exercise is classified as high-risk for injury, a platform is included for a spotting partner.",
        descriptionPL: "Ławka do wyciskania hantli pod kątem TC157.2 jest przeznaczona do ćwiczeń rozwijających mięśnie naramienne i piersiowe przy użyciu hantli. Wyciskanie hantli pod kątem angażuje górną partię ciała, w tym mięśnie naramienne, piersiowe, czworoboczne oraz inne mięśnie górnej części pleców. Wtórne obciążenie spoczywa na tricepsach.\n\nŁawka została zaprojektowana specjalnie do pracy z wolnymi ciężarami, dlatego jej konstrukcja eliminuje zużywające się elementy oraz luzy podczas treningu. Ponieważ ćwiczenie należy do grupy o podwyższonym ryzyku kontuzji, przewidziano platformę dla asekurującego partnera.",
        picturePath: '/images/_tc157.2.jpg'
    },
    {
        nameEN: 'Seated Dumbbell Bench Press',
        namePL: 'Ławka do wyciskania hantli na siedząco',
        id: '_tc157.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 137,
            width: 133,
            height: 156,
            weight: 79
        },
        descriptionEN: "The seated dumbbell bench press TC157.1 is designed for exercises targeting the deltoid muscles using dumbbells. The seated dumbbell press helps develop the upper body, including the deltoid, trapezius, and other upper back muscles. The triceps also bear secondary load.\n\nThis bench is specifically built for free weight training, ensuring a construction that eliminates wear-prone parts and unwanted movement during workouts. Since this exercise is classified as high-risk for injury, a platform is included for a spotting partner.",
        descriptionPL: "Ławka do wyciskania hantli na siedząco TC157.1 jest przeznaczona do ćwiczeń rozwijających mięśnie naramienne przy użyciu hantli. Wyciskanie hantli na siedząco angażuje górną partię ciała, w tym mięśnie naramienne, czworoboczne oraz inne mięśnie górnej części pleców. Wtórne obciążenie spoczywa na tricepsach.\n\nŁawka została zaprojektowana specjalnie do pracy z wolnymi ciężarami, dlatego jej konstrukcja eliminuje zużywające się elementy oraz luzy podczas treningu. Ponieważ ćwiczenie należy do grupy o podwyższonym ryzyku kontuzji, przewidziano platformę dla asekurującego partnera.",
        picturePath: '/images/_tc157.1.jpg'
    },
    {
        nameEN: 'Mobile Dumbbell Rack',
        namePL: 'Mobilny stojak na hantle',
        id: '_tc153',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 111,
            width: 111,
            height: 168,
            weight: 54
        },
        descriptionEN: "The mobile dumbbell rack TC153 is equipped with wheels for easy movement within the training area. Designed for safe dumbbell storage, it provides convenient access during workouts. It helps prevent injuries and ensures comfort during dumbbell exercises. Made from high-quality materials, the rack is capable of supporting significant weight.",
        descriptionPL: "Mobilny stojak na hantle TC153 jest wyposażony w kółka, co ułatwia jego przemieszczanie po strefie treningowej. Stojak został zaprojektowany do bezpiecznego przechowywania hantli i zapewnienia wygodnego dostępu do nich podczas ćwiczeń. Pomaga uniknąć kontuzji i zwiększa komfort podczas treningu z hantlami. Wykonany z wysokiej jakości materiałów, stojak jest w stanie wytrzymać duże obciążenia.",
        picturePath: '/images/_tc153.jpg'
    },
    {
        nameEN: 'Hip Thrust Machine',
        namePL: 'Maszyna „Hip Thrust”',
        id: '_tc326',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 170,
            width: 144,
            height: 102,
            weight: 72
        },
        descriptionEN: "The Hip Thrust Machine TC326 is a strength training device designed for glute muscle development.\n\nThe hip thrust is one of the most effective exercises for training the glutes. Performing this exercise on the Hip Thrust Machine allows for increased resistance and better muscle engagement.\n\nDespite its simplicity, this exercise enhances athletic performance, explosive power, and significantly improves glute aesthetics. Training with the Hip Thrust Machine provides numerous benefits:\n\n• Helps distribute load evenly on the lower back.\n\n• Improves performance in exercises like deadlifts and squats.\n\n• Weak and inactive glutes prevent proper deadlift execution.\n\n• Strengthens muscles essential for dynamic cardio exercises such as jumping and running.\n\n• Reduces back pain – underdeveloped glutes can lead to lower back strain and discomfort.\n\nRegularly performing hip thrusts helps activate the glutes and stabilize the pelvic area.",
        descriptionPL: "Maszyna „Hip Thrust” TC326 to urządzenie siłowe przeznaczone do treningu mięśni pośladkowych.\n\nUnoszenie bioder to jedno z najskuteczniejszych ćwiczeń na rozwój pośladków. Wykonywanie go na maszynie „Hip Thrust” pozwala dodatkowo zwiększyć obciążenie i efektywniej angażować mięśnie.\n\nPomimo swojej prostoty, ćwiczenie to pomaga poprawić atletyzm, siłę eksplozywną oraz znacząco ulepszyć wygląd pośladków. Trening na maszynie „Hip Thrust” niesie ze sobą wiele korzyści:\n\n• Pomaga rozłożyć obciążenie równomiernie na odcinek lędźwiowy kręgosłupa.\n\n• Poprawia wyniki w takich ćwiczeniach jak martwy ciąg i przysiady.\n\n• Słabe i nieaktywne pośladki uniemożliwiają prawidłowe wykonanie martwego ciągu.\n\n• Wzmacnia i rozwija mięśnie niezbędne do dynamicznych ćwiczeń cardio, takich jak skoki i bieganie.\n\n• Zmniejsza ból pleców – niewystarczająco wytrenowane pośladki mogą powodować przeciążenie dolnej części kręgosłupa, prowadząc do bólu.\n\nRegularne wykonywanie ćwiczenia „Hip Thrust” pozwala aktywować mięśnie pośladkowe i poprawić stabilność miednicy.",
        picturePath: '/images/_tc326.jpg'
    },
    {
        nameEN: 'Scott Bench with Rack',
        namePL: 'Ławka Scotta ze stojakiem',
        id: '_tc417',
        categoryID: '_ps',
        subcategoryID: ['_lis', '_aw'],
        properties: {
            length: 83,
            width: 53,
            height: 104,
            weight: 52
        },
        descriptionEN: "The Scott Bench with Rack TC417 is an excellent training machine designed for use in gyms and sports centers. Its structure allows for bicep curls with dumbbells or a barbell. This exercise helps strengthen forearm flexor muscles and arm muscles, particularly the biceps. The compact design ensures it doesn’t take up much space, making it a great addition for athletes across various sports. Training on this machine helps build strong and well-defined arms.\n\nThe Scott Bench effectively focuses the load on the arm flexor muscles. The upper arm support eliminates shoulder joint movement during lifts, making this exercise particularly effective for shaping and defining the biceps, especially when performed one-handed.",
        descriptionPL: "Ławka Scotta ze stojakiem TC417 to doskonały sprzęt treningowy, który sprawdzi się w siłowniach i centrach sportowych. Konstrukcja umożliwia wykonywanie ćwiczeń na biceps przy użyciu hantli lub sztangi. Ćwiczenie to wzmacnia mięśnie zginacze przedramienia oraz mięśnie ramion – głównie bicepsy. Dzięki kompaktowym rozmiarom sprzęt nie zajmuje dużo miejsca, a jego uniwersalność sprawia, że jest przydatny dla sportowców różnych dyscyplin. Trening na tym urządzeniu pomaga w kształtowaniu silnych i estetycznych ramion.\n\nŁawka Scotta pozwala skupić całe obciążenie na mięśniach zginaczach ramienia. Oparcie górnej części ramienia eliminuje ruch w stawie barkowym podczas unoszenia ciężaru, co czyni to ćwiczenie bardzo skutecznym dla rozwijania kształtu i definicji bicepsa – zwłaszcza przy ćwiczeniu jedną ręką.",
        picturePath: '/images/_tc417.jpg'
    },
    {
        nameEN: 'Armwrestling Table Platform',
        namePL: 'Platforma do stołu do armwrestlingu',
        id: '_tc452',
        categoryID: '_ps',
        subcategoryID: '_aw',
        properties: {
            length: 129,
            width: 87,
            height: 36,
            weight: 36
        },
        descriptionEN: "The armwrestling table platform TC452 removes the need for old, often heavy table supports. Its special design allows one or both parts of the platform to be raised simultaneously, providing convenience and stability during training or competitions.",
        descriptionPL: "Platforma do stołu do armwrestlingu TC452 eliminuje konieczność stosowania starych, często ciężkich podstawek pod stół. Specjalna konstrukcja umożliwia podniesienie jednej lub obu części platformy jednocześnie, zapewniając wygodę i stabilność podczas treningu lub zawodów.",
        picturePath: '/images/_tc452.jpg'
    },
    {
        nameEN: 'Mechanical Scott Bench',
        namePL: 'Mechaniczna ławka Scotta',
        id: '_tc416',
        categoryID: '_ps',
        subcategoryID: '_aw',
        properties: {
            length: 121,
            width: 82,
            height: 112,
            weight: 65
        },
        descriptionEN: "The mechanical Scott bench TC416 is specifically designed for biceps muscle training.",
        descriptionPL: "Trenażer mechaniczna ławka Scotta TC416 jest przeznaczony specjalnie do treningu mięśni bicepsa.",
        picturePath: '/images/_tc416.jpg'
    },
    {
        nameEN: 'Forearm Trainer “Mechanical Arm”',
        namePL: 'Trenażer przedramienia „Mechaniczna Ręka”',
        id: '_tc414',
        categoryID: '_ps',
        subcategoryID: '_aw',
        properties: {
            length: 91,
            width: 80,
            height: 159,
            weight: 137
        },
        descriptionEN: "The forearm trainer “Mechanical Arm” TC414 is specifically designed for forearm muscle training and armwrestling competitions.",
        descriptionPL: "Trenażer przedramienia „Mechaniczna Ręka” TC414 został zaprojektowany specjalnie do treningu mięśni przedramienia oraz przygotowań do zawodów w armwrestlingu.",
        picturePath: '/images/_tc414.jpg'
    },
    {
        nameEN: 'Professional Armwrestling Table',
        namePL: 'Profesjonalny stół do armwrestlingu',
        id: '_tc401',
        categoryID: '_ps',
        subcategoryID: '_aw',
        properties: {
            length: 90,
            width: 65,
            height: 116,
            weight: 44
        },
        descriptionEN: "The professional armwrestling table TC401 is specifically designed for training and competitions. The set includes 2 pads, 2 armrests, and 2 pegs.\n\nKey advantages of the TC401 table:\n\n• Reinforced frame\n\n• Improved folding and assembly design\n\n• Meets standing competition standards\n\n• Soft side padding on the tabletop\n\n• Textured grip handles\n\n• Easy to transport (fits in a car trunk)",
        descriptionPL: "Profesjonalny stół do armwrestlingu TC401 został zaprojektowany specjalnie do treningów i zawodów w armwrestlingu. Zestaw zawiera 2 poduszki, 2 podłokietniki i 2 bolce.\n\nGłówne zalety stołu TC401:\n\n• Wzmocniona rama\n\n• Ulepszona konstrukcja do składania i rozkładania\n\n• Zgodność ze standardami walki w pozycji stojącej\n\n• Miękka boczna część blatu\n\n• Teksturowane uchwyty dla lepszego chwytu\n\n• Łatwość transportu (mieści się w bagażniku samochodu)",
        picturePath: '/images/_tc401.jpg'
    },
    {
        nameEN: 'Adjustable Bench (Rack System)',
        namePL: 'Ławka regulowana (grzebieniowa)',
        id: '_tc145',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 135,
            width: 57,
            height: 45,
            weight: 36
        },
        descriptionEN: "The adjustable bench (rack system) TC145 is a versatile bench with an adjustable backrest and seat angle. It is essential for exercises with a barbell and dumbbells targeting the upper body, chest muscles, triceps, and biceps. Highly effective when used with a Smith Machine.",
        descriptionPL: "Ławka regulowana (grzebieniowa) TC145 to uniwersalna ławka z możliwością regulacji kąta oparcia i siedziska. Niezastąpiona przy wykonywaniu ćwiczeń ze sztangą i hantlami, angażujących mięśnie górnej partii ciała, klatki piersiowej, tricepsa i bicepsa. Bardzo skuteczna w połączeniu z maszyną Smitha.",
        picturePath: '/images/_tc145.jpg'
    },
    {
        nameEN: 'Dip Bars',
        namePL: 'Poręcze treningowe',
        id: '_tc128',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 91,
            width: 38,
            height: 135,
            weight: 36
        },
        descriptionEN: "The TC128 dip bars are designed for strengthening the upper body muscles, including shoulders, forearms, triceps, biceps, chest, and neck, as well as for core workouts. The compact design allows for installation and use not only in fitness centers and gyms but also at home. The equipment is made from high-quality Ukrainian steel (profiled tubing with a 4 mm wall thickness). The TC128 dip bars feature a durable powder-coated finish. They are suitable for users aged 13 to 80, including men, women, and teenagers. The weight capacity is up to 200 kg. Workout safety is ensured by the stable construction and dense rubber foot pads.",
        descriptionPL: "Poręcze treningowe TC128 są przeznaczone do wzmacniania mięśni górnej partii ciała, w tym ramion, przedramion, tricepsów, bicepsów, klatki piersiowej i szyi, a także do treningu mięśni brzucha. Kompaktowa konstrukcja pozwala na instalację i użytkowanie nie tylko w klubach fitness i siłowniach, ale także w warunkach domowych. Urządzenie wykonane jest z wysokiej jakości ukraińskiej stali (profilowana rura o grubości 4 mm). Poręcze TC128 pokryte są trwałą farbą proszkową. Sprzęt jest odpowiedni dla użytkowników w wieku od 13 do 80 lat, zarówno mężczyzn, kobiet, jak i młodzieży. Maksymalne obciążenie wynosi do 200 kg. Bezpieczeństwo ćwiczeń zapewniają stabilna konstrukcja oraz solidne, gumowe podstawy.",
        picturePath: '/images/_tc128.jpg'
    },
    {
        nameEN: 'Dip and Core Training Station',
        namePL: 'Poręcze do dipów i ćwiczeń brzucha',
        id: '_tc128.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 107,
            width: 76,
            height: 159,
            weight: 79
        },
        descriptionEN: "The TC128.1 dip and core training station is designed for strengthening the upper body muscles, including shoulders, forearms, triceps, biceps, chest, and neck, as well as for abdominal workouts. Its compact design allows for installation and use not only in fitness centers and gyms but also at home. The equipment is made from high-quality Ukrainian steel and features a durable powder-coated finish. It is suitable for users aged 13 to 80, including men, women, and teenagers. The weight capacity is up to 200 kg. Workout safety is ensured by the stable construction and dense rubber foot pads.",
        descriptionPL: "Poręcze do dipów i ćwiczeń brzucha TC128.1 są przeznaczone do wzmacniania mięśni górnej partii ciała, w tym ramion, przedramion, tricepsów, bicepsów, klatki piersiowej i szyi, a także do treningu mięśni brzucha. Kompaktowa konstrukcja umożliwia instalację i użytkowanie nie tylko w klubach fitness i siłowniach, ale także w warunkach domowych. Sprzęt wykonany jest z wysokiej jakości ukraińskiej stali i pokryty trwałą farbą proszkową. Może być używany przez osoby w wieku od 13 do 80 lat, zarówno mężczyzn, kobiety, jak i młodzież. Maksymalne obciążenie wynosi do 200 kg. Stabilność i bezpieczeństwo treningów zapewniają solidna konstrukcja oraz gumowe podstawy.",
        picturePath: '/images/_tc128.1.jpg'
    },
    {
        nameEN: 'Chrome Dumbbells with Rack',
        namePL: 'Chromowane hantle ze stojakiem',
        id: '_tc135',
        categoryID: '_ps',
        subcategoryID: ['_lis', '_gn'],
        properties: {
            length: 61,
            width: 48,
            height: 115,
            weight: 123
        },
        descriptionEN: "The chrome dumbbells with rack TC135 are a versatile set essential for any gym. With a weight range from 0.5 to 10 kg, they are suitable for both beginners and advanced athletes. The dumbbells have a durable chrome coating resistant to mechanical damage. They allow for a variety of exercises. The compact rack organizes and securely holds all dumbbells in ascending weight order. It is stable, has a small footprint, and does not damage flooring.",
        descriptionPL: "Chromowane hantle ze stojakiem TC135 to uniwersalny zestaw, który jest niezbędny w każdej siłowni. Zakres wag od 0,5 do 10 kg pozwala na trening zarówno dla początkujących, jak i zaawansowanych sportowców. Hantle posiadają chromowaną powłokę odporną na uszkodzenia mechaniczne. Dzięki nim można wykonywać szeroki zakres ćwiczeń. Kompaktowy stojak pozwala na uporządkowane przechowywanie hantli według wzrastającej wagi. Jest stabilny, ma niewielkie wymiary i nie niszczy powierzchni podłogi.",
        picturePath: '/images/_tc135.jpg'
    },
    {
        nameEN: 'Leg Support',
        namePL: 'Podpora na nogi',
        id: '_tc129',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 87,
            width: 71,
            height: 68,
            weight: 34
        },
        descriptionEN: "The leg support TC129 is designed for quadriceps training and squats. Its construction minimizes injury risk and reduces joint strain while effectively engaging the thigh, glute, and back muscles. Soft rollers secure the feet in position, ensuring comfort during workouts.",
        descriptionPL: "Podpora na nogi TC129 jest przeznaczona do treningu mięśnia czworogłowego uda oraz wykonywania przysiadów. Konstrukcja urządzenia minimalizuje ryzyko kontuzji i zmniejsza obciążenie stawów, jednocześnie maksymalnie angażując mięśnie ud, pośladków i pleców. Miękkie wałki stabilizują stopy na urządzeniu, zapewniając komfort podczas ćwiczeń.",
        picturePath: '/images/_tc129.jpg'
    },
    {
        nameEN: 'Leg Support',
        namePL: 'Podpora na nogi',
        id: '_tc129.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 143,
            width: 73,
            height: 54,
            weight: 42
        },
        descriptionEN: "The leg support TC129.1 is designed for quadriceps training and squats. Its construction minimizes injury risk and reduces joint strain while effectively engaging the thigh, glute, and back muscles. Soft rollers secure the feet in position, ensuring comfort during workouts.",
        descriptionPL: "Podpora na nogi TC129.1 jest przeznaczona do treningu mięśnia czworogłowego uda oraz wykonywania przysiadów. Konstrukcja urządzenia minimalizuje ryzyko kontuzji i zmniejsza obciążenie stawów, jednocześnie maksymalnie angażując mięśnie ud, pośladków i pleców. Miękkie wałki stabilizują stopy na urządzeniu, zapewniając komfort podczas ćwiczeń.",
        picturePath: '/images/_tc129.1.jpg'
    },
    {
        nameEN: 'Barbell Rack (Set of 4)',
        namePL: 'Stojak na sztangi (zestaw 4 szt.)',
        id: '_tc123',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 92,
            width: 68,
            height: 132,
            weight: 37
        },
        descriptionEN: "The barbell rack (set of 4) TC123 is designed to hold up to four barbells, making it a great addition to any gym. While this product is primarily designed for fixed-weight barbells, it can also be an ideal solution for storing Olympic barbells in cases where wall mounting or vertical storage is not an option.\n\nWith its compact footprint and one-sided design, this rack is a space-saving solution that helps keep the gym floor and training areas organized.",
        descriptionPL: "Stojak na sztangi (zestaw 4 szt.) TC123 jest przeznaczony do przechowywania maksymalnie czterech sztang i stanowi doskonałe uzupełnienie każdej siłowni. Choć produkt został zaprojektowany głównie do sztang o stałej wadze, może również służyć do przechowywania sztang olimpijskich tam, gdzie montaż na ścianie lub pionowe przechowywanie jest niemożliwe.\n\nDzięki kompaktowej konstrukcji i jednostronnej budowie stojak jest idealnym rozwiązaniem, które pomaga utrzymać porządek na podłodze siłowni i w strefie treningowej.",
        picturePath: '/images/_tc123.jpg'
    },
    {
        nameEN: 'Step-Up Platform',
        namePL: 'Podest do stepowania',
        id: '_tc136',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 76,
            width: 59,
            height: 26,
            weight: 21
        },
        descriptionEN: "The step-up platform TC136 is designed for exercises targeting the glute, calf, and thigh muscles. The platform allows users to position their feet at shoulder width, while its textured surface prevents slipping. Rubber footings absorb vibrations and provide stability during workouts. The structure is made of steel with a durable, wear-resistant powder coating.",
        descriptionPL: "Podest do stepowania TC136 jest przeznaczony do wykonywania ćwiczeń wzmacniających mięśnie pośladków, łydek i ud. Platforma umożliwia ustawienie stóp na szerokość barków, a jej antypoślizgowa powierzchnia zapobiega ślizganiu się. Gumowe podstawki amortyzują wibracje i stabilizują podest podczas ćwiczeń. Konstrukcja wykonana jest ze stali pokrytej odporną na ścieranie powłoką proszkową.",
        picturePath: '/images/_tc136.jpg'
    },
    {
        nameEN: 'Barbell Rack',
        namePL: 'Stojak na gryfy',
        id: '_tc141',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 73,
            width: 63,
            height: 36,
            weight: 12
        },
        descriptionEN: "The barbell rack TC141 is a compact and durable stand designed to save space. It can hold up to 5 barbells at the same time. The edges are fitted with plastic pads to protect the gym floor from external damage.",
        descriptionPL: "Stojak na gryfy TC141 to kompaktowa i solidna podstawa do przechowywania gryfów, która pozwala zaoszczędzić miejsce. Stojak umożliwia jednoczesne przechowywanie 5 gryfów. Krawędzie wyposażone są w plastikowe podkładki, które chronią podłogę siłowni przed uszkodzeniami.",
        picturePath: '/images/_tc141.jpg'
    },
    {
        nameEN: 'Rack for Chrome Dumbbells',
        namePL: 'Stojak na chromowane hantle',
        id: '_tc134',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 61,
            width: 48,
            height: 116,
            weight: 14
        },
        descriptionEN: "The TC134 chrome dumbbell rack is an essential element in the gym for compact dumbbell storage. The compact rack organizes and securely holds dumbbells weighing from 1 to 10 kg in ascending order. The pin diameter is 25 mm, allowing the placement of standard-sized dumbbells. The rack has small dimensions and does not damage the floor covering.",
        descriptionPL: "Stojak na chromowane hantle TC134 to niezbędny element na siłowni do kompaktowego przechowywania hantli. Kompaktowy stojak umożliwia uporządkowane przechowywanie i stabilne mocowanie hantli o wadze od 1 do 10 kg w kolejności rosnącej. Średnica trzpieni wynosi 25 mm, co pozwala na umieszczenie hantli standardowego rozmiaru. Stojak ma niewielkie wymiary i nie uszkadza podłogi.",
        picturePath: '/images/_tc134.jpg'
    },
    {
        nameEN: 'Rack for Weight Plates',
        namePL: 'Stojak na talerze',
        id: '_tc142',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "The TC142 weight plate rack is designed for organized storage of sports equipment, specifically weight plates. This model can be used both at home and for commercial purposes. Thanks to its compact size, the stand can be placed even in small spaces. The construction of this model is made of high-strength metal with special corrosion protection, ensuring maximum stability.",
        descriptionPL: "Stojak na talerze TC142 jest przeznaczony do uporządkowanego przechowywania sprzętu sportowego, a dokładniej talerzy. Ten model może być używany zarówno w warunkach domowych, jak i do celów komercyjnych. Dzięki kompaktowym rozmiarom podstawka może być ustawiona nawet w niewielkich pomieszczeniach. Konstrukcja tej modelu wykonana jest z wytrzymałego metalu, który posiada specjalną ochronę przed korozją i jest maksymalnie stabilna.",
        picturePath: '/images/_tc142.jpg'
    },
    {
        nameEN: 'Rack for Chrome Dumbbells',
        namePL: 'Stojak na chromowane hantle',
        id: '_tc134.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 62,
            width: 58,
            height: 117,
            weight: 24
        },
        descriptionEN: "The TC134.1 chrome dumbbell rack is the perfect solution for convenient and compact dumbbell storage. Laser-cut slots securely hold the dumbbells in place and allow for easy grip when removing or returning them to the rack. The durable powder-coated steel ensures strength and stability.",
        descriptionPL: "Stojak na chromowane hantle TC134.1 to idealne rozwiązanie do wygodnego przechowywania hantli w kompaktowej formie. Laserowo wycięte otwory pewnie utrzymują hantle na miejscu i umożliwiają łatwe chwytanie uchwytu podczas zdejmowania lub odkładania hantli na stojak. Wytrzymała stal z powłoką proszkową charakteryzuje się dużą trwałością i stabilnością.",
        picturePath: '/images/_tc134.1.jpg'
    },
    {
        nameEN: 'Barbell Rack (for a set of 10 pieces)',
        namePL: 'Stojak na sztangi (na zestaw 10 sztuk)',
        id: '_tc125',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 91,
            width: 79,
            height: 108,
            weight: 50
        },
        descriptionEN: "The TC125 barbell rack (for a set of 10 pieces) is designed to hold up to four barbells and is a great addition to your gym. This new generation of storage racks has been developed for the most frequently used spaces and is built to maintain a full-range appearance while staying in excellent condition month after month. With a small base footprint and a sleek matte black finish, the single-sided barbell rack is a compact solution that helps keep the gym floor and training areas clean.",
        descriptionPL: "Stojak na sztangi (na zestaw 10 sztuk) TC125 jest przeznaczony do przechowywania do czterech sztang i stanowi doskonałe uzupełnienie Twojej siłowni. To nowa generacja regałów do przechowywania, zaprojektowana z myślą o najczęściej używanych przestrzeniach i wykonana w taki sposób, aby wyglądać jak pełna gama produktów, a jednocześnie zachować doskonały stan przez wiele miesięcy. Dzięki niewielkiej powierzchni podstawy oraz gładkiemu, matowemu czarnemu wykończeniu jednostronny stojak na sztangi jest kompaktowym rozwiązaniem, które pomaga utrzymać podłogę siłowni i przestrzeń treningową w czystości.",
        picturePath: '/images/_tc125.jpg'
    },
    {
        nameEN: 'Reverse Hyperextension',
        namePL: 'Odwrotna hiperextensja',
        id: '_tc127',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 109,
            width: 88,
            height: 102,
            weight: 45
        },
        descriptionEN: "The TC127 reverse hyperextension is an effective machine for strengthening the lower back muscles, increasing the power of back extensors, and correcting/improving posture. During exercises on this machine, three major muscle groups are engaged: back extensors, glutes, and hamstring muscles. It is suitable for both professional athletes and fitness enthusiasts. Very easy to use.\n\nThe reverse hyperextension is a sturdy and stable steel construction, coated using an electrostatic spraying method. The upholstery is made of artificial leather, and the padding consists of dual-layer polyurethane foam, resistant to compression and deformation.\n\nFeatures of the Hyperextension:\n\n• an effective machine for multiple muscle groups;\n\n• suitable for professionals and amateurs;\n\n• built on a durable steel frame;\n\n• high-quality artificial leather upholstery;\n\n• polyurethane foam padding;\n\n• ergonomic and lightweight.",
        descriptionPL: "Odwrotna hiperextensja TC127 to skuteczny sprzęt do wzmacniania mięśni lędźwiowych, zwiększania siły prostowników pleców oraz korygowania/postawy. Podczas ćwiczeń na tym urządzeniu angażowane są trzy główne grupy mięśniowe: prostowniki pleców, mięśnie pośladkowe oraz mięśnie dwugłowe uda. Nadaje się zarówno dla profesjonalnych sportowców, jak i amatorów. Jest bardzo łatwa w użyciu.\n\nOdwrotna hiperextensja to solidna i stabilna konstrukcja stalowa, malowana metodą elektrostatycznego natrysku. Tapicerka wykonana jest ze skóry ekologicznej. Wypełnienie stanowi dwuwarstwowa pianka poliuretanowa, odporna na odkształcenia i osiadanie.\n\nCechy hiperextensji:\n\n• skuteczny sprzęt do treningu kilku grup mięśniowych;\n\n• dla profesjonalistów i amatorów;\n\n• wytrzymała stalowa rama;\n\n• wysokiej jakości tapicerka ze skóry ekologicznej;\n\n• piankowe wypełnienie poliuretanowe;\n\n• ergonomiczny i lekki.",
        picturePath: '/images/_tc127.jpg'
    },
    {
        nameEN: 'Accessory Rack',
        namePL: 'Stojak na akcesoria',
        id: '_tc144',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 71,
            width: 68,
            height: 130,
            weight: 48
        },
        descriptionEN: "The TC144 accessory rack is designed for storing your accessories during workouts and is a great addition to your gym.",
        descriptionPL: "Stojak na akcesoria TC144 jest przeznaczony do przechowywania akcesoriów podczas treningu i stanowi doskonałe uzupełnienie Twojej siłowni.",
        picturePath: '/images/_tc144.jpg'
    },
    {
        nameEN: 'Adjustable Reverse Hyperextension',
        namePL: 'Regulowana odwrotna hiperextensja',
        id: '_tc127.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 109,
            width: 88,
            height: 100,
            weight: 39
        },
        descriptionEN: "The TC127.1 adjustable reverse hyperextension is a back extension machine, one of the most effective devices for strengthening and developing the lower back and hamstring muscles. The machine does not strain the joints, enhances muscle tone, and reinforces the spinal tendon support, making it recommended for beginner athletes and people with a sedentary lifestyle. It is also suitable for individuals with back problems, allowing them to gradually strengthen their lower back with each workout. Over time, this will enable them to perform more advanced compound back exercises.",
        descriptionPL: "Regulowana odwrotna hiperextensja TC127.1 to urządzenie do prostowania pleców, jedno z najskuteczniejszych narzędzi wspomagających wzmacnianie i rozwój mięśni odcinka lędźwiowego oraz tylnej części ud. Trenażer nie obciąża stawów, wzmacnia napięcie mięśniowe i ścięgna podtrzymujące kręgosłup, dlatego jest polecany zarówno początkującym sportowcom, jak i osobom prowadzącym siedzący tryb życia. Nadaje się także dla osób mających problemy z plecami – mogą one stopniowo wzmacniać odcinek lędźwiowy, zwiększając jego siłę z każdym treningiem. W przyszłości pozwoli im to na wykonywanie bardziej wymagających, wielostawowych ćwiczeń na plecy.",
        picturePath: '/images/_tc127.1.jpg'
    },
    {
        nameEN: 'Horizontal Hyperextension',
        namePL: 'Hiperextensja pozioma',
        id: '_tc119',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 128,
            width: 75,
            height: 82,
            weight: 37
        },
        descriptionEN: "The TC119 horizontal hyperextension is made of high-quality, durable steel materials, using an 80x60 mm steel tube. Rubber foot pads provide excellent stability, while the seat is made of thick plywood, covered with premium-grade artificial leather with dense foam inside. This model supports up to 200 kg of load, with a total weight of 45 kg.\n\nThe TC119 machine strengthens the legs and abdominal muscles while also targeting the glutes, hamstrings, and lower back. Exercises are performed in a pendulum motion: up and down. It is suitable for both gym and home use. The hyperextension is coated with multiple layers of powder paint.\n\nFeatures of TC119:\n\n• Recognized as the most effective machine for strengthening the lower back.\n\n• Equipped with two support cushions to ensure comfort and safety during exercise.\n\n• Ideal for both home and intensive commercial use.\n\n• Anti-slip rubber foot pads prevent the need for floor mounting.\n\n• Reinforced stainless steel construction.\n\n• All components are high-quality and wear-resistant.\n\n• Seat made of multi-layer plywood.\n\n• Upholstery: high-quality artificial leather.\n\n• Filling: dual-layer polyurethane foam, resistant to compression and deformation.",
        descriptionPL: "Hiperextensja pozioma TC119 jest wykonana z wysokiej jakości, wytrzymałych materiałów stalowych, przy czym do produkcji wykorzystano rurę 80x60 mm. Gumowe stopki pod urządzeniem zapewniają doskonałą stabilność, a siedziska wykonane są z grubej sklejki, pokrytej najwyższej klasy ekoskórą z gęstą pianką w środku. Model wytrzymuje obciążenie do 200 kg, przy całkowitej wadze 45 kg.\n\nMaszyna TC119 wzmacnia nogi i mięśnie brzucha, a także angażuje pośladki, mięśnie dwugłowe uda i wzmacnia plecy. Ćwiczenia wykonywane są w ruchu wahadłowym: góra-dół. Nadaje się zarówno do użytku w siłowni, jak i w warunkach domowych. Hiperextensja jest malowana wielowarstwową farbą proszkową.\n\nCechy TC119:\n\n• Hiperextensja uznawana jest za najskuteczniejsze urządzenie do wzmacniania dolnej części pleców.\n\n• Wyposażona w dwie poduszki podpierające ciało podczas ćwiczeń, co zapewnia dodatkowy komfort i bezpieczeństwo.\n\n• Idealna zarówno do użytku domowego, jak i intensywnego użytkowania komercyjnego.\n\n• Antypoślizgowe stopki amortyzujące eliminują konieczność mocowania do podłogi.\n\n• Wzmocniona konstrukcja ze stali nierdzewnej.\n\n• Wszystkie elementy są wysokiej jakości i odporne na zużycie.\n\n• Siedzisko wykonane z wielowarstwowej sklejki.\n\n• Tapicerka: wysokiej jakości ekoskóra.\n\n• Wypełnienie: dwuwarstwowa pianka poliuretanowa odporna na odkształcenia i osiadanie.",
        picturePath: '/images/_tc119.jpg'
    },
    {
        nameEN: 'Weight Plate Rack – 6 Slots',
        namePL: 'Stojak na talerze – 6 miejsc',
        id: '_tc122',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 121,
            width: 121,
            height: 117,
            weight: 32
        },
        descriptionEN: "The TC122 weight plate rack with 6 slots is a convenient piece of equipment for gyms, ensuring each plate has its designated place. This helps maintain safety in the gym and preserves the floor in its original condition. The rack is designed for 6 slots, with each slot holding up to 8 plates, allowing a total capacity of 48 plates of any weight, making it a highly efficient solution.",
        descriptionPL: "Stojak na talerze 6 miejsc TC122 to wygodne rozwiązanie dla siłowni, które pozwala na uporządkowane przechowywanie talerzy. Dzięki temu zapewnione jest bezpieczeństwo na sali treningowej oraz ochrona podłogi przed uszkodzeniami. Stojak posiada 6 miejsc, a każde z nich pomieści 8 talerzy, co oznacza, że w sumie może przechowywać 48 talerzy o dowolnej wadze – to bardzo praktyczne rozwiązanie.",
        picturePath: '/images/_tc122.jpg'
    },
    {
        nameEN: 'Adjustable Bench',
        namePL: 'Ławka regulowana',
        id: '_tc102',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 135,
            width: 57,
            height: 45,
            weight: 36
        },
        descriptionEN: "The TC102 adjustable bench is a versatile bench with adjustable backrest and seat angles. It is indispensable for performing exercises with barbells and dumbbells targeting the upper shoulder girdle muscles, chest muscles, triceps, and biceps. It is highly effective when used with a Smith Machine.",
        descriptionPL: "Ławka regulowana TC102 to uniwersalna ławka z regulacją kąta oparcia i siedziska. Niezastąpiona podczas wykonywania ćwiczeń ze sztangą i hantlami, ukierunkowanych na mięśnie górnej partii ciała, mięśnie klatki piersiowej, tricepsy oraz bicepsy. Jest bardzo efektywna w połączeniu z Maszyną Smitha.",
        picturePath: '/images/_tc102.jpg'
    },
    {
        nameEN: 'Adjustable Mobile Bench',
        namePL: 'Ławka regulowana mobilna',
        id: '_tc102.1',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_lis', '_lr'],
        properties: {
            length: 135,
            width: 57,
            height: 44,
            weight: 37
        },
        descriptionEN: "The TC102.1 adjustable mobile bench is designed for performing exercises that strengthen multiple muscle groups, enhance endurance, and help build a strong, well-shaped body. All load-bearing adjustment components are made of hardened steel, ensuring long-lasting durability and product quality throughout its lifespan. For user convenience, the adjustment mechanisms are equipped with shock absorbers. The use of linear bearings has resulted in a lightweight, compact, and smooth-operating system.",
        descriptionPL: "Ławka regulowana mobilna TC102.1. Konstrukcja umożliwia wykonywanie ćwiczeń wzmacniających wiele grup mięśniowych, poprawiających wytrzymałość organizmu oraz kształtujących silne i estetyczne ciało. Wszystkie obciążone elementy regulacyjne wykonane są ze stali hartowanej, co zapewnia wysoką trwałość i długą żywotność produktu. Dla wygody użytkowników regulacje zostały wyposażone w amortyzatory. Zastosowanie łożysk liniowych pozwoliło uzyskać lekkość, kompaktowość i płynność działania mechanizmów.",
        picturePath: '/images/_tc102.1.jpg'
    },
    {
        nameEN: 'Adjustable Hyperextension',
        namePL: 'Hiperextensja regulowana',
        id: '_tc108',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_lis', '_lr'],
        properties: {
            length: 122,
            width: 75,
            height: 89,
            weight: 44
        },
        descriptionEN: "The TC108 adjustable hyperextension is a well-designed and meticulously crafted exercise machine made from high-quality materials. Choosing this for your gym means investing in a modern piece of equipment known for its functionality, durability, and long lifespan, even under intense use. It is the ideal choice for those who prefer robust fitness equipment that facilitates training and meets the highest standards of quality and reliability.\n\nHyperextension is a well-known and widely used fitness machine, popular for effectively strengthening the lower back and abdominal muscles. It allows for torso bends, twists, and raises.\n\nThe BruStyle model features a sturdy steel frame with a square profile, coated with a durable powder finish to prevent scratches and chipping, ensuring a long-lasting, premium appearance. The soft components are covered in elastic vinyl leather, while the interior padding consists of closed-cell foam, resistant to compression and wear.\n\nThe machine supports exercises in 5 positions, with an adjustable incline from 45 to 90 degrees. This enables deep engagement of the abdominal, back, thigh, and glute muscles, as well as torso twists similar to those performed on a Roman chair.\n\nIts compact design makes it an excellent fit for small gyms or even home use. Built-in transport wheels allow for easy movement if needed. Adjustable support pads provide comfort and customization, ensuring an optimal workout experience.",
        descriptionPL: "Hiperextensja regulowana TC108 to starannie zaprojektowany i dopracowany trenażer wykonany z wysokiej jakości materiałów. Wybierając go do swojej siłowni, otrzymasz nowoczesny sprzęt charakteryzujący się funkcjonalnością, wysoką wytrzymałością oraz długą żywotnością, nawet przy intensywnym użytkowaniu. To najlepszy wybór dla osób ceniących solidny sprzęt sportowy, który ułatwia trening i spełnia najwyższe wymagania dotyczące jakości oraz niezawodności.\n\nHiperextensja to dobrze znany w świecie sportu sprzęt, cieszący się dużą popularnością ze względu na skuteczne wzmacnianie dolnych partii pleców oraz mięśni brzucha. Pozwala na wykonywanie skłonów, skrętów oraz unoszeń tułowia.\n\nModel BruStyle posiada wytrzymałą stalową ramę o kwadratowym przekroju, pokrytą odporną powłoką proszkową, która chroni przed zarysowaniami i odpryskami, zapewniając długotrwały estetyczny wygląd. Miękkie elementy są obite elastyczną skórą winylową, a wypełnienie stanowi pianka o zamkniętych porach, odporna na odkształcenia i ścieranie.\n\nUmożliwia ćwiczenia w 5 pozycjach, z regulacją kąta nachylenia od 45 do 90 stopni. Dzięki temu skutecznie angażuje mięśnie brzucha, pleców, ud i pośladków, a także umożliwia wykonywanie skrętów tułowia, jak na ławce rzymskiej.\n\nSprzęt jest kompaktowy, dzięki czemu idealnie pasuje do małych siłowni lub domowych warunków. Wbudowane kółka transportowe ułatwiają jego przemieszczanie, jeśli zajdzie taka potrzeba. Regulowane poduszki podtrzymujące pozwalają dostosować sprzęt do indywidualnych wymagań, zapewniając wygodę podczas treningu.",
        picturePath: '/images/_tc108.jpg'
    },
    {
        nameEN: 'Biceps Press Rack',
        namePL: 'Stojak do wyciskania na biceps',
        id: '_tc707',
        categoryID: '_ps',
        subcategoryID: '_sdp',
        properties: {
            length: 145,
            width: 119,
            height: 182,
            weight: 77
        },
        descriptionEN: "Biceps Press Rack TC707. PURPOSE: Designed for competitions and tournaments, as well as for mastering the technique of barbell curling for biceps. This strength equipment features a telescopic mechanism that allows for easy height adjustment of the resting barbell without removing it from the rack. The base is made of mirror-finished aluminum with a separated line (marker) indicating the correct foot placement for the athlete. Its rigid and stable construction meets all technical standards for competition platforms and bench press racks.",
        descriptionPL: "Stojak do wyciskania na biceps TC707. PRZEZNACZENIE: do organizowania zawodów i turniejów oraz doskonalenia techniki podnoszenia sztangi na biceps. To urządzenie siłowe wyposażone jest w teleskopowy mechanizm, który umożliwia łatwą regulację wysokości sztangi bez konieczności jej zdejmowania ze stojaka. Podstawa wykonana jest z lustrzanego aluminium i posiada oddzieloną linię (znacznik) określającą prawidłowe ustawienie nóg zawodnika. Solidna i stabilna konstrukcja spełnia wszystkie normy techniczne dotyczące platform do zawodów oraz ławek do wyciskania leżąc.",
        picturePath: '/images/_tc707.jpg'
    },
    {
        nameEN: 'Powerlifting Monolift',
        namePL: 'Monolift do trójboju siłowego',
        id: '_tc701',
        categoryID: '_ps',
        subcategoryID: '_sdp',
        properties: {
            length: 178,
            width: 174,
            height: 252,
            weight: 296
        },
        descriptionEN: "The TC701 powerlifting monolift is a squat training device designed to eliminate the need for stepping back after unracking the barbell. Using a monolift allows you to easily position yourself, unrack the bar, and squat, making it ideal for heavy squats. By removing the need to step back with a heavy load, monolifts make squatting with significant weight much safer. Additionally, you conserve more energy, which can instead be used to increase the number of squats performed. The wide rack design ensures stability at the front and back, preventing the risk of tipping over.",
        descriptionPL: "Monolift do trójboju siłowego TC701 to urządzenie do przysiadów, które eliminuje konieczność wykonywania kroku do tyłu po zdjęciu sztangi. Dzięki zastosowaniu monoliftu można łatwo ustawić się, zdjąć sztangę i rozpocząć przysiad, co czyni go idealnym rozwiązaniem dla ciężkich przysiadów. Eliminacja konieczności wychodzenia z ciężarem sprawia, że przysiady z dużą wagą są znacznie bezpieczniejsze. Dodatkowo oszczędzasz energię, którą możesz przeznaczyć na zwiększenie liczby powtórzeń. Szeroka konstrukcja stojaka zapewnia stabilność zarówno z przodu, jak i z tyłu, minimalizując ryzyko przewrócenia się.",
        picturePath: '/images/_tc701.jpg'
    },
    {
        nameEN: 'Powerlifting Bench',
        namePL: 'Ławka do trójboju siłowego',
        id: '_tc702',
        categoryID: '_ps',
        subcategoryID: '_sdp',
        properties: {
            length: 126,
            width: 130,
            height: 91,
            weight: 82
        },
        descriptionEN: "The TC702 powerlifting bench is an essential piece of equipment for performing the bench press. It features adjustable pins for setting and selecting the optimal starting position of the barbell, allowing adjustments in both height and horizontal positioning.\n\nThe seat is made of durable plywood with dense foam padding, covered in artificial leather. The bench is stable and does not slip on the floor, thanks to its rubber foot pads. It is part of a professional line of training equipment. The steel frame is coated with a multi-layer powder finish.\n\nFeatures:\n\n• strong and durable frame;\n\n• adjustable pin height;\n\n• soft padded seat;\n\n• rubber foot pads for stability.",
        descriptionPL: "Ławka do trójboju siłowego TC702 to niezbędne wyposażenie do wykonywania wyciskania leżąc. W celu ustawienia i wyboru odpowiedniego początkowego położenia sztangi zastosowano regulowane trzpienie, które można dostosować zarówno pod względem wysokości, jak i pozycji w płaszczyźnie poziomej.\n\nSiedzisko wykonane jest z wytrzymałej sklejki z gęstym wypełnieniem piankowym, pokrytym ekoskórą. Ławka jest stabilna i nie ślizga się po podłodze dzięki gumowym stopkom. Należy do profesjonalnej linii sprzętu treningowego. Stalowa rama została pokryta wielowarstwową powłoką proszkową.\n\nCechy:\n\n• solidna i wytrzymała rama;\n\n• regulowana wysokość trzpieni;\n\n• miękkie siedzisko;\n\n• gumowe stopki zapewniające stabilność.",
        picturePath: '/images/_tc702.jpg'
    },
    {
        nameEN: 'Transformer Bench',
        namePL: 'Ławka-transformer',
        id: '_tc703',
        categoryID: '_ps',
        subcategoryID: '_sdp',
        properties: {
            length: 174,
            width: 168,
            height: 113,
            weight: 100
        },
        descriptionEN: "The TC703 transformer bench is an essential piece of equipment for powerlifting training, allowing for both bench pressing and squats. The racks are positioned at a standard working height. Adjustable pins enable precise selection of the starting position for the barbell. This equipment supports loads of up to 600 kg. The seat is made of durable plywood with dense foam padding, covered in artificial leather. The bench is stable and does not slip on the floor, thanks to rubber foot pads. It is part of a professional line of training equipment. The steel frame, made from 60x60 mm profiled tubing, is coated with an anti-corrosion powder finish.",
        descriptionPL: "Ławka-transformer TC703 to niezbędny element treningu w trójboju siłowym, umożliwiający wykonywanie zarówno wyciskania leżąc, jak i przysiadów. Stojaki są ustawione na standardowej wysokości roboczej. Regulowane trzpienie pozwalają na precyzyjne dostosowanie pozycji początkowej sztangi. Sprzęt wytrzymuje obciążenie do 600 kg. Siedzisko wykonane jest z wytrzymałej sklejki z gęstym wypełnieniem piankowym, pokrytym ekoskórą. Ławka jest stabilna i nie ślizga się po podłodze dzięki gumowym stopkom. Należy do profesjonalnej linii sprzętu treningowego. Stalowa rama z profilu 60x60 mm została pokryta antykorozyjną farbą proszkową.",
        picturePath: '/images/_tc703.jpg'
    },
    {
        nameEN: 'Barbell Jack',
        namePL: 'Dźwignia do podnoszenia sztangi',
        id: '_tc704',
        categoryID: '_ps',
        subcategoryID: '_sdp',
        properties: {
            length: 81,
            width: 76,
            height: 76,
            weight: 11
        },
        descriptionEN: "The TC704 barbell jack. Eliminate strain when loading and unloading heavy barbells for deadlifts and other ground-start exercises. Simply place the jack under the bar, pull the handle back to lift, and load additional weight as if the bar were resting on a rack.",
        descriptionPL: "Dźwignia do podnoszenia sztangi TC704. Pozbądź się bólu przy załadunku i rozładunku ciężkich sztang do martwego ciągu oraz innych ćwiczeń rozpoczynających się z podłoża. Wystarczy umieścić dźwignię pod sztangą, pociągnąć uchwyt do tyłu, aby ją podnieść, i nałożyć dodatkowy ciężar, tak jakby sztanga znajdowała się na stojaku.",
        picturePath: '/images/_tc704.jpg'
    },
    {
        nameEN: 'Foldable Rack',
        namePL: 'Stojak rozkładany',
        id: '_tc705',
        categoryID: '_ps',
        subcategoryID: '_sdp',
        properties: {
            length: 151,
            width: 91,
            height: 97,
            weight: 41
        },
        descriptionEN: "The TC705 foldable rack provides easy access for users with multiple barbell catches that ensure proper and safe grip positioning. A 10-degree vertical angle allows for free access to execute proper lifts.\n\n• Strong, bold design\n\n• Multiple barbell grip positions\n\n• Foldable sports equipment\n\nLike any other piece of equipment in our lineup, the Olympic squat rack adds value to the gym by combining key functionality and reliability with a well-thought-out design.\n\n• Frame construction – a sturdy, welded design ensures durability and allows use in demanding conditions.\n\n• Incline angle – the 10-degree vertical frame angle allows easy entry and exit from the Olympic squat rack.\n\n• Multiple barbell catches – several grip positions make lifting weights easier, while dual front barbell catches enable deadlifts and other exercises outside the rack.\n\n• Built-in storage – four conveniently placed weight horns accommodate Olympic and bumper plates without overlapping, ensuring quick and easy access.",
        descriptionPL: "Stojak rozkładany TC705 zapewnia łatwy dostęp użytkownikowi dzięki kilku uchwytom na sztangę, które umożliwiają prawidłowe i bezpieczne ustawienie chwytu. Pionowy kąt nachylenia wynoszący 10 stopni zapewnia swobodny dostęp do wykonywania poprawnych podnoszeń.\n\n• Mocna, solidna konstrukcja\n\n• Kilka pozycji uchwytu sztangi\n\n• Rozkładana konstrukcja\n\nJak każde inne urządzenie w naszej linii, olimpijski stojak na przysiady zwiększa wartość siłowni, łącząc kluczowe cechy funkcjonalności i niezawodności z przemyślanym designem.\n\n• Konstrukcja ramy – solidna, spawana konstrukcja zapewnia trwałość i pozwala na użytkowanie w wymagających warunkach.\n\n• Kąt nachylenia – pionowy kąt 10 stopni umożliwia łatwe wejście i wyjście ze stojaka podczas ćwiczeń.\n\n• Wiele uchwytów na sztangę – kilka pozycji chwytu ułatwia podnoszenie ciężarów, a podwójne przednie uchwyty pozwalają na wykonywanie martwego ciągu i innych ćwiczeń poza stojakiem.\n\n• Zintegrowany system przechowywania – cztery wygodnie rozmieszczone uchwyty na talerze pozwalają na przechowywanie zarówno olimpijskich, jak i bumperowych obciążeń, zapewniając szybki i łatwy dostęp.",
        picturePath: '/images/_tc705.jpg'
    },
    {
        nameEN: 'Adjustable Powerlifting Bench',
        namePL: 'Regulowana ławka do trójboju siłowego',
        id: '_tc706',
        categoryID: '_ps',
        subcategoryID: '_sdp',
        properties: {
            length: 170,
            width: 128,
            height: 96,
            weight: 105
        },
        descriptionEN: "The TC706 adjustable powerlifting bench is an essential piece of equipment for barbell training (bench press). This multifunctional professional bench from BruStyle features an extremely sturdy design, allowing it to support significant athlete weight. It is designed for bench pressing as well as exercises targeting the abdominal and leg muscles. The frame is made from high-strength profiled steel tubing, coated with a durable powder finish.\n\nThe seat is crafted from multi-layer plywood and covered with high-quality artificial leather, with polyurethane foam (PPU) filling that maintains its shape and resists compression. The equipment is foldable, making it compact and easy to transport.",
        descriptionPL: "Regulowana ławka do trójboju siłowego TC706 to niezastąpione wyposażenie do treningów ze sztangą (wyciskanie leżąc). Wielofunkcyjna, profesjonalna ławka od producenta BruStyle charakteryzuje się wyjątkowo solidną konstrukcją, dzięki czemu wytrzymuje duże obciążenia. Sprzęt ten przeznaczony jest do wyciskania sztangi leżąc, a także do ćwiczeń wzmacniających mięśnie brzucha i nóg. Rama została wykonana z wytrzymałej stalowej rury profilowej, pokrytej powłoką proszkową.\n\nSiedzisko z wielowarstwowej sklejki jest obite wysokiej jakości ekoskórą, a wypełnienie stanowi pianka poliuretanowa (PPU), która zachowuje swój kształt i nie ulega odkształceniom. Sprzęt jest rozkładany, co pozwala na oszczędność miejsca i łatwy transport.",
        picturePath: '/images/_tc706.jpg'
    },
    {
        nameEN: 'Ab Bench',
        namePL: 'Ławka do ćwiczeń brzucha',
        id: '_tc111',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 121,
            width: 60,
            height: 63,
            weight: 35
        },
        descriptionEN: "The TC111 ab bench is one of the most popular gym machines, designed to tone abdominal muscles. Regularly performing basic exercises such as torso raises and twists on this bench will help achieve desired results. For maximum comfort, the seat and rollers are made of dense foam and covered with artificial leather. The steel tube construction provides stability and prevents wobbling, while rubber foot pads absorb vibrations and prevent slipping. Due to its compact size, the bench is suitable for both gym and home use.\n\nFeatures:\n\n• reinforced stainless steel construction;\n\n• dense foam seat and rollers;\n\n• multi-layer plywood base for the seat;\n\n• shock-absorbing foot pads, no floor mounting required.",
        descriptionPL: "Ławka do ćwiczeń brzucha TC111 to jeden z najpopularniejszych sprzętów na siłowni, który pomaga wzmocnić mięśnie brzucha. Systematyczne wykonywanie podstawowych ćwiczeń, takich jak unoszenie i skręty tułowia, pozwala osiągnąć zamierzone rezultaty. Dla komfortu użytkownika siedzisko oraz wałki wykonane są z gęstej pianki i pokryte ekoskórą. Konstrukcja ze stalowych rur jest stabilna i odporna na przechylenia, a gumowe stopki tłumią drgania oraz zapobiegają ślizganiu się sprzętu. Dzięki kompaktowym rozmiarom ławka idealnie nadaje się zarówno do siłowni, jak i do użytku domowego.\n\nCechy:\n\n• wzmocniona konstrukcja ze stali nierdzewnej;\n\n• siedzisko i wałki z gęstej pianki;\n\n• wielowarstwowa sklejka jako podstawa siedziska;\n\n• amortyzujące stopki, niewymagające mocowania do podłogi.",
        picturePath: '/images/_tc111.jpg'
    },
    {
        nameEN: 'Foldable Multi-Function Trainer',
        namePL: 'Rozkładany kombajn treningowy',
        id: '_tc118.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 112,
            width: 107,
            height: 232,
            weight: 111
        },
        descriptionEN: "The TC118.1 foldable multi-function trainer is a high-quality professional workout complex, suitable for use in gyms, fitness clubs, or home environments. Exercises performed on this machine help strengthen all major upper body muscles, sculpt the torso, and enhance strength and definition. During workouts, the abdominal muscles, biceps, back muscles, chest, and triceps are actively engaged.\n\nThis fitness equipment is made from premium materials. It features a reinforced stainless steel frame with high-quality artificial leather upholstery.\n\nThe padding consists of dual-layer polyurethane foam, resistant to deformation. The frame is coated with powder enamel using an electrostatic spraying process, ensuring durability and wear resistance.",
        descriptionPL: "Rozkładany kombajn treningowy TC118.1 to doskonały kompleks treningowy klasy profesjonalnej, który może być używany w siłowniach, klubach fitness lub w domu. Ćwiczenia wykonywane na tym urządzeniu wzmacniają wszystkie główne mięśnie górnej części ciała, pomagają wyrzeźbić sylwetkę i rozwijać siłę. Podczas treningu aktywowane są mięśnie brzucha, bicepsy, mięśnie pleców, klatki piersiowej oraz tricepsy.\n\nSprzęt sportowy wykonany jest z wysokiej jakości materiałów. Posiada wzmocnioną konstrukcję ze stali nierdzewnej oraz tapicerkę z wysokiej klasy ekoskóry.\n\nWypełnienie stanowi dwuwarstwowa pianka poliuretanowa, odporna na odkształcenia. Konstrukcja jest pokryta emalią proszkową z elektrostatycznym napyleniem, co zapewnia jej trwałość i odporność na zużycie.",
        picturePath: '/images/_tc118.1.jpg'
    },
    {
        nameEN: 'Adjustable Ab Bench',
        namePL: 'Regulowana ławka do ćwiczeń brzucha',
        id: '_tc107',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 136,
            width: 58,
            height: 83,
            weight: 42
        },
        descriptionEN: "The TC107 adjustable ab bench is a great fitness machine that can be used in any training environment, whether at home, in gyms, or fitness clubs. It is perfect for sculpting and defining abdominal muscles, providing effective core workouts.\n\nThe equipment features a strong stainless steel frame. The seat is made from multi-layer plywood and covered with high-quality artificial leather. The bench is equipped with shock-absorbing foot pads, eliminating the need for floor mounting. Its filling consists of a durable dual-layer polyurethane foam that resists deformation. The frame is coated with a powder finish using an electrostatic spraying process, ensuring longevity and resistance to wear.",
        descriptionPL: "Regulowana ławka do ćwiczeń brzucha TC107 to doskonały sprzęt treningowy, który można używać niezależnie od miejsca i przeznaczenia. Idealnie nadaje się zarówno do domowych treningów, jak i do siłowni oraz klubów fitness. Ćwiczenia na tej ławce pomagają wyrzeźbić mięśnie brzucha i osiągnąć pożądany efekt.\n\nSprzęt posiada solidną konstrukcję wykonaną ze stali nierdzewnej. Siedzisko zostało wykonane z wielowarstwowej sklejki i pokryte wysokiej jakości ekoskórą. Ławka wyposażona jest w amortyzujące stopki, które eliminują konieczność mocowania do podłoża. Wypełnienie stanowi elastyczna, dwuwarstwowa pianka poliuretanowa odporna na odkształcenia. Konstrukcja została pokryta powłoką proszkową z elektrostatycznym napyleniem, co zapewnia jej trwałość i odporność na ścieranie.",
        picturePath: '/images/_tc107.jpg'
    },
    {
        nameEN: 'Squat Rack',
        namePL: 'Klatka do przysiadów',
        id: '_tc117',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 165,
            width: 138,
            height: 211,
            weight: 121
        },
        descriptionEN: "The TC117 squat rack is a convenient piece of equipment that ensures safe barbell squatting and helps prevent injuries. These exercises engage all leg muscle groups, chest muscles, surface back muscles, biceps, and triceps.\n\nThe steel frame is made from 80x60 mm tubing. The structure features hooks for holding the barbell, bar, and weight plates, allowing for organized storage of training equipment. A bench can be placed inside the rack for bench press exercises. The frame is highly stable and equipped with rubber foot pads that eliminate vibrations.",
        descriptionPL: "Klatka do przysiadów TC117 to wygodne urządzenie, które zapewnia bezpieczeństwo podczas przysiadów ze sztangą i chroni przed kontuzjami. Ćwiczenia wykonywane na tej konstrukcji angażują wszystkie grupy mięśni nóg, mięśnie klatki piersiowej, powierzchowne mięśnie pleców, bicepsy oraz tricepsy.\n\nStalowa rama wykonana jest z profilu 80x60 mm. Konstrukcja wyposażona jest w haki do przechowywania sztangi, gryfu i talerzy, co ułatwia organizację sprzętu treningowego. Wewnątrz ramy można umieścić ławkę do wyciskania leżąc. Konstrukcja jest stabilna i posiada gumowe stopki eliminujące wibracje.",
        picturePath: '/images/_tc117.jpg'
    },
    {
        nameEN: 'Adjustable (Mobile) Ab Bench',
        namePL: 'Regulowana (mobilna) ławka do ćwiczeń brzucha',
        id: '_tc107.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 127,
            width: 56,
            height: 80,
            weight: 43
        },
        descriptionEN: "The TC107.1 adjustable (mobile) ab bench is equipped with rubber foot pads and does not require additional floor fixation. It also features two wheels for easy mobility. The construction is designed to withstand 12-hour daily workouts, with a total warranty of 12 months. This equipment is an excellent addition to Swedish walls, fitness stations, and other sports equipment. It is foldable and compact, making it perfect for abdominal workouts. The frame is made of steel, supporting up to 300 kg while weighing 37 kg.\n\nThe bench strengthens the abdominal, chest, shoulder, and neck muscles while improving flexibility. Soft rollers provide secure leg support without causing discomfort, while the high-quality artificial leather upholstery covers a resilient foam interior for maximum comfort.",
        descriptionPL: "Regulowana (mobilna) ławka do ćwiczeń brzucha TC107.1 jest wyposażona w gumowe stopki i nie wymaga dodatkowego mocowania do podłoża. Dodatkowo posiada dwa kółka, co ułatwia jej przemieszczanie. Konstrukcja jest przystosowana do 12-godzinnych codziennych treningów, a całkowita gwarancja wynosi 12 miesięcy. Sprzęt stanowi doskonałe uzupełnienie do drabinek gimnastycznych, stacji fitness oraz innych urządzeń sportowych. Jest składana i kompaktowa, co sprawia, że idealnie nadaje się do wzmacniania mięśni brzucha. Konstrukcja wykonana jest ze stali i wytrzymuje obciążenie do 300 kg przy wadze własnej 37 kg.\n\nŁawka wzmacnia mięśnie brzucha, klatki piersiowej, obręczy barkowej i szyi, poprawiając elastyczność ciała. Miękkie wałki zapewniają stabilne podparcie nóg, nie powodując otarć, a wysokiej jakości ekoskóra pokrywająca siedzisko skrywa elastyczną piankę o dużej gęstości.",
        picturePath: '/images/_tc107.1.jpg'
    },
    {
        nameEN: 'Bench for Lying French Press',
        namePL: 'Ławka do francuskiego wyciskania leżąc',
        id: '_tc109',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 157,
            width: 82,
            height: 112,
            weight: 52
        },
        descriptionEN: "The TC109 bench for lying French press is designed for isolated triceps training through barbell pressing while lying down. The bench features a durable plywood base, a soft foam seat covered with high-quality artificial leather, and two hooks on the stands for different barbell height adjustments. A strong steel frame ensures stability during exercises, while rubber foot pads absorb impact and prevent slipping.",
        descriptionPL: "Ławka do francuskiego wyciskania leżąc TC109 to sprzęt przeznaczony do izolowanego treningu trójgłowego mięśnia ramienia poprzez wyciskanie sztangi leżąc.Ławka posiada podstawę wykonaną z wytrzymałej sklejki, miękkie siedzisko z pianki poliuretanowej, obite wysokiej jakości ekoskórą. Stojaki wyposażone są w dwa haki, umożliwiające umieszczenie sztangi na różnych wysokościach. Stabilna stalowa konstrukcja zapewnia bezpieczeństwo podczas ćwiczeń, a gumowe stopki na nogach tłumią drgania i zapobiegają ślizganiu się sprzętu.",
        picturePath: '/images/_tc109.jpg'
    },
    {
        nameEN: 'Scott Bench',
        namePL: 'Ławka Scotta',
        id: '_tc110',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 100,
            width: 76,
            height: 96,
            weight: 39
        },
        descriptionEN: "The TC110 Scott bench is a specially designed bench for arm exercises, particularly targeting the biceps and forearms.",
        descriptionPL: "Ławka Scotta TC110 to specjalnie zaprojektowana ławka przeznaczona do ćwiczeń na ręce, w szczególności na biceps i przedramiona.",
        picturePath: '/images/_tc110.jpg'
    },
    {
        nameEN: 'Adjustable Scott Bench',
        namePL: 'Regulowana ławka Scotta',
        id: '_tc110.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 99,
            width: 82,
            height: 90,
            weight: 42
        },
        descriptionEN: "The TC110.1 adjustable Scott bench is a simple yet effective machine designed for targeted training of the lower and middle biceps. The angled soft pad allows for stable arm positioning, ensuring proper and safe execution of barbell and dumbbell exercises. The sturdy frame is made of steel with a powder-coated finish. The seat features a plywood base, dense foam padding, and artificial leather upholstery for maximum comfort during workouts. Exercises are performed in a standing position.",
        descriptionPL: "Regulowana ławka Scotta TC110.1 to prosty, ale skuteczny sprzęt przeznaczony do intensywnego treningu dolnej i środkowej części bicepsa. Miękka poduszka ustawiona pod kątem umożliwia stabilne podparcie rąk, co zapewnia prawidłowe i bezpieczne wykonywanie ćwiczeń ze sztangą i hantlami. Solidna rama wykonana jest ze stali pokrytej powłoką proszkową. Siedzisko posiada podstawę ze sklejki, gęste wypełnienie piankowe oraz pokrycie z ekoskóry, co zapewnia komfort podczas ćwiczeń. Treningi wykonywane są w pozycji stojącej.",
        picturePath: '/images/_tc110.1.jpg'
    },
    {
        nameEN: 'Roman Chair',
        namePL: 'Rzymska ławka',
        id: '_tc112',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 135,
            width: 60,
            height: 126,
            weight: 38
        },
        descriptionEN: "The TC112 Roman chair is an excellent piece of equipment for effectively training the rectus and oblique abdominal muscles. Regular workouts help achieve a flat and sculpted stomach. The sturdy frame is made from 80x60 mm steel tubing, ensuring high stability. Rubber foot pads absorb vibrations, eliminating the need for floor mounting. The soft seat is crafted from plywood with dense foam padding and covered with PU leather. Comfortable exercise performance is ensured by soft leg rollers and a grip handle.",
        descriptionPL: "Rzymska ławka TC112 to doskonały sprzęt do efektywnego treningu mięśni prostych i skośnych brzucha. Regularne ćwiczenia pozwalają osiągnąć płaski i wyrzeźbiony brzuch. Solidna konstrukcja wykonana jest ze stalowej rury o profilu 80x60 mm, co zapewnia wysoką stabilność. Gumowe stopki tłumią drgania, eliminując konieczność mocowania sprzętu do podłogi. Miękkie siedzisko wykonane jest z wielowarstwowej sklejki, wypełnione gęstą pianką i pokryte skórą PU. Dodatkowy komfort zapewniają miękkie wałki pod nogi oraz uchwyt do podtrzymania rąk.",
        picturePath: '/images/_tc112.jpg'
    },
    {
        nameEN: 'Adjustable Roman Chair',
        namePL: 'Regulowana ławka rzymska',
        id: '_tc113',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 131,
            width: 62,
            height: 117,
            weight: 49
        },
        descriptionEN: "The TC113 adjustable Roman chair is an excellent addition to any workout. It is a professional-grade machine designed for use in fitness clubs and gyms. Thanks to its compact size, it is also suitable for home training. Regular exercises on this equipment help effectively strengthen oblique abdominal muscles, resulting in a well-defined and strong core.\n\nThe frame is made of durable stainless steel, and the machine is constructed from high-quality, wear-resistant materials. The adjustable leg roller allows users to customize the equipment to their body size. Shock-absorbing foot pads eliminate the need for floor mounting.\n\nThe seat is made from multi-layer plywood, with dual-layer polyurethane foam padding that resists deformation. The Roman chair is covered with high-quality artificial leather, while the entire frame is coated with powder enamel with an electrostatic spray finish, ensuring long-lasting durability.",
        descriptionPL: "Regulowana ławka rzymska TC113 to doskonałe uzupełnienie każdego treningu. Jest to profesjonalny sprzęt przeznaczony do użytku w klubach fitness oraz siłowniach. Dzięki kompaktowym rozmiarom świetnie nadaje się również do treningów w domu. Regularne ćwiczenia na tym sprzęcie pozwalają skutecznie wzmacniać skośne mięśnie brzucha, tworząc wyrzeźbiony i silny korpus.\n\nKonstrukcja wykonana jest z wytrzymałej stali nierdzewnej, a sprzęt został zaprojektowany z wysokiej jakości materiałów odpornych na zużycie. Regulowany wałek na nogi umożliwia dopasowanie urządzenia do wzrostu użytkownika. Amortyzujące stopki eliminują potrzebę mocowania sprzętu do podłogi.\n\nSiedzisko wykonane jest z wielowarstwowej sklejki, a wypełnienie stanowi dwuwarstwowa pianka poliuretanowa odporna na odkształcenia. Ławka rzymska pokryta jest wysokiej jakości ekoskórą, a całość zabezpieczona jest powłoką proszkową z elektrostatycznym napyleniem, co zwiększa jej trwałość.",
        picturePath: '/images/_tc113.jpg'
    },
    {
        nameEN: 'Twister',
        namePL: 'Twister',
        id: '_tc114',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 146,
            width: 60,
            height: 117,
            weight: 47
        },
        descriptionEN: "The TC114 twister helps develop calf muscles, lower back, abs, and obliques while effectively burning calories. This machine features two platforms, allowing for simultaneous twisting exercises in both sitting and standing positions. Its sturdy design ensures safe workouts. The seat base is made from durable plywood, while the cushions and roller are filled with wear-resistant foam and covered with artificial leather. The seat height is adjustable. For added stability during exercises, there are soft handles. Shock-absorbing foot pads eliminate slipping and vibration during use.",
        descriptionPL: "Twister TC114 — pozwala wzmocnić mięśnie łydek, dolnego odcinka pleców, brzucha oraz mięśnie skośne, a także efektywnie spalać kalorie. Trenażer wyposażony jest w dwie platformy, umożliwiające jednoczesne wykonywanie obrotów w pozycji siedzącej i stojącej. Stabilna konstrukcja zapewnia bezpieczne wykonywanie ćwiczeń. Podstawa siedziska wykonana jest z wytrzymałej sklejki, a poduszki i wałki wypełnione są odporną na zużycie pianką, pokrytą ekoskórą. Wysokość siedziska jest regulowana. Dla większej stabilności podczas ćwiczeń zastosowano miękkie uchwyty. Amortyzujące stopki eliminują poślizg i drgania podczas treningu.",
        picturePath: '/images/_tc114.jpg'
    },
    {
        nameEN: 'Squat Rack',
        namePL: 'Stojak do przysiadów',
        id: '_tc116',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 163,
            width: 145,
            height: 182,
            weight: 108
        },
        descriptionEN: 'The TC116 squat rack is designed for maximum comfort when performing barbell squats. This athletic rack helps effectively train glute and thigh muscles, while also engaging secondary muscle groups such as the abs, calves, and back. The "barbell press" exercise also targets the quadriceps and shoulder muscles.This squat rack is suitable for both professional athletes and fitness enthusiasts. Its stable construction ensures safe and productive training for users of all experience levels.',
        descriptionPL: "Stojak do przysiadów TC116 został zaprojektowany tak, aby umożliwić jak najbardziej komfortowe wykonywanie przysiadów ze sztangą. Sprzęt ten pozwala skutecznie trenować mięśnie pośladków i ud, a także angażuje dodatkowo mięśnie brzucha, łydek i pleców. Ćwiczenie „wyciskanie sztangi” dodatkowo wspiera rozwój mięśni czworogłowych oraz obręczy barkowej. Stojak do przysiadów jest odpowiedni zarówno dla profesjonalnych sportowców, jak i amatorów. Dzięki stabilnej konstrukcji i przemyślanemu projektowi, użytkownicy o różnym poziomie zaawansowania mogą bezpiecznie i efektywnie trenować.",
        picturePath: '/images/_tc116.jpg'
    },
    {
        nameEN: 'Decline Bench Press Bench',
        namePL: 'Ławka do wyciskania pod kątem ujemnym',
        id: '_tc106',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 159,
            width: 127,
            height: 113,
            weight: 33
        },
        descriptionEN: "The TC106 decline bench press bench is designed to evenly distribute the load during bench pressing. The decline press is used to enhance and sculpt the lower portion of the chest muscles, giving them sharper definition and separation from the main mass. The bench’s base is made from durable plywood, with a soft foam seat covered in high-quality artificial leather. The rack features two hooks for setting the barbell at different heights. Stability during workouts is ensured by a sturdy steel frame, while rubber foot pads provide shock absorption and prevent slipping.",
        descriptionPL: "Ławka do wyciskania pod kątem ujemnym TC106 to sprzęt, który umożliwia równomierne rozłożenie obciążenia podczas wyciskania sztangi. Ćwiczenie z ujemnym kątem nachylenia pomaga wzmocnić i wyrzeźbić dolną część mięśni klatki piersiowej, nadając im bardziej wyrazisty i zdefiniowany kształt. Podstawa ławki wykonana jest z wytrzymałej sklejki, a miękkie siedzisko wypełnione pianką poliuretanową i pokryte wysokiej jakości ekoskórą. Stojaki posiadają dwa haki, umożliwiające ustawienie sztangi na różnych wysokościach. Stabilność podczas ćwiczeń zapewnia solidna stalowa konstrukcja, a amortyzujące gumowe stopki eliminują drgania.",
        picturePath: '/images/_tc106.jpg'
    },
    {
        nameEN: 'Standing Scott Bench',
        namePL: 'Ławka Scotta stojąca',
        id: '_tc110.2',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 89,
            width: 76,
            height: 118,
            weight: 41
        },
        descriptionEN: "The TC110.2 standing Scott bench is a simple yet effective machine designed for targeted training of the lower and middle biceps. The angled soft pad allows for stable arm positioning, ensuring proper and safe execution of barbell and dumbbell exercises. The sturdy frame is made of steel with a powder-coated finish. The seat features a plywood base, dense foam padding, and artificial leather upholstery for maximum comfort during workouts. Exercises are performed in a standing position.",
        descriptionPL: "Ławka Scotta stojąca TC110.2 to prosty, ale skuteczny sprzęt przeznaczony do intensywnego treningu dolnej i środkowej części bicepsa. Miękka poduszka ustawiona pod kątem umożliwia stabilne podparcie rąk, co zapewnia prawidłowe i bezpieczne wykonywanie ćwiczeń ze sztangą i hantlami. Solidna rama wykonana jest ze stali pokrytej powłoką proszkową. Siedzisko posiada podstawę ze sklejki, gęste wypełnienie piankowe oraz pokrycie z ekoskóry, co zapewnia komfort podczas ćwiczeń. Treningi wykonywane są w pozycji stojącej.",
        picturePath: '/images/_tc110.2.jpg'
    },
    {
        nameEN: 'Multi-Function Trainer',
        namePL: 'Kombajn treningowy',
        id: '_tc118',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 107,
            width: 110,
            height: 235,
            weight: 105
        },
        descriptionEN: "The TC118 multi-function trainer is a high-quality professional workout complex, suitable for use in gyms, fitness clubs, or home environments. Exercises performed on this machine help strengthen all major upper body muscles, sculpt the torso, and enhance strength and definition. During workouts, the abdominal muscles, biceps, back muscles, chest, and triceps are actively engaged.\n\nThis fitness equipment is made from premium materials. It features a reinforced stainless steel frame with high-quality artificial leather upholstery.\n\nThe padding consists of dual-layer polyurethane foam, resistant to deformation. The frame is coated with powder enamel using an electrostatic spraying process, ensuring durability and wear resistance.",
        descriptionPL: "Kombajn treningowy TC118 to doskonały kompleks treningowy klasy profesjonalnej, który może być używany w siłowniach, klubach fitness lub w domu. Ćwiczenia wykonywane na tym urządzeniu wzmacniają wszystkie główne mięśnie górnej części ciała, pomagają wyrzeźbić sylwetkę i rozwijać siłę. Podczas treningu aktywowane są mięśnie brzucha, bicepsy, mięśnie pleców, klatki piersiowej oraz tricepsy.\n\nSprzęt sportowy wykonany jest z wysokiej jakości materiałów. Posiada wzmocnioną konstrukcję ze stali nierdzewnej oraz tapicerkę z wysokiej klasy ekoskóry.\n\nWypełnienie stanowi dwuwarstwowa pianka poliuretanowa, odporna na odkształcenia. Konstrukcja jest pokryta emalią proszkową z elektrostatycznym napyleniem, co zapewnia jej trwałość i odporność na zużycie.",
        picturePath: '/images/_tc118.jpg'
    },
    {
        nameEN: 'Decline Bench Press Bench',
        namePL: 'Ławka do wyciskania pod kątem ujemnym',
        id: '_tc106.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 205,
            width: 166,
            height: 113,
            weight: 79
        },
        descriptionEN: "The TC106.1 decline bench press bench is designed to evenly distribute the load during bench pressing, featuring additional support racks. The decline press is used to enhance and sculpt the lower portion of the chest muscles, giving them sharper definition and separation from the main mass. The bench’s base is made from durable plywood, with a soft foam seat covered in high-quality artificial leather. The rack features two hooks for setting the barbell at different heights. Stability during workouts is ensured by a sturdy steel frame, while rubber foot pads provide shock absorption and prevent slipping.",
        descriptionPL: "Ławka do wyciskania pod kątem ujemnym TC106.1 to sprzęt, który umożliwia równomierne rozłożenie obciążenia podczas wyciskania sztangi leżąc, wyposażony w dodatkowe stojaki. Ćwiczenie z ujemnym kątem nachylenia pomaga wzmocnić i wyrzeźbić dolną część mięśni klatki piersiowej, nadając im bardziej wyrazisty i zdefiniowany kształt. Podstawa ławki wykonana jest z wytrzymałej sklejki, a miękkie siedzisko wypełnione pianką poliuretanową i pokryte wysokiej jakości ekoskórą. Stojaki posiadają dwa haki, umożliwiające ustawienie sztangi na różnych wysokościach. Stabilność podczas ćwiczeń zapewnia solidna stalowa konstrukcja, a amortyzujące gumowe stopki eliminują drgania.",
        picturePath: '/images/_tc106.1.jpg'
    },
    {
        nameEN: 'Lying Leg Curl Machine',
        namePL: 'Maszyna do uginania nóg leżąc',
        id: '_tc310',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 153,
            width: 113,
            height: 79,
            weight: 91
        },
        descriptionEN: "The TC310 lying leg curl machine is an isolation exercise machine designed to target the hamstrings. It helps define muscles, visually separate the thighs from the glutes, and achieve a well-proportioned leg shape, especially when quadriceps are well-developed. Typically, leg curls and extensions are used together in leg training.\n\nLying leg curls, as well as seated and standing variations (which are also available in some machines), are among the most popular lower-body exercises for both men and women. This is due to the ease of learning the movement and the ability to effectively target the desired muscle group.",
        descriptionPL: "Maszyna do uginania nóg leżąc TC310 to urządzenie izolujące, przeznaczone do treningu mięśni tylnej części ud. Pomaga wyrzeźbić mięśnie, wizualnie oddzielić uda od pośladków i osiągnąć harmonijną sylwetkę nóg, zwłaszcza przy dobrze rozwiniętych mięśniach czworogłowych. Zazwyczaj w treningu nóg uginanie i prostowanie są stosowane razem.\n\nUginanie nóg w pozycji leżącej, a także alternatywnie w pozycji siedzącej lub stojącej (są również takie maszyny), to jedno z najpopularniejszych ćwiczeń zarówno w treningu mężczyzn, jak i kobiet na dolną część ciała. Jest ono łatwe do opanowania pod względem techniki i pozwala skutecznie angażować docelowe mięśnie.",
        picturePath: '/images/_tc310.jpg'
    },
    {
        nameEN: 'Flat Bench Press Bench',
        namePL: 'Ławka do wyciskania pozioma',
        id: '_tc103',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 135,
            width: 124,
            height: 120,
            weight: 36
        },
        descriptionEN: 'The TC103 flat bench press bench is one of the most popular pieces of gym equipment. It can be used both at home and in professional gyms. This equipment helps develop chest muscles through the "bench press" exercise. The bench strengthens the torso, enhances muscle definition, and improves endurance. During workouts, the triceps, chest muscles, and front deltoid muscles are actively engaged.\n\nThe equipment features a strong stainless steel frame and is made from high-quality materials. Shock-absorbing foot pads eliminate the need for floor mounting. The seat is made of multi-layer plywood, with dual-layer polyurethane foam padding that resists deformation and compression. The frame is coated with powder enamel using an electrostatic spray process, ensuring durability and wear resistance.',
        descriptionPL: "Najpopularniejszym sprzętem treningowym jest pozioma ławka do wyciskania TC103. Konstrukcja może być używana zarówno w domu, jak i na siłowniach. Sprzęt pomaga rozwijać mięśnie klatki piersiowej poprzez wykonywanie wyciskania sztangi leżąc. Dzięki temu można wzmocnić tors, nadać mu rzeźbiony wygląd oraz zwiększyć wytrzymałość organizmu. Podczas treningu angażowane są tricepsy, mięśnie klatki piersiowej oraz przednie mięśnie naramienne.\n\nSprzęt posiada wytrzymałą konstrukcję wykonaną ze stali nierdzewnej i z materiałów najwyższej jakości. Amortyzujące stopki eliminują konieczność mocowania sprzętu do podłogi. Siedzisko wykonane jest z wielowarstwowej sklejki, a jego wypełnienie stanowi dwuwarstwowa pianka poliuretanowa odporna na odkształcenia. Konstrukcja pokryta jest proszkową emalią z elektrostatycznym napyleniem, co zapewnia trwałość i odporność na ścieranie.",
        picturePath: '/images/_tc103.jpg'
    },
    {
        nameEN: 'Lat Pulldown Machine',
        namePL: 'Maszyna do ściągania drążka (Lat Pulldown)',
        id: '_tc311',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 164,
            width: 97,
            height: 181,
            weight: 98
        },
        descriptionEN: "The TC311 lat pulldown machine is essential for athletes engaged in various sports. It is highly effective for increasing back width and enhancing overall body aesthetics. An adjustable support roller allows users of different heights to comfortably use the machine. The concealed bearing and shock absorption system ensures smooth movement and noise reduction. Ergonomic hand levers closely mimic the natural range of motion, providing additional comfort during workouts. Users can also perform unilateral exercises, working each arm separately. The machine comes with a manual, four weight plate holders, and shock-absorbing bearings. Upholstery: high-quality artificial leather. Padding: dual-layer foam, resistant to compression and deformation. Coating: powder enamel with electrostatic spraying\n\nSecondary muscle engagement: biceps and shoulder muscles.",
        descriptionPL: "Maszyna do ściągania drążka TC311 to niezastąpione urządzenie do przygotowania fizycznego sportowców uprawiających różne dyscypliny. Jest wyjątkowo skuteczna w poszerzaniu mięśni pleców i modelowaniu estetycznej sylwetki. Regulowany wałek podporowy umożliwia dostosowanie maszyny do użytkowników o różnym wzroście. Ukryty system łożysk i amortyzatorów zapewnia płynną pracę oraz redukcję hałasu. Uchwyty o ergonomicznym kształcie maksymalnie odwzorowują naturalny zakres ruchu, co zwiększa komfort podczas ćwiczeń. Możliwe jest także wykonywanie ruchów jednostronnych dla każdej ręki oddzielnie. Maszyna jest wyposażona w instrukcję obsługi, cztery uchwyty na obciążenia oraz amortyzowane łożyska. Obicie: wysokiej jakości ekoskóra. Wypełnienie: dwuwarstwowa pianka odporna na osiadanie i odkształcenia. Malowanie: powłoka proszkowa z elektrostatycznym napyleniem\n\nDodatkowe zaangażowane mięśnie: bicepsy oraz mięśnie barków.",
        picturePath: '/images/_tc311.jpg'
    },
    {
        nameEN: 'Flat Bench Press Bench (with Platform)',
        namePL: 'Ławka do wyciskania pozioma (z platformą)',
        id: '_tc103.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 150,
            width: 124,
            height: 120,
            weight: 46
        },
        descriptionEN: "The TC103.1 flat bench press bench (with platform) can be used for exercises with dumbbells and a barbell, effectively training the chest and triceps muscles. It is designed for both home use and intensive commercial training. The high-quality materials and structural features allow for over 12 hours of continuous daily use, ensuring durability and comfort during workouts.",
        descriptionPL: "Ławka do wyciskania pozioma (z platformą) TC103.1 może być używana do ćwiczeń z hantlami i sztangą, angażując mięśnie klatki piersiowej oraz tricepsa. Nadaje się zarówno do użytku domowego, jak i do intensywnego użytkowania komercyjnego. Materiały oraz konstrukcja urządzenia pozwalają na jego eksploatację przez ponad 12 godzin dziennie, zapewniając trwałość i komfort podczas treningu.",
        picturePath: '/images/_tc103.1.jpg'
    },
    {
        nameEN: 'Front Lat Pulldown Machine',
        namePL: 'Maszyna do ściągania drążka z przodu',
        id: '_tc311.1',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 164,
            width: 97,
            height: 204,
            weight: 96
        },
        descriptionEN: "The TC311.1 front lat pulldown machine is essential for athletes engaged in various sports. It is highly effective for increasing back width and enhancing overall body aesthetics. An adjustable support roller allows users of different heights to comfortably use the machine. The concealed bearing and shock absorption system ensures smooth movement and noise reduction. Ergonomic hand levers closely mimic the natural range of motion, providing additional comfort during workouts. Users can also perform unilateral exercises, working each arm separately. The machine comes with a manual, four weight plate holders, and shock-absorbing bearings. Upholstery: high-quality artificial leather. Padding: dual-layer foam, resistant to compression and deformation. Coating: powder enamel with electrostatic spraying\n\nSecondary muscle engagement: biceps and shoulder muscles.",
        descriptionPL: "Maszyna do ściągania drążka z przodu TC311.1 to niezastąpione urządzenie w przygotowaniu fizycznym sportowców uprawiających różne dyscypliny. Jest wyjątkowo skuteczna w rozwijaniu szerokości mięśni pleców oraz modelowaniu estetycznej sylwetki. Regulowany wałek podporowy pozwala na dostosowanie maszyny do wzrostu użytkownika. Ukryty system łożysk i amortyzatorów zapewnia płynną pracę i redukcję hałasu. Ergonomiczne uchwyty na ręce odzwierciedlają naturalny zakres ruchu, co zwiększa komfort ćwiczeń. Możliwe jest także jednostronne wykonywanie ruchów dla każdej ręki oddzielnie. Maszyna jest wyposażona w instrukcję obsługi, cztery uchwyty na obciążenia oraz amortyzowane łożyska. Obicie: wysokiej jakości ekoskóra. Wypełnienie: dwuwarstwowa pianka odporna na odkształcenia i osiadanie. Malowanie: powłoka proszkowa z elektrostatycznym napyleniem\n\nDodatkowo angażowane mięśnie: bicepsy oraz mięśnie barków.",
        picturePath: '/images/_tc311.1.jpg'
    },
    {
        nameEN: 'Flat Bench Press Bench',
        namePL: 'Ławka do wyciskania pozioma',
        id: '_tc103.2',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 140,
            width: 122,
            height: 120,
            weight: 60
        },
        descriptionEN: "The TC103.2 flat bench press bench can be used for exercises with dumbbells and a barbell, effectively training the chest and triceps muscles. It is designed for both home use and intensive commercial training. The high-quality materials and structural features allow for over 12 hours of continuous daily use, ensuring durability and comfort during workouts.",
        descriptionPL: "Ławka do wyciskania pozioma TC103.2 może być używana do ćwiczeń z hantlami i sztangą, angażując mięśnie klatki piersiowej oraz tricepsy. Nadaje się zarówno do użytku domowego, jak i do intensywnego użytkowania komercyjnego. Materiały oraz konstrukcja urządzenia pozwalają na jego eksploatację przez ponad 12 godzin dziennie, zapewniając trwałość i komfort podczas treningu.",
        picturePath: '/images/_tc103.2.jpg'
    },
    {
        nameEN: 'Delta Machine (Shoulder Press Machine)',
        namePL: 'Maszyna do ćwiczenia mięśni naramiennych (Delta Machine)',
        id: '_tc312',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 102,
            width: 79,
            height: 116,
            weight: 64
        },
        descriptionEN: "The TC312 Delta Machine is designed to build deltoid muscles, which form the upper part of the shoulder girdle. This piece of equipment is essential for the physical conditioning of athletes across various sports disciplines. It is highly effective for sculpting a strong and well-defined upper body. The primary feature of this machine is its ability to efficiently target the deltoid muscles, with the main focus on the middle section. An adjustable seat height allows users to optimize the machine according to their height for a proper and comfortable workout.\n\nThe machine is coated with a durable powder finish. The padding consists of dual-layer thermoformed foam, while the upholstery is made of high-quality artificial leather. The adjustable seat height ensures a customized setup for each athlete, promoting correct posture and enhanced training comfort.",
        descriptionPL: "Maszyna do ćwiczenia mięśni naramiennych TC312 jest przeznaczona do rozwijania mięśni naramiennych, które stanowią górną część obręczy barkowej. To urządzenie ma kluczowe znaczenie dla fizycznego przygotowania sportowców uprawiających różne dyscypliny. Jest niezwykle skuteczne w kształtowaniu silnej i proporcjonalnej sylwetki górnej części ciała. Główną zaletą maszyny jest jej zdolność do intensywnej aktywacji mięśni naramiennych, szczególnie ich środkowej części. Regulowane siedzisko pozwala dostosować sprzęt do wzrostu użytkownika, zapewniając optymalną pozycję podczas ćwiczeń.\n\nUrządzenie pokryte jest trwałą farbą proszkową, a jego wypełnienie stanowi dwuwarstwowa pianka termoformowana. Tapicerka wykonana jest z wysokiej jakości ekoskóry. Regulowana wysokość siedziska umożliwia precyzyjne dopasowanie sprzętu do potrzeb użytkownika, zapewniając prawidłową i komfortową postawę podczas treningu.",
        picturePath: '/images/_tc312.jpg'
    },
    {
        nameEN: 'Flat Bench Press Bench (with Additional Racks)',
        namePL: 'Ławka do wyciskania pozioma (z dodatkowymi stojakami)',
        id: '_tc103.3',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 174,
            width: 163,
            height: 120,
            weight: 66
        },
        descriptionEN: "The TC103.3 flat bench press bench with additional racks can be used for exercises with dumbbells and a barbell, effectively training the chest and triceps muscles. It is designed for both home use and intensive commercial training. The high-quality materials and structural features allow for over 12 hours of continuous daily use, ensuring durability and comfort during workouts.",
        descriptionPL: "Ławka do wyciskania pozioma TC103.3 z dodatkowymi stojakami może być używana do ćwiczeń z hantlami i sztangą, angażując mięśnie klatki piersiowej oraz tricepsy. Nadaje się zarówno do użytku domowego, jak i do intensywnego treningu komercyjnego. Materiały oraz konstrukcja urządzenia pozwalają na jego eksploatację przez ponad 12 godzin dziennie, zapewniając trwałość i komfort podczas ćwiczeń.",
        picturePath: '/images/_tc103.3.jpg'
    },
    {
        nameEN: 'Triceps Machine',
        namePL: 'Maszyna do ćwiczenia tricepsów',
        id: '_tc313',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 145,
            width: 115,
            height: 119,
            weight: 88
        },
        descriptionEN: "The TC313 triceps machine is designed for effective arm muscle training, specifically targeting the triceps. It is an excellent machine for the physical conditioning of athletes across various sports. Its structure helps develop strong and well-defined arms. Exercises on this machine isolate the triceps, providing significant resistance to the inner and middle sections of the muscle. The adjustable seat and backrest allow for optimal customization, ensuring a proper and comfortable training position. Upholstery: high-quality artificial leather. Padding: dual-layer foam, resistant to compression and deformation. Coating: powder enamel with electrostatic spraying",
        descriptionPL: "Maszyna do ćwiczenia tricepsów TC313 została zaprojektowana do skutecznego treningu mięśni ramion, a w szczególności tricepsów. To doskonałe urządzenie do przygotowania fizycznego sportowców uprawiających różne dyscypliny. Konstrukcja maszyny pozwala na budowanie silnych i estetycznie wyrzeźbionych ramion. Ćwiczenia wykonywane na tym urządzeniu izolują triceps, zapewniając intensywne obciążenie wewnętrznej i środkowej części mięśnia. Regulowane siedzisko i oparcie umożliwiają precyzyjne dostosowanie sprzętu do potrzeb użytkownika, co zapewnia optymalny komfort i prawidłową pozycję podczas treningu. Obicie: wysokiej jakości ekoskóra. Wypełnienie: dwuwarstwowa pianka odporna na osiadanie i odkształcenia. Malowanie: powłoka proszkowa z elektrostatycznym napyleniem",
        picturePath: '/images/_tc313.jpg'
    },
    {
        nameEN: 'Incline Bench Press Bench (with Additional Racks)',
        namePL: 'Ławka do wyciskania pod kątem w górę (z dodatkowymi stojakami)',
        id: '_tc104.1',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 187,
            width: 163,
            height: 143,
            weight: 86
        },
        descriptionEN: "The TC104.1 incline bench press bench with additional racks is designed for chest muscle training. When performing a bench press, the primary load is placed on the upper chest muscles, while the secondary muscles engaged include the front deltoids.",
        descriptionPL: "Ławka do wyciskania pod kątem w górę TC104.1 z dodatkowymi stojakami jest przeznaczona do treningu mięśni klatki piersiowej. Podczas wyciskania sztangi główne obciążenie skupia się na górnej części mięśni klatki piersiowej, a dodatkowo angażowane są przednie mięśnie naramienne.",
        picturePath: '/images/_tc104.1.jpg'
    },
    {
        nameEN: 'T-Bar Row with Foot Support',
        namePL: 'T-Wiosłowanie z podparciem nóg',
        id: '_tc314',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 207,
            width: 80,
            height: 60,
            weight: 65
        },
        descriptionEN: "The TC314 T-Bar row machine with foot support effectively targets the upper back, latissimus dorsi, and biceps muscles. The machine features comfortable foot supports and soft grips with two different hand positions. A specialized bar allows for weight plates up to 250 kg. Its sturdy frame is made from 80 x 60 mm profiled steel tubing, ensuring high durability. The frame is coated with a scratch-resistant, chip-resistant, and corrosion-resistant powder finish.",
        descriptionPL: "T-Wiosłowanie z podparciem nóg TC314 to maszyna, która skutecznie wzmacnia mięśnie górnej partii pleców, najszerszy grzbietu oraz biceps. Urządzenie wyposażone jest w wygodne podparcia na nogi oraz miękkie uchwyty, umożliwiające chwyt w dwóch pozycjach. Specjalny gryf pozwala na założenie obciążeń o łącznej wadze do 250 kg. Solidna konstrukcja wykonana jest ze stalowej, profilowanej rury o wymiarach 80 x 60 mm, co zapewnia wysoką wytrzymałość. Rama pokryta jest odporną na zarysowania, odpryski i korozję farbą proszkową.",
        picturePath: '/images/_tc314.jpg'
    },
    {
        nameEN: 'Seated Bench Press Bench',
        namePL: 'Ławka do wyciskania w pozycji siedzącej',
        id: '_tc105',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 123,
            width: 105,
            height: 150,
            weight: 23
        },
        descriptionEN: "The TC105 seated bench press bench is designed for barbell exercises targeting the deltoid muscles. Due to its durable materials and structural features, it can withstand intensive use for over 12 hours per day.",
        descriptionPL: "Ławka do wyciskania w pozycji siedzącej TC105 jest przeznaczona do ćwiczeń ze sztangą, skupiających się na treningu mięśni naramiennych. Dzięki wysokiej jakości materiałom oraz solidnej konstrukcji sprzęt może być użytkowany przez ponad 12 godzin dziennie.",
        picturePath: '/images/_tc105.jpg'
    },
    {
        nameEN: 'Biceps Machine',
        namePL: 'Maszyna do ćwiczenia bicepsów',
        id: '_tc317',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 119,
            width: 115,
            height: 96,
            weight: 66
        },
        descriptionEN: "The TC317 biceps machine is designed for intense biceps training and shaping well-defined muscle contours. The structure is made from 80x60 mm steel tubing and coated with a durable powder finish. The soft seat and cushion are filled with dense foam and covered with a strong vinyl material. This machine is built for long-term and intensive use, supporting loads of up to 150 kg. Rubber foot pads absorb vibrations during workouts, ensuring stability and comfort.",
        descriptionPL: "Maszyna do ćwiczenia bicepsów TC317 została zaprojektowana do intensywnego treningu bicepsów i kształtowania ich wyrazistej rzeźby. Konstrukcja wykonana jest ze stalowych profili 80x60 mm i pokryta powłoką proszkową. Miękkie siedzisko oraz poduszka zostały wypełnione gęstą pianką i obite wytrzymałym winylowym pokryciem. Maszyna jest przystosowana do długotrwałego i intensywnego użytkowania oraz wytrzymuje obciążenie do 150 kg. Gumowe stopki na podstawie amortyzują wibracje podczas ćwiczeń, zapewniając stabilność i komfort.",
        picturePath: '/images/_tc317.jpg'
    },
    {
        nameEN: 'Overhead Press Machine',
        namePL: 'Maszyna do wyciskania w górę',
        id: '_tc319',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 191,
            width: 171,
            height: 125,
            weight: 114
        },
        descriptionEN: "The TC319 overhead press machine is designed for training the upper shoulder girdle, primarily targeting the deltoid muscles. It is essential for developing strong and well-defined shoulders and arms. Its construction allows for complete isolation of the deltoid muscles. The machine features an assisted start mechanism, eliminating the risk of injury and enabling safe training for users of all fitness levels. An adjustable seat allows for optimal customization, ensuring proper posture and comfort during workouts. Additionally, the machine includes a weight plate holder. The design is based on a system of independent levers, allowing for smooth and natural movement.",
        descriptionPL: "Maszyna do wyciskania w górę TC319 została zaprojektowana do treningu górnej części obręczy barkowej, skupiając się na mięśniach naramiennych. Jest niezbędna do budowania silnych i estetycznie wyrzeźbionych barków oraz ramion. Dzięki swojej konstrukcji zapewnia pełną izolację mięśni naramiennych. Maszyna wyposażona jest w mechanizm ułatwionego startu, co eliminuje ryzyko kontuzji i umożliwia bezpieczny trening osobom o różnym poziomie zaawansowania. Regulowane siedzisko pozwala na optymalne dopasowanie sprzętu do wzrostu użytkownika, zapewniając prawidłową postawę i komfort podczas ćwiczeń. Dodatkowo maszyna posiada trzpień na obciążenia. Konstrukcja oparta jest na systemie niezależnych dźwigni, co pozwala na płynne i naturalne ruchy.",
        picturePath: '/images/_tc319.jpg'
    },
    {
        nameEN: 'Flat Bench',
        namePL: 'Ławka pozioma',
        id: '_tc101',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 133,
            width: 62,
            height: 45,
            weight: 20
        },
        descriptionEN: "The TC101 flat bench is a versatile piece of equipment suitable for any gym or home workout setup. It helps improve physical fitness, burn fat, strengthen the abdominal muscles, and tone the body. The model supports high weight loads, and despite weighing only 25 kg, it is made from a durable steel alloy, ensuring longevity with proper care. The TC101 strength bench is ideal for dumbbell, barbell, and kettlebell exercises, as well as push-ups. It engages the glutes, calf muscles, chest, biceps, triceps, and other muscle groups. This bench is an essential accessory for many fitness centers, gyms, and sports clubs.",
        descriptionPL: "Ławka pozioma TC101 znajduje zastosowanie w każdej siłowni, a także w warunkach domowych. Pomaga poprawić kondycję fizyczną, redukować tkankę tłuszczową, wzmacniać mięśnie brzucha i modelować sylwetkę. Model wytrzymuje maksymalne obciążenie, a przy wadze 25 kg jest wykonany z wytrzymałego stopu stali, co zapewnia wieloletnią trwałość przy odpowiedniej konserwacji. Ławka TC101 doskonale sprawdza się w ćwiczeniach z hantlami, sztangą, kettlebellami, a także do wykonywania pompek. Podczas treningu angażowane są pośladki, mięśnie łydek, klatki piersiowej, biceps, triceps oraz inne partie mięśniowe. Jest to niezastąpiony element wyposażenia wielu klubów fitness, siłowni i ośrodków sportowych.",
        picturePath: '/images/_tc101.jpg'
    },
    {
        nameEN: 'Reverse Hyperextension Machine',
        namePL: 'Maszyna do odwrotnej hiperextensji',
        id: '_tc320',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 154,
            width: 100,
            height: 122,
            weight: 71
        },
        descriptionEN: "The TC320 reverse hyperextension machine is an excellent tool for strengthening the lower back, hamstrings, and glute muscles. It is the perfect machine for targeting the posterior chain muscles. Additionally, it is highly effective for improving overall strength.",
        descriptionPL: "Maszyna do odwrotnej hiperextensji TC320 to doskonałe urządzenie do wzmacniania mięśni dolnej części pleców, ścięgien podkolanowych oraz pośladków. Jest idealnym sprzętem do treningu tylnej części nóg. Dodatkowo świetnie sprawdza się w zwiększaniu ogólnej siły mięśniowej.",
        picturePath: '/images/_tc320.jpg'
    },
    {
        nameEN: 'Incline Bench Press Bench',
        namePL: 'Ławka do wyciskania pod kątem w górę',
        id: '_tc104',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 153,
            width: 124,
            height: 143,
            weight: 31
        },
        descriptionEN: "The TC104 incline bench press bench is designed for chest muscle training. When performing a bench press, the primary load is placed on the upper chest muscles, while the secondary muscles engaged include the front deltoids.",
        descriptionPL: "Ławka do wyciskania pod kątem w górę TC104 jest przeznaczona do treningu mięśni klatki piersiowej. Podczas wyciskania sztangi główne obciążenie skupia się na górnej części mięśni klatki piersiowej, a dodatkowo angażowane są przednie mięśnie naramienne.",
        picturePath: '/images/_tc104.jpg'
    },
    {
        nameEN: 'Reverse Hyperextension Machine – Foldable',
        namePL: 'Maszyna do odwrotnej hiperextensji – rozkładana',
        id: '_tc320.1',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 141,
            width: 125,
            height: 114,
            weight: 68
        },
        descriptionEN: "The TC320.1 reverse hyperextension machine is an excellent tool for strengthening the lower back, hamstrings, and glute muscles. It is the perfect machine for targeting the posterior chain muscles. Additionally, it is highly effective for improving overall strength.",
        descriptionPL: "Maszyna do odwrotnej hiperextensji TC320.1 to doskonałe urządzenie do wzmacniania mięśni dolnej części pleców, ścięgien podkolanowych oraz pośladków. Jest idealnym sprzętem do treningu tylnej części nóg. Dodatkowo świetnie sprawdza się w zwiększaniu ogólnej siły mięśniowej.",
        picturePath: '/images/_tc320.1.jpg'
    },
    {
        nameEN: 'Seated Leg Extension Machine',
        namePL: 'Maszyna do prostowania nóg w pozycji siedzącej',
        id: '_tc309',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 151,
            width: 117,
            height: 108,
            weight: 92
        },
        descriptionEN: "The TC309 seated leg extension machine is designed for training the front thigh muscles, specifically the quadriceps. Exercises are performed in a seated position by extending the legs. The TC309 machine is also used for rehabilitation purposes and in sports medicine to prevent musculoskeletal disorders. Additionally, it is highly effective for fat reduction in the front thigh area.",
        descriptionPL: "Maszyna do prostowania nóg w pozycji siedzącej TC309 jest przeznaczona do treningu przedniej części uda, czyli mięśnia czworogłowego. Ćwiczenia wykonywane są w pozycji siedzącej poprzez prostowanie nóg. Maszyna TC309 jest również wykorzystywana w celach rehabilitacyjnych oraz w medycynie sportowej do profilaktyki schorzeń układu ruchu. Dodatkowo jest bardzo skuteczna w redukcji tkanki tłuszczowej w przedniej części ud.",
        picturePath: '/images/_tc309.jpg'
    },
    {
        nameEN: 'Leg Curl & Extension Machine – Combined',
        namePL: 'Maszyna do uginania i prostowania nóg – kombinowana',
        id: '_tc321',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 157,
            width: 117,
            height: 112,
            weight: 103
        },
        descriptionEN: "The TC321 combined leg curl and extension machine is designed for training both the posterior and anterior thigh muscles – the hamstrings and quadriceps. This machine is widely used for rehabilitation purposes and in sports medicine to prevent musculoskeletal disorders. Additionally, it is highly effective for fat reduction in both the front and back of the thighs. It features an adjustable support roller to accommodate different leg lengths, as well as a power lever angle adjustment, allowing users to optimize the machine for proper and comfortable workouts.",
        descriptionPL: "Maszyna do uginania i prostowania nóg TC321 jest przeznaczona do treningu zarówno tylnej, jak i przedniej części uda – mięśnia dwugłowego oraz czworogłowego. Sprzęt ten jest szeroko wykorzystywany w celach rehabilitacyjnych, a także w medycynie sportowej do profilaktyki schorzeń układu ruchu. Dodatkowo jest bardzo skuteczny w redukcji tkanki tłuszczowej zarówno w przedniej, jak i tylnej części ud. Maszyna posiada regulację podparcia wałka w zależności od długości nóg użytkownika oraz regulację kąta obrotu dźwigni siłowej, co umożliwia optymalne dostosowanie sprzętu do komfortowego i efektywnego treningu.",
        picturePath: '/images/_tc321.jpg'
    },
    {
        nameEN: 'T-Bar Row with Chest Support',
        namePL: 'T-Wiosłowanie z podparciem na klatkę piersiową',
        id: '_tc308',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 183,
            width: 97,
            height: 116,
            weight: 63
        },
        descriptionEN: "The TC308 T-Bar row with chest support is designed for developing an athletic back shape. It targets and defines the latissimus dorsi, particularly in the lower and middle sections, as well as the trapezius and rear deltoid muscles. Additionally, it engages the biceps and triceps. The machine features wide footrests and ergonomic grip handles. The chest support is made from multi-layer plywood with dense foam padding and covered with wear-resistant vinyl. The specialized bar allows for weight plates up to 250 kg. Its sturdy frame is constructed from 80 x 60 mm profiled steel tubing, coated with a scratch- and corrosion-resistant powder finish. Rubber foot pads absorb vibrations and keep the machine securely in place during workouts.",
        descriptionPL: "T-Wiosłowanie z podparciem na klatkę piersiową TC308 jest przeznaczone do rozwijania atletycznej sylwetki pleców. Trenuje i nadaje rzeźbę najszerszemu mięśniowi grzbietu, zwłaszcza w jego dolnej i środkowej części, a także mięśniom czworobocznym oraz tylnemu aktonowi mięśni naramiennych. Dodatkowo angażuje biceps i triceps. Maszyna posiada szerokie podpory na stopy oraz wygodne uchwyty. Podparcie klatki piersiowej wykonane jest z wielowarstwowej sklejki z gęstą pianką i pokryte odpornym na zużycie winylem. Na specjalny gryf można założyć obciążenie do 250 kg. Solidna konstrukcja wykonana jest ze stalowej rury profilowanej 80 x 60 mm. Rama pokryta jest odporną na odpryski i korozję powłoką proszkową. Gumowe stopki amortyzują wibracje i stabilizują urządzenie podczas użytkowania.",
        picturePath: '/images/_tc308.jpg'
    },
    {
        nameEN: 'Smith Machine',
        namePL: 'Maszyna Smitha',
        id: '_tc301',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 220,
            width: 122,
            height: 206,
            weight: 154
        },
        descriptionEN: "The TC301 Smith Machine is an essential piece of equipment for athletes across various sports disciplines. It is highly effective for training the quadriceps and shaping strong, well-defined legs. Designed for commercial use, it stands out for its versatility and functionality.\n\nMachine Features:\n\n• With an adjustable bench, it allows for comfortable execution of different bench press variations for chest and upper body muscles.\n\n• The design ensures maximum activation of the quadriceps, particularly in the lower section just above the knees.\n\n• A carriage system with 8 bearings provides smooth movement and prevents tilting.\n\n• The barbell is equipped with safety hooks for secure training.\n\n•Built-in weight plate storage pins enhance workout convenience.\n\n• A height-adjustable support roller stabilizes the legs during exercises.\n\n• Shock-absorbing foot pads prevent slipping and eliminate the need for floor mounting.\n\n• Reinforced stainless steel construction, made from 60x80 mm profile tubing and 60 mm round tubing with a 3 mm wall thickness.\n\n• All components are high-quality and wear-resistant.\n\n• Designed for intensive use exceeding 12 hours per day.\n\nTargeted Muscles:\n\n• deltoid muscles,\n\n• triceps,\n\n• quadriceps,\n\n• trapezius muscles,\n\n• gluteal muscles.",
        descriptionPL: "Maszyna Smitha TC301 to niezbędne urządzenie do przygotowania fizycznego sportowców różnych dyscyplin. Jest wyjątkowo skuteczna w treningu mięśnia czworogłowego uda oraz kształtowaniu silnych i estetycznych nóg. Model przeznaczony do użytku komercyjnego, charakteryzuje się dużą wszechstronnością i funkcjonalnością.\n\nCharakterystyka maszyny:\n\n• Po ustawieniu regulowanej ławki umożliwia komfortowe wykonywanie różnych wariantów wyciskania na mięśnie klatki piersiowej i górnej części ciała.\n\n• Konstrukcja pozwala na maksymalne zaangażowanie mięśni czworogłowych, zwłaszcza w dolnej części, tuż nad kolanami.\n\n• System prowadnic wyposażony w 8 łożysk zapewnia płynne ruchy i eliminuje ryzyko przechyłu.\n\n• Sztanga posiada zabezpieczające haki, które gwarantują bezpieczeństwo podczas ćwiczeń.\n\n• Wbudowane uchwyty na obciążenia zwiększają wygodę użytkowania.\n\n• Regulowany wałek pozwala na stabilizację nóg podczas ćwiczeń.\n\n• Antypoślizgowe amortyzujące stopki eliminują konieczność mocowania do podłoża.\n\n• Wzmocniona konstrukcja ze stali nierdzewnej, wykonana z profili 60x80 mm i rur o średnicy 60 mm, grubości 3 mm.\n\n• Wszystkie elementy są wysokiej jakości i odporne na zużycie.\n\n• Możliwość intensywnej eksploatacji przez ponad 12 godzin dziennie.\n\nAngażowane mięśnie:\n\n• mięśnie naramienne,\n\n•triceps,\n\n• mięsień czworogłowy uda,\n\n• mięśnie czworoboczne,\n\n• mięśnie pośladkowe.",
        picturePath: '/images/_tc301.jpg'
    },
    {
        nameEN: 'Leg Press Machine (45-Degree Angle)',
        namePL: 'Maszyna do wyciskania nóg (kąt 45 stopni)',
        id: '_tc302',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 232,
            width: 80,
            height: 139,
            weight: 135
        },
        descriptionEN: "The TC302 45-degree leg press machine stands out with its modern design and high-quality commercial construction. The high-load capacity carriage is positioned at a 45-degree angle and features premium linear bearings, ensuring optimal performance and durability.",
        descriptionPL: "Maszyna do wyciskania nóg pod kątem 45 stopni TC302 wyróżnia się nowoczesnym designem i wysokiej jakości konstrukcją komercyjną. Wózek o zwiększonej nośności jest ustawiony pod kątem 45 stopni i wyposażony w liniowe łożyska klasy premium, które zapewniają optymalną wydajność oraz długą żywotność urządzenia.",
        picturePath: '/images/_tc302.jpg'
    },
    {
        nameEN: 'Hack Squat Machine',
        namePL: 'Maszyna Hack-Squat',
        id: '_tc303',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 206,
            width: 106,
            height: 148,
            weight: 160
        },
        descriptionEN: "The TC303 Hack Squat Machine is designed for leg muscle training by performing squats in the machine. It is essential for the physical conditioning of athletes across various sports and is particularly effective for developing the quadriceps, especially its outer section. It helps build strong, well-defined legs. The carriage system operates on six bearings, preventing tilting and ensuring smooth movement. The machine ensures safety through a platform support and a mechanical platform stopper.\n\nPurpose: Development of the quadriceps muscle.",
        descriptionPL: "Maszyna Hack-Squat TC303 jest przeznaczona do treningu mięśni nóg poprzez wykonywanie przysiadów w maszynie. Jest niezastąpiona w przygotowaniu fizycznym sportowców różnych dyscyplin i wyjątkowo skuteczna w rozwoju mięśnia czworogłowego uda, szczególnie jego zewnętrznej części. Pomaga w budowaniu silnych i estetycznie ukształtowanych nóg. System prowadnic wózka oparty jest na 6 łożyskach, co zapobiega przechyłom i zapewnia płynne działanie maszyny. Bezpieczeństwo ćwiczącego jest gwarantowane dzięki platformowemu podparciu oraz mechanicznemu blokowaniu platformy.\n\nPrzeznaczenie: rozwój mięśnia czworogłowego uda.",
        picturePath: '/images/_tc303.jpg'
    },
    {
        nameEN: 'Seated Calf Raise Machine',
        namePL: 'Maszyna do treningu łydek w pozycji siedzącej',
        id: '_tc304',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 122,
            width: 77,
            height: 93,
            weight: 55
        },
        descriptionEN: "The TC304 seated calf raise machine delivers greater strength, power, and performance than any other machine in its class. It features excellent proportions, specially designed foot platforms, and smooth, friction-free movement.",
        descriptionPL: "Maszyna do treningu łydek w pozycji siedzącej TC304 zapewnia większą siłę, moc i efektywność niż jakiekolwiek inne urządzenie w swojej klasie. Charakteryzuje się doskonałymi proporcjami, specjalnie zaprojektowanymi platformami na stopy oraz płynnym ruchem bez tarcia.",
        picturePath: '/images/_tc304.jpg'
    },
    {
        nameEN: 'Horizontal Press Machine',
        namePL: 'Maszyna do wyciskania poziomego',
        id: '_tc305',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 190,
            width: 142,
            height: 165,
            weight: 135
        },
        descriptionEN: "The TC305 horizontal press machine is an excellent option for beginner athletes, as unlike traditional strength machines, the movement is initially driven by tendons and ligaments rather than muscles, reducing the risk of injury. This machine is suitable for both men and women, effectively developing the deltoid muscles.",
        descriptionPL: "Maszyna do wyciskania poziomego TC305 to doskonały wybór dla początkujących sportowców, ponieważ w przeciwieństwie do standardowych maszyn siłowych, ruch inicjują ścięgna i więzadła, a nie same mięśnie, co zmniejsza ryzyko kontuzji. Maszyna do wyciskania poziomego jest przeznaczona zarówno dla kobiet, jak i mężczyzn, pomagając w rozwoju mięśni naramiennych.",
        picturePath: '/images/_tc305.jpg'
    },
    {
        nameEN: 'Lever Row Machine with Power Arm',
        namePL: 'Wiosłowanie dźwigniowe z dodatkowym uchwytem',
        id: '_tc306',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 153,
            width: 81,
            height: 108,
            weight: 87
        },
        descriptionEN: "The TC306 lever row machine is designed for effective training of the latissimus dorsi muscles. The levers move with a slight outward spread, allowing for optimal stretching and contraction of the back muscles. For added comfort, the front pad and seat are height-adjustable to accommodate the user’s body proportions. Smooth lever movement is ensured by high-quality bearings. The machine supports weight plates up to 250 kg on its specialized grips. The sturdy frame is constructed from 80 x 60 mm profiled steel tubing. The seat and pad are made of thick plywood, filled with dense foam, and covered with durable vinyl leather. The frame is coated with scratch- and corrosion-resistant powder paint. Rubber foot pads absorb vibrations during workouts.",
        descriptionPL: "Maszyna do wiosłowania dźwigniowego TC306 jest przeznaczona do intensywnego treningu najszerszych mięśni grzbietu. Dzięki specjalnej konstrukcji dźwigni, które poruszają się z lekkim rozstawem, ćwiczenia umożliwiają efektywne rozciąganie i kurczenie mięśni pleców. Dla większego komfortu przednia poduszka i siedzisko są regulowane na wysokość, umożliwiając dostosowanie maszyny do budowy ciała użytkownika. Płynność ruchu dźwigni zapewniają wysokiej jakości łożyska. Na specjalne uchwyty można założyć obciążenie do 250 kg. Solidna rama wykonana jest ze stalowej rury profilowanej 80 x 60 mm. Siedzisko i poduszka wykonane są z grubej sklejki, wypełnione gęstą pianką i pokryte wytrzymałą skórą winylową. Rama jest pokryta odporną na zarysowania i korozję farbą proszkową. Gumowe stopki amortyzujące eliminują wibracje podczas użytkowania.",
        picturePath: '/images/_tc306.jpg'
    },
    {
        nameEN: 'Incline Press Machine',
        namePL: 'Maszyna do wyciskania pod kątem w górę',
        id: '_tc307',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 191,
            width: 155,
            height: 136,
            weight: 141
        },
        descriptionEN: "The TC307 incline press machine is designed for chest muscle training. It is an essential tool for athletes across various sports disciplines and is highly effective in developing a strong and well-defined upper body. Due to the difficulty of incline pressing, this machine is ideal for individual training without a partner, ensuring maximum safety for beginners. The machine features an easy-start option. The adjustable seat height allows users to customize the machine for proper form and comfortable workouts.\n\n• Upholstery: high-quality artificial leather\n\n• Padding: dual-layer foam, resistant to compression and deformation\n\n• Coating: powder enamel finish",
        descriptionPL: "Maszyna do wyciskania pod kątem w górę TC307 została zaprojektowana do treningu mięśni klatki piersiowej. Jest niezbędnym elementem przygotowania fizycznego sportowców różnych dyscyplin i skutecznie pomaga w budowaniu silnej, estetycznej sylwetki. Ze względu na trudność wyciskania pod kątem, maszyna jest szczególnie polecana do indywidualnych treningów bez partnera, zapewniając pełne bezpieczeństwo dla początkujących. Maszyna wyposażona jest w system łatwego startu. Regulowana wysokość siedziska umożliwia optymalne dostosowanie sprzętu do użytkownika, zapewniając wygodę i prawidłową pozycję podczas ćwiczeń.\n\n• Obicie: wysokiej jakości ekoskóra\n\n• Wypełnienie: dwuwarstwowa pianka odporna na osiadanie i odkształcenia\n\n• Malowanie: powłoka proszkowa",
        picturePath: '/images/_tc307.jpg'
    },
    {
        nameEN: 'Chromed Dumbbells (0.5 – 10 kg) with Rack',
        namePL: 'Hantle chromowane (0,5 – 10 kg) ze stojakiem',
        id: '_tc135.1',
        categoryID: '_ps',
        subcategoryID: ['_lis', '_gn'],
        properties: {
            length: 67,
            width: 61,
            height: 117,
            weight: 139
        },
        descriptionEN: "The TC135.1 chromed dumbbells with rack is a versatile set that is essential in every gym. The weight range from 0.5 to 10 kg is suitable for both beginners and advanced athletes. The dumbbells feature a chrome coating that is resistant to mechanical damage. These dumbbells can be used for a variety of exercises. The compact rack organizes and securely holds all the dumbbells in increasing weight order. The rack is small, stable, and does not damage the floor.",
        descriptionPL: "Hantle chromowane ze stojakiem TC135.1 to uniwersalny zestaw, który jest niezbędny w każdej siłowni. Zakres wag od 0,5 do 10 kg pozwala na trening zarówno dla początkujących, jak i bardziej zaawansowanych sportowców. Hantle mają chromowaną powłokę odporną na uszkodzenia mechaniczne. Z hantlami można wykonywać szereg ćwiczeń. Kompaktowy stojak umożliwia uporządkowane i bezpieczne przechowywanie hantli w kolejności wagowej. Stojak jest mały, stabilny i nie uszkadza podłogi.",
        picturePath: '/images/_tc135.1.jpg'
    },
    {
        nameEN: 'Flat Bench Press Bench',
        namePL: 'Ławka do wyciskania poziomego',
        id: '_bl103',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 170,
            width: 169,
            height: 126,
            weight: 89
        },
        descriptionEN: "The BL103 flat bench press bench is an excellent piece of equipment designed for barbell exercises. It is equipped with shock-absorbing foot pads, eliminating the need for floor mounting. The machine features a reinforced steel construction for added durability and stability. The bench helps develop a strong, well-defined torso and enhances overall endurance. During workouts, the triceps, chest muscles, and front deltoid muscles are engaged.",
        descriptionPL: "Ławka do wyciskania poziomego BL103 to doskonały sprzęt przeznaczony do wykonywania ćwiczeń z sztangą. Wyposażona jest w amortyzujące stopki, które eliminują konieczność mocowania do podłoża. Konstrukcja sprzętu jest wzmocniona stalą, co zapewnia jego trwałość i stabilność. Ławka pomaga w budowaniu silnego i wyrzeźbionego torsu oraz zwiększa wytrzymałość organizmu. Podczas ćwiczeń angażowane są tricepsy, mięśnie klatki piersiowej oraz przednie mięśnie naramienne.",
        picturePath: '/images/_bl103.jpg'
    },
    {
        nameEN: 'Adjustable Mobile Bench',
        namePL: 'Regulowana ławka mobilna',
        id: '_bl102',
        categoryID: '_ps',
        subcategoryID: ['_lis', '_blwc'],
        properties: {
            length: 138,
            width: 83,
            height: 94,
            weight: 41
        },
        descriptionEN: "The BL102 adjustable mobile bench is perfect for intense gym workouts. The machine features a stable and durable construction with a wide range of functions, allowing for a variety of exercises. The backrest and seat offer multiple angle adjustments and can be fully reclined to a horizontal position.",
        descriptionPL: "Regulowana ławka mobilna BL102 jest idealna do intensywnych treningów na siłowni. Maszyna posiada stabilną i wytrzymałą konstrukcję oraz szeroką funkcjonalność, umożliwiającą wykonywanie wielu różnych ćwiczeń. Oparcie oraz siedzisko ławki mają wiele możliwości regulacji kąta nachylenia i mogą być całkowicie odchylone do pozycji poziomej.",
        picturePath: '/images/_bl102.jpg'
    },
    {
        nameEN: 'Flat Bench',
        namePL: 'Ławka pozioma',
        id: '_bl101',
        categoryID: '_ps',
        subcategoryID: ['_lis', '_blwc'],
        properties: {
            length: 135,
            width: 70,
            height: 45,
            weight: 40
        },
        descriptionEN: "The BL101 flat bench is perfect for intense gym workouts. The machine features a stable and durable construction with a wide range of functions, allowing for a variety of exercises.",
        descriptionPL: "Ławka pozioma BL101 jest idealna do intensywnych treningów na siłowni. Maszyna ma stabilną i wytrzymałą konstrukcję oraz szeroką funkcjonalność, dzięki której możliwe jest wykonywanie wielu różnych ćwiczeń.",
        picturePath: '/images/_bl101.jpg'
    },
    {
        nameEN: 'Multi-Functional Station',
        namePL: 'Maszyna wielofunkcyjna',
        id: '_bl326',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 213,
            width: 95,
            height: 172,
            weight: 256
        },
        descriptionEN: "The BL326 multi-functional station is a strength training machine that can be used by anyone, regardless of experience or ability. It allows for a wide range of exercises targeting every muscle group.\n\nIt is suitable for all types of workouts: functional, strength, coordination, or cardiovascular training. The three-level shock structure allows for exercise selection and height adjustment. The two working levers have a 360-degree range of motion. Maximum load capacity is over 100 kg per arm.\n\nMaximum working space for 1 person: 170 cm wide, 250 cm or 330 cm long, 250 cm for 2 people.",
        descriptionPL: "Maszyna wielofunkcyjna BL326 to urządzenie do treningu siłowego, które może być używane przez każdą osobę, niezależnie od jej doświadczenia czy umiejętności. Na stacji można wykonywać szeroki zakres ćwiczeń, angażujących każdą grupę mięśniową.\n\nJest odpowiednia do różnych stylów treningu: funkcjonalnego, siłowego, koordynacyjnego oraz aerobowego. Trójpoziomowa struktura uderzeniowa pozwala na wybór ćwiczeń oraz regulację wysokości. Dwa ramiona robocze mają zakres ruchu 360 stopni. Maksymalne obciążenie wynosi ponad 100 kg na każde ramię.\n\nMaksymalna przestrzeń robocza dla 1 osoby: 170 cm szerokości, 250 cm lub 330 cm długości, dla 2 osób – 250 cm.",
        picturePath: '/images/_bl326.jpg'
    },
    {
        nameEN: 'Hack Squat Machine',
        namePL: 'Maszyna Hack-Squat',
        id: '_bl303',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 227,
            width: 108,
            height: 150,
            weight: 200
        },
        descriptionEN: "The BL303 Hack Squat Machine is designed for leg muscle training. It is essential for the physical conditioning of athletes across various sports. It is particularly effective for building the quadriceps, especially in the outer area.\n\nThe carriage system is assembled with 6 bearings, eliminating tilting and ensuring smooth sliding. Safety is provided by the supporting platform and mechanical platform stopper.\n\nUpholstery: high-quality eco-leather\n\nPadding: dual-layer foam, resistant to deformation\n\nCoating: powder paint",
        descriptionPL: "Maszyna Hack-Squat BL303 jest przeznaczona do treningu mięśni nóg. Jest niezbędnym urządzeniem w przygotowaniu fizycznym sportowców różnych dyscyplin. Szczególnie skuteczna w rozwoju mięśnia czworogłowego uda, zwłaszcza w jego zewnętrznej części.\n\nMechanizm wózka oparty jest na 6 łożyskach, co eliminuje przechyły i zapewnia płynny ruch. Bezpieczeństwo jest gwarantowane dzięki platformie podporowej oraz mechanicznemu blokadzie platformy.\n\nObicie: wysokiej jakości ekoskóra\n\nWypełnienie: dwuwarstwowa pianka odporna na odkształcenia\n\nMalowanie: farba proszkowa",
        picturePath: '/images/_bl303.jpg'
    },
    {
        nameEN: 'Squat Machine',
        namePL: 'Maszyna do przysiadów',
        id: '_bl325',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 247,
            width: 133,
            height: 180,
            weight: 207
        },
        descriptionEN: "The BL325 squat machine is perfect for developing thigh and glute muscles. Squats can be performed facing the machine or with the back to the machine. The machine's adjustments make it user-friendly for individuals of any height. The adjustable angle helps to minimize knee strain during the exercises.",
        descriptionPL: "Maszyna do przysiadów BL325 doskonale nadaje się do rozwoju mięśni ud i pośladków. Przysiady można wykonywać zarówno twarzą, jak i plecami do maszyny. Regulacja maszyny sprawia, że jest ona wygodna w użyciu dla osób o różnych wysokościach. Regulowany kąt nachylenia pozwala maksymalnie zmniejszyć obciążenie na kolanach.",
        picturePath: '/images/_bl325.jpg'
    },
    {
        nameEN: 'Overhead Press Machine',
        namePL: 'Maszyna do wyciskania w górę',
        id: '_bl305',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 185,
            width: 112,
            height: 120,
            weight: 103
        },
        descriptionEN: "The BL305 overhead press machine is essential for the physical conditioning of athletes across various sports and is highly effective in building a strong and well-defined upper shoulder girdle. Its design ensures excellent training of the deltoid muscles. The machine features an assisted start mechanism that eliminates the risk of injury and allows safe training for users of all fitness levels. Adjustable backrest angle and seat height enable optimal customization for proper and comfortable use.",
        descriptionPL: "Maszyna do wyciskania w górę BL305 jest niezbędna w przygotowaniu fizycznym sportowców różnych dyscyplin i skutecznie pomaga w kształtowaniu silnej i estetycznej obręczy barkowej. Dzięki swojej konstrukcji zapewnia doskonały trening mięśni naramiennych. Maszyna wyposażona jest w system ułatwionego startu, który eliminuje ryzyko kontuzji i pozwala na bezpieczny trening osobom na każdym poziomie zaawansowania. Regulacja kąta nachylenia oparcia oraz wysokości siedziska umożliwia precyzyjne dopasowanie urządzenia, zapewniając wygodę i prawidłową postawę podczas ćwiczeń.",
        picturePath: '/images/_bl305.jpg'
    },
    {
        nameEN: 'Reverse Hyperextension',
        namePL: 'Odwrotna hiperextensja',
        id: '_bl127',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 120,
            width: 97,
            height: 113,
            weight: 46
        },
        descriptionEN: "The BL127 reverse hyperextension machine is designed for strengthening the back muscles. It is suitable for athletes from various sports disciplines. The equipment takes up little space, making it ideal for small training areas. Both professionals and fitness enthusiasts can train on this machine. It is suitable for both home and commercial use.Hyperextension exercises strengthen the spinal erector muscles and help restore spinal flexibility.\n\nThe machine features a reinforced steel frame and is made from high-quality, wear-resistant materials. The seat is constructed from multi-layer plywood, while the eco-leather upholstery is highly resistant to deformation and compression.",
        descriptionPL: "Odwrotna hiperextensja BL127 została zaprojektowana do ćwiczeń wzmacniających mięśnie pleców. Jest odpowiednia dla sportowców uprawiających różne dyscypliny sportowe. Sprzęt zajmuje niewiele miejsca, co czyni go idealnym rozwiązaniem do małych pomieszczeń. Na maszynie mogą trenować zarówno profesjonaliści, jak i amatorzy. Nadaje się zarówno do użytku domowego, jak i komercyjnego. Ćwiczenia na hiperextensji wzmacniają mięśnie prostowników grzbietu i poprawiają elastyczność kręgosłupa.\n\n    Maszyna ma wzmocnioną stalową konstrukcję. Wykonana jest z wysokiej jakości, odpornego na zużycie materiału, a siedzisko powstało z wielowarstwowej sklejki. Ekoskóra wyróżnia się wysoką odpornością na deformację i osiadanie.",
        picturePath: '/images/_bl127.jpg'
    },
    {
        nameEN: 'Lever Row Machine',
        namePL: 'Maszyna do wiosłowania dźwigniowego',
        id: '_bl306',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 128,
            width: 119,
            height: 138,
            weight: 116
        },
        descriptionEN: "The BL306 lever row machine is designed for training the deltoid muscles in a seated, upright position. Exercises on this machine mimic dumbbell presses or seated bench presses. It provides even resistance throughout the movement. The machine features an adjustable seat, allowing users of any height to train comfortably while also adjusting the range of motion. There are no weight restrictions, making it suitable for both amateur and professional athletes of all body types. To order this machine or an alternative, such as a weightlifting bench and barbell, or other gym equipment, leave a message for the manager.",
        descriptionPL: "Maszyna do wiosłowania dźwigniowego BL306 została zaprojektowana do treningu mięśni naramiennych w pozycji siedzącej. Ćwiczenia na tym urządzeniu imitują wyciskanie hantli na ławce lub w pozycji siedzącej. Sprzęt zapewnia równomierny opór podczas całego ruchu. Maszyna posiada regulowane siedzisko, co umożliwia dostosowanie jej do wzrostu użytkownika oraz regulację zakresu ruchu. Nie ma ograniczeń wagowych, dzięki czemu jest odpowiednia zarówno dla amatorów, jak i profesjonalnych sportowców o różnym wzroście i budowie ciała. Aby zamówić tę maszynę lub jej alternatywę, taką jak ławka i sztanga do podnoszenia ciężarów lub inny sprzęt sportowy, skontaktuj się z naszym menedżerem.",
        picturePath: '/images/_bl306.jpg'
    },
    {
        nameEN: 'Incline Press Machine',
        namePL: 'Maszyna do wyciskania pod kątem w górę',
        id: '_bl307',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 182,
            width: 120,
            height: 140,
            weight: 107
        },
        descriptionEN: 'The incline press machine is designed for chest muscle training and is essential for the physical preparation of athletes across various sports disciplines. Due to the difficulty of performing the "barbell incline bench press" exercise, this machine is ideal for solo training (without a partner), ensuring safety for beginners. The machine features an assisted start mechanism and an adjustable seat height, allowing users to customize the machine for proper form and comfortable workouts.',
        descriptionPL: "Maszyna do wyciskania pod kątem w górę została zaprojektowana do treningu mięśni klatki piersiowej. Jest niezbędnym sprzętem do przygotowania fizycznego sportowców różnych dyscyplin. Ze względu na trudność wykonywania ćwiczenia „wyciskanie sztangi na ławce skośnej”, maszyna jest doskonałym wyborem do samodzielnych treningów (bez partnera), zapewniając pełne bezpieczeństwo dla początkujących. Maszyna jest wyposażona w system ułatwionego startu oraz regulację wysokości siedziska, co umożliwia optymalne dostosowanie sprzętu do użytkownika, zapewniając wygodę i prawidłową postawę podczas treningu.",
        picturePath: '/images/_bl307.jpg'
    },
    {
        nameEN: 'T-Bar Row Machine with Chest Support',
        namePL: 'Maszyna T-Wiosłowanie z podparciem na klatkę piersiową',
        id: '_bl308',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 202,
            width: 93,
            height: 134,
            weight: 81
        },
        descriptionEN: "The T-Bar Row Machine with chest support features multiple grip positions on the T-shaped bar, allowing users to focus on the primary back muscles. Secondary muscles involved in the exercise include the biceps, while the glutes help with stabilization. The T-bar design ensures the user is in the optimal position for the exercise. Two different foot placements allow individuals of any height to perform the movement correctly.",
        descriptionPL: "Maszyna T-Wiosłowanie z podparciem na klatkę piersiową posiada uchwyty o różnych pozycjach, co pozwala użytkownikom skupić się na głównych mięśniach pleców. Dodatkowo angażowane są mięśnie drugorzędne, takie jak bicepsy, a pośladki pełnią funkcję stabilizacyjną. Dzięki konstrukcji z T-kształtną sztangą użytkownik znajduje się w idealnej pozycji do ćwiczeń. Maszyna oferuje dwa różne ustawienia stóp, co umożliwia osobom o dowolnym wzroście wykonywanie prawidłowych ruchów.",
        picturePath: '/images/_bl308.jpg'
    },
    {
        nameEN: 'Lat Pulldown Machine',
        namePL: 'Maszyna do ściągania drążka',
        id: '_bl311',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 156,
            width: 108,
            height: 199,
            weight: 98
        },
        descriptionEN: "The BL311 lat pulldown machine is essential for athletes engaged in various sports. It is highly effective for increasing back width and enhancing overall body aesthetics. Concealed bearings and a shock absorption system ensure smooth motion and noise reduction. The strength lever handles mimic the natural range of movement, providing additional comfort during exercises. Users can also perform unilateral movements, training each arm separately.",
        descriptionPL: "Maszyna do ściągania drążka BL311 jest niezastąpiona w przygotowaniu fizycznym sportowców uprawiających różne dyscypliny. Jest wyjątkowo skuteczna w rozwijaniu szerokości mięśni pleców i modelowaniu estetycznej sylwetki. Ukryte łożyska oraz system amortyzacji zapewniają płynny ruch i redukcję hałasu. Uchwyty siłowych dźwigni odwzorowują naturalny zakres ruchu, co zwiększa komfort ćwiczeń. Możliwe jest także jednostronne wykonywanie ruchów każdą ręką oddzielnie.",
        picturePath: '/images/_bl311.jpg'
    },
    {
        nameEN: 'T-Bar Row Machine with Foot Support',
        namePL: 'Maszyna T-Wiosłowanie z podparciem na nogi',
        id: '_bl314',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 212,
            width: 95,
            height: 49,
            weight: 67
        },
        descriptionEN: "The T-Bar Row Machine with foot support is essential for athletes across various sports disciplines. It is highly effective in increasing back width and shaping a strong, well-defined physique.\n\nThe machine's design allows for a wide range of arm movement, providing an intense workout for the latissimus dorsi and spinal erectors. Load on the rear deltoids and trapezius muscles is minimized.\n\nPrimary muscles targeted:\n\n• Latissimus dorsi – a large muscle covering most of the mid and lower back.\n\n• Rear deltoid muscle.\n\n• Trapezius, running from the neck down the spine and across the shoulder blades.\n\n• Rhomboid muscles, which help draw the shoulder blades together.\n\n• Teres major muscle, located near the deltoid muscle.",
        descriptionPL: "Maszyna T-Wiosłowanie z podparciem na nogi jest niezbędnym sprzętem dla sportowców uprawiających różne dyscypliny. Jest wyjątkowo skuteczna w poszerzaniu mięśni pleców i kształtowaniu atletycznej sylwetki.\n\nKonstrukcja maszyny zapewnia dużą swobodę ruchu rąk, co pozwala na intensywną pracę najszerszych mięśni grzbietu oraz prostowników kręgosłupa. Obciążenie tylnych aktonów mięśni naramiennych i mięśni czworobocznych jest zredukowane do minimum.\n\nGłówne angażowane mięśnie:\n\n• Najszerzej grzbietu – duży mięsień pokrywający środkową i dolną część pleców.\n\n• Tylna część mięśnia naramiennego.\n\n• Mięsień czworoboczny, rozciągający się od szyi w dół wzdłuż kręgosłupa oraz przez łopatki.\n\n• Mięśnie równoległoboczne, które pomagają w ściąganiu łopatek.\n\n• Mięsień obły większy, położony w pobliżu mięśnia naramiennego.",
        picturePath: '/images/_bl314.jpg'
    },
    {
        nameEN: 'Triceps Machine',
        namePL: 'Maszyna do ćwiczenia tricepsów',
        id: '_bl313',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 154,
            width: 113,
            height: 124,
            weight: 89
        },
        descriptionEN: "Regardless of whether gym-goers are men or women, most people want toned and strong arms. However, not everyone enjoys using free weights like dumbbells, kettlebells, or barbells for arm training. That’s why modern machines, such as the BL313 triceps machine, serve as a perfect alternative.",
        descriptionPL: "Niezależnie od tego, czy użytkownicy siłowni to mężczyźni, czy kobiety, większość osób dąży do wyrzeźbienia i wzmocnienia ramion. Nie wszyscy jednak lubią korzystać z wolnych ciężarów, takich jak hantle, kettlebelle czy sztangi do treningu ramion. Właśnie dlatego powstały nowoczesne maszyny, takie jak triceps maszyna BL313, które stanowią doskonałą alternatywę.",
        picturePath: '/images/_bl313.jpg'
    },
    {
        nameEN: 'Dual Downward Press Machine',
        namePL: 'Maszyna do wyciskania w dół – podwójna',
        id: '_bl323',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 148,
            width: 129,
            height: 104,
            weight: 105
        },
        descriptionEN: "The dual downward press machine is designed for triceps development, as well as partial engagement of the chest and forearm muscles. It mimics parallel bar dips but allows users to select any load—either heavier or lighter than body weight—enhancing both effectiveness and comfort. The exercise can be performed in a seated position, either facing the machine or facing away from it, which is why it is called a dual press machine.",
        descriptionPL: "Maszyna do wyciskania w dół – podwójna jest przeznaczona do rozwoju tricepsów oraz częściowo mięśni klatki piersiowej i przedramion. Imituje ćwiczenie pompek na poręczach, ale umożliwia wybór dowolnego obciążenia – zarówno większego, jak i mniejszego niż masa ciała, co zwiększa efektywność i komfort treningu. Ćwiczenie można wykonywać w pozycji siedzącej, zarówno twarzą do maszyny, jak i twarzą od maszyny, co sprawia, że maszyna jest wszechstronna i funkcjonalna.",
        picturePath: '/images/_bl323.jpg'
    },
    {
        nameEN: 'Smith Machine',
        namePL: 'Maszyna Smitha',
        id: '_bl301',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 220,
            width: 113,
            height: 226,
            weight: 179
        },
        descriptionEN: "The BL301 Smith Machine allows for safe use of heavy weights. With multi-level safety stoppers, an adjustable bar holder, and 4 storage racks for weight plates, you can start your fitness journey today.\n\n• Perfect for heavy-weight training\n\n• 4 racks for weight plate storage\n\n• Space-saving design with additional weight storage\n\n• Maximum barbell load: 270 kg",
        descriptionPL: "Maszyna Smitha BL301 umożliwia bezpieczne korzystanie z dużego obciążenia. Dzięki wielopoziomowym blokadom bezpieczeństwa, regulowanemu uchwytowi na sztangę oraz 4 stojakom do przechowywania obciążeń, możesz rozpocząć swoją przygodę z treningiem siłowym już dziś.\n\n• Idealna do treningów z dużym obciążeniem\n\n• 4 stojaki na obciążenia\n\n• Oszczędność miejsca dzięki dodatkowej przestrzeni na przechowywanie ciężarów\n\n• Maksymalne obciążenie sztangi: 270 kg",
        picturePath: '/images/_bl301.jpg'
    },
    {
        nameEN: 'Biceps Machine',
        namePL: 'Maszyna do ćwiczenia bicepsów',
        id: '_bl317',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 154,
            width: 115,
            height: 104,
            weight: 103
        },
        descriptionEN: "The BL317 biceps machine is perfect for developing the biceps muscles. It features a 3-position adjustable seat, a variable resistance cam for maintaining strong and smooth arc movements, and a contoured arm pad for comfort and proper body positioning during workouts.",
        descriptionPL: "Maszyna do ćwiczenia bicepsów BL317 jest idealna do rozwoju mięśni bicepsów. Wyposażona w regulowane siedzisko z 3 ustawieniami, mechanizm zmiennego oporu, który zapewnia płynne i mocne ruchy po łuku, oraz profilowaną poduszkę na ramiona, gwarantującą komfort i prawidłową pozycję ciała podczas ćwiczeń.",
        picturePath: '/images/_bl317.jpg'
    },
    {
        nameEN: 'Leg Press Machine',
        namePL: 'Maszyna do wyciskania nogami',
        id: '_bl302',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 247,
            width: 117,
            height: 150,
            weight: 214
        },
        descriptionEN: "The BL302 leg press machine is designed for strengthening leg muscles and can also be used for rehabilitation and prevention of mobility disorders.\n\nAn adjustable seat and backrest allow for optimal user adaptation. The equipment features a mechanical brake for added safety.\n\nUpholstery: high-quality artificial leather\n\nPadding: dual-layer foam, resistant to compression and deformation\n\nCoating: powder-coated finish",
        descriptionPL: "Maszyna do wyciskania nogami BL302 jest przeznaczona do wzmacniania mięśni nóg, a także może być stosowana w celach rehabilitacyjnych i profilaktycznych w leczeniu schorzeń układu ruchu.\n\nRegulowane siedzisko i oparcie pozwalają na optymalne dostosowanie urządzenia do użytkownika. Maszyna wyposażona jest w mechaniczny hamulec.\n\nObicie: wysokiej jakości sztuczna skóra\n\nWypełnienie: dwuwarstwowa pianka odporna na osiadanie i odkształcenia\n\nMalowanie: farba proszkowa",
        picturePath: '/images/_bl302.jpg'
    },
    {
        nameEN: 'Universal Machine – Lower Grip',
        namePL: 'Maszyna uniwersalna – dolny chwyt',
        id: '_bl324',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 170,
            width: 120,
            height: 83,
            weight: 96
        },
        descriptionEN: "The BL324 universal lower grip machine features comfortable levers with handles that support multiple grip variations. The independent levers allow for alternating arm movements or training with just one arm. Additionally, a mechanism enables the levers to be linked for synchronized arm movement.\n\nThe absence of a seat allows athletes to perform a variety of fundamental exercises with precise technique and minimal risk of injury.",
        descriptionPL: "Maszyna uniwersalna dolny chwyt BL324 posiada wygodne dźwignie z uchwytami umożliwiającymi różne rodzaje chwytu. Niezależne dźwignie pozwalają na naprzemienną pracę rąk lub ćwiczenie jedną ręką. Dodatkowo istnieje możliwość połączenia dźwigni w jedną, co umożliwia synchroniczną pracę obu rąk.\n\nBrak siedziska w konstrukcji maszyny pozwala sportowcom wykonywać różne warianty podstawowych ćwiczeń z precyzyjną techniką i bez ryzyka kontuzji.",
        picturePath: '/images/_bl324.jpg'
    },
    {
        nameEN: 'Squat Rack',
        namePL: 'Stojak do przysiadów',
        id: '_bl116',
        categoryID: ['_sd', '_ps'],
        subcategoryID: ['_lisd', '_lis'],
        properties: {
            length: 169,
            width: 113,
            height: 200,
            weight: 70
        },
        descriptionEN: "The BL116 squat rack provides easy access for users with multiple barbell hooks, ensuring proper and safe grip positioning. The 10-degree vertical angle allows for unrestricted movement during lifts.\n\nLike any other equipment in our range, the BL116 squat rack enhances the value of a gym by combining essential features, durability, and a well-thought-out design.\n\n• Robust frame – a durable, welded structure allows for heavy-duty use and ensures longevity.\n\n• 10° frame angle – provides an open-access design for easy entry and exit.\n\n• Multiple barbell hooks – allow for easy weightlifting adjustments and enable deadlifts and other exercises outside the rack.\n\n• Integrated weight storage – four conveniently placed pegs hold Olympic and bumper plates without overlap for quick and easy access.",
        descriptionPL: "Stojak do przysiadów BL116 zapewnia łatwy dostęp dla użytkownika dzięki kilku zaczepom na sztangę, które umożliwiają prawidłowy i bezpieczny chwyt. Kąt nachylenia 10 stopni zapewnia swobodę ruchu przy wykonywaniu podnoszeń.\n\nPodobnie jak inne urządzenia w naszej linii, stojak do przysiadów BL116 zwiększa wartość każdej siłowni, łącząc kluczowe funkcje, niezawodność i przemyślany design.\n\n• Solidna rama – wytrzymała, spawana konstrukcja zapewnia trwałość nawet w trudnych warunkach.\n\n• Kąt nachylenia 10° – umożliwia łatwy dostęp i swobodę ruchu podczas ćwiczeń.\n\n• Kilka uchwytów na sztangę – pozwala na wygodne dopasowanie pozycji chwytu oraz umożliwia wykonywanie martwego ciągu i innych ćwiczeń poza stojakiem.\n\n• Zintegrowane miejsce na obciążenia – 4 uchwyty na talerze o standardzie olimpijskim i bumberowym zapewniają szybki i wygodny dostęp do obciążeń.",
        picturePath: '/images/_bl116.jpg'
    },
    {
        nameEN: 'Power Rack',
        namePL: 'Klatka do treningu siłowego',
        id: '_bl117',
        categoryID: ['_sd', '_ps'],
        subcategoryID: ['_lisd', '_lis'],
        properties: {
            length: 172,
            width: 151,
            height: 246,
            weight: 160
        },
        descriptionEN: "The BL117 power rack is designed for fitness studios, commercial gyms, and powerlifting training centers. Reinforced safety bars provide maximum security during solo bench presses or squats.",
        descriptionPL: "Klatka do treningu siłowego BL117 jest przeznaczona do studiów fitness, komercyjnych siłowni oraz sal do treningu w trójboju siłowym. Wzmocnione podparcia zapewniają pełne bezpieczeństwo podczas wyciskania lub przysiadów wykonywanych samodzielnie.",
        picturePath: '/images/_bl117.jpg'
    },
    {
        nameEN: 'Preacher Curl Bench',
        namePL: 'Ławka Scotta',
        id: '_bl110.1',
        categoryID: ['_sd', '_ps'],
        subcategoryID: ['_lisd', '_lis'],
        properties: {
            length: 120,
            width: 97,
            height: 94,
            weight: 52
        },
        descriptionEN: "The BL110.1 preacher curl bench is designed for training the biceps muscles using straight and EZ curl bars. It is made from durable steel tubing and has a solid, fixed structure. Adjustable seat height – for a customized and comfortable workout experience. High-quality eco-leather upholstery, which does not stretch or lose its shape, unlike natural leather.",
        descriptionPL: "Ławka Scotta BL110.1 jest przeznaczona do treningu dwugłowych mięśni ramion (bicepsów) przy użyciu prostych i łamanych gryfów. Konstrukcja ławki została wykonana z profili stalowych i jest solidna oraz stabilna. Regulowane siedzisko – możliwość dopasowania wysokości dla wygody użytkownika. Obicie z wysokiej jakości ekoskóry, która w przeciwieństwie do naturalnej skóry nie rozciąga się i nie traci kształtu.",
        picturePath: '/images/_bl110.1.jpg'
    },
    {
        nameEN: 'Multi-Functional Training Station',
        namePL: 'Wielofunkcyjna stacja treningowa',
        id: '_bl118',
        categoryID: ['_sd', '_ps'],
        subcategoryID: ['_lisd', '_lis'],
        properties: {
            length: 118,
            width: 110,
            height: 236,
            weight: 111
        },
        descriptionEN: "The BL118 multi-functional training station offers the perfect balance of practicality and compactness. It engages the shoulder girdle, back, abs, biceps, and triceps during workouts. Its versatility allows users to perform the following exercises: pull-ups – narrow and wide grip, dips on parallel bars, core and ab workouts. Comfortable backrest and armrests ensure maximum comfort and safety during workouts. Suitable for individuals of all ages and fitness levels.",
        descriptionPL: "Wielofunkcyjna stacja treningowa BL118 to idealne połączenie praktyczności i kompaktowego rozmiaru. Podczas ćwiczeń na tym urządzeniu pracują mięśnie obręczy barkowej, pleców, brzucha, bicepsów i tricepsów. Jego wszechstronność pozwala na wykonywanie następujących ćwiczeń: podciąganie na drążku – wąskim i szerokim chwytem, dip na poręczach, ćwiczenia na mięśnie brzucha. Wygodne oparcie i podłokietniki zapewniają maksymalny komfort i bezpieczeństwo podczas treningu. Dostosowany dla osób w różnym wieku i na każdym poziomie zaawansowania.",
        picturePath: '/images/_bl118.jpg'
    },
    {
        nameEN: 'Incline Bench Press Bench',
        namePL: 'Ławka do wyciskania pod kątem w górę',
        id: '_bl104',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 187,
            width: 169,
            height: 168,
            weight: 122
        },
        descriptionEN: "The BL104 +45-degree incline bench press bench with stands is designed for barbell exercises. During workouts, the user can independently engage the triceps, anterior muscles, and deltoids. The durable construction and high-quality materials ensure safe and effective training.\n\nSpotter platform – allows for secure and comfortable spotting without interfering with the exercise.\n\nMultiple safety levels – three different barbell rack positions, adjustable to the user’s arm length.\n\nReinforced frame – built for heavy loads and intensive workouts.",
        descriptionPL: "Ławka do wyciskania pod kątem +45 stopni BL104 ze stojakami jest przeznaczona do ćwiczeń ze sztangą. Podczas treningu użytkownik może samodzielnie angażować tricepsy, przednie mięśnie oraz mięśnie naramienne. Solidna konstrukcja oraz wysokiej jakości materiały zapewniają komfort i bezpieczeństwo podczas ćwiczeń.\n\nPlatforma dla asekuranta – umożliwia bezpieczne i wygodne stanie podczas asekuracji, nie przeszkadzając w wykonywaniu ćwiczeń.\n\nKilka poziomów zabezpieczeń – trzy różne wysokości stojaków na sztangę, dostosowane do długości ramion użytkownika.\n\nWytrzymała rama – zaprojektowana do intensywnych treningów i dużych obciążeń",
        picturePath: '/images/_bl104.jpg'
    },
    {
        nameEN: 'Dumbbell Rack (for 8 pairs)',
        namePL: 'Stojak na hantle (na 8 par)',
        id: '_bl120',
        categoryID: '_ps',
        subcategoryID: ['_lis', '_gn'],
        properties: {
            length: 205,
            width: 67,
            height: 77,
            weight: 65
        },
        descriptionEN: "You will find dumbbells everywhere people train. It’s best when they are neatly stored on a sturdy and convenient rack, rather than scattered around. The BL120 dumbbell rack (for 8 pairs) is a strong and durable storage solution with two levels, allowing you to organize dumbbells by weight securely and efficiently.\n\nAdvantages of the dumbbell rack:\n\n• Safe and convenient dumbbell storage\n\n• Two-tier rack for better organization\n\n• Professional and solid construction\n\n• Luxury gray metal finish (color can be customized)",
        descriptionPL: "Hantle można znaleźć wszędzie tam, gdzie ludzie trenują. Dobrze, gdy są przechowywane na wygodnym i solidnym stojaku, a nie leżą rozrzucone na podłodze. Stojak na hantle BL120 (dla 8 par) to stabilna i trwała konstrukcja, wyposażona w dwa poziomy, które umożliwiają uporządkowane przechowywanie hantli, np. według ich wagi.\n\nZalety stojaka na hantle:\n\n• Bezpieczne i wygodne przechowywanie\n\n• Dwa poziomy na hantle\n\n• Profesjonalna i solidna konstrukcja\n\n• Nowoczesny wygląd w kolorze szarym (możliwość zmiany koloru)",
        picturePath: '/images/_bl120.jpg'
    },
    {
        nameEN: 'Seated Bench Press Bench',
        namePL: 'Ławka do wyciskania siedząc',
        id: '_bl105',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 169,
            width: 111,
            height: 177,
            weight: 96
        },
        descriptionEN: "The BL105 seated bench press bench with a rack is suitable for use in both gyms and home settings. This equipment is designed for barbell exercises as well as abdominal training. It features non-slip foot pads that do not require floor mounting.\n\nThe structure is reinforced with steel for durability and stability. The bench is made from high-quality, wear-resistant materials. The upholstery is crafted from eco-leather, and the padding consists of dual-layer polyurethane, resistant to compression and deformation. The entire structure is coated with powder paint.",
        descriptionPL: "Ławka do wyciskania siedząc BL105 ze stojakiem nadaje się do użytku zarówno w siłowniach, jak i w domu. Sprzęt sportowy przeznaczony jest do ćwiczeń ze sztangą oraz do treningu mięśni brzucha. Posiada antypoślizgowe podkładki, które nie wymagają mocowania do podłogi.\n\nKonstrukcja została wzmocniona stalą, co zapewnia trwałość i stabilność. Ławka wykonana jest z wysokiej jakości, odpornych na zużycie materiałów. Obicie wykonane jest z eko-skóry, a jako wypełnienie zastosowano dwuwarstwowy poliuretan, który jest odporny na osiadanie i odkształcenia. Cała konstrukcja pokryta jest farbą proszkową.",
        picturePath: '/images/_bl105.jpg'
    },
    {
        nameEN: 'Weight Plate Rack – 6 Slots',
        namePL: 'Stojak na obciążenia – 6 miejsc',
        id: '_bl122',
        categoryID: '_ps',
        subcategoryID: ['_gn', '_lis'],
        properties: {
            length: 184,
            width: 56,
            height: 94,
            weight: 84
        },
        descriptionEN: "The BL122 six-slot weight plate rack is designed for storing plates, which are placed on dedicated holders attached to the rack. The structure allows for proper organization of equipment in a designated area, ensuring optimal usage conditions.\n\nThis sports equipment features a reinforced construction made from high-quality, wear-resistant materials. It is equipped with shock-absorbing foot pads that do not require floor mounting.",
        descriptionPL: "Stojak na obciążenia z 6 miejscami BL122 jest przeznaczony do przechowywania talerzy, które zawiesza się na specjalnych uchwytach na stojaku. Konstrukcja umożliwia organizację sprzętu w wyznaczonym miejscu, zapewniając optymalne warunki użytkowania.\n\nSprzęt sportowy posiada wzmocnioną konstrukcję, wykonaną z wysokiej jakości, odpornych na zużycie materiałów. Konstrukcja wyposażona jest w amortyzujące podkładki, które eliminują konieczność mocowania do podłoża.",
        picturePath: '/images/_bl122.jpg'
    },
    {
        nameEN: 'Decline Bench Press Bench',
        namePL: 'Ławka do wyciskania pod kątem w dół',
        id: '_bl106',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 198,
            width: 169,
            height: 140,
            weight: 118
        },
        descriptionEN: "The BL106 decline bench press bench. The decline bench press differs from the traditional flat bench press in that the bench is tilted downward at an angle, usually between 15 and 30 degrees.\n\nThe key aspect of the decline bench press is that it targets the lower chest more than the flat or incline bench press.\n\nThis exercise is considered safer than the traditional bench press, as it reduces shoulder strain and shifts more of the load onto the lower chest muscles.",
        descriptionPL: "Ławka do wyciskania pod kątem w dół BL106. Wyciskanie na pochylonej ławce różni się od tradycyjnego wyciskania na płaskiej ławce tym, że jest ustawiona pod ujemnym kątem, zwykle między 15 a 30 stopniami.\n\nGłówną cechą tego rodzaju wyciskania jest to, że bardziej angażuje dolną część klatki piersiowej niż wyciskanie na poziomej lub skośnej ławce.\n\nĆwiczenie to jest uważane za bezpieczniejsze od tradycyjnego wyciskania, ponieważ zmniejsza obciążenie barków i przenosi większy nacisk na dolne partie klatki piersiowej.",
        picturePath: '/images/_bl106.jpg'
    },
    {
        nameEN: 'Barbell Rack',
        namePL: 'Stojak na gryfy',
        id: '_bl123',
        categoryID: '_ps',
        subcategoryID: '_blwc',
        properties: {
            length: 133,
            width: 82,
            height: 174,
            weight: 85
        },
        descriptionEN: "If you want to store your barbells in the safest and most efficient way, you need the right rack. The BL123 barbell rack is a compact storage solution for barbells and weight plates.",
        descriptionPL: "Jeśli chcesz przechowywać swoje gryfy w najbezpieczniejszy i najbardziej efektywny sposób, potrzebujesz odpowiedniego stojaka. Stojak na gryfy BL123 to kompaktowa konstrukcja do przechowywania zarówno gryfów, jak i talerzy obciążeniowych.",
        picturePath: '/images/_bl123.jpg'
    },
    {
        nameEN: 'Adjustable Sit-Up Bench',
        namePL: 'Ławka do brzuszków regulowana',
        id: '_bl107',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 148,
            width: 83,
            height: 61,
            weight: 50
        },
        descriptionEN: "The BL107 adjustable sit-up bench is designed for strengthening abdominal muscles. It is equipped with an adjustable backrest, allowing users to customize the settings to their needs. The structure features shock-absorbing anti-slip supports, while the comfortable backrest is covered with durable eco-leather.\n\nAdjustable settings: The bench offers various incline angles, allowing people of different heights to train comfortably while reducing the risk of head injuries. Gradual adjustment of the bench’s angle ensures that workouts align with different fitness needs.\n\nHeavy-duty construction: Built with a strong iron tube frame, this bench provides excellent stability and durability. The powder-coated surface gives it an elegant look, is waterproof and corrosion-resistant. Additionally, rubber feet enhance stability and protect the floor from wear. With its versatile functionality, this bench is perfect for home abdominal training.",
        descriptionPL: "Ławka do brzuszków regulowana BL107 to sprzęt przeznaczony do wzmacniania mięśni brzucha. Wyposażona w regulowane oparcie, które pozwala każdemu użytkownikowi dostosować ustawienia do swoich potrzeb. Konstrukcja posiada amortyzowane podpory antypoślizgowe. Wygodne oparcie pokryte jest ekoskórą, odporną na zużycie.\n\nRegulowane ustawienia: ławka oferuje różne kąty nachylenia, co pozwala na dopasowanie jej do osób o różnych wzrostach i minimalizuje ryzyko urazów głowy. Możliwość stopniowego zwiększania kąta nachylenia zgodnie z zasadami treningu fitness umożliwia dostosowanie do różnych potrzeb treningowych.\n\nWytrzymała konstrukcja: ławka wykonana jest z mocnej ramy z żelaznych rur, co zapewnia stabilność i trwałość. Powierzchnia pokryta farbą proszkową nadaje estetyczny wygląd, jest wodoodporna i odporna na korozję. Gumowe nóżki dodatkowo poprawiają stabilność i chronią podłogę przed uszkodzeniem. Dzięki swojej funkcjonalności idealnie nadaje się do domowego treningu mięśni brzucha.",
        picturePath: '/images/_bl107.jpg'
    },
    {
        nameEN: 'Preacher Curl Bench',
        namePL: 'Ławka Scotta',
        id: '_bl110',
        categoryID: ['_sd', '_ps'],
        subcategoryID: ['_lisd', '_lis'],
        properties: {
            length: 120,
            width: 97,
            height: 94,
            weight: 48
        },
        descriptionEN: "The BL110 preacher curl bench is a perfect tool for isolating the biceps muscles, as it focuses all the load on the arms. The shoulder support eliminates shoulder girdle involvement, making the exercise highly effective for shaping and defining the biceps, especially when performed one-handed.\n\nThis equipment features non-slip foot pads, eliminating the need for floor mounting. The reinforced steel construction ensures durability and stability, and it is made from high-quality, wear-resistant materials.\n\nThe bench is upholstered in eco-leather, with dual-layer polyurethane foam padding, which is resistant to compression and deformation.",
        descriptionPL: "Ławka Scotta BL110 to idealne urządzenie, które koncentruje całe obciążenie na mięśniach ramion (bicepsach). Podparcie ramienia eliminuje udział obręczy barkowej, co sprawia, że ćwiczenie jest niezwykle skuteczne w modelowaniu i wyrzeźbieniu bicepsa, szczególnie gdy wykonywane jest jednorącz.\n\nSprzęt sportowy wyposażony jest w antypoślizgowe stopki, które eliminują konieczność mocowania do podłoża. Ławka posiada wzmocnioną stalową konstrukcję, wykonaną z wysokiej jakości odpornych na zużycie materiałów.\n\nW konstrukcji zastosowano obicie z ekoskóry, a jako wypełnienie użyto dwuwarstwowego piankowego poliuretanu, odpornego na osiadanie i deformację.",
        picturePath: '/images/_bl110.jpg'
    },
    {
        nameEN: 'Adjustable Hyperextension',
        namePL: 'Hiperextensja regulowana',
        id: '_bl108',
        categoryID: ['_sd', '_ps'],
        subcategoryID: ['_lisd', '_lis'],
        properties: {
            length: 146,
            width: 83,
            height: 99,
            weight: 63
        },
        descriptionEN: "The BL108 adjustable hyperextension is a simple yet highly functional piece of equipment, featuring comfortable and reliable design elements typical of the BruStyle brand. Dual chest pads provide stable support for standard lower back training found in this type of machine.\n\nThe outward-curved handlebars with a rubber coating and molded finger grips serve as both a support and a positioning guide, ensuring correct and safe body alignment at the start of the workout.\n\nThe machine features adjustable height settings, allowing it to accommodate multiple users, along with high-density thigh pads for enhanced comfort and support.",
        descriptionPL: "Hiperextensja regulowana BL108 to proste, ale funkcjonalne urządzenie, które oferuje wygodne i solidne rozwiązania, charakterystyczne dla marki BruStyle. Podwójne poduszki na klatkę piersiową zapewniają stabilne podparcie dla klasycznego treningu dolnej części pleców.\n\nWygięta na zewnątrz kierownica z gumową powłoką i profilowanymi uchwytami do palców pełni rolę podpory oraz punktu orientacyjnego, umożliwiając prawidłowe i bezpieczne ustawienie ciała przed rozpoczęciem ćwiczenia.\n\nUrządzenie posiada regulację wysokości, co pozwala dostosować je do różnych użytkowników, a także regulowane poduszki udowe, wykonane z materiału o wysokiej gęstości.",
        picturePath: '/images/_bl108.jpg'
    },
    {
        nameEN: '45-Degree Hyperextension',
        namePL: 'Hiperextensja pod kątem 45 stopni',
        id: '_bl108.1',
        categoryID: ['_sd', '_ps'],
        subcategoryID: ['_lisd', '_lis'],
        properties: {
            length: 138,
            width: 83,
            height: 91,
            weight: 60
        },
        descriptionEN: "The BL108.1 45-degree hyperextension is a combination of an inverted back extension and an angled flexor, set at a precise 45° angle for optimal results and maximum fitness performance. This hyperextension bench safely and comfortably strengthens the lower back. It features thick, telescopic midsection pads with double stitching, making it suitable for any user while ensuring comfort and support.",
        descriptionPL: "Hiperextensja pod kątem 45 stopni BL108.1 to połączenie odwróconego prostowania pleców i skośnego zginacza, ustawionego pod dokładnym kątem 45°, co zapewnia optymalne rezultaty i maksymalną efektywność treningu. Ławka do hiperextensji umożliwia bezpieczne i komfortowe wzmacnianie dolnej części pleców. Wyposażona jest w grube, teleskopowe poduszki środkowej części, z podwójnymi szwami, które dostosowują się do każdego użytkownika, zapewniając komfort i stabilne podparcie.",
        picturePath: '/images/_bl108.1.jpg'
    },
    {
        nameEN: 'Roman Chair',
        namePL: 'Rzymska ławka',
        id: '_bl113',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 170,
            width: 83,
            height: 86,
            weight: 64
        },
        descriptionEN: "The BL113 Roman Chair is a versatile training machine, designed for workouts with dumbbells in a horizontal position as well as on an inclined plane. The machine features anti-slip pads and high-density foam padding for comfortable leg support. Its durable frame construction is built to withstand the demands of commercial gyms.",
        descriptionPL: "Trenażer Rzymska ławka BL113 jest uniwersalnym urządzeniem, które można wykorzystywać zarówno do treningu z hantlami w pozycji poziomej, jak i na pochyłej płaszczyźnie. Trenażer wyposażony jest w antypoślizgowe podkładki, a także miękką wyściółkę z pianki o wysokiej gęstości do podparcia nóg. Solidna konstrukcja ramy została zaprojektowana tak, aby sprostać wymaganiom komercyjnych siłowni.",
        picturePath: '/images/_bl113.jpg'
    },
    {
        nameEN: 'Belt Squat Machine',
        namePL: 'Przysiady z pasem',
        id: '_tc327',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 292,
            width: 80,
            height: 138,
            weight: 103
        },
        descriptionEN: "The TC327 Belt Squat Machine is perfect for effective lower body training, targeting leg and glute muscles. It ensures proper squat execution without placing strain on the spine, making it safe even for individuals with back issues. With an adjustable belt, users can customize the machine to their body type for maximum comfort. The sturdy metal frame guarantees durability and reliability, even under heavy use. TC327 is ideal for both commercial gyms and home workouts.",
        descriptionPL: "Trenażer Przysiady z pasem TC327 jest idealnym rozwiązaniem do efektywnego treningu mięśni nóg i pośladków. Zapewnia prawidłową technikę ćwiczeń bez obciążania kręgosłupa, co czyni go bezpiecznym nawet dla osób z problemami pleców. Dzięki regulowanemu pasowi użytkownik może dostosować urządzenie do swoich warunków fizycznych, zapewniając maksymalny komfort treningu. Solidna metalowa konstrukcja gwarantuje trwałość i niezawodność, nawet przy intensywnym użytkowaniu. TC327 sprawdzi się zarówno w siłowniach komercyjnych, jak i do użytku domowego",
        picturePath: '/images/_tc327.jpg'
    },
    {
        nameEN: 'Squat Machine',
        namePL: 'Maszyna do przysiadów',
        id: '_tc325',
        categoryID: '_ps',
        subcategoryID: '_wc',
        properties: {
            length: 250,
            width: 130,
            height: 168,
            weight: 186
        },
        descriptionEN: "The TC325 Squat Machine is designed for effective lower body training, targeting leg and glute muscles. Its well-engineered structure ensures proper biomechanics, reducing stress on the knees and spine. A durable frame with a high-quality coating guarantees longevity, even under heavy use. The ribbed, non-slip platform prevents foot slippage, ensuring maximum stability during workouts. TC325 is a great addition to any professional or home gym.",
        descriptionPL: "Maszyna do przysiadów TC325 została zaprojektowana do efektywnego treningu mięśni nóg i pośladków. Dzięki przemyślanej konstrukcji urządzenie zapewnia prawidłową biomechanikę ruchu, minimalizując obciążenie stawów kolanowych i kręgosłupa. Wytrzymała rama i wysokiej jakości powłoka gwarantują długą żywotność, nawet przy intensywnym użytkowaniu. Antypoślizgowa, ryflowana platforma zapobiega ślizganiu się stóp, zapewniając maksymalną stabilność podczas treningu. TC325 to doskonałe uzupełnienie wyposażenia siłowni komercyjnej lub domowej.",
        picturePath: '/images/_tc325.jpg'
    },
    {
        nameEN: 'Forearm, Wrist, and Finger Trainer',
        namePL: 'Trenażer przedramion, nadgarstków i palców',
        id: '_tc412',
        categoryID: '_ps',
        subcategoryID: '_aw',
        properties: {
            length: 81,
            width: 72,
            height: 123,
            weight: 77
        },
        descriptionEN: "The TC412 trainer is specifically designed for forearm, wrist, and finger workouts, as well as arm wrestling training.",
        descriptionPL: "Trenażer TC412 został zaprojektowany specjalnie do treningu przedramion, nadgarstków i palców, a także do przygotowania do zawodów w armwrestlingu.",
        picturePath: '/images/_tc412.jpg'
    },
    {
        nameEN: 'Dumbbell Rack G4056 (for 5 pairs)',
        namePL: 'Stojak na hantle G4056 (na 5 par)',
        id: '_g4056',
        categoryID: '_ps',
        subcategoryID: ['_gn', '_lis'],
        properties: {
            length: 124,
            width: 44,
            height: 71,
            weight: 48
        },
        descriptionEN: "The G4056 dumbbell rack (for 5 pairs) is the perfect storage solution for gyms or home fitness spaces. It features a sturdy construction, ensuring stability and safe storage of various weight dumbbells. Two shelves with special holders allow easy organization of up to 6 pairs of dumbbells, providing quick and convenient access during workouts. The compact and stylish design fits any gym space, while the high-quality materials guarantee long-term durability.",
        descriptionPL: "Stojak na hantle G4056 (na 5 par) to idealne rozwiązanie do przechowywania hantli w siłowniach lub warunkach domowych. Posiada solidną konstrukcję, zapewniającą stabilność i bezpieczne przechowywanie hantli o różnej wadze. Dwie półki ze specjalnymi uchwytami umożliwiają wygodne rozmieszczenie do 6 par hantli, zapewniając łatwy dostęp podczas treningu. Kompaktowy i stylowy design sprawia, że stojak pasuje do każdego wnętrza, a wysokiej jakości materiały gwarantują długą żywotność.",
        picturePath: '/images/_g4056.jpg'
    },
    {
        nameEN: 'Closed Rubberized Handle',
        namePL: 'Uchwyt zamknięty gumowany',
        id: '_db7026',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "The DB7026 closed rubberized handle is designed for effective strength training on cable machines, ensuring comfort and safety during workouts. This model features a closed, extended handle, allowing for a secure and stable grip, even under heavy loads. A carabiner attachment loop makes it compatible with most training machines. The durable rubber coating ensures excellent grip and minimizes hand slippage during exercises. DB7026 is an excellent choice for enhancing training efficiency and achieving better athletic performance.",
        descriptionPL: "Uchwyt zamknięty gumowany DB7026 jest przeznaczony do efektywnych treningów na maszynach do ćwiczeń siłowych, zapewniając komfort i bezpieczeństwo podczas wykonywania ćwiczeń. Model posiada zamknięty, długi uchwyt, który umożliwia stabilny i pewny chwyt, nawet przy intensywnych obciążeniach. Zaczep do podłączenia karabińczyka sprawia, że jest kompatybilny z większością maszyn treningowych. Powłoka z wytrzymałego kauczuku zapewnia dobrą przyczepność i redukuje ślizganie się dłoni podczas ćwiczeń. DB7026 to doskonały wybór dla osób, które chcą poprawić jakość swojego treningu i osiągać lepsze wyniki sportowe.",
        picturePath: '/images/_db7026.jpg'
    },
    {
        nameEN: 'Spring Collar',
        namePL: 'Zacisk sprężynowy',
        id: '_db0033',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            diameter: 5,
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "The DB0033 spring collar is a reliable accessory for securing weights on barbells with Ø 50 mm sleeves. It is made from high-quality steel with a chrome coating, ensuring corrosion resistance and long-lasting durability. The handles lack plastic tips, providing a firm grip and ease of use. Its spring mechanism allows for quick and effortless weight changes during workouts. An excellent choice for both professional gyms and home use.",
        descriptionPL: "Zacisk sprężynowy DB0033 to niezawodny akcesorium do mocowania obciążeń na gryfach o średnicy Ø 50 mm. Wykonany z wysokiej jakości stali z chromowanym wykończeniem, co zapewnia odporność na korozję i długą żywotność. Uchwyty nie posiadają plastikowych końcówek, co gwarantuje pewny chwyt i wygodę użytkowania. Mechanizm sprężynowy umożliwia szybką i łatwą zmianę obciążeń podczas treningu. Idealny wybór zarówno do profesjonalnych siłowni, jak i użytku domowego.",
        picturePath: '/images/_db0033.jpg'
    },
    {
        nameEN: 'P-Shaped Stein Bar / Triceps Bar',
        namePL: 'Gryf typu P Stein / do tricepsa',
        id: '_db0024',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 119,
            width: 0,
            height: 0,
            weight: 11.5,
            diameter: 5
        },
        descriptionEN: "The DB0024 P-shaped Stein bar / triceps bar is a professional training tool, perfect for biceps and triceps exercises. Made from dual-layer chrome, it offers enhanced durability and wear resistance. Knurled grip sections ensure a firm hold and maximum comfort during workouts. Smooth Ø50 mm sleeves are compatible with standard weight plates, allowing for smooth motion during exercises. An excellent choice for athletes seeking reliable and ergonomic equipment.",
        descriptionPL: "Gryf typu P Stein / do tricepsa DB0024 to profesjonalne narzędzie treningowe, idealne do ćwiczeń na biceps i triceps. Wykonany z dwuwarstwowego chromu, zapewnia wysoką odporność na zużycie. Precyzyjna, antypoślizgowa faktura w miejscach uchwytu gwarantuje pewne trzymanie i komfort podczas treningu. Gładkie tuleje o średnicy Ø50 mm pasują do standardowych talerzy obciążeniowych, zapewniając płynny ruch w trakcie ćwiczeń. Idealny wybór dla sportowców, którzy poszukują solidnego i ergonomicznego sprzętu.",
        picturePath: '/images/_db0024.jpg'
    },
    {
        nameEN: 'Professional Chrome Barbell',
        namePL: 'Profesjonalny gryf chromowany',
        id: '_db0019',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 119,
            width: 0,
            height: 0,
            weight: 9.5,
            diameter: 5
        },
        descriptionEN: "The DB0019 professional chrome barbell is the perfect choice for biceps training with a weight capacity of up to 200 kg. Made from high-quality metal, it features a dual-layer chrome coating, ensuring durability and corrosion resistance. The W-shaped design provides a comfortable grip, reducing strain on the joints. Smooth Ø50 mm sleeves allow for easy weight changes, while the knurled grip sections ensure a firm and secure hold during workouts. Perfect for intense training in both commercial gyms and home fitness setups.",
        descriptionPL: "Profesjonalny gryf chromowany DB0019 to idealny wybór do treningu bicepsów z obciążeniem do 200 kg. Wykonany z wysokiej jakości metalu, posiada dwuwarstwową powłokę chromowaną, która zapewnia trwałość i odporność na korozję. W-kształtny profil gryfu umożliwia komfortowy chwyt, redukując nacisk na stawy. Gładkie tuleje Ø50 mm umożliwiają łatwą zmianę obciążeń, a precyzyjna antypoślizgowa faktura uchwytów zapewnia pewny i stabilny chwyt podczas ćwiczeń. Idealnie nadaje się do intensywnych treningów zarówno w siłowniach komercyjnych, jak i domowych warunkach.",
        picturePath: '/images/_db0019.jpg'
    },
    {
        nameEN: 'Professional Barbell',
        namePL: 'Profesjonalny gryf',
        id: '_db0001',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 220,
            width: 0,
            height: 0,
            weight: 0,
            diameter: 2.8
        },
        descriptionEN: "The professional barbell DB0001 is designed for heavy training and is suitable for use in professional gyms. With a maximum load capacity of 700 kg, this barbell provides strength and durability, making it an ideal choice for powerlifting and weightlifting. Made from high-quality steel, it offers optimal grip and smooth rotation, ensuring comfort and safety during exercises. The DB0001 meets all the requirements of professional athletes and guarantees reliable support during workouts.",
        descriptionPL: "Profesjonalny gryf DB0001 przeznaczony jest do ciężkich treningów i nadaje się do użytku w profesjonalnych siłowniach. Dzięki maksymalnemu obciążeniu wynoszącemu 700 kg, ten gryf zapewnia wytrzymałość i trwałość, co czyni go idealnym wyborem do trójboju siłowego oraz podnoszenia ciężarów. Wykonany z wysokiej jakości stali, oferuje optymalne zgrubienie oraz płynny obrót, co zapewnia komfort i bezpieczeństwo podczas ćwiczeń. DB0001 spełnia wszystkie wymagania profesjonalnych sportowców i gwarantuje niezawodne wsparcie podczas treningów.",
        picturePath: '/images/_db0001.jpg'
    },
    {
        nameEN: 'Lat Pulldown Handle',
        namePL: 'Uchwyt do górnego wyciągu',
        id: '_db7028',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 122,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "Lat Pulldown Handle DB7028\n\n• Convenient swivel attachment;\n\n• Chrome finish;\n\n• Handles made of dense rubber.",
        descriptionPL: "Uchwyt do górnego wyciągu DB7028\n\n• Wygodny, obrotowy zaczep;\n\n• Chromowane wykończenie;\n\n• Uchwyty wykonane z gęstego kauczuku.",
        picturePath: '/images/_db7028.jpg'
    },
    {
        nameEN: 'Double Rope Handle',
        namePL: 'Podwójny uchwyt linowy',
        id: '_db7064',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "Double Rope Handle DB7064 Stein Handlebar – Made in Germany. This handle is designed for professional cable machines and is made from natural rubber rope. For added comfort, the handle ends, which serve as hand stoppers, are made of rubber. With this handle, you can perform a wide range of exercises targeting the arms, chest, and back muscles. The handle features a chrome universal attachment ring, allowing for easy connection to the machine’s carabiner.",
        descriptionPL: "Podwójny uchwyt linowy DB7064 Stein Handlebar – produkcja Niemcy. Dany uchwyt przeznaczony jest do profesjonalnych maszyn bloczkowych, wykonany z naturalnego kauczuku linowego. Dla większego komfortu końcówki uchwytu, które służą jako podparcie dla rąk, wykonane są z gumy. Za pomocą tego uchwytu można wykonywać szeroki zakres ćwiczeń na mięśnie ramion, klatki piersiowej oraz pleców. Uchwyt posiada chromowaną, uniwersalną zawieszkę, która umożliwia łatwe mocowanie do karabińczyka maszyny treningowej.",
        picturePath: '/images/_db7064.jpg'
    },
    {
        nameEN: 'Single Rope Handle',
        namePL: 'Uchwyt linowy pojedynczy',
        id: '_db7076',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "Single Rope Handle DB7076 Stein Handlebar – Made in Germany. This handle is designed for professional cable machines and is made from natural rubber rope. For added comfort, the handle ends, which serve as hand stoppers, are made of rubber. With this handle, you can perform a wide range of exercises targeting the arms, chest, and back muscles. The handle features a chrome universal attachment ring, allowing for easy connection to the machine’s carabiner.",
        descriptionPL: "Uchwyt linowy pojedynczy DB7076 Stein Handlebar – produkcja Niemcy. Dany uchwyt przeznaczony jest do profesjonalnych maszyn bloczkowych, wykonany z naturalnego kauczuku linowego. Dla większego komfortu końcówki uchwytu, które służą jako podparcie dla rąk, wykonane są z gumy. Za pomocą tego uchwytu można wykonywać szeroki zakres ćwiczeń na mięśnie ramion, klatki piersiowej oraz pleców. Uchwyt posiada chromowaną, uniwersalną zawieszkę, która umożliwia łatwe mocowanie do karabińczyka maszyny treningowej.",
        picturePath: '/images/_db7076.jpg'
    },
    {
        nameEN: 'Pull Handle',
        namePL: 'Uchwyt do wyciągu',
        id: '_db7017',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "Pull Handle DB7017 – a professional handle by Stein. Made of steel with a chrome finish and comfortable rubberized grips.\n\nFeatures of the Stein DB7017 handle:\n\n• Ergonomic design;\n\n• Curved bar shape;\n\n• Swivel attachment;\n\n• Handles made of dense rubber.",
        descriptionPL: "Uchwyt do wyciągu DB7017 – profesjonalny uchwyt marki Stein. Wykonany ze stali z chromowanym wykończeniem oraz wygodnymi, kauczukowymi rączkami.\n\nCechy uchwytu Stein DB7017:\n\n• Wygodna konstrukcja;\n\n• Wygięty kształt gryfu;\n\nObrotowy zaczep;\n\n•Uchwyty wykonane z gęstego kauczuku.",
        picturePath: '/images/_db7017.jpg'
    },
    {
        nameEN: 'Lower-Upper Pulldown Handle',
        namePL: 'Uchwyt do dolnego-górnego wyciągu',
        id: '_db7023',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "Lower-Upper Pulldown Handle DB7023\n\n• Convenient swivel attachment;\n\n• Chrome finish;\n\n• Handles made of dense rubber.",
        descriptionPL: "Uchwyt do dolnego-górnego wyciągu DB7023\n\n• Wygodny, obrotowy zaczep;\n\n• Chromowane wykończenie;\n\n• Uchwyty wykonane z gęstego kauczuku.",
        picturePath: '/images/_db7023.jpg'
    },
    {
        nameEN: 'Lower Pulldown Handle',
        namePL: 'Uchwyt do dolnego wyciągu',
        id: '_db7025',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "Lower Pulldown Handle DB7025 is a professional grip made of chrome, with dense rubber hand pads. It is used for lower pulls with a parallel grip.",
        descriptionPL: "Uchwyt do dolnego wyciągu DB7025 to profesjonalna rączka wykonana z chromu, a uchwyty z gęstego kauczuku. Uchwyt przeznaczony do dolnych ściągań z chwytem równoległym.",
        picturePath: '/images/_db7025.jpg'
    },
    {
        nameEN: 'Straight Pull Handle',
        namePL: 'Uchwyt do prostego wyciągu',
        id: '_db7016',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 50,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "Straight Pull Handle DB7016 – a professional handle by Stein.\n\nFeatures:\n\n• Straight handle for pulls;\n\n• Convenient swivel attachment;\n\n• Chrome finish;\n\n• Handles made of dense rubber.",
        descriptionPL: "Uchwyt do prostego wyciągu DB7016 – profesjonalny uchwyt marki Stein.\n\nCechy uchwytu:\n\n• Prosta rączka do wyciągu;\n\n• Wygodny, obrotowy zaczep;\n\n• Chromowane wykończenie;\n\n• Uchwyty wykonane z gęstego kauczuku.",
        picturePath: '/images/_db7016.jpg'
    },
    {
        nameEN: 'Triceps Pull Handle',
        namePL: 'Uchwyt do wyciągu na triceps',
        id: '_db7019',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: "The DB7019 Triceps Pull Handle is a professional grip by Stein, made of chrome-plated metal – strong and reliable, with dense rubber hand grips for added comfort. The handle features medium-depth knurling. Its primary purpose is triceps training. It has an ergonomic design and a carabiner attachment ring.\n\nStein is a German company specializing in sports equipment and accessories. Today, it is one of the most successful brands in its sector and has gained worldwide recognition.",
        descriptionPL: "Uchwyt do wyciągu na triceps DB7019 to profesjonalna rączka firmy Stein, wykonana z chromowanego metalu – mocna i trwała, z uchwytami z gęstego kauczuku dla większego komfortu. Rączka posiada średniej głębokości radełkowanie. Jej główne przeznaczenie to trening tricepsa. Uchwyt ma ergonomiczną konstrukcję i zawieszkę do mocowania karabińczyka.\n\nStein to niemiecka firma zajmująca się produkcją sprzętu sportowego i akcesoriów. Obecnie jest jednym z najbardziej rozpoznawalnych i odnoszących sukcesy marek w swojej branży, zdobywając popularność na rynkach międzynarodowych.",
        picturePath: '/images/_db7019.jpg'
    },
    {
        nameEN: 'CrossFit Kettlebell',
        namePL: 'Kettlebell do CrossFitu',
        id: '_db3059',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: [6, 16, 24, 32]
        },
        descriptionEN: "The DB3059 CrossFit Kettlebell is a high-quality accessory for intense workouts. Each kettlebell is color-coded at the base of the handle for quick weight identification, making it convenient to use. The solid cast iron ensures durability and stability during various exercises. A wide handle provides a comfortable and secure grip, enhancing safety during movements. Perfect for CrossFit training and functional workouts.",
        descriptionPL: "Kettlebell do CrossFitu DB3059 to wysokiej jakości akcesorium do intensywnych treningów. Każda kettlebell ma oznaczenie kolorystyczne przy podstawie uchwytu, co umożliwia szybkie rozpoznanie wagi i ułatwia użytkowanie. Solidne żeliwo zapewnia niezawodną trwałość i stabilność podczas wykonywania różnych ćwiczeń. Szeroki uchwyt gwarantuje komfortowy i pewny chwyt, zwiększając bezpieczeństwo podczas ruchów. Idealna do treningów CrossFit i ćwiczeń funkcjonalnych.",
        picturePath: ['/images/_db3059-6.jpg', '/images/_db3059-16.jpg', '/images/_db3059-24.jpg', '/images/_db3059-32.jpg']
    },
    {
        nameEN: 'Rubber-Coated Weight Plate',
        namePL: 'Talerz gumowany',
        id: '_db6061',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: [2.5, 5, 10, 15, 20]
        },
        descriptionEN: "The DB6061 rubber-coated weight plate is designed for professional training, ensuring maximum comfort during use. Its ergonomic design with four hand grips makes it easy to hold and transport, making it versatile for various exercises. The inner diameter of the plate is 51 mm, and the steel inserts allow for smooth loading and unloading on the barbell. The rubberized surface enhances impact resistance, ensuring durability and safety during workouts. An ideal choice for athletes of all levels.",
        descriptionPL: "Talerz gumowany DB6061 został stworzony do profesjonalnych treningów i zapewnia maksymalny komfort użytkowania. Dzięki ergonomicznemu designowi z czterema otworami na dłonie talerz jest łatwy do trzymania i przenoszenia, co sprawia, że jest wszechstronny w różnych ćwiczeniach. Wewnętrzna średnica otworu wynosi 51 mm, a stalowe tuleje wewnątrz zapewniają łatwe zakładanie i zdejmowanie ze sztangi. Gumowana powierzchnia zwiększa odporność na uderzenia boczne, co gwarantuje trwałość i bezpieczeństwo podczas treningu. Idealny wybór dla sportowców na każdym poziomie zaawansowania.",
        picturePath: '/images/_db6061.jpg'
    },
    {
        nameEN: 'Outdoor Wooden Trainer "Standing Chest Press"',
        namePL: 'Zewnętrzny drewniany trenażer „Wyciskanie stojąc”',
        id: '_sw601',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 165,
            width: 119,
            height: 212,
            weight: 257
        },
        descriptionEN: 'Outdoor Wooden Trainer "Standing Chest Press" SW601 is the perfect machine for developing chest muscles and upper body strength in an outdoor setting. Made from high-quality wooden materials, this trainer combines durability and effectiveness.\n\nKey Features:\n\n• Construction: Sturdy and stable wooden frame, resistant to weather conditions and long-lasting.\n\n• Repetitive Motion: Allows for continuous "standing chest press" movements, strengthening chest, shoulders, and arms.\n\n• Ergonomic Handles: Comfortable grips ensure a secure and efficient workout.\n\n• Safety: Professionally designed for maximum safety and effectiveness.\n\n• How to Use: Stand in front of the trainer, hold the handles, and perform chest press movements to effectively train the chest and upper body muscles.\n\nThe SW601 outdoor wooden trainer by BruStyle is an innovative fitness solution that enables you to enjoy open-air workouts while achieving your physical goals.',
        descriptionPL: "Zewnętrzny drewniany trenażer „Wyciskanie stojąc” SW601 to idealne urządzenie do treningu mięśni klatki piersiowej i górnej części ciała na świeżym powietrzu. Wykonany z wysokiej jakości drewna, łączy w sobie trwałość i skuteczność.\n\nGłówne cechy:\n\n• Konstrukcja: Solidna i stabilna drewniana konstrukcja odporna na warunki atmosferyczne i długotrwałe użytkowanie.\n\n• Powtarzalność ruchów: Umożliwia wykonywanie regularnych ruchów wyciskania stojąc, wzmacniając mięśnie klatki piersiowej, ramion i rąk.\n\n• Ergonomiczne uchwyty: Wygodne rączki zapewniają komfort podczas ćwiczeń.\n\n• Bezpieczeństwo: Profesjonalny design uwzględniający aspekty bezpieczeństwa i skuteczności.\n\n• Jak używać: Stań przed urządzeniem, chwyć uchwyty i wykonuj ruchy wyciskania, aby skutecznie trenować klatkę piersiową i wzmacniać górną część ciała.\n\nZewnętrzny drewniany trenażer SW601 od BruStyle to nowoczesne rozwiązanie, które pozwala cieszyć się treningiem na świeżym powietrzu i osiągać swoje cele fitness.",
        picturePath: '/images/_sw601.jpg'
    },
    {
        nameEN: 'Outdoor Wooden Trainer "Standing Butterfly"',
        namePL: 'Zewnętrzny drewniany trenażer „Butterfly stojąc”',
        id: '_sw602',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 165,
            width: 150,
            height: 213,
            weight: 260
        },
        descriptionEN: 'The SW602 Outdoor Wooden Trainer "Standing Butterfly" is designed to develop upper body muscles, particularly the chest, shoulder girdle, and triceps. This trainer consists of a wooden frame with two steel handles mounted on the sides. This design allows users to perform a variety of standing butterfly exercises, strengthening and expanding the muscles of the upper body.\n\nThe SW602 outdoor trainer is made from high-quality wood, ensuring stability and durability. The metal handles provide corrosion resistance and additional strength. This trainer is ideal for installation in outdoor fitness areas, parks, or sports zones, allowing users to exercise in the fresh air. Using the SW602 "Standing Butterfly" trainer, you can enhance your physical condition and maintain an active lifestyle.',
        descriptionPL: "Zewnętrzny drewniany trenażer „Butterfly stojąc” SW602 został zaprojektowany do rozwoju mięśni górnej części ciała, w szczególności klatki piersiowej, obręczy barkowej i tricepsów. Urządzenie składa się z drewnianej konstrukcji, na której zamontowane są dwie stalowe rączki umieszczone po bokach. Dzięki temu projektowi można wykonywać różnorodne ćwiczenia „butterfly” w pozycji stojącej, wzmacniając i rozbudowując mięśnie górnej części ciała.\n\nZewnętrzny trenażer SW602 wykonany jest z wysokiej jakości drewna, co zapewnia stabilność i trwałość. Do produkcji uchwytów wykorzystano metal odporny na korozję, co zwiększa ich wytrzymałość. Trenażer doskonale nadaje się do montażu na placach treningowych, w parkach lub strefach sportowych, gdzie można wykonywać ćwiczenia na świeżym powietrzu. Korzystając z trenażera SW602 „Butterfly stojąc”, możesz poprawić swoją kondycję fizyczną i prowadzić aktywny tryb życia.",
        picturePath: '/images/_sw602.jpg'
    },
    {
        nameEN: 'Outdoor Wooden Rear Delt Trainer (Standing)',
        namePL: 'Zewnętrzny drewniany trenażer do tylnych aktonów barków stojąc',
        id: '_sw603',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 119,
            width: 180,
            height: 213,
            weight: 252
        },
        descriptionEN: "The SW603 Outdoor Wooden Rear Delt Trainer by BruStyle is the perfect way to strengthen and shape the upper back muscles in an outdoor setting. Designed to meet the highest quality and safety standards, this trainer provides effective workouts in an outdoor environment.\n\nKey Features & Benefits:\n\n• High-Quality Materials: Made of durable wood and stainless steel, ensuring long-lasting performance in all weather conditions.\n\n• Effective Rear Delt Training: Specifically designed for isolation training of the rear delts, promoting strong and well-defined muscles.\n\n• Safety & Comfort: Ergonomic handles help maintain proper posture, reducing the risk of injury.\n\n• Outdoor Aesthetic: The wooden design blends seamlessly into natural environments.\n\n• Optimal Height: Ensures comfortable use while standing.\n\n• Easy Installation: Simple setup for outdoor fitness areas and sports facilities.\n\nThe SW603 Outdoor Wooden Rear Delt Trainer is an excellent addition to any outdoor fitness area, helping users achieve great training results.",
        descriptionPL: "Zewnętrzny drewniany trenażer do tylnych aktonów barków stojąc SW603 od BruStyle to idealne rozwiązanie do wzmacniania i kształtowania mięśni górnej części pleców na świeżym powietrzu. Urządzenie zostało zaprojektowane zgodnie z najwyższymi standardami jakości i bezpieczeństwa, aby zapewnić skuteczne treningi na zewnątrz.\n\nGłówne cechy i zalety:\n\n• Wysokiej jakości materiały: Wykonany z wytrzymałego drewna i stali nierdzewnej, co zapewnia długą żywotność nawet w trudnych warunkach pogodowych.\n\n• Skuteczny trening tylnych aktonów barków: Specjalna konstrukcja pozwala na izolowany trening tylnych aktonów barków, rozwijając silne i wyrzeźbione mięśnie.\n\n• Bezpieczeństwo i komfort: Ergonomiczne uchwyty umożliwiają utrzymanie prawidłowej postawy, minimalizując ryzyko kontuzji.\n\n• Naturalna estetyka: Drewniana konstrukcja doskonale komponuje się z otoczeniem, nadając mu naturalny wygląd.\n\n• Optymalna wysokość: Zapewnia wygodne użytkowanie w pozycji stojącej.\n\n• Łatwa instalacja: Prosty montaż na zewnętrznych placach treningowych i obszarach sportowych.\n\nZewnętrzny drewniany trenażer do tylnych aktonów barków SW603 to doskonały dodatek do każdego zewnętrznego obiektu sportowego, pomagający osiągnąć wysokie wyniki w treningu.",
        picturePath: '/images/_sw603.jpg'
    },
    {
        nameEN: 'Outdoor Wooden Trainer "Lever Row"',
        namePL: 'Zewnętrzny drewniany trenażer „Ważona Tylna Talia”',
        id: '_sw604',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 137,
            width: 120,
            height: 192,
            weight: 224
        },
        descriptionEN: 'The SW604 Outdoor Wooden Trainer "Lever Row" is the perfect choice for those who want to exercise outdoors. Designed with high-quality wood, this trainer ensures durability and long-lasting performance.\n\nThe SW604 "Lever Row" trainer allows you to perform various exercises that strengthen the upper body, including the back, shoulders, arms, and chest muscles. The adjustable resistance lets you customize the workout to fit your needs and fitness level.\n\nThis trainer features a stable and robust construction, ensuring safety during training. It is equipped with comfortable handles for a firm grip and proper body alignment during exercises.\n\nThe SW604 Outdoor "Lever Row" Trainer is an excellent way to enhance physical fitness, build muscle strength, and maintain health in an open-air environment. It is an essential component of any outdoor fitness complex and will help you reach your fitness goals.',
        descriptionPL: "Zewnętrzny drewniany trenażer „Ważona Tylna Talia” SW604 to idealny wybór dla osób, które chcą trenować na świeżym powietrzu. Urządzenie zostało zaprojektowane z wykorzystaniem wysokiej jakości drewna, co zapewnia wytrzymałość i długowieczność konstrukcji.\n\nTrenażer SW604 umożliwia wykonywanie różnorodnych ćwiczeń wzmacniających górną część ciała, w tym plecy, ramiona, ręce oraz mięśnie klatki piersiowej. Możliwość regulacji obciążenia pozwala na dostosowanie treningu do indywidualnych potrzeb i poziomu sprawności fizycznej.\n\nTrenażer ma stabilną i solidną konstrukcję, co gwarantuje bezpieczeństwo podczas ćwiczeń. Wyposażony jest w ergonomiczne uchwyty, które zapewniają komfortowy chwyt i prawidłowe ustawienie ciała podczas treningu.\n\nZewnętrzny trenażer „Ważona Tylna Talia” SW604 to doskonały sposób na poprawę kondycji fizycznej, wzmocnienie mięśni oraz utrzymanie zdrowia podczas aktywności na świeżym powietrzu. Stanowi niezastąpiony element każdego zewnętrznego kompleksu treningowego i pomoże osiągnąć Twoje cele fitness.",
        picturePath: '/images/_sw604.jpg'
    },
    {
        nameEN: 'Outdoor Wooden Trainer "Lat Pulldown"',
        namePL: 'Zewnętrzny drewniany trenażer „Ściąganie z góry”',
        id: '_sw605',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 162,
            width: 107,
            height: 245,
            weight: 275
        },
        descriptionEN: 'The SW605 Outdoor Wooden "Lat Pulldown" Trainer is an innovative outdoor fitness machine designed to effectively develop upper back muscles and traps. Made from high-quality wood, this trainer combines aesthetic appeal and functionality.\n\nHow to Use the Trainer:\n\n• Warm-Up: Perform light stretching and shoulder rotations to prepare your muscles for training.\n\n• Adjust the Resistance: Modify the weight if needed to create the optimal resistance level.\n\n• Perform the Exercise: Pull the handles downward, engaging the back and trapezius muscles. Slowly return to the starting position, controlling the movement.\n\n• Reps and Sets: Complete 3-4 sets of 12-15 reps, ensuring proper rest between sets.\n\n• Finish the Workout: End with stretching and shoulder rotations to maintain flexibility.\n\n• The SW605 "Lat Pulldown" Trainer allows you to develop back and trapezius muscles in an outdoor setting, providing an opportunity to enjoy physical activity in fresh air. Incorporate this trainer into your routine for comprehensive upper back development.',
        descriptionPL: "Zewnętrzny drewniany trenażer „Ściąganie z góry” SW605 to innowacyjne urządzenie zaprojektowane do skutecznego rozwoju mięśni górnej części pleców i trapezów. Wykonany z wysokiej jakości drewna, łączy w sobie estetykę i funkcjonalność.\n\nJak korzystać z trenażera:\n\n• Rozgrzewka: Wykonaj lekkie rozciąganie i krążenie ramion, aby przygotować mięśnie do treningu.\n\n• Regulacja obciążenia: W razie potrzeby dostosuj opór, aby uzyskać optymalny poziom treningu.\n\n• Wykonywanie ćwiczeń: Chwyć uchwyty i ściągaj je w dół, napinając mięśnie pleców i trapezy. Powoli wróć do pozycji wyjściowej, kontrolując ruch.\n\n• Liczba serii i powtórzeń: Wykonaj 3-4 serie po 12-15 powtórzeń, odpoczywając między nimi.\n\n• Zakończenie treningu: Rozciągnij się i wykonaj krążenie ramion dla poprawy elastyczności mięśni.\n\nTrenażer „Ściąganie z góry” SW605 umożliwia rozwój mięśni pleców i trapezów na świeżym powietrzu, dając możliwość aktywnego spędzania czasu na zewnątrz. Dodaj go do swojego planu treningowego, aby kompleksowo wzmocnić górną część pleców.",
        picturePath: '/images/_sw605.jpg'
    },
    {
        nameEN: `Outdoor Wooden "Biceps Machine" Trainer`,
        namePL: `Zewnętrzny drewniany trenażer „Biceps maszyna”`,
        id: '_sw606',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 173,
            width: 140,
            height: 163,
            weight: 258
        },
        descriptionEN: `The SW606 Outdoor Wooden "Biceps Machine" Trainer is the perfect choice for those looking to improve upper limb muscle tone. Made from durable and long-lasting wood, this trainer combines an ergonomic design with a sturdy structure.\n\nHow to Use the Trainer:\n\n• Warm-Up: Perform light stretching and arm rotations to prepare your muscles for training.\n\n• Exercise Execution: Grip the handles and lift your arms, bending your elbows to engage the biceps. Slowly return to the starting position, controlling the movement.\n\n• Reps and Sets: Start with light resistance, gradually increasing it to build muscle strength. Complete 3-4 sets of 10-15 reps.\n\n• Cool-Down: Finish your workout with gentle stretching to relax the muscles.\n\nThe SW606 "Biceps Machine" Trainer provides an effective workout for biceps and forearms, ensuring both comfort and safety during exercises. Incorporate it into your training routine to enjoy strong and well-defined arms.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Biceps maszyna” SW606 to idealny wybór dla osób, które chcą poprawić tonus mięśniowy górnych kończyn. Wykonany z solidnego i trwałego drewna, łączy ergonomiczny design i niezawodną konstrukcję.\n\nJak korzystać z trenażera:\n\n• Rozgrzewka: Wykonaj lekkie rozciąganie i krążenie ramion, aby przygotować mięśnie do treningu.\n\n• Wykonywanie ćwiczeń: Chwyć uchwyty i unosząc ręce w górę, zginaj łokcie, koncentrując się na napięciu bicepsów. Powoli wróć do pozycji wyjściowej, kontrolując ruch.\n\n• Liczba serii i powtórzeń: Zacznij od lekkiego obciążenia, stopniowo je zwiększając, aby wzmocnić opór mięśniowy. Wykonaj 3-4 serie po 10-15 powtórzeń.\n\n• Zakończenie treningu: Na zakończenie wykonaj lekkie rozciąganie, aby rozluźnić mięśnie.\n\nTrenażer „Biceps maszyna” SW606 umożliwia skuteczny trening bicepsów i przedramion, gwarantując komfort i bezpieczeństwo podczas ćwiczeń. Dodaj go do swojej rutyny treningowej, aby cieszyć się silnymi i wyrzeźbionymi ramionami.`,
        picturePath: '/images/_sw606.jpg'
    },
    {
        nameEN: `Outdoor Wooden Trainer "Deadlift"`,
        namePL: `Zewnętrzny drewniany trenażer „Martwy ciąg”`,
        id: '_sw608',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 194,
            width: 140,
            height: 163,
            weight: 258
        },
        descriptionEN: `The SW608 Outdoor Wooden "Deadlift" Trainer is the perfect choice for those looking to improve muscle tone and overall health. Made from durable wood, this trainer effectively strengthens the back and lower body muscles.\n\nKey Features:\n\n• Natural Material: Crafted from high-quality wood, combining natural aesthetics with functionality.\n\n• Weather Resistance: The wood is treated for durability, ensuring long-lasting performance in outdoor conditions.\n\n• Ergonomic Design: Comfortable handles allow for efficient and safe execution of exercises.\n\n• Versatile Use: Suitable for outdoor workouts, parks, and fitness areas.\n\n• Usage: The SW608 "Deadlift" Trainer helps develop back and leg strength, providing an excellent way to maintain physical fitness and well-being.\n\n• Maintenance and Care: Regularly clean the wooden trainer from dust and moisture, and apply protective coatings to preserve material quality.\n\nThe SW608 "Deadlift" Trainer is your trusted companion in achieving an active lifestyle and better health.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Martwy ciąg” SW608 to idealny wybór dla osób, które chcą poprawić kondycję mięśniową i zdrowie. Wykonany z wytrzymałego drewna, pozwala skutecznie rozwijać mięśnie pleców i dolnej partii ciała.\n\nGłówne cechy:\n\n• Naturalny materiał: Wykonany z wysokiej jakości drewna, łączy naturalność i efektywność.\n\n• Odporność na warunki atmosferyczne: Drewno jest zabezpieczone przed wpływem warunków pogodowych, co zapewnia długą żywotność urządzenia.\n\n• Ergonomiczny design: Wygodne uchwyty umożliwiają komfortowe i efektywne wykonywanie ćwiczeń.\n\n• Uniwersalność użytkowania: Nadaje się do treningów na świeżym powietrzu, w parkach i na siłowniach plenerowych.\n\n• Zastosowanie: Trenażer „Martwy ciąg” SW608 pomaga wzmocnić mięśnie pleców i nóg, stanowiąc doskonały sposób na utrzymanie dobrej kondycji i zdrowia.\n\n• Konserwacja i użytkowanie: Regularnie czyść urządzenie z kurzu i wilgoci oraz stosuj ochronne powłoki drewniane, aby utrzymać wysoką jakość materiału.\n\nTrenażer „Martwy ciąg” SW608 to niezastąpiony element aktywnego trybu życia, który pomoże Ci osiągnąć lepszą sprawność i zdrowie.`,
        picturePath: '/images/_sw608.jpg'
    },
    {
        nameEN: `Outdoor Wooden Trainer "Squats, Calves"`,
        namePL: `Zewnętrzny drewniany trenażer „Przysiady, łydki”`,
        id: '_sw609',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 155,
            width: 140,
            height: 193,
            weight: 284
        },
        descriptionEN: `The SW609 Outdoor Wooden "Squats, Calves" Trainer is the perfect outdoor equipment for strength training of the lower body. Made from high-quality wood, it combines durability and aesthetic design.\n\nHow to Use the Trainer:\n\n• Warm-Up: Perform light stretching and hip rotations to prepare your muscles for exercise.\n\n• Proper Posture: Stand in front of the trainer, ensuring your shoulders are level and arms hang freely.\n\n• Adjusting Resistance: If needed, adjust the weight to create optimal resistance for training.\n\n• Exercise Execution: Perform squats, maintaining proper posture, then slowly rise back up, engaging thigh and calf muscles.\n\n• Reps and Sets: Complete 3-4 sets of 10-12 repetitions, allowing rest between sets.\n\n• Cool-Down: Finish with light stretching and hip rotations to maintain flexibility.\n\nThe SW609 "Squats, Calves" Trainer allows for effective lower-body workouts outdoors. Incorporate it into your fitness routine to build leg strength and sculpt a well-defined physique.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Przysiady, łydki” SW609 to idealne urządzenie do treningu siłowego dolnych partii ciała. Wykonany z wysokiej jakości drewna, łączy wytrzymałość i estetyczny design.\n\nJak korzystać z trenażera:\n\n• Rozgrzewka: Wykonaj lekkie rozciąganie i krążenie bioder, aby przygotować mięśnie do wysiłku.\n\n• Prawidłowa postawa: Stań przed trenażerem, upewniając się, że ramiona są równe, a ręce swobodnie opuszczone.\n\n• Regulacja oporu: W razie potrzeby dostosuj ciężar, aby uzyskać optymalne obciążenie.\n\n• Wykonanie ćwiczenia: Wykonuj przysiady, utrzymując prawidłową postawę, a następnie powoli wracaj do pozycji wyjściowej, napinając mięśnie ud i łydek.\n\n• Liczba serii i powtórzeń: 3-4 serie po 10-12 powtórzeń, z odpowiednim odpoczynkiem między seriami.\n\n• Zakończenie treningu: Wykonaj rozciąganie i krążenie bioder, aby zwiększyć elastyczność mięśni.\n\nTrenażer „Przysiady, łydki” SW609 umożliwia skuteczny trening dolnych partii ciała na świeżym powietrzu. Włącz go do swojego planu treningowego, aby zwiększyć siłę nóg i wymodelować sylwetkę.`,
        picturePath: '/images/_sw609.jpg'
    },
    {
        nameEN: `Outdoor Wooden Trainer "Dumbbell Row"`,
        namePL: `Zewnętrzny drewniany trenażer „Rząd hantli”`,
        id: '_sw611',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 235,
            width: 215,
            height: 117,
            weight: 346
        },
        descriptionEN: `The SW611 Outdoor Wooden "Dumbbell Row" Trainer by BruStyle is the perfect way to strengthen and develop the upper and mid-body in an outdoor environment. This trainer is specifically designed to provide high training efficiency, comfort, and safety.\n\nKey Features & Benefits:\n\n• High-Quality Materials: Made of durable wood and stainless steel, ensuring long-term resistance to weather conditions.\n\n• Dumbbell Row Function: A specially shaped wooden structure allows for various dumbbell exercises, targeting different muscle groups.\n\n• Effective Upper & Mid-Body Workout: Trains the shoulders, arms, and back, providing a complete strength workout.\n\n• Safety & Comfort: Ergonomic handles ensure a natural grip, promoting proper posture and reducing the risk of injury.\n\n• Outdoor Aesthetics: The wooden design blends seamlessly into outdoor environments.\n\n• Optimal Height: Designed for comfortable and effective use.\n\n• Easy Installation: Quick and simple setup on outdoor gym areas, sports fields, or recreational spaces.\n\nThe SW611 "Dumbbell Row" Outdoor Wooden Trainer enhances the functionality of any outdoor sports facility, allowing you to enjoy effective workouts in nature.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Rząd hantli” SW611 od BruStyle to idealny sposób na rozwój i wzmocnienie górnych oraz środkowych partii ciała – bez potrzeby wizyty w siłowni, po prostu na otwartej przestrzeni. Ten trenażer został specjalnie zaprojektowany, aby zapewnić wysoką efektywność treningu, komfort i bezpieczeństwo.\n\nGłówne cechy i zalety:\n\n• Materiały wysokiej jakości: Wykonany z wytrzymałego drewna i stali nierdzewnej, odporny na zmienne warunki atmosferyczne.\n\n• Funkcja „Rząd hantli” – specjalnie ukształtowana drewniana konstrukcja pozwala na różnorodne ćwiczenia z hantlami, angażując różne grupy mięśniowe.\n\n• Efektywny trening górnej i środkowej części ciała: Trenażer wzmacnia ramiona, barki i plecy, umożliwiając wszechstronne ćwiczenia.\n\n• Bezpieczeństwo i komfort: Ergonomiczne uchwyty ułatwiają prawidłowe ustawienie ciała i minimalizują ryzyko kontuzji.\n\n• Naturalny design: Drewniana konstrukcja estetycznie komponuje się z otoczeniem na świeżym powietrzu.\n\n• Optymalna wysokość: Odpowiednio dobrana wysokość zapewnia komfort i efektywność ćwiczeń.\n\n• Łatwy montaż: Szybka i prosta instalacja na siłowniach plenerowych, placach sportowych czy terenach rekreacyjnych.\n\n\n\nZewnętrzny drewniany trenażer „Rząd hantli” SW611 dodaje funkcjonalność każdemu sportowemu placowi i pozwala cieszyć się skutecznym treningiem na świeżym powietrzu.`,
        picturePath: '/images/_sw611.jpg'
    },
    {
        nameEN: `Outdoor Wooden Trainer "Incline Bench Press"`,
        namePL: `Zewnętrzny drewniany trenażer „Wyciskanie w górę w pozycji leżącej”`,
        id: '_sw612',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 203,
            width: 99,
            height: 145,
            weight: 181
        },
        descriptionEN: `The SW612 Outdoor Wooden "Incline Bench Press" Trainer is an effective tool for upper-body training, specifically targeting the chest, shoulders, and triceps. This trainer allows you to perform bench press exercises, strengthening your muscles and improving overall physical tone.\n\nKey Features & Benefits:\n\n• High-Quality Materials: Made from durable and long-lasting wood, ensuring a long service life.\n\n• Ergonomic Design: Provides comfort and stability, allowing for proper body positioning during workouts.\n\n• Adjustable Platform: The bench platform is adjustable, allowing users to customize their workout experience.\n\n• Exercise Versatility: Bench press exercises on this trainer engage various muscle groups, including the chest, triceps, and shoulders.\n\n• Great Alternative to Gym Equipment: Perfect for outdoor workouts, serving as a functional replacement for heavy gym machines.\n\n• Muscle Strength Development: Regular workouts on this machine improve muscle strength, endurance, and overall physical health.\n\n\n\nThe SW612 "Incline Bench Press" Outdoor Wooden Trainer is a fantastic way to enhance your fitness and enjoy training in an outdoor environment.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Wyciskanie w górę w pozycji leżącej” SW612 to skuteczne narzędzie do treningu górnej partii ciała, w szczególności mięśni klatki piersiowej, barków i tricepsów. Trenażer umożliwia wykonywanie ćwiczeń wyciskania na leżąco, wzmacniając mięśnie i poprawiając ogólną kondycję fizyczną.\n\nGłówne cechy i zalety:\n\n• Materiały wysokiej jakości: Konstrukcja wykonana z mocnego i trwałego drewna, co gwarantuje długą żywotność sprzętu.\n\n• Ergonomiczny design: Trenażer zapewnia komfort i stabilność podczas ćwiczeń, umożliwiając prawidłowe ustawienie ciała.\n\n• Regulowana platforma: Możliwość dopasowania wysokości platformy do indywidualnych potrzeb użytkownika i jego kondycji fizycznej.\n\n• Wszechstronność ćwiczeń: Ćwiczenia na tym trenażerze angażują różne grupy mięśniowe – klatkę piersiową, tricepsy i barki.\n\n• Świetna alternatywa dla siłowni: Idealne rozwiązanie dla osób trenujących na świeżym powietrzu, zastępujące ciężkie maszyny siłowe.\n\n• Wzrost siły mięśniowej: Regularne treningi na tym urządzeniu poprawiają siłę, wytrzymałość i ogólną kondycję fizyczną.\n\n\n\nZewnętrzny drewniany trenażer „Wyciskanie w górę w pozycji leżącej” SW612 to doskonały sposób na poprawę formy fizycznej i cieszenie się treningiem na świeżym powietrzu.`,
        picturePath: '/images/_sw612.jpg'
    },
    {
        nameEN: `Outdoor Wooden Trainer "Seated Overhead Press"`,
        namePL: `Zewnętrzny drewniany trenażer „Wyciskanie w górę w pozycji siedzącej”`,
        id: '_sw613',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 153,
            width: 100,
            height: 184,
            weight: 189
        },
        descriptionEN: `The SW613 Outdoor Wooden "Seated Overhead Press" Trainer is a perfect way to strengthen the upper body while training outdoors. Made from high-quality wood, this trainer combines durability with a natural aesthetic.\n\nKey Features:\n\n• Material: Made from durable and long-lasting wood, resistant to weather conditions and wear.\n\n• Design: Compact and stylish, seamlessly fitting into urban or park environments.\n\n• Workout Benefits: Provides an effective upper-body workout, focusing on shoulders and triceps.\n\n• Safety Features: Anti-slip handles ensure a firm grip during exercises.\n\n• How to Use: Sit on the trainer with a straight back, grip the handles, and perform controlled overhead presses to engage shoulder muscles.\n\n\n\nBruStyle outdoor trainers offer innovative solutions for health and active living.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Wyciskanie w górę w pozycji siedzącej” SW613 to idealne rozwiązanie do treningu górnej partii ciała na świeżym powietrzu. Wykonany z wysokiej jakości drewna, łączy trwałość i naturalność materiału.\n\nGłówne cechy:\n\n• Materiał: Wykonany z wytrzymałego i trwałego drewna, odpornego na warunki atmosferyczne i zużycie.\n\n• Design: Kompaktowa i estetyczna konstrukcja, która doskonale wpasuje się w przestrzeń miejską lub parkową.\n\n• Trening: Skutecznie wzmacnia mięśnie górnej części ciała, w szczególności barki i tricepsy.\n\n• Bezpieczeństwo: Antypoślizgowe uchwyty zapewniają pewny chwyt podczas ćwiczeń.\n\n• Sposób użycia: Usiądź na trenażerze, utrzymując prostą postawę. Chwyć uchwyty i wykonuj kontrolowane ruchy wyciskania w górę, aby aktywować mięśnie ramion.\n\n\n\nZewnętrzne trenażery BruStyle to innowacyjne rozwiązania wspierające zdrowy i aktywny styl życia.`,
        picturePath: '/images/_sw613.jpg'
    },
    {
        nameEN: `Outdoor Wooden Trainer "Overhead Press"`,
        namePL: `Zewnętrzny drewniany trenażer „Wyciskanie w górę”`,
        id: '_sw614',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 152,
            width: 140,
            height: 218,
            weight: 220
        },
        descriptionEN: `The SW614 Outdoor Wooden "Overhead Press" Trainer is a specially designed machine for strengthening the upper body and improving muscle power. Made from wooden materials, it is intended for outdoor use.\n\nThe primary function of the "Overhead Press" trainer is to develop shoulder and arm muscles. Users can treat this trainer as an alternative to barbell overhead presses, effectively targeting the deltoid, trapezius, biceps, and triceps muscles.\n\nThe SW614 outdoor wooden trainer allows users to maintain and enhance their physical fitness, improving upper body strength and endurance. It is an ideal solution for outdoor workouts in parks, fitness areas, and other open spaces.\n\nThis trainer can be used for individual training sessions or group workouts, adding variety and efficiency to exercise routines, helping users achieve their fitness goals.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Wyciskanie w górę” SW614 to specjalnie zaprojektowane urządzenie do wzmacniania górnej partii ciała i poprawy siły mięśniowej. Wykonany z drewnianych materiałów, przeznaczony jest do użytku na świeżym powietrzu.\n\nPodstawową funkcją trenażera „Wyciskanie w górę” jest wzmacnianie mięśni obręczy barkowej oraz ramion. Użytkownik może traktować ten trenażer jako odpowiednik ćwiczenia wyciskania sztangi nad głowę, które angażuje mięśnie naramienne, czworoboczne, bicepsy i tricepsy.\n\nZewnętrzny drewniany trenażer SW614 pozwala użytkownikom utrzymywać i wzmacniać kondycję fizyczną, poprawiając siłę i wytrzymałość górnej części ciała. Jest idealnym rozwiązaniem do treningów w plenerze, w parkach, na siłowniach plenerowych oraz innych otwartych przestrzeniach.\n\nTrenażer nadaje się zarówno do treningów indywidualnych, jak i grupowych, dodając różnorodność i skuteczność ćwiczeń, co pomaga osiągnąć zamierzone cele sportowe.`,
        picturePath: '/images/_sw614.jpg'
    },
    {
        nameEN: `Outdoor Wooden Trainer "Standing Triceps Machine"`,
        namePL: `Zewnętrzny drewniany trenażer „Maszyna na triceps – stojąc”`,
        id: '_sw615',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 141,
            width: 107,
            height: 244,
            weight: 207
        },
        descriptionEN: `The SW615 Outdoor Wooden "Standing Triceps Machine" Trainer by BruStyle is the perfect solution for training triceps outdoors. This trainer is designed to provide an effective and safe way to strengthen the triceps while standing.\n\nKey Features & Benefits:\n\n• Premium Quality Materials – Constructed from durable wood and stainless steel, ensuring longevity and resistance to weather conditions.\n\n• Effective Triceps Training – Designed for maximum triceps activation, allowing users to perform standing exercises efficiently.\n\n• Safety & Stability – Ergonomic handles ensure a firm grip and proper posture, reducing the risk of injuries.\n\n• Aesthetic & Eco-Friendly – Wooden construction blends seamlessly into outdoor spaces, offering a natural look.\n\n• Optimal Height – Ensures a full range of motion, maximizing training effectiveness.\n\n• Easy Installation – Simple setup makes it ideal for outdoor gyms, parks, and sports facilities.\n\n\n\nThe SW615 Outdoor Wooden "Standing Triceps Machine" Trainer by BruStyle offers an innovative and engaging way to train triceps outdoors, enhancing strength and endurance.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Maszyna na triceps – stojąc” SW615 firmy BruStyle to idealny sposób na trening tricepsów na świeżym powietrzu. Trenażer został zaprojektowany tak, aby zapewnić efektywne i bezpieczne ćwiczenia mięśni trójgłowych ramienia w pozycji stojącej.\n\nGłówne cechy i zalety:\n\n• Wysokiej jakości materiały – Wykonany z wytrzymałego drewna oraz stali nierdzewnej, co zapewnia trwałość i odporność na warunki atmosferyczne.\n\n• Skuteczny trening – Konstrukcja trenażera umożliwia optymalne zaangażowanie tricepsów podczas ćwiczeń na stojąco.\n\n• Bezpieczeństwo – Ergonomiczne uchwyty gwarantują stabilność i prawidłową postawę, minimalizując ryzyko urazów.\n\n• Estetyka i ekologia – Drewniana konstrukcja doskonale wpisuje się w otoczenie, nadając mu naturalny wygląd.\n\n• Optymalna wysokość – Zaprojektowany tak, aby użytkownik mógł wykonywać ruchy w pełnym zakresie, maksymalizując efektywność ćwiczeń.\n\n• Łatwy montaż – Prosta instalacja sprawia, że trenażer świetnie nadaje się do siłowni plenerowych, parków i obiektów sportowych.\n\n\n\nZewnętrzny drewniany trenażer „Maszyna na triceps – stojąc” SW615 to innowacyjny sposób na wydajne i przyjemne treningi na świeżym powietrzu, poprawiające siłę i kondycję mięśni ramion.`,
        picturePath: '/images/_sw615.jpg'
    },
    {
        nameEN: `Outdoor Wooden Trainer "Standing Leg Curl"`,
        namePL: `Zewnętrzny drewniany trenażer „Zginanie nóg stojąc”`,
        id: '_sw619',
        categoryID: '_sz',
        subcategoryID: '_sw',
        properties: {
            length: 140,
            width: 115,
            height: 194,
            weight: 216
        },
        descriptionEN: `The SW619 Outdoor Wooden "Standing Leg Curl" Trainer is a highly effective tool for strengthening the lower body, particularly the thigh and glute muscles. Made from durable wooden materials, this trainer allows users to perform standing leg curls, improving strength and stability in the lower limbs.\n\nKey Features:\n\n• Sturdy Construction – Solid wooden build ensures stability and durability during exercises.\n\n• Ergonomic Design – Comfortable handles and a foot platform provide a smooth workout experience.\n\n• Training Efficiency – Helps develop thigh, glute, and quadriceps muscles.\n\n• Safety First – Professionally designed to minimize injury risks and enhance workout security.\n\n\n\nThe SW619 by BruStyle is an excellent choice for those looking to strengthen their leg muscles, improve balance, and increase lower-body endurance.`,
        descriptionPL: `Zewnętrzny drewniany trenażer „Zginanie nóg stojąc” SW619 to skuteczne urządzenie do wzmacniania dolnych partii ciała, szczególnie mięśni ud i pośladków. Wykonany z wytrzymałego drewna, trenażer umożliwia wykonywanie ćwiczeń polegających na zginaniu nóg w pozycji stojącej, co zwiększa siłę i stabilność dolnych kończyn.\n\nGłówne cechy:\n\n• Wytrzymała konstrukcja – Solidne drewniane wykonanie zapewnia stabilność i trwałość podczas ćwiczeń.\n\n• Ergonomiczny design – Wygodne uchwyty i platforma na nogi umożliwiają komfortowe wykonywanie ruchów.\n\n• Skuteczność – Ćwiczenia na tym trenażerze wspomagają rozwój mięśni ud, pośladków i czworogłowych.\n\n• Bezpieczeństwo – Profesjonalnie zaprojektowana konstrukcja minimalizuje ryzyko kontuzji.\n\n\n\nSW619 od BruStyle to idealny wybór dla osób, które chcą wzmocnić mięśnie nóg, poprawić stabilność i zwiększyć siłę dolnych kończyn.`,
        picturePath: '/images/_sw619.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Standing Chest Press"`,
        namePL: `Zewnętrzny trenażer „Wyciskanie na klatkę piersiową w pozycji stojącej”`,
        id: '_sg601',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 159,
            width: 132,
            height: 217,
            weight: 220
        },
        descriptionEN: `The SG601 Outdoor "Standing Chest Press" Trainer is the perfect solution for strengthening the chest, shoulder, and triceps muscles. Its ergonomic design allows for comfortable pressing movements in a standing position, reducing strain on the back. Designed for installation in sports grounds, parks, and residential areas, it provides access to high-quality outdoor training. The sturdy construction with an anti-corrosion coating ensures long-lasting durability even in harsh weather conditions. The SG601 trainer promotes an active lifestyle and enhances physical fitness.`,
        descriptionPL: `Zewnętrzny trenażer „Wyciskanie na klatkę piersiową w pozycji stojącej” SG601 to idealne rozwiązanie do wzmacniania mięśni klatki piersiowej, ramion i tricepsów. Dzięki ergonomicznej konstrukcji urządzenie umożliwia wykonywanie ruchów wyciskania w komfortowej pozycji stojącej, minimalizując obciążenie pleców. Jest przeznaczony do instalacji na placach sportowych, w parkach i na osiedlach, oferując dostęp do efektywnych treningów na świeżym powietrzu. Solidna konstrukcja z powłoką antykorozyjną zapewnia trwałość nawet w trudnych warunkach atmosferycznych. Trenażer SG601 wspiera aktywny tryb życia i poprawę kondycji fizycznej.`,
        picturePath: '/images/_sg601.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Standing Butterfly"`,
        namePL: `Zewnętrzny trenażer „Butterfly w pozycji stojącej”`,
        id: '_sg602',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 152,
            width: 138,
            height: 214,
            weight: 230
        },
        descriptionEN: `The SG602 Outdoor "Standing Butterfly" Trainer allows for effective chest, shoulder, and arm training with its specially designed structure for butterfly-type exercises. The trainer provides a comfortable body position and optimal load for safe and effective workouts. It is ideal for installation in sports grounds and parks, with a sturdy anti-corrosion coated construction ensuring long-lasting durability. The SG602 trainer promotes strength and endurance development in an outdoor setting, making it accessible for anyone looking to maintain physical fitness.`,
        descriptionPL: `Zewnętrzny trenażer „Butterfly w pozycji stojącej” SG602 pozwala na efektywne trenowanie mięśni klatki piersiowej, ramion i rąk dzięki specjalnie zaprojektowanej konstrukcji do ćwiczeń typu „butterfly”. Urządzenie zapewnia komfortową pozycję ciała i optymalne obciążenie, co gwarantuje bezpieczny i skuteczny trening. Jest idealne do instalacji na placach sportowych i w parkach, a jego solidna konstrukcja z powłoką antykorozyjną zapewnia długą żywotność. Trenażer SG602 wspiera rozwój siły i wytrzymałości na świeżym powietrzu, oferując dostęp do aktywności fizycznej dla każdego.`,
        picturePath: '/images/_sg602.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Standing Rear Delt"`,
        namePL: `Zewnętrzny trenażer „Tylne delty w pozycji stojącej”`,
        id: '_sg603',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 156,
            width: 119,
            height: 214,
            weight: 230
        },
        descriptionEN: `The SG603 Outdoor "Standing Rear Delt" Trainer effectively targets the rear shoulder muscles and upper back. Designed for exercises that strengthen the deltoid muscles, this trainer allows for comfortable movements with a natural range of motion. The SG603 model is made from high-quality materials with an anti-corrosion coating, ensuring durability in outdoor sports environments. It is an ideal choice for individuals looking to maintain their fitness and develop back strength while training outdoors.`,
        descriptionPL: `Zewnętrzny trenażer „Tylne delty w pozycji stojącej” SG603 skutecznie angażuje mięśnie tylnej części ramion i górnej partii pleców. Zaprojektowany do ćwiczeń wzmacniających mięśnie naramienne, trenażer zapewnia komfortowe wykonywanie ruchów w naturalnym zakresie. Model SG603 został wykonany z wysokiej jakości materiałów i posiada powłokę antykorozyjną, co gwarantuje jego trwałość na otwartych przestrzeniach sportowych. To idealny wybór dla osób, które chcą dbać o kondycję fizyczną i wzmacniać mięśnie pleców na świeżym powietrzu.`,
        picturePath: '/images/_sg603.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Lever Row"`,
        namePL: `Zewnętrzny trenażer „Dźwigniowe przyciąganie”`,
        id: '_sg604',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 154,
            width: 103,
            height: 207,
            weight: 195
        },
        descriptionEN: `The SG604 "Lever Row" outdoor trainer is perfect for strengthening the back, shoulders, and arms. With its lever-based training system, users can safely control the load during exercises. Its durable metal construction ensures longevity and resistance to weather conditions. The trainer easily integrates into outdoor sports areas or parks. Suitable for users of all fitness levels.`,
        descriptionPL: `Zewnętrzny trenażer „Dźwigniowe przyciąganie” SG604 jest idealnym rozwiązaniem do wzmacniania mięśni pleców, ramion i barków. Dzięki systemowi dźwigni użytkownicy mogą bezpiecznie kontrolować obciążenie podczas ćwiczeń. Solidna metalowa konstrukcja zapewnia trwałość i odporność na warunki atmosferyczne. Trenażer doskonale komponuje się z otwartymi przestrzeniami sportowymi i parkami. Odpowiedni dla osób na każdym poziomie sprawności fizycznej.`,
        picturePath: '/images/_sg604.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Lat Pulldown"`,
        namePL: `Zewnętrzny trenażer „Ściąganie z góry”`,
        id: '_sg605',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 179,
            width: 122,
            height: 238,
            weight: 210
        },
        descriptionEN: `The SG605 "Lat Pulldown" outdoor trainer helps strengthen the back, shoulders, and arms. Thanks to its ergonomic design and lever system, this trainer ensures a comfortable and safe workout for users of all fitness levels. Its sturdy construction with an anti-corrosion coating makes it resistant to all weather conditions. It is ideal for installation in outdoor gyms, parks, or open training areas. The SG605 "Lat Pulldown" trainer is perfect for active recreation and maintaining physical fitness.`,
        descriptionPL: `Zewnętrzny trenażer „Ściąganie z góry” SG605 pomaga wzmocnić mięśnie pleców, ramion i rąk. Dzięki ergonomicznemu designowi i systemowi dźwigni, trenażer zapewnia komfortowy i bezpieczny trening dla użytkowników na każdym poziomie zaawansowania. Solidna konstrukcja z powłoką antykorozyjną sprawia, że jest odporny na różne warunki atmosferyczne. Idealnie nadaje się do montażu na siłowniach plenerowych, w parkach oraz na otwartych strefach treningowych. Trenażer „Ściąganie z góry” SG605 doskonale sprawdza się w aktywnym wypoczynku i utrzymaniu dobrej kondycji fizycznej.`,
        picturePath: '/images/_sg605.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Biceps Machine"`,
        namePL: `Zewnętrzny trenażer „Maszyna na biceps”`,
        id: '_sg606',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 170,
            width: 135,
            height: 210,
            weight: 224
        },
        descriptionEN: `The SG606 "Biceps Machine" outdoor trainer is an effective tool for strengthening arm muscles, particularly the biceps. With adjustable weights, it is suitable for users of different fitness levels, allowing for gradual increases in resistance. High-quality materials and a sturdy construction ensure safety and durability in outdoor training areas. The "Biceps Machine" is ideal for fitness zones in parks, residential areas, or sports complexes. It is an excellent choice for those looking to build muscle and improve their physical fitness.`,
        descriptionPL: `Zewnętrzny trenażer „Maszyna na biceps” SG606 to skuteczne urządzenie do treningu mięśni rąk, zwłaszcza bicepsów. Dzięki regulowanemu obciążeniu nadaje się dla użytkowników o różnym poziomie zaawansowania, umożliwiając stopniowe zwiększanie intensywności ćwiczeń. Wysokiej jakości materiały oraz stabilna konstrukcja gwarantują bezpieczeństwo i trwałość urządzenia w warunkach plenerowych. „Maszyna na biceps” doskonale sprawdzi się na strefach fitness w parkach, na osiedlach lub w kompleksach sportowych. To świetny wybór dla osób pragnących wzmocnić mięśnie i poprawić swoją kondycję fizyczną.`,
        picturePath: '/images/_sg606.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Triceps Machine"`,
        namePL: `Zewnętrzny trenażer „Maszyna na triceps”`,
        id: '_sg607',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 152,
            width: 131,
            height: 204,
            weight: 220
        },
        descriptionEN: `The SG607 "Triceps Machine" outdoor trainer is designed for intensive triceps workouts and improving overall arm strength. With adjustable weight resistance, users can gradually increase the load to achieve their desired results. A durable metal frame and high-quality materials ensure the trainer’s longevity, even with frequent outdoor use. This trainer is an excellent addition to sports zones in parks, stadiums, or residential areas.`,
        descriptionPL: `Zewnętrzny trenażer „Maszyna na triceps” SG607 został zaprojektowany do intensywnego treningu tricepsów i zwiększenia ogólnej siły ramion. Dzięki regulowanemu obciążeniu użytkownicy mogą stopniowo zwiększać intensywność ćwiczeń, aby osiągnąć zamierzone rezultaty. Solidna metalowa konstrukcja i wytrzymałe materiały zapewniają długą żywotność urządzenia, nawet przy częstym użytkowaniu na świeżym powietrzu. Ten trenażer jest idealnym rozwiązaniem do wyposażenia stref sportowych w parkach, na stadionach lub na osiedlach mieszkalnych.`,
        picturePath: '/images/_sg607.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Deadlift"`,
        namePL: `Zewnętrzny trenażer „Martwy ciąg”`,
        id: '_sg608',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 188,
            width: 107,
            height: 181,
            weight: 211
        },
        descriptionEN: `The SG608 "Deadlift" outdoor trainer is ideal for effective back, leg, and glute muscle training. Its robust construction allows for heavy-weight exercises, making it a reliable choice for outdoor fitness areas. Adjustable weight blocks let users customize the load to match their fitness level. With weather-resistant materials, this trainer is perfect for long-term outdoor use. The SG608 "Deadlift" is an essential component for comprehensive strength training.`,
        descriptionPL: `Zewnętrzny trenażer „Martwy ciąg” SG608 to idealne rozwiązanie do skutecznego treningu mięśni pleców, nóg i pośladków. Solidna konstrukcja pozwala na wykonywanie ćwiczeń z dużym obciążeniem, co czyni go niezawodnym wyborem na otwarte siłownie. Regulowane bloki obciążeniowe umożliwiają dostosowanie intensywności treningu do poziomu zaawansowania użytkownika. Dzięki odporności na warunki atmosferyczne trenażer SG608 jest doskonałym rozwiązaniem do długotrwałego użytkowania na świeżym powietrzu. To niezastąpiony element kompleksowego treningu siłowego.`,
        picturePath: '/images/_sg608.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Squats-Calves"`,
        namePL: `Zewnętrzny trenażer „Przysiady-łydki”`,
        id: '_sg609',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 173,
            width: 145,
            height: 217,
            weight: 243
        },
        descriptionEN: `The SG609 "Squats-Calves" outdoor trainer is designed for effective leg and calf muscle training. Its structure ensures comfortable and safe execution of squats with additional resistance. With adjustable weight blocks, users can adapt the workout intensity to their fitness level. The weather-resistant design makes this trainer perfect for outdoor fitness areas. SG609 is a reliable choice for strengthening the lower body in open-air environments.`,
        descriptionPL: `Zewnętrzny trenażer „Przysiady-łydki” SG609 jest przeznaczony do efektywnego treningu mięśni nóg i łydek. Jego konstrukcja zapewnia wygodne i bezpieczne wykonywanie przysiadów z dodatkowym obciążeniem. Dzięki regulowanym blokom wagowym użytkownicy mogą dostosować intensywność ćwiczeń do swojego poziomu sprawności fizycznej. Odporność na warunki atmosferyczne sprawia, że ten trenażer jest idealnym wyborem na otwarte siłownie. SG609 to solidny sprzęt do wzmacniania dolnej części ciała na świeżym powietrzu.`,
        picturePath: '/images/_sg609.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Standing Ab Machine"`,
        namePL: `Zewnętrzny trenażer „Maszyna do ćwiczeń brzucha w pozycji stojącej”`,
        id: '_sg610',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 152,
            width: 124,
            height: 204,
            weight: 207
        },
        descriptionEN: `The SG610 "Standing Ab Machine" outdoor trainer is an effective solution for abdominal muscle training in open-air environments. Thanks to its thoughtful design, it allows movements that activate the front abdominal muscles and obliques. The machine is suitable for users of different fitness levels, with an adjustable resistance feature. Made of durable materials, this trainer is resistant to atmospheric conditions and designed for long-term outdoor use in any weather. It is an ideal choice for public sports zones and workout areas.`,
        descriptionPL: `Zewnętrzny trenażer „Maszyna do ćwiczeń brzucha w pozycji stojącej” SG610 to skuteczne rozwiązanie do treningu mięśni brzucha na świeżym powietrzu. Dzięki przemyślanej konstrukcji umożliwia wykonywanie ruchów aktywujących przednie mięśnie brzucha oraz skośne mięśnie brzucha. Urządzenie jest dostosowane do użytkowników o różnym poziomie sprawności fizycznej i posiada możliwość regulacji obciążenia. Wykonane z wytrzymałych materiałów, jest odporne na warunki atmosferyczne i przeznaczone do długotrwałego użytkowania w każdych warunkach pogodowych. Idealne do instalacji w publicznych strefach sportowych i na placach do street workoutu.`,
        picturePath: '/images/_sg610.jpg'
    },
    {
        nameEN: `Dumbbell Set: 2*20 kg | 2*25 kg | 2*30 kg`,
        namePL: `Zestaw hantli: 2*20 kg | 2*25 kg | 2*30 kg`,
        id: '_sg611',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 261,
            width: 211,
            height: 115,
            weight: 326
        },
        descriptionEN: `The SG611 dumbbell set (2*20 kg | 2*25 kg | 2*30 kg) is a compact sports accessory that does not take up much space. Dumbbells are an essential part of any gym, as they are used in various exercises. This premium-quality set is suitable for outdoor training areas. The weight progression in this set is 5 kg.\n\nSpecifications:\n\n• Material: steel\n\n• Bar type: straight\n\n• Dumbbell weights: 2×20 kg, 2×25 kg, 2×30 kg\n\n• Set includes: 3 pairs of dumbbells with different weights`,
        descriptionPL: `Zestaw hantli 2*20 kg | 2*25 kg | 2*30 kg SG611 to sprzęt sportowy, który nie zajmuje dużo miejsca. Hantle są nieodzownym elementem każdej siłowni, ponieważ wykorzystywane są w wielu ćwiczeniach. Ten zestaw premium jest idealny do użytku na otwartych przestrzeniach. Skok ciężaru w tym zestawie wynosi 5 kg.\n\nCharakterystyka:\n\n• Materiał: stal\n\n• Typ gryfu: prosty\n\n• Waga hantli: 2×20 kg, 2×25 kg, 2×30 kg\n\n• Zestaw zawiera: 3 pary hantli o różnej wadze`,
        picturePath: '/images/_sg611.jpg'
    },
    {
        nameEN: `Dumbbell Set: 2*10 kg | 2*14 kg | 2*18 kg`,
        namePL: `Zestaw hantli: 2*10 kg | 2*14 kg | 2*18 kg`,
        id: '_sg611.2',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 261,
            width: 211,
            height: 115,
            weight: 208
        },
        descriptionEN: `The SG611.2 dumbbell set (2*10 kg | 2*14 kg | 2*18 kg) is designed for outdoor sports areas. Dumbbells are compact fitness equipment that can be used in various exercises. They allow for easy weight adjustments, making training more effective. The weight progression in this set is 4 kg.\n\nSpecifications:\n\n• Material: steel\n\n• Bar type: straight\n\n• Dumbbell weights: 2×10 kg, 2×14 kg, 2×18 kg\n\n• Set includes: 3 pairs of dumbbells with different weights`,
        descriptionPL: `Zestaw hantli 2*10 kg | 2*14 kg | 2*18 kg SG611.2 jest przeznaczony do użytku na otwartych przestrzeniach sportowych. Hantle to sprzęt sportowy, który nie zajmuje dużo miejsca i może być wykorzystywany w różnych ćwiczeniach. Dzięki nim łatwo dostosować intensywność treningu, co pozwala osiągnąć lepsze rezultaty. Skok ciężaru w tym zestawie wynosi 4 kg.\n\nCharakterystyka:\n\n• Materiał: stal\n\n• Typ gryfu: prosty\n\n• Waga hantli: 2×10 kg, 2×14 kg, 2×18 kg\n\n• Zestaw zawiera: 3 pary hantli o różnej wadze`,
        picturePath: '/images/_sg611.2.jpg'
    },
    {
        nameEN: `Outdoor Trainer “Incline Bench Press”`,
        namePL: `Zewnętrzny trener „Wyciskanie w górę w pozycji leżącej”`,
        id: '_sg612',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 202,
            width: 109,
            height: 152,
            weight: 181
        },
        descriptionEN: `The SG612 outdoor incline bench press trainer is designed for effective upper-body muscle training. Its seat with anti-vandal coating and weather-resistant construction makes it an ideal choice for outdoor use. The lever mechanism ensures smooth motion and allows for adjustable resistance to match the user’s individual needs. Easy operation and reliability make it a popular choice for users of all ages. This trainer is perfect for public fitness areas and active recreation zones.`,
        descriptionPL: `Zewnętrzny trener „Wyciskanie w górę w pozycji leżącej” SG612 został zaprojektowany do efektywnego treningu mięśni górnej części ciała. Siedzisko z powłoką antywandalową oraz konstrukcja odporna na warunki atmosferyczne czynią ten sprzęt idealnym wyborem do użytkowania na świeżym powietrzu. Mechanizm z dźwigniami zapewnia płynność ruchów oraz możliwość dostosowania obciążenia do indywidualnych potrzeb użytkownika. Łatwość użytkowania i niezawodność sprawiają, że jest to popularny wybór wśród osób w różnym wieku. Trener jest idealny do publicznych siłowni plenerowych i stref aktywnego wypoczynku.`,
        picturePath: '/images/_sg612.jpg'
    },
    {
        nameEN: `Outdoor Trainer “Seated Incline Press”`,
        namePL: `Zewnętrzny trener „Wyciskanie pod kątem w górę w pozycji siedzącej”`,
        id: '_sg613',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 160,
            width: 103,
            height: 194,
            weight: 200
        },
        descriptionEN: `The SG613 outdoor seated incline press trainer is an effective piece of equipment for upper chest muscle training. Its specially designed structure allows for incline pressing, ensuring optimal range of motion and activating the necessary muscle groups. The trainer is made from high-quality, weather-resistant materials, making it ideal for outdoor use. Its intuitive design and comfortable handles provide a safe and enjoyable training experience. This trainer is a perfect choice for both professionals and beginners looking to train in an open-air environment.`,
        descriptionPL: `Zewnętrzny trener „Wyciskanie pod kątem w górę w pozycji siedzącej” SG613 to skuteczne urządzenie do treningu górnej partii mięśni klatki piersiowej. Specjalnie zaprojektowana konstrukcja pozwala na wyciskanie pod kątem, zapewniając optymalną amplitudę ruchu i aktywując odpowiednie grupy mięśniowe. Trener wykonany jest z wysokiej jakości materiałów odpornych na warunki atmosferyczne, co sprawia, że idealnie nadaje się do użytku na otwartych siłowniach. Intuicyjna budowa i wygodne uchwyty gwarantują komfort oraz bezpieczeństwo podczas ćwiczeń. To doskonały wybór do treningu na świeżym powietrzu zarówno dla profesjonalistów, jak i początkujących.`,
        picturePath: '/images/_sg613.jpg'
    },
    {
        nameEN: `Outdoor Trainer “Standing Overhead Press”`,
        namePL: `Zewnętrzny trener „Wyciskanie w górę w pozycji stojącej”`,
        id: '_sg614',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 135,
            width: 129,
            height: 220,
            weight: 219
        },
        descriptionEN: `The SG614 outdoor standing overhead press trainer is designed for effective shoulder and triceps training. Its ergonomic construction ensures proper pressing technique, reducing the risk of injury. The lever mechanism allows for controlled resistance, making it accessible to users of different fitness levels. A durable, corrosion-resistant design guarantees long-term use in outdoor environments. This trainer is ideal for sports fields and recreational areas.`,
        descriptionPL: `Zewnętrzny trener „Wyciskanie w górę w pozycji stojącej” SG614 pozwala na efektywny trening mięśni barków i tricepsów. Dzięki ergonomicznej konstrukcji zapewnia prawidłową technikę wykonywania wyciskania, co minimalizuje ryzyko kontuzji. Mechanizm dźwigni umożliwia kontrolowanie obciążenia, dzięki czemu jest odpowiedni dla użytkowników o różnym poziomie zaawansowania. Solidna konstrukcja z powłoką antykorozyjną gwarantuje długowieczność w warunkach zewnętrznych. Idealnie nadaje się na siłownie plenerowe oraz strefy rekreacyjne.`,
        picturePath: '/images/_sg614.jpg'
    },
    {
        nameEN: `Outdoor Trainer “Vertical Triceps Pull in Standing Position”`,
        namePL: `Zewnętrzny trener „Pionowe ściąganie na triceps w pozycji stojącej”`,
        id: '_sg615',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 152,
            width: 107,
            height: 230,
            weight: 190
        },
        descriptionEN: `The SG615 outdoor vertical triceps pull trainer is perfect for strengthening the triceps and upper body. Its design allows users to perform exercises with high efficiency, using their body weight or additional resistance. A sturdy steel frame ensures stability and durability, even during intense workouts. With an intuitive construction, this trainer is suitable for both beginners and experienced athletes.`,
        descriptionPL: `Zewnętrzny trener „Pionowe ściąganie na triceps w pozycji stojącej” SG615 jest idealnym rozwiązaniem do wzmacniania tricepsów i górnej części ciała. Jego konstrukcja umożliwia użytkownikom wykonywanie ćwiczeń z wysoką efektywnością, wykorzystując własną wagę ciała lub dodatkowe obciążenia. Solidna stalowa rama zapewnia stabilność i trwałość nawet podczas intensywnych treningów. Dzięki intuicyjnej konstrukcji sprzęt jest odpowiedni zarówno dla początkujących, jak i zaawansowanych użytkowników.`,
        picturePath: '/images/_sg615.jpg'
    },
    {
        nameEN: `Outdoor Trainer “Lat Pulldown”`,
        namePL: `Zewnętrzny trener „Ściąganie z góry”`,
        id: '_sg605.90',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 179,
            width: 164,
            height: 248,
            weight: 252
        },
        descriptionEN: `The SG605.90 outdoor lat pulldown trainer comes with a 90 kg load. It is an outdoor fitness equipment designed for open-air workout areas. Training on this machine helps develop upper body muscles, including the back, chest, and shoulder girdle. Additionally, it allows users to sculpt their torso and achieve a more defined physique.`,
        descriptionPL: `Zewnętrzny trener „Ściąganie z góry” SG605.90 – sprzęt posiada obciążenie 90 kg. Jest to zewnętrzny sprzęt sportowy przeznaczony do siłowni plenerowych. Trening na tym urządzeniu pomaga rozwijać mięśnie górnej partii ciała, w tym pleców, klatki piersiowej i obręczy barkowej. Ponadto umożliwia wyrzeźbienie sylwetki i nadanie jej sportowego wyglądu.`,
        picturePath: '/images/_sg605.90.jpg'
    },
    {
        nameEN: `Multifunctional Trainer`,
        namePL: `Wielofunkcyjny Trener`,
        id: '_sg627',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 129,
            width: 127,
            height: 160,
            weight: 201
        },
        descriptionEN: `The SG627 multifunctional trainer is a premium-class outdoor training device designed to enhance various aspects of physical fitness and provide comprehensive open-air workouts.\n\nThis outdoor trainer offers a variety of functional capabilities, allowing users to perform exercises that strengthen muscles, improve endurance, and enhance coordination. Key elements may include a pull-up bar, parallel bars for abdominal exercises, monkey bars for stretching, squat platforms, and more.\n\nThe multifunctional trainer enables users to engage in diverse exercises that promote the development of back, arm, leg, and other muscle groups. It is an excellent option for those looking for an effective way to train outdoors and maintain top physical condition.\n\nDesigned for outdoor use in parks, fitness areas, and open spaces, this trainer adds variety to workouts, helping individuals achieve their fitness goals while maintaining a healthy lifestyle.`,
        descriptionPL: `Wielofunkcyjny trener SG627 to zewnętrzny sprzęt klasy premium, zaprojektowany do rozwijania różnych aspektów sprawności fizycznej i zapewnienia kompleksowych treningów na świeżym powietrzu.\n\nTen zewnętrzny trener oferuje szeroką gamę funkcjonalnych możliwości, umożliwiając wykonywanie różnych ćwiczeń wzmacniających mięśnie, poprawiających wytrzymałość i koordynację ruchową. Wśród głównych elementów mogą znaleźć się drążek do podciągania, poręcze do ćwiczeń na mięśnie brzucha, drabinki do rozciągania, platformy do przysiadów i inne.\n\nWielofunkcyjny trener pozwala użytkownikom na różnorodne ćwiczenia, które wspomagają rozwój mięśni pleców, ramion, nóg i innych grup mięśniowych. Jest to idealne rozwiązanie dla osób poszukujących efektywnego sposobu na trening na świeżym powietrzu i utrzymanie doskonałej kondycji fizycznej.\n\nSprzęt jest przeznaczony do użytku na zewnątrz – w parkach, na siłowniach plenerowych i innych otwartych przestrzeniach. Dodaje różnorodności do treningów, pomagając osiągać pożądane rezultaty i wspierać zdrowy styl życia.`,
        picturePath: '/images/_sg627.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Leg Extension Standing"`,
        namePL: `Zewnętrzny Trenażer "Prostowanie Nogi w Pozycji Stojącej"`,
        id: '_sg620',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 160,
            width: 135,
            height: 205,
            weight: 209
        },
        descriptionEN: `The SG620 outdoor trainer "Leg Extension Standing" is designed to target the gluteus maximus muscle. Key advantages of this model include efficiency, ease of use, safety, and reliability. Made from high-quality materials, this trainer ensures durability and resistance to outdoor conditions.`,
        descriptionPL: `Zewnętrzny trenażer "Prostowanie Nogi w Pozycji Stojącej" SG620 jest przeznaczony do treningu mięśnia pośladkowego wielkiego. Do głównych zalet tego modelu należą: skuteczność, wygoda użytkowania, bezpieczeństwo oraz niezawodność. Trenażer wykonany jest z wysokiej jakości materiałów, co zapewnia jego trwałość i odporność na warunki atmosferyczne.`,
        picturePath: '/images/_sg620.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Leg Curl Standing"`,
        namePL: `Zewnętrzny Trenażer "Zginanie Nogi w Pozycji Stojącej"`,
        id: '_sg619',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 165,
            width: 165,
            height: 214,
            weight: 288
        },
        descriptionEN: `The SG619 outdoor trainer "Leg Curl Standing" is designed to target the gluteus maximus muscle. Key advantages of this model include efficiency, ease of use, safety, and reliability. Made from high-quality materials, this trainer ensures durability and resistance to outdoor conditions.`,
        descriptionPL: `Zewnętrzny trenażer "Zginanie Nogi w Pozycji Stojącej" SG619 jest przeznaczony do treningu mięśnia pośladkowego wielkiego. Do głównych zalet tego modelu należą: skuteczność, wygoda użytkowania, bezpieczeństwo oraz niezawodność. Trenażer wykonany jest z wysokiej jakości materiałów, co zapewnia jego trwałość i odporność na warunki atmosferyczne.`,
        picturePath: '/images/_sg619.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Hip Abduction Standing"`,
        namePL: `Zewnętrzny Trenażer "Odwodzenie Uda w Pozycji Stojącej"`,
        id: '_sg618',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The SG618 outdoor trainer "Hip Abduction Standing" is designed to target the gluteus maximus muscle. Key advantages of this model include efficiency, ease of use, safety, and reliability. Made from high-quality materials, this trainer ensures durability and resistance to outdoor conditions.`,
        descriptionPL: `Zewnętrzny trenażer "Odwodzenie Uda w Pozycji Stojącej" SG618 jest przeznaczony do treningu mięśnia pośladkowego wielkiego. Do głównych zalet tego modelu należą: skuteczność, wygoda użytkowania, bezpieczeństwo oraz niezawodność. Trenażer wykonany jest z wysokiej jakości materiałów, co zapewnia jego trwałość i odporność na warunki atmosferyczne.`,
        picturePath: '/images/_sg618.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Leg Adduction Standing"`,
        namePL: `Zewnętrzny Trenażer "Przywodzenie Nóg w Pozycji Stojącej"`,
        id: '_sg617',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The SG617 outdoor trainer "Leg Adduction Standing" is designed to target the thigh muscles. Key advantages of this model include efficiency, ease of use, safety, and reliability. Made from high-quality materials, this trainer ensures durability and resistance to outdoor conditions.`,
        descriptionPL: `Zewnętrzny trenażer "Przywodzenie Nóg w Pozycji Stojącej" SG617 jest przeznaczony do treningu mięśni ud. Do głównych zalet tego modelu należą: skuteczność, wygoda użytkowania, bezpieczeństwo oraz niezawodność. Trenażer wykonany jest z wysokiej jakości materiałów, co zapewnia jego trwałość i odporność na warunki atmosferyczne.`,
        picturePath: '/images/_sg617.jpg'
    },
    {
        nameEN: `Outdoor Trainer "Leg Abduction Standing"`,
        namePL: `Zewnętrzny Trenażer "Odwodzenie Nóg w Pozycji Stojącej"`,
        id: '_sg616',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The SG616 outdoor trainer "Leg Abduction Standing" is designed to target the middle and small gluteal muscles. Key advantages of this model include efficiency, ease of use, safety, and reliability. Made from high-quality materials, this trainer ensures durability and resistance to outdoor conditions.`,
        descriptionPL: `Zewnętrzny trenażer "Odwodzenie Nóg w Pozycji Stojącej" SG616 jest przeznaczony do treningu mięśni pośladkowych średnich i małych. Do głównych zalet tego modelu należą: skuteczność, wygoda użytkowania, bezpieczeństwo oraz niezawodność. Trenażer wykonany jest z wysokiej jakości materiałów, co zapewnia jego trwałość i odporność na warunki atmosferyczne.`,
        picturePath: '/images/_sg616.jpg'
    },
    {
        nameEN: `Outdoor Gymnastic Element "Parallel Bars"`,
        namePL: `Gimnastyczny Element Zewnętrzny "Poręcze"`,
        id: '_sg651',
        categoryID: '_sz',
        subcategoryID: '_sg',
        properties: {
            length: 134,
            width: 85,
            height: 133,
            weight: 41
        },
        descriptionEN: `The outdoor gymnastic element "Parallel Bars" SG651 is perfect for training upper body muscles, including the chest, arms, and back. Its simple design makes it suitable for both beginners and experienced athletes, allowing for a variety of strength and support exercises. Made of high-quality steel, it ensures stability and durability under all weather conditions. The element is installed permanently, making it an excellent choice for sports grounds, parks, and recreational areas. The SG651 parallel bars meet safety and reliability requirements for regular use.s`,
        descriptionPL: `Zewnętrzny gimnastyczny element "Poręcze" SG651 jest idealny do treningu mięśni górnej części ciała, w tym klatki piersiowej, ramion i pleców. Dzięki prostej konstrukcji nadaje się zarówno dla początkujących, jak i zaawansowanych sportowców, umożliwiając wykonywanie różnych ćwiczeń wzmacniających i rozwijających siłę. Wykonany z wysokiej jakości stali, zapewnia stabilność i trwałość w każdych warunkach pogodowych. Element jest montowany stacjonarnie, co czyni go doskonałym wyborem dla placów treningowych, parków i stref rekreacyjnych. Poręcze SG651 spełniają wymagania dotyczące bezpieczeństwa i niezawodności przy regularnym użytkowaniu.`,
        picturePath: '/images/_sg651.jpg'
    },
    {
        nameEN: `Upper Pulley Handle for Behind-the-Head Pulls`,
        namePL: `Uchwyt do ściągania górnego bloku za głowę`,
        id: '_kzs403',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 122,
            width: 0,
            height: 0,
            weight: 2
        },
        descriptionEN: `The upper pulley handle for behind-the-head pulls is used during workouts at the gym or at home, allowing for exercises such as reverse grip or chest-level pulldowns on a cable machine. These exercises effectively target and develop the latissimus dorsi, trapezius, and deltoid muscles, enhancing strength and muscle definition.`,
        descriptionPL: `Uchwyt do ściągania górnego bloku za głowę jest wykorzystywany podczas treningów na siłowni lub w warunkach domowych, umożliwiając wykonywanie ćwiczeń polegających na ściąganiu uchwytu nachwytem lub podchwytem do klatki piersiowej na wyciągu bloczkowym. Ćwiczenia te angażują mięśnie najszersze grzbietu, czworoboczne oraz naramienne, wspomagając ich rozwój i wzmocnienie.`,
        picturePath: '/images/_kzs403.jpg'
    },
    {
        nameEN: `Children's Rehabilitation Sandal`,
        namePL: `Sandał rehabilitacyjny dziecięcy`,
        id: '_kzs204',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS204 children's rehabilitation sandal is designed for performing kinesitherapy exercises on Bubnovsky trainers. It is attached via a ring on the sandal using a carabiner. There are two types of rehabilitation sandals: children's and adult versions. The adult version can be worn on either the left or right foot, whereas the children's model is specifically designed for either the left or right foot (due to the offset positioning of the attachment ring). The rehabilitation sandal allows for a wide variety of therapeutic exercises using both the upper and lower pulley systems.`,
        descriptionPL: `Sandał rehabilitacyjny dziecięcy KZS204 jest przeznaczony do wykonywania ćwiczeń kinezyterapii na trenażerach Bubnowskiego. Mocowany jest za pomocą pierścienia na sandał poprzez karabińczyk. Istnieją dwa rodzaje sandałów rehabilitacyjnych – dziecięce i dla dorosłych. Wersja dla dorosłych może być zakładana zarówno na lewą, jak i na prawą stopę, natomiast dziecięce modele są dedykowane osobno na lewą i prawą nogę (ze względu na przesunięte na bok mocowanie pierścienia). Sandał rehabilitacyjny umożliwia wykonywanie szerokiego zakresu ćwiczeń terapeutycznych zarówno na górnym, jak i dolnym bloczku.`,
        picturePath: '/images/_kzs204.jpg'
    },
    {
        nameEN: `Loop Handle`,
        namePL: `Rączka pętelkowa`,
        id: '_kzs205',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS205 loop handle is one of the key accessories used in therapeutic gymnastics according to the S.M. Bubnovsky method and kinesitherapy. It is made from high-strength, tear-resistant materials. The handle consists of a nylon strap covered with soft fabric for a comfortable grip and a metal half-ring. The loop handle is used for performing pulling exercises with the hand from the lower and upper pulleys of the Bubnovsky trainer, aiding in rehabilitation and improving blood circulation in the shoulder joint and cervical spine. BruStyle guarantees a high-quality product.`,
        descriptionPL: `Rączka pętelkowa KZS205 to jeden z podstawowych akcesoriów stosowanych w gimnastyce leczniczej metodą S.M. Bubnowskiego oraz w kinezyterapii. Wykonana jest z materiałów o wysokiej wytrzymałości i odporności na rozdarcia. Składa się z nylonowej taśmy obszytej miękką tkaniną dla komfortowego chwytu oraz metalowego półpierścienia. Przy użyciu rączki pętelkowej wykonuje się ćwiczenia ciągnięcia ręką z dolnego i górnego bloczka trenażera Bubnowskiego, wspomagające rehabilitację oraz poprawę krążenia w stawie barkowym i odcinku szyjnym kręgosłupa. BruStyle gwarantuje wysoką jakość produktu.`,
        picturePath: '/images/_kzs205.jpg'
    },
    {
        nameEN: `Extension Chain with Carabiners`,
        namePL: `Łańcuch-przedłużacz z karabińczykami`,
        id: '_kzs206',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 80,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS206 extension chain with carabiners is designed for rehabilitation exercises in kinesitherapy. This accessory has carabiners on both ends: one side for attaching to MTB-1-2 block frames, and the other for all types of cuffs, pull handles, and loops. The chain length is 80 cm.`,
        descriptionPL: `Łańcuch-przedłużacz z karabińczykami KZS206 został zaprojektowany do ćwiczeń rehabilitacyjnych w kinezyterapii. Akcesorium posiada karabińczyki po obu stronach: z jednej strony do mocowania na ramach blokowych MTB-1-2, a z drugiej – do wszystkich rodzajów mankietów, uchwytów do ciągnięcia oraz pętli. Długość łańcucha wynosi 80 cm.`,
        picturePath: '/images/_kzs206.jpg'
    },
    {
        nameEN: `Closed Pull Handle`,
        namePL: `Zamknięty uchwyt do ciągnięcia`,
        id: '_kzs401',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS401 pull handle is an auxiliary accessory for the Bubnovsky trainer.\n\nPhysical movements with the pull handle are used in kinesitherapy for the treatment and prevention of scapulohumeral periarthritis, as well as for relieving pain in the forearm and hands, and for rehabilitation after injuries and surgeries.\n\nExercises are performed while lying or sitting (if using the Profi bench):\n\n• Pulling a straight arm behind the head;\n\n• Moving a straight arm to the side;\n\n• Pulling a bent arm to the chin.\n\n\n\nThe feet should rest against the MTB-1 stands, performing 10-12 repetitions. The closed pull handle is made of high-quality steel, with a rotating and rubberized grip for comfortable handling.`,
        descriptionPL: `Uchwyt do ciągnięcia KZS401 – pomocniczy element do trenażera Bubnowskiego.\n\nRuchy fizyczne z uchwytem do ciągnięcia stosowane są w kinezyterapii w leczeniu i profilaktyce takich schorzeń jak zespół bólowy barku i łopatki, a także w celu eliminacji bólu w przedramionach i rękach oraz rehabilitacji po urazach i operacjach.\n\nĆwiczenia wykonywane są w pozycji leżącej lub siedzącej (w przypadku użycia ławki Profi):\n\n• Przyciąganie prostej ręki za głowę;\n\n• Odwodzenie prostej ręki na bok;\n\n• Przyciąganie zgiętej ręki do podbródka.\n\n\n\nNogi powinny opierać się o stojaki MTB-1, a ćwiczenia należy wykonywać w 10-12 powtórzeniach. Zamknięty uchwyt do ciągnięcia wykonany jest z wysokiej jakości stali, posiada obrotowy i gumowany uchwyt zapewniający komfortowy chwyt.`,
        picturePath: '/images/_kzs401.jpg'
    },
    {
        nameEN: `Closed Soft Pull Handle`,
        namePL: `Zamknięty uchwyt do ciągnięcia – miękki`,
        id: '_kzs207',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS207 closed soft pull handle is suitable for exercises on various machines, including crossover machines and other cable pulls in fitness centers, as well as for block frames at home. As part of strength training equipment, this handle helps develop all major muscle groups, including the biceps, deltoids, and triceps. Additionally, when used with rehabilitation equipment, it becomes an excellent aid in strengthening back muscles and the shoulder region.`,
        descriptionPL: `Zamknięty uchwyt do ciągnięcia KZS207 nadaje się do ćwiczeń na różnych trenażerach: zarówno do crossovera i innych wyciągów w centrach sportowych, jak i do ram blokowych w warunkach domowych. Jako wyposażenie do trenażera siłowego uchwyt ten pomoże rozwijać wszystkie grupy mięśni: biceps, deltę, triceps i inne. Natomiast w połączeniu ze sprzętem rehabilitacyjnym stanie się doskonałym wsparciem w pracy nad mięśniami pleców i obręczą barkową.`,
        picturePath: '/images/_kzs207.jpg'
    },
    {
        nameEN: `Triceps Handle`,
        namePL: `Rączka na triceps`,
        id: '_kzs402',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS402 triceps handle is used on rehabilitation trainers following the methodology of Dr. S. M. Bubnovsky. Its main purpose is to perform upper block pull exercises for the triceps. With this handle, a complete set of exercises for the triceps, back, and chest muscles can be performed on block trainers.\n\nThe handle is made from a DU 20 tube of Ukrainian production. The ends of the handle feature rubberized pads for a comfortable grip, preventing slipping. The metal part has a matte powder coating applied by electrostatic spraying, which protects against corrosion. The handle has a classic V-shape with a wide angle, and a hole is provided for attaching it to the carabiner of the trainer’s block. This handle can be used on block trainers, such as double block frames – crossovers, single block frames, and fitness stations.`,
        descriptionPL: `Rączka na triceps KZS402 jest używana na rehabilitacyjnych trenażerach według metodyki doktora S. M. Bubnowskiego. Jej główne przeznaczenie to ściąganie górnego bloczka na triceps. Za pomocą tej rączki na trenażerach bloczkowych można wykonywać pełny zestaw ćwiczeń na triceps, mięśnie pleców i klatki piersiowej.\n\nRączka jest wykonana z rury ukraińskiej produkcji DU 20. Na końcach rączki znajdują się gumowe nakładki dla komfortowego chwytu, które zapobiegają ślizganiu. Metalowa część posiada matowe powłokę proszkową, naniesioną metodą natrysku elektrostatycznego, co chroni przed korozją. Rączka ma klasyczny kształt w formie litery V z dużym kątem, a do przymocowania do karabińczyka bloczka trenażera przewidziano specjalny otwór. Tę rączkę można stosować na trenażerach bloczkowych, takich jak podwójne ramy bloczkowe – crossovery, pojedyncze ramy bloczkowe oraz stacje fitness.`,
        picturePath: '/images/_kzs402.jpg'
    },
    {
        nameEN: `Soft Extender`,
        namePL: `Przedłużacz miękki`,
        id: '_kzs208',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS208 soft extender is designed for connecting cuffs, handles, or sandals to a trainer. It connects using a carabiner (included) and a ring.`,
        descriptionPL: `Przedłużacz miękki KZS208 jest przeznaczony do łączenia mankietów, uchwytów lub sandałów z trenażerem. Łączy się za pomocą karabińczyka (w zestawie) oraz pierścienia.`,
        picturePath: '/images/_kzs208.jpg'
    },
    {
        nameEN: `Straight Pull Handle`,
        namePL: `Rączka do ciągnięcia prosta`,
        id: '_kzs404',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 46,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS404 straight pull handle is an essential element of rehabilitation equipment and is used in kinesiotherapy.\n\nExercises with this handle are applied for the treatment and strengthening of the spine (particularly the cervical region), intervertebral disc hernias, and headache relief.\n\nThe straight handle is attached to the upper block of the trainer using a carabiner, and the exercise involves pulling it down to the chest. It is recommended to perform this exercise in a seated position, with legs firmly pressed against the wall and slightly bent at the knees, while keeping the arms extended at a comfortable distance. The grip should be varied (narrow, reverse). When raising the arms, the back should be slightly arched, and when pulling, the shoulder blades should be brought together.\n\nThe handle is of high quality, with rubberized grips for a comfortable hold.`,
        descriptionPL: `Rączka do ciągnięcia prosta KZS404 to niezbędny element wyposażenia rehabilitacyjnego, stosowany w kinezyterapii.\n\nĆwiczenia z tą rączką są wykorzystywane do leczenia i wzmacniania kręgosłupa (szczególnie odcinka szyjnego), przepuklin dysków międzykręgowych oraz łagodzenia bólu głowy.\n\nProsta rączka jest mocowana do górnego bloczka trenażera za pomocą karabińczyka, a ćwiczenie polega na przyciąganiu uchwytu do klatki piersiowej. Zaleca się wykonywanie ćwiczenia w pozycji siedzącej, z nogami mocno przyciśniętymi do ściany i lekko ugiętymi w kolanach, a rękoma wyciągniętymi na wygodną odległość. Chwyt należy zmieniać (wąski, odwrócony). Przy unoszeniu rąk plecy powinny być lekko wygięte, a przy ściąganiu uchwytu łopatki należy ściągnąć.\n\nRączka jest wysokiej jakości, a uchwyty są gumowane dla wygodnego chwytu.`,
        picturePath: '/images/_kzs404.jpg'
    },
    {
        nameEN: `Headrest Roll`,
        namePL: `Wałek pod głowę`,
        id: '_kzs405',
        categoryID: '_rs',
        subcategoryID: '_akrs',
        properties: {
            length: 45,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS405 headrest roll is widely used for the prevention and treatment of cervical osteochondrosis. Special exercises are selected to eliminate pain symptoms such as dizziness, migraines, numbness, and to improve blood circulation in the brain. Depending on changes in the spine, the doctor prescribes an individual set of exercises to be performed regularly using the orthopedic roll.`,
        descriptionPL: `Wałek pod głowę KZS405 jest szeroko stosowany w profilaktyce i leczeniu osteochondrozy szyjnej. Dobierane są specjalne ćwiczenia, których celem jest eliminacja objawów bólowych, takich jak zawroty głowy, migrena, drętwienie oraz poprawa krążenia krwi w mózgu. W zależności od zmian w kręgosłupie lekarz zaleca indywidualny zestaw ćwiczeń, które należy wykonywać regularnie z użyciem ortopedycznego wałka.`,
        picturePath: '/images/_kzs405.jpg'
    },
    {
        nameEN: `Additional Weight 1 kg`,
        namePL: `Dodatkowy obciążnik 1 kg`,
        id: '_kzs406',
        categoryID: '_rs',
        subcategoryID: '_akrs',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 1
        },
        descriptionEN: `The KZS406 1 kg additional weight is a removable element used for performing exercises on block trainers. Before starting exercises on block trainers according to Professor S.M. Bubnovsky's system, the working weight must be determined.`,
        descriptionPL: `Dodatkowy obciążnik 1 kg KZS406 jest dodatkowym, zdejmowanym elementem do wykonywania ćwiczeń na trenażerach bloczkowych. Przed rozpoczęciem ćwiczeń na trenażerach bloczkowych według systemu profesora S.M. Bubnowskiego, należy określić robocze obciążenie.`,
        picturePath: '/images/_kzs406.jpg'
    },
    {
        nameEN: `Additional Weight 2 kg`,
        namePL: `Dodatkowy obciążnik 2 kg`,
        id: '_kzs407',
        categoryID: '_rs',
        subcategoryID: '_akrs',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 2
        },
        descriptionEN: `The KZS407 2 kg additional weight is a removable element used for performing exercises on block trainers. Before starting exercises on block trainers according to Professor S.M. Bubnovsky's system, the working weight must be determined.`,
        descriptionPL: `Dodatkowy obciążnik 2 kg KZS407 jest dodatkowym, zdejmowanym elementem do wykonywania ćwiczeń na trenażerach bloczkowych. Przed rozpoczęciem ćwiczeń na trenażerach bloczkowych według systemu profesora S.M. Bubnowskiego, należy określić robocze obciążenie.`,
        picturePath: '/images/_kzs406.jpg'
    },
    {
        nameEN: `Additional Weight 5 kg`,
        namePL: `Dodatkowy obciążnik 5 kg`,
        id: '_kzs408',
        categoryID: '_rs',
        subcategoryID: '_akrs',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 5
        },
        descriptionEN: `The KZS408 5 kg additional weight is a removable element used for performing exercises on block trainers. Before starting exercises on block trainers according to Professor S.M. Bubnovsky's system, the working weight must be determined.`,
        descriptionPL: `Dodatkowy obciążnik 5 kg KZS408 jest dodatkowym, zdejmowanym elementem do wykonywania ćwiczeń na trenażerach bloczkowych. Przed rozpoczęciem ćwiczeń na trenażerach bloczkowych według systemu profesora S.M. Bubnowskiego, należy określić robocze obciążenie.`,
        picturePath: '/images/_kzs406.jpg'
    },
    {
        nameEN: `Rehabilitation Sandal (One-Size-Fits-All)`,
        namePL: `Sandał rehabilitacyjny (uniwersalny rozmiar)`,
        id: '_kzs203',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS203 rehabilitation sandal (one-size-fits-all) is an excellent aid in addressing various hip and knee joint conditions, as well as post-injury and post-surgery recovery. It is used for exercises on Bubnovsky trainers.\n\nThe product is worn over comfortable sports shoes, tightened with straps, and then secured with a carabiner to the block or additionally with an extender chain. The rehabilitation sandal is adjustable to fit any size.\n\nSandal description for trainers:\n\n• Sole reinforced with three layers of leather, with durable stitching.\n\n• The fixing ring is centrally located, allowing the sandal to be worn on either the right or left foot, saving the need for a second unit.`,
        descriptionPL: `Sandał rehabilitacyjny (uniwersalny rozmiar) KZS203 będzie doskonałym wsparciem w walce z różnymi schorzeniami stawów biodrowych i kolanowych, a także po przebytych urazach i operacjach. Stosowany jest do ćwiczeń na trenażerach Bubnowskiego.\n\nProdukt zakłada się na wygodne obuwie sportowe, zapina paskami, a następnie mocuje karabińczykiem do bloczka lub dodatkowo wykorzystuje łańcuch przedłużający. Sandał rehabilitacyjny można dostosować do każdego rozmiaru.\n\nOpis sandału do trenażera:\n\n• Podeszwa wzmocniona trzema warstwami skóry, z solidnym przeszyciem.\n\n• Pierścień mocujący umieszczony centralnie, co pozwala zakładać sandał zarówno na prawą, jak i lewą stopę, oszczędzając przy tym zakup drugiej sztuki.`,
        picturePath: '/images/_kzs203.jpg'
    },
    {
        nameEN: `Stretching Bench (Adjustable)`,
        namePL: `Ławka do rozciągania (regulowana)`,
        id: '_kzs009',
        categoryID: '_rs',
        subcategoryID: '_lr',
        properties: {
            length: 196,
            width: 89,
            height: 158,
            weight: 62
        },
        descriptionEN: `The KZS009 adjustable stretching bench is designed to stretch and strengthen the spine, relieve back pain, reduce fatigue after a long workday, and prevent musculoskeletal disorders. It fits easily in a room, remains stable, and can be used by every family member, as it has no age restrictions.\n\nThroughout our lives, the spine endures significant loads. Adverse factors such as excessive strain, injuries, a sedentary lifestyle, or poor nutrition often lead to back pain or various disorders. Therefore, maintaining spine health is crucial for a fulfilling life. Just 20 minutes of daily exercise on the stretching bench provides excellent prevention and rehabilitation for the entire muscle corset, including the spine.\n\nExercises based on Yevminov's method help combat conditions such as sciatica, scoliosis, various intervertebral disc disorders, muscle asymmetry, and spasms. It is also ideal for those looking to lose weight and tone their muscles. This effective method replaces manual therapy, physiotherapy exercises (LFC), and traction therapy. It offers a comprehensive spine care approach and can be used both in rehabilitation centers and at home. It is suitable for adults, the elderly, and children from the age of 5.\n\nAround two hundred exercises can be performed on this bench.\n\nWhat happens during a session on the bench?\n\n• Relaxation of intervertebral discs and pinched nerves through spine stretching. This unloads the entire muscle and skeletal structure.\n\n• Balanced engagement of all muscles supporting the spine, strengthening, restoring, and toning them. At the same time, metabolism and the release of intercellular fluid needed to nourish intervertebral discs are activated.\n\n\n\nBy exercising according to Yevminov's method on this board, you can prevent spinal wear, maintain a healthy back, feel great, and lead a healthy lifestyle.`,
        descriptionPL: `Ławka do rozciągania (regulowana) KZS009 jest przeznaczona do rozciągania i wzmacniania kręgosłupa, eliminacji bólu pleców, łagodzenia zmęczenia po długim dniu pracy oraz profilaktyki chorób układu ruchu. Z łatwością mieści się w pomieszczeniu i stabilnie utrzymuje swoje położenie. Może być używana przez każdego członka rodziny, ponieważ nie ma ograniczeń wiekowych.\n\nNasz kręgosłup przez całe życie podlega ogromnym obciążeniom. Niekorzystne czynniki, takie jak nadmierne obciążenia, urazy, brak ruchu czy złe odżywianie, często prowadzą do bólu pleców lub nawet do różnych chorób. Dlatego dla pełnego życia ważne jest dbanie o zdrowie pleców. Już 20 minut dziennie ćwiczeń na ławce do rozciągania stanowi świetną profilaktykę i poprawę kondycji całego gorsetu mięśniowego, w tym kręgosłupa.\n\nĆwiczenia według metody Jewminowa pomagają zwalczać takie schorzenia jak: rwa kulszowa, skolioza, różne zaburzenia krążków międzykręgowych, asymetria mięśniowa, skurcze. Ławka doskonale nadaje się również dla osób, które chcą zredukować nadwagę i poprawić tonus mięśniowy. Ta skuteczna metoda zastępuje terapię manualną, ćwiczenia rehabilitacyjne (LFC) i terapię trakcyjną. To kompleksowa metoda dbania o kręgosłup. Można ćwiczyć zarówno w ośrodkach rehabilitacyjnych, jak i w warunkach domowych. Odpowiednia dla dorosłych, osób starszych i dzieci od 5. roku życia.\n\nNa tej ławce można wykonywać około dwustu różnych ćwiczeń.\n\nCo dzieje się podczas ćwiczeń na ławce?\n\n• Rozluźnienie krążków międzykręgowych i uciśniętych nerwów poprzez rozciąganie kręgosłupa. W ten sposób następuje odciążenie całej struktury mięśniowej i kostnej.\n\n• Następnie równomierne obciążenie wszystkich mięśni podtrzymujących kręgosłup, co wzmacnia je, odbudowuje i nadaje tonus. Przy tym aktywowany jest metabolizm i wydzielanie płynu międzykomórkowego, niezbędnego do odżywienia krążków międzykręgowych.\n\n\n\nĆwicząc według metody Jewminowa na tej ławce, możesz zapobiec zużyciu kręgosłupa, utrzymać jego zdrowie, czuć się dobrze i prowadzić zdrowy tryb życia.`,
        picturePath: '/images/_kzs009.jpg'
    },
    {
        nameEN: `Back Stretching Trainer`,
        namePL: `Trenażer do rozciągania pleców`,
        id: '_kzs012',
        categoryID: '_rs',
        subcategoryID: '_lr',
        properties: {
            length: 76,
            width: 56,
            height: 98,
            weight: 28
        },
        descriptionEN: `The KZS012 back stretching trainer is an equivalent of the well-known "Horbunka" trainer. It is made of high-quality steel, making it heavier and capable of withstanding loads of up to 150 kg. It is easy to use and helps prevent irreversible changes in the spine caused by modern lifestyles, such as sciatica, intervertebral hernias, and scoliosis in children. A few minutes of regular exercise on the Back Stretching Bench will relieve you of pain. The trainer is also indispensable for athletes, as it helps relax the back muscles, which are under constant strain.\n\nAdvantages of this trainer include its ease of assembly and use, as well as the ability to strengthen the abdominal muscles.`,
        descriptionPL: `Trenażer do rozciągania pleców KZS012 to odpowiednik znanego trenażera „Gorbunka”. Wykonany jest z wysokiej jakości stali, co zapewnia większą wagę i pozwala wytrzymać obciążenie do 150 kg. Jest prosty w użyciu. Pomaga zapobiegać nieodwracalnym zmianom w kręgosłupie związanym z nowoczesnym stylem życia, takim jak rwa kulszowa, przepuklina międzykręgowa, skolioza u dzieci. Kilka minut regularnych ćwiczeń na Ławce do rozciągania pleców uwolni cię od bólu. Trenażer jest również niezastąpiony dla sportowców, ponieważ pozwala rozluźnić mięśnie pleców, które są stale obciążone.\n\nZalety tego trenażera to łatwość montażu i użytkowania oraz możliwość wzmacniania mięśni brzucha.`,
        picturePath: '/images/_kzs012.jpg'
    },
    {
        nameEN: `Rehabilitation Chair`,
        namePL: `Krzesło rehabilitacyjne`,
        id: '_kzs031',
        categoryID: '_rs',
        subcategoryID: '_lr',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS031 rehabilitation chair is designed to promote proper posture in school-aged children and relieve tension in the lumbar spine.\n\nThe product is intended for forming correct posture in school-aged children and relieving tension in the lumbar spine while sitting. It can be used:\n\n• At a workstation when using a computer;\n\n• During rehabilitation for patients after lumbar spine discopathy surgery;\n\n• For patients with chronic pain syndromes in the spine;\n\n• For preventing accommodation spasms and progressive myopia in children by creating an optimal visual working distance between the eyes and text, which should be within 35-45 cm;\n\n• For work and relaxation at home.`,
        descriptionPL: `Krzesło rehabilitacyjne KZS031 jest przeznaczone do kształtowania prawidłowej postawy u dzieci w wieku szkolnym oraz do odciążenia odcinka lędźwiowego kręgosłupa.\n\nProdukt służy do kształtowania prawidłowej postawy u dzieci w wieku szkolnym oraz odciążenia odcinka lędźwiowego kręgosłupa podczas siedzenia. Może być stosowany:\n\n• W miejscu pracy przy obsłudze komputera;\n\n• Podczas rehabilitacji pacjentów po operacjach dyskopatii odcinka lędźwiowego kręgosłupa;\n\n• U pacjentów z przewlekłymi zespołami bólowymi kręgosłupa;\n\n• W profilaktyce skurczu akomodacji i postępującej krótkowzroczności u dzieci dzięki zapewnieniu optymalnej odległości wzrokowej między oczami a tekstem, która powinna wynosić 35-45 cm;\n\n• Do pracy i relaksu w warunkach domowych.`,
        picturePath: '/images/_kzs031.jpg'
    },
    {
        nameEN: `Pull-Up Bar-Dip Station-Ab Trainer for MTB Trainer`,
        namePL: `Drążek-poręcze-brzuszki do trenażera MTB`,
        id: '_kzs053',
        categoryID: '_rs',
        subcategoryID: '_akrs',
        properties: {
            length: 109,
            width: 48,
            height: 74,
            weight: 13
        },
        descriptionEN: `The KZS053 pull-up bar-dip station-ab trainer for the MTB trainer is a convenient device for those who want to perform dips, pull-ups, and abdominal exercises in addition to rehabilitation. The pull-up bar-dip station-ab trainer is mounted on the frame of the MTB block trainer.`,
        descriptionPL: `Drążek-poręcze-brzuszki do trenażera MTB KZS053 to wygodne urządzenie dla osób, które oprócz rehabilitacji chcą wykonywać pompki na poręczach, podciągać się na drążku i wzmacniać mięśnie brzucha. Drążek-poręcze-brzuszki montowane na ramie trenażera bloczkowego MTB.`,
        picturePath: '/images/_kzs053.jpg'
    },
    {
        nameEN: `Pull-Up Bar-Dip Station for MTB Trainer`,
        namePL: `Drążek-poręcze do trenażera MTB`,
        id: '_kzs054',
        categoryID: '_rs',
        subcategoryID: '_akrs',
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS054 pull-up bar-dip station for the MTB trainer is a convenient device for those who want to perform dips and pull-ups in addition to rehabilitation. The pull-up bar-dip station is mounted on the frame of the MTB block trainer.`,
        descriptionPL: `Drążek-poręcze do trenażera MTB KZS054 to wygodne urządzenie dla osób, które oprócz rehabilitacji chcą wykonywać pompki na poręczach i podciągać się na drążku. Drążek-poręcze montuje się na ramie trenażera bloczkowego MTB.`,
        picturePath: '/images/_kzs054.jpg'
    },
    {
        nameEN: `Soft Cuffs (Pair)`,
        namePL: `Mankiety miękkie (para)`,
        id: '_kzs200',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 30,
            width: 8,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS200 soft cuffs (pair) are an essential element for exercises on the Bubnovsky MTB trainer. They are indispensable for performing leg exercises. The product is attached to the lower part of the shin and secured to the lower or upper block of the trainer using a carabiner through the metal half-ring of the strap to perform the exercise.\n\nDescription of MTB trainer cuffs:
        The soft cuffs are distinguished by their comfort due to the suede material. The fastening strap is made of durable natural leather. The strap's holes are reinforced with grommets, providing additional protection against wear and tear.\n\nWe produce cuffs for both adults and children. They can withstand weights of up to 120 kg.`,
        descriptionPL: `Mankiety miękkie (para) KZS200 to niezbędny element podczas ćwiczeń na trenażerze Bubnowskiego MTB. Są one nieodzowne przy wykonywaniu ćwiczeń na nogi. Produkt mocuje się na dolnej części goleni, a następnie za pomocą karabińczyka dolnego lub górnego bloczka trenażera, przytwierdza się do metalowego półpierścienia paska, aby wykonać ćwiczenie.\n\nOpis mankietów do trenażera MTB:
        Miękkie mankiety zapewniają komfort dzięki części wykonanej z zamszu. Pasek mocujący jest wykonany z wytrzymałej naturalnej skóry. Otwory w pasku są wzmocnione metalowymi oczkami, co zapewnia dodatkową ochronę przed zużyciem.\n\nProdukujemy mankiety zarówno dla dorosłych, jak i dzieci. Wytrzymują obciążenie do 120 kg.`,
        picturePath: '/images/_kzs200.jpg'
    },
    {
        nameEN: `Soft Cuffs for Children (Pair)`,
        namePL: `Mankiety miękkie dziecięce (para)`,
        id: '_kzs201',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 0,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS201 soft cuffs for children (pair) are an essential element for exercises on the Bubnovsky MTB trainer. They are indispensable for performing leg exercises. The product is attached to the lower part of the shin and secured to the lower or upper block of the trainer using a carabiner through the metal half-ring of the strap to perform the exercise.\n\nDescription of MTB trainer cuffs:\n\nThe soft cuffs are distinguished by their comfort due to the suede material. The fastening strap is made of durable natural leather. The strap's holes are reinforced with grommets, providing additional protection against wear and tear. They can withstand weights of up to 70 kg.`,
        descriptionPL: `Mankiety miękkie dziecięce (para) KZS201 to niezbędny element podczas ćwiczeń na trenażerze Bubnowskiego MTB. Są one nieodzowne przy wykonywaniu ćwiczeń na nogi. Produkt mocuje się na dolnej części goleni, a następnie za pomocą karabińczyka dolnego lub górnego bloczka trenażera, przytwierdza się do metalowego półpierścienia paska, aby wykonać ćwiczenie.\n\nOpis mankietów do trenażera MTB:\n\nMiękkie mankiety zapewniają komfort dzięki części wykonanej z zamszu. Pasek mocujący jest wykonany z wytrzymałej naturalnej skóry. Otwory w pasku są wzmocnione metalowymi oczkami, co zapewnia dodatkową ochronę przed zużyciem. Wytrzymują obciążenie do 70 kg.`,
        picturePath: '/images/_kzs200.jpg'
    },
    {
        nameEN: `Rigid Cuffs (Pair)`,
        namePL: `Mankiety sztywne (para)`,
        id: '_kzs202',
        categoryID: ['_ps', '_rs'],
        subcategoryID: ['_akps', '_akrs'],
        properties: {
            length: 30,
            width: 0,
            height: 0,
            weight: 0
        },
        descriptionEN: `The KZS202 rigid cuffs (pair) are accessories for the Bubnovsky trainer, used in kinesiotherapy. The cuffs are designed for performing a wide range of leg exercises. The product should be fixed to the lower part of the shin and attached to the lower or upper block of the trainer using a metal ring.\n\nThe product is made of dense natural leather. The strength of the leather allows for working with loads of up to 150 kg.\n\nThe inner part is lined with soft suede leather, making the exercises more comfortable. To prevent wear and tear, the strap holes are reinforced with metal grommets.`,
        descriptionPL: `Mankiety sztywne (para) KZS202 to akcesoria do trenażera Bubnowskiego, stosowane w kinezyterapii. Mankiety są przeznaczone do wykonywania szerokiego zakresu ćwiczeń na nogi. Produkt należy przymocować do dolnej części goleni i podłączyć do dolnego lub górnego bloczka trenażera za pomocą metalowego pierścienia.\n\nProdukt jest wykonany z gęstej naturalnej skóry. Wytrzymałość skóry pozwala na pracę z obciążeniem do 150 kg.\n\nWewnętrzna część jest obszyta miękką zamszową skórą, co zwiększa komfort podczas wykonywania ćwiczeń. Aby zapobiec zużyciu, otwory na pasku zostały wzmocnione metalowymi oczkami.`,
        picturePath: '/images/_kzs202.jpg'
    },
    {
        nameEN: `Back Stretching Bench`,
        namePL: `Ławka do rozciągania pleców`,
        id: '_kzs017',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 135,
            width: 73,
            height: 49,
            weight: 17
        },
        descriptionEN: `The KZS017 back stretching bench promotes relaxation and strengthening of the spine, engages deep back muscles, relieves pain and spasms, and helps to develop correct posture. Exercises are performed under the weight of one's own body, making the bench safe and non-injurious.\n\nExercises on the bench can help treat sciatica, osteochondrosis, and spinal curvature, as well as be used during rehabilitation from back injuries.`,
        descriptionPL: `Ławka do rozciągania pleców KZS017 wspomaga rozluźnienie i wzmocnienie kręgosłupa, angażuje głębokie mięśnie pleców, łagodzi ból i skurcze, a także kształtuje prawidłową postawę. Ćwiczenia wykonywane są pod ciężarem własnego ciała, dzięki czemu ławka nie stwarza ryzyka urazów.\n\nĆwiczenia na ławce pomagają w leczeniu rwy kulszowej, osteochondrozy i skrzywień kręgosłupa, a także są stosowane w rehabilitacji urazów pleców.`,
        picturePath: '/images/_kzs017.jpg'
    },
    {
        nameEN: `Rehabilitation Parallel Bars`,
        namePL: `Poręcze rehabilitacyjne`,
        id: '_kzs019',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 265,
            width: 165,
            height: 108,
            weight: 117
        },
        descriptionEN: `The KZS019 rehabilitation parallel bars are designed for therapeutic physical exercises, walking skill restoration, balance training, and walking practice in gymnasiums, rehabilitation rooms, and facilities for physiotherapy (LFC and AFC). The equipment is suitable for patients of all age groups (children from 5 years old), individuals with lower limb dysfunctions, geriatric patients, and children with cerebral palsy. It helps in developing and restoring mobility skills. The bars are typically used under supervision and based on a doctor’s recommendations. The bars are made from materials approved by the State Consumer Protection Service of Ukraine and do not cause allergic reactions. Due to ongoing improvements in the bar design by the manufacturer, there may be slight differences from the description that do not compromise their quality.`,
        descriptionPL: `Poręcze rehabilitacyjne KZS019 są przeznaczone do ćwiczeń gimnastyki leczniczej, nauki chodzenia, ćwiczeń rozwijających równowagę oraz treningu chodu w warunkach sal gimnastycznych i rehabilitacyjnych, pomieszczeń do ćwiczeń fizjoterapeutycznych (LFC i AFC). Sprzęt jest odpowiedni dla pacjentów we wszystkich grupach wiekowych (dzieci od 5 lat), osób niepełnosprawnych z dysfunkcjami kończyn dolnych, pacjentów geriatrycznych oraz dzieci z MPD. Pomaga w rozwijaniu i przywracaniu umiejętności poruszania się. Poręcze zazwyczaj są używane pod nadzorem i zgodnie z zaleceniami lekarza. Poręcze wykonane są z materiałów zatwierdzonych do użytku przez Państwową Służbę Ochrony Konsumentów Ukrainy i nie wywołują reakcji alergicznych. Ze względu na ciągłe udoskonalanie konstrukcji poręczy przez producenta, mogą wystąpić drobne różnice w porównaniu z opisem, które jednak nie wpływają na jakość produktu.`,
        picturePath: '/images/_kzs019.jpg'
    },
    {
        nameEN: `Rehabilitation Hip Extender`,
        namePL: `Ekstensor uda rehabilitacyjny`,
        id: '_kzs021',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 125,
            width: 122,
            height: 118,
            weight: 67
        },
        descriptionEN: `The KZS021 rehabilitation hip extender is designed for restoring knee and hip joint functionality, rehabilitating the musculoskeletal system, and overall muscle strengthening. This trainer can be used after injuries and by individuals with limited physical abilities. The robust metal construction of the trainer allows it to be used not only at home but also in rehabilitation centers. Exercises can be performed for arms, legs, or in combination. Additionally, the extender is equipped with extra grips for weight plates, enabling you to increase physical load.`,
        descriptionPL: `Ekstensor uda rehabilitacyjny KZS021 został zaprojektowany w celu przywracania funkcji stawów kolanowych i biodrowych, rehabilitacji układu ruchu oraz ogólnego wzmocnienia mięśni. Ten trenażer może być stosowany po przebytych urazach, a także przez osoby z ograniczoną sprawnością fizyczną. Solidna metalowa konstrukcja trenażera umożliwia jego użycie nie tylko w warunkach domowych, ale również w centrach rehabilitacyjnych. Ćwiczenia można wykonywać na ręce, nogi lub je łączyć. Dodatkowo ekstensor jest wyposażony w uchwyty na obciążniki, co pozwala zwiększyć intensywność treningu.`,
        picturePath: '/images/_kzs021.jpg'
    },
    {
        nameEN: `Frame-Free Rehabilitation Trainer`,
        namePL: `Trenażer rehabilitacyjny bezramowy`,
        id: '_kzs005',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 57,
            width: 50,
            height: 238,
            weight: 59,
            stackWeight: [60, 80]
        },
        descriptionEN: `The KZS005 frame-free rehabilitation trainer is designed for effective home workouts with mounting options on the wall or floor. Wall mounting is suitable for brick or concrete walls. If the walls in your house or apartment are made of drywall, it is better to opt for floor mounting for the MTB trainer. The best choice for home use is the Bubnovsky MTB trainer with a 60 kg or 80 kg weight stack.`,
        descriptionPL: `Trenażer rehabilitacyjny bezramowy KZS005 jest przeznaczony do efektywnych treningów w warunkach domowych, z możliwością montażu na ścianie lub podłodze. Montaż na ścianie jest możliwy przy ścianach z cegły lub betonu. W przypadku ścian z płyt kartonowo-gipsowych zaleca się zamówienie mocowania trenażera MTB do podłogi. Najlepszym wyborem do domu jest zakup trenażera Bubnowskiego MTB z obciążeniem 60 kg lub 80 kg.`,
        picturePath: '/images/_kzs005.jpg'
    },
    {
        nameEN: `Adjustable Kinesiotherapy Trainer MTB-2 (Frame 60x60)`,
        namePL: `Regulowany trenażer do kinezyterapii MTB-2 (rama 60x60)`,
        id: '_kzs015',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 357,
            width: 95,
            height: 228,
            weight: 197,
            stackWeight: [40, 60, 80, 105]
        },
        descriptionEN: `The MTB-2 KZS015 adjustable kinesiotherapy trainer (frame 60x60) is a multifunctional equivalent of the Bubnovsky KT-1 trainer with a 60x60 mm frame. The construction of this MTB-2 trainer consists of three parts, making transportation as convenient, comfortable, and safe as possible, regardless of the distance or the recipient's location.`,
        descriptionPL: `Regulowany trenażer do kinezyterapii MTB-2 KZS015 (rama 60x60) to wielofunkcyjny odpowiednik trenażera Bubnowskiego KT-1 z ramą o wymiarach 60x60 mm. Konstrukcja tego trenażera MTB-2 składa się z trzech części, co sprawia, że transport jest maksymalnie wygodny, komfortowy i bezpieczny, niezależnie od odległości i lokalizacji końcowego odbiorcy.`,
        picturePath: '/images/_kzs015.jpg'
    },
    {
        nameEN: `Kinesiotherapy Trainer MTB-1 (Frame 60x60)`,
        namePL: `Trenażer do kinezyterapii MTB-1 (rama 60x60)`,
        id: '_kzs004',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 95,
            width: 53,
            height: 220,
            weight: 49,
            stackWeight: [40, 60, 80, 105]
        },
        descriptionEN: `The MTB-1 KZS004 kinesiotherapy trainer (frame 60x60) is a multifunctional equivalent of the Bubnovsky KT-1 trainer with a 60x60 mm frame. The construction of this MTB-1 trainer consists of three parts, making transportation as convenient, comfortable, and safe as possible, regardless of the distance or the recipient's location.`,
        descriptionPL: `Trenażer do kinezyterapii MTB-1 KZS004 (rama 60x60) to wielofunkcyjny odpowiednik trenażera Bubnowskiego KT-1 z ramą o wymiarach 60x60 mm. Konstrukcja tego trenażera MTB-1 składa się z trzech części, co sprawia, że transport jest maksymalnie wygodny, komfortowy i bezpieczny, niezależnie od odległości i lokalizacji końcowego odbiorcy.`,
        picturePath: '/images/_kzs004.jpg'
    },
    {
        nameEN: `Kinesiotherapy Trainer MTB-4 (Frame 60x60)`,
        namePL: `Trenażer do kinezyterapii MTB-4 (rama 60x60)`,
        id: '_kzs013',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 357,
            width: 214,
            height: 230,
            weight: 416,
            stackWeight: [60, 80, 105]
        },
        descriptionEN: `The MTB-4 KZS013 kinesiotherapy trainer (frame 60x60) is a professional, comprehensive trainer specifically designed by our company for Bubnovsky Centers. The multifunctional MTB-4 trainer includes four block frames connected by two crossbars. Weight stacks can be customized upon request, ranging from 40 kg to 105 kg. This trainer allows for an expanded range of exercises in adherence to Dr. Bubnovsky’s program. The trainer’s crossbar features special handles, enabling additional pull-up exercises.\n\nThe MTB-4 trainer does not need to be mounted on a wall as it is made of a durable 60×60 mm profile and has a high degree of reliability.\n\nIt can be complemented with accessories such as an abdominal bench, cuffs, and pull handles.`,
        descriptionPL: `Trenażer do kinezyterapii MTB-4 KZS013 (rama 60x60) to profesjonalny, kompleksowy trenażer specjalnie zaprojektowany przez naszą firmę dla Centrów Bubnowskiego. Wielofunkcyjny trenażer MTB-4 obejmuje cztery ramy bloczkowe połączone dwoma poprzeczkami. Stosy obciążeniowe można dostosować indywidualnie w zakresie od 40 kg do 105 kg. Dzięki temu trenażerowi można zwiększyć zakres wykonywanych ćwiczeń zgodnie z programem doktora Bubnowskiego. Poprzeczka trenażera jest wyposażona w specjalne uchwyty, które umożliwiają dodatkowe ćwiczenia na podciąganie.\n\nTrenażer MTB-4 nie wymaga mocowania do ściany, ponieważ został wykonany z solidnego profilu 60×60 mm i charakteryzuje się wysokim poziomem niezawodności.\n\nMożna go doposażyć w akcesoria: ławkę do brzuszków, mankiety, uchwyty do ciągnięcia.`,
        picturePath: '/images/_kzs013.jpg'
    },
    {
        nameEN: `Kinesiotherapy Trainer MTB-2 (Frame 60x60)`,
        namePL: `Trenażer do kinezyterapii MTB-2 (rama 60x60)`,
        id: '_kzs007',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 357,
            width: 95,
            height: 228,
            weight: 148,
            stackWeight: [40, 60, 80, 105]
        },
        descriptionEN: `The MTB-2 KZS007 kinesiotherapy trainer (frame 60x60) is a multifunctional equivalent of the Bubnovsky KT-2 trainer with a 60x60 mm frame. The construction of this MTB-2 trainer consists of three parts, making transportation as convenient, comfortable, and safe as possible, regardless of the distance or the recipient's location.`,
        descriptionPL: `Trenażer do kinezyterapii MTB-2 KZS007 to wielofunkcyjny odpowiednik trenażera Bubnowskiego KT-2 z ramą o wymiarach 60x60 mm. Konstrukcja tego trenażera MTB-2 składa się z trzech części, co sprawia, że transport jest maksymalnie wygodny, komfortowy i bezpieczny, niezależnie od odległości i lokalizacji końcowego odbiorcy.`,
        picturePath: '/images/_kzs007.jpg'
    },
    {
        nameEN: `Home Kinesiotherapy Trainer MTB-1`,
        namePL: `Trenażer do kinezyterapii domowy MTB-1`,
        id: '_kzs011',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 87,
            width: 54,
            height: 218,
            weight: 39,
            stackWeight: [40, 60, 80, 105]
        },
        descriptionEN: `The MTB-1 KZS011 home kinesiotherapy trainer is a multifunctional equivalent of the Bubnovsky KT-1 trainer with a 40x40 mm frame. The construction of this MTB-1 trainer consists of three parts, making transportation as convenient, comfortable, and safe as possible, regardless of the distance or the recipient's location.`,
        descriptionPL: `Trenażer do kinezyterapii domowy MTB-1 KZS011 to wielofunkcyjny odpowiednik trenażera Bubnowskiego KT-1 z ramą o wymiarach 40x40 mm. Konstrukcja tego trenażera MTB-1 składa się z trzech części, co sprawia, że transport jest maksymalnie wygodny, komfortowy i bezpieczny, niezależnie od odległości i lokalizacji końcowego odbiorcy.`,
        picturePath: '/images/_kzs011.jpg'
    },
    {
        nameEN: `Adjustable Kinesiotherapy Trainer MTB-1 (Frame 60x60)`,
        namePL: `Regulowany trenażer do kinezyterapii MTB-1 (rama 60x60)`,
        id: '_kzs014',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 95,
            width: 53,
            height: 220,
            weight: 70,
            stackWeight: [40, 60, 80, 105]
        },
        descriptionEN: `The MTB-1 KZS014 adjustable kinesiotherapy trainer is a multifunctional equivalent of the Bubnovsky KT-1 trainer with a 60x60 mm frame. The construction of this MTB-1 trainer consists of three parts, making transportation as convenient, comfortable, and safe as possible, regardless of the distance or the recipient's location.`,
        descriptionPL: `Regulowany trenażer do kinezyterapii MTB-1 KZS014 to wielofunkcyjny odpowiednik trenażera Bubnowskiego KT-1 z ramą o wymiarach 60x60 mm. Konstrukcja tego trenażera MTB-1 składa się z trzech części, co sprawia, że transport jest maksymalnie wygodny, komfortowy i bezpieczny, niezależnie od odległości i lokalizacji końcowego odbiorcy.`,
        picturePath: '/images/_kzs014.jpg'
    },
    {
        nameEN: `Adjustable Kinesiotherapy Trainer MTB-4 (Frame 60x60)`,
        namePL: `Regulowany trenażer do kinezyterapii MTB-4 (rama 60x60)`,
        id: '_kzs026',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 357,
            width: 214,
            height: 230,
            weight: 504,
            stackWeight: [60, 80, 105]
        },
        descriptionEN: `The MTB-4 KZS026 adjustable kinesiotherapy trainer is a professional, comprehensive trainer specifically designed by our company for Bubnovsky Centers. The multifunctional MTB-4 trainer includes four block frames connected by two crossbars. Weight stacks can be customized upon request, ranging from 60 kg to 105 kg. This trainer allows for an expanded range of exercises in adherence to Dr. Bubnovsky’s program. The trainer’s crossbar features special handles that enable additional pull-up exercises.\n\nThe MTB-4 trainer does not need to be mounted on a wall as it is made of a durable 60×60 mm profile and offers a high level of reliability.\n\nIt can be complemented with accessories such as an abdominal bench, cuffs, and pull handles.`,
        descriptionPL: `Regulowany trenażer do kinezyterapii MTB-4 KZS026 to profesjonalny, kompleksowy trenażer specjalnie zaprojektowany przez naszą firmę dla Centrów Bubnowskiego. Wielofunkcyjny trenażer MTB-4 obejmuje cztery ramy bloczkowe połączone dwoma poprzeczkami. Stosy obciążeniowe mogą być wykonane na indywidualne zamówienie w zakresie od 60 kg do 105 kg. Dzięki temu trenażerowi można rozszerzyć zakres wykonywanych ćwiczeń zgodnie z programem doktora Bubnowskiego. Poprzeczka trenażera jest wyposażona w specjalne uchwyty, które umożliwiają dodatkowe ćwiczenia na podciąganie.\n\nTrenażer MTB-4 nie wymaga mocowania do ściany, ponieważ został wykonany z solidnego profilu 60×60 mm i cechuje się wysokim stopniem niezawodności.\n\nMożna go doposażyć w akcesoria: ławkę do brzuszków, mankiety, uchwyty do ciągnięcia.`,
        picturePath: '/images/_kzs026.jpg'
    },
    {
        nameEN: `Home Kinesiotherapy Trainer MTB-2 KZS016 (Frame 40x40)`,
        namePL: `Trenażer do kinezyterapii domowy MTB-2 KZS016 (rama 40x40)`,
        id: '_kzs016',
        categoryID: '_rs',
        subcategoryID: '_rt',
        properties: {
            length: 352,
            width: 87,
            height: 225,
            weight: 139,
            stackWeight: [40, 60, 80, 105]
        },
        descriptionEN: `The KZS016 disassemblable kinesiotherapy trainer is a multifunctional equivalent of the Bubnovsky KT-2 trainer with a 40x40 mm frame. The construction of this MTB-2 trainer consists of three parts, making transportation as convenient, comfortable, and safe as possible, regardless of the distance or the recipient's location.`,
        descriptionPL: `Trenażer do kinezyterapii rozkładany KZS016 to wielofunkcyjny odpowiednik trenażera Bubnowskiego KT-2 z ramą o wymiarach 40x40 mm. Konstrukcja tego trenażera MTB-2 składa się z trzech części, co sprawia, że transport jest maksymalnie wygodny, komfortowy i bezpieczny, niezależnie od odległości i lokalizacji końcowego odbiorcy.`,
        picturePath: '/images/_kzs016.jpg'
    }
];

const recentProducts = [
    {
        nameEN: 'Torsonator TC150',
        namePL: 'Torsonator TC150',
        id: '_tc150',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 75,
            width: 30,
            height: 12,
            weight: 11
        },
        descriptionEN: 'The Torsonator TC150 is a high-quality piece of equipment designed for performing strength exercises with a barbell. This tool provides a secure grip for the barbell, allowing exercises with torso rotation and weightlifting at various angles. Thanks to its sturdy construction made of high-quality materials, the torsonator ensures safety and durability during use. Its compact design allows for easy integration into any gym or home fitness space. The Torsonator TC150 is an ideal choice for those looking to diversify their workouts and improve their overall physical fitness.',
        descriptionPL: 'Torsonator TC150 to wysokiej jakości urządzenie przeznaczone do wykonywania ćwiczeń siłowych ze sztangą. Ten sprzęt zapewnia stabilne mocowanie sztangi, umożliwiając wykonywanie ćwiczeń z obrotem tułowia i pracę z obciążeniem pod różnymi kątami. Dzięki solidnej konstrukcji z wysokiej jakości materiałów, torsonator gwarantuje bezpieczeństwo i trwałość podczas użytkowania. Jego kompaktowy design pozwala na łatwą integrację zarówno w siłowniach, jak i w domowych strefach fitness. Torsonator TC150 to idealny wybór dla osób, które chcą urozmaicić swoje treningi i poprawić ogólny poziom sprawności fizycznej.',
        picturePath: '/images/_tc150.jpg'
    },
    {
        nameEN: 'Vertical Barbell Rack',
        namePL: 'Stojak na gryfy pionowy',
        id: '_tc148',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 73,
            width: 63,
            height: 34,
            weight: 20
        },
        descriptionEN: "The vertical barbell rack TC148 is an excellent solution for organizing space in your gym. Made from durable materials, it ensures secure and stable storage of barbells. The rack's design allows for vertical placement of barbells, saving space and providing easy access to equipment. Thanks to its compact size, the rack seamlessly fits into any gym interior. It can hold up to 10 barbells of different sizes, making it an essential accessory for any fitness center or home gym.",
        descriptionPL: 'Pionowy stojak na gryfy TC148 to doskonałe rozwiązanie do organizacji przestrzeni w Twojej siłowni. Wykonany z wytrzymałych materiałów, zapewnia bezpieczne i stabilne przechowywanie gryfów. Konstrukcja stojaka umożliwia pionowe ustawienie gryfów, co oszczędza miejsce i zapewnia wygodny dostęp do sprzętu. Dzięki swojej kompaktowości stojak łatwo integruje się z każdym wnętrzem siłowni. Może pomieścić do 10 gryfów o różnych rozmiarach, co czyni go niezbędnym akcesorium w każdym klubie fitness lub domowej siłowni.',
        picturePath: '/images/_tc148.jpg'
    },
    {
        nameEN: 'Barbell and Weight Plate Rack',
        namePL: 'Stojak na gryfy i obciążenia',
        id: '_tc143',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 71,
            width: 67,
            height: 121,
            weight: 18
        },
        descriptionEN: "The barbell and weight plate rack TC143 is the perfect solution for storing gym equipment in your training facility. Made from high-quality materials, it ensures maximum stability and durability. The rack features dedicated compartments for storing barbells and weight plates of various sizes, helping to organize space efficiently and provide easy access to equipment. Its compact design allows for convenient placement anywhere without taking up too much space. With a modern look and ergonomic construction, this rack is not only functional but also a stylish addition to your gym.",
        descriptionPL: "Stojak na gryfy i obciążenia TC143 to idealne rozwiązanie do przechowywania sprzętu sportowego w Twojej siłowni. Wykonany z wysokiej jakości materiałów, zapewnia maksymalną stabilność i trwałość. Stojak posiada specjalne przegródki do przechowywania gryfów i obciążeń o różnych rozmiarach, co pozwala na lepszą organizację przestrzeni i łatwy dostęp do sprzętu. Kompaktowy design umożliwia wygodne ustawienie stojaka w dowolnym miejscu, nie zajmując przy tym dużo przestrzeni. Nowoczesny wygląd i ergonomiczna konstrukcja sprawiają, że ten stojak jest nie tylko funkcjonalny, ale również stylowym dodatkiem do Twojej siłowni.",
        picturePath: '/images/_tc143.jpg'
    },
    {
        nameEN: 'Professional Ab Shaper',
        namePL: 'Profesjonalny shaper do mięśni brzucha',
        id: '_tc140',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            length: 151,
            width: 61,
            height: 106,
            weight: 47
        },
        descriptionEN: "The professional ab shaper TC140 is an effective machine for strengthening abdominal muscles. Thanks to its adjustable design, this trainer is suitable for users of all fitness levels. High-quality materials ensure reliability and durability, making it perfect for use in professional gyms. Its compact design allows for placement in any convenient location, providing maximum comfort during workouts. The modern and ergonomic design enhances usability, while the sturdy construction guarantees safety during exercises.",
        descriptionPL: "Profesjonalny shaper do mięśni brzucha TC140 to skuteczny sprzęt do wzmacniania mięśni brzucha. Dzięki regulowanej konstrukcji ten trenażer jest odpowiedni dla użytkowników o różnym poziomie zaawansowania. Wysokiej jakości materiały zapewniają niezawodność i trwałość, co czyni go idealnym wyborem do profesjonalnych siłowni. Kompaktowy design umożliwia umieszczenie sprzętu w dowolnym miejscu, zapewniając maksymalny komfort podczas treningu. Nowoczesna i ergonomiczna konstrukcja gwarantuje wygodę użytkowania, a solidna budowa zapewnia bezpieczeństwo podczas wykonywania ćwiczeń.",
        picturePath: '/images/_tc140.jpg'
    },
    {
        nameEN: 'Weight Plate Rack (6 Slots) with Torsonator',
        namePL: 'Stojak na obciążenia (6 miejsc) z torsonatorem',
        id: '_tc122.2',
        categoryID: '_ps',
        subcategoryID: '_lis',
        properties: {
            height: 117,
            weight: 37
        },
        descriptionEN: "The weight plate rack (6 slots) with torsonator TC122.2 is the perfect solution for organizing gym equipment. It features six slots for storing weight plates of various categories, helping to maintain order and ensuring convenient use of equipment during workouts. The integrated torsonator adds extra functionality, allowing for exercises that strengthen the core muscles. Made from high-quality materials, the rack guarantees durability and resistance to wear, making it an excellent choice for both professional gyms and home workout spaces.",
        descriptionPL: "Stojak na obciążenia (6 miejsc) z torsonatorem TC122.2 to idealne rozwiązanie do organizacji sprzętu sportowego w siłowni. Wyposażony w sześć miejsc na przechowywanie obciążeń o różnych kategoriach wagowych, pomaga utrzymać porządek i zapewnia wygodne użytkowanie sprzętu podczas treningów. Zintegrowany torsonator dodaje dodatkową funkcjonalność, umożliwiając wykonywanie ćwiczeń wzmacniających mięśnie tułowia. Wykonany z wysokiej jakości materiałów, stojak gwarantuje trwałość i odporność na zużycie, co czyni go doskonałym wyborem zarówno do profesjonalnych siłowni, jak i domowych stref treningowych.",
        picturePath: '/images/_tc122.2.jpg'
    }
]
const i = '•';
const empty = {
    nameEN: ``,
    namePL: ``,
    id: '',
    categoryID: '',
    subcategoryID: '',
    properties: {
        length: 0,
        width: 0,
        height: 0,
        weight: 0
    },
    descriptionEN: ``,
    descriptionPL: ``,
    picturePath: '/images/'
}
module.exports = {
    categoriesZSPORT, productsZSPORT, recentProducts
};