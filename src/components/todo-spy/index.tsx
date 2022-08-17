import React from 'react';

function TodoSpy() {
  const { pathname } = window.location;
  const list = document.querySelectorAll('img')
  return (
    <div>
      <span key='pathname'>{pathname}</span>
      <span key='result'>{`size: ${list.length}`}</span>
    </div>
  );
}

export default TodoSpy;
