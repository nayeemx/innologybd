function Experience() {
    const experiences = [
      {
        company: 'Baishakhi Fashion',
        role: 'IT Manager',
        duration: 'September 2023 - Present',
        achievements: [
          'Designed a robust website for internal data management.',
          'Improved IT infrastructure for uninterrupted operations.',
          'Conducted training sessions on IT tools for employees.',
        ],
      },
      {
        company: 'Aftab Bahumukhi Firm Ltd.',
        role: 'Data Integrity Specialist',
        duration: 'January 2015 - August 2023',
        achievements: [
          'Improved data entry accuracy by streamlining reporting processes.',
          'Provided IT support, significantly reducing downtime.',
          'Maintained databases for project tracking.',
        ],
      },
      {
        company: 'Amra Shobai Foundation',
        role: 'Teacher (Internship)',
        duration: 'October 2019 - November 2019',
        expertise: 'Social Work (0.1 yr)',
        achievements: [
          'Taught underprivileged students and organized educational resources.',
          'Identified poor kids and documented student data for evaluation.',
          'Maintained parent-student communication to improve engagement.',
        ],
      },
    ];
  
    return (
      <section id="experience" className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-500">{exp.company} | {exp.duration}</p>
              {exp.expertise && (
                <p className="text-gray-700 mt-2">Area of Expertise: {exp.expertise}</p>
              )}
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {exp.achievements.map((achieve, idx) => (
                  <li key={idx}>{achieve}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Experience;  