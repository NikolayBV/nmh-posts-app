import React from 'react';
import './App.css';
import PostsList from "./components/postsList/PostsList";
import {usePosts} from "./utils/hooks/usePosts";
import PostsHeader from "./components/postsHeader/PostsHeader";
import PostsFooter from "./components/postsFooter/PostsFooter";

function App() {
    const {items, status, loadingRef, error, hasMore} = usePosts();
    

    return (
        <main className="App">
            <PostsHeader error={error}/>
            
            <PostsList posts={items} />

            <PostsFooter status={status} hasMore={hasMore} loadingRef={loadingRef}/>
        </main>
    );
}

export default App;
