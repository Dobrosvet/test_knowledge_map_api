import { GraphQLResolveInfo } from 'graphql';
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Animal: ResolverTypeWrapper<Animal>;
  AnimalPlatform: ResolverTypeWrapper<AnimalPlatform>;
  Author: ResolverTypeWrapper<Author>;
  Block: ResolverTypeWrapper<Block>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DataHandler: ResolverTypeWrapper<DataHandler>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Journal: ResolverTypeWrapper<Journal>;
  Link: ResolverTypeWrapper<Link>;
  Query: ResolverTypeWrapper<{}>;
  Source: ResolverTypeWrapper<Source>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Text: ResolverTypeWrapper<Text>;
  Translation: ResolverTypeWrapper<Translation>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Animal: Animal;
  AnimalPlatform: AnimalPlatform;
  Author: Author;
  Block: Block;
  Boolean: Scalars['Boolean']['output'];
  DataHandler: DataHandler;
  Int: Scalars['Int']['output'];
  Journal: Journal;
  Link: Link;
  Query: {};
  Source: Source;
  String: Scalars['String']['output'];
  Text: Text;
  Translation: Translation;
};

export type AnimalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Animal'] = ResolversParentTypes['Animal']> = {
  animalPlatform?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnimalPlatform']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameLatin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnimalPlatformResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnimalPlatform'] = ResolversParentTypes['AnimalPlatform']> = {
  animal?: Resolver<Maybe<ResolversTypes['Animal']>, ParentType, ContextType>;
  animalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  regxPatterns?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  translationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dataHandlers?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataHandler']>>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ocrid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType>;
  textId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = {
  dependency?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modelItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usage?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataHandlerResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataHandler'] = ResolversParentTypes['DataHandler']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  journal?: Resolver<Maybe<ResolversTypes['Journal']>, ParentType, ContextType>;
  journalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['Source']>, ParentType, ContextType>;
  sourceBase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourcePayload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType>;
  textId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JournalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Journal'] = ResolversParentTypes['Journal']> = {
  dataHandlers?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataHandler']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<Array<Maybe<ResolversTypes['Text']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = {
  dependency?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  dependencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usage?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  usageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  animalPlatforms?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnimalPlatform']>>>, ParentType, ContextType>;
  animals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Animal']>>>, ParentType, ContextType>;
  authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType>;
  dataHandlers?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataHandler']>>>, ParentType, ContextType>;
  journals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Journal']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['Source']>>>, ParentType, ContextType>;
  texts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Text']>>>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Translation']>>>, ParentType, ContextType>;
};

export type SourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Source'] = ResolversParentTypes['Source']> = {
  base?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dataHandlers?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataHandler']>>>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType>;
  textId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextResolvers<ContextType = any, ParentType extends ResolversParentTypes['Text'] = ResolversParentTypes['Text']> = {
  abstract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  contentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dataHandlers?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataHandler']>>>, ParentType, ContextType>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  journal?: Resolver<Maybe<ResolversTypes['Journal']>, ParentType, ContextType>;
  journalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pmcid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pmid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pubAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['Source']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  titleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Translation'] = ResolversParentTypes['Translation']> = {
  animalPlatform?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnimalPlatform']>>>, ParentType, ContextType>;
  contentText?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType>;
  eng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  engAutoTranslated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rusAutoTranslated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  titleText?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Animal?: AnimalResolvers<ContextType>;
  AnimalPlatform?: AnimalPlatformResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  DataHandler?: DataHandlerResolvers<ContextType>;
  Journal?: JournalResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Source?: SourceResolvers<ContextType>;
  Text?: TextResolvers<ContextType>;
  Translation?: TranslationResolvers<ContextType>;
};

