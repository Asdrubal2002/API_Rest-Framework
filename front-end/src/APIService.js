


export default class APIService{
    static UpdateArticle(article_id, body ){

        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token 0b9acb97215e1189dbfb381448efaa1759904aa3'
            }, 
            body:JSON.stringify(body)

        }).then(resp => resp.json())
            
    }

    static InsertArticle(body){

        return fetch(`http://127.0.0.1:8000/api/articles/`, {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token 0b9acb97215e1189dbfb381448efaa1759904aa3'
            }, 
            body:JSON.stringify(body)

        }).then(resp => resp.json())

    }

    static DeleteArticle(article_id){
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
            'method':'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token 0b9acb97215e1189dbfb381448efaa1759904aa3'
            }
            
        })
    }



}