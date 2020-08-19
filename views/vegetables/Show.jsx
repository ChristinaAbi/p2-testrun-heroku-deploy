const React = require('react')

class Show extends React.Component{
    render(){
        const { name, isGreen} = this.props.vegetable
        return(
            <div>
                <h1>
                    Vegetable Show Page
                </h1>
                <p>
                    This vegetable is name: {name} 
                </p>
                <p>
                    {isGreen ? `It is Green` : `It is not green`}
                </p>
            </div>
        )
    }
}
module.exports = Show