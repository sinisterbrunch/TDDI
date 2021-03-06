var React = require('react');

var NavigationBar = React.createClass({
  render: function() {
    var self = this;
    return (
      <nav className="navbar navbar-default NavBarContainer">
        <div className="container-fluid">
          <div className="navbar-header">
            <button 
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img className="cleanLogo" src="https://i.imgur.com/0idVjLu.png?1"/>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right settings-nav">
              <li><a className="navBarItem" href="/#selector">All Lessons</a></li>
              <li><a className="navBarItem" href="/#aboutus">About Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = NavigationBar;
