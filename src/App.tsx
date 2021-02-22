import { Layout, Button } from 'antd'
import NotesContainer from './components/NotesContainer';
import { styles } from './styles'
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={styles.header}>
        NOTES
      </Header>
      <Content style={styles.notesBox}>
        <NotesContainer />
      </Content>
      <Footer style={styles.footer}>
        <Button>Add New</Button>
      </Footer>
    </Layout>
  );
}

export default App;
