import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useState, useRef } from 'react'
import Link from 'next/link'
import {Typography, Button, Grid, Paper, TextField, Checkbox, FormControlLabel} from '@material-ui/core'
import axios from 'axios'
//Static generation
export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3001/posts')
  const listPost = await res.json()
  return {
    props: {
      listPost
    }
  }
}

export default function Home(props) {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [done, setDone] = useState(false)
  const [listPost, setListPost] = useState(props.listPost)
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

  const handleSubmit = async event => {
    event.preventDefault()
    let lastId = listPost[listPost.length-1].id
    lastId++
    await axios.post("http://localhost:3001/posts",{id:lastId, name: name, author: author, done: done})
    setListPost(listPost.concat({id:lastId, name: name, author: author, done: done}))
  }

  const handleClick = async id => {
    await axios.delete(`http://localhost:3001/posts/${id}`)
    const newListPost = listPost.filter(lp => lp.id !== id)
    setListPost(newListPost)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>To-do in NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Typography variant="h1" >To do list</Typography>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        {listPost.map(lp =>(
          //<Post key={lp.id} name={lp.name} author={lp.author} done={lp.done} />
          <Grid item key={lp.id} xs={12} md={12} lg={12}>
            <Paper elevation={3}>
              <Typography align="center">
              <Link href={`/post/${lp.id}`}>
                <a style={{textAlign:"center"}}>{lp.name}</a>
              </Link>
              </Typography>
              <br />
              <Button variant="outlined" color="secondary" onClick={() => handleClick(lp.id)}>Delete</Button>
            </Paper>
            <br />
          </Grid>
          )
        )}
        </Grid>
        <h1 >Add a post</h1>
        <form onSubmit={handleSubmit} ref={formRef} style={{width:"100%",textAlign:"center"}}>
          <Paper elevation={3}>
            <TextField id="name" label="Name" type="text" value={name} onChange={handleName} required /> 
            <br />
            <TextField id="author" label="Author" type="text" value={author} onChange={handleAuthor} required/>
            <br />
            <FormControlLabel control={<Checkbox checked={done} onChange={handleDone} />} label="Done" />
            <br />
            <Button variant="contained" type="submit" color="secondary">Envoyer</Button>
          </Paper>
        </form>
      </main> 
    </div>
  )
}
