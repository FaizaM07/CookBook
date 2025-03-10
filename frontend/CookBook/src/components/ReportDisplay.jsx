import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useEffect, useState } from "react";
import { FaFileCsv, FaFilePdf } from "react-icons/fa";

export default function ReportDisplay({ reportType }) {
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReportData();
    }, [reportType]);

    const fetchReportData = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await axios.get(`http://localhost:5000/report?type=${reportType}`);
            setReportData(res.data || {});
        } catch (err) {
            console.error("Error fetching report:", err);
            setError("⚠️ Failed to load report.");
        } finally {
            setLoading(false);
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");

        doc.text("CookBook Report", 14, 15);
        doc.setFontSize(12);
        doc.text(`Report Type: ${reportType === "recipePerformance" ? "Recipe Performance" : "Date-wise Report"}`, 14, 25);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 35);

        if (reportType === "recipePerformance") {
         
            if (Array.isArray(reportData.topCommented) && reportData.topCommented.length > 0) {
                doc.text(" Top 5 Most Commented Recipes", 14, 45);
                doc.autoTable({
                    startY: 50,
                    head: [["#", "Recipe", "Comments"]],
                    body: reportData.topCommented.map((recipe, index) => [index + 1, recipe?.title || "N/A", recipe?.commentsCount || 0])
                });
            }

            if (Array.isArray(reportData.topFavorited) && reportData.topFavorited.length > 0) {
                doc.text(" Top 5 Most Favorited Recipes", 14, doc.lastAutoTable.finalY + 10);
                doc.autoTable({
                    startY: doc.lastAutoTable.finalY + 15,
                    head: [["#", "Recipe", "Favorites"]],
                    body: reportData.topFavorited.map((recipe, index) => [index + 1, recipe?.title || "N/A", recipe?.favoritesCount || 0])
                });
            }
        }

        if (reportType === "dateWise") {
            // Recipes Added This Month
            if (Array.isArray(reportData.newRecipes) && reportData.newRecipes.length > 0) {
                doc.text(" Recipes Added This Month", 14, 45);
                doc.autoTable({
                    startY: 50,
                    head: [["#", "Recipe", "Date"]],
                    body: reportData.newRecipes.map((recipe, index) => [index + 1, recipe?.title || "N/A", new Date(recipe?.createdAt).toDateString()])
                });
            }

            // Comments Made This Week
            if (Array.isArray(reportData.newComments) && reportData.newComments.length > 0) {
                doc.text(" Comments Made This Week", 14, doc.lastAutoTable.finalY + 10);
                doc.autoTable({
                    startY: doc.lastAutoTable.finalY + 15,
                    head: [["#", "User", "Comment"]],
                    body: reportData.newComments.map((comment, index) => [index + 1, comment?.user?.email || "Unknown", comment?.content || "No content"])
                });
            }
        }

        doc.save("CookBook_Report.pdf");
    };

    if (loading) return <p className="loading-text">⏳ Generating Report...</p>;
    if (error) return <p className="error-text">{error}</p>;

    return (
        <div className="premium-report-container">
            <h2>📊 {reportType === "recipePerformance" ? "Recipe Performance Report" : "Date-wise Report"}</h2>

            {reportData ? (
                <div className="report-card-container">
                    {reportType === "recipePerformance" && (
                        <>
                            <div className="report-card">
                                <h3>🥇 Top 5 Most Commented Recipes</h3>
                                <div className="report-grid">
                                    {Array.isArray(reportData.topCommented) && reportData.topCommented.length > 0 ? (
                                        reportData.topCommented.map((recipe, index) => (
                                            <div className="report-item" key={index}>
                                                <h4>#{index + 1} {recipe?.title || "N/A"}</h4>
                                                <p>💬 {recipe?.commentsCount || 0} comments</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No data available</p>
                                    )}
                                </div>
                            </div>

                            <div className="report-card">
                                <h3>💖 Top 5 Most Favorited Recipes</h3>
                                <div className="report-grid">
                                    {Array.isArray(reportData.topFavorited) && reportData.topFavorited.length > 0 ? (
                                        reportData.topFavorited.map((recipe, index) => (
                                            <div className="report-item" key={index}>
                                                <h4>#{index + 1} {recipe?.title || "N/A"}</h4>
                                                <p>❤️ {recipe?.favoritesCount || 0} favorites</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No data available</p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    <div className="download-buttons">
                        <button onClick={generatePDF}><FaFilePdf /> Download PDF</button>
                        <button onClick={() => alert("CSV Download Coming Soon!")}><FaFileCsv /> Download CSV</button>
                    </div>
                </div>
            ) : (
                <p>No report data available.</p>
            )}
        </div>
    );
}

