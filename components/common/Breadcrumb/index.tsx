import React from 'react';

const Breadcrumb = (props: any) => {
  const { titleGeneral } = props;
  return (
    <div className="breadcrumb">
      <div className="space-container">
        <div className="breadcrumb__wrapper">
          <ol className="breadcrumb__list">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">{titleGeneral.replace(/-/g, ' ')}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
