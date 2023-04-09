import React from "react";
import HomeSub from "./HomeSub";

const fill_data = [
    {
        title : 'View Your Employees',
        desc : 'Our platform offers a comprehensive employee management system that allows you to access all the information you need about your employees, including their personal details, job performance, and work history. From here, you can view their profiles, track their progress, and monitor their productivity.',
        btntxt : 'View ',
        imgSrc : 'https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?size=626&ext=jpg&ga=GA1.2.1038485658.1678857021&semt=robertav1_2_sidr',
        path: "/explore"
    },
    {
        title : 'Enroll Employee',
        desc : "The Enroll Employee Home Page is designed to provide a user-friendly and efficient way for new employees to enroll in the company's benefits program. The page is typically divided into sections that guide employees through the enrollment process.",
        btntxt : 'Enroll Check',
        imgSrc : 'https://img.freepik.com/free-vector/verified-concept-illustration_114360-5138.jpg?size=626&ext=jpg&ga=GA1.2.1038485658.1678857021&semt=robertav1_2_sidr',
        path: "/enroll"
    },
    {
        title : 'Recommended Employees',
        desc : "Our platform is designed to help you discover top talent that aligns with your company's needs and values. We use advanced algorithms to match job descriptions with candidate profiles, and our database is constantly updated with new and highly qualified candidates.",
        btntxt : 'Explore',
        imgSrc : 'https://img.freepik.com/premium-vector/feedback-conceptclients-choosing-satisfaction-rating-leaving-positive-review_183665-453.jpg?size=626&ext=jpg&ga=GA1.1.1038485658.1678857021&semt=robertav1_2_sidr',
        path: "/explore"
    },
    {
        title : 'Report Employee',
        desc : "Our Employee Report feature provides you with an in-depth analysis of your employees' performance, productivity, and engagement. With this powerful tool, you can gain valuable insights into your workforce, identify areas for improvement, and make data-driven decisions that will benefit your organization.",
        btntxt : 'Report',
        imgSrc : 'https://img.freepik.com/free-vector/remote-business-management-concept-with-businessman-holding-tablet-showing-analytics-graphs-connected_1284-44658.jpg?size=626&ext=jpg&ga=GA1.2.1038485658.1678857021&semt=robertav1_2_sidr',
        path: "/report"
    }
]

function Home() {
  return (
    <div className="pt-20 flex justify-center flex-col items-center">
      
      {
        fill_data.map((value, index) => {
            return (
                <>
                <HomeSub title = {value.title} desc = {value.desc} btntxt={value.btntxt} path={value.path} imgSrc={value.imgSrc} align={index % 2 === 0}/>
                <hr class="w-[20%] h-[0.5px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400 border-dotted"></hr>
                </>
            )
        })
      }
      {/* // view my Employees
        // verify your Employees
        // Explore recommened employees
        // Report any employee */}
    </div>
  );
}

export default Home;
