import './App.css';
import React, { useState } from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

const pages = [
  { title: 'Welcome', detail: 'About me' },
  { title: 'Development', detail: 'All projects' },
  { title: 'Speedruns', detail: 'My records' },
  { title: 'Keyboards', detail: 'The collection' },
  { title: 'Bodybuilding', detail: 'Training routine' }
];

function PageIntro(props) {
  return (
    <div>
      <Header as='h1'>{props.page.title}</Header>
      <Button basic color='orange' onClick={props.onNext}>
        Next
        <Icon name='angle double right' />
      </Button>
      <Button basic color='teal' onClick={props.onDetail}>{props.page.detail}</Button>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <PageIntro page={pages[page]} onNext={() => setPage(page < pages.length - 1 ? page + 1 : 0)} />
    </div>
  );
}

export default App;
