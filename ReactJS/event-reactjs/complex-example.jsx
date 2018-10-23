class OrderDetail extends React.Component {
  render() {
    return (
      <div className='order-detail'>
        <h4>{this.props.productName}</h4>
        <p>Price: {this.props.price} USD</p>
        <p>Quantity: {this.props.quantity}</p>
        <p>
          <button onClick={this.props.addHandler}>+</button>
        </p>
      </div>
    );
  }
}
class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      amount:0,
      details:[
        {id:1, productName: "iPhone", price: 900, quantity:0},
        {id:2, productName: "Samsung", price: 800, quantity:0},
        {id:3, productName: "Nokia", price: 100, quantity:0}
      ]
    };
  }

  updateOrder(index) {
    this.setState((prevState, props) => {
      console.log(this.state.details);

      var newQty = prevState.details[index].quantity + 1;
      this.state.details[index].quantity = newQty;
      this.state.amount=prevState.amount + 1 * prevState.details[index].price;
      return {
        amount:this.state.amount,
        details:this.state.details
      };
    });
  }

  render() {
    var detailTags = this.state.details.map((e, index) => (
      <OrderDetail
        key={e.id}
        addHandler={() => this.updateOrder(index)}
        productName={e.productName}
        price={e.price}
        quantity={e.quantity}
      />
    ));

    return (
      <div className="order">
        {detailTags}
        <div className="clear" />
        <p className="total">Total: <b>{this.state.amount} USD</b></p>
      </div>
    );
  }
}

ReactDOM.render(<Order />, document.getElementById("order1"));
