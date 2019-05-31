import { connect } from "react-redux";
import PostList from "../components/PostList";
import { getAllPostsFromAPI } from "../actions";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
const mapDispatchToProps = {
  getAllPostsFromAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
