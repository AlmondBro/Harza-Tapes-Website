import React from 'react';

const PageContent = (props) => {
    return (
        <main className="animated pulse page-content">
            {props.children}
        </main>
    );
}; //end PageContent()

export default PageContent;