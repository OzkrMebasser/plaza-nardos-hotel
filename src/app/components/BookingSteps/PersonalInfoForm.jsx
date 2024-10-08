"use client";
import { useFormik } from "formik";
import { useLanguage } from "@/app/contexts/LanguageContext";
import * as Yup from "yup";

const PersonalInfoForm = ({ onSubmit, onBack, data }) => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();
  // console.log(data)

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      request: "",
      country: "",
      city: "",
    },
    // validationSchema: Yup.object({
    //   name: Yup.string().required("First Name is required."),
    //   lastName: Yup.string().required("Last Name is required."),
    //   email: Yup.string()
    //     .email("Invalid email address")
    //     .required("Email is required."),
    //   phone: Yup.string().required("Phone number is required."),
    //   city: Yup.string().required("City is required."),
    //   country: Yup.string().required("Country is required."),
    //   request: Yup.string().optional("Message is optional"),
    // }),
    validationSchema: Yup.object({
      name: Yup.string().required(`${translations.validationsYup.firstName}`),
      lastName: Yup.string().required(
        `${translations.validationsYup.lastName}`
      ),
      email: Yup.string()
        .email(`${translations.validationsYup.invalidEmail}`)
        .required(`${translations.validationsYup.emailRequired}`),
      phone: Yup.string().required(`${translations.validationsYup.phone}`),
      city: Yup.string().required(`${translations.validationsYup.city}`),
      country: Yup.string().required(`${translations.validationsYup.country}`),
      request: Yup.string().optional(`${translations.validationsYup.request}`),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <div className="relative">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder={translations.bookingInfo.firstName}
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder={translations.bookingInfo.lastName}
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder={translations.bookingInfo.email}
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder={translations.bookingInfo.phone}
            type="tel"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder={translations.bookingInfo.country}
            name="country"
            id="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.country && formik.errors.country ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.country}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder={translations.bookingInfo.city}
            name="city"
            id="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.city}
            </div>
          ) : null}
        </div>
      </div>

      <div className="my-4 relative">
        <textarea
          placeholder={translations.bookingInfo.message}
          name="request"
          id="request"
          value={formik.values.request}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
        {/* {formik.touched.request && formik.errors.request ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.request}</div>
        ) : null} */}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-300 text-[#2b3163] font-semibold rounded"
        >
          {translations.bookingInfo.back}
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#2b3163] text-white rounded"
        >
          {translations.bookingInfo.next}
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
