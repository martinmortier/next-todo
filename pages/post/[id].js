import React from 'react'
import ListPost from '../../controllers/Todo-post'
import {useRouter} from 'next/router'
import Post from '../../components/Post'
import Link from 'next/link'
export const getStaticPaths = async () => {
    const paths = ListPost.map(lp => {
        return {
            params: { id: lp.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const lp = ListPost.find(lp => lp.id === 1)
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
