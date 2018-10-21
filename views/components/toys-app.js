class UnityPlayer extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        const gameContainerStyle = {
            width: 'auto',
            height: '1080px',
            margin: 'auto'
        }
        return(
            <div>
                <h1>Juguetes</h1>
                <div id="gameContainer" style={gameContainerStyle}></div>
            </div>
        )
    }

    componentDidMount(){
        //Start Unity Game
        UnityLoader.instantiate("gameContainer", "unity/toys_project.json")
    }

}

ReactDOM.render(
    <UnityPlayer />,
    document.getElementById('page-content')
)