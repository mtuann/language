import { toefl_practice_1 } from './tests/toefl_practice_1';
import { toefl_practice_2 } from './tests/toefl_practice_2';
import { toefl_practice_3 } from './tests/toefl_practice_3';

export const testRegistry = {
    [toefl_practice_1.id]: toefl_practice_1,
    [toefl_practice_2.id]: toefl_practice_2,
    [toefl_practice_3.id]: toefl_practice_3,
};

export const getTestById = (id) => {
    return testRegistry[id] || null;
};
