import React from 'react';
import Layout from '../Layout';
import './InternshipPage.scss';

const InternshipPage = () => {
  return (
    <Layout title="INTERNSHIP">
      <div className="internshippage">
        <div className="content-box">
          <h2>Introduction</h2>
          <p>
            STMicroElectronics is a semiconductor company based in Switzerland, with a facility in Calamba, Laguna. As a Test Systems Intern, my main tasks included monitoring tester machines and automating processes to improve efficiency. One key project was developing a watchdog program to ensure the proper functioning of the SPADe program, crucial for the testing process. This internship allowed me to apply my skills in software engineering, programming, and automation, enhancing the testing workflow and system reliability.
          </p>
        </div>
        <div className="content-box">
          <h2>Output: SpWatch</h2>
          <p>
            SpWatch is a watchdog program that monitors the MGUI and SPADe programs, essential for the testing process. It ensures continuous operation by checking if both programs are running and automatically launching SPADe if it's not active while MGUI is running. Developed using Python, SpWatch automated the manual process of monitoring tester machines, reducing workload and minimizing errors, leading to a more efficient and reliable testing workflow.
          </p>
        </div>
        <div className="content-box">
          <h2>Conclusion</h2>
          <p>
            During my internship at STMicroElectronics, I learned the differences between schoolwork and real job responsibilities, emphasizing self-reliance and effective communication. Working with limited resources, like using Python under constraints, taught me creative problem-solving. This experience applied my academic knowledge to real-world scenarios, preparing me for future tech roles and underscoring the importance of adaptability and continuous learning.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default InternshipPage;
