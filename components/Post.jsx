import React from 'react'
import { Paper, Typography, Button, Checkbox } from '@material-ui/core'
import Link from 'next/link'
const Post = ({id, name, author, done, classes, link, handleClick}) => {
    const linked = link ? <Link href={`/post/${id}`}><a>{name}</a></Link> : <span>{name}</span>
    const display = link ? {
        display : "contents"
    } : {display : "none"}
    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
                <Typography>
                    {linked}
                </Typography>
                <br />
                <Typography>
                    <b>Author:</b> {author}
                </Typography>
                <Checkbox checked={done ? true : false} />
                <br />
                <span style={display}>
                    <Button variant="outlined" color="secondary" onClick={() => handleClick(id)}>Delete</Button>
                </span>
            </Paper>
        </div>
    )
}

export default Post
