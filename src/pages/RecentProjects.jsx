// Importing images
import peddyProjectImage from '../assets/peddy_project.png';
import cricketImage from '../assets/cricket.png';
import gadgetHavenImage from '../assets/gadget-haven.png';
import tallyImage from '../assets/tally.png';

function RecentProjects() {
    const projectData = [
        {
            title: "Pet Adoption Website",
            role: "Web Designer & Developer",
            year: "2023 - NOW",
            description:
                "Developed and designed a pet adoption website, using modern web technologies.",
            link: "https://1728518235403-peddy_project.surge.sh/",
            image: peddyProjectImage, // Imported image
        },
        {
            title: "Dream XI Fantasy Cricket Team",
            role: "Web Designer & Developer",
            year: "2023 - NOW",
            description:
                "Developed Dream XI, a responsive web application for fantasy cricket team management.",
            link: "https://first-window.surge.sh/",
            image: cricketImage, // Imported image
        },
        {
            title: "Tech Gadget Dashboard",
            role: "Web Designer & Developer",
            year: "2023 - NOW",
            description:
                "Designed and developed an intuitive ReactJS-based dashboard to showcase the latest tech gadgets. The platform allows users to filter gadgets by categories, add items to their wishlist or cart, and experience a seamless shopping flow with a mock purchase feature. Focused on building a sleek and responsive UI to provide an engaging user experience across devices.",
            link: "https://versed-potato.surge.sh/dashboard",
            image: gadgetHavenImage, // Imported image
        },
        {
            title: "Shop Management System",
            role: "Web Designer & Developer",
            year: "2023 - NOW",
            description:
                "A platform offering features to manage a shop, including purchasing, stock tracking, POS, expense tracking, attendance, and leave management. Built with PHP, HTML, JavaScript, Tailwind CSS, and PostgreSQL.",
            link: "https://tally.innologybd.com/",
            image: tallyImage, // Imported image
        },
    ];

    return (
        <section id="recent-projects" className="py-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Recent Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {projectData.map((project, index) => (
                    <div key={index} className="bg-white shadow-md p-6 rounded-lg border">
                        {/* Centering the content */}
                        <div className="flex flex-col items-center space-y-4">
                            {/* Project Image */}
                            <img
                                src={project.image}  // This is the imported image
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-lg" // Make image responsive
                            />
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p><strong>Role:</strong> {project.role}</p>
                                <p><strong>Year:</strong> {project.year}</p>
                                <p>{project.description}</p>
                                <p><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">{project.link}</a></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecentProjects;