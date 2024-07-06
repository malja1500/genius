import { EditProfileGeneralFormFieldsInterface } from "../../../types/edit-profile/edit-profile-general-form-fields";

export const EDIT_PROFILE_GENERAL_FORM: EditProfileGeneralFormFieldsInterface[] =
  [
    {
      label: "نام",
      type: "text",
      name: "fName",
      id: "fName",
      className: "editProfileFormInput",
    },
    {
      label: "نام خانواردگی",
      type: "text",
      name: "lName",
      id: "lName",
      className: "editProfileFormInput",
    },
    {
      label: "کد ملی",
      type: "text",
      name: "nationalCode",
      id: "nationalCode",
      className: "editProfileFormInput",
    },
    {
      label: "ایمیل",
      type: "text",
      name: "email",
      id: "email",
      className: "editProfileFormInput",
    },
    {
      label: "تاریخ تولد",
      name: "birthDay",
      id: "birthDay",
      className: "editProfileFormInput",
      isDate: true,
    },
    {
      label: "شماره موبایل",
      type: "text",
      name: "phoneNumber",
      id: "phoneNumber",
      className: "editProfileFormInput",
    },
    {
      label: "محل سکونت",
      type: "text",
      name: "homeAdderess",
      id: "homeAdderess",
      className: "editProfileFormInput",
    },
    {
      label: "لینک پروفایل لینکدین",
      type: "text",
      name: "linkdinProfile",
      id: "linkdinProfile",
      className: "editProfileFormInput",
    },
    {
      label: "لینک تلگرام",
      type: "text",
      name: "telegramLink",
      id: "telegramLink",
      className: "editProfileFormInput",
    },
    {
      label: "جنسیت",
      name: "gender",
      id: "gender",
      isCheckbox: false,
      wrapperClassName:
        "editProfileGenderAndReceiveMessageEventSelectBoxWrapper mt-0",
      className: "editProfileGenderAndReceiveMessageEventSelectBox",
      as: "select",
      isGender: true,
      options: [
        {
          value: true,
          label: "آقا",
        },
        {
          value: false,
          label: "خانم",
        },
      ],
    },
    {
      label: "دریافت کردن پیام رویداد",
      as: "select",
      name: "receiveMessageEvent",
      id: "receiveMessageEvent",
      wrapperClassName:
        "editProfileGenderAndReceiveMessageEventSelectBoxWrapper",
      className: "editProfileGenderAndReceiveMessageEventSelectBox",
      isCheckbox: false,
      options: [
        {
          value: true,
          label: "فعال",
        },
        {
          value: false,
          label: "غیرفعال",
        },
      ],
    },
    {
      label: "توضیحات کاربر",
      name: "userAbout",
      id: "userAbout",
      className: "editProfileFormInput",
      as: "textarea",
    },
  ] as const;
