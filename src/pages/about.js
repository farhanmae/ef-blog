import * as React from 'react'
import { Link } from 'gatsby'
import { heading } from '../components/layout.module.css'

import Layout from "../components/layout"

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
            <h1 className={heading}>About Me</h1>
            <p>Hi There!</p>
            <Link to="/">Go to home</Link>
        </Layout>
    )
}

export default AboutPage