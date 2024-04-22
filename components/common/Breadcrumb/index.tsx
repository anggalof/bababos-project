import React from 'react';
import Link from 'next/link';

const Breadcrumb = (props: any) => {
  const { titleGeneral } = props;
  return (
    <div className="breadcrumb">
      <div className="space-container">
        <div className="breadcrumb__wrapper">
          <ol className="breadcrumb__list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">{titleGeneral.replace(/-/g, ' ')}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
