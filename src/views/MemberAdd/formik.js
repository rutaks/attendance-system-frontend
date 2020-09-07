import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  fellowshipId: "",
  branchId: "",
  location: "",
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().when("phoneNumber", {
    is: (phoneNumber) => phoneNumber === undefined || phoneNumber.length < 1,
    then: Yup.string()
      .email("Email is not valid")
      .required("Either Email or Phone Field is required"),
  }),
  fellowshipId: Yup.string(),
  branchId: Yup.string(),
  location: Yup.string(),
  nationalId: Yup.string(),
  passportId: Yup.string(),
});
