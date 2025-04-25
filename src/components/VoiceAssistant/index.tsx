import "regenerator-runtime/runtime";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { toast } from "react-toastify";
import "regenerator-runtime/runtime";

import { useCourses } from "../../core/services/api/course/useCourses";
import { useTimeOut } from "../../hooks/useTimeOut";
import { CourseInterface } from "../../types/course";

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);

  const navigate = useNavigate();
  const { data } = useCourses(0, 1000);
  const timeOut = useTimeOut();

  const commands = [
    {
      command: "برو به صفحه دوره‌ها",
      callback: () => {
        handleNavigation("/courses", "صفحه دوره ها");
      },
    },
    {
      command: "برو به صفحه اخبار",
      callback: () => {
        handleNavigation("/news", "صفحه اخبار");
      },
    },
    {
      command: "برو به صفحه مقالات",
      callback: () => {
        handleNavigation("/news", "صفحه مقالات");
      },
    },
    {
      command: "برو به صفحه ورود",
      callback: () => {
        handleNavigation("/login", "صفحه ورود");
      },
    },
    {
      command: "برو به صفحه فراموشی رمز عبور",
      callback: () => {
        navigate("/forget-password");
      },
    },
    {
      command: "برو به دوره *",
      callback: (courseName: string) => handleCourseNavigation(courseName),
    },
    {
      command: "ریست",
      callback: () => {
        resetTranscript();
      },
    },
  ];

  const { resetTranscript } = useSpeechRecognition({
    commands,
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleVoiceAssistantClick = () => {
    setIsListening(!isListening);

    if (!isListening)
      SpeechRecognition.startListening({ continuous: true, language: "fa-IR" });
    else SpeechRecognition.startListening();
  };

  const handleNavigation = (path: string, pageName: string) => {
    toast.info(`در حال رفتن به ${pageName}`, { toastId: "pageNavigation" });
    timeOut(() => {
      navigate(path);
      toast.dismiss("pageNavigation");
    }, 800);
  };

  const handleCourseNavigation = (courseName: string) => {
    const matchingCourse = data?.courseFilterDtos.find(
      (course: CourseInterface) =>
        course.title.trim().includes(courseName.trim())
    );

    if (matchingCourse) {
      handleNavigation(
        `/courses/${matchingCourse.courseId}`,
        matchingCourse.title
      );
    } else {
      toast.error("دوره ی مورد نظر پیدا نشد !");
    }
  };

  return (
    <div>
      <div
        className={`toggle-button fixed top-[50%] right-9 bg-primary rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center z-10 ${
          isListening ? "listening animate-pulse" : ""
        }`}
        onClick={handleVoiceAssistantClick}
      >
        <KeyboardVoiceIcon className="fill-white transition-transform duration-100 ease-in-out" />
      </div>
    </div>
  );
};

export default VoiceAssistant;
