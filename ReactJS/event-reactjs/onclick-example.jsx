class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
     var now = new Date();
    this.state = {
        currTime: now.toString()
    }
  }

  getCurrentTime() {
    var now = new Date();
    this.setState({currTime: now.toString()});
  }

  render() {
    return(
      <div className='clsTime'>
        <b>Current Time:</b>
        <p>{this.state.currTime}</p>
        <button onClick={() => this.getCurrentTime()}>Get Current Time</button>
      </div>
    );
  }
}
const idTime = document.getElementById('idTime');
ReactDOM.render(<CurrentTime />, idTime);
