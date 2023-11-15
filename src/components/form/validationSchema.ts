import * as Yup from "yup";

const FormSchema = Yup.object().shape({
    company: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    industry: Yup.string()
      .min(2, "Too Short!")
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
          .max(30, "Too Long!")
          .required("Required"),
        contact: Yup.string()
          .min(2, "Too Short!")
          .max(30, "Too Long!")
          .required("Required"),
        start_date: Yup.string().required("Required"),
        end_date: Yup.string().required("Required"),
      })
    ),
  });
  
  export default FormSchema
  