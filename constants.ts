
import { Test, QuestionType, VocabItem } from './types';

export const VOCAB_LIST: VocabItem[] = [
  {
    id: 1,
    word: "Exhilarating",
    ipa: "/ɪɡˈzɪləreɪtɪŋ/",
    form: "adj.",
    definition: "Making one feel very happy, animated, or elated; thrilling.",
    example: "The campaign focused on New Zealand’s scenic beauty and exhilarating outdoor activities.",
    translationRU: "волнующий",
    translationUZ: "zavqli",
    quizQuestion: "Which word means 'making one feel very happy'?",
    quizOptions: ["Boring", "Exhilarating", "Tiring", "Sad"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "Gateway",
    ipa: "/ˈɡeɪtweɪ/",
    form: "noun",
    definition: "A means of access or entry to a place or something.",
    example: "The website provided a single gateway to everything the destination had to offer.",
    translationRU: "шлюз / ворота",
    translationUZ: "darvoza / kirish yo'li",
    quizQuestion: "A 'gateway' provides...",
    quizOptions: ["A barrier", "Access", "A wall", "Confusion"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "Authentic",
    ipa: "/ɔːˈθɛntɪk/",
    form: "adj.",
    definition: "Of undisputed origin; genuine.",
    example: "The campaign highlighted authentic Maori culture.",
    translationRU: "подлинный",
    translationUZ: "haqiqiy",
    quizQuestion: "If something is authentic, it is...",
    quizOptions: ["Fake", "Genuine", "Expensive", "Cheap"],
    quizCorrectIndex: 1
  }
];

export const VOCAB_LIST_2: VocabItem[] = [
  {
    id: 1,
    word: "Apathy",
    ipa: "/ˈæpəθi/",
    form: "noun",
    definition: "Lack of interest, enthusiasm, or concern.",
    example: "Boredom can include mental states such as frustration and apathy.",
    translationRU: "апатия",
    translationUZ: "loqaydlik",
    quizQuestion: "Apathy is a lack of...",
    quizOptions: ["Money", "Interest", "Time", "Sleep"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "Agitated",
    ipa: "/ˈædʒɪteɪtɪd/",
    form: "adj.",
    definition: "Feeling or appearing troubled or nervous.",
    example: "There isn't agreement on whether feeling agitated counts as boredom.",
    translationRU: "взволнованный",
    translationUZ: "bezovta",
    quizQuestion: "Someone who is agitated feels...",
    quizOptions: ["Calm", "Restless", "Happy", "Sleepy"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "Stimulation",
    ipa: "/ˌstɪmjʊˈleɪʃən/",
    form: "noun",
    definition: "Encouragement of something to make it develop or become more active.",
    example: "Our over-connected lifestyles might be a new source of over-stimulation.",
    translationRU: "стимуляция",
    translationUZ: "rag'batlantirish",
    quizQuestion: "Stimulation usually involves...",
    quizOptions: ["Reducing activity", "Increasing activity", "Stopping completely", "Staying still"],
    quizCorrectIndex: 1
  }
];

export const VOCAB_LIST_3: VocabItem[] = [
  {
    id: 1,
    word: "Enraptured",
    ipa: "/ɪnˈræptʃərd/",
    form: "adj.",
    definition: "Give intense pleasure or joy to.",
    example: "Classical music by an artificial composer has had audiences enraptured.",
    translationRU: "восхищенный",
    translationUZ: "maftun bo'lgan",
    quizQuestion: "If you are enraptured, you feel...",
    quizOptions: ["Angry", "Delighted", "Sad", "Bored"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "Sophisticated",
    ipa: "/səˈfɪstɪkeɪtɪd/",
    form: "adj.",
    definition: "Developed to a high degree of complexity.",
    example: "Human beings perform sophisticated creative acts.",
    translationRU: "сложный / утонченный",
    translationUZ: "murakkab / nozik",
    quizQuestion: "A sophisticated machine is...",
    quizOptions: ["Simple", "Complex", "Broken", "Cheap"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "Prestigious",
    ipa: "/prɛˈstɪdʒəs/",
    form: "adj.",
    definition: "Inspiring respect and admiration; having high status.",
    example: "Artworks have been hung in prestigious galleries.",
    translationRU: "престижный",
    translationUZ: "nufuzli",
    quizQuestion: "A prestigious award is...",
    quizOptions: ["Unknown", "Highly respected", "Easy to get", "Unwanted"],
    quizCorrectIndex: 1
  }
];

export const TESTS: Test[] = [
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
      {
        id: 3,
        title: "Reading Passage 3: Artificial artists",
        content: [
            "The Painting Fool is one of a growing number of computer programs which, so their makers claim, possess creative talents. Classical music by an artificial composer has had audiences enraptured, and even tricked them into believing a human was behind the score. Artworks painted by a robot have sold for thousands of dollars and been hung in prestigious galleries. And software has been built which creates art that could not have been imagined by the programmer.",
            "Human beings are the only species to perform sophisticated creative acts regularly. If we can break this process down into computer code, where does that leave human creativity? ‘This is a question at the very core of humanity,’ says Geraint Wiggins, a computational creativity researcher at City University, London. ‘It scares a lot of people. They are worried that it is taking something special away from what it means to be human.’"
        ],
        questionGroups: [
            {
                id: "group6",
                instruction: "Choose the correct letter, A, B, C or D.",
                renderType: "LIST",
                questions: [
                    { id: 27, label: "27", questionText: "What point does the writer make about computer artists in the first paragraph?", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "C" },
                    { id: 28, label: "28", questionText: "According to Geraint Wiggins, why are many people afraid of computer art?", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "D" },
                    { id: 29, label: "29", questionText: "What is the key difference between Aaron and the Painting Fool?", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "A" }
                ]
            },
            {
                id: "group7",
                instruction: "Complete the summary using the list of words, A-G, below.",
                renderType: "SUMMARY",
                questions: [
                    { id: 30, label: "30", questionText: "Researchers like Wiggins have spent many years studying...", type: QuestionType.INPUT, correctAnswer: "D" },
                    { id: 31, label: "31", questionText: "Because of this, the programs they create are able to...", type: QuestionType.INPUT, correctAnswer: "B" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'tfng-intro',
    title: 'Strategy: True / False / Not Given',
    passages: [
      {
        id: 999,
        title: "Strategy Guide",
        content: ["Strategy content"],
        questionGroups: []
      }
    ]
  },
  {
    id: 'tfng-1',
    title: 'Drill 1: Parker Solar Probe',
    passages: [
        {
            id: 101,
            title: "Parker Solar Probe: Touching the Sun",
            content: [
                "NASA's Parker Solar Probe has given scientists the first up-close look at the Sun's outer atmosphere, or corona. The spacecraft flew through the corona in April 2021, enduring extreme heat and radiation to provide unprecedented insights into the solar wind and the Sun's magnetic field. It observed 'switchbacks' — sudden reversals in the Sun's magnetic field direction — in much higher numbers than expected. Previously, astronomers believed these reversals originated from the solar wind and were rare anomalies. The new data suggests they are common and originate near the solar surface. This discovery is potentially solving the long-standing mystery of why the corona is hundreds of times hotter than the Sun's actual surface."
            ],
            questionGroups: [
                {
                    id: "tfng-1-g1",
                    instruction: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.",
                    renderType: "LIST",
                    questions: [
                        { id: 1, label: "1", questionText: "The Parker Solar Probe is the first spacecraft to enter the Sun's outer corona.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
                        { id: 2, label: "2", questionText: "Scientists used to think that 'switchbacks' were uncommon events.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
                        { id: 3, label: "3", questionText: "The recent findings definitely prove the cause of the temperature difference between the Sun's surface and its atmosphere.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" }
                    ]
                }
            ]
        }
    ]
  },
  {
    id: 'tfng-2',
    title: 'Drill 2: The Future of Work',
    passages: [
        {
            id: 102,
            title: "Artificial Intelligence and Employment",
            content: [
                "As Artificial Intelligence (AI) systems become more capable, concerns about mass unemployment are rising. However, economist Peter Howitt argues that historical precedents suggest a different outcome. Much like the steam engine or electrification, AI is a 'general purpose technology' that will transform rather than replace labor. While some jobs will inevitably face redundancy, new roles that we cannot currently envision will emerge. Howitt warns, however, that the transition may be painful. Without targeted government policies to retrain workers, the immediate result may be a sharp rise in income inequality and social unrest, rather than mass unemployment disproportionately affecting low-skilled workers."
            ],
            questionGroups: [
                {
                    id: "tfng-2-g1",
                    instruction: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.",
                    renderType: "LIST",
                    questions: [
                        { id: 4, label: "4", questionText: "Peter Howitt believes that the impact of AI will differ significantly from that of the steam engine.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
                        { id: 5, label: "5", questionText: "There are currently no government policies in place to retrain workers displaced by AI.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
                        { id: 6, label: "6", questionText: "Howitt argues that the primary risk of AI adoption is a widening gap between the rich and the poor, rather than total job loss.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" }
                    ]
                }
            ]
        }
    ]
  },
  {
      id: 'tfng-3',
      title: 'Drill 3: Neanderthal Fire Usage',
      passages: [
          {
              id: 103,
              title: "Neanderthals: Masters of Fire?",
              content: [
                  "New archaeological evidence from the East Farm site in England suggests that Neanderthals were capable of starting fires 50,000 years earlier than previously believed. Archaeologists discovered flint handaxes and fragments of iron pyrite, a mineral that sparks when struck against flint. This evidence suggests that Neanderthals were not merely scavenging fire from natural wildfires, as previously thought, but had the cognitive ability and tools to create it at will. The ability to cook food would have allowed for better nutrient absorption, which is crucial for brain development. However, the site offered no evidence of how often they used this technology."
              ],
              questionGroups: [
                  {
                      id: "tfng-3-g1",
                      instruction: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.",
                    renderType: "LIST",
                      questions: [
                          { id: 7, label: "7", questionText: "The study at East Farm provides the first evidence that Neanderthals used tools.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
                          { id: 8, label: "8", questionText: "Prior to this study, the prevailing view was that Neanderthals could only use fire that had started naturally.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
                          { id: 9, label: "9", questionText: "The researchers found the remains of cooked food alongside the flint tools.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" }
                      ]
                  }
              ]
          }
      ]
  },
  {
      id: 'tfng-4',
      title: 'Drill 4: Climate Journalism',
      passages: [
          {
              id: 104,
              title: "Reporting on the Climate Crisis",
              content: [
                  "Film director Adam McKay has criticized the media's coverage of the climate crisis, describing it as 'detached' and 'lacking urgency'. While major outlets like the BBC and The New York Times employ dedicated climate reporters, McKay argues that the tone of the coverage often fails to convey the severity of the situation. He advocates for a more 'alarmist' approach, suggesting that fear is a necessary catalyst for public action in the face of escalating environmental disasters. Conversely, some communication experts warn that inducing panic can lead to 'news avoidance', where audiences tune out persistent negative reporting to protect their mental health."
              ],
              questionGroups: [
                  {
                      id: "tfng-4-g1",
                      instruction: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.",
                    renderType: "LIST",
                      questions: [
                          { id: 10, label: "10", questionText: "Adam McKay claims that major news organisations do not have any journalists specialising in climate change.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
                          { id: 11, label: "11", questionText: "McKay believes that journalists should be more willing to alarm their audiences.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
                          { id: 12, label: "12", questionText: "There is a consensus among experts that 'alarmist' reporting is the most effective way to engage the public.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" }
                      ]
                  }
              ]
          }
      ]
  },
  {
      id: 'tfng-5',
      title: 'Drill 5: AI Companions',
      passages: [
          {
              id: 105,
              title: "The Rise of AI Companions",
              content: [
                  "The loneliness epidemic has driven a surge in the popularity of AI chatbots designed to simulate romantic partners or friends. These systems are becoming increasingly sophisticated, remembering past conversations and adapting their personalities to the user's preferences. While they offer a semblance of connection for socially isolated individuals, psychologists worry about the long-term effects. Because these AI companions are programmed to be relentlessly agreeable and supportive, they do not require the compromise and emotional regulation inherent in real human relationships. Experts fear that over-reliance on such docile companions could cause users' social skills to atrophy, making real-world interactions even more difficult."
              ],
              questionGroups: [
                  {
                      id: "tfng-5-g1",
                      instruction: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.",
                    renderType: "LIST",
                      questions: [
                          { id: 13, label: "13", questionText: "The article suggests that AI chatbots are currently unable to hold complex conversations.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
                          { id: 14, label: "14", questionText: "Psychologists fear that using AI for companionship could weaken a person's ability to interact with other humans.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
                          { id: 15, label: "15", questionText: "AI chatbots are programmed to occasionally disagree with users to simulate a realistic relationship.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" }
                      ]
                  }
              ]
          }
      ]
  },
  {
    id: 'summary-drill-1',
    title: 'Summary Drill 1: Cancer Research',
    passages: [
      {
        id: 1,
        title: "Drill 1: Cancer Research",
        content: [
          "Researchers at the University of California San Diego have identified a startling mechanism that allows cancer cells to survive targeted therapies. The study reveals that certain malignant cells co-opt a specific DNA-dismantling enzyme—normally active only during cell death—to endure treatment. Instead of dying, these cells use a low-level activation of the enzyme to enter a dormant state, allowing them to \"bounce back\" once the therapy stops. This discovery explains why many aggressive cancers recur after initially successful treatment. The team hopes that blocking this enzyme could prevent tumour regrowth and significantly improve patient outcomes."
        ],
        questionGroups: [
          {
            id: "sum-1",
            instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
            renderType: "TABLE",
            tableData: {
                headers: [],
                rows: [{ cells: [{ text: "Recent research has found a mechanism that enables {{1}} to survive medical treatment. It appears that malignant cells are able to {{2}} an enzyme that usually functions during the process of {{3}}. By using a low-level activation of this enzyme, the cells can go into a {{4}}, which helps them to return after therapy. Scientists believe that {{5}} this enzyme may stop tumours from growing again." }] }]
            },
            questions: [
                { id: 1, label: "1", type: QuestionType.INPUT, correctAnswer: "cancer cells" },
                { id: 2, label: "2", type: QuestionType.INPUT, correctAnswer: "co-opt" },
                { id: 3, label: "3", type: QuestionType.INPUT, correctAnswer: "cell death" },
                { id: 4, label: "4", type: QuestionType.INPUT, correctAnswer: "dormant state" },
                { id: 5, label: "5", type: QuestionType.INPUT, correctAnswer: "blocking" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-2',
    title: 'Summary Drill 2: Planetary Science',
    passages: [
      {
        id: 2,
        title: "Drill 2: Planetary Science",
        content: [
            "A new study led by the University of Zurich challenges the long-held belief that Uranus and Neptune are primarily \"ice giants.\" Using advanced hybrid modeling, researchers suggest these planets may actually be dominated by rock rather than water-rich ices. The simulations indicate that the interior makeup of these distant worlds is far more complex than previously thought, potentially explaining their erratic, multi-poled magnetic fields. If confirmed, this would mean the \"ice giant\" classification is an oversimplification. The team concludes that only dedicated future space missions can definitively reveal the true nature of their deep interiors."
        ],
        questionGroups: [
            {
                id: "sum-2",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "A study from the University of Zurich questions the idea that Uranus and Neptune are just {{6}}. New modeling suggests these planets might essentially be {{7}} by rock instead of ice. This theory could provide an explanation for the planets' unusual {{8}}, which have multiple poles. The researchers argue that the current {{9}} of these planets is too simple. They believe that {{10}} are necessary to uncover the truth about what lies inside them." }] }]
                },
                questions: [
                    { id: 6, label: "6", type: QuestionType.INPUT, correctAnswer: "ice giants" },
                    { id: 7, label: "7", type: QuestionType.INPUT, correctAnswer: "dominated" },
                    { id: 8, label: "8", type: QuestionType.INPUT, correctAnswer: "magnetic fields" },
                    { id: 9, label: "9", type: QuestionType.INPUT, correctAnswer: "classification" },
                    { id: 10, label: "10", type: QuestionType.INPUT, correctAnswer: "space missions" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-3',
    title: 'Summary Drill 3: Geology / Physics',
    passages: [
      {
        id: 3,
        title: "Drill 3: Geology / Physics",
        content: [
            "A major breakthrough published in <em>National Science Review</em> reveals that Earth’s inner core is not a conventional solid as previously believed. Instead, it exists in a \"superionic state\" where carbon atoms flow like a liquid through a solid iron lattice. This unusual behavior makes the core surprisingly soft, matching puzzling seismic observations recorded over decades. In this state, carbon atoms zip through the iron framework at high speeds, drastically reducing the alloy's stiffness/rigidity. The researchers used high-pressure shock compression to reproduce these extreme conditions, confirming that this fluid-like motion of light elements may help power Earth's magnetic field."
        ],
        questionGroups: [
            {
                id: "sum-3",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "New findings indicate that the Earth's inner core is in a {{11}} rather than being a standard solid. In this condition, {{12}} are able to move fluidly through a framework made of {{13}}. This phenomenon explains why the core appears to be {{14}} in seismic records. The rapid movement of these elements reduces the {{15}} of the alloy and may contribute to the planet's magnetic field." }] }]
                },
                questions: [
                    { id: 11, label: "11", type: QuestionType.INPUT, correctAnswer: "superionic state" },
                    { id: 12, label: "12", type: QuestionType.INPUT, correctAnswer: "carbon atoms" },
                    { id: 13, label: "13", type: QuestionType.INPUT, correctAnswer: "solid iron" },
                    { id: 14, label: "14", type: QuestionType.INPUT, correctAnswer: "soft" },
                    { id: 15, label: "15", type: QuestionType.INPUT, correctAnswer: "stiffness" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-4',
    title: 'Summary Drill 4: Neuroscience',
    passages: [
      {
        id: 4,
        title: "Drill 4: Neuroscience",
        content: [
            "Humans may possess ancient neural traces that allow us to recognize the voices of our primate cousins. A study from the Université de Genève found that specific subregions of the human brain are \"tuned\" to the calls of chimpanzees. When volunteers listened to vocal sounds from four different species, their brain activity showed a distinct response to chimp calls, distinct from other noises. This suggests a deep evolutionary link in how we process communication. The findings offer a new way to explore the origins of voice recognition and how it relates to the development of human language."
        ],
        questionGroups: [
            {
                id: "sum-4",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "Research suggests that humans have {{16}} that help them identify primate voices. A study revealed that certain {{17}} of the brain react specifically to chimpanzee calls. This reaction was different from the response to {{18}}. The discovery points to a(n) {{19}} in the processing of sounds. It provides new insights into the history of {{20}} and language development." }] }]
                },
                questions: [
                    { id: 16, label: "16", type: QuestionType.INPUT, correctAnswer: "neural traces" },
                    { id: 17, label: "17", type: QuestionType.INPUT, correctAnswer: "subregions" },
                    { id: 18, label: "18", type: QuestionType.INPUT, correctAnswer: "other noises" },
                    { id: 19, label: "19", type: QuestionType.INPUT, correctAnswer: "evolutionary link" },
                    { id: 20, label: "20", type: QuestionType.INPUT, correctAnswer: "voice recognition" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-5',
    title: 'Summary Drill 5: Astronomy',
    passages: [
      {
        id: 5,
        title: "Drill 5: Astronomy",
        content: [
            "Astronomers using the James Webb Space Telescope (JWST) have detected a massive stream of helium escaping from the exoplanet WASP-107b. This \"super-puff\" world, which is the size of Jupiter but has only one-tenth of its mass, has an enormously inflated atmosphere. The escaping gas cloud is so large that it extends ten times the planet's radius. The study also found water, carbon dioxide, and ammonia, but surprisingly no methane. These findings suggest the planet likely formed far from its star and migrated inward, causing its atmosphere to swell and erode under intense stellar heat."
        ],
        questionGroups: [
            {
                id: "sum-5",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "The James Webb Space Telescope has observed a large {{21}} leaving the planet WASP-107b. This planet is known as a {{22}} world because of its low mass and large size. The gas cloud trails behind the planet for a distance of {{23}} its radius. Interestingly, the telescope did not detect any {{24}} in the atmosphere. The data implies the planet {{25}} to its current position, which led to its inflated state." }] }]
                },
                questions: [
                    { id: 21, label: "21", type: QuestionType.INPUT, correctAnswer: "helium stream" },
                    { id: 22, label: "22", type: QuestionType.INPUT, correctAnswer: "super-puff" },
                    { id: 23, label: "23", type: QuestionType.INPUT, correctAnswer: "ten times" },
                    { id: 24, label: "24", type: QuestionType.INPUT, correctAnswer: "methane" },
                    { id: 25, label: "25", type: QuestionType.INPUT, correctAnswer: "migrated" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-6',
    title: 'Summary Drill 6: Marine Science',
    passages: [
      {
        id: 6,
        title: "Drill 6: Marine Science",
        content: [
            "A mysterious and fast-spreading pathogen is decimating sea urchin populations globally, with catastrophic losses reported in the Canary Islands. The die-off affects <em>Diadema</em> sea urchins, which are vital grazers that keep coral reefs free of algae. Without them, reefs risk being smothered. Scientists describe this as a \"silent ocean pandemic\" that has caused populations to reach historic lows. In some regions, the ability of these urchins to reproduce has nearly halted. While the exact pathogen remains unidentified, the collapse of these grazers poses a severe threat to the balance of marine ecosystems."
        ],
        questionGroups: [
            {
                id: "sum-6",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "A(n) {{26}} is currently killing large numbers of sea urchins around the world. These urchins are important {{27}} that protect coral reefs from algae. The event has been described as a {{28}} affecting the oceans. Due to the decline, the {{29}} of urchins has stopped in some areas. The loss of these animals creates a significant {{30}} to the stability of reef ecosystems." }] }]
                },
                questions: [
                    { id: 26, label: "26", type: QuestionType.INPUT, correctAnswer: "pathogen" },
                    { id: 27, label: "27", type: QuestionType.INPUT, correctAnswer: "grazers" },
                    { id: 28, label: "28", type: QuestionType.INPUT, correctAnswer: "silent pandemic" },
                    { id: 29, label: "29", type: QuestionType.INPUT, correctAnswer: "ability" },
                    { id: 30, label: "30", type: QuestionType.INPUT, correctAnswer: "threat" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-7',
    title: 'Summary Drill 7: Paleontology',
    passages: [
      {
        id: 7,
        title: "Drill 7: Paleontology",
        content: [
            "Fossils unearthed in Qatar have revealed a previously unknown species of miniature sea cow that lived in the Arabian Gulf over 21 million years ago. Named <em>Salwasiren qatarensis</em>, this ancient mammal provides a crucial link in the evolution of sirenians (the group containing manatees and dugongs). Unlike modern giants, this species was relatively small. The discovery sheds light on the region's past seagrass ecosystems and how they responded to environmental changes. The fossils were found in a rock record that preserves a detailed history of the area's ancient marine environment."
        ],
        questionGroups: [
            {
                id: "sum-7",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "Excavations in Qatar have uncovered {{31}} of a new sea cow species. This ancient animal, which lived more than {{32}} ago, was much smaller than modern types. The species has been given the name {{33}}. Its discovery helps explain the history of {{34}} in the region. The findings come from a {{35}} that contains information about the ancient marine environment." }] }]
                },
                questions: [
                    { id: 31, label: "31", type: QuestionType.INPUT, correctAnswer: "fossils" },
                    { id: 32, label: "32", type: QuestionType.INPUT, correctAnswer: "21 million years" },
                    { id: 33, label: "33", type: QuestionType.INPUT, correctAnswer: "Salwasiren qatarensis" },
                    { id: 34, label: "34", type: QuestionType.INPUT, correctAnswer: "seagrass ecosystems" },
                    { id: 35, label: "35", type: QuestionType.INPUT, correctAnswer: "rock record" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-8',
    title: 'Summary Drill 8: Physics (Particle)',
    passages: [
      {
        id: 8,
        title: "Drill 8: Physics (Particle)",
        content: [
            "Scientists at the SNO+ detector in Canada have observed a rare event: solar neutrinos converting carbon-13 atoms into nitrogen-13 deep underground. Neutrinos, often called \"ghost particles,\" rarely interact with matter. The team tracked two faint flashes of light to confirm this low-energy interaction. The first flash occurs when the neutrino hits the carbon nucleus, and the second follows minutes later as the nitrogen decays. This measurement provides the first direct cross-section of this specific nuclear reaction and opens new doors for studying how the Sun produces energy and how the universe evolves."
        ],
        questionGroups: [
            {
                id: "sum-8",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "Researchers have watched solar neutrinos change {{36}} into nitrogen-13. Neutrinos are known as {{37}} because they seldom interact with physical matter. The presence of the reaction was confirmed by spotting two {{38}}. The second signal appears when the nitrogen {{39}}. This observation gives scientists a new way to investigate how {{40}} is produced by the Sun." }] }]
                },
                questions: [
                    { id: 36, label: "36", type: QuestionType.INPUT, correctAnswer: "carbon-13" },
                    { id: 37, label: "37", type: QuestionType.INPUT, correctAnswer: "ghost particles" },
                    { id: 38, label: "38", type: QuestionType.INPUT, correctAnswer: "faint flashes" },
                    { id: 39, label: "39", type: QuestionType.INPUT, correctAnswer: "decays" },
                    { id: 40, label: "40", type: QuestionType.INPUT, correctAnswer: "energy" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-9',
    title: 'Summary Drill 9: Climate Science',
    passages: [
      {
        id: 9,
        title: "Drill 9: Climate Science",
        content: [
            "A study led by the University of Southampton has discovered that eroded lava rubble beneath the ocean floor acts as a massive \"sponge\" for carbon dioxide. Deep-sea drilling in the South Atlantic revealed that these porous deposits, known as breccia, contain far more stored carbon than standard ocean crust. As seawater flows through the rubble, CO2 is trapped and turned into calcium carbonate minerals. This process locks carbon away for tens of millions of years. The finding reshapes our understanding of the Earth's long-term carbon cycle and the natural mechanisms that stabilize the climate."
        ],
        questionGroups: [
            {
                id: "sum-9",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "Researchers have found that {{41}} located under the seabed can absorb large amounts of CO2. These deposits are called {{42}} and are porous in nature. The carbon is trapped when {{43}} moves through the rocks. It is then converted into {{44}}. This discovery changes how scientists view the planet's {{45}} over long periods." }] }]
                },
                questions: [
                    { id: 41, label: "41", type: QuestionType.INPUT, correctAnswer: "lava rubble" },
                    { id: 42, label: "42", type: QuestionType.INPUT, correctAnswer: "breccia" },
                    { id: 43, label: "43", type: QuestionType.INPUT, correctAnswer: "seawater" },
                    { id: 44, label: "44", type: QuestionType.INPUT, correctAnswer: "minerals" },
                    { id: 45, label: "45", type: QuestionType.INPUT, correctAnswer: "carbon cycle" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-10',
    title: 'Summary Drill 10: Child Development',
    passages: [
      {
        id: 10,
        title: "Drill 10: Child Development / Climate",
        content: [
            "A new study indicates that excessive heat is negatively impacting the development of young children globally. Researchers found that children exposed to unusually high temperatures were less likely to reach key milestones in early literacy and numeracy. The impact was most severe among children already facing economic challenges. The study argues that early development lays the foundation for lifelong well-being, and heat stress disrupts this critical phase. The authors urge policymakers to protect children from the developmental delays caused by a warming climate."
        ],
        questionGroups: [
            {
                id: "sum-10",
                instruction: "Complete the summary using NO MORE THAN TWO WORDS from the text for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [{ cells: [{ text: "New research shows that {{46}} can hinder the progress of young children. Those living in hotter conditions often fail to achieve goals in {{47}} and numeracy. The negative effects are strongest for children dealing with {{48}}. Since early development is the {{49}} for future success, this issue is critical. Experts are calling on {{50}} to take action to safeguard children's growth." }] }]
                },
                questions: [
                    { id: 46, label: "46", type: QuestionType.INPUT, correctAnswer: "excessive heat" },
                    { id: 47, label: "47", type: QuestionType.INPUT, correctAnswer: "early literacy" },
                    { id: 48, label: "48", type: QuestionType.INPUT, correctAnswer: "economic challenges" },
                    { id: 49, label: "49", type: QuestionType.INPUT, correctAnswer: "foundation" },
                    { id: 50, label: "50", type: QuestionType.INPUT, correctAnswer: "policymakers" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-11',
    title: 'Summary Drill 11: Neuroscience & Sleep',
    passages: [
      {
        id: 1,
        title: "Drill 11: Neuroscience & Sleep",
        content: [
          "New research from the University of Rochester Medical Center has illuminated the mechanical process by which the brain cleanses itself during sleep. The study focuses on the \"glymphatic system,\" a macroscopic waste clearance system that piggybacks on the brain's blood vessels. Researchers discovered that during deep, non-REM sleep, the space between brain cells increases by up to 60%, allowing cerebrospinal fluid to wash freely through the tissue. This \"detergent\" action flushes out beta-amyloid, a toxic protein associated with Alzheimer's disease. The findings suggest that the cognitive decline seen in aging may be partially driven by the slow deterioration of this nightly cleaning cycle, rather than just genetic factors."
        ],
        questionGroups: [
          {
            id: "sum-11",
            instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            renderType: "TABLE",
            tableData: {
                headers: [],
                rows: [{ cells: [{ text: "<h4 class='font-bold mb-2'>The Brain's Cleaning Process</h4><p class='mb-4 leading-relaxed'>A study has revealed how the brain removes waste through a mechanism known as the {{1}}. This system uses the brain's blood vessels to function. During specific periods of {{2}}, the gap between neural cells widens significantly. This expansion permits {{3}} to flow through the tissue, acting like a detergent. The primary goal is to remove {{4}}, which is linked to Alzheimer's. Scientists believe that the {{5}} of this system over time may contribute to cognitive issues in the elderly.</p>" }] }]
            },
            questions: [
                { id: 1, label: "1", type: QuestionType.INPUT, correctAnswer: "glymphatic system" },
                { id: 2, label: "2", type: QuestionType.INPUT, correctAnswer: "non-REM sleep" },
                { id: 3, label: "3", type: QuestionType.INPUT, correctAnswer: "cerebrospinal fluid" },
                { id: 4, label: "4", type: QuestionType.INPUT, correctAnswer: "beta-amyloid" },
                { id: 5, label: "5", type: QuestionType.INPUT, correctAnswer: "deterioration" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-12',
    title: 'Summary Drill 12: Agriculture & Technology',
    passages: [
      {
        id: 2,
        title: "Drill 12: Agriculture & Technology",
        content: [
          "Engineers at the University of Texas have developed a new type of hydrogel-infused soil capable of pulling water vapour directly from the air. The \"smart soil\" contains super-moisture-absorbent gels that capture atmospheric humidity at night when temperatures are cooler. During the day, the heat triggers the gels to release the stored water directly to the plant's roots. In field tests with radishes, the system successfully grew crops using 40% less irrigation than traditional methods. This technology could be transformative for arid regions where groundwater is scarce, effectively turning dry desert air into a sustainable water source for farming."
        ],
        questionGroups: [
          {
            id: "sum-12",
            instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            renderType: "TABLE",
            tableData: {
                headers: [],
                rows: [{ cells: [{ text: "<h4 class='font-bold mb-2'>Self-Watering Agriculture</h4><p class='mb-4 leading-relaxed'>A new agricultural innovation involves soil mixed with {{6}} that can extract moisture from the atmosphere. The system works by collecting {{7}} during the night. As the temperature rises during the day, the trapped water is released to the {{8}}. Experiments involving {{9}} showed that the method significantly reduced the need for irrigation. This invention offers hope for {{10}} where water supplies are limited.</p>" }] }]
            },
            questions: [
                { id: 6, label: "6", type: QuestionType.INPUT, correctAnswer: "hydrogel-infused soil" },
                { id: 7, label: "7", type: QuestionType.INPUT, correctAnswer: "atmospheric humidity" },
                { id: 8, label: "8", type: QuestionType.INPUT, correctAnswer: "plant's roots" },
                { id: 9, label: "9", type: QuestionType.INPUT, correctAnswer: "radishes" },
                { id: 10, label: "10", type: QuestionType.INPUT, correctAnswer: "arid regions" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-13',
    title: 'Summary Drill 13: Evolutionary Biology',
    passages: [
      {
        id: 3,
        title: "Drill 13: Evolutionary Biology",
        content: [
          "A genetic quirk known as the \"Mother's Curse\" may explain why males in many species tend to live shorter lives than females. The theory centers on mitochondria, the power plants of the cell, which are inherited exclusively from the mother. Because these genes are never passed down by fathers, evolutionary natural selection only screens for mutations that are harmful to females. Mutations that are neutral for females but damaging to males can therefore \"sneak\" through the generations. A recent study on fruit flies confirmed this, showing that mitochondrial variations had zero impact on female aging but were a primary determinant of male longevity."
        ],
        questionGroups: [
          {
            id: "sum-13",
            instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            renderType: "TABLE",
            tableData: {
                headers: [],
                rows: [{ cells: [{ text: "<h4 class='font-bold mb-2'>Genetic Inheritance and Lifespan</h4><p class='mb-4 leading-relaxed'>The \"Mother's Curse\" is a theory explaining the difference in lifespans between sexes. It focuses on {{11}}, which are cell structures passed down only by mothers. Consequently, the process of {{12}} only removes genetic faults that hurt females. Mutations that are {{13}} to men but harmless to women can accumulate over time. Research on {{14}} supported this, proving that these genetic variations significantly affected {{15}} while leaving females unaffected.</p>" }] }]
            },
            questions: [
                { id: 11, label: "11", type: QuestionType.INPUT, correctAnswer: "mitochondria" },
                { id: 12, label: "12", type: QuestionType.INPUT, correctAnswer: "natural selection" },
                { id: 13, label: "13", type: QuestionType.INPUT, correctAnswer: "damaging" },
                { id: 14, label: "14", type: QuestionType.INPUT, correctAnswer: "fruit flies" },
                { id: 15, label: "15", type: QuestionType.INPUT, correctAnswer: "male longevity" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-14',
    title: 'Summary Drill 14: Renewable Energy',
    passages: [
      {
        id: 4,
        title: "Drill 14: Renewable Energy",
        content: [
          "A Spanish startup has unveiled a radical new wind turbine design that has no rotating blades. Instead, the device looks like a giant vertical pole that oscillates back and forth in the wind, mimicking the way a hummingbird hovers. This \"vortex shedding\" technology generates electricity through a system of magnets and coils at the base. Unlike traditional turbines, these poles are silent, pose no threat to birds, and are cheaper to manufacture. While they generate less power per unit than standard windmills, their small footprint allows them to be installed in dense urban areas where conventional turbines would be dangerous."
        ],
        questionGroups: [
          {
            id: "sum-14",
            instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            renderType: "TABLE",
            tableData: {
                headers: [],
                rows: [{ cells: [{ text: "<h4 class='font-bold mb-2'>A New Way to Catch the Wind</h4><p class='mb-4 leading-relaxed'>A new type of wind generator has been designed without the usual {{16}}. The device resembles a {{17}} and moves by oscillating. It produces power using {{18}} located at the bottom of the structure. The main advantages are that the poles are quiet and safe for {{19}}. Although their energy output is lower, their {{20}} makes them suitable for use in cities.</p>" }] }]
            },
            questions: [
                { id: 16, label: "16", type: QuestionType.INPUT, correctAnswer: "rotating blades" },
                { id: 17, label: "17", type: QuestionType.INPUT, correctAnswer: "vertical pole" },
                { id: 18, label: "18", type: QuestionType.INPUT, correctAnswer: "magnets" },
                { id: 19, label: "19", type: QuestionType.INPUT, correctAnswer: "birds" },
                { id: 20, label: "20", type: QuestionType.INPUT, correctAnswer: "small footprint" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'summary-drill-15',
    title: 'Summary Drill 15: Paleontology',
    passages: [
      {
        id: 5,
        title: "Drill 15: Paleontology",
        content: [
          "Paleontologists have analyzed a rare \"mummified\" *Edmontosaurus* fossil found in North Dakota, which preserves large patches of fossilized skin. Unlike typical fossils where soft tissue decays, this specimen suggests the animal was buried rapidly in a riverbed, preventing decomposition. The skin shows a variety of scales, including complex, non-overlapping patterns previously unseen. Most surprisingly, the study found evidence of scars and healed wounds on the skin, providing the first direct proof of active combat or mating struggles in this species. The preservation is so detailed that scientists can even see the texture of individual scales."
        ],
        questionGroups: [
          {
            id: "sum-15",
            instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            renderType: "TABLE",
            tableData: {
                headers: [],
                rows: [{ cells: [{ text: "<h4 class='font-bold mb-2'>Preserved Soft Tissue</h4><p class='mb-4 leading-relaxed'>A recently analyzed *Edmontosaurus* fossil is unique because it contains {{21}}. The preservation occurred because the dinosaur was likely {{22}} quickly, which stopped the tissue from rotting. The specimen displays different types of {{23}} with unique patterns. Researchers were especially interested to find {{24}} on the animal's body, which serves as proof of past physical struggles. The level of detail allows experts to observe the {{25}} of the skin surface.</p>" }] }]
            },
            questions: [
                { id: 21, label: "21", type: QuestionType.INPUT, correctAnswer: "fossilized skin" },
                { id: 22, label: "22", type: QuestionType.INPUT, correctAnswer: "buried" },
                { id: 23, label: "23", type: QuestionType.INPUT, correctAnswer: "scales" },
                { id: 24, label: "24", type: QuestionType.INPUT, correctAnswer: "scars" },
                { id: 25, label: "25", type: QuestionType.INPUT, correctAnswer: "texture" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'saq-1',
    title: 'SAQ 1: Architecture',
    passages: [
      {
        id: 1,
        title: "Passage: The Return of Timber Skyscrapers",
        content: [
          "After a century of concrete dominance, wood is making a comeback in high-rise construction. New \"mass timber\" technologies, specifically Cross-Laminated Timber (CLT), allow architects to build wooden skyscrapers that are fire-resistant and structurally sound. The \"Mjøstårnet\" in Norway, standing at 85.4 metres, is currently the world’s tallest timber building. Proponents argue that timber acts as a carbon sink, storing CO2 rather than emitting it during production like steel. However, critics worry about the longevity of these structures in humid climates and the potential impact of large-scale logging on biodiversity."
        ],
        questionGroups: [
          {
            id: "saq-1-g1",
            instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            renderType: "LIST",
            questions: [
              { id: 1, label: "1", questionText: "Which material dominated high-rise construction for the last 100 years?", type: QuestionType.INPUT, correctAnswer: "Concrete" },
              { id: 2, label: "2", questionText: "What specific technology allows for the construction of wooden skyscrapers?", type: QuestionType.INPUT, correctAnswer: "Cross-Laminated Timber" },
              { id: 3, label: "3", questionText: "What is the height of the Mjøstårnet building?", type: QuestionType.INPUT, correctAnswer: "85.4 metres" },
              { id: 4, label: "4", questionText: "What do supporters say timber acts as?", type: QuestionType.INPUT, correctAnswer: "carbon sink" },
              { id: 5, label: "5", questionText: "What environmental factor concerns critics regarding these buildings?", type: QuestionType.INPUT, correctAnswer: "Humid climates" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'saq-2',
    title: 'SAQ 2: Marine Biology',
    passages: [
      {
        id: 1,
        title: "Passage: Octopuses Rewire Their Brains",
        content: [
          "A study published in *Science* reveals that octopuses can edit their own genetic information to survive freezing temperatures. Unlike humans, who cannot change their genetic code, octopuses use RNA editing to alter the proteins in their nervous system on the fly. When water temperatures drop, they rapidly recode their kinesin proteins—molecular motors that transport cargo within cells—to function efficiently in the cold. This ability to \"rewrite\" their biology allows them to inhabit diverse environments, from tropical reefs to the Antarctic depths, without waiting for slow evolutionary changes."
        ],
        questionGroups: [
          {
            id: "saq-2-g1",
            instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            renderType: "LIST",
            questions: [
              { id: 6, label: "1", questionText: "What type of editing do octopuses use to alter their proteins?", type: QuestionType.INPUT, correctAnswer: "RNA editing" },
              { id: 7, label: "2", questionText: "Which specific proteins are recoded when the temperature drops?", type: QuestionType.INPUT, correctAnswer: "kinesin proteins" },
              { id: 8, label: "3", questionText: "What is the function of kinesin proteins within cells?", type: QuestionType.INPUT, correctAnswer: "Transport cargo" },
              { id: 9, label: "4", questionText: "Where can octopuses live besides tropical reefs?", type: QuestionType.INPUT, correctAnswer: "Antarctic depths" },
              { id: 10, label: "5", questionText: "What does this ability allow them to bypass?", type: QuestionType.INPUT, correctAnswer: "Evolutionary changes" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'saq-3',
    title: 'SAQ 3: Space Exploration',
    passages: [
      {
        id: 1,
        title: "Passage: The Challenge of Lunar Dust",
        content: [
          "As NASA prepares for the Artemis missions, a major technical hurdle remains: moon dust. Technically known as regolith, this substance is distinct from Earth soil because it is incredibly sharp and abrasive. On Earth, wind and water erosion smooth down sand grains, but on the airless Moon, the particles remain jagged shards of glass. During the Apollo missions, regolith clogged space suit joints, scratched visors, and caused respiratory issues for astronauts (\"lunar hay fever\"). Engineers are now developing electrodynamic shields—surfaces that use electric charges to repel dust—to protect sensitive equipment."
        ],
        questionGroups: [
          {
            id: "saq-3-g1",
            instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            renderType: "LIST",
            questions: [
              { id: 11, label: "1", questionText: "What is the technical name for moon dust?", type: QuestionType.INPUT, correctAnswer: "regolith" },
              { id: 12, label: "2", questionText: "What natural processes smooth sand grains on Earth?", type: QuestionType.INPUT, correctAnswer: "Wind and water" },
              { id: 13, label: "3", questionText: "What did the dust clog during the Apollo missions?", type: QuestionType.INPUT, correctAnswer: "space suit joints" },
              { id: 14, label: "4", questionText: "What health problem did astronauts experience due to the dust?", type: QuestionType.INPUT, correctAnswer: "Lunar hay fever" },
              { id: 15, label: "5", questionText: "What technology are engineers creating to repel the dust?", type: QuestionType.INPUT, correctAnswer: "electrodynamic shields" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'saq-4',
    title: 'SAQ 4: History',
    passages: [
      {
        id: 1,
        title: "Passage: The Vroman's Nose Fort",
        content: [
          "Archaeologists in Scotland have uncovered a previously unknown Roman fort at Vroman's Nose, overturning assumptions about the Roman occupation of the north. The fort, strategically located on a high ridge, suggests the Romans had a much stronger military presence in the region than historical texts indicate. Artifacts found at the site, including lead sling bullets and pottery from southern France, point to a garrison of auxiliary troops rather than legionaries. The site was likely abandoned around 180 AD, possibly due to a strategic withdrawal rather than a military defeat."
        ],
        questionGroups: [
          {
            id: "saq-4-g1",
            instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            renderType: "LIST",
            questions: [
              { id: 16, label: "1", questionText: "Where was the new Roman fort discovered?", type: QuestionType.INPUT, correctAnswer: "Vroman's Nose" },
              { id: 17, label: "2", questionText: "What kind of presence does the fort suggest the Romans had in the region?", type: QuestionType.INPUT, correctAnswer: "Stronger military presence" },
              { id: 18, label: "3", questionText: "What weapon ammunition was found at the site?", type: QuestionType.INPUT, correctAnswer: "lead sling bullets" },
              { id: 19, label: "4", questionText: "Who likely occupied the fort instead of legionaries?", type: QuestionType.INPUT, correctAnswer: "auxiliary troops" },
              { id: 20, label: "5", questionText: "In which year was the site likely abandoned?", type: QuestionType.INPUT, correctAnswer: "180 AD" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'saq-5',
    title: 'SAQ 5: Technology',
    passages: [
      {
        id: 1,
        title: "Passage: Solid-State Batteries",
        content: [
          "The electric vehicle (EV) industry is racing to commercialize solid-state batteries, which promise to solve the range anxiety of current drivers. Unlike lithium-ion batteries, which use a liquid electrolyte to move energy, solid-state batteries use a solid material like ceramic or glass. This makes them non-flammable and allows for much higher energy density. Toyota has announced plans to launch a vehicle with this technology by 2027, boasting a charging time of just 10 minutes. However, the main barrier remains the high cost of manufacturing the solid electrolyte at scale."
        ],
        questionGroups: [
          {
            id: "saq-5-g1",
            instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            renderType: "LIST",
            questions: [
              { id: 21, label: "1", questionText: "What component in lithium-ion batteries is liquid?", type: QuestionType.INPUT, correctAnswer: "electrolyte" },
              { id: 22, label: "2", questionText: "What materials can be used for the solid electrolyte?", type: QuestionType.INPUT, correctAnswer: "ceramic or glass" },
              { id: 23, label: "3", questionText: "What safety advantage do solid-state batteries have?", type: QuestionType.INPUT, correctAnswer: "Non-flammable" },
              { id: 24, label: "4", questionText: "How long will it take to charge the planned Toyota vehicle?", type: QuestionType.INPUT, correctAnswer: "10 minutes" },
              { id: 25, label: "5", questionText: "What is the primary obstacle to mass-producing these batteries?", type: QuestionType.INPUT, correctAnswer: "High cost" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'saq-6',
    title: 'SAQ 6: Psychology',
    passages: [
      {
        id: 1,
        title: "Passage: The Doorway Effect",
        content: [
          "Have you ever walked into a room and immediately forgotten why you went there? Psychologists call this the \"Doorway Effect.\" A study from the University of Notre Dame suggests this happens because the brain treats doorways as \"event boundaries.\" When you pass through a threshold, your brain compartmentalizes the previous room's thoughts and files them away to make space for new information. This mechanism helps us focus on the current environment but causes short-term memory lapses. The study found that this effect occurs equally in virtual reality environments as it does in the physical world."
        ],
        questionGroups: [
          {
            id: "saq-6-g1",
            instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            renderType: "LIST",
            questions: [
              { id: 26, label: "1", questionText: "What term do psychologists use for forgetting why you entered a room?", type: QuestionType.INPUT, correctAnswer: "Doorway Effect" },
              { id: 27, label: "2", questionText: "What does the brain interpret doorways as?", type: QuestionType.INPUT, correctAnswer: "event boundaries" },
              { id: 28, label: "3", questionText: "What does the brain do with thoughts from the previous room?", type: QuestionType.INPUT, correctAnswer: "files them away" },
              { id: 29, label: "4", questionText: "What is the benefit of this mechanism?", type: QuestionType.INPUT, correctAnswer: "helps us focus" },
              { id: 30, label: "5", questionText: "Where else does this effect occur besides the physical world?", type: QuestionType.INPUT, correctAnswer: "virtual reality" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'saq-7',
    title: 'SAQ 7: Environmental Science',
    passages: [
      {
        id: 1,
        title: "Passage: Microplastics in Clouds",
        content: [
          "Japanese researchers have identified a new pathway for microplastic pollution: the clouds. By analyzing cloud water collected from the summit of Mount Fuji, scientists found high concentrations of polymers like polyethylene and rubber. These airborne microplastics are likely lifted from the ocean by sea spray. The study warns that these particles act as \"condensation nuclei,\" potentially altering cloud formation and weather patterns. Furthermore, when exposed to strong ultraviolet radiation in the upper atmosphere, these plastics degrade faster, releasing greenhouse gases that could accelerate global warming."
        ],
        questionGroups: [
          {
            id: "saq-7-g1",
            instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            renderType: "LIST",
            questions: [
              { id: 31, label: "1", questionText: "From where did the researchers collect cloud water samples?", type: QuestionType.INPUT, correctAnswer: "Mount Fuji" },
              { id: 32, label: "2", questionText: "Name one type of polymer found in the water.", type: QuestionType.INPUT, correctAnswer: "polyethylene" },
              { id: 33, label: "3", questionText: "How do the microplastics likely enter the atmosphere?", type: QuestionType.INPUT, correctAnswer: "Sea spray" },
              { id: 34, label: "4", questionText: "What role do the particles play in cloud formation?", type: QuestionType.INPUT, correctAnswer: "condensation nuclei" },
              { id: 35, label: "5", questionText: "What is released when these plastics degrade in the upper atmosphere?", type: QuestionType.INPUT, correctAnswer: "greenhouse gases" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'saq-8',
    title: 'SAQ 8: Linguistics',
    passages: [
      {
        id: 1,
        title: "Passage: The Silbo Gomero Whistle Language",
        content: [
          "On the island of La Gomera in the Canaries, inhabitants speak a unique language that consists entirely of whistles. \"Silbo Gomero\" was developed to communicate across the island's deep ravines, where shouted words would be distorted by echoes. The language is not a separate dialect but a whistled form of Spanish, where pitch replaces vowels and timbre replaces consonants. In the late 20th century, the language nearly faced extinction due to the introduction of mobile phones. However, the local government made Silbo a compulsory subject in schools in 1999, successfully reviving it."
        ],
        questionGroups: [
          {
            id: "saq-8-g1",
            instruction: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            renderType: "LIST",
            questions: [
              { id: 36, label: "1", questionText: "Why was Silbo Gomero developed?", type: QuestionType.INPUT, correctAnswer: "Communicate across ravines" },
              { id: 37, label: "2", questionText: "What spoken language is Silbo Gomero based on?", type: QuestionType.INPUT, correctAnswer: "Spanish" },
              { id: 38, label: "3", questionText: "What element of sound is used to represent vowels?", type: QuestionType.INPUT, correctAnswer: "pitch" },
              { id: 39, label: "4", questionText: "What technology threatened the survival of the language?", type: QuestionType.INPUT, correctAnswer: "mobile phones" },
              { id: 40, label: "5", questionText: "In which year did Silbo become a compulsory subject?", type: QuestionType.INPUT, correctAnswer: "1999" }
            ]
          }
        ]
      }
    ]
  }
];
