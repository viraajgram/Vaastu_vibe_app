exports.handler = async (event) => {
    // Logic to process user design queries and return price-aware advice
    const responseData = {
        message: "Based on today's Pune market trends...",
        recommendations: ["Vendor A - 10% Discount", "Vendor B - New Stock"]
    };

    return {
        statusCode: 200,
        headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" // Enable CORS for Netlify
        },
        body: JSON.stringify(responseData)
    };
};
