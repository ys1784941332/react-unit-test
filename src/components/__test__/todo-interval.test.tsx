import { act, render } from '@testing-library/react';
import TodoInterval from '../todo-interval';

describe('测试 TodoInterval 组件', ()=> {
  it('正确运行定时器', async ()=> {
    jest.useFakeTimers();

    const callback = jest.fn();
    render(<TodoInterval callback={callback} />)

    act(()=> {
      // 处理循环定时器
      jest.runOnlyPendingTimers();
    })
    
    expect(callback).toBeCalled();
  })
})