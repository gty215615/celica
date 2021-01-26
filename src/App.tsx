import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type={ButtonType.Primary} size={ButtonSize.Large}>大按钮</Button>
        <Button type={ButtonType.Primary} size={ButtonSize.Small}>小按钮</Button>
        <Button type={ButtonType.Primary} size={ButtonSize.Small} disable>小按钮</Button>
        <Button type={ButtonType.Link} size={ButtonSize.Small} disable link='https://www.baidu.com/'>百度</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
