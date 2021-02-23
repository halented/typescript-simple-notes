import { NoteData } from './NoteData'
import { NoteType } from './components/CustomTypes'
import { useState } from 'react'
// import { useHistory } from "react-router";
import { Route, useHistory, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { styles } from './styles'
import NewNoteForm from './components/NewNoteForm'
import AllNotes from './components/AllNotes'
const { Header } = Layout


function App() {
  const [notes, setNotes] = useState<Array<NoteType>>(NoteData)
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
