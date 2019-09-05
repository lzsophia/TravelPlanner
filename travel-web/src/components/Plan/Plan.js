import React, {Component} from 'react';
import PlanChoose from "./PlanChoose"
import DayChoose from "./DayChoose"
import PlaceAbrv from "./PlaceAbrv"

class Plan extends Component {
    render() {
        return (
            <div className="col-md-3 mt-3 pt-2 bg-secondary">
                <form>
                    <PlanChoose/>
                    <DayChoose/>
                </form>
                <div className="list-group">
                    {this.props.planList.map((planItem)=><PlaceAbrv name={planItem.name}  day={planItem.day} address ={planItem.address} description={planItem.description} />)}
                </div>
                <button type="button" className="btn btn-primary mt-5 float-right">Clean</button>
            </div>
        );
    }
}

export default Plan;