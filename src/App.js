// import logo from './logo.svg';
import './App.css';
import BlogComponent from './components/BlogComponent'
import { blogs_data } from './blog_data'
import { comments } from './blog_data'

function App() {

  let blogs = [];
  if (JSON.parse(localStorage.getItem('blogs')?.length > 0)) {
    // getting blogs from local storage
    blogs = JSON.parse(localStorage.getItem('blogs'))
  }
  else {
    // Adding blogs and comments to localStorage
    blogs = blogs_data;
    localStorage.setItem('blogs', JSON.stringify(blogs));
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  return (
    <div className="App">
      <h1><u>NAGP ASSIGNMENT</u></h1>
      {/* Passing blogs and comments as props to parent component */}
      <BlogComponent blogs={blogs} comments={comments} message="TARUN GARG"></BlogComponent>
    </div>
  );
}

export default App;
