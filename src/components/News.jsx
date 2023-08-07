import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import noimage from '../noimage.png'

import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    document.title = `${capitalizeFirstLetter(props.category)} - Newser`;

    const updateNews = async () => {
        props.setProgress(10);
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(apiUrl);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page + 1);
        props.setProgress(100);
    }

    useEffect(() => { //it is the replacement of componentDidMound in fuction based
        updateNews();
        // eslint-disable-next-line
    }, []) //[] it is the input upon changing which the effect will run



    const fetchMoreData = async () => {
        setPage(page + 1);
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };



    return (
        <>
            <h1 className="text-center" style={{ margin: '2em 1em 1em 1em' }}>{capitalizeFirstLetter(props.category)} headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={loading && <Spinner />}
            >

                <div className="container">
                    <div className='row'>
                        {articles.map((elements) => {
                            return <div className="col-md-4" key={elements.url}>
                                <NewsItems title={elements.title ? elements.title.slice(0, 45) : ""} source={elements.source.name} description={elements.description ? elements.description.slice(0, 88) : ""} author={elements.author} date={elements.publishedAt} imgUrl={elements.urlToImage ? elements.urlToImage : noimage} newsUrl={elements.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )



}


News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
