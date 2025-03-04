import React, { useState } from "react";
import ReportDisplay from "../components/ReportDisplay";

export default function ReportPage() {
    const [reportType, setReportType] = useState(null);

    return (
        <div className="report-container">
            <h2>📊 Generate Report</h2>
            <p>Select a report type:</p>

            <div className="report-options">
                <button onClick={() => setReportType("recipePerformance")}>📌 Recipe Performance Report</button>
                <button onClick={() => setReportType("dateWise")}>📅 Date-wise Report</button>
            </div>

            {reportType && <ReportDisplay reportType={reportType} />}
        </div>
    );
}
