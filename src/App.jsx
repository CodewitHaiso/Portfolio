import './css/all.min.css'
import './css/fontawesome.min.css'
import './Naeem.css'
import './function.js'
import PIC from '../assets/Pictures/Poster.png'

function Naeem() {
  return (
    <> 
          {/* Header/navbar section */}

          <div className='Header'>
            <input type="checkbox" id='check' />
            <label For="check" className='checkbtn'>
              <i className='fas fa-bars'></i>
            </label>
            <a href="#" className='logo'>HAISO</a>
            <nav className='navbar active'>
              <a href="#Home">HOME</a>
              <a href="#About" >ABOUT</a>
              <a href="#Gallery" >GALLERY</a>
              <a href="#skill"  >SKILLS</a>
              <a href="#Contact"  >CONTACT</a>

              {/* Social Icon for Mobile Responsive navbar */}

            <div className='Social-icon'>
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-discord"></i></a>
            </div>
            </nav>
          </div>

          {/* Home section */}
          <section id='Home'></section>
          <section className='Home'>
            <img src={PIC} alt="Poster" className='Photo' />
            <h1>'NAEEM'</h1>
            <span>HASSAN</span>
            <h2>'REACT WEB DEVELOPER'</h2>
            <button className='butt1'>DOWNLOAD VC </button>
            <button className='butt2'>ABOUT ME</button>
          </section>

             {/* About section */}
          <section id='About'></section>
          <div className='About' >
             <div className='div1'>
                <img src="./assets/Pictures/picture.png" alt="Side-pic"  className='p-20 mt-10'/>
             </div>
             <div className='content'> 
                <h1>MY BIOGRAPHY</h1>
                  <h2>'PAST TO PRESENT JOURNEY'</h2>
                  <p>I’m Naeem Hassan, a passionate frontend developer specializing in React. My journey into web development started with self-paced learning in HTML, CSS, and JavaScript, and I’ve since advanced my skills through hands-on experience and professional training. I completed an Advanced Frontend Development course at PNY Academy, where I gained expertise in creating modern, responsive, and interactive web applications.<br></br><br></br>
                     I work with cutting-edge tools like Vite, Tailwind CSS, and Node.js to build seamless digital experiences. Whether it’s crafting visually appealing designs or optimizing performance, I’m committed to delivering clean, maintainable code that meets both user needs and technical excellence. My focus is on creating intuitive and scalable solutions that bridge creativity with functionality. Always eager to learn, I stay up to date with emerging technologies to enhance my skill set and deliver innovative results.</p>
                  <div></div>
             </div>
          </div>
          
              {/* Gallery section */}
          <section id='Gallery'></section>
          <section className='Gallery'>
          <h1>PORTFOLIO</h1>
          <h2><i class="fa-regular fa-image pr-3 text-[#FFA500]"></i>GALLERY</h2>
          <div className='SEC-HEADING'>
            <h1>Shaping the Web, One Line at a Time</h1>
            <p>As a developer, I’ve come to realize that creating for the web is not just about coding; it’s about crafting experiences that matter. Every line of code is a step forward in turning imagination into design and functionality. From building simple HTML structures to enhancing them with CSS and adding interactivity with JavaScript, each piece plays a crucial role in shaping the digital landscape.  
              My journey started with self-paced learning, where I explored the basics of HTML, CSS, and JavaScript. Over time, I advanced my skills through formal training, diving deeper into React and Node.js. These tools and technologies have become the core of my development process, allowing me to create dynamic, responsive, and user-friendly applications.  
              "Shaping the Web, One Line at a Time" perfectly describes the process of web development. It’s about solving problems, designing intuitive interfaces, and constantly evolving to meet the needs of users. Every project, no matter how big or small, begins with a single idea—brought to life one line of code at a time.  
                As I continue to grow as a developer, this mindset reminds me that progress happens incrementally. Each line of code contributes to a larger vision, and with dedication and creativity, I strive to make an impact in the ever-evolving world of web development.</p>
          </div>
               <div className='SEC-PIC'>
               <div className='G-P1'> <img src="./assets/Pictures/P1.jpg" alt="PIC1" /></div>
               <div className='G-P2'> <img src="./assets/Pictures/P2.jpg" alt="PIC2" /></div>
               <div className='G-P3'> <img src="./assets/Pictures/P3.jpg" alt="PIC3" /></div>
               <div className='G-P4'> <img src="./assets/Pictures/P4.jpg" alt="PIC4" /></div>
               <div className='G-P5'> <img src="./assets/Pictures/P5.jpg" alt="PIC5" /></div>
               <div className='G-P6'> <img src="./assets/Pictures/P6.jpg" alt="PIC6" /></div>
               </div>
          </section>
          
            
          {/* Skills Section */}
          <section id='skill'></section>
          <div className='Skills' >    {/* PARENT DIV */}
              
              {/* FIRST CHILD (CARD SECTION) */}

            <div className='S-cont'>

              <div className='card1'>
               <h1>O1</h1>
               <h2>WEB DEVELOPER</h2>
               <p>A web developer designs and builds websites and web applications using technologies like HTML, CSS, JavaScript, and React. They may also work with Node.js for backend development. Their focus is on creating responsive, user-friendly, and high-performance websites, constantly adapting to new technologies and industry trends.</p>
              </div>
              <div className='card2'>
              <h1>O2</h1>
               <h2>FLUID DESIGN'S</h2>
               <p>A web developer designs and builds websites and web applications using technologies like HTML, CSS, JavaScript, and React. They may also work with Node.js for backend development. Their focus is on creating responsive, user-friendly, and high-performance websites, constantly adapting to new technologies and industry trends.</p>
              </div>
              <div className='card3'>
              <h1>O3</h1>
               <h2>REACT DEVELOPER</h2>
               <p>A web developer designs and builds websites and web applications using technologies like HTML, CSS, JavaScript, and React. They may also work with Node.js for backend development. Their focus is on creating responsive, user-friendly, and high-performance websites, constantly adapting to new technologies and industry trends.</p>
              </div>
              <div className='card4'>
              <h1>O4</h1>
               <h2>UI/UX DEVELOPER</h2>
               <p>A web developer designs and builds websites and web applications using technologies like HTML, CSS, JavaScript, and React. They may also work with Node.js for backend development. Their focus is on creating responsive, user-friendly, and high-performance websites, constantly adapting to new technologies and industry trends.</p>
              </div>
            </div>

            {/* SECOND CHILD (PARA SECTION) */}
            <div className='S-para'>
              <h1>THING'S THAT I CAN DO</h1>
              <h2><i class="fa-solid fa-gear pr-3 text-[#FFA500]"></i>SKILLS</h2>
              <img src="./assets/Pictures/Skills poster.png" alt="S-Poster" className='HELLO' />
            </div>
          </div>

          {/* CONTACT SECTION */}
          <section id='Contact'></section>
             <section className='Contact' >
              <div className='C-DIV1'>
               <h1>DO YOU HAVE WORK?<br></br>REACH OUT TO ME!</h1>
               <p>Looking for someone reliable to get your work done? I’m here to help! If you have any tasks or projects, don’t hesitate to reach out.</p>
               <p> <i className="fa-solid fa-house pr-10 pt-10 text-[#FFA500] text-xl"></i> Somewhere in Lahore, Punjab, Pakistan</p>
               <p><i class="fa-solid fa-phone pr-10 pt-10 text-[#FFA500] text-xl"></i>+92 315-0186818 , +92 312-3456712</p>
               <p><i class="fa-solid fa-envelope pr-10 pt-10 text-[#FFA500] text-xl"></i>Example123@gmail.com</p>
               <div className='pt-20 pl-20 flex icon'>
              <a href="" className='responsive'><i class="fa-brands fa-facebook text-4xl pr-10 text-[#FFA500] hover:text-white  transition duration-600 ease-in "></i></a>
              <a href="" className='responsive'><i class="fa-brands fa-instagram text-4xl pr-10 text-[#FFA500] hover:text-white  transition duration-600 ease-in"></i></a>
              <a href="" className='responsive'><i class="fa-brands fa-linkedin text-4xl pr-10 text-[#FFA500] hover:text-white  transition duration-600 ease-in"></i></a>
              <a href="" className='responsive'><i class="fa-brands fa-github text-4xl pr-10 text-[#FFA500] hover:text-white  transition duration-600 ease-in"></i></a>
              <a href="" className='responsive'><i class="fa-brands fa-discord text-4xl pr-10 text-[#FFA500] hover:text-white  transition duration-600 ease-in"></i></a>
            </div>
              </div>
              <div className='C-DIV2'>
                                           {/* FORM  */}
                <form className='form'>
                     <label>Name</label>
                     <input type="text" required className='p-3 mb-10 mt-3 text-[#FFA500] w-full ' placeholder='Your Name..'/>
                     <label>Email</label>
                     <input type="text" required className='p-3  mb-10 mt-3  text-[#FFA500] w-full ' placeholder='example1@gmail.com..'/>
                     <label>Phone</label>
                     <input type="tel" required className='p-3  mb-10 mt-3 text-[#FFA500] w-full ' placeholder='0321...'  />
                     <button className='send-butt'>SEND</button>
                </form>
              </div>
             </section>
             {/* FOOTER SECTION */}

             <footer className='footer'>
                 <h1>HAISO</h1>
                  <p> © Copyright 2024 codewitHaiso.All right reserved.</p>
             </footer>
          
       </>   
  )
}

export default Naeem


