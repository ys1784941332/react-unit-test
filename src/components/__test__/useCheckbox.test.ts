import useQueryCheckbox from '../../hooks/useCheckbox';
// 测试 hooks 需要 @testing-library/react-hooks 库
import { renderHook } from '@testing-library/react-hooks';

interface MockCheckboxItemProps {
  key: string;
  value: string;
}

// 获取测试的 默认 checkbox 对象列表
function generateCheckboxList(endIndex: number, startIndex = 1) {
  const defaultCheckboxList: MockCheckboxItemProps[] = [];
  for(let i = startIndex; i <= endIndex; i++) {
    defaultCheckboxList.push({
      key: `${i}`,
      value: `mock-${i}`
    })
  }
  return defaultCheckboxList
}

describe('hook useQueryCheckbox', ()=> {
  it('返回选中的总数', ()=> {
    const checkboxList = generateCheckboxList(8);
    const { result } = renderHook(()=> useQueryCheckbox(checkboxList, 'key'))
    const { selected } = result.current;

    expect(selected).toEqual([]);
  })

  it('should return the total default selected item', () => {
    const checkboxList = generateCheckboxList(8);
    const { result } = renderHook(() =>
      useQueryCheckbox(checkboxList, 'key', checkboxList),
    );

    const { selected } = result.current;
    expect(selected).toEqual(checkboxList);
  });
})