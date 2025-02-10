import { customAxios } from "./helper";

export async function sendEmail(emailData) {
  const result = (await customAxios.post(`/email/send`, emailData)).data;
  return result;
}

export async function sendEmailWithFile(emailData) {
  try {
    // const formData = new FormData();
    // formData.append('request', JSON.stringify(emailData));
    // formData.append('file', emailData.file);

    const formData = new FormData();
    const blob = new Blob([emailData.file], {
      type: "application/octet-stream",
    });
    formData.append(
      "request",
      new Blob([JSON.stringify(emailData)], { type: "application/json" })
    );
    formData.append("file", blob);

    const result = await customAxios.post(`/email/send-with-file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
      },
    });

    return result.data;
  } catch (error) {
    console.error("Error sending email with file:", error);
    throw error;
  }
}
