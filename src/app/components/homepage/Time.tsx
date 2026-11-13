'use client'
const Time = () => {
    const now = new Date();
    const fullDateTime = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return fullDateTime 
}

export default Time;