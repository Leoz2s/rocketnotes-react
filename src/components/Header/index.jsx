import {RiShutDownLine} from 'react-icons/ri';
import {Container, Profile, Logout} from './styles';

export function Header() {

  return(
    <Container>
      <Profile>
        <img src="https://github.com/Leoz2s.png" alt="User picture" />

        <div>
          <span>Welcome,</span>
          <strong>Leonardo Santos</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
};