import { useState } from "react";
import "../App.css";
import { diffChars,diffWords } from "diff";
import TopBar from "../components/TopBar";
import LoadingBox from "../components/LoadingBox";

function TextCompare() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [firstText, setResult1] = useState([]);
  const [secondText, setResult2] = useState([]);
  const [compared, setCompared] = useState(false);
  const [language, setLanguage] = useState("ka");
  const [keepFormat, setKeepFormat] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleCompare = () => {
    setLoading(true);
    setProgress(0);

    setTimeout(() => {
      setProgress(30);
    }, 300);
    setTimeout(() => {
      setProgress(60);
    }, 600);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    setTimeout(() => {
      let differences;

      if (keepFormat) {
        differences = diffChars(textA, textB);
      } else {
        const a = textA.replace(/\s+/g, " ");
        const b = textB.replace(/\s+/g, " ");
        differences = diffWords(a, b);
      }

      setResult1(differences.filter((part) => !part.added));
      setResult2(differences.filter((part) => !part.removed));

      setCompared(true);
      setLoading(false);
    }, 1100);
  };
  const handleNew = () => {
    setTextA("");
    setTextB("");
    setResult1([]);
    setResult2([]);
    setCompared(false);
  };

  const renderDiff = (parts) => {
    return parts.map((part, index) => {
      let color = "black";

      if (part.added) color = "green";
      if (part.removed) color = "red";

      return (
        <span key={index} style={{ color }}>
          {part.value}
        </span>
      );
    });
  };

  return (
    <div className="container">
      <TopBar
        language={language}
        setLanguage={setLanguage}
        keepFormat={keepFormat}
        setKeepFormat={setKeepFormat}
        handleNew={handleNew}
      />

      {compared === false && (
        <>
          <div className="text-panels-wrapper">
            {loading && (
              <div className="loading-overlay">
                <LoadingBox progress={progress} />
              </div>
            )}

            <div className="text-panels">
              <textarea
                placeholder={
                  language === "ka" ? "დაიწყე წერა..." : "Start writing..."
                }
                value={textA}
                onChange={(e) => setTextA(e.target.value)}
              />

              <div className="arrow">
                <span className="desktop-arrow">&#8596;</span>
                <span className="mobile-arrow">&#8597;</span>
              </div>

              <textarea
                placeholder={
                  language === "ka" ? "დაიწყე წერა..." : "Start writing..."
                }
                value={textB}
                onChange={(e) => setTextB(e.target.value)}
              />
            </div>
          </div>

          <button onClick={handleCompare} disabled={!textA || !textB||loading}>
            შედარება
          </button>
        </>
      )}

      {compared === true && (
        <>
          <div className="results">
            <div className="firstText">{renderDiff(firstText)}</div>

            <div className="secondText">{renderDiff(secondText)}</div>
          </div>

          <button onClick={() => setCompared(false)}>&#10227; შედარება</button>
        </>
      )}
    </div>
  );
}

export default TextCompare;
