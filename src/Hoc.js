const Hoc = (primary) => {
     
    return (         
        <button style={primary.primary? {color:"white", backgroundColor:"pink", border:"none"} : {color:"pink", backgroundColor:"white", border:"none"}} > 
            {primary.children}
        </button>
        
     );
}
 
export default Hoc;


//var React = require('react');
/*var Button = React.createClass({
  render: function () {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
 }
});*/
//module.exports = Button;