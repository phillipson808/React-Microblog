import { ADD_COMMENT, DELETE_COMMENT, DELETE_POST, SAVE_POST, GET_POSTS, GET_POST, UPDATE_POST } from "./actionTypes";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/posts';

export function getAllPostsFromAPI() {
  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/`);
      dispatch(getPosts(res.data));
    } catch (err) {
      console.log("Weee", err);
    }
  };
}
export function getSinglePostFromAPI(postId) {
  return async function (dispatch) {
    try {
      let res = await axios.get(`${BASE_URL}/${postId}`);
      dispatch(getPost(res.data));
    } catch (err) {
      console.log("Weee", err);
    }
  };
}
export function addNewPost(postDetails) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${BASE_URL}/`, postDetails);
      dispatch(savePost(res.data));
    } catch (err) {
      console.log("Weee", err);
    }
  };
}
export function updatePost(postId, postDetails) {
  return async function (dispatch) {
    try {
      let res = await axios.put(`${BASE_URL}/${postId}`, postDetails);
      dispatch(putPost(res.data));
    } catch (err) {
      console.log("Weee", err);
    }
  };
}
export function deletePostFromAPI(postId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${BASE_URL}/${postId}`);
      dispatch(deletePost(postId));
    } catch (err) {
      console.log("Weee", err);
    }
  };
}

export function addCommentToAPI(commentObj) {
  return async function (dispatch) {
    try {
      await axios.post(`${BASE_URL}/${commentObj.id}/comments`, commentObj);
      dispatch(addComment(commentObj));
    } catch (err) {
      console.log("Weee", err);
    }
  };
}

export function deleteCommentFromAPI(postId, commentId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`);
      dispatch(deleteComment(postId, commentId));
    } catch (err) {
      console.log("Weee", err);
    }
  };
}


function getPosts(arrOfPost) {
  return {
    type: GET_POSTS, payload: arrOfPost
  };
}

function getPost(postObj) {
  return {
    type: GET_POST, payload: postObj
  };
}

function savePost(post) {
  return {
    type: SAVE_POST, payload: post
  };
}

function putPost(post) {
  return {
    type: UPDATE_POST, payload: post
  };
}

function deletePost(postId) {
  return {
    type: DELETE_POST, payload: postId
  };
}
function addComment(obj) {
  return {
    type: ADD_COMMENT, payload: obj
  };
}

function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT, payload: {postId, commentId}
  };
}

