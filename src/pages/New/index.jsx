import {Container, Form} from './styles';

import {Header} from "../../components/Header";
import {Section} from "../../components/Section";
import {Input} from "../../components/Input";
import {Textarea} from "../../components/Textarea";
import {NoteItem} from "../../components/NoteItem";
import {Button} from "../../components/Button";

export function New() {
  return(
  <Container>
    <Header />

    <main>
      <Form>
        <header>
          <h1>Create note</h1>
          <a href="/">Return</a>
        </header>

        <Input
          placeholder="Title"
        />

        <Textarea placeholder="Observations" />

        <Section title="Useful links">
          <NoteItem value="https://link.com.br" />
          <NoteItem isNew placeholder="New link" />
        </Section>

        <Section title="Tags">
          <div className='tags'>
            <NoteItem value="React" />
            <NoteItem value="styled-components" />
            <NoteItem isNew placeholder="New tag" />
          </div>
        </Section>

        <Button title="Save" />
      </Form>
    </main>
  </Container>
  );
};