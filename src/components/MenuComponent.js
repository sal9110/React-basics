import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetails from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });

    }

    renderDish(dish) {
        return dish != null ? < DishDetails selectedDish = { this.state.selectedDish }
        /> : <div> </div >

    }

    createMenu() {
        const menu = this.props.dishes.map((dish) => {
            return ( 
            <div key = { dish.id } className = "col-12 col-md-5 m-1" >
                <Card onClick = {() => this.onDishSelect(dish)} >
                    <CardImg width = "100%" src = { dish.image } alt = { dish.name } /> 
                    <CardImgOverlay >
                        <CardTitle > { dish.name } </CardTitle> 
                    </CardImgOverlay > 
                </Card> 
            </div >
            );
        });
        return menu;
    }


    render() {

        return ( 
            <div className = "container" >
                <div className = "row" > 
                
                { this.createMenu() } 
                
                </div>

                { this.renderDish(this.state.selectedDish) }

            </div>

        );
    }
}





export default Menu;