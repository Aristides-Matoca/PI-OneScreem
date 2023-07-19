import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import Begin from '../componentes/begin'
import Menu from '../componentes/menu'

export default function Start({handleShow}){

    return(
        <>
            <Menu handleShow={handleShow}/>
            <div className={css(styles.divBegin)}> <Begin/> </div>
        </>
    )
}

const styles = StyleSheet.create({

    divBegin:{
        top: 0,
        left: 0,
        width: "100%",
        background: 'none',
        height: "100vh",
        display: "block",
    }
})