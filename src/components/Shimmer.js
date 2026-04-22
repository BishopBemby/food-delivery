
const Shimmer = () => {
  return (
    <div className="shimmer-card-container">
        {Array(10).fill("").map((e, index) => (
            <div className="shimmer-card" key={index}>
                <div className="shimmer-card-image shimmer"></div>
                <div className="shimmer-card-name shimmer"></div>
                <div className="shimmer-card-rating shimmer"></div>
                <div className="shimmer-card-deliveryTime shimmer"></div>
                <div className="shimmer-card-cost shimmer"></div>
            </div>
        ))}
    </div>
  )
}

export default Shimmer