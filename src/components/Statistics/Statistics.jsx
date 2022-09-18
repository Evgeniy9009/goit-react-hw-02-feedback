const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(
        <>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: { neutral}</li>
                <li>Bad: { bad}</li>
                <li>Total: {total}</li>
                <li>Positive feetback: { Math.round(positivePercentage) }%</li>
            </ul>
        </>
    )
}

export default Statistics