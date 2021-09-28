//  import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://image.cnbcfm.com/api/v1/image/106948622-1632839136144astro-press.PNG?v=1632839257" className="card-img-top" alt="..." />
                    <div className ="card-body">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{description}</p>
                    <a href="NewDetails" className ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>            
                </div>
        )
    }
}

export default NewsItem
