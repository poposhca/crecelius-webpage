import Game from './game'

class Content extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            games: [
                {id:1, name: 'lightspeed', color:"grey"}, 
                {id:2, name: 'hole in one', color: "yellow"},
                {id:3, name: 'bathroom', color: "#4286f4"}
            ]
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    {this.state.games.map((g, i) =>
                    {
                        if(i == this.state.games.length - 1 && this.state.games.length % 2 != 0)
                            return <Game key={g.id} {...g} columns="col-md-12" />
                        return <Game key={g.id} {...g} columns="col-md-6" />
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