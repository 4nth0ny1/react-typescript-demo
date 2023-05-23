type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // if it doesn't return anything
};

export const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Click</button>;
};
