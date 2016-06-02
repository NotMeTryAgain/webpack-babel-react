import React from 'react';
import ReactDOM from 'react-dom';


let greetingElement = <div>
<h1 id="special-greeting" className="header-greeting">
  Sup Polka Posies
</h1>
</div>

ReactDOM.render(
  greetingElement,
  document.getElementById('greeting')
)
