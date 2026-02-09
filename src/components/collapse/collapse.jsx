function Collapse({ title, content }) {
        return (
            <div className="collapse">
                <h3 className="collapse-title">{title}</h3>
                <div className="collapse-content">{content}</div>
            </div>
        )
}

export default Collapse