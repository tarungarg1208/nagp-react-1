import { Component } from "react";
import CommentsComponent from './CommentsComponent'
import BlogForm from './Form'
export class BlogComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogs: this.props.blogs,
            comments: this.props.comments,
        };
        this.blogUpdater = this.blogUpdater.bind(this);
    }
    blogUpdater(updated_blogs) {
        // const updated_blogs = JSON.parse(localStorage.getItem('blogs'))
        this.setState({ blogs: updated_blogs });
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <BlogForm temp="TARUN" updateBlog={this.blogUpdater}></BlogForm>
                <h1><i>BLOGS</i></h1>
                {this.state.blogs.map((blog) =>
                    <div key={blog.id}>
                        <h2> Blog Title: <u>{blog.title}</u></h2>
                        {/* Invoking Child component for getting the active comments(CONDITIONAL RENDERING) */}
                        <CommentsComponent id={blog.id} comments={this.state.comments}></CommentsComponent>
                    </div>
                )}
            </div>
        )
    }
}

export default BlogComponent