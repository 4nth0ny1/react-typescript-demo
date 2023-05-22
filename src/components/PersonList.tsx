type PersonListProps = {
  names: { first: string; last: string }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
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
