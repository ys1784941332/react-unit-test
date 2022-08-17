import { Input } from 'antd';
import { PropsWithChildren, ReactNode, CSSProperties, useCallback, useState, useEffect } from 'react';
import './index.css';

interface TodoHeaderProps {
  title: string;
  containerStyle?: CSSProperties;
  isFinish?: boolean;
  iconUrl?: string;
  extraInfo?: ReactNode;
  onClickTitle?: (title: string) => void;
  onInit?: ()=> Promise<string>
}

export default function TodoHeader({
  title,
  containerStyle,
  iconUrl, 
  isFinish = false, 
  children,
  extraInfo,
  onClickTitle,
  onInit,
}: PropsWithChildren<TodoHeaderProps>) {
  const [currentTitle, setCurrentTitle] = useState<string>(title)

  useEffect(()=>{
    if(onInit) {
      (async ()=> {
        const result = await onInit()
        setCurrentTitle(result)
      })()
    }
  }, [onInit])

  // 点击标题的方法
  const clickTitleFn = useCallback(()=>{
    onClickTitle?.(title)
  }, [onClickTitle, title])

  return (
    <div className="report-header" style={containerStyle}>
      {iconUrl && <img src={iconUrl} />}
      <span 
        className="title" 
        data-testid="todo-header-title" style={{
        background: isFinish ? 'red' : 'white'
        }}
        onClick={clickTitleFn}
      >{currentTitle}</span>
      <Input
        type="text"
        style={{ width: 300, display: "flex" }}
        value={currentTitle}
        onChange={e => setCurrentTitle(e.target.value)}
      />
      <span className="extra">{extraInfo}</span>
      {children}
    </div>
  )
}