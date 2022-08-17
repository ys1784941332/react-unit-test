import { act, render } from '@testing-library/react';
import TodoTimer from '../todo-timer';

describe('测试 TodoTimer 组件', ()=> {
  it('正确运行定时器', async ()=> {
    // 模拟定时器运行， 不用等待指定的时间
    jest.useFakeTimers();
    const { queryByText } = render(<TodoTimer />)

    act(()=> {
      // 把所有的定时器执行
      jest.runAllTimers();
    })

    const element = queryByText('延迟 1s 后的内容');
    expect(element).not.toBeNull();
  })
})