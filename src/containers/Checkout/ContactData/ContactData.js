import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = { 
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: null
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Pratik Thakkar',
        address: {
          street: 'Test Street 1',
          zipCode: '07032',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
  }
  axios.post('/orders.json', order)
      .then(res => {
        this.setState({loading: false });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  }
  render() {
    let form = (
      <form action="">
        <input className={classes.Input} type="text" name="name" placeholder="First and Last Name"/>
        <input className={classes.Input} type="text" name="email" placeholder="Email"/>
        <input className={classes.Input} type="text" name="street" placeholder="Street"/>
        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code "/>
        <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
      </form>
    );
    if(this.state.loading){
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;