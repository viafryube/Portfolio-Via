import PortfolioCard from "../components/PortfolioCard"
import project1Img from "../assets/portfolio/project1.png"
import project2Img from "../assets/portfolio/project2.png"
import project3Img from "../assets/portfolio/project3.png"
import project4Img from "../assets/portfolio/project4.png"
import project5Img from "../assets/portfolio/project5.png"
import project6Img from "../assets/portfolio/project6.png"
import project7Img from "../assets/portfolio/project7.png"
import project8Img from "../assets/portfolio/project8.png"




// import additional project images

export default function Portfolio(){
    return (
        <div id="portfolio" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <p className="font-light text-gray-400">Here are some of my projects</p>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
                <PortfolioCard 
                    title="EDUBRIDGE - Website Development" 
                    img={project8Img} 
                    description="This project involves the development of the EDUBRIDGE website using HTML, CSS, and Bootstrap, designed to be a dynamic digital platform that connects, educates, and facilitates collaboration among edupreneurs across Indonesia. The website serves as a central hub for innovative educational solutions and aims to foster a community dedicated to improving the quality of education in Indonesia."
                />
                <PortfolioCard 
                    title="SheAcademy - UI/UX" 
                    img={project7Img} 
                    description="The She Academy website is designed to create an inclusive, welcoming, and empowering environment for women interested in developing their skills in technology and programming. The UI/UX design focuses on providing an intuitive and user-friendly experience while promoting She Academy's mission to close the gender gap in the tech industry."
                />

                <PortfolioCard 
                    title="4STUDENT - UI/UX" 
                    img={project1Img} 
                    description="The 4STUDENT mobile application is designed to assist MTs (Madrasah Tsanawiyah) students in choosing the most suitable vocational school (SMK) program based on their interests, talents, and career opportunities. The app’s UI/UX design aims to provide an intuitive and engaging experience for students, helping them make informed decisions about their future educational paths."
                />
                <PortfolioCard 
                    title="Landing Page" 
                    img={project2Img} 
                    description="This project involves creating a professional and visually appealing Landing Page using HTML, CSS, and Bootstrap. The landing page is designed to effectively showcase a product, service, or campaign with a user-friendly interface and responsive design." 
                />

                <PortfolioCard 
                    title="Architects & Designs - Website Development" 
                    img={project3Img} 
                    description="This project focuses on developing a service-oriented website for an 'Architects & Designs' business using the CodeIgniter framework. The website will serve as a digital platform to showcase architectural projects, design services, and client testimonials while providing an intuitive way for potential clients to connect with the business." 
                />
                <PortfolioCard 
                    title="PulsaKu - Desktop App" 
                    img={project4Img} 
                    description="A desktop application is being developed to streamline the management of mobile credit (pulsa) transactions at the 'PulsaKu' store. Built with Java for application logic and MySQL for database management, this application is designed to simplify transaction workflows, improve data organization, and deliver an intuitive interface for store operators."
                />

                <PortfolioCard 
                    title="SPP Payment Transactions - Desktop App" 
                    img={project5Img} 
                    description="A desktop application is being designed to manage SPP (tuition fee) payment transactions for educational institutions. Utilizing Java for application logic and MySQL for database management, the application is tailored to simplify payment processes, improve data accuracy, and provide a user-friendly experience for administrators and staff."
                />
                <PortfolioCard 
                    title="Laundry Management - Desktop App" 
                    img={project6Img} 
                    description="A desktop application is being developed to streamline the management of laundry services for small to medium-sized businesses. Built with Java for application logic and MySQL for database management, this solution aims to enhance operational efficiency, improve record-keeping, and provide a user-friendly interface for staff and administrators."
                />

                {/* Add more PortfolioCard components as needed */}
            </div>
        </div>
    )
}
