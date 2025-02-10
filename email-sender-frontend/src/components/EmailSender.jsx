import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { sendEmail, sendEmailWithFile } from "../services/email.service";
import JoditEditor from "jodit-react";

function EmailSender() {

 

  const handleFileChange = (event) => {
    const selectedfile = event.target.files[0];
    
    setEmailData({
      ...emailData,
      file: selectedfile,
    })
};

  const editor = useRef(null);
  const [content, setContent] = useState("");

  function handleClear(event) {
    event.preventDefault();
    setEmailData({
      to: "",
      subject: "",
      message: "",
    });
    setContent(" ");
  }

  // const config = {
  //   readonly: false,
  //   placeholder: "Type here...",
  // };

  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);

  function handleFieldChange(event, name) {
    setEmailData({ ...emailData, [name]: event.target.value });
  }

  async function handleSumit(event) {
    event.preventDefault();
    if (
      emailData.to == "" ||
      emailData.subject == "" ||
      emailData.message == ""
    ) {
      toast.error("Invalid, fields !!");
      return;
    }

    // Send email using api

    try {
      setLoading(true);

      if(emailData.file == null){
        await sendEmail(emailData);
      }else{
        await sendEmailWithFile(emailData);
      }
     
      // toast.loading("Sending Email...")
      toast.success("Email Sent Successfully");
      setEmailData({
        to: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
    console.log(emailData);
  }

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="email_card md:w-1/2 w-full mx-4 md:mx-0 -mt-10 p-4 rounded-lg bg-purple-50 dark:bg-slate-800 dark:text-white dark:border-none border shadow">
          <h1 className="text-gray-900 dark:text-white text-3xl">
            Email Sender
          </h1>
          <p className="text-gray-500 dark:text-white">
            Lorem ipsum doloent eius quam aliquid ut earum!
          </p>

          <form action="" onSubmit={handleSumit} onReset={handleClear}>
            {/* to */}
            <div className="input_field mt-4">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                to
              </label>
              <input
                value={emailData.to}
                onChange={(event) => handleFieldChange(event, "to")}
                type="text"
                id="large-input"
                placeholder="Enter here"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* subject */}
            <div className="input_field mt-4">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                value={emailData.subject}
                onChange={(event) => handleFieldChange(event, "subject")}
                type="text"
                id="large-input"
                placeholder="Enter here"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="form_field mt-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <JoditEditor
                ref={editor}
                value={content}
                //  onBlur={(content) => setContent(content)}
                onChange={(event) => {
                  // console.log(editor.current.value);
                  setEmailData({
                    ...emailData,
                    message: editor.current.value,
                  });
                }}
              />
            </div>
            {/* File Uploder */}
            <div className="file_Upload mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="large_size"
              >
                Large file input
              </label>
              <input
                className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="large_size"
                type="file" 
                onChange={handleFileChange}        
              />
            </div>
            {/* Loader */}
            {loading && (
              <div className="loader flex-col gap-2 items-center flex justify-center mt-4 ">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                <h1>Sending...</h1>
              </div>
            )}
            {/* Buttons */}
            <div className="button_container flex justify-center gap-2 mt-4">
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Send Email
              </button>
              <button
                type="reset"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmailSender;
