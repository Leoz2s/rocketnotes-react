import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {FiPlus, FiSearch} from 'react-icons/fi';
import { api } from '../../services/api';

import {Container, Brand, Menu, Search, Content, NewNote} from './styles';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Section} from '../../components/Section';
import {Note} from '../../components/Note';
import {ButtonText} from '../../components/ButtonText';

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if(tagName === "all") {
      return setTagsSelected([]);
    };

    const alreadySelected = tagsSelected.includes(tagName);
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    }else {
      setTagsSelected(prevState => [...prevState, tagName]);
    };
  };

  function handleDetails(id) {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    };

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    };

    fetchNotes();
  }, [tagsSelected, search]);

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
        <Input 
          placeholder="Search for the title" 
          icon={FiSearch} 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="My notes">
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
          {/* <Note data={{
            title: {note},
            tags: [
              {id: '1', name: 'React'},
              {id: '2', name: 'styled-components'}
            ]
          }} /> */}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Create note
      </NewNote>
    </Container>
  );
};