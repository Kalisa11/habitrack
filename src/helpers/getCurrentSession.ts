import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const getCurrentSession = () => {
  getServerSession(authOptions)
    .then((session) => {
      if (!session?.user?.email) {
        return null;
      }
      return session;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export default getCurrentSession;
