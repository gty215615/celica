import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button'
import Alert ,{ AlertType } from './components/Alert/Alert'
import './App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className='component-container'>
      <div>
      Button
          </div>
        <Button onClick={(e) => {
          e.preventDefault(); 
          console.log(1234);
        }} buttonType={ButtonType.Primary} size={ButtonSize.Large}>大按钮</Button>
        <Button  >default</Button>
        <Button buttonType={ButtonType.Primary} size={ButtonSize.Small}>小按钮</Button>
        <Button buttonType={ButtonType.Primary} size={ButtonSize.Small} disable>小按钮</Button>
        <Button buttonType={ButtonType.Link} size={ButtonSize.Small} link='https://www.baidu.com/'>百度</Button>
        <Button buttonType={ButtonType.Link} size={ButtonSize.Small} disable link='https://www.baidu.com/'>百度</Button>
        </p>
        <p className='component-container'>
          <div>
            Alert
          </div>
        <Alert type={AlertType.Success} title='百度title' close={true} description='百度description'></Alert>
        <Alert type={AlertType.Default} title='百度title' description='百度description'></Alert>
        <Alert type={AlertType.Warning} title='百度title' close={true} description='百度description'></Alert>
        <Alert type={AlertType.Danger} title='百度title' description='百度description'></Alert>
        <Alert type={AlertType.Info} title='百度title' close={true} description='百度description'></Alert>
        </p>
       
      </header>
    </div>
  );
}

export default App;
