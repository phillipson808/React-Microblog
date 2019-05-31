import { ADD_COMMENT, DELETE_COMMENT, DELETE_POST, SAVE_POST, GET_POSTS, GET_POST, UPDATE_POST, VOTE_POST, CLEAR_POST } from "./actionTypes";

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

    case CLEAR_POST:
      return { ...state, currentPost: null };

    case SAVE_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case UPDATE_POST:
      // Anyway we can move this to same spot?
      let array = state.posts.filter(post => post.id !== action.payload.id);
      return { ...state, posts: [...array, action.payload] };
    // return { ...state};

    case DELETE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== +action.payload) };

    case ADD_COMMENT:
      return { ...state, currentPost: { ...state.currentPost, comments: [...state.currentPost.comments, action.payload] } };

    case DELETE_COMMENT:
      return { ...state, currentPost: { ...state.currentPost, comments: state.currentPost.comments.filter(comment => comment.id !== action.payload.commentId) } };

    case VOTE_POST:
      console.log('STATE', state);
      console.log('PAYLOAD', action.payload);
      return (
        state.currentPost ?
          { ...state, currentPost: { ...state.currentPost, votes: action.payload.votes } }
          : {

            ...state, posts: state.posts.map(post => {
              if (post.id === action.payload.id) {
                post.votes = action.payload.votes
              }
              return post;
            })
          }
      );



    default:
      return state;
  }
}


export default rootReducer;