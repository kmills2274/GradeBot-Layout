import React, { Component } from 'react';

import ReactPlayer from 'react-player';



class Video extends Component {
    render () {
      return (
        <div className='player-wrapper'>

            <iframe className="react-player" width="100%" height="100%" src="https://www.youtube.com/embed/8gTUNpaBOP0?autoplay=1&muted=1&background=1&loop=1&playlist=8gTUNpaBOP0" frameborder="0" allow="autoplay"></iframe>
        
        </div>
      )
    }
  }

  export default Video;