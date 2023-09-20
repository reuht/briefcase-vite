import React from "react";
import style from "./style.module.css";
import CardProject from "../ProjectCard";


const projects = [
    {
        id: 1,
        image: 'https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg',
        title: 'Dogs',
        summary: 'Web page dogs',
        slug: 'dogs-category'
    },
    {
        id: 2,
        image: 'https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg',
        title: 'Cats',
        summary: 'Web page Cats',
        slug: 'dogs-category'
    },
    {
        id: 3,
        image: 'https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg',
        title: 'Chicken',
        summary: 'Web page Chicken',
        slug: 'dogs-category'
    },
    {
        id: 4,
        image: 'https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg',
        title: 'Chicken',
        summary: 'Web page Chicken',
        slug: 'dogs-category'
    }
]

const ProjectSection = () => {
    return (
        <div className={style.projectSection_content}>
            <div className={style.projectSection_content__title}>
                <h2 className={style.projectSection_title}>Projects</h2>
            </div>
            <div className={style.projectSection_content__projects}>
                <div className={style.projectSection_projects}>
                    {
                        projects.map((item) => (
                            <CardProject key={item.id} image={item.image}
                                title={item.title}
                                summary={item.summary}
                                slug={item.slug}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectSection; 