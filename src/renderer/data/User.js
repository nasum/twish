export default class User {
  constructor (user) {
    this.id = user.id_str;
    this.profile_image_url = user.profile_image_url;
    this.profile_banner_url = user.profile_banner_url;
    this.name = user.name;
    this.screen_name = user.screen_name;
    this.url = user.url;
    this.following = user.following;
    this.description = user.description;
    this.statuses_count = user.statuses_count;
    this.favourites_count = user.favourites_count;
  }
}
