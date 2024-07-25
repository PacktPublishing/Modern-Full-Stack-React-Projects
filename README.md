# Modern Full-Stack React Projects

<a href="https://www.packtpub.com/product/modern-full-stack-react-projects/9781837637959"><img src="https://content.packt.com/B19385/cover_image_small.jpg" alt="" height="256px" align="right"></a>

This is the code repository for [Modern Full-Stack React Projects](https://www.packtpub.com/product/modern-full-stack-react-projects/9781837637959), published by Packt.

**Build, maintain, and deploy modern web apps using MongoDB, Express, React, and Node.js**

## What is this book about?
Understanding full-stack development is vital as companies aim to bridge the gap between frontend and backend operations. Recent trends show deeper integration between the two, opening numerous possibilities for building real-world web applications, through server-side technologies like Node.js, Express, and MongoDB.
	
This book covers the following exciting features:
* Implement backend services using Express and MongoDB, and unit-test them with Jest
* Deploy full-stack web apps using Docker, set up CI/CD and end-to-end tests using Playwright
* Build an application with authentication using JSON Web Tokens (JWT)
* Create a GraphQL backend and integrate it with a frontend interface using Apollo Client
* Build a chat app based on event-driven architecture using Socket.IO
* Facilitate Search Engine Optimization (SEO) by implementing server-side rendering
* Using Next.js, an enterprise-ready full-stack web application framework

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1837637954) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, `ch1` for Chapter 1.

The code will look like the following:
```
export const getPostById = async (postId) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/
posts/${postId}`)
  return await res.json()
}
```

**Following is what you need for this book:**

This book is for frontend developers, JavaScript engineers, and React developers who possess a solid understanding of JavaScript and React concepts. Specifically designed for those with limited experience in the development, creation, integration, and deployment of backend and full-stack systems, this book will equip you with the necessary skills to create high-quality web applications.

With the following software and hardware list you can run all code files present in the book (Chapter 1-20).

## Software and Hardware List

| Chapter  | Software required                  | OS required                   |
| -------- | -----------------------------------| ------------------------------|            
| 1-20     | Node.js v20.10.0                   | Windows, macOS, or Linux      |  
| 1-20     | Git v2.43.0                        | Windows, macOS, or Linux      |
| 1-20     | Visual Studio Code v1.84.2         | Windows, macOS, or Linux      |
| 1-20     | Docker v24.0.6                     | Windows, macOS, or Linux      |
| 1-20     | Docker Desktop v4.25.2             | Windows, macOS, or Linux      |
| 1-20     | MongoDB Shell v2.1.0               | Windows, macOS, or Linux      |


## Cloning the repository

To run the examples, please first clone the repository, as follows:

```
git clone https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects
```

## Running examples

After cloning, you can run the examples by going to the corresponding folder and following the steps in the `README.md` file there.

For example, to run the example code for Chapter 1, first go to the `ch1/` folder, by executing:

```
cd ch1/
```

Then follow the **Install** and **Start** steps, as explained in the corresponding `README.md` file for each chapter.

## Chapters

- [Chapter 1, Preparing For Full-Stack Development](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch1)
- [Chapter 2, Getting to Know Node.js and MongoDB](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch2)
- [Chapter 3, Implementing a Backend Using Express, Mongoose ODM and Jest](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch3)
- [Chapter 4, Integrating a Frontend Using React and TanStack Query](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch4)
- [Chapter 5, Deploying the Application with Docker and CI/CD](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch5)
- [Chapter 6, Adding Authentication with JWT](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch6)
- [Chapter 7, Improving the Load Time Using Server-Side Rendering](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch7)
- [Chapter 8, Making Sure Customers Find You with Search Engine Optimization](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch8)
- [Chapter 9, Implementing End-To-End Tests Using Playwright](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch9)
- [Chapter 10, Aggregating and Visualizing Statistics Using MongoDB and Victory](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch10)
- [Chapter 11, Building a Backend with a GraphQL API](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch11)
- [Chapter 12, Interfacing with GraphQL on the Frontend Using Apollo Client](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch12)
- [Chapter 13, Building an Event-Based Backend Using Express and Socket.IO](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch13)
- [Chapter 14, Creating a Frontend to Consume and Send Events](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch14)
- [Chapter 15, Adding Persistence to Socket.IO Using MongoDB](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch15)
- [Chapter 16, Getting Started with Next.js](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch16)
- [Chapter 17, Introducing React Server Components](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch17)
- [Chapter 18, Advanced Next.js Concepts & Optimizations](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch18)
- [Chapter 19, Deploying a Next.js App](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch19)
- Chapter 20, Diving Deeper Into Full-Stack Development (no code examples)



## Related products <Other books you may enjoy>
* Learn React Hooks [[Packt]](https://www.packtpub.com/product/learn-react-hooks/9781838641443) [[Amazon]](https://www.amazon.com/dp/1838641440)

* Micro State Management with React Hooks [[Packt]](https://www.packtpub.com/product/micro-state-management-with-react-hooks/9781801812375) [[Amazon]](https://www.amazon.com/dp/1801812373)

## Errata
* Page 66, Under 'Defining test cases for list posts' section **Edit the src/services/posts.js file** _should be_ **Edit the src/__tests__/posts.test.js file**

## Get to Know the Author
**Daniel Bugl**
is a CEO, Software Architect and Full Stack Developer for his company TouchLay, developing a platform for interactive presentations. He also consults large multinational enterprises on the development and integration of React frontends with various backend systems, including the integration of legacy systems, and helps out with the setup and development of such projects. He has a bachelor&rsquo;s degree in business informatics and a master&rsquo;s degree in data science.
