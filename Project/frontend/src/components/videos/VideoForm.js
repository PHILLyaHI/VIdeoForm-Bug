import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addVideo } from '../../actions/videos';

export class VideoForm extends Component {
  state = {
    title: '',
    description: '',
  };

  static propTypes = {
    addVideo: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const video = { title, description };
    this.props.adVideo(video);
    this.setState({
      name: '',
      description: ''
    });
  };

  render() {
    const { title, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Video</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addVideo })(VideoForm);