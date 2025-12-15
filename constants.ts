
import { Test, QuestionType, VocabItem } from './types';

export const TESTS: Test[] = [
  // ... existing tests ...
  {
    id: 'cam-13-test-1',
    title: 'Cambridge 13 Test 1 Reading Passage',
    passages: [
      {
        id: 1,
        title: "Reading Passage 1: Case Study: Tourism New Zealand website",
        content: [
          "New Zealand is a small country of four million inhabitants, a long-haul flight from all the major tourist-generating markets of the world. Tourism currently makes up 9% of the country's gross domestic product, and is the country's largest export sector. Unlike other export sectors, which make products and then sell them overseas, tourism brings its customers to New Zealand. The product is the country itself – the people, the places and the experiences. In 1999, Tourism New Zealand launched a campaign to communicate a new brand position to the world. The campaign focused on New Zealand’s scenic beauty, exhilarating outdoor activities and authentic Maori culture, and it made New Zealand one of the strongest national brands in the world.",
          "A key feature of the campaign was the website www.newzealand.com, which provided potential visitors to New Zealand with a single gateway to everything the destination had to offer. The heart of the website was a database of tourism services operators, both those based in New Zealand and those based abroad which offered tourism services to the country. Any tourism-related business could be listed by filling in a simple form. This meant that even the smallest bed and breakfast address or specialist activity provider could gain a web presence with access to an audience of long-haul visitors. In addition, because participating businesses were able to update the details they gave on a regular basis, the information provided remained accurate. And to maintain and improve standards, Tourism New Zealand organised a scheme whereby organisations appearing on the website underwent an independent evaluation against a set of agreed national standards of quality. As part of this, the effect of each business on the environment was considered.",
          "To communicate the New Zealand experience, the site also carried features relating to famous people and places. One of the most popular was an interview with former New Zealand All Blacks rugby captain Tana Umaga. Another feature that attracted a lot of attention was an interactive journey through a number of the locations chosen for blockbuster films which had made use of New Zealand’s stunning scenery as a backdrop. As the site developed, additional features were added to help independent travellers devise their own customised itineraries. To make it easier to plan motoring holidays, the site catalogued the most popular driving routes in the country, highlighting different routes according to the season and indicating distances and times.",
          "Later, a Travel Planner feature was added, which allowed visitors to click and 'bookmark' places or attractions they were interested in, and then view the results on a map. The Travel Planner offered suggested routes and public transport options between the chosen locations. There were also links to accommodation in the area. By registering with the website, users could save their Travel Plan and return to it later, or print it out to take on the visit. The website also had a 'Your Words' section where anyone could submit a blog of their New Zealand travels for possible inclusion on the site."
        ],
        questionGroups: [
          {
            id: "group1",
            instruction: "Complete the table below. Choose ONE WORD ONLY from the passage for each answer.",
            renderType: "TABLE",
            tableData: {
              headers: ["Section of website", "Comments"],
              rows: [
                {
                  cells: [
                    { text: "Database of tourism services" },
                    { 
                       bulletPoints: true,
                       text: "easy for tourism-related businesses to get on the list<br/>allowed businesses to {{1}} information regularly<br/>provided a country-wide evaluation of businesses, including their impact on the {{2}}"
                    }
                  ]
                },
                {
                    cells: [
                      { text: "Special features on local topics" },
                      {
                          bulletPoints: true,
                          text: "e.g. an interview with a former sports {{3}}<br/>and an interactive tour of various locations used in {{4}}"
                      }
                    ]
                },
                {
                    cells: [
                        { text: "Information on driving routes" },
                        {
                            bulletPoints: true,
                            text: "varied depending on the {{5}}"
                        }
                    ]
                },
                {
                    cells: [
                        { text: "Travel Planner" },
                        {
                            bulletPoints: true,
                            text: "included a map showing selected places, details of public transport and local {{6}}"
                        }
                    ]
                },
                {
                    cells: [
                        { text: "'Your Words'" },
                        {
                            bulletPoints: true,
                            text: "travellers could send a link to their {{7}}"
                        }
                    ]
                }
              ]
            },
            questions: [
               { id: 1, label: "1", type: QuestionType.INPUT, correctAnswer: "update" },
               { id: 2, label: "2", type: QuestionType.INPUT, correctAnswer: "environment" },
               { id: 3, label: "3", type: QuestionType.INPUT, correctAnswer: "captain" },
               { id: 4, label: "4", type: QuestionType.INPUT, correctAnswer: "films" },
               { id: 5, label: "5", type: QuestionType.INPUT, correctAnswer: "season" },
               { id: 6, label: "6", type: QuestionType.INPUT, correctAnswer: "accommodation" },
               { id: 7, label: "7", type: QuestionType.INPUT, correctAnswer: "blog" }
            ]
          },
          {
            id: "group2",
            instruction: "Do the following statements agree with the information given in Reading Passage 1? In boxes 8-13 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 8, label: "8", questionText: "The website www.newzealand.com aimed to provide ready-made itineraries and packages for travel companies and individual tourists.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 9, label: "9", questionText: "It was found that most visitors started searching on the website by geographical location.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
              { id: 10, label: "10", questionText: "According to research, 26% of visitor satisfaction is related to their accommodation.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 11, label: "11", questionText: "Visitors to New Zealand like to become involved in the local culture.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 12, label: "12", questionText: "Visitors like staying in small hotels in New Zealand rather than in larger ones.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
              { id: 13, label: "13", questionText: "Many visitors feel it is unlikely that they will return to New Zealand after their visit.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" }
            ]
          }
        ]
      },
      // ... (keeping other original passages here for brevity, assuming they are still in file) ...
      {
        id: 2,
        title: "Reading Passage 2: Why being bored is stimulating – and useful, too",
        content: [
            "<span class='font-bold text-lg'>A</span> We all know how it feels – it’s impossible to keep your mind on anything, time stretches out, and all the things you could do seem equally unlikely to make you feel better. But defining boredom so that it can be studied in the lab has proved difficult. For a start, it can include a lot of other mental states, such as frustration, apathy, depression and indifference. There isn’t even agreement about what boredom actually is. There isn’t even agreement over whether boredom is always a low-energy, flat kind of emotion or whether feeling agitated and restless counts as boredom, too. In his book, <em>Boredom: A Lively History</em>, Peter Toohey at the University of Calgary, Canada, compares it to disgust – an emotion that motivates us to stay away from certain situations. ‘If disgust protects humans from infection, boredom may protect them from “infectious” social situations,’ he suggests.",
            "<span class='font-bold text-lg'>B</span> By asking people about their experiences of boredom, Thomas Goetz and his team at the University of Konstanz in Germany have recently identified five distinct types: indifferent, calibrating, searching, reactant and apathetic. These can be plotted on two axes – one running left to right, which measures low to high arousal, and the other from top to bottom, which measures how positive or negative the feeling is. Intriguingly, Goetz has found that while people experience all kinds of boredom, they tend to specialise in one. Of the five types, the most damaging is ‘reactant’ boredom with its explosive combination of high arousal and negative emotion. The most useful is what Goetz calls ‘indifferent’ boredom: someone isn’t engaged in anything satisfying but still feels relaxed and calm. However, it remains to be seen whether there are any character traits that predict the kind of boredom each of us might be prone to.",
            "<span class='font-bold text-lg'>C</span> Psychologist Sandi Mann at the University of Central Lancashire, UK, goes further. ‘All emotions are there for a reason, including boredom,’ he says. Mann has found that being bored makes us more creative. ‘We’re all afraid of being bored but in actual fact it can lead to all kinds of amazing things,’ she says. In experiments published last year, Mann found that people who had been made to feel bored by copying numbers out of the phone book for 15 minutes came up with more creative ideas about how to use a pair of polystyrene cups than a control group. Mann concluded that a passive, boring activity is best for creativity because it allows the mind to wander. In fact, she goes so far as to suggest that we should seek out more boredom in our lives.",
            "<span class='font-bold text-lg'>D</span> Psychologist John Eastwood at York University in Toronto, Canada, isn’t convinced. ‘If you are in a state of mind-wandering you are not bored,’ he says. ‘In my view, by definition boredom is an undesirable state.’ That doesn’t necessarily mean that it isn’t adaptive, he adds. ‘Pain is an undesirable state, but it may be a useful adaptive response to something that is wrong with your body.’ Eastwood’s team is now trying to explore the reasons why our attention system fails. It has been suggested that our over-connected lifestyles might even be a new source of boredom. ‘In modern human society there is a lot of over-stimulation but still a lot of problems finding meaning,’ says Eastwood.",
            "<span class='font-bold text-lg'>E</span> Eastwood’s team is now trying to explore the reasons why our attention system fails. They have been using eye-tracking technology to observe the gaze of bored people. They have found that they don’t focus on things – their eyes just jump around. This suggests that the problem with boredom is an inability to focus our attention.",
            "<span class='font-bold text-lg'>F</span> Psychologist Françoise Wemelsfelder speculates that our over-connected lifestyles might even be a new source of boredom. ‘In modern human society there is a lot of over-stimulation but still a lot of problems finding meaning,’ she says. So instead of seeking yet more mental stimulation, perhaps we should leave our phones alone, and use boredom to motivate us to engage with the world in a more meaningful way."
        ],
        questionGroups: [
            {
                id: "group3",
                instruction: "Reading Passage 2 has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below.",
                renderType: "LIST",
                questions: [
                    { id: 14, label: "14", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "iv" }, 
                    { id: 15, label: "15", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "vi" },
                    { id: 16, label: "16", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "i" },
                    { id: 17, label: "17", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "v" },
                    { id: 18, label: "18", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "viii" },
                    { id: 19, label: "19", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "iii" }
                ]
            },
            {
                id: "group4",
                instruction: "Look at the following ideas (Questions 20-23) and the list of people below. Match each idea with the correct person, A-E.",
                renderType: "LIST",
                questions: [
                    { id: 20, label: "20", questionText: "The encouragement to live in the present", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E"], correctAnswer: "E" },
                    { id: 21, label: "21", questionText: "The suggestion that one sort of boredom is worse than all the others", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E"], correctAnswer: "B" }, 
                    { id: 22, label: "22", questionText: "The view that boredom serves a function involving the avoidance of unpleasant situations", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E"], correctAnswer: "D" },
                    { id: 23, label: "23", questionText: "The idea that the mind working together with a lack of stimulation can lead to creativity", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E"], correctAnswer: "A" }
                ]
            },
            {
                id: "group5",
                instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [
                        {
                            cells: [
                                {
                                    text: `
                                    <h4 class='font-bold mb-2'>Responses to boredom</h4>
                                    <p class='mb-4 leading-relaxed'>
                                    For John Eastwood, the central feature of boredom is that people cannot {{24}} their attention. His team suggests that we are usually able to cope with boredom because we use various {{25}} to keep ourselves busy. However, research shows that bored people feel time passes more slowly and, perhaps surprisingly, they feel more {{26}} than usual.
                                    </p>
                                    `,
                                    bulletPoints: false
                                }
                            ]
                        }
                    ]
                },
                questions: [
                    { id: 24, label: "24", type: QuestionType.INPUT, correctAnswer: "focus" },
                    { id: 25, label: "25", type: QuestionType.INPUT, correctAnswer: "pleasure" },
                    { id: 26, label: "26", type: QuestionType.INPUT, correctAnswer: "curiosity" }
                ]
            }
        ]
      },
      // ... (keeping other original passages) ...
    ]
  },
  // ... (Include all other existing tests from the provided file) ...
];

export const VOCAB_LIST: VocabItem[] = [
  {
    id: 1,
    word: "Exhilarating",
    ipa: "/ɪɡˈzɪl.ə.reɪ.tɪŋ/",
    form: "adjective",
    definition: "Making one feel very happy, animated, or elated.",
    example: "An exhilarating two-hour rafting experience.",
    translationRU: "волнующий",
    translationUZ: "hayajonli",
    quizQuestion: "Which activity would likely be described as exhilarating?",
    quizOptions: ["Sleeping", "Skydiving", "Reading", "Sitting"],
    quizCorrectIndex: 1
  },
  // ... other items ...
];

export const VOCAB_LIST_2: VocabItem[] = [
  {
    id: 1,
    word: "Apathy",
    ipa: "/ˈæp.ə.θi/",
    form: "noun",
    definition: "Lack of interest, enthusiasm, or concern.",
    example: "There is widespread apathy among the electorate.",
    translationRU: "апатия",
    translationUZ: "befarqlik",
    quizQuestion: "What is a synonym for apathy?",
    quizOptions: ["Interest", "Indifference", "Passion", "Energy"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "Agitated",
    ipa: "/ˈædʒ.ɪ.teɪ.tɪd/",
    form: "adjective",
    definition: "Feeling or appearing troubled or nervous.",
    example: "She seemed agitated about something.",
    translationRU: "взволнованный",
    translationUZ: "hayajonlangan",
    quizQuestion: "If someone is agitated, they are:",
    quizOptions: ["Calm", "Sleepy", "Restless", "Happy"],
    quizCorrectIndex: 2
  }
];

export const VOCAB_LIST_3: VocabItem[] = [
  {
    id: 1,
    word: "Enraptured",
    ipa: "/ɪnˈræp.tʃərd/",
    form: "adjective",
    definition: "Give intense pleasure or joy to.",
    example: "The audience was enraptured by the music.",
    translationRU: "восхищенный",
    translationUZ: "maftun",
    quizQuestion: "Enraptured means filled with:",
    quizOptions: ["Anger", "Delight", "Fear", "Boredom"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "Prestigious",
    ipa: "/presˈtɪdʒ.əs/",
    form: "adjective",
    definition: "Inspiring respect and admiration; having high status.",
    example: "A prestigious academic award.",
    translationRU: "престижный",
    translationUZ: "nufuzli",
    quizQuestion: "A prestigious job is:",
    quizOptions: ["Lowly", "Highly respected", "Easy", "Dangerous"],
    quizCorrectIndex: 1
  }
];
