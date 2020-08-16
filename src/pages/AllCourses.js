import React from "react";
import data from "../data/courses";
import BigCourse from "../components/BigCourse";

const AllCourses = () => {
  return (
    <div className="w-full flex justify-start items-start flex-row-reverse flex-wrap">
      {data.map((course) => {
        return <BigCourse key={course.id} data={course} />;
      })}
    </div>
  );
};

export default AllCourses;
