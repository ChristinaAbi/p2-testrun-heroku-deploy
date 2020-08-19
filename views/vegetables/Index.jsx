const React = require('react')

class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        return (
            <div>
            <h1>Vegetables Index Page</h1>
            <nav>
                <a href="/vegetables/new">Create a New Vegetable</a>
            </nav>
            <ul>
                {
                    vegetables?.map((vegetable, i) => {
                        return (
                            <li>
                                The <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is a vegetable <br></br>
                                {vegetable.isGreen ? `It is green` : `It is not green`}
                                {/* /fruits/id_of_the_fruit/override_post_method */}
                                <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="delete"/>
                                </form>
                                {/* Create a link to the edit route /fruits/id_of_fruit/edit */}
                                <a href={`/vegetables/${vegetable._id}/edit`}>Edit Veggie</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        )
    }
}
module.exports = Index