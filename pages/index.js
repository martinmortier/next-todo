import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ListPost from '../controllers/Todo-post'
import Post from '../components/Post'
import React, {useState} from 'react'
//Static generation
export async function getStaticProps(context) {
  return {
    props: {
      ListPost
    }
  }
}

export default function Home(props) {
  const [name, setName] = useState('')
  const [listPost, setListPost] = useState(props.ListPost)
   
  const handleName = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    //const copyList = listPost
    setListPost(ListPost.concat({id:3, name: name, done: true}))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>To-do in NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>To do list</h1>
        <ul>
        {listPost.map(lp =>
          <Post key={lp.id} name={lp.name} author={lp.author} done={lp.done} />
        )}
        </ul>
        <h1>Add a post</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Nom : {' '}
          <input type="text" value={name} onChange={handleName}/>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      </main> 
    </div>
  )
}
