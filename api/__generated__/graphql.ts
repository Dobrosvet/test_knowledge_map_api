/* eslint-disable */
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
};

export type Animal = {
  __typename?: 'Animal';
  animalPlatform?: Maybe<Array<Maybe<AnimalPlatform>>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameLatin?: Maybe<Scalars['String']['output']>;
};

export type AnimalPlatform = {
  __typename?: 'AnimalPlatform';
  animal?: Maybe<Animal>;
  animalId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Translation>;
  regxPatterns?: Maybe<Scalars['String']['output']>;
  translationId?: Maybe<Scalars['String']['output']>;
};

export type Author = {
  __typename?: 'Author';
  createdAt?: Maybe<Scalars['String']['output']>;
  dataHandlers?: Maybe<Array<Maybe<DataHandler>>>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  ocrid?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Text>;
  textId?: Maybe<Scalars['String']['output']>;
};

export type Block = {
  __typename?: 'Block';
  dependency?: Maybe<Array<Maybe<Link>>>;
  id?: Maybe<Scalars['String']['output']>;
  modelItemId?: Maybe<Scalars['String']['output']>;
  modelName?: Maybe<Scalars['String']['output']>;
  usage?: Maybe<Array<Maybe<Link>>>;
};

export type DataHandler = {
  __typename?: 'DataHandler';
  author?: Maybe<Author>;
  authorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  journal?: Maybe<Journal>;
  journalId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Source>;
  sourceBase?: Maybe<Scalars['String']['output']>;
  sourcePayload?: Maybe<Scalars['String']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Text>;
  textId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type Journal = {
  __typename?: 'Journal';
  dataHandlers?: Maybe<Array<Maybe<DataHandler>>>;
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Array<Maybe<Text>>>;
};

export type Link = {
  __typename?: 'Link';
  dependency?: Maybe<Block>;
  dependencyId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  usage?: Maybe<Block>;
  usageId?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  animalPlatforms?: Maybe<Array<Maybe<AnimalPlatform>>>;
  animals?: Maybe<Array<Maybe<Animal>>>;
  authors?: Maybe<Array<Maybe<Author>>>;
  blocks?: Maybe<Array<Maybe<Block>>>;
  dataHandlers?: Maybe<Array<Maybe<DataHandler>>>;
  journals?: Maybe<Array<Maybe<Journal>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  sources?: Maybe<Array<Maybe<Source>>>;
  texts?: Maybe<Array<Maybe<Text>>>;
  translations?: Maybe<Array<Maybe<Translation>>>;
};

export type Source = {
  __typename?: 'Source';
  base?: Maybe<Scalars['String']['output']>;
  dataHandlers?: Maybe<Array<Maybe<DataHandler>>>;
  payload?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Text>;
  textId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Text = {
  __typename?: 'Text';
  abstract?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Array<Maybe<Author>>>;
  content?: Maybe<Translation>;
  contentId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  dataHandlers?: Maybe<Array<Maybe<DataHandler>>>;
  doi?: Maybe<Scalars['String']['output']>;
  filepath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  journal?: Maybe<Journal>;
  journalId?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  license?: Maybe<Scalars['String']['output']>;
  pmcid?: Maybe<Scalars['Int']['output']>;
  pmid?: Maybe<Scalars['Int']['output']>;
  pubAt?: Maybe<Scalars['String']['output']>;
  sources?: Maybe<Array<Maybe<Source>>>;
  title?: Maybe<Translation>;
  titleId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Translation = {
  __typename?: 'Translation';
  animalPlatform?: Maybe<Array<Maybe<AnimalPlatform>>>;
  contentText?: Maybe<Text>;
  eng?: Maybe<Scalars['String']['output']>;
  engAutoTranslated?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  rus?: Maybe<Scalars['String']['output']>;
  rusAutoTranslated?: Maybe<Scalars['Boolean']['output']>;
  titleText?: Maybe<Text>;
};
