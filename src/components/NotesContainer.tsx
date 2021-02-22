import Note from "./Note"
import { Card } from 'antd'
import { styles } from '../styles'
import { NoteType } from './CustomTypes'


interface Props {
    notes: Array<NoteType>
}
// const NotesContainer: React.FC<Props> = ({ notes }) => {
function NotesContainer(props: Props) {
    const { notes } = props

    return (
        <Card>
            <div style={styles.ital}>Click a Note to View</div>
            {notes.map(note => <Note note={note} />)}
        </Card>
    )
}

export default NotesContainer
