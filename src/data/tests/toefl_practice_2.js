export const toefl_practice_2 = {
    id: 'toefl_practice_2',
    type: 'TOEFL iBT',
    title: 'TOEFL Practice Test 2',
    description: 'Full simulation. Topics include European History, Biology, Anthropology, and Astronomy.',
    duration: 'Approx. 2 hours',
    sections: [
        {
            id: 'reading',
            title: 'Reading Section',
            instructions: 'You have 35 minutes to read 2 passages and answer 20 questions.',
            timeLimit: 35 * 60,
            parts: [
                {
                    id: 'p2_reading_1',
                    title: 'Passage 1: The Impact of the Printing Press',
                    content: `The invention of the movable type printing press by Johannes Gutenberg around 1440 is widely regarded as one of the most influential events in human history. Before this innovation, books were painstakingly copied by hand, usually by monks in monasteries. This manual process was slow, prone to error, and extremely expensive, making books a luxury item available only to the clergy and the ultra-wealthy.

Gutenberg's press changed everything. By combining oil-based ink, a screw press adapted from wine making, and durable metal type, he made the mass production of texts possible. The immediate effect was a drastic reduction in the cost of books. By 1500, printing presses were in operation throughout Western Europe, having produced more than twenty million volumes.

This explosion of printed material had profound social consequences. It broke the monopoly of the church on information. For the first time, the Bible was printed in vernacular languages (like German and French) rather than just Latin, allowing ordinary people to read and interpret it for themselves. This direct access to scripture was a primary catalyst for the Protestant Reformation sparked by Martin Luther.

Furthermore, the printing press spurred the scientific revolution. Scientists could now publish their findings and share data across borders accurately. Previous handwriting errors that corrupted scientific texts over centuries were eliminated. The standardization of texts also led to the standardization of languages, helping to codify grammar and spelling.`,
                    questions: [
                        {
                            id: 'p2_r1_q1',
                            text: 'The word "painstakingly" in paragraph 1 is closest in meaning to:',
                            options: ['Quickly', 'Carelessly', 'With great effort', 'Secretly'],
                            correctAnswer: 2
                        },
                        {
                            id: 'p2_r1_q2',
                            text: 'According to paragraph 2, what three elements did Gutenberg combine?',
                            options: [
                                'Paper, pen, and ink',
                                'Oil-based ink, a screw press, and metal type',
                                'Woodblocks, clay, and sunlight',
                                'Monks, monasteries, and scribes'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'p2_r1_q3',
                            text: 'Why does the author mention Martin Luther?',
                            options: [
                                'He invented the printing press.',
                                'He was a famous monk who copied books.',
                                'He used the printing press to spread the Protestant Reformation.',
                                'He opposed the printing of the Bible in vernacular languages.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'p2_r1_q4',
                            text: 'What effect did the printing press have on science?',
                            options: [
                                'It allowed for accurate sharing of data.',
                                'It made scientific books more expensive.',
                                'It discouraged scientists from publishing.',
                                'It caused more errors in texts.'
                            ],
                            correctAnswer: 0
                        },
                        {
                            id: 'p2_r1_q5',
                            text: 'The word "vernacular" in paragraph 3 refers to:',
                            options: ['Latin', 'Formal academic language', 'Native everyday language', 'Religious codes'],
                            correctAnswer: 2
                        }
                    ]
                },
                {
                    id: 'p2_reading_2',
                    title: 'Passage 2: Symbiosis in Coral Reefs',
                    content: `Coral reefs are often called the "rainforests of the sea" due to their incredible biodiversity. The foundation of this ecosystem is the symbiotic relationship between the coral polyps (animals) and microscopic algae called zooxanthellae. The coral provides the algae with a protected environment and compounds they need for photosynthesis. In return, the algae produce oxygen and help the coral remove wastes. Most importantly, they supply the coral with glucose, glycerol, and amino acids, which are the products of photosynthesis.

The coral uses these products to make proteins, fats, and carbohydrates, and to produce calcium carbonate. The relationship between the coral and the algae is mutually beneficial, or mutualistic. In fact, corals that build reefs can only survive in clear, shallow waters because their algae partners need sunlight for photosynthesis.

However, this relationship is fragile. When water temperatures rise too high, the coral polyps become stressed and expel the algae. This phenomenon is known as "coral bleaching" because the algae give the coral its color; without them, the white calcium carbonate skeleton is revealed. If the water does not cool down effectively to allow the algae to return, the coral will die from starvation and disease.`,
                    questions: [
                        {
                            id: 'p2_r2_q1',
                            text: 'What role do zooxanthellae play in the coral reef ecosystem?',
                            options: [
                                'They eat the coral polyps.',
                                'They provide food and oxygen to the coral.',
                                'They build the calcium carbonate skeleton.',
                                'They protect the coral from predators.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'p2_r2_q2',
                            text: 'Why do reef-building corals need clear, shallow water?',
                            options: [
                                'To avoid large predators.',
                                'Because the water pressure is lower.',
                                'So their symbiotic algae can receive sunlight.',
                                'To stay warm during the winter.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'p2_r2_q3',
                            text: 'What causes coral bleaching?',
                            options: [
                                'Pollution darkening the water.',
                                'The coral expelling its algae due to heat stress.',
                                'Algae growing too fast and covering the coral.',
                                'Fish eating the coral surface.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'p2_r2_q4',
                            text: 'The word "fragile" in paragraph 3 is closest in meaning to:',
                            options: ['Strong', 'Delicate', 'Ancient', 'Colorful'],
                            correctAnswer: 1
                        },
                        {
                            id: 'p2_r2_q5',
                            text: 'Which sentence best summarizes the relationship described?',
                            options: [
                                'One organism benefits while the other is harmed.',
                                'Neither organism benefits.',
                                'Both organisms benefit from the partnership.',
                                'The relationship is accidental and unimportant.'
                            ],
                            correctAnswer: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 'listening',
            title: 'Listening Section',
            instructions: 'You have 20 minutes to listen to 1 conversation and 1 lecture.',
            timeLimit: 20 * 60,
            parts: [
                {
                    id: 'p2_conv_1',
                    title: 'Conversation: Student & Career Advisor',
                    transcript: `(Narrator): Listen to a conversation between a student and a career advisor.

(Student): Hi, I have an appointment. I'm a biology major, but I'm realizing I don't really want to work in a lab.
(Advisor): That's a very common realization. A biology degree is actually quite versatile. Have you thought about science communication?
(Student): Science communication? Like writing for magazines?
(Advisor): Yes, or working for museums, or even handling PR for biotech companies. They need people who understand the science but can explain it to the public.
(Student): That sounds interesting. I do enjoy writing. Do I need a journalism degree?
(Advisor): Not necessarily. But building a portfolio is key. You should try writing for the campus newspaper's science section.
(Student): I didn't know we had one.
(Advisor): We do. Also, there's an internship opening at the city Science Center for an education coordinator. You'd be designing workshops for kids.
(Student): Designing workshops... that sounds fun. I used to be a camp counselor.`,
                    questions: [
                        {
                            id: 'p2_lc1_q1',
                            text: 'Why does the student visit the advisor?',
                            options: [
                                'To change her major from biology.',
                                'To discuss career options outside of laboratory work.',
                                'To apply for graduation.',
                                'To complain about a professor.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'p2_lc1_q2',
                            text: 'What suggestion does the advisor make?',
                            options: [
                                'Go to medical school.',
                                'Become a science teacher.',
                                'Consider science communication or education.',
                                'Write a novel.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'p2_lc1_q3',
                            text: 'What previous experience does the student mention?',
                            options: [
                                'She was a camp counselor.',
                                'She worked in a hospital.',
                                'She wrote for the New York Times.',
                                'She failed a chemistry class.'
                            ],
                            correctAnswer: 0
                        }
                    ]
                },
                {
                    id: 'p2_lec_1',
                    title: 'Lecture: Marketing (Brand Loyalty)',
                    transcript: `(Narrator): Listen to part of a lecture in a Business class.

(Professor): Today, we're discussing brand loyalty. This is when a consumer repeatedly purchases a product from the same company, even when cheaper alternatives exist. There are three levels of brand loyalty.

First is "Brand Recognition." This is the weakest. You choose a brand just because you've heard of it. If it's out of stock, you'll easily buy a competitor.

Second is "Brand Preference." You like the product. You'll choose it if it's available, but if the store is out of it, you might switch rather than go to another store.

Third, and the gold standard, is "Brand Insistence." This is the Apple or Nike level for some people. They will not accept a substitute. If the store doesn't have it, they will go to three other stores or wait a week for shipping. They identify with the brand personally. Companies spend billions trying to move customers from preference to insistence.`,
                    questions: [
                        {
                            id: 'p2_ll1_q1',
                            text: 'What is the main topic of the lecture?',
                            options: [
                                'How to design a logo.',
                                'The three levels of brand loyalty.',
                                'The history of Apple.',
                                'Why marketing is expensive.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'p2_ll1_q2',
                            text: 'Which behavior characterizes "Brand Insistence"?',
                            options: [
                                'Buying whatever is cheapest.',
                                'Buying a brand only when it is on sale.',
                                'Refusing to accept a substitute and going to other stores to find the brand.',
                                'Choosing a product because the packaging is red.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'p2_ll1_q3',
                            text: 'What is true about "Brand Recognition"?',
                            options: [
                                'It is the strongest form of loyalty.',
                                'It means you will never buy another brand.',
                                'It is the weakest form; you buy it just because the name is familiar.',
                                'It costs the most to maintain.'
                            ],
                            correctAnswer: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 'speaking',
            title: 'Speaking Section',
            instructions: 'Record your answers for the following tasks.',
            parts: [
                {
                    id: 'p2_sp_1',
                    title: 'Task 1: Independent',
                    prompt: 'Some people prefer to take a long vacation once a year. Others prefer to take several short vacations throughout the year. Which do you prefer and why?',
                    prepTime: 15,
                    speakTime: 45
                }
            ]
        },
        {
            id: 'writing',
            title: 'Writing Section',
            instructions: 'Write an essay based on the prompt.',
            parts: [
                {
                    id: 'p2_wr_1',
                    title: 'Task 1: Academic Discussion',
                    prompt: 'Professor: "We are discussing remote work. Some argue it increases productivity. Others say it destroys company culture. What is your opinion?"',
                    minWords: 100,
                    timeLimit: 10 * 60
                }
            ]
        }
    ]
};
