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
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Habit categories */
export type Category = {
  __typename?: 'category';
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  habit_categories: Array<Habit_Categories>;
  /** An aggregate relationship */
  habit_categories_aggregate: Habit_Categories_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};


/** Habit categories */
export type CategoryHabit_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Categories_Order_By>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};


/** Habit categories */
export type CategoryHabit_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Categories_Order_By>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  habit_categories?: InputMaybe<Habit_Categories_Bool_Exp>;
  habit_categories_aggregate?: InputMaybe<Habit_Categories_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  habit_categories?: InputMaybe<Habit_Categories_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  description?: InputMaybe<Order_By>;
  habit_categories_aggregate?: InputMaybe<Habit_Categories_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Category_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "habit" */
export type Habit = {
  __typename?: 'habit';
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  end_date: Scalars['timestamptz']['output'];
  /** An array relationship */
  habit_categories: Array<Habit_Categories>;
  /** An aggregate relationship */
  habit_categories_aggregate: Habit_Categories_Aggregate;
  /** An array relationship */
  habit_records: Array<Habit_Records>;
  /** An aggregate relationship */
  habit_records_aggregate: Habit_Records_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  reminders: Array<Reminders>;
  /** An aggregate relationship */
  reminders_aggregate: Reminders_Aggregate;
  start_date: Scalars['timestamp']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "habit" */
export type HabitHabit_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Categories_Order_By>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};


/** columns and relationships of "habit" */
export type HabitHabit_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Categories_Order_By>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};


/** columns and relationships of "habit" */
export type HabitHabit_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Habit_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Records_Order_By>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};


/** columns and relationships of "habit" */
export type HabitHabit_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Records_Order_By>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};


/** columns and relationships of "habit" */
export type HabitRemindersArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


/** columns and relationships of "habit" */
export type HabitReminders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};

/** aggregated selection of "habit" */
export type Habit_Aggregate = {
  __typename?: 'habit_aggregate';
  aggregate?: Maybe<Habit_Aggregate_Fields>;
  nodes: Array<Habit>;
};

export type Habit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Habit_Aggregate_Bool_Exp_Count>;
};

export type Habit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Habit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Habit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "habit" */
export type Habit_Aggregate_Fields = {
  __typename?: 'habit_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Habit_Max_Fields>;
  min?: Maybe<Habit_Min_Fields>;
};


/** aggregate fields of "habit" */
export type Habit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Habit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "habit" */
export type Habit_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Habit_Max_Order_By>;
  min?: InputMaybe<Habit_Min_Order_By>;
};

/** input type for inserting array relation for remote table "habit" */
export type Habit_Arr_Rel_Insert_Input = {
  data: Array<Habit_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Habit_On_Conflict>;
};

