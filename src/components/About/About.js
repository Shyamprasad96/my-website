import React from "react";
import './About.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const About=()=> {
  return (
    <div className="about">
    <div class="carousel-wrapper">
    <Carousel infiniteLoop autoPlay showArrows={true} >
        <div className="about-items">
        <p className="img1-text">
            Pursuing masters at Arizona State University
          </p>
            <img className="as" src="./images/About6.jpg"alt="image1"/>
        </div>
        <div className="about-items">
        <p className="img2-text">
          Graduating at May 2023
          </p>
            <img src="./images/About2.jpg" alt="image2" />
        </div>
        <div className="about-items">
        <p className="img3-text">
            Majors in Software Engineering
          </p>
            <img src="./images/About1.jpg" alt="image3"/>
        </div>
    </Carousel>
</div>
<section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
         <center><h2>About</h2></center>
         <p class="fst-italic">
         I'm Shyam, a highly motivated and skilled computer science graduate from Arizona State University, specializing in Full Stack, Python Programming, AWS, Data Science, Data Structures, and Algorithms.With my strong technical background and passion for problem-solving, I am dedicated to delivering top-notch solutions to complex technical challenges.
            </p>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <img src="./images/Shyam.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Masters Student</h3>
            <p class="fst-italic">
              Working as a Teaching Assistant for Python Programming, Data Structure for undergraduate Students.Seeking a challenging and rewarding opportunity with a software engineering firm to use and grow my coding skills.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>Jul 6th, 1999</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.dailyleetcode.com</span></li>
                 
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Arizona, USA</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>yanamaddishyamprasad@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>LinkedIn:</strong> <span>ShyamPrasadYanamaddi</span></li>
                </ul>
              </div>
            </div>
            <p class="fst-italic">
            If you're looking for someone with a sharp mind and a proven track record of success, then look no further. I am eager to connect with you and explore ways in which I can help drive your company's growth and success.
            </p>
          </div>
        </div>
       
      </div>
    </section>

    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
          <p className="fst-italic">As a developer, I had the ability to learn quickly. Able to pickup any technology in the industry. Skills that I build from my experience and personal projects.</p>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">React <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div><progress class="progress is-dark is-roundered is-small" value="80" max="100"></progress></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Python <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div><progress class="progress is-dark is-roundered is-small" value="100" max="100"></progress></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Data Science & ML <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div><progress class="progress is-dark is-roundered is-small" value="95" max="100"></progress></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">HTML & CSS <i class="val">98%</i></span>
              <div class="progress-bar-wrap">
                <div><progress class="progress is-dark is-roundered is-small" value="98" max="100"></progress></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">NodeJs,Flask <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div><progress class="progress is-dark is-roundered is-small" value="85" max="100"></progress></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">SQL & NoSQL <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div><progress class="progress is-dark is-roundered is-small" value="90" max="100"></progress></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">AWS <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div><progress class="progress is-dark is-roundered is-small" value="75" max="100"></progress></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Algorithms <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div><progress class="progress is-dark is-roundered is-small" value="90" max="100"></progress></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
          {/* <p class="fst-italic">Recent Software Developer M.S. Graduate from Arizona State University, Arizona seeking an entry-level position to apply passion and exceptional aptitude for developing creative software to enhance an organization’s productivity and efficiency to help meet goals and initiatives.</p> */}
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Brandon Johnson</h4>
              <p class="fst-italic"><em>Recent Software Developer M.S. Graduate from Arizona State University, Seeking an entry-level position to apply passion and exceptional aptitude for developing creative software to enhance an organization’s productivity and efficiency to help meet goals and initiatives.</em></p>
              <ul>
                <li>Tempe,Arizona, Az</li>
                <li>(480) 791-4967</li>
                <li>www.dailyleetcode.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Master of Computer Science</h4>
              <h5>2021 - 2023</h5>
              <p class="fst-italic"><em>Arizona State University, Tempe, AZ</em></p>
              <p class="fst-italic">Coursework: Software Agile Principles, Data Science, Data Mining, Advanced Data Structures, Software Engineering.
</p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Technology</h4>
              <h5>2016 - 2020</h5>
              <p class="fst-italic"><em>Andhra University, India</em></p>
              <p class="fst-italic">Coursework: Data Structures, Object-Oriented Programming, Java, and Python Programming.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Experience</h3>
            <div class="resume-item">
              <h4>Teaching Assistant</h4>
              <h5>2022 - Present</h5>
              <p class="fst-italic"><em>ASU, Tempe, AZ </em></p>
              <ul>
                <li>Tutoring OOPS and Data Structures, communicating problem solving approaches and
techniques to students, securing improvement by 40% on class average.</li>
                <li>Performing algorithms and practiced multiple Kaggle datasets using Machine Learning
Algorithms. Evaluated and analyzed project tasks ,completing it in 2 month head of time. </li>
                <li>Every week, Will conduct zoom sessions with studenst to clarify the dobuts.</li>
                
              </ul>
            </div>
            <div class="resume-item">
              <h4>Software Engineer Intern</h4>
              <h5>2021</h5>
              <p class="fst-italic"><em>Nervone, India</em></p>
              <ul>
                <li>Experienced AGILE methodology for software development process, part of crossfunctional team for application development with 12 members from technology.</li>
                <li>Ensure applications security and ability to interact with multiple APIs and database upgrades.</li>
                <li>Coordinate with the web development team to design user Interfaces for client websites
using HTML, JavaScript ant React.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>


</div>
  );
}

export default About;