
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
 * Model FamilyGroup
 * 
 */
export type FamilyGroup = $Result.DefaultSelection<Prisma.$FamilyGroupPayload>
/**
 * Model CaregiverDevice
 * 
 */
export type CaregiverDevice = $Result.DefaultSelection<Prisma.$CaregiverDevicePayload>
/**
 * Model PatientDevice
 * 
 */
export type PatientDevice = $Result.DefaultSelection<Prisma.$PatientDevicePayload>
/**
 * Model PairingCode
 * 
 */
export type PairingCode = $Result.DefaultSelection<Prisma.$PairingCodePayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model DoseSchedule
 * 
 */
export type DoseSchedule = $Result.DefaultSelection<Prisma.$DoseSchedulePayload>
/**
 * Model DoseEvent
 * 
 */
export type DoseEvent = $Result.DefaultSelection<Prisma.$DoseEventPayload>
/**
 * Model NotificationEvent
 * 
 */
export type NotificationEvent = $Result.DefaultSelection<Prisma.$NotificationEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DoseStatus: {
  planned: 'planned',
  taken: 'taken',
  missed: 'missed',
  skipped: 'skipped'
};

export type DoseStatus = (typeof DoseStatus)[keyof typeof DoseStatus]


export const DoseSource: {
  patient: 'patient',
  caregiver: 'caregiver'
};

export type DoseSource = (typeof DoseSource)[keyof typeof DoseSource]


