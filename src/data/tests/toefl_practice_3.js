export const toefl_practice_3 = {
    id: 'toefl_practice_3',
    type: 'TOEFL iBT',
    title: 'TOEFL Practice Test 3',
    description: 'Full simulation. Topics include Bird Migration, Urban Planning, and Psychology.',
    duration: 'Approx. 2 hours',
    sections: [
        {
            id: 'reading',
            title: 'Reading Section',
            instructions: 'You have 35 minutes to read 2 passages and answer 20 questions.',
            timeLimit: 35 * 60,
            parts: [
                {
                    id: 'p3_reading_1',
                    title: 'Passage 1: Mechanisms of Bird Migration',
                    content: `Bird migration is one of the most fascinating phenomena in the natural world. Twice a year, billions of birds travel thousands of miles between their breeding grounds and their wintering grounds. But how do they find their way? Research suggests that birds use a combination of compasses.

The first is the sun compass. Birds can use the position of the sun to determine direction. However, because the sun moves across the sky, they must also have an internal clock to compensate for this movement. Experiments have shown that if a bird's internal clock is shifted by using artificial light, it will fly in the wrong direction relative to the sun.

The second is the star compass. Night-migrating birds use the patterns of stars around the North Star to navigate. Unlike the sun compass, this is learned rather than innate. Young birds in a planetarium will learn to orient themselves by whatever "star" the sky rotates around.

The third, and perhaps most mysterious, is the magnetic compass. Birds can detect the Earth's magnetic field. This allows them to navigate on cloudy days when celestial cues are hidden. Recent studies suggest this ability might be linked to quantum entanglement in protein molecules within the bird's eye, effectively allowing them to "see" magnetic fields.`,
                    questions: [
                        {
                            id: 'p3_r1_q1',
                            text: 'According to the passage, why do birds need an internal clock for the sun compass?',
                            options: [
                                'To know when to eat.',
                                'To wake up early.',
                                'To compensate for the sun\'s movement across the sky.',
                                'To measure the length of the journey.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'p3_r1_q2',
                            text: 'What distinguishes the star compass from the sun compass?',
                            options: [
                                'It is used during the day.',
                                'It is innate (born with it).',
                                'It is learned rather than innate.',
                                'It is less accurate.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'p3_r1_q3',
                            text: 'The word "innate" in paragraph 3 is closest in meaning to:',
                            options: ['Learned', 'Inborn / Natural', 'Complex', 'Wrong'],
                            correctAnswer: 1
                        },
                        {
                            id: 'p3_r1_q4',
                            text: 'How does the magnetic compass help birds?',
                            options: [
                                'It helps them fly faster.',
                                'It allows navigation on cloudy days when the sun/stars are hidden.',
                                'It keeps them warm.',
                                'It attracts food.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'p3_r1_q5',
                            text: 'What scientific theory is mentioned regarding the magnetic compass?',
                            options: [
                                'Gravitational pull.',
                                'Quantum entanglement in eye proteins.',
                                'Echolocation.',
                                'Thermal vision.'
                            ],
                            correctAnswer: 1
                        }
                    ]
                },
                {
                    id: 'p3_reading_2',
                    title: 'Passage 2: The Urban Heat Island Effect',
                    content: `As cities grow, they often become significantly warmer than the surrounding rural areas. This phenomenon is known as the Urban Heat Island (UHI) effect. Several factors contribute to this. First, urban surfaces like asphalt and concrete absorb more solar radiation than natural vegetation. They store this heat during the day and release it slowly at night, keeping the city warm.

Second, the lack of vegetation in cities reduces evapotranspiration. In rural areas, plants release water vapor, which cools the air. In a concrete jungle, this natural cooling system is missing. Third, human activities such as driving cars, running air conditioners, and industrial processes generate waste heat.

The UHI effect has serious consequences. It increases energy consumption as people use more air conditioning. It also exacerbates air pollution, as heat speeds up the chemical reactions that create smog. To combat this, urban planners are advocating for "green roofs" (gardens on top of buildings) and the use of lighter-colored paving materials that reflect rather than absorb sunlight.`,
                    questions: [
                        {
                            id: 'p3_r2_q1',
                            text: 'What is the "Urban Heat Island" effect?',
                            options: [
                                'Cities being cooler than rural areas.',
                                'Islands forming in the ocean.',
                                'Cities being significantly warmer than surrounding rural areas.',
                                'The warming of the entire planet.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'p3_r2_q2',
                            text: 'Which of the following is NOT a cause of the UHI effect?',
                            options: [
                                'Asphalt absorbing heat.',
                                'Lack of vegetation.',
                                'Waste heat from cars and AC.',
                                'Too much rain.'
                            ],
                            correctAnswer: 3
                        },
                        {
                            id: 'p3_r2_q3',
                            text: 'How does vegetation cool the air?',
                            options: [
                                'By casting shadows.',
                                'Through evapotranspiration (releasing water vapor).',
                                'By absorbing pollution.',
                                'By blocking the wind.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'p3_r2_q4',
                            text: 'What is a proposed solution to the UHI effect?',
                            options: [
                                'Building taller skyscrapers.',
                                'Using darker asphalt.',
                                'Green roofs and lighter-colored materials.',
                                'Ban all cars.'
                            ],
                            correctAnswer: 2
                        },
                        {
                            id: 'p3_r2_q5',
                            text: 'The word "exacerbates" in paragraph 3 is closest in meaning to:',
                            options: ['Improves', 'Worsens', 'Ignores', 'Hides'],
                            correctAnswer: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'listening',
            title: 'Listening Section',
            instructions: 'You have 20 minutes to listen to the audio clips.',
            timeLimit: 20 * 60,
            parts: [
                {
                    id: 'p3_lec_1',
                    title: 'Lecture: Psychology (Cognitive Dissonance)',
                    transcript: `(Narrator): Listen to a lecture in a Psychology class.

(Professor): Today we're talking about Leon Festinger's theory of Cognitive Dissonance. This occurs when a person holds two contradicting beliefs, or when their behavior contradicts their belief. This inconsistency causes mental discomfort—dissonance.

Humans are motivated to reduce this discomfort. There are three ways to do it.
One: Change the behavior. If you believe smoking is bad but you smoke, you can quit smoking.
Two: Change the belief. You might convince yourself, "Well, the research on smoking is inclusive."
Three: Add a new cognition to justify the behavior. "I smoke, but I also exercise and eat well, so it balances out."

Festinger did a famous experiment where he paid students to do a boring task and then lie to the next participant that it was fun. Students paid $20 lied but still thought the task was boring. They didn't feel dissonance because the money was a sufficient justification. But students paid only $1 actually convinced themselves the task was fun! Why? Because $1 wasn't enough justification to lie, so they had to change their internal belief to match their action.`,
                    questions: [
                        {
                            id: 'p3_ll1_q1',
                            text: 'What is Cognitive Dissonance?',
                            options: [
                                'A mental illness caused by stress.',
                                'The mental discomfort experienced when holding conflicting beliefs or behaviors.',
                                'The ability to memorize contradicting facts.',
                                'A theory about how we learn languages.'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'p3_ll1_q2',
                            text: 'Which is NOT a way to reduce dissonance?',
                            options: [
                                'Changing the behavior.',
                                'Changing the belief.',
                                'Adding a new justification.',
                                'Increasing the conflict.'
                            ],
                            correctAnswer: 3
                        },
                        {
                            id: 'p3_ll1_q3',
                            text: 'Why did the students paid $1 convince themselves the task was fun?',
                            options: [
                                'They were naturally optimistic.',
                                'They lacked a sufficient external justification (money) for lying, so they changed their internal belief.',
                                'They actually enjoyed the task more than the $20 group.',
                                'They were tricked by the researchers.'
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
            instructions: 'Record your answers.',
            parts: [
                {
                    id: 'p3_sp_1',
                    title: 'Task 1: Independent',
                    prompt: 'Do you agree or disagree with the following statement? "It is better to make decisions based on logic than on emotion." Use specific examples to support your answer.',
                    prepTime: 15,
                    speakTime: 45
                }
            ]
        },
        {
            id: 'writing',
            title: 'Writing Section',
            instructions: 'Write your response.',
            parts: [
                {
                    id: 'p3_wr_1',
                    title: 'Task 1: Integrated Writing',
                    prompt: 'Read a passage about "Self-Driving Cars" and listen to a lecture that challenges the safety claims. Summarize the points made in the lecture.',
                    minWords: 150,
                    timeLimit: 20 * 60
                }
            ]
        }
    ]
};
