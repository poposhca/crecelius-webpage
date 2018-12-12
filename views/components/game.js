import '../styles/GameComponent.css'

var Game = ({name, image, columns}) => {
    let colorStyle = { 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(images/games/${image})`
    }
    return (
        <div className={`${columns} gameCol`} style={colorStyle}>
            <p>{name}</p>
            <div className="links">
                <img className="img-ios" src="images/appStore/ESMX/White_lockup/SVG/Download_on_the_App_Store_Badge_ESMX_RGB_wht_100217.svg" />
                <img className="img-android" src="images/playStore/ESMX/google-play-badge.png" />
            </div>
        </div>
    )
}

export default Game