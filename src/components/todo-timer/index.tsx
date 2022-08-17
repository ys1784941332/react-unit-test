import { useState, useEffect } from 'react';

function TodoTimer() {
  const [todoContent, setTodoContent] = useState('')

  useEffect(()=> {
    const timerId = setTimeout(() => {
      setTodoContent('延迟 1s 后的内容')
    }, 1000);

    return () => {
      clearTimeout(timerId);
    }
  }, [])
  return (
    <div>
      {todoContent}
    </div>
  );
}

export default TodoTimer;
