import React from "react";
import reactDOM from "react-dom";
import Udemy from "./udemy";
import python1 from './images/python1.jpg'
import python2 from './images/python2.jpg'
import python3 from './images/python3.jpg'
import python4 from './images/python4.jpg'
import python5 from './images/python5.jpg'
import './style.css'
import Blocks from "./udemy";



function App(){
    return(
        <div className="bro">
        <div className="begin"><b>Expand your career opportunities with Python</b></div>
        <div className="demo">
          Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language.
          Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning.
          You’ll learn how to build everything from games to sites to apps.
          Choose from a range of courses that will appeal to
        </div>
        <button><div><b>Explore Python</b></div></button>
        <div className="container">
        <Blocks  image={python1}
          author="jagesh"
          link={'https://www.udemy.com/course/complete-python-bootcamp/'}
          description="2022 Complete Python Bootcamp From Z.."
          price={"₹455"}
          deleted={"₹1358"}
          
          
        />
        <Blocks image={python2}
          author="himalaya"
          link="https://www.udemy.com/course/the-complete-cpp-developer-course/"
          description="Machine Learning A-Z™: Hands-On Python & R I.."
          price={"₹455"}
          deleted={"₹1358"}
          seller={"Bestseller"}
        />
        <Blocks image={python3}
          author="yogesh"
          link="https://www.udemy.com/course/100-days-of-code/"
          description="Learn Python Programming Masterclass"
          price={"₹455"}
          deleted={"₹1358"}
          
        />
        <Blocks image={python4}
          author="gaurav"
          link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          description="100 Days of Code: The Complete Python Pro Bo.."
          price={"₹455"}
          deleted={"₹1358"}
          seller={"Bestseller"}
        />

        <Blocks image={python5}
          author="saurav"
          link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          description="100 Days of Code: The Complete Python Pro Bo.."
          price={"₹455"}
          deleted={"₹1358"}
          seller={"Bestseller"}
        />
      </div>
      </div>
    )
}

reactDOM.render(
    <App><div>Udemy</div></App>,
    document.getElementById('root')
)
