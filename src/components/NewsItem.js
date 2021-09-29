//  import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        let {title, description, imgUrl, newUrl} = this.props;
        return (
            <div className="container my-3">
                <div className="card my-3" style={{width: "18rem"}}>
                    <img src={!imgUrl?"data:image/png;base64,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":imgUrl} className="card-img-top" alt="..." />
                    <div className ="card-body">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{description}</p>
                    <a href={newUrl} target="_blank" rel="noreferrer"  className ="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>            
                </div>
        )
    }
}

export default NewsItem
