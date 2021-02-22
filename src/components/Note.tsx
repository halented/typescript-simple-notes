import { Card, Divider } from 'antd'
import { styles } from '../styles'
import { NoteType } from './CustomTypes'

interface Props {
    note: NoteType
}

function Note(props: Props) {
    const { id, title, body } = props.note

    return (
        <Card>
            <div style={styles.cardHeader}>
                {title}
            </div>
            <Divider />
            {body}
        </Card>
    )
}

export default Note
