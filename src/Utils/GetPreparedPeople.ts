import { Person } from '../types';

export const getPreparedPeople = (people: Person[]): Person[] => {
  return people.map(person => {
    const personsFather: Person | undefined =
      people.find(human => human.name === person.fatherName) || undefined;

    const personsMother: Person | undefined =
      people.find(human => human.name === person.motherName) || undefined;

    return {
      ...person,
      mother: personsMother,
      father: personsFather,
    };
  });
};
