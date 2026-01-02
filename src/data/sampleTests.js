export const sampleToefl = {
    id: 'toefl-sample-1',
    title: 'TOEFL iBT Sample Test',
    description: 'A comprehensive sample covering Reading and Writing skills.',
    sections: [
        {
            id: 'reading',
            type: 'reading',
            title: 'Reading',
            passage: `The origins of the modern calendar can be traced back to ancient civilizations that observed celestial bodies to mark time. The Egyptians, for instance, developed a solar calendar based on the annual flooding of the Nile River, which coincided with the rising of the star Sirius. This event was crucial for their agriculture, as it signaled the time to plant crops. Unlike the lunar calendars used by other cultures, which often fell out of sync with the solar year, the Egyptian calendar was remarkably accurate for its time.

Later, the Romans adopted and refined this system under Julius Caesar, creating the Julian calendar. However, it slightly miscalculated the length of the solar year, leading to a drift of about 10 days by the 16th century. This discrepancy prompted Pope Gregory XIII to introduce the Gregorian calendar in 1582, which included a leap year system to correct the error. Today, the Gregorian calendar is the internationally accepted civil calendar.`,
            questions: [
                {
                    id: 'r1',
                    text: 'Why was the rising of the star Sirius important to the Ancient Egyptians?',
                    options: [
                        'It marked the beginning of a religious festival.',
                        'It signaled the flooding of the Nile and planting season.',
                        'It was used to navigate the desert at night.',
                        'It coincided with the pharaoh’s birthday.'
                    ],
                    correctAnswer: 1 // 0-indexed
                },
                {
                    id: 'r2',
                    text: 'What was the main issue with the Julian calendar?',
                    options: [
                        'It was too difficult for common people to understand.',
                        'It depended entirely on lunar cycles.',
                        'It slightly miscalculated the solar year, causing a drift over centuries.',
                        'It did not include any leap years.'
                    ],
                    correctAnswer: 2
                }
            ]
        },
        {
            id: 'listening',
            type: 'listening',
            title: 'Listening',
            audioPlaceholder: true,
            transcript: '[Audio: A professor discussing the migration patterns of Monarch butterflies. He explains that they migrate thousands of miles from Canada to Mexico, a phenomenon unique among insects due to the distance and the fact that it takes multiple generations to complete the round trip.]',
            questions: [
                {
                    id: 'l1',
                    text: 'What is unique about the Monarch butterfly migration?',
                    options: [
                        'They migrate only at night.',
                        'They are the only insect that migrates.',
                        'The migration takes multiple generations to complete.',
                        'They migrate from Mexico to South America.'
                    ],
                    correctAnswer: 2
                }
            ]
        },
        {
            id: 'writing',
            type: 'writing',
            title: 'Writing',
            prompt: 'Do you agree or disagree with the following statement: "Technology has made children less creative than they were in the past." Use specific reasons and examples to support your answer.',
            minWords: 50
        },
        {
            id: 'speaking',
            type: 'speaking',
            title: 'Speaking',
            prompt: 'Describe a place you have visited that has a special meaning to you. Explain why it is meaningful using specific details.',
            isRecording: true // Placeholder for now, maybe use text box as fallback
        }
    ]
};

export const sampleIelts = {
    id: 'ielts-sample-1',
    title: 'IELTS Academic Sample',
    description: 'Practice for IELTS Academic Reading and Writing.',
    sections: [
        {
            id: 'reading',
            type: 'reading',
            title: 'Reading Passage 1',
            passage: 'Urban planning in the 21st century faces unique challenges related to sustainability and population growth. Architects and planners are increasingly looking towards "vertical forests" - high-rise buildings incorporated with trees and plants - to improve air quality and reduce the urban heat island effect.',
            questions: [
                {
                    id: 'ir1',
                    text: 'What is the main purpose of "vertical forests"?',
                    options: [
                        'To provide food for residents.',
                        'To improve air quality and reduce heat.',
                        'To increase the height of buildings.',
                        'To separate residential and commercial areas.'
                    ],
                    correctAnswer: 1
                }
            ]
        }
    ]
};
