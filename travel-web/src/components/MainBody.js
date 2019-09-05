import React, {Component} from 'react';
import Plan from "./Plan/Plan";
import ChoiceList from "./Details/ChoiceList";
import MapContainer from "./MapContainer";

class MainBody extends Component {
    constructor(props){
        super(props);
        //e.g initial state : duration, destination etc.
        this.state={
            duration: 6,
            recommendPlaces:[{name:"Place5", day: "day1", address: "Maecenas sed diam eget risus varius blandit.", description: "Donec id elit non mi porta."},
            {name:"Place2", day: "day1", address: "Maecenas sed diam eget risus varius blandit.", description: "Donec id elit non mi porta."}],
            destination:"",
            planList:[{name:"Place1", day: "day1", address: "Maecenas sed diam eget risus varius blandit.", description: "Donec id elit non mi porta."},
            {name:"Place2", day: "day1", address: "Maecenas sed diam eget risus varius blandit.", description: "Donec id elit non mi porta."},
            {name:"Place3", day: "day1", address: "Maecenas sed diam eget risus varius blandit.", description: "Donec id elit non mi porta."},
            {name:"Place4", day: "day1", address: "Maecenas sed diam eget risus varius blandit.", description: "Donec id elit non mi porta."}]
        };
    }
    componentDidMount(){
        //update recommendPlaces here
    }
    addCard=(favorite)=>{
        const planList=this.state.planList.concat(favorite);
        this.setState({planList: planList});
        console.log(favorite);
        console.log(this.state.planList);
    }
    render() {
        console.log(this.state.planList.length);
        return (
            <main role="main" className="main">
                <div className="album bg-white">
                    <div className="container">
                        <div className="row featurette ml-1">
                            <Plan planList={this.state.planList}/>
                            <MapContainer />
                        </div>
                    </div>
                </div>
                <ChoiceList recommendPlaces={this.state.recommendPlaces} addCard={this.addCard}/>
            </main>
        );
    }
}

export default MainBody;