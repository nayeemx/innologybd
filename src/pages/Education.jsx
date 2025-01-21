function Education() {
  const education = [
    {
      degree: 'Master of Social Science (MSS)',
      institution: "The People's University of Bangladesh",
      major: 'Sociology and Social Work',
      year: '2021',
      result: 'CGPA 3.88/4.0',
    },
    {
      degree: 'Bachelor of Social Science (BSS)',
      institution: "The People's University of Bangladesh",
      major: 'Sociology and Social Work',
      year: '2020',
      result: 'CGPA 3.4/4.0',
    },
    // {
    //   degree: 'Higher Secondary Certificate (HSC)',
    //   institution: 'Siddheswary Higher Secondary School',
    //   major: 'Science',
    //   year: '2012',
    //   result: 'CGPA 2.0/5.0',
    // },
    // {
    //   degree: 'Secondary School Certificate (SSC)',
    //   institution: 'Siddheswary Higher Secondary School',
    //   major: 'Science',
    //   year: '2010',
    //   result: 'CGPA 3.06/5.0',
    // },
  ];

  return (
    <>
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-500">{edu.institution}</p>
            <p className="text-gray-700">
              Major: {edu.major} | Year: {edu.year} | Result: {edu.result}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Education;