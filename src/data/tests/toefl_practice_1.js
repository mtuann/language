export const toefl_practice_1 = {
    id: 'toefl_practice_1',
    type: 'TOEFL iBT',
    title: 'TOEFL Practice Test 1 (Enhanced Format)',
    description: 'Full-length simulation reflecting the modern TOEFL iBT structure (post-July 2023). Includes Reading (2 passages), Listening (5 items), Speaking (4 tasks), and Writing (2 tasks).',
    duration: 'Approx. 2 hours',
    sections: [
        {
            id: 'reading',
            title: 'Reading Section',
            instructions: 'You have 35 minutes to read 2 passages and answer 10 questions for each passage. (Total: 20 Questions)',
            timeLimit: 35 * 60, // 35 minutes
            parts: [
                {
                    id: 'reading_passage_1',
                    title: 'Passage 1: Ancient Roman Water Systems',
                    content: `The availability of fresh water has been a critical factor in the development of civilizations throughout history. In ancient Rome, the engineering of water systems reached a level of sophistication that was unmatched for centuries. The Romans constructed a vast network of aqueducts—conduits used to convey water from distant sources to their cities. While the popular image of a Roman aqueduct is a series of stone arches marching across a valley, the reality is that most of the system was underground. This was a strategic choice: underground channels were protected from erosion, evaporation, and enemy sabotage.

Gravity was the driving force behind these aqueducts. Roman engineers had to calculate the gradient with extreme precision to ensure a steady flow of water over distances that could exceed 50 miles. If the slope were too steep, the water would flow too quickly and damage the channel structure; if too shallow, the water would stagnate. To maintain this delicate balance, they used tools like the chorobates, a leveling instrument, to check the terrain. When valleys or lowlands had to be crossed, they employed the inverted siphon system or built the iconic arched bridges we see today.

The water supplied to Rome was used for multiple purposes, including public fountains, bathhouses, and private villas. The most significant consumption was by the public baths (thermae), which were social hubs as much as hygiene facilities. The abundance of water also allowed for the flushing of the sophisticated sewer system, the Cloaca Maxima, which drained waste into the Tiber River. This constant flow helped maintain a level of public sanitation that contributed to the dense population of the city.

However, the system was not without its flaws. The pipes used to distribute water within the city were often made of lead, a malleable metal that was easy to work with. Historians have debated whether lead poisoning contributed to the decline of the Roman elite, a theory often referred to as the "lead poisoning hypothesis." While modern analysis suggests the calcium carbonate buildup (limescale) inside the pipes may have shielded the water from the lead, the sheer volume of water flowing through the system likely minimized the contamination significantly.

Despite the eventual collapse of the Empire, the legacy of Roman hydraulic engineering persisted. Many aqueducts remained in use or were repaired by later civilizations, and the principles of gravity-fed water distribution influenced urban planning well into the industrial age.`,
                    questions: [
                        {
                            id: 'r1_q1',
                            text: 'According to paragraph 1, why were most Roman aqueducts built underground?',
                            options: [
                                'To make them difficult for enemies to find and destroy.',
                                'Because underground stone was cheaper than building arches.',
                                'To keep the water cool for drinking purposes.',
                                'Because the Romans lacked the technology for above-ground structures.'
                            ],
                            correctAnswer: 0
                        },
                        {
                            id: 'r1_q2',
                            text: 'The word "sophistication" in paragraph 1 is closest in meaning to:',
                            options: [
                                'Expensiveness',
                                'Complexity',
                                'Popularity',
                                'Durability'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r1_q3',
                            text: 'What challenge did Roman engineers face regarding the slope of the aqueducts?',
                            options: [
                                'Making sure the water flowed uphill in some sections.',
                                'Finding sources of water high enough to use gravity.',
                                'Balancing the speed of flow to prevent damage or stagnation.',
                                'Connecting the aqueducts to the Cloaca Maxima.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'r1_q4',
                            text: 'The author mentions "chorobates" in paragraph 2 in order to:',
                            options: [
                                'Explain how the Romans measured the purity of water.',
                                'Describe a tool used to ensure the precise gradient of the channels.',
                                'Illustrate the types of materials used in construction.',
                                'Contrast Roman tools with modern engineering instruments.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r1_q5',
                            text: 'Which of the following implies that the lead poisoning theory might be exaggerated?',
                            options: [
                                'Lead pipes were only used in the poorest parts of the city.',
                                'The Romans boiled their water before drinking it.',
                                'Mineral buildup inside the pipes likely created a protective layer.',
                                'The water drained directly into the Tiber River.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'r1_q6',
                            text: 'What was the primary function of the Cloaca Maxima?',
                            options: [
                                'To store fresh water for times of drought.',
                                'To serve as a public bathhouse.',
                                'To carry waste water out of the city.',
                                'To filiter the water before it reached the fountains.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'r1_q7',
                            text: 'The phrase "malleable" in paragraph 4 is closest in meaning to:',
                            options: [
                                'Toxic',
                                'Strong',
                                'Pliable',
                                'Expensive'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'r1_q8',
                            text: 'According to the passage, the public baths (thermae) were important because:',
                            options: [
                                'They were the only source of drinking water.',
                                'They served both hygienic and social functions.',
                                'They generated revenue for the aqueduct maintenance.',
                                'They were used to test new engineering techniques.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r1_q9',
                            text: 'What can be inferred about the Roman water system after the fall of the Empire?',
                            options: [
                                'It was immediately destroyed by invading forces.',
                                'It continued to influence engineering and some parts remained in use.',
                                'It was forgotten until the 20th century.',
                                'It was replaced by a system of pumps.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r1_q10',
                            text: 'All of the following are mentioned as benefits of the Roman water system EXCEPT:',
                            options: [
                                'Improved public sanitation.',
                                'Water for private homes.',
                                'Irrigation for large-scale industrial farming.',
                                'Supply for public fountains.'
                            ],
                            correctAnswer: 2
                        }
                    ]
                },
                {
                    id: 'reading_passage_2',
                    title: 'Passage 2: The Cambrian Explosion',
                    content: `Approximately 541 million years ago, a pivotal event in the history of life occurred: the Cambrian Explosion. Prior to this period, most organisms were simple, composed of individual cells or small colonies. The fossil record from the precursor Ediacaran period shows mostly soft-bodied creatures that left few traces. However, within a relatively short geological span of 20 to 25 million years during the Cambrian period, nearly all major animal phyla appeared in the fossil record. This sudden burst of biodiversity included the development of complex body plans, hard shells, and exoskeletons.

One of the most famous sites for studying this era is the Burgess Shale in Canada. Discovered by Charles Doolittle Walcott in 1909, the shale contains exquisitely preserved fossils, including soft tissues that rarely fossilize. These specimens reveal a bizarre array of creatures, such as Opabinia, with its five eyes and nozzle-like proboscis, and Anomalocaris, a top predator of the time. The preservation quality of the Burgess Shale allows paleontologists to reconstruct creating grazing behaviors and predator-prey relationships that drove evolution.

Scientists have proposed several theories to explain the trigger for this explosion. One leading hypothesis is the increase in oxygen levels. As oxygen accumulated in the ocean and atmosphere, it supported the metabolism of larger, more active animals. Another theory focuses on ecological relationships; the evolution of vision and predation likely created an "evolutionary arms race." As predators developed better eyes and weapons, prey species evolved hard shells and faster locomotion to survive, driving rapid diversification.

Genetic factors also played a role. The development of Hox genes—master control genes that dictate the layout of a body plan—may have allowed for the rapid experimentation of different physical forms. Once the genetic toolkit was in place, slight excessive modifications could lead to drastically different body shapes, from arthropods to chordates.

Despite its name, the "explosion" was not instantaneous but rather a rapid acceleration compared to the billions of years of microbial life that preceded it. It laid the groundwork for modern animal life, establishing the basic blueprints that, while modified, still define the animal kingdom today.`,
                    questions: [
                        {
                            id: 'r2_q1',
                            text: 'What significant change in the fossil record characterizes the Cambrian Explosion?',
                            options: [
                                'The disappearance of all soft-bodied organisms.',
                                'The sudden appearance of nearly all major animal phyla.',
                                'The first appearance of single-celled organisms.',
                                'The dominance of reptiles on land.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r2_q2',
                            text: 'The word "pivotal" in paragraph 1 is closest in meaning to:',
                            options: [
                                'Gradual',
                                'Unnoticed',
                                'Crucial',
                                'Dangerous'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'r2_q3',
                            text: 'Why is the Burgess Shale important to paleontologists?',
                            options: [
                                'It is the only place where dinosaur fossils are found.',
                                'It proves that the Cambrian period lasted longer than thought.',
                                'It contains fossils with preserved soft tissues.',
                                'It was the site of a major meteor impact.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'r2_q4',
                            text: 'Which of the following is NOT mentioned as a theory for the Cambrian Explosion?',
                            options: [
                                'A sudden drop in ocean temperatures.',
                                'Increased oxygen levels in the atmosphere.',
                                'The development of Hox genes.',
                                'The evolution of predation and vision.'
                            ],
                            correctAnswer: 0
                        },
                        {
                            id: 'r2_q5',
                            text: 'The term "evolutionary arms race" in paragraph 3 refers to:',
                            options: [
                                'Use of physical weapons by early humans.',
                                'Competition between species driving rapid adaptation.',
                                'The struggle for oxygen in the oceans.',
                                'The genetic mutation of Hox genes.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r2_q6',
                            text: 'The author describes Opabinia and Anomalocaris primarily to:',
                            options: [
                                'Show that early animals looked exactly like modern ones.',
                                'Illustrate the diversity and bizarre nature of Cambrian life.',
                                'Argue that they were the ancestors of modern humans.',
                                'Prove that predators were rare in the Cambrian period.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r2_q7',
                            text: 'What role did Hox genes likely play in the explosion?',
                            options: [
                                'They increased the oxygen levels in the cells.',
                                'They allowed for the hardening of shells.',
                                'They controlled the layout of body plans, allowing rapid physical variation.',
                                'They protected organisms from predation.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'r2_q8',
                            text: 'The word "exquisitely" in paragraph 2 is closest in meaning to:',
                            options: [
                                'Partially',
                                'Perfectly',
                                'Quickly',
                                'Poorly'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r2_q9',
                            text: 'Based on the passage, what existed before the Cambrian period?',
                            options: [
                                'Complex animals with hard shells.',
                                'Mostly simple, soft-bodied organisms or single cells.',
                                'Large land mammals.',
                                'No life at all.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'r2_q10',
                            text: 'Which sentence best summarizes the final paragraph?',
                            options: [
                                'The Cambrian Explosion happened overnight.',
                                'The explosion destroyed all previous microbial life.',
                                'The event was a rapid acceleration that established the blueprints for modern animals.',
                                'Evolution stopped after the Cambrian period.'
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
            instructions: 'You have 36 minutes. You will listen to 2 conversations and 3 lectures. Answer the questions after each audio clip. (Total: 28 Questions)',
            timeLimit: 36 * 60,
            parts: [
                {
                    id: 'l_conv_1',
                    title: 'Conversation 1: Student & Librarian',
                    transcript: `(Narrator): Listen to a conversation between a student and a university librarian.
          
(Student): Hi, excuse me. I'm trying to find some materials for my history paper, but I'm having trouble with the online catalog.
(Librarian): Sure, I can help with that. What specifically are you looking for?
(Student): Well, I need primary sources regarding the Industrial Revolution in Manchester. The professor said we need at least two newspapers from that era.
(Librarian): I see. The issue might be that our physical copies of 19th-century newspapers are kept in the archives, not the main stacks. They don't always show up in the general search unless you filter for "Special Collections."
(Student): Oh, I didn't verify that filter. So, can I just go down to the archives and get them?
(Librarian): Not exactly. The archives are climate-controlled. You have to request the specific dates you need, and an archivist will bring them to the reading room for you. You can't take them out of that room.
(Student): That sounds serious. Is the reading room open now?
(Librarian): It closes at 4 PM, so you have about an hour. Or, you can check our digital microfilm database. We digitized most of the Manchester Guardian archives last year.
(Student): That would be much easier! I can access that from my dorm, right?
(Librarian): Yes, just log in with your student ID.`,
                    questions: [
                        {
                            id: 'lc1_q1',
                            text: 'What is the students main problem?',
                            options: [
                                'He cannot find the library building.',
                                'He is unable to locate specific research materials in the catalog.',
                                'He lost his student ID card.',
                                'He wants to change his paper topic.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'lc1_q2',
                            text: 'Why are the newspapers not in the main stacks?',
                            options: [
                                'They are being repaired.',
                                'They are too new to be cataloged.',
                                'They are kept in the archives for preservation.',
                                'Another student has checked them all out.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'lc1_q3',
                            text: 'What restriction applies to the physical archives?',
                            options: [
                                'Students are charged a fee to enter.',
                                'Materials cannot be removed from the reading room.',
                                'Only professors are allowed access.',
                                'They are only open on weekends.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'lc1_q4',
                            text: 'What alternative solution does the librarian suggest?',
                            options: [
                                'Using the digital microfilm database.',
                                'Visiting a library in Manchester.',
                                'Asking the professor for different sources.',
                                'Coming back tomorrow morning.'
                            ],
                            correctAnswer: 0
                        },
                        {
                            id: 'lc1_q5',
                            text: 'What can be inferred about the student\'s plan?',
                            options: [
                                'He will likely go to the archives immediately.',
                                'He will probably use the digital access from his dorm.',
                                'He will drop the class.',
                                'He will complain to the administration.'
                            ],
                            correctAnswer: 1
                        }
                    ]
                },
                {
                    id: 'l_lec_1',
                    title: 'Lecture 1: Art History (Impressionism)',
                    transcript: `(Narrator): Listen to part of a lecture in an Art History class. The professor is discussing Impressionism.
          
(Professor): We've been looking at Realism and the precise, almost photographic quality of academic painting in the mid-19th century. Now, I want to shift to a group of artists who broke all the rules: the Impressionists. Think about Monet, Renoir, Pissarro.
          
When they first exhibited in Paris in 1874, the critics were harsh. One critic looked at Monet's "Impression, Sunrise" and essentially called it unfinished wallpaper. Why? Because they weren't trying to capture the object itself in perfect detail. They were trying to capture the *light* reflecting off the object at a specific moment in time.
          
They painted en plein air—outdoors. This was revolutionary. Before this, you might sketch outside, but you finished the painting in the studio. But thanks to the invention of paint in tubes, artists could carry their supplies easily. They had to work fast because the light changes constantly. That's why you see those quick, broken brushstrokes. They didn't blend the colors smoothly on the canvas. They placed complementary colors side by side—like blue next to orange—so that from a distance, the eye blends them. It creates a vibration, a sense of movement.
          
It wasn't just about technique; it was about subject matter. They painted modern life: train stations, boulevards, cafes, middle-class leisure. They turned their backs on the historical and mythological subjects that the Academy loved.`,
                    questions: [
                        {
                            id: 'll1_q1',
                            text: 'What is the main topic of the lecture?',
                            options: [
                                'The life of Claude Monet.',
                                'The characteristics and origins of the Impressionist movement.',
                                'The invention of paint tubes.',
                                'The difference between Realism and Romanticism.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'll1_q2',
                            text: 'Why did critics originally dislike Impressionist paintings?',
                            options: [
                                'They were too dark and depressing.',
                                'They looked unfinished and lacked detail.',
                                'They were too expensive.',
                                'They depicted religious scenes incorrectly.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'll1_q3',
                            text: 'What technological advancement enabled "en plein air" painting?',
                            options: [
                                'The portable easel.',
                                'Paint packaged in tubes.',
                                'Quick-drying acrylics.',
                                'The camera.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'll1_q4',
                            text: 'How did Impressionists use color?',
                            options: [
                                'They mixed everything with black to create shadows.',
                                'They only used primary colors.',
                                'They placed complementary colors side by side to create visual vibration.',
                                'They avoided color, preferring black and white.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'll1_q5',
                            text: 'What subject matter did Impressionists prefer?',
                            options: [
                                'Ancient Greek mythology.',
                                'Portraits of kings and queens.',
                                'Modern urban life and leisure.',
                                'Abstract shapes.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'll1_q6',
                            text: 'Why did Impressionists have to paint quickly?',
                            options: [
                                'paint was expensive.',
                                'To capture the changing light conditions.',
                                'They were competing in contests.',
                                'It was too cold outside.'
                            ],
                            correctAnswer: 1
                        }
                    ]
                },
                {
                    id: 'l_lec_2',
                    title: 'Lecture 2: Astronomy (Mars)',
                    transcript: `(Narrator): Listen to part of a lecture in an Astronomy class.
          
(Professor): Let's talk about the search for water on Mars. It's the holy grail of planetary science because where there's water, there could be life. Now, we know Mars today is a frozen desert. The atmosphere is too thin to support potential liquid water on the surface; it would just sublime into gas.
          
But the geological evidence tells a different story about the past. We see dried-up riverbeds, deltas, and minerals like hematite that typically form in water. The rovers, Spirit and Opportunity, found physical evidence of past water activity. More recently, Curiosity found rounded pebbles—conglomerates—that look exactly like the stones you'd find in a stream on Earth. They were rounded by tumbling in a flowing current.
          
So, where did the water go? The leading theory involves the loss of Mars's magnetic field. Earth has a strong magnetic field that protects our atmosphere from the solar wind—that stream of charged particles from the sun. Mars lost its global magnetic field billions of years ago. Without that shield, the solar wind stripped away the atmosphere, layer by layer. as the pressure dropped, the water evaporated and was lost to space, or it froze into the polar caps and the subsurface permafrost.`,
                    questions: [
                        {
                            id: 'll2_q1',
                            text: 'What is the professor mainly discussing?',
                            options: [
                                'The colonization of Mars.',
                                'The evidence for past water on Mars and why it disappeared.',
                                'The design of the Curiosity rover.',
                                'Comparison between Mars and Venus.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'll2_q2',
                            text: 'Why can\'t liquid water exist on the surface of Mars today?',
                            options: [
                                'It is too hot.',
                                'The gravity is too strong.',
                                'The atmosphere is too thin.',
                                'The surface is covered in lava.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'll2_q3',
                            text: 'What significance do the "rounded pebbles" have?',
                            options: [
                                'They prove the existence of volcanic activity.',
                                'They show that Mars had flowing currents of water in the past.',
                                'They are evidence of ancient tools.',
                                'They contain fossils.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'll2_q4',
                            text: 'According to the lecture, what protects Earth\'s atmosphere?',
                            options: [
                                'The ozone layer.',
                                'The magnetic field.',
                                'The moon.',
                                'Greenhouse gases.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'll2_q5',
                            text: 'What happened when Mars lost its magnetic field?',
                            options: [
                                'It drifted further from the sun.',
                                'Volcanoes erupted everywhere.',
                                'Solar wind stripped away the atmosphere.',
                                'Gravity disappeared.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'll2_q6',
                            text: 'Where is most of Mars\'s water likely located now?',
                            options: [
                                'In the oceans.',
                                'Lost to space or frozen in polar caps and subsurface.',
                                'In the atmosphere as clouds.',
                                'Inside the core of the planet.'
                            ],
                            correctAnswer: 1
                        }
                    ]
                },
                {
                    id: 'l_conv_2',
                    title: 'Conversation 2: Student & Housing Office',
                    transcript: `(Narrator): Listen to a conversation between a student and a housing office employee.
           
(Student): Hi, I'm a freshman in Hall A. I wanted to ask about the room transfer process.
(Employee): Okay, usually transfers aren't approved until the second semester, but we can make exceptions for emergencies. Is there a maintenance issue?
(Student): No, nothing like that. It's just... my roommate and I have very different schedules. I'm an architecture major, so I'm up late building models, and he's a swimmer, so he gets up at 5 AM. We're constantly waking each other up.
(Employee): Ah, lifestyle conflict. That's common. Have you completed the roommate mediation form with your RA?
(Student): We talked to the RA, but we both agree that we'd be happier with different roommates. It's not a fight, just bad compatibility.
(Employee): Well, if you've done the mediation, you can file a request. However, there are currently no open singles. You'd have to swap with someone else who wants to move.
(Student): How do I find someone to swap with?
(Employee): There's a "Room Swap" board on the housing portal. You can post your room and schedule. If you find a match, you both come here to sign the paperwork.`,
                    questions: [
                        {
                            id: 'lc2_q1',
                            text: 'Why does the student want to move?',
                            options: [
                                'His room is too cold.',
                                'He does not get along with his roommate personally.',
                                'His sleep schedule conflicts with his roommate\'s.',
                                'He wants a single room.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'lc2_q2',
                            text: 'What is the student\'s major?',
                            options: [
                                'Swimming.',
                                'Architecture.',
                                'History.',
                                'Engineering.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'lc2_q3',
                            text: 'What is the prerequisites for requesting a transfer?',
                            options: [
                                'Paying a fee.',
                                'Finding a new roommate first.',
                                'Completing roommate mediation with the Resident Assistant (RA).',
                                'Waiting until senior year.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'lc2_q4',
                            text: 'What solution does the employee offer?',
                            options: [
                                'Moving him to a single room immediately.',
                                'Using the "Room Swap" board to find a trade.',
                                'Evicting the roommate.',
                                'Buying earplugs.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'lc2_q5',
                            text: 'What is the status of the relationship between the roommates?',
                            options: [
                                'They are fighting constantly.',
                                'They agree that moving is best; it is not hostile.',
                                'They refuse to speak to each other.',
                                'They are best friends.'
                            ],
                            correctAnswer: 1
                        }
                    ]
                },
                {
                    id: 'l_lec_3',
                    title: 'Lecture 3: Biology (Symbiosis)',
                    transcript: `(Narrator): Listen to part of a lecture in a Biology class.
          
(Professor): We often think of evolution as "survival of the fittest," implying constant competition. But cooperation is just as powerful. Today we'll discuss symbiosis, specifically mutualism, where both species benefit.
          
A classic example is the relationship between the acacia tree and the acacia ant in Central America. The tree provides everything the ant needs: hollow thorns to live in and sugary nectar to eat. In return, the ants are aggressive bodyguards. If a herbivore—like a deer or insect—tries to eat the leaves, the ants swarm and sting it. They even clear away competing plants from the base of the tree.
          
But here's a twist. Researchers found that if you remove the large herbivores (like by putting a fence around the tree), the tree stops producing as much nectar because it doesn't need protection anymore. The ants then have to raise aphids to get sugar, and they actually start harming the tree. So the mutualism depends on the external threat of the herbivores. It's a fragile balance.`,
                    questions: [
                        {
                            id: 'll3_q1',
                            text: 'What type of symbiosis is the lecture focusing on?',
                            options: [
                                'Parasitism.',
                                'Commensalism.',
                                'Mutualism.',
                                'Competition.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'll3_q2',
                            text: 'What does the acacia tree provide for the ants?',
                            options: [
                                'Use of its poison.',
                                'Shelter (hollow thorns) and food (nectar).',
                                'Transportation.',
                                'Camouflage.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'll3_q3',
                            text: 'How do the ants protect the tree?',
                            options: [
                                'They sting herbivores that try to eat the leaves.',
                                'They cover the leaves with a protective wax.',
                                'They call other animals for help.',
                                'They emit a bad smell.'
                            ],
                            correctAnswer: 0
                        },
                        {
                            id: 'll3_q4',
                            text: 'What happens when herbivores are removed from the environment?',
                            options: [
                                'The tree produces more nectar.',
                                'The ants leave the tree.',
                                'The relationship breaks down, and ants may harm the tree.',
                                'The tree grows faster.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'll3_q5',
                            text: 'What does this suggest about mutualism?',
                            options: [
                                'It is always permanent.',
                                'It can depend on external environmental factors like threats.',
                                'It is rare in nature.',
                                'It only happens in Central America.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'll3_q6',
                            text: 'Why did the professor mention "survival of the fittest"?',
                            options: [
                                'To support it as the only evolutionary force.',
                                'To contrast competition with the power of cooperation (symbiosis).',
                                'To explain why the ants die.',
                                'To introduce Charles Darwin.'
                            ],
                            correctAnswer: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'speaking',
            title: 'Speaking Section',
            instructions: 'You will have 16 minutes. There are 4 tasks. For each, you will read/listen and then record your response.',
            timeLimit: 16 * 60,
            parts: [
                {
                    id: 'sp_task_1',
                    title: 'Task 1: Independent Speaking',
                    prompt: 'Question: Some people think that universities should spend more money on sports facilities for students. Others think they should spend more on libraries and laboratories. Which do you prefer? Use specific details and examples to support your opinion.',
                    prepTime: 15,
                    speakTime: 45
                },
                {
                    id: 'sp_task_2',
                    title: 'Task 2: Integrated (Campus Situation)',
                    prompt: 'Read the announcement from the university president about a new campus bus policy. Then listen to two students discussing the announcement. \n\n(Reading): The university will discontinue the free campus bus service on weekends to save money. The administration argues that ridership is low on weekends and the funds can be better used for classroom technology. \n\n(Listening Transcript): \nMan: Did you see this about the bus?\nWoman: Yeah, I think it\'s a terrible idea.\nMan: Why? They say nobody uses it.\nWoman: That\'s not true. Students who live in the off-campus dorms use it to get to the library or the gym. It\'s too far to walk in the winter.\nMan: Good point. And what about the money saving?\nWoman: Honestly, they just renovated the student center with expensive furniture. If they stopped wasting money on luxury items, they could keep the bus. \n\nQuestion: The woman expresses her opinion on the university\'s plan. State her opinion and the reasons she gives for holding that opinion.',
                    prepTime: 30,
                    speakTime: 60
                },
                {
                    id: 'sp_task_3',
                    title: 'Task 3: Integrated (Academic Concept)',
                    prompt: 'Read a short passage about "Flow State". Then listen to a psychology professor explain the concept with an example. \n\n(Reading): Flow is a psychological state of complete absorption in an activity. When in a flow state, people lose track of time and self-consciousness, performing at their highest capability. It usually occurs when the challenge level of a task matches the person\'s skill level. \n\n(Listening Transcript): \n(Professor): So, I experienced this myself. I love playing the piano. Years ago, I was learning a new piece. At first, it was too hard, and I was anxious. Then I practiced a lot. One day, I sat down to play, and suddenly, two hours passed in what felt like five minutes. I wasn\'t thinking about my fingers or the notes; I was just... playing. The music was flowing out of me. It wasn\'t too easy, which would be boring, but I had the skills to meet the challenge. It was a perfect balance. \n\nQuestion: Describe the concept of Flow State and explain how the professor\'s example illustrates it.',
                    prepTime: 30,
                    speakTime: 60
                },
                {
                    id: 'sp_task_4',
                    title: 'Task 4: Integrated (Academic Lecture)',
                    prompt: 'Listen to part of a lecture in a Biology class about how animals survive in cold climates. \n\n(Listening Transcript): \n(Professor): Animals in the arctic have developed fascinating adaptations to stay warm. One method is insulation. Take the polar bear. It has a thick layer of blubber (fat) under its skin, which traps heat. Plus, its fur is unique—it\'s actually hollow, which traps air and provides even more insulation. \nA second method is changing behavior to minimize heat loss. The arctic fox, for example, curls into a tight ball when it sleeps. It covers its nose with its fluffy tail. This reduces the surface area exposed to the cold air, helping it conserve body heat during the freezing nights. \n\nQuestion: Using the examples of the polar bear and the arctic fox, explain two ways animals adapt to cold climates.',
                    prepTime: 20,
                    speakTime: 60
                }
            ]
        },
        {
            id: 'writing',
            title: 'Writing Section',
            instructions: 'You have 29 minutes to answer 2 questions. Type your responses in the box.',
            timeLimit: 29 * 60,
            parts: [
                {
                    id: 'wr_task_1',
                    title: 'Task 1: Integrated Writing',
                    prompt: 'Read a passage about the "Four-Day Workweek" and listen to a lecture on the same topic. \n\n(Reading Summary): A four-day workweek is beneficial. 1. It reduces company costs (electricity, maintenance). 2. It improves employee productivity because they are more rested. 3. It reduces unemployment by opening up more shifts. \n\n(Listening Summary): The lecturer casts doubt on these points. 1. Costs aren\'t really reduced; if people work 10 hours a day instead of 8, lights and AC are still on. Plus, clients expect 5-day service. 2. Productivity might drop because 10-hour days are exhausting, leading to errors. 3. Companies won\'t hire more people; they will just force existing staff to work harder or pay overtime, which is expensive. \n\nQuestion: Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific points made in the reading passage.',
                    minWords: 150,
                    timeLimit: 20 * 60
                },
                {
                    id: 'wr_task_2',
                    title: 'Task 2: Writing for an Academic Discussion',
                    prompt: 'Professor: "We are discussing the impact of social media on society. Paul argues that it isolates people. Claire argues that it connects people globally. What is your opinion? Do you think social media has done more harm or good for personal relationships? Support your answer with specific reasons." \n\nWrite a post contributing to the discussion.',
                    minWords: 100,
                    timeLimit: 10 * 60
                }
            ]
        }
    ]
};
