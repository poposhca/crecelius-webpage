import Game from './game'

class Content extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            games: [
                {name: 'bathroom', image: 'banio-wide.jpg'},
                {name: 'lightspeed', image: 'lightSpeed-wide.jpg'}, 
                {name: 'hole in one', image: 'HoleInOne-small.jpg'}
            ]
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    {this.state.games.map((g, i) =>
                    {
                        if(i == 0 && this.state.games.length % 2 != 0)
                            return <Game key={i} {...g} columns="col-md-12" />
                        return <Game key={i} {...g} columns="col-md-6" />
                    }
                    )}
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <Content />,
    document.getElementById('page-content')
)