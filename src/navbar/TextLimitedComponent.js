import React from 'react';

const TextLimitedComponent = ({ htmlContent, maxLength }) => {
  // Function to limit the text length
  const limitText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Function to parse HTML tags
  const parseHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div>
      {/* Render HTML content */}
      <div dangerouslySetInnerHTML={parseHTML(limitText(htmlContent, maxLength))}></div>
    </div>
  );
};

export default TextLimitedComponent;
