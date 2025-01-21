function TrainingSummary() {
  const trainingData = [
    {
      title: "Video Editing",
      topic: "Video Editing, animation, audio editing",
      institute: "UY LAB Bangladesh",
      country: "Bangladesh",
      location: "Dhaka",
      year: 2021,
      duration: "0.4 months",
    },
    {
      title: "CIW",
      topic: "Web Design",
      institute: "New Horizons, Dhaka",
      country: "Bangladesh",
      location: "Dhaka",
      year: 2013,
      duration: "0.4 months",
    },
    {
      title: "PHP and MySQL",
      topic: "PHP, Codeigniter, Web Host, E-Commerce",
      institute: "New Horizons, Dhaka",
      country: "Bangladesh",
      location: "Dhaka",
      year: 2013,
      duration: "0.5 months",
    },
  ];

  return (
    <>
      <section id="training-summary" className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Training Summary
        </h2>
        <div className="space-y-6">
          {trainingData.map((training, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold">{training.title}</h3>
              <p>
                <strong>Topic:</strong> {training.topic}
              </p>
              <p>
                <strong>Institute:</strong> {training.institute}
              </p>
              <p>
                <strong>Country:</strong> {training.country} |{" "}
                <strong>Location:</strong> {training.location}
              </p>
              <p>
                <strong>Year:</strong> {training.year} |{" "}
                <strong>Duration:</strong> {training.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="references" className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">References</h2>
        <div className="bg-white shadow-md p-6 rounded-lg border">
          <h3 className="text-xl font-semibold">Md. Habibur Rahman</h3>
          <p>
            <strong>Relation:</strong> Academic
          </p>
          <p>
            <strong>Position:</strong> Proctor, Peoples University of Bangladesh
            | Chairman, Sociology and Social Work Department (SSW)
          </p>
          <p>
            <strong>Mobile No:</strong> 01712051203
          </p>
        </div>
      </section>
    </>
  );
}

export default TrainingSummary;