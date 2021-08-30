// import logo from './logo.svg';
import './App.css';
import ParentComp from './components/Parent'
import { blogs } from './blog_data'
import { comments } from './blog_data'

function App() {


  return (
    <div className="App">
      <h1><u>NAGP ASSIGNMENT</u></h1>
      {/* Passing blogs and comments as props */}
      <ParentComp blogs={blogs} comments={comments} message="TARUN GARG"></ParentComp>
    </div>
  );
}

export default App;
