import { CollectionQuery } from "@/src/gql/graphql";

type TreeData = CollectionQuery["collection"][0] & {
  children: TreeData[];
};
