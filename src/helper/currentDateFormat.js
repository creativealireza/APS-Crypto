export function currnetDateFormat() {
    const date = new Date();

    // Get year, month, and day part from the date
    let year = date.toLocaleString("default", { year: "numeric" });
    let month = date.toLocaleString("default", { month: "2-digit" });
    let day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    return day + "-" + month + "-" + year;
}