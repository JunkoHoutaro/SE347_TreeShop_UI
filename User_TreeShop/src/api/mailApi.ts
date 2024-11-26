// import { ResponeData } from "../redux/product/saga";

export const sendMail = async (data: {
  name: string;
  email: string;
  phone: string;
  location: string;
  nameProduct: string;
  numberProduct: number;
  subject: string;
  message: string;
}) => {
  // const respone = await fetch('http://localhost:5000/api/mail')
  //         .then((res) => res.json());
  try {
    const response = await fetch("http://localhost:5000/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
        // Add other headers as needed
      },
      body: JSON.stringify(data), // Convert the data to JSON format
    });
    return response.json();
  } catch (error) {
    console.log("mail error");
  }

};
