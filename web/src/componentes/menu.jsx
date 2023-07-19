import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Nav, Button} from 'reactstrap'
import { BsCameraVideoFill as Camera } from 'react-icons/bs'

export default function Menu({handleShow}){

    return (
        <Nav className={css(styles.nav1)} justified>
            <aside className={css(styles.aside1)}>
                <Camera className={css(styles.isp)}/>
                <h3 className={css(styles.isp)}>OneScreen</h3>
            </aside>

            <aside className={css(styles.aside2)}>
                <Button className={css(styles.btn4)} onClick={() => handleShow('Login')}>Login</Button>
                <Button className={css(styles.btn3)} onClick={() => handleShow('SignIn')}>Criar Conta</Button>
            </aside>
        </Nav>
    )
}

const styles = StyleSheet.create({
    nav1:{
        background: 'none',
        width: "100%",
        position: "fixed",
        top: 25,
        left: 0,
        zIndex: 1,
    },

    aside1:{
        color: 'red',
        background: 'none',
        display: 'flex',
        transform: 'translate(25%, 0)'
    },

    isp:{
        background: 'none',
        fontSize: '26px',
        marginLeft: '1%'
    },

    ul1:{
        background: 'none',
        fontSize: '17px',

    },

    link1:{
        background: 'none',
        marginRight: '50px',
        color: 'white',
        ':hover':{
            textDecoration: 'underline'
        }
    },

    aside2:{
        background: 'none',
        transform: 'translate(470%, 0)'
    },

    btn3:{
        background: 'red',
        marginLeft: '20px',
        ':hover': {
            background: '#yellow',
            color: 'black',
            border: '1px solid transparent'
        }
    },

    btn4:{
        background: 'black',
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '20px', 
        border: '1px solid white',
        ':hover': {
            background: 'red',
            color: 'black',
            border: '1px solid transparent',
        }
    },

    links:{
        background: 'none'
    }
})