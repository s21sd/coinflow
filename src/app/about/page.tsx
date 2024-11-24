export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">About CoinFlow</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg mb-4">
                    At CoinFlow, our vision is to make cryptocurrency trading and insights accessible, transparent, 
                    and efficient for everyone. By leveraging modern technologies, we aim to empower users to make 
                    informed decisions and seamlessly manage their digital assets.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                <p className="text-lg mb-4">
                    CoinFlow integrates with the powerful CoinDCX API to provide real-time cryptocurrency data 
                    and price analysis. Our platform includes an interactive chart that displays price trends 
                    over customizable periods, including up to 120 days.
                </p>
                <p className="text-lg mb-4">
                    We also support secure and convenient payments using Stripe, allowing users to enhance their 
                    trading experience with additional premium features and insights.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
                <p className="text-lg mb-4">
                    Our platform is built on cutting-edge technology to ensure a smooth and reliable user experience. 
                    By integrating the CoinDCX API, we provide real-time market data and analytics, while Stripe enables 
                    secure transactions for purchasing premium services. 
                </p>
                <p className="text-lg mb-4">
                    The interactive price chart allows users to explore historical data trends for various 
                    cryptocurrencies, helping them make data-driven decisions.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <p className="text-lg mb-4">
                    Our dedicated team consists of blockchain enthusiasts, financial experts, and developers 
                    who are passionate about simplifying cryptocurrency trading. We strive to deliver an intuitive 
                    and reliable platform that meets the needs of both novice and experienced traders.
                </p>
            </section>
        </div>
    )
}
