import { reset } from 'redux-form';
import axios from 'axios';
import { GET_VIDEOS, ADD_VIDEO, DELETE_VIDEO, GET_VIDEO } from './types';


export const getVideos = () => async dispatch => {
  const res = await axios.get('/api/videos/');
  dispatch({
    type: GET_VIDEOS,
    payload: res.data
  });
};

export const addVideo = formValues => async dispatch => {
  const res = await axios.post('/api/videos/', { ...formValues });
  dispatch({
    type: ADD_VIDEO,
    payload: res.data
  });
  dispatch(reset('videoForm'));
};

export const getVideo = id => async dispatch => { 
  const res = await axios.get(`/api/videos/${id}/`);
  dispatch({
    type: GET_VIDEO,
    payload: res.data
  });
};

export const deleteVideo = id => async dispatch => {
  await axios.delete(`/api/videos/${id}/`);
  dispatch({
    type: DELETE_VIDEO,
    payload: id
  });
};