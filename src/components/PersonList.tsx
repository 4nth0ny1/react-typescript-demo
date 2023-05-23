import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name) => {
        return (
          <ul key={name.first}>
            <li>
              {name.first} {name.last}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
