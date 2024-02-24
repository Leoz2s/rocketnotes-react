import {Container, Links, Content} from './styles.js';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Section} from '../../components/Section';
import {Tag} from '../../components/Tag';
import {ButtonText} from '../../components/ButtonText';

export function Details() {

  return(
    <Container>
      <Header />
      
      <main>
        <Content>
          <ButtonText title="Delete note" />

          <h1>Introduction to React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum accusantium culpa sunt hic dolorum. Harum minima quam nulla 
            aliquam laborum, accusamus assumenda veniam alias, dolore,
            tempore quis vitae consectetur dicta!
          </p>

          <Section title="Useful links">
            <Links>
              <li><a href="#">Link 1</a></li>  
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>  
            </Links>  
          </Section>
          
          <Section title="Tags">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>

          <Button title="Return" />

        </Content>
      </main>
    </Container>
  );
};