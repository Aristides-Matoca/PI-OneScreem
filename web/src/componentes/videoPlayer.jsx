import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite'
import YouTube from 'react-youtube';


const VideoPlayer = ({ videos, selecionarVideo, urlVideo, mediaRef, indexVideo, categoria, pos }) => {

    useEffect(() => {
        if (indexVideo != null) {
            mediaRef.current.play()
        }
    }, []);

    const reproduzirVideo = (index) => {
        selecionarVideo(index, pos, 0)
        //mediaRef.current.play()

        setTimeout(() => {
            selectVideo(index);
        }, 100);
    };

    const selectVideo = (index) => {
        selecionarVideo(index, pos, 0);
        mediaRef.current.play()
    };

    return (
        <div className={css(styles.videosContainer)}>
            <div className={css(styles.videoActive)}>
                <YouTube videoId={urlVideo} deo ref={mediaRef} src={urlVideo} className={css(styles.video)} controls autoPlay opts={opts}/>
            </div>

            <div className={css(styles.listaVideos)}>
                <h3 className={css(styles.title)}>{categoria}</h3>
                {videos.map((video, index) => (
                    <div key={index} onClick={() => reproduzirVideo(index)} className={css(styles.lista)}>
                        <div style={{ background: 'none' }}>
                            <span style={{ background: 'none' }}>{index + 1}</span> - 
                            <span style={{ background: 'none' }}> {video.title}</span>
                        </div>
                        <span style={{ background: 'none' }}></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const opts = {
    height: '635',
    width: '1060',
    playerVars: {
      // Defina a resolução desejada
      'hd': 1, // 720p
      'vq': 'hd720', // 720p
    },
  };

const styles = StyleSheet.create({
    videosContainer: {
        display: 'flex',
        justifyContent: 'center',
        background: 'none',
        width: '101.3%',
        height: '100%',
        marginLeft: '-0.8%',
    },

    videoActive: {
        display: 'block',
        width: '72%',
        background: 'none',
        transform: 'translate(-0.5%, 0%)',
    },

    video: {
        background: 'none',
    },

    listaVideos: {
        width: '25%',
        border: '0.5px solid grey',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        color: 'white',
        background: 'black'
    },

    title: {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        background: 'rgb(33,33,33)',
        padding: '10px 0 10px 0',
        fontSize: '25px'
    },

    lista: {
        background: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2% 2% 1.2% 2%',
        margin: '0 3% 0 3%',
        ':hover': {
            background: 'rgb(36,36,36)',
            borderRadius: '6px',
            cursor: 'pointer'
        },
        ':active': {
            background: 'rgb(36,36,36)'
        }
    },

    icone: {
        background: 'none',
        fontSize: '29px',
    }
});

export default VideoPlayer;