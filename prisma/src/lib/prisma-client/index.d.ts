
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
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Familia
 * 
 */
export type Familia = $Result.DefaultSelection<Prisma.$FamiliaPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Ejercicio
 * 
 */
export type Ejercicio = $Result.DefaultSelection<Prisma.$EjercicioPayload>
/**
 * Model Rutina
 * 
 */
export type Rutina = $Result.DefaultSelection<Prisma.$RutinaPayload>
/**
 * Model RutinaEjercicio
 * 
 */
export type RutinaEjercicio = $Result.DefaultSelection<Prisma.$RutinaEjercicioPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administradors
 * const administradors = await prisma.administrador.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Administradors
   * const administradors = await prisma.administrador.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs>;

  /**
   * `prisma.familia`: Exposes CRUD operations for the **Familia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Familias
    * const familias = await prisma.familia.findMany()
    * ```
    */
  get familia(): Prisma.FamiliaDelegate<ExtArgs>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs>;

  /**
   * `prisma.ejercicio`: Exposes CRUD operations for the **Ejercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios
    * const ejercicios = await prisma.ejercicio.findMany()
    * ```
    */
  get ejercicio(): Prisma.EjercicioDelegate<ExtArgs>;

  /**
   * `prisma.rutina`: Exposes CRUD operations for the **Rutina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutinas
    * const rutinas = await prisma.rutina.findMany()
    * ```
    */
  get rutina(): Prisma.RutinaDelegate<ExtArgs>;

  /**
   * `prisma.rutinaEjercicio`: Exposes CRUD operations for the **RutinaEjercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RutinaEjercicios
    * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany()
    * ```
    */
  get rutinaEjercicio(): Prisma.RutinaEjercicioDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Administrador: 'Administrador',
    Familia: 'Familia',
    Cliente: 'Cliente',
    Ejercicio: 'Ejercicio',
    Rutina: 'Rutina',
    RutinaEjercicio: 'RutinaEjercicio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "administrador" | "familia" | "cliente" | "ejercicio" | "rutina" | "rutinaEjercicio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Familia: {
        payload: Prisma.$FamiliaPayload<ExtArgs>
        fields: Prisma.FamiliaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamiliaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamiliaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          findFirst: {
            args: Prisma.FamiliaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamiliaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          findMany: {
            args: Prisma.FamiliaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>[]
          }
          create: {
            args: Prisma.FamiliaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          createMany: {
            args: Prisma.FamiliaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamiliaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>[]
          }
          delete: {
            args: Prisma.FamiliaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          update: {
            args: Prisma.FamiliaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          deleteMany: {
            args: Prisma.FamiliaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamiliaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamiliaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamiliaPayload>
          }
          aggregate: {
            args: Prisma.FamiliaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilia>
          }
          groupBy: {
            args: Prisma.FamiliaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamiliaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamiliaCountArgs<ExtArgs>
            result: $Utils.Optional<FamiliaCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Ejercicio: {
        payload: Prisma.$EjercicioPayload<ExtArgs>
        fields: Prisma.EjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findFirst: {
            args: Prisma.EjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findMany: {
            args: Prisma.EjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          create: {
            args: Prisma.EjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          createMany: {
            args: Prisma.EjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          delete: {
            args: Prisma.EjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          update: {
            args: Prisma.EjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          deleteMany: {
            args: Prisma.EjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          aggregate: {
            args: Prisma.EjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicio>
          }
          groupBy: {
            args: Prisma.EjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<EjercicioCountAggregateOutputType> | number
          }
        }
      }
      Rutina: {
        payload: Prisma.$RutinaPayload<ExtArgs>
        fields: Prisma.RutinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findFirst: {
            args: Prisma.RutinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findMany: {
            args: Prisma.RutinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          create: {
            args: Prisma.RutinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          createMany: {
            args: Prisma.RutinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          delete: {
            args: Prisma.RutinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          update: {
            args: Prisma.RutinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          deleteMany: {
            args: Prisma.RutinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RutinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          aggregate: {
            args: Prisma.RutinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutina>
          }
          groupBy: {
            args: Prisma.RutinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaCountAggregateOutputType> | number
          }
        }
      }
      RutinaEjercicio: {
        payload: Prisma.$RutinaEjercicioPayload<ExtArgs>
        fields: Prisma.RutinaEjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaEjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          findFirst: {
            args: Prisma.RutinaEjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaEjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          findMany: {
            args: Prisma.RutinaEjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          create: {
            args: Prisma.RutinaEjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          createMany: {
            args: Prisma.RutinaEjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaEjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          delete: {
            args: Prisma.RutinaEjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          update: {
            args: Prisma.RutinaEjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          deleteMany: {
            args: Prisma.RutinaEjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaEjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RutinaEjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          aggregate: {
            args: Prisma.RutinaEjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutinaEjercicio>
          }
          groupBy: {
            args: Prisma.RutinaEjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaEjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaEjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaEjercicioCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type FamiliaCountOutputType
   */

  export type FamiliaCountOutputType = {
    integrantes: number
  }

  export type FamiliaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrantes?: boolean | FamiliaCountOutputTypeCountIntegrantesArgs
  }

  // Custom InputTypes
  /**
   * FamiliaCountOutputType without action
   */
  export type FamiliaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamiliaCountOutputType
     */
    select?: FamiliaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamiliaCountOutputType without action
   */
  export type FamiliaCountOutputTypeCountIntegrantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    rutinas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | ClienteCountOutputTypeCountRutinasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountRutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
  }


  /**
   * Count Type EjercicioCountOutputType
   */

  export type EjercicioCountOutputType = {
    rutinas: number
  }

  export type EjercicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | EjercicioCountOutputTypeCountRutinasArgs
  }

  // Custom InputTypes
  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioCountOutputType
     */
    select?: EjercicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeCountRutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
  }


  /**
   * Count Type RutinaCountOutputType
   */

  export type RutinaCountOutputType = {
    ejercicios: number
  }

  export type RutinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios?: boolean | RutinaCountOutputTypeCountEjerciciosArgs
  }

  // Custom InputTypes
  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaCountOutputType
     */
    select?: RutinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    id: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    id: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministradorCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    id?: true
  }

  export type AdministradorSumAggregateInputType = {
    id?: true
  }

  export type AdministradorMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministradorCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id: number
    nombre: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administradorWithIdOnly = await prisma.administrador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `id`
     * const administradorWithIdOnly = await prisma.administrador.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
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
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Administrador model
   */ 
  interface AdministradorFieldRefs {
    readonly id: FieldRef<"Administrador", 'Int'>
    readonly nombre: FieldRef<"Administrador", 'String'>
    readonly email: FieldRef<"Administrador", 'String'>
    readonly passwordHash: FieldRef<"Administrador", 'String'>
    readonly createdAt: FieldRef<"Administrador", 'DateTime'>
    readonly updatedAt: FieldRef<"Administrador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
  }


  /**
   * Model Familia
   */

  export type AggregateFamilia = {
    _count: FamiliaCountAggregateOutputType | null
    _avg: FamiliaAvgAggregateOutputType | null
    _sum: FamiliaSumAggregateOutputType | null
    _min: FamiliaMinAggregateOutputType | null
    _max: FamiliaMaxAggregateOutputType | null
  }

  export type FamiliaAvgAggregateOutputType = {
    id: number | null
  }

  export type FamiliaSumAggregateOutputType = {
    id: number | null
  }

  export type FamiliaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    plan: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamiliaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    plan: string | null
    activa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamiliaCountAggregateOutputType = {
    id: number
    nombre: number
    plan: number
    activa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FamiliaAvgAggregateInputType = {
    id?: true
  }

  export type FamiliaSumAggregateInputType = {
    id?: true
  }

  export type FamiliaMinAggregateInputType = {
    id?: true
    nombre?: true
    plan?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamiliaMaxAggregateInputType = {
    id?: true
    nombre?: true
    plan?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamiliaCountAggregateInputType = {
    id?: true
    nombre?: true
    plan?: true
    activa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FamiliaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Familia to aggregate.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Familias
    **/
    _count?: true | FamiliaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamiliaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamiliaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamiliaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamiliaMaxAggregateInputType
  }

  export type GetFamiliaAggregateType<T extends FamiliaAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilia[P]>
      : GetScalarType<T[P], AggregateFamilia[P]>
  }




  export type FamiliaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamiliaWhereInput
    orderBy?: FamiliaOrderByWithAggregationInput | FamiliaOrderByWithAggregationInput[]
    by: FamiliaScalarFieldEnum[] | FamiliaScalarFieldEnum
    having?: FamiliaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamiliaCountAggregateInputType | true
    _avg?: FamiliaAvgAggregateInputType
    _sum?: FamiliaSumAggregateInputType
    _min?: FamiliaMinAggregateInputType
    _max?: FamiliaMaxAggregateInputType
  }

  export type FamiliaGroupByOutputType = {
    id: number
    nombre: string
    plan: string | null
    activa: boolean
    createdAt: Date
    updatedAt: Date
    _count: FamiliaCountAggregateOutputType | null
    _avg: FamiliaAvgAggregateOutputType | null
    _sum: FamiliaSumAggregateOutputType | null
    _min: FamiliaMinAggregateOutputType | null
    _max: FamiliaMaxAggregateOutputType | null
  }

  type GetFamiliaGroupByPayload<T extends FamiliaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamiliaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamiliaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamiliaGroupByOutputType[P]>
            : GetScalarType<T[P], FamiliaGroupByOutputType[P]>
        }
      >
    >


  export type FamiliaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    plan?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integrantes?: boolean | Familia$integrantesArgs<ExtArgs>
    _count?: boolean | FamiliaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familia"]>

  export type FamiliaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    plan?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["familia"]>

  export type FamiliaSelectScalar = {
    id?: boolean
    nombre?: boolean
    plan?: boolean
    activa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FamiliaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrantes?: boolean | Familia$integrantesArgs<ExtArgs>
    _count?: boolean | FamiliaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FamiliaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FamiliaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Familia"
    objects: {
      integrantes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      plan: string | null
      activa: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["familia"]>
    composites: {}
  }

  type FamiliaGetPayload<S extends boolean | null | undefined | FamiliaDefaultArgs> = $Result.GetResult<Prisma.$FamiliaPayload, S>

  type FamiliaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FamiliaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FamiliaCountAggregateInputType | true
    }

  export interface FamiliaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Familia'], meta: { name: 'Familia' } }
    /**
     * Find zero or one Familia that matches the filter.
     * @param {FamiliaFindUniqueArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamiliaFindUniqueArgs>(args: SelectSubset<T, FamiliaFindUniqueArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Familia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FamiliaFindUniqueOrThrowArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamiliaFindUniqueOrThrowArgs>(args: SelectSubset<T, FamiliaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Familia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindFirstArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamiliaFindFirstArgs>(args?: SelectSubset<T, FamiliaFindFirstArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Familia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindFirstOrThrowArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamiliaFindFirstOrThrowArgs>(args?: SelectSubset<T, FamiliaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Familias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Familias
     * const familias = await prisma.familia.findMany()
     * 
     * // Get first 10 Familias
     * const familias = await prisma.familia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familiaWithIdOnly = await prisma.familia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamiliaFindManyArgs>(args?: SelectSubset<T, FamiliaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Familia.
     * @param {FamiliaCreateArgs} args - Arguments to create a Familia.
     * @example
     * // Create one Familia
     * const Familia = await prisma.familia.create({
     *   data: {
     *     // ... data to create a Familia
     *   }
     * })
     * 
     */
    create<T extends FamiliaCreateArgs>(args: SelectSubset<T, FamiliaCreateArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Familias.
     * @param {FamiliaCreateManyArgs} args - Arguments to create many Familias.
     * @example
     * // Create many Familias
     * const familia = await prisma.familia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamiliaCreateManyArgs>(args?: SelectSubset<T, FamiliaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Familias and returns the data saved in the database.
     * @param {FamiliaCreateManyAndReturnArgs} args - Arguments to create many Familias.
     * @example
     * // Create many Familias
     * const familia = await prisma.familia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Familias and only return the `id`
     * const familiaWithIdOnly = await prisma.familia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamiliaCreateManyAndReturnArgs>(args?: SelectSubset<T, FamiliaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Familia.
     * @param {FamiliaDeleteArgs} args - Arguments to delete one Familia.
     * @example
     * // Delete one Familia
     * const Familia = await prisma.familia.delete({
     *   where: {
     *     // ... filter to delete one Familia
     *   }
     * })
     * 
     */
    delete<T extends FamiliaDeleteArgs>(args: SelectSubset<T, FamiliaDeleteArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Familia.
     * @param {FamiliaUpdateArgs} args - Arguments to update one Familia.
     * @example
     * // Update one Familia
     * const familia = await prisma.familia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamiliaUpdateArgs>(args: SelectSubset<T, FamiliaUpdateArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Familias.
     * @param {FamiliaDeleteManyArgs} args - Arguments to filter Familias to delete.
     * @example
     * // Delete a few Familias
     * const { count } = await prisma.familia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamiliaDeleteManyArgs>(args?: SelectSubset<T, FamiliaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Familias
     * const familia = await prisma.familia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamiliaUpdateManyArgs>(args: SelectSubset<T, FamiliaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Familia.
     * @param {FamiliaUpsertArgs} args - Arguments to update or create a Familia.
     * @example
     * // Update or create a Familia
     * const familia = await prisma.familia.upsert({
     *   create: {
     *     // ... data to create a Familia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Familia we want to update
     *   }
     * })
     */
    upsert<T extends FamiliaUpsertArgs>(args: SelectSubset<T, FamiliaUpsertArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaCountArgs} args - Arguments to filter Familias to count.
     * @example
     * // Count the number of Familias
     * const count = await prisma.familia.count({
     *   where: {
     *     // ... the filter for the Familias we want to count
     *   }
     * })
    **/
    count<T extends FamiliaCountArgs>(
      args?: Subset<T, FamiliaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamiliaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Familia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamiliaAggregateArgs>(args: Subset<T, FamiliaAggregateArgs>): Prisma.PrismaPromise<GetFamiliaAggregateType<T>>

    /**
     * Group by Familia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaGroupByArgs} args - Group by arguments.
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
      T extends FamiliaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamiliaGroupByArgs['orderBy'] }
        : { orderBy?: FamiliaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamiliaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamiliaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Familia model
   */
  readonly fields: FamiliaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Familia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamiliaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integrantes<T extends Familia$integrantesArgs<ExtArgs> = {}>(args?: Subset<T, Familia$integrantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Familia model
   */ 
  interface FamiliaFieldRefs {
    readonly id: FieldRef<"Familia", 'Int'>
    readonly nombre: FieldRef<"Familia", 'String'>
    readonly plan: FieldRef<"Familia", 'String'>
    readonly activa: FieldRef<"Familia", 'Boolean'>
    readonly createdAt: FieldRef<"Familia", 'DateTime'>
    readonly updatedAt: FieldRef<"Familia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Familia findUnique
   */
  export type FamiliaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia findUniqueOrThrow
   */
  export type FamiliaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia findFirst
   */
  export type FamiliaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familias.
     */
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia findFirstOrThrow
   */
  export type FamiliaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familia to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familias.
     */
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia findMany
   */
  export type FamiliaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter, which Familias to fetch.
     */
    where?: FamiliaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familias to fetch.
     */
    orderBy?: FamiliaOrderByWithRelationInput | FamiliaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Familias.
     */
    cursor?: FamiliaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familias.
     */
    skip?: number
    distinct?: FamiliaScalarFieldEnum | FamiliaScalarFieldEnum[]
  }

  /**
   * Familia create
   */
  export type FamiliaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The data needed to create a Familia.
     */
    data: XOR<FamiliaCreateInput, FamiliaUncheckedCreateInput>
  }

  /**
   * Familia createMany
   */
  export type FamiliaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Familias.
     */
    data: FamiliaCreateManyInput | FamiliaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Familia createManyAndReturn
   */
  export type FamiliaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Familias.
     */
    data: FamiliaCreateManyInput | FamiliaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Familia update
   */
  export type FamiliaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The data needed to update a Familia.
     */
    data: XOR<FamiliaUpdateInput, FamiliaUncheckedUpdateInput>
    /**
     * Choose, which Familia to update.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia updateMany
   */
  export type FamiliaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Familias.
     */
    data: XOR<FamiliaUpdateManyMutationInput, FamiliaUncheckedUpdateManyInput>
    /**
     * Filter which Familias to update
     */
    where?: FamiliaWhereInput
  }

  /**
   * Familia upsert
   */
  export type FamiliaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * The filter to search for the Familia to update in case it exists.
     */
    where: FamiliaWhereUniqueInput
    /**
     * In case the Familia found by the `where` argument doesn't exist, create a new Familia with this data.
     */
    create: XOR<FamiliaCreateInput, FamiliaUncheckedCreateInput>
    /**
     * In case the Familia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamiliaUpdateInput, FamiliaUncheckedUpdateInput>
  }

  /**
   * Familia delete
   */
  export type FamiliaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    /**
     * Filter which Familia to delete.
     */
    where: FamiliaWhereUniqueInput
  }

  /**
   * Familia deleteMany
   */
  export type FamiliaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Familias to delete
     */
    where?: FamiliaWhereInput
  }

  /**
   * Familia.integrantes
   */
  export type Familia$integrantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Familia without action
   */
  export type FamiliaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
    familiaId: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
    familiaId: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellidoP: string | null
    apellidoM: string | null
    codigoQr: string | null
    telefono: string | null
    email: string | null
    fechaNacimiento: Date | null
    activo: boolean | null
    esTitular: boolean | null
    familiaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellidoP: string | null
    apellidoM: string | null
    codigoQr: string | null
    telefono: string | null
    email: string | null
    fechaNacimiento: Date | null
    activo: boolean | null
    esTitular: boolean | null
    familiaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    apellidoP: number
    apellidoM: number
    codigoQr: number
    telefono: number
    email: number
    fechaNacimiento: number
    activo: number
    esTitular: number
    familiaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
    familiaId?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
    familiaId?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    apellidoP?: true
    apellidoM?: true
    codigoQr?: true
    telefono?: true
    email?: true
    fechaNacimiento?: true
    activo?: true
    esTitular?: true
    familiaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellidoP?: true
    apellidoM?: true
    codigoQr?: true
    telefono?: true
    email?: true
    fechaNacimiento?: true
    activo?: true
    esTitular?: true
    familiaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    apellidoP?: true
    apellidoM?: true
    codigoQr?: true
    telefono?: true
    email?: true
    fechaNacimiento?: true
    activo?: true
    esTitular?: true
    familiaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr: string | null
    telefono: string | null
    email: string | null
    fechaNacimiento: Date | null
    activo: boolean
    esTitular: boolean
    familiaId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidoP?: boolean
    apellidoM?: boolean
    codigoQr?: boolean
    telefono?: boolean
    email?: boolean
    fechaNacimiento?: boolean
    activo?: boolean
    esTitular?: boolean
    familiaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familia?: boolean | Cliente$familiaArgs<ExtArgs>
    rutinas?: boolean | Cliente$rutinasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidoP?: boolean
    apellidoM?: boolean
    codigoQr?: boolean
    telefono?: boolean
    email?: boolean
    fechaNacimiento?: boolean
    activo?: boolean
    esTitular?: boolean
    familiaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familia?: boolean | Cliente$familiaArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellidoP?: boolean
    apellidoM?: boolean
    codigoQr?: boolean
    telefono?: boolean
    email?: boolean
    fechaNacimiento?: boolean
    activo?: boolean
    esTitular?: boolean
    familiaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familia?: boolean | Cliente$familiaArgs<ExtArgs>
    rutinas?: boolean | Cliente$rutinasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familia?: boolean | Cliente$familiaArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      familia: Prisma.$FamiliaPayload<ExtArgs> | null
      rutinas: Prisma.$RutinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellidoP: string
      apellidoM: string
      codigoQr: string | null
      telefono: string | null
      email: string | null
      fechaNacimiento: Date | null
      activo: boolean
      esTitular: boolean
      familiaId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familia<T extends Cliente$familiaArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$familiaArgs<ExtArgs>>): Prisma__FamiliaClient<$Result.GetResult<Prisma.$FamiliaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    rutinas<T extends Cliente$rutinasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$rutinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cliente model
   */ 
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly apellidoP: FieldRef<"Cliente", 'String'>
    readonly apellidoM: FieldRef<"Cliente", 'String'>
    readonly codigoQr: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly fechaNacimiento: FieldRef<"Cliente", 'DateTime'>
    readonly activo: FieldRef<"Cliente", 'Boolean'>
    readonly esTitular: FieldRef<"Cliente", 'Boolean'>
    readonly familiaId: FieldRef<"Cliente", 'Int'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente.familia
   */
  export type Cliente$familiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Familia
     */
    select?: FamiliaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamiliaInclude<ExtArgs> | null
    where?: FamiliaWhereInput
  }

  /**
   * Cliente.rutinas
   */
  export type Cliente$rutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    cursor?: RutinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Ejercicio
   */

  export type AggregateEjercicio = {
    _count: EjercicioCountAggregateOutputType | null
    _avg: EjercicioAvgAggregateOutputType | null
    _sum: EjercicioSumAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  export type EjercicioAvgAggregateOutputType = {
    id: number | null
  }

  export type EjercicioSumAggregateOutputType = {
    id: number | null
  }

  export type EjercicioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EjercicioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EjercicioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    videoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EjercicioAvgAggregateInputType = {
    id?: true
  }

  export type EjercicioSumAggregateInputType = {
    id?: true
  }

  export type EjercicioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EjercicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EjercicioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicio to aggregate.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ejercicios
    **/
    _count?: true | EjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjercicioMaxAggregateInputType
  }

  export type GetEjercicioAggregateType<T extends EjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicio[P]>
      : GetScalarType<T[P], AggregateEjercicio[P]>
  }




  export type EjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioWhereInput
    orderBy?: EjercicioOrderByWithAggregationInput | EjercicioOrderByWithAggregationInput[]
    by: EjercicioScalarFieldEnum[] | EjercicioScalarFieldEnum
    having?: EjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjercicioCountAggregateInputType | true
    _avg?: EjercicioAvgAggregateInputType
    _sum?: EjercicioSumAggregateInputType
    _min?: EjercicioMinAggregateInputType
    _max?: EjercicioMaxAggregateInputType
  }

  export type EjercicioGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    videoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: EjercicioCountAggregateOutputType | null
    _avg: EjercicioAvgAggregateOutputType | null
    _sum: EjercicioSumAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  type GetEjercicioGroupByPayload<T extends EjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
        }
      >
    >


  export type EjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutinas?: boolean | Ejercicio$rutinasArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | Ejercicio$rutinasArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ejercicio"
    objects: {
      rutinas: Prisma.$RutinaEjercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      videoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ejercicio"]>
    composites: {}
  }

  type EjercicioGetPayload<S extends boolean | null | undefined | EjercicioDefaultArgs> = $Result.GetResult<Prisma.$EjercicioPayload, S>

  type EjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EjercicioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EjercicioCountAggregateInputType | true
    }

  export interface EjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ejercicio'], meta: { name: 'Ejercicio' } }
    /**
     * Find zero or one Ejercicio that matches the filter.
     * @param {EjercicioFindUniqueArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EjercicioFindUniqueArgs>(args: SelectSubset<T, EjercicioFindUniqueArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ejercicio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EjercicioFindUniqueOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, EjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ejercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EjercicioFindFirstArgs>(args?: SelectSubset<T, EjercicioFindFirstArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ejercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, EjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany()
     * 
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EjercicioFindManyArgs>(args?: SelectSubset<T, EjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ejercicio.
     * @param {EjercicioCreateArgs} args - Arguments to create a Ejercicio.
     * @example
     * // Create one Ejercicio
     * const Ejercicio = await prisma.ejercicio.create({
     *   data: {
     *     // ... data to create a Ejercicio
     *   }
     * })
     * 
     */
    create<T extends EjercicioCreateArgs>(args: SelectSubset<T, EjercicioCreateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ejercicios.
     * @param {EjercicioCreateManyArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EjercicioCreateManyArgs>(args?: SelectSubset<T, EjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ejercicios and returns the data saved in the database.
     * @param {EjercicioCreateManyAndReturnArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, EjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ejercicio.
     * @param {EjercicioDeleteArgs} args - Arguments to delete one Ejercicio.
     * @example
     * // Delete one Ejercicio
     * const Ejercicio = await prisma.ejercicio.delete({
     *   where: {
     *     // ... filter to delete one Ejercicio
     *   }
     * })
     * 
     */
    delete<T extends EjercicioDeleteArgs>(args: SelectSubset<T, EjercicioDeleteArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ejercicio.
     * @param {EjercicioUpdateArgs} args - Arguments to update one Ejercicio.
     * @example
     * // Update one Ejercicio
     * const ejercicio = await prisma.ejercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EjercicioUpdateArgs>(args: SelectSubset<T, EjercicioUpdateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ejercicios.
     * @param {EjercicioDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EjercicioDeleteManyArgs>(args?: SelectSubset<T, EjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EjercicioUpdateManyArgs>(args: SelectSubset<T, EjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ejercicio.
     * @param {EjercicioUpsertArgs} args - Arguments to update or create a Ejercicio.
     * @example
     * // Update or create a Ejercicio
     * const ejercicio = await prisma.ejercicio.upsert({
     *   create: {
     *     // ... data to create a Ejercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicio we want to update
     *   }
     * })
     */
    upsert<T extends EjercicioUpsertArgs>(args: SelectSubset<T, EjercicioUpsertArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicio.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends EjercicioCountArgs>(
      args?: Subset<T, EjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EjercicioAggregateArgs>(args: Subset<T, EjercicioAggregateArgs>): Prisma.PrismaPromise<GetEjercicioAggregateType<T>>

    /**
     * Group by Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioGroupByArgs} args - Group by arguments.
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
      T extends EjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EjercicioGroupByArgs['orderBy'] }
        : { orderBy?: EjercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ejercicio model
   */
  readonly fields: EjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ejercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutinas<T extends Ejercicio$rutinasArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$rutinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Ejercicio model
   */ 
  interface EjercicioFieldRefs {
    readonly id: FieldRef<"Ejercicio", 'Int'>
    readonly nombre: FieldRef<"Ejercicio", 'String'>
    readonly descripcion: FieldRef<"Ejercicio", 'String'>
    readonly videoUrl: FieldRef<"Ejercicio", 'String'>
    readonly createdAt: FieldRef<"Ejercicio", 'DateTime'>
    readonly updatedAt: FieldRef<"Ejercicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ejercicio findUnique
   */
  export type EjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findUniqueOrThrow
   */
  export type EjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findFirst
   */
  export type EjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findFirstOrThrow
   */
  export type EjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findMany
   */
  export type EjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio create
   */
  export type EjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Ejercicio.
     */
    data: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
  }

  /**
   * Ejercicio createMany
   */
  export type EjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio createManyAndReturn
   */
  export type EjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio update
   */
  export type EjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Ejercicio.
     */
    data: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
    /**
     * Choose, which Ejercicio to update.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio updateMany
   */
  export type EjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
  }

  /**
   * Ejercicio upsert
   */
  export type EjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Ejercicio to update in case it exists.
     */
    where: EjercicioWhereUniqueInput
    /**
     * In case the Ejercicio found by the `where` argument doesn't exist, create a new Ejercicio with this data.
     */
    create: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
    /**
     * In case the Ejercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
  }

  /**
   * Ejercicio delete
   */
  export type EjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter which Ejercicio to delete.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio deleteMany
   */
  export type EjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicios to delete
     */
    where?: EjercicioWhereInput
  }

  /**
   * Ejercicio.rutinas
   */
  export type Ejercicio$rutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    cursor?: RutinaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio without action
   */
  export type EjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
  }


  /**
   * Model Rutina
   */

  export type AggregateRutina = {
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  export type RutinaAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
  }

  export type RutinaSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
  }

  export type RutinaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    diaSemana: string | null
    descripcion: string | null
    activa: boolean | null
    clienteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    diaSemana: string | null
    descripcion: string | null
    activa: boolean | null
    clienteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaCountAggregateOutputType = {
    id: number
    nombre: number
    diaSemana: number
    descripcion: number
    activa: number
    clienteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RutinaAvgAggregateInputType = {
    id?: true
    clienteId?: true
  }

  export type RutinaSumAggregateInputType = {
    id?: true
    clienteId?: true
  }

  export type RutinaMinAggregateInputType = {
    id?: true
    nombre?: true
    diaSemana?: true
    descripcion?: true
    activa?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaMaxAggregateInputType = {
    id?: true
    nombre?: true
    diaSemana?: true
    descripcion?: true
    activa?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaCountAggregateInputType = {
    id?: true
    nombre?: true
    diaSemana?: true
    descripcion?: true
    activa?: true
    clienteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RutinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutina to aggregate.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutinas
    **/
    _count?: true | RutinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaMaxAggregateInputType
  }

  export type GetRutinaAggregateType<T extends RutinaAggregateArgs> = {
        [P in keyof T & keyof AggregateRutina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutina[P]>
      : GetScalarType<T[P], AggregateRutina[P]>
  }




  export type RutinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithAggregationInput | RutinaOrderByWithAggregationInput[]
    by: RutinaScalarFieldEnum[] | RutinaScalarFieldEnum
    having?: RutinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaCountAggregateInputType | true
    _avg?: RutinaAvgAggregateInputType
    _sum?: RutinaSumAggregateInputType
    _min?: RutinaMinAggregateInputType
    _max?: RutinaMaxAggregateInputType
  }

  export type RutinaGroupByOutputType = {
    id: number
    nombre: string
    diaSemana: string | null
    descripcion: string | null
    activa: boolean
    clienteId: number
    createdAt: Date
    updatedAt: Date
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  type GetRutinaGroupByPayload<T extends RutinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaGroupByOutputType[P]>
        }
      >
    >


  export type RutinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    diaSemana?: boolean
    descripcion?: boolean
    activa?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    ejercicios?: boolean | Rutina$ejerciciosArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    diaSemana?: boolean
    descripcion?: boolean
    activa?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectScalar = {
    id?: boolean
    nombre?: boolean
    diaSemana?: boolean
    descripcion?: boolean
    activa?: boolean
    clienteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RutinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    ejercicios?: boolean | Rutina$ejerciciosArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $RutinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rutina"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      ejercicios: Prisma.$RutinaEjercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      diaSemana: string | null
      descripcion: string | null
      activa: boolean
      clienteId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rutina"]>
    composites: {}
  }

  type RutinaGetPayload<S extends boolean | null | undefined | RutinaDefaultArgs> = $Result.GetResult<Prisma.$RutinaPayload, S>

  type RutinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RutinaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RutinaCountAggregateInputType | true
    }

  export interface RutinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rutina'], meta: { name: 'Rutina' } }
    /**
     * Find zero or one Rutina that matches the filter.
     * @param {RutinaFindUniqueArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaFindUniqueArgs>(args: SelectSubset<T, RutinaFindUniqueArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rutina that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RutinaFindUniqueOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rutina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaFindFirstArgs>(args?: SelectSubset<T, RutinaFindFirstArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rutina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rutinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutinas
     * const rutinas = await prisma.rutina.findMany()
     * 
     * // Get first 10 Rutinas
     * const rutinas = await prisma.rutina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaWithIdOnly = await prisma.rutina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaFindManyArgs>(args?: SelectSubset<T, RutinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rutina.
     * @param {RutinaCreateArgs} args - Arguments to create a Rutina.
     * @example
     * // Create one Rutina
     * const Rutina = await prisma.rutina.create({
     *   data: {
     *     // ... data to create a Rutina
     *   }
     * })
     * 
     */
    create<T extends RutinaCreateArgs>(args: SelectSubset<T, RutinaCreateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rutinas.
     * @param {RutinaCreateManyArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaCreateManyArgs>(args?: SelectSubset<T, RutinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutinas and returns the data saved in the database.
     * @param {RutinaCreateManyAndReturnArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rutina.
     * @param {RutinaDeleteArgs} args - Arguments to delete one Rutina.
     * @example
     * // Delete one Rutina
     * const Rutina = await prisma.rutina.delete({
     *   where: {
     *     // ... filter to delete one Rutina
     *   }
     * })
     * 
     */
    delete<T extends RutinaDeleteArgs>(args: SelectSubset<T, RutinaDeleteArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rutina.
     * @param {RutinaUpdateArgs} args - Arguments to update one Rutina.
     * @example
     * // Update one Rutina
     * const rutina = await prisma.rutina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaUpdateArgs>(args: SelectSubset<T, RutinaUpdateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rutinas.
     * @param {RutinaDeleteManyArgs} args - Arguments to filter Rutinas to delete.
     * @example
     * // Delete a few Rutinas
     * const { count } = await prisma.rutina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaDeleteManyArgs>(args?: SelectSubset<T, RutinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaUpdateManyArgs>(args: SelectSubset<T, RutinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rutina.
     * @param {RutinaUpsertArgs} args - Arguments to update or create a Rutina.
     * @example
     * // Update or create a Rutina
     * const rutina = await prisma.rutina.upsert({
     *   create: {
     *     // ... data to create a Rutina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rutina we want to update
     *   }
     * })
     */
    upsert<T extends RutinaUpsertArgs>(args: SelectSubset<T, RutinaUpsertArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaCountArgs} args - Arguments to filter Rutinas to count.
     * @example
     * // Count the number of Rutinas
     * const count = await prisma.rutina.count({
     *   where: {
     *     // ... the filter for the Rutinas we want to count
     *   }
     * })
    **/
    count<T extends RutinaCountArgs>(
      args?: Subset<T, RutinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutinaAggregateArgs>(args: Subset<T, RutinaAggregateArgs>): Prisma.PrismaPromise<GetRutinaAggregateType<T>>

    /**
     * Group by Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaGroupByArgs} args - Group by arguments.
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
      T extends RutinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaGroupByArgs['orderBy'] }
        : { orderBy?: RutinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rutina model
   */
  readonly fields: RutinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rutina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ejercicios<T extends Rutina$ejerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$ejerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Rutina model
   */ 
  interface RutinaFieldRefs {
    readonly id: FieldRef<"Rutina", 'Int'>
    readonly nombre: FieldRef<"Rutina", 'String'>
    readonly diaSemana: FieldRef<"Rutina", 'String'>
    readonly descripcion: FieldRef<"Rutina", 'String'>
    readonly activa: FieldRef<"Rutina", 'Boolean'>
    readonly clienteId: FieldRef<"Rutina", 'Int'>
    readonly createdAt: FieldRef<"Rutina", 'DateTime'>
    readonly updatedAt: FieldRef<"Rutina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rutina findUnique
   */
  export type RutinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findUniqueOrThrow
   */
  export type RutinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findFirst
   */
  export type RutinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findFirstOrThrow
   */
  export type RutinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findMany
   */
  export type RutinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutinas to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina create
   */
  export type RutinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Rutina.
     */
    data: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
  }

  /**
   * Rutina createMany
   */
  export type RutinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rutina createManyAndReturn
   */
  export type RutinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina update
   */
  export type RutinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Rutina.
     */
    data: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
    /**
     * Choose, which Rutina to update.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina updateMany
   */
  export type RutinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
  }

  /**
   * Rutina upsert
   */
  export type RutinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Rutina to update in case it exists.
     */
    where: RutinaWhereUniqueInput
    /**
     * In case the Rutina found by the `where` argument doesn't exist, create a new Rutina with this data.
     */
    create: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
    /**
     * In case the Rutina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
  }

  /**
   * Rutina delete
   */
  export type RutinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter which Rutina to delete.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina deleteMany
   */
  export type RutinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutinas to delete
     */
    where?: RutinaWhereInput
  }

  /**
   * Rutina.ejercicios
   */
  export type Rutina$ejerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    cursor?: RutinaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * Rutina without action
   */
  export type RutinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
  }


  /**
   * Model RutinaEjercicio
   */

  export type AggregateRutinaEjercicio = {
    _count: RutinaEjercicioCountAggregateOutputType | null
    _avg: RutinaEjercicioAvgAggregateOutputType | null
    _sum: RutinaEjercicioSumAggregateOutputType | null
    _min: RutinaEjercicioMinAggregateOutputType | null
    _max: RutinaEjercicioMaxAggregateOutputType | null
  }

  export type RutinaEjercicioAvgAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    orden: number | null
    series: number | null
    repeticiones: number | null
    peso: number | null
    descansoSeg: number | null
  }

  export type RutinaEjercicioSumAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    orden: number | null
    series: number | null
    repeticiones: number | null
    peso: number | null
    descansoSeg: number | null
  }

  export type RutinaEjercicioMinAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    orden: number | null
    series: number | null
    repeticiones: number | null
    peso: number | null
    descansoSeg: number | null
    observaciones: string | null
    createdAt: Date | null
  }

  export type RutinaEjercicioMaxAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    orden: number | null
    series: number | null
    repeticiones: number | null
    peso: number | null
    descansoSeg: number | null
    observaciones: string | null
    createdAt: Date | null
  }

  export type RutinaEjercicioCountAggregateOutputType = {
    id: number
    rutinaId: number
    ejercicioId: number
    orden: number
    series: number
    repeticiones: number
    peso: number
    descansoSeg: number
    observaciones: number
    createdAt: number
    _all: number
  }


  export type RutinaEjercicioAvgAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    orden?: true
    series?: true
    repeticiones?: true
    peso?: true
    descansoSeg?: true
  }

  export type RutinaEjercicioSumAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    orden?: true
    series?: true
    repeticiones?: true
    peso?: true
    descansoSeg?: true
  }

  export type RutinaEjercicioMinAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    orden?: true
    series?: true
    repeticiones?: true
    peso?: true
    descansoSeg?: true
    observaciones?: true
    createdAt?: true
  }

  export type RutinaEjercicioMaxAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    orden?: true
    series?: true
    repeticiones?: true
    peso?: true
    descansoSeg?: true
    observaciones?: true
    createdAt?: true
  }

  export type RutinaEjercicioCountAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    orden?: true
    series?: true
    repeticiones?: true
    peso?: true
    descansoSeg?: true
    observaciones?: true
    createdAt?: true
    _all?: true
  }

  export type RutinaEjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutinaEjercicio to aggregate.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RutinaEjercicios
    **/
    _count?: true | RutinaEjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaEjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaEjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaEjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaEjercicioMaxAggregateInputType
  }

  export type GetRutinaEjercicioAggregateType<T extends RutinaEjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateRutinaEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutinaEjercicio[P]>
      : GetScalarType<T[P], AggregateRutinaEjercicio[P]>
  }




  export type RutinaEjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithAggregationInput | RutinaEjercicioOrderByWithAggregationInput[]
    by: RutinaEjercicioScalarFieldEnum[] | RutinaEjercicioScalarFieldEnum
    having?: RutinaEjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaEjercicioCountAggregateInputType | true
    _avg?: RutinaEjercicioAvgAggregateInputType
    _sum?: RutinaEjercicioSumAggregateInputType
    _min?: RutinaEjercicioMinAggregateInputType
    _max?: RutinaEjercicioMaxAggregateInputType
  }

  export type RutinaEjercicioGroupByOutputType = {
    id: number
    rutinaId: number
    ejercicioId: number
    orden: number
    series: number
    repeticiones: number
    peso: number | null
    descansoSeg: number | null
    observaciones: string | null
    createdAt: Date
    _count: RutinaEjercicioCountAggregateOutputType | null
    _avg: RutinaEjercicioAvgAggregateOutputType | null
    _sum: RutinaEjercicioSumAggregateOutputType | null
    _min: RutinaEjercicioMinAggregateOutputType | null
    _max: RutinaEjercicioMaxAggregateOutputType | null
  }

  type GetRutinaEjercicioGroupByPayload<T extends RutinaEjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaEjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaEjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaEjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaEjercicioGroupByOutputType[P]>
        }
      >
    >


  export type RutinaEjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    orden?: boolean
    series?: boolean
    repeticiones?: boolean
    peso?: boolean
    descansoSeg?: boolean
    observaciones?: boolean
    createdAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    orden?: boolean
    series?: boolean
    repeticiones?: boolean
    peso?: boolean
    descansoSeg?: boolean
    observaciones?: boolean
    createdAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectScalar = {
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    orden?: boolean
    series?: boolean
    repeticiones?: boolean
    peso?: boolean
    descansoSeg?: boolean
    observaciones?: boolean
    createdAt?: boolean
  }

  export type RutinaEjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RutinaEjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }

  export type $RutinaEjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RutinaEjercicio"
    objects: {
      rutina: Prisma.$RutinaPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rutinaId: number
      ejercicioId: number
      orden: number
      series: number
      repeticiones: number
      peso: number | null
      descansoSeg: number | null
      observaciones: string | null
      createdAt: Date
    }, ExtArgs["result"]["rutinaEjercicio"]>
    composites: {}
  }

  type RutinaEjercicioGetPayload<S extends boolean | null | undefined | RutinaEjercicioDefaultArgs> = $Result.GetResult<Prisma.$RutinaEjercicioPayload, S>

  type RutinaEjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RutinaEjercicioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RutinaEjercicioCountAggregateInputType | true
    }

  export interface RutinaEjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RutinaEjercicio'], meta: { name: 'RutinaEjercicio' } }
    /**
     * Find zero or one RutinaEjercicio that matches the filter.
     * @param {RutinaEjercicioFindUniqueArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaEjercicioFindUniqueArgs>(args: SelectSubset<T, RutinaEjercicioFindUniqueArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RutinaEjercicio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RutinaEjercicioFindUniqueOrThrowArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaEjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RutinaEjercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindFirstArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaEjercicioFindFirstArgs>(args?: SelectSubset<T, RutinaEjercicioFindFirstArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RutinaEjercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindFirstOrThrowArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaEjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaEjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RutinaEjercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RutinaEjercicios
     * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany()
     * 
     * // Get first 10 RutinaEjercicios
     * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaEjercicioFindManyArgs>(args?: SelectSubset<T, RutinaEjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RutinaEjercicio.
     * @param {RutinaEjercicioCreateArgs} args - Arguments to create a RutinaEjercicio.
     * @example
     * // Create one RutinaEjercicio
     * const RutinaEjercicio = await prisma.rutinaEjercicio.create({
     *   data: {
     *     // ... data to create a RutinaEjercicio
     *   }
     * })
     * 
     */
    create<T extends RutinaEjercicioCreateArgs>(args: SelectSubset<T, RutinaEjercicioCreateArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RutinaEjercicios.
     * @param {RutinaEjercicioCreateManyArgs} args - Arguments to create many RutinaEjercicios.
     * @example
     * // Create many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaEjercicioCreateManyArgs>(args?: SelectSubset<T, RutinaEjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RutinaEjercicios and returns the data saved in the database.
     * @param {RutinaEjercicioCreateManyAndReturnArgs} args - Arguments to create many RutinaEjercicios.
     * @example
     * // Create many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RutinaEjercicios and only return the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaEjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaEjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RutinaEjercicio.
     * @param {RutinaEjercicioDeleteArgs} args - Arguments to delete one RutinaEjercicio.
     * @example
     * // Delete one RutinaEjercicio
     * const RutinaEjercicio = await prisma.rutinaEjercicio.delete({
     *   where: {
     *     // ... filter to delete one RutinaEjercicio
     *   }
     * })
     * 
     */
    delete<T extends RutinaEjercicioDeleteArgs>(args: SelectSubset<T, RutinaEjercicioDeleteArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RutinaEjercicio.
     * @param {RutinaEjercicioUpdateArgs} args - Arguments to update one RutinaEjercicio.
     * @example
     * // Update one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaEjercicioUpdateArgs>(args: SelectSubset<T, RutinaEjercicioUpdateArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RutinaEjercicios.
     * @param {RutinaEjercicioDeleteManyArgs} args - Arguments to filter RutinaEjercicios to delete.
     * @example
     * // Delete a few RutinaEjercicios
     * const { count } = await prisma.rutinaEjercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaEjercicioDeleteManyArgs>(args?: SelectSubset<T, RutinaEjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutinaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaEjercicioUpdateManyArgs>(args: SelectSubset<T, RutinaEjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RutinaEjercicio.
     * @param {RutinaEjercicioUpsertArgs} args - Arguments to update or create a RutinaEjercicio.
     * @example
     * // Update or create a RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.upsert({
     *   create: {
     *     // ... data to create a RutinaEjercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RutinaEjercicio we want to update
     *   }
     * })
     */
    upsert<T extends RutinaEjercicioUpsertArgs>(args: SelectSubset<T, RutinaEjercicioUpsertArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RutinaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioCountArgs} args - Arguments to filter RutinaEjercicios to count.
     * @example
     * // Count the number of RutinaEjercicios
     * const count = await prisma.rutinaEjercicio.count({
     *   where: {
     *     // ... the filter for the RutinaEjercicios we want to count
     *   }
     * })
    **/
    count<T extends RutinaEjercicioCountArgs>(
      args?: Subset<T, RutinaEjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaEjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RutinaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutinaEjercicioAggregateArgs>(args: Subset<T, RutinaEjercicioAggregateArgs>): Prisma.PrismaPromise<GetRutinaEjercicioAggregateType<T>>

    /**
     * Group by RutinaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioGroupByArgs} args - Group by arguments.
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
      T extends RutinaEjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaEjercicioGroupByArgs['orderBy'] }
        : { orderBy?: RutinaEjercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutinaEjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RutinaEjercicio model
   */
  readonly fields: RutinaEjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RutinaEjercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaEjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ejercicio<T extends EjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioDefaultArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RutinaEjercicio model
   */ 
  interface RutinaEjercicioFieldRefs {
    readonly id: FieldRef<"RutinaEjercicio", 'Int'>
    readonly rutinaId: FieldRef<"RutinaEjercicio", 'Int'>
    readonly ejercicioId: FieldRef<"RutinaEjercicio", 'Int'>
    readonly orden: FieldRef<"RutinaEjercicio", 'Int'>
    readonly series: FieldRef<"RutinaEjercicio", 'Int'>
    readonly repeticiones: FieldRef<"RutinaEjercicio", 'Int'>
    readonly peso: FieldRef<"RutinaEjercicio", 'Float'>
    readonly descansoSeg: FieldRef<"RutinaEjercicio", 'Int'>
    readonly observaciones: FieldRef<"RutinaEjercicio", 'String'>
    readonly createdAt: FieldRef<"RutinaEjercicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RutinaEjercicio findUnique
   */
  export type RutinaEjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio findUniqueOrThrow
   */
  export type RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio findFirst
   */
  export type RutinaEjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio findFirstOrThrow
   */
  export type RutinaEjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio findMany
   */
  export type RutinaEjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicios to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio create
   */
  export type RutinaEjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a RutinaEjercicio.
     */
    data: XOR<RutinaEjercicioCreateInput, RutinaEjercicioUncheckedCreateInput>
  }

  /**
   * RutinaEjercicio createMany
   */
  export type RutinaEjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RutinaEjercicios.
     */
    data: RutinaEjercicioCreateManyInput | RutinaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RutinaEjercicio createManyAndReturn
   */
  export type RutinaEjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RutinaEjercicios.
     */
    data: RutinaEjercicioCreateManyInput | RutinaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutinaEjercicio update
   */
  export type RutinaEjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a RutinaEjercicio.
     */
    data: XOR<RutinaEjercicioUpdateInput, RutinaEjercicioUncheckedUpdateInput>
    /**
     * Choose, which RutinaEjercicio to update.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio updateMany
   */
  export type RutinaEjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RutinaEjercicios.
     */
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which RutinaEjercicios to update
     */
    where?: RutinaEjercicioWhereInput
  }

  /**
   * RutinaEjercicio upsert
   */
  export type RutinaEjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the RutinaEjercicio to update in case it exists.
     */
    where: RutinaEjercicioWhereUniqueInput
    /**
     * In case the RutinaEjercicio found by the `where` argument doesn't exist, create a new RutinaEjercicio with this data.
     */
    create: XOR<RutinaEjercicioCreateInput, RutinaEjercicioUncheckedCreateInput>
    /**
     * In case the RutinaEjercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaEjercicioUpdateInput, RutinaEjercicioUncheckedUpdateInput>
  }

  /**
   * RutinaEjercicio delete
   */
  export type RutinaEjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter which RutinaEjercicio to delete.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio deleteMany
   */
  export type RutinaEjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutinaEjercicios to delete
     */
    where?: RutinaEjercicioWhereInput
  }

  /**
   * RutinaEjercicio without action
   */
  export type RutinaEjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
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


  export const AdministradorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const FamiliaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    plan: 'plan',
    activa: 'activa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FamiliaScalarFieldEnum = (typeof FamiliaScalarFieldEnum)[keyof typeof FamiliaScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellidoP: 'apellidoP',
    apellidoM: 'apellidoM',
    codigoQr: 'codigoQr',
    telefono: 'telefono',
    email: 'email',
    fechaNacimiento: 'fechaNacimiento',
    activo: 'activo',
    esTitular: 'esTitular',
    familiaId: 'familiaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EjercicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    videoUrl: 'videoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EjercicioScalarFieldEnum = (typeof EjercicioScalarFieldEnum)[keyof typeof EjercicioScalarFieldEnum]


  export const RutinaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    diaSemana: 'diaSemana',
    descripcion: 'descripcion',
    activa: 'activa',
    clienteId: 'clienteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RutinaScalarFieldEnum = (typeof RutinaScalarFieldEnum)[keyof typeof RutinaScalarFieldEnum]


  export const RutinaEjercicioScalarFieldEnum: {
    id: 'id',
    rutinaId: 'rutinaId',
    ejercicioId: 'ejercicioId',
    orden: 'orden',
    series: 'series',
    repeticiones: 'repeticiones',
    peso: 'peso',
    descansoSeg: 'descansoSeg',
    observaciones: 'observaciones',
    createdAt: 'createdAt'
  };

  export type RutinaEjercicioScalarFieldEnum = (typeof RutinaEjercicioScalarFieldEnum)[keyof typeof RutinaEjercicioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id?: IntFilter<"Administrador"> | number
    nombre?: StringFilter<"Administrador"> | string
    email?: StringFilter<"Administrador"> | string
    passwordHash?: StringFilter<"Administrador"> | string
    createdAt?: DateTimeFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeFilter<"Administrador"> | Date | string
  }

  export type AdministradorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    nombre?: StringFilter<"Administrador"> | string
    passwordHash?: StringFilter<"Administrador"> | string
    createdAt?: DateTimeFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeFilter<"Administrador"> | Date | string
  }, "id" | "email">

  export type AdministradorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Administrador"> | number
    nombre?: StringWithAggregatesFilter<"Administrador"> | string
    email?: StringWithAggregatesFilter<"Administrador"> | string
    passwordHash?: StringWithAggregatesFilter<"Administrador"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
  }

  export type FamiliaWhereInput = {
    AND?: FamiliaWhereInput | FamiliaWhereInput[]
    OR?: FamiliaWhereInput[]
    NOT?: FamiliaWhereInput | FamiliaWhereInput[]
    id?: IntFilter<"Familia"> | number
    nombre?: StringFilter<"Familia"> | string
    plan?: StringNullableFilter<"Familia"> | string | null
    activa?: BoolFilter<"Familia"> | boolean
    createdAt?: DateTimeFilter<"Familia"> | Date | string
    updatedAt?: DateTimeFilter<"Familia"> | Date | string
    integrantes?: ClienteListRelationFilter
  }

  export type FamiliaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    plan?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    integrantes?: ClienteOrderByRelationAggregateInput
  }

  export type FamiliaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FamiliaWhereInput | FamiliaWhereInput[]
    OR?: FamiliaWhereInput[]
    NOT?: FamiliaWhereInput | FamiliaWhereInput[]
    nombre?: StringFilter<"Familia"> | string
    plan?: StringNullableFilter<"Familia"> | string | null
    activa?: BoolFilter<"Familia"> | boolean
    createdAt?: DateTimeFilter<"Familia"> | Date | string
    updatedAt?: DateTimeFilter<"Familia"> | Date | string
    integrantes?: ClienteListRelationFilter
  }, "id">

  export type FamiliaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    plan?: SortOrderInput | SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FamiliaCountOrderByAggregateInput
    _avg?: FamiliaAvgOrderByAggregateInput
    _max?: FamiliaMaxOrderByAggregateInput
    _min?: FamiliaMinOrderByAggregateInput
    _sum?: FamiliaSumOrderByAggregateInput
  }

  export type FamiliaScalarWhereWithAggregatesInput = {
    AND?: FamiliaScalarWhereWithAggregatesInput | FamiliaScalarWhereWithAggregatesInput[]
    OR?: FamiliaScalarWhereWithAggregatesInput[]
    NOT?: FamiliaScalarWhereWithAggregatesInput | FamiliaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Familia"> | number
    nombre?: StringWithAggregatesFilter<"Familia"> | string
    plan?: StringNullableWithAggregatesFilter<"Familia"> | string | null
    activa?: BoolWithAggregatesFilter<"Familia"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Familia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Familia"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    apellidoP?: StringFilter<"Cliente"> | string
    apellidoM?: StringFilter<"Cliente"> | string
    codigoQr?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    activo?: BoolFilter<"Cliente"> | boolean
    esTitular?: BoolFilter<"Cliente"> | boolean
    familiaId?: IntNullableFilter<"Cliente"> | number | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    familia?: XOR<FamiliaNullableRelationFilter, FamiliaWhereInput> | null
    rutinas?: RutinaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidoP?: SortOrder
    apellidoM?: SortOrder
    codigoQr?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    activo?: SortOrder
    esTitular?: SortOrder
    familiaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familia?: FamiliaOrderByWithRelationInput
    rutinas?: RutinaOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigoQr?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    apellidoP?: StringFilter<"Cliente"> | string
    apellidoM?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    activo?: BoolFilter<"Cliente"> | boolean
    esTitular?: BoolFilter<"Cliente"> | boolean
    familiaId?: IntNullableFilter<"Cliente"> | number | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    familia?: XOR<FamiliaNullableRelationFilter, FamiliaWhereInput> | null
    rutinas?: RutinaListRelationFilter
  }, "id" | "codigoQr">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidoP?: SortOrder
    apellidoM?: SortOrder
    codigoQr?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    activo?: SortOrder
    esTitular?: SortOrder
    familiaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    apellidoP?: StringWithAggregatesFilter<"Cliente"> | string
    apellidoM?: StringWithAggregatesFilter<"Cliente"> | string
    codigoQr?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    fechaNacimiento?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    activo?: BoolWithAggregatesFilter<"Cliente"> | boolean
    esTitular?: BoolWithAggregatesFilter<"Cliente"> | boolean
    familiaId?: IntNullableWithAggregatesFilter<"Cliente"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type EjercicioWhereInput = {
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    id?: IntFilter<"Ejercicio"> | number
    nombre?: StringFilter<"Ejercicio"> | string
    descripcion?: StringNullableFilter<"Ejercicio"> | string | null
    videoUrl?: StringNullableFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
    rutinas?: RutinaEjercicioListRelationFilter
  }

  export type EjercicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rutinas?: RutinaEjercicioOrderByRelationAggregateInput
  }

  export type EjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    descripcion?: StringNullableFilter<"Ejercicio"> | string | null
    videoUrl?: StringNullableFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
    rutinas?: RutinaEjercicioListRelationFilter
  }, "id" | "nombre">

  export type EjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EjercicioCountOrderByAggregateInput
    _avg?: EjercicioAvgOrderByAggregateInput
    _max?: EjercicioMaxOrderByAggregateInput
    _min?: EjercicioMinOrderByAggregateInput
    _sum?: EjercicioSumOrderByAggregateInput
  }

  export type EjercicioScalarWhereWithAggregatesInput = {
    AND?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    OR?: EjercicioScalarWhereWithAggregatesInput[]
    NOT?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ejercicio"> | number
    nombre?: StringWithAggregatesFilter<"Ejercicio"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Ejercicio"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ejercicio"> | Date | string
  }

  export type RutinaWhereInput = {
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    diaSemana?: StringNullableFilter<"Rutina"> | string | null
    descripcion?: StringNullableFilter<"Rutina"> | string | null
    activa?: BoolFilter<"Rutina"> | boolean
    clienteId?: IntFilter<"Rutina"> | number
    createdAt?: DateTimeFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeFilter<"Rutina"> | Date | string
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    ejercicios?: RutinaEjercicioListRelationFilter
  }

  export type RutinaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    diaSemana?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    activa?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    ejercicios?: RutinaEjercicioOrderByRelationAggregateInput
  }

  export type RutinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    nombre?: StringFilter<"Rutina"> | string
    diaSemana?: StringNullableFilter<"Rutina"> | string | null
    descripcion?: StringNullableFilter<"Rutina"> | string | null
    activa?: BoolFilter<"Rutina"> | boolean
    clienteId?: IntFilter<"Rutina"> | number
    createdAt?: DateTimeFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeFilter<"Rutina"> | Date | string
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    ejercicios?: RutinaEjercicioListRelationFilter
  }, "id">

  export type RutinaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    diaSemana?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    activa?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RutinaCountOrderByAggregateInput
    _avg?: RutinaAvgOrderByAggregateInput
    _max?: RutinaMaxOrderByAggregateInput
    _min?: RutinaMinOrderByAggregateInput
    _sum?: RutinaSumOrderByAggregateInput
  }

  export type RutinaScalarWhereWithAggregatesInput = {
    AND?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    OR?: RutinaScalarWhereWithAggregatesInput[]
    NOT?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rutina"> | number
    nombre?: StringWithAggregatesFilter<"Rutina"> | string
    diaSemana?: StringNullableWithAggregatesFilter<"Rutina"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"Rutina"> | string | null
    activa?: BoolWithAggregatesFilter<"Rutina"> | boolean
    clienteId?: IntWithAggregatesFilter<"Rutina"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rutina"> | Date | string
  }

  export type RutinaEjercicioWhereInput = {
    AND?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    OR?: RutinaEjercicioWhereInput[]
    NOT?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    id?: IntFilter<"RutinaEjercicio"> | number
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    peso?: FloatNullableFilter<"RutinaEjercicio"> | number | null
    descansoSeg?: IntNullableFilter<"RutinaEjercicio"> | number | null
    observaciones?: StringNullableFilter<"RutinaEjercicio"> | string | null
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    rutina?: XOR<RutinaRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioRelationFilter, EjercicioWhereInput>
  }

  export type RutinaEjercicioOrderByWithRelationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    orden?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    peso?: SortOrderInput | SortOrder
    descansoSeg?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rutina?: RutinaOrderByWithRelationInput
    ejercicio?: EjercicioOrderByWithRelationInput
  }

  export type RutinaEjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    OR?: RutinaEjercicioWhereInput[]
    NOT?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    peso?: FloatNullableFilter<"RutinaEjercicio"> | number | null
    descansoSeg?: IntNullableFilter<"RutinaEjercicio"> | number | null
    observaciones?: StringNullableFilter<"RutinaEjercicio"> | string | null
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    rutina?: XOR<RutinaRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioRelationFilter, EjercicioWhereInput>
  }, "id">

  export type RutinaEjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    orden?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    peso?: SortOrderInput | SortOrder
    descansoSeg?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RutinaEjercicioCountOrderByAggregateInput
    _avg?: RutinaEjercicioAvgOrderByAggregateInput
    _max?: RutinaEjercicioMaxOrderByAggregateInput
    _min?: RutinaEjercicioMinOrderByAggregateInput
    _sum?: RutinaEjercicioSumOrderByAggregateInput
  }

  export type RutinaEjercicioScalarWhereWithAggregatesInput = {
    AND?: RutinaEjercicioScalarWhereWithAggregatesInput | RutinaEjercicioScalarWhereWithAggregatesInput[]
    OR?: RutinaEjercicioScalarWhereWithAggregatesInput[]
    NOT?: RutinaEjercicioScalarWhereWithAggregatesInput | RutinaEjercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    rutinaId?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    orden?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    series?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    repeticiones?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    peso?: FloatNullableWithAggregatesFilter<"RutinaEjercicio"> | number | null
    descansoSeg?: IntNullableWithAggregatesFilter<"RutinaEjercicio"> | number | null
    observaciones?: StringNullableWithAggregatesFilter<"RutinaEjercicio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RutinaEjercicio"> | Date | string
  }

  export type AdministradorCreateInput = {
    nombre: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateManyInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamiliaCreateInput = {
    nombre: string
    plan?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    integrantes?: ClienteCreateNestedManyWithoutFamiliaInput
  }

  export type FamiliaUncheckedCreateInput = {
    id?: number
    nombre: string
    plan?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    integrantes?: ClienteUncheckedCreateNestedManyWithoutFamiliaInput
  }

  export type FamiliaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrantes?: ClienteUpdateManyWithoutFamiliaNestedInput
  }

  export type FamiliaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrantes?: ClienteUncheckedUpdateManyWithoutFamiliaNestedInput
  }

  export type FamiliaCreateManyInput = {
    id?: number
    nombre: string
    plan?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamiliaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamiliaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr?: string | null
    telefono?: string | null
    email?: string | null
    fechaNacimiento?: Date | string | null
    activo?: boolean
    esTitular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familia?: FamiliaCreateNestedOneWithoutIntegrantesInput
    rutinas?: RutinaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr?: string | null
    telefono?: string | null
    email?: string | null
    fechaNacimiento?: Date | string | null
    activo?: boolean
    esTitular?: boolean
    familiaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familia?: FamiliaUpdateOneWithoutIntegrantesNestedInput
    rutinas?: RutinaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    familiaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr?: string | null
    telefono?: string | null
    email?: string | null
    fechaNacimiento?: Date | string | null
    activo?: boolean
    esTitular?: boolean
    familiaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    familiaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioCreateInput = {
    nombre: string
    descripcion?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaEjercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaEjercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaCreateInput = {
    nombre: string
    diaSemana?: string | null
    descripcion?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutRutinasInput
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateInput = {
    id?: number
    nombre: string
    diaSemana?: string | null
    descripcion?: string | null
    activa?: boolean
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutRutinasNestedInput
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaCreateManyInput = {
    id?: number
    nombre: string
    diaSemana?: string | null
    descripcion?: string | null
    activa?: boolean
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateInput = {
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutEjerciciosInput
    ejercicio: EjercicioCreateNestedOneWithoutRutinasInput
  }

  export type RutinaEjercicioUncheckedCreateInput = {
    id?: number
    rutinaId: number
    ejercicioId: number
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
  }

  export type RutinaEjercicioUpdateInput = {
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutEjerciciosNestedInput
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutinasNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyInput = {
    id?: number
    rutinaId: number
    ejercicioId: number
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
  }

  export type RutinaEjercicioUpdateManyMutationInput = {
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdministradorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamiliaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    plan?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamiliaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FamiliaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    plan?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamiliaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    plan?: SortOrder
    activa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamiliaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FamiliaNullableRelationFilter = {
    is?: FamiliaWhereInput | null
    isNot?: FamiliaWhereInput | null
  }

  export type RutinaListRelationFilter = {
    every?: RutinaWhereInput
    some?: RutinaWhereInput
    none?: RutinaWhereInput
  }

  export type RutinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidoP?: SortOrder
    apellidoM?: SortOrder
    codigoQr?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    fechaNacimiento?: SortOrder
    activo?: SortOrder
    esTitular?: SortOrder
    familiaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
    familiaId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidoP?: SortOrder
    apellidoM?: SortOrder
    codigoQr?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    fechaNacimiento?: SortOrder
    activo?: SortOrder
    esTitular?: SortOrder
    familiaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidoP?: SortOrder
    apellidoM?: SortOrder
    codigoQr?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    fechaNacimiento?: SortOrder
    activo?: SortOrder
    esTitular?: SortOrder
    familiaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
    familiaId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RutinaEjercicioListRelationFilter = {
    every?: RutinaEjercicioWhereInput
    some?: RutinaEjercicioWhereInput
    none?: RutinaEjercicioWhereInput
  }

  export type RutinaEjercicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type RutinaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    diaSemana?: SortOrder
    descripcion?: SortOrder
    activa?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
  }

  export type RutinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    diaSemana?: SortOrder
    descripcion?: SortOrder
    activa?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    diaSemana?: SortOrder
    descripcion?: SortOrder
    activa?: SortOrder
    clienteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RutinaRelationFilter = {
    is?: RutinaWhereInput
    isNot?: RutinaWhereInput
  }

  export type EjercicioRelationFilter = {
    is?: EjercicioWhereInput
    isNot?: EjercicioWhereInput
  }

  export type RutinaEjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    orden?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    peso?: SortOrder
    descansoSeg?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
  }

  export type RutinaEjercicioAvgOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    orden?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    peso?: SortOrder
    descansoSeg?: SortOrder
  }

  export type RutinaEjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    orden?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    peso?: SortOrder
    descansoSeg?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
  }

  export type RutinaEjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    orden?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    peso?: SortOrder
    descansoSeg?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
  }

  export type RutinaEjercicioSumOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    orden?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    peso?: SortOrder
    descansoSeg?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteCreateNestedManyWithoutFamiliaInput = {
    create?: XOR<ClienteCreateWithoutFamiliaInput, ClienteUncheckedCreateWithoutFamiliaInput> | ClienteCreateWithoutFamiliaInput[] | ClienteUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutFamiliaInput | ClienteCreateOrConnectWithoutFamiliaInput[]
    createMany?: ClienteCreateManyFamiliaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutFamiliaInput = {
    create?: XOR<ClienteCreateWithoutFamiliaInput, ClienteUncheckedCreateWithoutFamiliaInput> | ClienteCreateWithoutFamiliaInput[] | ClienteUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutFamiliaInput | ClienteCreateOrConnectWithoutFamiliaInput[]
    createMany?: ClienteCreateManyFamiliaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClienteUpdateManyWithoutFamiliaNestedInput = {
    create?: XOR<ClienteCreateWithoutFamiliaInput, ClienteUncheckedCreateWithoutFamiliaInput> | ClienteCreateWithoutFamiliaInput[] | ClienteUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutFamiliaInput | ClienteCreateOrConnectWithoutFamiliaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutFamiliaInput | ClienteUpsertWithWhereUniqueWithoutFamiliaInput[]
    createMany?: ClienteCreateManyFamiliaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutFamiliaInput | ClienteUpdateWithWhereUniqueWithoutFamiliaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutFamiliaInput | ClienteUpdateManyWithWhereWithoutFamiliaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutFamiliaNestedInput = {
    create?: XOR<ClienteCreateWithoutFamiliaInput, ClienteUncheckedCreateWithoutFamiliaInput> | ClienteCreateWithoutFamiliaInput[] | ClienteUncheckedCreateWithoutFamiliaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutFamiliaInput | ClienteCreateOrConnectWithoutFamiliaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutFamiliaInput | ClienteUpsertWithWhereUniqueWithoutFamiliaInput[]
    createMany?: ClienteCreateManyFamiliaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutFamiliaInput | ClienteUpdateWithWhereUniqueWithoutFamiliaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutFamiliaInput | ClienteUpdateManyWithWhereWithoutFamiliaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type FamiliaCreateNestedOneWithoutIntegrantesInput = {
    create?: XOR<FamiliaCreateWithoutIntegrantesInput, FamiliaUncheckedCreateWithoutIntegrantesInput>
    connectOrCreate?: FamiliaCreateOrConnectWithoutIntegrantesInput
    connect?: FamiliaWhereUniqueInput
  }

  export type RutinaCreateNestedManyWithoutClienteInput = {
    create?: XOR<RutinaCreateWithoutClienteInput, RutinaUncheckedCreateWithoutClienteInput> | RutinaCreateWithoutClienteInput[] | RutinaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutClienteInput | RutinaCreateOrConnectWithoutClienteInput[]
    createMany?: RutinaCreateManyClienteInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type RutinaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<RutinaCreateWithoutClienteInput, RutinaUncheckedCreateWithoutClienteInput> | RutinaCreateWithoutClienteInput[] | RutinaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutClienteInput | RutinaCreateOrConnectWithoutClienteInput[]
    createMany?: RutinaCreateManyClienteInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FamiliaUpdateOneWithoutIntegrantesNestedInput = {
    create?: XOR<FamiliaCreateWithoutIntegrantesInput, FamiliaUncheckedCreateWithoutIntegrantesInput>
    connectOrCreate?: FamiliaCreateOrConnectWithoutIntegrantesInput
    upsert?: FamiliaUpsertWithoutIntegrantesInput
    disconnect?: FamiliaWhereInput | boolean
    delete?: FamiliaWhereInput | boolean
    connect?: FamiliaWhereUniqueInput
    update?: XOR<XOR<FamiliaUpdateToOneWithWhereWithoutIntegrantesInput, FamiliaUpdateWithoutIntegrantesInput>, FamiliaUncheckedUpdateWithoutIntegrantesInput>
  }

  export type RutinaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RutinaCreateWithoutClienteInput, RutinaUncheckedCreateWithoutClienteInput> | RutinaCreateWithoutClienteInput[] | RutinaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutClienteInput | RutinaCreateOrConnectWithoutClienteInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutClienteInput | RutinaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RutinaCreateManyClienteInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutClienteInput | RutinaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutClienteInput | RutinaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RutinaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RutinaCreateWithoutClienteInput, RutinaUncheckedCreateWithoutClienteInput> | RutinaCreateWithoutClienteInput[] | RutinaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutClienteInput | RutinaCreateOrConnectWithoutClienteInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutClienteInput | RutinaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RutinaCreateManyClienteInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutClienteInput | RutinaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutClienteInput | RutinaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type RutinaEjercicioCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RutinaEjercicioUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutRutinasInput = {
    create?: XOR<ClienteCreateWithoutRutinasInput, ClienteUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRutinasInput
    connect?: ClienteWhereUniqueInput
  }

  export type RutinaEjercicioCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutRutinasNestedInput = {
    create?: XOR<ClienteCreateWithoutRutinasInput, ClienteUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRutinasInput
    upsert?: ClienteUpsertWithoutRutinasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutRutinasInput, ClienteUpdateWithoutRutinasInput>, ClienteUncheckedUpdateWithoutRutinasInput>
  }

  export type RutinaEjercicioUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput | RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput | RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RutinaCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutEjerciciosInput
    connect?: RutinaWhereUniqueInput
  }

  export type EjercicioCreateNestedOneWithoutRutinasInput = {
    create?: XOR<EjercicioCreateWithoutRutinasInput, EjercicioUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutinasInput
    connect?: EjercicioWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RutinaUpdateOneRequiredWithoutEjerciciosNestedInput = {
    create?: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutEjerciciosInput
    upsert?: RutinaUpsertWithoutEjerciciosInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutEjerciciosInput, RutinaUpdateWithoutEjerciciosInput>, RutinaUncheckedUpdateWithoutEjerciciosInput>
  }

  export type EjercicioUpdateOneRequiredWithoutRutinasNestedInput = {
    create?: XOR<EjercicioCreateWithoutRutinasInput, EjercicioUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutinasInput
    upsert?: EjercicioUpsertWithoutRutinasInput
    connect?: EjercicioWhereUniqueInput
    update?: XOR<XOR<EjercicioUpdateToOneWithWhereWithoutRutinasInput, EjercicioUpdateWithoutRutinasInput>, EjercicioUncheckedUpdateWithoutRutinasInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ClienteCreateWithoutFamiliaInput = {
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr?: string | null
    telefono?: string | null
    email?: string | null
    fechaNacimiento?: Date | string | null
    activo?: boolean
    esTitular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutFamiliaInput = {
    id?: number
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr?: string | null
    telefono?: string | null
    email?: string | null
    fechaNacimiento?: Date | string | null
    activo?: boolean
    esTitular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutFamiliaInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutFamiliaInput, ClienteUncheckedCreateWithoutFamiliaInput>
  }

  export type ClienteCreateManyFamiliaInputEnvelope = {
    data: ClienteCreateManyFamiliaInput | ClienteCreateManyFamiliaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutFamiliaInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutFamiliaInput, ClienteUncheckedUpdateWithoutFamiliaInput>
    create: XOR<ClienteCreateWithoutFamiliaInput, ClienteUncheckedCreateWithoutFamiliaInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutFamiliaInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutFamiliaInput, ClienteUncheckedUpdateWithoutFamiliaInput>
  }

  export type ClienteUpdateManyWithWhereWithoutFamiliaInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutFamiliaInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    apellidoP?: StringFilter<"Cliente"> | string
    apellidoM?: StringFilter<"Cliente"> | string
    codigoQr?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    activo?: BoolFilter<"Cliente"> | boolean
    esTitular?: BoolFilter<"Cliente"> | boolean
    familiaId?: IntNullableFilter<"Cliente"> | number | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
  }

  export type FamiliaCreateWithoutIntegrantesInput = {
    nombre: string
    plan?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamiliaUncheckedCreateWithoutIntegrantesInput = {
    id?: number
    nombre: string
    plan?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamiliaCreateOrConnectWithoutIntegrantesInput = {
    where: FamiliaWhereUniqueInput
    create: XOR<FamiliaCreateWithoutIntegrantesInput, FamiliaUncheckedCreateWithoutIntegrantesInput>
  }

  export type RutinaCreateWithoutClienteInput = {
    nombre: string
    diaSemana?: string | null
    descripcion?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutClienteInput = {
    id?: number
    nombre: string
    diaSemana?: string | null
    descripcion?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutClienteInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutClienteInput, RutinaUncheckedCreateWithoutClienteInput>
  }

  export type RutinaCreateManyClienteInputEnvelope = {
    data: RutinaCreateManyClienteInput | RutinaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type FamiliaUpsertWithoutIntegrantesInput = {
    update: XOR<FamiliaUpdateWithoutIntegrantesInput, FamiliaUncheckedUpdateWithoutIntegrantesInput>
    create: XOR<FamiliaCreateWithoutIntegrantesInput, FamiliaUncheckedCreateWithoutIntegrantesInput>
    where?: FamiliaWhereInput
  }

  export type FamiliaUpdateToOneWithWhereWithoutIntegrantesInput = {
    where?: FamiliaWhereInput
    data: XOR<FamiliaUpdateWithoutIntegrantesInput, FamiliaUncheckedUpdateWithoutIntegrantesInput>
  }

  export type FamiliaUpdateWithoutIntegrantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamiliaUncheckedUpdateWithoutIntegrantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaUpsertWithWhereUniqueWithoutClienteInput = {
    where: RutinaWhereUniqueInput
    update: XOR<RutinaUpdateWithoutClienteInput, RutinaUncheckedUpdateWithoutClienteInput>
    create: XOR<RutinaCreateWithoutClienteInput, RutinaUncheckedCreateWithoutClienteInput>
  }

  export type RutinaUpdateWithWhereUniqueWithoutClienteInput = {
    where: RutinaWhereUniqueInput
    data: XOR<RutinaUpdateWithoutClienteInput, RutinaUncheckedUpdateWithoutClienteInput>
  }

  export type RutinaUpdateManyWithWhereWithoutClienteInput = {
    where: RutinaScalarWhereInput
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyWithoutClienteInput>
  }

  export type RutinaScalarWhereInput = {
    AND?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    OR?: RutinaScalarWhereInput[]
    NOT?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    diaSemana?: StringNullableFilter<"Rutina"> | string | null
    descripcion?: StringNullableFilter<"Rutina"> | string | null
    activa?: BoolFilter<"Rutina"> | boolean
    clienteId?: IntFilter<"Rutina"> | number
    createdAt?: DateTimeFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeFilter<"Rutina"> | Date | string
  }

  export type RutinaEjercicioCreateWithoutEjercicioInput = {
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutEjerciciosInput
  }

  export type RutinaEjercicioUncheckedCreateWithoutEjercicioInput = {
    id?: number
    rutinaId: number
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
  }

  export type RutinaEjercicioCreateOrConnectWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    create: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RutinaEjercicioCreateManyEjercicioInputEnvelope = {
    data: RutinaEjercicioCreateManyEjercicioInput | RutinaEjercicioCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    update: XOR<RutinaEjercicioUpdateWithoutEjercicioInput, RutinaEjercicioUncheckedUpdateWithoutEjercicioInput>
    create: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    data: XOR<RutinaEjercicioUpdateWithoutEjercicioInput, RutinaEjercicioUncheckedUpdateWithoutEjercicioInput>
  }

  export type RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput = {
    where: RutinaEjercicioScalarWhereInput
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type RutinaEjercicioScalarWhereInput = {
    AND?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
    OR?: RutinaEjercicioScalarWhereInput[]
    NOT?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
    id?: IntFilter<"RutinaEjercicio"> | number
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    peso?: FloatNullableFilter<"RutinaEjercicio"> | number | null
    descansoSeg?: IntNullableFilter<"RutinaEjercicio"> | number | null
    observaciones?: StringNullableFilter<"RutinaEjercicio"> | string | null
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
  }

  export type ClienteCreateWithoutRutinasInput = {
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr?: string | null
    telefono?: string | null
    email?: string | null
    fechaNacimiento?: Date | string | null
    activo?: boolean
    esTitular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familia?: FamiliaCreateNestedOneWithoutIntegrantesInput
  }

  export type ClienteUncheckedCreateWithoutRutinasInput = {
    id?: number
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr?: string | null
    telefono?: string | null
    email?: string | null
    fechaNacimiento?: Date | string | null
    activo?: boolean
    esTitular?: boolean
    familiaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutRutinasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutRutinasInput, ClienteUncheckedCreateWithoutRutinasInput>
  }

  export type RutinaEjercicioCreateWithoutRutinaInput = {
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
    ejercicio: EjercicioCreateNestedOneWithoutRutinasInput
  }

  export type RutinaEjercicioUncheckedCreateWithoutRutinaInput = {
    id?: number
    ejercicioId: number
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
  }

  export type RutinaEjercicioCreateOrConnectWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    create: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput>
  }

  export type RutinaEjercicioCreateManyRutinaInputEnvelope = {
    data: RutinaEjercicioCreateManyRutinaInput | RutinaEjercicioCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutRutinasInput = {
    update: XOR<ClienteUpdateWithoutRutinasInput, ClienteUncheckedUpdateWithoutRutinasInput>
    create: XOR<ClienteCreateWithoutRutinasInput, ClienteUncheckedCreateWithoutRutinasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutRutinasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutRutinasInput, ClienteUncheckedUpdateWithoutRutinasInput>
  }

  export type ClienteUpdateWithoutRutinasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familia?: FamiliaUpdateOneWithoutIntegrantesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutRutinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    familiaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    update: XOR<RutinaEjercicioUpdateWithoutRutinaInput, RutinaEjercicioUncheckedUpdateWithoutRutinaInput>
    create: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput>
  }

  export type RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    data: XOR<RutinaEjercicioUpdateWithoutRutinaInput, RutinaEjercicioUncheckedUpdateWithoutRutinaInput>
  }

  export type RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput = {
    where: RutinaEjercicioScalarWhereInput
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyWithoutRutinaInput>
  }

  export type RutinaCreateWithoutEjerciciosInput = {
    nombre: string
    diaSemana?: string | null
    descripcion?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutRutinasInput
  }

  export type RutinaUncheckedCreateWithoutEjerciciosInput = {
    id?: number
    nombre: string
    diaSemana?: string | null
    descripcion?: string | null
    activa?: boolean
    clienteId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaCreateOrConnectWithoutEjerciciosInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
  }

  export type EjercicioCreateWithoutRutinasInput = {
    nombre: string
    descripcion?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioUncheckedCreateWithoutRutinasInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioCreateOrConnectWithoutRutinasInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutRutinasInput, EjercicioUncheckedCreateWithoutRutinasInput>
  }

  export type RutinaUpsertWithoutEjerciciosInput = {
    update: XOR<RutinaUpdateWithoutEjerciciosInput, RutinaUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutEjerciciosInput, RutinaUncheckedUpdateWithoutEjerciciosInput>
  }

  export type RutinaUpdateWithoutEjerciciosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutRutinasNestedInput
  }

  export type RutinaUncheckedUpdateWithoutEjerciciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    clienteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUpsertWithoutRutinasInput = {
    update: XOR<EjercicioUpdateWithoutRutinasInput, EjercicioUncheckedUpdateWithoutRutinasInput>
    create: XOR<EjercicioCreateWithoutRutinasInput, EjercicioUncheckedCreateWithoutRutinasInput>
    where?: EjercicioWhereInput
  }

  export type EjercicioUpdateToOneWithWhereWithoutRutinasInput = {
    where?: EjercicioWhereInput
    data: XOR<EjercicioUpdateWithoutRutinasInput, EjercicioUncheckedUpdateWithoutRutinasInput>
  }

  export type EjercicioUpdateWithoutRutinasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUncheckedUpdateWithoutRutinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateManyFamiliaInput = {
    id?: number
    nombre: string
    apellidoP: string
    apellidoM: string
    codigoQr?: string | null
    telefono?: string | null
    email?: string | null
    fechaNacimiento?: Date | string | null
    activo?: boolean
    esTitular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateWithoutFamiliaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutFamiliaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutFamiliaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellidoP?: StringFieldUpdateOperationsInput | string
    apellidoM?: StringFieldUpdateOperationsInput | string
    codigoQr?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    esTitular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaCreateManyClienteInput = {
    id?: number
    nombre: string
    diaSemana?: string | null
    descripcion?: string | null
    activa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaUpdateWithoutClienteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyEjercicioInput = {
    id?: number
    rutinaId: number
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
  }

  export type RutinaEjercicioUpdateWithoutEjercicioInput = {
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutEjerciciosNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyRutinaInput = {
    id?: number
    ejercicioId: number
    orden: number
    series: number
    repeticiones: number
    peso?: number | null
    descansoSeg?: number | null
    observaciones?: string | null
    createdAt?: Date | string
  }

  export type RutinaEjercicioUpdateWithoutRutinaInput = {
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutinasNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descansoSeg?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FamiliaCountOutputTypeDefaultArgs instead
     */
    export type FamiliaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamiliaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteCountOutputTypeDefaultArgs instead
     */
    export type ClienteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EjercicioCountOutputTypeDefaultArgs instead
     */
    export type EjercicioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EjercicioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RutinaCountOutputTypeDefaultArgs instead
     */
    export type RutinaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RutinaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdministradorDefaultArgs instead
     */
    export type AdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdministradorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamiliaDefaultArgs instead
     */
    export type FamiliaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamiliaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteDefaultArgs instead
     */
    export type ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EjercicioDefaultArgs instead
     */
    export type EjercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EjercicioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RutinaDefaultArgs instead
     */
    export type RutinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RutinaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RutinaEjercicioDefaultArgs instead
     */
    export type RutinaEjercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RutinaEjercicioDefaultArgs<ExtArgs>

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