export const NotificationType: {
  taken: 'taken',
  missed: 'missed',
  low_stock: 'low_stock'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type DoseStatus = $Enums.DoseStatus

export const DoseStatus: typeof $Enums.DoseStatus

export type DoseSource = $Enums.DoseSource

export const DoseSource: typeof $Enums.DoseSource

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FamilyGroups
 * const familyGroups = await prisma.familyGroup.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more FamilyGroups
   * const familyGroups = await prisma.familyGroup.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.familyGroup`: Exposes CRUD operations for the **FamilyGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyGroups
    * const familyGroups = await prisma.familyGroup.findMany()
    * ```
    */
  get familyGroup(): Prisma.FamilyGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caregiverDevice`: Exposes CRUD operations for the **CaregiverDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaregiverDevices
    * const caregiverDevices = await prisma.caregiverDevice.findMany()
    * ```
    */
  get caregiverDevice(): Prisma.CaregiverDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientDevice`: Exposes CRUD operations for the **PatientDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientDevices
    * const patientDevices = await prisma.patientDevice.findMany()
    * ```
    */
  get patientDevice(): Prisma.PatientDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pairingCode`: Exposes CRUD operations for the **PairingCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PairingCodes
    * const pairingCodes = await prisma.pairingCode.findMany()
    * ```
    */
  get pairingCode(): Prisma.PairingCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doseSchedule`: Exposes CRUD operations for the **DoseSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoseSchedules
    * const doseSchedules = await prisma.doseSchedule.findMany()
    * ```
    */
  get doseSchedule(): Prisma.DoseScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doseEvent`: Exposes CRUD operations for the **DoseEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoseEvents
    * const doseEvents = await prisma.doseEvent.findMany()
    * ```
    */
  get doseEvent(): Prisma.DoseEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationEvent`: Exposes CRUD operations for the **NotificationEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationEvents
    * const notificationEvents = await prisma.notificationEvent.findMany()
    * ```
    */
  get notificationEvent(): Prisma.NotificationEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
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
    FamilyGroup: 'FamilyGroup',
    CaregiverDevice: 'CaregiverDevice',
    PatientDevice: 'PatientDevice',
    PairingCode: 'PairingCode',
    Medication: 'Medication',
    DoseSchedule: 'DoseSchedule',
    DoseEvent: 'DoseEvent',
    NotificationEvent: 'NotificationEvent'
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
      modelProps: "familyGroup" | "caregiverDevice" | "patientDevice" | "pairingCode" | "medication" | "doseSchedule" | "doseEvent" | "notificationEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FamilyGroup: {
        payload: Prisma.$FamilyGroupPayload<ExtArgs>
        fields: Prisma.FamilyGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>
          }
          findFirst: {
            args: Prisma.FamilyGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>
          }
          findMany: {
            args: Prisma.FamilyGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>[]
          }
          create: {
            args: Prisma.FamilyGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>
          }
          createMany: {
            args: Prisma.FamilyGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamilyGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>[]
          }
          delete: {
            args: Prisma.FamilyGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>
          }
          update: {
            args: Prisma.FamilyGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>
          }
          deleteMany: {
            args: Prisma.FamilyGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FamilyGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>[]
          }
          upsert: {
            args: Prisma.FamilyGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyGroupPayload>
          }
          aggregate: {
            args: Prisma.FamilyGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilyGroup>
          }
          groupBy: {
            args: Prisma.FamilyGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyGroupCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupCountAggregateOutputType> | number
          }
        }
      }
      CaregiverDevice: {
        payload: Prisma.$CaregiverDevicePayload<ExtArgs>
        fields: Prisma.CaregiverDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaregiverDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaregiverDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>
          }
          findFirst: {
            args: Prisma.CaregiverDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaregiverDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>
          }
          findMany: {
            args: Prisma.CaregiverDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>[]
          }
          create: {
            args: Prisma.CaregiverDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>
          }
          createMany: {
            args: Prisma.CaregiverDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaregiverDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>[]
          }
          delete: {
            args: Prisma.CaregiverDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>
          }
          update: {
            args: Prisma.CaregiverDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>
          }
          deleteMany: {
            args: Prisma.CaregiverDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaregiverDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaregiverDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>[]
          }
          upsert: {
            args: Prisma.CaregiverDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverDevicePayload>
          }
          aggregate: {
            args: Prisma.CaregiverDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaregiverDevice>
          }
          groupBy: {
            args: Prisma.CaregiverDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaregiverDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaregiverDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<CaregiverDeviceCountAggregateOutputType> | number
          }
        }
      }
      PatientDevice: {
        payload: Prisma.$PatientDevicePayload<ExtArgs>
        fields: Prisma.PatientDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>
          }
          findFirst: {
            args: Prisma.PatientDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>
          }
          findMany: {
            args: Prisma.PatientDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>[]
          }
          create: {
            args: Prisma.PatientDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>
          }
          createMany: {
            args: Prisma.PatientDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>[]
          }
          delete: {
            args: Prisma.PatientDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>
          }
          update: {
            args: Prisma.PatientDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>
          }
          deleteMany: {
            args: Prisma.PatientDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>[]
          }
          upsert: {
            args: Prisma.PatientDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientDevicePayload>
          }
          aggregate: {
            args: Prisma.PatientDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientDevice>
          }
          groupBy: {
            args: Prisma.PatientDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<PatientDeviceCountAggregateOutputType> | number
          }
        }
      }
      PairingCode: {
        payload: Prisma.$PairingCodePayload<ExtArgs>
        fields: Prisma.PairingCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PairingCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PairingCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>
          }
          findFirst: {
            args: Prisma.PairingCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PairingCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>
          }
          findMany: {
            args: Prisma.PairingCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>[]
          }
          create: {
            args: Prisma.PairingCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>
          }
          createMany: {
            args: Prisma.PairingCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PairingCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>[]
          }
          delete: {
            args: Prisma.PairingCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>
          }
          update: {
            args: Prisma.PairingCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>
          }
          deleteMany: {
            args: Prisma.PairingCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PairingCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PairingCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>[]
          }
          upsert: {
            args: Prisma.PairingCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairingCodePayload>
          }
          aggregate: {
            args: Prisma.PairingCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePairingCode>
          }
          groupBy: {
            args: Prisma.PairingCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PairingCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PairingCodeCountArgs<ExtArgs>
            result: $Utils.Optional<PairingCodeCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      DoseSchedule: {
        payload: Prisma.$DoseSchedulePayload<ExtArgs>
        fields: Prisma.DoseScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoseScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoseScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>
          }
          findFirst: {
            args: Prisma.DoseScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoseScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>
          }
          findMany: {
            args: Prisma.DoseScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>[]
          }
          create: {
            args: Prisma.DoseScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>
          }
          createMany: {
            args: Prisma.DoseScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoseScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>[]
          }
          delete: {
            args: Prisma.DoseScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>
          }
          update: {
            args: Prisma.DoseScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>
          }
          deleteMany: {
            args: Prisma.DoseScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoseScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoseScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>[]
          }
          upsert: {
            args: Prisma.DoseScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseSchedulePayload>
          }
          aggregate: {
            args: Prisma.DoseScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoseSchedule>
          }
          groupBy: {
            args: Prisma.DoseScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoseScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoseScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<DoseScheduleCountAggregateOutputType> | number
          }
        }
      }
      DoseEvent: {
        payload: Prisma.$DoseEventPayload<ExtArgs>
        fields: Prisma.DoseEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoseEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoseEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>
          }
          findFirst: {
            args: Prisma.DoseEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoseEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>
          }
          findMany: {
            args: Prisma.DoseEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>[]
          }
          create: {
            args: Prisma.DoseEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>
          }
          createMany: {
            args: Prisma.DoseEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoseEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>[]
          }
          delete: {
            args: Prisma.DoseEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>
          }
          update: {
            args: Prisma.DoseEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>
          }
          deleteMany: {
            args: Prisma.DoseEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoseEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoseEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>[]
          }
          upsert: {
            args: Prisma.DoseEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseEventPayload>
          }
          aggregate: {
            args: Prisma.DoseEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoseEvent>
          }
          groupBy: {
            args: Prisma.DoseEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoseEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoseEventCountArgs<ExtArgs>
            result: $Utils.Optional<DoseEventCountAggregateOutputType> | number
          }
        }
      }
      NotificationEvent: {
        payload: Prisma.$NotificationEventPayload<ExtArgs>
        fields: Prisma.NotificationEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          findFirst: {
            args: Prisma.NotificationEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          findMany: {
            args: Prisma.NotificationEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>[]
          }
          create: {
            args: Prisma.NotificationEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          createMany: {
            args: Prisma.NotificationEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>[]
          }
          delete: {
            args: Prisma.NotificationEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          update: {
            args: Prisma.NotificationEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          deleteMany: {
            args: Prisma.NotificationEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>[]
          }
          upsert: {
            args: Prisma.NotificationEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          aggregate: {
            args: Prisma.NotificationEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationEvent>
          }
          groupBy: {
            args: Prisma.NotificationEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationEventCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationEventCountAggregateOutputType> | number
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
    familyGroup?: FamilyGroupOmit
    caregiverDevice?: CaregiverDeviceOmit
    patientDevice?: PatientDeviceOmit
    pairingCode?: PairingCodeOmit
    medication?: MedicationOmit
    doseSchedule?: DoseScheduleOmit
    doseEvent?: DoseEventOmit
    notificationEvent?: NotificationEventOmit
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
   * Count Type FamilyGroupCountOutputType
   */

  export type FamilyGroupCountOutputType = {
    caregiverDevices: number
    patientDevices: number
    pairingCodes: number
    medications: number
    notifications: number
  }

  export type FamilyGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiverDevices?: boolean | FamilyGroupCountOutputTypeCountCaregiverDevicesArgs
    patientDevices?: boolean | FamilyGroupCountOutputTypeCountPatientDevicesArgs
    pairingCodes?: boolean | FamilyGroupCountOutputTypeCountPairingCodesArgs
    medications?: boolean | FamilyGroupCountOutputTypeCountMedicationsArgs
    notifications?: boolean | FamilyGroupCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * FamilyGroupCountOutputType without action
   */
  export type FamilyGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroupCountOutputType
     */
    select?: FamilyGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyGroupCountOutputType without action
   */
  export type FamilyGroupCountOutputTypeCountCaregiverDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaregiverDeviceWhereInput
  }

  /**
   * FamilyGroupCountOutputType without action
   */
  export type FamilyGroupCountOutputTypeCountPatientDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientDeviceWhereInput
  }

  /**
   * FamilyGroupCountOutputType without action
   */
  export type FamilyGroupCountOutputTypeCountPairingCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairingCodeWhereInput
  }

  /**
   * FamilyGroupCountOutputType without action
   */
  export type FamilyGroupCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }

  /**
   * FamilyGroupCountOutputType without action
   */
  export type FamilyGroupCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    schedules: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | MedicationCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoseScheduleWhereInput
  }


  /**
   * Count Type DoseScheduleCountOutputType
   */

  export type DoseScheduleCountOutputType = {
    doseEvents: number
  }

  export type DoseScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doseEvents?: boolean | DoseScheduleCountOutputTypeCountDoseEventsArgs
  }

  // Custom InputTypes
  /**
   * DoseScheduleCountOutputType without action
   */
  export type DoseScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseScheduleCountOutputType
     */
    select?: DoseScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoseScheduleCountOutputType without action
   */
  export type DoseScheduleCountOutputTypeCountDoseEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoseEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FamilyGroup
   */

  export type AggregateFamilyGroup = {
    _count: FamilyGroupCountAggregateOutputType | null
    _min: FamilyGroupMinAggregateOutputType | null
    _max: FamilyGroupMaxAggregateOutputType | null
  }

  export type FamilyGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type FamilyGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type FamilyGroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type FamilyGroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type FamilyGroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type FamilyGroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type FamilyGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyGroup to aggregate.
     */
    where?: FamilyGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyGroups to fetch.
     */
    orderBy?: FamilyGroupOrderByWithRelationInput | FamilyGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FamilyGroups
    **/
    _count?: true | FamilyGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyGroupMaxAggregateInputType
  }

  export type GetFamilyGroupAggregateType<T extends FamilyGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilyGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilyGroup[P]>
      : GetScalarType<T[P], AggregateFamilyGroup[P]>
  }




  export type FamilyGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyGroupWhereInput
    orderBy?: FamilyGroupOrderByWithAggregationInput | FamilyGroupOrderByWithAggregationInput[]
    by: FamilyGroupScalarFieldEnum[] | FamilyGroupScalarFieldEnum
    having?: FamilyGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyGroupCountAggregateInputType | true
    _min?: FamilyGroupMinAggregateInputType
    _max?: FamilyGroupMaxAggregateInputType
  }

  export type FamilyGroupGroupByOutputType = {
    id: string
    name: string | null
    createdAt: Date
    _count: FamilyGroupCountAggregateOutputType | null
    _min: FamilyGroupMinAggregateOutputType | null
    _max: FamilyGroupMaxAggregateOutputType | null
  }

  type GetFamilyGroupGroupByPayload<T extends FamilyGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupGroupByOutputType[P]>
        }
      >
    >


  export type FamilyGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    caregiverDevices?: boolean | FamilyGroup$caregiverDevicesArgs<ExtArgs>
    patientDevices?: boolean | FamilyGroup$patientDevicesArgs<ExtArgs>
    pairingCodes?: boolean | FamilyGroup$pairingCodesArgs<ExtArgs>
    medications?: boolean | FamilyGroup$medicationsArgs<ExtArgs>
    notifications?: boolean | FamilyGroup$notificationsArgs<ExtArgs>
    _count?: boolean | FamilyGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyGroup"]>

  export type FamilyGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["familyGroup"]>

  export type FamilyGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["familyGroup"]>

  export type FamilyGroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type FamilyGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["familyGroup"]>
  export type FamilyGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiverDevices?: boolean | FamilyGroup$caregiverDevicesArgs<ExtArgs>
    patientDevices?: boolean | FamilyGroup$patientDevicesArgs<ExtArgs>
    pairingCodes?: boolean | FamilyGroup$pairingCodesArgs<ExtArgs>
    medications?: boolean | FamilyGroup$medicationsArgs<ExtArgs>
    notifications?: boolean | FamilyGroup$notificationsArgs<ExtArgs>
    _count?: boolean | FamilyGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FamilyGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FamilyGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FamilyGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FamilyGroup"
    objects: {
      caregiverDevices: Prisma.$CaregiverDevicePayload<ExtArgs>[]
      patientDevices: Prisma.$PatientDevicePayload<ExtArgs>[]
      pairingCodes: Prisma.$PairingCodePayload<ExtArgs>[]
      medications: Prisma.$MedicationPayload<ExtArgs>[]
      notifications: Prisma.$NotificationEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      createdAt: Date
    }, ExtArgs["result"]["familyGroup"]>
    composites: {}
  }

  type FamilyGroupGetPayload<S extends boolean | null | undefined | FamilyGroupDefaultArgs> = $Result.GetResult<Prisma.$FamilyGroupPayload, S>

  type FamilyGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamilyGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyGroupCountAggregateInputType | true
    }

  export interface FamilyGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FamilyGroup'], meta: { name: 'FamilyGroup' } }
    /**
     * Find zero or one FamilyGroup that matches the filter.
     * @param {FamilyGroupFindUniqueArgs} args - Arguments to find a FamilyGroup
     * @example
     * // Get one FamilyGroup
     * const familyGroup = await prisma.familyGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyGroupFindUniqueArgs>(args: SelectSubset<T, FamilyGroupFindUniqueArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FamilyGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamilyGroupFindUniqueOrThrowArgs} args - Arguments to find a FamilyGroup
     * @example
     * // Get one FamilyGroup
     * const familyGroup = await prisma.familyGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupFindFirstArgs} args - Arguments to find a FamilyGroup
     * @example
     * // Get one FamilyGroup
     * const familyGroup = await prisma.familyGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyGroupFindFirstArgs>(args?: SelectSubset<T, FamilyGroupFindFirstArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FamilyGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupFindFirstOrThrowArgs} args - Arguments to find a FamilyGroup
     * @example
     * // Get one FamilyGroup
     * const familyGroup = await prisma.familyGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FamilyGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FamilyGroups
     * const familyGroups = await prisma.familyGroup.findMany()
     * 
     * // Get first 10 FamilyGroups
     * const familyGroups = await prisma.familyGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyGroupWithIdOnly = await prisma.familyGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyGroupFindManyArgs>(args?: SelectSubset<T, FamilyGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FamilyGroup.
     * @param {FamilyGroupCreateArgs} args - Arguments to create a FamilyGroup.
     * @example
     * // Create one FamilyGroup
     * const FamilyGroup = await prisma.familyGroup.create({
     *   data: {
     *     // ... data to create a FamilyGroup
     *   }
     * })
     * 
     */
    create<T extends FamilyGroupCreateArgs>(args: SelectSubset<T, FamilyGroupCreateArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FamilyGroups.
     * @param {FamilyGroupCreateManyArgs} args - Arguments to create many FamilyGroups.
     * @example
     * // Create many FamilyGroups
     * const familyGroup = await prisma.familyGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyGroupCreateManyArgs>(args?: SelectSubset<T, FamilyGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FamilyGroups and returns the data saved in the database.
     * @param {FamilyGroupCreateManyAndReturnArgs} args - Arguments to create many FamilyGroups.
     * @example
     * // Create many FamilyGroups
     * const familyGroup = await prisma.familyGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FamilyGroups and only return the `id`
     * const familyGroupWithIdOnly = await prisma.familyGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamilyGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, FamilyGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FamilyGroup.
     * @param {FamilyGroupDeleteArgs} args - Arguments to delete one FamilyGroup.
     * @example
     * // Delete one FamilyGroup
     * const FamilyGroup = await prisma.familyGroup.delete({
     *   where: {
     *     // ... filter to delete one FamilyGroup
     *   }
     * })
     * 
     */
    delete<T extends FamilyGroupDeleteArgs>(args: SelectSubset<T, FamilyGroupDeleteArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FamilyGroup.
     * @param {FamilyGroupUpdateArgs} args - Arguments to update one FamilyGroup.
     * @example
     * // Update one FamilyGroup
     * const familyGroup = await prisma.familyGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyGroupUpdateArgs>(args: SelectSubset<T, FamilyGroupUpdateArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FamilyGroups.
     * @param {FamilyGroupDeleteManyArgs} args - Arguments to filter FamilyGroups to delete.
     * @example
     * // Delete a few FamilyGroups
     * const { count } = await prisma.familyGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyGroupDeleteManyArgs>(args?: SelectSubset<T, FamilyGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FamilyGroups
     * const familyGroup = await prisma.familyGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyGroupUpdateManyArgs>(args: SelectSubset<T, FamilyGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyGroups and returns the data updated in the database.
     * @param {FamilyGroupUpdateManyAndReturnArgs} args - Arguments to update many FamilyGroups.
     * @example
     * // Update many FamilyGroups
     * const familyGroup = await prisma.familyGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FamilyGroups and only return the `id`
     * const familyGroupWithIdOnly = await prisma.familyGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends FamilyGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, FamilyGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FamilyGroup.
     * @param {FamilyGroupUpsertArgs} args - Arguments to update or create a FamilyGroup.
     * @example
     * // Update or create a FamilyGroup
     * const familyGroup = await prisma.familyGroup.upsert({
     *   create: {
     *     // ... data to create a FamilyGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FamilyGroup we want to update
     *   }
     * })
     */
    upsert<T extends FamilyGroupUpsertArgs>(args: SelectSubset<T, FamilyGroupUpsertArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FamilyGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupCountArgs} args - Arguments to filter FamilyGroups to count.
     * @example
     * // Count the number of FamilyGroups
     * const count = await prisma.familyGroup.count({
     *   where: {
     *     // ... the filter for the FamilyGroups we want to count
     *   }
     * })
    **/
    count<T extends FamilyGroupCountArgs>(
      args?: Subset<T, FamilyGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FamilyGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilyGroupAggregateArgs>(args: Subset<T, FamilyGroupAggregateArgs>): Prisma.PrismaPromise<GetFamilyGroupAggregateType<T>>

    /**
     * Group by FamilyGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupGroupByArgs} args - Group by arguments.
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
      T extends FamilyGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilyGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FamilyGroup model
   */
  readonly fields: FamilyGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FamilyGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caregiverDevices<T extends FamilyGroup$caregiverDevicesArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroup$caregiverDevicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientDevices<T extends FamilyGroup$patientDevicesArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroup$patientDevicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pairingCodes<T extends FamilyGroup$pairingCodesArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroup$pairingCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medications<T extends FamilyGroup$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroup$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends FamilyGroup$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroup$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FamilyGroup model
   */
  interface FamilyGroupFieldRefs {
    readonly id: FieldRef<"FamilyGroup", 'String'>
    readonly name: FieldRef<"FamilyGroup", 'String'>
    readonly createdAt: FieldRef<"FamilyGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FamilyGroup findUnique
   */
  export type FamilyGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * Filter, which FamilyGroup to fetch.
     */
    where: FamilyGroupWhereUniqueInput
  }

  /**
   * FamilyGroup findUniqueOrThrow
   */
  export type FamilyGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * Filter, which FamilyGroup to fetch.
     */
    where: FamilyGroupWhereUniqueInput
  }

  /**
   * FamilyGroup findFirst
   */
  export type FamilyGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * Filter, which FamilyGroup to fetch.
     */
    where?: FamilyGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyGroups to fetch.
     */
    orderBy?: FamilyGroupOrderByWithRelationInput | FamilyGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyGroups.
     */
    cursor?: FamilyGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyGroups.
     */
    distinct?: FamilyGroupScalarFieldEnum | FamilyGroupScalarFieldEnum[]
  }

  /**
   * FamilyGroup findFirstOrThrow
   */
  export type FamilyGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * Filter, which FamilyGroup to fetch.
     */
    where?: FamilyGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyGroups to fetch.
     */
    orderBy?: FamilyGroupOrderByWithRelationInput | FamilyGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyGroups.
     */
    cursor?: FamilyGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyGroups.
     */
    distinct?: FamilyGroupScalarFieldEnum | FamilyGroupScalarFieldEnum[]
  }

  /**
   * FamilyGroup findMany
   */
  export type FamilyGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * Filter, which FamilyGroups to fetch.
     */
    where?: FamilyGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyGroups to fetch.
     */
    orderBy?: FamilyGroupOrderByWithRelationInput | FamilyGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FamilyGroups.
     */
    cursor?: FamilyGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyGroups.
     */
    skip?: number
    distinct?: FamilyGroupScalarFieldEnum | FamilyGroupScalarFieldEnum[]
  }

  /**
   * FamilyGroup create
   */
  export type FamilyGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a FamilyGroup.
     */
    data?: XOR<FamilyGroupCreateInput, FamilyGroupUncheckedCreateInput>
  }

  /**
   * FamilyGroup createMany
   */
  export type FamilyGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FamilyGroups.
     */
    data: FamilyGroupCreateManyInput | FamilyGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FamilyGroup createManyAndReturn
   */
  export type FamilyGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * The data used to create many FamilyGroups.
     */
    data: FamilyGroupCreateManyInput | FamilyGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FamilyGroup update
   */
  export type FamilyGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a FamilyGroup.
     */
    data: XOR<FamilyGroupUpdateInput, FamilyGroupUncheckedUpdateInput>
    /**
     * Choose, which FamilyGroup to update.
     */
    where: FamilyGroupWhereUniqueInput
  }

  /**
   * FamilyGroup updateMany
   */
  export type FamilyGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FamilyGroups.
     */
    data: XOR<FamilyGroupUpdateManyMutationInput, FamilyGroupUncheckedUpdateManyInput>
    /**
     * Filter which FamilyGroups to update
     */
    where?: FamilyGroupWhereInput
    /**
     * Limit how many FamilyGroups to update.
     */
    limit?: number
  }

  /**
   * FamilyGroup updateManyAndReturn
   */
  export type FamilyGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * The data used to update FamilyGroups.
     */
    data: XOR<FamilyGroupUpdateManyMutationInput, FamilyGroupUncheckedUpdateManyInput>
    /**
     * Filter which FamilyGroups to update
     */
    where?: FamilyGroupWhereInput
    /**
     * Limit how many FamilyGroups to update.
     */
    limit?: number
  }

  /**
   * FamilyGroup upsert
   */
  export type FamilyGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the FamilyGroup to update in case it exists.
     */
    where: FamilyGroupWhereUniqueInput
    /**
     * In case the FamilyGroup found by the `where` argument doesn't exist, create a new FamilyGroup with this data.
     */
    create: XOR<FamilyGroupCreateInput, FamilyGroupUncheckedCreateInput>
    /**
     * In case the FamilyGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyGroupUpdateInput, FamilyGroupUncheckedUpdateInput>
  }

  /**
   * FamilyGroup delete
   */
  export type FamilyGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    /**
     * Filter which FamilyGroup to delete.
     */
    where: FamilyGroupWhereUniqueInput
  }

  /**
   * FamilyGroup deleteMany
   */
  export type FamilyGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyGroups to delete
     */
    where?: FamilyGroupWhereInput
    /**
     * Limit how many FamilyGroups to delete.
     */
    limit?: number
  }

  /**
   * FamilyGroup.caregiverDevices
   */
  export type FamilyGroup$caregiverDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    where?: CaregiverDeviceWhereInput
    orderBy?: CaregiverDeviceOrderByWithRelationInput | CaregiverDeviceOrderByWithRelationInput[]
    cursor?: CaregiverDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaregiverDeviceScalarFieldEnum | CaregiverDeviceScalarFieldEnum[]
  }

  /**
   * FamilyGroup.patientDevices
   */
  export type FamilyGroup$patientDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    where?: PatientDeviceWhereInput
    orderBy?: PatientDeviceOrderByWithRelationInput | PatientDeviceOrderByWithRelationInput[]
    cursor?: PatientDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientDeviceScalarFieldEnum | PatientDeviceScalarFieldEnum[]
  }

  /**
   * FamilyGroup.pairingCodes
   */
  export type FamilyGroup$pairingCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    where?: PairingCodeWhereInput
    orderBy?: PairingCodeOrderByWithRelationInput | PairingCodeOrderByWithRelationInput[]
    cursor?: PairingCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairingCodeScalarFieldEnum | PairingCodeScalarFieldEnum[]
  }

  /**
   * FamilyGroup.medications
   */
  export type FamilyGroup$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * FamilyGroup.notifications
   */
  export type FamilyGroup$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    cursor?: NotificationEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }

  /**
   * FamilyGroup without action
   */
  export type FamilyGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
  }


  /**
   * Model CaregiverDevice
   */

  export type AggregateCaregiverDevice = {
    _count: CaregiverDeviceCountAggregateOutputType | null
    _min: CaregiverDeviceMinAggregateOutputType | null
    _max: CaregiverDeviceMaxAggregateOutputType | null
  }

  export type CaregiverDeviceMinAggregateOutputType = {
    id: string | null
    familyGroupId: string | null
    deviceToken: string | null
    label: string | null
    createdAt: Date | null
  }

  export type CaregiverDeviceMaxAggregateOutputType = {
    id: string | null
    familyGroupId: string | null
    deviceToken: string | null
    label: string | null
    createdAt: Date | null
  }

  export type CaregiverDeviceCountAggregateOutputType = {
    id: number
    familyGroupId: number
    deviceToken: number
    label: number
    createdAt: number
    _all: number
  }


  export type CaregiverDeviceMinAggregateInputType = {
    id?: true
    familyGroupId?: true
    deviceToken?: true
    label?: true
    createdAt?: true
  }

  export type CaregiverDeviceMaxAggregateInputType = {
    id?: true
    familyGroupId?: true
    deviceToken?: true
    label?: true
    createdAt?: true
  }

  export type CaregiverDeviceCountAggregateInputType = {
    id?: true
    familyGroupId?: true
    deviceToken?: true
    label?: true
    createdAt?: true
    _all?: true
  }

  export type CaregiverDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaregiverDevice to aggregate.
     */
    where?: CaregiverDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverDevices to fetch.
     */
    orderBy?: CaregiverDeviceOrderByWithRelationInput | CaregiverDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaregiverDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaregiverDevices
    **/
    _count?: true | CaregiverDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaregiverDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaregiverDeviceMaxAggregateInputType
  }

  export type GetCaregiverDeviceAggregateType<T extends CaregiverDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateCaregiverDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregiverDevice[P]>
      : GetScalarType<T[P], AggregateCaregiverDevice[P]>
  }




  export type CaregiverDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaregiverDeviceWhereInput
    orderBy?: CaregiverDeviceOrderByWithAggregationInput | CaregiverDeviceOrderByWithAggregationInput[]
    by: CaregiverDeviceScalarFieldEnum[] | CaregiverDeviceScalarFieldEnum
    having?: CaregiverDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaregiverDeviceCountAggregateInputType | true
    _min?: CaregiverDeviceMinAggregateInputType
    _max?: CaregiverDeviceMaxAggregateInputType
  }

  export type CaregiverDeviceGroupByOutputType = {
    id: string
    familyGroupId: string
    deviceToken: string
    label: string | null
    createdAt: Date
    _count: CaregiverDeviceCountAggregateOutputType | null
    _min: CaregiverDeviceMinAggregateOutputType | null
    _max: CaregiverDeviceMaxAggregateOutputType | null
  }

  type GetCaregiverDeviceGroupByPayload<T extends CaregiverDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaregiverDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaregiverDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaregiverDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], CaregiverDeviceGroupByOutputType[P]>
        }
      >
    >


  export type CaregiverDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    deviceToken?: boolean
    label?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiverDevice"]>

  export type CaregiverDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    deviceToken?: boolean
    label?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiverDevice"]>

  export type CaregiverDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    deviceToken?: boolean
    label?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiverDevice"]>

  export type CaregiverDeviceSelectScalar = {
    id?: boolean
    familyGroupId?: boolean
    deviceToken?: boolean
    label?: boolean
    createdAt?: boolean
  }

  export type CaregiverDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "familyGroupId" | "deviceToken" | "label" | "createdAt", ExtArgs["result"]["caregiverDevice"]>
  export type CaregiverDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }
  export type CaregiverDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }
  export type CaregiverDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }

  export type $CaregiverDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaregiverDevice"
    objects: {
      familyGroup: Prisma.$FamilyGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      familyGroupId: string
      deviceToken: string
      label: string | null
      createdAt: Date
    }, ExtArgs["result"]["caregiverDevice"]>
    composites: {}
  }

  type CaregiverDeviceGetPayload<S extends boolean | null | undefined | CaregiverDeviceDefaultArgs> = $Result.GetResult<Prisma.$CaregiverDevicePayload, S>

  type CaregiverDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaregiverDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaregiverDeviceCountAggregateInputType | true
    }

  export interface CaregiverDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaregiverDevice'], meta: { name: 'CaregiverDevice' } }
    /**
     * Find zero or one CaregiverDevice that matches the filter.
     * @param {CaregiverDeviceFindUniqueArgs} args - Arguments to find a CaregiverDevice
     * @example
     * // Get one CaregiverDevice
     * const caregiverDevice = await prisma.caregiverDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaregiverDeviceFindUniqueArgs>(args: SelectSubset<T, CaregiverDeviceFindUniqueArgs<ExtArgs>>): Prisma__CaregiverDeviceClient<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaregiverDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaregiverDeviceFindUniqueOrThrowArgs} args - Arguments to find a CaregiverDevice
     * @example
     * // Get one CaregiverDevice
     * const caregiverDevice = await prisma.caregiverDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaregiverDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, CaregiverDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaregiverDeviceClient<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaregiverDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverDeviceFindFirstArgs} args - Arguments to find a CaregiverDevice
     * @example
     * // Get one CaregiverDevice
     * const caregiverDevice = await prisma.caregiverDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaregiverDeviceFindFirstArgs>(args?: SelectSubset<T, CaregiverDeviceFindFirstArgs<ExtArgs>>): Prisma__CaregiverDeviceClient<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaregiverDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverDeviceFindFirstOrThrowArgs} args - Arguments to find a CaregiverDevice
     * @example
     * // Get one CaregiverDevice
     * const caregiverDevice = await prisma.caregiverDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaregiverDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, CaregiverDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaregiverDeviceClient<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaregiverDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaregiverDevices
     * const caregiverDevices = await prisma.caregiverDevice.findMany()
     * 
     * // Get first 10 CaregiverDevices
     * const caregiverDevices = await prisma.caregiverDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caregiverDeviceWithIdOnly = await prisma.caregiverDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaregiverDeviceFindManyArgs>(args?: SelectSubset<T, CaregiverDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaregiverDevice.
     * @param {CaregiverDeviceCreateArgs} args - Arguments to create a CaregiverDevice.
     * @example
     * // Create one CaregiverDevice
     * const CaregiverDevice = await prisma.caregiverDevice.create({
     *   data: {
     *     // ... data to create a CaregiverDevice
     *   }
     * })
     * 
     */
    create<T extends CaregiverDeviceCreateArgs>(args: SelectSubset<T, CaregiverDeviceCreateArgs<ExtArgs>>): Prisma__CaregiverDeviceClient<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaregiverDevices.
     * @param {CaregiverDeviceCreateManyArgs} args - Arguments to create many CaregiverDevices.
     * @example
     * // Create many CaregiverDevices
     * const caregiverDevice = await prisma.caregiverDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaregiverDeviceCreateManyArgs>(args?: SelectSubset<T, CaregiverDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaregiverDevices and returns the data saved in the database.
     * @param {CaregiverDeviceCreateManyAndReturnArgs} args - Arguments to create many CaregiverDevices.
     * @example
     * // Create many CaregiverDevices
     * const caregiverDevice = await prisma.caregiverDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaregiverDevices and only return the `id`
     * const caregiverDeviceWithIdOnly = await prisma.caregiverDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaregiverDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, CaregiverDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaregiverDevice.
     * @param {CaregiverDeviceDeleteArgs} args - Arguments to delete one CaregiverDevice.
     * @example
     * // Delete one CaregiverDevice
     * const CaregiverDevice = await prisma.caregiverDevice.delete({
     *   where: {
     *     // ... filter to delete one CaregiverDevice
     *   }
     * })
     * 
     */
    delete<T extends CaregiverDeviceDeleteArgs>(args: SelectSubset<T, CaregiverDeviceDeleteArgs<ExtArgs>>): Prisma__CaregiverDeviceClient<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaregiverDevice.
     * @param {CaregiverDeviceUpdateArgs} args - Arguments to update one CaregiverDevice.
     * @example
     * // Update one CaregiverDevice
     * const caregiverDevice = await prisma.caregiverDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaregiverDeviceUpdateArgs>(args: SelectSubset<T, CaregiverDeviceUpdateArgs<ExtArgs>>): Prisma__CaregiverDeviceClient<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaregiverDevices.
     * @param {CaregiverDeviceDeleteManyArgs} args - Arguments to filter CaregiverDevices to delete.
     * @example
     * // Delete a few CaregiverDevices
     * const { count } = await prisma.caregiverDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaregiverDeviceDeleteManyArgs>(args?: SelectSubset<T, CaregiverDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaregiverDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaregiverDevices
     * const caregiverDevice = await prisma.caregiverDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaregiverDeviceUpdateManyArgs>(args: SelectSubset<T, CaregiverDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaregiverDevices and returns the data updated in the database.
     * @param {CaregiverDeviceUpdateManyAndReturnArgs} args - Arguments to update many CaregiverDevices.
     * @example
     * // Update many CaregiverDevices
     * const caregiverDevice = await prisma.caregiverDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaregiverDevices and only return the `id`
     * const caregiverDeviceWithIdOnly = await prisma.caregiverDevice.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaregiverDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, CaregiverDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaregiverDevice.
     * @param {CaregiverDeviceUpsertArgs} args - Arguments to update or create a CaregiverDevice.
     * @example
     * // Update or create a CaregiverDevice
     * const caregiverDevice = await prisma.caregiverDevice.upsert({
     *   create: {
     *     // ... data to create a CaregiverDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaregiverDevice we want to update
     *   }
     * })
     */
    upsert<T extends CaregiverDeviceUpsertArgs>(args: SelectSubset<T, CaregiverDeviceUpsertArgs<ExtArgs>>): Prisma__CaregiverDeviceClient<$Result.GetResult<Prisma.$CaregiverDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaregiverDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverDeviceCountArgs} args - Arguments to filter CaregiverDevices to count.
     * @example
     * // Count the number of CaregiverDevices
     * const count = await prisma.caregiverDevice.count({
     *   where: {
     *     // ... the filter for the CaregiverDevices we want to count
     *   }
     * })
    **/
    count<T extends CaregiverDeviceCountArgs>(
      args?: Subset<T, CaregiverDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaregiverDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaregiverDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaregiverDeviceAggregateArgs>(args: Subset<T, CaregiverDeviceAggregateArgs>): Prisma.PrismaPromise<GetCaregiverDeviceAggregateType<T>>

    /**
     * Group by CaregiverDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverDeviceGroupByArgs} args - Group by arguments.
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
      T extends CaregiverDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaregiverDeviceGroupByArgs['orderBy'] }
        : { orderBy?: CaregiverDeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaregiverDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiverDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaregiverDevice model
   */
  readonly fields: CaregiverDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaregiverDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaregiverDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familyGroup<T extends FamilyGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroupDefaultArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CaregiverDevice model
   */
  interface CaregiverDeviceFieldRefs {
    readonly id: FieldRef<"CaregiverDevice", 'String'>
    readonly familyGroupId: FieldRef<"CaregiverDevice", 'String'>
    readonly deviceToken: FieldRef<"CaregiverDevice", 'String'>
    readonly label: FieldRef<"CaregiverDevice", 'String'>
    readonly createdAt: FieldRef<"CaregiverDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CaregiverDevice findUnique
   */
  export type CaregiverDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * Filter, which CaregiverDevice to fetch.
     */
    where: CaregiverDeviceWhereUniqueInput
  }

  /**
   * CaregiverDevice findUniqueOrThrow
   */
  export type CaregiverDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * Filter, which CaregiverDevice to fetch.
     */
    where: CaregiverDeviceWhereUniqueInput
  }

  /**
   * CaregiverDevice findFirst
   */
  export type CaregiverDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * Filter, which CaregiverDevice to fetch.
     */
    where?: CaregiverDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverDevices to fetch.
     */
    orderBy?: CaregiverDeviceOrderByWithRelationInput | CaregiverDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaregiverDevices.
     */
    cursor?: CaregiverDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaregiverDevices.
     */
    distinct?: CaregiverDeviceScalarFieldEnum | CaregiverDeviceScalarFieldEnum[]
  }

  /**
   * CaregiverDevice findFirstOrThrow
   */
  export type CaregiverDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * Filter, which CaregiverDevice to fetch.
     */
    where?: CaregiverDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverDevices to fetch.
     */
    orderBy?: CaregiverDeviceOrderByWithRelationInput | CaregiverDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaregiverDevices.
     */
    cursor?: CaregiverDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaregiverDevices.
     */
    distinct?: CaregiverDeviceScalarFieldEnum | CaregiverDeviceScalarFieldEnum[]
  }

  /**
   * CaregiverDevice findMany
   */
  export type CaregiverDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * Filter, which CaregiverDevices to fetch.
     */
    where?: CaregiverDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaregiverDevices to fetch.
     */
    orderBy?: CaregiverDeviceOrderByWithRelationInput | CaregiverDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaregiverDevices.
     */
    cursor?: CaregiverDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaregiverDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaregiverDevices.
     */
    skip?: number
    distinct?: CaregiverDeviceScalarFieldEnum | CaregiverDeviceScalarFieldEnum[]
  }

  /**
   * CaregiverDevice create
   */
  export type CaregiverDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a CaregiverDevice.
     */
    data: XOR<CaregiverDeviceCreateInput, CaregiverDeviceUncheckedCreateInput>
  }

  /**
   * CaregiverDevice createMany
   */
  export type CaregiverDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaregiverDevices.
     */
    data: CaregiverDeviceCreateManyInput | CaregiverDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaregiverDevice createManyAndReturn
   */
  export type CaregiverDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many CaregiverDevices.
     */
    data: CaregiverDeviceCreateManyInput | CaregiverDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaregiverDevice update
   */
  export type CaregiverDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a CaregiverDevice.
     */
    data: XOR<CaregiverDeviceUpdateInput, CaregiverDeviceUncheckedUpdateInput>
    /**
     * Choose, which CaregiverDevice to update.
     */
    where: CaregiverDeviceWhereUniqueInput
  }

  /**
   * CaregiverDevice updateMany
   */
  export type CaregiverDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaregiverDevices.
     */
    data: XOR<CaregiverDeviceUpdateManyMutationInput, CaregiverDeviceUncheckedUpdateManyInput>
    /**
     * Filter which CaregiverDevices to update
     */
    where?: CaregiverDeviceWhereInput
    /**
     * Limit how many CaregiverDevices to update.
     */
    limit?: number
  }

  /**
   * CaregiverDevice updateManyAndReturn
   */
  export type CaregiverDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * The data used to update CaregiverDevices.
     */
    data: XOR<CaregiverDeviceUpdateManyMutationInput, CaregiverDeviceUncheckedUpdateManyInput>
    /**
     * Filter which CaregiverDevices to update
     */
    where?: CaregiverDeviceWhereInput
    /**
     * Limit how many CaregiverDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaregiverDevice upsert
   */
  export type CaregiverDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the CaregiverDevice to update in case it exists.
     */
    where: CaregiverDeviceWhereUniqueInput
    /**
     * In case the CaregiverDevice found by the `where` argument doesn't exist, create a new CaregiverDevice with this data.
     */
    create: XOR<CaregiverDeviceCreateInput, CaregiverDeviceUncheckedCreateInput>
    /**
     * In case the CaregiverDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaregiverDeviceUpdateInput, CaregiverDeviceUncheckedUpdateInput>
  }

  /**
   * CaregiverDevice delete
   */
  export type CaregiverDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
    /**
     * Filter which CaregiverDevice to delete.
     */
    where: CaregiverDeviceWhereUniqueInput
  }

  /**
   * CaregiverDevice deleteMany
   */
  export type CaregiverDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaregiverDevices to delete
     */
    where?: CaregiverDeviceWhereInput
    /**
     * Limit how many CaregiverDevices to delete.
     */
    limit?: number
  }

  /**
   * CaregiverDevice without action
   */
  export type CaregiverDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverDevice
     */
    select?: CaregiverDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaregiverDevice
     */
    omit?: CaregiverDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverDeviceInclude<ExtArgs> | null
  }


  /**
   * Model PatientDevice
   */

  export type AggregatePatientDevice = {
    _count: PatientDeviceCountAggregateOutputType | null
    _min: PatientDeviceMinAggregateOutputType | null
    _max: PatientDeviceMaxAggregateOutputType | null
  }

  export type PatientDeviceMinAggregateOutputType = {
    id: string | null
    familyGroupId: string | null
    deviceToken: string | null
    tz: string | null
    label: string | null
    createdAt: Date | null
  }

  export type PatientDeviceMaxAggregateOutputType = {
    id: string | null
    familyGroupId: string | null
    deviceToken: string | null
    tz: string | null
    label: string | null
    createdAt: Date | null
  }

  export type PatientDeviceCountAggregateOutputType = {
    id: number
    familyGroupId: number
    deviceToken: number
    tz: number
    label: number
    createdAt: number
    _all: number
  }


  export type PatientDeviceMinAggregateInputType = {
    id?: true
    familyGroupId?: true
    deviceToken?: true
    tz?: true
    label?: true
    createdAt?: true
  }

  export type PatientDeviceMaxAggregateInputType = {
    id?: true
    familyGroupId?: true
    deviceToken?: true
    tz?: true
    label?: true
    createdAt?: true
  }

  export type PatientDeviceCountAggregateInputType = {
    id?: true
    familyGroupId?: true
    deviceToken?: true
    tz?: true
    label?: true
    createdAt?: true
    _all?: true
  }

  export type PatientDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientDevice to aggregate.
     */
    where?: PatientDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientDevices to fetch.
     */
    orderBy?: PatientDeviceOrderByWithRelationInput | PatientDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientDevices
    **/
    _count?: true | PatientDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientDeviceMaxAggregateInputType
  }

  export type GetPatientDeviceAggregateType<T extends PatientDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientDevice[P]>
      : GetScalarType<T[P], AggregatePatientDevice[P]>
  }




  export type PatientDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientDeviceWhereInput
    orderBy?: PatientDeviceOrderByWithAggregationInput | PatientDeviceOrderByWithAggregationInput[]
    by: PatientDeviceScalarFieldEnum[] | PatientDeviceScalarFieldEnum
    having?: PatientDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientDeviceCountAggregateInputType | true
    _min?: PatientDeviceMinAggregateInputType
    _max?: PatientDeviceMaxAggregateInputType
  }

  export type PatientDeviceGroupByOutputType = {
    id: string
    familyGroupId: string | null
    deviceToken: string
    tz: string
    label: string | null
    createdAt: Date
    _count: PatientDeviceCountAggregateOutputType | null
    _min: PatientDeviceMinAggregateOutputType | null
    _max: PatientDeviceMaxAggregateOutputType | null
  }

  type GetPatientDeviceGroupByPayload<T extends PatientDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], PatientDeviceGroupByOutputType[P]>
        }
      >
    >


  export type PatientDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    deviceToken?: boolean
    tz?: boolean
    label?: boolean
    createdAt?: boolean
    familyGroup?: boolean | PatientDevice$familyGroupArgs<ExtArgs>
  }, ExtArgs["result"]["patientDevice"]>

  export type PatientDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    deviceToken?: boolean
    tz?: boolean
    label?: boolean
    createdAt?: boolean
    familyGroup?: boolean | PatientDevice$familyGroupArgs<ExtArgs>
  }, ExtArgs["result"]["patientDevice"]>

  export type PatientDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    deviceToken?: boolean
    tz?: boolean
    label?: boolean
    createdAt?: boolean
    familyGroup?: boolean | PatientDevice$familyGroupArgs<ExtArgs>
  }, ExtArgs["result"]["patientDevice"]>

  export type PatientDeviceSelectScalar = {
    id?: boolean
    familyGroupId?: boolean
    deviceToken?: boolean
    tz?: boolean
    label?: boolean
    createdAt?: boolean
  }

  export type PatientDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "familyGroupId" | "deviceToken" | "tz" | "label" | "createdAt", ExtArgs["result"]["patientDevice"]>
  export type PatientDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | PatientDevice$familyGroupArgs<ExtArgs>
  }
  export type PatientDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | PatientDevice$familyGroupArgs<ExtArgs>
  }
  export type PatientDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | PatientDevice$familyGroupArgs<ExtArgs>
  }

  export type $PatientDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientDevice"
    objects: {
      familyGroup: Prisma.$FamilyGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      familyGroupId: string | null
      deviceToken: string
      tz: string
      label: string | null
      createdAt: Date
    }, ExtArgs["result"]["patientDevice"]>
    composites: {}
  }

  type PatientDeviceGetPayload<S extends boolean | null | undefined | PatientDeviceDefaultArgs> = $Result.GetResult<Prisma.$PatientDevicePayload, S>

  type PatientDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientDeviceCountAggregateInputType | true
    }

  export interface PatientDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientDevice'], meta: { name: 'PatientDevice' } }
    /**
     * Find zero or one PatientDevice that matches the filter.
     * @param {PatientDeviceFindUniqueArgs} args - Arguments to find a PatientDevice
     * @example
     * // Get one PatientDevice
     * const patientDevice = await prisma.patientDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientDeviceFindUniqueArgs>(args: SelectSubset<T, PatientDeviceFindUniqueArgs<ExtArgs>>): Prisma__PatientDeviceClient<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientDeviceFindUniqueOrThrowArgs} args - Arguments to find a PatientDevice
     * @example
     * // Get one PatientDevice
     * const patientDevice = await prisma.patientDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientDeviceClient<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientDeviceFindFirstArgs} args - Arguments to find a PatientDevice
     * @example
     * // Get one PatientDevice
     * const patientDevice = await prisma.patientDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientDeviceFindFirstArgs>(args?: SelectSubset<T, PatientDeviceFindFirstArgs<ExtArgs>>): Prisma__PatientDeviceClient<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientDeviceFindFirstOrThrowArgs} args - Arguments to find a PatientDevice
     * @example
     * // Get one PatientDevice
     * const patientDevice = await prisma.patientDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientDeviceClient<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientDevices
     * const patientDevices = await prisma.patientDevice.findMany()
     * 
     * // Get first 10 PatientDevices
     * const patientDevices = await prisma.patientDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientDeviceWithIdOnly = await prisma.patientDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientDeviceFindManyArgs>(args?: SelectSubset<T, PatientDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientDevice.
     * @param {PatientDeviceCreateArgs} args - Arguments to create a PatientDevice.
     * @example
     * // Create one PatientDevice
     * const PatientDevice = await prisma.patientDevice.create({
     *   data: {
     *     // ... data to create a PatientDevice
     *   }
     * })
     * 
     */
    create<T extends PatientDeviceCreateArgs>(args: SelectSubset<T, PatientDeviceCreateArgs<ExtArgs>>): Prisma__PatientDeviceClient<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientDevices.
     * @param {PatientDeviceCreateManyArgs} args - Arguments to create many PatientDevices.
     * @example
     * // Create many PatientDevices
     * const patientDevice = await prisma.patientDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientDeviceCreateManyArgs>(args?: SelectSubset<T, PatientDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientDevices and returns the data saved in the database.
     * @param {PatientDeviceCreateManyAndReturnArgs} args - Arguments to create many PatientDevices.
     * @example
     * // Create many PatientDevices
     * const patientDevice = await prisma.patientDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientDevices and only return the `id`
     * const patientDeviceWithIdOnly = await prisma.patientDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientDevice.
     * @param {PatientDeviceDeleteArgs} args - Arguments to delete one PatientDevice.
     * @example
     * // Delete one PatientDevice
     * const PatientDevice = await prisma.patientDevice.delete({
     *   where: {
     *     // ... filter to delete one PatientDevice
     *   }
     * })
     * 
     */
    delete<T extends PatientDeviceDeleteArgs>(args: SelectSubset<T, PatientDeviceDeleteArgs<ExtArgs>>): Prisma__PatientDeviceClient<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientDevice.
     * @param {PatientDeviceUpdateArgs} args - Arguments to update one PatientDevice.
     * @example
     * // Update one PatientDevice
     * const patientDevice = await prisma.patientDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientDeviceUpdateArgs>(args: SelectSubset<T, PatientDeviceUpdateArgs<ExtArgs>>): Prisma__PatientDeviceClient<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientDevices.
     * @param {PatientDeviceDeleteManyArgs} args - Arguments to filter PatientDevices to delete.
     * @example
     * // Delete a few PatientDevices
     * const { count } = await prisma.patientDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeviceDeleteManyArgs>(args?: SelectSubset<T, PatientDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientDevices
     * const patientDevice = await prisma.patientDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientDeviceUpdateManyArgs>(args: SelectSubset<T, PatientDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientDevices and returns the data updated in the database.
     * @param {PatientDeviceUpdateManyAndReturnArgs} args - Arguments to update many PatientDevices.
     * @example
     * // Update many PatientDevices
     * const patientDevice = await prisma.patientDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientDevices and only return the `id`
     * const patientDeviceWithIdOnly = await prisma.patientDevice.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientDevice.
     * @param {PatientDeviceUpsertArgs} args - Arguments to update or create a PatientDevice.
     * @example
     * // Update or create a PatientDevice
     * const patientDevice = await prisma.patientDevice.upsert({
     *   create: {
     *     // ... data to create a PatientDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientDevice we want to update
     *   }
     * })
     */
    upsert<T extends PatientDeviceUpsertArgs>(args: SelectSubset<T, PatientDeviceUpsertArgs<ExtArgs>>): Prisma__PatientDeviceClient<$Result.GetResult<Prisma.$PatientDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientDeviceCountArgs} args - Arguments to filter PatientDevices to count.
     * @example
     * // Count the number of PatientDevices
     * const count = await prisma.patientDevice.count({
     *   where: {
     *     // ... the filter for the PatientDevices we want to count
     *   }
     * })
    **/
    count<T extends PatientDeviceCountArgs>(
      args?: Subset<T, PatientDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientDeviceAggregateArgs>(args: Subset<T, PatientDeviceAggregateArgs>): Prisma.PrismaPromise<GetPatientDeviceAggregateType<T>>

    /**
     * Group by PatientDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientDeviceGroupByArgs} args - Group by arguments.
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
      T extends PatientDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientDeviceGroupByArgs['orderBy'] }
        : { orderBy?: PatientDeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientDevice model
   */
  readonly fields: PatientDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familyGroup<T extends PatientDevice$familyGroupArgs<ExtArgs> = {}>(args?: Subset<T, PatientDevice$familyGroupArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PatientDevice model
   */
  interface PatientDeviceFieldRefs {
    readonly id: FieldRef<"PatientDevice", 'String'>
    readonly familyGroupId: FieldRef<"PatientDevice", 'String'>
    readonly deviceToken: FieldRef<"PatientDevice", 'String'>
    readonly tz: FieldRef<"PatientDevice", 'String'>
    readonly label: FieldRef<"PatientDevice", 'String'>
    readonly createdAt: FieldRef<"PatientDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientDevice findUnique
   */
  export type PatientDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * Filter, which PatientDevice to fetch.
     */
    where: PatientDeviceWhereUniqueInput
  }

  /**
   * PatientDevice findUniqueOrThrow
   */
  export type PatientDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * Filter, which PatientDevice to fetch.
     */
    where: PatientDeviceWhereUniqueInput
  }

  /**
   * PatientDevice findFirst
   */
  export type PatientDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * Filter, which PatientDevice to fetch.
     */
    where?: PatientDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientDevices to fetch.
     */
    orderBy?: PatientDeviceOrderByWithRelationInput | PatientDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientDevices.
     */
    cursor?: PatientDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientDevices.
     */
    distinct?: PatientDeviceScalarFieldEnum | PatientDeviceScalarFieldEnum[]
  }

  /**
   * PatientDevice findFirstOrThrow
   */
  export type PatientDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * Filter, which PatientDevice to fetch.
     */
    where?: PatientDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientDevices to fetch.
     */
    orderBy?: PatientDeviceOrderByWithRelationInput | PatientDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientDevices.
     */
    cursor?: PatientDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientDevices.
     */
    distinct?: PatientDeviceScalarFieldEnum | PatientDeviceScalarFieldEnum[]
  }

  /**
   * PatientDevice findMany
   */
  export type PatientDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * Filter, which PatientDevices to fetch.
     */
    where?: PatientDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientDevices to fetch.
     */
    orderBy?: PatientDeviceOrderByWithRelationInput | PatientDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientDevices.
     */
    cursor?: PatientDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientDevices.
     */
    skip?: number
    distinct?: PatientDeviceScalarFieldEnum | PatientDeviceScalarFieldEnum[]
  }

  /**
   * PatientDevice create
   */
  export type PatientDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientDevice.
     */
    data: XOR<PatientDeviceCreateInput, PatientDeviceUncheckedCreateInput>
  }

  /**
   * PatientDevice createMany
   */
  export type PatientDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientDevices.
     */
    data: PatientDeviceCreateManyInput | PatientDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientDevice createManyAndReturn
   */
  export type PatientDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many PatientDevices.
     */
    data: PatientDeviceCreateManyInput | PatientDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientDevice update
   */
  export type PatientDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientDevice.
     */
    data: XOR<PatientDeviceUpdateInput, PatientDeviceUncheckedUpdateInput>
    /**
     * Choose, which PatientDevice to update.
     */
    where: PatientDeviceWhereUniqueInput
  }

  /**
   * PatientDevice updateMany
   */
  export type PatientDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientDevices.
     */
    data: XOR<PatientDeviceUpdateManyMutationInput, PatientDeviceUncheckedUpdateManyInput>
    /**
     * Filter which PatientDevices to update
     */
    where?: PatientDeviceWhereInput
    /**
     * Limit how many PatientDevices to update.
     */
    limit?: number
  }

  /**
   * PatientDevice updateManyAndReturn
   */
  export type PatientDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * The data used to update PatientDevices.
     */
    data: XOR<PatientDeviceUpdateManyMutationInput, PatientDeviceUncheckedUpdateManyInput>
    /**
     * Filter which PatientDevices to update
     */
    where?: PatientDeviceWhereInput
    /**
     * Limit how many PatientDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientDevice upsert
   */
  export type PatientDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientDevice to update in case it exists.
     */
    where: PatientDeviceWhereUniqueInput
    /**
     * In case the PatientDevice found by the `where` argument doesn't exist, create a new PatientDevice with this data.
     */
    create: XOR<PatientDeviceCreateInput, PatientDeviceUncheckedCreateInput>
    /**
     * In case the PatientDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientDeviceUpdateInput, PatientDeviceUncheckedUpdateInput>
  }

  /**
   * PatientDevice delete
   */
  export type PatientDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
    /**
     * Filter which PatientDevice to delete.
     */
    where: PatientDeviceWhereUniqueInput
  }

  /**
   * PatientDevice deleteMany
   */
  export type PatientDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientDevices to delete
     */
    where?: PatientDeviceWhereInput
    /**
     * Limit how many PatientDevices to delete.
     */
    limit?: number
  }

  /**
   * PatientDevice.familyGroup
   */
  export type PatientDevice$familyGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyGroup
     */
    select?: FamilyGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FamilyGroup
     */
    omit?: FamilyGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyGroupInclude<ExtArgs> | null
    where?: FamilyGroupWhereInput
  }

  /**
   * PatientDevice without action
   */
  export type PatientDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientDevice
     */
    select?: PatientDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientDevice
     */
    omit?: PatientDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientDeviceInclude<ExtArgs> | null
  }


  /**
   * Model PairingCode
   */

  export type AggregatePairingCode = {
    _count: PairingCodeCountAggregateOutputType | null
    _min: PairingCodeMinAggregateOutputType | null
    _max: PairingCodeMaxAggregateOutputType | null
  }

  export type PairingCodeMinAggregateOutputType = {
    code: string | null
    familyGroupId: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PairingCodeMaxAggregateOutputType = {
    code: string | null
    familyGroupId: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PairingCodeCountAggregateOutputType = {
    code: number
    familyGroupId: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type PairingCodeMinAggregateInputType = {
    code?: true
    familyGroupId?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PairingCodeMaxAggregateInputType = {
    code?: true
    familyGroupId?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PairingCodeCountAggregateInputType = {
    code?: true
    familyGroupId?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PairingCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PairingCode to aggregate.
     */
    where?: PairingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairingCodes to fetch.
     */
    orderBy?: PairingCodeOrderByWithRelationInput | PairingCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PairingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PairingCodes
    **/
    _count?: true | PairingCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PairingCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PairingCodeMaxAggregateInputType
  }

  export type GetPairingCodeAggregateType<T extends PairingCodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePairingCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePairingCode[P]>
      : GetScalarType<T[P], AggregatePairingCode[P]>
  }




  export type PairingCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairingCodeWhereInput
    orderBy?: PairingCodeOrderByWithAggregationInput | PairingCodeOrderByWithAggregationInput[]
    by: PairingCodeScalarFieldEnum[] | PairingCodeScalarFieldEnum
    having?: PairingCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PairingCodeCountAggregateInputType | true
    _min?: PairingCodeMinAggregateInputType
    _max?: PairingCodeMaxAggregateInputType
  }

  export type PairingCodeGroupByOutputType = {
    code: string
    familyGroupId: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: PairingCodeCountAggregateOutputType | null
    _min: PairingCodeMinAggregateOutputType | null
    _max: PairingCodeMaxAggregateOutputType | null
  }

  type GetPairingCodeGroupByPayload<T extends PairingCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PairingCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PairingCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PairingCodeGroupByOutputType[P]>
            : GetScalarType<T[P], PairingCodeGroupByOutputType[P]>
        }
      >
    >


  export type PairingCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    familyGroupId?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairingCode"]>

  export type PairingCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    familyGroupId?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairingCode"]>

  export type PairingCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    familyGroupId?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pairingCode"]>

  export type PairingCodeSelectScalar = {
    code?: boolean
    familyGroupId?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type PairingCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "familyGroupId" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["pairingCode"]>
  export type PairingCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }
  export type PairingCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }
  export type PairingCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }

  export type $PairingCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PairingCode"
    objects: {
      familyGroup: Prisma.$FamilyGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      familyGroupId: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["pairingCode"]>
    composites: {}
  }

  type PairingCodeGetPayload<S extends boolean | null | undefined | PairingCodeDefaultArgs> = $Result.GetResult<Prisma.$PairingCodePayload, S>

  type PairingCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PairingCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PairingCodeCountAggregateInputType | true
    }

  export interface PairingCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PairingCode'], meta: { name: 'PairingCode' } }
    /**
     * Find zero or one PairingCode that matches the filter.
     * @param {PairingCodeFindUniqueArgs} args - Arguments to find a PairingCode
     * @example
     * // Get one PairingCode
     * const pairingCode = await prisma.pairingCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PairingCodeFindUniqueArgs>(args: SelectSubset<T, PairingCodeFindUniqueArgs<ExtArgs>>): Prisma__PairingCodeClient<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PairingCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PairingCodeFindUniqueOrThrowArgs} args - Arguments to find a PairingCode
     * @example
     * // Get one PairingCode
     * const pairingCode = await prisma.pairingCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PairingCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, PairingCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PairingCodeClient<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PairingCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairingCodeFindFirstArgs} args - Arguments to find a PairingCode
     * @example
     * // Get one PairingCode
     * const pairingCode = await prisma.pairingCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PairingCodeFindFirstArgs>(args?: SelectSubset<T, PairingCodeFindFirstArgs<ExtArgs>>): Prisma__PairingCodeClient<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PairingCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairingCodeFindFirstOrThrowArgs} args - Arguments to find a PairingCode
     * @example
     * // Get one PairingCode
     * const pairingCode = await prisma.pairingCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PairingCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, PairingCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PairingCodeClient<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PairingCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairingCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PairingCodes
     * const pairingCodes = await prisma.pairingCode.findMany()
     * 
     * // Get first 10 PairingCodes
     * const pairingCodes = await prisma.pairingCode.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const pairingCodeWithCodeOnly = await prisma.pairingCode.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends PairingCodeFindManyArgs>(args?: SelectSubset<T, PairingCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PairingCode.
     * @param {PairingCodeCreateArgs} args - Arguments to create a PairingCode.
     * @example
     * // Create one PairingCode
     * const PairingCode = await prisma.pairingCode.create({
     *   data: {
     *     // ... data to create a PairingCode
     *   }
     * })
     * 
     */
    create<T extends PairingCodeCreateArgs>(args: SelectSubset<T, PairingCodeCreateArgs<ExtArgs>>): Prisma__PairingCodeClient<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PairingCodes.
     * @param {PairingCodeCreateManyArgs} args - Arguments to create many PairingCodes.
     * @example
     * // Create many PairingCodes
     * const pairingCode = await prisma.pairingCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PairingCodeCreateManyArgs>(args?: SelectSubset<T, PairingCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PairingCodes and returns the data saved in the database.
     * @param {PairingCodeCreateManyAndReturnArgs} args - Arguments to create many PairingCodes.
     * @example
     * // Create many PairingCodes
     * const pairingCode = await prisma.pairingCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PairingCodes and only return the `code`
     * const pairingCodeWithCodeOnly = await prisma.pairingCode.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PairingCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, PairingCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PairingCode.
     * @param {PairingCodeDeleteArgs} args - Arguments to delete one PairingCode.
     * @example
     * // Delete one PairingCode
     * const PairingCode = await prisma.pairingCode.delete({
     *   where: {
     *     // ... filter to delete one PairingCode
     *   }
     * })
     * 
     */
    delete<T extends PairingCodeDeleteArgs>(args: SelectSubset<T, PairingCodeDeleteArgs<ExtArgs>>): Prisma__PairingCodeClient<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PairingCode.
     * @param {PairingCodeUpdateArgs} args - Arguments to update one PairingCode.
     * @example
     * // Update one PairingCode
     * const pairingCode = await prisma.pairingCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PairingCodeUpdateArgs>(args: SelectSubset<T, PairingCodeUpdateArgs<ExtArgs>>): Prisma__PairingCodeClient<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PairingCodes.
     * @param {PairingCodeDeleteManyArgs} args - Arguments to filter PairingCodes to delete.
     * @example
     * // Delete a few PairingCodes
     * const { count } = await prisma.pairingCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PairingCodeDeleteManyArgs>(args?: SelectSubset<T, PairingCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PairingCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairingCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PairingCodes
     * const pairingCode = await prisma.pairingCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PairingCodeUpdateManyArgs>(args: SelectSubset<T, PairingCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PairingCodes and returns the data updated in the database.
     * @param {PairingCodeUpdateManyAndReturnArgs} args - Arguments to update many PairingCodes.
     * @example
     * // Update many PairingCodes
     * const pairingCode = await prisma.pairingCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PairingCodes and only return the `code`
     * const pairingCodeWithCodeOnly = await prisma.pairingCode.updateManyAndReturn({
     *   select: { code: true },
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
    updateManyAndReturn<T extends PairingCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, PairingCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PairingCode.
     * @param {PairingCodeUpsertArgs} args - Arguments to update or create a PairingCode.
     * @example
     * // Update or create a PairingCode
     * const pairingCode = await prisma.pairingCode.upsert({
     *   create: {
     *     // ... data to create a PairingCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PairingCode we want to update
     *   }
     * })
     */
    upsert<T extends PairingCodeUpsertArgs>(args: SelectSubset<T, PairingCodeUpsertArgs<ExtArgs>>): Prisma__PairingCodeClient<$Result.GetResult<Prisma.$PairingCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PairingCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairingCodeCountArgs} args - Arguments to filter PairingCodes to count.
     * @example
     * // Count the number of PairingCodes
     * const count = await prisma.pairingCode.count({
     *   where: {
     *     // ... the filter for the PairingCodes we want to count
     *   }
     * })
    **/
    count<T extends PairingCodeCountArgs>(
      args?: Subset<T, PairingCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PairingCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PairingCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairingCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PairingCodeAggregateArgs>(args: Subset<T, PairingCodeAggregateArgs>): Prisma.PrismaPromise<GetPairingCodeAggregateType<T>>

    /**
     * Group by PairingCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairingCodeGroupByArgs} args - Group by arguments.
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
      T extends PairingCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PairingCodeGroupByArgs['orderBy'] }
        : { orderBy?: PairingCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PairingCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPairingCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PairingCode model
   */
  readonly fields: PairingCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PairingCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PairingCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familyGroup<T extends FamilyGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroupDefaultArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PairingCode model
   */
  interface PairingCodeFieldRefs {
    readonly code: FieldRef<"PairingCode", 'String'>
    readonly familyGroupId: FieldRef<"PairingCode", 'String'>
    readonly expiresAt: FieldRef<"PairingCode", 'DateTime'>
    readonly usedAt: FieldRef<"PairingCode", 'DateTime'>
    readonly createdAt: FieldRef<"PairingCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PairingCode findUnique
   */
  export type PairingCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * Filter, which PairingCode to fetch.
     */
    where: PairingCodeWhereUniqueInput
  }

  /**
   * PairingCode findUniqueOrThrow
   */
  export type PairingCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * Filter, which PairingCode to fetch.
     */
    where: PairingCodeWhereUniqueInput
  }

  /**
   * PairingCode findFirst
   */
  export type PairingCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * Filter, which PairingCode to fetch.
     */
    where?: PairingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairingCodes to fetch.
     */
    orderBy?: PairingCodeOrderByWithRelationInput | PairingCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PairingCodes.
     */
    cursor?: PairingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PairingCodes.
     */
    distinct?: PairingCodeScalarFieldEnum | PairingCodeScalarFieldEnum[]
  }

  /**
   * PairingCode findFirstOrThrow
   */
  export type PairingCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * Filter, which PairingCode to fetch.
     */
    where?: PairingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairingCodes to fetch.
     */
    orderBy?: PairingCodeOrderByWithRelationInput | PairingCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PairingCodes.
     */
    cursor?: PairingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairingCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PairingCodes.
     */
    distinct?: PairingCodeScalarFieldEnum | PairingCodeScalarFieldEnum[]
  }

  /**
   * PairingCode findMany
   */
  export type PairingCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * Filter, which PairingCodes to fetch.
     */
    where?: PairingCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairingCodes to fetch.
     */
    orderBy?: PairingCodeOrderByWithRelationInput | PairingCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PairingCodes.
     */
    cursor?: PairingCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairingCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairingCodes.
     */
    skip?: number
    distinct?: PairingCodeScalarFieldEnum | PairingCodeScalarFieldEnum[]
  }

  /**
   * PairingCode create
   */
  export type PairingCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a PairingCode.
     */
    data: XOR<PairingCodeCreateInput, PairingCodeUncheckedCreateInput>
  }

  /**
   * PairingCode createMany
   */
  export type PairingCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PairingCodes.
     */
    data: PairingCodeCreateManyInput | PairingCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PairingCode createManyAndReturn
   */
  export type PairingCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * The data used to create many PairingCodes.
     */
    data: PairingCodeCreateManyInput | PairingCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PairingCode update
   */
  export type PairingCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a PairingCode.
     */
    data: XOR<PairingCodeUpdateInput, PairingCodeUncheckedUpdateInput>
    /**
     * Choose, which PairingCode to update.
     */
    where: PairingCodeWhereUniqueInput
  }

  /**
   * PairingCode updateMany
   */
  export type PairingCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PairingCodes.
     */
    data: XOR<PairingCodeUpdateManyMutationInput, PairingCodeUncheckedUpdateManyInput>
    /**
     * Filter which PairingCodes to update
     */
    where?: PairingCodeWhereInput
    /**
     * Limit how many PairingCodes to update.
     */
    limit?: number
  }

  /**
   * PairingCode updateManyAndReturn
   */
  export type PairingCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * The data used to update PairingCodes.
     */
    data: XOR<PairingCodeUpdateManyMutationInput, PairingCodeUncheckedUpdateManyInput>
    /**
     * Filter which PairingCodes to update
     */
    where?: PairingCodeWhereInput
    /**
     * Limit how many PairingCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PairingCode upsert
   */
  export type PairingCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the PairingCode to update in case it exists.
     */
    where: PairingCodeWhereUniqueInput
    /**
     * In case the PairingCode found by the `where` argument doesn't exist, create a new PairingCode with this data.
     */
    create: XOR<PairingCodeCreateInput, PairingCodeUncheckedCreateInput>
    /**
     * In case the PairingCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PairingCodeUpdateInput, PairingCodeUncheckedUpdateInput>
  }

  /**
   * PairingCode delete
   */
  export type PairingCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
    /**
     * Filter which PairingCode to delete.
     */
    where: PairingCodeWhereUniqueInput
  }

  /**
   * PairingCode deleteMany
   */
  export type PairingCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PairingCodes to delete
     */
    where?: PairingCodeWhereInput
    /**
     * Limit how many PairingCodes to delete.
     */
    limit?: number
  }

  /**
   * PairingCode without action
   */
  export type PairingCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairingCode
     */
    select?: PairingCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PairingCode
     */
    omit?: PairingCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairingCodeInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    remainingCount: number | null
  }

  export type MedicationSumAggregateOutputType = {
    remainingCount: number | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    familyGroupId: string | null
    name: string | null
    instructions: string | null
    remainingCount: number | null
    remainingUpdatedAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    familyGroupId: string | null
    name: string | null
    instructions: string | null
    remainingCount: number | null
    remainingUpdatedAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    familyGroupId: number
    name: number
    instructions: number
    remainingCount: number
    remainingUpdatedAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    remainingCount?: true
  }

  export type MedicationSumAggregateInputType = {
    remainingCount?: true
  }

  export type MedicationMinAggregateInputType = {
    id?: true
    familyGroupId?: true
    name?: true
    instructions?: true
    remainingCount?: true
    remainingUpdatedAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    familyGroupId?: true
    name?: true
    instructions?: true
    remainingCount?: true
    remainingUpdatedAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    familyGroupId?: true
    name?: true
    instructions?: true
    remainingCount?: true
    remainingUpdatedAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    familyGroupId: string
    name: string
    instructions: string | null
    remainingCount: number | null
    remainingUpdatedAt: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    name?: boolean
    instructions?: boolean
    remainingCount?: boolean
    remainingUpdatedAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
    schedules?: boolean | Medication$schedulesArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    name?: boolean
    instructions?: boolean
    remainingCount?: boolean
    remainingUpdatedAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    name?: boolean
    instructions?: boolean
    remainingCount?: boolean
    remainingUpdatedAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    familyGroupId?: boolean
    name?: boolean
    instructions?: boolean
    remainingCount?: boolean
    remainingUpdatedAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "familyGroupId" | "name" | "instructions" | "remainingCount" | "remainingUpdatedAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
    schedules?: boolean | Medication$schedulesArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      familyGroup: Prisma.$FamilyGroupPayload<ExtArgs>
      schedules: Prisma.$DoseSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      familyGroupId: string
      name: string
      instructions: string | null
      remainingCount: number | null
      remainingUpdatedAt: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familyGroup<T extends FamilyGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroupDefaultArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Medication$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Medication$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly familyGroupId: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly instructions: FieldRef<"Medication", 'String'>
    readonly remainingCount: FieldRef<"Medication", 'Int'>
    readonly remainingUpdatedAt: FieldRef<"Medication", 'DateTime'>
    readonly isActive: FieldRef<"Medication", 'Boolean'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
    readonly updatedAt: FieldRef<"Medication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.schedules
   */
  export type Medication$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    where?: DoseScheduleWhereInput
    orderBy?: DoseScheduleOrderByWithRelationInput | DoseScheduleOrderByWithRelationInput[]
    cursor?: DoseScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoseScheduleScalarFieldEnum | DoseScheduleScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model DoseSchedule
   */

  export type AggregateDoseSchedule = {
    _count: DoseScheduleCountAggregateOutputType | null
    _avg: DoseScheduleAvgAggregateOutputType | null
    _sum: DoseScheduleSumAggregateOutputType | null
    _min: DoseScheduleMinAggregateOutputType | null
    _max: DoseScheduleMaxAggregateOutputType | null
  }

  export type DoseScheduleAvgAggregateOutputType = {
    daysOfWeekMask: number | null
    dosesPerTime: number | null
  }

  export type DoseScheduleSumAggregateOutputType = {
    daysOfWeekMask: number | null
    dosesPerTime: number | null
  }

  export type DoseScheduleMinAggregateOutputType = {
    id: string | null
    medicationId: string | null
    timeOfDay: string | null
    daysOfWeekMask: number | null
    dosesPerTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoseScheduleMaxAggregateOutputType = {
    id: string | null
    medicationId: string | null
    timeOfDay: string | null
    daysOfWeekMask: number | null
    dosesPerTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoseScheduleCountAggregateOutputType = {
    id: number
    medicationId: number
    timeOfDay: number
    daysOfWeekMask: number
    dosesPerTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoseScheduleAvgAggregateInputType = {
    daysOfWeekMask?: true
    dosesPerTime?: true
  }

  export type DoseScheduleSumAggregateInputType = {
    daysOfWeekMask?: true
    dosesPerTime?: true
  }

  export type DoseScheduleMinAggregateInputType = {
    id?: true
    medicationId?: true
    timeOfDay?: true
    daysOfWeekMask?: true
    dosesPerTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoseScheduleMaxAggregateInputType = {
    id?: true
    medicationId?: true
    timeOfDay?: true
    daysOfWeekMask?: true
    dosesPerTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoseScheduleCountAggregateInputType = {
    id?: true
    medicationId?: true
    timeOfDay?: true
    daysOfWeekMask?: true
    dosesPerTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoseScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoseSchedule to aggregate.
     */
    where?: DoseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseSchedules to fetch.
     */
    orderBy?: DoseScheduleOrderByWithRelationInput | DoseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoseSchedules
    **/
    _count?: true | DoseScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoseScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoseScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoseScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoseScheduleMaxAggregateInputType
  }

  export type GetDoseScheduleAggregateType<T extends DoseScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateDoseSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoseSchedule[P]>
      : GetScalarType<T[P], AggregateDoseSchedule[P]>
  }




  export type DoseScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoseScheduleWhereInput
    orderBy?: DoseScheduleOrderByWithAggregationInput | DoseScheduleOrderByWithAggregationInput[]
    by: DoseScheduleScalarFieldEnum[] | DoseScheduleScalarFieldEnum
    having?: DoseScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoseScheduleCountAggregateInputType | true
    _avg?: DoseScheduleAvgAggregateInputType
    _sum?: DoseScheduleSumAggregateInputType
    _min?: DoseScheduleMinAggregateInputType
    _max?: DoseScheduleMaxAggregateInputType
  }

  export type DoseScheduleGroupByOutputType = {
    id: string
    medicationId: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime: number
    createdAt: Date
    updatedAt: Date
    _count: DoseScheduleCountAggregateOutputType | null
    _avg: DoseScheduleAvgAggregateOutputType | null
    _sum: DoseScheduleSumAggregateOutputType | null
    _min: DoseScheduleMinAggregateOutputType | null
    _max: DoseScheduleMaxAggregateOutputType | null
  }

  type GetDoseScheduleGroupByPayload<T extends DoseScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoseScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoseScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoseScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], DoseScheduleGroupByOutputType[P]>
        }
      >
    >


  export type DoseScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    timeOfDay?: boolean
    daysOfWeekMask?: boolean
    dosesPerTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    doseEvents?: boolean | DoseSchedule$doseEventsArgs<ExtArgs>
    _count?: boolean | DoseScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseSchedule"]>

  export type DoseScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    timeOfDay?: boolean
    daysOfWeekMask?: boolean
    dosesPerTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseSchedule"]>

  export type DoseScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    timeOfDay?: boolean
    daysOfWeekMask?: boolean
    dosesPerTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseSchedule"]>

  export type DoseScheduleSelectScalar = {
    id?: boolean
    medicationId?: boolean
    timeOfDay?: boolean
    daysOfWeekMask?: boolean
    dosesPerTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoseScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicationId" | "timeOfDay" | "daysOfWeekMask" | "dosesPerTime" | "createdAt" | "updatedAt", ExtArgs["result"]["doseSchedule"]>
  export type DoseScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    doseEvents?: boolean | DoseSchedule$doseEventsArgs<ExtArgs>
    _count?: boolean | DoseScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoseScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type DoseScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $DoseSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoseSchedule"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
      doseEvents: Prisma.$DoseEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicationId: string
      timeOfDay: string
      daysOfWeekMask: number
      dosesPerTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doseSchedule"]>
    composites: {}
  }

  type DoseScheduleGetPayload<S extends boolean | null | undefined | DoseScheduleDefaultArgs> = $Result.GetResult<Prisma.$DoseSchedulePayload, S>

  type DoseScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoseScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoseScheduleCountAggregateInputType | true
    }

  export interface DoseScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoseSchedule'], meta: { name: 'DoseSchedule' } }
    /**
     * Find zero or one DoseSchedule that matches the filter.
     * @param {DoseScheduleFindUniqueArgs} args - Arguments to find a DoseSchedule
     * @example
     * // Get one DoseSchedule
     * const doseSchedule = await prisma.doseSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoseScheduleFindUniqueArgs>(args: SelectSubset<T, DoseScheduleFindUniqueArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoseSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoseScheduleFindUniqueOrThrowArgs} args - Arguments to find a DoseSchedule
     * @example
     * // Get one DoseSchedule
     * const doseSchedule = await prisma.doseSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoseScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, DoseScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoseSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseScheduleFindFirstArgs} args - Arguments to find a DoseSchedule
     * @example
     * // Get one DoseSchedule
     * const doseSchedule = await prisma.doseSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoseScheduleFindFirstArgs>(args?: SelectSubset<T, DoseScheduleFindFirstArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoseSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseScheduleFindFirstOrThrowArgs} args - Arguments to find a DoseSchedule
     * @example
     * // Get one DoseSchedule
     * const doseSchedule = await prisma.doseSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoseScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, DoseScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoseSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoseSchedules
     * const doseSchedules = await prisma.doseSchedule.findMany()
     * 
     * // Get first 10 DoseSchedules
     * const doseSchedules = await prisma.doseSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doseScheduleWithIdOnly = await prisma.doseSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoseScheduleFindManyArgs>(args?: SelectSubset<T, DoseScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoseSchedule.
     * @param {DoseScheduleCreateArgs} args - Arguments to create a DoseSchedule.
     * @example
     * // Create one DoseSchedule
     * const DoseSchedule = await prisma.doseSchedule.create({
     *   data: {
     *     // ... data to create a DoseSchedule
     *   }
     * })
     * 
     */
    create<T extends DoseScheduleCreateArgs>(args: SelectSubset<T, DoseScheduleCreateArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoseSchedules.
     * @param {DoseScheduleCreateManyArgs} args - Arguments to create many DoseSchedules.
     * @example
     * // Create many DoseSchedules
     * const doseSchedule = await prisma.doseSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoseScheduleCreateManyArgs>(args?: SelectSubset<T, DoseScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoseSchedules and returns the data saved in the database.
     * @param {DoseScheduleCreateManyAndReturnArgs} args - Arguments to create many DoseSchedules.
     * @example
     * // Create many DoseSchedules
     * const doseSchedule = await prisma.doseSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoseSchedules and only return the `id`
     * const doseScheduleWithIdOnly = await prisma.doseSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoseScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, DoseScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoseSchedule.
     * @param {DoseScheduleDeleteArgs} args - Arguments to delete one DoseSchedule.
     * @example
     * // Delete one DoseSchedule
     * const DoseSchedule = await prisma.doseSchedule.delete({
     *   where: {
     *     // ... filter to delete one DoseSchedule
     *   }
     * })
     * 
     */
    delete<T extends DoseScheduleDeleteArgs>(args: SelectSubset<T, DoseScheduleDeleteArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoseSchedule.
     * @param {DoseScheduleUpdateArgs} args - Arguments to update one DoseSchedule.
     * @example
     * // Update one DoseSchedule
     * const doseSchedule = await prisma.doseSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoseScheduleUpdateArgs>(args: SelectSubset<T, DoseScheduleUpdateArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoseSchedules.
     * @param {DoseScheduleDeleteManyArgs} args - Arguments to filter DoseSchedules to delete.
     * @example
     * // Delete a few DoseSchedules
     * const { count } = await prisma.doseSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoseScheduleDeleteManyArgs>(args?: SelectSubset<T, DoseScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoseSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoseSchedules
     * const doseSchedule = await prisma.doseSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoseScheduleUpdateManyArgs>(args: SelectSubset<T, DoseScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoseSchedules and returns the data updated in the database.
     * @param {DoseScheduleUpdateManyAndReturnArgs} args - Arguments to update many DoseSchedules.
     * @example
     * // Update many DoseSchedules
     * const doseSchedule = await prisma.doseSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoseSchedules and only return the `id`
     * const doseScheduleWithIdOnly = await prisma.doseSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoseScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, DoseScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoseSchedule.
     * @param {DoseScheduleUpsertArgs} args - Arguments to update or create a DoseSchedule.
     * @example
     * // Update or create a DoseSchedule
     * const doseSchedule = await prisma.doseSchedule.upsert({
     *   create: {
     *     // ... data to create a DoseSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoseSchedule we want to update
     *   }
     * })
     */
    upsert<T extends DoseScheduleUpsertArgs>(args: SelectSubset<T, DoseScheduleUpsertArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoseSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseScheduleCountArgs} args - Arguments to filter DoseSchedules to count.
     * @example
     * // Count the number of DoseSchedules
     * const count = await prisma.doseSchedule.count({
     *   where: {
     *     // ... the filter for the DoseSchedules we want to count
     *   }
     * })
    **/
    count<T extends DoseScheduleCountArgs>(
      args?: Subset<T, DoseScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoseScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoseSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoseScheduleAggregateArgs>(args: Subset<T, DoseScheduleAggregateArgs>): Prisma.PrismaPromise<GetDoseScheduleAggregateType<T>>

    /**
     * Group by DoseSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseScheduleGroupByArgs} args - Group by arguments.
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
      T extends DoseScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoseScheduleGroupByArgs['orderBy'] }
        : { orderBy?: DoseScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoseScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoseScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoseSchedule model
   */
  readonly fields: DoseScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoseSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoseScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doseEvents<T extends DoseSchedule$doseEventsArgs<ExtArgs> = {}>(args?: Subset<T, DoseSchedule$doseEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DoseSchedule model
   */
  interface DoseScheduleFieldRefs {
    readonly id: FieldRef<"DoseSchedule", 'String'>
    readonly medicationId: FieldRef<"DoseSchedule", 'String'>
    readonly timeOfDay: FieldRef<"DoseSchedule", 'String'>
    readonly daysOfWeekMask: FieldRef<"DoseSchedule", 'Int'>
    readonly dosesPerTime: FieldRef<"DoseSchedule", 'Int'>
    readonly createdAt: FieldRef<"DoseSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"DoseSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoseSchedule findUnique
   */
  export type DoseScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoseSchedule to fetch.
     */
    where: DoseScheduleWhereUniqueInput
  }

  /**
   * DoseSchedule findUniqueOrThrow
   */
  export type DoseScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoseSchedule to fetch.
     */
    where: DoseScheduleWhereUniqueInput
  }

  /**
   * DoseSchedule findFirst
   */
  export type DoseScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoseSchedule to fetch.
     */
    where?: DoseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseSchedules to fetch.
     */
    orderBy?: DoseScheduleOrderByWithRelationInput | DoseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoseSchedules.
     */
    cursor?: DoseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoseSchedules.
     */
    distinct?: DoseScheduleScalarFieldEnum | DoseScheduleScalarFieldEnum[]
  }

  /**
   * DoseSchedule findFirstOrThrow
   */
  export type DoseScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoseSchedule to fetch.
     */
    where?: DoseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseSchedules to fetch.
     */
    orderBy?: DoseScheduleOrderByWithRelationInput | DoseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoseSchedules.
     */
    cursor?: DoseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoseSchedules.
     */
    distinct?: DoseScheduleScalarFieldEnum | DoseScheduleScalarFieldEnum[]
  }

  /**
   * DoseSchedule findMany
   */
  export type DoseScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoseSchedules to fetch.
     */
    where?: DoseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseSchedules to fetch.
     */
    orderBy?: DoseScheduleOrderByWithRelationInput | DoseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoseSchedules.
     */
    cursor?: DoseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseSchedules.
     */
    skip?: number
    distinct?: DoseScheduleScalarFieldEnum | DoseScheduleScalarFieldEnum[]
  }

  /**
   * DoseSchedule create
   */
  export type DoseScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a DoseSchedule.
     */
    data: XOR<DoseScheduleCreateInput, DoseScheduleUncheckedCreateInput>
  }

  /**
   * DoseSchedule createMany
   */
  export type DoseScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoseSchedules.
     */
    data: DoseScheduleCreateManyInput | DoseScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoseSchedule createManyAndReturn
   */
  export type DoseScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many DoseSchedules.
     */
    data: DoseScheduleCreateManyInput | DoseScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoseSchedule update
   */
  export type DoseScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a DoseSchedule.
     */
    data: XOR<DoseScheduleUpdateInput, DoseScheduleUncheckedUpdateInput>
    /**
     * Choose, which DoseSchedule to update.
     */
    where: DoseScheduleWhereUniqueInput
  }

  /**
   * DoseSchedule updateMany
   */
  export type DoseScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoseSchedules.
     */
    data: XOR<DoseScheduleUpdateManyMutationInput, DoseScheduleUncheckedUpdateManyInput>
    /**
     * Filter which DoseSchedules to update
     */
    where?: DoseScheduleWhereInput
    /**
     * Limit how many DoseSchedules to update.
     */
    limit?: number
  }

  /**
   * DoseSchedule updateManyAndReturn
   */
  export type DoseScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * The data used to update DoseSchedules.
     */
    data: XOR<DoseScheduleUpdateManyMutationInput, DoseScheduleUncheckedUpdateManyInput>
    /**
     * Filter which DoseSchedules to update
     */
    where?: DoseScheduleWhereInput
    /**
     * Limit how many DoseSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoseSchedule upsert
   */
  export type DoseScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the DoseSchedule to update in case it exists.
     */
    where: DoseScheduleWhereUniqueInput
    /**
     * In case the DoseSchedule found by the `where` argument doesn't exist, create a new DoseSchedule with this data.
     */
    create: XOR<DoseScheduleCreateInput, DoseScheduleUncheckedCreateInput>
    /**
     * In case the DoseSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoseScheduleUpdateInput, DoseScheduleUncheckedUpdateInput>
  }

  /**
   * DoseSchedule delete
   */
  export type DoseScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
    /**
     * Filter which DoseSchedule to delete.
     */
    where: DoseScheduleWhereUniqueInput
  }

  /**
   * DoseSchedule deleteMany
   */
  export type DoseScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoseSchedules to delete
     */
    where?: DoseScheduleWhereInput
    /**
     * Limit how many DoseSchedules to delete.
     */
    limit?: number
  }

  /**
   * DoseSchedule.doseEvents
   */
  export type DoseSchedule$doseEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    where?: DoseEventWhereInput
    orderBy?: DoseEventOrderByWithRelationInput | DoseEventOrderByWithRelationInput[]
    cursor?: DoseEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoseEventScalarFieldEnum | DoseEventScalarFieldEnum[]
  }

  /**
   * DoseSchedule without action
   */
  export type DoseScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseSchedule
     */
    select?: DoseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseSchedule
     */
    omit?: DoseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseScheduleInclude<ExtArgs> | null
  }


  /**
   * Model DoseEvent
   */

  export type AggregateDoseEvent = {
    _count: DoseEventCountAggregateOutputType | null
    _min: DoseEventMinAggregateOutputType | null
    _max: DoseEventMaxAggregateOutputType | null
  }

  export type DoseEventMinAggregateOutputType = {
    id: string | null
    scheduleId: string | null
    plannedAt: Date | null
    takenAt: Date | null
    status: $Enums.DoseStatus | null
    source: $Enums.DoseSource | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoseEventMaxAggregateOutputType = {
    id: string | null
    scheduleId: string | null
    plannedAt: Date | null
    takenAt: Date | null
    status: $Enums.DoseStatus | null
    source: $Enums.DoseSource | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoseEventCountAggregateOutputType = {
    id: number
    scheduleId: number
    plannedAt: number
    takenAt: number
    status: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoseEventMinAggregateInputType = {
    id?: true
    scheduleId?: true
    plannedAt?: true
    takenAt?: true
    status?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoseEventMaxAggregateInputType = {
    id?: true
    scheduleId?: true
    plannedAt?: true
    takenAt?: true
    status?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoseEventCountAggregateInputType = {
    id?: true
    scheduleId?: true
    plannedAt?: true
    takenAt?: true
    status?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoseEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoseEvent to aggregate.
     */
    where?: DoseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseEvents to fetch.
     */
    orderBy?: DoseEventOrderByWithRelationInput | DoseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoseEvents
    **/
    _count?: true | DoseEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoseEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoseEventMaxAggregateInputType
  }

  export type GetDoseEventAggregateType<T extends DoseEventAggregateArgs> = {
        [P in keyof T & keyof AggregateDoseEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoseEvent[P]>
      : GetScalarType<T[P], AggregateDoseEvent[P]>
  }




  export type DoseEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoseEventWhereInput
    orderBy?: DoseEventOrderByWithAggregationInput | DoseEventOrderByWithAggregationInput[]
    by: DoseEventScalarFieldEnum[] | DoseEventScalarFieldEnum
    having?: DoseEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoseEventCountAggregateInputType | true
    _min?: DoseEventMinAggregateInputType
    _max?: DoseEventMaxAggregateInputType
  }

  export type DoseEventGroupByOutputType = {
    id: string
    scheduleId: string
    plannedAt: Date
    takenAt: Date | null
    status: $Enums.DoseStatus
    source: $Enums.DoseSource | null
    createdAt: Date
    updatedAt: Date
    _count: DoseEventCountAggregateOutputType | null
    _min: DoseEventMinAggregateOutputType | null
    _max: DoseEventMaxAggregateOutputType | null
  }

  type GetDoseEventGroupByPayload<T extends DoseEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoseEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoseEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoseEventGroupByOutputType[P]>
            : GetScalarType<T[P], DoseEventGroupByOutputType[P]>
        }
      >
    >


  export type DoseEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    plannedAt?: boolean
    takenAt?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | DoseScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseEvent"]>

  export type DoseEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    plannedAt?: boolean
    takenAt?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | DoseScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseEvent"]>

  export type DoseEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    plannedAt?: boolean
    takenAt?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | DoseScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseEvent"]>

  export type DoseEventSelectScalar = {
    id?: boolean
    scheduleId?: boolean
    plannedAt?: boolean
    takenAt?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoseEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduleId" | "plannedAt" | "takenAt" | "status" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["doseEvent"]>
  export type DoseEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | DoseScheduleDefaultArgs<ExtArgs>
  }
  export type DoseEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | DoseScheduleDefaultArgs<ExtArgs>
  }
  export type DoseEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | DoseScheduleDefaultArgs<ExtArgs>
  }

  export type $DoseEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoseEvent"
    objects: {
      schedule: Prisma.$DoseSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scheduleId: string
      plannedAt: Date
      takenAt: Date | null
      status: $Enums.DoseStatus
      source: $Enums.DoseSource | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doseEvent"]>
    composites: {}
  }

  type DoseEventGetPayload<S extends boolean | null | undefined | DoseEventDefaultArgs> = $Result.GetResult<Prisma.$DoseEventPayload, S>

  type DoseEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoseEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoseEventCountAggregateInputType | true
    }

  export interface DoseEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoseEvent'], meta: { name: 'DoseEvent' } }
    /**
     * Find zero or one DoseEvent that matches the filter.
     * @param {DoseEventFindUniqueArgs} args - Arguments to find a DoseEvent
     * @example
     * // Get one DoseEvent
     * const doseEvent = await prisma.doseEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoseEventFindUniqueArgs>(args: SelectSubset<T, DoseEventFindUniqueArgs<ExtArgs>>): Prisma__DoseEventClient<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoseEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoseEventFindUniqueOrThrowArgs} args - Arguments to find a DoseEvent
     * @example
     * // Get one DoseEvent
     * const doseEvent = await prisma.doseEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoseEventFindUniqueOrThrowArgs>(args: SelectSubset<T, DoseEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoseEventClient<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoseEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseEventFindFirstArgs} args - Arguments to find a DoseEvent
     * @example
     * // Get one DoseEvent
     * const doseEvent = await prisma.doseEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoseEventFindFirstArgs>(args?: SelectSubset<T, DoseEventFindFirstArgs<ExtArgs>>): Prisma__DoseEventClient<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoseEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseEventFindFirstOrThrowArgs} args - Arguments to find a DoseEvent
     * @example
     * // Get one DoseEvent
     * const doseEvent = await prisma.doseEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoseEventFindFirstOrThrowArgs>(args?: SelectSubset<T, DoseEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoseEventClient<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoseEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoseEvents
     * const doseEvents = await prisma.doseEvent.findMany()
     * 
     * // Get first 10 DoseEvents
     * const doseEvents = await prisma.doseEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doseEventWithIdOnly = await prisma.doseEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoseEventFindManyArgs>(args?: SelectSubset<T, DoseEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoseEvent.
     * @param {DoseEventCreateArgs} args - Arguments to create a DoseEvent.
     * @example
     * // Create one DoseEvent
     * const DoseEvent = await prisma.doseEvent.create({
     *   data: {
     *     // ... data to create a DoseEvent
     *   }
     * })
     * 
     */
    create<T extends DoseEventCreateArgs>(args: SelectSubset<T, DoseEventCreateArgs<ExtArgs>>): Prisma__DoseEventClient<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoseEvents.
     * @param {DoseEventCreateManyArgs} args - Arguments to create many DoseEvents.
     * @example
     * // Create many DoseEvents
     * const doseEvent = await prisma.doseEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoseEventCreateManyArgs>(args?: SelectSubset<T, DoseEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoseEvents and returns the data saved in the database.
     * @param {DoseEventCreateManyAndReturnArgs} args - Arguments to create many DoseEvents.
     * @example
     * // Create many DoseEvents
     * const doseEvent = await prisma.doseEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoseEvents and only return the `id`
     * const doseEventWithIdOnly = await prisma.doseEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoseEventCreateManyAndReturnArgs>(args?: SelectSubset<T, DoseEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoseEvent.
     * @param {DoseEventDeleteArgs} args - Arguments to delete one DoseEvent.
     * @example
     * // Delete one DoseEvent
     * const DoseEvent = await prisma.doseEvent.delete({
     *   where: {
     *     // ... filter to delete one DoseEvent
     *   }
     * })
     * 
     */
    delete<T extends DoseEventDeleteArgs>(args: SelectSubset<T, DoseEventDeleteArgs<ExtArgs>>): Prisma__DoseEventClient<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoseEvent.
     * @param {DoseEventUpdateArgs} args - Arguments to update one DoseEvent.
     * @example
     * // Update one DoseEvent
     * const doseEvent = await prisma.doseEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoseEventUpdateArgs>(args: SelectSubset<T, DoseEventUpdateArgs<ExtArgs>>): Prisma__DoseEventClient<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoseEvents.
     * @param {DoseEventDeleteManyArgs} args - Arguments to filter DoseEvents to delete.
     * @example
     * // Delete a few DoseEvents
     * const { count } = await prisma.doseEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoseEventDeleteManyArgs>(args?: SelectSubset<T, DoseEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoseEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoseEvents
     * const doseEvent = await prisma.doseEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoseEventUpdateManyArgs>(args: SelectSubset<T, DoseEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoseEvents and returns the data updated in the database.
     * @param {DoseEventUpdateManyAndReturnArgs} args - Arguments to update many DoseEvents.
     * @example
     * // Update many DoseEvents
     * const doseEvent = await prisma.doseEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoseEvents and only return the `id`
     * const doseEventWithIdOnly = await prisma.doseEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoseEventUpdateManyAndReturnArgs>(args: SelectSubset<T, DoseEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoseEvent.
     * @param {DoseEventUpsertArgs} args - Arguments to update or create a DoseEvent.
     * @example
     * // Update or create a DoseEvent
     * const doseEvent = await prisma.doseEvent.upsert({
     *   create: {
     *     // ... data to create a DoseEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoseEvent we want to update
     *   }
     * })
     */
    upsert<T extends DoseEventUpsertArgs>(args: SelectSubset<T, DoseEventUpsertArgs<ExtArgs>>): Prisma__DoseEventClient<$Result.GetResult<Prisma.$DoseEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoseEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseEventCountArgs} args - Arguments to filter DoseEvents to count.
     * @example
     * // Count the number of DoseEvents
     * const count = await prisma.doseEvent.count({
     *   where: {
     *     // ... the filter for the DoseEvents we want to count
     *   }
     * })
    **/
    count<T extends DoseEventCountArgs>(
      args?: Subset<T, DoseEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoseEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoseEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoseEventAggregateArgs>(args: Subset<T, DoseEventAggregateArgs>): Prisma.PrismaPromise<GetDoseEventAggregateType<T>>

    /**
     * Group by DoseEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseEventGroupByArgs} args - Group by arguments.
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
      T extends DoseEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoseEventGroupByArgs['orderBy'] }
        : { orderBy?: DoseEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoseEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoseEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoseEvent model
   */
  readonly fields: DoseEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoseEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoseEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends DoseScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoseScheduleDefaultArgs<ExtArgs>>): Prisma__DoseScheduleClient<$Result.GetResult<Prisma.$DoseSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoseEvent model
   */
  interface DoseEventFieldRefs {
    readonly id: FieldRef<"DoseEvent", 'String'>
    readonly scheduleId: FieldRef<"DoseEvent", 'String'>
    readonly plannedAt: FieldRef<"DoseEvent", 'DateTime'>
    readonly takenAt: FieldRef<"DoseEvent", 'DateTime'>
    readonly status: FieldRef<"DoseEvent", 'DoseStatus'>
    readonly source: FieldRef<"DoseEvent", 'DoseSource'>
    readonly createdAt: FieldRef<"DoseEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"DoseEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoseEvent findUnique
   */
  export type DoseEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * Filter, which DoseEvent to fetch.
     */
    where: DoseEventWhereUniqueInput
  }

  /**
   * DoseEvent findUniqueOrThrow
   */
  export type DoseEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * Filter, which DoseEvent to fetch.
     */
    where: DoseEventWhereUniqueInput
  }

  /**
   * DoseEvent findFirst
   */
  export type DoseEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * Filter, which DoseEvent to fetch.
     */
    where?: DoseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseEvents to fetch.
     */
    orderBy?: DoseEventOrderByWithRelationInput | DoseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoseEvents.
     */
    cursor?: DoseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoseEvents.
     */
    distinct?: DoseEventScalarFieldEnum | DoseEventScalarFieldEnum[]
  }

  /**
   * DoseEvent findFirstOrThrow
   */
  export type DoseEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * Filter, which DoseEvent to fetch.
     */
    where?: DoseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseEvents to fetch.
     */
    orderBy?: DoseEventOrderByWithRelationInput | DoseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoseEvents.
     */
    cursor?: DoseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoseEvents.
     */
    distinct?: DoseEventScalarFieldEnum | DoseEventScalarFieldEnum[]
  }

  /**
   * DoseEvent findMany
   */
  export type DoseEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * Filter, which DoseEvents to fetch.
     */
    where?: DoseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseEvents to fetch.
     */
    orderBy?: DoseEventOrderByWithRelationInput | DoseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoseEvents.
     */
    cursor?: DoseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseEvents.
     */
    skip?: number
    distinct?: DoseEventScalarFieldEnum | DoseEventScalarFieldEnum[]
  }

  /**
   * DoseEvent create
   */
  export type DoseEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * The data needed to create a DoseEvent.
     */
    data: XOR<DoseEventCreateInput, DoseEventUncheckedCreateInput>
  }

  /**
   * DoseEvent createMany
   */
  export type DoseEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoseEvents.
     */
    data: DoseEventCreateManyInput | DoseEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoseEvent createManyAndReturn
   */
  export type DoseEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * The data used to create many DoseEvents.
     */
    data: DoseEventCreateManyInput | DoseEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoseEvent update
   */
  export type DoseEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * The data needed to update a DoseEvent.
     */
    data: XOR<DoseEventUpdateInput, DoseEventUncheckedUpdateInput>
    /**
     * Choose, which DoseEvent to update.
     */
    where: DoseEventWhereUniqueInput
  }

  /**
   * DoseEvent updateMany
   */
  export type DoseEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoseEvents.
     */
    data: XOR<DoseEventUpdateManyMutationInput, DoseEventUncheckedUpdateManyInput>
    /**
     * Filter which DoseEvents to update
     */
    where?: DoseEventWhereInput
    /**
     * Limit how many DoseEvents to update.
     */
    limit?: number
  }

  /**
   * DoseEvent updateManyAndReturn
   */
  export type DoseEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * The data used to update DoseEvents.
     */
    data: XOR<DoseEventUpdateManyMutationInput, DoseEventUncheckedUpdateManyInput>
    /**
     * Filter which DoseEvents to update
     */
    where?: DoseEventWhereInput
    /**
     * Limit how many DoseEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoseEvent upsert
   */
  export type DoseEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * The filter to search for the DoseEvent to update in case it exists.
     */
    where: DoseEventWhereUniqueInput
    /**
     * In case the DoseEvent found by the `where` argument doesn't exist, create a new DoseEvent with this data.
     */
    create: XOR<DoseEventCreateInput, DoseEventUncheckedCreateInput>
    /**
     * In case the DoseEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoseEventUpdateInput, DoseEventUncheckedUpdateInput>
  }

  /**
   * DoseEvent delete
   */
  export type DoseEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
    /**
     * Filter which DoseEvent to delete.
     */
    where: DoseEventWhereUniqueInput
  }

  /**
   * DoseEvent deleteMany
   */
  export type DoseEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoseEvents to delete
     */
    where?: DoseEventWhereInput
    /**
     * Limit how many DoseEvents to delete.
     */
    limit?: number
  }

  /**
   * DoseEvent without action
   */
  export type DoseEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseEvent
     */
    select?: DoseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseEvent
     */
    omit?: DoseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseEventInclude<ExtArgs> | null
  }


  /**
   * Model NotificationEvent
   */

  export type AggregateNotificationEvent = {
    _count: NotificationEventCountAggregateOutputType | null
    _min: NotificationEventMinAggregateOutputType | null
    _max: NotificationEventMaxAggregateOutputType | null
  }

  export type NotificationEventMinAggregateOutputType = {
    id: string | null
    familyGroupId: string | null
    type: $Enums.NotificationType | null
    occurredAt: Date | null
    createdAt: Date | null
  }

  export type NotificationEventMaxAggregateOutputType = {
    id: string | null
    familyGroupId: string | null
    type: $Enums.NotificationType | null
    occurredAt: Date | null
    createdAt: Date | null
  }

  export type NotificationEventCountAggregateOutputType = {
    id: number
    familyGroupId: number
    type: number
    occurredAt: number
    payloadJson: number
    createdAt: number
    _all: number
  }


  export type NotificationEventMinAggregateInputType = {
    id?: true
    familyGroupId?: true
    type?: true
    occurredAt?: true
    createdAt?: true
  }

  export type NotificationEventMaxAggregateInputType = {
    id?: true
    familyGroupId?: true
    type?: true
    occurredAt?: true
    createdAt?: true
  }

  export type NotificationEventCountAggregateInputType = {
    id?: true
    familyGroupId?: true
    type?: true
    occurredAt?: true
    payloadJson?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationEvent to aggregate.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationEvents
    **/
    _count?: true | NotificationEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationEventMaxAggregateInputType
  }

  export type GetNotificationEventAggregateType<T extends NotificationEventAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationEvent[P]>
      : GetScalarType<T[P], AggregateNotificationEvent[P]>
  }




  export type NotificationEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithAggregationInput | NotificationEventOrderByWithAggregationInput[]
    by: NotificationEventScalarFieldEnum[] | NotificationEventScalarFieldEnum
    having?: NotificationEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationEventCountAggregateInputType | true
    _min?: NotificationEventMinAggregateInputType
    _max?: NotificationEventMaxAggregateInputType
  }

  export type NotificationEventGroupByOutputType = {
    id: string
    familyGroupId: string
    type: $Enums.NotificationType
    occurredAt: Date
    payloadJson: JsonValue
    createdAt: Date
    _count: NotificationEventCountAggregateOutputType | null
    _min: NotificationEventMinAggregateOutputType | null
    _max: NotificationEventMaxAggregateOutputType | null
  }

  type GetNotificationEventGroupByPayload<T extends NotificationEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationEventGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationEventGroupByOutputType[P]>
        }
      >
    >


  export type NotificationEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    type?: boolean
    occurredAt?: boolean
    payloadJson?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEvent"]>

  export type NotificationEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    type?: boolean
    occurredAt?: boolean
    payloadJson?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEvent"]>

  export type NotificationEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyGroupId?: boolean
    type?: boolean
    occurredAt?: boolean
    payloadJson?: boolean
    createdAt?: boolean
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEvent"]>

  export type NotificationEventSelectScalar = {
    id?: boolean
    familyGroupId?: boolean
    type?: boolean
    occurredAt?: boolean
    payloadJson?: boolean
    createdAt?: boolean
  }

  export type NotificationEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "familyGroupId" | "type" | "occurredAt" | "payloadJson" | "createdAt", ExtArgs["result"]["notificationEvent"]>
  export type NotificationEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }
  export type NotificationEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }
  export type NotificationEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    familyGroup?: boolean | FamilyGroupDefaultArgs<ExtArgs>
  }

  export type $NotificationEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationEvent"
    objects: {
      familyGroup: Prisma.$FamilyGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      familyGroupId: string
      type: $Enums.NotificationType
      occurredAt: Date
      payloadJson: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["notificationEvent"]>
    composites: {}
  }

  type NotificationEventGetPayload<S extends boolean | null | undefined | NotificationEventDefaultArgs> = $Result.GetResult<Prisma.$NotificationEventPayload, S>

  type NotificationEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationEventCountAggregateInputType | true
    }

  export interface NotificationEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationEvent'], meta: { name: 'NotificationEvent' } }
    /**
     * Find zero or one NotificationEvent that matches the filter.
     * @param {NotificationEventFindUniqueArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationEventFindUniqueArgs>(args: SelectSubset<T, NotificationEventFindUniqueArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationEventFindUniqueOrThrowArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationEventFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindFirstArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationEventFindFirstArgs>(args?: SelectSubset<T, NotificationEventFindFirstArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindFirstOrThrowArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationEventFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationEvents
     * const notificationEvents = await prisma.notificationEvent.findMany()
     * 
     * // Get first 10 NotificationEvents
     * const notificationEvents = await prisma.notificationEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationEventWithIdOnly = await prisma.notificationEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationEventFindManyArgs>(args?: SelectSubset<T, NotificationEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationEvent.
     * @param {NotificationEventCreateArgs} args - Arguments to create a NotificationEvent.
     * @example
     * // Create one NotificationEvent
     * const NotificationEvent = await prisma.notificationEvent.create({
     *   data: {
     *     // ... data to create a NotificationEvent
     *   }
     * })
     * 
     */
    create<T extends NotificationEventCreateArgs>(args: SelectSubset<T, NotificationEventCreateArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationEvents.
     * @param {NotificationEventCreateManyArgs} args - Arguments to create many NotificationEvents.
     * @example
     * // Create many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationEventCreateManyArgs>(args?: SelectSubset<T, NotificationEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationEvents and returns the data saved in the database.
     * @param {NotificationEventCreateManyAndReturnArgs} args - Arguments to create many NotificationEvents.
     * @example
     * // Create many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationEvents and only return the `id`
     * const notificationEventWithIdOnly = await prisma.notificationEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationEventCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationEvent.
     * @param {NotificationEventDeleteArgs} args - Arguments to delete one NotificationEvent.
     * @example
     * // Delete one NotificationEvent
     * const NotificationEvent = await prisma.notificationEvent.delete({
     *   where: {
     *     // ... filter to delete one NotificationEvent
     *   }
     * })
     * 
     */
    delete<T extends NotificationEventDeleteArgs>(args: SelectSubset<T, NotificationEventDeleteArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationEvent.
     * @param {NotificationEventUpdateArgs} args - Arguments to update one NotificationEvent.
     * @example
     * // Update one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationEventUpdateArgs>(args: SelectSubset<T, NotificationEventUpdateArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationEvents.
     * @param {NotificationEventDeleteManyArgs} args - Arguments to filter NotificationEvents to delete.
     * @example
     * // Delete a few NotificationEvents
     * const { count } = await prisma.notificationEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationEventDeleteManyArgs>(args?: SelectSubset<T, NotificationEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationEventUpdateManyArgs>(args: SelectSubset<T, NotificationEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationEvents and returns the data updated in the database.
     * @param {NotificationEventUpdateManyAndReturnArgs} args - Arguments to update many NotificationEvents.
     * @example
     * // Update many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationEvents and only return the `id`
     * const notificationEventWithIdOnly = await prisma.notificationEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationEventUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationEvent.
     * @param {NotificationEventUpsertArgs} args - Arguments to update or create a NotificationEvent.
     * @example
     * // Update or create a NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.upsert({
     *   create: {
     *     // ... data to create a NotificationEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationEvent we want to update
     *   }
     * })
     */
    upsert<T extends NotificationEventUpsertArgs>(args: SelectSubset<T, NotificationEventUpsertArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventCountArgs} args - Arguments to filter NotificationEvents to count.
     * @example
     * // Count the number of NotificationEvents
     * const count = await prisma.notificationEvent.count({
     *   where: {
     *     // ... the filter for the NotificationEvents we want to count
     *   }
     * })
    **/
    count<T extends NotificationEventCountArgs>(
      args?: Subset<T, NotificationEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationEventAggregateArgs>(args: Subset<T, NotificationEventAggregateArgs>): Prisma.PrismaPromise<GetNotificationEventAggregateType<T>>

    /**
     * Group by NotificationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventGroupByArgs} args - Group by arguments.
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
      T extends NotificationEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationEventGroupByArgs['orderBy'] }
        : { orderBy?: NotificationEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationEvent model
   */
  readonly fields: NotificationEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    familyGroup<T extends FamilyGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyGroupDefaultArgs<ExtArgs>>): Prisma__FamilyGroupClient<$Result.GetResult<Prisma.$FamilyGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationEvent model
   */
  interface NotificationEventFieldRefs {
    readonly id: FieldRef<"NotificationEvent", 'String'>
    readonly familyGroupId: FieldRef<"NotificationEvent", 'String'>
    readonly type: FieldRef<"NotificationEvent", 'NotificationType'>
    readonly occurredAt: FieldRef<"NotificationEvent", 'DateTime'>
    readonly payloadJson: FieldRef<"NotificationEvent", 'Json'>
    readonly createdAt: FieldRef<"NotificationEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationEvent findUnique
   */
  export type NotificationEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where: NotificationEventWhereUniqueInput
  }

  /**
   * NotificationEvent findUniqueOrThrow
   */
  export type NotificationEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where: NotificationEventWhereUniqueInput
  }

  /**
   * NotificationEvent findFirst
   */
  export type NotificationEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationEvents.
     */
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }

  /**
   * NotificationEvent findFirstOrThrow
   */
  export type NotificationEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationEvents.
     */
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }

  /**
   * NotificationEvent findMany
   */
  export type NotificationEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvents to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }

  /**
   * NotificationEvent create
   */
  export type NotificationEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationEvent.
     */
    data: XOR<NotificationEventCreateInput, NotificationEventUncheckedCreateInput>
  }

  /**
   * NotificationEvent createMany
   */
  export type NotificationEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationEvents.
     */
    data: NotificationEventCreateManyInput | NotificationEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationEvent createManyAndReturn
   */
  export type NotificationEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationEvents.
     */
    data: NotificationEventCreateManyInput | NotificationEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationEvent update
   */
  export type NotificationEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationEvent.
     */
    data: XOR<NotificationEventUpdateInput, NotificationEventUncheckedUpdateInput>
    /**
     * Choose, which NotificationEvent to update.
     */
    where: NotificationEventWhereUniqueInput
  }

  /**
   * NotificationEvent updateMany
   */
  export type NotificationEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationEvents.
     */
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyInput>
    /**
     * Filter which NotificationEvents to update
     */
    where?: NotificationEventWhereInput
    /**
     * Limit how many NotificationEvents to update.
     */
    limit?: number
  }

  /**
   * NotificationEvent updateManyAndReturn
   */
  export type NotificationEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * The data used to update NotificationEvents.
     */
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyInput>
    /**
     * Filter which NotificationEvents to update
     */
    where?: NotificationEventWhereInput
    /**
     * Limit how many NotificationEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationEvent upsert
   */
  export type NotificationEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationEvent to update in case it exists.
     */
    where: NotificationEventWhereUniqueInput
    /**
     * In case the NotificationEvent found by the `where` argument doesn't exist, create a new NotificationEvent with this data.
     */
    create: XOR<NotificationEventCreateInput, NotificationEventUncheckedCreateInput>
    /**
     * In case the NotificationEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationEventUpdateInput, NotificationEventUncheckedUpdateInput>
  }

  /**
   * NotificationEvent delete
   */
  export type NotificationEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter which NotificationEvent to delete.
     */
    where: NotificationEventWhereUniqueInput
  }

  /**
   * NotificationEvent deleteMany
   */
  export type NotificationEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationEvents to delete
     */
    where?: NotificationEventWhereInput
    /**
     * Limit how many NotificationEvents to delete.
     */
    limit?: number
  }

  /**
   * NotificationEvent without action
   */
  export type NotificationEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
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


  export const FamilyGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type FamilyGroupScalarFieldEnum = (typeof FamilyGroupScalarFieldEnum)[keyof typeof FamilyGroupScalarFieldEnum]


  export const CaregiverDeviceScalarFieldEnum: {
    id: 'id',
    familyGroupId: 'familyGroupId',
    deviceToken: 'deviceToken',
    label: 'label',
    createdAt: 'createdAt'
  };

  export type CaregiverDeviceScalarFieldEnum = (typeof CaregiverDeviceScalarFieldEnum)[keyof typeof CaregiverDeviceScalarFieldEnum]


  export const PatientDeviceScalarFieldEnum: {
    id: 'id',
    familyGroupId: 'familyGroupId',
    deviceToken: 'deviceToken',
    tz: 'tz',
    label: 'label',
    createdAt: 'createdAt'
  };

  export type PatientDeviceScalarFieldEnum = (typeof PatientDeviceScalarFieldEnum)[keyof typeof PatientDeviceScalarFieldEnum]


  export const PairingCodeScalarFieldEnum: {
    code: 'code',
    familyGroupId: 'familyGroupId',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type PairingCodeScalarFieldEnum = (typeof PairingCodeScalarFieldEnum)[keyof typeof PairingCodeScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    familyGroupId: 'familyGroupId',
    name: 'name',
    instructions: 'instructions',
    remainingCount: 'remainingCount',
    remainingUpdatedAt: 'remainingUpdatedAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const DoseScheduleScalarFieldEnum: {
    id: 'id',
    medicationId: 'medicationId',
    timeOfDay: 'timeOfDay',
    daysOfWeekMask: 'daysOfWeekMask',
    dosesPerTime: 'dosesPerTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoseScheduleScalarFieldEnum = (typeof DoseScheduleScalarFieldEnum)[keyof typeof DoseScheduleScalarFieldEnum]


  export const DoseEventScalarFieldEnum: {
    id: 'id',
    scheduleId: 'scheduleId',
    plannedAt: 'plannedAt',
    takenAt: 'takenAt',
    status: 'status',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoseEventScalarFieldEnum = (typeof DoseEventScalarFieldEnum)[keyof typeof DoseEventScalarFieldEnum]


  export const NotificationEventScalarFieldEnum: {
    id: 'id',
    familyGroupId: 'familyGroupId',
    type: 'type',
    occurredAt: 'occurredAt',
    payloadJson: 'payloadJson',
    createdAt: 'createdAt'
  };

  export type NotificationEventScalarFieldEnum = (typeof NotificationEventScalarFieldEnum)[keyof typeof NotificationEventScalarFieldEnum]


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
   * Reference to a field of type 'DoseStatus'
   */
  export type EnumDoseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoseStatus'>
    


  /**
   * Reference to a field of type 'DoseStatus[]'
   */
  export type ListEnumDoseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoseStatus[]'>
    


  /**
   * Reference to a field of type 'DoseSource'
   */
  export type EnumDoseSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoseSource'>
    


  /**
   * Reference to a field of type 'DoseSource[]'
   */
  export type ListEnumDoseSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoseSource[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


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


  export type FamilyGroupWhereInput = {
    AND?: FamilyGroupWhereInput | FamilyGroupWhereInput[]
    OR?: FamilyGroupWhereInput[]
    NOT?: FamilyGroupWhereInput | FamilyGroupWhereInput[]
    id?: StringFilter<"FamilyGroup"> | string
    name?: StringNullableFilter<"FamilyGroup"> | string | null
    createdAt?: DateTimeFilter<"FamilyGroup"> | Date | string
    caregiverDevices?: CaregiverDeviceListRelationFilter
    patientDevices?: PatientDeviceListRelationFilter
    pairingCodes?: PairingCodeListRelationFilter
    medications?: MedicationListRelationFilter
    notifications?: NotificationEventListRelationFilter
  }

  export type FamilyGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    caregiverDevices?: CaregiverDeviceOrderByRelationAggregateInput
    patientDevices?: PatientDeviceOrderByRelationAggregateInput
    pairingCodes?: PairingCodeOrderByRelationAggregateInput
    medications?: MedicationOrderByRelationAggregateInput
    notifications?: NotificationEventOrderByRelationAggregateInput
  }

  export type FamilyGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FamilyGroupWhereInput | FamilyGroupWhereInput[]
    OR?: FamilyGroupWhereInput[]
    NOT?: FamilyGroupWhereInput | FamilyGroupWhereInput[]
    name?: StringNullableFilter<"FamilyGroup"> | string | null
    createdAt?: DateTimeFilter<"FamilyGroup"> | Date | string
    caregiverDevices?: CaregiverDeviceListRelationFilter
    patientDevices?: PatientDeviceListRelationFilter
    pairingCodes?: PairingCodeListRelationFilter
    medications?: MedicationListRelationFilter
    notifications?: NotificationEventListRelationFilter
  }, "id">

  export type FamilyGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FamilyGroupCountOrderByAggregateInput
    _max?: FamilyGroupMaxOrderByAggregateInput
    _min?: FamilyGroupMinOrderByAggregateInput
  }

  export type FamilyGroupScalarWhereWithAggregatesInput = {
    AND?: FamilyGroupScalarWhereWithAggregatesInput | FamilyGroupScalarWhereWithAggregatesInput[]
    OR?: FamilyGroupScalarWhereWithAggregatesInput[]
    NOT?: FamilyGroupScalarWhereWithAggregatesInput | FamilyGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FamilyGroup"> | string
    name?: StringNullableWithAggregatesFilter<"FamilyGroup"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FamilyGroup"> | Date | string
  }

  export type CaregiverDeviceWhereInput = {
    AND?: CaregiverDeviceWhereInput | CaregiverDeviceWhereInput[]
    OR?: CaregiverDeviceWhereInput[]
    NOT?: CaregiverDeviceWhereInput | CaregiverDeviceWhereInput[]
    id?: StringFilter<"CaregiverDevice"> | string
    familyGroupId?: StringFilter<"CaregiverDevice"> | string
    deviceToken?: StringFilter<"CaregiverDevice"> | string
    label?: StringNullableFilter<"CaregiverDevice"> | string | null
    createdAt?: DateTimeFilter<"CaregiverDevice"> | Date | string
    familyGroup?: XOR<FamilyGroupScalarRelationFilter, FamilyGroupWhereInput>
  }

  export type CaregiverDeviceOrderByWithRelationInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    deviceToken?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    familyGroup?: FamilyGroupOrderByWithRelationInput
  }

  export type CaregiverDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceToken?: string
    AND?: CaregiverDeviceWhereInput | CaregiverDeviceWhereInput[]
    OR?: CaregiverDeviceWhereInput[]
    NOT?: CaregiverDeviceWhereInput | CaregiverDeviceWhereInput[]
    familyGroupId?: StringFilter<"CaregiverDevice"> | string
    label?: StringNullableFilter<"CaregiverDevice"> | string | null
    createdAt?: DateTimeFilter<"CaregiverDevice"> | Date | string
    familyGroup?: XOR<FamilyGroupScalarRelationFilter, FamilyGroupWhereInput>
  }, "id" | "deviceToken">

  export type CaregiverDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    deviceToken?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CaregiverDeviceCountOrderByAggregateInput
    _max?: CaregiverDeviceMaxOrderByAggregateInput
    _min?: CaregiverDeviceMinOrderByAggregateInput
  }

  export type CaregiverDeviceScalarWhereWithAggregatesInput = {
    AND?: CaregiverDeviceScalarWhereWithAggregatesInput | CaregiverDeviceScalarWhereWithAggregatesInput[]
    OR?: CaregiverDeviceScalarWhereWithAggregatesInput[]
    NOT?: CaregiverDeviceScalarWhereWithAggregatesInput | CaregiverDeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaregiverDevice"> | string
    familyGroupId?: StringWithAggregatesFilter<"CaregiverDevice"> | string
    deviceToken?: StringWithAggregatesFilter<"CaregiverDevice"> | string
    label?: StringNullableWithAggregatesFilter<"CaregiverDevice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CaregiverDevice"> | Date | string
  }

  export type PatientDeviceWhereInput = {
    AND?: PatientDeviceWhereInput | PatientDeviceWhereInput[]
    OR?: PatientDeviceWhereInput[]
    NOT?: PatientDeviceWhereInput | PatientDeviceWhereInput[]
    id?: StringFilter<"PatientDevice"> | string
    familyGroupId?: StringNullableFilter<"PatientDevice"> | string | null
    deviceToken?: StringFilter<"PatientDevice"> | string
    tz?: StringFilter<"PatientDevice"> | string
    label?: StringNullableFilter<"PatientDevice"> | string | null
    createdAt?: DateTimeFilter<"PatientDevice"> | Date | string
    familyGroup?: XOR<FamilyGroupNullableScalarRelationFilter, FamilyGroupWhereInput> | null
  }

  export type PatientDeviceOrderByWithRelationInput = {
    id?: SortOrder
    familyGroupId?: SortOrderInput | SortOrder
    deviceToken?: SortOrder
    tz?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    familyGroup?: FamilyGroupOrderByWithRelationInput
  }

  export type PatientDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceToken?: string
    AND?: PatientDeviceWhereInput | PatientDeviceWhereInput[]
    OR?: PatientDeviceWhereInput[]
    NOT?: PatientDeviceWhereInput | PatientDeviceWhereInput[]
    familyGroupId?: StringNullableFilter<"PatientDevice"> | string | null
    tz?: StringFilter<"PatientDevice"> | string
    label?: StringNullableFilter<"PatientDevice"> | string | null
    createdAt?: DateTimeFilter<"PatientDevice"> | Date | string
    familyGroup?: XOR<FamilyGroupNullableScalarRelationFilter, FamilyGroupWhereInput> | null
  }, "id" | "deviceToken">

  export type PatientDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    familyGroupId?: SortOrderInput | SortOrder
    deviceToken?: SortOrder
    tz?: SortOrder
    label?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PatientDeviceCountOrderByAggregateInput
    _max?: PatientDeviceMaxOrderByAggregateInput
    _min?: PatientDeviceMinOrderByAggregateInput
  }

  export type PatientDeviceScalarWhereWithAggregatesInput = {
    AND?: PatientDeviceScalarWhereWithAggregatesInput | PatientDeviceScalarWhereWithAggregatesInput[]
    OR?: PatientDeviceScalarWhereWithAggregatesInput[]
    NOT?: PatientDeviceScalarWhereWithAggregatesInput | PatientDeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientDevice"> | string
    familyGroupId?: StringNullableWithAggregatesFilter<"PatientDevice"> | string | null
    deviceToken?: StringWithAggregatesFilter<"PatientDevice"> | string
    tz?: StringWithAggregatesFilter<"PatientDevice"> | string
    label?: StringNullableWithAggregatesFilter<"PatientDevice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PatientDevice"> | Date | string
  }

  export type PairingCodeWhereInput = {
    AND?: PairingCodeWhereInput | PairingCodeWhereInput[]
    OR?: PairingCodeWhereInput[]
    NOT?: PairingCodeWhereInput | PairingCodeWhereInput[]
    code?: StringFilter<"PairingCode"> | string
    familyGroupId?: StringFilter<"PairingCode"> | string
    expiresAt?: DateTimeFilter<"PairingCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"PairingCode"> | Date | string | null
    createdAt?: DateTimeFilter<"PairingCode"> | Date | string
    familyGroup?: XOR<FamilyGroupScalarRelationFilter, FamilyGroupWhereInput>
  }

  export type PairingCodeOrderByWithRelationInput = {
    code?: SortOrder
    familyGroupId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    familyGroup?: FamilyGroupOrderByWithRelationInput
  }

  export type PairingCodeWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: PairingCodeWhereInput | PairingCodeWhereInput[]
    OR?: PairingCodeWhereInput[]
    NOT?: PairingCodeWhereInput | PairingCodeWhereInput[]
    familyGroupId?: StringFilter<"PairingCode"> | string
    expiresAt?: DateTimeFilter<"PairingCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"PairingCode"> | Date | string | null
    createdAt?: DateTimeFilter<"PairingCode"> | Date | string
    familyGroup?: XOR<FamilyGroupScalarRelationFilter, FamilyGroupWhereInput>
  }, "code">

  export type PairingCodeOrderByWithAggregationInput = {
    code?: SortOrder
    familyGroupId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PairingCodeCountOrderByAggregateInput
    _max?: PairingCodeMaxOrderByAggregateInput
    _min?: PairingCodeMinOrderByAggregateInput
  }

  export type PairingCodeScalarWhereWithAggregatesInput = {
    AND?: PairingCodeScalarWhereWithAggregatesInput | PairingCodeScalarWhereWithAggregatesInput[]
    OR?: PairingCodeScalarWhereWithAggregatesInput[]
    NOT?: PairingCodeScalarWhereWithAggregatesInput | PairingCodeScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"PairingCode"> | string
    familyGroupId?: StringWithAggregatesFilter<"PairingCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PairingCode"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PairingCode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PairingCode"> | Date | string
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    familyGroupId?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    instructions?: StringNullableFilter<"Medication"> | string | null
    remainingCount?: IntNullableFilter<"Medication"> | number | null
    remainingUpdatedAt?: DateTimeNullableFilter<"Medication"> | Date | string | null
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    familyGroup?: XOR<FamilyGroupScalarRelationFilter, FamilyGroupWhereInput>
    schedules?: DoseScheduleListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    name?: SortOrder
    instructions?: SortOrderInput | SortOrder
    remainingCount?: SortOrderInput | SortOrder
    remainingUpdatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familyGroup?: FamilyGroupOrderByWithRelationInput
    schedules?: DoseScheduleOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    familyGroupId?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    instructions?: StringNullableFilter<"Medication"> | string | null
    remainingCount?: IntNullableFilter<"Medication"> | number | null
    remainingUpdatedAt?: DateTimeNullableFilter<"Medication"> | Date | string | null
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    familyGroup?: XOR<FamilyGroupScalarRelationFilter, FamilyGroupWhereInput>
    schedules?: DoseScheduleListRelationFilter
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    name?: SortOrder
    instructions?: SortOrderInput | SortOrder
    remainingCount?: SortOrderInput | SortOrder
    remainingUpdatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    familyGroupId?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    instructions?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    remainingCount?: IntNullableWithAggregatesFilter<"Medication"> | number | null
    remainingUpdatedAt?: DateTimeNullableWithAggregatesFilter<"Medication"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Medication"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
  }

  export type DoseScheduleWhereInput = {
    AND?: DoseScheduleWhereInput | DoseScheduleWhereInput[]
    OR?: DoseScheduleWhereInput[]
    NOT?: DoseScheduleWhereInput | DoseScheduleWhereInput[]
    id?: StringFilter<"DoseSchedule"> | string
    medicationId?: StringFilter<"DoseSchedule"> | string
    timeOfDay?: StringFilter<"DoseSchedule"> | string
    daysOfWeekMask?: IntFilter<"DoseSchedule"> | number
    dosesPerTime?: IntFilter<"DoseSchedule"> | number
    createdAt?: DateTimeFilter<"DoseSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DoseSchedule"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    doseEvents?: DoseEventListRelationFilter
  }

  export type DoseScheduleOrderByWithRelationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    daysOfWeekMask?: SortOrder
    dosesPerTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medication?: MedicationOrderByWithRelationInput
    doseEvents?: DoseEventOrderByRelationAggregateInput
  }

  export type DoseScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoseScheduleWhereInput | DoseScheduleWhereInput[]
    OR?: DoseScheduleWhereInput[]
    NOT?: DoseScheduleWhereInput | DoseScheduleWhereInput[]
    medicationId?: StringFilter<"DoseSchedule"> | string
    timeOfDay?: StringFilter<"DoseSchedule"> | string
    daysOfWeekMask?: IntFilter<"DoseSchedule"> | number
    dosesPerTime?: IntFilter<"DoseSchedule"> | number
    createdAt?: DateTimeFilter<"DoseSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DoseSchedule"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    doseEvents?: DoseEventListRelationFilter
  }, "id">

  export type DoseScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    daysOfWeekMask?: SortOrder
    dosesPerTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoseScheduleCountOrderByAggregateInput
    _avg?: DoseScheduleAvgOrderByAggregateInput
    _max?: DoseScheduleMaxOrderByAggregateInput
    _min?: DoseScheduleMinOrderByAggregateInput
    _sum?: DoseScheduleSumOrderByAggregateInput
  }

  export type DoseScheduleScalarWhereWithAggregatesInput = {
    AND?: DoseScheduleScalarWhereWithAggregatesInput | DoseScheduleScalarWhereWithAggregatesInput[]
    OR?: DoseScheduleScalarWhereWithAggregatesInput[]
    NOT?: DoseScheduleScalarWhereWithAggregatesInput | DoseScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoseSchedule"> | string
    medicationId?: StringWithAggregatesFilter<"DoseSchedule"> | string
    timeOfDay?: StringWithAggregatesFilter<"DoseSchedule"> | string
    daysOfWeekMask?: IntWithAggregatesFilter<"DoseSchedule"> | number
    dosesPerTime?: IntWithAggregatesFilter<"DoseSchedule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DoseSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoseSchedule"> | Date | string
  }

  export type DoseEventWhereInput = {
    AND?: DoseEventWhereInput | DoseEventWhereInput[]
    OR?: DoseEventWhereInput[]
    NOT?: DoseEventWhereInput | DoseEventWhereInput[]
    id?: StringFilter<"DoseEvent"> | string
    scheduleId?: StringFilter<"DoseEvent"> | string
    plannedAt?: DateTimeFilter<"DoseEvent"> | Date | string
    takenAt?: DateTimeNullableFilter<"DoseEvent"> | Date | string | null
    status?: EnumDoseStatusFilter<"DoseEvent"> | $Enums.DoseStatus
    source?: EnumDoseSourceNullableFilter<"DoseEvent"> | $Enums.DoseSource | null
    createdAt?: DateTimeFilter<"DoseEvent"> | Date | string
    updatedAt?: DateTimeFilter<"DoseEvent"> | Date | string
    schedule?: XOR<DoseScheduleScalarRelationFilter, DoseScheduleWhereInput>
  }

  export type DoseEventOrderByWithRelationInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    plannedAt?: SortOrder
    takenAt?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedule?: DoseScheduleOrderByWithRelationInput
  }

  export type DoseEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scheduleId_plannedAt?: DoseEventScheduleIdPlannedAtCompoundUniqueInput
    AND?: DoseEventWhereInput | DoseEventWhereInput[]
    OR?: DoseEventWhereInput[]
    NOT?: DoseEventWhereInput | DoseEventWhereInput[]
    scheduleId?: StringFilter<"DoseEvent"> | string
    plannedAt?: DateTimeFilter<"DoseEvent"> | Date | string
    takenAt?: DateTimeNullableFilter<"DoseEvent"> | Date | string | null
    status?: EnumDoseStatusFilter<"DoseEvent"> | $Enums.DoseStatus
    source?: EnumDoseSourceNullableFilter<"DoseEvent"> | $Enums.DoseSource | null
    createdAt?: DateTimeFilter<"DoseEvent"> | Date | string
    updatedAt?: DateTimeFilter<"DoseEvent"> | Date | string
    schedule?: XOR<DoseScheduleScalarRelationFilter, DoseScheduleWhereInput>
  }, "id" | "scheduleId_plannedAt">

  export type DoseEventOrderByWithAggregationInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    plannedAt?: SortOrder
    takenAt?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoseEventCountOrderByAggregateInput
    _max?: DoseEventMaxOrderByAggregateInput
    _min?: DoseEventMinOrderByAggregateInput
  }

  export type DoseEventScalarWhereWithAggregatesInput = {
    AND?: DoseEventScalarWhereWithAggregatesInput | DoseEventScalarWhereWithAggregatesInput[]
    OR?: DoseEventScalarWhereWithAggregatesInput[]
    NOT?: DoseEventScalarWhereWithAggregatesInput | DoseEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoseEvent"> | string
    scheduleId?: StringWithAggregatesFilter<"DoseEvent"> | string
    plannedAt?: DateTimeWithAggregatesFilter<"DoseEvent"> | Date | string
    takenAt?: DateTimeNullableWithAggregatesFilter<"DoseEvent"> | Date | string | null
    status?: EnumDoseStatusWithAggregatesFilter<"DoseEvent"> | $Enums.DoseStatus
    source?: EnumDoseSourceNullableWithAggregatesFilter<"DoseEvent"> | $Enums.DoseSource | null
    createdAt?: DateTimeWithAggregatesFilter<"DoseEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoseEvent"> | Date | string
  }

  export type NotificationEventWhereInput = {
    AND?: NotificationEventWhereInput | NotificationEventWhereInput[]
    OR?: NotificationEventWhereInput[]
    NOT?: NotificationEventWhereInput | NotificationEventWhereInput[]
    id?: StringFilter<"NotificationEvent"> | string
    familyGroupId?: StringFilter<"NotificationEvent"> | string
    type?: EnumNotificationTypeFilter<"NotificationEvent"> | $Enums.NotificationType
    occurredAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    payloadJson?: JsonFilter<"NotificationEvent">
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    familyGroup?: XOR<FamilyGroupScalarRelationFilter, FamilyGroupWhereInput>
  }

  export type NotificationEventOrderByWithRelationInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    payloadJson?: SortOrder
    createdAt?: SortOrder
    familyGroup?: FamilyGroupOrderByWithRelationInput
  }

  export type NotificationEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationEventWhereInput | NotificationEventWhereInput[]
    OR?: NotificationEventWhereInput[]
    NOT?: NotificationEventWhereInput | NotificationEventWhereInput[]
    familyGroupId?: StringFilter<"NotificationEvent"> | string
    type?: EnumNotificationTypeFilter<"NotificationEvent"> | $Enums.NotificationType
    occurredAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    payloadJson?: JsonFilter<"NotificationEvent">
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    familyGroup?: XOR<FamilyGroupScalarRelationFilter, FamilyGroupWhereInput>
  }, "id">

  export type NotificationEventOrderByWithAggregationInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    payloadJson?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationEventCountOrderByAggregateInput
    _max?: NotificationEventMaxOrderByAggregateInput
    _min?: NotificationEventMinOrderByAggregateInput
  }

  export type NotificationEventScalarWhereWithAggregatesInput = {
    AND?: NotificationEventScalarWhereWithAggregatesInput | NotificationEventScalarWhereWithAggregatesInput[]
    OR?: NotificationEventScalarWhereWithAggregatesInput[]
    NOT?: NotificationEventScalarWhereWithAggregatesInput | NotificationEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationEvent"> | string
    familyGroupId?: StringWithAggregatesFilter<"NotificationEvent"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"NotificationEvent"> | $Enums.NotificationType
    occurredAt?: DateTimeWithAggregatesFilter<"NotificationEvent"> | Date | string
    payloadJson?: JsonWithAggregatesFilter<"NotificationEvent">
    createdAt?: DateTimeWithAggregatesFilter<"NotificationEvent"> | Date | string
  }

  export type FamilyGroupCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceCreateNestedManyWithoutFamilyGroupInput
    patientDevices?: PatientDeviceCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupUncheckedCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    patientDevices?: PatientDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeUncheckedCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationUncheckedCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventUncheckedCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUpdateManyWithoutFamilyGroupNestedInput
    patientDevices?: PatientDeviceUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    patientDevices?: PatientDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUncheckedUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUncheckedUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupCreateManyInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
  }

  export type FamilyGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaregiverDeviceCreateInput = {
    id?: string
    deviceToken: string
    label?: string | null
    createdAt?: Date | string
    familyGroup: FamilyGroupCreateNestedOneWithoutCaregiverDevicesInput
  }

  export type CaregiverDeviceUncheckedCreateInput = {
    id?: string
    familyGroupId: string
    deviceToken: string
    label?: string | null
    createdAt?: Date | string
  }

  export type CaregiverDeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyGroup?: FamilyGroupUpdateOneRequiredWithoutCaregiverDevicesNestedInput
  }

  export type CaregiverDeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaregiverDeviceCreateManyInput = {
    id?: string
    familyGroupId: string
    deviceToken: string
    label?: string | null
    createdAt?: Date | string
  }

  export type CaregiverDeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaregiverDeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientDeviceCreateInput = {
    id?: string
    deviceToken: string
    tz?: string
    label?: string | null
    createdAt?: Date | string
    familyGroup?: FamilyGroupCreateNestedOneWithoutPatientDevicesInput
  }

  export type PatientDeviceUncheckedCreateInput = {
    id?: string
    familyGroupId?: string | null
    deviceToken: string
    tz?: string
    label?: string | null
    createdAt?: Date | string
  }

  export type PatientDeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    tz?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyGroup?: FamilyGroupUpdateOneWithoutPatientDevicesNestedInput
  }

  export type PatientDeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceToken?: StringFieldUpdateOperationsInput | string
    tz?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientDeviceCreateManyInput = {
    id?: string
    familyGroupId?: string | null
    deviceToken: string
    tz?: string
    label?: string | null
    createdAt?: Date | string
  }

  export type PatientDeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    tz?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientDeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceToken?: StringFieldUpdateOperationsInput | string
    tz?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairingCodeCreateInput = {
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    familyGroup: FamilyGroupCreateNestedOneWithoutPairingCodesInput
  }

  export type PairingCodeUncheckedCreateInput = {
    code: string
    familyGroupId: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PairingCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyGroup?: FamilyGroupUpdateOneRequiredWithoutPairingCodesNestedInput
  }

  export type PairingCodeUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairingCodeCreateManyInput = {
    code: string
    familyGroupId: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PairingCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairingCodeUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationCreateInput = {
    id?: string
    name: string
    instructions?: string | null
    remainingCount?: number | null
    remainingUpdatedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyGroup: FamilyGroupCreateNestedOneWithoutMedicationsInput
    schedules?: DoseScheduleCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    familyGroupId: string
    name: string
    instructions?: string | null
    remainingCount?: number | null
    remainingUpdatedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: DoseScheduleUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyGroup?: FamilyGroupUpdateOneRequiredWithoutMedicationsNestedInput
    schedules?: DoseScheduleUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: DoseScheduleUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    familyGroupId: string
    name: string
    instructions?: string | null
    remainingCount?: number | null
    remainingUpdatedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseScheduleCreateInput = {
    id?: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutSchedulesInput
    doseEvents?: DoseEventCreateNestedManyWithoutScheduleInput
  }

  export type DoseScheduleUncheckedCreateInput = {
    id?: string
    medicationId: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    doseEvents?: DoseEventUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type DoseScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutSchedulesNestedInput
    doseEvents?: DoseEventUpdateManyWithoutScheduleNestedInput
  }

  export type DoseScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doseEvents?: DoseEventUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type DoseScheduleCreateManyInput = {
    id?: string
    medicationId: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoseScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseEventCreateInput = {
    id?: string
    plannedAt: Date | string
    takenAt?: Date | string | null
    status?: $Enums.DoseStatus
    source?: $Enums.DoseSource | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule: DoseScheduleCreateNestedOneWithoutDoseEventsInput
  }

  export type DoseEventUncheckedCreateInput = {
    id?: string
    scheduleId: string
    plannedAt: Date | string
    takenAt?: Date | string | null
    status?: $Enums.DoseStatus
    source?: $Enums.DoseSource | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoseEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    source?: NullableEnumDoseSourceFieldUpdateOperationsInput | $Enums.DoseSource | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: DoseScheduleUpdateOneRequiredWithoutDoseEventsNestedInput
  }

  export type DoseEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    source?: NullableEnumDoseSourceFieldUpdateOperationsInput | $Enums.DoseSource | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseEventCreateManyInput = {
    id?: string
    scheduleId: string
    plannedAt: Date | string
    takenAt?: Date | string | null
    status?: $Enums.DoseStatus
    source?: $Enums.DoseSource | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoseEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    source?: NullableEnumDoseSourceFieldUpdateOperationsInput | $Enums.DoseSource | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    source?: NullableEnumDoseSourceFieldUpdateOperationsInput | $Enums.DoseSource | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventCreateInput = {
    id?: string
    type: $Enums.NotificationType
    occurredAt: Date | string
    payloadJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    familyGroup: FamilyGroupCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationEventUncheckedCreateInput = {
    id?: string
    familyGroupId: string
    type: $Enums.NotificationType
    occurredAt: Date | string
    payloadJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyGroup?: FamilyGroupUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventCreateManyInput = {
    id?: string
    familyGroupId: string
    type: $Enums.NotificationType
    occurredAt: Date | string
    payloadJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payloadJson?: JsonNullValueInput | InputJsonValue
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

  export type CaregiverDeviceListRelationFilter = {
    every?: CaregiverDeviceWhereInput
    some?: CaregiverDeviceWhereInput
    none?: CaregiverDeviceWhereInput
  }

  export type PatientDeviceListRelationFilter = {
    every?: PatientDeviceWhereInput
    some?: PatientDeviceWhereInput
    none?: PatientDeviceWhereInput
  }

  export type PairingCodeListRelationFilter = {
    every?: PairingCodeWhereInput
    some?: PairingCodeWhereInput
    none?: PairingCodeWhereInput
  }

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type NotificationEventListRelationFilter = {
    every?: NotificationEventWhereInput
    some?: NotificationEventWhereInput
    none?: NotificationEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CaregiverDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PairingCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type FamilyGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type FamilyGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type FamilyGroupScalarRelationFilter = {
    is?: FamilyGroupWhereInput
    isNot?: FamilyGroupWhereInput
  }

  export type CaregiverDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    deviceToken?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type CaregiverDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    deviceToken?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type CaregiverDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    deviceToken?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type FamilyGroupNullableScalarRelationFilter = {
    is?: FamilyGroupWhereInput | null
    isNot?: FamilyGroupWhereInput | null
  }

  export type PatientDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    deviceToken?: SortOrder
    tz?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    deviceToken?: SortOrder
    tz?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    deviceToken?: SortOrder
    tz?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
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

  export type PairingCodeCountOrderByAggregateInput = {
    code?: SortOrder
    familyGroupId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PairingCodeMaxOrderByAggregateInput = {
    code?: SortOrder
    familyGroupId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PairingCodeMinOrderByAggregateInput = {
    code?: SortOrder
    familyGroupId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DoseScheduleListRelationFilter = {
    every?: DoseScheduleWhereInput
    some?: DoseScheduleWhereInput
    none?: DoseScheduleWhereInput
  }

  export type DoseScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    name?: SortOrder
    instructions?: SortOrder
    remainingCount?: SortOrder
    remainingUpdatedAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    remainingCount?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    name?: SortOrder
    instructions?: SortOrder
    remainingCount?: SortOrder
    remainingUpdatedAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    name?: SortOrder
    instructions?: SortOrder
    remainingCount?: SortOrder
    remainingUpdatedAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    remainingCount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type DoseEventListRelationFilter = {
    every?: DoseEventWhereInput
    some?: DoseEventWhereInput
    none?: DoseEventWhereInput
  }

  export type DoseEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoseScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    daysOfWeekMask?: SortOrder
    dosesPerTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoseScheduleAvgOrderByAggregateInput = {
    daysOfWeekMask?: SortOrder
    dosesPerTime?: SortOrder
  }

  export type DoseScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    daysOfWeekMask?: SortOrder
    dosesPerTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoseScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timeOfDay?: SortOrder
    daysOfWeekMask?: SortOrder
    dosesPerTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoseScheduleSumOrderByAggregateInput = {
    daysOfWeekMask?: SortOrder
    dosesPerTime?: SortOrder
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

  export type EnumDoseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseStatus | EnumDoseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDoseStatusFilter<$PrismaModel> | $Enums.DoseStatus
  }

  export type EnumDoseSourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseSource | EnumDoseSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.DoseSource[] | ListEnumDoseSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DoseSource[] | ListEnumDoseSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDoseSourceNullableFilter<$PrismaModel> | $Enums.DoseSource | null
  }

  export type DoseScheduleScalarRelationFilter = {
    is?: DoseScheduleWhereInput
    isNot?: DoseScheduleWhereInput
  }

  export type DoseEventScheduleIdPlannedAtCompoundUniqueInput = {
    scheduleId: string
    plannedAt: Date | string
  }

  export type DoseEventCountOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    plannedAt?: SortOrder
    takenAt?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoseEventMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    plannedAt?: SortOrder
    takenAt?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoseEventMinOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    plannedAt?: SortOrder
    takenAt?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDoseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseStatus | EnumDoseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDoseStatusWithAggregatesFilter<$PrismaModel> | $Enums.DoseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoseStatusFilter<$PrismaModel>
    _max?: NestedEnumDoseStatusFilter<$PrismaModel>
  }

  export type EnumDoseSourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseSource | EnumDoseSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.DoseSource[] | ListEnumDoseSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DoseSource[] | ListEnumDoseSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDoseSourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.DoseSource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDoseSourceNullableFilter<$PrismaModel>
    _max?: NestedEnumDoseSourceNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
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

  export type NotificationEventCountOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    payloadJson?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationEventMaxOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationEventMinOrderByAggregateInput = {
    id?: SortOrder
    familyGroupId?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
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

  export type CaregiverDeviceCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<CaregiverDeviceCreateWithoutFamilyGroupInput, CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput> | CaregiverDeviceCreateWithoutFamilyGroupInput[] | CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput | CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: CaregiverDeviceCreateManyFamilyGroupInputEnvelope
    connect?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
  }

  export type PatientDeviceCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<PatientDeviceCreateWithoutFamilyGroupInput, PatientDeviceUncheckedCreateWithoutFamilyGroupInput> | PatientDeviceCreateWithoutFamilyGroupInput[] | PatientDeviceUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: PatientDeviceCreateOrConnectWithoutFamilyGroupInput | PatientDeviceCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: PatientDeviceCreateManyFamilyGroupInputEnvelope
    connect?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
  }

  export type PairingCodeCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<PairingCodeCreateWithoutFamilyGroupInput, PairingCodeUncheckedCreateWithoutFamilyGroupInput> | PairingCodeCreateWithoutFamilyGroupInput[] | PairingCodeUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: PairingCodeCreateOrConnectWithoutFamilyGroupInput | PairingCodeCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: PairingCodeCreateManyFamilyGroupInputEnvelope
    connect?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
  }

  export type MedicationCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<MedicationCreateWithoutFamilyGroupInput, MedicationUncheckedCreateWithoutFamilyGroupInput> | MedicationCreateWithoutFamilyGroupInput[] | MedicationUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutFamilyGroupInput | MedicationCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: MedicationCreateManyFamilyGroupInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type NotificationEventCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<NotificationEventCreateWithoutFamilyGroupInput, NotificationEventUncheckedCreateWithoutFamilyGroupInput> | NotificationEventCreateWithoutFamilyGroupInput[] | NotificationEventUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutFamilyGroupInput | NotificationEventCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: NotificationEventCreateManyFamilyGroupInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type CaregiverDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<CaregiverDeviceCreateWithoutFamilyGroupInput, CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput> | CaregiverDeviceCreateWithoutFamilyGroupInput[] | CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput | CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: CaregiverDeviceCreateManyFamilyGroupInputEnvelope
    connect?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
  }

  export type PatientDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<PatientDeviceCreateWithoutFamilyGroupInput, PatientDeviceUncheckedCreateWithoutFamilyGroupInput> | PatientDeviceCreateWithoutFamilyGroupInput[] | PatientDeviceUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: PatientDeviceCreateOrConnectWithoutFamilyGroupInput | PatientDeviceCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: PatientDeviceCreateManyFamilyGroupInputEnvelope
    connect?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
  }

  export type PairingCodeUncheckedCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<PairingCodeCreateWithoutFamilyGroupInput, PairingCodeUncheckedCreateWithoutFamilyGroupInput> | PairingCodeCreateWithoutFamilyGroupInput[] | PairingCodeUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: PairingCodeCreateOrConnectWithoutFamilyGroupInput | PairingCodeCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: PairingCodeCreateManyFamilyGroupInputEnvelope
    connect?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<MedicationCreateWithoutFamilyGroupInput, MedicationUncheckedCreateWithoutFamilyGroupInput> | MedicationCreateWithoutFamilyGroupInput[] | MedicationUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutFamilyGroupInput | MedicationCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: MedicationCreateManyFamilyGroupInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type NotificationEventUncheckedCreateNestedManyWithoutFamilyGroupInput = {
    create?: XOR<NotificationEventCreateWithoutFamilyGroupInput, NotificationEventUncheckedCreateWithoutFamilyGroupInput> | NotificationEventCreateWithoutFamilyGroupInput[] | NotificationEventUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutFamilyGroupInput | NotificationEventCreateOrConnectWithoutFamilyGroupInput[]
    createMany?: NotificationEventCreateManyFamilyGroupInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
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

  export type CaregiverDeviceUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<CaregiverDeviceCreateWithoutFamilyGroupInput, CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput> | CaregiverDeviceCreateWithoutFamilyGroupInput[] | CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput | CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: CaregiverDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput | CaregiverDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: CaregiverDeviceCreateManyFamilyGroupInputEnvelope
    set?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
    disconnect?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
    delete?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
    connect?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
    update?: CaregiverDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput | CaregiverDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: CaregiverDeviceUpdateManyWithWhereWithoutFamilyGroupInput | CaregiverDeviceUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: CaregiverDeviceScalarWhereInput | CaregiverDeviceScalarWhereInput[]
  }

  export type PatientDeviceUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<PatientDeviceCreateWithoutFamilyGroupInput, PatientDeviceUncheckedCreateWithoutFamilyGroupInput> | PatientDeviceCreateWithoutFamilyGroupInput[] | PatientDeviceUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: PatientDeviceCreateOrConnectWithoutFamilyGroupInput | PatientDeviceCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: PatientDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput | PatientDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: PatientDeviceCreateManyFamilyGroupInputEnvelope
    set?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
    disconnect?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
    delete?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
    connect?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
    update?: PatientDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput | PatientDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: PatientDeviceUpdateManyWithWhereWithoutFamilyGroupInput | PatientDeviceUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: PatientDeviceScalarWhereInput | PatientDeviceScalarWhereInput[]
  }

  export type PairingCodeUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<PairingCodeCreateWithoutFamilyGroupInput, PairingCodeUncheckedCreateWithoutFamilyGroupInput> | PairingCodeCreateWithoutFamilyGroupInput[] | PairingCodeUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: PairingCodeCreateOrConnectWithoutFamilyGroupInput | PairingCodeCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: PairingCodeUpsertWithWhereUniqueWithoutFamilyGroupInput | PairingCodeUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: PairingCodeCreateManyFamilyGroupInputEnvelope
    set?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
    disconnect?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
    delete?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
    connect?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
    update?: PairingCodeUpdateWithWhereUniqueWithoutFamilyGroupInput | PairingCodeUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: PairingCodeUpdateManyWithWhereWithoutFamilyGroupInput | PairingCodeUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: PairingCodeScalarWhereInput | PairingCodeScalarWhereInput[]
  }

  export type MedicationUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<MedicationCreateWithoutFamilyGroupInput, MedicationUncheckedCreateWithoutFamilyGroupInput> | MedicationCreateWithoutFamilyGroupInput[] | MedicationUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutFamilyGroupInput | MedicationCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutFamilyGroupInput | MedicationUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: MedicationCreateManyFamilyGroupInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutFamilyGroupInput | MedicationUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutFamilyGroupInput | MedicationUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type NotificationEventUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<NotificationEventCreateWithoutFamilyGroupInput, NotificationEventUncheckedCreateWithoutFamilyGroupInput> | NotificationEventCreateWithoutFamilyGroupInput[] | NotificationEventUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutFamilyGroupInput | NotificationEventCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutFamilyGroupInput | NotificationEventUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: NotificationEventCreateManyFamilyGroupInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutFamilyGroupInput | NotificationEventUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutFamilyGroupInput | NotificationEventUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type CaregiverDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<CaregiverDeviceCreateWithoutFamilyGroupInput, CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput> | CaregiverDeviceCreateWithoutFamilyGroupInput[] | CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput | CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: CaregiverDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput | CaregiverDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: CaregiverDeviceCreateManyFamilyGroupInputEnvelope
    set?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
    disconnect?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
    delete?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
    connect?: CaregiverDeviceWhereUniqueInput | CaregiverDeviceWhereUniqueInput[]
    update?: CaregiverDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput | CaregiverDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: CaregiverDeviceUpdateManyWithWhereWithoutFamilyGroupInput | CaregiverDeviceUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: CaregiverDeviceScalarWhereInput | CaregiverDeviceScalarWhereInput[]
  }

  export type PatientDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<PatientDeviceCreateWithoutFamilyGroupInput, PatientDeviceUncheckedCreateWithoutFamilyGroupInput> | PatientDeviceCreateWithoutFamilyGroupInput[] | PatientDeviceUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: PatientDeviceCreateOrConnectWithoutFamilyGroupInput | PatientDeviceCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: PatientDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput | PatientDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: PatientDeviceCreateManyFamilyGroupInputEnvelope
    set?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
    disconnect?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
    delete?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
    connect?: PatientDeviceWhereUniqueInput | PatientDeviceWhereUniqueInput[]
    update?: PatientDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput | PatientDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: PatientDeviceUpdateManyWithWhereWithoutFamilyGroupInput | PatientDeviceUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: PatientDeviceScalarWhereInput | PatientDeviceScalarWhereInput[]
  }

  export type PairingCodeUncheckedUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<PairingCodeCreateWithoutFamilyGroupInput, PairingCodeUncheckedCreateWithoutFamilyGroupInput> | PairingCodeCreateWithoutFamilyGroupInput[] | PairingCodeUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: PairingCodeCreateOrConnectWithoutFamilyGroupInput | PairingCodeCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: PairingCodeUpsertWithWhereUniqueWithoutFamilyGroupInput | PairingCodeUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: PairingCodeCreateManyFamilyGroupInputEnvelope
    set?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
    disconnect?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
    delete?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
    connect?: PairingCodeWhereUniqueInput | PairingCodeWhereUniqueInput[]
    update?: PairingCodeUpdateWithWhereUniqueWithoutFamilyGroupInput | PairingCodeUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: PairingCodeUpdateManyWithWhereWithoutFamilyGroupInput | PairingCodeUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: PairingCodeScalarWhereInput | PairingCodeScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<MedicationCreateWithoutFamilyGroupInput, MedicationUncheckedCreateWithoutFamilyGroupInput> | MedicationCreateWithoutFamilyGroupInput[] | MedicationUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutFamilyGroupInput | MedicationCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutFamilyGroupInput | MedicationUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: MedicationCreateManyFamilyGroupInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutFamilyGroupInput | MedicationUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutFamilyGroupInput | MedicationUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type NotificationEventUncheckedUpdateManyWithoutFamilyGroupNestedInput = {
    create?: XOR<NotificationEventCreateWithoutFamilyGroupInput, NotificationEventUncheckedCreateWithoutFamilyGroupInput> | NotificationEventCreateWithoutFamilyGroupInput[] | NotificationEventUncheckedCreateWithoutFamilyGroupInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutFamilyGroupInput | NotificationEventCreateOrConnectWithoutFamilyGroupInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutFamilyGroupInput | NotificationEventUpsertWithWhereUniqueWithoutFamilyGroupInput[]
    createMany?: NotificationEventCreateManyFamilyGroupInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutFamilyGroupInput | NotificationEventUpdateWithWhereUniqueWithoutFamilyGroupInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutFamilyGroupInput | NotificationEventUpdateManyWithWhereWithoutFamilyGroupInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type FamilyGroupCreateNestedOneWithoutCaregiverDevicesInput = {
    create?: XOR<FamilyGroupCreateWithoutCaregiverDevicesInput, FamilyGroupUncheckedCreateWithoutCaregiverDevicesInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutCaregiverDevicesInput
    connect?: FamilyGroupWhereUniqueInput
  }

  export type FamilyGroupUpdateOneRequiredWithoutCaregiverDevicesNestedInput = {
    create?: XOR<FamilyGroupCreateWithoutCaregiverDevicesInput, FamilyGroupUncheckedCreateWithoutCaregiverDevicesInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutCaregiverDevicesInput
    upsert?: FamilyGroupUpsertWithoutCaregiverDevicesInput
    connect?: FamilyGroupWhereUniqueInput
    update?: XOR<XOR<FamilyGroupUpdateToOneWithWhereWithoutCaregiverDevicesInput, FamilyGroupUpdateWithoutCaregiverDevicesInput>, FamilyGroupUncheckedUpdateWithoutCaregiverDevicesInput>
  }

  export type FamilyGroupCreateNestedOneWithoutPatientDevicesInput = {
    create?: XOR<FamilyGroupCreateWithoutPatientDevicesInput, FamilyGroupUncheckedCreateWithoutPatientDevicesInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutPatientDevicesInput
    connect?: FamilyGroupWhereUniqueInput
  }

  export type FamilyGroupUpdateOneWithoutPatientDevicesNestedInput = {
    create?: XOR<FamilyGroupCreateWithoutPatientDevicesInput, FamilyGroupUncheckedCreateWithoutPatientDevicesInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutPatientDevicesInput
    upsert?: FamilyGroupUpsertWithoutPatientDevicesInput
    disconnect?: FamilyGroupWhereInput | boolean
    delete?: FamilyGroupWhereInput | boolean
    connect?: FamilyGroupWhereUniqueInput
    update?: XOR<XOR<FamilyGroupUpdateToOneWithWhereWithoutPatientDevicesInput, FamilyGroupUpdateWithoutPatientDevicesInput>, FamilyGroupUncheckedUpdateWithoutPatientDevicesInput>
  }

  export type FamilyGroupCreateNestedOneWithoutPairingCodesInput = {
    create?: XOR<FamilyGroupCreateWithoutPairingCodesInput, FamilyGroupUncheckedCreateWithoutPairingCodesInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutPairingCodesInput
    connect?: FamilyGroupWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FamilyGroupUpdateOneRequiredWithoutPairingCodesNestedInput = {
    create?: XOR<FamilyGroupCreateWithoutPairingCodesInput, FamilyGroupUncheckedCreateWithoutPairingCodesInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutPairingCodesInput
    upsert?: FamilyGroupUpsertWithoutPairingCodesInput
    connect?: FamilyGroupWhereUniqueInput
    update?: XOR<XOR<FamilyGroupUpdateToOneWithWhereWithoutPairingCodesInput, FamilyGroupUpdateWithoutPairingCodesInput>, FamilyGroupUncheckedUpdateWithoutPairingCodesInput>
  }

  export type FamilyGroupCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<FamilyGroupCreateWithoutMedicationsInput, FamilyGroupUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutMedicationsInput
    connect?: FamilyGroupWhereUniqueInput
  }

  export type DoseScheduleCreateNestedManyWithoutMedicationInput = {
    create?: XOR<DoseScheduleCreateWithoutMedicationInput, DoseScheduleUncheckedCreateWithoutMedicationInput> | DoseScheduleCreateWithoutMedicationInput[] | DoseScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: DoseScheduleCreateOrConnectWithoutMedicationInput | DoseScheduleCreateOrConnectWithoutMedicationInput[]
    createMany?: DoseScheduleCreateManyMedicationInputEnvelope
    connect?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
  }

  export type DoseScheduleUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<DoseScheduleCreateWithoutMedicationInput, DoseScheduleUncheckedCreateWithoutMedicationInput> | DoseScheduleCreateWithoutMedicationInput[] | DoseScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: DoseScheduleCreateOrConnectWithoutMedicationInput | DoseScheduleCreateOrConnectWithoutMedicationInput[]
    createMany?: DoseScheduleCreateManyMedicationInputEnvelope
    connect?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FamilyGroupUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<FamilyGroupCreateWithoutMedicationsInput, FamilyGroupUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutMedicationsInput
    upsert?: FamilyGroupUpsertWithoutMedicationsInput
    connect?: FamilyGroupWhereUniqueInput
    update?: XOR<XOR<FamilyGroupUpdateToOneWithWhereWithoutMedicationsInput, FamilyGroupUpdateWithoutMedicationsInput>, FamilyGroupUncheckedUpdateWithoutMedicationsInput>
  }

  export type DoseScheduleUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<DoseScheduleCreateWithoutMedicationInput, DoseScheduleUncheckedCreateWithoutMedicationInput> | DoseScheduleCreateWithoutMedicationInput[] | DoseScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: DoseScheduleCreateOrConnectWithoutMedicationInput | DoseScheduleCreateOrConnectWithoutMedicationInput[]
    upsert?: DoseScheduleUpsertWithWhereUniqueWithoutMedicationInput | DoseScheduleUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: DoseScheduleCreateManyMedicationInputEnvelope
    set?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
    disconnect?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
    delete?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
    connect?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
    update?: DoseScheduleUpdateWithWhereUniqueWithoutMedicationInput | DoseScheduleUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: DoseScheduleUpdateManyWithWhereWithoutMedicationInput | DoseScheduleUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: DoseScheduleScalarWhereInput | DoseScheduleScalarWhereInput[]
  }

  export type DoseScheduleUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<DoseScheduleCreateWithoutMedicationInput, DoseScheduleUncheckedCreateWithoutMedicationInput> | DoseScheduleCreateWithoutMedicationInput[] | DoseScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: DoseScheduleCreateOrConnectWithoutMedicationInput | DoseScheduleCreateOrConnectWithoutMedicationInput[]
    upsert?: DoseScheduleUpsertWithWhereUniqueWithoutMedicationInput | DoseScheduleUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: DoseScheduleCreateManyMedicationInputEnvelope
    set?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
    disconnect?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
    delete?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
    connect?: DoseScheduleWhereUniqueInput | DoseScheduleWhereUniqueInput[]
    update?: DoseScheduleUpdateWithWhereUniqueWithoutMedicationInput | DoseScheduleUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: DoseScheduleUpdateManyWithWhereWithoutMedicationInput | DoseScheduleUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: DoseScheduleScalarWhereInput | DoseScheduleScalarWhereInput[]
  }

  export type MedicationCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutSchedulesInput
    connect?: MedicationWhereUniqueInput
  }

  export type DoseEventCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DoseEventCreateWithoutScheduleInput, DoseEventUncheckedCreateWithoutScheduleInput> | DoseEventCreateWithoutScheduleInput[] | DoseEventUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoseEventCreateOrConnectWithoutScheduleInput | DoseEventCreateOrConnectWithoutScheduleInput[]
    createMany?: DoseEventCreateManyScheduleInputEnvelope
    connect?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
  }

  export type DoseEventUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DoseEventCreateWithoutScheduleInput, DoseEventUncheckedCreateWithoutScheduleInput> | DoseEventCreateWithoutScheduleInput[] | DoseEventUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoseEventCreateOrConnectWithoutScheduleInput | DoseEventCreateOrConnectWithoutScheduleInput[]
    createMany?: DoseEventCreateManyScheduleInputEnvelope
    connect?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicationUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutSchedulesInput
    upsert?: MedicationUpsertWithoutSchedulesInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutSchedulesInput, MedicationUpdateWithoutSchedulesInput>, MedicationUncheckedUpdateWithoutSchedulesInput>
  }

  export type DoseEventUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DoseEventCreateWithoutScheduleInput, DoseEventUncheckedCreateWithoutScheduleInput> | DoseEventCreateWithoutScheduleInput[] | DoseEventUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoseEventCreateOrConnectWithoutScheduleInput | DoseEventCreateOrConnectWithoutScheduleInput[]
    upsert?: DoseEventUpsertWithWhereUniqueWithoutScheduleInput | DoseEventUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DoseEventCreateManyScheduleInputEnvelope
    set?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
    disconnect?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
    delete?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
    connect?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
    update?: DoseEventUpdateWithWhereUniqueWithoutScheduleInput | DoseEventUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DoseEventUpdateManyWithWhereWithoutScheduleInput | DoseEventUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DoseEventScalarWhereInput | DoseEventScalarWhereInput[]
  }

  export type DoseEventUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DoseEventCreateWithoutScheduleInput, DoseEventUncheckedCreateWithoutScheduleInput> | DoseEventCreateWithoutScheduleInput[] | DoseEventUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoseEventCreateOrConnectWithoutScheduleInput | DoseEventCreateOrConnectWithoutScheduleInput[]
    upsert?: DoseEventUpsertWithWhereUniqueWithoutScheduleInput | DoseEventUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DoseEventCreateManyScheduleInputEnvelope
    set?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
    disconnect?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
    delete?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
    connect?: DoseEventWhereUniqueInput | DoseEventWhereUniqueInput[]
    update?: DoseEventUpdateWithWhereUniqueWithoutScheduleInput | DoseEventUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DoseEventUpdateManyWithWhereWithoutScheduleInput | DoseEventUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DoseEventScalarWhereInput | DoseEventScalarWhereInput[]
  }

  export type DoseScheduleCreateNestedOneWithoutDoseEventsInput = {
    create?: XOR<DoseScheduleCreateWithoutDoseEventsInput, DoseScheduleUncheckedCreateWithoutDoseEventsInput>
    connectOrCreate?: DoseScheduleCreateOrConnectWithoutDoseEventsInput
    connect?: DoseScheduleWhereUniqueInput
  }

  export type EnumDoseStatusFieldUpdateOperationsInput = {
    set?: $Enums.DoseStatus
  }

  export type NullableEnumDoseSourceFieldUpdateOperationsInput = {
    set?: $Enums.DoseSource | null
  }

  export type DoseScheduleUpdateOneRequiredWithoutDoseEventsNestedInput = {
    create?: XOR<DoseScheduleCreateWithoutDoseEventsInput, DoseScheduleUncheckedCreateWithoutDoseEventsInput>
    connectOrCreate?: DoseScheduleCreateOrConnectWithoutDoseEventsInput
    upsert?: DoseScheduleUpsertWithoutDoseEventsInput
    connect?: DoseScheduleWhereUniqueInput
    update?: XOR<XOR<DoseScheduleUpdateToOneWithWhereWithoutDoseEventsInput, DoseScheduleUpdateWithoutDoseEventsInput>, DoseScheduleUncheckedUpdateWithoutDoseEventsInput>
  }

  export type FamilyGroupCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<FamilyGroupCreateWithoutNotificationsInput, FamilyGroupUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutNotificationsInput
    connect?: FamilyGroupWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type FamilyGroupUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<FamilyGroupCreateWithoutNotificationsInput, FamilyGroupUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: FamilyGroupCreateOrConnectWithoutNotificationsInput
    upsert?: FamilyGroupUpsertWithoutNotificationsInput
    connect?: FamilyGroupWhereUniqueInput
    update?: XOR<XOR<FamilyGroupUpdateToOneWithWhereWithoutNotificationsInput, FamilyGroupUpdateWithoutNotificationsInput>, FamilyGroupUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumDoseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseStatus | EnumDoseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDoseStatusFilter<$PrismaModel> | $Enums.DoseStatus
  }

  export type NestedEnumDoseSourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseSource | EnumDoseSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.DoseSource[] | ListEnumDoseSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DoseSource[] | ListEnumDoseSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDoseSourceNullableFilter<$PrismaModel> | $Enums.DoseSource | null
  }

  export type NestedEnumDoseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseStatus | EnumDoseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDoseStatusWithAggregatesFilter<$PrismaModel> | $Enums.DoseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoseStatusFilter<$PrismaModel>
    _max?: NestedEnumDoseStatusFilter<$PrismaModel>
  }

  export type NestedEnumDoseSourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseSource | EnumDoseSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.DoseSource[] | ListEnumDoseSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DoseSource[] | ListEnumDoseSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDoseSourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.DoseSource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDoseSourceNullableFilter<$PrismaModel>
    _max?: NestedEnumDoseSourceNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
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

  export type CaregiverDeviceCreateWithoutFamilyGroupInput = {
    id?: string
    deviceToken: string
    label?: string | null
    createdAt?: Date | string
  }

  export type CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput = {
    id?: string
    deviceToken: string
    label?: string | null
    createdAt?: Date | string
  }

  export type CaregiverDeviceCreateOrConnectWithoutFamilyGroupInput = {
    where: CaregiverDeviceWhereUniqueInput
    create: XOR<CaregiverDeviceCreateWithoutFamilyGroupInput, CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput>
  }

  export type CaregiverDeviceCreateManyFamilyGroupInputEnvelope = {
    data: CaregiverDeviceCreateManyFamilyGroupInput | CaregiverDeviceCreateManyFamilyGroupInput[]
    skipDuplicates?: boolean
  }

  export type PatientDeviceCreateWithoutFamilyGroupInput = {
    id?: string
    deviceToken: string
    tz?: string
    label?: string | null
    createdAt?: Date | string
  }

  export type PatientDeviceUncheckedCreateWithoutFamilyGroupInput = {
    id?: string
    deviceToken: string
    tz?: string
    label?: string | null
    createdAt?: Date | string
  }

  export type PatientDeviceCreateOrConnectWithoutFamilyGroupInput = {
    where: PatientDeviceWhereUniqueInput
    create: XOR<PatientDeviceCreateWithoutFamilyGroupInput, PatientDeviceUncheckedCreateWithoutFamilyGroupInput>
  }

  export type PatientDeviceCreateManyFamilyGroupInputEnvelope = {
    data: PatientDeviceCreateManyFamilyGroupInput | PatientDeviceCreateManyFamilyGroupInput[]
    skipDuplicates?: boolean
  }

  export type PairingCodeCreateWithoutFamilyGroupInput = {
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PairingCodeUncheckedCreateWithoutFamilyGroupInput = {
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PairingCodeCreateOrConnectWithoutFamilyGroupInput = {
    where: PairingCodeWhereUniqueInput
    create: XOR<PairingCodeCreateWithoutFamilyGroupInput, PairingCodeUncheckedCreateWithoutFamilyGroupInput>
  }

  export type PairingCodeCreateManyFamilyGroupInputEnvelope = {
    data: PairingCodeCreateManyFamilyGroupInput | PairingCodeCreateManyFamilyGroupInput[]
    skipDuplicates?: boolean
  }

  export type MedicationCreateWithoutFamilyGroupInput = {
    id?: string
    name: string
    instructions?: string | null
    remainingCount?: number | null
    remainingUpdatedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: DoseScheduleCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutFamilyGroupInput = {
    id?: string
    name: string
    instructions?: string | null
    remainingCount?: number | null
    remainingUpdatedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: DoseScheduleUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutFamilyGroupInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutFamilyGroupInput, MedicationUncheckedCreateWithoutFamilyGroupInput>
  }

  export type MedicationCreateManyFamilyGroupInputEnvelope = {
    data: MedicationCreateManyFamilyGroupInput | MedicationCreateManyFamilyGroupInput[]
    skipDuplicates?: boolean
  }

  export type NotificationEventCreateWithoutFamilyGroupInput = {
    id?: string
    type: $Enums.NotificationType
    occurredAt: Date | string
    payloadJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationEventUncheckedCreateWithoutFamilyGroupInput = {
    id?: string
    type: $Enums.NotificationType
    occurredAt: Date | string
    payloadJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationEventCreateOrConnectWithoutFamilyGroupInput = {
    where: NotificationEventWhereUniqueInput
    create: XOR<NotificationEventCreateWithoutFamilyGroupInput, NotificationEventUncheckedCreateWithoutFamilyGroupInput>
  }

  export type NotificationEventCreateManyFamilyGroupInputEnvelope = {
    data: NotificationEventCreateManyFamilyGroupInput | NotificationEventCreateManyFamilyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CaregiverDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput = {
    where: CaregiverDeviceWhereUniqueInput
    update: XOR<CaregiverDeviceUpdateWithoutFamilyGroupInput, CaregiverDeviceUncheckedUpdateWithoutFamilyGroupInput>
    create: XOR<CaregiverDeviceCreateWithoutFamilyGroupInput, CaregiverDeviceUncheckedCreateWithoutFamilyGroupInput>
  }

  export type CaregiverDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput = {
    where: CaregiverDeviceWhereUniqueInput
    data: XOR<CaregiverDeviceUpdateWithoutFamilyGroupInput, CaregiverDeviceUncheckedUpdateWithoutFamilyGroupInput>
  }

  export type CaregiverDeviceUpdateManyWithWhereWithoutFamilyGroupInput = {
    where: CaregiverDeviceScalarWhereInput
    data: XOR<CaregiverDeviceUpdateManyMutationInput, CaregiverDeviceUncheckedUpdateManyWithoutFamilyGroupInput>
  }

  export type CaregiverDeviceScalarWhereInput = {
    AND?: CaregiverDeviceScalarWhereInput | CaregiverDeviceScalarWhereInput[]
    OR?: CaregiverDeviceScalarWhereInput[]
    NOT?: CaregiverDeviceScalarWhereInput | CaregiverDeviceScalarWhereInput[]
    id?: StringFilter<"CaregiverDevice"> | string
    familyGroupId?: StringFilter<"CaregiverDevice"> | string
    deviceToken?: StringFilter<"CaregiverDevice"> | string
    label?: StringNullableFilter<"CaregiverDevice"> | string | null
    createdAt?: DateTimeFilter<"CaregiverDevice"> | Date | string
  }

  export type PatientDeviceUpsertWithWhereUniqueWithoutFamilyGroupInput = {
    where: PatientDeviceWhereUniqueInput
    update: XOR<PatientDeviceUpdateWithoutFamilyGroupInput, PatientDeviceUncheckedUpdateWithoutFamilyGroupInput>
    create: XOR<PatientDeviceCreateWithoutFamilyGroupInput, PatientDeviceUncheckedCreateWithoutFamilyGroupInput>
  }

  export type PatientDeviceUpdateWithWhereUniqueWithoutFamilyGroupInput = {
    where: PatientDeviceWhereUniqueInput
    data: XOR<PatientDeviceUpdateWithoutFamilyGroupInput, PatientDeviceUncheckedUpdateWithoutFamilyGroupInput>
  }

  export type PatientDeviceUpdateManyWithWhereWithoutFamilyGroupInput = {
    where: PatientDeviceScalarWhereInput
    data: XOR<PatientDeviceUpdateManyMutationInput, PatientDeviceUncheckedUpdateManyWithoutFamilyGroupInput>
  }

  export type PatientDeviceScalarWhereInput = {
    AND?: PatientDeviceScalarWhereInput | PatientDeviceScalarWhereInput[]
    OR?: PatientDeviceScalarWhereInput[]
    NOT?: PatientDeviceScalarWhereInput | PatientDeviceScalarWhereInput[]
    id?: StringFilter<"PatientDevice"> | string
    familyGroupId?: StringNullableFilter<"PatientDevice"> | string | null
    deviceToken?: StringFilter<"PatientDevice"> | string
    tz?: StringFilter<"PatientDevice"> | string
    label?: StringNullableFilter<"PatientDevice"> | string | null
    createdAt?: DateTimeFilter<"PatientDevice"> | Date | string
  }

  export type PairingCodeUpsertWithWhereUniqueWithoutFamilyGroupInput = {
    where: PairingCodeWhereUniqueInput
    update: XOR<PairingCodeUpdateWithoutFamilyGroupInput, PairingCodeUncheckedUpdateWithoutFamilyGroupInput>
    create: XOR<PairingCodeCreateWithoutFamilyGroupInput, PairingCodeUncheckedCreateWithoutFamilyGroupInput>
  }

  export type PairingCodeUpdateWithWhereUniqueWithoutFamilyGroupInput = {
    where: PairingCodeWhereUniqueInput
    data: XOR<PairingCodeUpdateWithoutFamilyGroupInput, PairingCodeUncheckedUpdateWithoutFamilyGroupInput>
  }

  export type PairingCodeUpdateManyWithWhereWithoutFamilyGroupInput = {
    where: PairingCodeScalarWhereInput
    data: XOR<PairingCodeUpdateManyMutationInput, PairingCodeUncheckedUpdateManyWithoutFamilyGroupInput>
  }

  export type PairingCodeScalarWhereInput = {
    AND?: PairingCodeScalarWhereInput | PairingCodeScalarWhereInput[]
    OR?: PairingCodeScalarWhereInput[]
    NOT?: PairingCodeScalarWhereInput | PairingCodeScalarWhereInput[]
    code?: StringFilter<"PairingCode"> | string
    familyGroupId?: StringFilter<"PairingCode"> | string
    expiresAt?: DateTimeFilter<"PairingCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"PairingCode"> | Date | string | null
    createdAt?: DateTimeFilter<"PairingCode"> | Date | string
  }

  export type MedicationUpsertWithWhereUniqueWithoutFamilyGroupInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutFamilyGroupInput, MedicationUncheckedUpdateWithoutFamilyGroupInput>
    create: XOR<MedicationCreateWithoutFamilyGroupInput, MedicationUncheckedCreateWithoutFamilyGroupInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutFamilyGroupInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutFamilyGroupInput, MedicationUncheckedUpdateWithoutFamilyGroupInput>
  }

  export type MedicationUpdateManyWithWhereWithoutFamilyGroupInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutFamilyGroupInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: StringFilter<"Medication"> | string
    familyGroupId?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    instructions?: StringNullableFilter<"Medication"> | string | null
    remainingCount?: IntNullableFilter<"Medication"> | number | null
    remainingUpdatedAt?: DateTimeNullableFilter<"Medication"> | Date | string | null
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
  }

  export type NotificationEventUpsertWithWhereUniqueWithoutFamilyGroupInput = {
    where: NotificationEventWhereUniqueInput
    update: XOR<NotificationEventUpdateWithoutFamilyGroupInput, NotificationEventUncheckedUpdateWithoutFamilyGroupInput>
    create: XOR<NotificationEventCreateWithoutFamilyGroupInput, NotificationEventUncheckedCreateWithoutFamilyGroupInput>
  }

  export type NotificationEventUpdateWithWhereUniqueWithoutFamilyGroupInput = {
    where: NotificationEventWhereUniqueInput
    data: XOR<NotificationEventUpdateWithoutFamilyGroupInput, NotificationEventUncheckedUpdateWithoutFamilyGroupInput>
  }

  export type NotificationEventUpdateManyWithWhereWithoutFamilyGroupInput = {
    where: NotificationEventScalarWhereInput
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyWithoutFamilyGroupInput>
  }

  export type NotificationEventScalarWhereInput = {
    AND?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
    OR?: NotificationEventScalarWhereInput[]
    NOT?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
    id?: StringFilter<"NotificationEvent"> | string
    familyGroupId?: StringFilter<"NotificationEvent"> | string
    type?: EnumNotificationTypeFilter<"NotificationEvent"> | $Enums.NotificationType
    occurredAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    payloadJson?: JsonFilter<"NotificationEvent">
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
  }

  export type FamilyGroupCreateWithoutCaregiverDevicesInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    patientDevices?: PatientDeviceCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupUncheckedCreateWithoutCaregiverDevicesInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    patientDevices?: PatientDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeUncheckedCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationUncheckedCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventUncheckedCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupCreateOrConnectWithoutCaregiverDevicesInput = {
    where: FamilyGroupWhereUniqueInput
    create: XOR<FamilyGroupCreateWithoutCaregiverDevicesInput, FamilyGroupUncheckedCreateWithoutCaregiverDevicesInput>
  }

  export type FamilyGroupUpsertWithoutCaregiverDevicesInput = {
    update: XOR<FamilyGroupUpdateWithoutCaregiverDevicesInput, FamilyGroupUncheckedUpdateWithoutCaregiverDevicesInput>
    create: XOR<FamilyGroupCreateWithoutCaregiverDevicesInput, FamilyGroupUncheckedCreateWithoutCaregiverDevicesInput>
    where?: FamilyGroupWhereInput
  }

  export type FamilyGroupUpdateToOneWithWhereWithoutCaregiverDevicesInput = {
    where?: FamilyGroupWhereInput
    data: XOR<FamilyGroupUpdateWithoutCaregiverDevicesInput, FamilyGroupUncheckedUpdateWithoutCaregiverDevicesInput>
  }

  export type FamilyGroupUpdateWithoutCaregiverDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientDevices?: PatientDeviceUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupUncheckedUpdateWithoutCaregiverDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientDevices?: PatientDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUncheckedUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUncheckedUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupCreateWithoutPatientDevicesInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupUncheckedCreateWithoutPatientDevicesInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeUncheckedCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationUncheckedCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventUncheckedCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupCreateOrConnectWithoutPatientDevicesInput = {
    where: FamilyGroupWhereUniqueInput
    create: XOR<FamilyGroupCreateWithoutPatientDevicesInput, FamilyGroupUncheckedCreateWithoutPatientDevicesInput>
  }

  export type FamilyGroupUpsertWithoutPatientDevicesInput = {
    update: XOR<FamilyGroupUpdateWithoutPatientDevicesInput, FamilyGroupUncheckedUpdateWithoutPatientDevicesInput>
    create: XOR<FamilyGroupCreateWithoutPatientDevicesInput, FamilyGroupUncheckedCreateWithoutPatientDevicesInput>
    where?: FamilyGroupWhereInput
  }

  export type FamilyGroupUpdateToOneWithWhereWithoutPatientDevicesInput = {
    where?: FamilyGroupWhereInput
    data: XOR<FamilyGroupUpdateWithoutPatientDevicesInput, FamilyGroupUncheckedUpdateWithoutPatientDevicesInput>
  }

  export type FamilyGroupUpdateWithoutPatientDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupUncheckedUpdateWithoutPatientDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUncheckedUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUncheckedUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupCreateWithoutPairingCodesInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceCreateNestedManyWithoutFamilyGroupInput
    patientDevices?: PatientDeviceCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupUncheckedCreateWithoutPairingCodesInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    patientDevices?: PatientDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationUncheckedCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventUncheckedCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupCreateOrConnectWithoutPairingCodesInput = {
    where: FamilyGroupWhereUniqueInput
    create: XOR<FamilyGroupCreateWithoutPairingCodesInput, FamilyGroupUncheckedCreateWithoutPairingCodesInput>
  }

  export type FamilyGroupUpsertWithoutPairingCodesInput = {
    update: XOR<FamilyGroupUpdateWithoutPairingCodesInput, FamilyGroupUncheckedUpdateWithoutPairingCodesInput>
    create: XOR<FamilyGroupCreateWithoutPairingCodesInput, FamilyGroupUncheckedCreateWithoutPairingCodesInput>
    where?: FamilyGroupWhereInput
  }

  export type FamilyGroupUpdateToOneWithWhereWithoutPairingCodesInput = {
    where?: FamilyGroupWhereInput
    data: XOR<FamilyGroupUpdateWithoutPairingCodesInput, FamilyGroupUncheckedUpdateWithoutPairingCodesInput>
  }

  export type FamilyGroupUpdateWithoutPairingCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUpdateManyWithoutFamilyGroupNestedInput
    patientDevices?: PatientDeviceUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupUncheckedUpdateWithoutPairingCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    patientDevices?: PatientDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUncheckedUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupCreateWithoutMedicationsInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceCreateNestedManyWithoutFamilyGroupInput
    patientDevices?: PatientDeviceCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupUncheckedCreateWithoutMedicationsInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    patientDevices?: PatientDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeUncheckedCreateNestedManyWithoutFamilyGroupInput
    notifications?: NotificationEventUncheckedCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupCreateOrConnectWithoutMedicationsInput = {
    where: FamilyGroupWhereUniqueInput
    create: XOR<FamilyGroupCreateWithoutMedicationsInput, FamilyGroupUncheckedCreateWithoutMedicationsInput>
  }

  export type DoseScheduleCreateWithoutMedicationInput = {
    id?: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    doseEvents?: DoseEventCreateNestedManyWithoutScheduleInput
  }

  export type DoseScheduleUncheckedCreateWithoutMedicationInput = {
    id?: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    doseEvents?: DoseEventUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type DoseScheduleCreateOrConnectWithoutMedicationInput = {
    where: DoseScheduleWhereUniqueInput
    create: XOR<DoseScheduleCreateWithoutMedicationInput, DoseScheduleUncheckedCreateWithoutMedicationInput>
  }

  export type DoseScheduleCreateManyMedicationInputEnvelope = {
    data: DoseScheduleCreateManyMedicationInput | DoseScheduleCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type FamilyGroupUpsertWithoutMedicationsInput = {
    update: XOR<FamilyGroupUpdateWithoutMedicationsInput, FamilyGroupUncheckedUpdateWithoutMedicationsInput>
    create: XOR<FamilyGroupCreateWithoutMedicationsInput, FamilyGroupUncheckedCreateWithoutMedicationsInput>
    where?: FamilyGroupWhereInput
  }

  export type FamilyGroupUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: FamilyGroupWhereInput
    data: XOR<FamilyGroupUpdateWithoutMedicationsInput, FamilyGroupUncheckedUpdateWithoutMedicationsInput>
  }

  export type FamilyGroupUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUpdateManyWithoutFamilyGroupNestedInput
    patientDevices?: PatientDeviceUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    patientDevices?: PatientDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUncheckedUpdateManyWithoutFamilyGroupNestedInput
    notifications?: NotificationEventUncheckedUpdateManyWithoutFamilyGroupNestedInput
  }

  export type DoseScheduleUpsertWithWhereUniqueWithoutMedicationInput = {
    where: DoseScheduleWhereUniqueInput
    update: XOR<DoseScheduleUpdateWithoutMedicationInput, DoseScheduleUncheckedUpdateWithoutMedicationInput>
    create: XOR<DoseScheduleCreateWithoutMedicationInput, DoseScheduleUncheckedCreateWithoutMedicationInput>
  }

  export type DoseScheduleUpdateWithWhereUniqueWithoutMedicationInput = {
    where: DoseScheduleWhereUniqueInput
    data: XOR<DoseScheduleUpdateWithoutMedicationInput, DoseScheduleUncheckedUpdateWithoutMedicationInput>
  }

  export type DoseScheduleUpdateManyWithWhereWithoutMedicationInput = {
    where: DoseScheduleScalarWhereInput
    data: XOR<DoseScheduleUpdateManyMutationInput, DoseScheduleUncheckedUpdateManyWithoutMedicationInput>
  }

  export type DoseScheduleScalarWhereInput = {
    AND?: DoseScheduleScalarWhereInput | DoseScheduleScalarWhereInput[]
    OR?: DoseScheduleScalarWhereInput[]
    NOT?: DoseScheduleScalarWhereInput | DoseScheduleScalarWhereInput[]
    id?: StringFilter<"DoseSchedule"> | string
    medicationId?: StringFilter<"DoseSchedule"> | string
    timeOfDay?: StringFilter<"DoseSchedule"> | string
    daysOfWeekMask?: IntFilter<"DoseSchedule"> | number
    dosesPerTime?: IntFilter<"DoseSchedule"> | number
    createdAt?: DateTimeFilter<"DoseSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DoseSchedule"> | Date | string
  }

  export type MedicationCreateWithoutSchedulesInput = {
    id?: string
    name: string
    instructions?: string | null
    remainingCount?: number | null
    remainingUpdatedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    familyGroup: FamilyGroupCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateWithoutSchedulesInput = {
    id?: string
    familyGroupId: string
    name: string
    instructions?: string | null
    remainingCount?: number | null
    remainingUpdatedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationCreateOrConnectWithoutSchedulesInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
  }

  export type DoseEventCreateWithoutScheduleInput = {
    id?: string
    plannedAt: Date | string
    takenAt?: Date | string | null
    status?: $Enums.DoseStatus
    source?: $Enums.DoseSource | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoseEventUncheckedCreateWithoutScheduleInput = {
    id?: string
    plannedAt: Date | string
    takenAt?: Date | string | null
    status?: $Enums.DoseStatus
    source?: $Enums.DoseSource | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoseEventCreateOrConnectWithoutScheduleInput = {
    where: DoseEventWhereUniqueInput
    create: XOR<DoseEventCreateWithoutScheduleInput, DoseEventUncheckedCreateWithoutScheduleInput>
  }

  export type DoseEventCreateManyScheduleInputEnvelope = {
    data: DoseEventCreateManyScheduleInput | DoseEventCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithoutSchedulesInput = {
    update: XOR<MedicationUpdateWithoutSchedulesInput, MedicationUncheckedUpdateWithoutSchedulesInput>
    create: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutSchedulesInput, MedicationUncheckedUpdateWithoutSchedulesInput>
  }

  export type MedicationUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyGroup?: FamilyGroupUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseEventUpsertWithWhereUniqueWithoutScheduleInput = {
    where: DoseEventWhereUniqueInput
    update: XOR<DoseEventUpdateWithoutScheduleInput, DoseEventUncheckedUpdateWithoutScheduleInput>
    create: XOR<DoseEventCreateWithoutScheduleInput, DoseEventUncheckedCreateWithoutScheduleInput>
  }

  export type DoseEventUpdateWithWhereUniqueWithoutScheduleInput = {
    where: DoseEventWhereUniqueInput
    data: XOR<DoseEventUpdateWithoutScheduleInput, DoseEventUncheckedUpdateWithoutScheduleInput>
  }

  export type DoseEventUpdateManyWithWhereWithoutScheduleInput = {
    where: DoseEventScalarWhereInput
    data: XOR<DoseEventUpdateManyMutationInput, DoseEventUncheckedUpdateManyWithoutScheduleInput>
  }

  export type DoseEventScalarWhereInput = {
    AND?: DoseEventScalarWhereInput | DoseEventScalarWhereInput[]
    OR?: DoseEventScalarWhereInput[]
    NOT?: DoseEventScalarWhereInput | DoseEventScalarWhereInput[]
    id?: StringFilter<"DoseEvent"> | string
    scheduleId?: StringFilter<"DoseEvent"> | string
    plannedAt?: DateTimeFilter<"DoseEvent"> | Date | string
    takenAt?: DateTimeNullableFilter<"DoseEvent"> | Date | string | null
    status?: EnumDoseStatusFilter<"DoseEvent"> | $Enums.DoseStatus
    source?: EnumDoseSourceNullableFilter<"DoseEvent"> | $Enums.DoseSource | null
    createdAt?: DateTimeFilter<"DoseEvent"> | Date | string
    updatedAt?: DateTimeFilter<"DoseEvent"> | Date | string
  }

  export type DoseScheduleCreateWithoutDoseEventsInput = {
    id?: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutSchedulesInput
  }

  export type DoseScheduleUncheckedCreateWithoutDoseEventsInput = {
    id?: string
    medicationId: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoseScheduleCreateOrConnectWithoutDoseEventsInput = {
    where: DoseScheduleWhereUniqueInput
    create: XOR<DoseScheduleCreateWithoutDoseEventsInput, DoseScheduleUncheckedCreateWithoutDoseEventsInput>
  }

  export type DoseScheduleUpsertWithoutDoseEventsInput = {
    update: XOR<DoseScheduleUpdateWithoutDoseEventsInput, DoseScheduleUncheckedUpdateWithoutDoseEventsInput>
    create: XOR<DoseScheduleCreateWithoutDoseEventsInput, DoseScheduleUncheckedCreateWithoutDoseEventsInput>
    where?: DoseScheduleWhereInput
  }

  export type DoseScheduleUpdateToOneWithWhereWithoutDoseEventsInput = {
    where?: DoseScheduleWhereInput
    data: XOR<DoseScheduleUpdateWithoutDoseEventsInput, DoseScheduleUncheckedUpdateWithoutDoseEventsInput>
  }

  export type DoseScheduleUpdateWithoutDoseEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type DoseScheduleUncheckedUpdateWithoutDoseEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyGroupCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceCreateNestedManyWithoutFamilyGroupInput
    patientDevices?: PatientDeviceCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    caregiverDevices?: CaregiverDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    patientDevices?: PatientDeviceUncheckedCreateNestedManyWithoutFamilyGroupInput
    pairingCodes?: PairingCodeUncheckedCreateNestedManyWithoutFamilyGroupInput
    medications?: MedicationUncheckedCreateNestedManyWithoutFamilyGroupInput
  }

  export type FamilyGroupCreateOrConnectWithoutNotificationsInput = {
    where: FamilyGroupWhereUniqueInput
    create: XOR<FamilyGroupCreateWithoutNotificationsInput, FamilyGroupUncheckedCreateWithoutNotificationsInput>
  }

  export type FamilyGroupUpsertWithoutNotificationsInput = {
    update: XOR<FamilyGroupUpdateWithoutNotificationsInput, FamilyGroupUncheckedUpdateWithoutNotificationsInput>
    create: XOR<FamilyGroupCreateWithoutNotificationsInput, FamilyGroupUncheckedCreateWithoutNotificationsInput>
    where?: FamilyGroupWhereInput
  }

  export type FamilyGroupUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: FamilyGroupWhereInput
    data: XOR<FamilyGroupUpdateWithoutNotificationsInput, FamilyGroupUncheckedUpdateWithoutNotificationsInput>
  }

  export type FamilyGroupUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUpdateManyWithoutFamilyGroupNestedInput
    patientDevices?: PatientDeviceUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUpdateManyWithoutFamilyGroupNestedInput
  }

  export type FamilyGroupUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiverDevices?: CaregiverDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    patientDevices?: PatientDeviceUncheckedUpdateManyWithoutFamilyGroupNestedInput
    pairingCodes?: PairingCodeUncheckedUpdateManyWithoutFamilyGroupNestedInput
    medications?: MedicationUncheckedUpdateManyWithoutFamilyGroupNestedInput
  }

  export type CaregiverDeviceCreateManyFamilyGroupInput = {
    id?: string
    deviceToken: string
    label?: string | null
    createdAt?: Date | string
  }

  export type PatientDeviceCreateManyFamilyGroupInput = {
    id?: string
    deviceToken: string
    tz?: string
    label?: string | null
    createdAt?: Date | string
  }

  export type PairingCodeCreateManyFamilyGroupInput = {
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MedicationCreateManyFamilyGroupInput = {
    id?: string
    name: string
    instructions?: string | null
    remainingCount?: number | null
    remainingUpdatedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationEventCreateManyFamilyGroupInput = {
    id?: string
    type: $Enums.NotificationType
    occurredAt: Date | string
    payloadJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CaregiverDeviceUpdateWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaregiverDeviceUncheckedUpdateWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaregiverDeviceUncheckedUpdateManyWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientDeviceUpdateWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    tz?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientDeviceUncheckedUpdateWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    tz?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientDeviceUncheckedUpdateManyWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceToken?: StringFieldUpdateOperationsInput | string
    tz?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairingCodeUpdateWithoutFamilyGroupInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairingCodeUncheckedUpdateWithoutFamilyGroupInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairingCodeUncheckedUpdateManyWithoutFamilyGroupInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUpdateWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: DoseScheduleUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: DoseScheduleUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    remainingCount?: NullableIntFieldUpdateOperationsInput | number | null
    remainingUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventUpdateWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventUncheckedUpdateWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventUncheckedUpdateManyWithoutFamilyGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseScheduleCreateManyMedicationInput = {
    id?: string
    timeOfDay: string
    daysOfWeekMask: number
    dosesPerTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoseScheduleUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doseEvents?: DoseEventUpdateManyWithoutScheduleNestedInput
  }

  export type DoseScheduleUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doseEvents?: DoseEventUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type DoseScheduleUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeOfDay?: StringFieldUpdateOperationsInput | string
    daysOfWeekMask?: IntFieldUpdateOperationsInput | number
    dosesPerTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseEventCreateManyScheduleInput = {
    id?: string
    plannedAt: Date | string
    takenAt?: Date | string | null
    status?: $Enums.DoseStatus
    source?: $Enums.DoseSource | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoseEventUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    source?: NullableEnumDoseSourceFieldUpdateOperationsInput | $Enums.DoseSource | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseEventUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    source?: NullableEnumDoseSourceFieldUpdateOperationsInput | $Enums.DoseSource | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseEventUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    plannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    source?: NullableEnumDoseSourceFieldUpdateOperationsInput | $Enums.DoseSource | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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