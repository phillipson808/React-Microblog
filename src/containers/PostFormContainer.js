import { connect } from "react-redux";
import { addNewPost, updatePost } from "../actions";
import PostForm from "../components/PostForm";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    currentPost: state.currentPost
  };
}

const mapDispatchToProps = {
  addNewPost, updatePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
