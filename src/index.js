import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

var content = [
  { title: 'Andorra' },
  { title: 'United Arab Emirates' },
  { title: 'Afghanistan' },
  { title: 'Antigua' },
  { title: 'Anguilla' },
  { title: 'Albania' },
  { title: 'Armenia' },
  { title: 'Netherlands Antilles' },
  { title: 'Angola' },
  { title: 'Argentina' },
  { title: 'American Samoa' },
  { title: 'Austria' },
  { title: 'Australia' },
  { title: 'Aruba' },
  { title: 'Aland Islands' },
  { title: 'Azerbaijan' },
  { title: 'Bosnia' },
  { title: 'Barbados' },
  { title: 'Bangladesh' },
  { title: 'Belgium' },
  { title: 'Burkina Faso' },
  { title: 'Bulgaria' },
  { title: 'Bahrain' },
  { title: 'Burundi' }
  // etc
];

class SomeApp extends React.Component {

	componentDidMount(){
  	$('.ui.search')
      .search({
        source: content
      })
;
  }

  
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search countries..." />
            <i className="search icon"></i>
            </div>
          <div className="results"></div>
        </div>
    )
  }
}

ReactDOM.render(<SomeApp />, document.querySelector("#root"))