/** Boolean expression to filter rows from the table "habit". All fields are combined with a logical 'AND'. */
export type Habit_Bool_Exp = {
  _and?: InputMaybe<Array<Habit_Bool_Exp>>;
  _not?: InputMaybe<Habit_Bool_Exp>;
  _or?: InputMaybe<Array<Habit_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  habit_categories?: InputMaybe<Habit_Categories_Bool_Exp>;
  habit_categories_aggregate?: InputMaybe<Habit_Categories_Aggregate_Bool_Exp>;
  habit_records?: InputMaybe<Habit_Records_Bool_Exp>;
  habit_records_aggregate?: InputMaybe<Habit_Records_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  reminders?: InputMaybe<Reminders_Bool_Exp>;
  reminders_aggregate?: InputMaybe<Reminders_Aggregate_Bool_Exp>;
  start_date?: InputMaybe<Timestamp_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** columns and relationships of "habit_categories" */
export type Habit_Categories = {
  __typename?: 'habit_categories';
  /** An object relationship */
  category: Category;
  category_id: Scalars['uuid']['output'];
  /** An object relationship */
  habit: Habit;
  habit_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "habit_categories" */
export type Habit_Categories_Aggregate = {
  __typename?: 'habit_categories_aggregate';
  aggregate?: Maybe<Habit_Categories_Aggregate_Fields>;
  nodes: Array<Habit_Categories>;
};

export type Habit_Categories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Habit_Categories_Aggregate_Bool_Exp_Count>;
};

export type Habit_Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Habit_Categories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "habit_categories" */
export type Habit_Categories_Aggregate_Fields = {
  __typename?: 'habit_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Habit_Categories_Max_Fields>;
  min?: Maybe<Habit_Categories_Min_Fields>;
};


/** aggregate fields of "habit_categories" */
export type Habit_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "habit_categories" */
export type Habit_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Habit_Categories_Max_Order_By>;
  min?: InputMaybe<Habit_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "habit_categories" */
export type Habit_Categories_Arr_Rel_Insert_Input = {
  data: Array<Habit_Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Habit_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "habit_categories". All fields are combined with a logical 'AND'. */
export type Habit_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Habit_Categories_Bool_Exp>>;
  _not?: InputMaybe<Habit_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Habit_Categories_Bool_Exp>>;
  category?: InputMaybe<Category_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  habit?: InputMaybe<Habit_Bool_Exp>;
  habit_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "habit_categories" */
export enum Habit_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  HabitCategoriesPkey = 'habit_categories_pkey'
}

/** input type for inserting data into table "habit_categories" */
export type Habit_Categories_Insert_Input = {
  category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  habit?: InputMaybe<Habit_Obj_Rel_Insert_Input>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Habit_Categories_Max_Fields = {
  __typename?: 'habit_categories_max_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  habit_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "habit_categories" */
export type Habit_Categories_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Habit_Categories_Min_Fields = {
  __typename?: 'habit_categories_min_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  habit_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "habit_categories" */
export type Habit_Categories_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "habit_categories" */
export type Habit_Categories_Mutation_Response = {
  __typename?: 'habit_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Habit_Categories>;
};

/** on_conflict condition type for table "habit_categories" */
export type Habit_Categories_On_Conflict = {
  constraint: Habit_Categories_Constraint;
  update_columns?: Array<Habit_Categories_Update_Column>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "habit_categories". */
export type Habit_Categories_Order_By = {
  category?: InputMaybe<Category_Order_By>;
  category_id?: InputMaybe<Order_By>;
  habit?: InputMaybe<Habit_Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: habit_categories */
export type Habit_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "habit_categories" */
export enum Habit_Categories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "habit_categories" */
export type Habit_Categories_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "habit_categories" */
export type Habit_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Habit_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Habit_Categories_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "habit_categories" */
export enum Habit_Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  Id = 'id'
}

export type Habit_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Habit_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Habit_Categories_Bool_Exp;
};

/** unique or primary key constraints on table "habit" */
export enum Habit_Constraint {
  /** unique or primary key constraint on columns "id" */
  HabitPkey = 'habit_pkey'
}

/** input type for inserting data into table "habit" */
export type Habit_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  habit_categories?: InputMaybe<Habit_Categories_Arr_Rel_Insert_Input>;
  habit_records?: InputMaybe<Habit_Records_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reminders?: InputMaybe<Reminders_Arr_Rel_Insert_Input>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Habit_Max_Fields = {
  __typename?: 'habit_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['timestamp']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "habit" */
export type Habit_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Habit_Min_Fields = {
  __typename?: 'habit_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['timestamp']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "habit" */
export type Habit_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "habit" */
export type Habit_Mutation_Response = {
  __typename?: 'habit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Habit>;
};

/** input type for inserting object relation for remote table "habit" */
export type Habit_Obj_Rel_Insert_Input = {
  data: Habit_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Habit_On_Conflict>;
};

/** on_conflict condition type for table "habit" */
export type Habit_On_Conflict = {
  constraint: Habit_Constraint;
  update_columns?: Array<Habit_Update_Column>;
  where?: InputMaybe<Habit_Bool_Exp>;
};

/** Ordering options when selecting data from "habit". */
export type Habit_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  habit_categories_aggregate?: InputMaybe<Habit_Categories_Aggregate_Order_By>;
  habit_records_aggregate?: InputMaybe<Habit_Records_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  reminders_aggregate?: InputMaybe<Reminders_Aggregate_Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: habit */
export type Habit_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "habit_records" */
export type Habit_Records = {
  __typename?: 'habit_records';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  habit: Habit;
  habit_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  note?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  status: Status;
  status_id: Scalars['Int']['output'];
};

/** aggregated selection of "habit_records" */
export type Habit_Records_Aggregate = {
  __typename?: 'habit_records_aggregate';
  aggregate?: Maybe<Habit_Records_Aggregate_Fields>;
  nodes: Array<Habit_Records>;
};

export type Habit_Records_Aggregate_Bool_Exp = {
  count?: InputMaybe<Habit_Records_Aggregate_Bool_Exp_Count>;
};

export type Habit_Records_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Habit_Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Habit_Records_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "habit_records" */
export type Habit_Records_Aggregate_Fields = {
  __typename?: 'habit_records_aggregate_fields';
  avg?: Maybe<Habit_Records_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Habit_Records_Max_Fields>;
  min?: Maybe<Habit_Records_Min_Fields>;
  stddev?: Maybe<Habit_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Habit_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Habit_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Habit_Records_Sum_Fields>;
  var_pop?: Maybe<Habit_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Habit_Records_Var_Samp_Fields>;
  variance?: Maybe<Habit_Records_Variance_Fields>;
};


/** aggregate fields of "habit_records" */
export type Habit_Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Habit_Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "habit_records" */
export type Habit_Records_Aggregate_Order_By = {
  avg?: InputMaybe<Habit_Records_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Habit_Records_Max_Order_By>;
  min?: InputMaybe<Habit_Records_Min_Order_By>;
  stddev?: InputMaybe<Habit_Records_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Habit_Records_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Habit_Records_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Habit_Records_Sum_Order_By>;
  var_pop?: InputMaybe<Habit_Records_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Habit_Records_Var_Samp_Order_By>;
  variance?: InputMaybe<Habit_Records_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "habit_records" */
export type Habit_Records_Arr_Rel_Insert_Input = {
  data: Array<Habit_Records_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Habit_Records_On_Conflict>;
};

/** aggregate avg on columns */
export type Habit_Records_Avg_Fields = {
  __typename?: 'habit_records_avg_fields';
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "habit_records" */
export type Habit_Records_Avg_Order_By = {
  status_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "habit_records". All fields are combined with a logical 'AND'. */
export type Habit_Records_Bool_Exp = {
  _and?: InputMaybe<Array<Habit_Records_Bool_Exp>>;
  _not?: InputMaybe<Habit_Records_Bool_Exp>;
  _or?: InputMaybe<Array<Habit_Records_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  habit?: InputMaybe<Habit_Bool_Exp>;
  habit_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Status_Bool_Exp>;
  status_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "habit_records" */
export enum Habit_Records_Constraint {
  /** unique or primary key constraint on columns "id" */
  HabitRecordsPkey = 'habit_records_pkey'
}

/** input type for incrementing numeric columns in table "habit_records" */
export type Habit_Records_Inc_Input = {
  status_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "habit_records" */
export type Habit_Records_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  habit?: InputMaybe<Habit_Obj_Rel_Insert_Input>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status_Obj_Rel_Insert_Input>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Habit_Records_Max_Fields = {
  __typename?: 'habit_records_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  habit_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "habit_records" */
export type Habit_Records_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Habit_Records_Min_Fields = {
  __typename?: 'habit_records_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  habit_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "habit_records" */
export type Habit_Records_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "habit_records" */
export type Habit_Records_Mutation_Response = {
  __typename?: 'habit_records_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Habit_Records>;
};

/** on_conflict condition type for table "habit_records" */
export type Habit_Records_On_Conflict = {
  constraint: Habit_Records_Constraint;
  update_columns?: Array<Habit_Records_Update_Column>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};

/** Ordering options when selecting data from "habit_records". */
export type Habit_Records_Order_By = {
  created_at?: InputMaybe<Order_By>;
  habit?: InputMaybe<Habit_Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  status?: InputMaybe<Status_Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: habit_records */
export type Habit_Records_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "habit_records" */
export enum Habit_Records_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  StatusId = 'status_id'
}

/** input type for updating data in table "habit_records" */
export type Habit_Records_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Habit_Records_Stddev_Fields = {
  __typename?: 'habit_records_stddev_fields';
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "habit_records" */
export type Habit_Records_Stddev_Order_By = {
  status_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Habit_Records_Stddev_Pop_Fields = {
  __typename?: 'habit_records_stddev_pop_fields';
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "habit_records" */
export type Habit_Records_Stddev_Pop_Order_By = {
  status_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Habit_Records_Stddev_Samp_Fields = {
  __typename?: 'habit_records_stddev_samp_fields';
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "habit_records" */
export type Habit_Records_Stddev_Samp_Order_By = {
  status_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "habit_records" */
export type Habit_Records_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Habit_Records_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Habit_Records_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Habit_Records_Sum_Fields = {
  __typename?: 'habit_records_sum_fields';
  status_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "habit_records" */
export type Habit_Records_Sum_Order_By = {
  status_id?: InputMaybe<Order_By>;
};

/** update columns of table "habit_records" */
export enum Habit_Records_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  StatusId = 'status_id'
}

export type Habit_Records_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Habit_Records_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Habit_Records_Set_Input>;
  /** filter the rows which have to be updated */
  where: Habit_Records_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Habit_Records_Var_Pop_Fields = {
  __typename?: 'habit_records_var_pop_fields';
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "habit_records" */
export type Habit_Records_Var_Pop_Order_By = {
  status_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Habit_Records_Var_Samp_Fields = {
  __typename?: 'habit_records_var_samp_fields';
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "habit_records" */
export type Habit_Records_Var_Samp_Order_By = {
  status_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Habit_Records_Variance_Fields = {
  __typename?: 'habit_records_variance_fields';
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "habit_records" */
export type Habit_Records_Variance_Order_By = {
  status_id?: InputMaybe<Order_By>;
};

/** select columns of table "habit" */
export enum Habit_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "habit" */
export type Habit_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "habit" */
export type Habit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Habit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Habit_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "habit" */
export enum Habit_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Habit_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Habit_Set_Input>;
  /** filter the rows which have to be updated */
  where: Habit_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "habit" */
  delete_habit?: Maybe<Habit_Mutation_Response>;
  /** delete single row from the table: "habit" */
  delete_habit_by_pk?: Maybe<Habit>;
  /** delete data from the table: "habit_categories" */
  delete_habit_categories?: Maybe<Habit_Categories_Mutation_Response>;
  /** delete single row from the table: "habit_categories" */
  delete_habit_categories_by_pk?: Maybe<Habit_Categories>;
  /** delete data from the table: "habit_records" */
  delete_habit_records?: Maybe<Habit_Records_Mutation_Response>;
  /** delete single row from the table: "habit_records" */
  delete_habit_records_by_pk?: Maybe<Habit_Records>;
  /** delete data from the table: "reminders" */
  delete_reminders?: Maybe<Reminders_Mutation_Response>;
  /** delete single row from the table: "reminders" */
  delete_reminders_by_pk?: Maybe<Reminders>;
  /** delete data from the table: "status" */
  delete_status?: Maybe<Status_Mutation_Response>;
  /** delete single row from the table: "status" */
  delete_status_by_pk?: Maybe<Status>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "habit" */
  insert_habit?: Maybe<Habit_Mutation_Response>;
  /** insert data into the table: "habit_categories" */
  insert_habit_categories?: Maybe<Habit_Categories_Mutation_Response>;
  /** insert a single row into the table: "habit_categories" */
  insert_habit_categories_one?: Maybe<Habit_Categories>;
  /** insert a single row into the table: "habit" */
  insert_habit_one?: Maybe<Habit>;
  /** insert data into the table: "habit_records" */
  insert_habit_records?: Maybe<Habit_Records_Mutation_Response>;
  /** insert a single row into the table: "habit_records" */
  insert_habit_records_one?: Maybe<Habit_Records>;
  /** insert data into the table: "reminders" */
  insert_reminders?: Maybe<Reminders_Mutation_Response>;
  /** insert a single row into the table: "reminders" */
  insert_reminders_one?: Maybe<Reminders>;
  /** insert data into the table: "status" */
  insert_status?: Maybe<Status_Mutation_Response>;
  /** insert a single row into the table: "status" */
  insert_status_one?: Maybe<Status>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
  /** update data of the table: "habit" */
  update_habit?: Maybe<Habit_Mutation_Response>;
  /** update single row of the table: "habit" */
  update_habit_by_pk?: Maybe<Habit>;
  /** update data of the table: "habit_categories" */
  update_habit_categories?: Maybe<Habit_Categories_Mutation_Response>;
  /** update single row of the table: "habit_categories" */
  update_habit_categories_by_pk?: Maybe<Habit_Categories>;
  /** update multiples rows of table: "habit_categories" */
  update_habit_categories_many?: Maybe<Array<Maybe<Habit_Categories_Mutation_Response>>>;
  /** update multiples rows of table: "habit" */
  update_habit_many?: Maybe<Array<Maybe<Habit_Mutation_Response>>>;
  /** update data of the table: "habit_records" */
  update_habit_records?: Maybe<Habit_Records_Mutation_Response>;
  /** update single row of the table: "habit_records" */
  update_habit_records_by_pk?: Maybe<Habit_Records>;
  /** update multiples rows of table: "habit_records" */
  update_habit_records_many?: Maybe<Array<Maybe<Habit_Records_Mutation_Response>>>;
  /** update data of the table: "reminders" */
  update_reminders?: Maybe<Reminders_Mutation_Response>;
  /** update single row of the table: "reminders" */
  update_reminders_by_pk?: Maybe<Reminders>;
  /** update multiples rows of table: "reminders" */
  update_reminders_many?: Maybe<Array<Maybe<Reminders_Mutation_Response>>>;
  /** update data of the table: "status" */
  update_status?: Maybe<Status_Mutation_Response>;
  /** update single row of the table: "status" */
  update_status_by_pk?: Maybe<Status>;
  /** update multiples rows of table: "status" */
  update_status_many?: Maybe<Array<Maybe<Status_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_HabitArgs = {
  where: Habit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Habit_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Habit_CategoriesArgs = {
  where: Habit_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Habit_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Habit_RecordsArgs = {
  where: Habit_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Habit_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RemindersArgs = {
  where: Reminders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_StatusArgs = {
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HabitArgs = {
  objects: Array<Habit_Insert_Input>;
  on_conflict?: InputMaybe<Habit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habit_CategoriesArgs = {
  objects: Array<Habit_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Habit_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habit_Categories_OneArgs = {
  object: Habit_Categories_Insert_Input;
  on_conflict?: InputMaybe<Habit_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habit_OneArgs = {
  object: Habit_Insert_Input;
  on_conflict?: InputMaybe<Habit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habit_RecordsArgs = {
  objects: Array<Habit_Records_Insert_Input>;
  on_conflict?: InputMaybe<Habit_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habit_Records_OneArgs = {
  object: Habit_Records_Insert_Input;
  on_conflict?: InputMaybe<Habit_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RemindersArgs = {
  objects: Array<Reminders_Insert_Input>;
  on_conflict?: InputMaybe<Reminders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reminders_OneArgs = {
  object: Reminders_Insert_Input;
  on_conflict?: InputMaybe<Reminders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StatusArgs = {
  objects: Array<Status_Insert_Input>;
  on_conflict?: InputMaybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_OneArgs = {
  object: Status_Insert_Input;
  on_conflict?: InputMaybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HabitArgs = {
  _set?: InputMaybe<Habit_Set_Input>;
  where: Habit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_By_PkArgs = {
  _set?: InputMaybe<Habit_Set_Input>;
  pk_columns: Habit_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_CategoriesArgs = {
  _set?: InputMaybe<Habit_Categories_Set_Input>;
  where: Habit_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_Categories_By_PkArgs = {
  _set?: InputMaybe<Habit_Categories_Set_Input>;
  pk_columns: Habit_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_Categories_ManyArgs = {
  updates: Array<Habit_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_ManyArgs = {
  updates: Array<Habit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_RecordsArgs = {
  _inc?: InputMaybe<Habit_Records_Inc_Input>;
  _set?: InputMaybe<Habit_Records_Set_Input>;
  where: Habit_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_Records_By_PkArgs = {
  _inc?: InputMaybe<Habit_Records_Inc_Input>;
  _set?: InputMaybe<Habit_Records_Set_Input>;
  pk_columns: Habit_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_Records_ManyArgs = {
  updates: Array<Habit_Records_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RemindersArgs = {
  _set?: InputMaybe<Reminders_Set_Input>;
  where: Reminders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reminders_By_PkArgs = {
  _set?: InputMaybe<Reminders_Set_Input>;
  pk_columns: Reminders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reminders_ManyArgs = {
  updates: Array<Reminders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StatusArgs = {
  _inc?: InputMaybe<Status_Inc_Input>;
  _set?: InputMaybe<Status_Set_Input>;
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_By_PkArgs = {
  _inc?: InputMaybe<Status_Inc_Input>;
  _set?: InputMaybe<Status_Set_Input>;
  pk_columns: Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Status_ManyArgs = {
  updates: Array<Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "habit" */
  habit: Array<Habit>;
  /** fetch aggregated fields from the table: "habit" */
  habit_aggregate: Habit_Aggregate;
  /** fetch data from the table: "habit" using primary key columns */
  habit_by_pk?: Maybe<Habit>;
  /** An array relationship */
  habit_categories: Array<Habit_Categories>;
  /** An aggregate relationship */
  habit_categories_aggregate: Habit_Categories_Aggregate;
  /** fetch data from the table: "habit_categories" using primary key columns */
  habit_categories_by_pk?: Maybe<Habit_Categories>;
  /** An array relationship */
  habit_records: Array<Habit_Records>;
  /** An aggregate relationship */
  habit_records_aggregate: Habit_Records_Aggregate;
  /** fetch data from the table: "habit_records" using primary key columns */
  habit_records_by_pk?: Maybe<Habit_Records>;
  /** An array relationship */
  reminders: Array<Reminders>;
  /** An aggregate relationship */
  reminders_aggregate: Reminders_Aggregate;
  /** fetch data from the table: "reminders" using primary key columns */
  reminders_by_pk?: Maybe<Reminders>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHabitArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Query_RootHabit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Query_RootHabit_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHabit_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Categories_Order_By>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};


export type Query_RootHabit_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Categories_Order_By>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};


export type Query_RootHabit_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHabit_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Habit_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Records_Order_By>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};


export type Query_RootHabit_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Records_Order_By>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};


export type Query_RootHabit_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRemindersArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Query_RootReminders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Query_RootReminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootStatusArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Query_RootStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Query_RootStatus_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "reminders" */
export type Reminders = {
  __typename?: 'reminders';
  frequency: Scalars['String']['output'];
  /** An object relationship */
  habit: Habit;
  habit_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  time: Scalars['timestamptz']['output'];
};

/** aggregated selection of "reminders" */
export type Reminders_Aggregate = {
  __typename?: 'reminders_aggregate';
  aggregate?: Maybe<Reminders_Aggregate_Fields>;
  nodes: Array<Reminders>;
};

export type Reminders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Reminders_Aggregate_Bool_Exp_Count>;
};

export type Reminders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Reminders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Reminders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "reminders" */
export type Reminders_Aggregate_Fields = {
  __typename?: 'reminders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Reminders_Max_Fields>;
  min?: Maybe<Reminders_Min_Fields>;
};


/** aggregate fields of "reminders" */
export type Reminders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reminders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "reminders" */
export type Reminders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reminders_Max_Order_By>;
  min?: InputMaybe<Reminders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "reminders" */
export type Reminders_Arr_Rel_Insert_Input = {
  data: Array<Reminders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reminders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "reminders". All fields are combined with a logical 'AND'. */
export type Reminders_Bool_Exp = {
  _and?: InputMaybe<Array<Reminders_Bool_Exp>>;
  _not?: InputMaybe<Reminders_Bool_Exp>;
  _or?: InputMaybe<Array<Reminders_Bool_Exp>>;
  frequency?: InputMaybe<String_Comparison_Exp>;
  habit?: InputMaybe<Habit_Bool_Exp>;
  habit_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  time?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "reminders" */
export enum Reminders_Constraint {
  /** unique or primary key constraint on columns "id" */
  RemindersPkey = 'reminders_pkey'
}

/** input type for inserting data into table "reminders" */
export type Reminders_Insert_Input = {
  frequency?: InputMaybe<Scalars['String']['input']>;
  habit?: InputMaybe<Habit_Obj_Rel_Insert_Input>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  time?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Reminders_Max_Fields = {
  __typename?: 'reminders_max_fields';
  frequency?: Maybe<Scalars['String']['output']>;
  habit_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  time?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "reminders" */
export type Reminders_Max_Order_By = {
  frequency?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reminders_Min_Fields = {
  __typename?: 'reminders_min_fields';
  frequency?: Maybe<Scalars['String']['output']>;
  habit_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  time?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "reminders" */
export type Reminders_Min_Order_By = {
  frequency?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reminders" */
export type Reminders_Mutation_Response = {
  __typename?: 'reminders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Reminders>;
};

/** on_conflict condition type for table "reminders" */
export type Reminders_On_Conflict = {
  constraint: Reminders_Constraint;
  update_columns?: Array<Reminders_Update_Column>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};

/** Ordering options when selecting data from "reminders". */
export type Reminders_Order_By = {
  frequency?: InputMaybe<Order_By>;
  habit?: InputMaybe<Habit_Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reminders */
export type Reminders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "reminders" */
export enum Reminders_Select_Column {
  /** column name */
  Frequency = 'frequency',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  Id = 'id',
  /** column name */
  Time = 'time'
}

/** input type for updating data in table "reminders" */
export type Reminders_Set_Input = {
  frequency?: InputMaybe<Scalars['String']['input']>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  time?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "reminders" */
export type Reminders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reminders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reminders_Stream_Cursor_Value_Input = {
  frequency?: InputMaybe<Scalars['String']['input']>;
  habit_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  time?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "reminders" */
export enum Reminders_Update_Column {
  /** column name */
  Frequency = 'frequency',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  Id = 'id',
  /** column name */
  Time = 'time'
}

export type Reminders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reminders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reminders_Bool_Exp;
};

/** columns and relationships of "status" */
export type Status = {
  __typename?: 'status';
  /** An array relationship */
  habit_records: Array<Habit_Records>;
  /** An aggregate relationship */
  habit_records_aggregate: Habit_Records_Aggregate;
  id: Scalars['Int']['output'];
  status: Scalars['String']['output'];
};


/** columns and relationships of "status" */
export type StatusHabit_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Habit_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Records_Order_By>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};


/** columns and relationships of "status" */
export type StatusHabit_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Records_Order_By>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};

/** aggregated selection of "status" */
export type Status_Aggregate = {
  __typename?: 'status_aggregate';
  aggregate?: Maybe<Status_Aggregate_Fields>;
  nodes: Array<Status>;
};

/** aggregate fields of "status" */
export type Status_Aggregate_Fields = {
  __typename?: 'status_aggregate_fields';
  avg?: Maybe<Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Status_Max_Fields>;
  min?: Maybe<Status_Min_Fields>;
  stddev?: Maybe<Status_Stddev_Fields>;
  stddev_pop?: Maybe<Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Status_Stddev_Samp_Fields>;
  sum?: Maybe<Status_Sum_Fields>;
  var_pop?: Maybe<Status_Var_Pop_Fields>;
  var_samp?: Maybe<Status_Var_Samp_Fields>;
  variance?: Maybe<Status_Variance_Fields>;
};


/** aggregate fields of "status" */
export type Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Status_Avg_Fields = {
  __typename?: 'status_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "status". All fields are combined with a logical 'AND'. */
export type Status_Bool_Exp = {
  _and?: InputMaybe<Array<Status_Bool_Exp>>;
  _not?: InputMaybe<Status_Bool_Exp>;
  _or?: InputMaybe<Array<Status_Bool_Exp>>;
  habit_records?: InputMaybe<Habit_Records_Bool_Exp>;
  habit_records_aggregate?: InputMaybe<Habit_Records_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "status" */
export enum Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  StatusPkey = 'status_pkey'
}

/** input type for incrementing numeric columns in table "status" */
export type Status_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "status" */
export type Status_Insert_Input = {
  habit_records?: InputMaybe<Habit_Records_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Status_Max_Fields = {
  __typename?: 'status_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Status_Min_Fields = {
  __typename?: 'status_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "status" */
export type Status_Mutation_Response = {
  __typename?: 'status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Status>;
};

/** input type for inserting object relation for remote table "status" */
export type Status_Obj_Rel_Insert_Input = {
  data: Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Status_On_Conflict>;
};

/** on_conflict condition type for table "status" */
export type Status_On_Conflict = {
  constraint: Status_Constraint;
  update_columns?: Array<Status_Update_Column>;
  where?: InputMaybe<Status_Bool_Exp>;
};

/** Ordering options when selecting data from "status". */
export type Status_Order_By = {
  habit_records_aggregate?: InputMaybe<Habit_Records_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: status */
export type Status_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "status" */
export enum Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "status" */
export type Status_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Status_Stddev_Fields = {
  __typename?: 'status_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Status_Stddev_Pop_Fields = {
  __typename?: 'status_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Status_Stddev_Samp_Fields = {
  __typename?: 'status_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "status" */
export type Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Status_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Status_Sum_Fields = {
  __typename?: 'status_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "status" */
export enum Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

export type Status_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Status_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Status_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Status_Var_Pop_Fields = {
  __typename?: 'status_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Status_Var_Samp_Fields = {
  __typename?: 'status_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Status_Variance_Fields = {
  __typename?: 'status_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  category_stream: Array<Category>;
  /** fetch data from the table: "habit" */
  habit: Array<Habit>;
  /** fetch aggregated fields from the table: "habit" */
  habit_aggregate: Habit_Aggregate;
  /** fetch data from the table: "habit" using primary key columns */
  habit_by_pk?: Maybe<Habit>;
  /** An array relationship */
  habit_categories: Array<Habit_Categories>;
  /** An aggregate relationship */
  habit_categories_aggregate: Habit_Categories_Aggregate;
  /** fetch data from the table: "habit_categories" using primary key columns */
  habit_categories_by_pk?: Maybe<Habit_Categories>;
  /** fetch data from the table in a streaming manner: "habit_categories" */
  habit_categories_stream: Array<Habit_Categories>;
  /** An array relationship */
  habit_records: Array<Habit_Records>;
  /** An aggregate relationship */
  habit_records_aggregate: Habit_Records_Aggregate;
  /** fetch data from the table: "habit_records" using primary key columns */
  habit_records_by_pk?: Maybe<Habit_Records>;
  /** fetch data from the table in a streaming manner: "habit_records" */
  habit_records_stream: Array<Habit_Records>;
  /** fetch data from the table in a streaming manner: "habit" */
  habit_stream: Array<Habit>;
  /** An array relationship */
  reminders: Array<Reminders>;
  /** An aggregate relationship */
  reminders_aggregate: Reminders_Aggregate;
  /** fetch data from the table: "reminders" using primary key columns */
  reminders_by_pk?: Maybe<Reminders>;
  /** fetch data from the table in a streaming manner: "reminders" */
  reminders_stream: Array<Reminders>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table in a streaming manner: "status" */
  status_stream: Array<Status>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootHabitArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Subscription_RootHabit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Subscription_RootHabit_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHabit_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Categories_Order_By>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};


export type Subscription_RootHabit_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Categories_Order_By>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};


export type Subscription_RootHabit_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHabit_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Habit_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Habit_Categories_Bool_Exp>;
};


export type Subscription_RootHabit_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Habit_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Records_Order_By>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};


export type Subscription_RootHabit_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Records_Order_By>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};


export type Subscription_RootHabit_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHabit_Records_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Habit_Records_Stream_Cursor_Input>>;
  where?: InputMaybe<Habit_Records_Bool_Exp>;
};


export type Subscription_RootHabit_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Habit_Stream_Cursor_Input>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Subscription_RootRemindersArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Subscription_RootReminders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Subscription_RootReminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReminders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reminders_Stream_Cursor_Input>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Subscription_RootStatusArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootStatus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  first_name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  habits: Array<Habit>;
  /** An aggregate relationship */
  habits_aggregate: Habit_Aggregate;
  id: Scalars['uuid']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "users" */
export type UsersHabitsArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersHabits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  habits?: InputMaybe<Habit_Bool_Exp>;
  habits_aggregate?: InputMaybe<Habit_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "password" */
  UsersPasswordKey = 'users_password_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  habits?: InputMaybe<Habit_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  habits_aggregate?: InputMaybe<Habit_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type CreateSocialUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateSocialUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', email: string, last_name?: string | null, first_name?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', email: string, password?: string | null } | null };

export type GetUserbyEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserbyEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', email: string, password?: string | null, last_name?: string | null, first_name?: string | null }> };


export const CreateSocialUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSocialUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}}]}}]}}]} as unknown as DocumentNode<CreateSocialUserMutation, CreateSocialUserMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserbyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserbyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}}]}}]}}]} as unknown as DocumentNode<GetUserbyEmailQuery, GetUserbyEmailQueryVariables>;