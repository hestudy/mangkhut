import { Users_MeQuery } from "@shadcn/gql/graphql";
import { atom } from "jotai";

const userAtom = atom<Users_MeQuery["users_me"] | null>(null);

export default userAtom;
