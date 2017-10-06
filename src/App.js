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
				CurrentList = ['How to Make a CSS', 'HTML CSS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			case 'javascript':
				CurrentList = ['How to Make a JS', 'HTML JS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			default: //'html'
				CurrentList = ['How to Make a Website', 'HTML Forms'].map( (item, index) => {
					return <li key = {index}> {item} </li>
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
			//<a href="#/about">About</a>
			//<li><a href='#/repos/html'>HTML</a></li>
			console.log ( window.location.hash.substr(1) );

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