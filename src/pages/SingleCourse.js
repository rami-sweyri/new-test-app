import React from "react";
import Video from "../components/Video";
import data from "../data/broadcast";
import Course from "../components/Course";

const SingleCourse = () => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-between items-start">
      <div className="md:w-5/12 w-full flex flex-col items-end md:hidden">
        <div className="about-info overflow-y-auto about-scroll">
          <p
            className="text-right text-white font-bold"
            style={{ fontSize: 16, lineHeight: 1, marginBottom: 33 }}
          >
            وصف الكورس
          </p>
          <p
            className="text-right text-white font-normal"
            style={{ fontSize: 13, lineHeight: 2 }}
          >
            لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى
            ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
            المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
            مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل
            أو مرجع شكلي لهذه الأحرف.
          </p>
        </div>
      </div>
      <div className="md:w-7/12 w-full about-video relative">
        <Video />
      </div>
      <div className="md:w-5/12 w-full flex-col items-end">
        <div className="about-info overflow-y-auto about-scroll md:flex hidden  flex-col">
          <p
            className="text-right text-white font-bold"
            style={{ fontSize: 29, lineHeight: 1, marginBottom: 24 }}
          >
            وصف الكورس
          </p>
          <p
            className="text-right text-white font-normal"
            style={{ fontSize: 20, lineHeight: 1.7 }}
          >
            لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى
            ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
            المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص
            مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل
            أو مرجع شكلي لهذه الأحرف.
          </p>
        </div>
        <div className="w-full">
          <div
            className="flex justify-start items-start flex-wrap flex-row-reverse store"
            style={{ marginTop: 51 }}
          >
            {data.map((course, i) => {
              return i < 6 ? <Course key={course.id} data={course} /> : null;
            })}
          </div>
          <p
            className="text-right font-bold courses-tit "
            style={{
              color: "#a7b5d2",
              lineHeight: 1.16,
              marginTop: 74,
            }}
          >
            صناعة محتوي تسويقي فعال
          </p>
          <div
            className="flex justify-start items-start flex-wrap flex-row-reverse store"
            style={{ marginTop: 51 }}
          >
            {data.map((course, i) => {
              return i < 3 ? <Course key={course.id} data={course} /> : null;
            })}
          </div>

          <p
            className="text-right font-bold courses-tit "
            style={{
              color: "#a7b5d2",
              lineHeight: 1.16,
              marginTop: 74,
            }}
          >
            صناعة محتوي تسويقي فعال
          </p>
          <div
            className="flex justify-start items-start flex-wrap flex-row-reverse store"
            style={{ marginTop: 51 }}
          >
            {data.map((course, i) => {
              return i > 2 && i < 6 ? (
                <Course key={course.id} data={course} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
