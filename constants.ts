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
                instruction: `
                  <h4 class='font-bold text-lg mb-2'>Reading Passage 2 has six paragraphs, A-F.</h4>
                  <p class='mb-4'>Choose the correct heading for each paragraph from the list of headings below.</p>
                  <div class='border border-gray-400 p-4 bg-white mb-4'>
                    <h5 class='font-bold text-center border-b pb-2 mb-2'>List of Headings</h5>
                    <ul class='space-y-1 text-sm'>
                        <li><strong>i</strong> &nbsp;&nbsp;&nbsp; The productive outcomes that may result from boredom</li>
                        <li><strong>ii</strong> &nbsp;&nbsp; What teachers can do to prevent boredom</li>
                        <li><strong>iii</strong> &nbsp; A new explanation and a new cure</li>
                        <li><strong>iv</strong> &nbsp; Problems with a scientific approach to boredom</li>
                        <li><strong>v</strong> &nbsp;&nbsp; A potential danger arising from boredom</li>
                        <li><strong>vi</strong> &nbsp; Creating a system of classification for feelings of boredom</li>
                        <li><strong>vii</strong> Age groups most affected by boredom</li>
                        <li><strong>viii</strong> Identifying those most affected by boredom</li>
                    </ul>
                  </div>
                `,
                renderType: "LIST",
                questions: [
                    { id: 14, label: "14", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "iv" }, // Para A
                    { id: 15, label: "15", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "vi" }, // Para B
                    { id: 16, label: "16", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "i" }, // Para C
                    { id: 17, label: "17", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "v" }, // Para D
                    { id: 18, label: "18", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "viii" }, // Para E (simulated match)
                    { id: 19, label: "19", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "iii" } // Para F
                ]
            },
            {
                id: "group4",
                instruction: `
                    <p class='mb-2'>Look at the following ideas (Questions 20-23) and the list of people below.</p>
                    <p class='mb-4'>Match each idea with the correct person, <strong>A-E</strong>.</p>
                    <div class='border border-gray-300 p-3 bg-gray-50 text-sm w-1/2'>
                        <h5 class='font-bold mb-2'>List of People</h5>
                        <ul class='space-y-1'>
                            <li><strong>A</strong> Peter Toohey</li>
                            <li><strong>B</strong> Thomas Goetz</li>
                            <li><strong>C</strong> John Eastwood</li>
                            <li><strong>D</strong> Francoise Wemelsfelder</li>
                            <li><strong>E</strong> Sandi Mann</li>
                        </ul>
                    </div>
                `,
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
            "Human beings are the only species to perform sophisticated creative acts regularly. If we can break this process down into computer code, where does that leave human creativity? ‘This is a question at the very core of humanity,’ says Geraint Wiggins, a computational creativity researcher at Goldsmiths, University of London. ‘It scares a lot of people. They are worried that it is taking something special away from what it means to be human.’",
            "To some extent, we are all familiar with computerised art. The question is: where does the work of the artist stop and the creativity of the computer begin? Consider one of the oldest machine artists, Aaron, a robot that has had paintings exhibited in London’s Tate Modern and the San Francisco Museum of Modern Art. Aaron can pick up a paintbrush and paint on canvas on its own. Impressive perhaps, but it is still little more than a tool to realise the programmer’s own creative ideas.",
            "Simon Colton, the designer of the Painting Fool, is keen to make sure his creation doesn’t attract the same criticism. Unlike earlier ‘artists’ such as Aaron, the Painting Fool only needs minimal direction and can come up with its own concepts by going online for material. The software runs its own web searches and trawls through social media sites. It is now beginning to display a kind of imagination too, creating pictures from scratch. One of its original works is a series of fuzzy landscapes, depicting trees and sky. While some might say they have a mechanical look, Colton argues that such reactions arise from people’s double standards towards software-produced and human-produced art. After all, he says, consider that the Painting Fool painted the landscapes without referring to a photo. ‘If a child painted a new scene from its head, you’d say it has a certain level of imagination,’ he points out. ‘The same should be true of a machine.’ Software bugs can also lead to unexpected results. Some of the Painting Fool’s paintings of a chair came out in black and white, thanks to a technical glitch. This gives the work an eerie, ghostlike quality. Human artists like the renowned Ellsworth Kelly are lauded for limiting their colour palette – so why should computers be any different?",
            "Researchers like Colton don’t believe it is right to measure machine creativity directly to that of humans who ‘have had millennia to develop our skills’. Others, though, are fascinated by the prospect that a computer might create something as original and subtle as our best artists. So far, only one has come close. Composer David Cope invented a program called Experiments in Musical Intelligence, or EMI. Not only did EMI create compositions in Cope’s style, but also that of the most revered classical composers, including Bach, Chopin and Mozart. Audiences were moved to tears, and EMI even fooled classical music experts into thinking they were hearing genuine Bach. Not everyone was impressed however. Some, such as Wiggins, have blasted Cope’s work as pseudoscience, and condemned him for his deliberately vague explanation of how the software worked. Meanwhile, Douglas Hofstadter of Indiana University said EMI created replicas which still rely completely on the original artist’s creative impulses. When audiences found out the truth they were often outraged with Cope, and one music lover even tried to punch him. Amid such controversy, Cope destroyed EMI’s vital databases.",
            "But why did so many people love the music, yet recoil when they discovered how it was composed? A study by computer scientist David Moffat of Glasgow Caledonian University provides a clue. He asked both expert musicians and non-experts to assess six compositions. The participants weren’t told beforehand whether the tunes were composed by humans or computers, but were asked to guess, and then rate how much they liked each one. People who thought the composer was a computer tended to dislike the piece more than those who believed it was human. This was true even among the experts, who might have been expected to be more objective in their analyses. Where does this prejudice come from? Paul Bloom of Yale University has a suggestion: he reckons part of the pleasure we get from art stems from our creative process behind the work. This can give it an ‘irresistible essence’, says Bloom. Experiments with children show that they are ready to call something an artwork only if they know it was created with a specific intent to be art. Consider the work of the Painting Fool. The software is programmed to follow a set of rules, but it has no intent of its own. It is just following instructions."
        ],
        questionGroups: [
            {
                id: "group6",
                instruction: "Choose the correct letter, A, B, C or D.",
                renderType: "LIST",
                questions: [
                    { 
                        id: 27, 
                        label: "27", 
                        questionText: "What point does the writer make about computer artists in the first paragraph?", 
                        type: QuestionType.RADIO, 
                        options: ["They are currently less creative than human artists.", "They have the potential to exceed human creativity.", "They have already produced works that are indistinguishable from human art.", "They are limited by the programming they receive."], 
                        correctAnswer: "They have the potential to exceed human creativity." 
                    },
                    { 
                        id: 28, 
                        label: "28", 
                        questionText: "According to Geraint Wiggins, why are many people afraid of computer creativity?", 
                        type: QuestionType.RADIO, 
                        options: ["It will lead to computers taking over the world.", "It undermines a fundamental human quality.", "It will make human art obsolete.", "It is difficult to understand."], 
                        correctAnswer: "It will make human art obsolete." 
                    },
                    { 
                        id: 29, 
                        label: "29", 
                        questionText: "In the third paragraph, the writer refers to Aaron to illustrate that", 
                        type: QuestionType.RADIO, 
                        options: ["computer art can be as good as human art.", "computers can learn to paint without instruction.", "current computer art is dependent on human programming.", "the distinction between human and computer art is becoming blurred."], 
                        correctAnswer: "current computer art is dependent on human programming." 
                    },
                    { 
                        id: 30, 
                        label: "30", 
                        questionText: "Simon Colton argues that public reaction to the Painting Fool's work", 
                        type: QuestionType.RADIO, 
                        options: ["is based on a misunderstanding of how the software works.", "shows that people are prejudiced against computer art.", "proves that computers can be creative.", "highlights the need for better computer art software."], 
                        correctAnswer: "highlights the need for better computer art software." 
                    }
                ]
            },
            {
                id: "group7",
                instruction: "Do the following statements agree with the claims of the writer in Reading Passage 3? In boxes 32-36 on your answer sheet, write YES, NO or NOT GIVEN.",
                renderType: "LIST",
                questions: [
                    { id: 32, label: "32", questionText: "The Painting Fool has been criticized for being too similar to Aaron.", type: QuestionType.DROPDOWN, options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO" },
                    { id: 33, label: "33", questionText: "The Painting Fool accesses the internet to find subject matter for its paintings.", type: QuestionType.DROPDOWN, options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES" },
                    { id: 34, label: "34", questionText: "The Painting Fool's 'fuzzy landscapes' were created by accident.", type: QuestionType.DROPDOWN, options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO" },
                    { id: 35, label: "35", questionText: "The 'fuzzy landscapes' series has been sold for a high price.", type: QuestionType.DROPDOWN, options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
                    { id: 36, label: "36", questionText: "People's reaction to the Painting Fool's work is consistent with their reaction to human art.", type: QuestionType.DROPDOWN, options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO" }
                ]
            },
            {
                id: "group8",
                instruction: "Complete each sentence with the correct ending, A-G, below.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [
                        { cells: [{ text: "<strong>A</strong> generated work that was indistinguishable from that of human composers." }] },
                        { cells: [{ text: "<strong>B</strong> was programmed to create original compositions." }] },
                        { cells: [{ text: "<strong>C</strong> relied too heavily on the style of specific human composers." }] },
                        { cells: [{ text: "<strong>D</strong> failing to explain the technical details of his project." }] },
                        { cells: [{ text: "<strong>E</strong> producing work that was superior to that of human composers." }] },
                        { cells: [{ text: "<strong>F</strong> created a series of landscapes without human intervention." }] },
                        { cells: [{ text: "<strong>G</strong> was merely a tool for the programmer's creativity." }] }
                    ]
                },
                questions: [
                    { id: 37, label: "37", questionText: "Simon Colton says that the Painting Fool", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B" },
                    { id: 38, label: "38", questionText: "David Cope's EMI software", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A" },
                    { id: 39, label: "39", questionText: "Geraint Wiggins criticized David Cope for", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D" },
                    { id: 40, label: "40", questionText: "Douglas Hofstadter claimed that EMI", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C" }
                ]
            }
        ]
      }
    ]
  }
];

// Vocabulary List for Passage 1
export const VOCAB_LIST: VocabItem[] = [
  {
    id: 1,
    word: "Long-haul flight",
    ipa: "/ˌlɒŋ ˈhɔːl flaɪt/",
    form: "Noun Phrase",
    definition: "A flight that covers a long distance, usually between continents.",
    example: "Travelers from Europe face a **long-haul flight** to reach New Zealand.",
    translationRU: "Дальнемагистральный рейс",
    translationUZ: "Uzoq masofali parvoz",
    quizQuestion: "What kind of flight would you take from London to Sydney?",
    quizOptions: ["Domestic flight", "Long-haul flight", "Charter flight", "Short-haul flight"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "Gross Domestic Product",
    ipa: "/ˌɡrəʊs dəˌmestɪk ˈprɒdʌkt/",
    form: "Noun Phrase (Collocation)",
    definition: "The total value of goods produced and services provided in a country during one year.",
    example: "Tourism contributes significantly to the country's **Gross Domestic Product**.",
    translationRU: "Валовой внутренний продукт",
    translationUZ: "Yalpi Ichki Mahsulot",
    quizQuestion: "GDP stands for...",
    quizOptions: ["Global Domestic Profit", "Gross Domestic Product", "Great Domestic Power", "Gross Development Plan"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "Exhilarating",
    ipa: "/ɪɡˈzɪləreɪtɪŋ/",
    form: "Adjective",
    definition: "Making you feel very happy, animated, and energetic.",
    example: "Visitors can enjoy **exhilarating** outdoor activities like bungee jumping.",
    translationRU: "Захватывающий",
    translationUZ: "Hayajonli / Zavqli",
    quizQuestion: "Which word describes a roller coaster ride?",
    quizOptions: ["Boring", "Exhilarating", "Depressing", "Calm"],
    quizCorrectIndex: 1
  },
  {
    id: 4,
    word: "Authentic",
    ipa: "/ɔːˈθɛntɪk/",
    form: "Adjective",
    definition: "Of undisputed origin; genuine.",
    example: "The campaign promoted **authentic** Maori culture.",
    translationRU: "Подлинный / Аутентичный",
    translationUZ: "Haqiqiy / Asl",
    quizQuestion: "If something is 'fake', it is NOT...",
    quizOptions: ["Expensive", "Authentic", "Modern", "Beautiful"],
    quizCorrectIndex: 1
  },
  {
    id: 5,
    word: "Blockbuster",
    ipa: "/ˈblɒkbʌstə/",
    form: "Noun (Collocation: Blockbuster films)",
    definition: "A thing of great power or size, in particular a movie, book, or other product that is a great commercial success.",
    example: "New Zealand scenery was used in several **blockbuster** films.",
    translationRU: "Кассовый хит (фильм)",
    translationUZ: "Kassabop film",
    quizQuestion: "A very popular and successful movie is often called a...",
    quizOptions: ["Flop", "Indie", "Blockbuster", "Short"],
    quizCorrectIndex: 2
  },
  {
    id: 6,
    word: "Scenic beauty",
    ipa: "/ˈsiːnɪk ˈbjuːti/",
    form: "Noun Phrase",
    definition: "Beautiful natural scenery.",
    example: "The **scenic beauty** of the mountains attracts many photographers.",
    translationRU: "Живописная красота",
    translationUZ: "Go'zal manzara",
    quizQuestion: "We stopped the car to admire the...",
    quizOptions: ["Traffic", "Scenic beauty", "Noise", "Pollution"],
    quizCorrectIndex: 1
  },
  {
    id: 7,
    word: "Customised",
    ipa: "/ˈkʌstəmaɪzd/",
    form: "Adjective",
    definition: "Modified or built according to individual or personal specifications.",
    example: "The website helps travelers create **customised** itineraries.",
    translationRU: "Индивидуальный / Настроенный",
    translationUZ: "Moslashtirilgan",
    quizQuestion: "A suit made exactly for your measurements is...",
    quizOptions: ["Standard", "Customised", "Cheap", "Random"],
    quizCorrectIndex: 1
  },
  {
    id: 8,
    word: "Devise",
    ipa: "/dɪˈvaɪz/",
    form: "Verb",
    definition: "Plan or invent (a complex procedure, system, or mechanism) by careful thought.",
    example: "They needed to **devise** a plan to increase tourism.",
    translationRU: "Разрабатывать / Придумывать",
    translationUZ: "O'ylab topmoq / Tuzmoq",
    quizQuestion: "Synonym for 'create' or 'invent' a plan:",
    quizOptions: ["Destroy", "Devise", "Ignore", "Forget"],
    quizCorrectIndex: 1
  },
  {
    id: 9,
    word: "Catalogued",
    ipa: "/ˈkat(ə)lɒɡd/",
    form: "Verb (Past Participle)",
    definition: "Make a systematic list of (items of the same type).",
    example: "The website **catalogued** the most popular driving routes.",
    translationRU: "Каталогизированный",
    translationUZ: "Kataloglashtirilgan",
    quizQuestion: "If books are listed systematically in a library, they are...",
    quizOptions: ["Lost", "Catalogued", "Thrown away", "Hidden"],
    quizCorrectIndex: 1
  },
  {
    id: 10,
    word: "Interactive",
    ipa: "/ˌɪntərˈaktɪv/",
    form: "Adjective",
    definition: "Allowing a two-way flow of information between a computer and a computer-user.",
    example: "The website features an **interactive** map.",
    translationRU: "Интерактивный",
    translationUZ: "Interaktiv",
    quizQuestion: "Video games are usually...",
    quizOptions: ["Passive", "Interactive", "Boring", "Silent"],
    quizCorrectIndex: 1
  }
];

// Vocabulary List for Passage 2
export const VOCAB_LIST_2: VocabItem[] = [
  {
    id: 11,
    word: "Stimulating",
    ipa: "/ˈstɪmjʊleɪtɪŋ/",
    form: "Adjective",
    definition: "Encouraging or arousing interest or enthusiasm.",
    example: "The article argues that being bored can actually be **stimulating**.",
    translationRU: "Стимулирующий",
    translationUZ: "Rag'batlantiruvchi",
    quizQuestion: "Something that makes you feel interested and energetic is...",
    quizOptions: ["Boring", "Stimulating", "Tiring", "Annoying"],
    quizCorrectIndex: 1
  },
  {
    id: 12,
    word: "Apathy",
    ipa: "/ˈapəθi/",
    form: "Noun",
    definition: "Lack of interest, enthusiasm, or concern.",
    example: "Boredom can include mental states such as frustration and **apathy**.",
    translationRU: "Апатия",
    translationUZ: "Befarqlik",
    quizQuestion: "A feeling of not caring about anything:",
    quizOptions: ["Energy", "Empathy", "Apathy", "Anger"],
    quizCorrectIndex: 2
  },
  {
    id: 13,
    word: "Indifference",
    ipa: "/ɪnˈdɪfrəns/",
    form: "Noun",
    definition: "Lack of interest, concern, or sympathy.",
    example: "He showed total **indifference** to the outcome of the match.",
    translationRU: "Безразличие",
    translationUZ: "Loqaydlik",
    quizQuestion: "If you don't care one way or the other, you show...",
    quizOptions: ["Love", "Hate", "Indifference", "Passion"],
    quizCorrectIndex: 2
  },
  {
    id: 14,
    word: "Agitated",
    ipa: "/ˈadʒɪteɪtɪd/",
    form: "Adjective",
    definition: "Feeling or appearing troubled or nervous.",
    example: "There is debate over whether feeling **agitated** counts as boredom.",
    translationRU: "Взволнованный / Возбужденный",
    translationUZ: "Bezovta",
    quizQuestion: "When you are restless and anxious, you are...",
    quizOptions: ["Calm", "Agitated", "Sleepy", "Happy"],
    quizCorrectIndex: 1
  },
  {
    id: 15,
    word: "Infectious",
    ipa: "/ɪnˈfɛkʃəs/",
    form: "Adjective",
    definition: "(of a disease or germ) likely to be transmitted to people, organisms, etc., through the environment.",
    example: "Boredom may protect humans from **infectious** social situations.",
    translationRU: "Инфекционный / Заразный",
    translationUZ: "Yuqumli",
    quizQuestion: "A disease that spreads easily is...",
    quizOptions: ["Healthy", "Infectious", "Safe", "Rare"],
    quizCorrectIndex: 1
  },
  {
    id: 16,
    word: "Calibrate",
    ipa: "/ˈkalɪbreɪt/",
    form: "Verb",
    definition: "To mark (a gauge or instrument) with a standard scale of readings.",
    example: "One type of boredom is described as **calibrating**.",
    translationRU: "Калибровать",
    translationUZ: "Sozlamoq",
    quizQuestion: "To adjust an instrument for accuracy:",
    quizOptions: ["Break", "Calibrate", "Guess", "Ignore"],
    quizCorrectIndex: 1
  },
  {
    id: 17,
    word: "Reactant",
    ipa: "/riˈakt(ə)nt/",
    form: "Adjective (in context)",
    definition: "Reacting; characterized by reaction. (In chemistry: a substance that takes part in and undergoes change during a reaction).",
    example: "The most damaging type is **reactant** boredom.",
    translationRU: "Реагирующий",
    translationUZ: "Reaksiyaga kirishuvchi",
    quizQuestion: "A type of boredom characterized by high arousal and negative emotion:",
    quizOptions: ["Indifferent", "Reactant", "Calming", "Searching"],
    quizCorrectIndex: 1
  },
  {
    id: 18,
    word: "Trait",
    ipa: "/treɪt/",
    form: "Noun",
    definition: "A distinguishing quality or characteristic, typically one belonging to a person.",
    example: "Researchers look for character **traits** that predict boredom types.",
    translationRU: "Черта (характера)",
    translationUZ: "Xususiyat",
    quizQuestion: "Honesty is a good character...",
    quizOptions: ["Trait", "Flaw", "Mistake", "Job"],
    quizCorrectIndex: 0
  },
  {
    id: 19,
    word: "Adaptive",
    ipa: "/əˈdaptɪv/",
    form: "Adjective",
    definition: "Characterized by or given to adaptation.",
    example: "Boredom might be an **adaptive** response to a problem.",
    translationRU: "Адаптивный",
    translationUZ: "Moslashuvchan",
    quizQuestion: "Able to change to suit different conditions:",
    quizOptions: ["Rigid", "Adaptive", "Broken", "Fixed"],
    quizCorrectIndex: 1
  },
  {
    id: 20,
    word: "Stimulation",
    ipa: "/ˌstɪmjʊˈleɪʃn/",
    form: "Noun",
    definition: "Action of arousing interest, enthusiasm, or excitement.",
    example: "In modern society there is a lot of over-**stimulation**.",
    translationRU: "Стимуляция",
    translationUZ: "Rag'batlantirish",
    quizQuestion: "Coffee provides mental...",
    quizOptions: ["Sleep", "Stimulation", "Boredom", "Silence"],
    quizCorrectIndex: 1
  }
];