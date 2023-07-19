import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Audios from '../componentes/audios'
import Videos from '../componentes/videos'
import Radios from '../componentes/radios'
import Homepage from '../componentes/homepage'
import AudioPlayer from '../componentes/ouvirAudios'
import VideoPlayer from '../componentes/videoPlayer'
import Conta from '../componentes/acount'
import Perfil from '../componentes/perfil'
import Upload from '../componentes/upload'
import { StyleSheet, css } from 'aphrodite'
import { IoIosNotifications } from "react-icons/io"
import { TbSearch, TbSettings } from "react-icons/tb"
import { InputGroup, InputGroupText, Input, Row} from 'reactstrap'
import axios from 'axios';
import radiologo from '../img/radiologo.png'
import onescreen from '../img/onescreen_logo.jpg'
import Panda from '../img/CanalPanda.jpg'
import Channel from '../img/Disney_Channel.jpg'
import Cocomelon from '../img/cocomelon.jpg'
import SuperSport from '../img/SuperSport.jpg'
import ESPN from '../img/ESPN.jpg'
import SportHD from '../img/SportHD.jpg'
import Formula1 from '../img/Formula1.jpg'
import History from '../img/History.jpg'
import NationalGeographic from '../img/National-Geographic.jpg'
import discovery from '../img/discovery.png'
import NatGeoWild from '../img/NetGeoWild.jpg'
import AXN from '../img/AXN.jpg'
import Universal from '../img/Universal.jpg'
import Sony from '../img/Sony.jpg'
import Netflix from '../img/Netflix.png'
import BBC from '../img/BBC.jpg'
import CNN from '../img/CNN.png'
import Zimbo from '../img/Zimbo.jpg'
import Euronews from '../img/Euronews.jpg'
import TVC from '../img/TVC.png'
import Comedy from '../img/Comedy.png'
import MundoFox from '../img/MundoFox.png'
import Sick from '../img/sick.jpg'
import Group from '../componentes/group'
import CriarGrupo from '../componentes/criarGrupo'
import ValidarAcesso from '../componentes/validarAcesso'

