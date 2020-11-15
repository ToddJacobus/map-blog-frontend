import react from "react";

import Markdown from './Markdown';

const PostDetail = props => {
    const { post } = props;

    return (
        <div>
            <Markdown>
                {post}
            </Markdown>
        </div>
    )
};

export default PostDetail;