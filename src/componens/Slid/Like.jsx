
import React from "react";

function Like(props){
     const [isAdded, setIsAdded] = React.useState(true);
    
    const onClickLike = ()=>{
      setIsAdded(!isAdded)
    }
    return(
        <div>
         <img  img={props.like}  onClick={onClickLike} src={ isAdded ? '/img/about/unlike.png' : '/img/about/like.png' } alt="" />
        </div>
    )
}
export default Like;