function calculatePercentage(modPosition, lastPosition) {
    if (modPosition < 1 || lastPosition < 1) {
        console.log("Must be positive numbers.");
        return;
    }

    const percentage = ((lastPosition - modPosition) / (lastPosition - 1)) * 100;

    return Math.min(Math.max(percentage, 0), 100);
}

const percentage = calculatePercentage(2836, 33720);
console.log(`Mod stats: ${percentage.toFixed(2)}%`);