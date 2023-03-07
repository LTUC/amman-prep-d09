import logo from './logo.svg';
import './App.css';
import NewComp from './components/NewComp';
import PropsExample from './components/PropsExample';

function App() {
  return (
    <>
      <h1 style={{color:"green"}}>Hello from App Component</h1>
      <p>This is my first React app</p>
      <NewComp />
      {/* <PropsExample name="Roaa" age="27" test="test1"/>
      <PropsExample name="Ahamd" age="25" test="test1"/>
      <PropsExample name="Alaa" age="23" test="test1"/>
      <PropsExample name="Abdullah" age="22" test="test1"/> */}
    </>
  );
}

export default App;
