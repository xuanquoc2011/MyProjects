class Person extends React.Component {
  render() {
    return (
      <div className = "person-info">
        <h3>Person {this.props.personNo}</h3>
        <ul>
          <li>
            First Name: {this.props.firstName}
          </li>
          <li>
            Last Name: {this.props.lastName}
          </li>
        </ul>
      </div>
    );
  }
}

const element1 = document.getElementById('person1');
const element2 = document.getElementById('person2');

ReactDOM.render(
  <Person personNo='1' lastName='Gates' />, element1
)

ReactDOM.render(
  <Person personNo='2' firstName='Donald' lastName='Trump' />, element2
)
