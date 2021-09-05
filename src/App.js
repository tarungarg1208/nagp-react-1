// import logo from './logo.svg';
import './App.css';
import ParentComp from './components/Parent'
import { blogs } from './blog_data'
import { comments } from './blog_data'
import BlogForm from './components/Form1'

function App() {
  // Adding blogs and comments to localStorage
  localStorage.setItem('blogs', JSON.stringify(blogs))
  localStorage.setItem('comments', JSON.stringify(comments))

  return (
    <div className="App">
      <h1><u>NAGP ASSIGNMENT</u></h1>
      <BlogForm temp="TARUN"></BlogForm>
      {/* Not Passing blogs and comments as props because now they are a part of local storage */}
      <ParentComp message="TARUN GARG"></ParentComp>
    </div>
  );
}

export default App;
