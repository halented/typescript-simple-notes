import { PageHeader, Form, Input, Button } from 'antd'

const { TextArea } = Input

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 14,
    },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}

interface Props {
    handleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void
}


function NewNoteForm(props: Props) {
    const { handleSubmit } = props
    const [form] = Form.useForm()

    return (
        <>
            <PageHeader title="Add New Note" />
            <Form
                {...layout}
                onFinish={handleSubmit}
                form={form}>
                <Form.Item
                    label='Title'
                    name='title'>
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Body'
                    name='body'
                    rules={[
                        {
                            required: true,
                            message: 'Some text required to save note',
                        },
                    ]}>
                    <TextArea />
                </Form.Item>
                <Form.Item name='id'>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button htmlType='submit'>Save</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default NewNoteForm