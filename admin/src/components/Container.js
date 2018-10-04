import React, {Component} from 'react'

export class Container extends Component {
    render() {
        return (
            <div>
                {this.props.childeren}
            </div>
        )
    }
}

export default Container
