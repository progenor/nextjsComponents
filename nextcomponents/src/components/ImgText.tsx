type props ={
    img: string,
    text: string,
}

const ImgText = ({img, text}: props) =>{

    return(
        <div className="underline">
            <img src={img} alt={img.toString()} />
            <p>{text}</p>
        </div>
    )

}

export default ImgText;