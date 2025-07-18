import React from 'react';
import {Card, Tag} from "antd";
import {Post} from "../../utils/interfaces";

interface PostItemProps {
    post: Post;
} 

const PostItem = ({post}: PostItemProps) => {
    return (
        <Card style={{width: "70%"}} title={post.title}>
            <div className="post-body">{post.body}</div>
            <div className="post-tags">
                {post.tags.map((tag, index) => (
                    <Tag key={index} color="blue">
                        {tag}
                    </Tag>
                ))}
            </div>
            <div className="post-reactions">
                Реакции: 👍 {post.reactions.likes} 👎 {post.reactions.dislikes}
            </div>
        </Card>
    );
};

export default PostItem;