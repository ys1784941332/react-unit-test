import "./App.css";
import { Button, message } from "antd";
import { useCallback } from "react";
import TodoHeader from "./components/todo-header";
import TodoContent from "./components/todo-content"
import TodoTimer from "./components/todo-timer";
import TodoReport from "./components/todo-report";
import TodoSpy from "./components/todo-spy";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const showMessage = useCallback(() => {
    message.info(`展示一个提示`);
  }, []);

  const onClickTitle = useCallback((title: string)=>{
    window.alert(title)
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path='/'>
              <Button type="primary" onClick={showMessage}>
                这是一个按钮
              </Button>
              
              <div>
                <TodoHeader 
                  title="这是一个标题" 
                  containerStyle={{ border: "1px solid blue" }}  
                  isFinish={true} 
                  onClickTitle={onClickTitle}
                />

                <TodoContent 
                  title="这是标题"
                  content="这是内容"
                />
                <TodoTimer />

                <TodoSpy />
              </div>
            </Route>

            <Route exact={true} path="/report/:reportId">
              <div>
                <TodoReport
                  title="这是一个标题"
                  extraMsg="补充信息"
                  content="这是一个内容"
                />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
