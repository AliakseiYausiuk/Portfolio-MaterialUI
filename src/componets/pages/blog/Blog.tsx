import React from 'react'
import styles from './blog.module.scss'
import commonStyle from '../../../styles/common.module.scss';
import {Button} from '../../btn/Button';
import iconBtn from '../../../icons/icons8-sun.svg';
import {Title} from '../../title/Title';
import {Navbar} from '../../navbar/Navbar';
import {BlogCard} from '../../blogCard/BlogCard';
import {PopUp} from '../../popUp/PopUp';


export const Blog = () => {

    return (
        <section className={styles.blog}>
            <PopUp/>
            <div className={commonStyle.container}>
                <div className={styles.blog__item}>
                    <Button classNameBtn={commonStyle.changeThemeColorBnt} imgUrl={iconBtn}
                            alt="icon button color theme"/>
                    <Title title="MY" titleYellow="BLOG" subtitle="POSTS"/>
                    <div className={styles.blog__wrapper}>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </div>
            </div>
            <Navbar/>
        </section>
    )
}
