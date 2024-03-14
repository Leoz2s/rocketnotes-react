import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { api } from '../../services/api';

import {Container, Form} from './styles';
import {Header} from "../../components/Header";
import {Section} from "../../components/Section";
import {Input} from "../../components/Input";
import {Textarea} from "../../components/Textarea";
import {NoteItem} from "../../components/NoteItem";
import {Button} from "../../components/Button";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  };
  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  };

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };
  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  };

  async function handleNewNote() {
    if(!title) {
      return alert("Type the note title.");
    }else if(newLink) {
      return alert(`You left a link in add field but didn't click on the add button. Click the add button or leave the field empty.`);
    } else if(newTag) {
      return alert(`You left a tag in add field but didn't click on the add button. Click the add button or leave the field empty.`);
    };

    await api.post("/notes", {
      title,
      description,
      links,
      tags,
    });

    alert("Note created with success!");
    navigate("/");
  };

  return(
  <Container>
    <Header />

    <main>
      <Form>
        <header>
          <h1>Create note</h1>
          <Link to="/">Return</Link>
        </header>

        <Input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <Textarea 
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <Section title="Useful links">
          {
            links.map((link, index) => (
              <NoteItem 
                key={String(index)}
                value={link} 
                onClick={() => handleRemoveLink(link)} 
              />
            ))
          }
          <NoteItem 
            isNew
            placeholder="New link"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
          />
        </Section>

        <Section title="Tags">
          <div className='tags'>
            {
              tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem 
              isNew 
              placeholder="New tag"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
        </Section>

        <Button title="Save" onClick={handleNewNote} />
      </Form>
    </main>
  </Container>
  );
};