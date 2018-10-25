import React from "react";
import { Link } from "@reach/router";
import Counter from "./counter";
import Layout from "../components/layout"

export default ({data}) => (<Layout>
                        <h1>{data.site.siteMetadata.title}</h1>
                        <p>by {data.site.siteMetadata.author}</p>

                        <thead>
                            <tr>
                                <th>path</th>
                                <th>size</th>
                                <th>entension</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.allFile.edges.map(({ node }) => 
                                <tr>
                                    <td>
                                        {node.relativePath}
                                    </td>
                                    <td>
                                        {node.prettySize}
                                    </td>
                                    <td>
                                        {node.extension}
                                    </td>
                                </tr>
                            )}
                        </tbody>

                        <Link to="/page-2/">page 2</Link>
                        <br />
                        <Link to="/counter/">counter</Link>
                        <br />
                        <Counter color="green"/>
                    </Layout>);

export  const query = graphql`
    query FirstQuery {
        site {
            siteMetadata {
                title
                author
            }
        }
        
        allFile {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                }
            }
        }
    }
    `