import React, {Component} from 'react';
import Plan from "./Plan"
import ChoiceList from "./ChoiceList"
import Map from "./Map"

class MainBody extends Component {
    render() {
        return (
            <main role="main">
                <div className="album bg-white">
                    <div className="container">
                        <div className="row featurette ml-1">
                            <Plan />
                            <Map />
                        </div>
                    </div>
                </div>
                <ChoiceList />
            </main>
        );
    }
}

export default MainBody;