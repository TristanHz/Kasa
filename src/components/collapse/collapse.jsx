import { useState } from "react";
import "./collapse.scss";
import { FaChevronUp } from "react-icons/fa";


function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`collapse__arrow ${isOpen ? "open" : ""}`}>
          <FaChevronUp />
        </span>
      </button>

      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item) => (
                <li key={item.id}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
