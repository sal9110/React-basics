
import React, { Component } from "react";
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

class DishDetails extends Component{

    constructor(props){
        super(props)

        this.state={

        }
    }
   
    renderDish(selectedDish){
        return(
            
            <Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
            
        )
    };

    renderComment(selectedDish){
        if (selectedDish.comments === null ) {return <div> </div> } 
         else { return selectedDish.comments.map((comment) => {
                 let fullDate = new Date(comment.date);
                 let day = fullDate.getDate();
                 let month = fullDate.getMonth() + 1;
                 let year = fullDate.getFullYear();
                 return (
                     <ul key={comment.id} className="list-unstyled">
                         <div className="m-2">
                             <li>{comment.comment}</li>
                             <li>--{comment.author}, {day}/{month}/{year}</li>
                         </div>
                     </ul>
                 );
             });
        }
    };
    

    render(){        
        return(
           
        <div className="row">
            <div className="col-12  col-md-5 ">
                {this.renderDish(this.props.selectedDish)}
            </div>
            <div className="col-12 col-md-5 m-1"> 
                <h4>Comments</h4>
                {this.renderComment(this.props.selectedDish)}
            </div>
        </div>
        )
    }
    
}

export default DishDetails;