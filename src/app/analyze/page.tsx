"use client";

import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

interface AnalysisResponse {
  [key: string]: string; // dynamic keys for markdown files
}

export default function PresentationAnalyzerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [audienceType, setAudienceType] = useState<string>("");
  const [result, setResult] = useState<AnalysisResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const API_URL =
    "https://presentation-analyzer-977121587860.europe-west1.run.app/analyze-presentation";

  /** Handle API Call */
  const handleAnalyzePresentation = async () => {
    if (!file || !audienceType.trim()) {
      setError("Please upload a presentation file and enter audience type.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("audience_type", audienceType);

      const res = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res);
      

      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Error connecting to the presentation analysis API.");
    } finally {
      setLoading(false);
    }
  };

  /** Download file */
  const handleDownload = (filename: string, content: string) => {
    const blob = new Blob([content], {
      type: "text/markdown;charset=utf-8",
    });
    saveAs(blob, filename);
  };

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-6 pt-16 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          🎤 AI Presentation Analyzer
        </h1>
        <p className="text-gray-600">
          Upload a presentation file and get AI-powered analysis tailored for
          your chosen audience type.
        </p>

        {/* Input Form */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <input
            type="file"
            accept=".pdf,.ppt,.pptx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
          />
          <input
            type="text"
            value={audienceType}
            onChange={(e) => setAudienceType(e.target.value)}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
            placeholder="Enter audience type (e.g. educated, general, business)"
          />
        </div>

        {/* Analyze Button */}
        <div className="mt-6">
          <button
            onClick={handleAnalyzePresentation}
            disabled={loading}
            className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg px-6 py-3 text-zinc-700 hover:text-zinc-900 cursor-pointer"
          >
            {loading ? "Analyzing..." : "Analyze Presentation"}
          </button>
        </div>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Output */}
        {result && (
          <div className="mt-8 p-6 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg space-y-6">
            <h2 className="text-xl font-semibold mb-2">
              📑 Analysis Results
            </h2>

            {/* Render all returned markdown files */}
            {Object.entries(result).map(([filename, content]) => (
              <div key={filename} className="space-y-2">
                <h3 className="text-lg font-medium text-primary">{filename}</h3>
                <pre className="bg-zinc-100 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
                  {content}
                </pre>
                <button
                  onClick={() => handleDownload(filename, content)}
                  className="py-2 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white px-4 rounded-lg hover:shadow-lg  cursor-pointer"
                >
                  ⬇️ Download {filename}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
