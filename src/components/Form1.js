import React, { useState } from 'react';


const BlogForm = () => {
    const [enteredBlogId, setEnteredBlogId] = useState('');
    const [enteredBlogTitle, setEnteredBlogTitle] = useState('');
    const [enteredBlogDescription, setEnteredBlogDescription] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        //     setError({
        //         title: 'Invalid input',
        //         message: 'Please enter a valid name and age (non-empty values).',
        //     });
        //     return;
        // }
        // if (+enteredAge < 1) {
        //     setError({
        //         title: 'Invalid age',
        //         message: 'Please enter a valid age (> 0).',
        //     });
        //     return;
        // }
        // props.onAddUser(enteredUsername, enteredAge);
        let old_blogs = JSON.parse(localStorage.getItem('blogs'))
        console.log(old_blogs)
        let new_blog_info = {
            "id": enteredBlogId,
            "title": enteredBlogTitle,
            "description": enteredBlogDescription
        }
        console.log(new_blog_info)
        // localStorage.setItem('blogs',JSON.stringify(new_blog_info))
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
                    type="testr"
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