import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';

export const MyContext = React.createContext()

function App() {
  
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)

  useEffect(()=>{

    fetch('http://127.0.0.1:8000/api/articles/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 0b9acb97215e1189dbfb381448efaa1759904aa3'
      }
    } )
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))

  }, [])

  const editBtn = (article) => {
    setEditArticle(article)
  }

  const updateInformation = (article) => {

    const new_article = articles.map(myarticle => {
      if(myarticle.id === article.id){
        return article;
      }else{
        return myarticle;
      }
    })

    setArticles(new_article)

  } 

  const articleForm = () => {

    setEditArticle({title:'',description:''})

  }

  const insertedInformation = (article) =>{

    const new_articles = [...articles, article]
    setArticles(new_articles)

  } 

  const deleteBtn = (article) => {
    const new_articles = articles.filter(myarticle => {
      if(myarticle.id === article.id){
        return false
      }
      return true;
    })
    setArticles(new_articles)


  }

  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
            <h1>API rest framework Henry</h1>
            <br/>
        </div>
        <div className='col'>
            <button onClick={articleForm} className='btn btn-primary'>Add Homework</button>
        </div>
      </div>
        <ArticleList articles = {articles} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
        {editArticle ? <Form article = {editArticle} updateInformation = {updateInformation} insertedInformation = {insertedInformation}/> : null}
    </div>
  );
}

export default App;
