
import uuid from "uuid";


export default (state = [], action) => {
  return state;

  let index;
  let quote;


  switch (action.type) {
    
    case "ADD_QUOTE":
      return [...state, action.quote];
 
      
    case 'REMOVE_QUOTE':
       return state.filter(quote => quote.id !== action.quoteId);
 
   
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
     
     
     case 'DOWNVOTE_QUOTE':
 
    default:
      return state;
  }
}