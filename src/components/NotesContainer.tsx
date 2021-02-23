import Note from "./Note"
import { Card, PageHeader } from 'antd'
import { NoteType } from './CustomTypes'


interface Props {
    notes: Array<NoteType>
}
// const NotesContainer: React.FC<Props> = ({ notes }) => {
function NotesContainer(props: Props) {
    const { notes } = props

    return (
        <Card>
            <PageHeader title="All Current Notes" />
            {notes.map(note => <Note note={note} />)}
        </Card>
    )
}

export default NotesContainer
