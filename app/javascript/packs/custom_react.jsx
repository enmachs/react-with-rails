import React from 'react'
import WebpackerReact from 'webpacker-react'
import PropTypes from 'prop-types'
const Custom = props => (
  <div>
    <h1>This is my house</h1>
    <a href="/">Go to root</a>
    <img src="https://images.unsplash.com/photo-1514637246609-c479ababc188?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63741e5e6adad36d4c2f79fb370d1d06&auto=format&fit=crop&w=1500&q=80"/>
  </div>
)
WebpackerReact.setup({Custom})
