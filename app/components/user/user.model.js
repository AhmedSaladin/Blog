export default class User {
  constructor(
    id = null,
    first_name,
    last_name,
    email,
    password,
    avatar,
    birth_day
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.birth_day = birth_day;
  }
}
