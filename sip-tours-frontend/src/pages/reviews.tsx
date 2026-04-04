import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import Layout from "@/components/Layout";
import ThemeColor from "@/components/ThemeColor";
import { ReviewCard } from "@/components/ReviewCard";
import reviews from "@/utils/reviews.json";
import HeaderHome from "@/components/HeaderHome";
import PreFooter from "@/components/PreFooter";
import { useState } from "react";

export default function Reviews() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = isMobile ? 15 : 6;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

    const goToPage = (page: number) => setCurrentPage(page);
    const nextPage = () => setCurrentPage(Math.min(currentPage + 1, totalPages));
    const prevPage = () => setCurrentPage(Math.max(currentPage - 1, 1));

    return (
        <>
            {isMobile ? (
                <>
                    <HeaderHome />
                    <Layout style={{ paddingLeft: "5vw", paddingRight: "5vw" }} backgroundColor={ThemeColor.whiteHome}>
                        <div style={{ position: "relative", marginBottom: "7vw", marginTop: "7vw" }}>
                            <div className="max-w-3xl mx-auto py-12 space-y-8">
                                <h1 className="text-4xl font-bold mb-6">Guest Reviews</h1>

                                {currentReviews.map((review, index) => (
                                    <ReviewCard key={review.author + index} review={review} />
                                ))}

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2 mt-12">
                                        <button
                                            onClick={prevPage}
                                            disabled={currentPage === 1}
                                            className="px-2 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Prev
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => goToPage(page)}
                                                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${currentPage === page
                                                        ? "bg-blue-600 text-white border-blue-600"
                                                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        ))}

                                        <button
                                            onClick={nextPage}
                                            disabled={currentPage === totalPages}
                                            className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Layout>
                    <PreFooter />
                </>
            ) : (
                <>

                    <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                        <HeaderHome />
                        <div style={{ position: "relative", marginBottom: "7vw", marginTop: "7vw" }}>
                            <div className="max-w-3xl mx-auto py-12 space-y-8">
                                <h1 className="text-4xl font-bold mb-6">Guest Reviews</h1>

                                {currentReviews.map((review, index) => (
                                    <ReviewCard key={review.author + index} review={review} />
                                ))}

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2 mt-12">
                                        <button
                                            onClick={prevPage}
                                            disabled={currentPage === 1}
                                            className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Previous
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => goToPage(page)}
                                                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${currentPage === page
                                                        ? "bg-blue-600 text-white border-blue-600"
                                                        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        ))}

                                        <button
                                            onClick={nextPage}
                                            disabled={currentPage === totalPages}
                                            className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <PreFooter />
                    </Layout>
                </>
            )}
        </>
    );
}