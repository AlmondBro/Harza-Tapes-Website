import React from 'react';

const PageContent = (props) => {
    return (
        <section className="animated pulse page-content">
            {props.children}
        </section>
    );
}; //end PageContent()

export default PageContent;