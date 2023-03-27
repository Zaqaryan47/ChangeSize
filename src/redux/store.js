import { createStore } from "redux";




const Inputes = createStore(function(state,action){
    

    if(action.type == 'changeWidth'){

        return{
            ...state,
            size:{
                width:action.payload.width
            },
        }
    };
    if(action.type == 'changeHeigth'){

        return{
            ...state,
            size1:{
                heigth:action.payload.heigth
            },
        }
    };
    if(action.type == 'changeColor'){

        return{
            ...state,
            color:{
                col:action.payload.col
            },
        }
    };



  
    return state

},{

    size:{
        width:'',
    },
    size1:{
        heigth:'',
    },
    color:{
        col:'',
    },
    
})

export default Inputes