class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h3>Hello {this.props.fullName}</h3>
      </div>
    );
  }
}

const element1 = document.getElementById('greeting1');

ReactDOM.render(
  <Greeting fullName='Tran' />,
  element1
)
