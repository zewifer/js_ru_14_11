import React, { PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props) {

    const { articles, openArticle, openArticleId } = props
    const articleItems = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id == openArticleId}
                accordion = {openArticle(article.id)}
            />
        </li>
    ))

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openArticle: PropTypes.func.isRequired,
    openArticleId: PropTypes.string
}

export default accordion(ArticleList)