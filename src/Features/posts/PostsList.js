import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchPosts,
	selectPosts,
	selectSelectedSubreddit,
} from "../../store/redditSlice";
import PostItem from "./PostItem";
function PostsList() {
	const posts = useSelector(selectPosts);
	const selectedSubreddit = useSelector(selectSelectedSubreddit);
	const dispatch = useDispatch();

	useEffect(() => {
	    dispatch(fetchPosts(selectedSubreddit))
	}, [dispatch, selectedSubreddit])


	return (
		<div>
			{posts.map((post, index) => (
				<PostItem
					key={index}
					post={post}
				/>
			))}
		</div>
	);
}

export default PostsList;