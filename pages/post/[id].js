import React from 'react'
import {useRouter} from 'next/router'
import Post from '../../components/Post'
import Link from 'next/link'
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
    return (
        <div>
            <Post name={lp.name} author={lp.author} done={lp.done} />
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </div>
    )
}

export default PostShow
