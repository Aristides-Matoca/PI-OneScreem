import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Row, Nav, NavItem } from 'reactstrap';
import React, { useState, useEffect } from 'react'

export default function Homepage({handleShow, selecionarMedia, infantil, desportos, filmes, series, documentarios, news, categoriaSelecionada}){
    const [selectedInfantil, setSelectedInfantil] = useState([])
    const [selectedDesporto, setSelectedDesporto] = useState([])
    const [selectedFilme, setSelectedFilmes] = useState([])
    const [selectedSerie, setSelectedSeries] = useState([])
    const [selectedDocumentario, setSelectedDocumentario] = useState([])
    const [selectedNews, setSelectedNews] = useState([])

    useEffect(() => {
        if(infantil != null){
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            //const shuffledArray = [...infantil].sort(() => 0.5 - Math.random());
            const selected = infantil.slice(0, 4);
            setSelectedInfantil(selected)
        }
    }, [infantil]);

    useEffect(() => {
        if(desportos != null){
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            //const shuffledArray = [...desporto].sort(() => 0.5 - Math.random());
            const selected = desportos.slice(0, 4);
            setSelectedDesporto(selected)
        }
    }, [desportos]);

    useEffect(() => {
        if(filmes != null){
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            //const shuffledArray = [...filmes].sort(() => 0.5 - Math.random());
            const selected = filmes.slice(0, 4);
            setSelectedFilmes(selected)
        }
    }, [filmes]);

    useEffect(() => {
        if(series != null){
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            //const shuffledArray = [...filmes].sort(() => 0.5 - Math.random());
            const selected = series.slice(0, 4);
            setSelectedSeries(selected)
        }
    }, [series]);

    useEffect(() => {
        if(documentarios != null){
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            //const shuffledArray = [...filmes].sort(() => 0.5 - Math.random());
            const selected = documentarios.slice(0, 4);
            setSelectedDocumentario(selected)
        }
    }, [documentarios]);

    useEffect(() => {
        if(news != null){
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            //const shuffledArray = [...filmes].sort(() => 0.5 - Math.random());
            const selected = news.slice(0, 4);
            setSelectedNews(selected)
        }
    }, [news]);

    const verMais = (value) => {
        categoriaSelecionada(value)
        handleShow('Video')
    }

    const handleClick = (index, pos) => {

        handleShow('Assistir')
    
        selecionarMedia(index, pos, 11);
        setTimeout(() => {
          selectMedia(index, pos);
        }, 100);
    };
    
    const selectMedia = (index, pos) => {
        selecionarMedia(index, pos, 11);
    };

    return (
        <Row className={css(styles.row)}>
            <Nav vertical className={css(styles.nav1)}>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Infantil</h2>
                    <span className={css(styles.vermais)} onClick={() => verMais(2)}>Ver mais</span>
                </div>
                
                <Nav className={css(styles.nav)}>
                    {selectedInfantil.map((video, index) => (
                        <NavItem key={index} className={css(styles.item1)} onClick={() => handleClick(index, 2)}>
                            <div className={css(styles.foto)}>
                                <img className={css(styles.img)} src={video.img} alt="Image"/> <br/>
                            </div>
                            {video.title}
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Desportos</h2>
                    <span className={css(styles.vermais)}onClick={() => verMais(3)}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedDesporto.map((video, index) => (
                        <NavItem key={index} className={css(styles.item1)} onClick={() => handleClick(index, 3)}>
                            <div className={css(styles.foto)}>
                                <img className={css(styles.img)} src={video.img} alt="Image"/> <br/>
                            </div>
                            {video.title}
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Filmes</h2>
                    <span className={css(styles.vermais)}onClick={() => verMais(4)}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedFilme.map((video, index) => (
                        <NavItem key={index} className={css(styles.item1)} onClick={() => handleClick(index, 4)}>
                            <div className={css(styles.foto)}>
                                <img className={css(styles.img)} src={video.img} alt="Image"/> <br/>
                            </div>
                            {video.title}
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Séries</h2>
                    <span className={css(styles.vermais)}onClick={() => verMais(5)}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedSerie.map((video, index) => (
                        <NavItem key={index} className={css(styles.item1)} onClick={() => handleClick(index, 5)}>
                            <div className={css(styles.foto)}>
                                <img className={css(styles.img)} src={video.img} alt="Image"/> <br/>
                            </div>
                            {video.title}
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Documentários</h2>
                    <span className={css(styles.vermais)}onClick={() => verMais(6)}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedDocumentario.map((video, index) => (
                        <NavItem key={index} className={css(styles.item1)} onClick={() => handleClick(index, 6)}>
                            <div className={css(styles.foto)}>
                                <img className={css(styles.img)} src={video.img} alt="Image"/> <br/>
                            </div>
                            {video.title}
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Notícias</h2>
                    <span className={css(styles.vermais)}onClick={() => verMais(7)}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedNews.map((video, index) => (
                        <NavItem key={index} className={css(styles.item1)} onClick={() => handleClick(index, 7)}>
                            <div className={css(styles.foto)}>
                                <img className={css(styles.img)} src={video.img} alt="Image"/> <br/>
                            </div>
                            {video.title}
                        </NavItem>
                    ))}
                </Nav>
            </Nav>
        </Row>
    )
}

const styles = StyleSheet.create({
    row:{
        background: 'none'
    },

    nav1:{
        background: 'none',
        padding: '0 0.5% 0 0.1%',
        width: '100%',
        //border: '1px solid grey'
    },

    divtitles:{
        background: 'black',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1% 1.6% 0 1.5%',
        color: 'white'

    },

    title:{
        background: 'black',
        textAlign: 'left',
        fontSize: '27px',
    },

    vermais:{
        background: 'none',
        ':hover':{
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },

    nav:{
        background: 'black',
        padding: '2% 1.5% 2% 1.5%',
        margin: '-0.5% 0 1% 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
    },

    item1:{
        background: 'rgb(36,36,36)',
        padding: '1% 1.5% 0.5% 1.5%',
        marginTop: '-1%',
        width: '18.3%',
        borderRadius: '5px',
        ':hover':{
            background: 'rgb(157,157,157)',
            cursor: 'pointer'
        }
    },

    foto:{
        width: '100%',
        height: '100%',
        background: 'none',
        borderRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
        marginBottom: '5%',
    },

    img:{
        width: '100%',
        height: '100%',
        background: 'none',
        borderRadius: '5px',
    },
})