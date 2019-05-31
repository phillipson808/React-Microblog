import { ADD_COMMENT, DELETE_COMMENT, DELETE_POST, SAVE_POST, GET_POSTS, GET_POST, UPDATE_POST } from "./actionTypes";

const INITIAL_STATE = {
  posts: [],
  currentPost: null,
  count: 0
};

function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
  case GET_POSTS:
    return { ...state, posts: action.payload };

  case GET_POST:
    return { ...state, currentPost: action.payload };

  case SAVE_POST:
    return { ...state, posts: [...state.posts, action.payload] };

  case UPDATE_POST:
    // Anyway we can move this to same spot?
    let array = state.posts.filter(post => post.id !== action.payload.id);
    return { ...state, posts: [...array, action.payload] };
    // return { ...state};

  case DELETE_POST:
    return {...state, posts: state.posts.filter(post => post.id !== +action.payload)};

  case ADD_COMMENT:
    return { ...state, currentPost: { ...state.currentPost, comments: [...state.currentPost.comments, action.payload] } };

  case DELETE_COMMENT:
    return { ...state, currentPost: {...state.currentPost, comments: state.currentPost.comments.filter(comment => comment.id !== action.payload.commentId)} };


  default:
    return state;
  }
}


export default rootReducer;