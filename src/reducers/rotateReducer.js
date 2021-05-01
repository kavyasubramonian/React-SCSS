(state,action)=>{
    console.log(action);
    console.log(state);
    switch(action.type){
        case "rotate":
            return{
                rotate: action.payload,
            };
        default:
            return state;
    }
}