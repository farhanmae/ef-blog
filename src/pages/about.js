import * as React from 'react'
import { Link } from 'gatsby'
import { heading } from '../components/layout.module.css'

import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
            <h1 className={heading}>About Me</h1>
            <p>Hi There!</p>
            <StaticImage
                alt="startup"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <Link to="/">Go to home</Link>
        </Layout>
    )
}

export default AboutPage