import { act, fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import TodoHeader from "../todo-header";

describe("测试TodoHeader组件", () => {
  it("正确渲染title组件", () => {
    const title = "测试的标题";
    render(<TodoHeader title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it("正确渲染title组件通过queryByTest", () => {
    const title = "测试的标题";
    const { queryByText } = render(<TodoHeader title={title} />);
    const titleElement = queryByText(title);
    expect(titleElement).not.toBeNull();
    expect(titleElement).toBeInTheDocument();
  });

  it("正确渲染title组件通过getByText", () => {
    const title = "测试的标题";
    const { getByText } = render(<TodoHeader title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it("正确渲染title组件通过container的query", () => {
    const title = "测试的标题";
    const { container } = render(<TodoHeader title={title} />);
    const titleElement = container.querySelector("span");
    expect(titleElement).toHaveTextContent(title);
  });

  it("正确渲染title组件通过getByTestId", () => {
    const title = "测试的标题";
    const { getByTestId } = render(<TodoHeader title={title} />);
    const titleElement = getByTestId("todo-header-title");
    expect(titleElement).toHaveTextContent(title);
  });

  // 判断样式
  it(`正确渲染样式`, ()=> {
    const borderStyle = '1px solid blue';
    const containerStyle: React.CSSProperties = {
      border: borderStyle
    }

    const { container } = render (
      <TodoHeader title="标题" containerStyle={containerStyle} />
    )

    expect(container.children[0]).toHaveStyle(`border: ${borderStyle}`)
  })

  // 判断字段控制样式
  it(`正确渲染 isFinish 为 true 的样式`, ()=> {
    const {getByTestId} = render(<TodoHeader title="标题" isFinish={true} />)
    const element = getByTestId("todo-header-title");
    expect(element).toHaveStyle(`background: red`)
  })

  // 判断属性 toHaveAttribute
  it(`正确渲染显示图标的情况`, async()=> {
    const iconUrl = 'http://www.abc.com/test.png';
    const {container} = render(<TodoHeader title="标题" iconUrl={iconUrl}/>)
    await waitFor(()=> {
      const imgElement = container.querySelector('img');
      expect(imgElement).not.toBeNull();
      expect(imgElement).toHaveAttribute('src', iconUrl)
    })
  })

  // 判断 children
  it(`正确渲染 children 的情况`, async ()=> {
    const id = 'childrenId';
    const text = '这是一个文案';
    const { getByTestId } = render(
      <TodoHeader title="标题">
        <span data-testid={id}>{text}</span>
      </TodoHeader>
    )
    const childElement = getByTestId(id);
    expect(childElement).toHaveTextContent(text);
  })

  // 判断 ReactNode
  it(`正确渲染 extraInfo 的情况`, ()=> {
    const id = 'extraId';
    const text = '这是一个文案';
    const { getByTestId } = render(
      <TodoHeader 
        title="标题" 
        extraInfo={<span data-testid={id}>{text}</span>}
      />
    )

    const childElement = getByTestId(id);
    expect(childElement).toHaveTextContent(text);
  })

  // 判断方法调用
  it(`正确响应 onClickTitlt 的事件`, ()=> {
    // 创建一个用于测试的函数
    const mockClickFn = jest.fn();
    const title = '标题';
    const { getByText } = render(
      <TodoHeader title={title} onClickTitle={mockClickFn} />
    )

    // 模拟用户操作
    fireEvent.click(getByText(title));
    expect(mockClickFn).toBeCalled();    // 断言被调用
    expect(mockClickFn).toBeCalledTimes(1)   // 断言 调用次数
    expect(mockClickFn).toBeCalledWith(title);   // 断言调用参数
  })

  // 判断异步方法调用
  it(`正确响应 onInit 事件`, async () => {
    const title = "标题";
    const newTitle = "新的标题";
    const mockInitFn = jest.fn(() => Promise.resolve(newTitle));
    await act(async () => {
      render(<TodoHeader title={title} onInit={mockInitFn} />);
    });
    const element = screen.queryByText(newTitle);
    expect(element).not.toBeNull();
  });

  it(`正确处理 Input change 事件`, async ()=> {
    const title = '标题';
    const newTitle = '新的标题';
    const { container } = render(<TodoHeader title={title} />)
    const inputElement = container.querySelector('input');
    expect(inputElement).not.toBeNull();

    await act(async ()=> {
      fireEvent.change(inputElement!, { target: { value: newTitle }})
    })
  })
})