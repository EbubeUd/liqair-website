import React, { Component } from 'react';
import {isEmpty} from '../../helpers/helper';
import { connect } from 'react-redux';
import * as videoActions from '../../redux/actions/contentVideoActions';

export class MediaPlayer extends Component {

    constructor(props){
        super(props);
        this.state = {
            videoList:{
                0:'https://www.youtube.com/embed/MEdUXTeoTRU',
                1:'https://www.youtube.com/embed/Af-XOuoawHM',
                2:'https://www.youtube.com/embed/6LCrbfg9QbE',
            }
        }
    }

    componentDidMount(){
        this.props.videoContentIndexAction();
    }

    componentDidUpdate(prevProps){
        if (this.props.video.index !== prevProps.video.index) {
            if (!isEmpty(this.props.video.index) && !isEmpty(this.props.video.index.data)) {
                let videoList = this.props.video.index.data.map((item,key)=>{return item.video})
                !isEmpty(videoList) && this.setState({videoList:videoList});
            }
        }
    }

    // play first track on the video player list
    baseVideo = (videoList) =>{
        document.getElementById("Player").src = videoList[0];
        document.getElementById("Player").value = 0;
    }

    // play next track on the video player list
    nextVideo = (videoList) =>{
        let currentTrack = document.getElementById("Player").value;
        let newTrack = '';

        currentTrack = currentTrack===undefined?0:currentTrack;

        if ((currentTrack+1) <= Object.keys(videoList).length-1) {
            newTrack = currentTrack+1;
        } else {
            newTrack = 0;
        }

        document.getElementById("Player").value = newTrack;
        document.getElementById("Player").src = videoList[newTrack];
    }

    // play previous track on the video player list
    prevVideo = (videoList) =>{
        let currentTrack = document.getElementById("Player").value;
        let newTrack = '';

        currentTrack = currentTrack===undefined?0:currentTrack;
        
        if ((currentTrack-1) > 0 ) {
            newTrack = currentTrack-1;
        } else if((currentTrack-1) < 0){
            newTrack = Object.keys(videoList).length-1;
        } else {
            newTrack = 0;
        }

        document.getElementById("Player").value = newTrack;
        document.getElementById("Player").src = videoList[newTrack];
    }

    render() {
        return (
            <div className="col">
                <div id="mediaPlayer">
                    <iframe id="Player" title="OVPlayer" width="100%" height="100%" src={this.state.videoList[0]} value={0} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>

				<div className="d-flex justify-content-center mt-2">
					<input type="button" className="btn btn-liqair mx-2" name="prev" value="Prev" onClick={()=>this.prevVideo(this.state.videoList)} />
					<input type="button" className="btn btn-liqair mx-2" name="next" value="Next" onClick={()=>this.nextVideo(this.state.videoList)} />
				</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    video: state.content.video
});

const mapActionToProps = {
    ...videoActions
}

export default connect(mapStateToProps, mapActionToProps)(MediaPlayer);
