export default class TweetStatus {
  constructor (status) {
    this.text = status.text;
    this.id = status.id;
    this.created_at = status.created_at;
    this.user = {
      id: status.user.id,
      profile_image_url: status.user.profile_image_url,
      name: status.user.name,
      screen_name: status.user.screen_name
    };
  }
}
