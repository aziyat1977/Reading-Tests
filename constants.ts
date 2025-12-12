import { Test, QuestionType, VocabItem } from './types';

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
      // ... (Content from Passages 2 and 3 of Test 1 omitted for brevity but assumed present)
    ]
  },
  // ... (Drills 1-35 omitted for brevity but assumed present)
  // ...
  // Starting Drill 36
  {
    id: 'tfng-36',
    title: 'Drill 36: Inflationary Hangover',
    passages: [
      {
        id: 1,
        title: "Passage: The Inflationary Hangover",
        content: [
          "Central bankers worldwide are popping champagne corks, celebrating the \"immaculate disinflation\" of late 2025. Consumer price indices in the G7 have finally returned to their 2% targets without triggering the deep recession many doomsayers predicted. Yet, for the average household, the party feels premature. While the <em>rate</em> of price increases has slowed, the <em>level</em> of prices remains stubbornly high—nearly 20% above 2021 levels. Wages have risen, but not uniformly; the public sector has lagged significantly behind private enterprise. Consequently, the \"feel-good factor\" usually associated with economic recovery is noticeably absent from the electorate's mood."
        ],
        questionGroups: [
          {
            id: "tfng-36-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 1-5 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 1, label: "1", questionText: "The G7 countries have successfully brought inflation rates back down to roughly 2%.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 2, label: "2", questionText: "Economists universally predicted that reducing inflation would cause a severe recession.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 3, label: "3", questionText: "Prices for consumer goods have returned to the levels seen in 2021.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 4, label: "4", questionText: "Public sector wages have increased faster than private sector wages.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 5, label: "5", questionText: "Voters are currently feeling optimistic about the economic recovery.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-37',
    title: 'Drill 37: Great AI Plateau',
    passages: [
      {
        id: 1,
        title: "Passage: The Great AI Plateau",
        content: [
          "After three years of exponential hype, the generative AI boom is hitting a wall of diminishing returns. The latest models from Silicon Valley are undeniably impressive, but they are only marginally better than their predecessors, despite costing ten times as much to train. This \"compute cost crisis\" is forcing a reckoning among venture capitalists. The era of funding every startup with a \".ai\" domain is over; the focus has shifted entirely to \"application layers\"—software that actually solves boring, specific business problems rather than writing bad poetry. As the dust settles, it appears the winners will not be the model-builders, but the incumbents who own the proprietary data those models need."
        ],
        questionGroups: [
          {
            id: "tfng-37-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 6-10 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 6, label: "6", questionText: "The newest AI models are significantly better than the previous versions.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 7, label: "7", questionText: "The cost of training new AI models has decreased due to better hardware.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 8, label: "8", questionText: "Venture capitalists are now less willing to fund general AI startups.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 9, label: "9", questionText: "\"Application layer\" software is described as writing bad poetry.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 10, label: "10", questionText: "Established companies with their own data are likely to benefit most from the current AI landscape.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-38',
    title: 'Drill 38: Silver Tsunami',
    passages: [
      {
        id: 1,
        title: "Passage: The Silver Tsunami Crashes Ashore",
        content: [
          "Nowhere is the demographic crunch more acute than in East Asia. South Korea’s fertility rate has dipped to a fresh nadir of 0.65, a figure that spells mathematical doom for the nation’s pension system. The government’s latest response—offering tax-free handouts to new parents—is akin to fighting a forest fire with a water pistol. Sociologists argue that the root cause is not financial but structural: a punishing corporate culture that makes work-life balance a fantasy. Unless Seoul can import labour on a massive scale (a political taboo), the country faces a future of shrinking cities and a stagnating gerontocracy."
        ],
        questionGroups: [
          {
            id: "tfng-38-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 11-15 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 11, label: "11", questionText: "South Korea has the lowest fertility rate in the world.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
              { id: 12, label: "12", questionText: "The government’s financial incentives have successfully increased the birth rate.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 13, label: "13", questionText: "Sociologists believe that corporate culture is the main reason for low fertility.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 14, label: "14", questionText: "Importing foreign labour is a popular idea among South Korean politicians.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 15, label: "15", questionText: "Without immigration, South Korea’s cities are expected to grow smaller.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-39',
    title: 'Drill 39: Hydrogen Hype',
    passages: [
      {
        id: 1,
        title: "Passage: The Hydrogen Hype Cycle",
        content: [
          "Green hydrogen was supposed to be the \"Swiss Army knife\" of the energy transition, capable of powering everything from steel mills to family cars. Reality has been less kind. While hydrogen remains essential for decarbonising heavy industry, its role in transport has been comprehensively usurped by electric batteries. The economics simply do not stack up: creating hydrogen from renewable electricity, compressing it, and turning it back into electricity results in a 60% energy loss. Governments are now quietly pivoting subsidies away from hydrogen cars towards industrial clusters, acknowledging that the dream of a hydrogen highway is effectively dead."
        ],
        questionGroups: [
          {
            id: "tfng-39-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 16-20 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 16, label: "16", questionText: "Green hydrogen is no longer considered useful for heavy industry.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 17, label: "17", questionText: "Electric batteries have become the dominant technology for transport.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 18, label: "18", questionText: "The process of using hydrogen for energy is 100% efficient.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 19, label: "19", questionText: "Governments are increasing subsidies for hydrogen-powered family cars.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 20, label: "20", questionText: "The \"hydrogen highway\" refers to a specific road built in Germany.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-40',
    title: 'Drill 40: Arctic Cold War',
    passages: [
      {
        id: 1,
        title: "Passage: The Arctic's Cold War",
        content: [
          "As the polar ice caps retreat, the Arctic Ocean is transforming from a frozen wasteland into a geopolitical chessboard. Russia has aggressively militarised its northern coast, eyeing control over the Northern Sea Route, which slashes shipping times between Europe and Asia by 40%. Meanwhile, NATO’s expansion to include Sweden and Finland has turned the Baltic Sea into a \"NATO lake,\" pushing Russian naval strategy further north. The United States, late to the party, is scrambling to commission new icebreakers, but currently lags woefully behind Moscow’s fleet. The risk of an accidental clash in these icy waters is higher than at any point since the 1980s."
        ],
        questionGroups: [
          {
            id: "tfng-40-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 21-25 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 21, label: "21", questionText: "The Northern Sea Route is longer than the traditional shipping route between Europe and Asia.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 22, label: "22", questionText: "Russia has built military bases along its northern coast.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 23, label: "23", questionText: "Sweden and Finland recently joined NATO.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 24, label: "24", questionText: "The United States currently has more icebreakers than Russia.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 25, label: "25", questionText: "There have been three accidental clashes in the Arctic in 2025.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-41',
    title: 'Drill 41: Ozempic Economy',
    passages: [
      {
        id: 1,
        title: "Passage: The Ozempic Economy",
        content: [
          "The widespread adoption of GLP-1 anti-obesity drugs is reshaping more than just waistlines; it is altering consumption patterns across the economy. Analysts at major investment banks have downgraded stocks in snack-food conglomerates and fast-food chains, citing a perceptible drop in calorie demand. Conversely, the airline industry is quietly celebrating: lighter passengers mean substantial fuel savings. However, the drugs come with a stinging price tag. Public health systems in Europe are wrestling with a difficult calculus: funding these treatments could bankrupt their budgets, yet failing to do so invites a tidal wave of future costs related to diabetes and heart disease."
        ],
        questionGroups: [
          {
            id: "tfng-41-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 26-30 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 26, label: "26", questionText: "Investment banks believe that snack-food companies will become more profitable in the future.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 27, label: "27", questionText: "Airlines are expected to save money on fuel because passengers are losing weight.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 28, label: "28", questionText: "GLP-1 drugs are currently free for all patients in Europe.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 29, label: "29", questionText: "Taking these drugs eliminates the risk of heart disease entirely.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 30, label: "30", questionText: "European health systems are finding it difficult to afford the cost of these drugs.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-42',
    title: 'Drill 42: Vinyl\'s Revenge',
    passages: [
      {
        id: 1,
        title: "Passage: Vinyl's Revenge",
        content: [
          "In a digital world of infinite abundance, scarcity has become a luxury good. This explains the peculiar resilience of vinyl records, which have now outsold CDs for the third consecutive year. But the trend is evolving. It is no longer just about \"warm sound\"—a dubious claim at best—but about physical ownership in an era of rental. Streaming services can delete albums at the whim of a licensing dispute; a record on a shelf is immutable. This desire for permanence is spilling over into other media, with sales of physical books rising even as e-reader adoption plateaus."
        ],
        questionGroups: [
          {
            id: "tfng-42-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 31-35 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 31, label: "31", questionText: "Vinyl records have sold more than CDs for the last three years.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 32, label: "32", questionText: "The author believes that vinyl records definitely sound better than digital formats.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 33, label: "33", questionText: "Streaming services allow users to own the music they listen to forever.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 34, label: "34", questionText: "The rise in physical media sales is driven partly by a desire for ownership.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 35, label: "35", questionText: "E-reader sales have increased by 50% in the last year.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-43',
    title: 'Drill 43: 15-Minute City',
    passages: [
      {
        id: 1,
        title: "Passage: The Backlash Against the 15-Minute City",
        content: [
          "It started as a mundane urban planning concept: designing neighbourhoods where essential services are within a short walk or bike ride. Yet, the \"15-minute city\" has morphed into a lightning rod for conspiracy theorists, who view it as a pretext for \"climate lockdowns.\" While the online hysteria is often absurd, it masks a genuine grievance. In cities like Oxford and Paris, restrictions on car use have disproportionately hit suburban tradespeople and low-income workers who cannot afford to live in the gentrified, walkable centres. The lesson for mayors is clear: you cannot impose green urbanism without addressing the inequality of transport access."
        ],
        questionGroups: [
          {
            id: "tfng-43-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 36-40 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 36, label: "36", questionText: "The concept of the 15-minute city was originally intended to control the population.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 37, label: "37", questionText: "Conspiracy theorists believe 15-minute cities are an excuse for climate lockdowns.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 38, label: "38", questionText: "Restrictions on cars have hurt wealthy residents more than low-income workers.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 39, label: "39", questionText: "Tradespeople in suburbs often rely on cars for their work.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 40, label: "40", questionText: "The Mayor of Paris has apologised for the car restrictions.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-44',
    title: 'Drill 44: Death of Humanities',
    passages: [
      {
        id: 1,
        title: "Passage: The Death of the Humanities?",
        content: [
          "Enrolment in history and literature degrees has plummeted by 30% over the past decade, driven by students (and anxious parents) prioritising \"return on investment.\" Computer science and engineering faculties are bursting at the seams, while humanities departments face closure. This utilitarian drift is understandable but short-sighted. As AI automates coding and technical tasks, the skills that remain distinctly human—critical thinking, ethical reasoning, and cultural literacy—will command a premium. The market may soon find that it has too many coders and not enough historians."
        ],
        questionGroups: [
          {
            id: "tfng-44-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 41-45 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 41, label: "41", questionText: "The decline in humanities enrolment is partly due to financial concerns.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 42, label: "42", questionText: "Computer science departments are currently struggling to attract students.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 43, label: "43", questionText: "The author suggests that AI will eventually replace historians.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
              { id: 44, label: "44", questionText: "Critical thinking is listed as a skill that AI cannot easily automate.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 45, label: "45", questionText: "Tuition fees for humanities degrees are higher than for engineering degrees.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tfng-45',
    title: 'Drill 45: Privatisation of Orbit',
    passages: [
      {
        id: 1,
        title: "Passage: The Privatisation of Orbit",
        content: [
          "NASA’s International Space Station (ISS) is entering its twilight years, scheduled for deorbiting in 2030. In its place, a flotilla of private space stations is under construction. Companies like Axiom Space and Blue Origin are betting that there is a lucrative market for orbital real estate, ranging from pharmaceutical manufacturing in microgravity to ultra-high-end tourism. However, the legal framework for this new era is non-existent. The Outer Space Treaty of 1967 did not anticipate a world where a corporate CEO could deny an astronaut entry to a life-raft module. Without new regulations, low Earth orbit could become the Wild West."
        ],
        questionGroups: [
          {
            id: "tfng-45-q",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 46-50 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 46, label: "46", questionText: "The International Space Station will be destroyed in 2030.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 47, label: "47", questionText: "Axiom Space is building a space station primarily for military purposes.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
              { id: 48, label: "48", questionText: "Manufacturing pharmaceuticals is mentioned as a potential use for private space stations.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 49, label: "49", questionText: "The Outer Space Treaty of 1967 contains detailed rules for private companies in space.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 50, label: "50", questionText: "Blue Origin plans to launch its station before Axiom Space.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" }
            ]
          }
        ]
      }
    ]
  }
];

export const VOCAB_LIST: VocabItem[] = [
  {
    id: 1,
    word: "scenic",
    ipa: "/ˈsiːnɪk/",
    form: "adj.",
    definition: "Providing or relating to views of impressive or beautiful natural scenery.",
    example: "The campaign focused on New Zealand’s scenic beauty.",
    translationRU: "живописный",
    translationUZ: "manzarali",
    quizQuestion: "Which word describes a beautiful natural view?",
    quizOptions: ["scenic", "urban", "chaotic", "dull"],
    quizCorrectIndex: 0
  },
  {
    id: 2,
    word: "exhilarating",
    ipa: "/ɪgˈzɪləreɪtɪŋ/",
    form: "adj.",
    definition: "Making one feel very happy, animated, or elated; thrilling.",
    example: "New Zealand offers exhilarating outdoor activities.",
    translationRU: "волнующий",
    translationUZ: "zavqli",
    quizQuestion: "Which word means 'thrilling'?",
    quizOptions: ["boring", "exhilarating", "calming", "depressing"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "authentic",
    ipa: "/ɔːˈθɛntɪk/",
    form: "adj.",
    definition: "Of undisputed origin; genuine.",
    example: "Tourists can experience authentic Maori culture.",
    translationRU: "подлинный",
    translationUZ: "haqiqiy",
    quizQuestion: "If something is 'authentic', it is...",
    quizOptions: ["fake", "expensive", "genuine", "modern"],
    quizCorrectIndex: 2
  },
  {
    id: 4,
    word: "gateway",
    ipa: "/ˈgeɪtweɪ/",
    form: "noun",
    definition: "A means of access or entry to a place.",
    example: "The website provided a single gateway to everything the destination had to offer.",
    translationRU: "ворота / вход",
    translationUZ: "darvoza / kirish",
    quizQuestion: "A 'gateway' provides...",
    quizOptions: ["access", "food", "shelter", "money"],
    quizCorrectIndex: 0
  },
  {
    id: 5,
    word: "itinerary",
    ipa: "/aɪˈtɪnərəri/",
    form: "noun",
    definition: "A planned route or journey.",
    example: "Features were added to help travellers devise their own customised itineraries.",
    translationRU: "маршрут",
    translationUZ: "sayohat rejasi",
    quizQuestion: "An 'itinerary' is a...",
    quizOptions: ["ticket", "planned route", "luggage", "hotel"],
    quizCorrectIndex: 1
  }
];

export const VOCAB_LIST_2: VocabItem[] = [
  {
    id: 1,
    word: "apathy",
    ipa: "/ˈæpəθi/",
    form: "noun",
    definition: "Lack of interest, enthusiasm, or concern.",
    example: "Boredom can include mental states such as frustration and apathy.",
    translationRU: "апатия",
    translationUZ: "loqaydlik",
    quizQuestion: "Which word means 'lack of interest'?",
    quizOptions: ["passion", "apathy", "energy", "focus"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "agitated",
    ipa: "/ˈæʤɪteɪtɪd/",
    form: "adj.",
    definition: "Feeling or appearing troubled or nervous.",
    example: "There is debate over whether feeling agitated counts as boredom.",
    translationRU: "взволнованный",
    translationUZ: "bezovta",
    quizQuestion: "If someone is 'agitated', they are...",
    quizOptions: ["calm", "troubled", "happy", "sleepy"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "reactant",
    ipa: "/riˈæktənt/",
    form: "adj.",
    definition: "Showing a response or reaction (in this context, a specific type of boredom involving high arousal).",
    example: "The most damaging type is ‘reactant’ boredom.",
    translationRU: "реагирующий",
    translationUZ: "reaksiyaga kirishuvchi",
    quizQuestion: "Reactant boredom involves high...",
    quizOptions: ["arousal", "sleep", "hunger", "joy"],
    quizCorrectIndex: 0
  },
  {
    id: 4,
    word: "adaptive",
    ipa: "/əˈdæptɪv/",
    form: "adj.",
    definition: "Having the ability to change to suit different conditions.",
    example: "Boredom may be a useful adaptive response.",
    translationRU: "адаптивный",
    translationUZ: "moslashuvchan",
    quizQuestion: "Something 'adaptive' helps you...",
    quizOptions: ["fail", "adjust", "ignore", "sleep"],
    quizCorrectIndex: 1
  },
  {
    id: 5,
    word: "stimulation",
    ipa: "/ˌstɪmjʊˈleɪʃən/",
    form: "noun",
    definition: "The action of arousing interest, enthusiasm, or excitement.",
    example: "In modern society there is a lot of over-stimulation.",
    translationRU: "стимуляция",
    translationUZ: "rag'batlantirish",
    quizQuestion: "Stimulation leads to...",
    quizOptions: ["boredom", "arousal", "sleep", "silence"],
    quizCorrectIndex: 1
  }
];

export const VOCAB_LIST_3: VocabItem[] = [
  {
    id: 1,
    word: "enraptured",
    ipa: "/ɪnˈræpʧəd/",
    form: "adj.",
    definition: "Give intense pleasure or joy to.",
    example: "Classical music by an artificial composer has had audiences enraptured.",
    translationRU: "восхищенный",
    translationUZ: "maftun bo'lgan",
    quizQuestion: "To be 'enraptured' means to be...",
    quizOptions: ["bored", "delighted", "angry", "sad"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "prestigious",
    ipa: "/prɛˈstɪʤəs/",
    form: "adj.",
    definition: "Inspiring respect and admiration; having high status.",
    example: "Artworks have been hung in prestigious galleries.",
    translationRU: "престижный",
    translationUZ: "nufuzli",
    quizQuestion: "A 'prestigious' gallery is...",
    quizOptions: ["unknown", "respected", "cheap", "small"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "computational",
    ipa: "/ˌkɒmpjʊˈteɪʃənl/",
    form: "adj.",
    definition: "Relating to computers or calculation.",
    example: "Geraint Wiggins is a computational creativity researcher.",
    translationRU: "вычислительный",
    translationUZ: "hisoblashga oid",
    quizQuestion: "Computational relates to...",
    quizOptions: ["art", "biology", "computers", "history"],
    quizCorrectIndex: 2
  },
  {
    id: 4,
    word: "pseudoscience",
    ipa: "/ˌsjuːdəʊˈsaɪəns/",
    form: "noun",
    definition: "A collection of beliefs or practices mistakenly regarded as being based on scientific method.",
    example: "Wiggins has blasted Cope’s work as pseudoscience.",
    translationRU: "лженаука",
    translationUZ: "soxta ilm",
    quizQuestion: "Pseudoscience is...",
    quizOptions: ["real science", "fake science", "math", "art"],
    quizCorrectIndex: 1
  },
  {
    id: 5,
    word: "recoil",
    ipa: "/rɪˈkɔɪl/",
    form: "verb",
    definition: "Suddenly spring or flinch back in fear, horror, or disgust.",
    example: "Why did people recoil when they discovered how the music was composed?",
    translationRU: "отшатнуться",
    translationUZ: "orqaga tisarilmoq",
    quizQuestion: "To 'recoil' is to...",
    quizOptions: ["hug", "pull back", "jump forward", "run fast"],
    quizCorrectIndex: 1
  }
];