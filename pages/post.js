// NOTE: This page to be replace by a dynamic url referencing
// an id or a slug or something.  I'm just too lazy to code all
// that right now and just want to map shit.

import React from 'react';

import PostDetail from '../components/blog/PostDetail';

import post from '../components/blog/blog-post.1.md';

const Post = props => {
    return (
        <div>
            <PostDetail post={post} />
        </div>
    )
}

export default Post;