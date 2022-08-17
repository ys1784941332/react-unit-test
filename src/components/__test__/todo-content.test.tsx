import { render } from '@testing-library/react';
import TodoContent from '../todo-content';

const TITLE = '这是一个标题';
const CONTENT = '这是一个内容';

describe('测试 TodoContent', ()=> {
  it('正确渲染 TodoContent 组件', ()=> {
    const { queryByText } = render(
      <TodoContent title={TITLE} content={CONTENT} />
    )

    const titleElement = queryByText(TITLE);
    const contentElement = queryByText(CONTENT);

    expect(titleElement).not.toBeNull();
    expect(titleElement).toBeInTheDocument();

    expect(contentElement).not.toBeNull();
    expect(contentElement).toBeInTheDocument();
  })

  it('正确匹配快照', ()=> {
    const { asFragment } = render(
      <TodoContent title={TITLE} content={CONTENT} />
    )
    expect(asFragment()).toMatchSnapshot();
  })
})

describe('测试定制对象的快照内容', ()=> {
  it('正确匹配快照', ()=> {
    const user = {
      name: 'lisi',
      age: 10,
    }

    expect(user).toMatchSnapshot({
      name: 'lisi',
      age: 10
    })
  })
})