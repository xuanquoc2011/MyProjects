class Bt extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        text: "Please Click me!",
        clickCount: 0
      };
    }
  updateCount() {
    this.setState((prevState, props) => {
      return {
        clickCount: prevState.clickCount + 1,
        text: "Clicked"
      }
    });
  }

  render() {
    return (
      <button onClick={() => this.updateCount()}>
        {this.state.text} : {this.state.clickCount}
      </button>
    );
  }
}

const bt1 =  document.getElementById('button1');
const bt2 =  document.getElementById('button2');

ReactDOM.render(<Bt />, bt1);
ReactDOM.render(<Bt />, bt2);
