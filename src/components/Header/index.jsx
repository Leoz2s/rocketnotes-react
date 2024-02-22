import {Container, Profile} from './styles';

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

    </Container>
  );
};