import * as Yup from "yup";

let EMAIL_REGX: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

const formSchema = Yup.object().shape({
  company: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  industry: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  about: Yup.string()
    .min(30, "Too short")
    .max(500, "Too long!")
    .required("Required"),
  projects: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(60, "Too Long!")
        .required("Required"),
      contact: Yup.string()
        .matches(EMAIL_REGX, "Invalid email address")
        .required("Required"),
    })
  ),
});

export default formSchema;
