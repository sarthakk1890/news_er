import React from 'react'

const NewsItems = (props) => {

        let { title, description, imgUrl, newsUrl, author, date ,source} = props;

        return (
            <div>
                <div className="card" style={{ marginBottom: '1em' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>

                </div>
                    <img className="card-img-top" src={imgUrl} alt="news" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">Last updated by {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                        {/* target="_blank" alows the link to direct to new page */}
                    </div>
                </div>
            </div>
        )

}


export default NewsItems