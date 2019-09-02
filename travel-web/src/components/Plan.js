import React, {Component} from 'react';

class Plan extends Component {
    render() {
        return (
            <div className="col-md-3 mt-3 pt-2 bg-secondary">
                <form>
                    <div className="form-group">
                        <label className="text-white">My Plan</label>
                        <input type="email" className="form-control" placeholder="my plan"></input>
                    </div>
                    <div className="form-group">
                        <label className="text-white" htmlFor="exampleFormControlSelect1">Days</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                        </select>
                    </div>
                </form>
                <div className="list-group">
                    <a href="#"
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Place1</h5>
                            <small className="text-muted">day1</small>
                        </div>
                        <p className="mb-1">Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </a>
                    <a href="#"
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Place2</h5>
                            <small className="text-muted">day2</small>
                        </div>
                        <p className="mb-1">Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </a>
                    <a href="#"
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Place3</h5>
                            <small className="text-muted">day3</small>
                        </div>
                        <p className="mb-1">Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </a>
                    <a href="#"
                       className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Place4</h5>
                            <small className="text-muted">day4</small>
                        </div>
                        <p className="mb-1">Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </a>
                </div>
                <button type="button" className="btn btn-primary mt-5 float-right">Clean</button>
            </div>
        );
    }
}

export default Plan;