import { NoteType } from './CustomTypes'
import { styles } from '../styles'
import NotesContainer from './NotesContainer'
import { Layout, Button } from 'antd'
import { Link } from 'react-router-dom'

const { Content, Footer } = Layout


interface Props {
    notes: Array<NoteType>
}

function AllNotes(props: Props) {
    const { notes } = props

    return (
        <>
            <Content style={styles.notesBox}>
                <NotesContainer notes={notes} />
            </Content>
            <Footer style={styles.footer}>
                <Link to='/new'>
                    <Button>Add New</Button>
                </Link>
            </Footer>
        </>
    )
}

export default AllNotes
