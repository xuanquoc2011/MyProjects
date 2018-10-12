class Person extends React.Component {
  render() {
    var h3Ele = React.createElement("h3", null, 'Person ' + this.props.personNo);

    var liFirstName = React.createElement("li", null,  this.props.firstName);

    var liLastName = React.createElement("li", null,  this.props.lastName);

    var ulName = React.createElement("ul", null,  [liFirstName, liLastName]);

    var divInfo = React.createElement("div", {class : 'person-info'},  [h3Ele, ulName]);
    return divInfo;
  }
}

const element1 = document.getElementById('person1');
const element2 = document.getElementById('person2');

ReactDOM.render(
  React.createElement(Person, {personNo : 1, firstName : 'Bill', lastName : 'Gates'}, null), element1
)

ReactDOM.render(
  React.createElement(Person, {personNo : 2, firstName : 'Donal', lastName : 'Trump'}, null), element2
)
