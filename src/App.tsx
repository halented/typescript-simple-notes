import { NoteData } from './NoteData'
import { NoteType } from './components/CustomTypes'
import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { styles } from './styles'
import NewNoteForm from './components/NewNoteForm'
import AllNotes from './components/AllNotes'
const { Header } = Layout


function App() {
  const [notes, setNotes] = useState<Array<NoteType>>(NoteData)


  return (
    <Router>
      <Layout>
        <Header style={styles.header}>
          NOTES
        </Header>
      </Layout>
      <Route exact path='/' render={props =>
        (<AllNotes {...props} notes={notes} />)
      } />
      <Route exact path='/new' component={NewNoteForm} />
    </Router>
  );
}

export default App;
