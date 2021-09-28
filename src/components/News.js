import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
                <div className="container my-3">
                <h2>News App Top Headlines</h2>
                <div className="row">
                    <div className="col-md-3">
                    <NewsItem title="myTitle" description="mydescription"/>
                    </div>
                    <div className="col-md-3">
                    <NewsItem title="myTitle" description="mydescription"/>
                    </div>
                    <div className="col-md-3">
                    <NewsItem title="myTitle" description="mydescription"/>
                    </div>
                </div>
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />

            </div>
        )
    }
}

export default News
