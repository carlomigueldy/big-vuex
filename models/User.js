export class User {
  constructor({
    avatar = null,
    first_name = null,
    middle_name = null,
    last_name = null,
    email = null,
    phone_number = null,
    time_zone = null,
  } = {}) 
  {
    this.avatar = avatar
    this.first_name = first_name
    this.middle_name = middle_name
    this.last_name = last_name
    this.email = email
    this.phone_number = phone_number
    this.time_zone = time_zone
  }
}