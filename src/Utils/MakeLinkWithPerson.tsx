import { Person } from '../types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const makeLinkWithPerson = (person: Person) => {
  return (
    <Link
      className={cn({ 'has-text-danger': person.sex === 'f' })}
      to={`/people/${person.slug}`}
    >
      {person.name}
    </Link>
  );
};
