import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/Sfs5xVj/360-F-178044772-xivna6-Qj-T834-Uh-B41z-CCv-ITEUNy6l0u-Z.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
    <p>ANS: access token is a token which can give you permission for an hour and spacific time to access and refresh token is permament token for your site thats called JWT token.
        it stored in localstorage and cookies.
    </p>
    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
    <p>ANS:SQL databases are vertically and NoSQL databases are horizontally . SQL databases are table-based, while NoSQL databases are document, key-value, graph etc. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
    </p>
    <h2 className="card-title">What is express js? What is Nest JS (google it)</h2>
    <p>ANS:express js is a frem work for node js.its use for creat server site.nest js also nose js fremWork its also use for build server side .
    </p>
    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
    <p>ANS:AGGREGATE used for process large of nnumber document and pass them multiple stage.One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. .
    </p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;