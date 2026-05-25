
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Restaurante
 * 
 */
export type Restaurante = $Result.DefaultSelection<Prisma.$RestaurantePayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurante`: Exposes CRUD operations for the **Restaurante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurantes
    * const restaurantes = await prisma.restaurante.findMany()
    * ```
    */
  get restaurante(): Prisma.RestauranteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Usuario: 'Usuario',
    Restaurante: 'Restaurante',
    Produto: 'Produto',
    Pedido: 'Pedido',
    ItemPedido: 'ItemPedido'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "restaurante" | "produto" | "pedido" | "itemPedido"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Restaurante: {
        payload: Prisma.$RestaurantePayload<ExtArgs>
        fields: Prisma.RestauranteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestauranteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestauranteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          findFirst: {
            args: Prisma.RestauranteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestauranteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          findMany: {
            args: Prisma.RestauranteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>[]
          }
          create: {
            args: Prisma.RestauranteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          createMany: {
            args: Prisma.RestauranteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestauranteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>[]
          }
          delete: {
            args: Prisma.RestauranteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          update: {
            args: Prisma.RestauranteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          deleteMany: {
            args: Prisma.RestauranteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestauranteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestauranteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>[]
          }
          upsert: {
            args: Prisma.RestauranteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          aggregate: {
            args: Prisma.RestauranteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurante>
          }
          groupBy: {
            args: Prisma.RestauranteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestauranteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestauranteCountArgs<ExtArgs>
            result: $Utils.Optional<RestauranteCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    restaurante?: RestauranteOmit
    produto?: ProdutoOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type RestauranteCountOutputType
   */

  export type RestauranteCountOutputType = {
    produtos: number
    pedidos: number
  }

  export type RestauranteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | RestauranteCountOutputTypeCountProdutosArgs
    pedidos?: boolean | RestauranteCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCountOutputType
     */
    select?: RestauranteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    itensPedido: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPedido?: boolean | ProdutoCountOutputTypeCountItensPedidoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itens: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: string | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: string | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    role: number
    criadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    role: string
    criadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    criadoEm?: boolean
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "role" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      role: string
      criadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Restaurante
   */

  export type AggregateRestaurante = {
    _count: RestauranteCountAggregateOutputType | null
    _avg: RestauranteAvgAggregateOutputType | null
    _sum: RestauranteSumAggregateOutputType | null
    _min: RestauranteMinAggregateOutputType | null
    _max: RestauranteMaxAggregateOutputType | null
  }

  export type RestauranteAvgAggregateOutputType = {
    id: number | null
  }

  export type RestauranteSumAggregateOutputType = {
    id: number | null
  }

  export type RestauranteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    endereco: string | null
    telefone: string | null
    criadoEm: Date | null
  }

  export type RestauranteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    endereco: string | null
    telefone: string | null
    criadoEm: Date | null
  }

  export type RestauranteCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    endereco: number
    telefone: number
    criadoEm: number
    _all: number
  }


  export type RestauranteAvgAggregateInputType = {
    id?: true
  }

  export type RestauranteSumAggregateInputType = {
    id?: true
  }

  export type RestauranteMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    endereco?: true
    telefone?: true
    criadoEm?: true
  }

  export type RestauranteMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    endereco?: true
    telefone?: true
    criadoEm?: true
  }

  export type RestauranteCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    endereco?: true
    telefone?: true
    criadoEm?: true
    _all?: true
  }

  export type RestauranteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurante to aggregate.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurantes
    **/
    _count?: true | RestauranteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestauranteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestauranteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestauranteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestauranteMaxAggregateInputType
  }

  export type GetRestauranteAggregateType<T extends RestauranteAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurante[P]>
      : GetScalarType<T[P], AggregateRestaurante[P]>
  }




  export type RestauranteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestauranteWhereInput
    orderBy?: RestauranteOrderByWithAggregationInput | RestauranteOrderByWithAggregationInput[]
    by: RestauranteScalarFieldEnum[] | RestauranteScalarFieldEnum
    having?: RestauranteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestauranteCountAggregateInputType | true
    _avg?: RestauranteAvgAggregateInputType
    _sum?: RestauranteSumAggregateInputType
    _min?: RestauranteMinAggregateInputType
    _max?: RestauranteMaxAggregateInputType
  }

  export type RestauranteGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    endereco: string
    telefone: string | null
    criadoEm: Date
    _count: RestauranteCountAggregateOutputType | null
    _avg: RestauranteAvgAggregateOutputType | null
    _sum: RestauranteSumAggregateOutputType | null
    _min: RestauranteMinAggregateOutputType | null
    _max: RestauranteMaxAggregateOutputType | null
  }

  type GetRestauranteGroupByPayload<T extends RestauranteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestauranteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestauranteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestauranteGroupByOutputType[P]>
            : GetScalarType<T[P], RestauranteGroupByOutputType[P]>
        }
      >
    >


  export type RestauranteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    endereco?: boolean
    telefone?: boolean
    criadoEm?: boolean
    produtos?: boolean | Restaurante$produtosArgs<ExtArgs>
    pedidos?: boolean | Restaurante$pedidosArgs<ExtArgs>
    _count?: boolean | RestauranteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurante"]>

  export type RestauranteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    endereco?: boolean
    telefone?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["restaurante"]>

  export type RestauranteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    endereco?: boolean
    telefone?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["restaurante"]>

  export type RestauranteSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    endereco?: boolean
    telefone?: boolean
    criadoEm?: boolean
  }

  export type RestauranteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "endereco" | "telefone" | "criadoEm", ExtArgs["result"]["restaurante"]>
  export type RestauranteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | Restaurante$produtosArgs<ExtArgs>
    pedidos?: boolean | Restaurante$pedidosArgs<ExtArgs>
    _count?: boolean | RestauranteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestauranteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RestauranteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RestaurantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurante"
    objects: {
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      endereco: string
      telefone: string | null
      criadoEm: Date
    }, ExtArgs["result"]["restaurante"]>
    composites: {}
  }

  type RestauranteGetPayload<S extends boolean | null | undefined | RestauranteDefaultArgs> = $Result.GetResult<Prisma.$RestaurantePayload, S>

  type RestauranteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestauranteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestauranteCountAggregateInputType | true
    }

  export interface RestauranteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurante'], meta: { name: 'Restaurante' } }
    /**
     * Find zero or one Restaurante that matches the filter.
     * @param {RestauranteFindUniqueArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestauranteFindUniqueArgs>(args: SelectSubset<T, RestauranteFindUniqueArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestauranteFindUniqueOrThrowArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestauranteFindUniqueOrThrowArgs>(args: SelectSubset<T, RestauranteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindFirstArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestauranteFindFirstArgs>(args?: SelectSubset<T, RestauranteFindFirstArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindFirstOrThrowArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestauranteFindFirstOrThrowArgs>(args?: SelectSubset<T, RestauranteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurantes
     * const restaurantes = await prisma.restaurante.findMany()
     * 
     * // Get first 10 Restaurantes
     * const restaurantes = await prisma.restaurante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restauranteWithIdOnly = await prisma.restaurante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestauranteFindManyArgs>(args?: SelectSubset<T, RestauranteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurante.
     * @param {RestauranteCreateArgs} args - Arguments to create a Restaurante.
     * @example
     * // Create one Restaurante
     * const Restaurante = await prisma.restaurante.create({
     *   data: {
     *     // ... data to create a Restaurante
     *   }
     * })
     * 
     */
    create<T extends RestauranteCreateArgs>(args: SelectSubset<T, RestauranteCreateArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurantes.
     * @param {RestauranteCreateManyArgs} args - Arguments to create many Restaurantes.
     * @example
     * // Create many Restaurantes
     * const restaurante = await prisma.restaurante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestauranteCreateManyArgs>(args?: SelectSubset<T, RestauranteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurantes and returns the data saved in the database.
     * @param {RestauranteCreateManyAndReturnArgs} args - Arguments to create many Restaurantes.
     * @example
     * // Create many Restaurantes
     * const restaurante = await prisma.restaurante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurantes and only return the `id`
     * const restauranteWithIdOnly = await prisma.restaurante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestauranteCreateManyAndReturnArgs>(args?: SelectSubset<T, RestauranteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurante.
     * @param {RestauranteDeleteArgs} args - Arguments to delete one Restaurante.
     * @example
     * // Delete one Restaurante
     * const Restaurante = await prisma.restaurante.delete({
     *   where: {
     *     // ... filter to delete one Restaurante
     *   }
     * })
     * 
     */
    delete<T extends RestauranteDeleteArgs>(args: SelectSubset<T, RestauranteDeleteArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurante.
     * @param {RestauranteUpdateArgs} args - Arguments to update one Restaurante.
     * @example
     * // Update one Restaurante
     * const restaurante = await prisma.restaurante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestauranteUpdateArgs>(args: SelectSubset<T, RestauranteUpdateArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurantes.
     * @param {RestauranteDeleteManyArgs} args - Arguments to filter Restaurantes to delete.
     * @example
     * // Delete a few Restaurantes
     * const { count } = await prisma.restaurante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestauranteDeleteManyArgs>(args?: SelectSubset<T, RestauranteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurantes
     * const restaurante = await prisma.restaurante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestauranteUpdateManyArgs>(args: SelectSubset<T, RestauranteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurantes and returns the data updated in the database.
     * @param {RestauranteUpdateManyAndReturnArgs} args - Arguments to update many Restaurantes.
     * @example
     * // Update many Restaurantes
     * const restaurante = await prisma.restaurante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurantes and only return the `id`
     * const restauranteWithIdOnly = await prisma.restaurante.updateManyAndReturn({
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
    updateManyAndReturn<T extends RestauranteUpdateManyAndReturnArgs>(args: SelectSubset<T, RestauranteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurante.
     * @param {RestauranteUpsertArgs} args - Arguments to update or create a Restaurante.
     * @example
     * // Update or create a Restaurante
     * const restaurante = await prisma.restaurante.upsert({
     *   create: {
     *     // ... data to create a Restaurante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurante we want to update
     *   }
     * })
     */
    upsert<T extends RestauranteUpsertArgs>(args: SelectSubset<T, RestauranteUpsertArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCountArgs} args - Arguments to filter Restaurantes to count.
     * @example
     * // Count the number of Restaurantes
     * const count = await prisma.restaurante.count({
     *   where: {
     *     // ... the filter for the Restaurantes we want to count
     *   }
     * })
    **/
    count<T extends RestauranteCountArgs>(
      args?: Subset<T, RestauranteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestauranteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestauranteAggregateArgs>(args: Subset<T, RestauranteAggregateArgs>): Prisma.PrismaPromise<GetRestauranteAggregateType<T>>

    /**
     * Group by Restaurante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteGroupByArgs} args - Group by arguments.
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
      T extends RestauranteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestauranteGroupByArgs['orderBy'] }
        : { orderBy?: RestauranteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestauranteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestauranteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurante model
   */
  readonly fields: RestauranteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestauranteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtos<T extends Restaurante$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Restaurante$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Restaurante model
   */
  interface RestauranteFieldRefs {
    readonly id: FieldRef<"Restaurante", 'Int'>
    readonly nome: FieldRef<"Restaurante", 'String'>
    readonly descricao: FieldRef<"Restaurante", 'String'>
    readonly endereco: FieldRef<"Restaurante", 'String'>
    readonly telefone: FieldRef<"Restaurante", 'String'>
    readonly criadoEm: FieldRef<"Restaurante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurante findUnique
   */
  export type RestauranteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante findUniqueOrThrow
   */
  export type RestauranteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante findFirst
   */
  export type RestauranteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurantes.
     */
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante findFirstOrThrow
   */
  export type RestauranteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurantes.
     */
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante findMany
   */
  export type RestauranteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurantes to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurantes.
     */
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante create
   */
  export type RestauranteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurante.
     */
    data: XOR<RestauranteCreateInput, RestauranteUncheckedCreateInput>
  }

  /**
   * Restaurante createMany
   */
  export type RestauranteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurantes.
     */
    data: RestauranteCreateManyInput | RestauranteCreateManyInput[]
  }

  /**
   * Restaurante createManyAndReturn
   */
  export type RestauranteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurantes.
     */
    data: RestauranteCreateManyInput | RestauranteCreateManyInput[]
  }

  /**
   * Restaurante update
   */
  export type RestauranteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurante.
     */
    data: XOR<RestauranteUpdateInput, RestauranteUncheckedUpdateInput>
    /**
     * Choose, which Restaurante to update.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante updateMany
   */
  export type RestauranteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurantes.
     */
    data: XOR<RestauranteUpdateManyMutationInput, RestauranteUncheckedUpdateManyInput>
    /**
     * Filter which Restaurantes to update
     */
    where?: RestauranteWhereInput
    /**
     * Limit how many Restaurantes to update.
     */
    limit?: number
  }

  /**
   * Restaurante updateManyAndReturn
   */
  export type RestauranteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * The data used to update Restaurantes.
     */
    data: XOR<RestauranteUpdateManyMutationInput, RestauranteUncheckedUpdateManyInput>
    /**
     * Filter which Restaurantes to update
     */
    where?: RestauranteWhereInput
    /**
     * Limit how many Restaurantes to update.
     */
    limit?: number
  }

  /**
   * Restaurante upsert
   */
  export type RestauranteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurante to update in case it exists.
     */
    where: RestauranteWhereUniqueInput
    /**
     * In case the Restaurante found by the `where` argument doesn't exist, create a new Restaurante with this data.
     */
    create: XOR<RestauranteCreateInput, RestauranteUncheckedCreateInput>
    /**
     * In case the Restaurante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestauranteUpdateInput, RestauranteUncheckedUpdateInput>
  }

  /**
   * Restaurante delete
   */
  export type RestauranteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter which Restaurante to delete.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante deleteMany
   */
  export type RestauranteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurantes to delete
     */
    where?: RestauranteWhereInput
    /**
     * Limit how many Restaurantes to delete.
     */
    limit?: number
  }

  /**
   * Restaurante.produtos
   */
  export type Restaurante$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Restaurante.pedidos
   */
  export type Restaurante$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Restaurante without action
   */
  export type RestauranteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
    restauranteId: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco: number | null
    restauranteId: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    disponivel: boolean | null
    criadoEm: Date | null
    restauranteId: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    disponivel: boolean | null
    criadoEm: Date | null
    restauranteId: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco: number
    disponivel: number
    criadoEm: number
    restauranteId: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco?: true
    restauranteId?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco?: true
    restauranteId?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    disponivel?: true
    criadoEm?: true
    restauranteId?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    disponivel?: true
    criadoEm?: true
    restauranteId?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    disponivel?: true
    criadoEm?: true
    restauranteId?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    preco: number
    disponivel: boolean
    criadoEm: Date
    restauranteId: number
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    disponivel?: boolean
    criadoEm?: boolean
    restauranteId?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    itensPedido?: boolean | Produto$itensPedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    disponivel?: boolean
    criadoEm?: boolean
    restauranteId?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    disponivel?: boolean
    criadoEm?: boolean
    restauranteId?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    disponivel?: boolean
    criadoEm?: boolean
    restauranteId?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "preco" | "disponivel" | "criadoEm" | "restauranteId", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    itensPedido?: boolean | Produto$itensPedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
      itensPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      preco: number
      disponivel: boolean
      criadoEm: Date
      restauranteId: number
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itensPedido<T extends Produto$itensPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly preco: FieldRef<"Produto", 'Float'>
    readonly disponivel: FieldRef<"Produto", 'Boolean'>
    readonly criadoEm: FieldRef<"Produto", 'DateTime'>
    readonly restauranteId: FieldRef<"Produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.itensPedido
   */
  export type Produto$itensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    total: number | null
    usuarioId: number | null
    restauranteId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    total: number | null
    usuarioId: number | null
    restauranteId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    status: string | null
    total: number | null
    observacao: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    usuarioId: number | null
    restauranteId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    status: string | null
    total: number | null
    observacao: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    usuarioId: number | null
    restauranteId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    status: number
    total: number
    observacao: number
    criadoEm: number
    atualizadoEm: number
    usuarioId: number
    restauranteId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    total?: true
    usuarioId?: true
    restauranteId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    total?: true
    usuarioId?: true
    restauranteId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    status?: true
    total?: true
    observacao?: true
    criadoEm?: true
    atualizadoEm?: true
    usuarioId?: true
    restauranteId?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    status?: true
    total?: true
    observacao?: true
    criadoEm?: true
    atualizadoEm?: true
    usuarioId?: true
    restauranteId?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    status?: true
    total?: true
    observacao?: true
    criadoEm?: true
    atualizadoEm?: true
    usuarioId?: true
    restauranteId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    status: string
    total: number
    observacao: string | null
    criadoEm: Date
    atualizadoEm: Date
    usuarioId: number
    restauranteId: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total?: boolean
    observacao?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total?: boolean
    observacao?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total?: boolean
    observacao?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    status?: boolean
    total?: boolean
    observacao?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "total" | "observacao" | "criadoEm" | "atualizadoEm" | "usuarioId" | "restauranteId", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      total: number
      observacao: string | null
      criadoEm: Date
      atualizadoEm: Date
      usuarioId: number
      restauranteId: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly status: FieldRef<"Pedido", 'String'>
    readonly total: FieldRef<"Pedido", 'Float'>
    readonly observacao: FieldRef<"Pedido", 'String'>
    readonly criadoEm: FieldRef<"Pedido", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Pedido", 'DateTime'>
    readonly usuarioId: FieldRef<"Pedido", 'Int'>
    readonly restauranteId: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.itens
   */
  export type Pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUni: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUni: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUni: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUni: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    quantidade: number
    precoUni: number
    pedidoId: number
    produtoId: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    precoUni?: true
    pedidoId?: true
    produtoId?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    id?: true
    quantidade?: true
    precoUni?: true
    pedidoId?: true
    produtoId?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    quantidade?: true
    precoUni?: true
    pedidoId?: true
    produtoId?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    quantidade?: true
    precoUni?: true
    pedidoId?: true
    produtoId?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    quantidade?: true
    precoUni?: true
    pedidoId?: true
    produtoId?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: number
    quantidade: number
    precoUni: number
    pedidoId: number
    produtoId: number
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUni?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUni?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUni?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectScalar = {
    id?: boolean
    quantidade?: boolean
    precoUni?: boolean
    pedidoId?: boolean
    produtoId?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "precoUni" | "pedidoId" | "produtoId", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      precoUni: number
      pedidoId: number
      produtoId: number
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPedidos and returns the data saved in the database.
     * @param {ItemPedidoCreateManyAndReturnArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos and returns the data updated in the database.
     * @param {ItemPedidoUpdateManyAndReturnArgs} args - Arguments to update many ItemPedidos.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
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
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'Int'>
    readonly quantidade: FieldRef<"ItemPedido", 'Int'>
    readonly precoUni: FieldRef<"ItemPedido", 'Float'>
    readonly pedidoId: FieldRef<"ItemPedido", 'Int'>
    readonly produtoId: FieldRef<"ItemPedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
  }

  /**
   * ItemPedido createManyAndReturn
   */
  export type ItemPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido updateManyAndReturn
   */
  export type ItemPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    role: 'role',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RestauranteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    endereco: 'endereco',
    telefone: 'telefone',
    criadoEm: 'criadoEm'
  };

  export type RestauranteScalarFieldEnum = (typeof RestauranteScalarFieldEnum)[keyof typeof RestauranteScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    disponivel: 'disponivel',
    criadoEm: 'criadoEm',
    restauranteId: 'restauranteId'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    status: 'status',
    total: 'total',
    observacao: 'observacao',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    usuarioId: 'usuarioId',
    restauranteId: 'restauranteId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    precoUni: 'precoUni',
    pedidoId: 'pedidoId',
    produtoId: 'produtoId'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    pedidos?: PedidoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    pedidos?: PedidoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    role?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RestauranteWhereInput = {
    AND?: RestauranteWhereInput | RestauranteWhereInput[]
    OR?: RestauranteWhereInput[]
    NOT?: RestauranteWhereInput | RestauranteWhereInput[]
    id?: IntFilter<"Restaurante"> | number
    nome?: StringFilter<"Restaurante"> | string
    descricao?: StringNullableFilter<"Restaurante"> | string | null
    endereco?: StringFilter<"Restaurante"> | string
    telefone?: StringNullableFilter<"Restaurante"> | string | null
    criadoEm?: DateTimeFilter<"Restaurante"> | Date | string
    produtos?: ProdutoListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type RestauranteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    endereco?: SortOrder
    telefone?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    produtos?: ProdutoOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type RestauranteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestauranteWhereInput | RestauranteWhereInput[]
    OR?: RestauranteWhereInput[]
    NOT?: RestauranteWhereInput | RestauranteWhereInput[]
    nome?: StringFilter<"Restaurante"> | string
    descricao?: StringNullableFilter<"Restaurante"> | string | null
    endereco?: StringFilter<"Restaurante"> | string
    telefone?: StringNullableFilter<"Restaurante"> | string | null
    criadoEm?: DateTimeFilter<"Restaurante"> | Date | string
    produtos?: ProdutoListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "id">

  export type RestauranteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    endereco?: SortOrder
    telefone?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: RestauranteCountOrderByAggregateInput
    _avg?: RestauranteAvgOrderByAggregateInput
    _max?: RestauranteMaxOrderByAggregateInput
    _min?: RestauranteMinOrderByAggregateInput
    _sum?: RestauranteSumOrderByAggregateInput
  }

  export type RestauranteScalarWhereWithAggregatesInput = {
    AND?: RestauranteScalarWhereWithAggregatesInput | RestauranteScalarWhereWithAggregatesInput[]
    OR?: RestauranteScalarWhereWithAggregatesInput[]
    NOT?: RestauranteScalarWhereWithAggregatesInput | RestauranteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restaurante"> | number
    nome?: StringWithAggregatesFilter<"Restaurante"> | string
    descricao?: StringNullableWithAggregatesFilter<"Restaurante"> | string | null
    endereco?: StringWithAggregatesFilter<"Restaurante"> | string
    telefone?: StringNullableWithAggregatesFilter<"Restaurante"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Restaurante"> | Date | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    disponivel?: BoolFilter<"Produto"> | boolean
    criadoEm?: DateTimeFilter<"Produto"> | Date | string
    restauranteId?: IntFilter<"Produto"> | number
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
    itensPedido?: ItemPedidoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    disponivel?: SortOrder
    criadoEm?: SortOrder
    restauranteId?: SortOrder
    restaurante?: RestauranteOrderByWithRelationInput
    itensPedido?: ItemPedidoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    disponivel?: BoolFilter<"Produto"> | boolean
    criadoEm?: DateTimeFilter<"Produto"> | Date | string
    restauranteId?: IntFilter<"Produto"> | number
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
    itensPedido?: ItemPedidoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    disponivel?: SortOrder
    criadoEm?: SortOrder
    restauranteId?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    preco?: FloatWithAggregatesFilter<"Produto"> | number
    disponivel?: BoolWithAggregatesFilter<"Produto"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    restauranteId?: IntWithAggregatesFilter<"Produto"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    total?: FloatFilter<"Pedido"> | number
    observacao?: StringNullableFilter<"Pedido"> | string | null
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    atualizadoEm?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    restauranteId?: IntFilter<"Pedido"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
    itens?: ItemPedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    restaurante?: RestauranteOrderByWithRelationInput
    itens?: ItemPedidoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    status?: StringFilter<"Pedido"> | string
    total?: FloatFilter<"Pedido"> | number
    observacao?: StringNullableFilter<"Pedido"> | string | null
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    atualizadoEm?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    restauranteId?: IntFilter<"Pedido"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
    itens?: ItemPedidoListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    status?: StringWithAggregatesFilter<"Pedido"> | string
    total?: FloatWithAggregatesFilter<"Pedido"> | number
    observacao?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Pedido"> | number
    restauranteId?: IntWithAggregatesFilter<"Pedido"> | number
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUni?: FloatFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUni?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUni?: FloatFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUni?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPedido"> | number
    quantidade?: IntWithAggregatesFilter<"ItemPedido"> | number
    precoUni?: FloatWithAggregatesFilter<"ItemPedido"> | number
    pedidoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    produtoId?: IntWithAggregatesFilter<"ItemPedido"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    role?: string
    criadoEm?: Date | string
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: string
    criadoEm?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteCreateInput = {
    nome: string
    descricao?: string | null
    endereco: string
    telefone?: string | null
    criadoEm?: Date | string
    produtos?: ProdutoCreateNestedManyWithoutRestauranteInput
    pedidos?: PedidoCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    endereco: string
    telefone?: string | null
    criadoEm?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutRestauranteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUpdateManyWithoutRestauranteNestedInput
    pedidos?: PedidoUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutRestauranteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    endereco: string
    telefone?: string | null
    criadoEm?: Date | string
  }

  export type RestauranteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoCreateInput = {
    nome: string
    descricao?: string | null
    preco: number
    disponivel?: boolean
    criadoEm?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutProdutosInput
    itensPedido?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    disponivel?: boolean
    criadoEm?: Date | string
    restauranteId: number
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutProdutosNestedInput
    itensPedido?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restauranteId?: IntFieldUpdateOperationsInput | number
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    disponivel?: boolean
    criadoEm?: Date | string
    restauranteId: number
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restauranteId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    restaurante: RestauranteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuarioId: number
    restauranteId: number
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    restaurante?: RestauranteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    restauranteId?: IntFieldUpdateOperationsInput | number
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuarioId: number
    restauranteId: number
  }

  export type PedidoUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    restauranteId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateInput = {
    quantidade: number
    precoUni: number
    pedido: PedidoCreateNestedOneWithoutItensInput
    produto: ProdutoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: number
    quantidade: number
    precoUni: number
    pedidoId: number
    produtoId: number
  }

  export type ItemPedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyInput = {
    id?: number
    quantidade: number
    precoUni: number
    pedidoId: number
    produtoId: number
  }

  export type ItemPedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestauranteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    criadoEm?: SortOrder
  }

  export type RestauranteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RestauranteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    criadoEm?: SortOrder
  }

  export type RestauranteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    criadoEm?: SortOrder
  }

  export type RestauranteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RestauranteScalarRelationFilter = {
    is?: RestauranteWhereInput
    isNot?: RestauranteWhereInput
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    disponivel?: SortOrder
    criadoEm?: SortOrder
    restauranteId?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    restauranteId?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    disponivel?: SortOrder
    criadoEm?: SortOrder
    restauranteId?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    disponivel?: SortOrder
    criadoEm?: SortOrder
    restauranteId?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    restauranteId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUni?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUni?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUni?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUni?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUni?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ProdutoCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput> | ProdutoCreateWithoutRestauranteInput[] | ProdutoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutRestauranteInput | ProdutoCreateOrConnectWithoutRestauranteInput[]
    createMany?: ProdutoCreateManyRestauranteInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput> | PedidoCreateWithoutRestauranteInput[] | PedidoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRestauranteInput | PedidoCreateOrConnectWithoutRestauranteInput[]
    createMany?: PedidoCreateManyRestauranteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput> | ProdutoCreateWithoutRestauranteInput[] | ProdutoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutRestauranteInput | ProdutoCreateOrConnectWithoutRestauranteInput[]
    createMany?: ProdutoCreateManyRestauranteInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput> | PedidoCreateWithoutRestauranteInput[] | PedidoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRestauranteInput | PedidoCreateOrConnectWithoutRestauranteInput[]
    createMany?: PedidoCreateManyRestauranteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProdutoUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput> | ProdutoCreateWithoutRestauranteInput[] | ProdutoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutRestauranteInput | ProdutoCreateOrConnectWithoutRestauranteInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutRestauranteInput | ProdutoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ProdutoCreateManyRestauranteInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutRestauranteInput | ProdutoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutRestauranteInput | ProdutoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput> | PedidoCreateWithoutRestauranteInput[] | PedidoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRestauranteInput | PedidoCreateOrConnectWithoutRestauranteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutRestauranteInput | PedidoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: PedidoCreateManyRestauranteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutRestauranteInput | PedidoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutRestauranteInput | PedidoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput> | ProdutoCreateWithoutRestauranteInput[] | ProdutoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutRestauranteInput | ProdutoCreateOrConnectWithoutRestauranteInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutRestauranteInput | ProdutoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ProdutoCreateManyRestauranteInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutRestauranteInput | ProdutoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutRestauranteInput | ProdutoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput> | PedidoCreateWithoutRestauranteInput[] | PedidoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRestauranteInput | PedidoCreateOrConnectWithoutRestauranteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutRestauranteInput | PedidoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: PedidoCreateManyRestauranteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutRestauranteInput | PedidoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutRestauranteInput | PedidoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type RestauranteCreateNestedOneWithoutProdutosInput = {
    create?: XOR<RestauranteCreateWithoutProdutosInput, RestauranteUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutProdutosInput
    connect?: RestauranteWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RestauranteUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<RestauranteCreateWithoutProdutosInput, RestauranteUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutProdutosInput
    upsert?: RestauranteUpsertWithoutProdutosInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutProdutosInput, RestauranteUpdateWithoutProdutosInput>, RestauranteUncheckedUpdateWithoutProdutosInput>
  }

  export type ItemPedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RestauranteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<RestauranteCreateWithoutPedidosInput, RestauranteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPedidosInput
    connect?: RestauranteWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type RestauranteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<RestauranteCreateWithoutPedidosInput, RestauranteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPedidosInput
    upsert?: RestauranteUpsertWithoutPedidosInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutPedidosInput, RestauranteUpdateWithoutPedidosInput>, RestauranteUncheckedUpdateWithoutPedidosInput>
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItensPedidoInput = {
    create?: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensPedidoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    upsert?: PedidoUpsertWithoutItensInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensInput, PedidoUpdateWithoutItensInput>, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensPedidoInput
    upsert?: ProdutoUpsertWithoutItensPedidoInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensPedidoInput, ProdutoUpdateWithoutItensPedidoInput>, ProdutoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PedidoCreateWithoutUsuarioInput = {
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    restauranteId: number
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    total?: FloatFilter<"Pedido"> | number
    observacao?: StringNullableFilter<"Pedido"> | string | null
    criadoEm?: DateTimeFilter<"Pedido"> | Date | string
    atualizadoEm?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    restauranteId?: IntFilter<"Pedido"> | number
  }

  export type ProdutoCreateWithoutRestauranteInput = {
    nome: string
    descricao?: string | null
    preco: number
    disponivel?: boolean
    criadoEm?: Date | string
    itensPedido?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutRestauranteInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    disponivel?: boolean
    criadoEm?: Date | string
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutRestauranteInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput>
  }

  export type ProdutoCreateManyRestauranteInputEnvelope = {
    data: ProdutoCreateManyRestauranteInput | ProdutoCreateManyRestauranteInput[]
  }

  export type PedidoCreateWithoutRestauranteInput = {
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutRestauranteInput = {
    id?: number
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuarioId: number
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutRestauranteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput>
  }

  export type PedidoCreateManyRestauranteInputEnvelope = {
    data: PedidoCreateManyRestauranteInput | PedidoCreateManyRestauranteInput[]
  }

  export type ProdutoUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutRestauranteInput, ProdutoUncheckedUpdateWithoutRestauranteInput>
    create: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutRestauranteInput, ProdutoUncheckedUpdateWithoutRestauranteInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutRestauranteInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    disponivel?: BoolFilter<"Produto"> | boolean
    criadoEm?: DateTimeFilter<"Produto"> | Date | string
    restauranteId?: IntFilter<"Produto"> | number
  }

  export type PedidoUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutRestauranteInput, PedidoUncheckedUpdateWithoutRestauranteInput>
    create: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutRestauranteInput, PedidoUncheckedUpdateWithoutRestauranteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutRestauranteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type RestauranteCreateWithoutProdutosInput = {
    nome: string
    descricao?: string | null
    endereco: string
    telefone?: string | null
    criadoEm?: Date | string
    pedidos?: PedidoCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutProdutosInput = {
    id?: number
    nome: string
    descricao?: string | null
    endereco: string
    telefone?: string | null
    criadoEm?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutProdutosInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutProdutosInput, RestauranteUncheckedCreateWithoutProdutosInput>
  }

  export type ItemPedidoCreateWithoutProdutoInput = {
    quantidade: number
    precoUni: number
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade: number
    precoUni: number
    pedidoId: number
  }

  export type ItemPedidoCreateOrConnectWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoCreateManyProdutoInputEnvelope = {
    data: ItemPedidoCreateManyProdutoInput | ItemPedidoCreateManyProdutoInput[]
  }

  export type RestauranteUpsertWithoutProdutosInput = {
    update: XOR<RestauranteUpdateWithoutProdutosInput, RestauranteUncheckedUpdateWithoutProdutosInput>
    create: XOR<RestauranteCreateWithoutProdutosInput, RestauranteUncheckedCreateWithoutProdutosInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutProdutosInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutProdutosInput, RestauranteUncheckedUpdateWithoutProdutosInput>
  }

  export type RestauranteUpdateWithoutProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    precoUni?: FloatFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
  }

  export type UsuarioCreateWithoutPedidosInput = {
    nome: string
    email: string
    senha: string
    role?: string
    criadoEm?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: string
    criadoEm?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type RestauranteCreateWithoutPedidosInput = {
    nome: string
    descricao?: string | null
    endereco: string
    telefone?: string | null
    criadoEm?: Date | string
    produtos?: ProdutoCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    descricao?: string | null
    endereco: string
    telefone?: string | null
    criadoEm?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutPedidosInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutPedidosInput, RestauranteUncheckedCreateWithoutPedidosInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    quantidade: number
    precoUni: number
    produto: ProdutoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    quantidade: number
    precoUni: number
    produtoId: number
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteUpsertWithoutPedidosInput = {
    update: XOR<RestauranteUpdateWithoutPedidosInput, RestauranteUncheckedUpdateWithoutPedidosInput>
    create: XOR<RestauranteCreateWithoutPedidosInput, RestauranteUncheckedCreateWithoutPedidosInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutPedidosInput, RestauranteUncheckedUpdateWithoutPedidosInput>
  }

  export type RestauranteUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutItensInput = {
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    restaurante: RestauranteCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutItensInput = {
    id?: number
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuarioId: number
    restauranteId: number
  }

  export type PedidoCreateOrConnectWithoutItensInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoCreateWithoutItensPedidoInput = {
    nome: string
    descricao?: string | null
    preco: number
    disponivel?: boolean
    criadoEm?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateWithoutItensPedidoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    disponivel?: boolean
    criadoEm?: Date | string
    restauranteId: number
  }

  export type ProdutoCreateOrConnectWithoutItensPedidoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
  }

  export type PedidoUpsertWithoutItensInput = {
    update: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateWithoutItensInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    restaurante?: RestauranteUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    restauranteId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoUpsertWithoutItensPedidoInput = {
    update: XOR<ProdutoUpdateWithoutItensPedidoInput, ProdutoUncheckedUpdateWithoutItensPedidoInput>
    create: XOR<ProdutoCreateWithoutItensPedidoInput, ProdutoUncheckedCreateWithoutItensPedidoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensPedidoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensPedidoInput, ProdutoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type ProdutoUpdateWithoutItensPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restauranteId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateManyUsuarioInput = {
    id?: number
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    restauranteId: number
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restauranteId?: IntFieldUpdateOperationsInput | number
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restauranteId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoCreateManyRestauranteInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    disponivel?: boolean
    criadoEm?: Date | string
  }

  export type PedidoCreateManyRestauranteInput = {
    id?: number
    status?: string
    total: number
    observacao?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuarioId: number
  }

  export type ProdutoUpdateWithoutRestauranteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPedido?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutRestauranteInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyProdutoInput = {
    id?: number
    quantidade: number
    precoUni: number
    pedidoId: number
  }

  export type ItemPedidoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: number
    quantidade: number
    precoUni: number
    produtoId: number
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUni?: FloatFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
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