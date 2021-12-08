import { HttpHeaders } from '@angular/common/http';
export class AppConstants {
  /**
   * Options
   */
  public static get httpOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/json;charset=utf-8'
      ),
    };
    return httpOptions;
  }

  /**
   * Serve
   */
  public static get baseServe(): string {
    return 'http://localhost:8080';
  }

  /**
   * Authenticate
   */
  public static get baseAuth(): string {
    return this.baseServe + '/auth';
  }

  /**
   * User
   */
  public static get baseUser(): string {
    return this.baseServe + '/user';
  }
  public static get baseUserSave(): string {
    return this.baseUser + '/save';
  }
  public static get baseUserHaveDomain(): string {
    return this.baseUser + '/have-domain';
  }
  public static baseUserFindById(id: number): string {
    return this.baseUser + '/' + id;
  }

  /**
   * Link
   */
  public static get baseLink(): string {
    return this.baseServe + '/link';
  }
  public static get baseLinkSave(): string {
    return this.baseLink + '/save';
  }
  public static get baseLinkUpdate(): string {
    return this.baseLink + '/update';
  }
  public static baseLinkDelete(id: number): string {
    return this.baseLink + '/' + id;
  }
  public static baseLinkFindById(id: number): string {
    return this.baseLink + '/' + id;
  }
  public static baseLinkFindAllByUserId(id: number): string {
    return this.baseLink + '/allByUserId/' + id;
  }
  public static baseLinkFindAllByDomain(domain: string): string {
    return this.baseLink + '/allByDomain/' + domain;
  }
  public static baseLinkPageSort(
    page: number,
    size: number,
    order: string
  ): string {
    // const page: number = 0;
    // const size: number = 4;
    // const order: string = "desc";

    return (
      this.baseLink +
      `?page=${page}&size=${size}&sort=id,${order}&sort=title,asc`
    );
  }
}
