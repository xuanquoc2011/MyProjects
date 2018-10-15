class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h3>Hi {this.props.name}</h3>
        <i>{this.props.message}</i>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name:"There",
  message:"Welcome to Website!"
}

const welcome1 = document.getElementById('welcome1');
const welcome2 = document.getElementById('welcome2');

ReactDOM.render(
  <Welcome name="Tran" message="Welcom back!" />,
  welcome1
)

ReactDOM.render(
  <Welcome />,
  welcome2
)
