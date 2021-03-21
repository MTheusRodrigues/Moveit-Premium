import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectToDatabase from "../../../utils/database";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: 
      'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days   
  }, 
  debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    session: async (session: any, user: any, ...rest: any) => {
      const textToReplace = "https://avatars.githubusercontent.com/u/";
      const remainingText = user.picture.replace(textToReplace, "");
      session.userId = remainingText.split("?")[0];
      const db = await connectToDatabase(process.env.MONGODB_URI);
      const collection = db.collection("users");
      const searchedUser = await collection.findOne({ userId: session.userId });
      if (!searchedUser) {
          await collection.insertOne({
          userId: session.userId,
          name: user.name,
          image: user.picture,
          challengesCompleted: 0,
          level: 1,
          currentExperience: 0,
          totalExperience: 0,
          registeredAt: new Date(),
        });
      }
      return Promise.resolve(session);
    },
  },
};
export default (req: any, res: any) => NextAuth(req, res, options);
