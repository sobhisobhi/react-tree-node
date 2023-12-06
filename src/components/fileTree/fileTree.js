import React, { useState } from 'react';

const FileTree = ({ root }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <ul>
      <li data-testid="node">
      {root.type === 'dir' && (
        <div data-testid="dir-expand" onClick={handleToggle}>
          {isExpanded ? '[-]' : '[+]'}
        </div>
      )}
      {root.name}
      {isExpanded && root.type === 'dir' && (
        <ul>
          {root.children.map((childNode, index) => (
            <FileTree key ={index} root={childNode} />
          ))}
        </ul>
      )}
    </li>
    </ul>
  );
};

export default FileTree;