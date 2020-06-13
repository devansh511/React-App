import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props){
        super(props);
    }
    
    RenderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    RenderComments = (comments) => {
        const Comment = comments.map((comment) => {                                                                                                                                                                                       
          return (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author} , {comment.date};
              </p>
            </li>
          );
        });
          
        return (
          <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className="list-unstyled">{Comment}</ul>
          </div>
        );
      };
        
      render() {
        if (this.props.selectedDish == null) return <div></div>;
        else
          return (
            <div className="container">
                <div className="row">
                {this.RenderDish(this.props.selectedDish)}
                {this.RenderComments(this.props.selectedDish.comments)}
                </div>
            </div>
          );
      }
    }


export default Dishdetail;
