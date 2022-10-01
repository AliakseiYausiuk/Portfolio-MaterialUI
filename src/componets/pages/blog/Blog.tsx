import React from 'react'
import styles from './blog.module.scss'
import commonStyle from '../../../styles/common.module.scss';
import {BtnColorTheme} from '../../btnColorTheme/btnColorTheme';
import {Title} from '../../title/Title';
import {Navbar} from '../../navbar/Navbar';
import {BlogCard} from '../../blogCard/BlogCard';


export const Blog = () => {

    return (
        <section className={styles.blog}>
            <div className={commonStyle.container}>
                <div className={styles.blog__item}>
                    <BtnColorTheme/>
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
