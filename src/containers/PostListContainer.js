import { connect } from "react-redux";
import PostList from "../components/PostList";
import { getAllPostsFromAPI, votePost } from "../actions";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
const mapDispatchToProps = {
  getAllPostsFromAPI, votePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
