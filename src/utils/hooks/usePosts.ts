import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {useEffect, useRef} from "react";
import {fetchPosts} from "../../store/posts/postsSlice";

export function usePosts() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, status, error, hasMore } = useSelector((state: RootState) => state.posts);
    const loadingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch(fetchPosts(0));
    }, [dispatch]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && status !== 'loading') {
                    dispatch(fetchPosts(items.length));
                }
            },
            { threshold: 1.0 }
        );

        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }

        return () => {
            if (loadingRef.current) {
                observer.unobserve(loadingRef.current);
            }
        };
    }, [dispatch, items.length, hasMore, status]);

    return { items, status, error, loadingRef, hasMore };
} 