import React from 'react';
import {Alert, Spin} from "antd";

interface PostsFooterProps {
    status: 'loading' | 'success' | 'failed';
    hasMore: boolean;
    loadingRef: React.RefObject<HTMLDivElement | null>;
}

const PostsFooter = ({status, hasMore, loadingRef}: PostsFooterProps) => {
    return (
        <footer ref={loadingRef}>
            {status === 'loading' && <Spin size="large" />}
            {!hasMore && <Alert message="Все новости загружены" type="info" showIcon />}
        </footer>
    );
};

export default PostsFooter;