import {Container, Form, Background} from './styles';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links</p>

        <h2>Do your Login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Enter" />

        <a href="#">Create account</a>
      </Form>

      <Background />
    </Container>
  );
};