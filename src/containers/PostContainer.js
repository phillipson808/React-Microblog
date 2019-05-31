import { connect } from "react-redux";
import { getSinglePostFromAPI, updatePost, deletePostFromAPI, addCommentToAPI, deleteCommentFromAPI, clearPost, votePost } from "../actions";
import Post from "../components/Post";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    currentPost: state.currentPost
  };
}

const mapDispatchToProps = {
  getSinglePostFromAPI, updatePost, deletePostFromAPI, addCommentToAPI, deleteCommentFromAPI, clearPost, votePost
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
