/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: any; output: any; }
  /** BigInt value */
  GraphQLBigInt: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Represents NULL values */
  Void: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename?: 'Mutation';
  auth_login?: Maybe<Auth_Tokens>;
  auth_logout?: Maybe<Scalars['Boolean']['output']>;
  auth_password_request?: Maybe<Scalars['Boolean']['output']>;
  auth_password_reset?: Maybe<Scalars['Boolean']['output']>;
  auth_refresh?: Maybe<Auth_Tokens>;
  users_invite_accept?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_disable?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_enable?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_generate?: Maybe<Users_Me_Tfa_Generate_Data>;
  utils_cache_clear?: Maybe<Scalars['Void']['output']>;
  utils_hash_generate?: Maybe<Scalars['String']['output']>;
  utils_hash_verify?: Maybe<Scalars['Boolean']['output']>;
  utils_random_string?: Maybe<Scalars['String']['output']>;
  utils_revert?: Maybe<Scalars['Boolean']['output']>;
  utils_sort?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAuth_LoginArgs = {
  email: Scalars['String']['input'];
  mode?: InputMaybe<Auth_Mode>;
  otp?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationAuth_LogoutArgs = {
  refresh_token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAuth_Password_RequestArgs = {
  email: Scalars['String']['input'];
  reset_url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAuth_Password_ResetArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationAuth_RefreshArgs = {
  mode?: InputMaybe<Auth_Mode>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUsers_Invite_AcceptArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationUsers_Me_Tfa_DisableArgs = {
  otp: Scalars['String']['input'];
};


export type MutationUsers_Me_Tfa_EnableArgs = {
  otp: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};


export type MutationUsers_Me_Tfa_GenerateArgs = {
  password: Scalars['String']['input'];
};


export type MutationUtils_Hash_GenerateArgs = {
  string: Scalars['String']['input'];
};


export type MutationUtils_Hash_VerifyArgs = {
  hash: Scalars['String']['input'];
  string: Scalars['String']['input'];
};


export type MutationUtils_Random_StringArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUtils_RevertArgs = {
  revision: Scalars['ID']['input'];
};


export type MutationUtils_SortArgs = {
  collection: Scalars['String']['input'];
  item: Scalars['ID']['input'];
  to: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  files: Array<Directus_Files>;
  files_aggregated: Array<Directus_Files_Aggregated>;
  files_by_id?: Maybe<Directus_Files>;
  server_health?: Maybe<Scalars['JSON']['output']>;
  server_info?: Maybe<Server_Info>;
  server_ping?: Maybe<Scalars['String']['output']>;
  server_specs_graphql?: Maybe<Scalars['String']['output']>;
  server_specs_oas?: Maybe<Scalars['JSON']['output']>;
  users: Array<Directus_Users>;
  users_aggregated: Array<Directus_Users_Aggregated>;
  users_by_id?: Maybe<Directus_Users>;
  users_me?: Maybe<Directus_Users>;
};


export type QueryFilesArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFiles_AggregatedArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFiles_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServer_Specs_GraphqlArgs = {
  scope?: InputMaybe<Graphql_Sdl_Scope>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsers_AggregatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsers_By_IdArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  directus_users_mutated?: Maybe<Directus_Users_Mutated>;
  scrapy_mutated?: Maybe<Scrapy_Mutated>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionScrapy_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export enum Auth_Mode {
  Cookie = 'cookie',
  Json = 'json'
}

export type Auth_Tokens = {
  __typename?: 'auth_tokens';
  access_token?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['GraphQLBigInt']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  id: Scalars['ID']['output'];
};

export type Directus_Files_Aggregated = {
  __typename?: 'directus_files_aggregated';
  count?: Maybe<Directus_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Files_Aggregated_Count = {
  __typename?: 'directus_files_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users = {
  __typename?: 'directus_users';
  title?: Maybe<Scalars['String']['output']>;
};

export type Directus_Users_Aggregated = {
  __typename?: 'directus_users_aggregated';
  count?: Maybe<Directus_Users_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Directus_Users_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Directus_Users_Aggregated_Count = {
  __typename?: 'directus_users_aggregated_count';
  title?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  __typename?: 'directus_users_mutated';
  data?: Maybe<Directus_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export enum Graphql_Sdl_Scope {
  Items = 'items',
  System = 'system'
}

export type Scrapy = {
  __typename?: 'scrapy';
  addStart?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_func?: Maybe<Datetime_Functions>;
  desc?: Maybe<Scalars['JSON']['output']>;
  desc_func?: Maybe<Count_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  forks?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  prs?: Maybe<Scalars['String']['output']>;
  pushes?: Maybe<Scalars['String']['output']>;
  stars?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
};

export type Scrapy_Mutated = {
  __typename?: 'scrapy_mutated';
  data?: Maybe<Scrapy>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Server_Info = {
  __typename?: 'server_info';
  project?: Maybe<Server_Info_Project>;
};

export type Server_Info_Project = {
  __typename?: 'server_info_project';
  custom_css?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_logo?: Maybe<Scalars['String']['output']>;
  project_name?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<Scalars['String']['output']>;
  public_foreground?: Maybe<Scalars['String']['output']>;
  public_note?: Maybe<Scalars['String']['output']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Users_Me_Tfa_Generate_Data = {
  __typename?: 'users_me_tfa_generate_data';
  otpauth_url?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
};

export type Auth_LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Auth_LoginMutation = { __typename?: 'Mutation', auth_login?: { __typename?: 'auth_tokens', refresh_token?: string | null, expires?: any | null, access_token?: string | null } | null };


export const Auth_LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Auth_login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh_token"}},{"kind":"Field","name":{"kind":"Name","value":"expires"}},{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<Auth_LoginMutation, Auth_LoginMutationVariables>;