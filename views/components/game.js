import '../styles/GameComponent.css'

var Game = ({name, color, columns}) => {
    let colorStyle = {
        backgroundColor: color
    }
    console.log(color)
    return (
        <div className={`${columns} gameCol`} style={colorStyle}>
            <p>{name}</p>
            <div className="links">
                <div className="link-container">
                    <img className="get-ios" src="images/appStore/ESMX/White_lockup/SVG/Download_on_the_App_Store_Badge_ESMX_RGB_wht_100217.svg" />
                </div>
                <div className="link-container">
                    <img className="get-android" src="images/playStore/ESMX/google-play-badge.png" />
                </div>
            </div>
        </div>
    )
}

export default Game