import { render } from '@testing-library/react';

const reportId = '14'

// 通过 doMock 获取 useParams 的值
jest.doMock('react-router-dom', ()=> ({
  useParams: () => ({
    reportId
  })
}));

describe('测试 TodoHeader 组件', ()=> {
  // mock 之后 做重置
  afterEach(()=> {
    jest.resetModules();
  })

  it('正确渲染 TodoReport', async ()=> {
    const title = 'title';
    const content = 'content';
    const extraMsg = 'extraMsg';

    // 组件需要在执行 mock 之后再引入
    const { default: TodoReport } = await import('../todo-report');

    const { queryByText } = render(
      <TodoReport title={title} content={content} extraMsg={extraMsg} />
    )

    const titleElement = queryByText(title);
    const contentElement = queryByText(content);
    const reportElement = queryByText(`报告:${reportId}`);

    expect(titleElement).not.toBeNull()
    expect(contentElement).not.toBeNull()
    expect(reportElement).not.toBeNull()
  })
})
