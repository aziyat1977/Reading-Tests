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
                                { bulletPoints: true, text: "added to {{1}}<br/>used to show {{2}} between people" }
                            ]
                        },
                        {
                            cells: [
                                { text: "Ancient Rome" },
                                { bulletPoints: true, text: "used at {{3}}" }
                            ]
                        },
                        {
                            cells: [
                                { text: "Middle Ages" },
                                { bulletPoints: true, text: "an indication of {{4}}<br/>known as a treatment for {{5}}" }
                            ]
                        },
                        {
                            cells: [
                                { text: "Late Middle Ages" },
                                { bulletPoints: true, text: "grown in {{6}}<br/>transported to the Mediterranean by {{7}}<br/>arrived in {{8}}<br/>taken to {{9}}" }
                            ]
                        }
                    ]
                },
                questions: [
                    { id: 1, label: "1", type: QuestionType.INPUT, correctAnswer: "oils" },
                    { id: 2, label: "2", type: QuestionType.INPUT, correctAnswer: "friendship" },
                    { id: 3, label: "3", type: QuestionType.INPUT, correctAnswer: "funerals" },
                    { id: 4, label: "4", type: QuestionType.INPUT, correctAnswer: "wealth" },
                    { id: 5, label: "5", type: QuestionType.INPUT, correctAnswer: "indigestion" },
                    { id: 6, label: "6", type: QuestionType.INPUT, correctAnswer: "India" },
                    { id: 7, label: "7", type: QuestionType.INPUT, correctAnswer: "camels" },
                    { id: 8, label: "8", type: QuestionType.INPUT, correctAnswer: "Alexandria" },
                    { id: 9, label: "9", type: QuestionType.INPUT, correctAnswer: "Venice" }
                ]
            },
            {
                id: "group2",
                instruction: "Do the following statements agree with the information given in Reading Passage 1? In boxes 10-13 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
                renderType: "LIST",
                questions: [
                    { id: 10, label: "10", questionText: "The Portuguese established a monopoly on the European cinnamon trade in the 16th century.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
                    { id: 11, label: "11", questionText: "The Dutch took control of the cinnamon trade from the Portuguese as soon as they arrived in the Indian Ocean.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
                    { id: 12, label: "12", questionText: "The Dutch treated the native people of Ceylon more kindly than the Portuguese had.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
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
            "<span class='font-bold text-lg'>C</span> Then, after a few years, contrasting findings began to emerge. Simone Shamay-Tsoory at the University of Haifa, Israel, found that when volunteers played a competitive game, those who inhaled the hormone showed more pleasure when they beat other players, and felt more envy when others won. What’s more, administering oxytocin also has sharply contrasting outcomes depending on a person’s disposition. Jennifer Bartz from Mount Sinai School of Medicine, New York, found that it improved the ability of people with autism to read emotions, but decreased it in those without the condition.",
            "<span class='font-bold text-lg'>D</span> Another discovery is that oxytocin’s effects vary depending on who we are interacting with. Studies conducted by Carolyn DeClerck of the University of Antwerp, Belgium, revealed that people who had received a dose of oxytocin actually became less cooperative when dealing with complete strangers. Meanwhile, Carsten De Dreu at the University of Amsterdam in the Netherlands discovered that volunteers given oxytocin showed favouritism: Dutch men became quicker to associate positive words with Dutch names than with foreign ones, for example. According to De Dreu, oxytocin drives people to care for those in their social circles and defend them from outside dangers. So, it appears that oxytocin strengthens biases, rather than promoting general goodwill, as was previously thought.",
            "<span class='font-bold text-lg'>E</span> There were signs of these subtleties from the start. Bartz has recently shown that in almost half of the existing research results, oxytocin influenced only certain individuals or in certain circumstances. Where once researchers took no notice of such findings, now a more nuanced understanding of oxytocin’s effects is propelling investigations down new lines.",
            "<span class='font-bold text-lg'>F</span> To Bartz, the key to understanding what the hormone does lies in pinpointing its core function rather than in cataloguing its seemingly endless effects. There are several hypotheses which are not mutually exclusive. Oxytocin could help to reduce anxiety and fear. Or it could simply motivate people to seek out social connections and improve their interactions with others."
        ],
        questionGroups: [
            {
                id: "group2-1",
                instruction: "Reading Passage 2 has six paragraphs, A-F. Which paragraph contains the following information?",
                renderType: "LIST",
                questions: [
                    { id: 14, label: "14", questionText: "Reference to research showing the beneficial effects of oxytocin on people", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "B" },
                    { id: 15, label: "15", questionText: "Reasons why the effects of oxytocin are complex", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "F" },
                    { id: 16, label: "16", questionText: "Mention of a period in which oxytocin attracted little scientific attention", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "B" },
                    { id: 17, label: "17", questionText: "Reference to people ignoring certain aspects of their research data", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "E" }
                ]
            },
            {
                id: "group2-2",
                instruction: "Look at the following researchers and the list of findings below. Match each researcher with the correct finding.",
                renderType: "LIST",
                questions: [
                    { id: 18, label: "18", questionText: "People are more trusting when affected by oxytocin.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E"], correctAnswer: "A" },
                    { id: 19, label: "19", questionText: "Oxytocin increases people's feelings of jealousy.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E"], correctAnswer: "B" },
                    { id: 20, label: "20", questionText: "The effect of oxytocin varies from one type of person to another.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D", "E"], correctAnswer: "C" }
                ]
            },
            {
                id: "group2-3",
                instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
                renderType: "TABLE",
                tableData: {
                  headers: [],
                  rows: [
                    {
                      cells: [
                        {
                          text: `
                          <h4 class='font-bold mb-2'>Oxytocin research</h4>
                          <p class='mb-4 leading-relaxed'>
                          The earliest findings about oxytocin came from research involving {{21}}. It was also discovered that humans produce oxytocin during {{22}}. A more recent study suggests that oxytocin may increase a person's {{23}} in others. However, it can also affect our feelings of {{24}} towards people we consider to be outsiders.
                          </p>
                          `,
                          bulletPoints: false
                        }
                      ]
                    },
                     {
                      cells: [
                        {
                          text: `
                          <p class='mb-4 leading-relaxed'>
                          In 2005, a study was carried out in Germany which showed that people who were given oxytocin were more likely to trust strangers with their money than those who were given a {{23}}. Another experiment showed that participants in a {{24}} felt more pleasure when they won than when they lost. 
                          </p>
                          <p class='mb-4 leading-relaxed'>
                          Later research has challenged the idea that oxytocin always has a positive effect. For example, a study at the University of Antwerp showed that people were less willing to help {{25}} when under the influence of oxytocin. Another study in Amsterdam showed that men associated positive words with {{26}} that were familiar to them.
                          </p>
                          `,
                          bulletPoints: false
                        }
                      ]
                    }
                  ]
                },
                questions: [
                    { id: 21, label: "21", type: QuestionType.INPUT, correctAnswer: "animals" },
                    { id: 22, label: "22", type: QuestionType.INPUT, correctAnswer: "childbirth" },
                    { id: 23, label: "23", type: QuestionType.INPUT, correctAnswer: "placebo" },
                    { id: 24, label: "24", type: QuestionType.INPUT, correctAnswer: "game" },
                    { id: 25, label: "25", type: QuestionType.INPUT, correctAnswer: "strangers" },
                    { id: 26, label: "26", type: QuestionType.INPUT, correctAnswer: "names" }
                ]
            }
        ]
      },
      {
        id: 3,
        title: "Reading Passage 3: Making the most of trends",
        content: [
           "Managers who want to succeed in business need to spot trends and then work out how to use them to their advantage. A trend is not just a fad or a temporary fashion; it is a significant change in the way people live or work. Trends can be demographic, such as the aging population in many developed countries, or technological, such as the rise of smartphones and social media. They can also be social, such as the increasing concern for the environment and sustainability.",
           "One way to spot trends is to look for anomalies or things that do not fit the established pattern. For example, the rise of low-cost airlines was an anomaly in the airline industry, which had previously been dominated by large, full-service carriers. Another way to spot trends is to look for convergences, where two or more trends come together to create a new opportunity. For example, the convergence of mobile technology and social media has created new opportunities for businesses to engage with customers. Kodak failed to respond to the trend towards digital photography, and as a result, it lost its dominant position.",
           "Once a trend has been identified, managers need to decide how to respond to it. One strategy, known as 'infuse and augment', is to design a product or service that retains most of the attributes and functions of existing products in the category but adds others that address the needs and desires triggered by a new trend. A case in point is the Poppy line of handbags, which the firm **Coach** created in response to the economic downturn of 2008. The Coach brand had been a symbol of opulence and luxury for nearly 70 years, and the most obvious reaction to the downturn would have been to lower prices. However, that would have risked cheapening the brand’s image. Instead, they initiated a consumer-research project which revealed that customers were eager to lift themselves and the country out of tough times. Using these insights, Coach launched the new line, which was affordable but still carried the brand's prestige, successfully avoiding the need to cut prices. on its core products.",
           "Another strategy is to 'combine and transcend'. This is a great strategy for integrating work and life, or two distinct worlds. **Nike**’s move to integrate the digital revolution into its reputation for high-performance athletic footwear is a perfect example. In 2006, they teamed up with technology company Apple to launch Nike+, a digital sports kit comprising a sensor that attaches to a running shoe and a wireless receiver that connects to an iPod. This allowed runners to track their performance and listen to music simultaneously.",
           "The 'counteract and affirm' strategy involves developing products or services that stress the values traditionally associated with the category in ways that allow consumers to oppose—or at least temporarily escape from—the aspects of trends they view as negative. **iToys** used this strategy with its ME2, a video game controller that counteracts the perceived negative effects of digital gaming, such as physical inactivity. The ME2 controller allows players to use their physical movement to control the game, turning the notion that gaming is lazy to its own advantage.",
           "Finally, **Tesco**, the UK retailer, used a strategy to respond to the growing lifestyle trend of environmental responsibility in the grocery sector. Their 'Greener Living' program demonstrated that the company cared about the environment by implementing an incentive scheme where customers earned points for reusing bags and recycling. This allowed them to respond to a trend in a sector unrelated to their core product of selling food, showing corporate social responsibility."
        ],
        questionGroups: [
             {
                id: "group3-1",
                instruction: "Choose the correct letter, A, B, C or D.",
                renderType: "LIST",
                questions: [
                    { 
                        id: 27, 
                        label: "27", 
                        questionText: "According to the writer, a trend is distinct from a fad because it", 
                        type: QuestionType.RADIO, 
                        options: ["lasts for a shorter period of time.", "affects a smaller number of people.", "involves a fundamental shift in behavior.", "is easier to predict."], 
                        correctAnswer: "involves a fundamental shift in behavior." 
                    },
                    { 
                        id: 28, 
                        label: "28", 
                        questionText: "The writer mentions low-cost airlines as an example of", 
                        type: QuestionType.RADIO, 
                        options: ["a convergence of trends.", "an anomaly in the market.", "a technological innovation.", "a demographic shift."], 
                        correctAnswer: "an anomaly in the market." 
                    },
                     { 
                        id: 29, 
                        label: "29", 
                        questionText: "What was Kodak's mistake?", 
                        type: QuestionType.RADIO, 
                        options: ["It tried to influence government policy.", "It ignored a significant trend.", "It adapted too slowly to change.", "It focused too much on innovation."], 
                        correctAnswer: "It ignored a significant trend." 
                    },
                    { 
                        id: 30, 
                        label: "30", 
                        questionText: "The 'infuse and augment' strategy involves", 
                        type: QuestionType.RADIO, 
                        options: ["completely replacing existing products.", "ignoring new market trends.", "lowering prices to attract customers.", "adding new features to an existing product."], 
                        correctAnswer: "adding new features to an existing product." 
                    },
                    { 
                        id: 31, 
                        label: "31", 
                        questionText: "The 'combine and transcend' strategy", 
                        type: QuestionType.RADIO, 
                        options: ["focuses on traditional values.", "creates a new product by joining two existing ones.", "keeps the product price high.", "targets only one specific market segment."], 
                        correctAnswer: "creates a new product by joining two existing ones." 
                    }
                ]
            },
            {
                id: "group3-2",
                instruction: `
                    <p class='mb-2'>Look at the following statements (Questions 32-37) and the list of companies below.</p>
                    <p class='mb-4'>Match each statement with the correct company, <strong>A, B, C or D</strong>.</p>
                    <div class='border border-gray-300 p-3 bg-gray-50 text-sm w-1/2'>
                        <h5 class='font-bold mb-2'>List of Companies</h5>
                        <ul class='space-y-1'>
                            <li><strong>A</strong> Coach</li>
                            <li><strong>B</strong> Tesco</li>
                            <li><strong>C</strong> Nike</li>
                            <li><strong>D</strong> iToys</li>
                        </ul>
                    </div>
                `,
                renderType: "LIST",
                questions: [
                   { id: 32, label: "32", questionText: "It turned the notion that its products could have harmful effects to its own advantage.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "D" },
                   { id: 33, label: "33", questionText: "It extended its offering by collaborating with another manufacturer.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "C" },
                   { id: 34, label: "34", questionText: "It implemented an incentive scheme to demonstrate its corporate social responsibility.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "B" },
                   { id: 35, label: "35", questionText: "It discovered that customers had a positive attitude towards dealing with difficult circumstances.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "A" },
                   { id: 36, label: "36", questionText: "It responded to a growing lifestyle trend in an unrelated product sector.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "C" },
                   { id: 37, label: "37", questionText: "It successfully avoided having to charge its customers less for its core products.", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "A" }
                ]
            },
            {
                id: "group3-3",
                instruction: "Complete each sentence with the correct ending, A, B, C or D below.",
                renderType: "TABLE",
                tableData: {
                    headers: [],
                    rows: [
                        { cells: [{ text: "<strong>A</strong> employ a combination of strategies to maintain your consumer base." }] },
                        { cells: [{ text: "<strong>B</strong> identify the most appropriate innovation strategy to use." }] },
                        { cells: [{ text: "<strong>C</strong> emphasise your brand's traditional values with the counteract-and-affirm strategy." }] },
                        { cells: [{ text: "<strong>D</strong> use the combine-and-transcend strategy to integrate the two worlds." }] }
                    ]
                },
                questions: [
                   { id: 38, label: "38", questionText: "If there are any trend-related changes impacting on your category, you should", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "B" },
                   { id: 39, label: "39", questionText: "If a current trend highlights a negative aspect of your category, you should", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "C" },
                   { id: 40, label: "40", questionText: "If the consumers' new focus has an increasing lack of connection with your offering, you should", type: QuestionType.DROPDOWN, options: ["A", "B", "C", "D"], correctAnswer: "D" }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'news-tfng-2025',
    title: 'Breaking News: T/F/NG Mini-Drills (Dec 2025)',
    passages: [
      {
        id: 1,
        title: "Passage 1: Solar Physics",
        content: [
          "Recent data from NASA’s Parker Solar Probe has provided unprecedented insights into the behaviour of the solar wind. For the first time, the probe observed a magnetic 'U-turn' in the stream of charged particles emanating from the Sun. Previously, astronomers believed these reversals—known as 'switchbacks'—were rare anomalies confined to the Sun's outer corona. However, the new findings suggest they are a fundamental feature of solar wind acceleration. The probe’s proximity to the star allowed it to detect that these magnetic kinks release large bursts of energy, potentially solving the long-standing mystery of why the Sun's atmosphere is millions of degrees hotter than its surface."
        ],
        contentRU: [
           "Недавние данные с солнечного зонда NASA Parker Solar Probe позволили получить беспрецедентное представление о поведении солнечного ветра. Впервые зонд наблюдал магнитный «разворот» в потоке заряженных частиц, исходящих от Солнца. Ранее астрономы полагали, что эти развороты, известные как «switchbacks» (обратные переключения), были редкими аномалиями, ограниченными внешней короной Солнца. Однако новые данные свидетельствуют о том, что они являются фундаментальной особенностью ускорения солнечного ветра. Близость зонда к звезде позволила обнаружить, что эти магнитные изгибы высвобождают большие всплески энергии, что потенциально может решить давнюю загадку того, почему атмосфера Солнца на миллионы градусов горячее его поверхности."
        ],
        contentUZ: [
           "NASAning Parker quyosh zondi tomonidan olingan so'nggi ma'lumotlar quyosh shamolining harakati haqida misli ko'rilmagan tushunchalarni taqdim etdi. Zond birinchi marta Quyoshdan chiqadigan zaryadlangan zarralar oqimida magnitli 'burilish'ni kuzatdi. Ilgari astronomlar 'switchbacks' (qayta ulanishlar) deb nomlanuvchi ushbu teskari burilishlar Quyoshning tashqi toji bilan cheklangan noyob anomaliyalar deb hisoblashgan. Biroq, yangi topilmalar shuni ko'rsatadiki, ular quyosh shamolining tezlashishining asosiy xususiyatidir. Zondning yulduzga yaqinligi ushbu magnit burilishlar katta energiya portlashlarini chiqarishini aniqlashga imkon berdi, bu esa Quyosh atmosferasi nima uchun uning sirtidan millionlab daraja issiqroq ekanligi haqidagi uzoq yillik sirni hal qilishi mumkin."
        ],
        questionGroups: [
          {
            id: "tfng-1",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 1-3 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 1, label: "1", questionText: "The Parker Solar Probe is the first spacecraft to enter the Sun's outer corona.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
              { id: 2, label: "2", questionText: "Scientists used to think that 'switchbacks' were uncommon events.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 3, label: "3", questionText: "The recent findings definitely prove the cause of the temperature difference between the Sun's surface and its atmosphere.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Passage 2: AI and The Labour Market",
        content: [
          "The narrative that artificial intelligence will inevitably lead to mass unemployment is being challenged by leading economists, including Nobel laureate Peter Howitt. While generative AI tools like ChatGPT have sparked fears of redundancy among white-collar workers, historical precedents suggest a different outcome. Much like the steam engine or electrification, AI is likely to act as a 'general-purpose technology,' creating new categories of employment that are currently unimaginable. However, Howitt warns that this transition will not be painless. Without targeted government policies to retrain displaced workers, the immediate result may be a sharp rise in income inequality, as the financial benefits of increased productivity disproportionately accrue to those who own the technology."
        ],
        contentRU: [
            "Мнение о том, что искусственный интеллект неизбежно приведет к массовой безработице, оспаривается ведущими экономистами, в том числе нобелевским лауреатом Питером Хауиттом. В то время как генеративные инструменты ИИ, такие как ChatGPT, вызвали опасения по поводу сокращения штатов среди офисных работников, исторические прецеденты предполагают другой исход. Подобно паровому двигателю или электрификации, ИИ, вероятно, будет действовать как «технология общего назначения», создавая новые категории занятости, которые в настоящее время невообразимы. Однако Хауитт предупреждает, что этот переход не будет безболезненным. Без целенаправленной государственной политики по переподготовке уволенных работников немедленным результатом может стать резкий рост неравенства доходов, поскольку финансовые выгоды от повышения производительности несоразмерно достаются тем, кто владеет технологией."
        ],
        contentUZ: [
            "Sun'iy intellekt muqarrar ravishda ommaviy ishsizlikka olib kelishi haqidagi qarashlar yetakchi iqtisodchilar, jumladan Nobel mukofoti laureati Piter Xouitt tomonidan shubha ostiga olinmoqda. ChatGPT kabi generativ sun'iy intellekt vositalari ofis xodimlari orasida qisqartirish qo'rquvini keltirib chiqargan bo'lsa-da, tarixiy misollar boshqacha natijani taxmin qilmoqda. Bug' dvigateli yoki elektrlashtirish singari, sun'iy intellekt ham 'umumiy maqsadli texnologiya' sifatida harakat qilib, hozirda tasavvur qilib bo'lmaydigan yangi ish o'rinlari toifalarini yaratishi mumkin. Biroq, Xouitt bu o'tish og'riqsiz bo'lmasligidan ogohlantirmoqda. Ishdan bo'shatilgan xodimlarni qayta tayyorlash bo'yicha maqsadli davlat siyosatisiz, uning bevosita natijasi daromadlar tengsizligining keskin o'sishi bo'lishi mumkin, chunki samaradorlikni oshirishdan keladigan moliyaviy foyda asosan texnologiyaga egalik qiluvchilarga to'g'ri keladi."
        ],
        questionGroups: [
          {
            id: "tfng-2",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 4-6 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 4, label: "4", questionText: "Peter Howitt believes that the impact of AI will differ significantly from that of the steam engine.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 5, label: "5", questionText: "There are currently no government policies in place to retrain workers displaced by AI.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
              { id: 6, label: "6", questionText: "Howitt argues that the primary risk of AI adoption is a widening gap between the rich and the poor, rather than total job loss.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Passage 3: The Origins of Fire",
        content: [
          "A groundbreaking study from an archaeological site at East Farm, England, has pushed back the timeline of human fire-making by nearly 250,000 years. Researchers discovered flint handaxes that had been shattered by intense heat, alongside fragments of iron pyrite—a mineral used to create sparks. This evidence suggests that Neanderthals were not merely scavenging fire from natural wildfires, as previously thought, but were deliberately manufacturing it as early as 400,000 years ago. If verified, this would indicate that Neanderthals possessed a level of cognitive planning and technical skill that was once considered exclusive to <em>Homo sapiens</em>."
        ],
        contentRU: [
            "Новаторское исследование археологического памятника Ист-Фарм в Англии отодвинуло хронологию добывания огня человеком почти на 250 000 лет назад. Исследователи обнаружили кремневые рубила, расколотые сильным жаром, наряду с фрагментами пирита — минерала, используемого для высекания искр. Это свидетельство говорит о том, что неандертальцы не просто собирали огонь от природных пожаров, как считалось ранее, а намеренно добывали его уже 400 000 лет назад. Если это подтвердится, это будет указывать на то, что неандертальцы обладали уровнем когнитивного планирования и технических навыков, которые когда-то считались исключительными для <em>Homo sapiens</em>."
        ],
        contentUZ: [
            "Angliyadagi East Farm arxeologik yodgorligidagi yangi tadqiqot inson tomonidan olov yaratish vaqtini qariyb 250 000 yilga ortga surdi. Tadqiqotchilar kuchli issiqlik ta'sirida singan chaqmoqtosh boltalarini, shuningdek, uchqun chiqarish uchun ishlatiladigan mineral — pirit parchalarini topdilar. Ushbu dalil neandertallarning ilgari o'ylanganidek shunchaki tabiiy yong'inlardan olov olmaganliklarini, balki 400 000 yil oldin uni ataylab yaratganliklarini ko'rsatadi. Agar bu tasdiqlansa, neandertallar bir vaqtlar faqat <em>Homo sapiens</em>ga xos deb hisoblangan kognitiv rejalashtirish va texnik mahorat darajasiga ega bo'lganligini anglatadi."
        ],
        questionGroups: [
          {
            id: "tfng-3",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 7-9 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 7, label: "7", questionText: "The study at East Farm provides the first evidence that Neanderthals used tools.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" },
              { id: 8, label: "8", questionText: "Prior to this study, the prevailing view was that Neanderthals could only use fire that had started naturally.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 9, label: "9", questionText: "The researchers found the remains of cooked food alongside the flint tools.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN" }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Passage 4: Media Coverage of Climate Change",
        content: [
          "Despite the escalating severity of global weather events, a recent critique by film director Adam McKay highlights a persistent failure in mainstream media coverage. McKay argues that while outlets like the BBC and <em>The New York Times</em> employ dedicated climate reporters, the broader news cycle often fails to connect breaking news—such as wildfires or floods—to their root cause: climate change. He advocates for a more 'alarmist' approach, suggesting that the fear of appearing biased has led journalists to underplay the urgency of the crisis. Conversely, some communication experts warn that inducing panic can lead to 'news avoidance,' where audiences tune out negative information entirely."
        ],
        contentRU: [
            "Несмотря на возрастающую суровость глобальных погодных явлений, недавняя критика режиссера Адама Маккея подчеркивает постоянный провал в освещении событий основными СМИ. Маккей утверждает, что, хотя такие издания, как BBC и <em>The New York Times</em>, нанимают специальных репортеров по вопросам климата, более широкий новостной цикл часто не связывает срочные новости, такие как лесные пожары или наводнения, с их первопричиной: изменением климата. Он выступает за более «паникерский» подход, предполагая, что страх показаться предвзятым заставляет журналистов преуменьшать остроту кризиса. Напротив, некоторые эксперты по коммуникациям предупреждают, что нагнетание паники может привести к «избеганию новостей», когда аудитория полностью отключается от негативной информации."
        ],
        contentUZ: [
            "Global ob-havo hodisalarining keskinlashuviga qaramay, kinorejissyor Adam Makkeyning yaqinda bildirgan tanqidi asosiy ommaviy axborot vositalarida yoritishdagi doimiy muvaffaqiyatsizlikni ta'kidlaydi. Makkeyning ta'kidlashicha, BBC va <em>The New York Times</em> kabi nashrlar iqlim bo'yicha maxsus muxbirlarni ishga olgan bo'lsa-da, kengroq yangiliklar oqimi o'rmon yong'inlari yoki toshqinlar kabi tezkor xabarlarni ularning asl sababi: iqlim o'zgarishi bilan bog'lay olmaydi. U yanada 'vahimali' yondashuvni yoqlab chiqmoqda va xolis emasdek ko'rinishdan qo'rqish jurnalistlarni inqirozning dolzarbligini pasaytirib ko'rsatishga majbur qilayotganini taxmin qilmoqda. Aksincha, ba'zi kommunikatsiya bo'yicha mutaxassislar vahima qo'zg'atish 'yangiliklardan qochish'ga olib kelishi mumkinligidan ogohlantirmoqda, bunda auditoriya salbiy ma'lumotlarni butunlay rad etadi."
        ],
        questionGroups: [
          {
            id: "tfng-4",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 10-12 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
            renderType: "LIST",
            questions: [
              { id: 10, label: "10", questionText: "Adam McKay claims that major news organisations do not have any journalists specialising in climate change.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" },
              { id: 11, label: "11", questionText: "McKay believes that journalists should be more willing to alarm their audiences.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE" },
              { id: 12, label: "12", questionText: "There is a consensus among experts that 'alarmist' reporting is the most effective way to engage the public.", type: QuestionType.DROPDOWN, options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE" }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Passage 5: AI and Loneliness",
        content: [
          "As AI chatbots become increasingly sophisticated, a growing number of individuals are turning to them for emotional support. While these systems can offer a semblance of companionship to the socially isolated, psychologists have raised concerns about the long-term effects of 'artificial intimacy.' A recent feature in <em>The BMJ</em> suggests that relying on AI for social interaction may atrophy human social skills, much like a muscle that is rarely used. Furthermore, because chatbots are programmed to be relentlessly agreeable, they create an unrealistic expectation of relationships, potentially making real-world human interactions—which require compromise and conflict resolution—feel frustratingly difficult by comparison."
        ],
        contentRU: [
            "По мере того как чат-боты с искусственным интеллектом становятся все более совершенными, все больше людей обращаются к ним за эмоциональной поддержкой. Хотя эти системы могут предложить подобие общения социально изолированным людям, психологи высказывают опасения по поводу долгосрочных последствий «искусственной близости». В недавней статье в <em>The BMJ</em> предполагается, что опора на ИИ для социального взаимодействия может атрофировать социальные навыки человека, подобно мышце, которая редко используется. Кроме того, поскольку чат-боты запрограммированы быть неизменно приятными, они создают нереалистичные ожидания от отношений, потенциально делая реальное человеческое взаимодействие, которое требует компромиссов и разрешения конфликтов, разочаровывающе трудным по сравнению с ними."
        ],
        contentUZ: [
            "Sun'iy intellekt chatbotlari tobora takomillashib borayotgani sari, ko'proq odamlar hissiy yordam uchun ularga murojaat qilmoqdalar. Ushbu tizimlar ijtimoiy yakkalanib qolganlarga hamrohlik qilish ko'rinishini taklif qilishi mumkin bo'lsa-da, psixologlar 'sun'iy yaqinlik'ning uzoq muddatli oqibatlari haqida xavotir bildirmoqdalar. <em>The BMJ</em> nashridagi yaqinda chop etilgan maqolada aytilishicha, ijtimoiy o'zaro ta'sir uchun sun'iy intellektga tayanish, kam ishlatiladigan mushak kabi, insonning ijtimoiy ko'nikmalarini susaytirishi mumkin. Bundan tashqari, chatbotlar doimo yoqimli bo'lishga dasturlashtirilgani sababli, ular munosabatlar haqida noreal umidlarni yaratadi va bu esa murosaga kelish va nizolarni hal qilishni talab qiladigan haqiqiy insoniy munosabatlarni, taqqoslaganda, juda qiyin his qilishiga olib kelishi mumkin."
        ],
        questionGroups: [
          {
            id: "tfng-5",
            instruction: "Do the following statements agree with the information given in the passage? In boxes 13-15 on your answer sheet, write TRUE, FALSE or NOT GIVEN.",
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