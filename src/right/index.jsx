import { useSelector } from 'react-redux'
import './style.css'


const Right = ()=>{

    const wid =useSelector((state)=>{
        return state.size.width
    })

    const hei = useSelector((state)=>{
        return state.size1.heigth
    })
    const changecolor = useSelector((state)=>{
        return state.color.col
    })

    return(
        <div className='Block_right'  >
            <div style={{width:wid + 'px',height:hei + 'px',backgroundColor:changecolor}} className='blockse' ></div>
        </div>
    )
}


export default Right