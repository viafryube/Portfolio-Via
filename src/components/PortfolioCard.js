export default function PortfolioCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="flex flex-col bg-dark-200 rounded-md p-4 hover:bg-dark">
            <div className="w-full">
                <img src={props.img} className="w-full h-auto object-cover rounded-md" alt={props.title} />
            </div>
            <div className="w-full mt-4">
                <p className="text-lg text-white font-semibold">{props.title}</p>
                <p className="text-gray-400 mt-2">{props.description}</p>
            </div>
        </div>
    )
}
