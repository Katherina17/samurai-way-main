import s from './Post.module.css';

const Post = () => {
    return(
        <div className={s.post_container}>
            <div className={s.name_userImage}>
                <div className={s.image_container}>
                    <img src={'https://images.unsplash.com/photo-1563620915-8478239e9aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}
                         alt={'user image'}/>
                </div>
                <span> Emilia Osten</span>
            </div>
            <span className={s.post_item}> hello, it's my first time to build an application</span>
        </div>
    )
}

export default Post;