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
                    { id: 18, label: "18", type: QuestionType.DROPDOWN, options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "viii" }, // Para E
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
  },
  {
    id: 'cam-13-test-2',
    title: 'Cambridge 13 Test 2 Reading Passage',
    passages: [
      {
        id: 1,
        title: "Reading Passage 1: Bringing cinnamon to Europe",
        content: [
          "Cinnamon is a sweet, fragrant spice produced from the inner bark of trees of the genus Cinnamomum, which is native to the Indian sub-continent. It was known in biblical times, and is mentioned in several books of the Bible, both as an ingredient that was mixed with oils for anointing people’s bodies, and also as a token indicating friendship among lovers and friends. In ancient Rome, mourners attending funerals burnt cinnamon to create a pleasant scent. Most often, however, the spice found its primary use as an additive to food and drink. In the Middle Ages, Europeans who could afford the spice used it to flavour food, particularly meat, and to impress those around them with their ability to purchase an expensive condiment from the ‘exotic’ East. At a banquet, a host would offer guests a plate with various spices piled upon it as a sign of the wealth at his or her disposal. Cinnamon was also reported to have health benefits, and was thought to cure various ailments, such as indigestion.",
          "Toward the end of the Middle Ages, the European middle classes began to desire the lifestyle of the elite, including their consumption of spices. This led to a growth in demand for cinnamon and other spices. At that time, cinnamon was transported by Arab merchants, who closely guarded the secret of the source of the spice from potential rivals. They took it from India, where it was grown, on camels via an overland route to the Mediterranean. Their journey ended when they reached Alexandria. European traders sailed there to purchase their supply of cinnamon, then brought it back to Venice. The spice then travelled from that great trading city to markets all around Europe. Because the overland trade route allowed for only small quantities of the spice to reach Europe, and because Venice had a virtual monopoly of the trade, the Venetians could set the price of cinnamon exorbitantly high. These prices, coupled with the increasing demand, spurred the search for new routes to Asia by Europeans eager to take part in the spice trade.",
          "Seeking the high profits promised by the cinnamon market, Portuguese traders finally landed on the island of Ceylon in the Indian Ocean towards the end of the 15th century. Before this, the Venetians had held a monopoly on the spice trade in Europe, selling cinnamon at very high prices. The Portuguese established a base in Ceylon, but were later ousted by the Dutch, who then took control of the cinnamon trade. Before Europeans arrived on the island, the state had organized the cultivation of cinnamon. People belonging to the ethnic group called the Salagama would peel the bark off young shoots of the cinnamon plant in the rainy season, when the wet bark was more pliable. During the peeling process, they curled the bark into the 'stick' shape still associated with the spice today. The Salagama then gave the finished product to the king as a form of tribute. When the Portuguese arrived, they needed to increase production significantly, and so enslaved many other members of the Ceylonese native population, forcing them to work in cinnamon harvesting. In 1518, the Portuguese built a fort on Ceylon, which enabled them to protect the island, so helping them to develop a monopoly in the cinnamon trade. In the late 16th century, for example, they enjoyed a tenfold profit when shipping cinnamon over a journey of eight days from Ceylon to India.",
          "When the Dutch arrived off the coast of southern Asia at the very beginning of the 17th century, they set their sights on displacing the Portuguese as kings of cinnamon. The Dutch allied themselves with Kandy, an inland kingdom on Ceylon. In return for payments of elephants and cinnamon, they protected the native king from the Portuguese. By 1640, the Dutch broke the 150-year Portuguese monopoly when they overran and occupied their factories. By 1658, they had permanently expelled the Portuguese from the island, thereby gaining control of the lucrative cinnamon trade.",
          "In order to protect their hold on the market, the Dutch, like the Portuguese before them, treated the native inhabitants harshly. Because of the need to boost production and satisfy Europe's ever-increasing appetite for cinnamon, the Dutch began to alter the harvesting practices of the Ceylonese. Over time, the supply of cinnamon trees on the island became nearly exhausted, due to systematic stripping of the bark. Eventually, the Dutch began cultivating their own trees to supplement the wild supply."
        ],
        questionGroups: [
            {
                id: "group1",
                instruction: "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.",
                renderType: "TABLE",
                tableData: {
                    headers: ["Time Period", "Details"],
                    rows: [
                        {
                            cells: [
                                { text: "Biblical Times" },
                                { bulletPoints: true, text: "added to {{1}}" }
                            ]
                        },
                        {
                            cells: [
                                { text: "Ancient Rome" },
                                { bulletPoints: true, text: "used at {{2}}" }
                            ]
                        },
                        {
                            cells: [
                                { text: "Middle Ages" },
                                { bulletPoints: true, text: "an indication of {{3}}<br/>known as a treatment for {{4}}" }
                            ]
                        },
                        {
                            cells: [
                                { text: "Late Middle Ages" },
                                { bulletPoints: true, text: "grown in {{5}}<br/>transported to the Mediterranean by {{6}}<br/>arrived in {{7}}<br/>taken to {{8}}" }
                            ]
                        },
                        {
                            cells: [
                                { text: "16th Century" },
                                { bulletPoints: true, text: "Portuguese traders arrived in {{9}}" }
                            ]
                        }
                    ]
                },
                questions: [
                    { id: 1, label: "1", type: QuestionType.INPUT, correctAnswer: "oils" },
                    { id: 2, label: "2", type: QuestionType.INPUT, correctAnswer: "funerals" },
                    { id: 3, label: "3", type: QuestionType.INPUT, correctAnswer: "wealth" },
                    { id: 4, label: "4", type: QuestionType.INPUT, correctAnswer: "indigestion" },
                    { id: 5, label: "5", type: QuestionType.INPUT, correctAnswer: "India" },
                    { id: 6, label: "6", type: QuestionType.INPUT, correctAnswer: "camels" },
                    { id: 7, label: "7", type: QuestionType.INPUT, correctAnswer: "Alexandria" },
                    { id: 8, label: "8", type: QuestionType.INPUT, correctAnswer: "Venice" },
                    { id: 9, label: "9", type: QuestionType.INPUT, correctAnswer: "Ceylon" }
                ]
            },
            {
                id: "group2",
                instruction: "Do the following statements agree with the information given in Reading Passage 1? In boxes 10-13 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
                renderType: "LIST",
                questions: [
                    { id: 10, label: "10", questionText: "The Portuguese established a monopoly on the European cinnamon trade in the 16th century.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
                    { id: 11, label: "11", questionText: "The Dutch took control of the cinnamon trade from the Portuguese as soon as they arrived in the Indian Ocean.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
                    { id: 12, label: "12", questionText: "The Dutch treated the native people of Ceylon more kindly than the Portuguese had.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
                    { id: 13, label: "13", questionText: "The Dutch began cultivating cinnamon trees because the wild trees were running out.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" }
                ]
            }
        ]
      },
      {
        id: 2,
        title: "Reading Passage 2: Oxytocin",
        content: [
            "<span class='font-bold text-lg'>A</span> Oxytocin is a chemical, a hormone produced in the pituitary gland in the brain. It was through various studies focusing on animals that scientists first became aware of the influence of oxytocin. They discovered that it helps reinforce the bonds between prairie voles, which mate for life, and triggers the motherly behaviour that sheep show towards their newborn lambs. It is also released by women in childbirth, strengthening the attachment between mother and baby. Few chemicals have as positive a reputation as oxytocin, which is sometimes referred to as the 'love hormone'. One sniff of it can, it is claimed, make a person more trusting, empathetic, generous and cooperative. It is time, however, to revise this wholly optimistic view. A new wave of studies has shown that its effects vary greatly depending on the person and the circumstances, and it can impact on our social interactions for worse as well as for better.",
            "<span class='font-bold text-lg'>B</span> Oxytocin’s role in human behaviour first emerged in 2005. In a groundbreaking experiment, Markus Heinrichs and his colleagues at the University of Freiburg, Germany, asked volunteers to do an activity in which they could invest money with an anonymous person who was not guaranteed to be honest. The team found that participants who had sniffed oxytocin via a nasal spray beforehand invested more money than those who received a placebo instead. The study was the start of research into the effects of oxytocin on human interactions. 'For eight years, it was quite a lonesome field,' Heinrichs recalls. 'Now, everyone is interested.' These follow-up studies have shown that after a sniff of the hormone, people become more charitable, better at reading emotions on others’ faces and at communicating constructively in arguments. Together, the results fuelled the view that oxytocin universally enhanced the positive aspects of our social nature.",
            "<span class='font-bold text-lg'>C</span> Then, after a few years, contrasting findings began to emerge. Simone Shamay-Tsoory at the University of Haifa, Israel, found that when volunteers played a competitive game, those who inhaled the hormone showed more pleasure when they beat other players, and felt more envy when others won. What’s more, administering oxytocin also has sharply contrasting outcomes depending on a person’s disposition. Jennifer Bartz from Mount Sinai School of Medicine, New York, found that it improved the ability of people with autism to read emotions, but decreased it in those without the condition."
        ],
        questionGroups: []
      }
    ]
  }
];

export const VOCAB_LIST: VocabItem[] = [
  {
    id: 1,
    word: "exhilarating",
    ipa: "/ɪɡˈzɪləreɪtɪŋ/",
    form: "adjective",
    definition: "Making one feel very happy, animated, or elated; thrilling.",
    example: "The campaign focused on New Zealand’s scenic beauty and exhilarating outdoor activities.",
    translationRU: "волнующий",
    translationUZ: "hayajonli",
    quizQuestion: "Which word describes a feeling of great happiness and excitement?",
    quizOptions: ["Boring", "Exhilarating", "Depressing", "Calm"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "authentic",
    ipa: "/ɔːˈθɛntɪk/",
    form: "adjective",
    definition: "Of undisputed origin and not a copy; genuine.",
    example: "They promoted authentic Maori culture.",
    translationRU: "подлинный",
    translationUZ: "haqiqiy",
    quizQuestion: "What is a synonym for 'genuine'?",
    quizOptions: ["Fake", "Authentic", "Expensive", "Modern"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "itinerary",
    ipa: "/ʌɪˈtɪn(ə)(rə)ri/",
    form: "noun",
    definition: "A planned route or journey.",
    example: "The site helped travellers devise their own customised itineraries.",
    translationRU: "маршрут",
    translationUZ: "yo'nalish",
    quizQuestion: "A plan of a journey, including the route and the places that you visit.",
    quizOptions: ["Map", "Ticket", "Itinerary", "Guide"],
    quizCorrectIndex: 2
  },
  {
    id: 4,
    word: "blockbuster",
    ipa: "/ˈblɒkbʌstə/",
    form: "noun",
    definition: "A thing of great power or size, in particular a movie, book, or other product that is a great commercial success.",
    example: "Locations chosen for blockbuster films.",
    translationRU: "блокбастер",
    translationUZ: "mashhur film",
    quizQuestion: "A very successful film or book.",
    quizOptions: ["Flop", "Indie", "Blockbuster", "Short"],
    quizCorrectIndex: 2
  },
  {
    id: 5,
    word: "backdrop",
    ipa: "/ˈbakdrɒp/",
    form: "noun",
    definition: "The setting or background for a scene, event, or situation.",
    example: "Stunning scenery as a backdrop.",
    translationRU: "фон",
    translationUZ: "orqa fon",
    quizQuestion: "Everything that can be seen around an event or scene.",
    quizOptions: ["Foreground", "Backdrop", "Prop", "Screen"],
    quizCorrectIndex: 1
  }
];

export const VOCAB_LIST_2: VocabItem[] = [
  {
    id: 1,
    word: "agitated",
    ipa: "/ˈadʒɪteɪtɪd/",
    form: "adjective",
    definition: "Feeling or appearing troubled or nervous.",
    example: "Whether feeling agitated and restless counts as boredom.",
    translationRU: "взволнованный",
    translationUZ: "hayajonlangan",
    quizQuestion: "Feeling nervous or restless.",
    quizOptions: ["Calm", "Agitated", "Happy", "Sleepy"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "apathy",
    ipa: "/ˈapəθi/",
    form: "noun",
    definition: "Lack of interest, enthusiasm, or concern.",
    example: "It can include mental states such as frustration and apathy.",
    translationRU: "апатия",
    translationUZ: "befarqlik",
    quizQuestion: "Lack of interest or emotion.",
    quizOptions: ["Passion", "Apathy", "Energy", "Love"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "calibrate",
    ipa: "/ˈkalɪbreɪt/",
    form: "verb",
    definition: "Mark (a gauge or instrument) with a standard scale of readings.",
    example: "Indifferent, calibrating, searching, reactant.",
    translationRU: "калибрировать",
    translationUZ: "sozlash",
    quizQuestion: "To adjust or mark something carefully.",
    quizOptions: ["Break", "Calibrate", "Guess", "Ignore"],
    quizCorrectIndex: 1
  },
  {
    id: 4,
    word: "arousal",
    ipa: "/əˈraʊzl/",
    form: "noun",
    definition: "The action or fact of rousing or being roused; physiological state of being awake or reactive.",
    example: "Measures low to high arousal.",
    translationRU: "возбуждение",
    translationUZ: "uyg'onish",
    quizQuestion: "A state of high energy or alertness.",
    quizOptions: ["Sleep", "Arousal", "Boredom", "Peace"],
    quizCorrectIndex: 1
  },
  {
    id: 5,
    word: "adaptive",
    ipa: "/əˈdaptɪv/",
    form: "adjective",
    definition: "Characterized by or showing the capacity for adaptation.",
    example: "It may be a useful adaptive response.",
    translationRU: "адаптивный",
    translationUZ: "moslashuvchan",
    quizQuestion: "Able to change to suit new conditions.",
    quizOptions: ["Rigid", "Adaptive", "Slow", "Weak"],
    quizCorrectIndex: 1
  }
];

export const VOCAB_LIST_3: VocabItem[] = [
  {
    id: 1,
    word: "enraptured",
    ipa: "/ɪnˈraptʃəd/",
    form: "adjective",
    definition: "Give intense pleasure or joy to.",
    example: "Classical music by an artificial composer has had audiences enraptured.",
    translationRU: "восхищенный",
    translationUZ: "maftun bo'lgan",
    quizQuestion: "Filled with delight.",
    quizOptions: ["Bored", "Enraptured", "Angry", "Sad"],
    quizCorrectIndex: 1
  },
  {
    id: 2,
    word: "prestigious",
    ipa: "/prɛˈstɪdʒəs/",
    form: "adjective",
    definition: "Inspiring respect and admiration; having high status.",
    example: "Hung in prestigious galleries.",
    translationRU: "престижный",
    translationUZ: "nufuzli",
    quizQuestion: "Having a high reputation.",
    quizOptions: ["Common", "Prestigious", "Cheap", "Unknown"],
    quizCorrectIndex: 1
  },
  {
    id: 3,
    word: "lauded",
    ipa: "/ˈlɔːdɪd/",
    form: "verb (past)",
    definition: "Highly praised or admired.",
    example: "Human artists like Ellsworth Kelly are lauded for limiting their colour palette.",
    translationRU: "прославленный",
    translationUZ: "maqtovga sazovor",
    quizQuestion: "Praised highly.",
    quizOptions: ["Criticized", "Lauded", "Ignored", "Hated"],
    quizCorrectIndex: 1
  },
  {
    id: 4,
    word: "pseudoscience",
    ipa: "/ˌsjuːdəʊˈsʌɪəns/",
    form: "noun",
    definition: "A collection of beliefs or practices mistakenly regarded as being based on scientific method.",
    example: "Blasted Cope’s work as pseudoscience.",
    translationRU: "лженаука",
    translationUZ: "soxta ilm",
    quizQuestion: "Fake science.",
    quizOptions: ["Biology", "Pseudoscience", "Physics", "Chemistry"],
    quizCorrectIndex: 1
  },
  {
    id: 5,
    word: "recoil",
    ipa: "/rɪˈkɔɪl/",
    form: "verb",
    definition: "Suddenly spring or flinch back in fear, horror, or disgust.",
    example: "Yet recoil when they discovered how it was composed.",
    translationRU: "отшатнуться",
    translationUZ: "cho'chimoq",
    quizQuestion: "To pull back in fear or disgust.",
    quizOptions: ["Advance", "Recoil", "Jump", "Smile"],
    quizCorrectIndex: 1
  }
];