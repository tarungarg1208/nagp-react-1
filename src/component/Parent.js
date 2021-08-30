import { Component } from "react";
import Child from './Child'

export class Parent extends Component{
    render() {
        console.log(this.props)
        return (
            <div>
                <h1><i>BLOGS</i></h1>
                { this.props.blogs.map((blog) => 
                <div key={blog.id}>
                    <h2> Blog Title: <u>{blog.title}</u></h2>
                    {/* Invoking Child component for getting the active comments(CONDITIONAL RENDERING) */}
                    <Child id={blog.id} comments={this.props.comments}></Child>
                    </div>
                    )}
            </div>
        )
    }
}

export default Parent