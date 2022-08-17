import { Card, Input} from 'antd';
const { TextArea } = Input;

interface TodoContentProps {
  title: string;
  content: string;
}

export default function TodoContent({ title, content}: TodoContentProps) {
  return (
    <Card title={title} style={{width: 400}}>
      <TextArea rows={4} value={content} />
    </Card>
  )
}