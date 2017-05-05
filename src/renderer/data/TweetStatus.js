import User from './User';

export default class TweetStatus {
  constructor (status) {
    this.text = status.text;
    this.id = status.id_str;
    this.created_at = status.created_at;
    this.favorited = status.favorited;
    this.user = status.user;
    this.entities = status.entities;
    this.retweeted_status = status.retweeted_status;
    this.retweet_user = status.retweet_user;
  }

  getUser () {
    return new User(this.user);
  }

  getRetweetUser () {
    let retweetUser;
    if (this.retweet_user) {
      retweetUser = new User(this.retweet_user);
    } else {
      retweetUser = {};
    }
    return retweetUser;
  }

  getMedia () {
    let media;
    if (this.entities.media) {
      media = this.entities.media.map((value) => {
        return {
          media_url: value.media_url,
          media_thumb: `${value.media_url}:thumb`,
          media_small: `${value.media_url}:small`,
          media_medium: `${value.media_url}:medium`
        };
      });
    }
    return media;
  }

  getRetweetStatus () {
    return this.retweeted_status;
  }
}
