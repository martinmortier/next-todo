import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ListPost from '../controllers/Todo-post'
import Post from '../components/Post'
import React, {useState, useRef } from 'react'
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
  const [author, setAuthor] = useState('')
  const [done, setDone] = useState(false)
  const [listPost, setListPost] = useState(props.ListPost)
  const formRef = useRef(null)
  const handleName = event => {
    setName(event.target.value)
  }
  
  const handleAuthor = event => {
    setAuthor(event.target.value)
  }

  const handleDone = event => {
    setDone(event.target.checked)
  }

  const handleSubmit = event => {
    event.preventDefault()
    let lastId = listPost[listPost.length-1].id
    lastId++
    setListPost(listPost.concat({id:lastId, name: name, author: author, done: done}))
    console.log(formRef)
    formRef.current.reset()
    event.target.reset()
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
        <form onSubmit={handleSubmit} ref={formRef}>
          <label>
            Nom : {' '}
            <input type="text" value={name} onChange={handleName} required/>
          </label>
          <label>
            Author : {' '}
            <input type="text" value={author} onChange={handleAuthor} required/>
          </label>
          <input type="checkbox" checked={done} onChange={handleDone} />
          <input type="submit" value="Envoyer" />
        </form>
      </main> 
    </div>
  )
}
