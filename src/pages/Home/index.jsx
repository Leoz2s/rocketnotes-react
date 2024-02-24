import {FiPlus, FiSearch} from 'react-icons/fi';
import {Container, Brand, Menu, Search, Content, NewNote} from './styles';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Section} from '../../components/Section';
import {Note} from '../../components/Note';
import {ButtonText} from '../../components/ButtonText';

export function Home() {

  return(
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="All" isActive/></li>
        <li><ButtonText title="Frontend"/></li>
        <li><ButtonText title="Node"/></li>
        <li><ButtonText title="React"/></li>
      </Menu>

      <Search>
        <Input placeholder="Search for the title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="My notes">
          <Note data={{
            title: "React",
            tags: [
              {id: '1', name: 'React'},
              {id: '2', name: 'styled-components'}
            ]
          }} />
        </Section>
      </Content>

      <NewNote>
        <FiPlus/>
        Create note
      </NewNote>
    </Container>
  );
};