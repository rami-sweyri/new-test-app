import React from "react";
import Video from "../components/Video";

const About = () => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-between items-start">
      <div className="md:w-7/12 w-full about-video relative">
        <Video />
      </div>
      <div className="md:w-5/12 w-full flex flex-col items-end">
        <div className="about-info overflow-y-auto about-scroll">
          <p className="text-right text-white font-normal">
            هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل
            وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة
            في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال
            التواصل الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام
            الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة
            “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى
            إنها مستشارة في مجال التواصل الاجتماعي.
          </p>
        </div>
        <div className="about-experience mb-48">
          <p className="font-bold text-right text-white text-experience">
            الخبرات
          </p>
          <div
            className="w-full flex flex-wrap justify-start flex-row-reverse items-center"
            style={{ marginTop: 24 }}
          >
            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">تطوير الأعمال</p>
              </div>
            </div>

            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">المشاريع الصغيرة</p>
              </div>
            </div>

            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">مشاركة العملاء</p>
              </div>
            </div>
            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">الإعلام</p>
              </div>
            </div>
            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">التحدث أمام الجمهور</p>
              </div>
            </div>
            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">الدعاية والإعلان</p>
              </div>
            </div>
            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">ريادة الأعمال</p>
              </div>
            </div>
            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">القيادة</p>
              </div>
            </div>
            <div className="w-6/12 md:w-auto about-experience-title">
              <div className="flex justify-center items-center about-experience-title-dir">
                <p className="font-normal">التسويق الرقمي</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
