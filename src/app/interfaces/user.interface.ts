
export class User {
  constructor(
  public firstName:string,
  public lastName:string,
  public userName:string,
  public email: string,
  public encryptedPassword?:string,
  ){}

}
