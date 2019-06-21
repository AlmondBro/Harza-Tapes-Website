import React from 'react';

const PageContent = (props) => {
    return (
        <section>
            {props.children}
        </section>
    );
}; //end PageContent()

export default PageContent;