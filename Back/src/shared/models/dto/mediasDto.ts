export class MediaDto {
  public id: string;
  public magazine: string;
  public articleTitle: string;
  public url: string;
  public date: string;
}

export class CreateMediaDto {
  public magazine: string;
  public articleTitle: string;
  public url: string;
  public date: string;
}
