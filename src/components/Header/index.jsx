import {RiShutDownLine} from 'react-icons/ri';
import {Container, Profile, Logout} from './styles';

import {useAuth} from "../../hooks/auth";

export function Header() {
  const {signOut} = useAuth();

  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Leoz2s.png" alt="User picture" />

        <div>
          <span>Welcome,</span>
          <strong>Leonardo Santos</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
};