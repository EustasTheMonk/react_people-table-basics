import React from 'react';
import cn from 'classnames';
import { Person } from '../../types';
import { makeLinkWithName } from '../../Utils/MakeLinkWithName';
import { Link } from 'react-router-dom';

interface Props {
  person: Person;
  chosenId?: string;
}

export const PersonBody: React.FC<Props> = ({ person, chosenId }) => {
  const {
    sex,
    slug,
    name,
    born,
    died,
    motherName,
    fatherName,
    mother,
    father,
  } = person;

  return (
    <tr
      data-cy="person"
      className={cn({ 'has-background-warning': chosenId === slug })}
    >
      <td>
        <Link
          className={cn({ 'has-text-danger': sex === 'f' })}
          to={`/people/${slug}`}
        >
          {name}
        </Link>
      </td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      <td>{!!mother ? makeLinkWithName(mother) : motherName || '-'}</td>
      <td>{!!father ? makeLinkWithName(father) : fatherName || '-'}</td>
    </tr>
  );
};
