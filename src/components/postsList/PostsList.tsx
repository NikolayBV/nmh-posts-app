import React from 'react';
import {List} from "antd";
import {Post} from "../../utils/interfaces";
import PostItem from "../postItem/PostItem";

interface PostsListProps {
    posts: Post[];
}

const PostsList = ({posts}: PostsListProps) => {
    return (
        <section>
            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={posts}
                renderItem={(post) => (
                    <List.Item style={{ display: 'flex', justifyContent: 'center' }}>
                        <PostItem post={post}/>
                    </List.Item>
                )}
            />
        </section>
    );
};

export default PostsList;