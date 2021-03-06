class Start extends React.Component {
	render() {
		return (
			<div className="main-content home">

			</div>
		);
	}
}


class Home extends React.Component {
	render() {
		return (
			<div className="main-content home">
				<h2>Front End Course Directory</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em>course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>
			</div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>"The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses."</p>
			</div>
		);
	}
}

class Teachers extends React.Component {
  constructor (props){
    super(props);
    this.teachers = [
      {
        name: 'Angie McAngular',
        cont: 'Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!',
        src: 'img/angie.png'
      },
      {
        name: 'NodeStradamus',
        cont: "NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps",
        src: 'img/nodestradamus.png'
      },
      {
        name: "Geo 'Lo' Cation",
        cont: "Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.",
        src: 'img/geo.png'
      },
      {
        name: "Ecma Scriptnstuff",
        cont: "Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.",
        src: 'img/ecma.png'
      },
      {
        name: 'Jay Query',
        cont: "Jay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher.",
        src: 'img/jay.png'
      },
      {
        name: 'Json Babel',
        cont: "All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.",
        src: 'img/json.png'
      },
    ]
  };
  render(){
    const teachers = this.teachers.map((teacher,index)=>{
      return (
        <li className="teacher" key={index}>
          <img className="teacher-img" src={teacher.src}/>
          <h3>{teacher.name}</h3>
          <p>{teacher.cont}</p>
        </li>
      );
    });
    return (
      <div className="main-content">
        <h2>Teachers</h2>
        <ul className="group">{teachers}</ul>
      </div>
    )
  }
}

class Courses extends React.Component {
  constructor (props) {
      super(props);
      this.html = [
          {
              img: "img/img1-1.png",
              course: "How to Make a Website",
              text: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."
          },
          {
              img: "img/img1-2.png",
              course: "HTML forms",
              text: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis."
          },
          {
              img: "img/img1-3.png",
              course: "HTML Video and Audio",
              text: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text."
          },
          {
              img: "img/img1-4.png",
              course: "SVG Basics",
              text: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density."
          },
          {
              img: "img/img1-5.png",
              course: "Responsive Imagenes",
              text: "Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible."
          },
          {
              img: "img/img1-6.png",
              course: "Introduction to HTML and CSS",
              text: "Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like."
          },
      ]
      
      this.css = [
          {
              img: "img/img2-1.png",
              course: "CSS Basics",
              text: "CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites."
          },
          {
              img: "img/img2-2.png",
              course: "CSS Selectors",
              text: "In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements."
          },
          {
              img: "img/img2-3.png",
              course: "Responsive Layouts",
              text: "Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design."
          },
          {
              img: "img/img2-4.png",
              course: "CSS Flex Layouts",
              text: "Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!"
          },
          {
              img: "img/img2-5.png",
              course: "CSS Transitions and Transforms",
              text: "CSS transitions and transforms can create simple animations that enhance user interactions in websites and apps. In this course, you'll build an interactive image gallery using CSS transitions and transforms."
          },
          {
              img: "img/img2-6.png",
              course: "Bootrap 4 Basics",
              text: "Learn to use Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time."
          },
      ]
      
      this.js = [
          {
              img: "img/img3-1.png",
              course: "JavaScript Basics",
              text: "JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language."
          },
          {
              img: "img/img3-2.png",
              course: "JavaScript Loops, Arrays and Objects",
              text: "Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items."
          },
          {
              img: "img/img3-3.png",
              course: "jQuery Basics",
              text: "jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on."
          },
          {
              img: "img/img3-4.png",
              course: "AJAX Basics",
              text: "AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server."
          },
          {
              img: "img/img3-5.png",
              course: "Interactive Web Pages with JavaScript",
              text: "In this course we’ll create a to-do list application using JavaScript alone, without using any third party libraries. You’ll get to grips with manipulating and traversing the DOM and adding event handlers to web page elements. The things that you can do with JavaScript are always increasing and this course will give you a solid footing going forward."
          },
          {
              img: "img/img3-6.png",
              course: "Node.js Basics",
              text: "In this course we will create a command line application to retrieve user's profile information from the Treehouse website. We'll be writing our application in JavaScript to run on the Node.js platform."
          },
      ]
  }
  render() {
      const coursesList = (items) => {
          return items .map((item, index) => {
              return (
                      <li className='course' key={index}>
                          <img className='course-img' src={item.img} alt=""/>
                          <div>
                              <h3>{item.course}</h3>
                              <p>{item.text}</p>
                          </div>
                      </li>
                  );
              });
      }
      const {route} = this.props;
      let list = null;
      let css, js, htmlList

      switch (route) {
          case 'css':
              list = coursesList(this.css);
              css = 'active';
              break;
          case 'javascript':
              list = coursesList(this.js);
              js = 'active';
              break;
          default:
              list = coursesList(this.html);
              htmlList = 'active';
              break;
      }
      return (
          <div className="main-content courses">
              <div className="group">
                  <h2>Courses</h2>
                  <ul className="course-nav">
                      <li><a href='#/courses/html' className={htmlList}>HTML</a></li>
                      <li><a href='#/courses/css' className={css}>CSS</a></li>
                      <li><a href='#/courses/javascript' className={js}>JavaScript</a></li>
                  </ul>

              </div>
              <div>
                  <ul>
                      {list}
                  </ul>
              </div>
          </div>

      );
  }
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          route: window.location.hash.substr(1),
      };
  }
  componentDidMount() {
      window.addEventListener('hashchange', () => {
          console.log(window.location.hash.substr(1));

          this.setState({
              route: window.location.hash.substr(1),
          });
      });
  }
  render() {
      let Child;
      let classHome, classAbout, classTeachers, classCourses;

      let propsForRepos = null;
      switch (this.state.route) {
          case '/home':
            Child = Home;
            classHome = 'active';
          break;
          case '/about':
              Child = About;
              classAbout = 'active';
              break;
          case '/teachers':
              Child = Teachers;
              classTeachers = 'active';
              break;
          case '/courses':
              Child = Courses;
              classCourses = 'active';
              break;
          case '/courses/html':
              Child = Courses;
              propsForRepos = 'html';
              classCourses = 'active';
              break;
          case '/courses/css':
              Child = Courses;
              propsForRepos = 'css';
              classCourses = 'active';
              break;
          case '/courses/javascript':
              Child = Courses;
              propsForRepos = 'javascript';
              classCourses = 'active';
              break;
          default:
              Child = Start;
      }
      return (
          <div data-reactroot className='container'>
              <header>
                  <span className='icn-logo'>
                      <img src="img/logo.PNG"/>
                  </span>
                  <div>
                      <ul className='main-nav'>
                          <li>
                              <a className={classHome} href="#/home">Home</a>
                          </li>
                          <li>
                              <a className={classAbout} href="#/about">About</a>
                          </li>
                          <li>
                              <a className={classTeachers} href="#/teachers">Teachers</a>
                          </li>
                          <li>
                              <a className={classCourses} href="#/courses">Courses</a>
                          </li>
                      </ul>
                  </div>
              </header>
              <div>
                  {
                      propsForRepos ?
                          <Child route={propsForRepos} />
                          :
                          <Child />
                  }
              </div>
          </div>
      );
  }


}

ReactDOM.render(<App />, 
  document.getElementById('container'));