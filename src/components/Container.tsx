type ContainerProps = {
  styles: React.CSSProperties;
  // we have to restrict to only valid CSS
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text content goes here</div>;
};
