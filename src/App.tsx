import { NoteData } from './NoteData'
import { NoteType } from './components/CustomTypes'
import { useState } from 'react'
import { Layout, Button } from 'antd'
import NotesContainer from './components/NotesContainer'
import { styles } from './styles'
const { Header, Footer, Content } = Layout


function App() {
  const [notes, setNotes] = useState<Array<NoteType>>(NoteData)


  return (
    <Layout>
      <Header style={styles.header}>
        NOTES
      </Header>
      <Content style={styles.notesBox}>
        <NotesContainer notes={notes} />
      </Content>
      <Footer style={styles.footer}>
        <Button>Add New</Button>
      </Footer>
    </Layout>
  );
}

export default App;
