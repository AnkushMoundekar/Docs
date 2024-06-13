import "./common.css"

const CodeCard = ({ content }) => {


  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="codecard">
      <button className="copy-button" onClick={handleCopy}>Copy</button>
      <div className="codecard-content">
        <div style={{ whiteSpace: 'pre-line' }}>
          {content}
        </div>
    </div>
    </div >
  );
};

export default CodeCard;
