import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    if (this.props.stripe) {
      let token = await this.props.stripe.createToken();
      let response = await axios({
        url: "/account-registration/",
        method: "post",
        data: {
          stripe_token: token.token.id,
          email: this.props.email,
          first_name: this.props.firstname,
          last_name: this.props.lastname,
          password: this.props.password
        }
      });
      if (response.status === 200) {
        window.location.reload();
      }
    }

    // if (response.ok) this.setState({ complete: true });
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
