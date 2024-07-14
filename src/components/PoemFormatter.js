import React from 'react';

const FormattedPoem = ({ content }) => {
  const formatPoemContent = (content) => {
    return React.Children.map(content.props.children, (child, index) => {
      if (typeof child === 'string') {
        return child.split('\n').map((line, lineIndex) => (
          <p key={`line-${index}-${lineIndex}`} className="poem-line">
            {line}
          </p>
        ));
      }
      else if (React.isValidElement(child)) {
        if (child.type === 'br') {
          return null;
        } else if (child.type === 'div' && child.props.className === 'spacer') {
          return <div key={`spacer-${index}`} className="poem-spacer"></div>;
        } else if (child.type === 'p') {
          return child;
        }
        // else if (child.type === 'h6') {
        //   return React.cloneElement(child, { key: `title-${index}`, className: 'poem-title' });
        // } else if (child.type === 'i') {
        //   return React.cloneElement(child, { key: `italic-${index}`, className: 'poem-italic' });
        // } 
        else if (child.props.children) {
          return React.cloneElement(child, { key: `nested-${index}` }, formatPoemContent(child));
        }
      }
      return child;
    });
  };

  return <div className="formatted-poem">{formatPoemContent(content)}</div>;
};

export default FormattedPoem;