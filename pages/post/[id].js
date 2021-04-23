import React from 'react'
import Post from '../../components/Post'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        textAlign : 'center',
        padding: '5% 5%',
    }
})

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.URL}/posts`)
    const listPost = await res.json()
    const paths = listPost.map(lp => ({
            params: { id: lp.id.toString()}
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`${process.env.URL}/posts/${id}`)
    const lp = await res.json()

    return {
        props: {lp: lp}
    }
}

const PostShow = (props) => {
    const { lp } = props
    const classes = useStyles()
    return (
        <div>
            <Post id={lp.id} name={lp.name} author={lp.author} done={lp.done} classes={classes} />
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </div>
    )
}

export default PostShow
