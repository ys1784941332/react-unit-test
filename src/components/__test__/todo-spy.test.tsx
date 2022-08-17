import { render } from '@testing-library/react';
import TodoSpy from '../todo-spy';

describe('测试 TodoSpy 组件', ()=> {
  it('正确渲染 pathname', ()=> {
    const pathname = '/test/eason';

    // jest.spyOn 返回一个 mock 的方法
    const spy = jest.spyOn(window, 'location', 'get').mockReturnValueOnce({
      ...window.location,
      pathname
    })

    const { queryByText } = render(<TodoSpy />)
    const element = queryByText(pathname);

    expect(element).not.toBeNull();

    // 清除副作用
    spy.mockRestore();
  })

  it("正确渲染querySelectorAll的结果", () => {
    const list = [1, 2, 3];

    const spy = jest
      .spyOn(document, "querySelectorAll")
      .mockImplementationOnce((_str: string) => list);
      
    const { queryByText } = render(<TodoSpy />);
    const element = queryByText(`size: ${list.length}`);
    expect(element).not.toBeNull();
    spy.mockRestore();
  });
})