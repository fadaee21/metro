// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = process.env.TOKEN;
  if (req.method === "POST") {
    console.log(token)
    try {
      const serverResponse = { status: 201, token }; //TODO:making request to server
      if (serverResponse.status === 201 && serverResponse.token) {
        res.setHeader(
          "set-Cookie",
          cookie.serialize("login_token", serverResponse.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 2,
            path: "/",
            sameSite:"strict"
          })
        );
        res.status(201).json({ message: "success login" });
      }
    } catch (error) {
      console.log(error); //TODO:create a function for error handling
    }
  } else {
    res.setHeader("allow", ["post"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
