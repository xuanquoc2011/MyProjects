class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput:"",
      count:0,
      countResult:0
    };
  }

  doSearch() {
    this.setState((pre, props) => {
      return {
        count: pre.count + 1,
        countResult: this.state.textInput.length * 3
      };
    });
  }

  onChangeInput(e) {
    var ct = e.target.value;
    this.setState((pre, props) => {
      return {
        textInput: ct
      };
    });
  }
  render() {
    return(
      <div className='clsSearch'>
        <input type="text" value={this.state.textInput} onChange={this.onChangeInput.bind(this)}/>
        <button onClick={this.doSearch.bind(this)}>Search</button>
        <p>Text: {this.state.textInput}</p>
        <p>Count: {this.state.count}</p>
        <p>Result: {this.state.countResult}</p>
      </div>
    );
  }
}

const idSearch = document.getElementById('idSearch');

ReactDOM.render(<Search />, idSearch);
