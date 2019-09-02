import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form className="mr-0 my-auto d-inline w-50">
                <div className="input-group">
                    <input type="search" className="form-control border border-right-0"
                           placeholder="Search City" aria-label="Recipient's username"
                           aria-describedby="button-addon2">
                    </input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success border border-left-0" type="button"
                                id="button-addon2"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;