import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import * as EditorModule from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
  const Editor = EditorModule.default.default;

  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function reviewCode() {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/ai/get-review",
        {
          code,
        },
      );
      setReview(response.data);
    } catch (err) {
      console.error("Review request failed:", err);
      setError("Unable to generate review. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="panel left-panel">
        <div className="panel-header">
          <div>
            <h1>Code</h1>
            <p>Paste your code and get a review with suggestions.</p>
          </div>
          <button
            className="review-button"
            onClick={reviewCode}
            disabled={loading}
          >
            {loading ? "Reviewing..." : "Review Code"}
          </button>
        </div>

        <div className="editor-panel">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={16}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 14,
              minHeight: "100%",
              outline: 0,
            }}
          />
        </div>
      </section>

      <section className="panel right-panel">
        <div className="panel-header">
          <div>
            <h2>Review Output</h2>
            <p>Results appear here after you click the review button.</p>
          </div>
        </div>

        <div className="output-panel">
          {error ? (
            <div className="alert">{error}</div>
          ) : review ? (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          ) : (
            <div className="empty-state">
              Paste code on the left and click <strong>Review Code</strong>.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;