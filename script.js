function changeBg(color)
{
    document.body.style.backgroundColor=color;
    let txt=document.getElementsByClassName("text")
    if(color=="#000000")
    {
        for(let elm of text){
            elm.stlye.color="white"
        }
    }
    else{
        for(let elm of text){
            elm.style.color="black"
        }
    }
}