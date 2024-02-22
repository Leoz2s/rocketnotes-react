import {Container} from './styles.js';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';

export function Details() {

  return(
    <Container>
      <Header>
      </Header>
        <h1>Hello World!</h1>
        <span>Hallo!</span>

      <Button title="Return" />
    </Container>
  );
};