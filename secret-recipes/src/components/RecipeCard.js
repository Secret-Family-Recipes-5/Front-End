import React from 'react'

const RecipeCard = props => {
    const container = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '450px',
        margin: '0 auto'
    }

    const ingredientList = {
        padding: 0,
        listStyleType: 'none',
        marginTop: 0
    }

    return (
            <div style={container}>
                {/* These will be changed to props later */}
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h2>Title</h2>
                    <h3>Source</h3>
                </div>
                <h4>Ingredients</h4>
                <ul style={ingredientList}>
                    <li>Milk</li>
                    <li>Eggs</li>
                    <li>Flour</li>
                </ul>
                <p>Instructions</p>
                {/* These will be changed to props later */}
            </div>
    )
}

export default RecipeCard