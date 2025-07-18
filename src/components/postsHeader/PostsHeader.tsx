import React from 'react';
import {Alert} from "antd";

interface PostsHeaderProps {
    error: string | null;
}

const PostsHeader = ({error}: PostsHeaderProps) => {
    return (
        <header>
            <h1>Лента новостей</h1>
            {error && <Alert message="Ошибка" description={error} type="error" showIcon />}  
        </header>
    );
};

export default PostsHeader;