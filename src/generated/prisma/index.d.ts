
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MoviePreference
 * One row per movie a user swipes. `movieData` stores a snapshot
 * (title, posterPath, year, genres, topCast, director) so the
 * recommendation engine and dashboard never need to re-query TMDB.
 */
export type MoviePreference = $Result.DefaultSelection<Prisma.$MoviePreferencePayload>
/**
 * Model Recommendation
 * Persisted recommendation set. Regenerated (replaced) each time the
 * engine runs. `reasons` holds the human-readable "why" strings and
 * `movieData` a lightweight snapshot for the results page.
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>
/**
 * Model GlobalCatalog
 * Curated movie catalog imported from Letterboxd (or any source).
 * Shared across all users — not tied to any account.
 * The recommendation engine uses this as a baseline taste signal.
 */
export type GlobalCatalog = $Result.DefaultSelection<Prisma.$GlobalCatalogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moviePreference`: Exposes CRUD operations for the **MoviePreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoviePreferences
    * const moviePreferences = await prisma.moviePreference.findMany()
    * ```
    */
  get moviePreference(): Prisma.MoviePreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalCatalog`: Exposes CRUD operations for the **GlobalCatalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalCatalogs
    * const globalCatalogs = await prisma.globalCatalog.findMany()
    * ```
    */
  get globalCatalog(): Prisma.GlobalCatalogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MoviePreference: 'MoviePreference',
    Recommendation: 'Recommendation',
    GlobalCatalog: 'GlobalCatalog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "moviePreference" | "recommendation" | "globalCatalog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MoviePreference: {
        payload: Prisma.$MoviePreferencePayload<ExtArgs>
        fields: Prisma.MoviePreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviePreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviePreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>
          }
          findFirst: {
            args: Prisma.MoviePreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviePreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>
          }
          findMany: {
            args: Prisma.MoviePreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>[]
          }
          create: {
            args: Prisma.MoviePreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>
          }
          createMany: {
            args: Prisma.MoviePreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoviePreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>[]
          }
          delete: {
            args: Prisma.MoviePreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>
          }
          update: {
            args: Prisma.MoviePreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>
          }
          deleteMany: {
            args: Prisma.MoviePreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoviePreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoviePreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>[]
          }
          upsert: {
            args: Prisma.MoviePreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePreferencePayload>
          }
          aggregate: {
            args: Prisma.MoviePreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoviePreference>
          }
          groupBy: {
            args: Prisma.MoviePreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviePreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoviePreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<MoviePreferenceCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
      GlobalCatalog: {
        payload: Prisma.$GlobalCatalogPayload<ExtArgs>
        fields: Prisma.GlobalCatalogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalCatalogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalCatalogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>
          }
          findFirst: {
            args: Prisma.GlobalCatalogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalCatalogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>
          }
          findMany: {
            args: Prisma.GlobalCatalogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>[]
          }
          create: {
            args: Prisma.GlobalCatalogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>
          }
          createMany: {
            args: Prisma.GlobalCatalogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalCatalogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>[]
          }
          delete: {
            args: Prisma.GlobalCatalogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>
          }
          update: {
            args: Prisma.GlobalCatalogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>
          }
          deleteMany: {
            args: Prisma.GlobalCatalogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalCatalogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalCatalogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>[]
          }
          upsert: {
            args: Prisma.GlobalCatalogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalCatalogPayload>
          }
          aggregate: {
            args: Prisma.GlobalCatalogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalCatalog>
          }
          groupBy: {
            args: Prisma.GlobalCatalogGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalCatalogGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalCatalogCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalCatalogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    moviePreference?: MoviePreferenceOmit
    recommendation?: RecommendationOmit
    globalCatalog?: GlobalCatalogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    preferences: number
    recommendations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | UserCountOutputTypeCountPreferencesArgs
    recommendations?: boolean | UserCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviePreferenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferences: Prisma.$MoviePreferencePayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends User$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    where?: MoviePreferenceWhereInput
    orderBy?: MoviePreferenceOrderByWithRelationInput | MoviePreferenceOrderByWithRelationInput[]
    cursor?: MoviePreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviePreferenceScalarFieldEnum | MoviePreferenceScalarFieldEnum[]
  }

  /**
   * User.recommendations
   */
  export type User$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MoviePreference
   */

  export type AggregateMoviePreference = {
    _count: MoviePreferenceCountAggregateOutputType | null
    _avg: MoviePreferenceAvgAggregateOutputType | null
    _sum: MoviePreferenceSumAggregateOutputType | null
    _min: MoviePreferenceMinAggregateOutputType | null
    _max: MoviePreferenceMaxAggregateOutputType | null
  }

  export type MoviePreferenceAvgAggregateOutputType = {
    movieId: number | null
  }

  export type MoviePreferenceSumAggregateOutputType = {
    movieId: number | null
  }

  export type MoviePreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    movieId: number | null
    liked: boolean | null
    createdAt: Date | null
  }

  export type MoviePreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    movieId: number | null
    liked: boolean | null
    createdAt: Date | null
  }

  export type MoviePreferenceCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    liked: number
    movieData: number
    createdAt: number
    _all: number
  }


  export type MoviePreferenceAvgAggregateInputType = {
    movieId?: true
  }

  export type MoviePreferenceSumAggregateInputType = {
    movieId?: true
  }

  export type MoviePreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    liked?: true
    createdAt?: true
  }

  export type MoviePreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    liked?: true
    createdAt?: true
  }

  export type MoviePreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    liked?: true
    movieData?: true
    createdAt?: true
    _all?: true
  }

  export type MoviePreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoviePreference to aggregate.
     */
    where?: MoviePreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoviePreferences to fetch.
     */
    orderBy?: MoviePreferenceOrderByWithRelationInput | MoviePreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviePreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoviePreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoviePreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoviePreferences
    **/
    _count?: true | MoviePreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviePreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviePreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviePreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviePreferenceMaxAggregateInputType
  }

  export type GetMoviePreferenceAggregateType<T extends MoviePreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateMoviePreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoviePreference[P]>
      : GetScalarType<T[P], AggregateMoviePreference[P]>
  }




  export type MoviePreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviePreferenceWhereInput
    orderBy?: MoviePreferenceOrderByWithAggregationInput | MoviePreferenceOrderByWithAggregationInput[]
    by: MoviePreferenceScalarFieldEnum[] | MoviePreferenceScalarFieldEnum
    having?: MoviePreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviePreferenceCountAggregateInputType | true
    _avg?: MoviePreferenceAvgAggregateInputType
    _sum?: MoviePreferenceSumAggregateInputType
    _min?: MoviePreferenceMinAggregateInputType
    _max?: MoviePreferenceMaxAggregateInputType
  }

  export type MoviePreferenceGroupByOutputType = {
    id: string
    userId: string
    movieId: number
    liked: boolean
    movieData: JsonValue
    createdAt: Date
    _count: MoviePreferenceCountAggregateOutputType | null
    _avg: MoviePreferenceAvgAggregateOutputType | null
    _sum: MoviePreferenceSumAggregateOutputType | null
    _min: MoviePreferenceMinAggregateOutputType | null
    _max: MoviePreferenceMaxAggregateOutputType | null
  }

  type GetMoviePreferenceGroupByPayload<T extends MoviePreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviePreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviePreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviePreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], MoviePreferenceGroupByOutputType[P]>
        }
      >
    >


  export type MoviePreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    liked?: boolean
    movieData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moviePreference"]>

  export type MoviePreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    liked?: boolean
    movieData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moviePreference"]>

  export type MoviePreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    liked?: boolean
    movieData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moviePreference"]>

  export type MoviePreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    liked?: boolean
    movieData?: boolean
    createdAt?: boolean
  }

  export type MoviePreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieId" | "liked" | "movieData" | "createdAt", ExtArgs["result"]["moviePreference"]>
  export type MoviePreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoviePreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoviePreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoviePreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoviePreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      movieId: number
      liked: boolean
      movieData: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["moviePreference"]>
    composites: {}
  }

  type MoviePreferenceGetPayload<S extends boolean | null | undefined | MoviePreferenceDefaultArgs> = $Result.GetResult<Prisma.$MoviePreferencePayload, S>

  type MoviePreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoviePreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviePreferenceCountAggregateInputType | true
    }

  export interface MoviePreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoviePreference'], meta: { name: 'MoviePreference' } }
    /**
     * Find zero or one MoviePreference that matches the filter.
     * @param {MoviePreferenceFindUniqueArgs} args - Arguments to find a MoviePreference
     * @example
     * // Get one MoviePreference
     * const moviePreference = await prisma.moviePreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoviePreferenceFindUniqueArgs>(args: SelectSubset<T, MoviePreferenceFindUniqueArgs<ExtArgs>>): Prisma__MoviePreferenceClient<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoviePreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoviePreferenceFindUniqueOrThrowArgs} args - Arguments to find a MoviePreference
     * @example
     * // Get one MoviePreference
     * const moviePreference = await prisma.moviePreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoviePreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, MoviePreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoviePreferenceClient<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoviePreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviePreferenceFindFirstArgs} args - Arguments to find a MoviePreference
     * @example
     * // Get one MoviePreference
     * const moviePreference = await prisma.moviePreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoviePreferenceFindFirstArgs>(args?: SelectSubset<T, MoviePreferenceFindFirstArgs<ExtArgs>>): Prisma__MoviePreferenceClient<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoviePreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviePreferenceFindFirstOrThrowArgs} args - Arguments to find a MoviePreference
     * @example
     * // Get one MoviePreference
     * const moviePreference = await prisma.moviePreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoviePreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, MoviePreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoviePreferenceClient<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoviePreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviePreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoviePreferences
     * const moviePreferences = await prisma.moviePreference.findMany()
     * 
     * // Get first 10 MoviePreferences
     * const moviePreferences = await prisma.moviePreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviePreferenceWithIdOnly = await prisma.moviePreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoviePreferenceFindManyArgs>(args?: SelectSubset<T, MoviePreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoviePreference.
     * @param {MoviePreferenceCreateArgs} args - Arguments to create a MoviePreference.
     * @example
     * // Create one MoviePreference
     * const MoviePreference = await prisma.moviePreference.create({
     *   data: {
     *     // ... data to create a MoviePreference
     *   }
     * })
     * 
     */
    create<T extends MoviePreferenceCreateArgs>(args: SelectSubset<T, MoviePreferenceCreateArgs<ExtArgs>>): Prisma__MoviePreferenceClient<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoviePreferences.
     * @param {MoviePreferenceCreateManyArgs} args - Arguments to create many MoviePreferences.
     * @example
     * // Create many MoviePreferences
     * const moviePreference = await prisma.moviePreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoviePreferenceCreateManyArgs>(args?: SelectSubset<T, MoviePreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoviePreferences and returns the data saved in the database.
     * @param {MoviePreferenceCreateManyAndReturnArgs} args - Arguments to create many MoviePreferences.
     * @example
     * // Create many MoviePreferences
     * const moviePreference = await prisma.moviePreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoviePreferences and only return the `id`
     * const moviePreferenceWithIdOnly = await prisma.moviePreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoviePreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, MoviePreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoviePreference.
     * @param {MoviePreferenceDeleteArgs} args - Arguments to delete one MoviePreference.
     * @example
     * // Delete one MoviePreference
     * const MoviePreference = await prisma.moviePreference.delete({
     *   where: {
     *     // ... filter to delete one MoviePreference
     *   }
     * })
     * 
     */
    delete<T extends MoviePreferenceDeleteArgs>(args: SelectSubset<T, MoviePreferenceDeleteArgs<ExtArgs>>): Prisma__MoviePreferenceClient<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoviePreference.
     * @param {MoviePreferenceUpdateArgs} args - Arguments to update one MoviePreference.
     * @example
     * // Update one MoviePreference
     * const moviePreference = await prisma.moviePreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoviePreferenceUpdateArgs>(args: SelectSubset<T, MoviePreferenceUpdateArgs<ExtArgs>>): Prisma__MoviePreferenceClient<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoviePreferences.
     * @param {MoviePreferenceDeleteManyArgs} args - Arguments to filter MoviePreferences to delete.
     * @example
     * // Delete a few MoviePreferences
     * const { count } = await prisma.moviePreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoviePreferenceDeleteManyArgs>(args?: SelectSubset<T, MoviePreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoviePreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviePreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoviePreferences
     * const moviePreference = await prisma.moviePreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoviePreferenceUpdateManyArgs>(args: SelectSubset<T, MoviePreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoviePreferences and returns the data updated in the database.
     * @param {MoviePreferenceUpdateManyAndReturnArgs} args - Arguments to update many MoviePreferences.
     * @example
     * // Update many MoviePreferences
     * const moviePreference = await prisma.moviePreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoviePreferences and only return the `id`
     * const moviePreferenceWithIdOnly = await prisma.moviePreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoviePreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, MoviePreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoviePreference.
     * @param {MoviePreferenceUpsertArgs} args - Arguments to update or create a MoviePreference.
     * @example
     * // Update or create a MoviePreference
     * const moviePreference = await prisma.moviePreference.upsert({
     *   create: {
     *     // ... data to create a MoviePreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoviePreference we want to update
     *   }
     * })
     */
    upsert<T extends MoviePreferenceUpsertArgs>(args: SelectSubset<T, MoviePreferenceUpsertArgs<ExtArgs>>): Prisma__MoviePreferenceClient<$Result.GetResult<Prisma.$MoviePreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoviePreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviePreferenceCountArgs} args - Arguments to filter MoviePreferences to count.
     * @example
     * // Count the number of MoviePreferences
     * const count = await prisma.moviePreference.count({
     *   where: {
     *     // ... the filter for the MoviePreferences we want to count
     *   }
     * })
    **/
    count<T extends MoviePreferenceCountArgs>(
      args?: Subset<T, MoviePreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviePreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoviePreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviePreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoviePreferenceAggregateArgs>(args: Subset<T, MoviePreferenceAggregateArgs>): Prisma.PrismaPromise<GetMoviePreferenceAggregateType<T>>

    /**
     * Group by MoviePreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviePreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoviePreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviePreferenceGroupByArgs['orderBy'] }
        : { orderBy?: MoviePreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoviePreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviePreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoviePreference model
   */
  readonly fields: MoviePreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoviePreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviePreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoviePreference model
   */
  interface MoviePreferenceFieldRefs {
    readonly id: FieldRef<"MoviePreference", 'String'>
    readonly userId: FieldRef<"MoviePreference", 'String'>
    readonly movieId: FieldRef<"MoviePreference", 'Int'>
    readonly liked: FieldRef<"MoviePreference", 'Boolean'>
    readonly movieData: FieldRef<"MoviePreference", 'Json'>
    readonly createdAt: FieldRef<"MoviePreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoviePreference findUnique
   */
  export type MoviePreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which MoviePreference to fetch.
     */
    where: MoviePreferenceWhereUniqueInput
  }

  /**
   * MoviePreference findUniqueOrThrow
   */
  export type MoviePreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which MoviePreference to fetch.
     */
    where: MoviePreferenceWhereUniqueInput
  }

  /**
   * MoviePreference findFirst
   */
  export type MoviePreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which MoviePreference to fetch.
     */
    where?: MoviePreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoviePreferences to fetch.
     */
    orderBy?: MoviePreferenceOrderByWithRelationInput | MoviePreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoviePreferences.
     */
    cursor?: MoviePreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoviePreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoviePreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoviePreferences.
     */
    distinct?: MoviePreferenceScalarFieldEnum | MoviePreferenceScalarFieldEnum[]
  }

  /**
   * MoviePreference findFirstOrThrow
   */
  export type MoviePreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which MoviePreference to fetch.
     */
    where?: MoviePreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoviePreferences to fetch.
     */
    orderBy?: MoviePreferenceOrderByWithRelationInput | MoviePreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoviePreferences.
     */
    cursor?: MoviePreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoviePreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoviePreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoviePreferences.
     */
    distinct?: MoviePreferenceScalarFieldEnum | MoviePreferenceScalarFieldEnum[]
  }

  /**
   * MoviePreference findMany
   */
  export type MoviePreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * Filter, which MoviePreferences to fetch.
     */
    where?: MoviePreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoviePreferences to fetch.
     */
    orderBy?: MoviePreferenceOrderByWithRelationInput | MoviePreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoviePreferences.
     */
    cursor?: MoviePreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoviePreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoviePreferences.
     */
    skip?: number
    distinct?: MoviePreferenceScalarFieldEnum | MoviePreferenceScalarFieldEnum[]
  }

  /**
   * MoviePreference create
   */
  export type MoviePreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a MoviePreference.
     */
    data: XOR<MoviePreferenceCreateInput, MoviePreferenceUncheckedCreateInput>
  }

  /**
   * MoviePreference createMany
   */
  export type MoviePreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoviePreferences.
     */
    data: MoviePreferenceCreateManyInput | MoviePreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoviePreference createManyAndReturn
   */
  export type MoviePreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many MoviePreferences.
     */
    data: MoviePreferenceCreateManyInput | MoviePreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoviePreference update
   */
  export type MoviePreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a MoviePreference.
     */
    data: XOR<MoviePreferenceUpdateInput, MoviePreferenceUncheckedUpdateInput>
    /**
     * Choose, which MoviePreference to update.
     */
    where: MoviePreferenceWhereUniqueInput
  }

  /**
   * MoviePreference updateMany
   */
  export type MoviePreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoviePreferences.
     */
    data: XOR<MoviePreferenceUpdateManyMutationInput, MoviePreferenceUncheckedUpdateManyInput>
    /**
     * Filter which MoviePreferences to update
     */
    where?: MoviePreferenceWhereInput
    /**
     * Limit how many MoviePreferences to update.
     */
    limit?: number
  }

  /**
   * MoviePreference updateManyAndReturn
   */
  export type MoviePreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * The data used to update MoviePreferences.
     */
    data: XOR<MoviePreferenceUpdateManyMutationInput, MoviePreferenceUncheckedUpdateManyInput>
    /**
     * Filter which MoviePreferences to update
     */
    where?: MoviePreferenceWhereInput
    /**
     * Limit how many MoviePreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoviePreference upsert
   */
  export type MoviePreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the MoviePreference to update in case it exists.
     */
    where: MoviePreferenceWhereUniqueInput
    /**
     * In case the MoviePreference found by the `where` argument doesn't exist, create a new MoviePreference with this data.
     */
    create: XOR<MoviePreferenceCreateInput, MoviePreferenceUncheckedCreateInput>
    /**
     * In case the MoviePreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviePreferenceUpdateInput, MoviePreferenceUncheckedUpdateInput>
  }

  /**
   * MoviePreference delete
   */
  export type MoviePreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
    /**
     * Filter which MoviePreference to delete.
     */
    where: MoviePreferenceWhereUniqueInput
  }

  /**
   * MoviePreference deleteMany
   */
  export type MoviePreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoviePreferences to delete
     */
    where?: MoviePreferenceWhereInput
    /**
     * Limit how many MoviePreferences to delete.
     */
    limit?: number
  }

  /**
   * MoviePreference without action
   */
  export type MoviePreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviePreference
     */
    select?: MoviePreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoviePreference
     */
    omit?: MoviePreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviePreferenceInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationAvgAggregateOutputType = {
    movieId: number | null
    score: number | null
  }

  export type RecommendationSumAggregateOutputType = {
    movieId: number | null
    score: number | null
  }

  export type RecommendationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    movieId: number | null
    score: number | null
    createdAt: Date | null
  }

  export type RecommendationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    movieId: number | null
    score: number | null
    createdAt: Date | null
  }

  export type RecommendationCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    score: number
    reasons: number
    movieData: number
    createdAt: number
    _all: number
  }


  export type RecommendationAvgAggregateInputType = {
    movieId?: true
    score?: true
  }

  export type RecommendationSumAggregateInputType = {
    movieId?: true
    score?: true
  }

  export type RecommendationMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    score?: true
    createdAt?: true
  }

  export type RecommendationMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    score?: true
    createdAt?: true
  }

  export type RecommendationCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    score?: true
    reasons?: true
    movieData?: true
    createdAt?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _avg?: RecommendationAvgAggregateInputType
    _sum?: RecommendationSumAggregateInputType
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    id: string
    userId: string
    movieId: number
    score: number
    reasons: string[]
    movieData: JsonValue
    createdAt: Date
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    score?: boolean
    reasons?: boolean
    movieData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    score?: boolean
    reasons?: boolean
    movieData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    score?: boolean
    reasons?: boolean
    movieData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    score?: boolean
    reasons?: boolean
    movieData?: boolean
    createdAt?: boolean
  }

  export type RecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieId" | "score" | "reasons" | "movieData" | "createdAt", ExtArgs["result"]["recommendation"]>
  export type RecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      movieId: number
      score: number
      reasons: string[]
      movieData: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations and returns the data updated in the database.
     * @param {RecommendationUpdateManyAndReturnArgs} args - Arguments to update many Recommendations.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recommendation model
   */
  interface RecommendationFieldRefs {
    readonly id: FieldRef<"Recommendation", 'String'>
    readonly userId: FieldRef<"Recommendation", 'String'>
    readonly movieId: FieldRef<"Recommendation", 'Int'>
    readonly score: FieldRef<"Recommendation", 'Float'>
    readonly reasons: FieldRef<"Recommendation", 'String[]'>
    readonly movieData: FieldRef<"Recommendation", 'Json'>
    readonly createdAt: FieldRef<"Recommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
  }

  /**
   * Recommendation updateManyAndReturn
   */
  export type RecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to delete.
     */
    limit?: number
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
  }


  /**
   * Model GlobalCatalog
   */

  export type AggregateGlobalCatalog = {
    _count: GlobalCatalogCountAggregateOutputType | null
    _avg: GlobalCatalogAvgAggregateOutputType | null
    _sum: GlobalCatalogSumAggregateOutputType | null
    _min: GlobalCatalogMinAggregateOutputType | null
    _max: GlobalCatalogMaxAggregateOutputType | null
  }

  export type GlobalCatalogAvgAggregateOutputType = {
    movieId: number | null
    rating: number | null
  }

  export type GlobalCatalogSumAggregateOutputType = {
    movieId: number | null
    rating: number | null
  }

  export type GlobalCatalogMinAggregateOutputType = {
    id: string | null
    movieId: number | null
    rating: number | null
    createdAt: Date | null
  }

  export type GlobalCatalogMaxAggregateOutputType = {
    id: string | null
    movieId: number | null
    rating: number | null
    createdAt: Date | null
  }

  export type GlobalCatalogCountAggregateOutputType = {
    id: number
    movieId: number
    movieData: number
    rating: number
    createdAt: number
    _all: number
  }


  export type GlobalCatalogAvgAggregateInputType = {
    movieId?: true
    rating?: true
  }

  export type GlobalCatalogSumAggregateInputType = {
    movieId?: true
    rating?: true
  }

  export type GlobalCatalogMinAggregateInputType = {
    id?: true
    movieId?: true
    rating?: true
    createdAt?: true
  }

  export type GlobalCatalogMaxAggregateInputType = {
    id?: true
    movieId?: true
    rating?: true
    createdAt?: true
  }

  export type GlobalCatalogCountAggregateInputType = {
    id?: true
    movieId?: true
    movieData?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type GlobalCatalogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalCatalog to aggregate.
     */
    where?: GlobalCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalCatalogs to fetch.
     */
    orderBy?: GlobalCatalogOrderByWithRelationInput | GlobalCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalCatalogs
    **/
    _count?: true | GlobalCatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalCatalogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalCatalogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalCatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalCatalogMaxAggregateInputType
  }

  export type GetGlobalCatalogAggregateType<T extends GlobalCatalogAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalCatalog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalCatalog[P]>
      : GetScalarType<T[P], AggregateGlobalCatalog[P]>
  }




  export type GlobalCatalogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalCatalogWhereInput
    orderBy?: GlobalCatalogOrderByWithAggregationInput | GlobalCatalogOrderByWithAggregationInput[]
    by: GlobalCatalogScalarFieldEnum[] | GlobalCatalogScalarFieldEnum
    having?: GlobalCatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalCatalogCountAggregateInputType | true
    _avg?: GlobalCatalogAvgAggregateInputType
    _sum?: GlobalCatalogSumAggregateInputType
    _min?: GlobalCatalogMinAggregateInputType
    _max?: GlobalCatalogMaxAggregateInputType
  }

  export type GlobalCatalogGroupByOutputType = {
    id: string
    movieId: number
    movieData: JsonValue
    rating: number
    createdAt: Date
    _count: GlobalCatalogCountAggregateOutputType | null
    _avg: GlobalCatalogAvgAggregateOutputType | null
    _sum: GlobalCatalogSumAggregateOutputType | null
    _min: GlobalCatalogMinAggregateOutputType | null
    _max: GlobalCatalogMaxAggregateOutputType | null
  }

  type GetGlobalCatalogGroupByPayload<T extends GlobalCatalogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalCatalogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalCatalogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalCatalogGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalCatalogGroupByOutputType[P]>
        }
      >
    >


  export type GlobalCatalogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    movieData?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["globalCatalog"]>

  export type GlobalCatalogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    movieData?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["globalCatalog"]>

  export type GlobalCatalogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieId?: boolean
    movieData?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["globalCatalog"]>

  export type GlobalCatalogSelectScalar = {
    id?: boolean
    movieId?: boolean
    movieData?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type GlobalCatalogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieId" | "movieData" | "rating" | "createdAt", ExtArgs["result"]["globalCatalog"]>

  export type $GlobalCatalogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalCatalog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      movieId: number
      movieData: Prisma.JsonValue
      rating: number
      createdAt: Date
    }, ExtArgs["result"]["globalCatalog"]>
    composites: {}
  }

  type GlobalCatalogGetPayload<S extends boolean | null | undefined | GlobalCatalogDefaultArgs> = $Result.GetResult<Prisma.$GlobalCatalogPayload, S>

  type GlobalCatalogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalCatalogCountAggregateInputType | true
    }

  export interface GlobalCatalogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalCatalog'], meta: { name: 'GlobalCatalog' } }
    /**
     * Find zero or one GlobalCatalog that matches the filter.
     * @param {GlobalCatalogFindUniqueArgs} args - Arguments to find a GlobalCatalog
     * @example
     * // Get one GlobalCatalog
     * const globalCatalog = await prisma.globalCatalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalCatalogFindUniqueArgs>(args: SelectSubset<T, GlobalCatalogFindUniqueArgs<ExtArgs>>): Prisma__GlobalCatalogClient<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalCatalog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalCatalogFindUniqueOrThrowArgs} args - Arguments to find a GlobalCatalog
     * @example
     * // Get one GlobalCatalog
     * const globalCatalog = await prisma.globalCatalog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalCatalogFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalCatalogClient<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalCatalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalCatalogFindFirstArgs} args - Arguments to find a GlobalCatalog
     * @example
     * // Get one GlobalCatalog
     * const globalCatalog = await prisma.globalCatalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalCatalogFindFirstArgs>(args?: SelectSubset<T, GlobalCatalogFindFirstArgs<ExtArgs>>): Prisma__GlobalCatalogClient<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalCatalog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalCatalogFindFirstOrThrowArgs} args - Arguments to find a GlobalCatalog
     * @example
     * // Get one GlobalCatalog
     * const globalCatalog = await prisma.globalCatalog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalCatalogFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalCatalogClient<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalCatalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalCatalogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalCatalogs
     * const globalCatalogs = await prisma.globalCatalog.findMany()
     * 
     * // Get first 10 GlobalCatalogs
     * const globalCatalogs = await prisma.globalCatalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalCatalogWithIdOnly = await prisma.globalCatalog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalCatalogFindManyArgs>(args?: SelectSubset<T, GlobalCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalCatalog.
     * @param {GlobalCatalogCreateArgs} args - Arguments to create a GlobalCatalog.
     * @example
     * // Create one GlobalCatalog
     * const GlobalCatalog = await prisma.globalCatalog.create({
     *   data: {
     *     // ... data to create a GlobalCatalog
     *   }
     * })
     * 
     */
    create<T extends GlobalCatalogCreateArgs>(args: SelectSubset<T, GlobalCatalogCreateArgs<ExtArgs>>): Prisma__GlobalCatalogClient<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalCatalogs.
     * @param {GlobalCatalogCreateManyArgs} args - Arguments to create many GlobalCatalogs.
     * @example
     * // Create many GlobalCatalogs
     * const globalCatalog = await prisma.globalCatalog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalCatalogCreateManyArgs>(args?: SelectSubset<T, GlobalCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalCatalogs and returns the data saved in the database.
     * @param {GlobalCatalogCreateManyAndReturnArgs} args - Arguments to create many GlobalCatalogs.
     * @example
     * // Create many GlobalCatalogs
     * const globalCatalog = await prisma.globalCatalog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalCatalogs and only return the `id`
     * const globalCatalogWithIdOnly = await prisma.globalCatalog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalCatalogCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalCatalog.
     * @param {GlobalCatalogDeleteArgs} args - Arguments to delete one GlobalCatalog.
     * @example
     * // Delete one GlobalCatalog
     * const GlobalCatalog = await prisma.globalCatalog.delete({
     *   where: {
     *     // ... filter to delete one GlobalCatalog
     *   }
     * })
     * 
     */
    delete<T extends GlobalCatalogDeleteArgs>(args: SelectSubset<T, GlobalCatalogDeleteArgs<ExtArgs>>): Prisma__GlobalCatalogClient<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalCatalog.
     * @param {GlobalCatalogUpdateArgs} args - Arguments to update one GlobalCatalog.
     * @example
     * // Update one GlobalCatalog
     * const globalCatalog = await prisma.globalCatalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalCatalogUpdateArgs>(args: SelectSubset<T, GlobalCatalogUpdateArgs<ExtArgs>>): Prisma__GlobalCatalogClient<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalCatalogs.
     * @param {GlobalCatalogDeleteManyArgs} args - Arguments to filter GlobalCatalogs to delete.
     * @example
     * // Delete a few GlobalCatalogs
     * const { count } = await prisma.globalCatalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalCatalogDeleteManyArgs>(args?: SelectSubset<T, GlobalCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalCatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalCatalogs
     * const globalCatalog = await prisma.globalCatalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalCatalogUpdateManyArgs>(args: SelectSubset<T, GlobalCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalCatalogs and returns the data updated in the database.
     * @param {GlobalCatalogUpdateManyAndReturnArgs} args - Arguments to update many GlobalCatalogs.
     * @example
     * // Update many GlobalCatalogs
     * const globalCatalog = await prisma.globalCatalog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalCatalogs and only return the `id`
     * const globalCatalogWithIdOnly = await prisma.globalCatalog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalCatalogUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalCatalog.
     * @param {GlobalCatalogUpsertArgs} args - Arguments to update or create a GlobalCatalog.
     * @example
     * // Update or create a GlobalCatalog
     * const globalCatalog = await prisma.globalCatalog.upsert({
     *   create: {
     *     // ... data to create a GlobalCatalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalCatalog we want to update
     *   }
     * })
     */
    upsert<T extends GlobalCatalogUpsertArgs>(args: SelectSubset<T, GlobalCatalogUpsertArgs<ExtArgs>>): Prisma__GlobalCatalogClient<$Result.GetResult<Prisma.$GlobalCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalCatalogCountArgs} args - Arguments to filter GlobalCatalogs to count.
     * @example
     * // Count the number of GlobalCatalogs
     * const count = await prisma.globalCatalog.count({
     *   where: {
     *     // ... the filter for the GlobalCatalogs we want to count
     *   }
     * })
    **/
    count<T extends GlobalCatalogCountArgs>(
      args?: Subset<T, GlobalCatalogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalCatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalCatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalCatalogAggregateArgs>(args: Subset<T, GlobalCatalogAggregateArgs>): Prisma.PrismaPromise<GetGlobalCatalogAggregateType<T>>

    /**
     * Group by GlobalCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalCatalogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalCatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalCatalogGroupByArgs['orderBy'] }
        : { orderBy?: GlobalCatalogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalCatalog model
   */
  readonly fields: GlobalCatalogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalCatalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalCatalogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalCatalog model
   */
  interface GlobalCatalogFieldRefs {
    readonly id: FieldRef<"GlobalCatalog", 'String'>
    readonly movieId: FieldRef<"GlobalCatalog", 'Int'>
    readonly movieData: FieldRef<"GlobalCatalog", 'Json'>
    readonly rating: FieldRef<"GlobalCatalog", 'Float'>
    readonly createdAt: FieldRef<"GlobalCatalog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalCatalog findUnique
   */
  export type GlobalCatalogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * Filter, which GlobalCatalog to fetch.
     */
    where: GlobalCatalogWhereUniqueInput
  }

  /**
   * GlobalCatalog findUniqueOrThrow
   */
  export type GlobalCatalogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * Filter, which GlobalCatalog to fetch.
     */
    where: GlobalCatalogWhereUniqueInput
  }

  /**
   * GlobalCatalog findFirst
   */
  export type GlobalCatalogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * Filter, which GlobalCatalog to fetch.
     */
    where?: GlobalCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalCatalogs to fetch.
     */
    orderBy?: GlobalCatalogOrderByWithRelationInput | GlobalCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalCatalogs.
     */
    cursor?: GlobalCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalCatalogs.
     */
    distinct?: GlobalCatalogScalarFieldEnum | GlobalCatalogScalarFieldEnum[]
  }

  /**
   * GlobalCatalog findFirstOrThrow
   */
  export type GlobalCatalogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * Filter, which GlobalCatalog to fetch.
     */
    where?: GlobalCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalCatalogs to fetch.
     */
    orderBy?: GlobalCatalogOrderByWithRelationInput | GlobalCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalCatalogs.
     */
    cursor?: GlobalCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalCatalogs.
     */
    distinct?: GlobalCatalogScalarFieldEnum | GlobalCatalogScalarFieldEnum[]
  }

  /**
   * GlobalCatalog findMany
   */
  export type GlobalCatalogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * Filter, which GlobalCatalogs to fetch.
     */
    where?: GlobalCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalCatalogs to fetch.
     */
    orderBy?: GlobalCatalogOrderByWithRelationInput | GlobalCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalCatalogs.
     */
    cursor?: GlobalCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalCatalogs.
     */
    skip?: number
    distinct?: GlobalCatalogScalarFieldEnum | GlobalCatalogScalarFieldEnum[]
  }

  /**
   * GlobalCatalog create
   */
  export type GlobalCatalogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalCatalog.
     */
    data: XOR<GlobalCatalogCreateInput, GlobalCatalogUncheckedCreateInput>
  }

  /**
   * GlobalCatalog createMany
   */
  export type GlobalCatalogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalCatalogs.
     */
    data: GlobalCatalogCreateManyInput | GlobalCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalCatalog createManyAndReturn
   */
  export type GlobalCatalogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalCatalogs.
     */
    data: GlobalCatalogCreateManyInput | GlobalCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalCatalog update
   */
  export type GlobalCatalogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalCatalog.
     */
    data: XOR<GlobalCatalogUpdateInput, GlobalCatalogUncheckedUpdateInput>
    /**
     * Choose, which GlobalCatalog to update.
     */
    where: GlobalCatalogWhereUniqueInput
  }

  /**
   * GlobalCatalog updateMany
   */
  export type GlobalCatalogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalCatalogs.
     */
    data: XOR<GlobalCatalogUpdateManyMutationInput, GlobalCatalogUncheckedUpdateManyInput>
    /**
     * Filter which GlobalCatalogs to update
     */
    where?: GlobalCatalogWhereInput
    /**
     * Limit how many GlobalCatalogs to update.
     */
    limit?: number
  }

  /**
   * GlobalCatalog updateManyAndReturn
   */
  export type GlobalCatalogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * The data used to update GlobalCatalogs.
     */
    data: XOR<GlobalCatalogUpdateManyMutationInput, GlobalCatalogUncheckedUpdateManyInput>
    /**
     * Filter which GlobalCatalogs to update
     */
    where?: GlobalCatalogWhereInput
    /**
     * Limit how many GlobalCatalogs to update.
     */
    limit?: number
  }

  /**
   * GlobalCatalog upsert
   */
  export type GlobalCatalogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalCatalog to update in case it exists.
     */
    where: GlobalCatalogWhereUniqueInput
    /**
     * In case the GlobalCatalog found by the `where` argument doesn't exist, create a new GlobalCatalog with this data.
     */
    create: XOR<GlobalCatalogCreateInput, GlobalCatalogUncheckedCreateInput>
    /**
     * In case the GlobalCatalog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalCatalogUpdateInput, GlobalCatalogUncheckedUpdateInput>
  }

  /**
   * GlobalCatalog delete
   */
  export type GlobalCatalogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
    /**
     * Filter which GlobalCatalog to delete.
     */
    where: GlobalCatalogWhereUniqueInput
  }

  /**
   * GlobalCatalog deleteMany
   */
  export type GlobalCatalogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalCatalogs to delete
     */
    where?: GlobalCatalogWhereInput
    /**
     * Limit how many GlobalCatalogs to delete.
     */
    limit?: number
  }

  /**
   * GlobalCatalog without action
   */
  export type GlobalCatalogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalCatalog
     */
    select?: GlobalCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalCatalog
     */
    omit?: GlobalCatalogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MoviePreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    liked: 'liked',
    movieData: 'movieData',
    createdAt: 'createdAt'
  };

  export type MoviePreferenceScalarFieldEnum = (typeof MoviePreferenceScalarFieldEnum)[keyof typeof MoviePreferenceScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    score: 'score',
    reasons: 'reasons',
    movieData: 'movieData',
    createdAt: 'createdAt'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


  export const GlobalCatalogScalarFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    movieData: 'movieData',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type GlobalCatalogScalarFieldEnum = (typeof GlobalCatalogScalarFieldEnum)[keyof typeof GlobalCatalogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    preferences?: MoviePreferenceListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    preferences?: MoviePreferenceOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    preferences?: MoviePreferenceListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MoviePreferenceWhereInput = {
    AND?: MoviePreferenceWhereInput | MoviePreferenceWhereInput[]
    OR?: MoviePreferenceWhereInput[]
    NOT?: MoviePreferenceWhereInput | MoviePreferenceWhereInput[]
    id?: StringFilter<"MoviePreference"> | string
    userId?: StringFilter<"MoviePreference"> | string
    movieId?: IntFilter<"MoviePreference"> | number
    liked?: BoolFilter<"MoviePreference"> | boolean
    movieData?: JsonFilter<"MoviePreference">
    createdAt?: DateTimeFilter<"MoviePreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoviePreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    liked?: SortOrder
    movieData?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MoviePreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_movieId?: MoviePreferenceUserIdMovieIdCompoundUniqueInput
    AND?: MoviePreferenceWhereInput | MoviePreferenceWhereInput[]
    OR?: MoviePreferenceWhereInput[]
    NOT?: MoviePreferenceWhereInput | MoviePreferenceWhereInput[]
    userId?: StringFilter<"MoviePreference"> | string
    movieId?: IntFilter<"MoviePreference"> | number
    liked?: BoolFilter<"MoviePreference"> | boolean
    movieData?: JsonFilter<"MoviePreference">
    createdAt?: DateTimeFilter<"MoviePreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_movieId">

  export type MoviePreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    liked?: SortOrder
    movieData?: SortOrder
    createdAt?: SortOrder
    _count?: MoviePreferenceCountOrderByAggregateInput
    _avg?: MoviePreferenceAvgOrderByAggregateInput
    _max?: MoviePreferenceMaxOrderByAggregateInput
    _min?: MoviePreferenceMinOrderByAggregateInput
    _sum?: MoviePreferenceSumOrderByAggregateInput
  }

  export type MoviePreferenceScalarWhereWithAggregatesInput = {
    AND?: MoviePreferenceScalarWhereWithAggregatesInput | MoviePreferenceScalarWhereWithAggregatesInput[]
    OR?: MoviePreferenceScalarWhereWithAggregatesInput[]
    NOT?: MoviePreferenceScalarWhereWithAggregatesInput | MoviePreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoviePreference"> | string
    userId?: StringWithAggregatesFilter<"MoviePreference"> | string
    movieId?: IntWithAggregatesFilter<"MoviePreference"> | number
    liked?: BoolWithAggregatesFilter<"MoviePreference"> | boolean
    movieData?: JsonWithAggregatesFilter<"MoviePreference">
    createdAt?: DateTimeWithAggregatesFilter<"MoviePreference"> | Date | string
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    userId?: StringFilter<"Recommendation"> | string
    movieId?: IntFilter<"Recommendation"> | number
    score?: FloatFilter<"Recommendation"> | number
    reasons?: StringNullableListFilter<"Recommendation">
    movieData?: JsonFilter<"Recommendation">
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    reasons?: SortOrder
    movieData?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    userId?: StringFilter<"Recommendation"> | string
    movieId?: IntFilter<"Recommendation"> | number
    score?: FloatFilter<"Recommendation"> | number
    reasons?: StringNullableListFilter<"Recommendation">
    movieData?: JsonFilter<"Recommendation">
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    reasons?: SortOrder
    movieData?: SortOrder
    createdAt?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _avg?: RecommendationAvgOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
    _sum?: RecommendationSumOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recommendation"> | string
    userId?: StringWithAggregatesFilter<"Recommendation"> | string
    movieId?: IntWithAggregatesFilter<"Recommendation"> | number
    score?: FloatWithAggregatesFilter<"Recommendation"> | number
    reasons?: StringNullableListFilter<"Recommendation">
    movieData?: JsonWithAggregatesFilter<"Recommendation">
    createdAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
  }

  export type GlobalCatalogWhereInput = {
    AND?: GlobalCatalogWhereInput | GlobalCatalogWhereInput[]
    OR?: GlobalCatalogWhereInput[]
    NOT?: GlobalCatalogWhereInput | GlobalCatalogWhereInput[]
    id?: StringFilter<"GlobalCatalog"> | string
    movieId?: IntFilter<"GlobalCatalog"> | number
    movieData?: JsonFilter<"GlobalCatalog">
    rating?: FloatFilter<"GlobalCatalog"> | number
    createdAt?: DateTimeFilter<"GlobalCatalog"> | Date | string
  }

  export type GlobalCatalogOrderByWithRelationInput = {
    id?: SortOrder
    movieId?: SortOrder
    movieData?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type GlobalCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    movieId?: number
    AND?: GlobalCatalogWhereInput | GlobalCatalogWhereInput[]
    OR?: GlobalCatalogWhereInput[]
    NOT?: GlobalCatalogWhereInput | GlobalCatalogWhereInput[]
    movieData?: JsonFilter<"GlobalCatalog">
    rating?: FloatFilter<"GlobalCatalog"> | number
    createdAt?: DateTimeFilter<"GlobalCatalog"> | Date | string
  }, "id" | "movieId">

  export type GlobalCatalogOrderByWithAggregationInput = {
    id?: SortOrder
    movieId?: SortOrder
    movieData?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: GlobalCatalogCountOrderByAggregateInput
    _avg?: GlobalCatalogAvgOrderByAggregateInput
    _max?: GlobalCatalogMaxOrderByAggregateInput
    _min?: GlobalCatalogMinOrderByAggregateInput
    _sum?: GlobalCatalogSumOrderByAggregateInput
  }

  export type GlobalCatalogScalarWhereWithAggregatesInput = {
    AND?: GlobalCatalogScalarWhereWithAggregatesInput | GlobalCatalogScalarWhereWithAggregatesInput[]
    OR?: GlobalCatalogScalarWhereWithAggregatesInput[]
    NOT?: GlobalCatalogScalarWhereWithAggregatesInput | GlobalCatalogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalCatalog"> | string
    movieId?: IntWithAggregatesFilter<"GlobalCatalog"> | number
    movieData?: JsonWithAggregatesFilter<"GlobalCatalog">
    rating?: FloatWithAggregatesFilter<"GlobalCatalog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GlobalCatalog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    preferences?: MoviePreferenceCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    preferences?: MoviePreferenceUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: MoviePreferenceUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: MoviePreferenceUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviePreferenceCreateInput = {
    id?: string
    movieId: number
    liked: boolean
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type MoviePreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    movieId: number
    liked: boolean
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoviePreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    liked?: BoolFieldUpdateOperationsInput | boolean
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type MoviePreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    liked?: BoolFieldUpdateOperationsInput | boolean
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviePreferenceCreateManyInput = {
    id?: string
    userId: string
    movieId: number
    liked: boolean
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoviePreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    liked?: BoolFieldUpdateOperationsInput | boolean
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviePreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    liked?: BoolFieldUpdateOperationsInput | boolean
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateInput = {
    id?: string
    movieId: number
    score: number
    reasons?: RecommendationCreatereasonsInput | string[]
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateInput = {
    id?: string
    userId: string
    movieId: number
    score: number
    reasons?: RecommendationCreatereasonsInput | string[]
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    reasons?: RecommendationUpdatereasonsInput | string[]
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    reasons?: RecommendationUpdatereasonsInput | string[]
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateManyInput = {
    id?: string
    userId: string
    movieId: number
    score: number
    reasons?: RecommendationCreatereasonsInput | string[]
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    reasons?: RecommendationUpdatereasonsInput | string[]
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    reasons?: RecommendationUpdatereasonsInput | string[]
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalCatalogCreateInput = {
    id?: string
    movieId: number
    movieData: JsonNullValueInput | InputJsonValue
    rating: number
    createdAt?: Date | string
  }

  export type GlobalCatalogUncheckedCreateInput = {
    id?: string
    movieId: number
    movieData: JsonNullValueInput | InputJsonValue
    rating: number
    createdAt?: Date | string
  }

  export type GlobalCatalogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    movieData?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalCatalogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    movieData?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalCatalogCreateManyInput = {
    id?: string
    movieId: number
    movieData: JsonNullValueInput | InputJsonValue
    rating: number
    createdAt?: Date | string
  }

  export type GlobalCatalogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    movieData?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalCatalogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    movieData?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MoviePreferenceListRelationFilter = {
    every?: MoviePreferenceWhereInput
    some?: MoviePreferenceWhereInput
    none?: MoviePreferenceWhereInput
  }

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput
    some?: RecommendationWhereInput
    none?: RecommendationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MoviePreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MoviePreferenceUserIdMovieIdCompoundUniqueInput = {
    userId: string
    movieId: number
  }

  export type MoviePreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    liked?: SortOrder
    movieData?: SortOrder
    createdAt?: SortOrder
  }

  export type MoviePreferenceAvgOrderByAggregateInput = {
    movieId?: SortOrder
  }

  export type MoviePreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    liked?: SortOrder
    createdAt?: SortOrder
  }

  export type MoviePreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    liked?: SortOrder
    createdAt?: SortOrder
  }

  export type MoviePreferenceSumOrderByAggregateInput = {
    movieId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    reasons?: SortOrder
    movieData?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationAvgOrderByAggregateInput = {
    movieId?: SortOrder
    score?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationSumOrderByAggregateInput = {
    movieId?: SortOrder
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GlobalCatalogCountOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    movieData?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type GlobalCatalogAvgOrderByAggregateInput = {
    movieId?: SortOrder
    rating?: SortOrder
  }

  export type GlobalCatalogMaxOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type GlobalCatalogMinOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type GlobalCatalogSumOrderByAggregateInput = {
    movieId?: SortOrder
    rating?: SortOrder
  }

  export type MoviePreferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<MoviePreferenceCreateWithoutUserInput, MoviePreferenceUncheckedCreateWithoutUserInput> | MoviePreferenceCreateWithoutUserInput[] | MoviePreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviePreferenceCreateOrConnectWithoutUserInput | MoviePreferenceCreateOrConnectWithoutUserInput[]
    createMany?: MoviePreferenceCreateManyUserInputEnvelope
    connect?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type MoviePreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoviePreferenceCreateWithoutUserInput, MoviePreferenceUncheckedCreateWithoutUserInput> | MoviePreferenceCreateWithoutUserInput[] | MoviePreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviePreferenceCreateOrConnectWithoutUserInput | MoviePreferenceCreateOrConnectWithoutUserInput[]
    createMany?: MoviePreferenceCreateManyUserInputEnvelope
    connect?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MoviePreferenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoviePreferenceCreateWithoutUserInput, MoviePreferenceUncheckedCreateWithoutUserInput> | MoviePreferenceCreateWithoutUserInput[] | MoviePreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviePreferenceCreateOrConnectWithoutUserInput | MoviePreferenceCreateOrConnectWithoutUserInput[]
    upsert?: MoviePreferenceUpsertWithWhereUniqueWithoutUserInput | MoviePreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoviePreferenceCreateManyUserInputEnvelope
    set?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
    disconnect?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
    delete?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
    connect?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
    update?: MoviePreferenceUpdateWithWhereUniqueWithoutUserInput | MoviePreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoviePreferenceUpdateManyWithWhereWithoutUserInput | MoviePreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoviePreferenceScalarWhereInput | MoviePreferenceScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutUserInput | RecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutUserInput | RecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutUserInput | RecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type MoviePreferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoviePreferenceCreateWithoutUserInput, MoviePreferenceUncheckedCreateWithoutUserInput> | MoviePreferenceCreateWithoutUserInput[] | MoviePreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviePreferenceCreateOrConnectWithoutUserInput | MoviePreferenceCreateOrConnectWithoutUserInput[]
    upsert?: MoviePreferenceUpsertWithWhereUniqueWithoutUserInput | MoviePreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoviePreferenceCreateManyUserInputEnvelope
    set?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
    disconnect?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
    delete?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
    connect?: MoviePreferenceWhereUniqueInput | MoviePreferenceWhereUniqueInput[]
    update?: MoviePreferenceUpdateWithWhereUniqueWithoutUserInput | MoviePreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoviePreferenceUpdateManyWithWhereWithoutUserInput | MoviePreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoviePreferenceScalarWhereInput | MoviePreferenceScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutUserInput | RecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutUserInput | RecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutUserInput | RecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type RecommendationCreatereasonsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecommendationUpdatereasonsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput
    upsert?: UserUpsertWithoutRecommendationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecommendationsInput, UserUpdateWithoutRecommendationsInput>, UserUncheckedUpdateWithoutRecommendationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MoviePreferenceCreateWithoutUserInput = {
    id?: string
    movieId: number
    liked: boolean
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoviePreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    movieId: number
    liked: boolean
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoviePreferenceCreateOrConnectWithoutUserInput = {
    where: MoviePreferenceWhereUniqueInput
    create: XOR<MoviePreferenceCreateWithoutUserInput, MoviePreferenceUncheckedCreateWithoutUserInput>
  }

  export type MoviePreferenceCreateManyUserInputEnvelope = {
    data: MoviePreferenceCreateManyUserInput | MoviePreferenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutUserInput = {
    id?: string
    movieId: number
    score: number
    reasons?: RecommendationCreatereasonsInput | string[]
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RecommendationUncheckedCreateWithoutUserInput = {
    id?: string
    movieId: number
    score: number
    reasons?: RecommendationCreatereasonsInput | string[]
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput>
  }

  export type RecommendationCreateManyUserInputEnvelope = {
    data: RecommendationCreateManyUserInput | RecommendationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoviePreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: MoviePreferenceWhereUniqueInput
    update: XOR<MoviePreferenceUpdateWithoutUserInput, MoviePreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<MoviePreferenceCreateWithoutUserInput, MoviePreferenceUncheckedCreateWithoutUserInput>
  }

  export type MoviePreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: MoviePreferenceWhereUniqueInput
    data: XOR<MoviePreferenceUpdateWithoutUserInput, MoviePreferenceUncheckedUpdateWithoutUserInput>
  }

  export type MoviePreferenceUpdateManyWithWhereWithoutUserInput = {
    where: MoviePreferenceScalarWhereInput
    data: XOR<MoviePreferenceUpdateManyMutationInput, MoviePreferenceUncheckedUpdateManyWithoutUserInput>
  }

  export type MoviePreferenceScalarWhereInput = {
    AND?: MoviePreferenceScalarWhereInput | MoviePreferenceScalarWhereInput[]
    OR?: MoviePreferenceScalarWhereInput[]
    NOT?: MoviePreferenceScalarWhereInput | MoviePreferenceScalarWhereInput[]
    id?: StringFilter<"MoviePreference"> | string
    userId?: StringFilter<"MoviePreference"> | string
    movieId?: IntFilter<"MoviePreference"> | number
    liked?: BoolFilter<"MoviePreference"> | boolean
    movieData?: JsonFilter<"MoviePreference">
    createdAt?: DateTimeFilter<"MoviePreference"> | Date | string
  }

  export type RecommendationUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutUserInput, RecommendationUncheckedUpdateWithoutUserInput>
    create: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutUserInput, RecommendationUncheckedUpdateWithoutUserInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutUserInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutUserInput>
  }

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    OR?: RecommendationScalarWhereInput[]
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    userId?: StringFilter<"Recommendation"> | string
    movieId?: IntFilter<"Recommendation"> | number
    score?: FloatFilter<"Recommendation"> | number
    reasons?: StringNullableListFilter<"Recommendation">
    movieData?: JsonFilter<"Recommendation">
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRecommendationsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    preferences?: MoviePreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    preferences?: MoviePreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
  }

  export type UserUpsertWithoutRecommendationsInput = {
    update: XOR<UserUpdateWithoutRecommendationsInput, UserUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecommendationsInput, UserUncheckedUpdateWithoutRecommendationsInput>
  }

  export type UserUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: MoviePreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: MoviePreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MoviePreferenceCreateManyUserInput = {
    id?: string
    movieId: number
    liked: boolean
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RecommendationCreateManyUserInput = {
    id?: string
    movieId: number
    score: number
    reasons?: RecommendationCreatereasonsInput | string[]
    movieData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MoviePreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    liked?: BoolFieldUpdateOperationsInput | boolean
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviePreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    liked?: BoolFieldUpdateOperationsInput | boolean
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviePreferenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    liked?: BoolFieldUpdateOperationsInput | boolean
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    reasons?: RecommendationUpdatereasonsInput | string[]
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    reasons?: RecommendationUpdatereasonsInput | string[]
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    reasons?: RecommendationUpdatereasonsInput | string[]
    movieData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}