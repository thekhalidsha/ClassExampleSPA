import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name : "Hello",
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                Navbar
                </h1>
                <h2>
                    {this.state.count}
                </h2>
            </div>
        )
    }
}

export default Demo