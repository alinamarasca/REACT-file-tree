import React, { useState } from "react";

function App() {
  return (
    <>
      <Folder name="Desktop">
        <Folder name="Vacations">
          <File name="picture.jpg" />
          <File name="video.avi" />
        </Folder>
        <Folder name="Work">
          <File name="document.doc" />
          <File name="send.pdf" />
          <Folder name="ToDo">
            <File name="description.doc" />
            <File name="project.pdf" />
          </Folder>
        </Folder>
      </Folder>
    </>
  );
}

const Folder = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;
  const direction = isOpen ? "down" : "right";
  const folder = isOpen ? "open" : null;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ margin: "20px" }}>
      <span onClick={("click", handleClick)}>
        <i className={`blue folder ${folder} icon`}></i>
        <i className={`caret ${direction} icon`}></i>
        {name}
      </span>
      <div style={{ marginLeft: "30px", marginBottom: "20px" }}>
        {isOpen ? children : null}
      </div>
    </div>
  );
};

const File = props => {
  const { name } = props;
  const fileExtensions = name.split(".")[1];
  const fileIcons = {
    jpg: "file image",
    doc: "file word",
    avi: "film",
    pdf: "file pdf",
  };

  return (
    <div style={{ margin: "5px" }}>
      <i className={`${fileIcons[fileExtensions]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
