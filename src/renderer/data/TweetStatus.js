export default class TweetStatus {
  constructor (status) {
    this.text = status.text;
    this.id = status.id_str;
    this.created_at = status.created_at;
    this.favorited = status.favorited;
    this.user = {
      id: status.user.id_str,
      profile_image_url: status.user.profile_image_url,
      name: status.user.name,
      screen_name: status.user.screen_name
    };
    this.entities = status.entities;
  }

  getMedia () {
    let media;
    if (this.entities.media) {
      media = this.entities.media.map((value) => {
        return {
          media_url: value.media_url,
          media_thumb: `${value.media_url}:thumb`
        };
      });
    }
    return media;
  }
}
