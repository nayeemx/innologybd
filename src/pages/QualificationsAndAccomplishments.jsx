function QualificationsAndAccomplishments() {
    const qualifications = [
      {
        certification: "Post Graduate Diploma in Information and Communication Technology",
        institute: "Bangladesh-Korea Institute of Information & Communication Technology (BKIICT)",
        location: "ICT Tower, Agargaon, Dhaka",
        from: "July 17, 2023",
        to: "July 23, 2024",
      },
    ];
  
    const accomplishments = [
      {
        title: "Outdoor Patient Management System",
        issuedOn: "July 23, 2024",
        url: "https://opms.innologybd.com/",
        description:
          "This project is a final project for the Postgraduate Diploma in Information and Communication Technology course. It aims to handle patient and doctor scheduling fees and hospital information easily in one place. However, this is not a production-ready application, resulting in its simplicity.",
      },
    ];
  
    return (
      <>
      <section id="qualifications-accomplishments" className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Professional Qualification & Accomplishments
        </h2>
        <div className="space-y-8">
          {/* Professional Qualification Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Professional Qualification</h3>
            {qualifications.map((qualification, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg border mb-6"
              >
                <h4 className="text-xl font-semibold">
                  {qualification.certification}
                </h4>
                <p>
                  <strong>Institute:</strong> {qualification.institute}
                </p>
                <p>
                  <strong>Location:</strong> {qualification.location}
                </p>
                <p>
                  <strong>From:</strong> {qualification.from} |{" "}
                  <strong>To:</strong> {qualification.to}
                </p>
              </div>
            ))}
          </div>
  
          {/* Accomplishments Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Accomplishments</h3>
            {accomplishments.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg border"
              >
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p>
                  <strong>Issued On:</strong> {project.issuedOn}
                </p>
                <p>
                  <strong>URL:</strong>{" "}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {project.url}
                  </a>
                </p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    );
  }
  
  export default QualificationsAndAccomplishments;  