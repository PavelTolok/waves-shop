import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import CardBlock from '../utils/card_block'

import {connect} from 'react-redux';
import {getProductsByArrival, getProductsBySell} from '../../redux/actions/products_actions';

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }

    render() {
        console.log(this.props.history)
        return (
            <div>
                <HomeSlider/>
                <CardBlock
                    list={this.props.products.bySell}
                    title="Best Selling guitars"
                />
                <HomePromotion/>
                <CardBlock
                    list={this.props.products.byArrival}
                    title="New arrivals"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({products: state.products})

export default connect(mapStateToProps)(Home);
