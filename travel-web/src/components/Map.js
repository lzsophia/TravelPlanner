import React, {Component}from "react"

class Map extends Component {
    render() {
        return (
            <div className="col-md-9 pt-3 pl-0 ml-0 input-group-append">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="100%" height="800" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        <a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/"></a></div>
                </div>
            </div>
        );
    }
}

export default Map;