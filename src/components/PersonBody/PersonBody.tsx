import React from 'react';
import cn from 'classnames';
import { Person } from '../../types';
import { makeLinkWithPerson } from '../../Utils/MakeLinkWithPerson';

interface Props {
  person: Person;
  chosenId?: string;
}

export const PersonBody: React.FC<Props> = ({ person, chosenId }) => {
  const { sex, slug, born, died, motherName, fatherName, mother, father } =
    person;

  return (
    <tr
      data-cy="person"
      className={cn({ 'has-background-warning': chosenId === slug })}
    >
      <td>{makeLinkWithPerson(person)}</td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      <td>{mother ? makeLinkWithPerson(mother) : motherName || '-'}</td>
      <td>{father ? makeLinkWithPerson(father) : fatherName || '-'}</td>
    </tr>
  );
};
