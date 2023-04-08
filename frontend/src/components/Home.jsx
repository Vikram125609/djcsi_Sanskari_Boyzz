import React from "react";
import HomeSub from "./HomeSub";

const fill_data = [
    {
        title : 'View Your Employees',
        desc : 'View all the employees currently working on your franchise',
        btntxt : 'View ',
        imgSrc : 'https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?size=626&ext=jpg&ga=GA1.2.1038485658.1678857021&semt=robertav1_2_sidr'
    },
    {
        title : 'Verify Your Employees',
        desc : 'View a list of all your current employees and verify, report them',
        btntxt : 'Users',
        imgSrc : 'https://img.freepik.com/free-vector/verified-concept-illustration_114360-5138.jpg?size=626&ext=jpg&ga=GA1.2.1038485658.1678857021&semt=robertav1_2_sidr'
    },
    {
        title : 'Recommended Employees',
        desc : 'Explore and find the best employees for your organisation',
        btntxt : 'Explore',
        imgSrc : 'https://img.freepik.com/premium-vector/feedback-conceptclients-choosing-satisfaction-rating-leaving-positive-review_183665-453.jpg?size=626&ext=jpg&ga=GA1.1.1038485658.1678857021&semt=robertav1_2_sidr'
    },
    {
        title : 'Report Employee',
        desc : 'Report and Flag an employee for their nuances',
        btntxt : 'Report',
        imgSrc : 'https://img.freepik.com/free-vector/remote-business-management-concept-with-businessman-holding-tablet-showing-analytics-graphs-connected_1284-44658.jpg?size=626&ext=jpg&ga=GA1.2.1038485658.1678857021&semt=robertav1_2_sidr'
    }
]

function Home() {
  return (
    <div className="pt-20 flex justify-center flex-col items-center">
      
      {
        fill_data.map((value, index) => {
            return (
                <>
                <HomeSub title = {value.title} desc = {value.desc} btntxt={value.btntxt} imgSrc={value.imgSrc} align={index % 2 === 0}/>
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
