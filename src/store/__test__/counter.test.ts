import {} from '@testing-library/react';
import { CounterReducer, CounterAction } from '../slice/counter';

describe('测试 Counter state', ()=> {
  it('正确返回初始值', () => {
    expect(CounterReducer(undefined, {}).value).toEqual(0);
  })

  it('正确返回设置初始值', () => {
    expect(CounterReducer({ value: 10 }, {}).value).toEqual(10);
  })

  it('正确响应 increment 方法', () => {
    expect(CounterReducer({ value: 10 }, CounterAction.increment()).value).toEqual(11);
  })

  it('正确响应 decrement 方法', () => {
    expect(CounterReducer({value: 10}, CounterAction.decrement()).value).toEqual(9);
  })

  it('正确响应 incrementByMount 方法', () => {
    expect(CounterReducer({ value: 10 }, CounterAction.incrementByMount(10)).value).toEqual(20);
  })

  it('正确响应 decrementByMount 方法', () => {
    expect(CounterReducer({ value: 10 }, CounterAction.decrementByMount(10)).value).toEqual(0);
  })
})