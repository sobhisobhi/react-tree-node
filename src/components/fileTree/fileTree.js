import React, { useState } from 'react';

const FileTree = ({ root }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <ul>
      <li data-testid={`node ${root.name}`}>
        {root.type === 'dir' && (
          <div data-testid="dir-expand" onClick={handleToggle}>
              {isExpanded ? '▼' : '►'}
              <span className="dir-icon">{root.name}</span> 
          </div>
        )}
        {root.type === 'file' && (
          <span className="file-icon">{root.name}</span> // File icon
        )}
      
      {isExpanded && root.type === 'dir' && (
        <ul>
          {root.children.map((childNode, index) => (
            <FileTree root={childNode} key={index} />
          ))}
        </ul>
      )}
    </li>
    </ul>
  );
};

export default FileTree;
