import {Container} from './styles';

export function ButtonText({title, isActive = "", ...rest}) {
  return(
    <Container
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    > 
      {title}
    </Container>
  );
};