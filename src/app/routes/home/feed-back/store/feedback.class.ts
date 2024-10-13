import { FeedBackEntityInterface } from "./feedBack.interface";

export class FeedBackEntity implements FeedBackEntityInterface {
  comment!: string;
  name!: string;
  rate!: number;
  designation!: string;
  img_profile!: string;
  constructor(
    {comment, designation, name, rate, img_profile}:{
    comment: string,
    name: string,
    rate: number,
    designation: string,
    img_profile: string
  }
  ) {
    this.comment = comment;
    this.designation = designation;
    this.name = name;
    this.rate = rate;
    this.checkImageExists(img_profile);
  }
  checkImageExists(img_profile: string) {
    const img = new Image();
    img.src = img_profile;

    // If image loads successfully
    img.onload = () => {
        return this.img_profile = img_profile;
    };

    // If image fails to load (404 or other error)
    img.onerror = () => {
      this.img_profile = '/assets/image/avatar.png';
      return;
    };
}
  get data() {
    return this;
  }
}
