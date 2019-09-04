import React, {Component} from 'react';

class ChoiceList extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={`./styles/architecture-buildings-canada-2478248.jpg`} width="100%"
                                     height="225" background="#55595c" color="#eceeef" className="card-img-top"
                                     text="Thumbnail"/>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button"
                                                    className="btn btn-sm btn-outline-secondary">View
                                            </button>
                                            <button type="button"
                                                    className="btn btn-sm btn-outline-secondary">Edit
                                            </button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={`../styles/architecture-buildings-canada-2478248.jpg`} width="100%"
                                     height="225" background="#55595c" color="#eceeef" className="card-img-top"
                                     text="Thumbnail"/>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button"
                                                    className="btn btn-sm btn-outline-secondary">View
                                            </button>
                                            <button type="button"
                                                    className="btn btn-sm btn-outline-secondary">Edit
                                            </button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={`../styles/architecture-buildings-canada-2478248.jpg`} width="100%"
                                     height="225" background="#55595c" color="#eceeef" className="card-img-top"
                                     text="Thumbnail"/>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button"
                                                    className="btn btn-sm btn-outline-secondary">View
                                            </button>
                                            <button type="button"
                                                    className="btn btn-sm btn-outline-secondary">Edit
                                            </button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="float-right mr-5">
                    <a href="#">Back to top</a>
                </p>
            </div>
        );
    }
}

export default ChoiceList;