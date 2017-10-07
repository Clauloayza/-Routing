import React, { Component } from 'react';
import './App.css';

class Home extends Component {
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

class About extends Component {
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

class Teachers extends Component {
	render() {
		return (
			<div className="main-content container">
				<h2>Teachers</h2>
				<ul className="group">
					<li className="teacher">
						<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png" alt="teacher"/>
						<h3>Angie McAngular</h3>
						<p>"Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!"</p>
					</li>
					<li className="teacher">
						<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png" alt="teacher"/>
						<h3>NodeStradamus</h3>
						<p>"'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps."</p>
					</li>
					<li className="teacher">
						<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png" alt="teacher"/>
						<h3>Geo 'Lo' Cation</h3>
						<p>"Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code."</p>
					</li>
					<li className="teacher">
						<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png" alt="teacher"/>
						<h3>Ecma Scriptnstuff</h3>
						<p>"Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript."</p>
					</li>
					<li className="teacher">
						<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png" alt="teacher"/>
						<h3>Jay Query</h3>
						<p>"Jay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher."</p>
					</li>
					<li className="teacher">
						<img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png" alt="teacher"/>
						<h3>Json Babel</h3>
						<p>"All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job."</p>
					</li>
				</ul>
			</div>
		);
	}
}

class Courses extends Component {
	render() {
		const {route} = this.props;
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = [{
					img:'./img/img2-1.png',
					title: 'CSS Basics',
					text:'CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you’ll soon learn, CSS is one of the core technologies for designing and building websites.'
				},{
					img:'./img/img2-2.png',
					title:'CSS Selectors',
					text:'In this course, were going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, were able to target elements based on their attributes, position in the HTML document, even their relation to other elements.'
				},{
					img:'./img/img2-3.png',
					title:'Responsive Layouts',
					text: 'Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, were going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design.'		
				},{
					img:'./img/img2-4.png',
					title:'CSS Flexbox Layout',
					text:'Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!'
				},{
					img:'./img/img2-5.png',
					title:'CSS Transitions and Transforms',
					text:'CSS transitions and transforms can create simple animations that enhance user interactions in websites and apps. In this course, youll build an interactive image gallery using CSS transitions and transforms.'	
				},{
					img:'./img/img2-6.png',
					title:'Bootstrap 4 Basics',
					text:'Learn to use Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time.'
				}].map( (item, index) => {
					return <dt key = {index} className="row">
							<div className="col-lg-3">
								<img className="img" src={item.img} alt="" width="60%"/>
							</div>
							<div className="col-lg-9">
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
				 		</dt>
			});
				break;
			case 'javascript':
				CurrentList = [{
					img:'./img/img3-1.png',
					title: 'JavaScript Basics',
					text:'JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, youll find JavaScript at every stage of a web site and web application. In this course, youll learn the fundamental programming concepts and syntax of the JavaScript programming language.'
				},{
					img:'./img/img3-2.png',
					title:'JavaScript Loops, Arrays and Objects',
					text:'Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items.'
				},{
					img:'./img/img3-3.png',
					title:'jQuery Basics',
					text: 'jQuery Basics covers why youd want to use jQuery, what it is and how to include it in your projects. Youll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on.'		
				},{
					img:'./img/img3-4.png',
					title:'AJAX Basics',
					text:'AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web sites visitors. In this course, youll learn how AJAX works and how you can use JavaScript to communicate with a web server.'
				},{
					img:'./img/img3-5.png',
					title:'Interactive Web Pages with JavaScript',
					text:'In this course we’ll create a to-do list application using JavaScript alone, without using any third party libraries. You’ll get to grips with manipulating and traversing the DOM and adding event handlers to web page elements. The things that you can do with JavaScript are always increasing and this course will give you a solid footing going forward.'	
				},{
					img:'./img/img3-6.png',
					title:'Node.js Basics',
					text:'In this course we will create a command line application to retrieve users profile information from the Treehouse website. Well be writing our application in JavaScript to run on the Node.js platform.'
				}].map( (item, index) => {
					return <dt key = {index} className="row">
							<div className="col-lg-3">
								<img className="img" src={item.img} alt="" width="60%"/>
							</div>
							<div className="col-lg-9">
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						 </dt>

			});
				break;
			default: //'html'
				CurrentList = [{
					img:'./img/img1-1.png',
					title: 'How to Make a Website',
					text:'If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.'
				},{
					img:'./img/img1-2.png',
					title:'HTML Forms',
					text:'The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.'
				},{
					img:'./img/img1-3.png',
					title:'HTML Video and Audio',
					text: 'Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that dont require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.'		
				},{
					img:'./img/img1-4.png',
					title:'SVG Basics',
					text:'Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density.'
				},{
					img:'./img/img1-5.png',
					title:'Responsive Images',
					text:'Using the new source-set and sizes attributes, and the new picture element, its possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible.'	
				},{
					img:'./img/img1-6.png',
					title:'Introduction to HTML and CSS',
					text:'Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like.'
				}].map( (item, index) => {
					return <dt key = {index} className="row">
							<div className="col-lg-3">
								<img className="img" src={item.img} alt="" width="60%"/>
							</div>
							<div className="col-lg-9">
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						 </dt>
				});
				break;
		}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Courses</h2>
					<ul className="course-nav">
						<li><a aria-current="true" href='#/courses/html' className="active">HTML</a></li>
						<li><a aria-current="flase"  href='#/courses/css'>CSS</a></li>
						<li><a aria-current="flase" href='#/courses/javascript'>JavaScript</a></li>
					</ul>

					<ul>
						{CurrentList}
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state ={
			route: window.location.hash.substr(1)
		};
	}
	//  $(document).ready ()
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			

			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		let propsForCourses = null;
		switch (this.state.route) {
			case '/home':
				Child = Home;
				break;
			case '/about':
				Child = About;
				break;
			case '/teachers':
				Child = Teachers;
				break;
			case '/courses':
				Child = Courses;
				break;
			case '/courses/html':
				Child = Courses;
				propsForCourses = 'html';
				break;
			case '/courses/css':
				Child = Courses;
				propsForCourses = 'css';
				break;
			case '/courses/javascript':
				Child = Courses;
				propsForCourses = 'javascript';
				break;
			default:
				Child = Home;
		}
		return (
		<div>
		 <header>
            <span className="icn-logo">
				<i className="material-icons">code</i>
			</span>{' '}
              <ul className="main-nav">
                  <li>
                     <a href="#/home" aria-current="flase">HOME</a>
                  </li>{' '}
                  <li>
                     <a href="#/about" aria-current="flase">ABOUT</a>
                  </li>
				  <li>
                     <a href="#/teachers" aria-current="flase">TEACHERS</a>
                  </li>
				  <li>
                     <a href="#/courses" aria-current="flase">COURSES</a>
                  </li>
               </ul>{' '}
			   </header>
	         {
				propsForCourses?
			         <Child route = {propsForCourses} />
		         :
			         <Child />
	         }
         
		 </div>
		);
	}
}

export default App;