export default function Home({handleShow2, username}) {
  const [audios, setAudios] = useState(null);

  //const [podcasts, setPodcasts] = useState(null);

  const [videos, setVideos] = useState(null);
  const [categoria, setCategoria] = useState(null);

  //const [radios, setRadios] = useState(null);
  const [infantil, setInfantil] = useState([
    { videoURL: 'O5a6FfZ_j10', title: 'Canal Panda', description: 'Canal Infantil', img: Panda },
    { videoURL: '-j84qugmrv0', title: 'Disney Channel', description: 'Canal Infantil', img: Channel},
    { videoURL: 'MODcpsTxuDE', title: 'Cocomelon', description: 'Canal Infantil', img: Cocomelon },
    { videoURL: 'lhHGpu-qu68', title: 'SIC K', description: 'Canal Infantil', img: Sick},
    // Adicione mais vídeos ao array, se necessário
  ])

  const [desporto, setDesporto] = useState([
    { videoURL: 'jSURD3T7xS4', title: 'Super Sport', description: 'Canal de desporto', img: SuperSport },
    { videoURL: 'NyDfdkFCzy4', title: 'ESPN', description: 'Canal de desporto', img: ESPN},
    { videoURL: 'lG5fBDsSixM', title: 'SportHD', description: 'Canal de desporto', img: SportHD },
    { videoURL: 'x7a3E9DluS0', title: 'Formula 1', description: 'Canal de desporto', img: Formula1},
    // Adicione mais vídeos ao array, se necessário
  ])

  const [filmes, setFilmes] = useState([
    { videoURL: 'rze8QYwWGMs', title: 'Sony Pictures', description: 'Canal de filme', img: Sony },
    { videoURL: 'Me8ijsMUNfA', title: 'TV Cine', description: 'Canal de filme', img: TVC},
    { videoURL: 'hiGYAqs0REI', title: 'Universal', description: 'Canal de filme', img: Universal },
    { videoURL: 'R8xepj9wpi4', title: 'Netflix', description: 'Canal de filme', img: Netflix},
    // Adicione mais vídeos ao array, se necessário
  ])

  const [series, setSeries] = useState([
    { videoURL: 'aF_yZOItfKI', title: 'Netflix Series', description: 'Canal de séries', img: Netflix },
    { videoURL: 'f9u5qjBKY40', title: 'AXN Serie', description: 'Canal de séries', img: AXN},
    { videoURL: 'Lkm_PluKEYc', title: 'Fox Comedy', description: 'Canal de séries', img: Comedy },
    { videoURL: 'QEjg49gk0Go', title: 'Mundo Fox', description: 'Canal de séries', img: MundoFox},
    // Adicione mais vídeos ao array, se necessário
  ])

  const [documentario, setDocumentario] = useState([
    { videoURL: 'pyUmzh8YPe0', title: 'Discovery Channel', description: 'Canal de documentários', img: discovery },
    { videoURL: '4ic33h7r1BY', title: 'National Geography', description: 'Canal de documentários', img: NationalGeographic},
    { videoURL: 'E09GykFXPB8', title: 'History', description: 'Canal de documentários', img: History },
    { videoURL: 'pKO9BJy0gX4', title: 'Nat Geo Wild', description: 'Canal de documentários', img: NatGeoWild},
    // Adicione mais vídeos ao array, se necessário
  ])

  const [news, setNews] = useState([
    { videoURL: 'iApEtoH7ypo', title: 'Euro News', description: 'Canal de notícias', img: Euronews },
    { videoURL: 'GpRiP9QbO2M', title: 'BBC News', description: 'Canal de notícias', img: BBC},
    { videoURL: 'cbqJkyBebmE', title: 'TV Zimbo', description: 'Canal de notícias', img: Zimbo },
    { videoURL: 'YFADUUUzsRQ', title: 'CNN News', description: 'Canal de notícias', img: CNN},
    // Adicione mais vídeos ao array, se necessário
  ])


  const [radios, setRadios] = useState([
    { tipo: 'Radio', titulo: 'Rádio Mais', legenda: 'Estação 1', imageDownloadURL: radiologo, audioURL: 'https://radios.justweb.pt/8050/stream/?1685627470876' },
    { tipo: 'Radio', titulo: 'Rádio Escola', legenda: 'Estação 2', imageDownloadURL: radiologo, audioURL: 'https://radios.vpn.sapo.pt/AO/radio1.mp3' },
    { tipo: 'Radio', titulo: 'Rádio LAC', legenda: 'Estação 3', imageDownloadURL: radiologo, audioURL: 'https://radios.vpn.sapo.pt/AO/radio14.mp3?1685629053605' },
  ]);

  const [mediaSelecionado, setMediaSelecionado] = useState(null);
  const [audioSelecionado, setAudioSelecionado] = useState(null);
  const [videoSelecionado, setVideoSelecionado] = useState(null);
  const [radioSelecionado, setRadioSelecionado] = useState(null);
  const [indexVideo, setIndexVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [urlVideo, setUrlVideo] = useState(null);
  const [pos, setPos] = useState(null);
  const mediaRef = useRef(null);

  const [grupoName, setGrupoName] = useState("");

  const api = "http://localhost:4000";

  /*useEffect(() => {
    // Fetch the uploads from Firestore or your backend API
    axios.get(api + "/video")
      .then(response => {
        const uploadsData = response.data;
        setVideos(uploadsData);
      })
      .catch(error => {
        console.error('Error fetching uploads:', error);
      });
  }, []);*/

  useEffect(() => {
    // Fetch the uploads from Firestore or your backend API
    axios.get(api + "/audio")
      .then(response => {
        const uploadsData = response.data;
        setAudios(uploadsData);
      })
      .catch(error => {
        console.error('Error fetching uploads:', error);
      });
  }, []);

  const categoriaSelecionada = (value) => {
    if(value == 2){
      setCategoria('Infantil')
      setVideos(infantil)
      setPos(2)
    }

    else if(value == 3){
      setCategoria('Desporto')
      setVideos(desporto)
      setPos(3)
    }

    else if(value == 4){
      setCategoria('Filmes')
      setVideos(filmes)
      setPos(4)
    }

    else if(value == 5){
      setCategoria('Séries')
      setVideos(series)
      setPos(5)
    }

    else if(value == 6){
      setCategoria('Documentários')
      setVideos(documentario)
      setPos(6)
    }

    else if(value == 7){
      setCategoria('Notícias')
      setVideos(news)
      setPos(7)
    }
  }

  const selecionarMedia = (index, value, playPause) => {
    
    if(value == 2){
      setCategoria('Infantil')
      setVideos(infantil)
      setMediaSelecionado(infantil[index]);
      setVideoSelecionado(infantil[index])
      setUrlVideo(infantil[index].videoURL)
      setPos(2)
    }

    else if(value == 3){
      setCategoria('Desporto')
      setVideos(desporto)
      setMediaSelecionado(desporto[index]);
      setVideoSelecionado(desporto[index])
      setUrlVideo(desporto[index].videoURL)
      setPos(3)
    }

    else if(value == 4){
      setCategoria('Filmes')
      setVideos(filmes)
      setMediaSelecionado(filmes[index]);
      setVideoSelecionado(filmes[index])
      setUrlVideo(filmes[index].videoURL)
      setPos(4)
    }

    else if(value == 5){
      setCategoria('Séries')
      setVideos(series)
      setMediaSelecionado(series[index]);
      setVideoSelecionado(series[index])
      setUrlVideo(series[index].videoURL)
      setPos(5)
    }

    else if(value == 6){
      setCategoria('Documentários')
      setVideos(documentario)
      setMediaSelecionado(documentario[index]);
      setVideoSelecionado(documentario[index])
      setUrlVideo(documentario[index].videoURL)
      setPos(6)
    }

    else if(value == 7){
      setCategoria('Notícias')
      setVideos(news)
      setMediaSelecionado(news[index]);
      setVideoSelecionado(news[index])
      setUrlVideo(news[index].videoURL)
      setPos(7)
    }
  }; 


  //Funções de rotas----------------------------------------------------------------------------------------------------------------------
  const [navs, setNavs] = useState({
    Inicio: true,
    Artistas: false,
    Audio: false,
    Ouvir: false,
    Podcast: false,
    Radio: false,
    Video: false,
    Assistir: false,
    Albuns: false,
    Playlist: false,
    Gostos: false,
    Grupos: false,
    Conta: false,
    Perfil: false,
    Upload: false,
    CriarGrupo: false,
    Grupo: false,
  })

  const handleShow = (nav) => {
    const newNavs = { ...navs }

    Object.keys(newNavs).forEach((key) => {
      newNavs[key] = key === nav;
    })
    setNavs(newNavs)
  }

  const name = (nome) => {
    setGrupoName(nome);
  }

  //Funções de Configuranções------------------------------------------------------------------
  const [showDefinitions, setShowDefinitions] = useState(false)
  const iconRef = useRef(null)
  const definitionsRef = useRef(null)

  const handleOutsideClick = (event) => {
    if (
      iconRef.current &&
      !iconRef.current.contains(event.target) &&
      definitionsRef.current &&
      !definitionsRef.current.contains(event.target)
    ) {
      setShowDefinitions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    setShowDefinitions(!showDefinitions)
  };

  const handleDefinitionsClick = () => {
    setShowDefinitions(false)
  };


  return (
    <Row className={css(styles.row2)}>
      <header className={css(styles.header)}>

        <img src={onescreen} alt="" className={css(styles.logo)} onClick={() => handleShow('Inicio')}/>

        <InputGroup size='lg' className={css(styles.search)}>
          <InputGroupText className={css(styles.logosearch)}>
            <TbSearch className={css(styles.logosearch)}/>
          </InputGroupText>
          <Input className={css(styles.textsearch)} placeholder='Pesquise por filmes, desportos e séries'/>
        </InputGroup>

        <IoIosNotifications className={css(styles.notUser)}/>
        <TbSettings ref={iconRef} className={css(styles.notUser)} onClick={handleClick} />
        {showDefinitions ? (
          <div className={css(styles.definition)} onClick={handleDefinitionsClick} ref={definitionsRef}>
            <p className={css(styles.cont)} onClick={() => handleShow('Conta')}>Minha Conta</p>
            <p className={css(styles.cont)} onClick={() => handleShow('Perfil')}>Perfil</p>
            {username === 'Aristides Matoca' && <p className={css(styles.cont)} onClick={() => handleShow('Upload')}>Upload</p>}
            <p className={css(styles.cont)}>Definições</p>
            <p className={css(styles.cont2)} onClick={() => handleShow2('Start')}>Terminar Sessão</p>
          </div>
        ) : null}
      </header>

      <div className={css(styles.home)}>
        {Object.entries(navs).map(([nav, show]) =>
          show && (
            <React.Fragment key={nav}>
              {nav === 'Inicio' && <Homepage handleShow={handleShow} selecionarMedia={selecionarMedia} infantil={infantil} desportos={desporto} filmes={filmes} series={series} documentarios={documentario} news={news} categoriaSelecionada={categoriaSelecionada}/>}
              {nav === 'Audio' && <Audios handleShow={handleShow}/>}
              {nav === 'Video' && <Videos handleShow={handleShow} videos={videos} selecionarVideo={selecionarMedia} pos={pos} categoria={categoria}/>}
              {nav === 'Assistir' && <VideoPlayer videos={videos} selecionarVideo={selecionarMedia} urlVideo={urlVideo} mediaRef={mediaRef} indexVideo={indexVideo} categoria={categoria} pos={pos}/>}
              {nav === 'Radio' && <Radios radios={radios} selecionarRadio={selecionarMedia} isPlaying={isPlaying}/>}
              {nav === 'Ouvir' && <AudioPlayer audios={audios} selecionarAudio={selecionarMedia} isPlaying={isPlaying}/>}
              {nav === 'Conta' && <Conta handleShow={handleShow} username={username}/>}
              {nav === 'Perfil' && <Perfil username={username}/>}
              {nav === 'Upload' && <Upload handleShow={handleShow}/>}
              {nav === 'Grupos' && <Group handleShow={handleShow} name={name}/>}
              {nav === 'CriarGrupo' && <CriarGrupo handleShow={handleShow}/>}
              {nav === 'Grupo' && <ValidarAcesso handleShow={handleShow} nome={grupoName}/>}
            </React.Fragment>
          )
        )}
      </div>
    </Row>
  )
}

const styles = StyleSheet.create({
  row2:{
    background:'none',
  },

  header:{
    transform: 'translate(-49%, -490%)',
    fontFamily: 'Cormorant Garamond',
    padding: '0.5% 0 0.5% 0',
    background: 'none',
    position: 'fixed',
    height: '10%',
    width: '99%',
    zIndex: '1000',
    display: 'flex'
  },

  logo:{
    width: '7%',
    height: '100%',
    borderRadius: '8px',
    marginLeft: '3%',
    ':hover':{
      cursor: 'pointer'
    }
  },

  search:{
    background: 'none',
    fontSize: '10px',
    border: '1px solid red',
    borderRadius: '8px',
    width: '60%',
    margin: '0 10% 0 10%'
  },

  logosearch:{
    background: 'black',
    border: 'none',
    color: 'red',
    ':hover':{
      cursor: 'pointer',
      color: 'rgba(255, 213, 0, 1)'
    },
  },

  textsearch:{
    background: 'black',
    border: 'none',
    color: 'white'
  },

  notUser:{
    margin: '0.5% 3% 0 0',
    background: 'none',
    fontSize: '28px',
    color: 'red',
    ':hover':{
    cursor: 'pointer',
    color: 'rgba(255, 213, 0, 1)'
    },

  ':focus':{
      color: 'rgba(255, 213, 0, 1)',
      fontWeight: 'bold'
    }
  },

  definition:{
    position: 'absolute',
    top: '47px',
    right: '4%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'justify',
    background: 'rgb(44,44,43)',
    width: '13%'
  },

  cont:{
    background: 'none',
    fontSize: '18px',
    color: 'white',
    margin: '5px',
    padding: '4px',
    ':hover':{
      cursor: 'pointer',
      color: 'red',
      background: 'rgb(36,36,36)'
    },
  },

  cont2:{
    borderTop: '2.5px solid rgb(36,36,36)',
    background: 'none',
    fontSize: '18px',
    color: 'white',
    margin: '5px',
    padding: '4px',
    ':hover':{
      cursor: 'pointer',
      color: 'red',
      background: 'rgb(36,36,36)'
    },
  },

  home:{
    //border: '1px solid red',
    transform: 'translate(-49%, -44%)',
    fontFamily: 'Cormorant Garamond',
    background: 'none',
    position: 'fixed',
    height: '87%',
    width: '99%',
    flexGrow: '1',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarColor: 'transparent transparent',
    '::-webkit-scrollbar': {
      width: '10px',
    },

    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },

    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '5px',
    },

    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'transparent',
    },

    '::-webkit-scrollbar-thumb:vertical': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    
    '::-webkit-scrollbar-thumb:vertical:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  },
})