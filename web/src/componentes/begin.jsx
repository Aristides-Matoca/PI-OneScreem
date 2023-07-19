import 'bootstrap/dist/css/bootstrap.min.css'
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5"
import { Container, Button} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import onescreen from '../img/onescreen_logo-removebg.png'

export default function Begin(){
    return(
        
        <Container className={css(styles.navBegin)}>
                <aside className={css(styles.aside1)}>
                    <h4 className={css(styles.text1)}>Conhece o OneScreen</h4>
                    <h1 className={css(styles.text2)}>E viaja para onde quiseres com a tua TV</h1>
                    <p className={css(styles.text3)}>Encontre canais de toda parte do mundo e divirta-se com filmes, séries, desportos e muito mais</p>
                    <p className={css(styles.text4)}>Baixe no seu dispositivo móvel</p>
                    <Button className={css(styles.btn1)}>
                        <IoLogoGooglePlaystore className={css(styles.icon1)} />
                        <br/>PlayStore
                    </Button>

                    <Button className={css(styles.btn1)}>
                        <IoLogoAppleAppstore className={css(styles.icon1)} />
                       <br/>AppStore
                    </Button>
                </aside>

                <aside className={css(styles.aside2)}>
                    <img className={css(styles.image)} src={onescreen} alt="" width={'100%'} height={'80%'}/>
                </aside>
        </Container>
    )
}

const styles = StyleSheet.create({
    navBegin:{
        background: 'none',
        width: "100%",
        height: "100vh",
    },

    aside1:{
        color: 'white',
        background: 'none',
        display: "inline-block",
        transform: 'translate(-70%, 0)',
        width: "60%",
        textAlign: 'left',
        fontFamily: 'Cormorant Cormorant',
    },

    aside2:{
        background: 'none',
        transform: 'translate(60%, 21%)',
        width: "70%",
        position: "absolute",
        top: 20,
        left: 0,
        zIndex: 1, 
    },

    text1:{
        background: 'none',
        marginBottom: '9%',
        width: "100%",
    },

    text2:{
        background: 'none',
        marginBottom: '6%',
        width: "100%",
    },

    text3:{
        background: 'none',
        fontSize: '25px',
        marginBottom: '5%',
        width: "100%",
    },

    text4:{
        background: 'none',
        fontSize: '20px',
        width: "100%",
    },

    btn1:{
        background: 'none',
        border: 'none',
        marginLeft: '1%',
        color: 'white',
        ':hover':{
            color: 'red'
        }
    },

    icon1:{
        background: 'none',
       fontSize: '23px'
    },

    image: {
        background: 'none'
    }
})