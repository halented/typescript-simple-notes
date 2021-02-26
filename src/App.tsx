import { NoteData } from './NoteData'
import { NoteType } from './components/CustomTypes'
import { useState } from 'react'
import { Route, useHistory, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { styles } from './styles'
import NewNoteForm from './components/NewNoteForm'
import AllNotes from './components/AllNotes'
const { Header } = Layout


function App() {
  // you could also define that the state returned by useState would be an array of notes by
  // using the syntax: useState<Array<NoteType>>(NoteData)
  // but that looks clunkier IMO.
  const [notes, setNotes] = useState<NoteType[]>(NoteData)
  const history = useHistory();

  const handleSubmit = (ev: NoteType) => {
    if (!ev.title) { ev.title = "Untitled" }
    ev.id = Math.round(Math.random() * 200)
    console.log(ev)
    setNotes(prevNotes => [...prevNotes, ev])
    history.push('/')
  }

  return (
    <>
      <Layout>
        <Header style={styles.header}>
          NOTESAPP
        </Header>
      </Layout>
      <Route exact path='/' render={props =>
        (<AllNotes {...props} notes={notes} />)
      } />
      <Route path='/new' render={props =>
        (<NewNoteForm {...props} handleSubmit={handleSubmit} />)
      } />
    </>
  );
}

export default withRouter(App)
