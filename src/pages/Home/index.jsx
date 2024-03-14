import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FiPlus, FiSearch} from 'react-icons/fi';
import { api } from '../../services/api';

import {Container, Brand, Menu, Search, Content, NewNote} from './styles';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Section} from '../../components/Section';
import {Note} from '../../components/Note';
import {ButtonText} from '../../components/ButtonText';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName) {
    if(tagName == "all") {
      setTagsSelected([]);
      return
    };

    const alreadySelected = tagsSelected.includes(tagName);
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    }else {
      setTagsSelected(prevState => [...prevState, tagName]);
    };
  };

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    };

    fetchTags();
  }, []);

  return(
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText 
            title="All" 
            isActive={tagsSelected.length === 0}
            onClick={() => handleTagSelected("all")}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name}
                isActive={tagsSelected.includes(tag.name)}
                onClick={() => handleTagSelected(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder="Search for the title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="My notes">

          <Link to='details/1'>
            <Note data={{
              title: "React",
              tags: [
                {id: '1', name: 'React'},
                {id: '2', name: 'styled-components'}
              ]
            }} />
          </Link>

          <Link to='details/1'>
            <Note data={{
              title: "React",
              tags: [
                {id: '1', name: 'React'},
                {id: '2', name: 'styled-components'}
              ]
            }} />
          </Link>

          <Link to='details/1'>
            <Note data={{
              title: "React",
              tags: [
                {id: '1', name: 'React'},
                {id: '2', name: 'styled-components'}
              ]
            }} />
          </Link>

          <Link to='details/1'>
            <Note data={{
              title: "React",
              tags: [
                {id: '1', name: 'React'},
                {id: '2', name: 'styled-components'}
              ]
            }} />
          </Link>

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Create note
      </NewNote>
    </Container>
  );
};