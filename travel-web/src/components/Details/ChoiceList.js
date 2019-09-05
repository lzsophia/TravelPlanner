import React from 'react';
import ItemsCarousel from 'react-items-carousel';

const isDataFetching=false;
class ChoiceList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            activeItemIndex:1
        };
    }
    onClick=(e)=>{
        const index=e.target.value;
        //recommend places: an array of json objects
        const favorite=this.props.recommendPlaces[index];
        this.props.addCard(favorite);
    }
    render() {
        return(
            <div className="places album py-5">
            <div style={{"padding":"0 60px","maxWidth":1200,"margin":"0 auto"}}>
            <ItemsCarousel
              placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
              enablePlaceholder={true}
              numberOfPlaceholderItems={6}
              numberOfCards={6}
              gutter={12}
              slidesToScroll={6}
              chevronWidth={60}
              outsideChevron={true}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={this.state.activeItemIndex}
              requestToChangeActive={value => this.setState({ activeItemIndex: value })}
              rightChevron={'>'}
              leftChevron={'<'}
            >
              {isDataFetching ? [] : Array.from(new Array(20)).map((_, i) =>
                <div
                  key={i}
                  style={{
                    height: 200,
                    background: 'url(https://placeimg.com/380/200/nature)'
                  }}
                >
                <div className="places__description__mask">
                    <div className="places__description">Places name and description here</div>
                    <button className="places__description__button" value={i-1} onClick={this.onClick}>add</button>
                </div>
                </div>
              )}
            </ItemsCarousel>
          </div>
        </div>
        );
    }
}

export default ChoiceList;