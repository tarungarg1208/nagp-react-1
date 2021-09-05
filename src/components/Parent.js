import { Component } from "react";
import ChildComp from './Child'

export class Parent extends Component {

    constructor() {
        super();
        // getting blogs and comments from localStorage
        this.blogs = JSON.parse(localStorage.getItem('blogs'))
        this.comments = JSON.parse(localStorage.getItem('comments'))

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1><i>BLOGS</i></h1>
                {this.blogs.map((blog) =>
                    <div key={blog.id}>
                        <h2> Blog Title: <u>{blog.title}</u></h2>
                        {/* Invoking Child component for getting the active comments(CONDITIONAL RENDERING) */}
                        <ChildComp id={blog.id} comments={this.comments}></ChildComp>
                    </div>
                )}
            </div>
        )
    }
}

export default Parent