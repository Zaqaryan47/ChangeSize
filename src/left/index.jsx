import { useState } from 'react';
import { useDispatch } from 'react-redux'
import './style.css'


const Left = ()=>{
    const dispatch = useDispatch()
    const [val,setVal] = useState('')
    const [val1,setVal1] = useState('')
    const [val2,setVal2] = useState('')


    const  change = e =>{
        setVal(e.target.value)
    }
    const change1 = e =>{
        setVal1(e.target.value)
    }
    const changeColor =  e =>{
        setVal2(e.target.value)
    }
const click = ()=>{

    dispatch({
        type:'changeWidth',
        payload:{
            width:val
        }
    })
    dispatch({
        type:'changeHeigth',
        payload:{
            heigth:val1
        }
    })
    dispatch({
        type:'changeColor',
        payload:{
            col:val2
        }
    })

}
    

    return(
        <div className='Block-left'>
            <div className="blocks">
                <input onChange={change} type="text" className="inp1" placeholder='width...' />
                <input onChange={change1} type="text" className="inp1" placeholder='heigth...' />
                <input onChange={changeColor} type="color" className='inp2' value={'#ffff00'} />
                <button onClick={click} className='btns'>Done</button>
            
            </div>
             
        </div>
    )
}


export default Left