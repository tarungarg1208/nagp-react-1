import React, { useState } from 'react';


const BlogForm = (props) => {
    const [enteredBlogId, setEnteredBlogId] = useState('');
    const [enteredBlogTitle, setEnteredBlogTitle] = useState('');
    const [enteredBlogDescription, setEnteredBlogDescription] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        let old_blogs = JSON.parse(localStorage.getItem('blogs'))
        console.log(old_blogs)
        let new_blog_info = {
            "id": enteredBlogId,
            "title": enteredBlogTitle,
            "description": enteredBlogDescription
        }
        var new_data = [];
        new_data.push(new_blog_info)
        if (old_blogs) {
            for (var i = 0; i < old_blogs.length; i++) {
                if (old_blogs[i]['id'] != new_blog_info['id'])
                    new_data.push(old_blogs[i]);
            }
        }
        console.log("CALLING PROP UPDATE")
        props.updateBlog(new_data);
        localStorage.setItem('blogs', JSON.stringify(new_data))
        setEnteredBlogId('');
        setEnteredBlogTitle('');
        setEnteredBlogDescription('');
    };

    const blogIdChangeHandler = (event) => {
        setEnteredBlogId(event.target.value);
    };

    const blogTitleChangeHandler = (event) => {
        setEnteredBlogTitle(event.target.value);
    };
    const blogDescriptionChangeHandler = (event) => {
        setEnteredBlogDescription(event.target.value);
    };

    return (
        <div>
            <form onSubmit={addUserHandler}>
                <h1><i>Use me to update/add blogs</i></h1>
                <label htmlFor="blogid">Blog ID</label>
                <input
                    id="blogid"
                    type="number"
                    value={enteredBlogId}
                    onChange={blogIdChangeHandler}
                />
                <br />
                <label htmlFor="title">Blog Title</label>
                <input
                    id="title"
                    type="text"
                    value={enteredBlogTitle}
                    onChange={blogTitleChangeHandler}
                />
                <br />
                <label htmlFor="description">Blog Description</label>
                <input
                    id="description"
                    type="text"
                    value={enteredBlogDescription}
                    onChange={blogDescriptionChangeHandler}
                />
                <br />
                <button type="submit">Add/Update Blog Data</button>
            </form>
            <hr /><hr />
        </div>
    );
};

export default BlogForm;