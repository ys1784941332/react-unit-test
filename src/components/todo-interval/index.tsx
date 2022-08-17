import { useState, useEffect } from 'react';

function TodoInterval({callback}: {callback: ()=> void}) {
  const [todoContent, setTodoContent] = useState('');

  useEffect(()=> {
    const timerId = setInterval(()=> {
      setTodoContent('延迟1s后的内容');
      callback()
    })

    return ()=> {
      clearInterval(timerId)
    }
  }, [callback])

  return (
    <div>
      { todoContent }
    </div>
  );
}

export default TodoInterval;
