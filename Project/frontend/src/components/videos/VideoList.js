import React, { Component, useReducer } from 'react';
import { connect } from 'react-redux';
import { getVideos, deleteVideo } from '../../actions/videos';

class VideoList extends Component {
  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.videos.map(video => (
          <div className="item" key={video.id}>
            <div class="preview">
              <a href="#">
                <img src={video.preview} width="395" height="210"/>
                <h3 class="title">{video.title}</h3>
                <h7 class="date">{video.date_added}</h7>
              </a>
              <button onClick={this.props.deleteVideo.bind(this, video.id)} className='btn btn-danger btn-sm'>Delete</button>
            </div>
            <br/>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videos: Object.values(state.videos)
});

export default connect(
  mapStateToProps,
  { getVideos, deleteVideo }
)(VideoList);