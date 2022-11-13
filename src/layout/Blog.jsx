import React from 'react';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
const aboutbg = require('./../assets/images/background/image-11.jpg');

const Blog = () => {
    return (
        <>
        <Header />








            <section className="blog">
                <div className="container">
                    <div className="blog_info">
                        <h2>Difference between SQL and NoSQL?</h2>
                        <p>SQL :RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS),
                            These databases have fixed or static or predefined schema,
                            These databases are not suited for hierarchical data storage. Follows ACID property,
                            Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</p>
                        <p>NoSQL : Non-relational or distributed database system. They have dynamic schema, These databases are best suited for hierarchical data storage.
                            Follows CAP(consistency, availability, partition tolerance), Examples: MongoDB, GraphQL,
                            HBase, Neo4j, Cassandra etc.</p>

                    </div>
                    <div className="blog_info">
                        <h2>What is JWT, and how does it work?</h2>
                        <p>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.<br />
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        </p>
                    </div>
                    <div className="blog_info">
                        <h2>What is the difference between javascript and NodeJS?</h2>
                        <p>NodeJS : NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                        <p>JavaScript : Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                    </div>
                    <div className="blog_info">
                        <h2>How does NodeJS handle multiple requests at the same time?</h2>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>



                </div>
            </section>


            
            <Footer />
        </>
    );
};

export default Blog;