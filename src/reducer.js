export const initialState={
    basket:[],
    user:null,
    
};
//selector
export const gettotalprice=(basket)=>
 basket?.reduce((amount,item)=>item.price+ amount,0);

 
export const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case "add-to-basket":
           return{
               ...state,
               basket:[...state.basket , action.item]
           };
        case 'empty-basket':
            return{
                ...state,
                basket:[]
            };  
        case'remove-from-basket':
           
           const index= state.basket.findIndex(
               (basketItem)=> basketItem.id===action.id );
            console.log(index);
           let newlist=[...state.basket];
           
           
           if(index >=0){
              newlist.splice(index,1);
           }else{
               console.warn(
                   'can \'t remove product it doesn\'t be added to basket'
               );
           }
           

           return{
           ...state,
           basket:newlist
           };
        case"Set-User":
        return{
            ...state,
            user: action.user
        }  

     default:
         return state;
           


    } 

};
export default reducer;
