export interface IPasswordHasher {
  hash(plain: string): Promise<string>;
  check(hash: string, plain: string): Promise<boolean>;
}
