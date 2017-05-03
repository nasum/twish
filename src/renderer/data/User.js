export default class User {
  constructor (user) {
    this.id = user.id_str;
    this.profile_image_url = user.profile_image_url;
    this.name = user.name;
    this.screen_name = user.screen_name;
  }
}
